import {useLocation, useParams} from 'react-router-dom';
import Upload from "../../components/upload/Upload.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import {TextareaAutosize} from "@mui/material";
import {ApplicationModel} from "../../models/application.model.ts";
import {hasSubmitted, submitApplication} from "../../services/api/application/application.service.ts";
// import {useAsyncErrorBoundary} from "../errors/asyncErrorBoundary/UseAsyncErrorBoundary.ts";

export const Details = () => {
    const [form, setForm] = useState<ApplicationModel>({cv: null, letter: ''})
    const [canSubmit, setCanSubmit] = useState<boolean>(true)
    useEffect(() => {
        hasSubmitted().then(res => setCanSubmit(res.data)).catch(console.log)
    }, [])
    const {id} = useParams();
    const {state: job} = useLocation();
    const sendApplication = () => {
        if (form.cv && form.letter.length) {
            submitApplication(form).then(() => setCanSubmit(false)).catch(console.log)
        }
    }

    const onUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        setForm({...form, cv: target.files![0]})
    }

    const onCoverLetterChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setForm({...form, letter: event.target.value})
    }
    return <div className={"abt-center"}>
        <div>{job.companyName}</div>
        <div>{job.jobTitle}</div>
        <div>{job.description}</div>
        <div>Salary: {job.fork}</div>
        <div>Views: {job.views}</div>
        <div>Applications {job.applications_sent}</div>
        <div>create date {job.created_at}</div>
        <TextareaAutosize onChange={onCoverLetterChange}></TextareaAutosize>
        <Upload onChange={onUploadChange}></Upload>
        {canSubmit ?
            <button onClick={sendApplication}>Apply to
                possition button
            </button>
            :
            <div>You already sent an application</div>
        }
    </div>
};
