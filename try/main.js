'use strict';

let btn = document.getElementById('btn_Show_Pop'),
    section = document.getElementById('ToPopup');

class Popup {
    // сборка во едино весь попап
    // передовать в конструктор объект на уровень ниже
    constructor(popupContent) {
        this.popupContent = popupContent;
    }
    static PopupContent = class {
        // сборка по блокам попапа
        // все передоваемые параметры являються объектом на уровень ниже
        // popupHeader - шапка попапа
        // popupBody - тело поапапа
        // popupFooter - подвал попапа
        // передовать в конструктор объект на уровень ниже
        constructor(popupHeader, popupBody, popupFooter) {
            this.popupHeader = popupHeader;
            this.popupBody = popupBody;
            this.popupFooter = popupFooter;
        }
        static PopupContext = class {
            // все передоваемые параметры являются массивами
            // createdElements - создоваемый эллемент
            // insertedInformatioHTML   - вставляемая информация в эллемент
            // classElements    - класс для вставляемого эллемента
            // передовать в конструктор объект на уровень ниже
            constructor(createdElements, insertedInformatioHTML, classElements) {
                this.createdElements = createdElements;
                this.insertedInformatioHTML = insertedInformatioHTML;
                this.classElements = classElements;
            }
            // создаёт эллемент -> заполняет его информацией -> добавляет класс
            Elements() {
                let i = 0;
                let NewCreatedElements = [];
                for (let block of this.createdElements) {
                    let blockHTML = document.createElement(`${block}`);
                    blockHTML.innerHTML = `${this.insertedInformatioHTML[i]}`;
                    blockHTML.classList.add(`${ this.classElements[i]}`);
                    NewCreatedElements.push(blockHTML);
                    i++;
                }
                return this.createdElements = NewCreatedElements;
            }
        }
        // 
        UnionPopupHeader() {
            let popupHeader = document.createElement('div');
            popupHeader.classList.add('popup-header');
            for (let blok of this.popupHeader.createdElements) {
                popupHeader.append(blok);
            }
            return popupHeader;
        }
        UnionPopupBpdy() {
            let popupBody = document.createElement('div');
            popupBody.classList.add('popup-body');
            for (let blok of this.popupBody.createdElements) {
                popupBody.append(blok);
            }
            return popupBody;
        }
        UnionPopupFooter() {
            let popupFooter = document.createElement('div');
            popupFooter.classList.add('popup-footer');
            for (let blok of this.popupFooter.createdElements) {
                popupFooter.append(blok);
            }
            return popupFooter;
        }
        UnionALL(popupHeader, popupBody, popupFooter) {
            let popupContent = document.createElement('div');
            popupContent.classList.add('popup-content');
            popupContent.append(popupHeader);
            popupContent.append(popupBody);
            popupContent.append(popupFooter);
            return popupContent;
        }
    }
    EndPopup() {
        let popup = document.createElement('div');
        popup.classList.add('popup');
        popup.append(this.popupContent);
        return popup;
    }
}
// 
btn.onclick = () => {

    let context = new Popup.PopupContent.PopupContext([`h1`, `span`], [`sdhfksd`, `&times;`], [`3`, `close`]);
    context.Elements();
    let context2 = new Popup.PopupContent.PopupContext([`h1`, `div`, `ul`], [`Лысый`, `Ежик`, `dsflsl`], [`3`]);
    context2.Elements();
    let context3 = new Popup.PopupContent.PopupContext([`h3`, `div`, `ul`], [], [`3`]);
    context3.Elements();

    let context1 = new Popup.PopupContent(context, context2, context3);
    let header = context1.UnionPopupHeader();
    let body = context1.UnionPopupBpdy();
    let footer = context1.UnionPopupFooter();
    let content = context1.UnionALL(header, body, footer);
    // console.log(header);
    let popup = new Popup(content);
    let pop = popup.EndPopup();
    // console.log(pop);
    section.append(pop);

    document.querySelector('.close').onclick = () =>{
        pop.classList.remove();
        pop.remove();
    }
}
