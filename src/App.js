import React,{Component} from 'react';
import TodoList from './components/todoList';
import Wallet from './components/wallet'
import './App.css';

class App extends Component{

  state={
      
  };
  
  render(){
    return( 
      <div >
      <div className="todoList">
      
      <TodoList/>
      </div>

      <div className='wallet'>
      <Wallet/>
      </div>
      </div>
      


    )
  }
}

export default App;
