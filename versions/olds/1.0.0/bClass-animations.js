/* * bClass animations v1.0.0 (--)
 * * Copyright 2021-2023 The Bclass Authors
 * * Licensed (--)
 * * Update (--)
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
