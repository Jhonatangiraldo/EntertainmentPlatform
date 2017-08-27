import { ShowsService } from './../services/shows/shows.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.css']
})
export class MainGalleryComponent implements OnInit {

  private shows: any[];
  constructor(private showService: ShowsService) { }

  ngOnInit() {
    this.getShowsInformation();
  }

  /**
   * get the shows information
   */
  getShowsInformation() {
    this.showService.getShowsInformation().subscribe((response: Response) => {
      this.shows = response.json();
      this.shows = this.shows.slice(1, 13);
      console.log(this.shows);
    })
  }

}
