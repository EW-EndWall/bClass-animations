/***
 * * bClass animations v1.1.0
 * * Copyright 2021 ("https://github.com/EW-EndWall/bClass-animations/blob/main/LICENSE")
 * * Licensed ("Bik Public License 2.0")
 * * License Update ("03/28/2024")
 */
document.addEventListener("DOMContentLoaded", () => {
  $(".animate-items-m-1 >").hover(
    (event) => {
      $(event.currentTarget).addClass("animate-items-hovered-m-1");
      $(".item")
        .not(event.currentTarget)
        .addClass("animate-items-not-hovered-m-1");
    },
    (event) => {
      $(event.currentTarget).removeClass("animate-items-hovered-m-1");
      $(".item").removeClass("animate-items-not-hovered-m-1");
    }
  );
});
