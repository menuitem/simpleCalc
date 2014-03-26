window._skel_config = {
	prefix: 'css/style',
	preloadStyleSheets: true,
	resetCSS: true,
	boxModel: 'border',
	grid: { gutters: 30 },
	breakpoints: {
		wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
		narrow: { range: '481-1199', containers: 960 },
		narrower: { range: '481-960', containers: 500 },
		mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true, gutters: 20 } }
	}
};
document.addEventListener("DOMContentLoaded", function(event) {
	input1.addEventListener('click', function(){
		score.value=null;
	});
	input2.addEventListener('click', function(){
		score.value=null;
	});

// validate input
	var inputValidator = function(){
		try{
			message.textContent = null;
			Calculator.validate.notANumber(this.valueAsNumber);
			// Calculator.validate.lessThanZero(this.valueAsNumber);
	  }
	  catch (e){
	   	message.textContent = (e.message);
		}
	}
// call validate input, try to enter letters
	input1.addEventListener('input', inputValidator);
	input2.addEventListener('input', inputValidator);
// parse inputs
  var parseInputs = function(){
		n1 = parseFloat(input1.value);
		n2 = parseFloat(input2.value);
  }
//clear event
	clearB.addEventListener('click', function(e){
		e.preventDefault();
			input1.value = input2.value = message.textContent = score.value = selectA.textContent = null;
	});
//add event
	addB.addEventListener('click', function(e){
		e.preventDefault();
		parseInputs();
		try{
				score.value = (Calculator.calcAdd(n1,n2));
				selectA.textContent = "+"
	  }
	  catch (e){
	   	message.textContent = (e.message);
	   	return
		}
	});
//Subtract 
	subtractB.addEventListener('click', function(e){
		e.preventDefault();
		parseInputs();
		try{
				score.value = (Calculator.calcSubtract(n1,n2));
				selectA.textContent = "-"
	  }
	  catch (e){
	   	message.textContent = (e.message);
	   	return
		}
	});
	//Multiply 
	multiplyB.addEventListener('click', function(e){
		e.preventDefault();
		parseInputs();
		try{
				score.value = (Calculator.calcMultiply(n1,n2));
				selectA.textContent = "*"
	  }
	  catch (e){
	   	message.textContent = (e.message);
	   	return
		}
	});
	// divide
	divideB.addEventListener('click', function(e){
		e.preventDefault();
		parseInputs();
		try{
				score.value = (Calculator.calcDivide(n1,n2));
				selectA.textContent = "/"
	  }
	  catch (e){
	   	message.textContent = (e.message);
	   	return
		}
	});
});
