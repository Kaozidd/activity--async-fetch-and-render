const request = superagent
const URL = "https://randomuser.me/api/?results=50"
request
  .get(URL)
  .then(function(data){
  	const usrArr = data.body.results
  	const usrList = document.querySelector(".users-list")
  	for(let i=0; i<usrArr.length; i++){
  		var tempNat = usrArr[i].nat
  		var tempMail = usrArr[i].email
  		var tempArt = document.createElement("article")
  		var tempSpan = document.createElement("span")
  		var tempH6 = document.createElement("h6")
  		var tempImg = document.createElement("img")
  		var tempThumb = usrArr[i].picture.thumbnail
  		tempImg.setAttribute("src", tempThumb)
  		tempImg.classList.add("usrImg")
  		tempSpan.textContent = tempNat
  		tempH6.textContent = tempMail
  		tempArt.appendChild(tempSpan)
  		tempArt.appendChild(tempH6)
  		tempArt.appendChild(tempImg)
  		usrList.appendChild(tempArt)
  	}
  })