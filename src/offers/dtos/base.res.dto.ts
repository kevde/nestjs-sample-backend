export abstract class BaseRes {
  constructor(entity: any) {
    Object.assign(this, entity);
  }
}