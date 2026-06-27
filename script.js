

let input=document.getElementById("mai");
let adbtn=document.getElementById("add");
let addel=document.getElementById("del");
let adcom=document.getElementById("comb");
let panbtn=document.getElementById("pan");
let list=document.getElementById("listed");
let adcafi=document.getElementById("cafi");
let adfi=document.getElementById("fil");
let adedits=document.getElementById("edits");
let clean=document.getElementById("cleared");

let taks=JSON.parse(localStorage.getItem("taks"));

clean.addEventListener("click",function(){
   list.innerText="";
  taks.forEach(element => {
    if (element.taks) {
      taks.element="none";
      

      
    }
    
  });


})


adfi.addEventListener("click",function(){

  list.innerText="";
  taks.forEach(element => {
    if (element.taks="block") {
      li=document.createElement("li");
      li.innerText=element.text;
      list.appendChild(li);

      
    }
    
  });

});




adcafi.addEventListener("click",function(){
   list.innerText="";
  taks.forEach(element => {
    if (element.completed===true) {
      li=document.createElement("li");
      li.innerText=element.text;
      list.appendChild(li);

      
    }
  });
});




panbtn.addEventListener("click",function(){
  list.innerText="";
  taks.forEach(element => {
    if (element.completed===false) {
      li=document.createElement("li");
      li.innerText=element.text;
      list.appendChild(li);

      
    }
    
  });
  
});





let editElement;



////let taks=[];
adbtn.addEventListener("click",function(){

if (editElement) {
  
  console.log("If")
  editElement.textContent=input.value;
  editElement=null;
  input.valu="";
  return;
  
} else {
  input.value==="";
  console.log("Else")
  
}

//taks=JSON.parse(localStorage.getItem("taks"));
  console.log(input.value);
  if (input.value==="") {
    
  
  };
  

  taks.push({
    text:input.value,completed:false});
  console.log(taks)
  //localStorage.setItem("taks",JSON.stringify(taks));
localStorage.setItem("taks",JSON.stringify(taks));


let li=document.createElement("li");
li.innerText=input.value;

addel=document.createElement("button");
addel.innerText="delete";

adedits=document.createElement("button");
adedits.innerText="Edits";



adcom=document.createElement("button");
adcom.innerText="complete";
//li.classList.add="panding";





  list.appendChild(li);
  li.appendChild(addel);
  li.appendChild(adcom);
  li.appendChild(adedits);




//adedits.addEventListener("click",(e)=>{
  
  
//let taks= e.target.parentElement;
///input.value=taks.firstChild.textContent;
//editElement=taks.firstChild;e









  addel.addEventListener("click",function(){
    li.remove();
    });
    
    









    let currenttext=taks.length-1;


    adcom.addEventListener("click",function(){
            
      taks [currenttext].completed=!taks[currenttext].completed;
      localStorage.setItem("taks",JSON.stringify(taks));
      if (taks[currenttext].completed) {
        li.style.textDecoration="line-through";
        
      } else {
        li.style.textDecoration="none";
        
      }
    
      
    });

    adedits.addEventListener("click",(e)=>{
  
  
let taks= e.target.parentElement;
input.value=taks.firstChild.textContent;
editElement=taks.firstChild;

  });
});














//let task=JSON.parse(localStorage.getItem("task"));
//console.log(task)


///adbtn.addEventListener("click",function(){

  //console.log(input.value);
  ///if (input.value==="") {
    ///return;
//};
//task.push(input.value)
//localStorage.setItem("task");
//JSON.stringify(task);


///});






















//clean.addEventListener("click",function(){
    //console.log("oil");

  //  let tasks=document.querySelectorAll("li");
    //for(let i=0; i<tasks.length; i++){
      //  tasks[i].style.display="none";
        

   // }
    
//});


//let editElement=null;




//let editElement=null;


//adfilter.addEventListener("click",function(){

  //  let task=document.querySelectorAll("li");
    //for(let i=0; i<task.length; i++){
      //  task[i].style.display="block";
    
            
            
        //}
    //}
//);



//adcomfil.addEventListener("click",function(){

  //  let task=document.querySelectorAll("li");
    //for(let i=0; i<task.length;i++){
      //  console.log(task[i].className)
       // if (task[i].classList.contains("complete-filter")) {
         //   task[i].style.display="block"
        //} else {
          //  task[i].style.display="none";
            
       // }
   // }
//})

//panbtn.addEventListener("click",function(){

  //  let task=document.querySelectorAll("li")
    //for(let i=0; i<task.length;i++){
      // console.log(task[i].className)
        //if (task[i].classList.contains("panding")) {
          //  task[i].style.display="none"
        //} else {
          ///  task[i].style.display="list-item";

            
      //  };

    //};
//});





//adbtn.addEventListener("click",function(){
    
        
//if (editElement) {
  ///  editElement.textContent=input.value;
    //editElement=null;
    //input.value=""; 
    //return;   
//} else {
  //  input.value==="";
    
//}


     //let li=document.createElement("li");
    //li.innerText= input.value;
     // tasks.push({
      //  text:input.value,
       // completed:false
      //});
     // savedata();
      //render();
  //addel=document.createElement("button");
   /// addel.innerText="delete"
    ///savedata();


    //adcom=document.createElement("button");
    //adcom.innerText="Complete";
    //savedata();

    //adedits=document.createElement("button");
   /// adedits.innerText="Edit";
    ///savedata();




    //list.appendChild(li);
    
    //li.appendChild(addel);
    
    //li.appendChild(adcom);
    
    //li.appendChild(adedits);
    
    //function savedata(params) {
      //  localStorage . setItem("tasks",JSON.stringify(tasks));

    //}
    //input.value="";
    

    //addel.addEventListener("click",function(){
      //  li.remove();
        //savedata();
    //})
//adcom.addEventListener("click",function(){
//savedata();
  //  li.style.textDecoration="line-through";
    //li.classList.add("panding");
    //li.classList.add("complete-filter");
    
    
//});

//adedits.addEventListener("click",(e)=>{
  //  savedata();
    //let taskLi= e.target.parentElement;
    ///input.value=taskLi.firstChild.textContent;
    ///editElement=taskLi.firstChild ;//innerText;
    
    
   

//});


//});


//if (localStorage.getItem("data")) {
  //  list.innerHTML=localStorage.getItem("data");
//} else {
  //  list.innerHTML="";
//}



//function iura(params) {
//return new Promise((resolve, reject) => {
  //  setTimeout(() => {
   //     console.log("kilas");
     //   resolve("sucses");
    //}, 3000);
//})
    
//};

//(async function oil(params) {
 //   await iura();
    
//}());

//let pol=iura();
//pol.then((res)=>{
  //  console.log(res)
    //pol=iura();
    //pol.then((res)=>{
      //  console.log(res);
    //})
//});
