(function () {

var names = ["Rahul", "Pranav", "Shashank", "Mahesh", "Aditya", "Gaurav", "Raghu", "Lokesh"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'r') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
