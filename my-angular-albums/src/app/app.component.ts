import { Component, OnInit } from "@angular/core";
import { Album } from './albums/album.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-albums';
  parentFunctionHandler(album: Album) {
    alert('Album ' + album.albumName + ' was sent from the album card component');
  }
}

