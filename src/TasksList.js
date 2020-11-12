import React, { Component } from 'react';
import TaskItem from './TaskItem'
class TasksList extends Component {
    render() { 
        let allTaskitems=this.props.tasks.map((task,index)=>{
            return (<TaskItem task={task} key={index}/> )
        })
        return (
            <>
                <h3>Tasks List</h3>
                {/* <p>{this.props.tasks[0]}</p> */}
                <ul>
                {allTaskitems}
                    {/* <TaskItem task={this.props.tasks[0]}/>
                    <TaskItem task={this.props.tasks[1]}/>
                    <TaskItem task={this.props.tasks[2]}/> */} 
                </ul>
            </>
        );
    }
}
 
export default TasksList;