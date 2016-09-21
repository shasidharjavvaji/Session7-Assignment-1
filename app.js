var r = 7;
function calculateArea(radius){
	return 3.14*radius*radius;
}
var n = calculateArea(r).toPrecision(3);

console.log(n);
