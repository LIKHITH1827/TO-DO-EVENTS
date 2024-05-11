/*const todoList=[{
  name:'dinner',
  duedate:'2024-05-23'
},{
  name: 'lunch',
  duedate:'2025-02-29'
}];*/

//console.log(todoList);
const todoList=[];

if(todoList.length===0){
  rendertodoList();
}



function rendertodoList(){
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

//console.log(
  //todolisthtml
//);

document.querySelector('.display-items').innerHTML=todolisthtml;
}



function additemsjs(){
 const ipvalueElement= document.querySelector('.inputvalue');
 const name=ipvalueElement.value;

 const dateELement= document.querySelector('.ipdatejsClass');

 //console.log(dateELement);
 const duedate=dateELement.value;
 //console.log(duedate);
 if(!name==='' && !duedate===''){
 todoList.push({name,duedate});
 console.log(todoList);
 //document.querySelector('.display-items').innerHTML=todoarray;
 //console.log(todoarray);
 ipvalueElement.value='';
 dateELement.value='';
 rendertodoList();
}
else{
  alert('Please enter todo name and select due date to ADD to the ToDolist');
}
}

