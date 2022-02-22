import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-psm-deployment',
  templateUrl: './psm-overview.component.html',
  styleUrls: ['./psm-overview.component.scss']
})
export class PsmOverviewComponent implements OnInit, OnDestroy {
  resourceLanguage = 'en_US';
  constructor(private router: Router, private translateService: TranslateService) { 
  }

  ngOnInit(): void {
   this.translateService.use('en_US');
  }

  onBack(){
   this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
  }

  onClick(){
    this.resourceLanguage = this.resourceLanguage === 'en_US' ? 'fr_FR': 'en_US';
    this.translateService.use(this.resourceLanguage);
  }

}
