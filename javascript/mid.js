let todo  = [
  {
    do1:"Take the DOG outside for walk",
    do2:"",
    do3: "?",
    number: 0,
    picture: "javascript/img/todo.jpg"
  },
  {
    do1:"Go to the Mall",
    do2:"",
    do3: "?",
    number: 1,
    picture: "javascript/img/todo.jpg"
  },
  {
    do1:"GYM TIME",
    do2:"",
    do3: "?",
    number: 2,
    picture: "javascript/img/todo.jpg"
  },
  {
    do1:"CAR TANK",
    do2:"",
    do3: "?",
    number: 3,
    picture: "javascript/img/todo.jpg"
  },
  {
    do1:"Dinner with ...",
    do2:"",
    do3: "?",
    number: 1,
    picture: "javascript/img/todo.jpg"
  },
  {
    do1:"Order Pick up",
    do2:" dont forget the groceries",
    do3: "?",
    number: 1,
    picture: "javascript/img/todo.jpg"
  },
  {
    do1:"Reservation of vacation",
    do2:"",
    do3: "?",
    number: 1,
    picture: "javascript/img/todo.jpg"
  },
  {
    do1:"Music Festival",
    do2:"",
    do3: "?",
    number: 1,
    picture: "javascript/img/todo.jpg"
  },
  {
    do1:"Film Festival with Friends",
    do2:"",
    do3: "?",
    number: 1,
    picture: "javascript/img/todo.jpg"
  }
];

for (let user of todo) {
  document.getElementById("results").innerHTML += `


<div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style="width: 18rem; ">
 

  <img src="${user.picture}" class="card-img-top" alt="...">
  
  <div class="card-body mb-2 ">
    <h5 class="card-title">${user.do1},${user.do2}</h5>
    <hr>     
    
    <button class="p-2 mb-2 bg-danger text-white rounded-pill  btn1">Delete</button>   
    <button class="p-2 mb-2 bg-success text-white rounded-pill ">Done</button>   
    <a class="btn btn-primary bg-info btnReset" id="btnRess">Reset</a>
     <h5>Priority level:</h5>  
     <a class="btn btn-primary  incBtn" id="incb">${user.number}</a> 
        
        <div>Chose Date</div>
       
        <input type="date">
      </div>
      <hr>  
  </div>
</div>
<br><br><br>
  `
}

let incBtns = document.getElementsByClassName("incBtn");


for (let i in Array.from(incBtns)){
  incBtns[i].addEventListener("click", function()  {
    if (todo[i].number >= 5) {
      todo[i].number = 5} else {
        todo[i].number++ ;
      }

     document.getElementsByClassName("incBtn")[i].innerHTML = todo[i].number;

    
  

    
   });
 }

 let incBtnsId = document.getElementById("incb");


for (let i in Array.from(incBtns)){
  incBtns[i].addEventListener("click", function()  {
    console.log(incBtns[i]);
    if (todo[i].number < 3) {
     incBtns[i].style.backgroundColor = 'green';
    }
    else if(todo[i].number > 2 && todo[i].number < 5){
      incBtns[i].style.backgroundColor = 'yellow';
    }
    else {
      incBtns[i].style.backgroundColor = 'red';
    }

    
  

    
   });
 }

 ;

 document.getElementById("sort").addEventListener("click",function(){
   todo.sort((a, b) => a.number - b.number)
   document.getElementById("results").innerHTML = ""
   for(let val of todo) {
    document.getElementById("results").innerHTML +=
    `
  <div class="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" style="width: 18rem; ">
   
    <img src="${val.picture}" class="card-img-top" alt="...">
    
    <div class="card-body mb-2 ">
      <h5 class="card-title">${val.do1},${val.do2}</h5>
      <hr>     
      
      <button class="p-2 mb-2 bg-danger text-white rounded-pill  btn1">Delete</button>   
      <button class="p-2 mb-2 bg-success text-white rounded-pill ">Done</button>   
      <a class="btn btn-primary bg-info btnReset" id="btnRess">Reset</a>
       <h5>Priority level:</h5>  
       <a class="btn btn-primary  incBtn" id="incb">${val.number}</a> 
          
          <div>Chose Date</div>
         
          <input type="date">
        </div>
        <hr>  
    </div>
  </div>
  <br><br><br>
    `
}
 })


let resetBtn = document.getElementsByClassName("btnRess");
      
for (let i in Array.from(resetBtn)){
  resetBtn[i].addEventListener("click", function()  {
    todo[i].number =0;
    
     document.getElementsByClassName("incBtn")[i].innerHTML = 0;
  

    //  document.getElementById("incb").style.backgroundColor = "#ffffff"
     console.log(todo[i].number)
   });
  
  
 }


