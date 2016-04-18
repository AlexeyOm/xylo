import {Component} from 'angular2/core';


export class Piece {
  text: string;
  note: string;
}

/*
@Component({
    template: `<h2>Add Tune component</h2>
    <ul>
      <li *ngFor="#tuneLine of tune">{{tuneLine[0].text}}
       <div *ngFor=#pcs of tuneLine>{{pcs.text}}</div>

      </li>
    </ul>
    `
})

*/
@Component({
    template: `<h2>Add Tune component</h2>
                 <ul>
                 <template ngFor #tuneLine [ngForOf]="tune" >
                    <li>
                      <template ngFor #pcs [ngForOf]="tuneLine" >
                        <span>
                          {{pcs.text}}
                        </span>
                      </template>
                    </li>
                 </template>
                 </ul>
                 `
})


//export class Tune {
//  tuneLines: Piece[][];
//}

export class AddTuneComponent { 
  tune: Piece[][] = [[{text:'ddd',note:'bfbb'},{text:'dgdd',note:'beb'}],[{text:'dfsdd',note:'bffbb'}]];
};