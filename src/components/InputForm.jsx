import React from "react";
import { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {
  const[inputText, setInputtext] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  // add task
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false
      }
    ]);
    setInputtext("");
  }

  const handleChange = (e) => {
    setInputtext(e.target.value);
    console.log(inputText);
  }



  return(
    <div className="Form">
      <div className="inputForm">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={inputText}/>
           <button>
              <i class="fa-solid fa-square-plus"></i>
            </button>
          </form>
     </div>
    </div>
  )
}
