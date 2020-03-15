import data from './data.js';

(function(win, doc) {
  'use strict';

  var $qtdApple = doc.querySelector('[data-js="qtdApple"]');
  var $qtdBanana = doc.querySelector('[data-js="qtdBanana"]');
  var $qtdOrange = doc.querySelector('[data-js="qtdOrange"]');
 
  var $totalApple = doc.querySelector('[data-js="totalApple"]');
  var $totalBanana = doc.querySelector('[data-js="totalBanana"]');
  var $totalOrange = doc.querySelector('[data-js="totalOrange"]');

  var $inputCoupon = doc.querySelector('[data-js="inputCoupon"]');
  var $submitCoupon = doc.querySelector('[data-js="submitCoupon"]');
  var $totalDiscount = doc.querySelector('[data-js="totalDiscount"]');
  var $benefitDiscount = doc.querySelector('[data-js="benefitDiscount"]');
  var $receiveNameCoupon = doc.querySelector('[data-js="receiveNameCoupon"]');

  var $subtotal = doc.querySelector('[data-js="subtotal"]');
  var $shipping = doc.querySelector('[data-js="shipping"]');
  var $total = doc.querySelector('[data-js="total"]');

  $qtdApple.addEventListener('change', handleApple, false);
  $qtdBanana.addEventListener('change', handleBanana, false);
  $qtdOrange.addEventListener('change', handleOrange, false);
  $submitCoupon.addEventListener('click', updateCart, false);

  function handleApple() {
    data.apple.qtd = Number(this.value);
    data.apple.subtotal = data.apple.price * data.apple.qtd;
    updateCart();
    $totalApple.textContent = data.apple.subtotal;
  }

  function handleBanana() {
    data.banana.qtd = Number(this.value);
    data.banana.subtotal = data.banana.price * data.banana.qtd;
    updateCart();
    $totalBanana.textContent = data.banana.subtotal;
  }

  function handleOrange() {
    data.orange.qtd = Number(this.value);
    data.orange.subtotal = data.orange.price * data.orange.qtd;
    updateCart();
    $totalOrange.textContent = data.orange.subtotal;
  }

  function updateCart() {
    data.parcial = data.apple.subtotal + data.banana.subtotal + data.orange.subtotal;
    data.weight = data.apple.qtd + data.banana.qtd + data.orange.qtd;
    handleShipping();

      data.couponName = $inputCoupon.value;
      if (data.couponName === 'A') {
        data.discount = data.parcial * 0.3;
        $totalDiscount.textContent = data.discount;
        data.couponName = 'A';
        data.couponBenefit = ' (30% over subtotal)';
      } else if (data.couponName === 'FOO' && data.parcial > 100) {
        data.discount = 100;
        $totalDiscount.textContent = data.discount;
        data.couponName = 'FOO';
        data.couponBenefit = ' (save $100 over total)';
      } else if (data.couponName === 'C' && data.parcial >= 300.50) {
        data.shipping = 0;
        data.discount = 0;
        $totalDiscount.textContent = data.discount;
        data.couponName = 'C';
        data.couponBenefit = ' (free shipping for purchase over $300.50)';
      } else {
        data.discount = 0;
        $totalDiscount.textContent = '';
        data.couponName = '';
        data.couponBenefit = '';
        handleShipping();
      }
    $shipping.textContent = data.shipping;
    data.total = data.parcial + data.shipping - data.discount;
    $subtotal.textContent = data.parcial;
    $total.textContent = data.total;
    $receiveNameCoupon.textContent = data.couponName;
    $benefitDiscount.textContent = data.couponBenefit;
    console.log(data);
  }

  function handleShipping() {
    if(data.weight == 0 || data.parcial >= 400) {
      return data.shipping = 0;
    }
    if(data.weight >= 1 && data.weight < 15) {
      return data.shipping = 30;
    }
    if(data.weight >= 15) {
      var increase = Math.floor(data.weight/5);
      return data.shipping = 30 + ((increase-2)*7);
    }
  }

})(window, document);