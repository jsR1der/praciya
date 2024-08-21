import {Color} from "../../utils/types.ts";

export interface ButtonConfig {
    text: string;
    colorClass: Color;
    action: () => any;
    disabled?: boolean;
}