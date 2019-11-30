import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mcserv} from "../shared/models/mcserv.model";

@Component({
  selector: 'app-mcserv-view',
  templateUrl: './mcserv-view.component.html',
  styleUrls: ['./mcserv-view.component.css']
})
export class McservViewComponent implements OnInit {
  @Input() inMcserv: Mcserv; /* получаем доступ сверху */
  @Output() delMcserv = new EventEmitter<number>(); /* отправляем наверх */
  constructor() { }

  ngOnInit() {
  }
  on_del_person () {
    this.delMcserv.emit(this.inMcserv.id);
  }
}
