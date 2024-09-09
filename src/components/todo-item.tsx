import { Delete } from '@mui/icons-material';
import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType['id']) => void;
  deleteHandler: (id: TodoItemType['id']) => void;
  editHandler: (
    id: TodoItemType['id'],
    newTitle: TodoItemType['title']
  ) => void;
};

const TodoItem = ({
  todo,
  completeHandler,
  deleteHandler,
  editHandler,
}: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<TodoItemType['title']>(
    todo.title
  );

  return (
    <Paper
      sx={{
        padding: '1rem',
      }}
    >
      <Stack direction={'row'} alignItems={'center'}>
        {editActive ? (
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && editedText !== '') {
                editHandler(todo.id, editedText);
                setEditActive(false);
              }
            }}
          />
        ) : (
          <Typography sx={{ marginRight: 'auto' }}>{todo.title}</Typography>
        )}

        <Checkbox
          checked={todo.isCompleted}
          onChange={() => completeHandler(todo.id)}
        />
        <Button sx={{ opacity: 0.5, color: 'black' }}>
          <Delete onClick={() => deleteHandler(todo.id)} />
        </Button>
        {editActive ? (
          <Button
            sx={{ fontWeight: '600' }}
            onClick={() => {
              if (editedText !== '') {
                editHandler(todo.id, editedText);
                setEditActive(false);
              }
            }}
          >
            Done
          </Button>
        ) : (
          <Button
            sx={{ fontWeight: '600' }}
            onClick={() => setEditActive((prev) => !prev)}
          >
            Edit
          </Button>
        )}
      </Stack>
    </Paper>
  );
};

export default TodoItem;
