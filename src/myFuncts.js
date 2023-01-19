import moment from 'moment'
import {api} from "boot/axios";

export function rateInfo (val) {
  let rates = [1, 0.5, 'гпх', 'гпх', 0.25]
  return rates[val - 1]
}

export function fDate(date) {
  if (date) {
    return moment(String(date)).format('DD.MM.YYYY')
  }
  return ''
}

export function toDate(date) {
  let now = moment(new Date()).format('YYYY-MM-DD')
  if(now < date)
    return 'н.в.'
  return fDate(date)
}

export function validRate (val) {
  return Number.isInteger(val * 100 / 25) && val <= 2 && val > 0
}

export function validAccept (accept,created) {
  return accept >= created
}

export function fullFIO (Pers) {
  let patron = ''
  if(Pers.patron){
    patron = ' ' + Pers.patron
  }
  return Pers.last_name + ' ' + Pers.name + patron
}

export function fullIO (Pers) {
  let patron = ''
  if(Pers.patron){
    patron = ' ' + Pers.patron
  }
  return Pers.name + patron
}

export function shortFio(Pers) {
  let patron = ''
  if(Pers.patron){
    patron = ' ' + Pers.patron[0] + '.'
  }
  return Pers.last_name + ' ' + Pers.name[0] + '.' + patron
}

export function layoutFix(str) {
  if(!str) return ''

  let replacer = {
    "q":"й", "w":"ц"  , "e":"у" , "r":"к" , "t":"е", "y":"н", "u":"г",
    "i":"ш", "o":"щ", "p":"з" , "[":"х" , "]":"ъ", "a":"ф", "s":"ы",
    "d":"в" , "f":"а"  , "g":"п" , "h":"р" , "j":"о", "k":"л", "l":"д",
    ";":"ж" , "'":"э"  , "z":"я", "x":"ч", "c":"с", "v":"м", "b":"и",
    "n":"т" , "m":"ь"  , ",":"б" , ".":"ю" , "/":".",
  };

  let i
  let replace
  for(i=0; i < str.length; i++){
    if( replacer[ str[i].toLowerCase() ] !== undefined){

      if(str[i] === str[i].toLowerCase()){
        replace = replacer[ str[i].toLowerCase() ];
      } else if(str[i] === str[i].toUpperCase()){
        replace = replacer[ str[i].toLowerCase() ].toUpperCase();
      }

      str = str.replace(str[i], replace);
    }
  }

  return str;
}

export function isPermis(needPows, userPows) {
  return needPows.some(l => userPows.includes(l))
}

export function priceImager(value, vid = 500) {

  if (vid !== 500) {
    return value + '<img class="imgValut" src="/img/valuta/' + vid + '.png" ' + ' alt="v"/>';
  }
  let str = '' + value;

  let row = '';
  let len = str.length;
  for (var i = 0; i < len; ++i) {

    if (len - i === 2 && len > 2) {
      row += '<img class="imgValut" src="/img/valuta/silver.png" alt="s"/>';
    }
    if (len - i === 4 && len > 4) {
      row += '<img class="imgValut" src="/img/valuta/gold.png" alt="g"/>';
    }
    row += str.charAt(i);
  }
  row += '<img class="imgValut" src="/img/valuta/bronze.png" alt="b"/>';
  return row;
}

export function priceColor(method){
  switch (method){
    case 'byAny':
      return 'red'

    case 'byCraft':
      return 'gray'

    case 'byFromNPC':
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

export function priceMethod(Price){
  switch (Price.method){
    case 'bySolo':
      return 'Ваша цена'
    case 'byCraft':
      return 'Себестоимость'
    case 'byFromNPC':
      return 'Куплено у НПС'
    case 'byFriends':
      return Price.author
    case 'byWellKnown':
      return Price.author
    case 'byAny':
      return Price.author
    default:
      return 'Неизветно:'
  }
}

export function profit(Proceeds, craftCost = 50000){
  return Proceeds - craftCost
}

