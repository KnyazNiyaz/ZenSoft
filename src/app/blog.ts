export class Blog {

  id: number;
  title = '';
  description: ' ';
  isShown = false;
  isEdit = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
