import {QVueGlobals} from "quasar";
import {myAxios} from "src/js/myAxios";

export class PriceClass {

  private static path: string = 'api/price.php'

  accountId: number;
  serverGroupId: number;
  itemId: number;
  price: number;
  updatedAt: string;
  method: string;
  name: string;
  grade: number;
  icon: string;
  craftable: boolean;
  buyOnly: boolean;

  constructor({
    accountId = 1,
    serverGroupId = 100,
    itemId = 0,
    price = 0,
    updatedAt = "",
    method = "",
    name = "",
    grade = 1,
    icon = '',
    craftable = false,
    buyOnly = false
  }: Partial<PriceClass> = {}) {
    this.accountId = accountId;
    this.serverGroupId = serverGroupId;
    this.itemId = itemId;
    this.price = price;
    this.updatedAt = updatedAt;
    this.method = method;
    this.name = name;
    this.grade = grade;
    this.icon = icon;
    this.craftable = craftable;
    this.buyOnly = buyOnly;
  }

  static async set(q: QVueGlobals, itemId: number, val: number) : Promise<boolean> {

    const params = {
      method: 'set',
      itemId: itemId,
      price: val
    };

    return myAxios.set(q, this.path, params)
  }

  static async del(q: QVueGlobals, itemId: number) {
    const params = {
      method: 'del',
      itemId: itemId
    }

    return myAxios.set(q, this.path, params)
  }

  static color(method: string){
    switch (method){
      case 'byAny':
        return 'red'

      case 'byCraft':
        return 'gray'

      case 'byFromNPC':
        return 'gray'

      case 'byToNPC':
        return 'gray'

      case 'byFriends':
        return 'green'

      case 'byWellKnown':
        return 'green'

      case 'bySolo':
        return 'green'

      default:
        return 'red'
    }
  }
}
