console.clear();

function getResult(a,b){
  let result = 0;
  
  let powResult = a ** b;
  while(powResult > 0) {
		result += powResult % 10;

		powResult = Math.floor(powResult / 10);
	}
  
  return result;
}

console.log(getResult(2, 2));