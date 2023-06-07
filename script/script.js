
//dichiaro funzione per aggiungere tasks alla lista
const addTask = function(e){
    //annullo le impostazioni di default del bottone submit
 e.preventDefault();

    // dichiaro variabile per input field
 const inputFieldName = document.getElementById('what-to-do');
    // dichiaro variabile per ciò che si scrive nell'input field
 let inputFieldContent = inputFieldName.value;
    
 
    //dichiaro variabile per la UL
let tasksSection = document.querySelector('#list-container ul');
    //creo l'elemento li
let taskListElement = document.createElement('li');
    //do attributo a elemento li
taskListElement.setAttribute('class', 'task');

    //scrivo l'HTML contenuto 
 taskListElement.innerHTML = `
 ${inputFieldContent}<button class="delete-button"><i class="fas fa-trash-alt"></i></button> 
 `
    //attacco il nuovo elemento li a ul
 tasksSection.appendChild(taskListElement);

    //reset dell'input field
 inputFieldName.value = ''


 let markAsDone = function() {
    
    this.classList.toggle('done')


}
let task = document.querySelectorAll('#list-container li');
task.forEach(el => el.addEventListener('click', markAsDone));

const deleteItem = function(el){
    let itemToRemove = el.target;
    console.log(itemToRemove);
    itemToRemove.parentElement.parentElement.remove( )

}

let delButton = document.querySelectorAll('#list-container button');
delButton.forEach(el => el.addEventListener('click', deleteItem));

}



const myForm = document.getElementById('list-form');
myForm.addEventListener('submit', addTask)




