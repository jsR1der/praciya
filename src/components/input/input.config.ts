export interface InputConfig {
    name: string;
    value: string;
    onChange: (...arg: any[]) => any;
    placeholder: string;
    type?: string;
    hint?: string;
    error?: string
}