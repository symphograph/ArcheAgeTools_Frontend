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
