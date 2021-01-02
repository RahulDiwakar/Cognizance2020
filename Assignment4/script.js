(function () {

var names = ["Rahul", "Pranav", "Shashank", "Mahesh", "Aditya", "Gaurav", "Raghu", "Lokesh"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'r') {
    window.byeSpeaker.speak(names[i]);
  }
  else {
    window.helloSpeaker.speak(names[i]);
  }
}

})();
