import { Label, LabelProps } from "./Label";
import { Button, ButtonProps } from "./Button";
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