const districtStreetURL = 'http://odata.bordeaux.fr/v1/databordeaux/refvoiesquartiers/?format=json&callback=?'
const nbArticle = 5;

function dispJSONData (data)
{
  for (let i = 0; (i < data.length); ++i)
  {
    // if (data [i].libellequartier === "Quartier " + (i + 1))
    let districtNum = data[i].libellequartier.substring (9,10);
    let articleNum = districtNum % nbArticle;
    if (articleNum === 0) articleNum = 5;
    $("#StreetList" + articleNum).append ("<ul><li>" + data [i].libellequartier + "<br>Nom: " + data [i].libellevoie + "</li></ul>");
  }
}
$.getJSON (districtStreetURL, (result) => {
    //let data = JSON.parse (JSON.stringify(result))
    dispJSONData (result.d)
  })
