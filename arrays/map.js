let tasks = [
    { "name": "Learn Angular",
      "votes": [3,4,5,3]
    },
    { "name": "Learn React",
      "votes": [4,4,5,3]
    },
 ];


 let taskTitles = tasks.map((task) => {
     return {
         name: task.name
     }
 });

 let taskTitles = tasks.map((task, index, origArray) => {
    return {
      name: task.name
    }
 });

 console.log(taskTitles);
