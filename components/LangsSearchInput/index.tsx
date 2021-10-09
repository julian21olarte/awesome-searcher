import React, { useEffect } from 'react';
import SearchInput from 'components/SearchInput';
import { useSearch } from 'hooks/useSearch';
import { RequestDataType } from 'types';

const LangsSearchInput = (props: any = {}) => {
    const { data, load, setQuery, loading } = useSearch('', RequestDataType.Langs);
    useEffect(() => { load() }, [])
    const getOptionlabel = (option: any) => option.name || '';
    const onQueryChange = (event: any, newQuery: string) => setQuery(newQuery)
    const getOptionSelected = (option: any, value: any) => option.name || '' === value.name || '';
    return (
        <SearchInput
            label='Search a programming language'
            options={data}
            loading={loading}
            color={'#5BC5FF'}
            onChangeInput={onQueryChange}
            getOptionLabel={getOptionlabel}
            getOptionSelected={getOptionSelected}
            helperText='Java, Javascript, Go, Python, etc'
            {...props}
        />
    )
};

export default LangsSearchInput;
