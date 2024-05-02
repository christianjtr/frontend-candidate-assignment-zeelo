import BaseEntity from './BaseEntity';

export default class User extends BaseEntity {
  name: string = '';

  constructor(id: number, name: string) {
    super(id);

    this.name = name;
  }
}
