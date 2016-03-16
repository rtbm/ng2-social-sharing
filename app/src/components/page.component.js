System.register(['angular2/core', 'angular2/http', './list.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, list_component_1;
    var PageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }],
        execute: function() {
            PageComponent = (function () {
                function PageComponent(http) {
                    var _this = this;
                    this.items = [];
                    this.filter = '';
                    http.get('/api/entries.json').subscribe(function (res) {
                        _this.items = res.json().reverse();
                    });
                }
                PageComponent = __decorate([
                    core_1.Component({
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [list_component_1.ListComponent],
                        template: "\n        <div class=\"search\">\n            <input [(ngModel)]='filter' type='text' placeholder=\"type to filter list...\" autofocus=''>\n        </div>\n\n        <list [items]='items' [filter]='filter'></list>\n    ",
                        styles: ["\n        .search {\n            top: 10px;\n            right: 20px;\n            position: absolute;\n            text-align: right;\n        }\n\n        .search input[type=text] {\n            text-align: right;\n            color: #fff;\n            font-size: 16px;\n            font-family: Abel, sans-serif;\n            padding: .5em 1em .5em 0;\n            border: 0;\n            outline: 0;\n            width: 205px;\n            border-bottom: 1px solid transparent;\n            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjEzQTlCMzcxOERGMTFFNTk3MTA4NkRDRjlBQ0YyNEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjEzQTlCMzYxOERGMTFFNTk3MTA4NkRDRjlBQ0YyNEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTUzQzVDQzExOERGMTFFNTg2MTFEQzFCOEM1NEZCOTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTUzQzVDQzIxOERGMTFFNTg2MTFEQzFCOEM1NEZCOTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FyQGPAAAAtElEQVR42nTPsQtBURTH8UuUt7wSmZBXMkixyOqP8GfY2NUbbRZKWEz+AYuFWZmNDHaLLOr6vvvuqdeVX31u3dvpnHOV1lpZVaxwxDDxbqRVnA42KOKKAWbIKgnVAU4YI2U7lLFHKB2jY46dOwoNnOHL6Bbu6jdPvO06pvCANjynsI4PHrKjZ0cvUEEJPdywlVXM8qSAKZp4IRP1QB8jLN0P1NBFzt7XOk4oHf8ljwkuXwEGAEZTtfulzKs0AAAAAElFTkSuQmCC) center right no-repeat\n        }\n\n        .search input[type=text]:focus {\n            border-bottom: 1px solid #F33653;\n            text-align: left\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PageComponent);
                return PageComponent;
            })();
            exports_1("PageComponent", PageComponent);
        }
    }
});
//# sourceMappingURL=page.component.js.map