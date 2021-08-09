import React, {useState} from 'react'

function Todoform(props) {
    const [input , setInput]= useState('');
    //Methods.
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })
        setInput('');
    };

    const handleChange = e => {
        setInput(e.target.value)
    }
    return (
        <form className="Todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add to do" value={input} name="text" className="todo-input"
            onChange={handleChange}/>
            <button type="submit" className="todo-button">Add todo</button>
            
        </form>
    )
}

export default Todoform
