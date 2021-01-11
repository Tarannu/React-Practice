import React from "react";
import WalletForm from "./walletForm";
import income from "./income";

class Wallet extends React.Component {
  state = {
    income: [],
    incomeAmmount: [],
    expense: [],
    expenesAmmount: [],
    netAmmount:0
  };
  addIncome = (inc, num, exp, expNum) => {
    const newIncome = [inc, ...this.state.income];
    const newIncomeAmmount = [num, ...this.state.incomeAmmount];
    const newExpense = [exp, ...this.state.expense];
    const newExpeseAmmount = [expNum, ...this.state.expenesAmmount];
    const currentNet=this.state.netAmmount;
    const currentIncome=this.state.incomeAmmount;
    const currentExpense=this.state.expenesAmmount

    this.setState({
      income: newIncome,
      incomeAmmount: newIncomeAmmount,
      expense: newExpense,
      expenesAmmount: newExpeseAmmount,
      netAmmount:currentNet+currentIncome-currentExpense
    });
  };
  addNetChange=(net)=>{
      
      this.setState({
          
      })
  }

  render() {
    return (
      <div class="walletApp">
        <h1>Wallet App </h1>
        <WalletForm onSubmit={this.addIncome} />
        {this.state.income.map((inc) => (
          <div>
            <div key={inc.id}>
              <span> {inc.note}</span>
              <span style={{ margin: 30 }}>{inc.ammount}</span>
            </div>
            <div>
            <span>Net Income: {this.state.netAmmount}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Wallet;
