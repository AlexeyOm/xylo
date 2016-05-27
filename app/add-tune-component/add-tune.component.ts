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

/*
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <style>
    td { padding: 5;  width : 80px; height : 40px;}
            .do {background: red}
            .re {background: #ff9900}
            .mi {background: yellow}
            .fa {background: green}
            .sol {background: aqua}
            .la {background: blue}
            .si {background: darkviolet}
            .do2 {background: red}
  </style>
</head>
<body>

<div class="container">
  <h3>Tooltip Options</h3>
  <p>The <strong>html</strong> option specifies whether to accept HTML tags in the tooltip.</p>
  <button class="btn btn-success btn-md">Hover over me</button>
</div>

<script>
$(document).ready(function(){
    $('.btn').tooltip({trigger: "manual", title: `
    <table>
      <tr>
        <td class = "do"> do </td>
        <td class = "re"> do </td>
        <td class = "mi"> do </td>
        <td class = "fa"> do </td>
        <td class = "sol"> do </td>
        <td class = "la"> do </td>
        <td class = "si"> do </td>
        <td class = "do2"> do </td>
      <tr>
    </table>
                         `, html: true, placement: "bottom"});
   $('.btn').click(function(){$('.btn').tooltip("show");});
});
</script>

</body>
</html>


*/
