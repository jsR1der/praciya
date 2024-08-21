import {Color} from "../../utils/types.ts";

export interface ButtonConfig {
    text: string;
    colorClass: Color;
    action?: (...params: any[]) => any;
    type?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
}