import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  // radio button


  // getInitialState() {
  //     return {
  //       selectedOption: 'option1'
  //     };
  //   }

  // handleOptionChange(changeEvent) {
  //   this.setState({
  //     selectedOption: changeEvent.target.value
  //   });
  // }

  // addToDo(e) {
  //   formSubmitEvent.preventDefault();
  
  //   console.log('You have selected:', this.state.selectedOption);
  // }

  //   render: function () {
  //     return (
  //       <div>
  //         somthing
  //       </div>
  //     );
  //   }
  // });
  



  constructor(props) {
    super(props);
    this.state = {
      addToDoes: ['Mati do zrobienia', 'Lukasz do niezrobienia', 'Rekin do wpie_dolu'],
      message: ''
    }
  }


  addToDo(e) {

    e.preventDefault();
    const { addToDoes } = this.state;
    const newToDo = this.newToDo.value;
    const isOnTheList = addToDoes.includes(newToDo);

    // 
    // 
    // 
    console.log('You have selected:', this.state.selectedOption);
    // 
    // 
    // 


    if (isOnTheList) {
      this.setState({
        message: 'You already have this task on the list.'
      })
    }
    else {
      newToDo !== '' && this.setState({
        addToDoes: [...this.state.addToDoes, newToDo],
        message: ''
      });
    }

    this.addForm.reset();
  }

  getInitialState() {
    return {
      selectedOption: 'option1'
    };
  }

handleOptionChange = (changeEvent) => {
  this.setState({
    selectedOption: changeEvent.target.value
  });
}

  removeItem(item) {
    const newaddToDoes = this.state.addToDoes.filter(addItem => {
      return addItem !== item;
    })

    this.setState({
      addToDoes: [...newaddToDoes]
    })
  }



  render() {
    const { addToDoes, message } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="whole-box">
          <div>
            <div className="top-text">
              <h3>React Todo List</h3>
            </div>
            <div calss="app-list">

              {addToDoes.map(item => {
                return (
                  <div key={item} className={this.state.selectedOption}
                   /*   "app-list__element"   --tu ma byc jeszcze ta klasa
                  jak zrobić zeby przy wyborze koloru byl on zmieniany tylko po akceptacji, a nie w kazdym momencie jego zmiany/kliknięcia (tak sie aktualnie dzieje, klasa zmienia sie w kazdym elemencie)

                  
                  */>
                    <div className="app-list__element__button">
                      <button onClick={(e) => this.removeItem(item)} type="button" className="btn-remove">
                        x
                      </button>
                    </div>
                    <div className="app-list__element__text">
                      <p>{item}</p>
                    </div>
                  </div>
                )
              })
              }

            </div>
          </div>
          <form ref={input => this.addForm = input} className="form" onSubmit={(e) => { this.addToDo(e) }}>
            <div className="form-group">
              <input ref={input => this.newToDo = input} type="text" placeholder="write something" className="form-control" id="newToDoInput" />
            </div>
            <div className="selectColor">
              <input type="radio" className="selectColor__element orange" name="muhRadio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} ></input>
              <input type="radio" className="selectColor__element pink" name="muhRadio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange} ></input>
              <input type="radio" className="selectColor__element purple" name="muhRadio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange} ></input>
              <input type="radio" className="selectColor__element blue" name="muhRadio" value="option4" checked={this.state.selectedOption === 'option4'} onChange={this.handleOptionChange} ></input>
              <input type="radio" className="selectColor__element green" name="muhRadio" value="option5" checked={this.state.selectedOption === 'option5'} onChange={this.handleOptionChange} ></input>
              <input type="radio" className="selectColor__element yellow" name="muhRadio" value="option6" checked={this.state.selectedOption === 'option6'} onChange={this.handleOptionChange} ></input>
            </div>
            <button type="submit" className="btn-primary">Add</button>
          </form>
          {
            message !== '' && <p className='message'>{message}</p>
          }
        </div>
      </div>
    );
  }
}

export default App;
