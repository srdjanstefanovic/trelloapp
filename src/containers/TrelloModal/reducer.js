import { actionTypes, INITIAL_STATE } from "./constants";
import { produce } from 'immer';

const { TOGGLE_MODAL } = actionTypes;

const taskModalReducer = (state = INITIAL_STATE, {type, payload}) => 
  produce(state, draft => {
    switch (type) {
      case TOGGLE_MODAL:
        draft.open = !state.open;
        draft.taskId = payload.taskId;
        draft.listId = payload.listId;
        break

      default:
        break;
    }
  });

export default taskModalReducer;