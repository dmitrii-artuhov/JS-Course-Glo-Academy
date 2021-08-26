function func(hour, minute) {
	let angle = 30 * hour - (11 * minute)/2;

	if(Math.abs(angle) >= 360) {
		angle = Math.abs(angle) - 360;
	}

	return Math.abs(angle);
}

console.log( func(6, 0) );
console.log( func(3, 0) );
console.log( func(3, 30) );
console.log( func(0, 0) );