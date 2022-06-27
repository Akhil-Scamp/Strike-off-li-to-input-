import "./App.css"
import React, { useEffect } from 'react'

const App = () => {
  const NZP = ["Trent","Daz","Tom","Kane"];
   useEffect(()=>{
    return () => handleToggle();
  },[])
  
  const handleToggle = () => {
    console.log("qwer")
    const list = document.querySelectorAll("li");
    for (let pic of list){
      const input = document.createElement('input');
      pic.addEventListener("click", ()=>{
        
        input.setAttribute('type', "text");
        pic.replaceWith(input);
        input.focus();
        let make = " "
        input.setAttribute('value',pic.textContent);
        input.onchange = function (event){
          console.log(event.target.value);
          make = event.target.value
          input.setAttribute('value',make);
        }
        input.addEventListener('blur', () => {
          const li = document.createElement("li")
          li.innerHTML = make;
          input.replaceWith(li)
          });
        }); 
      }
  }
  return (
    <div>
      <ul>
        {
          NZP.map((x)=>(<li key = {x} className= "listItem">{x}</li>))
        }
      </ul>
    </div>
  )
}

export default App