import React, { useState } from "react";
import { Link } from "react-router-dom";

const TodoPage = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit,setEdit] = useState(false);
  const [editIdex,setEditIndex] = useState(null);

  const addNote = () => {

    if(edit){
      let list = [...todos];
      list[editIdex] = value;
      setTodos(list);
      setEdit(false);
      setEditIndex(null);
      setValue("");
    }else{
      todos.push(value);
      setValue("");
    }

  };

  const inputValueChange = (event) => {
    setValue(event.target.value);
  };

  const deleteTodo = (index) => {
    // method 1 for delete
    todos.splice(index, 1);
    setTodos([...todos]);

    // method 2 for delete
    // const newTodos = todos.filter((todo,i)=>{
    //   if(i !== index){
    //     return true
    //   }
    // });
    
    // const newTodos = todos.filter((todo, i) => i !== index);
    // setTodos(newTodos);
  };

  const editTodo = (index) => {
    const editableValue = todos[index]
    setValue(editableValue)
    setEdit(true)
    setEditIndex(index)
  }



  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        {/* form  */}

        <div className="w-80 bg-slate-600 flex">
          <input
            className="text-black flex-1 p-3"
            type="text"
            placeholder="write a note"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            // onChange={inputValueChange}
          />
          <button onClick={addNote} className="p-3">
            {edit ? 'Edit' : 'Add'}
          </button>
        </div>
        {/* list */}
        <div className="w-80 h-[450px] bg-slate-500 overflow-scroll">
          {todos.map((item, index) => {
            return (
              <div
                className="text-black p-3 flex justify-between bg-gray-400 mb-1"
                key={index}>
                <div>
                  <span>{index + 1}</span> - <span>{item}</span>{" "}
                </div>
                <div className="flex gap-1">
                  <button 
                  onClick={()=>{editTodo(index)}}
                  >Edit</button>
                  <button
                    onClick={() => {
                      deleteTodo(index);
                    }}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
