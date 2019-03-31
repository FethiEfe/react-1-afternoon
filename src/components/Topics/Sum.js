import React, { Component } from "react" ;

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1:0,
            number2:0,
            sum: null
        }
    }

    handleChange(value){
        this.setState({
            number1: +value
        })
    }
    handleChange2(value){
        this.setState({
            number2: +value
        })
    }

    sum(num1,num2){
        this.setState({
            sum: num1 + num2
        })
    }

    render () {
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine"
                       onChange = {(e) => this.handleChange(e.target.value)}></input>
                <input className="inputLine"
                       onChange = {(e) => this.handleChange2(e.target.value)}></input>
                <button className="confirmationButton"
                        onClick = {() => this.sum(this.state.number1 , this.state.number2)}>Sum</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )

    }
}

export default Sum