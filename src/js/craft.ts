import {QVueGlobals} from "quasar";
import {api} from "boot/axios";
import {notifyError} from "src/js/myFuncts";
import {ProfClass} from "src/js/prof";
import {ItemClass} from "src/js/item";
import {PriceClass} from "src/js/price";
import {myAxios} from "src/js/myAxios";

export class CraftPool {
  mainCraft?: Craft;
  otherCrafts: Craft[];

  constructor({
                mainCraft,
                otherCrafts = []
              }: Partial<CraftPool> = {}) {

    this.mainCraft = mainCraft;
    this.otherCrafts = otherCrafts;
  }
}

export class Craft {

  private static path: string = 'api/craft.php'

  id: number;
  craftName: string;
  resultItemId: number;
  resultAmount: number;
  countData: any;
  Prof: ProfClass;
  profNeed: number;
  doodName: string;
  Mats: ItemClass[];
  craftTime: number;

  constructor({
                id = -1,
                craftName = 'Новый итем',
                resultItemId = -1,
                resultAmount = 0,
                countData,
                Prof,
                profNeed = 0,
                doodName = '',
                Mats = [],
                craftTime = 0
              }: Partial<Craft> = {}) {
    this.id = id;
    this.craftName = craftName;
    this.resultItemId = resultItemId;
    this.resultAmount = resultAmount;
    this.countData = countData;
    this.Mats = Mats;
    this.craftTime = craftTime;
    this.Prof = Prof || new ProfClass();
    this.profNeed = profNeed;
    this.doodName = doodName;

  }

  static async getList(q: QVueGlobals, itemId: number): Promise<CraftPool | PriceClass[]> {
    const url = String(process.env.API) + 'api/craft.php';
    const params = {
      method: 'getList',
      itemId: itemId,
    };
    try {
      const response = await api.post(url, {params});

      if (!response?.data?.result) throw new Error();

      if (!!response?.data?.data?.Lost?.length) {
        return response.data.data.Lost.map((lostData: any) => {
          return new PriceClass(lostData);
        });
      }

      const otherCrafts = response?.data?.data?.otherCrafts ?? []
      const mainCraft = new Craft(response.data.data.mainCraft)
      return new CraftPool({mainCraft, otherCrafts})

    } catch (error) {
      q.notify(notifyError(error));
      return [];
    }
  }

  static async setAsUBest(q: QVueGlobals, craftId: number): Promise<boolean> {

    const params = {
      method: 'setAsUBest',
      craftId: craftId,
    }

    return myAxios.set(q, this.path, params)
  }

  static async resetUBest(q: QVueGlobals, craftId: number): Promise<boolean> {

    const params = {
      method: 'resetUBest',
      craftId: craftId,
    }

    return myAxios.set(q, this.path, params)
  }
}
