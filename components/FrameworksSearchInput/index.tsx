import React, { useEffect } from 'react';
import SearchInput from 'components/SearchInput';
import { useSearch } from 'hooks/useSearch';
import { RequestDataType } from 'types';

const FrameworksSearchInput = (props: any = {}) => {
    const { data, load, setQuery, loading } = useSearch('', RequestDataType.Frameworks);
    useEffect(() => { load() }, [])
    const getOptionlabel = (option: any) => option.name || '';
    const onQueryChange = (event: any, newQuery: string) => setQuery(newQuery)
    const getOptionSelected = (option: any, value: any) => option.name || '' === value.name || '';
    return (
        <SearchInput
            label='Search a framework'
            options={data}
            loading={loading}
            color={'#897FFF'}
            onChangeInput={onQueryChange}
            getOptionLabel={getOptionlabel}
            getOptionSelected={getOptionSelected}
            helperText='Angular, React, Laravel, etc'
            {...props}
        />
    )
};

export default FrameworksSearchInput;
