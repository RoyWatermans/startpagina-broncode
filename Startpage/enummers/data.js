const eNumbers = [
    { 
        n: "100", name: "Curcumine", risk: "Groen", 
        desc: "Natuurlijk extract; veilig.", 
        longDesc: "Geconcentreerde geelwortel. Geen risico voor darm of vaten." 
    },
	
	{ 
        n: "102", name: "Tartrazine", risk: "Rood", 
        desc: "Synthetische azo-kleurstof.", 
        warn: "⚠ DUBBEL RISICO: Allergie & Darmprikkeling.", 
        longDesc: "Deze kleurstof staat bekend om het uitlokken van overgevoeligheidsreacties. Voor iemand met een gevoelige darmwand (na poliepen) is dit een onnodige chemische prikkel die ontstekingsreacties kan bevorderen." 
    },

    { 
        n: "101", name: "Riboflavine", risk: "Groen", 
        desc: "Vitamine B2; veilig.", 
        longDesc: "Natuurlijke kleurstof, essentieel voor het lichaam." 
    },
    { 
        n: "102", name: "Tartrazine", risk: "Rood", 
        desc: "Synthetisch; allergie-trigger.", 
        longDesc: "Azo-kleurstof gelinkt aan hyperactiviteit en astma-aanvallen." 
    },
    { 
        n: "104", name: "Quinolinegeel", risk: "Rood", 
        desc: "Tast concentratie aan.", 
        longDesc: "Verdenking van carcinogeniteit bij hoge doses." 
    },
    { 
        n: "110", name: "Zonnegeel FCF", risk: "Rood", 
        desc: "Synthetisch; link met ADHD.", 
        longDesc: "Mijden bij kinderen en mensen met een gevoelig zenuwstelsel." 
    },
    { 
        n: "120", name: "Karmijn", risk: "Oranje", 
        desc: "Dierlijk rood; allergeen.", 
        longDesc: "Gewonnen uit luizen. Kan heftige allergische reacties veroorzaken." 
    },
    { 
        n: "122", name: "Karmoizijn", risk: "DonkerRood", 
        desc: "Synthetische rode kleurstof.", 
        warn: "⚠ DUBBEL RISICO: Potentieel kankerverwekkend.", 
        longDesc: "Touvier classificeert dit als een zeer omstreden stof. Het kan celprocessen verstoren, wat kritiek is bij een geschiedenis van poliepvorming (celmutaties)." 
    },
    { 
        n: "124", name: "Ponceau 4R", risk: "DonkerRood", 
        desc: "Gelinkt aan kankerrisico.", 
        longDesc: "Een van de meest omstreden azo-kleurstoffen." 
    },
    { 
        n: "127", name: "Erytrosine", risk: "Rood", 
        desc: "Beïnvloedt schildklier.", 
        longDesc: "Kan de jodiumbalans in de schildklier verstoren." 
    },
    { 
        n: "129", name: "Allurarood AC", risk: "Rood", 
        desc: "Link met darmontstekingen.", 
        warn: "Mijden bij gevoelige darmen!", 
        longDesc: "Wordt door Touvier genoemd als irriterend voor de darmwand." 
    },
    { 
        n: "133", name: "Briljantblauw", risk: "Rood", 
        desc: "Slecht voor nieren.", 
        longDesc: "Kan de bloed-hersenbarrière passeren en de nieren belasten." 
    },
    { 
        n: "150c", name: "Karamel (ammoniak)", risk: "Oranje", 
        desc: "Bevat 4-MEI; mogelijk carcinogeen.", 
        longDesc: "Door het gebruik van ammoniak kunnen schadelijke stoffen ontstaan." 
    },
    { 
        n: "160a", name: "Carotenen", risk: "Groen", 
        desc: "Natuurlijk oranje uit planten.", 
        longDesc: "Veilige kleurstoffen. Geen negatieve effecten op vaten of darmen bekend." 
    },
    { 
        n: "171", name: "Titaandioxide", risk: "DonkerRood", 
        desc: "Witte kleurstof (nanodeeltjes).", 
        warn: "⚠ DUBBEL RISICO: DNA-schade & Darmwandpenetratie.", 
        longDesc: "Verboden in de EU omdat nanodeeltjes de darmbarrière passeren en DNA-schade kunnen veroorzaken. Dit is een directe bedreiging voor het herstel van de darmwand." 
    },
    { 
        n: "172", name: "IJzeroxiden", risk: "Geel", 
        desc: "Minerale kleurstoffen.", 
        longDesc: "Touvier waarschuwt voor nanodeeltjes die de darmwand kunnen irriteren." 
    },
    { 
        n: "200", name: "Sorbinezuur", risk: "Geel", 
        desc: "Conserveermiddel; veilig bij mate.", 
        longDesc: "Veelgebruikt in vla. Kan bij overdaad darmprikkels geven." 
    },
    { 
        n: "202", name: "Kaliumsorbaat", risk: "Geel", 
        desc: "Tegen schimmels; veilig.", 
        longDesc: "Industrieel synthetisch conserveermiddel." 
    },
    { 
        n: "210", name: "Benzoëzuur", risk: "Rood", 
        desc: "Mogelijk darm-irriterend.", 
        longDesc: "Touvier waarschuwt voor de belasting van de lever." 
    },
    { 
        n: "211", name: "Natriumbenzoaat", risk: "Rood", 
        desc: "Gelinkt aan hyperactiviteit.", 
        longDesc: "In combinatie met Vitamine C kan het kankerverwekkend benzeen vormen." 
    },
    { 
        n: "220", name: "Zwaveldioxide", risk: "Rood", 
        desc: "Gevaarlijk bij astma.", 
        longDesc: "Berucht in wijn; vernietigt Vitamine B1." 
    },
    { 
        n: "234", name: "Nisine", risk: "Groen", 
        desc: "Natuurlijk antibioticum in kaas.", 
        longDesc: "Geproduceerd door bacteriën; over het algemeen als veilig gezien." 
    },
    { 
        n: "235", name: "Natamycine", risk: "Oranje", 
        desc: "Schimmelwerend op kaaskorst.", 
        warn: "DARM: Mijden bij poliepen!", 
        longDesc: "Antibioticum dat de darmflora kan verstoren. Snijd de korst ruim weg." 
    },
	{ 
        n: "242", name: "Dimethyldicarbonaat", risk: "Oranje", 
        desc: "Conserveermiddel (koudsterilisatiemiddel) in dranken.", 
        warn: "UPF: Marker voor zwaar bewerkte dranken.", 
        longDesc: "Dit middel wordt toegevoegd tijdens het bottelen om gisten en bacteriën te doden zonder dat de drank verhit hoeft te worden. Hoewel de stof zelf snel afbreekt in minieme hoeveelheden methanol en CO2, classificeert de benchmark van Touvier dit als een puur industrieel procesmiddel. Het is een marker voor Ultra-Processed Food (UPF) en hoort niet thuis in een dieet dat streeft naar onbewerkte, 'schone' producten." 
    },
    { 
        n: "249", name: "Kaliumnitriet", risk: "DonkerRood", 
        desc: "Conserveermiddel vleeswaren.", 
        warn: "⚠ DUBBEL RISICO: Darmkanker & Vaatbelasting!", 
        longDesc: "Het gevaarlijkste nummer voor jouw profiel. Het bevordert de vorming van nitrosaminen (kankerverwekkend na poliepen) en verhoogt de oxidatieve stress in je vaten (risico na TIA)." 
    },
    { 
        n: "250", name: "Natriumnitriet", risk: "DonkerRood", 
        desc: "Bewerkt vlees (ham, spek, etc.).", 
        warn: "⚠ DUBBEL RISICO: Directe link met poliepen & TIA risico!", 
        longDesc: "Gelijk aan E249. Het blokkeert de gezonde werking van de darmcellen en zorgt voor ontstekingswaarden in het bloed die vaatwand-erosie versnellen." 
    },
    { 
        n: "251", name: "Natriumnitraat", risk: "DonkerRood", 
        desc: "Conserveermiddel in kaas en vlees.", 
        warn: "⚠ DUBBEL RISICO: Wordt in darm nitriet.", 
        longDesc: "Hoewel nitraat op zichzelf minder schadelijk lijkt, zet je lichaam dit om in nitriet. Dit proces is funest voor een darmwand die rust nodig heeft na poliepvorming." 
    },
    { 
        n: "252", name: "Kaliumnitraat", risk: "DonkerRood", 
        desc: "Salpeter in traditionele producten.", 
        warn: "⚠ DUBBEL RISICO: Chemische darmprikkel.", 
        longDesc: "Beschadigt direct de slijmlaag van de darm. De hiermee gepaard gaande ontstekingen zijn een bekende trigger voor zowel nieuwe poliepen als vaatproblemen." 
    },
    { 
        n: "260", name: "Azijnzuur", risk: "Groen", 
        desc: "Natuurlijk zuur (azijn).", 
        longDesc: "Veilig en wordt volledig afgebroken door het lichaam." 
    },
    { 
        n: "261", name: "Kaliumacetaten", risk: "Groen", 
        desc: "Zout van azijnzuur; veilig.", 
        longDesc: "Veilige zuurteregelaar; geen risico voor FH of darmen." 
    },
    { 
        n: "262", name: "Natriumacetaten", risk: "Groen", 
        desc: "Zout van azijnzuur.", 
        longDesc: "Wordt door lichaam gezien als gewoon azijn; veilig." 
    },
    { 
        n: "270", name: "Melkzuur", risk: "Groen", 
        desc: "Natuurlijk zuurteregelaar.", 
        longDesc: "Lichaamseigen stof; ontstaat bij fermentatie; volkomen veilig." 
    },
    { 
        n: "282", name: "Calciumpropionaat", risk: "Rood", 
        desc: "Prikkelt maagwand.", 
        longDesc: "Kan migraine triggeren; veel in voorverpakt brood." 
    },
    { 
        n: "284", name: "Boorzuur", risk: "DonkerRood", 
        desc: "Toxisch bij stapeling.", 
        longDesc: "Alleen toegestaan in kaviaar; verboden in andere voedingsmiddelen." 
    },
    { 
        n: "301", name: "Natriumascorbaat", risk: "Groen", 
        desc: "Zout van Vitamine C; veilig.", 
        longDesc: "Volkomen veilig antioxidant; voorkomt verkleuring." 
    },
    { 
        n: "320", name: "BHA", risk: "DonkerRood", 
        desc: "Hormoonverstoorder.", 
        longDesc: "Antioxidant in vetten; mogelijk kankerverwekkend." 
    },
    { 
        n: "322", name: "Lecithine", risk: "Groen", 
        desc: "Natuurlijk; veilig.", 
        longDesc: "Meestal uit soja of zonnebloem; geen risico's." 
    },
    { 
        n: "326", name: "Kaliumlactaat", risk: "Groen", 
        desc: "Zout van melkzuur; veilig.", 
        longDesc: "Veilige zuurteregelaar; veilig voor de darmflora." 
    },
    { 
        n: "330", name: "Citroenzuur", risk: "Geel", 
        desc: "Tast tandglazuur aan.", 
        longDesc: "Natuurlijk zuur, maar slecht voor tanden bij overdaad." 
    },
    { 
        n: "331", name: "Natriumcitraten", risk: "Groen", 
        desc: "Zout van citroenzuur; veilig.", 
        longDesc: "Veilig; veel in frisdrank en jam." 
    },
    { 
        n: "338", name: "Fosforzuur", risk: "Rood", 
        desc: "Zuurteregelaar in cola en UPF.", 
        warn: "⚠ DUBBEL RISICO: Vaatstijfheid & Kalkafzetting.", 
        longDesc: "Hasenböhler waarschuwt: industriële fosfaten worden 100% opgenomen en 'verkalken' de vaten. Dit is levensgevaarlijk na een TIA en bij FH." 
    },
    { 
        n: "339", name: "Natriumfosfaat", risk: "Rood", 
        desc: "Stabilisator in zuivel en sauzen.", 
        warn: "⚠ DUBBEL RISICO: Aderverkalking & Nierbelasting.", 
        longDesc: "Verhoogt de fosfaatspiegel in het bloed direct, wat de binnenwand van de vaten (endotheel) beschadigt. Mijden voor vaatbehoud." 
    },
    { 
        n: "340", name: "Kaliumfosfaten", risk: "Rood", 
        desc: "Hulpstof in poeders en dranken.", 
        warn: "⚠ DUBBEL RISICO: Versnelt vaatveroudering.", 
        longDesc: "Draagt bij aan de totale fosfaat-overload. In combinatie met de darm-ontsteking van UPF vormt dit een toxische cocktail voor je systeem." 
    },
    { 
        n: "350", name: "Natriummalaten", risk: "Groen", 
        desc: "Zout van appelzuur; veilig.", 
        longDesc: "Natuurlijk zuur uit appels; geen risico's." 
    },
    { 
        n: "385", name: "EDTA", risk: "Oranje", 
        desc: "Remt opname mineralen.", 
        longDesc: "Kan leiden tot tekorten aan zink of ijzer." 
    },
	{ 
        n: "400", name: "Algininezuur", risk: "Groen", 
        desc: "Natuurlijke verdikker uit zeewier.", 
        longDesc: "Een veilig extract uit bruinalgen. Het wordt niet opgenomen door het lichaam en vormt een beschermend laagje in de maag. Geen risico voor de vaten." 
    },
    { 
        n: "401", name: "Natriumalginaat", risk: "Groen", 
        desc: "Zout van algininezuur.", 
        longDesc: "Veelgebruikt in vla en ijs. Wordt door Touvier als veilig beschouwd en heeft zelfs een licht positief effect op de verzadiging." 
    },
    { 
        n: "406", name: "Agar-agar", risk: "Groen", 
        desc: "Natuurlijk bindmiddel uit roodalgen.", 
        longDesc: "Het plantaardige alternatief voor gelatine. Het is rijk aan vezels en volkomen veilig voor de darmen en vaten." 
    },
    { 
        n: "407", name: "Carrageen", risk: "DonkerRood", 
        desc: "Verdikker in vla en light-producten.", 
        warn: "⚠ DUBBEL RISICO: 'Wasmiddel' voor de darmwand.", 
        longDesc: "Veroorzaakt zware darmontsteking in lab-tests. Voor iemand met een verleden van poliepen is dit de snelste weg naar nieuwe complicaties." 
    },
    { 
        n: "410", name: "Johannesbroodpitmeel", risk: "Groen", 
        desc: "Natuurlijke verdikker.", 
        longDesc: "Veilig, maar kan bij grote hoeveelheid gasvorming geven." 
    },
    { 
        n: "412", name: "Guargom", risk: "Geel", 
        desc: "Kan gasvorming geven.", 
        longDesc: "Vezel die darmklachten kan geven bij gevoeligheid." 
    },
	{ 
        n: "414", name: "Arabische gom", risk: "Groen", 
        desc: "Natuurlijke gom van de acaciaboom.", 
        longDesc: "Een veilige vezel die vaak in snoep en frisdrank zit. Het kan zelfs fungeren als een prebioticum voor goede darmbacteriën." 
    },
    { 
        n: "415", name: "Xanthaangom", risk: "Geel", 
        desc: "Veilig; licht laxerend.", 
        longDesc: "Gom geproduceerd door bacteriële fermentatie." 
    },
	{ 
        n: "420", name: "Sorbitol", risk: "Geel", 
        desc: "Suikeralcohol (polyool) gebruikt als zoetstof en bevochtiger.", 
        warn: "DARM: Kan laxerend werken en krampen geven.", 
        longDesc: "Sorbitol wordt slecht opgenomen in de dunne darm en fermenteert in de dikke darm. Dit trekt water aan, wat bij gevoelige darmen kan leiden tot een opgeblazen gevoel, winderigheid en diarree. Touvier adviseert om bij een geschiedenis van darmklachten of poliepen de inname van polyolen te beperken om onnodige prikkeling van de darmwand te voorkomen." 
    },
    { 
        n: "422", name: "Glycerol", risk: "Geel", 
        desc: "Suikeralcohol; veilig.", 
        longDesc: "Bevochtiger in cake en zoetwaren." 
    },
    { 
        n: "425", name: "Konjac", risk: "Oranje", 
        desc: "Geleermiddel uit wortel.", 
        warn: "DARM: Sterke zwelling.", 
        longDesc: "UPF-marker; beïnvloedt opname van voedingsstoffen." 
    },
    { 
        n: "433", name: "Polysorbaat 80", risk: "DonkerRood", 
        desc: "Emulgator in ijs en sauzen.", 
        warn: "⚠ DUBBEL RISICO: Lekkende darm & Bloedonrust.", 
        longDesc: "Lost de beschermende slijmlaag van je darmen op. Hierdoor 'lekken' gifstoffen naar je bloed, wat je vaten direct onder ontstekingsdruk zet." 
    },
    { 
        n: "440", name: "Pectine", risk: "Groen", 
        desc: "Uit fruit; veilig.", 
        longDesc: "Natuurlijk geleermiddel; goed voor de darmflora." 
    },
	{ 
        n: "441", name: "Gelatine", risk: "Groen", 
        desc: "Eiwit van dierlijke oorsprong.", 
        longDesc: "Hoewel het een E-nummer heeft, is het een natuurlijk product. Veilig voor de vaten, mits de rest van het product niet te veel verzadigd vet bevat." 
    },
    { 
        n: "444", name: "Sucroseacetaatisobutyraat", risk: "Oranje", 
        desc: "Stabilisator in frisdranken.", 
        warn: "UPF: Marker voor zwaar bewerkte dranken.", 
        longDesc: "Zorgt dat smaakstoffen in vloeistof blijven zweven. Touvier raadt aan deze chemische stabilisatoren te mijden in een 'schoon' dieet." 
    },
	{ 
        n: "450", name: "Difosfaten", risk: "Rood", 
        desc: "Slecht voor vaten.", 
        warn: "VATEN: Risico bij FH!", 
        longDesc: "Verhardt bloedvaten en belast de nieren." 
    },
    { 
        n: "451", name: "Trifosfaten", risk: "Rood", 
        desc: "Waterbinder in vlees.", 
        warn: "VATEN: Risico op vaatstijfheid.", 
        longDesc: "Directe verstoring van de calciumbalans in de vaatwanden." 
    },
    { 
        n: "452", name: "Polyfosfaten", risk: "Rood", 
        desc: "Emulgator in smeltkaas.", 
        warn: "VATEN: Belastend voor hart.", 
        longDesc: "Gelinkt aan schade aan de vaatwanden in grote studies." 
    },
    { 
        n: "461", name: "Methylcellulose", risk: "Rood", 
        desc: "Synthetische verdikker.", 
        warn: "DARM: Kan ontsteking triggeren.", 
        longDesc: "Tast darmslijmlaag aan; mijden bij poliepen-geschiedenis." 
    },
    { 
        n: "464", name: "HPMC", risk: "Rood", 
        desc: "Link darmontsteking.", 
        longDesc: "Synthetisch alternatief voor gluten; vaak in glutenvrij brood." 
    },
    { 
        n: "466", name: "Cellulosegom (CMC)", risk: "DonkerRood", 
        desc: "Veelgebruikte emulgator.", 
        warn: "⚠ DUBBEL RISICO: Touvier 2024: Kankerrisico!", 
        longDesc: "Sterkste link met darmkanker in recente studies. Het verstoort de darmbacteriën zo erg dat celmutaties (poliepen) worden uitgelokt." 
    },
	
	{ 
        n: "468", name: "Vernette natriumcarboxymethylcellulose", risk: "Rood", 
        desc: "Stabilisator en vulstof (gemodificeerde cellulose).", 
        warn: "⚠ DUBBEL RISICO: Darmwand-irritant & UPF-marker.", 
        longDesc: "Chemisch neefje van E466. Touvier (2024) waarschuwt dat gemodificeerde celluloses de beschermende slijmlaag van de darm kunnen verzwakken. Gezien de eerdere SSL en adenoom uitslagen is dit een nummer om strikt te mijden om de darmwand rust te geven." 
    },
    { 
        n: "471", name: "Mono- en diglyceriden", risk: "DonkerRood", 
        desc: "Emulgator in brood en margarine.", 
        warn: "⚠ DUBBEL RISICO: Algemeen kankerrisico.", 
        longDesc: "Nieuwe data (2024) tonen een statistisch verband met borst- en prostaatkanker. Het is de ultieme marker voor zwaar bewerkt voedsel." 
    },
	{ 
        n: "481", name: "Natriumstearoyllactylaat", risk: "Oranje", 
        desc: "Emulgator in industrieel brood en gebak.", 
        warn: "DARM: Kan darmflora beïnvloeden.", 
        longDesc: "Onderdeel van de 'moderne' emulgatoren waar Touvier in 2024 voor waarschuwt. Kan bij overmatige inname de balans van de darmbacteriën verstoren." 
    },
    { 
        n: "491", name: "Sorbitanmonostearaat", risk: "Oranje", 
        desc: "Synthetische emulgator.", 
        longDesc: "Vaak gebruikt in gist en droge bakproducten. Kan bij grote hoeveelheden darmklachten veroorzaken door de afbraakproducten in de dikke darm." 
    }, 
    { 
        n: "500", name: "Natriumcarbonaten", risk: "Groen", 
        desc: "Zout (soda) gebruikt als rijsmiddel.", 
        longDesc: "Natriumcarbonaat is een natuurlijk mineraal dat al eeuwenlang veilig wordt gebruikt bij het bakken. Het is volkomen veilig voor zowel de vaten als de darmen. Touvier classificeert dit als een 'onschuldig' additief dat geen negatieve impact heeft op de gezondheid." 
    },
	{ 
        n: "503", name: "Ammoniumcarbonaten", risk: "Groen", 
        desc: "Rijsmiddel gebruikt in koekjes en gebak.", 
        longDesc: "Dit rijsmiddel (ook wel vlugzout genoemd) verdampt tijdens het bakproces vrijwel volledig in de vorm van gas. Er blijven geen schadelijke resten achter in het koekje. Het is een veilig alternatief voor chemische rijsmiddelen en vormt geen risico voor FH of de darmwand." 
    },
    { 
        n: "541", name: "Natriumaluminiumfosfaat", risk: "Rood", 
        desc: "Rijsmiddel.", 
        warn: "VATEN: Belastend bij FH.", 
        longDesc: "Slecht voor de vaten door de combinatie van aluminium en fosfaat." 
    },
    { 
        n: "551", name: "Siliciumdioxide", risk: "Oranje", 
        desc: "Antiklontermiddel.", 
        longDesc: "Nanodeeltjes kunnen darmprikkeling veroorzaken." 
    },
    { 
        n: "575", name: "Glucono-delta-lacton", risk: "Groen", 
        desc: "Veilige zuurteregelaar.", 
        longDesc: "Wordt in het lichaam veilig in suikers omgezet." 
    },
    { 
        n: "621", name: "MSG (Vetsin)", risk: "Oranje", 
        desc: "Smaakversterker.", 
        longDesc: "Neuro-excitant; kan vreetbuien en hoofdpijn triggeren." 
    },
    { 
        n: "627", name: "Natriumguanylaat", risk: "Oranje", 
        desc: "Smaakversterker.", 
        warn: "DARM: Kan prikkeling geven.", 
        longDesc: "Industrieel additief; wijst op zwaar bewerkte voeding." 
    },
    { 
        n: "631", name: "Natriuminosinaat", risk: "Oranje", 
        desc: "Smaakversterker.", 
        warn: "ALGEMEEN: Purinerijk.", 
        longDesc: "Kan lichte irritaties van het darmslijmvlies geven." 
    },
    { 
        n: "635", name: "Natrium-5-ribonucleotiden", risk: "Oranje", 
        desc: "Sterke smaakversterker.", 
        longDesc: "Kan allergische reacties en huidprikkels geven." 
    },
	{ 
        n: "901", name: "Bijenwas", risk: "Groen", 
        desc: "Natuurlijk glansmiddel van bijen.", 
        longDesc: "Een natuurlijke stof die volkomen veilig is. Het wordt niet opgenomen door de darmen en verlaat het lichaam onveranderd. Geen enkel risico voor de vaten." 
    },
    { 
        n: "904", name: "Shellak", risk: "Groen", 
        desc: "Natuurlijk glansmiddel (uitscheiding van lakinsecten).", 
        longDesc: "Wordt gebruikt om een glanzend laagje te leggen op appels, citroenen en snoepgoed. Het is een natuurlijke hars die veilig is bevonden door Touvier." 
    },
    { 
        n: "950", name: "Acesulfaam-K", risk: "DonkerRood", 
        desc: "Synthetische zoetstof.", 
        warn: "⚠ DUBBEL RISICO: Carcinogeen risico.", 
        longDesc: "Touvier vond in de NutriNet-Santé studie een direct verhoogd kankerrisico bij hoge inname van deze stof." 
    },
    { 
        n: "951", name: "Aspartaam", risk: "DonkerRood", 
        desc: "Link kanker/diabetes.", 
        longDesc: "Door IARC geclassificeerd als 'mogelijk kankerverwekkend'." 
    },
    { 
        n: "952", name: "Cyclamaat", risk: "Rood", 
        desc: "Verstoort darmflora.", 
        warn: "DARM: Mijden bij gevoeligheid.", 
        longDesc: "In sommige landen verboden wegens mogelijke toxiciteit." 
    },
	{ 
        n: "953", name: "Isomalt", risk: "Geel", 
        desc: "Suikeralcohol (polyool) gebruikt als zoetstof.", 
        warn: "DARM: Kan gasvorming en krampen geven.", 
        longDesc: "Isomalt wordt niet volledig verteerd in de dunne darm en komt daardoor in de dikke darm terecht waar het fermenteert. Dit proces kan bij gevoelige darmen leiden tot een opgeblazen gevoel, winderigheid en een laxerend effect. Touvier classificeert dit als een industriële zoetstof die de balans van de darmflora kan beïnvloeden." 
    },
    { 
        n: "954", name: "Sacharine", risk: "Rood", 
        desc: "Slecht voor glucose-balans.", 
        longDesc: "Verandert de samenstelling van de darmbacteriën." 
    },
    { 
        n: "955", name: "Sucralose", risk: "DonkerRood", 
        desc: "Zoetstof (Splenda).", 
        warn: "⚠ DUBBEL RISICO: Vaatschade & Darmflora-moord.", 
        longDesc: "Beschadigt de bloedvaten direct (gevaarlijk na TIA) en roeit de goede bacteriën in je darm uit die je juist beschermen tegen poliepen." 
    },
    { 
        n: "960", name: "Stevia", risk: "Geel", 
        desc: "Natuurlijk/bewerkt.", 
        longDesc: "Vaak sterk chemisch bewerkt voor consumptie." 
    },
    { 
        n: "965", name: "Maltitol", risk: "Geel", 
        desc: "Sterke gasvorming.", 
        warn: "DARM: Trigger voor krampen.", 
        longDesc: "Laxerende werking bij bescheiden inname." 
    },
    { 
        n: "968", name: "Erythritol", risk: "Oranje", 
        desc: "Natuurlijke zoetstof (vaak in light).", 
        warn: "⚠ DUBBEL RISICO: Trombose-gevaar!", 
        longDesc: "Recent onderzoek (2023) koppelt hoge waarden in het bloed aan een verhoogde kans op bloedstolsels. Zeer riskant na een TIA geschiedenis." 
    },
	{ 
        n: "1100", name: "Amylase", risk: "Groen", 
        desc: "Natuurlijk enzym dat zetmeel afbreekt.", 
        longDesc: "Wordt veel gebruikt in de bakkerij-industrie om brood luchtiger te maken en langer zacht te houden. Het is een eiwit dat tijdens het bakken onschadelijk wordt gemaakt. Volkomen veilig voor darmen en vaten." 
    },
    { 
        n: "1103", name: "Invertase", risk: "Groen", 
        desc: "Enzym dat suiker splitst.", 
        longDesc: "Vaak te vinden in de vulling van bonbons en chocolade om de binnenkant zacht te houden. Wordt door Touvier als veilig beschouwd; het is een natuurlijke hulpstof." 
    },
    { 
        n: "1200", name: "Polydextrose", risk: "Oranje", 
        desc: "Marker voor ultra-bewerkt.", 
        longDesc: "Industriële vulstof voor volume in vetvrije producten." 
    },
	{ 
        n: "1404", name: "Geoxideerd zetmeel", risk: "Geel", 
        desc: "Chemisch behandeld zetmeel; verdikker.", 
        longDesc: "Een marker voor Ultra-Processed Food (UPF). Hoewel niet direct giftig, wijst de aanwezigheid op een zwaar industrieel bewerkingsproces. Kan bij grote hoeveelheden de darmflora tijdelijk uit balans brengen." 
    },
    { 
        n: "1414", name: "Geacetyleerd distijfselfosfaat", risk: "Rood", 
        desc: "Zetmeel bewerkt met fosfaten.", 
        warn: "VATEN: Extra fosfaatbelasting (FH/TIA risico).", 
        longDesc: "Hasenböhler waarschuwt specifiek voor deze verbinding. Omdat het fosfaatgebonden is, draagt het bij aan de totale fosfaat-inname die aderverkalking versnelt en de vaten stijver maakt." 
    },
    { 
        n: "1422", name: "Gemodif. Zetmeel", risk: "Geel", 
        desc: "Chemische vuller.", 
        longDesc: "Lege calorieën die de darmpassage kunnen vertragen." 
    },
    { 
        n: "1442", name: "Hydroxypropyldistijfselfosfaat", risk: "Rood", 
        desc: "Zetmeel met fosfaat.", 
        warn: "VATEN: Fosfaatbelasting (FH).", 
        longDesc: "Draagt bij aan stijvere vaten door de fosforverbinding." 
    },
	{ 
        n: "1450", name: "Zetmeelnatriumoctenylsuccinaat", risk: "Oranje", 
        desc: "Emulgator en stabilisator.", 
        warn: "DARM: Kan de darmwand irriteren.", 
        longDesc: "Een complexe industriële stof die wordt gebruikt om oliën en aroma's te mengen in vloeistoffen. Touvier merkt op dat dergelijke gemodificeerde stoffen de natuurlijke barrière van de darmwand kunnen belasten." 
    },
	{ 
        n: "1505", name: "Triethylcitraat", risk: "Groen", 
        desc: "Schuimmiddel en stabilisator.", 
        longDesc: "Wordt vaak gebruikt in gedroogd eiwit of aroma's. Het is een veilig alternatief voor zwaardere chemische oplosmiddelen en vormt geen risico voor de gezondheid." 
    },
    { 
        n: "1518", name: "Glyceryltriacetaat (Triacetine)", risk: "Oranje", 
        desc: "Oplosmiddel voor aroma's en bevochtiger.", 
        longDesc: "Een typisch industrieel hulpmiddel. Hoewel het officieel veilig is, classificeert de benchmark van Touvier dit als een stof die niet thuishoort in een 'schoon' en onbewerkt dieet." 
    }, 
    { 
        n: "1520", name: "Propyleenglycol", risk: "Rood", 
        desc: "Synthetisch bevochtiger.", 
        longDesc: "Chemisch oplosmiddel voor aroma's; hoort niet in 'schoon' dieet." 
    }, 
];