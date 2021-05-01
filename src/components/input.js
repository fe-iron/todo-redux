import './input.css';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from  '../features/todoSlice';


const Input = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))

        setInput('');
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            addTodo()
        }
        
    }

    return(
        <div className="input">
            <input type="text"
                value={input}
                onChange={e=>setInput(e.target.value)}
                onKeyPress={e => handleKeyPress(e)}
            />
            <button
                onClick={addTodo}
            >Add</button>
        </div>
    );
}

export default Input;