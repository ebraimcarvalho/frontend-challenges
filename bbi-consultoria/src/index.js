$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 40) {
    $(".header").addClass("scroll");
    // $("#list__itens").addClass("color-itens")
    // $("#logo-branca, #face-branco, #insta-branco").addClass("icon-hidden")
    // $("#logo-laranja, #face-laranja, #insta-laranja").removeClass("icon-hidden")
  } else {
    $(".header").removeClass("scroll");
    // $("#list__itens").removeClass("color-itens")
    // $("#logo-branca, #face-branco, #insta-branco").removeClass("icon-hidden")
    // $("#logo-laranja, #face-laranja, #insta-laranja").addClass("icon-hidden")
  }
});

function debounce(t, e = 10, n = !0) {
  var c;
  return function () {
    var i = arguments,
      s = n && !c;
    clearTimeout(c),
      (c = setTimeout(function () {
        (c = null), n || t.apply(contex, i);
      }, e)),
      s && t.apply(this, i);
  };
}
var sliders = document.querySelectorAll(".form_tabs"),
  current = 0,
  total = sliders.length - 1;
console.log(total);
window.setInterval(function () {
  var t = current ? current - 1 : total;
  console.log(current),
    sliders[t].classList.remove("active"),
    sliders[current].classList.add("active"),
    (current = current >= total ? 0 : current + 1);
}, 3e3);

const itensToActive = document.querySelectorAll(".to-active");

function checkSlide(t) {
  itensToActive.forEach((t) => {
    const e = window.scrollY + window.innerHeight - t.offsetHeight / 1e3;
    t.offsetTop, t.offsetHeight;
    e > t.offsetTop &&
      (t.classList.contains("top")
        ? t.classList.add("animated", "fade-in-top")
        : t.classList.contains("left")
        ? t.classList.add("animated", "fade-in-left")
        : t.classList.contains("right")
        ? t.classList.add("animated", "fade-in-right")
        : t.classList.add("animated", "fade-in-center"));
  });
}
window.addEventListener("scroll", debounce(checkSlide));
