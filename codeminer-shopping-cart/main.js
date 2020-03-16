import data from './data.js';

(function(win, doc) {
  'use strict';

  var $qtdFruit = doc.querySelectorAll('[data-js="qtdFruit"]');
 
  var $totalApple = doc.querySelector('[data-js="totalApple"]');
  var $totalBanana = doc.querySelector('[data-js="totalBanana"]');
  var $totalOrange = doc.querySelector('[data-js="totalOrange"]');

  var $inputCoupon = doc.querySelector('[data-js="inputCoupon"]');
  var $submitCoupon = doc.querySelector('[data-js="submitCoupon"]');
  var $totalDiscount = doc.querySelector('[data-js="totalDiscount"]');
  var $benefitDiscount = doc.querySelector('[data-js="benefitDiscount"]');
  var $receiveNameCoupon = doc.querySelector('[data-js="receiveNameCoupon"]');
  var $removeCoupon = doc.querySelector('[data-js="removeCoupon"]');

  var $subtotal = doc.querySelector('[data-js="subtotal"]');
  var $shipping = doc.querySelector('[data-js="shipping"]');
  var $total = doc.querySelector('[data-js="total"]');

  Array.prototype.forEach.call($qtdFruit, function(button) {
    button.addEventListener('change', handleFruit, false);
  });

  $submitCoupon.addEventListener('click', updateCart, false);
  $removeCoupon.addEventListener('click', removeCoupon, false);

  function handleFruit() {
    data[this.name].qtd = Number(this.value);
    data[this.name].subtotal = data[this.name].price * data[this.name].qtd;
    updateCart();
  }

  function updateCart() {
    data.parcial = data.apple.subtotal + data.banana.subtotal + data.orange.subtotal;
    data.weight = data.apple.qtd + data.banana.qtd + data.orange.qtd;
    handleShipping();
    handleDiscount();
    updateTextContent();
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
      var increaseTimes = Math.floor(data.weight/5) - 2;
      var custOfIncrease = 7;
      return data.shipping = 30 + ((increaseTimes) * custOfIncrease);
    }
  }

  function handleDiscount() {
    data.couponName = $inputCoupon.value;
      if (data.couponName === 'A') {
        data.discount = data.parcial * 0.3;
        data.couponName = 'A';
        data.couponBenefit = ' (30% over subtotal)';
      } else if (data.couponName === 'FOO' && data.parcial > 100) {
        data.discount = 100;
        data.couponName = 'FOO';
        data.couponBenefit = ' (save $100 over total)';
      } else if (data.couponName === 'C' && data.parcial >= 300.50) {
        data.shipping = 0;
        data.discount = 0;
        data.couponName = 'C';
        data.couponBenefit = ' (free shipping for purchase over $300.50)';
      } else {
        removeCoupon();
      }
    updateTextContent();
  }

  function removeCoupon() {
    data.discount = 0;
    $totalDiscount.textContent = '';
    data.couponName = '';
    data.couponBenefit = '';
    handleShipping();
    data.total = data.parcial + data.shipping - data.discount;
    updateTextContent();
  }

  function updateTextContent() {
    data.total = data.parcial + data.shipping - data.discount;
    $totalApple.textContent = data.apple.subtotal;
    $totalBanana.textContent = data.banana.subtotal;
    $totalOrange.textContent = data.orange.subtotal;
    $shipping.textContent = data.shipping;
    $subtotal.textContent = data.parcial;
    $receiveNameCoupon.textContent = data.couponName;
    $benefitDiscount.textContent = data.couponBenefit;
    $total.textContent = data.total;
  }

})(window, document);