import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import './index.css';


class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state={todos:[
       {id:Date.now(),title:"今天要好好看书学习",completed:false},
       {id:Date.now(),title:"明天学习go",completed:false}
    ]}

  }

addTodo =(todo)=>{
  todo =Object.assign({},{id:Date.now(),completed:false},todo);
  let todos = this.state.todos;
  todos.push(todo);
  this.setState(todos);

}

  render() {
    let main = (
      <ul className="list-group">
        {
          this.state.todos.map((todo,index)=><TodoItem key={index} todo={todo}></TodoItem>)
        }
      </ul>
    )
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-sm-10 col-md-8 m-auto">
            <div className="panel panel-dafault">
              <div className="panel panel-heading">
                <TodoHeader addTodo={this.addTodo}/>
              </div>
              <div className="panel panel-body">
                   {main}
              </div>
              <div className="panel panel-footer">
              <span>123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TodoApp;