import { useState } from 'react';
import './Form.css'
export default function Form() {
    const person = {
        firstName: '',
        lastName: '',
        gender: 'male',
        course: 'bca',
        hobbies:[
            'outdoor'
        ]
    }

    const [p, setP] = useState(person);

    function change(e){
        setP(
            {
                ...p,
                [e.target.name]:e.target.value
            }
        )
    }

    function changeHobbies(e){
        let x = [...p.hobbies];
        if(!x.includes(e.target.value)){
            x.push(e.target.value)
            console.log(x)
        }else{
            let arr = x.filter(t=>t!==e.target.value)
            x=arr;
            console.log(x)
        }
        setP({
            ...p, hobbies:x
        })
    }

    
    return <form className='form'>
        <Name change={change}></Name>
        <Gender change={change} p={p}></Gender>
        <Course change={change}></Course>
        <Hobbies changeHobbies={changeHobbies} p={p}></Hobbies>
        <Information p={p}></Information>
    </form>
}


function Gender({change,p}) {
    return (
        <div className="gender">
            Gender:
            <div><label htmlFor="male">Male</label><input id="male" type="radio" value="male" name="gender" checked={p.gender==='male'} onChange={(e)=>change(e)}/></div>
            <div><label htmlFor="female">Female</label><input id='female' type='radio' value="female" name="gender" checked={p.gender==='female'} onChange={(e)=>change(e)}/></div>
            <div><label htmlFor="other">Other</label><input id='other' type='radio' value="other" name="gender" checked={p.gender==='other'} onChange={(e)=>change(e)}/></div>
        </div>);
}

function Name({change}) {
    return (
        <div className='name'>
            <div>First Name* <input type='text' name='firstName' required onChange={(e)=>{change(e)}}></input></div>
            <div>Last Name <input type='text' name='lastName' onChange={(e)=>{change(e)}}></input></div>
        </div>
    )
}

function Course({change}) {
    return (
        <div className='course'>
            Course
            <select name='course' onChange={(e)=>change(e)}>
                <option value='bca'>
                    BCA
                </option>
                <option value='bba'>
                    BBA
                </option>
                <option value='mba'>
                    MBA
                </option>
            </select>
        </div>
    )
}

function Hobbies({changeHobbies, p}){
    return (<div className='hobbies'>
        <label>Hobbies{"  "}</label>
        <div><label htmlFor='outdoor'>Outdoor </label><input type='checkbox' id='outdoor' value='outdoor' name='hobbies' checked={p.hobbies.includes('outdoor')} onChange={e=>changeHobbies(e)}></input></div>
        <div><label htmlFor='indoor'>Indoor </label><input type='checkbox' id='indoor' value='indoor' name='hobbies' checked={p.hobbies.includes('indoor')} onChange={e=>changeHobbies(e)}></input></div>
    </div>);
}

function Information({ p }) {
    let v = p;
    return (<div>{v.firstName} {v.lastName} {v.gender} {v.course} {v.hobbies.join(" ")}</div>);
}