import {AutoCompletionEntry} from "./AutoCompletionEntry";

export interface AutoCompleteEntriesProps {
    autoCompletionData: AutoCompletionEntry[];
    searchString: string;
    lastSearch: string;
    onClick(event: any): void;
}