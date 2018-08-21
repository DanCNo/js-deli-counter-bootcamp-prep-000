function takeANumber(currentLine, newName){
  return `Welcome, ${newName}. You are number ${currentLine.length + 1} in line.`
}

function nowServing(currentLine){
  if(currentLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return currentLine.shift();
    
  }
}

function 