import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const addNote = (newNote,selectedColor,listItem) => {
    
    setNotes((prevNote) => [...prevNote,{...newNote,selectedColor,listItem}]);
  };

  const deleteNotes = (id) => {
    setNotes((preValue) => [...preValue.filter((note, index) => index !== id)]);
  };

  const updateNote=(noteId,itemId)=>{  
    setNotes(notes.map((note,ind)=>ind===noteId ? {
      ...note,
      listItem:note.listItem.map((item,id)=>
        id===itemId ?{...item,status:!item.status}:item
      ).sort((a,b)=>a.status-b.status)
    }:note))    
  }
  
  return <DataContext.Provider value={{ notes, addNote, setNotes,deleteNotes,updateNote }}>{children}</DataContext.Provider>;
};


export default DataProvider;