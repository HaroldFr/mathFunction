document.getElementById("calcFunc").addEventListener("click", function(){
	let userInput = document.getElementById("factorialNumber").value; 
	let result = myFactorial(userInput);
	document.getElementById("factRes").innerHTML = result;
})

document.getElementById("squareFunc").addEventListener("click", function(){
	let userInput = document.getElementById("squareNumber").value; 
	let result = mySquare(userInput);
	document.getElementById("squareRes").innerHTML = result;
})

document.getElementById("powerFunc").addEventListener("click", function(){
	let base = document.getElementById("baseNumber").value; 
	let pow = document.getElementById("expNumber").value; 
	let result = Math.pow(base,pow)
	document.getElementById("powerRes").innerHTML = result;
})

document.getElementById("circFunc").addEventListener("click", function(){
	let userInput = document.getElementById("circNumber").value; 
	let result = areaOfCircle(userInput);
	result = Math.round(result);
	document.getElementById("circRes").innerHTML = result;
})












function myFactorial (num){ 
	let factorial = 1; 
	for (let i = 1; i <= num; i++) { 
	  factorial *= i
	};  
	return factorial;
  }; 
  console.log(myFactorial(10));


function mySquare (num) {
	return num*num;
};
console.log(mySquare);

function areaOfCircle (num) {
	let radius = num;
	return 3.14*radius*radius;
}
console.log(areaOfCircle);

