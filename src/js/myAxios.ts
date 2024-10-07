import {QVueGlobals} from "quasar";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/js/myFuncts";

export class myAxios {
  static async set(q: QVueGlobals, path: string, params: any): Promise<boolean> {
    const url = String(process.env.API) + path;
    try {
      console.log('myAxios')
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
