import React, { Component } from 'react'
import Book from './Book/Book'

class Books extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="mb-2">React Edit & delet formula :</h2>
                {
                    this.props.books.map((book) =>{
                        return(
                            <Book 
                                changeHandler={this.props.changeHandler}
                                deletHandeler={this.props.deletHandeler} 
                                book={book}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default Books
