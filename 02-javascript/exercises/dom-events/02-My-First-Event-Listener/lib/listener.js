// TODO: React to a click on the button!
let button = document.querySelector("#clickme"); 
button.addEventListener("click", (event) => {
  // Do something（回调 callback）
  event.currentTarget.classList.add("disabled");
  event.currentTarget.innerHTML = "Bingo!";
  let audio= new Audio("../02-My-First-Event-Listener/sound.mp3");//这里的路径写上mp3文件在项目中的绝对路径
  audio.play();
});
