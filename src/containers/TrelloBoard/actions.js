import { actionTypes } from './constants';

const {
  REMOVE_TASK,
  ADD_TASK,
  MOVE_TASK,
  UPDATE_TASK,
  FETCH_TASKS_START,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
} = actionTypes;

export const removeTask = (taskId, listId) => ({
  type: REMOVE_TASK,
  payload: {
    taskId,
    listId
  }
});

export const addTask = (task, listId) => ({
  type: ADD_TASK,
  payload: {
    task,
    listId
  }
});

export const moveTask = (moveResult) => ({
  type: MOVE_TASK,
  payload: {
    moveResult
  },
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: {
    task
  }
})

export const fetchTasksStart = () => ({
  type: FETCH_TASKS_START
})

export const fetchTasksSuccess = data => ({
  type: FETCH_TASKS_SUCCESS,
  payload: data
});

export const fetchTasksFailure = errorMessage => ({
  type: FETCH_TASKS_FAILURE,
  payload: errorMessage
});
