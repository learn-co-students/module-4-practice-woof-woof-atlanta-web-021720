import React from 'react';
import './App.css';
import Dog from './Dog'
import DogInfo from './DogInfo'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pup: {},
      dogBehaviorFilter: false
    }
  }

  //Toggles the Dog filter on and off...also sets the state of dogBehaviorFilter accordingly
  handleDogFilter = () => {
    let dogFilter = document.querySelector("#good-dog-filter")
    dogFilter.innerHTML === "Filter good dogs: OFF" ? dogFilter.innerHTML = "Filter good dogs: ON" : dogFilter.innerHTML = "Filter good dogs: OFF"
    dogFilter.innerHTML === "Filter good dogs: OFF" ? this.setState({ dogBehaviorFilter: false }) : this.setState({ dogBehaviorFilter: true })
  }



  handleDogInfo = (pup) => {
    this.setState({ pup: pup })
  }

  render() {
    return (
      <div className="App" >
        <div id="filter-div">
          <button onClick={this.handleDogFilter} id="good-dog-filter">Filter good dogs: OFF</button>
        </div>
        <div id="dog-bar">
          <Dog
            handleDogInfo={this.handleDogInfo}
            dogBehaviorFilter={this.state.dogBehaviorFilter}
          />
        </div>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <div id="dog-info">
            <DogInfo pup={this.state.pup} />
          </div>
        </div>
      </div>

    );
  }
}


export default App;
