import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { DynamicFieldData } from "../../interfaces/dynamicControl.ts";
import { DynamicControl } from "./controls/DynamicControl.tsx";

interface FormProps {
    fields: DynamicFieldData[];
}

export const TestForm = ({ fields }: FormProps) => {
    const formMethods = useForm();
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
    } = formMethods;

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <form style={{display:"flex",flexDirection:"column", maxWidth:'400px', gap:"20px",border:'1px solid black', padding:'20px'}} onSubmit={handleSubmit(onSubmit)}>
            <FormProvider {...formMethods}>
                {fields.map((field, index) => (
                    <div key={index}>
                        <label htmlFor={field.fieldName}>{field.label}</label>
                        <DynamicControl {...field} />
                        {errors[field.fieldName] && (
                            <span style={{ color: "red" }}>
                                {errors[field.fieldName]?.message as string}
                            </span>
                        )}
                    </div>
                ))}
            </FormProvider>
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    );
};
