import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    color: 'white',
    fontWeight: 500,
  }
  
});

const Header = () => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.header}
      variant="h1"
      align="center"
      gutterBottom
      component="h1">
      Trello App
    </Typography>
  )
}

export default Header;