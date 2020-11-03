import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Container } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';
import { moveTask, fetchTasksStart } from './actions';
import TrelloList from '../TrelloList';
import TrelloModal from '../TrelloModal';
import Spinner from './Spinner';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { isEmpty } from 'lodash';

const useStyles = makeStyles({
  link: {
    color: 'white',
    position: 'fixed',
    bottom: '10%',
    left: '50%',
    transform: 'translateX(-50%)'
  },
});

const ListContainer = ({
  lists,
  moveTask,
  isFetching,
  fetchTasks
}) => {
  const classes = useStyles();
  const keys = Object.keys(lists);

  useEffect(() => {
    if (isEmpty(keys)) {
      fetchTasks();
    }
  }, [fetchTasks]);

  const taskLists = keys.map((key) => {
    const list = lists[key];
    return (
      <TrelloList
        key={list.id}
        list={list}/>
    );
  });

  return (
    isFetching? <Spinner/> :
    <Container
      maxWidth="xl">
      <Grid 
        container
        style={{flexWrap:'nowrap'}}
        spacing={7} 
        alignItems="flex-start">
          <DragDropContext
            onDragEnd={moveTask}>
            {taskLists}
          </DragDropContext>
      </Grid>
      <TrelloModal />
      <Link className={classes.link} to="/about">Learn more about trello</Link>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  lists: state.board.lists,
  modal: state.modal,
  isFetching: state.board.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  moveTask: (moveResult) => dispatch(moveTask(moveResult)),
  fetchTasks: () => dispatch(fetchTasksStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
