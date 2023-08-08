$(".items-animation-m-1 >").hover(
  function () {
    $(this).addClass("items-animation-hovered-m-1");
    $(".item").not(this).addClass("items-animation-not-hovered-m-1");
  },
  function () {
    $(this).removeClass("items-animation-hovered-m-1");
    $(".item").removeClass("items-animation-not-hovered-m-1");
  }
);
