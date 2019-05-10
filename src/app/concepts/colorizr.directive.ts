import { Directive, ElementRef, Renderer2 } from '@angular/core';

//decorator 
// this directive is used in concepts component -- refer directives tab 
@Directive({
  selector: '[appColorizr]'
})
export class ColorizrDirective {

  constructor( private elementRef: ElementRef, private renderer: Renderer2 ) { // Dep Injection
    console.log("Inside ColorizrDirectives Constructor");
    console.log(this.elementRef.nativeElement);

     //JS way
    //this.elementRef.nativeElement.style.backgroundColor = 'red';

    //Angular's way
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', '200px');

    
  }

}
