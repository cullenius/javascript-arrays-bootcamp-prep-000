var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  console.log(array[index])
}

function destructiveRemoveElementFromBeginnningOfArray(array, element){
  
}

function removeElementFromBeginningOfArray(array, element){
  
}

function destructivelyRemoveElementFromEndOfArray(array, element){
  
}

function removeElementFromEndOfArray(array, element){
  
}