import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {McservsApiService} from "./mcservs-api.service";
import {Mcserv} from "../models/mcserv.model";
import {isNullOrUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
export class McservsService implements OnInit{
  mcservs/* = []*/: any;
  constructor(private mcservsApiService: McservsApiService) { /* в конструкторе не очень хорошо проводить инициализации */
    console.log("Constructor");
    this.get_mcservs();
  }
  ngOnInit() {

  }
  async get_mcservs () {
    console.log("init");
    try {
      let gmcservs = this.mcservsApiService.getMcservs();
      this.mcservs = (isNullOrUndefined(await gmcservs)) ? [] : await gmcservs;
      console.log(this.mcservs);
    } catch (err) {
      console.log(err);
    }
  }
  get_mcserv_by_id (id: number) {
    return this.mcservs.find(mcserv => mcserv.id === id);
  }
  async on_add_mcserv (mcserv: Mcserv) {
    mcserv.id = (this.mcservs.length)
      ? this.mcservs[this.mcservs.length - 1].id + 1
      : 1;
    this.mcservs.push(mcserv);
    try {
      await this.mcservsApiService.postMcservs({
        name: mcserv.name, tag: mcserv.tag, desc: mcserv.desc, status: mcserv.status});
    }
    catch (e) {
      console.error(e);
    }
  }
  async on_edit_mcserv (ed_mcserv: Mcserv) {
    console.log("edit " + ed_mcserv.id);
    console.log(this.mcservs);
    this.mcservs.splice (
      this.mcservs.findIndex (mcserv => {mcserv.id === ed_mcserv.id}),
      1, ed_mcserv);
    console.log(this.mcservs);
    try {
      await this.mcservsApiService.putMcservs(ed_mcserv.id, {
        name: ed_mcserv.name, tag: ed_mcserv.tag, desc: ed_mcserv.desc, status: ed_mcserv.status});
    }
    catch (e) {
      console.error(e);
    }
  }
  async on_del_mcserv (del_mcserv_id: number) {
    this.mcservs.splice(this.mcservs.indexOf(this.mcservs.find((element, index, array) => {
      return (element.id === del_mcserv_id)
    })), 1); /* удалили из массива элемент */
    try {
      await this.mcservsApiService.deleteMcservs(del_mcserv_id);
    }
    catch (e) {
      console.error(e);
    }
  }
}
