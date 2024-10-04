import {useForm} from "react-hook-form";
import {CompanyModel} from "../../models/company.model.ts";

const initialValues: Partial<CompanyModel> = {
    name: '',
    phone: '',
    email: '',
    picture: '',
    linkedIn: '',
    dou: '',
    jobs: []
}


export const useCompanyForm = (defaultValues: Partial<CompanyModel> = initialValues) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
        reset
    } = useForm<CompanyModel>({
        reValidateMode: 'onChange',
        criteriaMode: 'all',
        mode: 'onChange',
        shouldFocusError: false,
        defaultValues
    })
    return {
        register,
        handleSubmit,
        setValue,
        errors,
        reset
    }
}