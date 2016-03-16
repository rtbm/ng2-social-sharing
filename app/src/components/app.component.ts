import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {PageComponent} from './page.component';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <router-outlet></router-outlet>
    `
})

@RouteConfig([
    {
        path: '',
        name: 'Index',
        component: PageComponent
    }
])

export class AppComponent {
}
