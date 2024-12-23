import { useFormContext } from "react-hook-form";
import {DynamicFieldData} from "../../../interfaces/dynamicControl.ts";
import {ChangeEvent} from "react";

export const DynamicControl = (
    {inputType, fieldName, defaultValue, options = [], config = {}}: DynamicFieldData) => {
    const { register,setValue } = useFormContext();

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(fieldName, event.target.checked);
    };

    switch (inputType) {
        case "text":
            return (
                <input type="text"{...register(fieldName, config)} defaultValue={defaultValue}/>
            );
        case "select": {
            return (
                <select {...register(fieldName, config)} defaultValue={defaultValue} name={fieldName}
                    id={fieldName}
                >
                    {options.map((o, index) => (
                        <option key={index} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
            );
        }
        case "number":
            return (
                <input type="number"{...register(fieldName, config)} defaultValue={defaultValue}
                />
            );
        case "checkbox":
            return (
                <input type="checkbox"{...register(fieldName, config)}
                       onChange={handleCheckboxChange}
                />
            );
        default:
            return <input type="text" />;
    }
};
