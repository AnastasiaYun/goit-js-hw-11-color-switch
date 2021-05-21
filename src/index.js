  
const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  
  
  const refs = {
    openBtn: document.querySelector(`button[data-action="start"]`),
    closeBtn: document.querySelector(`button[data-action="stop"]`),
    body: document.querySelector(`body`),
  };
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const setRandomColor = () => {
    const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    console.log(color);
    document.body.style.backgroundColor = color;
  };
  
  let intervalId = null;
  
  refs.openBtn.addEventListener(
    "click",
    (e) => (
      (intervalId = setInterval(() => setRandomColor(), 1000)),
      refs.openBtn.setAttribute("disabled", true)
    )
  );
  
  refs.closeBtn.addEventListener(
    "click",
    (e) => (clearInterval(intervalId), refs.openBtn.removeAttribute("disabled"))
  );