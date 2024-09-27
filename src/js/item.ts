import {QVueGlobals} from "quasar";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/js/myFuncts";

export class ItemClass {
  id: number;
  name: string;
  isBuyOnly: boolean;
  personal: boolean;
  isMat: boolean;
  Pricing: any;
  Price: any;

  constructor({
                id = -1,
                name = 'Новый итем',
                isBuyOnly = false,
                personal = false,
                isMat = false,
                Pricing,
                Price
              }: Partial<ItemClass> = {}) {
    this.id = id;
    this.name = name;
    this.isBuyOnly = isBuyOnly
    this.personal = personal
    this.isMat = isMat
    this.Pricing = Pricing
    this.Price = Price;
  }

  static async setBuyOnly(q: QVueGlobals, itemId: number, isBuyOnly: boolean): Promise<boolean> {
    const url = String(process.env.API) + 'api/item.php';
    const params = {
      method: isBuyOnly ? 'addToBuyable' : 'delFromBuyable',
      itemId: itemId,
      name: this.name,
    };
    try {
      const response = await api.post(url, { params });

      if (!response?.data?.result) throw new Error();

      q.notify(notifyOK());
      return true;
    } catch (error) {
      q.notify(notifyError(error));
      return false;
    }
  }
}
