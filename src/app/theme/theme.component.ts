import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Helpers} from '../helpers';
import {ScriptLoaderService} from '../_services/script-loader.service';

declare let mApp: any;
declare let mUtil: any;
declare let mLayout: any;

@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: "./theme.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ThemeComponent implements OnInit {


    constructor(private _script: ScriptLoaderService, private _router: Router) {

    }

    ngOnInit() {
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js',
            'assets/default/base/scripts.bundle.js',
            'assets/app/js/highstock.js',
            'assets/app/js/drilldown.js',
            'assets/app/js/highcharts-3d.js',
            'assets/app/js/default.js',
        ], true)
            .then(result => {
                Helpers.setLoading(false);
                // optional js to be loaded once
                this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js', 'assets/app/js/oee.js'], true);
            });
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                (<any>mLayout).closeMobileAsideMenuOffcanvas();
                (<any>mLayout).closeMobileHorMenuOffcanvas();
                Helpers.setLoading(true);
                // hide visible popover
                (<any>$('[data-toggle="m-popover"]')).popover('hide');
            }
            if (route instanceof NavigationEnd) {
                // init required js
                (<any>mApp).init();
                (<any>mUtil).init();
                Helpers.setLoading(false);
                // content m-wrapper animation
                let animation = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation);
                }).removeClass(animation).addClass(animation);
            }
        });
    }

}