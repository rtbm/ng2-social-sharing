import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {ListComponent} from './list.component';
import {SingleEntry} from '../entry';

@Component({
    providers: [HTTP_PROVIDERS],
    directives: [ListComponent],
    template: `
        <div class="search">
            <input [(ngModel)]='filter' type='text' placeholder="type to filter list..." autofocus=''>
        </div>

        <list [items]='items' [filter]='filter'></list>
    `,
    styles: [`
        .search {
            top: 10px;
            right: 20px;
            position: absolute;
            text-align: right;
        }

        .search input[type=text] {
            text-align: right;
            color: #fff;
            font-size: 16px;
            font-family: Abel, sans-serif;
            padding: .5em 1em .5em 0;
            border: 0;
            outline: 0;
            width: 205px;
            border-bottom: 1px solid transparent;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjEzQTlCMzcxOERGMTFFNTk3MTA4NkRDRjlBQ0YyNEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjEzQTlCMzYxOERGMTFFNTk3MTA4NkRDRjlBQ0YyNEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTUzQzVDQzExOERGMTFFNTg2MTFEQzFCOEM1NEZCOTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTUzQzVDQzIxOERGMTFFNTg2MTFEQzFCOEM1NEZCOTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FyQGPAAAAtElEQVR42nTPsQtBURTH8UuUt7wSmZBXMkixyOqP8GfY2NUbbRZKWEz+AYuFWZmNDHaLLOr6vvvuqdeVX31u3dvpnHOV1lpZVaxwxDDxbqRVnA42KOKKAWbIKgnVAU4YI2U7lLFHKB2jY46dOwoNnOHL6Bbu6jdPvO06pvCANjynsI4PHrKjZ0cvUEEJPdywlVXM8qSAKZp4IRP1QB8jLN0P1NBFzt7XOk4oHf8ljwkuXwEGAEZTtfulzKs0AAAAAElFTkSuQmCC) center right no-repeat
        }

        .search input[type=text]:focus {
            border-bottom: 1px solid #F33653;
            text-align: left
        }
    `]
})

export class PageComponent {
    private items: SingleEntry[] = [];
    private filter: string = '';

    constructor(
        http: Http
    ) {
        http.get('/api/entries.json').subscribe(res => {
            this.items = res.json().reverse();
        });
    }
}
