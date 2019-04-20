let 
    //On déclare notre variable date qui va contenir la date courante
    date = new Date(),
    //On recupère juste les heures, minutes et les sécondes
    time = date.getSeconds() + 60 * date.getMinutes() + 3600 * date.getHours();


//On attend jusqu'à ce que le DOM soit bien chargé, avant de lancer le script
window.onload = () => {
    //On recupère le body
    let body = document.getElementsByTagName('body');
    //Si le premier élement du body peut appliqué la propriété css3 transform selon le navigateur
    if(body[0].style.MozTransform === '' ||
        body[0].style.WebkitTransform === '' ||
        body[0].style.OTransform === '' ||
        body[0].style.OTransform === '' ||
        body[0].style.msTransform === '' ||
        body[0].style.transform === '')
    {
        //On définit une fonction aiguille qui va se charger de pivoter les différentes aiguille à cahque sécondes, minutes, heures
        const aiguille = () => {
            aiguilleDeSeconde.style.MozTransform =
                aiguilleDeSeconde.style.WebkitTransform =
                    aiguilleDeSeconde.style.OTransform =
                        aiguilleDeSeconde.style.msTransform =
                            aiguilleDeSeconde.style.transform = 'rotate(' + (time * 6) + 'deg)';
            aiguilleDeMinute.style.MozTransform =
                aiguilleDeMinute.style.WebkitTransform =
                    aiguilleDeMinute.style.OTransform =
                        aiguilleDeMinute.style.msTransform =
                            aiguilleDeMinute.style.transform = 'rotate(' + Math.round(time / 10) +
                                'deg)';
            aiguilleHeure.style.MozTransform =
                aiguilleHeure.style.WebkitTransform =
                    aiguilleHeure.style.OTransform =
                        aiguilleHeure.style.msTransform =
                            aiguilleHeure.style.transform = 'rotate(' + Math.round(time / 120) +
                                'deg)';
        };
        //On crée l'aiguille des secondes
        let
            aiguilleDeSeconde = document.createElement('img');
            aiguilleDeSeconde.setAttribute('src' , 'images/seconde.png');
            aiguilleDeSeconde.setAttribute('class', 'aiguille');
            aiguilleDeSeconde.setAttribute('alt' , 'aiguille des secondes');
            aiguilleDeSeconde.setAttribute('style', 'left: 283px;');

        //On crée l'aiguille des minutes
        let
            aiguilleDeMinute = document.createElement('img');
            aiguilleDeMinute.setAttribute('src' , 'images/minute.png');
            aiguilleDeMinute.setAttribute('class', 'aiguille');
            aiguilleDeMinute.setAttribute('alt' , 'aiguille des minutes');
            aiguilleDeMinute.setAttribute('style', 'left: 278px;');

        //On crée l'aiguille des heures
        let
            aiguilleHeure = document.createElement('img');
            aiguilleHeure.setAttribute('src' , 'images/heure.png');
            aiguilleHeure.setAttribute('class', 'aiguille');
            aiguilleHeure.setAttribute('alt' , 'aiguille des heures');
            aiguilleHeure.setAttribute('style', 'left: 278px;');

        //On crée le cadran de l'horloge
        let
            horloge = document.getElementById('horloge');
            horloge.appendChild(aiguilleDeSeconde);
            horloge.appendChild(aiguilleDeMinute);
            horloge.appendChild(aiguilleHeure);
            horloge.setAttribute('style', 'background: url(\'images/cadran.png\');');
        //On appelle une première fois notre fonction qui va s'auto appeller toute les une séconde
            aiguille();
        setInterval(function() {
            time++;
            aiguille();
        }, 1000);
    }
    setInterval(function() {
        date = new Date();
        time = date.getSeconds() + 60 * date.getMinutes() + 3600 *
            date.getHours();
    }, 60000);
};
