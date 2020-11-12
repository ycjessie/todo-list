import React, { Component } from 'react';
class TaskItem extends Component {
    render() { 
        return ( 
            <li>{this.props.task}</li>
            // <>
            //    <li>{this.props.task[0]}</li>
            //    <li>{this.props.task[1]}</li>
            //    <li>{this.props.task[2]}</li>
            // </>
         );
    }
}
 
export default TaskItem;