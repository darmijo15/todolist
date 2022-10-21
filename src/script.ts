import './style.css';

const form = <HTMLFormElement>document.querySelector('form');
const input = <HTMLInputElement>document.querySelector('#submit-item');
const body = <HTMLBodyElement>document.querySelector('body');

let itemsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items')!)
    : [];

localStorage.setItem('items', JSON.stringify(itemsArray));

const data = JSON.parse(localStorage.getItem('items')!);

function addItem(text:string) {
    const newItem = document.createElement('todo-item');
    newItem.setAttribute('id', `${text}`);
    body?.appendChild(newItem);

    const userInput = <HTMLDivElement>newItem.shadowRoot?.querySelector('.item-text');
    userInput.innerText = text;

    const clearButton = <HTMLButtonElement>newItem.shadowRoot?.querySelector('.clear');
    const editButton = <HTMLButtonElement>newItem.shadowRoot?.querySelector('.edit');

    editButton.addEventListener('click', () => {
        let currentSetting = editButton.innerText;

        if (currentSetting === 'edit') {
            editButton.innerText = 'save';
            userInput.contentEditable = 'true';
            userInput.style.border = '1px solid #aaa';
        } else {
            editButton.innerText = 'edit';
            userInput.contentEditable = 'false';
            userInput.style.border = '';

            const newValue = userInput.innerText;
            const itemIndex = itemsArray.indexOf(text);
            itemsArray[itemIndex] = newValue;
            localStorage.setItem('items', JSON.stringify(itemsArray));
        }
    })

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

export * from './components/todo-item';