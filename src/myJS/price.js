import {toNums} from "src/myFuncts";

export function priceImager(value, vid = 500) {
  let minus = ''
  if (value < 0) {
    minus = '-'
  }
  value = toNums(value)

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
  row = minus + row
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

    case 'byToNPC':
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
  switch (Price?.method || 'error'){
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
    case 'error':
      return 'Ошибка'
    default:
      return 'Неавторизованный пользователь'
  }
}

export function profit(Proceeds, craftCost = 50000){
  return Proceeds - craftCost
}

export function flatSalary(dbPrice) {
  return Math.round(dbPrice / 130 * 100)
}

export function factoryPrice(flatSalary, siol, ratePercent, currencyId){
  let siolPercent = siol && (currencyId === 500) ? 5 : 0
  let result = flatSalary * (ratePercent / 100)
  return  result * (1 + siolPercent / 100)
}

export function finalSalary(dbPrice, siol, ratePercent, freshPercent, currencyId){
  let factPrice = factoryPrice(flatSalary(dbPrice), siol, ratePercent)
  let salary = factPrice * (1 + (freshPercent / 100))
  salary = salary * 1.02 // Стандартная надбавка 2%

  if(currencyId !== 500){
    salary /= 100
  }
  return Math.round(salary)
}

export function goldSalary(finalSalary, currPrices, currencyId){
  if(currencyId === 500){
    return finalSalary
  }
  let gold = finalSalary * currPrices[currencyId].price * 0.9
  return Math.round(gold)
}
