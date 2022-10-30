"use strict"
let string = "";
let inputEl = document.querySelector("input");
let keys = document.querySelectorAll("td");

keys.forEach((td)=>{
    td.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            inputEl.value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "0";
            inputEl.value = string;
        }
        else if(e.target.innerHTML == "DELETE"){
            string = inputEl.value.slice(0, inputEl.value.length-1);
            inputEl.value = string;
        }
        else{
            if(string === "0"){
            string = string.replace(/^0+/, "")
            string = string + e.target.innerHTML;
            inputEl.value = string;
             }
            else{
            string = string + e.target.innerHTML;
            inputEl.value = string;}
        }
    })
})
