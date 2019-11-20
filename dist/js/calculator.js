const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);

// calculator function
const btn = document.querySelectorAll(".cal-footer div");
let input = document.querySelector("#input");
let output = document.querySelector("#output");

function calculate(data) {
  try {
    switch (data) {
      case "AC":
        input.innerHTML = "";
        output.innerHTML = 0;
        break;

      case "C":
        input.innerHTML = input.innerHTML.slice(0, -1);
        output.innerHTML =
          math.evaluate(input.innerHTML) === undefined
            ? 0
            : math.evaluate(input.innerHTML);
        break;
      case "=":
        output.innerHTML = math.evaluate(input.innerHTML);
        break;
      default:
        input.innerHTML += data;
    }
  } catch (error) {
    output.innerHTML = "Syntax err";
  }
}
btn.forEach(item => {
  item.addEventListener("click", () => {
    calculate(item.textContent);
  });
});
