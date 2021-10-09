export interface SearchInputProps {
    style?: any;
    classes?: any;
    label?: string;
    color?: string;
    options: any[];
    loading?: boolean;
    helperText?: string,
    getOptionLabel: (option: any) => string;
    onChange?: (event: any, newValue: any) => void;
    onChangeInput?: (event: any, newValue: any) => void;
    getOptionSelected: (option: any, value: any) => boolean;
}

export interface ISearchData {
    readonly name: string;
    readonly year?: number;
}

export interface IResponse {
    readonly data?: ISearchData[];
}

export enum RequestDataType {
    Langs = 'langs',
    Frameworks = 'frameworks',
    Superheros = 'superheros',
}