System.register(['angular2/core', './wordwheel.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, wordwheel_service_1;
    var WordWheelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (wordwheel_service_1_1) {
                wordwheel_service_1 = wordwheel_service_1_1;
            }],
        execute: function() {
            WordWheelComponent = (function () {
                function WordWheelComponent() {
                    this.title = '';
                    this.matchedWords = [];
                }
                WordWheelComponent.prototype.calculateWord = function () {
                    if (this.letters != null && this.letters.length == 7) {
                        this.letters = this.letters.toLocaleUpperCase();
                        var words = new wordwheel_service_1.WordWheelService().getWords();
                        var matchedWords = [];
                        //if ? is present in string, use regular expressions to find matches
                        var forwardRegEx = this.letters.replace("?", "[A-Z]");
                        var reverseRegEx = this.letters.split("").reverse().join("").replace("?", "[A-Z]");
                        words.forEach(function (element) {
                            //each mega string is a combination of the word repeated on itself
                            //this means any string can start at any position and loop back on itself and still be found
                            var megaString = element + element;
                            var matchedWordForward = megaString.match(new RegExp("(" + forwardRegEx + ")"));
                            var matchedWordReversed = megaString.match(new RegExp("(" + reverseRegEx + ")"));
                            if ((matchedWordForward != null && matchedWordForward.length > 0)
                                || (matchedWordReversed != null && matchedWordReversed.length > 0)) {
                                matchedWords.push(element);
                            }
                        });
                        if (matchedWords.length > 0) {
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
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], WordWheelComponent.prototype, "letters", void 0);
                WordWheelComponent = __decorate([
                    core_1.Component({
                        selector: 'wordwheel',
                        template: "\n    <p>{{title}}</p>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"#word of matchedWords\" [style.margin-top]='marginTop'>\n         {{word}}\n        </li>\n    </ul>",
                        providers: [wordwheel_service_1.WordWheelService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WordWheelComponent);
                return WordWheelComponent;
            }());
            exports_1("WordWheelComponent", WordWheelComponent);
        }
    }
});
//# sourceMappingURL=wordwheel.component.js.map