const key = "IoAmzBpe4YGVdzn4lOOODMWpd8695b4O";

const havaDurumuGetir = async (id) => {
  const temelUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
  const sorgu = `${id}?apikey=${key}`;

  const res = await fetch(temelUrl + sorgu);
  const veri = await res.json();

  return veri[0];
};

const sehirGetir = async (konum) => {
  // const cors = require('cors');
  // app.use(cors());

  const temelUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";

  const sorgu = `?apikey=${key}&q=${konum}`;

  const res = await fetch(temelUrl + sorgu);
  const veri = await res.json();

  return veri[0];
  //console.log(veri);
};

// havaDurumuGetir('316649').then(veri=>{
//   console.log(veri);
// });

// sehirGetir("newyork")
//   .then((veri) => {
//     return havaDurumuGetir(veri.Key);
//   })
//   .then((veri) => {
//     console.log(veri);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
