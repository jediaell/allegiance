import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsModule } from './contacts/contacts.module';


const routes: Routes = [
  {path: '', loadChildren: () => ContactsModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
