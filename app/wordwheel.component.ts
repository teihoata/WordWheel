import {Component, Input} from 'angular2/core'
import {WordWheelService} from './wordwheel.service'

@Component({
    selector: 'wordwheel',
    template: `
    <p>{{title}}</p>
    <ul class="list-group">
        <li class="list-group-item" *ngFor="#word of matchedWords" [style.margin-top]='marginTop'>
         {{word}}
        </li>
    </ul>`,
    providers: [WordWheelService]
})
export class WordWheelComponent
{
    @Input() letters:string;
    title = '';
    matchedWords = [];

    calculateWord() {
        if(this.letters != null && this.letters.length == 7)
        {
            this.letters = this.letters.toLocaleUpperCase();
            var words = new WordWheelService().getWords();
            var matchedWords = [];
            words.forEach(element => {
                var addWord = true;
                var reversed = element.split("").reverse().join("");
                var megaString = element + element + reversed + reversed;
                
                if(megaString.indexOf(this.letters) >= 0) {
                    matchedWords.push(element);
                }
            });

            if(matchedWords.length > 0)
            {
                this.title = 'Matches Found:';
                this.matchedWords = matchedWords;   
            }
            else {
                this.title = 'No matches found';
                this.matchedWords = [];
            }            
        }
        else {
            this.title = 'You need to enter at least 7 characters';
            this.matchedWords = [];
        }
    }
}