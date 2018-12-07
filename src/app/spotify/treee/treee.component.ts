import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-treee',
  templateUrl: './treee.component.html',
  styleUrls: ['./treee.component.scss']
})
export class TreeeComponent implements OnInit {

  isUp: boolean;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.getServerAuth().subscribe(response => {
      this.spotifyService.getCurrentlyPlaying(response.access_token).subscribe(current => {
        this.spotifyService.getPlaylistData(response.access_token, current.context.uri.split(':')[4]).subscribe(playlist => {
          console.log(playlist);
          this.isUp = playlist.name === 'fuzzyfeelin';
        });
      });
    });
  }

}