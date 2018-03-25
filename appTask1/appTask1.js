var buttontask = document.getElementById("buttontask");
var task = document.getElementById("task");
var list1 = document.getElementById("list1");
var Delete = document.getElementById("delete");
var Delete1 = document.getElementById("delete1");

buttontask.addEventListener('click', function () {
  var newE = document.createElement('LI');
  var textnode = document.createTextNode(task.value);
  var buttondelete = document.createElement('DIV');
  var textnodeX = document.createTextNode('X');


  Delete.appendChild(buttondelete);
  newE.appendChild(textnode);
  buttondelete.appendChild(textnodeX);

  newE.addEventListener('click', function() {
    this.parentNode.removeChild(this);
  });

  buttondelete.addEventListener('click', function(){
    this.parentNode.removeChild(this);
    newE.parentNode.removeChild(newE);
  });

  newE.classList.add(task.value);
  list1.appendChild(newE);

  buttondelete.classList.add('delete');
});

var buttondesc = document.getElementById("buttondesc");
var list2 = document.getElementById("list2");
var desc = document.getElementById("desc");

buttondesc.addEventListener('click', function () {
  var newElem = document.createElement('LI');
  var textnode1 = document.createTextNode(desc.value);
  var buttondelete1 = document.createElement('DIV');
  var textnodeXX = document.createTextNode('X');

  Delete1.appendChild(buttondelete1);
  newElem.appendChild(textnode1);
  buttondelete1.appendChild(textnodeXX);

  buttondelete1.addEventListener('click', function(){
    this.parentNode.removeChild(this);
    newElem.parentNode.removeChild(newElem);
  });

  newElem.addEventListener('click', function() {
    this.parentNode.removeChild(this);
  });

  newElem.classList.add(desc.value);
  list2.appendChild(newElem);

  buttondelete1.classList.add('delete1');
});
