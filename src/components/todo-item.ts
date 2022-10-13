import { FASTElement, customElement, html, css, attr } from "@microsoft/fast-element";

@customElement({
    name: 'todo-item',
    template: html<TodoItem>``,
    styles: css``,
})
export class TodoItem extends FASTElement {
    
}