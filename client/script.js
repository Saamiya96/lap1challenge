

//***I'm Feeling Lucky Button Logic***

//Random Page Result Number To Be Placed Into Fetch Call Below
let randomlink = Math.floor(Math.random() * 10)

const getRandomSite = async (randomlink) => {
    const response = await fetch(`http://localhost:3000/random/${randomlink}/`)
    const url = await response.text()
    const randomSearchBtn = document.getElementById("random-search-btn") 
    randomSearchBtn.textContent = "I'm Feeling Lucky"
    randomSearchBtn.onclick = function () {
      location.href = url;  //When Clicking "I'm Feeling Lucky", It Will Bounce Straight To Website! ('url' Being The Hyperlink)
    }
}
getRandomSite(randomlink)


    const randomSearchBtn = document.getElementById("random-search-btn") 
    randomSearchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getRandomSite(randomlink) 
    .catch(error => console.log(error))
  })






//***Google Search Button Logic***

  //Initializing 'number' To Be Used In This Fetch Call Once We Give It A Value Later On
 let number 

 const getSpecificSite = async (number) => {
  const response = await fetch(`http://localhost:3000/random/${number}/`)
  const url = await response.text()
   console.log(response)
  const GoogleSearchBtn = document.getElementById("google-search-btn") 
  GoogleSearchBtn.textContent = "Google Search"
  location.href = url  //When Clicking "Google Search", It Will Bounce Straight To Website! ('url' Being The Hyperlink)
}



  const GoogleSearchBtn = document.getElementById("google-search-btn") 

  GoogleSearchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const inputBox = document.getElementById("search")
  const searchWord = inputBox.value


    //Depending On 'searchWord' Once The Google Search Button Is Clicked, It Will Assign An Integer To 'number' Which Can Be Passed to 'getSpecificSite'
  if(searchWord === "rolling stones" || searchWord === "Rolling Stones") {
    number = 1
    getSpecificSite(number)
  .catch(error => console.log(error))

  } else if (searchWord === "crunchy roll" || searchWord === "Crunchy Roll") {
    number = 2
    getSpecificSite(number)
  .catch(error => console.log(error))

  } else if (searchWord === "lolas cupcakes" || searchWord === "Lolas Cupcakes") {
    number = 3
    getSpecificSite(number)
  .catch(error => console.log(error))

  } else if (searchWord === "liverpool" || searchWord === "Liverpool") {
    number = 4
    getSpecificSite(number)
  .catch(error => console.log(error))

  } else if (searchWord === "thai boxing" || searchWord === "Thai Boxing") {
    number = 5
    getSpecificSite(number)
  .catch(error => console.log(error))

  } else if (searchWord === "code first girls" || searchWord === "Code First Girls") {
    number = 6
    getSpecificSite(number)
  .catch(error => console.log(error))

  } else if (searchWord === "modanisa" || searchWord === "Modanisa") {
    number = 7
    getSpecificSite(number)
  .catch(error => console.log(error))

  } else if (searchWord === "tiktok" || searchWord === "Tiktok") {
    number = 8
    getSpecificSite(number)
  .catch(error => console.log(error))

  } else if (searchWord === "glastonbury" || searchWord === "Glastonbury") {
    number = 9
    getSpecificSite(number)
  .catch(error => console.log(error))

  } else if (searchWord === "codepen" || searchWord === "Codepen") {
    number = 10
    getSpecificSite(number)
  .catch(error => console.log(error))

  } else if (searchWord === "results" || searchWord === "Results") {
    fetchArray()
  }
})

//If The searchWord Is 'results', 'fetchArray' Will Be Called & Attach The HyperLinked Websites In A List
const fetchArray = async () => {
  const rolling = document.getElementById("rolling")
  rolling.textContent = "Rolling Stones"
  const crunchy = document.getElementById("crunchy")
  crunchy.textContent = "Crunchy Roll"
  const lolas = document.getElementById("lolas")
  lolas.textContent = "Lolas Cupcakes"
  const liverpool = document.getElementById("liverpool")
  liverpool.textContent = "Liverpool FC"
  const boxing = document.getElementById("boxing")
  boxing.textContent = "Boxing"
  const codefirst = document.getElementById("codefirst")
  codefirst.textContent = "Code First Girls"
  const modanisa = document.getElementById("modanisa")
  modanisa.textContent = "Modanisa"
  const tiktok = document.getElementById("tiktok")
  tiktok.textContent = "Tiktok"
  const glaston = document.getElementById("glaston")
  glaston.textContent = "Glastonbury"
  const codepen = document.getElementById("codepen")
  codepen.textContent = "Codepen"
}
