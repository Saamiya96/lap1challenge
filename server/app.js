const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors())

const random = ["https://rollingstones.com/",
    "https://www.crunchyroll.com/?_gl=1*2amop1*_up*MQ..&gclid=CjwKCAjw-8qVBhANEiwAfjXLrt7dcnCkizJlxQYWDdDOJYA9pGnamHkMyBFEO5_pWwkMwizSqpl8aBoCb2EQAvD_BwE",
    "https://www.lolascupcakes.co.uk/",
    "https://www.liverpoolfc.com/",
    "https://bestmuaythaiboxing.com/",
    "https://codefirstgirls.com/",
    "https://www.modanisa.com/en/?refs=source&ref=269620&gclid=CjwKCAjw-8qVBhANEiwAfjXLrsQSb6eIT91mWLxWI4upLMjTdGqQejJrCIZvViX67hH2_XZx93JeVBoC2-kQAvD_BwE&gclsrc=aw.ds",
    "https://www.tiktok.com/",
    "https://www.glastonburyfestivals.co.uk/",
    "https://codepen.io/"]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/random", (req, res) => {
    res.json(random);
});

app.get('/random/:id', (req, res) => {
    const id = req.params.id -1;
    if (id < random.length && id >= 0) {
        res.send(random[id])
        console.log(req)
    } else { //res.status(404).send(message)
      res.json('error: Choose a number between 1 and 10')
    }
  })

//  function getRandomLink() {
//      let randomlink = random[Math.floor(Math.random() * random.length)]
//      return randomlink
//  }


module.exports = app
