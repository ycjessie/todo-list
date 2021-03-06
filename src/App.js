import React, { Component } from 'react';
import TasksList from './TasksList';
import './App.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      tasks:props.tasks,//a copy of the task inherit from parent
      newItem:'My Test Item',
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
   
    event.preventDefault();
    console.log('it works')
    this.setState({
      tasks:[...this.state.tasks, this.state.newItem],
      newItem:'',
    })
  }
  onTextBoxChange=(event)=>{
    console.log('on text change',event.target.value)
    this.setState({
      newItem:event.target.value,
    });
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
        <form>
            <input 
              type="text"
              value={this.state.newItem}
              onChange={this.onTextBoxChange}
              placeholder="add a new task here!"
              />
              
            <button onClick={this.addTask}>Add Task</button>
            {/* <button type="submit">Add Task</button> */}

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
