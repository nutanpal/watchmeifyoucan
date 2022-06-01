require('dotenv').config()
const axios = require('axios')
const { API_KEY } = process.env
module.exports = {
  searchMovie: (req, res) => {
    const { search } = req.query;
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
      )
      .then((response) => {
        console.log(response.data);
        res.status(200).send(response.data)
      })
      .catch((err) => console.log(err));
  },
};
