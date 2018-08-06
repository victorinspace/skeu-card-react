export function checkLogo(e) {
	let numberValidation = valid.number(e.target.value)
	console.log(numberValidation)
	
	let thing = document.querySelector('#thing').value
	console.log(thing)

	let ccLogoDisplay = document.querySelector('#cc-logo-display')

	if (!numberValidation.isPotentiallyValid) {
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
		} else if (numberValidation.card.type === 'discover') {
			this.setState({
				ccLogo: 'fa fa-cc-discover'
			}) 
		} else if (numberValidation.card.type === 'discover') {
			this.setState({
				ccLogo: 'fa fa-cc-discover'
			})
		} else if (numberValidation.card.type === 'american-express') {
			this.setState({
				ccLogo: 'fa fa-cc-amex'
			})
		}
	}
}