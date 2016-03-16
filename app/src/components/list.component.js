System.register(['angular2/core', 'angular2/common', '../pipes/filter.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, filter_pipe_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (filter_pipe_1_1) {
                filter_pipe_1 = filter_pipe_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent() {
                }
                ListComponent.prototype.open = function (url) {
                    window.open(url);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ListComponent.prototype, "items", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ListComponent.prototype, "filter", void 0);
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        directives: [common_1.NgFor],
                        pipes: [filter_pipe_1.FilterPipe],
                        inputs: [
                            'items',
                            'filter'
                        ],
                        styles: ["\n        h2 {\n            margin: 0;\n            line-height: 1.2em;\n            font-size: 21px;\n            color: white;\n            display: inline-block;\n            border-bottom: 1px dashed transparent;\n        }\n        .item {\n            cursor: pointer;\n            margin: 0 0 2.5em;\n            padding: 1.5em 1em;\n            margin: 0 -1em;\n        }\n        .item:hover {\n            background: #111;\n        }\n        .item:hover h2 {\n            border-bottom: 1px dashed #F33653;\n        }\n    "],
                        template: "\n        <div *ngFor='#item of items | filter: filter' (click)='open(item.url)' class='item'>\n            <h2>{{item.name}}</h2>\n            <div>{{item.url}} @ <time>{{item.timestamp | date: 'MM/dd/yy @ h:mma'}}</time></div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map