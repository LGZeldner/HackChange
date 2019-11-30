import { Component, OnInit } from '@angular/core';
import {McservsService} from "../shared/services/mcservs.service";

@Component({
  selector: 'app-mcserv-list',
  templateUrl: './mcserv-list.component.html',
  styleUrls: ['./mcserv-list.component.css']
})
export class McservListComponent implements OnInit {

  constructor(private mcservsService: McservsService) { }

  ngOnInit() {
  }

}
