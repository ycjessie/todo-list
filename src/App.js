import React, { Component } from 'react';
import TasksList from './TasksList';
class App extends Component {
  render() { 
    return (
    <>
      <h1>To-Do List</h1>
      <hr/>
      <TasksList tasks={this.props.tasks}/>
    </>
  )
  }
}
 
export default App;
