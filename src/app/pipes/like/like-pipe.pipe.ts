import { Pipe, PipeTransform } from '@angular/core';
import Reaction from '../../classes/Reaction';

@Pipe({
  name: 'likePipe'
})
export class LikePipePipe implements PipeTransform {

  transform(reactions: Reaction[]): number {
    let likes = 0;

    reactions.forEach(reaction => {
      if (reaction.isLike) {
        likes++;
      }
    })

    return likes;
  }

}
