import { Label, LabelProps } from "../atoms/Label"
import { Input, InputProps } from "../atoms/Input"
interface ComplexInputProps {
    labelProps: LabelProps;
    inputProps: InputProps;
}
export function ComplexInput({ labelProps, inputProps }: ComplexInputProps) {
    return (
        <div className="mb-4">
            <Label {...labelProps} />
            <Input {...inputProps} />
        </div>
    );
}
