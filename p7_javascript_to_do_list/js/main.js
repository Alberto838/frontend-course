let todoInput // miejsce, gdzie użytkownik wpisuje treść zadania
let errorInfo // info o braku zadań / konieczności wpisania tekstu
let addBtn // przycisk ADD - dodaje nowe elementy do listy
let ulList // lista zadań, tagi UL
let newTodo // nowododany LI, nowe zadanie

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	// pobieramy wszystkie elementy
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewTodo)
	// nadajemy nasłuchiwanie
}

const addNewTodo = () => {
	if (todoInput.value != '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		ulList.append(newTodo)
		todoInput.value = ''
		errorInfo.textContent = ''
		createToolsArea()
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

const createToolsArea = () => {
	
	// div
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	
	// complete button
	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'
	
	// edit button
	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'
	
	// delete button
	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'
	
	toolsPanel.append(completeBtn, editBtn, deleteBtn)
	newTodo.append(toolsPanel)
}


document.addEventListener('DOMContentLoaded', main)