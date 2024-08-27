export interface InputConfig {
    name: string;
    value: string;
    errorMsg: string | null,
    pattern: string,
    onChange: (...arg: any[]) => any;
    onBlur?: (...arg: any[]) => any;
    placeholder: string;
    type?: string;
    hint?: string;
}