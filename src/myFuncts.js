import moment from 'moment'
import {copyToClipboard} from "quasar";
import jwt_decode from "jwt-decode";
// import { parse, format } from 'date-fns';

export function rateInfo (val) {
  let rates = [1, 0.5, 'гпх', 'гпх', 0.25]
  return rates[val - 1]
}

export function fDateAnyFormat(inputDate, outputFormat = 'DD.MM.yyyy HH:mm') {
  const formats = [
    'DD.MM.YYYY',
    'MM/DD/YYYY',
    'YYYY-MM-DD',
    'YYYY/MM/DD',
    'MM-DD-YYYY',
    'YYYY.MM.DD',
    'DD.MM.YYYY HH:mm:ss',
    'MM/DD/YYYY HH:mm:ss',
    'YYYY-MM-DD HH:mm:ss',
    'YYYY/MM/DD HH:mm:ss',
    'MM-DD-YYYY HH:mm:ss',
    'YYYY.MM.DD HH:mm:ss',
    'DD.MM.YYYY HH:mm',
    'MM/DD/YYYY HH:mm',
    'YYYY-MM-DD HH:mm',
    'YYYY/MM/DD HH:mm',
    'YYYY-MM-DDTHH:mm:ssZ',  // ISO 8601
    'X'  // Unix timestamp
  ];

  let normalizedDate = null;

  for (const formatStr of formats) {
    const parsedDate = moment(inputDate, formatStr, true);
    if (parsedDate.isValid()) {
      normalizedDate = parsedDate.format(outputFormat);
      break; // Выход из цикла, когда найден правильный формат
    }
  }

  return normalizedDate;
}

export function fDate(date) {
  if (date) {

    return moment(String(date)).format('DD.MM.YYYY')
  }
  return ''
}

export function fDateTime(date, format = 'YYYY-MM-DD HH:mm:ss [UTC]') {
  if (date) {
    const iso8601Date = moment(date, format).toISOString();
    return moment(String(iso8601Date)).format('DD.MM.YYYY H:mm')
  }
  return ''
}

export function formatTimeDifference(time) {
  const currentTime = new Date(); // Ваше текущее время
  const targetTime = new Date(String(time)); // Преобразуем targetTime в UTC
  const timeDifference = currentTime - targetTime;

  // Конвертируем разницу в минуты
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  switch (true) {
    case minutesDifference < 1:
      return "Минуту назад";
    case minutesDifference < 60:
      return "Недавно";
    case minutesDifference < 120:
      return "Час назад";
    default:
      const todayUTC = new Date();
      todayUTC.setUTCHours(0, 0, 0, 0);

      if (targetTime > todayUTC) {
        return "Сегодня";
      } else {
        const yesterdayUTC = new Date(todayUTC);
        yesterdayUTC.setUTCDate(todayUTC.getUTCDate() - 1);

        if (targetTime > yesterdayUTC) {
          return "Вчера";
        } else {
          const daysDifference = Math.floor(minutesDifference / (60 * 24));
          switch (true) {
            case daysDifference < 30:
              return `${daysDifference} дней назад`;
            default:
              const monthsDifference = Math.floor(daysDifference / 30);
              return `${monthsDifference} месяцев назад`;
          }
        }
      }
  }
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

export function toNums(val) {
  val += ''
  val = val.replace(/[^\d]/g, '')
  return +val
}



export function copy (val, q) {
  //console.log(val)
  copyToClipboard(val)
    .then(() => {
      q.notify({
        color: 'positive',
        position: 'center',
        message: 'Скопировано',
        icon: 'content_copy',
        timeout: 1
      })
    })
    .catch(() => {
      // fail
    })
}

export function notifyOK (message = 'Готово') {
  return {
    color: 'positive',
    position: 'center',
    message: message,
    timeout: 100,
    closeBtn: 'Закрыть'
  }
}

export function notifyError (error, defaultMsg = 'Ой! Не работает :(') {
  return {
    color: 'negative',
    position: 'center',
    message:
      !!error?.response?.data?.error
        ? error.response.data.error
        : defaultMsg,
    closeBtn: 'x',
    icon: 'report_problem'
  }
}

export function notifyWarning (error, defaultMsg = 'Ой! Не работает :(') {
  return {
    color: 'orange',
    position: 'center',
    message:
      !!error?.response?.data?.error
        ? error.response.data.error
        : defaultMsg ?? 'Ой! Не работает :(',
    timeout: 500,
    closeBtn: 'x',
    icon: 'report'
  }
}

export function isExpired(error) {
  return [
    'Session does not exist',
    'Invalid tokenTime',
    'Token is Expired',
    'tokens is empty',
    'Unknown device',
      'cook is empty'
  ].includes(error?.response?.data?.error)
}

export function powersByJWT(jwt) {
  return jwt_decode(jwt).powers ?? []
}

export function userIdByJWT(jwt) {
  return jwt_decode(jwt).uid ?? 0
}

export function accountIdByJWT(jwt) {
  return jwt_decode(jwt).accountId ?? 0
}

export function authTypeByJWT(jwt) {
  return jwt_decode(jwt).authType ?? 0
}

export function checkPowers(allowed, AccessToken) {
  let powers = powersByJWT(AccessToken)
  return allowed.some(l=>powers.includes(l))
}

export function dynamicForm(path, params, method = 'post') {

  // The rest of this code assumes you are not using a library.
  // It can be made less verbose if you use one.
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}
