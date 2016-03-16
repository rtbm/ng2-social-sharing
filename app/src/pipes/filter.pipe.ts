import {Pipe} from 'angular2/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe {
    transform(value, args:string[]) {
        var re = new RegExp(args[0], 'i');
        return value.filter(
            (item) => item.name.match(re)
        );
    }
}
