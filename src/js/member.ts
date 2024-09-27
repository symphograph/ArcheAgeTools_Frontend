import {ItemClass} from "src/js/item";

export class Member {
  accountId: number;
  avaFileName: string;
  followersCount: number;
  isFollow: boolean;
  pricesCount: number
  publicNick: string;
  LastPricedItem: ItemClass|undefined;
  constructor({
                accountId = -1,
                avaFileName = '',
                followersCount = 0,
                isFollow = false,
                pricesCount = 0,
                publicNick = '',
                LastPricedItem
              }: Partial<Member> = {}) {

    this.accountId = accountId;
    this.avaFileName = avaFileName;
    this.followersCount = followersCount;
    this.isFollow = isFollow;
    this.pricesCount = pricesCount;
    this.publicNick = publicNick;
    this.LastPricedItem = LastPricedItem;
  }
}
