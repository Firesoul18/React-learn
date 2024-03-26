import { useState } from "react";

export default function TicTacToe() {
    const [current, setCurrent] = useState('⭕')
    const changePlayer = () => {
        if (current === '⭕') {
            setCurrent('❌')
        } else {
            setCurrent('⭕')
        }
    }
    const [r, setR] = useState(['', '', '',
        '', '', '',
        '', '', '']);

    const [winner, setWinner] = useState(null);

    function checkWinner(tr) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for(let i=0; i<lines.length; i++){
            let [a,b,c]=lines[i];
            console.log(a,b,c)
            if(tr[a]&&(tr[a]===tr[b])&&(tr[b]===tr[c]))
            {
                setWinner(tr[a]);
                return;
            }
        }

        for(let i=0; i<tr.length; i++){
            if(tr[i]===''){
                return;
            }
        }

        setWinner("No one. It's A Draw");
    }

    function handle(index) {
        if (r[index] === '' && winner == null) {
            let tr = Array.from(r);
            tr[index]=current;
            changePlayer();
            setR(tr)
            checkWinner(tr);
        }
    }

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Current Player: {current}</h2>
            <ul className="ttt">
                {
                    r.map((x, index) => <li onClick={() => handle(index)}>{x}</li>)
                }
            </ul>
            {winner && (<h2>Winner:{winner}</h2>)}
            <button className='reset' onClick={() => { setR(['', '', '', '', '', '', '', '', '']); setWinner(null) }}>Reset</button>
        </>
    );
}