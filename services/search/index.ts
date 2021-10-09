import langs from './languages.json'
import frameworks from './frameworks.json'
import superheros from './superheros.json'
import { IResponse, RequestDataType } from 'types';

const getDataSource = (type: RequestDataType): IResponse => {
  return { langs, frameworks, superheros }[type]
}

// simulate API request with delay (500ms) searching and filtering by query
export const getSearch = (query: string = '', type: RequestDataType) => new Promise<IResponse>(
  done => setTimeout(
    () => done({
      data: !query
        ? []
        : getDataSource(type).data?.filter(v => v.name.toLowerCase().includes(query.toLocaleLowerCase()))
    }),
    500)
)