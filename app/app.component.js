System.register(['angular2/core', './wordwheel.component'], function(exports_1, context_1) {
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
    var core_1, wordwheel_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (wordwheel_component_1_1) {
                wordwheel_component_1 = wordwheel_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.word = '';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        //selector is what we use in html tags to show the component
                        selector: 'my-app',
                        //template is what is shown on the page for the component
                        template: "<h1>NZ Herald Word Wheel Solver</h1>\n    <p>for when you can't wait till tomorrow's newspaper to know the answer</p>\n    <form class=\"form-inline\">\n        <div class=\"form-group\">\n            <label for=\"wordInput\">Enter Word Wheel Letters here: </label>\n            <input name=\"wordInput\" type=\"text\" [(ngModel)]=\"word\" class=\"form-control\" />\n        </div>\n        <br /><br />\n    <button type=\"submit\" (click)=\"wordWheel.calculateWord()\" class=\"btn btn-primary\">Solve The Wheel</button>\n</form>\n <wordwheel #wordWheel [letters]=\"word\"></wordwheel>",
                        //directives importing and using componenets
                        directives: [wordwheel_component_1.WordWheelComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map