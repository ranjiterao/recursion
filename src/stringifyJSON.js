// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  // numbers and booleans
  if (typeof obj === "number" || typeof obj === "boolean") {
  	var obj = obj.toString();
  	return obj;
  }

  // null  
  else if (obj === null) {
  	return "null";
  } 

  // strings
  else if (typeof obj === "string") {
  	return '"' + obj + '"';
  }

  // arrays
  else if (Array.isArray(obj)) {
  	var newArr = [];

  	for (var i = 0; i < obj.length; i++) {
  		// recursive case 
  		newArr.push(stringifyJSON(obj[i]));
  	}

  		// console.log(newArr); 
  		// base case: add double quotes and brackets to front and back, eliminate spaces between elements
  		return "[" + newArr.join(",") + "]";
  }

  // objects 
  else if (typeof obj === "object") {
  	var newArr = [];

  	for (var key in obj) {

  		// rule out objects that are undefined and that are functions 
  		if (obj[key] !== undefined && typeof obj[key] !== "function") {

  			// recursive case 
	  		newArr.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
	  	}
	  }

	  // base case: add double quotes and curly braces to front and back, eliminate spaces between properties
  	return "{" + newArr.join(",") + "}";
  }

};
