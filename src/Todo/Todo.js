import { useState } from 'react';
import './Todo.css';
export default function Todo() {
    const [list, setList] = useState([]);

    function onC() {
        let ele = document.getElementById('text');
        if (ele.value.trim() !== '') {
            const temp = {
                text: ele.value,
                edit: false
            }
            setList(l => [...l, temp]);
        }
        ele.value = "";
    }

    function editTodo(index) {
        if (document.getSelection().type === 'Range') return;
        setList(list.map((x, i) => { if (i !== index) { return x } else { return { ...x, edit: true } } }))
        console.log(list);
    }

    function deleteTodo(index) {
        setList(list.filter((_, i) => i !== index))
        console.log(list);
    }

    function editingTodo(val, index) {
        setList(list.map((x, i) => { if (i !== index) { return x } else { return { text: val, edit: true } } }))
        console.log(list);

    }

    function changing(e){
        if(e.keyCode===13){
            onC();
        }
    }

    function saveTodo(index) {
        let ele = document.getElementById('editTodo'+index);
        if (ele.value.trim() !== '') {
            const temp = {
                text: ele.value,
                edit: false
            }
            setList(
                list.map((x, i) => {
                    if (i !== index) {
                        return x;
                    } else {
                        return temp;
                    }
                })
            );
        }
        ele.value = "";
        console.log(list);

    }

    function moveUp(index) {
        let c = [...list];
        if (index > 0) {
            let a = c[index - 1];
            let b = c[index];
            c[index - 1] = b;
            c[index] = a;
        }
        setList(c)
        console.log(c);

    }

    function moveDown(index) {
        let c = [...list]
        if (index < c.length - 1) {
            let a = c[index + 1];
            let b = c[index];
            c[index + 1] = b;
            c[index] = a;
        }
        setList(c)
        console.log(c);
    }

    return (
        <div className="todo">
            <ul className='list-data-area'>
                {list.map((t, index) => {
                    if (!t.edit) {
                        return <li key={index}>
                            <h2 onClick={() => editTodo(index)}>{t.text}</h2>
                            <button onClick={(e) => { deleteTodo(index); e.stopPropagation() }}>Delete</button>
                            <button onClick={() => moveUp(index)}>⬆️</button>
                            <button onClick={() => moveDown(index)}>⬇️</button>
                        </li>
                    }
                    else {
                        return <li key={index}>
                            <input type='text' className='editTodo' id={'editTodo'+index} value={t.text} onChange={(e) => { editingTodo(e.target.value, index) }}  onKeyDown={(e)=>{if(e.key==='Enter')saveTodo(index)}}></input>
                            <button onClick={(e) => { saveTodo(index); e.stopPropagation() }}>Save</button>
                            <button onClick={() => moveUp(index)}>⬆️</button>
                            <button onClick={() => moveDown(index)}>⬇️</button>
                        </li>
                    }
                })}
            </ul>
            <AddTodo onC={onC} changing={changing}></AddTodo>
        </div>);
}


function AddTodo({ onC,changing }) {
    return (
        <div className='add-todo'>
            <input id='text' type='text' name='text' onKeyDown={(e)=>{changing(e)}}></input>
            <button onClick={onC}>Add</button>
        </div>
    );
}