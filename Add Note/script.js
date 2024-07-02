var overlay=document.querySelector(".popup-overlay");
var noteAdd=document.querySelector(".add-note");
var btn=document.getElementById("popup-button");
var cancelButton=document.getElementById("cancel-button");



btn.addEventListener("click", function(){
    overlay.style.display="block";
    noteAdd.style.display="block";

})
cancelButton.addEventListener("click",function(event){
    event.preventDefault();
    overlay.style.display="none";
    noteAdd.style.display="none";
})

var addButton=document.getElementById("add-button");
var note=document.querySelector(".note");
var inputTitle=document.getElementById("add-title");
console.log(inputTitle);
var inputName=document.getElementById("add-name");
var textArea=document.getElementById("add-textarea");

addButton.addEventListener("click",function(){
    event.preventDefault();
    var createAdd=document.createElement("div");
    createAdd.setAttribute("class", "note1");
    createAdd.innerHTML=`<h1>${inputTitle.value}</h1>
    <h2>${inputName.value}</h2>
    <p>${textArea.value}</p>
    <button onclick="deleteNote(event)">Delete</button>`
    note.append(createAdd);
    overlay.style.display="none";
    noteAdd.style.display="none";
    saveNotes();
})

function deleteNote(event)
{
    event.target.parentElement.remove();
    saveNotes();
}
function loadNotes() {
    var savedNotes = localStorage.getItem('notes');
    console.log(savedNotes);
    if (savedNotes) {
        note.innerHTML = savedNotes;
    }
}
function saveNotes() {
    localStorage.setItem('notes', note.innerHTML);//key,content stored
}
window.addEventListener('load', loadNotes);