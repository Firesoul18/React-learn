import { useState } from 'react';
import './Test.css'

export default function TestConditionalRendering() {
  const [isFancy, setIsFancy] = useState(false);
  function change(){
   return e => {
            setIsFancy(e.target.checked)
          }
  }
  return (

    <div>
    {/*either this */}
    <T isFancy={isFancy} change={change}></T>

    {/*or this */}
    {/* {isFancy&&
    <Counter isFancy={isFancy}></Counter>}
    {
      !isFancy&&
      <Counter isFancy={isFancy}></Counter>
    } */}
    {/* remember don't use ?: (like the example below)if you want the state to reset. use two && instead like the above example */}
    {/* { isFancy ? <Counter isFancy={isFancy}></Counter> : <Counter isFancy={isFancy}></Counter> } */}
    {/* if you want to use this and still change the state. you can give a different key to both counters (e.g. below) remember key must be different. in this case key changes when isFancy changes*/}
    {/* {isFancy?<Counter isFancy={isFancy} key={isFancy}></Counter>:<Counter isFancy={isFancy} key={isFancy}></Counter>} */}
    </div>
  );
}

function T({isFancy,change}){
  return (
    isFancy ? (
        <div>
          <Counter isFancy={true} /> 
          <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={change()}
        />
        Use fancy styling
      </label>
        </div>
      ) : (
        <section>
          <Counter isFancy={false} />
          <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={change()}
        />
        Use fancy styling
      </label>
        </section>
      )

  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    isFancy ? <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>:<section
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </section>
  );
}
