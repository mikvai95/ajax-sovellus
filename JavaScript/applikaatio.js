let xmlpyynto = new XMLHttpRequest(); // Luodaan XMLHttpRequest objekti
xmlpyynto.onload = function() { // Luodaan funktio, jota käytetään myöhemmin tässä tiedostossa
  munFunktio(this);
}

// Haetaan valitun teatterin tiedot

// Flamingo
function funktio1013() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1013");
xmlpyynto.send();
}

// Fantasia
function funktio1015() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1015");
xmlpyynto.send();
}

// Scala
function funktio1016() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1016");
xmlpyynto.send();
}

// Kuvapalatsi
function funktio1017() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1017");
xmlpyynto.send();
}

// Plaza
function funktio1018() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1018");
xmlpyynto.send();
}

// Promenadi
function funktio1019() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1019");
xmlpyynto.send();
}

// Turku: Kinopalatsi
function funktio1022() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1022");
xmlpyynto.send();
}

// Helsinki: Kinopalatsi
function funktio1031() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1031");
xmlpyynto.send();
}

// Maxim
function funktio1032() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1032");
xmlpyynto.send();
}

// Tennispalatsi
function funktio1033() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1033");
xmlpyynto.send();
}

// Cine Atlas
function funktio1034() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1034");
xmlpyynto.send();
}

// Plevna
function funktio1035() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1035");
xmlpyynto.send();
}

// Sello
function funktio1038() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1038");
xmlpyynto.send();
}

// Omena
function funktio1039() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1039");
xmlpyynto.send();
}

// Strand
function funktio1041() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1041");
xmlpyynto.send();
}

// Itis
function funktio1045() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1045");
xmlpyynto.send();
}

// Luxe Mylly
function funktio1046() {
xmlpyynto.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1046");
xmlpyynto.send();
}

// Luodaan taulukko, joka näyttää elokuvien tiedot
function munFunktio(xml) {
  const xmlDokumentti = xml.responseXML;
  const elokuva = xmlDokumentti.getElementsByTagName("Show");
  let taulukko = "<tr><th>Kuva</th><th>Elokuvan nimi</th><th>Elokuva alkaa</th><th>Elokuva loppuu</th><th>Valmistusvuosi</th><th>Kesto (min)</th><th>Ikäraja</th><th>Genre(t)</th><th>Teatteri ja sali</th><th>Elokuvan kieli</th><th>Lisätietoja</th></tr>";
  for (let i = 0; i < elokuva.length; i++) {
    taulukko += '<tr><td><img src="' + elokuva[i].getElementsByTagName("EventSmallImagePortrait")[0].childNodes[0].nodeValue + '" alt="Kuva ei toimi"></td><td>' +  
    elokuva[i].getElementsByTagName("Title")[0].childNodes[0].nodeValue + "</td><td>" + 
    elokuva[i].getElementsByTagName("dttmShowStart")[0].childNodes[0].nodeValue + "</td><td>" + 
    elokuva[i].getElementsByTagName("dttmShowEnd")[0].childNodes[0].nodeValue + "</td><td>" +
    elokuva[i].getElementsByTagName("ProductionYear")[0].childNodes[0].nodeValue + "</td><td>" +
    elokuva[i].getElementsByTagName("LengthInMinutes")[0].childNodes[0].nodeValue + "</td><td>" +
    elokuva[i].getElementsByTagName("Rating")[0].childNodes[0].nodeValue + "</td><td>" +
    elokuva[i].getElementsByTagName("Genres")[0].childNodes[0].nodeValue + "</td><td>" +
    elokuva[i].getElementsByTagName("TheatreAndAuditorium")[0].childNodes[0].nodeValue + "</td><td>" +
    elokuva[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue + "</td><td>" + 
    elokuva[i].getElementsByTagName("EventURL")[0].childNodes[0].nodeValue + "</td></tr>";

    document.getElementById("leffatiedot").innerHTML = taulukko;
  
  }
}