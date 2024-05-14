import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';
import { MaterialModule } from './shared/material/material.module';
import { Observable } from 'rxjs';
import { Routes } from './shared/constant/constant';
import { RouterdataService } from './shared/services/router.data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MaterialModule,BrowserAnimationsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  mobileQuery: MediaQueryList;
  header = 'Dashboard';
  fillerNav = Routes;

  private _mobileQueryListener: () => void;
 routeData$!:Observable<any>;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private route: ActivatedRoute,
    public routerdataService:RouterdataService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.routeData$ = this.routerdataService.routeData$;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onRouteClick(route: string, text: string) {
    this.header = text;
    this.router.navigateByUrl(`/${route}`);
  }
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host
  );
}




