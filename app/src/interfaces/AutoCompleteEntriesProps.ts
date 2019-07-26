import {AutoCompletionEntry} from "./AutoCompletionEntry";

export interface AutoCompleteEntriesProps {
    autoCompletionData: AutoCompletionEntry[];
    lastSearch: string;
    onClick(event: any): void;
}