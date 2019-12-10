import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardComponent from './cardComponent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

  export default function DecisionComponent({title, info, important, nimptext, imptext}) {
    const classes = useStyles();
  
    return (
      <div>
        <CardComponent title={title} info={info} />
        <Button variant="contained" className={classes.button} onClick={() => {important(false)}}>
          {nimptext}
        </Button>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => {important(true)}}>
          {imptext}
        </Button>
      </div>
    );
  }