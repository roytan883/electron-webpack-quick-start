import { observable, extendObservable, autorun } from 'mobx';

class GD {
  @observable userName = "abc"
  @observable password = "123"
}

const gd = new GD()

export default gd