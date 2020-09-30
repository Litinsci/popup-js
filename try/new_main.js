'use strict';

let btn = document.getElementById('btn_Show_Pop'),
    section = document.getElementById('ToPopup');

class Popup {
    constructor(inputBTN, section) {
        this.inputBTN = inputBTN;
        this.section = section;
        this.addedClass = '';
    }
    creare(createdElements, inneredInformation, classEleements, NewCreatedElements) {
        let i = 0;
        let laterBlock;
        for (let [index, block] of createdElements.entries()) {
            laterBlock = block;
            if (block == '*') {

                this.addedClass = 'added';
               
                continue;

            }

            let blockHTML = document.createElement(`${block}`);

            blockHTML.innerHTML = (inneredInformation[i] != undefined) ? `${inneredInformation[i]}` : '';
            blockHTML.classList.add(`${ classEleements[i]}`);
            if (this.addedClass != '') {
                blockHTML.classList.add(`${ this.addedClass}`);
            }
            NewCreatedElements.push(blockHTML);
            this.newElement = NewCreatedElements;
            i++;
            this.addedClass = '';


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
        popupHeader.classList.add(`${this.inputBTN.dataset.headerWrapper}`);
        for (let blok of NewCreatedElements) {
            popupHeader.append(blok);
        }
        let indexAdded = 0;
        let x = 0;
        for (let block of NewCreatedElements) {
            
            
            let addedEleements = this.inputBTN.dataset.headerAdded.split('*');
            // addedEleements  = addedEleements.reverse();
            if (block.classList.contains('added')) {
                // addedEleements  = addedEleements.reverse();
                for (let added of addedEleements) {
                   
                    if (x != 0) {
                        x=0;
                        continue ;
                    } else {
                        // added=added.reverse();
                        added = added.split(' ');
                        
                        
                        for (let b of added) {
                                if (b != "") {
                                    let addedElement = document.createElement(`${b}`);
                                    block.append(addedElement);
                                }
                           
                        }
                        x++;
                        
                        if (added != "") {
                            continue;
                        }
                        
                    }
                    
                }
                
                x++;
                if (addedEleements == "*") {
                    break;
                }

            }

        }


        this.Header = popupHeader;
        
    }
    ElementsBody() {
        let i = 0;
        let NewCreatedElements = [];
        let createdElements = this.inputBTN.dataset.bodyTag.split(' ');
        let inneredInformation = this.inputBTN.dataset.bodyInserted.split(' ');
        let classEleements = this.inputBTN.dataset.bodyClass.split(' ');
       

        this.creare(createdElements, inneredInformation, classEleements, NewCreatedElements);
        // создание тела попапа
        let popupBody = document.createElement('div');
        popupBody.classList.add(`${this.inputBTN.dataset.bodyWrapper}`);
        for (let blok of NewCreatedElements) {
            popupBody.append(blok);
        }
        this.Body = popupBody;
        
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
        popupFooter.classList.add(`${this.inputBTN.dataset.footerWrapper}`);
        for (let blok of NewCreatedElements) {
            popupFooter.append(blok);
        }
        this.Footer = popupFooter;
    }

    PopCreated() {
        this.ElementsHeader();
        this.ElementsBody();
        this.ElementsFooter();
        let popupContent = document.createElement('div');
        popupContent.classList.add(`${this.inputBTN.dataset.contentWrapper}`);
        popupContent.append(this.Header);
        popupContent.append(this.Body);
        popupContent.append(this.Footer);
        let popup = document.createElement('div');
        popup.classList.add(`${this.inputBTN.dataset.popupWrapper}`);
        popup.append(popupContent);
        section.append(popup);
    }
}
// 
btn.onclick = () => {
    let h1 = new Popup(btn, section);
    h1.PopCreated();

}