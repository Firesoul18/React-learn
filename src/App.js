import logo from './logo.svg';
import Form from './Form/Form.js'
import './App.css';
import Props from './Props.js';
import { Logo } from './EmbedJSX.js';
import { Button } from './Button.js';
import { List } from './List.js';
import Clock from './Clock.js';
import DataChange from './DataChange.js';
import EventPropagation from './EventPropagation.js';
import TicTacToe from './TicTacToe/TicTacToe.js';
import StateSnapshot from './StateSnapshot.js';
import Todo from './Todo/Todo.js';
import Test from './TestConditionalRendering.js';
import Chat from './Chat/Chat.js';
import ChatWithReducer from './Chat/ChatWithReducer.js';
import ContextUse from './ContextUse/ContextUse.js';
import ChatWithReducerAndContext from './Chat/ChatWithReducerAndContext.jsx'

function App() {
  return <Header/>;
}

function Header(){
  return (
      <>
      <Clock></Clock>
      <ChatWithReducerAndContext></ChatWithReducerAndContext>
      {/* <ContextUse></ContextUse> */}
      {/* <Chat></Chat> */}
      {/* <ChatWithReducer></ChatWithReducer> */}
      {/* Here Test is abbreviation for TestConditionalRendering because I have imported it as Test and since it is default exporting TestConditionalRendering, Test gets the value of it. */}
      <Test></Test>
      <TicTacToe></TicTacToe>
      <DataChange></DataChange>
      <Form></Form>
      <Todo></Todo>
      {/* {/* <Props title="hiuh"></Props> */}
      <h1>Hello World</h1>
      <Logo url={logo}></Logo>
      <Button>Click Me</Button>
      <br></br>
      <List></List>
      <button onClick={()=>{alert("You are alerted")}}>Click to Alert</button>
      <EventPropagation></EventPropagation>
      <StateSnapshot></StateSnapshot> 
      </>
  );
}

export default App;
