const toiletsURL = 'http://odata.bordeaux.fr/v1/databordeaux/sigsanitaire/?format=json&callback=?';
const kidareasURL = 'http://odata.bordeaux.fr/v1/databordeaux/airejeux/?format=json&callback=?';

function dispJSONData (data)
{
  $("#data-list").empty ();
  for (let i = 0; i < data.length; ++i)
  {
    $("#data-list").append ("<li> Nom: " + data [i].nom + "</li>");
  }
}

$("#btn-toilets").on ("click", ()=> {
  $.getJSON (toiletsURL, (result) => {
    //let data = JSON.parse (JSON.stringify(result))
    dispJSONData (result.d)
  })
});

$("#btn-kidareas").on ("click", ()=> {
  $.getJSON (kidareasURL, (result) => {
    //let data = JSON.parse (JSON.stringify(result))
    dispJSONData (result.d)
  })
});
