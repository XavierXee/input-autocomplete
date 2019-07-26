export interface SearchBarProps {
    searchString: string;
    errorMessage: string;
    lastSearch: string;
    autoCompletionData: any[];
    currentHighLightedEntry: number|null;
    hideAutoCompletionData: boolean;
}
