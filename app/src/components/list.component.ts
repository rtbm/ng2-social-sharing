import {Component, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {FilterPipe} from '../pipes/filter.pipe';
import {SingleEntry} from '../entry';

@Component({
    selector: 'list',
    directives: [NgFor],
    pipes: [FilterPipe],
    inputs: [
        'items',
        'filter'
    ],
    styles: [`
        h2 {
            margin: 0;
            line-height: 1.2em;
            font-size: 21px;
            color: white;
            display: inline-block;
            border-bottom: 1px dashed transparent;
        }
        .item {
            cursor: pointer;
            margin: 0 0 2.5em;
            padding: 1.5em 1em;
            margin: 0 -1em;
        }
        .item:hover {
            background: #111;
        }
        .item:hover h2 {
            border-bottom: 1px dashed #F33653;
        }
    `],
    template: `
        <div *ngFor='#item of items | filter: filter' (click)='open(item.url)' class='item'>
            <h2>{{item.name}}</h2>
            <div>{{item.url}} @ <time>{{item.timestamp | date: 'MM/dd/yy @ h:mma'}}</time></div>
        </div>
    `
})

export class ListComponent {
    @Input() private items: SingleEntry[];
    @Input() private filter: string;

    open(url) {
        window.open(url);
    }
}
