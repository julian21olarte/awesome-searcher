import React, { useEffect } from 'react';
import SearchInput from 'components/SearchInput';
import { useSearch } from 'hooks/useSearch';
import { RequestDataType } from 'types';

const SuperherosSearchInput = (props: any = {}) => {
    const { data, load, setQuery, loading } = useSearch('', RequestDataType.Superheros);
    useEffect(() => { load() }, [])
    const getOptionlabel = (option: any) => option.name || '';
    const onQueryChange = (event: any, newQuery: string) => setQuery(newQuery)
    const getOptionSelected = (option: any, value: any) => option.name || '' === value.name || '';
    return (
        <SearchInput
            label='Search a superhero'
            options={data}
            loading={loading}
            color={'#B13D56'}
            onChangeInput={onQueryChange}
            getOptionLabel={getOptionlabel}
            getOptionSelected={getOptionSelected}
            helperText='Batman, Superman, Black Panther, Thor, etc'
            {...props}
        />
    )
};

export default SuperherosSearchInput;
