import React, { useState } from 'react';
import { Primarybtt } from './button';

export default function Input_add(){
    const [value,setValue] = useState('')
    const [notes,setNotes] = useState([]);
    let previ = JSON.parse(localStorage.getItem('notes'))
    if(previ){if(previ.length > 0 && notes.length ===0){setNotes(previ)}}
    const addnote = (e) => {
        e.preventDefault();
        if(value.trim()){

            localStorage.setItem('notes',
            previ?
            JSON.stringify(previ.concat([{value: value.trim(),
                id: notes.length+value.trim().substr(0,1),
                key: notes.length+value.trim().substr(0,1)+Math.floor(Math.random() * 10),
                time: new Date().toLocaleString()
            }]))
            :
            JSON.stringify([{value: value.trim(),
                id: notes.length+value.trim().substr(0,1),
                key: notes.length+value.trim().substr(0,1)+Math.floor(Math.random() * 10),
                time: new Date().toLocaleString()
            }])
            )
            setNotes(prev => (
                [...previ,
                    {value: value.trim(),
                        id: notes.length+value.trim().substr(0,1),
                        key: notes.length+value.trim().substr(0,1),
                        time: new Date().toLocaleString()
                    }
                ]
            ))
        }
        setValue('')
        console.log(notes)
    }
    
    const removenote = (e) => {
        setNotes(prev => (
            notes.filter(item => item.id !== e.target.parentElement.id) 
            ))
            localStorage.setItem('notes',
            JSON.stringify(previ.filter(item => item.id !== e.target.parentElement.id)))
    }

    const handlli = (e) => {
        if(e.target.parentElement.tagName !== 'UL'){
            e.target.parentElement.classList.add('line-through')
        }
    }

    return(
        <>
        <strong>You can add youre note here(this will be saved in localStorage). And delete it when it's done</strong>
        <form onSubmit={addnote}>
            <input className='form-control' onChange={e => {setValue(e.target.value)}} value={value}/>
            <Primarybtt onclick={addnote} value='Add'/>
            <hr/>
            <ul className='list-group'>{notes.map(item => <li key={item.key} id={item.id} onClick={handlli} className='list-group-item'><strong>{item.value}</strong><p>{item.time}</p>
            <Primarybtt onclick={removenote} value='Delete'/>
            </li>)}</ul>
        </form>
        </>
    )
}