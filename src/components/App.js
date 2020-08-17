import React, { Component } from 'react';
import './App.css';
import Books from './Books/Books'


class App extends Component {

  state={
    books:[
      {
        name:'Math',
        marks:80,
        id:1
      },
      {
        name:'English',
        marks:70,
        id:2
      },
      {
        name:'Physics',
        marks:78,
        id:3
      },
      {
        name:'Chemistry',
        marks:75,
        id:4
      },
      {
        name:'Biology',
        marks:77,
        id:5
      },
      {
        name:'Bangla',
        marks:82,
        id:6
      },
    ]
  }

  deletHandeler=(id)=>{
      let newBooks = this.state.books.filter(book => book.id !== id)

      this.setState({
        books: newBooks
      })
  }
 
  changeHandler = (name,id) =>{
    let newBooks = this.state.books.map(book=>{
      if(id === book.id){
        return{
          ...book,
          name
        }

      }
      return book
    })
    this.setState({
      books:newBooks
    })
  }

  render(){
    return (
      <div className="App">
          <Books 
              changeHandler={this.changeHandler.bind(this)}
              deletHandeler={this.deletHandeler.bind(this)} 
              books = {this.state.books}
          />
      </div>
    );
  }
}

export default App;
