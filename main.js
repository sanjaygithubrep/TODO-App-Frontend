let addButton = document.getElementById('add');
let App = document.getElementById('App');
let Field = document.getElementById('Field');

addButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = Field.value;
    App.appendChild(paragraph);
    Field.value = "";
    
    paragraph.addEventListener('click', function(){
        App.removeChild(paragraph);
    })
})

