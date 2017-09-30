
module Time {
    export class Test {
        element:HTMLElement;
        span:HTMLElement;
        timer:number;
        constructor(e:HTMLElement) {
            this.element = e;
            this.element.innerHTML = "The time now is";
            this.span = document.createElement("span");
            this.element.appendChild(this.span);
            this.span.innerHTML = new Date().toTimeString();
        }
        start(){
            this.timer = setInterval(() => this.span.innerHTML = new Date().toTimeString());
        }

        stop() {
            clearInterval(this.timer);
        }
    }
}

