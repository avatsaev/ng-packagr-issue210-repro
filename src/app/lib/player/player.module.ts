import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VgBufferingModule} from 'videogular2/buffering';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgControlsModule} from 'videogular2/controls';
import {VgCoreModule} from 'videogular2/core';
import { PlayerComponent } from './player.component';
import {PlayerService} from './player.service';

@NgModule({
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [PlayerComponent],
  exports: [PlayerComponent],
  providers: [PlayerService]
})

export class PlayerModule { }
