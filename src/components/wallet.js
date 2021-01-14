import React,{Component} from "react";
import Header from './header';
import Balance from "./Balance";
import AddTransaction from "./AddTransaction";
import IncomeList from './incomeList';
import ExpenseList from './ExpenseList';
import {GlobalContextProvider} from '../context/GlobalState';

class Wallet extends React.Component {
  state = {
    
  };
  
  
  
  render() {
    return (
      <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
          <Balance />
          
          
        </div>
      </div>
    </GlobalContextProvider>
    );
  }
}

export default Wallet;
