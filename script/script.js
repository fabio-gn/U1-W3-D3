

const addTask = function(e){ //dichiaro funzione per aggiungere tasks alla lista
       
    e.preventDefault(); //annullo le impostazioni di default del bottone submit

    const inputField = document.getElementById('what-to-do'); // dichiaro variabile per input field
    let inputContent = inputField.value; // dichiaro variabile per ciò che si scrive nell'input field
        
    
        //dichiaro variabile per la UL
    let tasksSection = document.querySelector('#list-container ul');
        //creo l'elemento li
    let taskListElement = document.createElement('li');
        //do attributo a elemento li
    taskListElement.setAttribute('class', 'task');

        //scrivo l'HTML contenuto 
    taskListElement.innerHTML = `
    ${inputContent}<button class="delete-button"><i class="fas fa-trash-alt"></i></button> 
    `
        //attacco il nuovo elemento li a ul
    tasksSection.appendChild(taskListElement);

        //reset dell'input field
    inputField.value = ''


    let markAsDone = function() {
        
        this.classList.toggle('done')


    }


    let task = document.querySelectorAll('#list-container li:last-child');
    console.log(task)
    task.forEach(el => el.addEventListener('click', markAsDone));

    const deleteItem = function(el){
        let itemToRemove = el.target;
        console.log(itemToRemove);
        itemToRemove.parentElement.parentElement.remove( )

    }

    let delButton = document.querySelectorAll('#list-container button');
    delButton.forEach(el => el.addEventListener('click', deleteItem));

}



const myForm = document.getElementById('form-container');
myForm.addEventListener('submit', addTask)




