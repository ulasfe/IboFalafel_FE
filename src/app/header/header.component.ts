import { Component ,ViewChild} from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list'
import { RouterModule, RouterLink , RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
   imports: [MatSidenavModule, MatIconModule, MatButtonModule, MatToolbarModule, MatListModule, RouterModule ,RouterLink, RouterOutlet],
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  @ViewChild('drawer')
  sidenav! : MatSidenav;
  showFiller = false;
  toggle() {
    this.sidenav.toggle();
  }


  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
