document.querySelector('.btn2').onclick = darkTheme;   

function darkTheme() {
    var a = document.querySelector('.list')
    a.style.backgroundColor = "gray";
    var b = document.querySelector('.notearea')
    b.style.backgroundColor = "gray";
    document.querySelector(".btn2").innerHTML = 'Light Theme';
    }   

let notesArray = [
    {title:"note one", body:"some text 1"},
    {title:"note two", body:"some text 2"}];

document.querySelector('.btn3').onclick = saveNote;

function saveNote() {
    notesArray.push({title: "note three", body: "some text 3"});
    console.log("Note saved successfully");
}