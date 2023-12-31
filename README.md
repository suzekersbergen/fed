# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Suze Kersbergen

  #### Je startniveau:
  blauw 

  #### Je focus:
  responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.asos.com/nl/dames/ 

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  
  <img src="./images/home.JPG" width="375px" alt="homepage">
  Dit is de homepage van Asos, een website die heel veel kleding, accesoires en schoenen verkoopt. De site is bekend en ik vond deze site geschikt door de variatie van de content. 

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="./images/productpagina.JPG" width="375px" alt="productomschrijving">
  De pagina is de omschijving van een bepaald product, ik zal waarschijnlijk niet de pagina van dit exacte product gebruiken maar de content is op elke productpagina hetzelfde. 
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>
  Ik heb de site door een validator gehaald, de validator gaf al gelijk een error aan dat het niet mogelijk was om de site te checken. Uiteindelijk is dit wel gelukt door de code direct in de validator te plakken. 

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  - De code bevat meer dan 700 errors, veel dezelfde fouten worden gemaakt zoals een alt tekst die ontbreekt of een div verkeerd gebruikt.
  - De site heeft een knop waarmee je kan skippen tot de inhoud, dit is handig voor een screenreader. Ook was deze functie niet makkelijk te vinden en kwam ik hier perongeluk op.
  - De menu is erg groot en heel lastig om met een screenreader doorheen te gaan. 
  - Af en toe slaat de screenreader een onderdeel over dus zullen deze elementen waarschijnlijk geen alt tekst bevatten.

 <img src="./images/validator.jpg" width="375px" alt="De errors van de code">
 <a href="readme-images/checklistsuze.pdf">Ingevulde WCAG checklist van de site van asos.</a>
  
  

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="./images/breakdownschets.jpg" width="375px" alt="breakdown van de hele pagina">
  Op de pagina is er veel dezelfde content te zien, ik wil elk deel er wel inzitten maar in verminder de hoeveelheid van bijvoorbeeld een lijst.

  ### dynamisch deel (bijv menu): 
  <img src="images/breakdown2.jpg" width="375px" alt="breakdown van productpagina">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="images/breakdown3.jpg" width="375px" alt="breakdown van het uitklap menu">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
   Deze week ben ik begonnen met mijn html document. Ik merkte dat veel van de stof van vorig jaar was weggezakt zoals hoe de tags ook alweer heten. Ik begon met de header, met wat hulp kon ik de stof weer naar boven halen. De tweede les kreeg ik de header af en hier was ik erg blij mee. De iconen heb ik gelinkt naar de productpagina 
  <img src="./images/header.jpg" width="375px" alt="de header">
  Ik heb deze week eerst orde in mijn hoofd gecreeërd door eerst foto's van elk blok in de code te zetten. Zo weet ik welk gedeelte waar moet komen. Het eerste en tweede blokje heb ik deze week kunnen uitwerken. Het plaatje van het tweede blokje heb een beetje gephotoshopt, zodat ik zelf de teksten met code erin kon zetten. De teksten die overlapte met het model op de foto heb ik erin gehouden omdat ik deze lastig kan wegwerken. 

  <img src="./readme-images/banner20procent.jpg" width="375px" alt="de foto waar ik tekst heb weggewerkt">
  <img src="./images/bannerklaar.jpg" width="375px" alt="hoe de banner is geworden op mijn site">
  <img src="./images/orginelebanner.jpg" width="375px" alt="hoe de banner eruit ziet op de orginele site">
  
  Ik had nog nooit gewerkt met first-of-type, nth-of-type en child. Ik heb in mijn vorige projecten veel met classes gewerkt maar omdat het niet de bedoeling is dat je er daar veel van gebruikt, vond ik het wel handig om te leren. Met aantekeningen maken en hulp van klasgenoten is het gelukt. In de code hieronder zie je dat ik dit heb toegepast om twee sections aan te spreken.

  <img src="./images/codeblokjes.jpg" width="375px" alt="code van de blokjes">

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  Deze week ging ik verder met mijn menu en de opbouw van de eerste en tweede pagina. 

 <img src="./images/grid.jpg" width="375px" alt="grid margin"> Ik heb een grid gemaakt met plaatjes, dit ging best makkelijk doordat ik hier aantekeningen van had gemaakt tijdens de uitleg. Op dit plaatje zie je dat de grid naar rechts staat. De grid neemt automatisch een margin aan. IK heb geprobeerd samen met de studentassistent om dit weg te halen maar dit is me niet gelukt. Ik heb het gepropbeerd door de padding, margin, align-items, en flexbox toe te passen. Uiteindelijk ben ik verder gaan werken omdat dit me niet is gelukt. 

  <img src="./images/damesmenu.jpg" width="375px" alt="het begin van mijn uitklapmenu"> Nadat ik alle iconen in de nav had staan, ging ik een uitklapbaar menu maken. Doordat ik een hele grote nav had zag ik het overzicht niet meer en wist ik niet goed hoe ik zo'n menu bij mijn eigen site kon maken. In deze foto heb ik het blokje wat het uitklapbare dames en heren menu moest zijn op block gezet zodat ik deze beter kan onderscheiden van de rest en dan zag ik zitten waar die stond. Het uitklapbare menu bevat twee knoppen die weer een aparte li waren en zo kreeg ik een steeds grotere nav. 
  <img src="./images/damesherenmenu.jpg" width="375px" alt="dames en heren menu"> vaak werd er niet aangesproken wat ik bedoelde, ik heb heb geprobeerd haakjes tussen de code te zetten zodat deze meer specifiek werd en niet alles wordt aangesproken. 
  <img src="./images/damesherenoude.jpg" width="375px" alt="de nav op de site">Zo zag de nav eruit op een groot scherm, het blokje kwam in de header te staan en alle punten stonden naast elkaar, dit moest ik gaan positioneren. Met hulp van de docent omdat ik zelf het overzicht niet meer zag heb ik het menu werkend gekregen. Het eerste kind van de li waarin dames en heren stond heb ik op display block gezet zodat als je het menu opent deze er gelijk staat, over het heren menu moet je hoveren om de content daarbinnen te kunnen zien. 
  <img src="./images/displayblock.jpg" width="375px" alt="dames menu moet worden laten zien"> Dit werkte alleen maar voor het begin, toen heb ik gekeken waar dit mis ging door het eerste kind een kleur te geven, dit zou het dames menu moeten voorstellen. Ipv dat alle punten uit het dames menu een blauwe achtergrond kregen, kregen de eerste twee punten dat van het kopje dames en heren. Dit kleine probleem heb ik voor later gelaten. 
  <img src="./images/navimg.jpg" width="375px" alt="foto in de nav">Ik had geprobeerd een foto in een li te zetten zodat ik plaatjes kreeg in mijn menu. Ik zag gelijk al dat dit niet uitpakte hoe ik het bedoeld had en aangezien ik het menu net werkend had gekregen vond ik een kaal menu ook goed voor nu. Stel ik heb nog tijd over ga ik plaatjes toevoegen. 
  <img src="./images/damespadding.jpg" width="375px" alt="padding binnen menu"> Ik merkte dat door een kleine toevoeging van een animatie alles verschoof, er was veel ruimte in mijn menu en in de nav. Door alle onderdelen een ander kleurtje te geven kwam ik erachter dat er iets mis was met de padding wat het plaatje van het kruis uit beeld drukt. Blijjbaar had ik een span op dames en heren gezet, in de header heb ik ook een span staan voor de animatie. Ik had een padding op nav span gezet waardoor alle spans in de nav een padding kregen. 
  <img src="./images/articlejas.jpg" width="375px" alt="article gebruikt"> Ik had moeite met de stijling van mijn tweede pagina, ik heb met classes geprobeerd bepaalde sections er dan niet meer zo uit te laten zien. Dat werkte niet, als ik iets had aangesproken met nth-of-type dan kon ik het niet meer ongedaan maken met een class bij een andere section. Toen heb ik articles gebruikt op mijn tweede pagina, dit was niet echt de bedoeling dus ik moest een nieuwe manier bedenken. De studentassistent kwam met het idee om een class op de body te zetten en dan in de css de class aan te spreken en daarna een nth-of-type, dit werkte in de meeste gevallen. Toen werd het duidelijk voor mij dat je meerdere css pagina's mag aanmaken. Dit was veel makkelijker en overzichtelijker, ik heb toen mijn vorige code veranderd. 
  <img src="./images/animatie.jpg" width="375px" alt="winkelmand animatie"> Op dlo stonden een aantal odprachten over animaties maken, deze heb ik gebruikt om mijn eigen animatie te maken. Zelf is de opzet van mijn nav vrij ingewikkeld dus was het niet heel makkelijk om dit op mijn pagina toe te passen. Toen wou ik een andere animatie gaan maken, dat het hartje gaat bewegen als je er op klikt. Het bleek dat je hiervoor veel frames nodig had met de animatie erop, ik ging maar verder met me eerdere plan. Als iemand op de 'in winkelwagen' button klikt moet er een getal komen bij het icoon van de winkelwagen. Met wat tutorials te hebben gekeken had ik een idee hoe ik dit kon doen. Toen ik het ging uitvoeren merkte ik dat die elementen die ik probeerde aan te spreken niet aangesproken werden. Ik heb het toen aan chatGPT gevraagd en met een beetje hulp zag ik de fout in, ik had mijn code weer niet specifiek genoeg gemaakt. Uiteindelijk ben ik erg trots op mijn animatie. 
  bron: https://chat.openai.com/ & (Web Dev Simplified, 2018)

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):
  Ik heb mijn site door een validator gehaald en er kwamen bijna geen errors uit de code, alleen iets over het document maar de studentassistent zei dat ik dit kon negeren omdat dit er al in stond toen ik dit bestand gebruikte. IK kreeg een error dat er een a tag sluit maar nergens opend, dit was een verdwaalde tag die ik vergeten was om weg te halen. Dit heb ik gelijk even aangepast. Verder kreeg ik geen andere errors of warnings. 

  Toen ik de screenreader over de pagina liet gaan merkte dat dit al fijner werkte als de echte site. Op de echte site skipt de screenreader veel belangrijke dingen, op mijn site doet die dit niet. De meeste alt teksten zijn informatief, wel moet ik nog even kijken of alle tekst uit de plaatjes ook in de alt tekst staan. 


   <a href="readme-images/checklistsuze.pdf">Ingevulde WCAG checklist van de site van asos.</a>

</details>






## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>
  Deze week wou ik me gaan focussen op alles responsive maken. 

  <img src="./images/resmenu.jpg" width="375px" alt="responsive maken van menu"> Ik wou het menu responsive hebben voor op een groot scherm, want nu als ik het scherm groter maak komt er een blauw blokje in de nav. Het menu die ik probeer te maken die hoort onder de navigatiebalk te staan op een groter scherm. Met wat research heb deze manier van een media query gebruiken een beetje leren kennen, dit snap ik nu beter. 
  <img src="./images/navblok.jpg" width="375px" alt="het blokje onder de nav">het menublokje staat half op de navigatie balk maar ik vond het toch een goede poging. Door de width aan te passen werd het aan de rechterkant een balk. Ik heb het kruis proberen weg te krijgen door het laatste kind een display none te geven, toen had ik de code specifieker gemaakt met de button ook nog te benoemen en de laatste poging was om important erachter te zetten. Deze pogingen werkte allemaal niet en ik heb het kruis maar laten staan. 
  <img src="./images/respmenu.jpg" width="375px" alt="responsive menu"> Op de site zelf het menu er op een bepaald punt zo uit, dat is de menubalk die op een later breakpoint onder de nav komt. Ik weet niet hoe ik dit hier weg krijg, ik heb het breakpoint nog proberen te verandedren maar dat maakt geen verschil in dit beeld.
  <img src="./images/resproduct.jpg" width="375px" alt="responsive productpagina"> De tweede pagina wou ik ook repsonsive hebben, ik had twee colommen nodig om bepaalde sections naast elkaar te zetten. Met hulp van de docent heb ik een grid gemaakt. Om alles op de goede plek te zetten heb ik classes gebruikt op de verschillende sections. Ook mocht ik een div aanmaken zodat ik de grid beter kon aanspreken. Het kleinere plaatje wat het aantal likes bevat staat in dezelfde section als het grote plaatje maar deze heeft de position absolute. Ik heb in de media query deze maten veranderd voor een groot scherm zodat het plaatje meegaat met het andere plaatje. 
  <img src="./images/grideerst.jpg" width="375px" alt="dit was de code van de grid met 4 plaatjes eerst"> De grid die ik gebruik op de eerste en tweede pagina had ik eerder al responsive gemaakt, alleen staat deze op een groot scherm links van de pagina terwijl ik hem in het midden wil.
  <img src="./images/gridcenter.jpg" width="375px" alt="naar het midden geprobeerd te krijgen"> Hier heb ik met justify content center geprobeerd de plaatjes naar het midden te krijgen. Dit werkte niet. 
  <img src="./images/vervolgcenter.jpg" width="375px" alt="gecentreerd"> Zo zag het er toen uit, de plaatjes stonden wel in het midden maar dan onder elkaar. 
  <img src="./images/oplossinggrid.jpg" width="375px" alt="oplossing voor de grid">Display block wat ik eerder had gebruikt was onnodig hier heb ik display flex voor gebruikt, toen heb ik flex wrap toegepast zodat de afbeeldingen naar de volgende regel gaan als deze niet meer passen. 
  (Flex-Wrap - CSS: Cascading Style Sheets | MDN, 2023)
  <img src="./images/burgerbuttonweg.jpg" width="375px" alt="burger button weg"> Ik kwam erachter dat op een groot scherm mijn burger menu icoon nog te zien is, ik kreeg deze vrij makkelijk weg door button uit de nav te selecteren, ik hoopte dat hiermee ook het kruis icoontje weg zou gaan wat me eerder niet was gelukt maar helaas werkte dat niet.
  <img src="./images/iconenrechts.jpg" width="375px" alt="iconen naar rechts"> Ook wou ik de iconen naar rechts verschuiven, ik heb een margin left gezet op het logo waardoor alle iconen automatisch naar rechts verschoven. 
  Zo ziet mijn nav er nu uit op een groot scherm:  
  <img src="./images/navnu.jpg" width="375px" alt="mijn navigatie nu">
  <img src="./images/sluitbuttonweg1.jpg" width="375px" alt="sluit button weg krijgen"> Vorige week had ik al veel geprobeerd om de sluit button weg te krijgen uit mijn nav op een groot scherm. Deze week had ik het idee dat er meer elementen werden aangesproken wanneer ik dat wou, daarom besloot ik het nog een keer te proberen. In de eerste poging had ik het laatste kind van de nav ul li gepakt, er gebeurde niks.
  <img src="./images/sluitbutton2.jpg" width="375px" alt="tweede poging sluit button wegkrijgen"> In de tweede poging had ik het hele klikbare gebied van de button geselecteerd en dan deze op display none zetten, ook dit werkte niet.
  <img src="./images/sluitbutton3.jpg" width="375px" alt="derde poging sluit button wegkrijgen"> In de derde poging heb ben ik terug gegaan naar het laatste kind van de nav ul li aan te spreken en deze een important tag te geven, ook hier werd de knop niet aangesproken. Ik heb het hierbij gelaten omdat ik niet wist hoe ik dit weg kon krijgen. 
  <img src="./images/plaatjesgrid.jpg" width="375px" alt="grid met converse">Op een groot scherm komt er naast het plaatje converse nog een plaatje te staan, met display none op een klein scherm heb ik hem hier onzichtbaar gemaakt. De tekst onder de plaatjes stonder overal en nergens, daarom heb ik voor op een groot scherm een grid aangemaakt waarin ik elk onderdeel een plek geef. Toen zag mijn site er zo uit: 
  <img src="./images/uitkomsteerst.jpg" width="375px" alt="uitkomst grid"> De tekst en button staan nog niet goed onder de plaatjes en de plaatjes staan niet in het midden. 
  <img src="./images/gridmidden.jpg" width="375px" alt="de grid naar het midden verplaatsen"> Ik heb met margin left alles gepositioneerd, als je de site in de browser bekijkt op responsive dat staat alles mooi op de goede plek. Als je de site voledig groot bekijkt dan staat niet alles helemaal recht meer. Ik wist niet hoe ik dit op elk formaat goed kon plaatsen. Dit is het resultaat:
  <img src="./images/resultaat.jpg" width="375px" alt="resultaat van het positioneren">
      
</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="images/uitkomst.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Grid vond ik aan het begin lastig maar is me toch gelukt, en het is ook gelukt om deze op een groot scherm in het midden te krijgen. 

  <img src="images/goedgelukt.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Het menu is niet geworden zoals ik wou, het menu bevat geen plaatjes en op een groter scherm is die niet hetzelfde als op de site. Ik heb veel geprobeerd maar het is me niet helemaal gelukt. 

  <img src="images/mindergelukt.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. ChatGpt, ik kon deze bron niet citeren
  2. Flex-Wrap - CSS: Cascading Style Sheets | MDN. (2023, 11 augustus). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
  3. Web Dev Simplified. (2018, 4 oktober). JavaScript shopping cart tutorial for beginners [Video]. YouTube. https://www.youtube.com/watch?v=YeFzkC2awTM
  4. HTML Details tag. (z.d.). https://www.w3schools.com/tags/tag_details.asp 

</details>