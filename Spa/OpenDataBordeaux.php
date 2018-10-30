<!doctype html>

<html>
<head>
  <meta charset="utf-8">
  <title>OpenData bordeaux</title>
  <script src="../jquery-3.3.1.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="../css/navbar.css">
  <link rel="stylesheet" href="../css/mobile.css">
  <link rel="stylesheet" href="../css/bootstrap.css">
  <script src="my.js" defer></script>
</head>
<body onload="frOnLoad ()">
  <script>
    function frOnLoad() {document.body.className='fr';}
  </script>
  <?php include '../navbar.php' ?>

  <div id="menu">
    <button type="button" id="btn-toilets"><span lang='fr'>Toilettes</span><span lang="en">Toilets</span></button>
    <button type="button" id="btn-kidareas"><span lang='fr'>Aires de jeux pour enfants</span><span lang="en">Kids areas</span></button>
  </div>
  <div id="data">
    <ul id="data-list">
    </ul>
  </div>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators" id="indicators">
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" id="slide">
  </div>

  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
</body>
</html>
