<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page pro de Guillaume Chupin</title>

  <link rel="stylesheet" href="css/master.css">
  <link rel="stylesheet" href="css/navbar.css">
  <link rel="stylesheet" href="css/mobile.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- Bootstrap & JQuery -->
  <link href="css/bootstrap.css" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

  <!-- Favicon -->
  <link rel="icon" href="Favicon.png">

</head>
<body onload="frOnLoad ()">
  <script>
  function frOnLoad() {document.body.className='fr';}
  </script>
    <?php include 'navbar.php' ?>
    <div class="container">

      <div class="jumbotron border">
        <div class="row">
          <div class="col-8">
            <h1 class="name  hideMobile">Guillaume Chupin</h1>
            <div class="row catchPhrase">
              <p lang="fr"> Génie logicielien de <span class="hideMobile">l'<a href="https://www.u-bordeaux.fr/">université de bordeaux</a></span></p>
              <p lang="en">Student in software engineering at  <span class="hideMobile"><a href="https://www.u-bordeaux.fr/">université de bordeaux</a></span></p>
            </div>
          </div>
          <div class="col-md-4">
            <a href="https://www.u-bordeaux.fr/"><img src="LogoUB.jpg" alt="Logo de l'université de bordeaux" class="img-fluid rounded"></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 col-xl-4">
          <div class="card  bg-warning">
            <div class="card-header bg-info"> <span class="fa fa-id-card-o"></span> Contact</div>
            <p class="card-body">
              <span  class="fa fa-at"></span> <span class="font-weight-bold">E-mail: </span>guillaume.chupin@etu.u-bordeaux.fr <br>
              <span  class="fa fa-github"></span> <span class="font-weight-bold">GitHub: </span><a href="https://github.com/gchupin">gchupin</a><br>
              <span  class="fa fa-suitcase"></span> <span class="font-weight-bold">Curriculum-vitae: </span><a href="curriculum-vitae.pdf" download>Cv</a>
            </p>
          </div>
        </div>

        <div class="col-lg-7 col-xl-8">
          <div class="card bg-warning">
            <div class="card-header bg-info" lang="fr"><span class="fa fa-certificate fa-pulse"></span> Compétence</div>
            <p class="card-body" lang="fr"> <span  class="fa fa-code"></span> <span> <span class="font-weight-bold">Language de Programmation: </span></span> c++, c, java, html/css, JavaScript, Python, Bash scripting.<br>
              <span  class="fa fa-microchip"></span> <span class="font-weight-bold">Outils: </span> Latex, Git/svn, emacs, vscode, netbeans. <br>
              <span  class="fa fa-sitemap"> </span><span class="font-weight-bold"> Framework: </span>Bootstrap 4, QT, javaFX <br>
            </p>
            <div class="card-header bg-info" lang="en"><span class="fa fa-certificate"></span> Skills</div>
            <p class="card-body" lang="en"> <span  class="fa fa-code"></span> <span> <span class="font-weight-bold">Programming langage: </span></span> c++, c, java, html/css, JavaScript, Python, Bash scripting.<br>
              <span  class="fa fa-microchip"></span> <span class="font-weight-bold">Tools: </span> Latex, Git/svn, emacs, vscode, netbeans. <br>
              <span  class="fa fa-sitemap"> </span><span class="font-weight-bold"> Framework: </span>Bootstrap 4, QT, javaFX <br>
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="mt-5 row">
        <div class="col-lg-12">
          <div class="card bg-warning">
            <div class="card-header bg-info"  lang="fr">
              <span class="fa fa-database"></span> A propos
            </div>
            <p class="card-body" lang="fr">
                A FAIRE
            </p>
            <div class="card-header bg-info"  lang="en">
              <span class="fa fa-database"></span> About me
            </div>
            <p class="card-body" lang="en">
              TO DO 
            </p>
          </div>
        </div> 
      </div> --> 
    </div>
  </body>
  </html>
