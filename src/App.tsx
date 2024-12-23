import { fields } from "./constants/formFields/data.ts";
import { TestForm} from "./components/Form";

export default function App() {
    return (
        <div style={{ width: "100%",display:"flex", alignItems: "center",flexDirection:'column' }}>
            <h1>Dynamic form</h1>
            <TestForm fields={fields} />
        </div>
    );
}