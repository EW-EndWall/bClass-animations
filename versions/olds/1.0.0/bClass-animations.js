/***
 * * bClass animations v1.0.0
 * * Copyright 2021 ("https://github.com/EW-EndWall/bClass-animations/blob/main/LICENSE")
 * * Licensed ("Bik Public License 2.0")
 * * License Update ("03/28/2024")
 */
document.addEventListener("DOMContentLoaded", () => {
  $(".animation-items-m-1 >").hover(
    function () {
      $(this).addClass("animation-items-hovered-m-1");
      $(".item").not(this).addClass("animation-items-not-hovered-m-1");
    },
    function () {
      $(this).removeClass("animation-items-hovered-m-1");
      $(".item").removeClass("animation-items-not-hovered-m-1");
    }
  );
});
