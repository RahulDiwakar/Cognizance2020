(function (window) {

var names = ["Rahul", "James", "Jackson", "Shashank", "Pranav", "Gaurav", "Aditya", "Paul", "Laurel", "Jimmy"];


for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);
