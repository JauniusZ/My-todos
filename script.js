const fetchResult = fetch("data.json");

const todos = {
  list: [],
};

function getTodos(data) {
  const jsonPromise = data.json();
  function getTodosArray(todosArray) {
    todos.list = todosArray;
    console.log(todos.list);
  }
  jsonPromise.then(getTodosArray);
}

fetchResult.then(getTodos);

