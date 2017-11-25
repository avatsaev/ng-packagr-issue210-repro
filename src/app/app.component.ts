import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `      
    <mylib-player (playerIsReady)="playerReady()"></mylib-player>
    
  `,
  styles: []
})
export class AppComponent {
  playerReady() {
    console.log('Player is ready');
  }
}
