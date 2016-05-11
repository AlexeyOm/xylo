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
  tune: Piece[][] = [[{text:'ма',note:'Соль'},{text:'лень',note:'Ми'},{text:'кой',note:'Ми'},{text:'ё',note:'Соль'},{text:'лоч',note:'Ми'},{text:'ке',note:'Ми'}],[{text:'хо',note:'Соль'},{text:'лод',note:'Фа'},{text:'но',note:'Ми'},{text:'зи',note:'Ре'},{text:'мой',note:'До'}]];
};