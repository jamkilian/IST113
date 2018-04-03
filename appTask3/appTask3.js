var buttontask = $("#buttontask");
var task = $("#task");
var list1 = $("#list1");
var Delete = $("#delete");
var Delete1 = $("#delete1");

var ItemKey = "listValues";
var myItems = [];

function Local() {
  if (localStorage.getItem(ItemKey) !== null)
  {
    let myItemString = localStorage.getItem(myKey);
    myItems = JSON.parse(myItemString);
    $(myItems).each(function() {
      createItem(this);
    })
  }

  buttontask.on('click', function () {
    var curVal = $("#task").val();
    createItem(curVal);
    myItems.push(curVal);
    saveItems();
  }
});



function createItem(){
  var newE = $('<li></li>')
  var textnode = $("#task").val();
  var buttondelete = $('<div>X</div>');
}

buttontask.on('click', function () {
  var newE = $('<li></li>');
  var textnode = $("#task").val();
  var buttondelete = $('<div>X</div>');

  Delete.append(buttondelete);
  newE.append(textnode);

  newE.on('click', function() {
    this.remove();
  });

  buttondelete.on('click', function(){
    
    this.remove();
    newE.remove();
  });

  newE.addClass(task.value);
  list1.append(newE);

  buttondelete.addClass('delete');
});

saveItems();

//Button Description
var buttondesc = $("#buttondesc");
var list2 = $("#list2");
var desc = $("#desc");

buttondesc.on('click', function () {
  var newElem = $('<li></li>');
  var textnode1 = $("#desc").val();
  var buttondelete1 = $('<div>X</div>');

  Delete1.append(buttondelete1);
  newElem.append(textnode1);

  buttondelete1.on('click', function(){
    this.remove();
    newElem.remove();
  });

  newElem.on('click', function() {
    this.remove();
  });

  newElem.addClass(desc.value);
  list2.append(newElem);

  buttondelete1.addClass('delete1');
});
saveItems();

function saveItems() {
  let myItemString = JSON.stringify(myItems)
  localStorage.setItem(myItems, myItemString )
}
