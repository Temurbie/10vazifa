import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from "../home/home.component";


@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [
        RouterLink,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        HomeComponent,
        RouterOutlet
    ]
})
export class NavbarComponent {
    @ViewChild('sidenav') sidenav!: MatSidenav;

    onOpen() {
    this.sidenav.toggle();
  }

  onClose() {
    this.sidenav.close();
  }
}
