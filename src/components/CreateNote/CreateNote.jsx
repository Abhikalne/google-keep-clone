import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { DataContext } from "../../Context/DataProvider";

import "./_createNote.css";
import {  MdColorLens, MdOutlineLibraryAddCheck } from "react-icons/md";
import ChooseColor from "./ChooseColor";
import useHandleClickOutside from "../../hooks/useHandleClickOutside";

function CreateNote() {
  const { addNote } = useContext(DataContext);
  const [isExpanded, setExpanded] = useState(false);
  const textbox_ref = useRef();
  const [note, setNote] = useState({
    title: "",
    content: ""
    // list:[],
  });
  const [listItem, setListItem] = useState([]);
  const [enableCheckbox, setEnableCheckbox] = useState(false);
  const [showPicker,setShowPicker]=useState(false)
  const [selectedColor,setSelectedColor]=useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((preValue) => {
      return { ...preValue, [name]: value };
    });
  };
  const handleExpanded = () => {
    setExpanded(true);
  };

  const addButton = (e) => {
    e.preventDefault();

    if (note.title || note.content ) {
      addNote({...note,selectedColor},[...listItem]);
      setNote({
        title: "",
        content: ""
        // list: [],
      });
      setListItem([{value:'',status:false}])
    }
    
  };
  

  const addCheckbox = (e) => {
    e.preventDefault();
    
      setListItem([{value:'',status:false}])
    
    setEnableCheckbox(!enableCheckbox);
    setNote({...note,content:''})
    
  };

  const handleListItem=(e,ind)=>{
   const newList=[...listItem]
    newList[ind].value=e.target.value  
    setListItem([...newList])
  }

  useEffect(()=>{
  let newItem=listItem.filter(ele=>ele.value!=='');
  // setNote((prev)=>({...prev,list:[...newItem]}))
    listItem.length===0 && setEnableCheckbox(false)

},[listItem])
  
  const handleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addListElement(index);
    }
    if (e.key === "Backspace" && e.target.value === "") {
      e.preventDefault();
      setListItem(listItem.filter((ele, ind) => ind !== index));
    
    }
  };

  const addListElement = (index) => {
    const newField = [...listItem];
    newField.splice(index + 1, 0, {value:'',status:false});
    setListItem([...newField]);
  };

  const handleCheckBox=(index)=>{
    const newList=[...listItem]
    newList[index].status=!newList[index].status
    setListItem([...newList])
  }
  
  const togglePicker=(e)=>{
    e.preventDefault();
    if(!showPicker) {setShowPicker(!showPicker)}
  }
  console.log(showPicker)
  const eventHadler=()=>{
    setExpanded(false)
    setEnableCheckbox(false)
  }
  useHandleClickOutside(textbox_ref, eventHadler)

  return (
    <div>
      <form ref={textbox_ref} style={{backgroundColor:selectedColor}}>
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            className="input_style"
          />
        )}
        <p>
          {enableCheckbox ? (
            listItem.map((ele, index) => (
              <li key={index} className="list_item">
                <input type="checkbox" name="status" checked={ele.status}  onChange={()=>handleCheckBox(index)}/>
                <input
                  type="text"
                  placeholder="List item"
                  value={ele.value}
                  name="value"
                  onChange={(e)=>handleListItem(e,index)}
                  onKeyDown={(e) => handleKeyPress(e, index)}
                  className={`${ele.status? "task_done input_style":"input_style"}`}
                />
              </li>
            ))
          ) : (
            <textarea
              value={note.content}
              onClick={handleExpanded}
              name="content"
              placeholder="Take a note..."
              onChange={handleChange}
              rows={isExpanded ? 3 : 1}
            ></textarea>
          )}
        </p>
        <div className="add_btn">
        {isExpanded && <>
        
        <button onClick={togglePicker} className="btn_style">
          <MdColorLens size={35} />
        </button>
        <button onClick={addCheckbox} className="btn_style">
          <MdOutlineLibraryAddCheck size={35} />
        </button></>}
        <button onClick={addButton} className="btn_style">
          <IoIosAdd size={35} />
        </button>
        </div>
        {showPicker && <ChooseColor setSelectedColor={setSelectedColor} setShowPicker={setShowPicker}/>}
      </form>
    </div>
  );
}

export default CreateNote;
