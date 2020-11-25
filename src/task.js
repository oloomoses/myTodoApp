const tasks = [
  {
  "Title": "one",
  "Description": "This is the first proj under project1",
  "date": "today",
  "priority": "low"
  },

  {
    "Title": "two",
    "Description": "This is the first proj under project1",
    "date": "today",
    "priority": "low"
  },

  {
    "Title": "three",
    "Description": "This is the first proj under project1",
    "date": "today",
    "priority": "low"
  } 

]

const showTask = () => {  
  tasks.forEach(task => addTask(task))

}

const addTask = (task) => {
  const content = document.querySelector('#task-list');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><input type = 'checkbox' /></td>
    <td>${ task.Title }</td>
    <td>${ task.date }</td>
    <td>${ task.priority }</td>
    <td><a href = "#" class = "btn btn-danger btn-sm delete">X</></td>    
  `
  content.appendChild(row);
}

export { showTask as default }