import React from 'react';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import functions from '../utils/functions';
import { css } from '@emotion/css'

const CustomInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: 'sans-serif',
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1),
    },
    result: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  }),
);

type Query =
  "getNumberOfWordsStartingWith" |
  "getNumberOfLettersInDictionary" |
  "getNumberOfWordsEndWithLetter" |
  "getWordsWithSameLetter";
export default function CustomizedSelects() {


  const classes = useStyles();
  const [query, setQuery] = React.useState<Query>('getNumberOfWordsStartingWith');
  const [letter, setLetter] = React.useState<string>('');
  const [result, setResult] = React.useState<string>('');

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuery(event.target.value as Query);

  };
  const handleChangeInput = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLetter(event.target.value as string);
  };

  const onClick = () => {
    const res: number = functions[query](letter);
    setResult(res.toString())
  }

  return (
    <div className={css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    `}>
      <FormControl className={classes.margin}>
        <CustomInput id="demo-customized-textbox"
          value={letter}
          onChange={handleChangeInput}
          placeholder="Type letter..."
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <NativeSelect
          id="demo-customized-select-native"
          value={query}
          onChange={handleChangeSelect}
          input={<CustomInput />}
        >
          <option value={'getNumberOfWordsStartingWith'}>How many words start with the letter</option>
          <option value={'getNumberOfLettersInDictionary'}>How many times does the letter appear in the dictionary</option>
          <option value={'getNumberOfWordsEndWithLetter'}>How many words end with the letter</option>
          <option value={'getWordsWithSameLetter'}>How many words have the same letter repeated in conjunction?</option>
        </NativeSelect>
      </FormControl>
      <button className={css`
      padding: 8px;
      background-color: #6997ff;
      color: #fff;
      font-size: 20px;
      border-radius: 4px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: .2s ease;
      outline: none;
      &:hover {
        background-color: #fff;
        color:  #6997ff;
        border: 1px solid #6997ff;
      }
    `}
        onClick={onClick}
      >
        Test
      </button>
      <h1 className={css`
      position: absolute;
      // width: 100%;
      display: flex;
      justify-content: center;
      color:  #6997ff;
      z-index: 0;
      margin: 100px auto 0 auto;
      width: 100%;
      `}>{result}</h1>
    </div>
  );
}
