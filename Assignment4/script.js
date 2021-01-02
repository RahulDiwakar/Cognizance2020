(function () {

var names = ["Rahul", "Pranav", "Shashank", "Mahesh", "Aditya", "Gaurav", "Raghu", "Lokesh"];

for (var i in names) {  
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);
