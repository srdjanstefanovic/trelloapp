import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    color: 'white',
    fontWeight: 500,
    margin: '30px'
  }
  
});

const Header = () => {
  const classes = useStyles();

  return (
    <Typography
      className={classes.header}
      variant="h2"
      align="center"
      gutterBottom
      >
      Trello App
    </Typography>
  )
}

export default Header;