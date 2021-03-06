import React, { Component } from "react" ;

class FilterObject extends Component {
    constructor(){
        super();
        
        this.state = {
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: " ",
            filteredEmployees:[]

        }
        this.getValue = this.getValue.bind(this);
        this.filterMachine = this.filterMachine.bind(this) ;
    }
    getValue(value){
        this.setState({userInput: value});
    }
    filterMachine(prop){
        var employees = this.state.employees;
        var filteredEmployees = [];
        for (let i= 0; i < employees.length; i++) {
            if(employees[i].hasOwnProperty(prop) ){
                filteredEmployees.push(employees[i])
            }
            
            
        }
        this.setState({filteredEmployees:filteredEmployees});
    }
    render () {
        return(
            <div className = "puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className = "puzzleText">Unfiltered Array:{JSON.stringify(this.state.employees, null, 10)}</span>
                <input className="inputLine" onChange = {(e) => this.getValue(e.target.value)}></input>
                <button className = "confirmationButton" onClick ={() => this.filterMachine(this.state.userInput)}>Filter</button>
                <span className = "resultsBox filterObjectRB">Filtered Array: {JSON.stringify(this.state.filteredEmployees, null,10)}</span>

            </div>
        )

    }
}

export default FilterObject