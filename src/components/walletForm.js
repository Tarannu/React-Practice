import React from 'react';
import shortid from 'shortid';


class walletForm extends React.Component {
    state = {
        incomeText:"",
        incomeInput: 0,
        //expenseInput: 0
    };
    handleIncomeSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id:shortid.generate(),
            note:this.state.incomeText,
            ammount:this.state.incomeInput
           });
        this.setState({
            incomeText:'',
            incomeInput: '',
            
        });

    };
    onIncomeTextChange=(event)=>{
        this.setState({
            
            incomeText: event.target.value
        });
    }
    onExpenseTextChange=(event)=>{
        this.setState({
            expenseText:event.target.value
        })
    }

    onIncomeChange = (event) => {
        this.setState({
            incomeInput: event.target.value
        });

    };
    onExpenseChange = (event) => {
        this.setState({
            expenseInput: event.target.value,
        });

    };

    render() {

        return (
            <div style={{}}>

            <form onSubmit={this.handleIncomeSubmit} >
                <label> Income 
                <input
                    type="text"
                    value={this.state.incomeText}
                    placeholder="Add Income ... "
                    onChange={this.onIncomeTextChange.bind(this)}
                ></input>
                <input
                    type="number"
                    value={this.state.incomeInput}
                    placeholder="Add ammount "
                    onChange={this.onIncomeChange.bind(this)}
                >
                </input> <button>Add Income </button></label>

                
            </form>
            <form onSubmit={this.handleSubmit}>
            <label> Expense 
                <input
                    type="text"
                    value={this.state.expenseText}
                    placeholder="Add expense here ... "
                    onChange={this.onExpenseTextChange.bind(this)}

                ></input>
                <input
                    type="number"
                    value={this.state.expenseInput}
                    placeholder="Add ammount "
                    onChange={this.onExpenseChange.bind(this)}

                >
                </input> <button>Add expense </button></label>
            </form>
            </div>

        );

    };

}

export default walletForm;