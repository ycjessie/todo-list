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
    this.setState({
      tasks:[],
    });
  }
  addTask=(event)=>{
    event.preventDefault();//the whole page will not reload
    console.log("add a task");
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
        <hr/>
        {/* add a text box for add a task use onClick on button*/}
        {/* or use onSubmit */}
        <form onSubmit={this.addTask}>
            <input 
              type="text"
              placeholder="add a task here!"/>
            {/* <button onClick={this.addTask}>Add Task</button> */}
            <button type="submit">Add Task</button>

        </form>
        <hr/>
        {/* referece to line 11 for function click */}
        <button onClick={this.markAllDone}>Mark All Done</button>
        {/* <TasksList tasks={this.props.tasks}/> */}
      </div>
    </>
  )
  }
}
 
export default App;
