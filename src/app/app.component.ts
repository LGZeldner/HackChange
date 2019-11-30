import { Component } from '@angular/core';
import {McservsService} from "./shared/services/mcservs.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HackChange';
  mcservs: /*Mcserv[] = []*/any;
  constructor(private mcservsService: McservsService) { /* в конструкторе не очень хорошо проводить инициализации */
    console.log("Constructor");
  }

  async ngOnInit() { /* лучше инициализировать здесь */
    this.mcservs = this.mcservsService.mcservs;

  }
}
