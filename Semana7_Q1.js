var arr = [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5"
]

var ul = document.getElementById("first-ul");

var btn = document.getElementById("btn")

btn.addEventListener("click", function(){
  arr.forEach(function(e){
    var li = document.createElement('li');
    li.innerText = e
    ul.append(li)
  })

})
