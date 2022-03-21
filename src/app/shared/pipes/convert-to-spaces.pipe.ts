import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name: 'ConvertToSpaces'
})

export class convertToSpacespipe implements PipeTransform {


    transform(value: string, characters: string): string {

        return  value.replace(characters, ' ');
    }

}