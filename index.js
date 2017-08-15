const todos = mobx.observable(
  [
    {title: "Spoil tea", completed: true},
    {title: "Make coffee", completed: false}
  ]
);

const addTodo = (text) => {
  todos.push({title: text, completed: false});
};

const removeTodo = (index) => {
  todos.splice(index, 1);
};

const toggleTodo = (index) => {
  todos[index].completed = !todos[index].completed;
};

const toggleAll = mobx.action(() => {
   todos.map((todo,index) => toggleTodo(index));
});

const getTodosNumTotal = mobx.computed(() => {
  return todos.length;
});

const getTodosCompletedNum = mobx.computed(() => {
  return todos.filter(todo => todo.completed).length;
});

const getAllTodos = mobx.computed(() => {
  return todos.map(todo => ({title: todo.title, completed: todo.completed}));
});

mobx.autorun(() => {
  console.log("Todos:", getAllTodos.get());
});

mobx.autorun(() => {
  console.log("Total Number: ", getTodosNumTotal.get());
});

mobx.autorun(() => {
  console.log("Completed Number: ", getTodosCompletedNum.get());
});
