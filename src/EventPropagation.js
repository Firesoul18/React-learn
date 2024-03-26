export default function EventPropagation(){
    return(
        <div
            onClick={()=>{alert("Parent div was clicked")}}
            onClickCapture={()=>{/*this will run even if you stop propgation. this runs before the onclick of button is called.*/}}
        >
            <button onClick={()=>{alert("To stop propagation. Add e.stopPropagation(); right after alert in onClick() method of this button. Then it will not call parent's onClick()")}}>See How To Stop Propagation</button>
        </div>
    );
}