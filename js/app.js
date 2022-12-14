// .NAV-OVERLAY VARIABLES
const hamburgerMenuToggle = document.querySelector(".nav__tap-container-left");
const hamburgerMenu = document.querySelector(".nav__burger");
const navOverlay = document.querySelector(".nav-overlay");
const main = document.querySelector(".main");

/* ------------------------------------
---------------------------------------
SHOW/HIDE NAV OVERLAY ON HAMBURGER MENU CLICK EVENT, ALSO LOCK SCROLL ON BODY ELEMENT WHEN HAMBURGER MENU IS OPEN
---------------------------------------
------------------------------------ */
hamburgerMenuToggle.addEventListener("click", () => {
  document.body.style.overflowY =
    document.body.style.overflowY === "hidden" ? "visible" : "hidden";
  main.classList.toggle("lower-main");
  navOverlay.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("nav__burger--active");
});

/* ------------------------------------
---------------------------------------
SHOW/HIDE CART OVERLAY ON CART ICON CLICK EVENT
---------------------------------------
------------------------------------ */
const cartToggle = document.querySelector(".nav__tap-container-right");
const cartIcon = document.querySelector(".nav__cart");
const cartOverlay = document.querySelector(".cart-overlay");

cartToggle.addEventListener("click", () => {
  document.body.style.overflowY =
    document.body.style.overflowY === "hidden" ? "visible" : "hidden";
  main.classList.toggle("lower-main");
  cartOverlay.classList.toggle("hidden");
  cartIcon.classList.toggle("cart-icon--active");
});

/* ----------------------
-------------------------
CLOSE CART MODAL ON OVERLAY CLICK EVENT
------------------------
---------------------- */

cartOverlay.addEventListener("click", (e) => {
  if (e.target === cartOverlay) {
    cartOverlay.classList.add("hidden");
  }
});

/* ------------------------------------
---------------------------------------
FORMAT CHECKOUT FORM PHONE NUMBER ON USER INPUT
source: https://stackoverflow.com/questions/30058927/format-a-phone-number-as-a-user-types-using-pure-javascript
---------------------------------------
------------------------------------ */
const isNumericInput = (event) => {
  const key = event.keyCode;
  return (
    (key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  );
};

const isModifierKey = (event) => {
  const key = event.keyCode;
  return (
    event.shiftKey === true ||
    key === 35 ||
    key === 36 || // Allow Shift, Home, End
    key === 8 ||
    key === 9 ||
    key === 13 ||
    key === 46 || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    // Allow Ctrl/Command + A,C,V,X,Z
    ((event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
  );
};

const enforceFormat = (event) => {
  // Input must be of a valid number format or a modifier key, and not longer than ten digits
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
};

const formatToPhone = (event) => {
  if (isModifierKey(event)) {
    return;
  }

  const input = event.target.value.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
  const areaCode = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) {
    event.target.value = `(${areaCode}) ${middle} - ${last}`;
  } else if (input.length > 3) {
    event.target.value = `(${areaCode}) ${middle}`;
  } else if (input.length > 0) {
    event.target.value = `(${areaCode}`;
  }
};

const inputElement = document.getElementById("checkout-phone");
inputElement.addEventListener("keydown", enforceFormat);
inputElement.addEventListener("keyup", formatToPhone);

/* ------------------------------------
---------------------------------------
ADD BORDER TO .RADIO-GROUP ELEMENT WHEN RADIO INPUT IS CHECKED  
---------------------------------------
------------------------------------ */
const paymentTypeOne = document.querySelector(".payment-type-one");
const paymentTypeTwo = document.querySelector(".payment-type-two");
const radioOne = document.querySelector(".radio-one");
const radioTwo = document.querySelector(".radio-two");

paymentTypeOne.addEventListener("click", () => {
  if (paymentTypeOne.checked) {
    radioOne.classList.add("radio-checked");
    radioTwo.classList.remove("radio-checked");
  } else {
    radioOne.classList.remove("radio-checked");
  }
});

paymentTypeTwo.addEventListener("click", () => {
  if (paymentTypeTwo.checked) {
    radioTwo.classList.add("radio-checked");
    radioOne.classList.remove("radio-checked");
  } else {
    radioTwo.classList.remove("radio-checked");
  }
});