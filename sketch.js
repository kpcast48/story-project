var cautious = false;

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Little Red Riding Hood "; // title

  document.getElementById('author').innerHTML="Precious"; // author


  
  // All of your code goes under here
  

  var story = 'while traviling through the woods with her basket filled with food. Red Riding Hood get to a 3 way path. She decides on taking path ' + many() + '. On her way she spots a wolf. ' + wolf(); // Create the text

  var story2 = " While traveling through the woods with her basket filled with food. Red Riding Hood get to a 3 way path. She decides on taking path" 


  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function many() {
  let path = Math.floor(random(1, 4)); // Random number rounded down
 
  if(path > 3) {
    cautious = true;
  }
  return path
}

function wolf () {
  let wolf = Math.floor(random(1, 6)); // Random number rounded down
 
  if(cautious == true) {
    return ""
  } else {
    let basket = food();
    return basket;
  }
}

function food() {
  let fb = random(1, 6);
  if(fb > 3) {
    return "What's in your basket Little Red Rididng Hood?" +find();
  } else {
    return "The wolf finds Red Rididng Hood unintresting and leaves."  
  }
}

function find ()

return "Little red riding hood finds her grandma lying sick in bed " +find();

return "finds her grandma baking cookies" +find();

return"There's no one there only a note from grandma saying she'll come back soon from the blueberry garden." +find();







//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    