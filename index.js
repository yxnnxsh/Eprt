// template_yadaggm
// service_mcq6q36
// 4QzP--FZEgAC3Jw-l

const scalingFactor = 1 / 20;
function moveBackground(event) {
  const shapes = [...document.querySelectorAll(".shape")];
  const x = event.clientX * scalingFactor;
  const y = event.clientY * scalingFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 === 0;
    //  if i is odd, set the isOdd variable to -1 --> causes the shape to move in other direction
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

function toggleContrast() {
  document.body.classList.toggle("dark-theme");
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay__success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_mcq6q36",
      "template_yadaggm",
      event.target,
      "4QzP--FZEgAC3Jw-l"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on yannihaddad@gmail.com"
      );
    });
}

function toggleModal() {
  document.body.classList.toggle("modal--open");
  document.querySelector(".mail__btn").classList.toggle("none");
}
