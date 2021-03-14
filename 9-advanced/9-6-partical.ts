{
  type Todo ={
    title: string;
    description:string;
    label: string;
    priority: 'high' | 'middle' | 'low';
  };

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>):Todo{
    return{...todo, ...fieldsToUpdate};
  }
  const todo :Todo ={
    title: 'Learn typescript',
    description: 'study hard',
    label:'study',
    priority: 'high',
  }
  console.log(todo);
  const updatetodo =updateTodo(todo, {label: 'grammar study', priority: 'low'});
  console.log(updatetodo);
  
}