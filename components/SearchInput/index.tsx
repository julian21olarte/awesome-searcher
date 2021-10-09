import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core';
import { SearchInputProps } from 'types';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#666666',
    borderRadius: 30,
    padding: '5px 15px',
  },
  inputRoot: {
    color: "#FEFEFE",
    border: 'none',
    fontWeight: 'bold'
  },
  helper: {
    fontSize: 10,
    color: 'grey',
    marginLeft: 15
  },
  container: {
    width: '80%',
    maxWidth: 600
  }
}));

const SearchInput = ({
  label,
  color,
  options,
  loading,
  classes,
  style = {},
  helperText,
  onChange,
  onChangeInput,
  getOptionLabel,
  getOptionSelected,
}: SearchInputProps) => {
  const defaultClasses = useStyles();
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');


  const onChangeValue = (event: any, newValue: any) => {
    setValue(newValue);
    if (onChange) {
      onChange(event, newValue)
    }
  }
  const onChangeInputValue = (event: any, newValue: string) => {
    setInputValue(newValue);
    if (onChangeInput) {
      onChangeInput(event, newValue)
    }
  }

  const getAutocompleteClasses = () => {
    const { root, inputRoot } = (classes || defaultClasses);
    return { root, inputRoot };
  }

  return (
    <div className={classes?.container || defaultClasses.container}>
      <Autocomplete
        id="awesome-searcher-input"
        value={value}
        options={options}
        inputValue={inputValue}
        onChange={onChangeValue}
        loading={loading || false}
        getOptionLabel={getOptionLabel}
        classes={getAutocompleteClasses()}
        onInputChange={onChangeInputValue}
        getOptionSelected={getOptionSelected}
        style={{ backgroundColor: color, ...style }}
        renderInput={(params) => <TextField {...params} InputProps={{ ...params.InputProps, disableUnderline: true }} placeholder={label} />}
      />
      {helperText ? <p className={classes?.helper || defaultClasses.helper}>{helperText}</p> : ''}
    </div>
  )
};

export default SearchInput;
