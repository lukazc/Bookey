import {Directive, Input, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: 'img[appFallbackSrc]'
})

export class ImagePreloadDirective {
    @HostBinding('src') src: string;
    @Input() appFallbackSrc: string;
    @HostBinding('class') className;

    @HostListener('error') updateUrl() {
        this.src = this.appFallbackSrc;
    }
    @HostListener('load') load() {
        this.className = 'image-loaded';
    }
}
