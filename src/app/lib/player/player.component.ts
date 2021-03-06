import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {VgAPI} from 'videogular2/core';
import {PlayerService} from './player.service';

@Component({
  selector: 'mylib-player',
  template: `
      <vg-player (onPlayerReady)="onPlayerReady($event)">
          <vg-overlay-play></vg-overlay-play>
          <vg-buffering></vg-buffering>

          <vg-scrub-bar>
              <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
              <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>
          </vg-scrub-bar>

          <vg-controls>
              <vg-play-pause></vg-play-pause>
              <vg-playback-button></vg-playback-button>

              <vg-time-display vgProperty="current" vgFormat="mm:ss"></vg-time-display>

              <vg-scrub-bar style="pointer-events: none;"></vg-scrub-bar>

              <vg-time-display vgProperty="left" vgFormat="mm:ss"></vg-time-display>
              <vg-time-display vgProperty="total" vgFormat="mm:ss"></vg-time-display>

              <vg-track-selector></vg-track-selector>
              <vg-mute></vg-mute>
              <vg-volume></vg-volume>

              <vg-fullscreen></vg-fullscreen>
          </vg-controls>

          <video [vgMedia]="media" #media id="singleVideo" preload="auto" crossorigin>
              <source src="http://static.videogular.com/assets/videos/videogular.mp4" type="video/mp4">
              <source src="http://static.videogular.com/assets/videos/videogular.ogg" type="video/ogg">
              <source src="http://static.videogular.com/assets/videos/videogular.webm" type="video/webm">

              <track kind="subtitles" label="English" src="http://static.videogular.com/assets/subs/pale-blue-dot.vtt" srclang="en" default>
              <track kind="subtitles" label="Español" src="http://static.videogular.com/assets/subs/pale-blue-dot-es.vtt" srclang="es">
          </video>
      </vg-player>
  `,
  styles: []
})
export class PlayerComponent implements OnInit {

  @Output() playerIsReady = new EventEmitter<VgAPI>();

  constructor(private playerService: PlayerService) {}

  ngOnInit() {}

  onPlayerReady(api: VgAPI) {
    this.playerService.api = api;
    this.playerService.playableMedia = this.playerService.api.getDefaultMedia();
    this.playerIsReady.emit();
    this.playerService.getPlayableMedia().play();
  }

}
