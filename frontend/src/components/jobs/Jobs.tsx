import './Jobs.scss';
import Job from "../job/Job.tsx";
import Preloader from "../preloader/Preloader.tsx";
import {useJobsQuery} from "../../services/api/jobs/jobs.query.ts";
import {ChangeEvent, useState} from "react";
import {Pagination, Stack} from "@mui/material";
import {PaginationPayload} from "../../models/pagination.model.ts";

const initialJobsPagination: PaginationPayload = {limit: 6, page: 1};

function Jobs() {
    const [state, setState] = useState(initialJobsPagination)
    const {data, error, isFetching} = useJobsQuery(state);

    const changePage = (page: number) => {
        setState({...state, page})
    }

    const paginationChange = (event: ChangeEvent<unknown>, page: number) => {
        event.preventDefault();
        changePage(page)
    }

    const getTemplate = () => {
        if (isFetching) {
            return <Preloader size={70}></Preloader>
        }
        if (error) {
            return <div>{error.message}</div>
        }

        if (!data?.items?.length) {
            return <div>For some reasons there is no jobs, contact support</div>
        }

        return <>
            <h1>Existing Jobs</h1>
            <div className="card-grid-list w-full">
                {data.items.map(job => (<Job key={job.id} job={job}></Job>))}
            </div>
            <Stack spacing={2}>
                <Pagination onChange={paginationChange}
                            page={data.page}
                            count={data.pageCount}/>
            </Stack>
        </>
    }


    return <section className="user-section relative">
        {getTemplate()}
    </section>
}

export default Jobs;