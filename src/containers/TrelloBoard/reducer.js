import { actionTypes, INITIAL_STATE } from './constants';
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

const {
  FETCH_TASKS_START,
  FETCH_TASKS_SUCCESS,
  REMOVE_TASK,
  MOVE_TASK,
  ADD_TASK,
  UPDATE_TASK
} = actionTypes;

const trelloBoardReducer = (state = INITIAL_STATE, {type, payload}) =>
  produce(state, draft => {
    switch (type) {

      case FETCH_TASKS_START:
        draft.isFetching = true;
        break;

      case FETCH_TASKS_SUCCESS:
        draft.lists = payload.lists;
        draft.tasks = payload.tasks;
        draft.isFetching = false;
        break;

      case REMOVE_TASK:
        const { listId, taskId } = payload;
        delete draft.tasks[taskId];
        draft.lists[listId].taskIds = draft.lists[listId].taskIds
          .filter((id) => id != taskId);
        break;
  
      case MOVE_TASK:
        const { moveResult: { destination, source, draggableId} } = payload;

        if (!destination) {
          break;
        } else if (source.droppableId === destination.droppableId && 
            destination.index === source.index) {
            break;
        } else if (source.droppableId === destination.droppableId) {
            const taskIds = draft.lists[source.droppableId].taskIds;
            taskIds.splice(source.index, 1);
            taskIds.splice(destination.index, 0, draggableId);
        } else {
          const sourceList = draft.lists[source.droppableId];
          const destinationList = draft.lists[destination.droppableId];                        
          sourceList.taskIds.splice(source.index, 1);
          destinationList.taskIds.splice(destination.index, 0, draggableId);
        }
        break;
        
      case ADD_TASK:
        const newTask = payload.task;
        newTask.id = uuidv4();
        draft.tasks[newTask.id] = newTask;
        draft.lists[payload.listId].taskIds.push(newTask.id);
        break;
      
      case UPDATE_TASK:
        const task  = payload.task;
        draft.tasks[task.id] = task;
        break;

      default:
          break;
      }
  });
  
export default trelloBoardReducer;