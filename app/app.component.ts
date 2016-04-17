import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {SearchComponent} from './searchcomponent/search.component';
import {PlayComponent} from './playcomponent/play.component';
import {SettingsComponent} from './settingscomponent/settings.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/', name: 'Search', component: SearchComponent, useAsDefault: true},
  {path: '/play', name: 'Play', component: PlayComponent},
  {path: '/settings', name: 'Settings', component: SettingsComponent}
])

export class AppComponent { }
