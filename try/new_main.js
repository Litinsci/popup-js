'use strict';

let btn = document.getElementById('btn_Show_Pop'),
    section = document.getElementById('ToPopup');

class Popup {
    constructor(inputBTN, section) {
        this.inputBTN = inputBTN;
        this.section = section;
    }
    creare(createdElements, inneredInformation, classEleements, NewCreatedElements) {
        let i = 0;
        // let NewCreatedElements = [];
        let nestedelement = [];
        let link = 0, link_to_add = 0;
        let laterBlock;
        for (let [index,block] of createdElements.entries()) {
            laterBlock = block;
            if (block == '[') {
                link++;
                // link_to_add = i;
                if (link_to_add == 0) {
                    this.link_to_add = index;
                    // console.log(index);
                }
                continue;

            }
            if (link == 1) {
                // console.log(link);
                // nestedelement = document.createElement(`${block}`);
                // nestedelement.innerHTML = '1';
                // laterBlock.append(nestedelement);
                if (block == ']') {
                    link--;
                    continue;
                }
                nestedelement.push(block);
                console.log(nestedelement);
                
            }
            if (link == 0) {
                let blockHTML = document.createElement(`${block}`);
                
                blockHTML.innerHTML = (inneredInformation[i] != undefined) ? `${inneredInformation[i]}` : '';
                blockHTML.classList.add(`${ classEleements[i]}`);
                NewCreatedElements.push(blockHTML);
                this.newElement = NewCreatedElements;
                i++;
                
            }
           
        }
        // console.log(this.newElement[1]);
        for (let [index,block] of createdElements.entries()) {
            if (index == this.link_to_add) {
                // console.log(index);
                let blockHTML = document.createElement(`${nestedelement[index]}`);
                this.newElement[this.link_to_add].append(blockHTML);
            }
        }
    }


    ElementsHeader() {
        // let i = 0;
        let NewCreatedElements = [];
        let createdElements = this.inputBTN.dataset.headerTag.split(' ');
        let inneredInformation = this.inputBTN.dataset.headerInserted.split(' ');
        let classEleements = this.inputBTN.dataset.headerClass.split(' ');

        this.creare(createdElements, inneredInformation, classEleements, NewCreatedElements);
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

        this.creare(createdElements, inneredInformation, classEleements, NewCreatedElements);
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

        this.creare(createdElements, inneredInformation, classEleements, NewCreatedElements);
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
    h1.PopCreated();

}