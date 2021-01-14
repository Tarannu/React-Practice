import React from 'react';
import TodoForm from './todoForm'
import Todo from './todo';


class todoList extends React.Component{

    state={
        todos:[]
    };
    addTodo=(todo)=>{
        const newTodos=[todo,...this.state.todos];
        this.setState({
            todos:newTodos
        });
    
    };
    
    handleDeleteTodo=(id)=>{
        this.setState({
            todos:this.state.todos.filter(todo=>
                todo.id !== id)
        });

    };

    render(){
        return (
            <div>
            <TodoForm onSubmit={this.addTodo}/>
            {this.state.todos.map(todo=>(
                <Todo
                 key={todo.id} 
                 onDelete={()=>this.handleDeleteTodo(todo.id)}
                 todo={todo}/>
                ))}
            </div>
        )
    }

};

export default todoList;