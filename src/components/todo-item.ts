import { FASTElement, customElement, html, css, attr } from "@microsoft/fast-element";

@customElement({
    name: 'todo-item',
    template: html<TodoItem>`
        <div class='item'>
            <div class='input'>user input</div>
                <div class='buttons'>
                    <button>edit</button>
                    <button>clear</button>
                </div>
        </div>
    `,
    styles: css``,
})
export class TodoItem extends FASTElement {

}