import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from '../interfaces/IContact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  public contacts: Array<IContact>;

  constructor(private contactService: ContactService, private router: Router) { 
   
  }    
  ngOnInit(): void {
    setTimeout(() => { this.loadContacts();}, 100);
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(response =>  {
      this.contacts = response;
    });
  }

  showDetails(id) {
    this.router.navigate(['/detail/' + id]);
  }

}
