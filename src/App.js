import React,{Component} from 'react';
import TodoList from './components/todoList'


class App extends Component{

  state={
      count:0,
  };
  
  render(){
    return( <div className="todoList">
      
      <TodoList/>
      </div>

    )
  }
}

export default App;
