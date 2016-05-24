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
                 
                 <table>
                 <template ngFor #tuneLine [ngForOf]="tune" #lineNum=index>
                    <tr>
                      <template ngFor #pcs [ngForOf]="tuneLine" #isLast=last #noteNum=index>
                        <td class = "{{pcs.note}}">
                          {{pcs.note}}
                        </td>
                        <td *ngIf="isLast" (click)="addNote(lineNum,noteNum)"> + </td>
                      </template>
                        
                      </tr>
                      <tr>
                      <template ngFor #pcs [ngForOf]="tuneLine" >
                        <td>
                          {{pcs.text}}
                        </td>
                      </template>
                    </tr>
                 </template>
                 </table>
                 `,
    styles: [`td { padding: 5; height : 40px;}
            .do {background: red}
            .re {background: #ff9900}
            .mi {background: yellow}
            .fa {background: green}
            .sol {background: aqua}
            .la {background: blue}
            .si {background: darkviolet}
            .do2 {background: red}
    `]
})


//export class Tune {
//  tuneLines: Piece[][];
//}

export class AddTuneComponent { 
  tune: Piece[][] = [[{text:'ма',note:'do'},{text:'лень',note:'mi'},{text:'кой',note:'mi'},{text:'ё',note:'sol'},{text:'лоч',note:'mi'},{text:'ке',note:'mi'}],[{text:'хо',note:'sol'},{text:'лод',note:'fa'},{text:'но',note:'mi'},{text:'зи',note:'re'},{text:'мой',note:'do'}]];

  addNote(lineNum,noteLine) {
    this.tune[lineNum].push({text:'мф',note:'do'});
  }
};