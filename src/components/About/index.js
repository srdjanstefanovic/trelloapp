import React from 'react'
import { Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    color: 'white',
    fontWeight: 500,
  },
  video: {
    display: 'flex',
    justifyContent: 'center'
  }
});

const About = () => {
  const classes = useStyles();

  return (
  <>
    <Typography
      className={classes.header}
      variant="h1"
      align="center"
      gutterBottom
      component="h1">
      About trello
    </Typography>
    <Typography
      className={classes.header}
      variant="h6"
      align="center"
      gutterBottom>
      Trello is a web-based Kanban-style list-making application which is a subsidiary of Atlassian.[6] Originally created by Fog Creek Software in 2011, it was spun out to form the basis of a separate company in 2014[7][8] and later sold to Atlassian in January 2017.[9] The company is based in New York City, U.S.[10
    </Typography>
    <div className={classes.video}>
      <iframe
        title="trello video"
        width="1045"
        height="653"
        src="https://www.youtube.com/embed/xky48zyL9iA"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe> 
    </div>
  </>
  );
}

export default About;