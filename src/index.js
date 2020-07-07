import "@styles/style.scss";

import slider from "./js/slider.js";

window.addEventListener("DOMContentLoaded", () => {
   "use strict";
   slider(".reviews__slider-item", ".reviews__prev-btn", ".reviews__next-btn");
});
