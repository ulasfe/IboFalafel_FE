import { Component ,OnInit,ViewChild} from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list'
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, RouterLink , RouterOutlet} from '@angular/router';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
   imports: [
    MatSidenavModule,
    MatIconModule, 
    MatButtonModule,
    TranslateModule, 
    MatFormFieldModule,
    MatToolbarModule, 
    MatListModule, 
    RouterModule ,
    RouterLink, 
    RouterOutlet,
    MatSelectModule],
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  constructor(public translate: TranslateService) {
    // 1. Set the fallback language if a translation isn't found
    translate.setFallbackLang('en');

    // 2. Check if the user has a saved preference, otherwise use 'en'
   const savedLang = localStorage.getItem('userLang') || 'en';
  translate.use(savedLang);
  }

  ngOnInit(): void {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('userLang', lang);
  }

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
