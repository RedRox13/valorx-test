import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/services/mock-data/mock-data.service';
import { IContact } from 'src/app/shared/interfaces/contact.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPageComponent implements OnInit {
  list: IContact[] = [];
  filteredList: IContact[] = [];

  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
    // console.log(event.target.documentElement.scrollTop - 500 > event.target.body.offsetHeight)
    if (event.target.documentElement.scrollTop - 200 > event.target.body.offsetHeight) {
      // console.log(1)
    }
    // document.documentElement.scrollTop || document.body.scrollTop
  }

  constructor(private mockService: MockDataService, private router: Router) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.mockService.getContacts$().subscribe((data: IContact[]) => {
      this.list = data.sort(
        (a: IContact, b: IContact): number => {
          const nameA = a.contact_name.toUpperCase();
          const nameB = b.contact_name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        }
      );
      this.filteredList = this.list;
    });
  }

  userTrackBy(index: number, user: IContact) {
    return user.id;
  }

  onSearchInput(value: string): void {
    this.filteredList = this.list.filter(
      (el: IContact) => el.contact_name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || 
        el.email.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || el.phone_number.includes(value)
      )
  }

  createNewUser(): void {
    this.router.navigate(['/new-user']);
  }
}
