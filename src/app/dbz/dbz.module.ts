import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterAddComponent } from './components/character-add/character-add.component';




@NgModule({
  declarations: [
    MainPageComponent,
    CharacterListComponent,
    CharacterAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MainPageComponent,
  ],
})
export class DbzModule { }
