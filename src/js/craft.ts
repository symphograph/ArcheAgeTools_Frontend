import {QVueGlobals} from "quasar";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/js/myFuncts";
import {ProfClass} from "src/js/prof";

export class Craft {

  id: number;
  craftName: string;
  resultItemId: number;
  countData: any;
  Prof: ProfClass;
  profNeed: number;
  doodName: string;
  constructor({
                id = -1,
                craftName = 'Новый итем',
                resultItemId = -1,
                countData,
                Prof,
                profNeed = 0,
                doodName = ''
              }: Partial<Craft> = {}) {
    this.id = id;
    this.craftName = craftName;
    this.resultItemId = resultItemId;
    this.countData = countData;
    this.Prof = Prof || new ProfClass();
    this.profNeed = profNeed;
    this.doodName = doodName;

  }

  static async setAsUBest(q: QVueGlobals, craftId: number): Promise<boolean> {
    const url = String(process.env.API) + 'api/craft.php';
    const params = {
      method: 'setAsUBest',
      craftId: craftId,
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

  static async resetUBest(q: QVueGlobals, craftId: number): Promise<boolean> {
    const url = String(process.env.API) + 'api/craft.php';
    const params = {
      method: 'resetUBest',
      craftId: craftId,
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
