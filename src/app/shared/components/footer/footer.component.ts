import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `    
  <footer class="text-center">
    <hr>
    <app-nav>
      <li class="nav-item">
        <a class="nav-link" href="#">Back to Top</a>
      </li>
    </app-nav>
    <p class="redText">Copyright &copy; 2019 - ITC Infotech</p>
  </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
