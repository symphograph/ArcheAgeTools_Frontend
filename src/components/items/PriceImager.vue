<template>
  <span v-html="priceImager(price, currencyId)"></span>
</template>

<script setup>
import {ref} from "vue";

const Props = defineProps({
  price: ref(null),
  currencyId: ref(null)
})

function priceImager(value, vid = 500) {
  let minus = ''
  if (value < 0) {
    minus = '-'
  }
  //value = toNums(value)
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
  row += '<img src="/img/valuta/bronze.png" alt="b"/>';
  return row;
}
</script>

<style>
.imgValut {
  height: 0.9em;
  width: 0.9em;
}
</style>
