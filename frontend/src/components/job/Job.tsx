import './Job.scss';
import {JobModel} from "../../models/jobModel.ts";
import {useNavigate} from "react-router-dom";

function Job(props: { job: JobModel }) {
    const navigate = useNavigate();
    const showDetails = () => {
        navigate(`jobs/${props.job.id}`, {state: props.job})
    }
    return <div className="grid grid-cols-1 card-grid w-full">
        {/*<Image url={props.user.photo}></Image>*/}
        <p style={{color: 'red',cursor: 'pointer'}} className="truncate w-full text-center name" onClick={showDetails}>{props.job.jobTitle}</p>

        <div className="flex flex-col w-full gap-[5px]">
            <p className="truncate w-full text-center title">{props.job.fork}</p>
            <p className="truncate w-full text-center email">{props.job.description}</p>
            <p className="truncate w-full text-center phone">{props.job.created_at}</p>
        </div>
    </div>
}

export default Job;