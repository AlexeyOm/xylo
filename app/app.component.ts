import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {SearchComponent} from './search-component/search.component';
import {PlayComponent} from './play-component/play.component';
import {SettingsComponent} from './settings-component/settings.component';
import {AddTuneComponent} from './add-tune-component/add-tune.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/', name: 'Search', component: SearchComponent, useAsDefault: true},
  {path: '/play', name: 'Play', component: PlayComponent},
  {path: '/settings', name: 'Settings', component: SettingsComponent},
  {path: '/add', name: 'AddTune', component: AddTuneComponent}
])

export class AppComponent { }
