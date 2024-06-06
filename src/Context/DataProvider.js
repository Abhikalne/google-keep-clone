import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
const [listele,setListEle]=useState([])
  const addNote = (newNote,list) => {
    let listItem=[...listele,[...list]]
    
    setListEle((prev)=>[...prev,[...list]])
    setNotes((prevNote) => [...prevNote, newNote]);
  };
console.log(listele)
  const deleteNotes = (id) => {
    setNotes((preValue) => [...preValue.filter((note, index) => index !== id)]);
  };

  return <DataContext.Provider value={{ notes, addNote, setNotes,deleteNotes,listele }}>{children}</DataContext.Provider>;
};


export default DataProvider;