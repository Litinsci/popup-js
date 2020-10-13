'use strict';

let btn = $("#btn_Show_Pop"),
    section = $("#ToPopup");

class Popup {
    constructor(inputBTN, section) {
        this.inputBTN = inputBTN;
        this.section = section;
    }
    PopCreated(){
        let content = this.inputBTN.attr("data-popup");
        this.section.append(content);
        return  this.section;
    }   
}
btn.click(function() {
    let h1 = new Popup(btn, section);
    h1.PopCreated();
})