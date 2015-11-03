// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  var elementsArr = [];

  var traverser = function(node) {
  	// base case/termination condition
  	if (node.length === 0) {
  		return;
  	}

  	// NOTE: node.classList.contains(className) returns a Boolean 
  	if (node.classList !== undefined && node.classList.contains(className)) {
  		// if classList of current node DOES have the specified className, push node into elementsArr
  		elementsArr.push(node);
  	}

  	// loop through the node.children collection, which contains the children of selected node 
  	// http://stackoverflow.com/questions/17094230/how-do-i-loop-through-children-objects-in-javascript
  	for (var i = 0; i < node.children.length; i++) {
  		// recursive case  
  		traverser(node.children[i]);
  	}

  };

  // begin recursion by starting at body 
  traverser(document.body);

  console.log(elementsArr + 'works!');
  // base case
  return elementsArr;

};
