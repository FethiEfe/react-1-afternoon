

import React, { Component } from "react" ;

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
        this.getValue = this.getValue.bind(this);
        this.filterMachine = this.filterMachine.bind(this) ;
    }
    getValue(value){
        
        this.setState({userInput: value});
        
    }

    filterMachine(userInput){
        
       
        var unFilteredArray = this.state.unFilteredArray;
        var filteredArray = [];
        for (let i= 0; i < unFilteredArray.length; i++) {
            if(unFilteredArray[i].includes(userInput) ){
                filteredArray.push(unFilteredArray[i])
            }
            
            
        }
        this.setState({filteredArray:filteredArray});
    }
    render () {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">unFilteredArray: {JSON.stringify(this.state.unFilteredArray,null,10)}</span>
                <input  onChange={(e) => this.getValue(e.target.value)}
                        className="inputLine"></input>
                <button className="confirmationButton"
                        onClick={() => this.filterMachine(this.state.userInput)}>Filter String</button>
                <span className="resultsBox filterStringRB">filteredArray: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )

    }
}

export default FilterString