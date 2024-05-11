/*const todoList=[{
  name:'dinner',
  duedate:'2024-05-23'
},{
  name: 'lunch',
  duedate:'2025-02-29'
}];*/

const todoList=[];

rendertodoList();

//function to render the items
function rendertodoList(){
  //console.log("render");
  let todolisthtml='';
for(let i=0;i<todoList.length;i++){
  const todoobject=todoList[i];
  const {name,duedate}=todoobject;
  const html=`
  
  <div>${name}</div>
  <div>${duedate}</div>
  <button class="delete-css" onClick="
  todoList.splice(${i},1);
  rendertodoList();
  ">
  DELETE
  </button>
  `;
todolisthtml+=html;
}
document.querySelector('.display-items').innerHTML=todolisthtml;
}

//function to add items to the list
function additemsjs(){
  
 const ipvalueElement= document.querySelector('.inputvalue');
 const name=ipvalueElement.value;
 const dateELement= document.querySelector('.ipdatejsClass');
 const duedate=dateELement.value;
 
 if(name!=='' && duedate!==''){
 todoList.push({name,duedate});
// console.log(todoList);
 ipvalueElement.value='';
 dateELement.value='';
 rendertodoList();
}
else if(name==='' || duedate===''){
  alert('Please enter todo name and select due date to ADD to the ToDolist');
  ipvalueElement.value='';
 dateELement.value='';
  rendertodoList();
}
}

