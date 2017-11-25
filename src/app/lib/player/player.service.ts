import {Injectable} from '@angular/core';
import {VgAPI} from 'videogular2/core';
import {IPlayable} from 'videogular2/src/core/vg-media/i-playable';

@Injectable()
export class PlayerService {
    api:VgAPI;
    playableMedia: IPlayable;


    getPlayableMedia() {
        return this.playableMedia;
    }
}
