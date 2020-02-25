class Options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
        div.textContent = 'pri+vettbrbw';
        div.style.cssText = `
            height : ${this.height}px;
            width : ${this.width}px;
            background : ${this.bg};
            font-size : ${this.fontSize}px;
            text-align : ${this.textAlign};
        `;
        document.body.appendChild(div);
    }
}


const swqtr = new Options(300,100,'red',18,'left');

swqtr.createDiv();