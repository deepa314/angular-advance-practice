import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector:'[apphighlighter]'
})



export class HighlightDirective implements OnInit{
    @Input() defaultColor='transparent';
    @Input () highlightColor='blue'
    @HostBinding('style.backgroundColor') backgroundColor:string = '';

 constructor(private el:ElementRef){

 }
  ngOnInit(): void {
      this.backgroundColor=this.defaultColor
  }

  @HostListener('mouseenter')mouseOver(event:Event){
    this.backgroundColor=this.highlightColor
  }

  @HostListener('mouseleave')mouseLeave(event:Event){
    this.backgroundColor=this.defaultColor;
  }
}