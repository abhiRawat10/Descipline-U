const inputBox=document.getElementById("input-box");
const btn=document.getElementById("btn");

const addtask=()=>{
    if(inputBox.value===''){
        alert('you must write something');
    }
    else{
        let li =document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
        savedata();
    }
    inputBox.value='';
}


btn.addEventListener("click",addtask);



const listContainer=document.getElementById("list-container");

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    savedata();
})

const savedata=()=>{
    localStorage.setItem("data",listContainer.innerHTML);
}


const start=()=>{
    listContainer.innerHTML=localStorage.getItem("data");
}

start();
