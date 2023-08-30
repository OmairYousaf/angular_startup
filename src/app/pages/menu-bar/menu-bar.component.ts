import { Component } from '@angular/core';
import { Menu, MenuListClass } from '.';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  constructor(private router: Router) { }
  selectedRout = 'dashboard';
  menu = new MenuListClass();
  menuList: Menu[] = []

  ngOnInit() {
    this.makeMenu();
    this.setSelectedMenu();
    // this.router.events
    //   .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
    //   .subscribe(() => {
    //     this.setSelectedMenu();
    //   });
  }

  makeMenu() {
    this.menu.menuList.forEach((element) => {

      this.menuList.push(element);

    });
  }

  setSelectedMenu() {
    this.selectedRout = this.router.url.substring(
      this.router.url.lastIndexOf('/') + 1
    );
  }

}
