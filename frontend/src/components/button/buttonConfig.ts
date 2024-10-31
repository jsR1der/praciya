import {ReactElement} from "react";

export type ButtonComponent = (props: ButtonConfig) => ReactElement

export interface ButtonConfig {
    text: string;
    classes: Record<string, string>
    action?: (...params: unknown[]) => unknown;
    type?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
}