interface IBaseInputProps {
    className?: string;
    iconType?: string;
    errorText?: string;
    autoFocus?: boolean;
    autoSelect?: boolean;
    style?: object;
    maxLength?: number;
    disabled?: boolean;
    onChange?: (value: string, isChineseInputting: boolean) => void;
    onEnter?: () => void;
    onEsc?: () => void;
    [name: string]: any;
}
declare type IFieldInputProps = IBaseInputProps & {
    filedName: string;
};
export { IBaseInputProps, IFieldInputProps };
