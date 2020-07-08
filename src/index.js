import "@styles/style.scss";

import slider from "./js/modules/slider.js";
import modals from "./js/modules/modals";
import mask from "./js/modules/mask";
import form from "./js/modules/form";
import checkTextInputs from "./js/modules/checkTextInputs";
import checkMailInputs from "./js/modules/checkMailInputs";

window.addEventListener("DOMContentLoaded", () => {
   "use strict";
   slider(".reviews__slider-item", ".reviews__prev-btn", ".reviews__next-btn");
   modals();
   mask('[name="phone"]');
   checkTextInputs('[name="name"]');
   checkMailInputs('[name="email"]');
   form();
});
