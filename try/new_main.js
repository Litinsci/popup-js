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
        let indexAdded = 1;
        let indexAddedDop = 1;
        let x = 0;
        NewCreatedElements = NewCreatedElements.reverse();
        for (let block of NewCreatedElements) {
            let addedEleements = this.inputBTN.dataset.headerAdded.split('*');
            let addedinformation = this.inputBTN.dataset.headerAddedinserted.split('*');
            let arr = [];
            let arr1 = [];
            let indexArr = 0;
            for (let inf of addedinformation) {
                arr.push(inf.split(' '))
                indexArr++;
            }

            // console.log(indexArr);
            if (block.classList.contains('added')) {
                for (let [j, added] of addedEleements.entries()) {
                    if (x != 0) {
                        x = 0;
                        indexAddedDop = indexAdded + j;
                        continue;
                    } else {
                        added = added.split(' ');
                        for (let [i, b] of added.entries()) {
                            if (b != "") {
                                let addedElement = document.createElement(`${b}`);
                                arr1.push(...arr[(i - 1), j-1]);
                                addedElement.innerHTML= arr1[j-1,i];
                                block.append(addedElement);
                                
                            }
                            indexAdded = i;
                        }
                        x++;
                        if (added != "") {
                            indexAddedDop = indexAdded + j;
                            continue;
                        }

                    }
                    // indexAddedDop = indexAdded+j;
                }
                x++;
                if (addedEleements == "*") {
                    indexAddedDop = indexAdded;
                    break;
                }

            }

        }
        this.Header = popupHeader;
        console.log(this.Header);
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