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
            
            //if ? is present in string, use regular expressions to find matches
            var forwardRegEx = this.letters.replace("?", "[A-Z]");
            var reverseRegEx = this.letters.split("").reverse().join("").replace("?", "[A-Z]");

            words.forEach(element => {
                //each mega string is a combination of the word repeated on itself
                //this means any string can start at any position and loop back on itself and still be found
                var megaString = element + element;
                var matchedWordForward = megaString.match(new RegExp("(" + forwardRegEx + ")"));
                var matchedWordReversed = megaString.match(new RegExp("(" + reverseRegEx + ")"));
                if((matchedWordForward != null && matchedWordForward.length > 0) 
                || (matchedWordReversed != null && matchedWordReversed.length > 0)) {
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
            this.title = 'You need to enter at least 7 characters - other lengths coming soon';
            this.matchedWords = [];
        }
    }
}