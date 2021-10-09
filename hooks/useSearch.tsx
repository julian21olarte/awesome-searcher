import { useState } from 'react';
import { getSearch } from 'services/search';
import { debounce } from 'lodash';
import { RequestDataType } from 'types';

export const useSearch = (query: string = '', type: RequestDataType = RequestDataType.Langs) => {
    const [error, setError] = useState();
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [queryValue, setQueryValue] = useState(query);

    const load = async (q?: string) => {
        setLoading(true);
        try {
            const response = await getSearch(q || queryValue, type);
            setData(response?.data);
        } catch (err) {
            setError(error);
        }
        setLoading(false);
    };

    const setQuery = debounce((newQuery: string) => {
        setQueryValue(newQuery);
        load(newQuery);
    }, 500)

    return { data, load, setQuery, error, loading };
};
