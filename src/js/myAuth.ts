import {QVueGlobals} from "quasar";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/js/myFuncts";

interface jwtPayload {
  uid: number;
  powers: number[];
  authType: string;
  persId: number;
  accountId: number;
  // другие потенциальные поля...
}

interface explodedJWT {
  header: string;
  payload: jwtPayload;
  Signature: string;
}

export class myUser {
  static self: myUser;

  AccessToken: string;
  SessionToken: string;

  constructor(AccessToken: string = '', SessionToken: string = '') {
    this.AccessToken = AccessToken;
    this.SessionToken = SessionToken;
  }

  powers(): number[] {
    return myJWT.powers(this.AccessToken);
  }

  authType(): string {
    return myJWT.authType(this.AccessToken)
  }

  id(): number {
    return myJWT.userId(this.AccessToken)
  }

  persId(): number {
    return myJWT.persId(this.AccessToken)
  }

  accountId(): number {
    return myJWT.accountId(this.AccessToken)
  }


  isPermit(allowed: number[]): boolean
  {
    if(!allowed.length) {
      return true
    }
    return allowed.some(l=>this.powers().includes(l))
  }
}


export class myJWT {
  static powers(jwt: string): number[] {
    const Payload: jwtPayload = this.getPayload(jwt);
    return Payload.powers ?? [];
  }

  static userId(jwt: string): number {
    const Payload: jwtPayload = this.getPayload(jwt);
    return Payload.uid ?? 0;
  }

  static getExploded(jwt: string): explodedJWT {

    let [Header, Payload, Signature] = jwt.split('.');

    return {
      header: Header,
      payload: JSON.parse(atob(Payload)),
      Signature: Signature
    };
  }

  static getPayload(jwt: string): jwtPayload {
    const exploded = this.getExploded(jwt);
    return exploded.payload;
  }

  static authType(jwt: string): string {
    const Payload: jwtPayload = this.getPayload(jwt);
    return Payload.authType;
  }

  static persId(jwt: string): number {
    const Payload: jwtPayload = this.getPayload(jwt);
    return Payload.persId;
  }

  static accountId(jwt: string): number {
    const Payload: jwtPayload = this.getPayload(jwt);
    return Payload.accountId;
  }

}

export class myAccSets {
  static self: myAccSets;

  accountId: number;
  publicNick: string;
  grade: number;
  mode: number;
  old_id: number|null;
  siol: boolean;
  authType: string;
  avaFileName: string|null;
  serverGroupId: number;



  constructor({
                accountId = -1,
                publicNick = '',
                grade = 1,
                mode = 1,
                old_id = null,
                siol = false,
                authType = 'default',
                avaFileName = null,
                serverGroupId = 100
              }: Partial<myAccSets> = {}) {

    this.accountId = accountId;
    this.publicNick = publicNick;
    this.grade = grade;
    this.mode = mode;
    this.old_id = old_id;
    this.siol = siol;
    this.authType = authType;
    this.avaFileName = avaFileName;
    this.serverGroupId = serverGroupId;
  }

  static async setServerGroup(q: QVueGlobals, serverGroupId: number): Promise<boolean> {
    const url = String(process.env.API) + 'api/settings.php';
    const params = {
      method: 'setServerGroup',
      serverGroupId: serverGroupId,
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
