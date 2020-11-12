import React, { Component } from 'react';
import TaskItem from './TaskItem'
class TasksList extends Component {
    render() { 
        // map() comes with index, can rename as different name
        let allTaskitems=this.props.tasks.map((task,index)=>{
            //MUST use KEY is the REACT term in ARRAY
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