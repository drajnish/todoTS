export const saveTodo = (todos: TodoItemType[]): void => {
  localStorage.setItem('mytodos', JSON.stringify(todos));
};

export const getTodo = (): TodoItemType[] => {
  const todos = localStorage.getItem('mytodos');
  return todos ? JSON.parse(todos) : [];
};
