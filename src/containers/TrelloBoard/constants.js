export const actionTypes = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    MOVE_TASK: 'MOVE_TASK',
    FETCH_TASKS_START: 'FETCH_TASKS_START',
    FETCH_TASKS_SUCCESS: 'FETCH_TASKS_SUCCESS',
    FETCH_TASKS_FAILURE: 'FETCH_TASKS_FAILURE'
  };
  
  export const INITIAL_STATE = {
    tasks: {},
    lists: {},
    isFetching: false
  }