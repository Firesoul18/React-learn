import {list} from './ListData.js'

function GetListHTML({inputList}){
    const list = inputList.map(
        i=><li key={i.id}>
            {i.name}
            <ul key={i.id}>
                {i.hobbies.map(x=><li>{x}</li>)}
            </ul>
        </li>
    )

    return (<ul>
        {list}
    </ul>);
}
export function List(){
    const over18list = list.filter(
        i=>i.age>=18
    )

    return (
        <GetListHTML inputList={over18list}></GetListHTML>
    )

}
