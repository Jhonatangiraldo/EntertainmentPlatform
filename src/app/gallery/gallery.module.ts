import { ShowsService } from './services/shows/shows.service';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ShowComponent } from './show/show.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { SearchComponent } from './search/search.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalComponent, 
    ShowComponent,
    ShowDetailComponent, 
    SearchComponent,
    MainGalleryComponent,
    RatingComponent    
  ],
  exports: [
    MainGalleryComponent
  ],
  providers: [
    ShowsService
  ]
})
export class GalleryModule { }
