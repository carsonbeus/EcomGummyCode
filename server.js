const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

const cors = require('cors');


const options = {
  origin: 'http://localhost:3000'
}
app.use(cors());

// app.use(express.static(__dirname + '/dist/'));
// app.get(/.*/, function (req, res) {
//   res.sendFile(__dirname + '/dist/index.html');
// })

app.get('/api/store', function(req, res) {


  const stickers = [
    {
      _id: 0,
      category: 'Javascript',
      remaining: 4,
      imageURL: 'https://source.unsplash.com/collection/2270935',
      title: 'Javascript in the Browser',
      description: 'java es lo mejor idioma de software en todo el mundo homes'
    },
    {
      _id: 1,
      category: 'Python',
      remaining: 2,
      imageURL: 'https://source.unsplash.com/collection/2270936',
      title: 'ssssssš',
      description: 'slitherin snakey gets shakey shakey'
    },
    {
      _id: 2,
      category: 'Ruby',
      remaining: 6,
      imageURL: 'https://source.unsplash.com/collection/1144691',
      title: 'Ruby Rivers',
      description: 'I like dollars I like diamonds. I like dollars I like diamonds. I like dollars I like diamonds.I like dollars I like diamonds .I like dollars I like diamonds .I like dollars I like diamonds. I like dollars I like diamonds.'
    }
  ]

  res.send ({
    stickers
  })
})


app.listen(port);

console.log("server started");