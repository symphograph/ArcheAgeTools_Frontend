import {QVueGlobals} from "quasar";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/js/myFuncts";

export class ProfClass {
  id: number;
  name: string;
  lvl: number;

  constructor({
                id = -1,
                name = '',
                lvl = 0
              }: Partial<ProfClass> = {}) {
    this.id = id;
    this.name = name;
    this.lvl = lvl
  }

  static async setLvl(q: QVueGlobals, profId: number, lvl: number): Promise<boolean> {
    const url = String(process.env.API) + 'api/prof.php';
    const params = {
      method: 'setLvl',
      profId: profId,
      lvl: lvl,
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
