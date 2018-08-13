import React, { Component } from 'react';
const ENTER_KEY =13;
class TodoHeader extends Component {
    handleKeyDown=(event)=>{
     
        if(event.keyCode===ENTER_KEY){
            let title =event.target.value;
            this.props.addTodo({title});
            event.target.value=""
        }
      
    }
    render() {
        return (
   
                <div className="form-group">
                  <input type="text" onKeyDown={this.handleKeyDown} autoFocus={true} className="form-control"/>
                </div>
    
        )
    }
}
export default TodoHeader;