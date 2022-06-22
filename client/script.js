let randomlink = Math.floor(Math.random() * 10)

const getRandomSite = async (randomlink) => {
    const response = await fetch(`http://localhost:3000/random/${randomlink}/`)
    const data = await response.text()
    // console.log(response)
    const randomSearchBtn = document.getElementById("random-search-btn") 
    randomSearchBtn.textContent = "I'm Feeling Lucky"
    randomSearchBtn.onclick = function () {
      location.href = data;
      window.open(data, "_blank")
    }
}

getRandomSite(randomlink)
   // const link = document.getElementById('random-search-btn')
  // link.addEventListener('click', (e) => {
    const randomSearchBtn = document.getElementById("random-search-btn") 
    randomSearchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getRandomSite(randomlink)
    .catch(error => console.log(error))
  })

