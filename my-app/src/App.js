import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    addToDoes: ['Mati do zrobienia', 'Lukasz do niezrobienia', 'Rekin do wpie_dolu'],
    message: ''
  }
}


  addToDo(e){
    e.preventDefault();
    const {addToDoes} = this.state;
    const newToDo = this.newToDo.value;
    const isOnTheList = addToDoes.includes(newToDo);


    if(isOnTheList) {
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

  removeItem(item){
    const newaddToDoes = this.state.addToDoes.filter(addItem => {
      return addItem !== item;
    })

    this.setState({
      addToDoes: [...newaddToDoes]
    })
  }



  render() {
    const {addToDoes, message} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <div className="top-text">
            <h3>React Todo List</h3>
          </div>
          <div calss="app-list">
            <div className="app-list__elemnt">
              <div className="app-list__elemnt__text">

                {addToDoes.map(item => {
                  return (
                  <div key={item}>
                    <p>{item}</p>
                    <button onClick={(e) => this.removeItem(item)} type="button" className="btn-primapry">
                      x
                    </button>
                  </div>)
                })
                }

              </div>
            </div>
          </div>
        </div>
        <form ref={input => this.addForm = input} className="form" onSubmit={(e) => {this.addToDo(e)}}>
         <div className="form-group">
          <input ref={input => this.newToDo = input} type="text" placeholder="write something" className="form-control" id="newToDoInput" />
        </div>
        <button  type="submit" className="btn-primary">Add</button>
        </form>
        {
          message !== '' && <p className='message'>{message}</p>
        }
      </div>
    );
  }
}

export default App;
