import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CategoryListPipe } from './category-list.pipe';
import { FavoriteDirective } from './favorite.directive';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemComponent } from './media-item.component';

const lookupLists = {
  mediums: ['Movies', 'Series', 'Documentary']
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  providers: [
    {provide: 'lookupListsToken', useValue: lookupLists}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
