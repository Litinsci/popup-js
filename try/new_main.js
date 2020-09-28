'use strict';

let btn = document.getElementById('btn_Show_Pop'),
    section = document.getElementById('ToPopup');

class Popup {
    constructor(inputBTN, section) {
        this.inputBTN = inputBTN;
        this.section = section;
    }
    ElementsHeader() {
        let i = 0;
        let NewCreatedElements = [];
        let createdElements = this.inputBTN.dataset.headerTag.split(' ');
        let inneredInformation = this.inputBTN.dataset.headerInserted.split(' ');
        let classEleements = this.inputBTN.dataset.headerClass.split(' ');
        // console.log(inneredInformation)
        for (let block of createdElements) {
            let blockHTML = document.createElement(`${block}`);
            blockHTML.innerHTML = `${inneredInformation[i]}`;
            blockHTML.classList.add(`${ classEleements[i]}`);
            NewCreatedElements.push(blockHTML);
            i++;
        }
        // создание шапки
        let popupHeader = document.createElement('div');
        popupHeader.classList.add('popup-header');
        for (let blok of NewCreatedElements) {
            popupHeader.append(blok);
        }
        this.Header = popupHeader;
        // console.log(this.ElementsHeader);
    }
    ElementsBody() {
        let i = 0;
        let NewCreatedElements = [];
        let createdElements = this.inputBTN.dataset.bodyTag.split(' ');
        let inneredInformation = this.inputBTN.dataset.bodyInserted.split(' ');
        let classEleements = this.inputBTN.dataset.bodyClass.split(' ');
        // console.log(inneredInformation)
        for (let block of createdElements) {
            let blockHTML = document.createElement(`${block}`);
            blockHTML.innerHTML = `${inneredInformation[i]}`;
            blockHTML.classList.add(`${ classEleements[i]}`);
            NewCreatedElements.push(blockHTML);
            i++;
        }
        // создание тела попапа
        let popupBody = document.createElement('div');
        popupBody.classList.add('popup-body');
        for (let blok of NewCreatedElements) {
            popupBody.append(blok);
        }
        this.Body = popupBody;
        // console.log(this.ElementsHeader);
    }
    // 
    ElementsFooter() {
        let i = 0;
        let NewCreatedElements = [];
        let createdElements = this.inputBTN.dataset.footerTag.split(' ');
        let inneredInformation = this.inputBTN.dataset.footerInserted.split(' ');
        let classEleements = this.inputBTN.dataset.footerClass.split(' ');
        // console.log(inneredInformation)
        for (let block of createdElements) {
            let blockHTML = document.createElement(`${block}`);
            blockHTML.innerHTML = `${inneredInformation[i]}`;
            blockHTML.classList.add(`${ classEleements[i]}`);
            NewCreatedElements.push(blockHTML);
            i++;
        }
        // создание тела попапа
        let popupFooter = document.createElement('div');
        popupFooter.classList.add('popup-footer');
        for (let blok of NewCreatedElements) {
            popupFooter.append(blok);
        }
        this.Footer = popupFooter;
    }

    PopCreated() {
        this.ElementsHeader();
        this.ElementsBody();
        this.ElementsFooter();
        // console.log(this.Footer);
        let popupContent = document.createElement('div');
        popupContent.classList.add('popup-content');
        popupContent.append(this.Header);
        popupContent.append(this.Body);
        popupContent.append(this.Footer);
        let popup = document.createElement('div');
        popup.classList.add('popup');
        popup.append(popupContent);
        //  console.log(popup);  
        section.append(popup);
    }
}
// 
btn.onclick = () => {
    let h1 = new Popup(btn, section);
    // h1.ElementsHeader();
    h1.PopCreated();

}