import { Pipe, PipeTransform } from '@angular/core';
import Reaction from '../../classes/Reaction';

@Pipe({
  name: 'dislikePipe'
})
export class DislikePipePipe implements PipeTransform {

  transform(reactions: Reaction[]): number {
    let disLikes = 0;

    reactions.forEach(reaction => {
      if (!reaction.isLike) {
        disLikes++;
      }
    })

    return disLikes;
  }

}
