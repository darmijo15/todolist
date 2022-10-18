import './style.css';

const form = document.querySelector('form');
const input = <HTMLInputElement>document.querySelector('#item');
const body = document.querySelector('body');

let itemsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items')!)
    : [];

localStorage.setItem('items', JSON.stringify(itemsArray));

const data = JSON.parse(localStorage.getItem('items')!);

function addItem(text:string) {
    const newItem = document.createElement('todo-item');
    newItem.setAttribute('id', `${text}`);
    newItem.innerHTML = text;
    body?.appendChild(newItem);

    const clearButton = <HTMLButtonElement>newItem.shadowRoot?.querySelector('#clear');

    clearButton.addEventListener('click', () => {
        const item = itemsArray.indexOf(text);
        itemsArray.splice(item, 1);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        body?.removeChild(newItem);
    });
}

form?.addEventListener('submit', (e) => {
    e.preventDefault()

    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    addItem(input.value);
    input.value = '';
})

data.forEach((item:string) => {
    addItem(item);
});

console.log(localStorage);

export * from './components/todo-item';