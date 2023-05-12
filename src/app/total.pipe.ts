import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(productPrice: any, qty: any){

    return productPrice*qty;
  }

}
