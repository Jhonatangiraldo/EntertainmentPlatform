import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ShowComponent } from './show/show.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalComponent, 
    ShowComponent,
    ShowDetailComponent, 
    SearchComponent,
    MainGalleryComponent    
  ],
  exports: [
    MainGalleryComponent
  ]
})
export class GalleryModule { }
