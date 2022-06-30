const submit=document.querySelector("#submit")
const backBtn= document.querySelector(".back")
const input=document.querySelector("#text")
const playerName=document.querySelector("#playerName")
const playerAge=document.querySelector("#playerAge")
const playerPosition=document.querySelector("#playerPosition")
const playerNationality=document.querySelector("#playerNationality")
const image=document.querySelector("#image")
const first= document.querySelector(".first")
const second= document.querySelector(".second")
const backgroundName=document.querySelector("#backgroundName")
const backgroundNumber=document.querySelector("#backgroundNumber")
console.log(image)

function grabDetails(){
	

	fetch(`https://barca-players-info.herokuapp.com/api/${input.value}`)
	.then(res=>res.json())
	.then(data=>{
		console.log(data)
		//DOM manipulation
		playerName.textContent=data.name
		playerAge.textContent=data.age
		playerPosition.textContent=data.position
		playerNationality.textContent=data.country
		image.src=data.img
		backgroundName.textContent=data.name
		backgroundNumber.textContent=data.squad_number
	})
	.catch(err=>console.log(err))
	console.log(9)
	first.classList.add("hidden")
	second.classList.remove("hidden")
	backBtn.classList.remove("hidden")
	
}
submit.addEventListener("click",grabDetails)
backBtn.addEventListener("click",back)
function back(){
	first.classList.remove("hidden")
	second.classList.add("hidden")
	backBtn.classList.add("hidden")
	
}


input.addEventListener("keypress", function(event) {
	// If the user presses the "Enter" key on the keyboard
	if (event.key === "Enter") {
	  // Cancel the default action, if needed
	  fetch(`https://barca-players-info.herokuapp.com/api/${input.value}`)
	  .then(res=>res.json())
	  .then(data=>{
		  console.log(data)
		  //DOM manipulation
		  playerName.textContent=data.name
		  playerAge.textContent=data.age
		  playerPosition.textContent=data.position
		  playerNationality.textContent=data.country
		  image.src=data.img
		  backgroundName.textContent=data.name
		  backgroundNumber.textContent=data.squad_number
		})
		.catch(err=>console.log(err))
		console.log(9)
		first.classList.add("hidden")
		second.classList.remove("hidden")
		event.preventDefault();
		// Trigger the button element with a click
		document.getElementById("submit").click();
		
	}
  });
