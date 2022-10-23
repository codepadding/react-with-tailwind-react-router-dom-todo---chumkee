import React, { useState } from "react";
import { Link } from "react-router-dom";

const TodoPage = () => {



  const [value,setValue] = useState("");
  
  const [todos,setTodos] = useState([]);


  const addNote = () => {
    todos.push(value);
  }

  const inputValueChange = (event) => {
    setValue(event.target.value);
  }


  
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        {/* form  */}
        <h1>{value}</h1>        
        <div className="w-80 bg-slate-600 flex">
          <input
            className="text-black flex-1 p-3"
            type="text"
            placeholder="write a note"
            defaultValue={value}
            onChange={inputValueChange}
          />
          <button onClick={addNote} className="p-3">Add</button>
        </div>
        {/* list */}
        <div className="w-80 h-[450px] bg-slate-500">

          {
            todos.map((item,index)=>{
              return <div key={index}>{item}</div>
            })
          }

        </div>
      </div>
    </div>
  );
};

export default TodoPage;
