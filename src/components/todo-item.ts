import { FASTElement, customElement, html, css, attr } from "@microsoft/fast-element";

@customElement({
    name: 'todo-item',
    template: html<TodoItem>`
        <div class='item'>
            <div class='input'>
                <slot></slot>
            </div>
            <div class='buttons'>
                <button id="edit">edit</button>
                <button id="clear">clear</button>
            </div>
        </div>
    `,
    styles: css`
        .item {
            display: flex;
            align-items: center;
            border: solid #aaa 2px;
            width: 500px;
            height: 60px;
        }
        
        .input {
            text-align: center;
            margin-left: 20px;;
            width: 200px;
            font-size: 20px;
        }
        
        .buttons {
            display: flex;
            justify-content: space-between;
            margin-right: 10px;
            width: 160px;
            margin-left: auto;
        }
        
        button {
            font-size: 16px;
            padding: 8px 20px;
        }
    `,
    shadowOptions: { mode: 'open' }
})
export class TodoItem extends FASTElement {

}