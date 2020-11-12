import React, { Component } from 'react';
import TasksList from './TasksList';
import './App.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      tasks:props.tasks,//a copy of the task inherit from parent
    }
  }
  //Click function refer line 25
  markAllDone=(event)=>{
    console.group('it works!!!');
  }
  render() { 
    return (
    <>
      <div>
        <h1 className="container">To-Do List</h1>
        <hr/>
        {/* refering to line 8 for STATE */}
        {/* use Broswer component to remove items in state */}
        <TasksList tasks={this.state.tasks}/>
        {/* referece to line 11 for function click */}
        <button onClick={this.markAllDone}>Mark All Done</button>
        {/* <TasksList tasks={this.props.tasks}/> */}
      </div>
    </>
  )
  }
}
 
export default App;
