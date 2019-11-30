export class Mcserv { /* описывает микросервис */
  public id: number;
  public name: string;
  public tag: string;
  public desc: string;
  public status: string;
  constructor(name: string, tag: string, desc: string, status: string, id?: number) {
    this.name = name;
    this.tag = tag;
    this.desc = desc;
    this.status = status;
    this.id = id;
  }
}
