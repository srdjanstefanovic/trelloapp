import React from 'react'
import { Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    color: 'white',
    fontWeight: 500,
    margin: '30px',
  },
  video: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px'
  }
});

const About = () => {
  const classes = useStyles();

  return (
  <>
    <Typography
      className={classes.header}
      variant="h2"
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
      Trello is a web-based Kanban-style list-making application which is a subsidiary of Atlassian.
      Originally created by Fog Creek Software in 2011, it was spun out to form the basis of a separate company in 2014 and later sold to Atlassian in January 2017.
      The company is based in New York City, U.S.
      The name Trello is derived from the word "trellis" which had been a code name for the project at its early stages. Trello was released at a TechCrunch event by Fog Creek founder Joel Spolsky. 
      Wired magazine named the application in September 2011 one of "The 7 Coolest Startups You Haven't Heard of Yet".
      Lifehacker said "it makes project collaboration simple and kind of enjoyable".
      In 2014, it raised $10.3 million in funding from Index Ventures and Spark Capital. 
      In May 2016, Trello claimed it had more than 1.1 million daily active users and 14 million total signups. 
      On January 9, 2017, Atlassian announced its intent to acquire Trello for $425 million. 
      The transaction was made with $360 million in cash, while the remaining $65 million was made with shares and options. 
      Trello sold 22% of its shares to other investors with the remaining majority held by founders Michael Pryor and Joel Spolsky at the time of acquisition.
      In December 2018, Trello announced its acquisition of Butler, the company that developed a Power-Up for automating tasks within a Trello board.
      As of March 2019, Trello was adopted by over 35 million users. Shortly after, in October 2019, Trello announced 50 million users.
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