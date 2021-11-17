import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { IContact } from '../interfaces/IContact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  contact: IContact;
  contactId: number;
  constructor(private contactService: ContactService, private route: ActivatedRoute ) { 
    this.contactId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    setTimeout(() => { this.loadContacts();}, 100);
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(response =>  {
      this.contact = response[this.contactId - 1];
    });
  }

}
