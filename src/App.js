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
  render() { 
    return (
    <>
      <div>
        <h1 className="container">To-Do List</h1>
        <hr/>
        {/* refering to line 8 for STATE */}
        <TasksList tasks={this.state.tasks}/>
        {/* <TasksList tasks={this.props.tasks}/> */}
      </div>
    </>
  )
  }
}
 
export default App;
