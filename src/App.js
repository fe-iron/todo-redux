import './App.css';
import React from 'react';
import Input from './components/input';
import { useSelector } from 'react-redux';
import {selectTodoList} from './features/todoSlice'
import TodoItem from './components/todoItem';

function App() {
    const todoList = useSelector(selectTodoList)
    
    return (
    <div className="App">
        <div className="app__container">
            <div className='app__todoContainer'>
                {
                    todoList.map(item=>(
                        <TodoItem 
                            name={item.item}
                            done={item.done}
                            id={item.id}
                        />
                    ))
                }
            </div>
            <Input />
        </div>
    </div>
  );
}

export default App;
