import styles from './Settings.module.scss';
import {useAuth0} from "@auth0/auth0-react";
import {Navigate, useLocation} from "react-router-dom";
import {
    useCompanyQuery,
    useCreateCompanyMutation,
    useEditCompanyMutation
} from "../../services/api/companies/company.query.ts";
import {useCompanyForm} from "./Settings.service.ts";
import {SubmitHandler, UseFormRegisterReturn} from "react-hook-form";
import {CompanyModel, UserToCompanyAdapter} from "../../models/company.model.ts";
import {UserModel} from "../../models/user.model.ts";
import {Suspense, useEffect} from "react";
import Jobs from "../../components/jobs/Jobs.tsx";

export const Settings = () => {
    const {state: user} = useLocation()
    const {data: company, error, isFetching, refetch} = useCompanyQuery(user?.email);
    const {isAuthenticated, isLoading} = useAuth0();
    const createMutation = useCreateCompanyMutation();
    const editMutation = useEditCompanyMutation();
    const {
        register,
        handleSubmit,
        setValue,
        errors,
        reset
    } = useCompanyForm(company ? company : new UserToCompanyAdapter(user as UserModel).company);

    useEffect(() => {
        reset(company ? company : new UserToCompanyAdapter(user as UserModel).company)
    }, [company])
    const inputs: Record<string,
        UseFormRegisterReturn> = {
        name: {
            ...register('name', {
                required: true,
            })
        },
        phone: {
            ...register('phone', {
                required: true,
            })
        },
        email: {
            ...register('email', {
                required: true,
            })
        },
        picture: {
            ...register('picture', {
                required: true,
            })
        },
        linkedIn: {
            ...register('linkedIn', {
                required: false,
            })
        },
        dou: {
            ...register('dou', {
                required: true,
            })
        },
    }
    // !todo find out how to replace this with some thing better

    const createCompany = () => {
        // mutation.mutate()
    }


    const submit: SubmitHandler<Partial<CompanyModel>> = (data: Partial<CompanyModel>) => {
        if (data?.id && data.id >= 0) {
            editMutation.mutate(data);
        } else {
            createMutation.mutate(data)
        }
    }

    const getTemplate = () => {
        if (isFetching || isLoading) {
            return <div>wait...</div>;
        }
        if (!isAuthenticated) {
            return <Navigate to="/"></Navigate>
        }
        return <>
            <form className={styles["form-section"] + " flex flex-col d-gap form-section"}
                  onSubmit={handleSubmit(submit)}>
                <h1>{company ? "Company" : "Create Company"}</h1>
                <input {...inputs.name} placeholder={"Name"} className={"border-4"}/>
                <input {...inputs.phone} placeholder={"Phone"} className={"border-4"}/>
                <input {...inputs.email} placeholder={"Email"} className={"border-4"}/>
                <input {...inputs.picture} placeholder={"Picture"} className={"border-4"}/>
                <input {...inputs.linkedIn} placeholder={"LinkedIn"} className={"border-4"}/>
                <input {...inputs.dou} placeholder={"Dou"} className={"border-4"}/>
                <button type={"submit"} className={"border-4"}>Submit</button>
            </form>
            <Suspense fallback={<div>loading...</div>}>
                <Jobs companyId={company!.id}></Jobs>
            </Suspense>
        </>
    }
    return getTemplate();
}