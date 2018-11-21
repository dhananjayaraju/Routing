import { Component } from '@angular/core';
import { Router, ActivatedRoute } from'@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';

  	constructor(private router:Router, private route:ActivatedRoute) {}

  	first() {
  		this.router.navigate(['first'])
  	}
	second() {
		this.router.navigate(['second'])
	}
	third() {
		this.router.navigate(['third'])
	}
}
//private router:Router--> router is our own variable name and Router in which we are name of the package we are calling 