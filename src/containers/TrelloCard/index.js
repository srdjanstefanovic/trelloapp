import React from 'react';
import { connect } from 'react-redux'
import { toggleModal } from '../TrelloModal/actions';
import { removeTask } from '../TrelloBoard/actions';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { 
  Card,
  Grid,
  CardActions,
  CardContent,
  Button,
  Typography 
} from '@material-ui/core'

const TaskCard = ({
  task,
  listId,
  innerRef,
  provided,
  toggleModal,
  removeTask
}) => {
  
  return (
  <Grid
    ref={innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    item>
    <Card>

      <CardContent>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom>
          {task.title}
        </Typography>

        <Typography
          variant="body2"
          component="p">
          {task.desc}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          onClick={() => toggleModal(task.id, listId)}
          startIcon={<EditIcon/>}
          size="small"
          color="primary">
          Edit
        </Button>

        <Button
          variant="contained"
          onClick={() => removeTask(task.id, listId)}
          startIcon={<DeleteIcon/>}
          size="small"
          color="secondary">
          Delete
        </Button>
      </CardActions>

    </Card>
  </Grid>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (taskId, listId) => dispatch(toggleModal(taskId, listId)),
  removeTask: (taskId, listId) => dispatch(removeTask(taskId, listId))
})

export default connect(null,mapDispatchToProps)(TaskCard);
