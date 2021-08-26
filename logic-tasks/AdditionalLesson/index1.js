

const calculator = {
	a: 0,
	b: 0,
	result: 0,

	getValueSum: function() {
		this.a = Number(document.querySelector('#a').value);
		this.b = Number(document.querySelector('#b').value);

		this.result = this.sum(this.a, this.b);
		this.show();
	},
  sum: function(a, b){
    return a + b;
	},
	
	getValueMult: function() {
		this.a = Number(document.querySelector('#a').value);
		this.b = Number(document.querySelector('#b').value);

		this.result = this.mult(this.a, this.b);
		this.show();
	},
  mult: function(a, b){
    return a * b;
	},
	
  show: function(){
    resInput.value = this.result;
  }
}


const sumBtn = document.querySelector('#sum');
const multBtn = document.querySelector('#mult');

let resInput = document.querySelector('#res');


sumBtn.addEventListener('click', calculator.getValueSum.bind(calculator));
multBtn.addEventListener('click', calculator.getValueMult.bind(calculator));