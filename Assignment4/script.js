(function () {

var names = ["Rahul", "Pranav", "Aditya", "Shashank", "Gaurav", "Mahesh", "Raghu", "Ram", "Rocky", "Dudwala"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'd') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
