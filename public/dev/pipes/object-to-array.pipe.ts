import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'objectoToArray'})

export class ObjectToArrayPipe implements PipeTransform {
    transform(value: any): Object[] {
        let dataArr: any[] = [];
        
        if(value != undefined && value != null){
            Object.keys(value).forEach(function(key){
                value[key].id = key;
                dataArr.push(value[key]);
            })
        }
        return dataArr;
    }
}