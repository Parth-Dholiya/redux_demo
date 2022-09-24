import React, { useState } from 'react';
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';


function Todo() {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();

    return (
        <>
            <div className='container'>
                <div>
                    <h2>Add Your List Here</h2>
                </div>
                <div >
                    <input type="text" className='btn btn-light' placeholder='Add Items'
                        value={inputData}
                        onChange={(event) => setInputData(event.target.value)} />

                    <button className='btn btn-outline-primary'
                        onClick={() => dispatch(addTodo(inputData), setInputData(''))}>Add</button>
                </div>
                <div>
                    {
                        list.map((element, i) => {
                            return (
                                <div key={i}>
                                    <h3>{element.data}</h3>
                                    <i style={{ color: "red" }} className='far fa-trash-alt' title='Delete Item'
                                        onClick={() => dispatch(deleteTodo(element.id))}></i>
                                </div>
                            )
                        })
                    }
                </div><br />
                <div>
                    <button className='btn btn-outline-success'
                        onClick={() => dispatch(removeTodo())}>Remove All</button>
                </div>
            </div>
        </>
    );
};

export default Todo
