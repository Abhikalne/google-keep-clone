import { useEffect } from "react"

const useHandleClickOutside=(ref,handler)=>{
    
    useEffect(()=>{
        const handleClick=(e)=>{
            if(!ref.current.contains(e.target)){
                handler()
            }
        }
    document.addEventListener('mousedown',handleClick)
    return ()=>document.removeEventListener('mousedown',handleClick)
},[ref,handler])
}

export default useHandleClickOutside;