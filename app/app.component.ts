import {Component} from 'angular2/core'
import {WordWheelComponent} from './wordwheel.component'

@Component({
    //selector is what we use in html tags to show the component
    selector: 'my-app',
    //template is what is shown on the page for the component
    template: `<h1>NZ Herald Word Wheel Solver</h1>
    <p>for when you can't wait till tomorrow's newspaper to know the answer</p>
    <form class="form-inline">
        <div class="form-group">
            <label for="wordInput">Enter Word Wheel Letters here: </label>
            <input name="wordInput" type="text" [(ngModel)]="word" class="form-control" />
        </div>
        <br /><br />
    <button type="submit" (click)="wordWheel.calculateWord()" class="btn btn-primary">Solve The Wheel</button>
</form>
 <wordwheel #wordWheel [letters]="word"></wordwheel>`,
    //directives importing and using componenets
    directives: [WordWheelComponent] 
})
export class AppComponent { 
    word = '';
}