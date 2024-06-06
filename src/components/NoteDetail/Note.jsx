import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import "./_note.css";
import { DataContext } from "../../Context/DataProvider";

const Note = ({ title, content, onDelete, id, list }) => {
const {updateNote}=useContext(DataContext)
  const handleChecked=(index)=>{
    updateNote(id,index)
    
  }
  
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>
        {list?.map((ele, ind) => (
          <li
            key={ind}
            className={`${
              ele.status ? "task_done list_style" : "list_style"
            }`}
          >
            <input type="checkbox" checked={ele.status} onChange={()=>handleChecked(ind)}/>{ele.value}
          </li>
        ))}
      </p>
      <div className="note_footer">
        <button onClick={() => onDelete(id)}>
          <MdDelete size={25} />
        </button>
      </div>
    </div>
  );
};

export default Note;
