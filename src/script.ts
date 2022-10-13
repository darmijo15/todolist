const form = document.querySelector('form');
const input = <HTMLInputElement>document.querySelector('#item');
const body = document.querySelector('body');

function addItem(text:string ) {
    const newItem = document.createElement('todo-item');
    newItem.innerHTML = text;
    body?.appendChild(newItem);
}

form?.addEventListener('submit', (e) => {
    e.preventDefault()

    addItem(input.value);
    input.value = '';
})

export * from './components/todo-item';