import React, { Component } from 'react'
import './App.css'
import valid from 'card-validator'

class App extends Component {
	state = {
		ccLogo: ''
	}

	componentDidMount(){
		// For checking out 'card-validator'
		console.log(valid)

		// For toggling Logo display
		let ccLogoDisplay = document.querySelector('#cc-logo-display')
		ccLogoDisplay.style.display = 'none'
	}

	checkNumber = e => {
		// Update credit card display 
		// with user input
		let ccNumber = document.querySelector('#cc-number').value
		let ccNumberDisplay = document.querySelector('#cc-number-display')
		ccNumberDisplay.innerHTML = ccNumber
		if (ccNumber === '') {
			ccNumberDisplay.innerHTML = '•••• •••• •••• ••••'
		}

		let numberValidation = valid.number(e.target.value)
		console.log(numberValidation)

		// For toggling Logo display
		let ccLogoDisplay = document.querySelector('#cc-logo-display')

		if (!numberValidation.isPotentiallyValid) {
			// If number is not potentially valid
			// DO NOTHING
		}

		if (numberValidation.card == null) {
			ccLogoDisplay.style.display = 'none'
		}	
		
		if (numberValidation.card) {
			ccLogoDisplay.style.display = 'block'

			if (numberValidation.card.type === 'visa') {
				this.setState({
					ccLogo: 'fa fa-cc-visa'
				})
			}
		}
	}

	checkExp = e => {
		let ccExp = document.querySelector('#cc-exp').value
		let ccExpDisplay = document.querySelector('#cc-exp-display')
		ccExpDisplay.innerHTML = ccExp
		if (ccExp === '') {
			ccExpDisplay.innerHTML = '••/••'
		}
	}

	checkName = e => {
		let ccName = document.querySelector('#cc-name').value
		let ccNameDisplay = document.querySelector('#cc-name-display')
		ccNameDisplay.innerHTML = ccName
		if (ccName === '') {
			ccNameDisplay.innerHTML = 'FULL NAME'
		}
	}

	checkCode = e => {
		let ccCode = document.querySelector('#cc-code').value
		let ccCodeDisplay = document.querySelector('#cc-code-display')
		ccCodeDisplay.innerHTML = ccCode
		if (ccCode === '') {
			ccCodeDisplay.innerHTML = '•••'
		}
	}

  render() {
    return (
      <div className="container">

      	{/* Credit Card Display */}
					<div className="cc-front">
						<img className="cc-chip" src={require('./images/cc-chip.png')} alt="" />
						
						{/* Display Information on Card */}
						<div className="info-display">
							<div id="cc-number-display" className="card-info">•••• •••• •••• ••••</div>
							<div id="cc-name-display" className="card-info">FULL NAME</div>
							<div id="cc-exp-display" className="card-info">••/••</div>
							<div id="cc-logo-display" className="cc-logo">
								<i className={this.state.ccLogo}></i>
							</div>
							<div id="cc-code-display" className="card-code">•••</div>
						</div>
					</div>
					
					{/* User Input */}
					<form className="card-input">
						<input onChange={this.checkNumber} id="cc-number" className="input-field" type="text" name="number" placeholder="••••••••••••••••"/>
						<input onChange={this.checkExp} id="cc-exp" className="input-field" type="text" name="exp" placeholder="MM/YY" />
						<input onChange={this.checkName} id="cc-name" className="input-field" type="text" name="name" placeholder="Full Name" />
						<input onChange={this.checkCode} id="cc-code" className="input-field" type="text" name="cvc" placeholder="CVC" />
					</form>
				
      </div>
    )
  }
}

export default App
