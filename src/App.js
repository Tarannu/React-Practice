import React,{Component} from 'react';
import TodoList from './components/todoList';
import Wallet from './components/wallet';
import SignUp from './components/SignUpForm'

import './App.css';


class App extends React.Component{

  state={
      
  };
  
  render(){
    return( 
     
      <div >
      <div className='signup-form'>
      <h1 style={{textAlign:'center'}}> Create Account </h1>
      <SignUp/>
      </div>
      
      <div className="todoList">
      <h1 style={{textAlign:'center'}}>To do List</h1>
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
