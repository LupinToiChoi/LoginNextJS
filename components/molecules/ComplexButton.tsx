import { Label, LabelProps } from "../atoms/Label";
import { Button, ButtonProps } from "../atoms/Button";
interface ComplexButtonProps {
    labelProps: LabelProps;
    buttonProps: ButtonProps;
}
export function ComplexButton({ labelProps, buttonProps }: ComplexButtonProps) {
    return (
        <div className="flex flex-col space-y-2">
            <Button {...buttonProps} />
            <Label {...labelProps} />

        </div>
    );
}