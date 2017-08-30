import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(shows: any, args?: any): any {
      if (!shows) {
          return null;
      }
      return shows.filter((item) => {
          let rating = +item.rating.average;
          return (rating / 2) > +args;
      });
  }

}
