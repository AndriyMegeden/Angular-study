//створена вручну деректива яку ще потрібно задекларувати в модулі сторінки
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive ({
    //дужки потрібні шоб позначити шо це атрибут
    selector: '[appStyle]'
})
export class StyleDirective{
    @Input('appStyle') color: string = 'blue'
    @Input() fontWeight = 'normal'
    @Input('fontSize') fontSize: string = '30px'

    //робота з @HostBinding і зміна розміру шрифта
    @HostBinding('style.fontSize') elSize = '20px'

    // змінюєм колір за допомогою дерективи
    constructor(private element: ElementRef, private renderer: Renderer2){
    }
    // HostListener слухає собитіє і по click передає в коносль елемент по якому клікнули
    @HostListener('click', ['$event.target']) onClick(event: Event){
        console.log(event)
    }

    @HostListener('mouseenter') onEnter(){
        this.elSize = this.fontSize
        this.renderer.setStyle(this.element.nativeElement, 'color', this.color)
        this.renderer.setStyle(this.element.nativeElement, 'fontWeight', this.fontWeight)
    }
    @HostListener('mouseleave') onLeave(){
        this.elSize = '20px'
        this.renderer.setStyle(this.element.nativeElement, 'color',  null)
        this.renderer.setStyle(this.element.nativeElement, 'fontWeight', null)
    }
}