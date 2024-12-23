import {DynamicFieldData} from "../../interfaces/dynamicControl.ts";

export const fields: DynamicFieldData[] = [
    {
        fieldName: "login",
        inputType: "text",
        label: "Login",
        defaultValue: "",
        config: {
            required: "Required"
        }
    },
    {
        fieldName: "password",
        inputType: "text",
        label: "password",
        defaultValue: "",
        config: {
            required: "Required",
            minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
            }
        }
    },
    {
        fieldName: "name",
        inputType: "text",
        label: "Name",
        defaultValue: "",
        config: {
            required: "Required"
        }
    },
    {
        fieldName: "age",
        inputType: "number",
        label: "Age",
        defaultValue: 18,
        config: {
            required: "Required",
            validate: (value) => value >= 18 || "Still a minor"
        }
    },
    {
        fieldName: "language",
        inputType: "select",
        label: "Language",
        options: [
            { value: 'eng', label: 'English'},
            { value: 'ukr', label: 'Ukraine'}
        ],
        defaultValue: "english"
    },
    {
        fieldName: "confirmSubmitting",
        inputType: "checkbox",
        label: "Confirm submitting",
        defaultValue: false,
        config:{
            required: "Required",
        }
    }
];
