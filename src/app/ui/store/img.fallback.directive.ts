import {Directive, Input, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: 'img[appFallbackSrc]'
})

export class ImageFallbackDirective {
    @HostBinding('src') @Input() src: string;
    @Input() appFallbackSrc: string;
    @HostBinding('class') @Input() class;

    @HostListener('error') updateUrl() {
        this.src = this.appFallbackSrc;
    }
    @HostListener('load') load() {
        this.class = this.class + ' img__loaded';
    }
}
