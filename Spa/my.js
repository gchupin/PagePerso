const toiletsURL = 'http://odata.bordeaux.fr/v1/databordeaux/sigsanitaire/?format=json&callback=?';
const kidareasURL = 'http://odata.bordeaux.fr/v1/databordeaux/airejeux/?format=json&callback=?';
const carouselImgURL = 'http://www.reveillere.fr/M2WEB/tds/td3/albums.json';

$("#btn-toilets").on ("click", ()=> {
  $.getJSON (toiletsURL, (result) => 
  {
    //let data = JSON.parse (JSON.stringify(result))
    dispJSONToillet (result.d)
  })
});

$("#btn-kidareas").on ("click", ()=> {
  $.getJSON (kidareasURL, (result) => {
    //let data = JSON.parse (JSON.stringify(result))
    dispJSONKidArea (result.d)
  })
});

fetch(carouselImgURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    dispJSONImg (myJson.albums);
    console.log(myJson.albums);
  });

function dispJSONToillet (data)
{
  $("#data-list").empty ();
  for (let i = 0; i < data.length; ++i)
  {
    $("#data-list").append ("<li> Nom: " + data [i].nom + " | Adresse: " + data[i].adresse +  "</li>");
  }
}

function dispJSONKidArea (data)
{
  $("#data-list").empty ();
  for (let i = 0; i < data.length; ++i)
  {
    $("#data-list").append ("<li> Nom: " + data [i].nom + " | Age minimum: " + data[i].age_min + " | Age maximum: " + data[i].age_max + " | Nombre de jeux: " + data[i].nombre_jeux +  "</li>");
  }
}

function dispJSONImg (data)
{
  $("#carousel").empty ();
  for (let i = 0; i < data.length; ++i)
  {
    $("#carousel").append (" <li data-target=\"#myCarousel\" data-slide-to=" + i + "></li>");
    if (i == 0)
    {
      $("#indicators").append ("<li data-target=\"#myCarousel\" data-slide-to=" + i + " class=\"active\"></li>");
      $("#slide").append ("<div class=\"item active\"> <img src=" + data [i].url +  " alt=" + data [i].name + " style=\"margin:0px auto;\"></div>");
      print (data [i].url);
    }
    if (i > 1)
    {
      $("#slide").append ("<div class=\"item\"> <img src=" + data [i].url +  " alt=" + data [i].name + " style=\"margin:0px auto;\">");
    }
  }
}
