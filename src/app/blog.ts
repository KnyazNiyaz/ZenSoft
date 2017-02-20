export class Blog {

  id: number;
  title = '';
  description: ' ';
  isEdit = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
