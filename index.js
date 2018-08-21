function takeANumber(currentLineArray, newName){
  currentLineArray.push(newName);
  return `Welcome, ${newName}. You are number ${currentLineArray.length} in line.`;
}

function nowServing(currentLineArray){
  if(currentLineArray.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return currentLineArray.shift();
    
  }
}

function currentLine()