import { observable } from 'mobx';

class GS {
  @observable logining = false
  @observable isLogin = false
}

const gs = new GS()

export default gs


