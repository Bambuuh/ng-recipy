import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false

    @HostListener('click') onClick() {
        this.isOpen = !this.isOpen
    }
}