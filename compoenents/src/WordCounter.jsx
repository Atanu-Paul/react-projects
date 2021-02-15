import {React,useState,useEffect} from 'react'


const WordCount =(props)=>{
    const [wordCount,setWordCount]=useState(null)

    const handleKeyPress=(event)=>{
        setWordCount(event.target.value)
    }
    let wordCount=0
    return (
        <div>
            <textarea></textarea>
            <label>Count is :</label>
        </div>
    )
}