// TODO: write your code here
let player1 = document.querySelector("#player1_race"); 
let player2 = document.querySelector("#player2_race"); 
let tbList1 = player1.querySelectorAll("td");
let tbList2 = player2.querySelectorAll("td");
let restartButton = document.getElementById("restart");
restartButton.addEventListener("click",(event)=>{
	tbList1.forEach((td,index)=>{
		if(index==0){
			td.classList.add("active");
		}else{
			td.classList.remove("active");
		}
	})
	tbList2.forEach((td,index)=>{
		if(index==0){
			td.classList.add("active");
		}else{
			td.classList.remove("active");
		}
	})
});


document.addEventListener("keyup", (event) => {
  // Do something（回调 callback）
  if (event.key=="p" || event.key=="P") {
  	let activeIndex1 = null;
  	let lastIndex1 = tbList1.length;
  	tbList1.forEach((td,index)=>{
  		if (td.classList.contains("active")) {
  			if (index == lastIndex1-1) {
  				alert("Player1 won!");
  				return;
  			};
  			activeIndex1 = index;
  			td.classList.remove("active");
  		};
  		if (activeIndex1 == index-1) {
  			td.classList.add("active");
  		};
  	})
  };

  if (event.key=="q" || event.key=="Q") {
  	let activeIndex2 = null;
  	let lastIndex2 = tbList2.length;
  	tbList2.forEach((td,index)=>{
  		if (td.classList.contains("active")) {
  			if (index == lastIndex2-1) {
  				alert("Player2 won!");
  				return;
  			};
  			activeIndex2 = index;
  			td.classList.remove("active");
  		};
  		if (activeIndex2 == index-1) {
  			td.classList.add("active");
  		};
  	})
  };
});
