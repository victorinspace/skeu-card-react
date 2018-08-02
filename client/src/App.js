import React, { Component } from 'react'
import './App.css'
import valid from 'card-validator'

class App extends Component {
	componentDidMount(){
		console.log(valid)
	}
  render() {
    return (
      <div>
				<div className="cc">
					<i className="fa fa-cc-mastercard"></i>
				</div>

				<form className="card-input">
					<input type="text" placeholder="****************"/>
					<input type="text" placeholder="MM/YY"/>
					<input type="text" placeholder="Your Full Name"/>
				</form>

				<form>
					<input type="text" placeholder="CVC"/>
				</form>
      </div>
    )
  }
}

export default App


// <i className="fa fa-cc-visa"></i>
// <i className="fa fa-cc-amex"></i>
// <i className="fa fa-cc-discover"></i>