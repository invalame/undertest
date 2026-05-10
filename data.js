const WORKER_URL = "https://underless-audio.heladoposting.workers.dev/";
const COVERS_BASE_URL = "./covers/";

const biblioteca = [
    {
        "nombre": "143LETI - En mis sueños soy tu novia",
        "archivo": "n1.mp3"
    },
    {
        "nombre": "143LETI - EU TE AMO",
        "archivo": "n2.mp3"
    },
    {
        "nombre": "143LETI, VALUTO  - COSAS QUE ESTAN MAL",
        "archivo": "n3.mp3"
    },
    {
        "nombre": "2UU!, Asan - CELOSA",
        "archivo": "n4.mp3"
    },
    {
        "nombre": "2UU!, enzocerobulto, Jugo!, Soowney - ESO QUERE TULI",
        "archivo": "n5.mp3"
    },
    {
        "nombre": "2UU!, turrobaby - LA GATA GOZA",
        "archivo": "n6.mp3"
    },
    {
        "nombre": "AFKgoat - 1VUELTAINTERMINABLE",
        "archivo": "n7.mp3"
    },
    {
        "nombre": "AFKgoat - ASI NO",
        "archivo": "n8.mp3"
    },
    {
        "nombre": "AFKgoat - OSLAVA",
        "archivo": "n9.mp3"
    },
    {
        "nombre": "AFKgoat - Te caigo mas tarde",
        "archivo": "n10.mp3"
    },
    {
        "nombre": "AFKgoat, cero  - ME QUEMAN LOS DEDOS",
        "archivo": "n11.mp3"
    },
    {
        "nombre": "AFKgoat- DEFRENTEMAL",
        "archivo": "n12.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - FLEKO",
        "archivo": "n13.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - PASO",
        "archivo": "n14.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - SWAGGEANDO EN EL BANDO",
        "archivo": "n15.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - 24 7",
        "archivo": "n16.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, STIFFY - CUANDO QUIERO",
        "archivo": "n17.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, STIFFY - DISTINTO",
        "archivo": "n18.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, STIFFY - GOFUE",
        "archivo": "n19.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - GUISO",
        "archivo": "n20.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - MUSICA DE ASCENSOR",
        "archivo": "n21.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - PIE EN LA PISTA",
        "archivo": "n22.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, NEO PISTEA - MEJORALITO",
        "archivo": "n23.mp3"
    },
    {
        "nombre": "bic - letal",
        "archivo": "n24.mp3"
    },
    {
        "nombre": "bic - mis maneras",
        "archivo": "n25.mp3"
    },
    {
        "nombre": "bic - phone off",
        "archivo": "n26.mp3"
    },
    {
        "nombre": "Blagh  - GET IT UP",
        "archivo": "n27.mp3"
    },
    {
        "nombre": "Blagh  - High",
        "archivo": "n28.mp3"
    },
    {
        "nombre": "Blagh  - No Loyalty",
        "archivo": "n29.mp3"
    },
    {
        "nombre": "Blagh - 2013",
        "archivo": "n30.mp3"
    },
    {
        "nombre": "Blagh - Toxico",
        "archivo": "n31.mp3"
    },
    {
        "nombre": "Blagh, Agush  - TIBURON",
        "archivo": "n32.mp3"
    },
    {
        "nombre": "Blagh, Agush - sex",
        "archivo": "n33.mp3"
    },
    {
        "nombre": "cero - 1234",
        "archivo": "n34.mp3"
    },
    {
        "nombre": "cero - como roe",
        "archivo": "n35.mp3"
    },
    {
        "nombre": "cero - Con frio y calor",
        "archivo": "n36.mp3"
    },
    {
        "nombre": "cero - De moda",
        "archivo": "n37.mp3"
    },
    {
        "nombre": "Cero - Mr wow",
        "archivo": "n38.mp3"
    },
    {
        "nombre": "Cero - Sonajero",
        "archivo": "n39.mp3"
    },
    {
        "nombre": "cero - t2o",
        "archivo": "n40.mp3"
    },
    {
        "nombre": "cero - xq soy el villano",
        "archivo": "n41.mp3"
    },
    {
        "nombre": "cero, enzocerobulto - De concierto en concierto",
        "archivo": "n42.mp3"
    },
    {
        "nombre": "cero, knak - TOA",
        "archivo": "n43.mp3"
    },
    {
        "nombre": "cero, TURROBABY - Slat",
        "archivo": "n44.mp3"
    },
    {
        "nombre": "Chiki Wanted - que es el under",
        "archivo": "n45.mp3"
    },
    {
        "nombre": "CHOOSEY , STIFFY - BeastieBoyZZZ",
        "archivo": "n46.mp3"
    },
    {
        "nombre": "CHOOSEY - 1-2 groupie",
        "archivo": "n47.mp3"
    },
    {
        "nombre": "CHOOSEY - 100 LUCHA",
        "archivo": "n48.mp3"
    },
    {
        "nombre": "CHOOSEY - 2 SAMPLEOS",
        "archivo": "n49.mp3"
    },
    {
        "nombre": "CHOOSEY - ADOPTA POSES",
        "archivo": "n50.mp3"
    },
    {
        "nombre": "CHOOSEY - ROMPEDISKOTECA",
        "archivo": "n51.mp3"
    },
    {
        "nombre": "CHOOSEY - SI NO ME CONOCES",
        "archivo": "n52.mp3"
    },
    {
        "nombre": "Cluster - Muy imbecil",
        "archivo": "n53.mp3"
    },
    {
        "nombre": "Cluster, Doly Flackko - OREO",
        "archivo": "n54.mp3"
    },
    {
        "nombre": "Cluster, Duki - aGaRRo La PLaTa",
        "archivo": "n55.mp3"
    },
    {
        "nombre": "Cluster, Frozouda - TOP 1 CHARTS",
        "archivo": "n56.mp3"
    },
    {
        "nombre": "Cluster, Pabloxo - OTRA SEDA",
        "archivo": "n57.mp3"
    },
    {
        "nombre": "cybernene, TURROBABY - LEANCOLN REMIX",
        "archivo": "n58.mp3"
    },
    {
        "nombre": "Doly Flackko - LEGENDARIO",
        "archivo": "n59.mp3"
    },
    {
        "nombre": "Doly Flackko - PIOLA VAGO",
        "archivo": "n60.mp3"
    },
    {
        "nombre": "Doly Flackko - TRES TRISTES TIGUERES",
        "archivo": "n61.mp3"
    },
    {
        "nombre": "Doly Flackko - Uber",
        "archivo": "n62.mp3"
    },
    {
        "nombre": "EL DOCTOR - STARBOY",
        "archivo": "n63.mp3"
    },
    {
        "nombre": "elchombapolo - CHIQUI TAPIA",
        "archivo": "n64.mp3"
    },
    {
        "nombre": "elchombapolo - el under me chupa la pija",
        "archivo": "n65.mp3"
    },
    {
        "nombre": "elchombapolo - Estoy En Tu Cesped",
        "archivo": "n66.mp3"
    },
    {
        "nombre": "elchombapolo - UN OSO WACHO",
        "archivo": "n67.mp3"
    },
    {
        "nombre": "enzocerobulto - Falsa tu cara de Cristo",
        "archivo": "n68.mp3"
    },
    {
        "nombre": "enzocerobulto - Hasta que termine el dia",
        "archivo": "n69.mp3"
    },
    {
        "nombre": "enzocerobulto - Ocupado en mi droga",
        "archivo": "n70.mp3"
    },
    {
        "nombre": "enzocerobulto - Un banger tras otro",
        "archivo": "n71.mp3"
    },
    {
        "nombre": "enzocerobulto - una tira",
        "archivo": "n72.mp3"
    },
    {
        "nombre": "enzocerobulto, 2UU! - Tanta plata",
        "archivo": "n73.mp3"
    },
    {
        "nombre": "enzocerobulto, panchitolefleur - Por un cuarto",
        "archivo": "n74.mp3"
    },
    {
        "nombre": "Francis Jeremy, Banatroll - Skibidi Toilet",
        "archivo": "n75.mp3"
    },
    {
        "nombre": "Frozouda , Cero , Cluster - plinko",
        "archivo": "n76.mp3"
    },
    {
        "nombre": "Frozouda - doble F con visa",
        "archivo": "n77.mp3"
    },
    {
        "nombre": "Frozouda - fumamos una ZAZA",
        "archivo": "n78.mp3"
    },
    {
        "nombre": "Frozouda - GAS O PORRO",
        "archivo": "n79.mp3"
    },
    {
        "nombre": "Frozouda - hot money",
        "archivo": "n80.mp3"
    },
    {
        "nombre": "Frozouda - mi RACE",
        "archivo": "n81.mp3"
    },
    {
        "nombre": "Frozouda - nicki nicole",
        "archivo": "n82.mp3"
    },
    {
        "nombre": "Frozouda - quitate las BAPE",
        "archivo": "n83.mp3"
    },
    {
        "nombre": "Frozouda - quitate los Jeans",
        "archivo": "n84.mp3"
    },
    {
        "nombre": "Frozouda - tatiana !",
        "archivo": "n85.mp3"
    },
    {
        "nombre": "Frozouda - TOP !",
        "archivo": "n86.mp3"
    },
    {
        "nombre": "Frozouda - un goat siempre esta busy",
        "archivo": "n87.mp3"
    },
    {
        "nombre": "Frozouda, Cluster - hot box",
        "archivo": "n88.mp3"
    },
    {
        "nombre": "Frozouda, Jugo!, KNAK - chirlito",
        "archivo": "n89.mp3"
    },
    {
        "nombre": "Hepa - Batman",
        "archivo": "n90.mp3"
    },
    {
        "nombre": "Hepa - Cuando estas high",
        "archivo": "n91.mp3"
    },
    {
        "nombre": "Hepa - Lovestar",
        "archivo": "n92.mp3"
    },
    {
        "nombre": "Hepa - Sintonizame",
        "archivo": "n93.mp3"
    },
    {
        "nombre": "Hepa - Varios Puntos",
        "archivo": "n94.mp3"
    },
    {
        "nombre": "huntr - baby boo",
        "archivo": "n95.mp3"
    },
    {
        "nombre": "huntr - esta va porque te quiero",
        "archivo": "n96.mp3"
    },
    {
        "nombre": "huntr - partydanc3",
        "archivo": "n97.mp3"
    },
    {
        "nombre": "ISMA - 2037",
        "archivo": "n98.mp3"
    },
    {
        "nombre": "ISMA - Antes del Amanecer",
        "archivo": "n99.mp3"
    },
    {
        "nombre": "ISMA - Cuanto va a pasar",
        "archivo": "n100.mp3"
    },
    {
        "nombre": "ISMA, LOLO  - CUAL ES TU PLAN",
        "archivo": "n101.mp3"
    },
    {
        "nombre": "jovenalien - ME PASO LA SEMANA",
        "archivo": "n102.mp3"
    },
    {
        "nombre": "jovenalien - No vale la pena enojarse",
        "archivo": "n103.mp3"
    },
    {
        "nombre": "jovenalien - tengo hambre",
        "archivo": "n104.mp3"
    },
    {
        "nombre": "Jugo! , Cluster - Nos retiene el estado",
        "archivo": "n105.mp3"
    },
    {
        "nombre": "Jugo! , enzocerobulto - Musicalmente",
        "archivo": "n106.mp3"
    },
    {
        "nombre": "Jugo! , YSY A - Todo el dia en el trap",
        "archivo": "n107.mp3"
    },
    {
        "nombre": "Jugo!, salas flaco - Desfile",
        "archivo": "n108.mp3"
    },
    {
        "nombre": "KERCHAK, Cluster - No Me Pienso Demorar",
        "archivo": "n109.mp3"
    },
    {
        "nombre": "KERCHAK - Viviendo Al Corte",
        "archivo": "n110.mp3"
    },
    {
        "nombre": "KERCHAK, Cluster - Una Noche Con Los Tios 2",
        "archivo": "n111.mp3"
    },
    {
        "nombre": "KERCHAK, enzocerobulto - Chamuyo Habilidoso",
        "archivo": "n112.mp3"
    },
    {
        "nombre": "KERCHAK, PANCHITOLEFLEUR - ANOTHER NIGHT WITH THE UNCLE",
        "archivo": "n113.mp3"
    },
    {
        "nombre": "KERCHAK, PANCHITOLEFLEUR - Tamo a Full",
        "archivo": "n114.mp3"
    },
    {
        "nombre": "KERCHAK, TURROBABY, Cluster, Tuw4 - Un picadito",
        "archivo": "n115.mp3"
    },
    {
        "nombre": "laura sad - chupavrga",
        "archivo": "n116.mp3"
    },
    {
        "nombre": "laura sad - i Laurie",
        "archivo": "n117.mp3"
    },
    {
        "nombre": "laura sad, LOLO - Joseador Boy",
        "archivo": "n118.mp3"
    },
    {
        "nombre": "laura sad, MAGNESIO - Perdon Mama",
        "archivo": "n119.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - CLICK CLACK",
        "archivo": "n120.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - COMPA LO HICIMOS",
        "archivo": "n121.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - DANDO CLASE",
        "archivo": "n122.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - DEJA DE SUFRIR",
        "archivo": "n123.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - LITTLE BOOGIE VS EL GOBIERNO",
        "archivo": "n124.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - LOS DEL BOHIO",
        "archivo": "n125.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - OKUPAS",
        "archivo": "n126.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - TODO BIEN TODO CHETO",
        "archivo": "n127.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, DOLY FLACKKO - EL MUNDO ES MIO",
        "archivo": "n128.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR - BILLIE JEAN",
        "archivo": "n129.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR, RUSHERKING - SOY FAMOSO Y TENGO PLATA",
        "archivo": "n130.mp3"
    },
    {
        "nombre": "LOLO , BANATROLL - HAZ MAS DINERO",
        "archivo": "n131.mp3"
    },
    {
        "nombre": "LOLO , BANATROLL - TOY GANADO",
        "archivo": "n132.mp3"
    },
    {
        "nombre": "LOLO , CHOOSEY - QUE PUEDE PASAR",
        "archivo": "n133.mp3"
    },
    {
        "nombre": "LOLO - A TU MODO",
        "archivo": "n134.mp3"
    },
    {
        "nombre": "LOLO - EMILIA MERNES",
        "archivo": "n135.mp3"
    },
    {
        "nombre": "LOLO - FERNET HIELO",
        "archivo": "n136.mp3"
    },
    {
        "nombre": "LOLO - GASTEMOS MAS",
        "archivo": "n137.mp3"
    },
    {
        "nombre": "LOLO - HATER",
        "archivo": "n138.mp3"
    },
    {
        "nombre": "LOLO - HOY SI QUEMO",
        "archivo": "n139.mp3"
    },
    {
        "nombre": "LOLO - MINI LOLO",
        "archivo": "n140.mp3"
    },
    {
        "nombre": "LOLO - OSCUROoOo",
        "archivo": "n141.mp3"
    },
    {
        "nombre": "LOLO - QUIEN FUE",
        "archivo": "n142.mp3"
    },
    {
        "nombre": "LOLO - YO RAPERO ELLA DELANTERA",
        "archivo": "n143.mp3"
    },
    {
        "nombre": "LOLO, 143LETI - LUNES A VIERNES",
        "archivo": "n144.mp3"
    },
    {
        "nombre": "MAGNESIO - MAS LENTO",
        "archivo": "n145.mp3"
    },
    {
        "nombre": "MAGNESIO - OLLA POPULAR",
        "archivo": "n146.mp3"
    },
    {
        "nombre": "MAGNESIO - WING WANG WOW",
        "archivo": "n147.mp3"
    },
    {
        "nombre": "MAGNESIO - ZLATAN",
        "archivo": "n148.mp3"
    },
    {
        "nombre": "MAGNESIO, White! - GOKU",
        "archivo": "n149.mp3"
    },
    {
        "nombre": "Matias Fisher - Muerte en Halloween",
        "archivo": "n150.mp3"
    },
    {
        "nombre": "Nykoo0 - Anorexico",
        "archivo": "n151.mp3"
    },
    {
        "nombre": "Nykoo0 - Que sabes de amor",
        "archivo": "n152.mp3"
    },
    {
        "nombre": "pa2k, cero - Rn",
        "archivo": "n153.mp3"
    },
    {
        "nombre": "pa2k, cero - yEye",
        "archivo": "n154.mp3"
    },
    {
        "nombre": "pa2k, enzocerobulto - BOYFRIEND",
        "archivo": "n155.mp3"
    },
    {
        "nombre": "pa2k, enzocerobulto - RIGHT NOW",
        "archivo": "n156.mp3"
    },
    {
        "nombre": "pabloxo - dosydos",
        "archivo": "n157.mp3"
    },
    {
        "nombre": "pabloxo - lo hago x mi",
        "archivo": "n158.mp3"
    },
    {
        "nombre": "pabloxo - no son dos f son clones",
        "archivo": "n159.mp3"
    },
    {
        "nombre": "PANKKY - FREEHOMMIES",
        "archivo": "n160.mp3"
    },
    {
        "nombre": "PANKKY - GLOPETA",
        "archivo": "n161.mp3"
    },
    {
        "nombre": "PANKKY - TELL ME",
        "archivo": "n162.mp3"
    },
    {
        "nombre": "papirola - sos mi papirola",
        "archivo": "n163.mp3"
    },
    {
        "nombre": "salas flaco - PANICO ESCENICO",
        "archivo": "n164.mp3"
    },
    {
        "nombre": "salas flaco - Por Argentina",
        "archivo": "n165.mp3"
    },
    {
        "nombre": "salas flaco - TAN MALA",
        "archivo": "n166.mp3"
    },
    {
        "nombre": "salas flaco, Bhavi, Asan - EL DINERO DE INTERNET",
        "archivo": "n167.mp3"
    },
    {
        "nombre": "Shako , Jugo! - Medio Tana",
        "archivo": "n168.mp3"
    },
    {
        "nombre": "Shako - 4eva",
        "archivo": "n169.mp3"
    },
    {
        "nombre": "Shako - Amigdalas",
        "archivo": "n170.mp3"
    },
    {
        "nombre": "Shako - Hotel",
        "archivo": "n171.mp3"
    },
    {
        "nombre": "Shako - RACKLESS",
        "archivo": "n172.mp3"
    },
    {
        "nombre": "Shako - vas a ver el alma mula",
        "archivo": "n173.mp3"
    },
    {
        "nombre": "Shako, Bhavi, Seven Kayne - K.O",
        "archivo": "n174.mp3"
    },
    {
        "nombre": "SixUp - Anti",
        "archivo": "n175.mp3"
    },
    {
        "nombre": "SixUp - DobleVaso",
        "archivo": "n176.mp3"
    },
    {
        "nombre": "SixUp - TikiTime",
        "archivo": "n177.mp3"
    },
    {
        "nombre": "SixUp - TripleVaso",
        "archivo": "n178.mp3"
    },
    {
        "nombre": "Stiffy - FARANDULERO",
        "archivo": "n179.mp3"
    },
    {
        "nombre": "Stiffy - GUAP",
        "archivo": "n180.mp3"
    },
    {
        "nombre": "Stiffy - GUASO BALLS Z",
        "archivo": "n181.mp3"
    },
    {
        "nombre": "Stiffy - MECHINSTRONGAS",
        "archivo": "n182.mp3"
    },
    {
        "nombre": "Stiffy - NO ES LO QUE PENSAS",
        "archivo": "n183.mp3"
    },
    {
        "nombre": "Stiffy - NO LA CUELGO",
        "archivo": "n184.mp3"
    },
    {
        "nombre": "Stiffy - SANDRO",
        "archivo": "n185.mp3"
    },
    {
        "nombre": "Stiffy - SWAG DE SOSA",
        "archivo": "n186.mp3"
    },
    {
        "nombre": "Stiffy, Agusfortnite2008 - AFIP",
        "archivo": "n187.mp3"
    },
    {
        "nombre": "Stiffy, AGUSFORTNITE2008 - QUIERE PENE",
        "archivo": "n188.mp3"
    },
    {
        "nombre": "Stiffy, Jon Z - COMO ANTES",
        "archivo": "n189.mp3"
    },
    {
        "nombre": "Stiffy, Rojuu - AMNESIA",
        "archivo": "n190.mp3"
    },
    {
        "nombre": "STIFFY, TURROBABY, ZELL, AGUSFORTNITE2008 - BABASONICO",
        "archivo": "n191.mp3"
    },
    {
        "nombre": "TURROBABY - 2017",
        "archivo": "n192.mp3"
    },
    {
        "nombre": "TURROBABY - Aca y Alla y En Todos Lados",
        "archivo": "n193.mp3"
    },
    {
        "nombre": "TURROBABY - Bajo El Sol",
        "archivo": "n194.mp3"
    },
    {
        "nombre": "TURROBABY - COLOMBIANA HOODTRAP",
        "archivo": "n195.mp3"
    },
    {
        "nombre": "TURROBABY - Cornudo Consciente",
        "archivo": "n196.mp3"
    },
    {
        "nombre": "TURROBABY - Filmemos Una Peli",
        "archivo": "n197.mp3"
    },
    {
        "nombre": "TURROBABY - Sergio Massa",
        "archivo": "n198.mp3"
    },
    {
        "nombre": "TURROBABY - SIMO VIANI",
        "archivo": "n199.mp3"
    },
    {
        "nombre": "TURROBABY - Wacha Flequilluda",
        "archivo": "n200.mp3"
    },
    {
        "nombre": "TURROBABY - YPF",
        "archivo": "n201.mp3"
    },
    {
        "nombre": "TURROBABY, Bhavi - Parabrisas",
        "archivo": "n202.mp3"
    },
    {
        "nombre": "TURROBABY, Doble P - ANTO ROCUZZO",
        "archivo": "n203.mp3"
    },
    {
        "nombre": "TURROBABY, enzocerobulto - Las Seis",
        "archivo": "n204.mp3"
    },
    {
        "nombre": "TURROBABY, Lolo OG - Lovebombing",
        "archivo": "n205.mp3"
    },
    {
        "nombre": "TURROBABY, Stiffy - PENDEJO ATREVIDO",
        "archivo": "n206.mp3"
    },
    {
        "nombre": "TURROBABY, ZELL - Inter De Miami",
        "archivo": "n207.mp3"
    },
    {
        "nombre": "TURROBABY, ZELL, Stiffy - Cara De Boludo",
        "archivo": "n208.mp3"
    },
    {
        "nombre": "vahel - .",
        "archivo": "n209.mp3"
    },
    {
        "nombre": "vahel - PLAN B",
        "archivo": "n210.mp3"
    },
    {
        "nombre": "vahel - tunel",
        "archivo": "n211.mp3"
    },
    {
        "nombre": "vahel, pachudani - loquita",
        "archivo": "n212.mp3"
    },
    {
        "nombre": "White! - FR",
        "archivo": "n213.mp3"
    },
    {
        "nombre": "White! - No lo intentes en tu home",
        "archivo": "n214.mp3"
    },
    {
        "nombre": "White! - X - RAY",
        "archivo": "n215.mp3"
    },
    {
        "nombre": "White!, magnesio - Shen Long",
        "archivo": "n216.mp3"
    },
    {
        "nombre": "Zell - ballin de verdad",
        "archivo": "n217.mp3"
    },
    {
        "nombre": "Zell - Ballin",
        "archivo": "n218.mp3"
    },
    {
        "nombre": "Zell - calvin klein",
        "archivo": "n219.mp3"
    },
    {
        "nombre": "Zell - diva",
        "archivo": "n220.mp3"
    },
    {
        "nombre": "Zell - iceberg",
        "archivo": "n221.mp3"
    },
    {
        "nombre": "Zell - iPhone",
        "archivo": "n222.mp3"
    },
    {
        "nombre": "Zell - Joven Ballin",
        "archivo": "n223.mp3"
    },
    {
        "nombre": "Zell - piso 3",
        "archivo": "n224.mp3"
    },
    {
        "nombre": "Zell - Ritual",
        "archivo": "n225.mp3"
    },
    {
        "nombre": "Zell - Starboy",
        "archivo": "n226.mp3"
    },
    {
        "nombre": "Zell - stripper",
        "archivo": "n227.mp3"
    },
    {
        "nombre": "Zell - Uber",
        "archivo": "n228.mp3"
    },
    {
        "nombre": "Zell - vamonos",
        "archivo": "n229.mp3"
    },
    {
        "nombre": "Zell - webcam",
        "archivo": "n230.mp3"
    },
    {
        "nombre": "Zell - Whats Up",
        "archivo": "n231.mp3"
    },
    {
        "nombre": "Zell, KNAK - ZiploK",
        "archivo": "n232.mp3"
    },
    {
        "nombre": "Zell, Tiago PZK - xq te enamoraste",
        "archivo": "n233.mp3"
    },
    {
        "nombre": "LOLO - OG KUSH",
        "archivo": "n234.mp3"
    },
    {
        "nombre": "MAGNESIO - COKER",
        "archivo": "n235.mp3"
    },
    {
        "nombre": "PILF - TANTA GIRA",
        "archivo": "n236.mp3"
    },
    {
        "nombre": "PILF - HIT",
        "archivo": "n237.mp3"
    },
    {
        "nombre": "PILF - FUMO UNO FUMO DOS",
        "archivo": "n238.mp3"
    },
    {
        "nombre": "PILF - ENTRO A LA CANCHA",
        "archivo": "n239.mp3"
    },
    {
        "nombre": "Zell, KNAK - Me Da Igual",
        "archivo": "n240.mp3"
    },
    {
        "nombre": "TURROBABY - Toda La Plata",
        "archivo": "n241.mp3"
    },
    {
        "nombre": "Red Shine, MAGNESIO - ELDEN RING",
        "archivo": "n242.mp3"
    },
    {
        "nombre": "TURROBABY, LITTLE BOOGIE - Emotes",
        "archivo": "n243.mp3"
    },
    {
        "nombre": "slimesanti - Friendzone",
        "archivo": "n244.mp3"
    }
];

const bibliotecaArtist = [
    {
        "nombre": "143LETI - En mis sueños soy tu novia",
        "archivo": "art244.mp3"
    },
    {
        "nombre": "143LETI - EU TE AMO",
        "archivo": "art245.mp3"
    },
    {
        "nombre": "143LETI, VALUTO  - COSAS QUE ESTAN MAL",
        "archivo": "art246.mp3"
    },
    {
        "nombre": "2UU! - PEPSI",
        "archivo": "art247.mp3"
    },
    {
        "nombre": "2UU! - vuelve a mi",
        "archivo": "art248.mp3"
    },
    {
        "nombre": "2UU! - WORLDWIDE",
        "archivo": "art249.mp3"
    },
    {
        "nombre": "2UU!, Asan - CELOSA",
        "archivo": "art250.mp3"
    },
    {
        "nombre": "2UU!, ELUNEYBENEDETTI - TARADA",
        "archivo": "art251.mp3"
    },
    {
        "nombre": "2UU!, enzocerobulto - PALMERA",
        "archivo": "art252.mp3"
    },
    {
        "nombre": "2UU!, enzocerobulto, Jugo!, Soowney - ESO QUERE TULI",
        "archivo": "art253.mp3"
    },
    {
        "nombre": "2UU!, enzocerobulto, SKIIDY, TULO13 - Promesas sobre el bidet",
        "archivo": "art254.mp3"
    },
    {
        "nombre": "2UU!, LTHELIZARD - FERRAGAMO",
        "archivo": "art255.mp3"
    },
    {
        "nombre": "2UU!, TULO13 - 2 DIAS",
        "archivo": "art256.mp3"
    },
    {
        "nombre": "2UU!, TULO13 - GREENDAY",
        "archivo": "art257.mp3"
    },
    {
        "nombre": "2UU!, turrobaby - LA GATA GOZA",
        "archivo": "art258.mp3"
    },
    {
        "nombre": "AFKgoat - 1VUELTAINTERMINABLE",
        "archivo": "art259.mp3"
    },
    {
        "nombre": "AFKgoat - ASI DE DESCONFIADO",
        "archivo": "art260.mp3"
    },
    {
        "nombre": "AFKgoat - ASI NO",
        "archivo": "art261.mp3"
    },
    {
        "nombre": "AFKgoat - BANCAR EL PARCHE",
        "archivo": "art262.mp3"
    },
    {
        "nombre": "AFKgoat - HACERME TRAICIONAR",
        "archivo": "art263.mp3"
    },
    {
        "nombre": "AFKgoat - OSLAVA",
        "archivo": "art264.mp3"
    },
    {
        "nombre": "AFKgoat - PERNOCTANDO EN EL BALCON",
        "archivo": "art265.mp3"
    },
    {
        "nombre": "AFKgoat - Te caigo mas tarde",
        "archivo": "art266.mp3"
    },
    {
        "nombre": "AFKgoat, cero  - ME QUEMAN LOS DEDOS",
        "archivo": "art267.mp3"
    },
    {
        "nombre": "AFKgoat- DEFRENTEMAL",
        "archivo": "art268.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - ELLA ME LLAMA",
        "archivo": "art269.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - FLEKO",
        "archivo": "art270.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - HOTEL EN HOTEL",
        "archivo": "art271.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - LOS HAGO CONCHA",
        "archivo": "art272.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - PASO",
        "archivo": "art273.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - SWAGGEANDO EN EL BANDO",
        "archivo": "art274.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - VUELVO A FUMAR",
        "archivo": "art275.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - 24 7",
        "archivo": "art276.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - 8 JEANS",
        "archivo": "art277.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - CUANDO QUIERO",
        "archivo": "art278.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - DESDE LOS 14",
        "archivo": "art279.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - DISTINTO",
        "archivo": "art280.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - GOFUE",
        "archivo": "art281.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - GUISO",
        "archivo": "art282.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - MEJORES HOES",
        "archivo": "art283.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - MUSICA DE ASCENSOR",
        "archivo": "art284.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - PIE EN LA PISTA",
        "archivo": "art285.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - TRES PATITOS",
        "archivo": "art286.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, DILLOM - EL MOROCHO EL RUBIO Y EL COLO",
        "archivo": "art287.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, Joshu Joshu - Jesus Escucha Plug",
        "archivo": "art288.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, NEO PISTEA - MEJORALITO",
        "archivo": "art289.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - PETER GRIFFIN",
        "archivo": "art290.mp3"
    },
    {
        "nombre": "Banatroll - CAMIONETA",
        "archivo": "art291.mp3"
    },
    {
        "nombre": "Banatroll - GTA 6 RAP",
        "archivo": "art292.mp3"
    },
    {
        "nombre": "Banatroll - MONTAGEM DUBAI (Slowed)",
        "archivo": "art293.mp3"
    },
    {
        "nombre": "Banatroll - OUTLAST RAP",
        "archivo": "art294.mp3"
    },
    {
        "nombre": "Banatroll - RAP DE PEDIR LOS PUNTOS",
        "archivo": "art295.mp3"
    },
    {
        "nombre": "Banatroll - Rap del Hornet",
        "archivo": "art296.mp3"
    },
    {
        "nombre": "Banatroll - RIP RESIDENTE",
        "archivo": "art297.mp3"
    },
    {
        "nombre": "Banatroll - SUBWAY",
        "archivo": "art298.mp3"
    },
    {
        "nombre": "Banatroll - TOY DE PARTY",
        "archivo": "art299.mp3"
    },
    {
        "nombre": "Banatroll, Francis Jeremy - SKIBIDI TOILET REMIX",
        "archivo": "art300.mp3"
    },
    {
        "nombre": "Banatroll, LOLO - CALIFORNIA",
        "archivo": "art301.mp3"
    },
    {
        "nombre": "Banatroll, LOLO - KULEANDO NARKOS",
        "archivo": "art302.mp3"
    },
    {
        "nombre": "Banatroll, LOLO- soy un virgen",
        "archivo": "art303.mp3"
    },
    {
        "nombre": "Banatroll, zEkO - GUERRA FUNK (Slowed)",
        "archivo": "art304.mp3"
    },
    {
        "nombre": "bic - letal",
        "archivo": "art305.mp3"
    },
    {
        "nombre": "bic - mis maneras",
        "archivo": "art306.mp3"
    },
    {
        "nombre": "bic - phone off",
        "archivo": "art307.mp3"
    },
    {
        "nombre": "bic, Jugo! - paintball",
        "archivo": "art308.mp3"
    },
    {
        "nombre": "Blagh  - GET IT UP",
        "archivo": "art309.mp3"
    },
    {
        "nombre": "Blagh  - High",
        "archivo": "art310.mp3"
    },
    {
        "nombre": "Blagh  - No Loyalty",
        "archivo": "art311.mp3"
    },
    {
        "nombre": "Blagh  - Purple",
        "archivo": "art312.mp3"
    },
    {
        "nombre": "Blagh - 2013",
        "archivo": "art313.mp3"
    },
    {
        "nombre": "Blagh - Leave Me Alone",
        "archivo": "art314.mp3"
    },
    {
        "nombre": "Blagh - Priceless",
        "archivo": "art315.mp3"
    },
    {
        "nombre": "Blagh - Safe Room",
        "archivo": "art316.mp3"
    },
    {
        "nombre": "Blagh - Toxico",
        "archivo": "art317.mp3"
    },
    {
        "nombre": "Blagh, Agush  - TIBURON",
        "archivo": "art318.mp3"
    },
    {
        "nombre": "Blagh, Agush - sex",
        "archivo": "art319.mp3"
    },
    {
        "nombre": "Blagh, ISMA - Particular",
        "archivo": "art320.mp3"
    },
    {
        "nombre": "Blagh, KKAFU - TE ROBO",
        "archivo": "art321.mp3"
    },
    {
        "nombre": "cero - 1234",
        "archivo": "art322.mp3"
    },
    {
        "nombre": "cero - como roe",
        "archivo": "art323.mp3"
    },
    {
        "nombre": "cero - Con frio y calor",
        "archivo": "art324.mp3"
    },
    {
        "nombre": "cero - De moda",
        "archivo": "art325.mp3"
    },
    {
        "nombre": "cero - DEAM",
        "archivo": "art326.mp3"
    },
    {
        "nombre": "cero - Mr wow",
        "archivo": "art327.mp3"
    },
    {
        "nombre": "cero - Sonajero",
        "archivo": "art328.mp3"
    },
    {
        "nombre": "cero - t2o",
        "archivo": "art329.mp3"
    },
    {
        "nombre": "cero - Vicky",
        "archivo": "art330.mp3"
    },
    {
        "nombre": "cero - xq soy el villano",
        "archivo": "art331.mp3"
    },
    {
        "nombre": "cero, enzocerobulto - De concierto en concierto",
        "archivo": "art332.mp3"
    },
    {
        "nombre": "cero, knak - TOA",
        "archivo": "art333.mp3"
    },
    {
        "nombre": "cero, TURROBABY - Slat",
        "archivo": "art334.mp3"
    },
    {
        "nombre": "Chiki Wanted - que es el under",
        "archivo": "art335.mp3"
    },
    {
        "nombre": "CHOOSEY , Stiffy - BeastieBoyZZZ",
        "archivo": "art336.mp3"
    },
    {
        "nombre": "CHOOSEY - 1-2 groupie",
        "archivo": "art337.mp3"
    },
    {
        "nombre": "CHOOSEY - 100 LUCHA",
        "archivo": "art338.mp3"
    },
    {
        "nombre": "CHOOSEY - 2 SAMPLEOS",
        "archivo": "art339.mp3"
    },
    {
        "nombre": "CHOOSEY - ADOPTA POSES",
        "archivo": "art340.mp3"
    },
    {
        "nombre": "CHOOSEY - CARS BEAT",
        "archivo": "art341.mp3"
    },
    {
        "nombre": "CHOOSEY - mi AUTOMOVIL",
        "archivo": "art342.mp3"
    },
    {
        "nombre": "CHOOSEY - MI NUMERO TELEFONICO",
        "archivo": "art343.mp3"
    },
    {
        "nombre": "CHOOSEY - NDQV",
        "archivo": "art344.mp3"
    },
    {
        "nombre": "CHOOSEY - pero CHATGPT",
        "archivo": "art345.mp3"
    },
    {
        "nombre": "CHOOSEY - Prod Pimpinela",
        "archivo": "art346.mp3"
    },
    {
        "nombre": "CHOOSEY - ROMPEDISKOTECA",
        "archivo": "art347.mp3"
    },
    {
        "nombre": "CHOOSEY - SI NO ME CONOCES",
        "archivo": "art348.mp3"
    },
    {
        "nombre": "CHOOSEY, DLANG - DE MAS DE MI",
        "archivo": "art349.mp3"
    },
    {
        "nombre": "Cluster - Gucci Mane en la traphouse",
        "archivo": "art350.mp3"
    },
    {
        "nombre": "Cluster - JEFFES",
        "archivo": "art351.mp3"
    },
    {
        "nombre": "Cluster - Levanto el tubo",
        "archivo": "art352.mp3"
    },
    {
        "nombre": "Cluster - Muy imbecil",
        "archivo": "art353.mp3"
    },
    {
        "nombre": "Cluster, Aleezok - CARGO",
        "archivo": "art354.mp3"
    },
    {
        "nombre": "Cluster, Doly Flackko - OREO",
        "archivo": "art355.mp3"
    },
    {
        "nombre": "Cluster, Duki - aGaRRo La PLaTa",
        "archivo": "art356.mp3"
    },
    {
        "nombre": "Cluster, enzocerobulto - FFumando",
        "archivo": "art357.mp3"
    },
    {
        "nombre": "Cluster, Francis Jeremy - MUY IMBECIL",
        "archivo": "art358.mp3"
    },
    {
        "nombre": "Cluster, Frozouda - TOP 1 CHARTS",
        "archivo": "art359.mp3"
    },
    {
        "nombre": "Cluster, Pabloxo - OTRA SEDA",
        "archivo": "art360.mp3"
    },
    {
        "nombre": "Cluster- EL COLO",
        "archivo": "art361.mp3"
    },
    {
        "nombre": "cybernene - DIAMANTES",
        "archivo": "art362.mp3"
    },
    {
        "nombre": "cybernene - MTGA",
        "archivo": "art363.mp3"
    },
    {
        "nombre": "cybernene - PRIMERA DAMA (CYBERSEXO)",
        "archivo": "art364.mp3"
    },
    {
        "nombre": "cybernene - WHITE WIDOW HOUSE",
        "archivo": "art365.mp3"
    },
    {
        "nombre": "cybernene, 8belial - LOUD BONUS TRACK",
        "archivo": "art366.mp3"
    },
    {
        "nombre": "cybernene, roomtrash6 - KENNEDY",
        "archivo": "art367.mp3"
    },
    {
        "nombre": "cybernene, roomtrash6 - MEJOR NO",
        "archivo": "art368.mp3"
    },
    {
        "nombre": "cybernene, roomtrash6, yyy891, 8belial - ENVIDIA",
        "archivo": "art369.mp3"
    },
    {
        "nombre": "cybernene, TURROBABY - LEANCOLN REMIX",
        "archivo": "art370.mp3"
    },
    {
        "nombre": "Doly Flackko - LEGENDARIO",
        "archivo": "art371.mp3"
    },
    {
        "nombre": "Doly Flackko - PIOLA VAGO",
        "archivo": "art372.mp3"
    },
    {
        "nombre": "Doly Flackko - TRES TRISTES TIGUERES",
        "archivo": "art373.mp3"
    },
    {
        "nombre": "Doly Flackko - Uber",
        "archivo": "art374.mp3"
    },
    {
        "nombre": "EL DOCTOR - DIDDY",
        "archivo": "art375.mp3"
    },
    {
        "nombre": "EL DOCTOR - LA SEPARACION",
        "archivo": "art376.mp3"
    },
    {
        "nombre": "EL DOCTOR - LOS QUE SON MAS ATREVIDOS",
        "archivo": "art377.mp3"
    },
    {
        "nombre": "EL DOCTOR - RESCATE UNA METRA",
        "archivo": "art378.mp3"
    },
    {
        "nombre": "EL DOCTOR - STARBOY",
        "archivo": "art379.mp3"
    },
    {
        "nombre": "EL DOCTOR, CHILI PARKER - VELORIO",
        "archivo": "art380.mp3"
    },
    {
        "nombre": "EL DOCTOR, FALA FABIO - BARCELONA 90",
        "archivo": "art381.mp3"
    },
    {
        "nombre": "EL DOCTOR, FOYONE - PA QUE NO PASES HAMBRE",
        "archivo": "art382.mp3"
    },
    {
        "nombre": "EL DOCTOR, Homer El Mero Mero - Adelantado",
        "archivo": "art383.mp3"
    },
    {
        "nombre": "EL DOCTOR, TURROBABY - LA TIENE",
        "archivo": "art384.mp3"
    },
    {
        "nombre": "elchombapolo - CHAIN  FREESTYLE",
        "archivo": "art385.mp3"
    },
    {
        "nombre": "elchombapolo - CHIQUI TAPIA",
        "archivo": "art386.mp3"
    },
    {
        "nombre": "elchombapolo - EL PISO ES LABURO",
        "archivo": "art387.mp3"
    },
    {
        "nombre": "elchombapolo - el under me chupa la pija",
        "archivo": "art388.mp3"
    },
    {
        "nombre": "elchombapolo - ESTA PERRA ESTA LOCA",
        "archivo": "art389.mp3"
    },
    {
        "nombre": "elchombapolo - Estoy En Tu Cesped",
        "archivo": "art390.mp3"
    },
    {
        "nombre": "elchombapolo - LA PREGUNTA",
        "archivo": "art391.mp3"
    },
    {
        "nombre": "elchombapolo - SAL AFUERA Y JOSEA",
        "archivo": "art392.mp3"
    },
    {
        "nombre": "elchombapolo - SIX SEVEN",
        "archivo": "art393.mp3"
    },
    {
        "nombre": "elchombapolo - TE LA RIFASTE FERNANDO",
        "archivo": "art394.mp3"
    },
    {
        "nombre": "elchombapolo - UN OSO WACHO",
        "archivo": "art395.mp3"
    },
    {
        "nombre": "enzocerobulto - Ahora y mas tarde",
        "archivo": "art396.mp3"
    },
    {
        "nombre": "enzocerobulto - Cada vez mas",
        "archivo": "art397.mp3"
    },
    {
        "nombre": "enzocerobulto - De capital al Sifon",
        "archivo": "art398.mp3"
    },
    {
        "nombre": "enzocerobulto - Es humo no es vapor",
        "archivo": "art399.mp3"
    },
    {
        "nombre": "enzocerobulto - Esta nota",
        "archivo": "art400.mp3"
    },
    {
        "nombre": "enzocerobulto - Falsa tu cara de Cristo",
        "archivo": "art401.mp3"
    },
    {
        "nombre": "enzocerobulto - Hasta que termine el dia",
        "archivo": "art402.mp3"
    },
    {
        "nombre": "enzocerobulto - Mitad",
        "archivo": "art403.mp3"
    },
    {
        "nombre": "enzocerobulto - Ocupado en mi droga",
        "archivo": "art404.mp3"
    },
    {
        "nombre": "enzocerobulto - perdiendo",
        "archivo": "art405.mp3"
    },
    {
        "nombre": "enzocerobulto - Por las nubes",
        "archivo": "art406.mp3"
    },
    {
        "nombre": "enzocerobulto - Un banger tras otro",
        "archivo": "art407.mp3"
    },
    {
        "nombre": "enzocerobulto - una tira",
        "archivo": "art408.mp3"
    },
    {
        "nombre": "enzocerobulto - Vos y yo!",
        "archivo": "art409.mp3"
    },
    {
        "nombre": "enzocerobulto, 2UU! - Tanta plata",
        "archivo": "art410.mp3"
    },
    {
        "nombre": "enzocerobulto, eluney - ying yang",
        "archivo": "art411.mp3"
    },
    {
        "nombre": "enzocerobulto, panchitolefleur - Por un cuarto",
        "archivo": "art412.mp3"
    },
    {
        "nombre": "Francis Jeremy - BIGGEST PLAYERS",
        "archivo": "art413.mp3"
    },
    {
        "nombre": "Francis Jeremy - CUMPLEAÑOS DEL MEJOR RAPERO EN URUGUAY",
        "archivo": "art414.mp3"
    },
    {
        "nombre": "Francis Jeremy - NEGRA DE MIERDA",
        "archivo": "art415.mp3"
    },
    {
        "nombre": "Francis Jeremy - RIP SURF Y RIP SURFISTAS",
        "archivo": "art416.mp3"
    },
    {
        "nombre": "Francis Jeremy - SAYAGLO",
        "archivo": "art417.mp3"
    },
    {
        "nombre": "Francis Jeremy - YO LE DIJE WEPA UEPA!",
        "archivo": "art418.mp3"
    },
    {
        "nombre": "Francis Jeremy, Banatroll - Skibidi Toilet",
        "archivo": "art419.mp3"
    },
    {
        "nombre": "Francis Jeremy, Doly Flackko  - SAYAGO Y RIO GALLEGOS",
        "archivo": "art420.mp3"
    },
    {
        "nombre": "Francis Jeremy, enzocerobulto - DEUCOTOS",
        "archivo": "art421.mp3"
    },
    {
        "nombre": "Francis Jeremy, Komp - MILAGROSA X SAYAGO",
        "archivo": "art422.mp3"
    },
    {
        "nombre": "Francis Jeremy, underaiki - BLUE DREAM",
        "archivo": "art423.mp3"
    },
    {
        "nombre": "Frozouda , Cero , Cluster - plinko",
        "archivo": "art424.mp3"
    },
    {
        "nombre": "Frozouda - doble F con visa",
        "archivo": "art425.mp3"
    },
    {
        "nombre": "Frozouda - fumamos una ZAZA",
        "archivo": "art426.mp3"
    },
    {
        "nombre": "Frozouda - GAS O PORRO",
        "archivo": "art427.mp3"
    },
    {
        "nombre": "Frozouda - hot money",
        "archivo": "art428.mp3"
    },
    {
        "nombre": "Frozouda - mi RACE",
        "archivo": "art429.mp3"
    },
    {
        "nombre": "Frozouda - nicki nicole",
        "archivo": "art430.mp3"
    },
    {
        "nombre": "Frozouda - quitate las BAPE",
        "archivo": "art431.mp3"
    },
    {
        "nombre": "Frozouda - quitate los Jeans",
        "archivo": "art432.mp3"
    },
    {
        "nombre": "Frozouda - tatiana !",
        "archivo": "art433.mp3"
    },
    {
        "nombre": "Frozouda - TOP !",
        "archivo": "art434.mp3"
    },
    {
        "nombre": "Frozouda - un goat siempre esta busy",
        "archivo": "art435.mp3"
    },
    {
        "nombre": "Frozouda, Cluster - hot box",
        "archivo": "art436.mp3"
    },
    {
        "nombre": "Frozouda, Jugo!, KNAK - chirlito",
        "archivo": "art437.mp3"
    },
    {
        "nombre": "Hepa - Batman",
        "archivo": "art438.mp3"
    },
    {
        "nombre": "Hepa - Carlos Padilla",
        "archivo": "art439.mp3"
    },
    {
        "nombre": "Hepa - Con mi cousin",
        "archivo": "art440.mp3"
    },
    {
        "nombre": "Hepa - Cuando estas high",
        "archivo": "art441.mp3"
    },
    {
        "nombre": "Hepa - Lovestar",
        "archivo": "art442.mp3"
    },
    {
        "nombre": "Hepa - Pepe Argento",
        "archivo": "art443.mp3"
    },
    {
        "nombre": "Hepa - Sintonizame",
        "archivo": "art444.mp3"
    },
    {
        "nombre": "Hepa - Varios Puntos",
        "archivo": "art445.mp3"
    },
    {
        "nombre": "Hepa, Cluster - Dolor de muela",
        "archivo": "art446.mp3"
    },
    {
        "nombre": "Hepa, nykoo0 - MI HERMANO SE LAS MANDA",
        "archivo": "art447.mp3"
    },
    {
        "nombre": "huntr - baby boo",
        "archivo": "art448.mp3"
    },
    {
        "nombre": "huntr - esta va porque te quiero",
        "archivo": "art449.mp3"
    },
    {
        "nombre": "huntr - pain",
        "archivo": "art450.mp3"
    },
    {
        "nombre": "huntr - partydanc3",
        "archivo": "art451.mp3"
    },
    {
        "nombre": "ISMA - 2037",
        "archivo": "art452.mp3"
    },
    {
        "nombre": "ISMA - Antes del Amanecer",
        "archivo": "art453.mp3"
    },
    {
        "nombre": "ISMA - Cuanto va a pasar",
        "archivo": "art454.mp3"
    },
    {
        "nombre": "ISMA, LOLO  - CUAL ES TU PLAN",
        "archivo": "art455.mp3"
    },
    {
        "nombre": "jovenalien - ME PASO LA SEMANA",
        "archivo": "art456.mp3"
    },
    {
        "nombre": "jovenalien - No vale la pena enojarse",
        "archivo": "art457.mp3"
    },
    {
        "nombre": "jovenalien - tengo hambre",
        "archivo": "art458.mp3"
    },
    {
        "nombre": "Jugo! , Cluster - Nos retiene el estado",
        "archivo": "art459.mp3"
    },
    {
        "nombre": "Jugo! , enzocerobulto - Musicalmente",
        "archivo": "art460.mp3"
    },
    {
        "nombre": "Jugo! , YSY A - Todo el dia en el trap",
        "archivo": "art461.mp3"
    },
    {
        "nombre": "Jugo! - La chupa la fame",
        "archivo": "art462.mp3"
    },
    {
        "nombre": "Jugo! - Nadie se salva",
        "archivo": "art463.mp3"
    },
    {
        "nombre": "Jugo! - Quiere algo de mi",
        "archivo": "art464.mp3"
    },
    {
        "nombre": "Jugo!, enzocerobulto - Hacela facil",
        "archivo": "art465.mp3"
    },
    {
        "nombre": "Jugo!, salas flaco - Desfile",
        "archivo": "art466.mp3"
    },
    {
        "nombre": "KERCHAK - BACK",
        "archivo": "art467.mp3"
    },
    {
        "nombre": "KERCHAK - CHILL AF",
        "archivo": "art468.mp3"
    },
    {
        "nombre": "KERCHAK - Fajos en el Camperon",
        "archivo": "art469.mp3"
    },
    {
        "nombre": "KERCHAK - MI BRO SE MAMO",
        "archivo": "art470.mp3"
    },
    {
        "nombre": "KERCHAK, Cluster - No Me Pienso Demorar",
        "archivo": "art471.mp3"
    },
    {
        "nombre": "KERCHAK - Viviendo Al Corte",
        "archivo": "art472.mp3"
    },
    {
        "nombre": "KERCHAK - WIDE OPEN",
        "archivo": "art473.mp3"
    },
    {
        "nombre": "KERCHAK, Cluster - Una Noche Con Los Tios 2",
        "archivo": "art474.mp3"
    },
    {
        "nombre": "KERCHAK, DAGGER - BOOFER",
        "archivo": "art475.mp3"
    },
    {
        "nombre": "KERCHAK, ENZOCEROBULTO - Chamuyo Habilidoso",
        "archivo": "art476.mp3"
    },
    {
        "nombre": "KERCHAK, PANCHITOLEFLEUR - ANOTHER NIGHT WITH THE UNCLE",
        "archivo": "art477.mp3"
    },
    {
        "nombre": "KERCHAK, PANCHITOLEFLEUR - Tamo a Full",
        "archivo": "art478.mp3"
    },
    {
        "nombre": "KERCHAK, TURROBABY, Cluster, Tuw4 - Un picadito",
        "archivo": "art479.mp3"
    },
    {
        "nombre": "kino frizza - ADEMAS DE MI REMIX",
        "archivo": "art480.mp3"
    },
    {
        "nombre": "kino frizza - AYER ME COMI UNAS REX",
        "archivo": "art481.mp3"
    },
    {
        "nombre": "kino frizza - Cancion para cuando te quedas sin internet",
        "archivo": "art482.mp3"
    },
    {
        "nombre": "kino frizza - GIVENCHY PARODIA",
        "archivo": "art483.mp3"
    },
    {
        "nombre": "kino frizza - LA SAVEIRO LA SAVEIRO",
        "archivo": "art484.mp3"
    },
    {
        "nombre": "kino frizza - LUCK RA  BZRP",
        "archivo": "art485.mp3"
    },
    {
        "nombre": "kino frizza - MAMICHULA",
        "archivo": "art486.mp3"
    },
    {
        "nombre": "kino frizza - QUEVEDO  BZRP",
        "archivo": "art487.mp3"
    },
    {
        "nombre": "kino frizza - SHAKIRA  BZRP",
        "archivo": "art488.mp3"
    },
    {
        "nombre": "kino frizza - SI ME TOMO UNA CERVEZA",
        "archivo": "art489.mp3"
    },
    {
        "nombre": "kino frizza, Nico Melo -  L-GANTE  BZRP",
        "archivo": "art490.mp3"
    },
    {
        "nombre": "kino frizza, Nico Melo - ENTRE NOSOTROS",
        "archivo": "art491.mp3"
    },
    {
        "nombre": "kino frizza, pijarrap - Malbec",
        "archivo": "art492.mp3"
    },
    {
        "nombre": "laura sad - capitulo perdido",
        "archivo": "art493.mp3"
    },
    {
        "nombre": "laura sad - chupavrga",
        "archivo": "art494.mp3"
    },
    {
        "nombre": "laura sad - i Laurie",
        "archivo": "art495.mp3"
    },
    {
        "nombre": "laura sad - mochila",
        "archivo": "art496.mp3"
    },
    {
        "nombre": "laura sad - PUCCA",
        "archivo": "art497.mp3"
    },
    {
        "nombre": "laura sad - todos pvtos",
        "archivo": "art498.mp3"
    },
    {
        "nombre": "laura sad, LOLO - Joseador Boy",
        "archivo": "art499.mp3"
    },
    {
        "nombre": "laura sad, MAGNESIO - Perdon Mama",
        "archivo": "art500.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - CLICK CLACK",
        "archivo": "art501.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - COMPA LO HICIMOS",
        "archivo": "art502.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - CREPUSCULO",
        "archivo": "art503.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - DANDO CLASE",
        "archivo": "art504.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - DEJA DE SUFRIR",
        "archivo": "art505.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - LITTLE BOOGIE VS EL GOBIERNO",
        "archivo": "art506.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - LOS DEL BOHIO",
        "archivo": "art507.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - OKUPAS",
        "archivo": "art508.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - SUAVE CRIMINAL",
        "archivo": "art509.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - TODO BIEN TODO CHETO",
        "archivo": "art510.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, DOLY FLACKKO - EL MUNDO ES MIO",
        "archivo": "art511.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR - BILLIE JEAN",
        "archivo": "art512.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR - LOS MAS ODIADOS",
        "archivo": "art513.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR - MARTES 13",
        "archivo": "art514.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR, RUSHERKING - SOY FAMOSO Y TENGO PLATA",
        "archivo": "art515.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, KID$$UP - HATERS",
        "archivo": "art516.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, MC CACO - SE TE QUEDO EL VENTO",
        "archivo": "art517.mp3"
    },
    {
        "nombre": "LOLO , BANATROLL - HAZ MAS DINERO",
        "archivo": "art518.mp3"
    },
    {
        "nombre": "LOLO , BANATROLL - TOY GANADO",
        "archivo": "art519.mp3"
    },
    {
        "nombre": "LOLO , CHOOSEY - QUE PUEDE PASAR",
        "archivo": "art520.mp3"
    },
    {
        "nombre": "LOLO - A TU MODO",
        "archivo": "art521.mp3"
    },
    {
        "nombre": "LOLO - ALEJO ISAKK",
        "archivo": "art522.mp3"
    },
    {
        "nombre": "LOLO - APHEX TWIN",
        "archivo": "art523.mp3"
    },
    {
        "nombre": "LOLO - EMILIA MERNES",
        "archivo": "art524.mp3"
    },
    {
        "nombre": "LOLO - FERNET HIELO",
        "archivo": "art525.mp3"
    },
    {
        "nombre": "LOLO - GASTEMOS MAS",
        "archivo": "art526.mp3"
    },
    {
        "nombre": "LOLO - HATER",
        "archivo": "art527.mp3"
    },
    {
        "nombre": "LOLO - hoy es mi dia",
        "archivo": "art528.mp3"
    },
    {
        "nombre": "LOLO - HOY SI QUEMO",
        "archivo": "art529.mp3"
    },
    {
        "nombre": "LOLO - INIMU",
        "archivo": "art530.mp3"
    },
    {
        "nombre": "LOLO - JESSE PINKMAN",
        "archivo": "art531.mp3"
    },
    {
        "nombre": "LOLO, 143LETI - LUNES A VIERNES",
        "archivo": "art532.mp3"
    },
    {
        "nombre": "MAGNESIO - COKER",
        "archivo": "art533.mp3"
    },
    {
        "nombre": "MAGNESIO - MAS LENTO",
        "archivo": "art534.mp3"
    },
    {
        "nombre": "MAGNESIO - OLLA POPULAR",
        "archivo": "art535.mp3"
    },
    {
        "nombre": "MAGNESIO - WING WANG WOW",
        "archivo": "art536.mp3"
    },
    {
        "nombre": "MAGNESIO - ZLATAN",
        "archivo": "art537.mp3"
    },
    {
        "nombre": "MAGNESIO, jovenalien - ROBANDO EN EL CARRE",
        "archivo": "art538.mp3"
    },
    {
        "nombre": "MAGNESIO, White! - GOKU",
        "archivo": "art539.mp3"
    },
    {
        "nombre": "Matias Fisher - Muerte en Halloween",
        "archivo": "art540.mp3"
    },
    {
        "nombre": "Nykoo0 - Anorexico",
        "archivo": "art541.mp3"
    },
    {
        "nombre": "Nykoo0 - Que sabes de amor",
        "archivo": "art542.mp3"
    },
    {
        "nombre": "pa2k - DEMOLIENDO HOTELES",
        "archivo": "art543.mp3"
    },
    {
        "nombre": "pa2k - Fumando Afuera",
        "archivo": "art544.mp3"
    },
    {
        "nombre": "pa2k - TODA",
        "archivo": "art545.mp3"
    },
    {
        "nombre": "pa2k, cero - Rn",
        "archivo": "art546.mp3"
    },
    {
        "nombre": "pa2k, cero - yEye",
        "archivo": "art547.mp3"
    },
    {
        "nombre": "pa2k, enzocerobulto - BOYFRIEND",
        "archivo": "art548.mp3"
    },
    {
        "nombre": "pa2k, enzocerobulto - RIGHT NOW",
        "archivo": "art549.mp3"
    },
    {
        "nombre": "pabloxo - Astigmatismo",
        "archivo": "art550.mp3"
    },
    {
        "nombre": "pabloxo - COMIDA POR PESO",
        "archivo": "art551.mp3"
    },
    {
        "nombre": "pabloxo - dB",
        "archivo": "art552.mp3"
    },
    {
        "nombre": "pabloxo - Doble F",
        "archivo": "art553.mp3"
    },
    {
        "nombre": "pabloxo - dosydos",
        "archivo": "art554.mp3"
    },
    {
        "nombre": "pabloxo - lo hago x mi",
        "archivo": "art555.mp3"
    },
    {
        "nombre": "pabloxo - no son dos f son clones",
        "archivo": "art556.mp3"
    },
    {
        "nombre": "pabloxo - Plata con lo que me gusta",
        "archivo": "art557.mp3"
    },
    {
        "nombre": "pabloxo - Una mas por mis amigos",
        "archivo": "art558.mp3"
    },
    {
        "nombre": "pabloxo, Cluster - Fuego en el microfono",
        "archivo": "art559.mp3"
    },
    {
        "nombre": "pabloxo, Frozouda - Time Break",
        "archivo": "art560.mp3"
    },
    {
        "nombre": "PANKKY - FREEHOMMIES",
        "archivo": "art561.mp3"
    },
    {
        "nombre": "PANKKY - GLOPETA",
        "archivo": "art562.mp3"
    },
    {
        "nombre": "PANKKY - TELL ME",
        "archivo": "art563.mp3"
    },
    {
        "nombre": "papirola - sos mi papirola",
        "archivo": "art564.mp3"
    },
    {
        "nombre": "salas flaco - PANICO ESCENICO",
        "archivo": "art565.mp3"
    },
    {
        "nombre": "salas flaco - Por Argentina",
        "archivo": "art566.mp3"
    },
    {
        "nombre": "salas flaco - TAN MALA",
        "archivo": "art567.mp3"
    },
    {
        "nombre": "salas flaco, Bhavi, Asan - EL DINERO DE INTERNET",
        "archivo": "art568.mp3"
    },
    {
        "nombre": "Shako , Jugo! - Medio Tana",
        "archivo": "art569.mp3"
    },
    {
        "nombre": "Shako - 4eva",
        "archivo": "art570.mp3"
    },
    {
        "nombre": "Shako - Amigdalas",
        "archivo": "art571.mp3"
    },
    {
        "nombre": "Shako - es la vencida",
        "archivo": "art572.mp3"
    },
    {
        "nombre": "Shako - Hotel",
        "archivo": "art573.mp3"
    },
    {
        "nombre": "Shako - RACKLESS",
        "archivo": "art574.mp3"
    },
    {
        "nombre": "Shako - vas a ver el alma mula",
        "archivo": "art575.mp3"
    },
    {
        "nombre": "Shako, Bhavi, Seven Kayne - K.O",
        "archivo": "art576.mp3"
    },
    {
        "nombre": "Shako, SixUp - Daily",
        "archivo": "art577.mp3"
    },
    {
        "nombre": "SixUp - 10 tucas",
        "archivo": "art578.mp3"
    },
    {
        "nombre": "SixUp - Anti",
        "archivo": "art579.mp3"
    },
    {
        "nombre": "SixUp - DobleVaso",
        "archivo": "art580.mp3"
    },
    {
        "nombre": "SixUp - Falso",
        "archivo": "art581.mp3"
    },
    {
        "nombre": "SixUp - Mortedor",
        "archivo": "art582.mp3"
    },
    {
        "nombre": "SixUp - TikiTime",
        "archivo": "art583.mp3"
    },
    {
        "nombre": "SixUp - TripleVaso",
        "archivo": "art584.mp3"
    },
    {
        "nombre": "Stiffy - escudo y espada",
        "archivo": "art585.mp3"
    },
    {
        "nombre": "Stiffy - FARANDULERO",
        "archivo": "art586.mp3"
    },
    {
        "nombre": "Stiffy - GUAP",
        "archivo": "art587.mp3"
    },
    {
        "nombre": "Stiffy - GUASO BALLS Z",
        "archivo": "art588.mp3"
    },
    {
        "nombre": "Stiffy - MECHINSTRONGAS",
        "archivo": "art589.mp3"
    },
    {
        "nombre": "Stiffy - NO ES LO QUE PENSAS",
        "archivo": "art590.mp3"
    },
    {
        "nombre": "Stiffy - NO LA CUELGO",
        "archivo": "art591.mp3"
    },
    {
        "nombre": "Stiffy - PEGO FLORES",
        "archivo": "art592.mp3"
    },
    {
        "nombre": "Stiffy - SANDRO",
        "archivo": "art593.mp3"
    },
    {
        "nombre": "Stiffy - SECONDLIFE",
        "archivo": "art594.mp3"
    },
    {
        "nombre": "Stiffy - SWAG DE SOSA",
        "archivo": "art595.mp3"
    },
    {
        "nombre": "Stiffy - WACHA LOCA",
        "archivo": "art596.mp3"
    },
    {
        "nombre": "Stiffy, Agusfortnite2008 - AFIP",
        "archivo": "art597.mp3"
    },
    {
        "nombre": "Stiffy, AGUSFORTNITE2008 - CON PEDRO Y CON LA DROGA",
        "archivo": "art598.mp3"
    },
    {
        "nombre": "Stiffy, AGUSFORTNITE2008 - QUIERE PENE",
        "archivo": "art599.mp3"
    },
    {
        "nombre": "Stiffy, Jon Z - COMO ANTES",
        "archivo": "art600.mp3"
    },
    {
        "nombre": "Stiffy, Rojuu - AMNESIA",
        "archivo": "art601.mp3"
    },
    {
        "nombre": "Stiffy, TURROBABY, ZELL, AGUSFORTNITE2008 - BABASONICO",
        "archivo": "art602.mp3"
    },
    {
        "nombre": "TURROBABY - 2017",
        "archivo": "art603.mp3"
    },
    {
        "nombre": "TURROBABY - Aca y Alla y En Todos Lados",
        "archivo": "art604.mp3"
    },
    {
        "nombre": "TURROBABY - Bajo El Sol",
        "archivo": "art605.mp3"
    },
    {
        "nombre": "TURROBABY - Bici Itau",
        "archivo": "art606.mp3"
    },
    {
        "nombre": "TURROBABY - COJER WACHAS",
        "archivo": "art607.mp3"
    },
    {
        "nombre": "TURROBABY - COLOMBIANA HOODTRAP",
        "archivo": "art608.mp3"
    },
    {
        "nombre": "TURROBABY - Cornudo Consciente",
        "archivo": "art609.mp3"
    },
    {
        "nombre": "TURROBABY - De Cote",
        "archivo": "art610.mp3"
    },
    {
        "nombre": "TURROBABY - Filmemos Una Peli",
        "archivo": "art611.mp3"
    },
    {
        "nombre": "TURROBABY - Franco Colapinto",
        "archivo": "art612.mp3"
    },
    {
        "nombre": "TURROBABY - Lgante Y Wanda Nara",
        "archivo": "art613.mp3"
    },
    {
        "nombre": "TURROBABY - Mañana Me Voy De Gira",
        "archivo": "art614.mp3"
    },
    {
        "nombre": "TURROBABY - Sergio Massa",
        "archivo": "art615.mp3"
    },
    {
        "nombre": "TURROBABY - SIMO VIANI",
        "archivo": "art616.mp3"
    },
    {
        "nombre": "TURROBABY - Wacha Flequilluda",
        "archivo": "art617.mp3"
    },
    {
        "nombre": "TURROBABY - Yo Te Amo Toda",
        "archivo": "art618.mp3"
    },
    {
        "nombre": "TURROBABY - YPF",
        "archivo": "art619.mp3"
    },
    {
        "nombre": "TURROBABY, baby cashy - Colorada",
        "archivo": "art620.mp3"
    },
    {
        "nombre": "TURROBABY, Bhavi - Parabrisas",
        "archivo": "art621.mp3"
    },
    {
        "nombre": "TURROBABY, Doble P - ANTO ROCUZZO",
        "archivo": "art622.mp3"
    },
    {
        "nombre": "TURROBABY, enzocerobulto - Las Seis",
        "archivo": "art623.mp3"
    },
    {
        "nombre": "TURROBABY, Lolo OG - Lovebombing",
        "archivo": "art624.mp3"
    },
    {
        "nombre": "TURROBABY, Stiffy - PENDEJO ATREVIDO",
        "archivo": "art625.mp3"
    },
    {
        "nombre": "TURROBABY, tussiwarriors, Ze Pequeña - Natalia Oreiro",
        "archivo": "art626.mp3"
    },
    {
        "nombre": "TURROBABY, ZELL - Inter De Miami",
        "archivo": "art627.mp3"
    },
    {
        "nombre": "TURROBABY, ZELL, Stiffy - Cara De Boludo",
        "archivo": "art628.mp3"
    },
    {
        "nombre": "underaiki - borsi",
        "archivo": "art629.mp3"
    },
    {
        "nombre": "underaiki - fuli",
        "archivo": "art630.mp3"
    },
    {
        "nombre": "underaiki - Majora",
        "archivo": "art631.mp3"
    },
    {
        "nombre": "underaiki - mugi",
        "archivo": "art632.mp3"
    },
    {
        "nombre": "underaiki - No Es Personal",
        "archivo": "art633.mp3"
    },
    {
        "nombre": "underaiki - sushi",
        "archivo": "art634.mp3"
    },
    {
        "nombre": "underaiki - Too Late",
        "archivo": "art635.mp3"
    },
    {
        "nombre": "underaiki, Suei - Marceline",
        "archivo": "art636.mp3"
    },
    {
        "nombre": "vahel - .",
        "archivo": "art637.mp3"
    },
    {
        "nombre": "vahel - PLAN B",
        "archivo": "art638.mp3"
    },
    {
        "nombre": "vahel - tunel",
        "archivo": "art639.mp3"
    },
    {
        "nombre": "vahel, fukinmari - UuuUUuuu",
        "archivo": "art640.mp3"
    },
    {
        "nombre": "vahel, pachudani - loquita",
        "archivo": "art641.mp3"
    },
    {
        "nombre": "White! - FR",
        "archivo": "art642.mp3"
    },
    {
        "nombre": "White! - No lo intentes en tu home",
        "archivo": "art643.mp3"
    },
    {
        "nombre": "White! - X - RAY",
        "archivo": "art644.mp3"
    },
    {
        "nombre": "White!, magnesio - Shen Long",
        "archivo": "art645.mp3"
    },
    {
        "nombre": "Zell - Aura",
        "archivo": "art646.mp3"
    },
    {
        "nombre": "Zell - ballin de verdad",
        "archivo": "art647.mp3"
    },
    {
        "nombre": "Zell - Ballin",
        "archivo": "art648.mp3"
    },
    {
        "nombre": "Zell - calvin klein",
        "archivo": "art649.mp3"
    },
    {
        "nombre": "Zell - Cero Cero",
        "archivo": "art650.mp3"
    },
    {
        "nombre": "Zell - diamante",
        "archivo": "art651.mp3"
    },
    {
        "nombre": "Zell - diva",
        "archivo": "art652.mp3"
    },
    {
        "nombre": "Zell - humo",
        "archivo": "art653.mp3"
    },
    {
        "nombre": "Zell - iceberg",
        "archivo": "art654.mp3"
    },
    {
        "nombre": "Zell - iPhone",
        "archivo": "art655.mp3"
    },
    {
        "nombre": "Zell - Joven Ballin",
        "archivo": "art656.mp3"
    },
    {
        "nombre": "Zell - Keep It Quiet",
        "archivo": "art657.mp3"
    },
    {
        "nombre": "Zell - Kendall",
        "archivo": "art658.mp3"
    },
    {
        "nombre": "Zell - on my mind",
        "archivo": "art659.mp3"
    },
    {
        "nombre": "Zell - piso 3",
        "archivo": "art660.mp3"
    },
    {
        "nombre": "Zell - Rainbow",
        "archivo": "art661.mp3"
    },
    {
        "nombre": "Zell - Ritual",
        "archivo": "art662.mp3"
    },
    {
        "nombre": "Zell - Starboy",
        "archivo": "art663.mp3"
    },
    {
        "nombre": "Zell - stripper",
        "archivo": "art664.mp3"
    },
    {
        "nombre": "Zell - Uber",
        "archivo": "art665.mp3"
    },
    {
        "nombre": "Zell - vamonos",
        "archivo": "art666.mp3"
    },
    {
        "nombre": "Zell - webcam",
        "archivo": "art667.mp3"
    },
    {
        "nombre": "Zell - Whats Up",
        "archivo": "art668.mp3"
    },
    {
        "nombre": "Zell - ᐸ3",
        "archivo": "art669.mp3"
    },
    {
        "nombre": "Zell, Bhavi - nanana",
        "archivo": "art670.mp3"
    },
    {
        "nombre": "Zell, KNAK - ZiploK",
        "archivo": "art671.mp3"
    },
    {
        "nombre": "Zell, Polima Westcoast - g wagon",
        "archivo": "art672.mp3"
    },
    {
        "nombre": "Zell, Rojuu - Bye Bye",
        "archivo": "art673.mp3"
    },
    {
        "nombre": "Zell, Tiago PZK - xq te enamoraste",
        "archivo": "art674.mp3"
    },
    {
        "nombre": "Frozouda - doble F con visa",
        "archivo": "art675.mp3"
    },
    {
        "nombre": "Frozouda - TOP !",
        "archivo": "art676.mp3"
    },
    {
        "nombre": "Frozouda - no le di un break",
        "archivo": "art677.mp3"
    },
    {
        "nombre": "Frozouda - antipatico",
        "archivo": "art678.mp3"
    },
    {
        "nombre": "LOLO - OG KUSH",
        "archivo": "art679.mp3"
    },
    {
        "nombre": "LOLO - POP POP POP",
        "archivo": "art680.mp3"
    },
    {
        "nombre": "LOLO - GAS DE ENERO",
        "archivo": "art681.mp3"
    },
    {
        "nombre": "LOLO - NO WAY",
        "archivo": "art682.mp3"
    },
    {
        "nombre": "LOLO - HOY SI QUEMO",
        "archivo": "art683.mp3"
    },
    {
        "nombre": "LOLO - ALEJO ISAKK",
        "archivo": "art684.mp3"
    },
    {
        "nombre": "LOLO - NOVIEMBRE",
        "archivo": "art685.mp3"
    },
    {
        "nombre": "LOLO - FRIO EN DICIEMBRE",
        "archivo": "art686.mp3"
    },
    {
        "nombre": "LOLO - VASO DE A DOS",
        "archivo": "art687.mp3"
    },
    {
        "nombre": "Frozouda - mama reza por mi",
        "archivo": "art688.mp3"
    },
    {
        "nombre": "Frozouda - poema a mi nena",
        "archivo": "art689.mp3"
    },
    {
        "nombre": "Frozouda - ahorrando para un fennec",
        "archivo": "art690.mp3"
    },
    {
        "nombre": "Frozouda - la cruz como a sampaoli",
        "archivo": "art691.mp3"
    },
    {
        "nombre": "Frozouda, pabloxo - con los duros",
        "archivo": "art692.mp3"
    },
    {
        "nombre": "Frozouda - sugarrrush",
        "archivo": "art693.mp3"
    },
    {
        "nombre": "Shako - elvira",
        "archivo": "art694.mp3"
    },
    {
        "nombre": "Shako - es la vencida",
        "archivo": "art695.mp3"
    },
    {
        "nombre": "Shako - roli rola",
        "archivo": "art696.mp3"
    },
    {
        "nombre": "Shako - press play to join party",
        "archivo": "art697.mp3"
    },
    {
        "nombre": "Shako - 2030",
        "archivo": "art698.mp3"
    },
    {
        "nombre": "Shako - Shako West",
        "archivo": "art699.mp3"
    },
    {
        "nombre": "Cluster, Icynico - Slime, slime, slime",
        "archivo": "art700.mp3"
    },
    {
        "nombre": "Cluster - Vuelvo a ser yo",
        "archivo": "art701.mp3"
    },
    {
        "nombre": "Cluster - Bagg",
        "archivo": "art702.mp3"
    },
    {
        "nombre": "Cluster, Gllato, Dreiko Estrada - TONTO, RETONTO Y REQUETETONTO",
        "archivo": "art703.mp3"
    },
    {
        "nombre": "Cluster - JUMPOUTHEHOUSE",
        "archivo": "art704.mp3"
    },
    {
        "nombre": "Cluster - AK de Irak",
        "archivo": "art705.mp3"
    },
    {
        "nombre": "Cluster - En cada verbo",
        "archivo": "art706.mp3"
    },
    {
        "nombre": "Zell, KNAK - Me Da Igual",
        "archivo": "art707.mp3"
    },
    {
        "nombre": "Zell - Where U At",
        "archivo": "art708.mp3"
    },
    {
        "nombre": "Zell - Otra Chance",
        "archivo": "art709.mp3"
    },
    {
        "nombre": "Zell - que paso ayer",
        "archivo": "art710.mp3"
    },
    {
        "nombre": "Zell, Salastkbron - luna",
        "archivo": "art711.mp3"
    },
    {
        "nombre": "TURROBABY - Toda La Plata",
        "archivo": "art712.mp3"
    },
    {
        "nombre": "TURROBABY - Ventilador",
        "archivo": "art713.mp3"
    },
    {
        "nombre": "TURROBABY - Billetes De Cien",
        "archivo": "art714.mp3"
    },
    {
        "nombre": "MAGNESIO - YUYOS",
        "archivo": "art715.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ME LO MUEVE",
        "archivo": "art716.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - COF COF",
        "archivo": "art717.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, Polus - REMERA I LOVE SWAG",
        "archivo": "art718.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - MUSICA ANTI VIEJOS",
        "archivo": "art719.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ESTO ES ENCHUFE LA CHUPA EL HIP HOP",
        "archivo": "art720.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ESTOY RE PANCHO",
        "archivo": "art721.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - SHH CERRA EL ORTO VIEJO ROCKERO",
        "archivo": "art722.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, Joshu Joshu, Matiasenchufe - FERNET",
        "archivo": "art723.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - YO ESTOY",
        "archivo": "art724.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - BB BELT",
        "archivo": "art725.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - OKAY OKAY",
        "archivo": "art726.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - LE PIDO A DIOS",
        "archivo": "art727.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - HOMBRE SWAG",
        "archivo": "art728.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ABUELO",
        "archivo": "art729.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - DORITOS",
        "archivo": "art730.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - PALITO DE LA SELVA",
        "archivo": "art731.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ZAZA",
        "archivo": "art732.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - FIDO DIDO",
        "archivo": "art733.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - NO SE",
        "archivo": "art734.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - SWAGBOI",
        "archivo": "art735.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - Otro idioma",
        "archivo": "art736.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - ENCONTRATE A VOS",
        "archivo": "art737.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - MENTIR",
        "archivo": "art738.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - YO ESTOY EN UNA Y ELLA EN 4",
        "archivo": "art739.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - DEJO EL HUMO",
        "archivo": "art740.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - VIP DEL VIP",
        "archivo": "art741.mp3"
    },
    {
        "nombre": "Stiffy - LOS DOS",
        "archivo": "art742.mp3"
    },
    {
        "nombre": "Stiffy - WACKAFLOKA",
        "archivo": "art743.mp3"
    },
    {
        "nombre": "Stiffy - SIEMPRE FUMO PORRO",
        "archivo": "art744.mp3"
    },
    {
        "nombre": "Stiffy - SIEMPRE FUMO PORRO",
        "archivo": "art745.mp3"
    },
    {
        "nombre": "Stiffy - DISFRUTAR",
        "archivo": "art746.mp3"
    },
    {
        "nombre": "Stiffy - YA CASI",
        "archivo": "art747.mp3"
    },
    {
        "nombre": "Stiffy - NO ME CANSO",
        "archivo": "art748.mp3"
    },
    {
        "nombre": "Jugo!, Emirsito, Mhtresuno - Estimulos",
        "archivo": "art749.mp3"
    },
    {
        "nombre": "Jugo!, pabloxo - Nunca va a ser igual el esfuerzo",
        "archivo": "art750.mp3"
    },
    {
        "nombre": "Jugo! - Me neutralice",
        "archivo": "art751.mp3"
    },
    {
        "nombre": "Jugo! - Maradona",
        "archivo": "art752.mp3"
    },
    {
        "nombre": "Jugo! - Tengo que hacerlo",
        "archivo": "art753.mp3"
    },
    {
        "nombre": "Jugo!, Emirsito, Frozouda - Parece que entreno",
        "archivo": "art754.mp3"
    },
    {
        "nombre": "Jugo!, LuchoSSJ, KNAK - Reviento el spot",
        "archivo": "art755.mp3"
    },
    {
        "nombre": "Jugo! - Desde cba",
        "archivo": "art756.mp3"
    },
    {
        "nombre": "Jugo! - Sube la sintonia",
        "archivo": "art757.mp3"
    },
    {
        "nombre": "Jugo! - Es una obsesion",
        "archivo": "art758.mp3"
    },
    {
        "nombre": "Jugo!, TURROBABY - Zafiros",
        "archivo": "art759.mp3"
    },
    {
        "nombre": "Jugo!, bic - Hard",
        "archivo": "art760.mp3"
    },
    {
        "nombre": "Jugo! - Todo el año",
        "archivo": "art761.mp3"
    },
    {
        "nombre": "Jugo! - Esto es transitorio",
        "archivo": "art762.mp3"
    },
    {
        "nombre": "Jugo!, Neo Pistea - Quieren aparentar",
        "archivo": "art763.mp3"
    },
    {
        "nombre": "Jugo! - Un solo cable",
        "archivo": "art764.mp3"
    },
    {
        "nombre": "enzocerobulto - Quien tiene la mirada mas cansada",
        "archivo": "art765.mp3"
    },
    {
        "nombre": "enzocerobulto - Mi computadora",
        "archivo": "art766.mp3"
    },
    {
        "nombre": "enzocerobulto - Como Lastima",
        "archivo": "art767.mp3"
    },
    {
        "nombre": "enzocerobulto - En donde",
        "archivo": "art768.mp3"
    },
    {
        "nombre": "enzocerobulto - Como se lo hago",
        "archivo": "art769.mp3"
    },
    {
        "nombre": "enzocerobulto - De vuelta",
        "archivo": "art770.mp3"
    },
    {
        "nombre": "enzocerobulto - Diez en la trampa",
        "archivo": "art771.mp3"
    },
    {
        "nombre": "enzocerobulto - Lo que fumo lo que tomo",
        "archivo": "art772.mp3"
    },
    {
        "nombre": "pabloxo - Fajos de 20 mil",
        "archivo": "art773.mp3"
    },
    {
        "nombre": "pabloxo - Fumando en los clubes",
        "archivo": "art774.mp3"
    },
    {
        "nombre": "pabloxo, Hwii - PABLOXO",
        "archivo": "art775.mp3"
    },
    {
        "nombre": "cero - 10g",
        "archivo": "art776.mp3"
    },
    {
        "nombre": "cero - Plata dolida",
        "archivo": "art777.mp3"
    },
    {
        "nombre": "cero - Plata tarada",
        "archivo": "art778.mp3"
    },
    {
        "nombre": "cero - 5velas",
        "archivo": "art779.mp3"
    },
    {
        "nombre": "cero - huida",
        "archivo": "art780.mp3"
    },
    {
        "nombre": "cero - a correr",
        "archivo": "art781.mp3"
    },
    {
        "nombre": "cero - Ella",
        "archivo": "art782.mp3"
    },
    {
        "nombre": "cero, Jugo! - YeA 2",
        "archivo": "art783.mp3"
    },
    {
        "nombre": "cero, pabloxo - oki",
        "archivo": "art784.mp3"
    },
    {
        "nombre": "cero - las otras victorias quedan chicas con lo que te anhelo",
        "archivo": "art785.mp3"
    },
    {
        "nombre": "cero, huntr - a donde vas¿",
        "archivo": "art786.mp3"
    },
    {
        "nombre": "cero - foe",
        "archivo": "art787.mp3"
    },
    {
        "nombre": "cero - +personal",
        "archivo": "art788.mp3"
    },
    {
        "nombre": "cero, TURROBABY - a solas",
        "archivo": "art789.mp3"
    },
    {
        "nombre": "cero, underaiki - sisu",
        "archivo": "art790.mp3"
    },
    {
        "nombre": "cero - toco madera",
        "archivo": "art791.mp3"
    },
    {
        "nombre": "cero - 1-2",
        "archivo": "art792.mp3"
    },
    {
        "nombre": "cero - Sin ayuda",
        "archivo": "art793.mp3"
    },
    {
        "nombre": "cero, Lthelizard - Jakaranda",
        "archivo": "art794.mp3"
    },
    {
        "nombre": "cero - t & p",
        "archivo": "art795.mp3"
    },
    {
        "nombre": "cero - Ye A",
        "archivo": "art796.mp3"
    },
    {
        "nombre": "cero, Doly Flackko - Peine teta",
        "archivo": "art797.mp3"
    },
    {
        "nombre": "cero, Sixup - Palo",
        "archivo": "art798.mp3"
    },
    {
        "nombre": "cero - Drumkits en el pantalon",
        "archivo": "art799.mp3"
    },
    {
        "nombre": "cero - t",
        "archivo": "art800.mp3"
    },
    {
        "nombre": "cero - 2 Sedas",
        "archivo": "art801.mp3"
    },
    {
        "nombre": "cero, Jugo! - Voy a hacer historia",
        "archivo": "art802.mp3"
    },
    {
        "nombre": "cero - Locomotora",
        "archivo": "art803.mp3"
    },
    {
        "nombre": "cero - Cabra",
        "archivo": "art804.mp3"
    },
    {
        "nombre": "Cluster, cero - Imbecil Anthem (intro)",
        "archivo": "art805.mp3"
    },
    {
        "nombre": "enzocerobulto - Comoledoy",
        "archivo": "art806.mp3"
    },
    {
        "nombre": "enzocerobulto - partexparte",
        "archivo": "art807.mp3"
    },
    {
        "nombre": "enzocerobulto - Toda la culpa es mia",
        "archivo": "art808.mp3"
    },
    {
        "nombre": "enzocerobulto - w el filo",
        "archivo": "art809.mp3"
    },
    {
        "nombre": "enzocerobulto, J Bern - xdentromuerto",
        "archivo": "art810.mp3"
    },
    {
        "nombre": "enzocerobulto, Komp - Como antes",
        "archivo": "art811.mp3"
    },
    {
        "nombre": "enzocerobulto, Komp - Fe Intacta",
        "archivo": "art812.mp3"
    },
    {
        "nombre": "enzocerobulto, liluno - Pullop",
        "archivo": "art813.mp3"
    },
    {
        "nombre": "enzocerobulto, pa2k - w el K1",
        "archivo": "art814.mp3"
    },
    {
        "nombre": "pabloxo - Porrible",
        "archivo": "art815.mp3"
    },
    {
        "nombre": "Shako - Con Fines De Lucro",
        "archivo": "art816.mp3"
    },
    {
        "nombre": "Zell - Zzz",
        "archivo": "art817.mp3"
    },
    {
        "nombre": "Jugo! - Nunca me vire",
        "archivo": "art818.mp3"
    },
    {
        "nombre": "Doly Flackko - Street Pain",
        "archivo": "art819.mp3"
    },
    {
        "nombre": "Doly Flackko - Ambicion & Adrenalina",
        "archivo": "art820.mp3"
    },
    {
        "nombre": "Doly Flackko - Flackkosito",
        "archivo": "art821.mp3"
    },
    {
        "nombre": "Doly Flackko - Delirio de Grandeza",
        "archivo": "art822.mp3"
    },
    {
        "nombre": "Doly Flackko - Pala Ancha",
        "archivo": "art823.mp3"
    },
    {
        "nombre": "Doly Flackko - Veneno",
        "archivo": "art824.mp3"
    },
    {
        "nombre": "Doly Flackko - donde queres estar",
        "archivo": "art825.mp3"
    },
    {
        "nombre": "Doly Flackko - Outro Chau",
        "archivo": "art826.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, TURROBABY - ESCENARIO",
        "archivo": "art827.mp3"
    },
    {
        "nombre": "eluney benedetti, elaiyah - El morfon",
        "archivo": "art828.mp3"
    },
    {
        "nombre": "eluney benedetti - mi ñerY",
        "archivo": "art829.mp3"
    },
    {
        "nombre": "eluney benedetti, elaiyah - Idioma",
        "archivo": "art830.mp3"
    },
    {
        "nombre": "eluney benedetti, elaiyah - A los palomos",
        "archivo": "art831.mp3"
    },
    {
        "nombre": "eluney benedetti - aYvamo",
        "archivo": "art832.mp3"
    },
    {
        "nombre": "eluney benedetti, elaiyah - Los3",
        "archivo": "art833.mp3"
    },
    {
        "nombre": "eluney benedetti, TULO13 - Che",
        "archivo": "art834.mp3"
    },
    {
        "nombre": "eluney benedetti, 2uu! - ENCIMA MIO",
        "archivo": "art835.mp3"
    },
    {
        "nombre": "eluney benedetti - Pimpinela Love",
        "archivo": "art836.mp3"
    },
    {
        "nombre": "eluney benedetti - Le Da Igual",
        "archivo": "art837.mp3"
    },
    {
        "nombre": "elaiyah - mala sangre",
        "archivo": "art838.mp3"
    },
    {
        "nombre": "elaiyah - una lagrima y una pua",
        "archivo": "art839.mp3"
    },
    {
        "nombre": "elaiyah - mi culpa",
        "archivo": "art840.mp3"
    },
    {
        "nombre": "elaiyah - Pudrete",
        "archivo": "art841.mp3"
    },
    {
        "nombre": "elaiyah - Evocar",
        "archivo": "art842.mp3"
    },
    {
        "nombre": "CHOOSEY, Yvng Jorge - Le TOTO",
        "archivo": "art843.mp3"
    },
    {
        "nombre": "CHOOSEY - X Belgrano",
        "archivo": "art844.mp3"
    },
    {
        "nombre": "CHOOSEY - DITOYS",
        "archivo": "art845.mp3"
    },
    {
        "nombre": "CHOOSEY - 3 MONITOS",
        "archivo": "art846.mp3"
    },
    {
        "nombre": "CHOOSEY - BANCO",
        "archivo": "art847.mp3"
    },
    {
        "nombre": "CHOOSEY - QUE CONCHA QUERES",
        "archivo": "art848.mp3"
    },
    {
        "nombre": "CHOOSEY - SIGAN SIN MI",
        "archivo": "art849.mp3"
    },
    {
        "nombre": "CHOOSEY, n0tgiova - DON ROKE",
        "archivo": "art850.mp3"
    },
    {
        "nombre": "CHOOSEY - ORISHINAL",
        "archivo": "art851.mp3"
    },
    {
        "nombre": "TURROBABY, LITTLE BOOGIE - Emotes",
        "archivo": "art852.mp3"
    },
    {
        "nombre": "jovenalien - Ni ahi con tus quilombos",
        "archivo": "art853.mp3"
    },
    {
        "nombre": "White! - Sombras",
        "archivo": "art854.mp3"
    },
    {
        "nombre": "Nykoo0 - Barack Obama",
        "archivo": "art855.mp3"
    },
    {
        "nombre": "bic - selfish",
        "archivo": "art856.mp3"
    },
    {
        "nombre": "bic - como amar",
        "archivo": "art857.mp3"
    },
    {
        "nombre": "bic - silly",
        "archivo": "art858.mp3"
    },
    {
        "nombre": "bic - new one",
        "archivo": "art859.mp3"
    },
    {
        "nombre": "bic - tus recuerdos",
        "archivo": "art860.mp3"
    },
    {
        "nombre": "bic - dramas",
        "archivo": "art861.mp3"
    },
    {
        "nombre": "slimesanti - Friendzone",
        "archivo": "art862.mp3"
    }
];

const albumsData = [
    {
        "name": "Joseo exclusive club",
        "cover": COVERS_BASE_URL + "img_JOSEO EXCLUSIVE CLUB.png",
        "songs": [
            { "nombre": "LOLO - MINI LOLO", "archivo": "albm877.mp3" },
            { "nombre": "LOLO - OSCUROoOo", "archivo": "albm878.mp3" },
            { "nombre": "LOLO - APHEX TWIN", "archivo": "albm879.mp3" },
            { "nombre": "LOLO - QUIEN FUE", "archivo": "albm880.mp3" },
            { "nombre": "LOLO - SYDNEY", "archivo": "albm881.mp3" },
            { "nombre": "LOLO - GASTEMOS MAS", "archivo": "albm882.mp3" },
            { "nombre": "LOLO - HATER", "archivo": "albm883.mp3" },
            { "nombre": "LOLO - ALEJO ISAKK", "archivo": "albm884.mp3" },
            { "nombre": "LOLO - HOY SI QUEMO", "archivo": "albm885.mp3" },
            { "nombre": "LOLO - OG KUSH", "archivo": "albm886.mp3" },
            { "nombre": "LOLO - NO WAY", "archivo": "albm887.mp3" },
            { "nombre": "LOLO - GAS DE ENERO", "archivo": "albm888.mp3" },
            { "nombre": "LOLO - POP POP POP", "archivo": "albm889.mp3" },
            { "nombre": "LOLO - NOVIEMBRE", "archivo": "albm890.mp3" },
            { "nombre": "LOLO - FRIO EN DICIEMBRE", "archivo": "albm891.mp3" },
            { "nombre": "LOLO - VASO DE A DOS", "archivo": "albm892.mp3" }
        ]
    },
    {
        "name": "Fro! 2",
        "cover": COVERS_BASE_URL + "img_FRO2.png",
        "songs": [
            { "nombre": "Frozouda - no le di un break", "archivo": "albm893.mp3" },
            { "nombre": "Frozouda - quitate las BAPE", "archivo": "albm894.mp3" },
            { "nombre": "Frozouda - antipatico", "archivo": "albm895.mp3" },
            { "nombre": "Frozouda - quitate los Jeans", "archivo": "albm896.mp3" },
            { "nombre": "Frozouda - TOP !", "archivo": "albm897.mp3" },
            { "nombre": "Frozouda , Cero , Cluster - plinko", "archivo": "albm898.mp3" },
            { "nombre": "Frozouda - doble F con visa", "archivo": "albm899.mp3" }
        ]
    },
    {
        "name": "Fro!",
        "cover": COVERS_BASE_URL + "img_FRO.png",
        "songs": [
            { "nombre": "Frozouda, Jugo!, KNAK - chirlito", "archivo": "albm900.mp3" },
            { "nombre": "Frozouda, Cluster - hot box", "archivo": "albm901.mp3" },
            { "nombre": "Frozouda - un goat siempre esta busy", "archivo": "albm902.mp3" },
            { "nombre": "Frozouda - nicki nicole", "archivo": "albm903.mp3" },
            { "nombre": "Frozouda - GAS O PORRO", "archivo": "albm904.mp3" },
            { "nombre": "Frozouda - mama reza por mi", "archivo": "albm905.mp3" },
            { "nombre": "Frozouda - poema a mi nena", "archivo": "albm906.mp3" },
            { "nombre": "Frozouda - ahorrando para un fennec", "archivo": "albm907.mp3" },
            { "nombre": "Frozouda - sugarrrush", "archivo": "albm908.mp3" },
            { "nombre": "Frozouda, pabloxo - con los duros", "archivo": "albm909.mp3" },
            { "nombre": "Frozouda - la cruz como a sampaoli", "archivo": "albm910.mp3" }
        ]
    },
    {
        "name": "grandes éxitos",
        "cover": COVERS_BASE_URL + "img_grandesexitos.png",
        "songs": [
            { "nombre": "Shako - Con Fines De Lucro", "archivo": "albm911.mp3" },
            { "nombre": "Shako - elvira", "archivo": "albm912.mp3" },
            { "nombre": "Shako - es la vencida", "archivo": "albm913.mp3" },
            { "nombre": "Shako - vas a ver el alma mula", "archivo": "albm914.mp3" },
            { "nombre": "Shako - roli rola", "archivo": "albm915.mp3" },
            { "nombre": "Shako - press play to join party", "archivo": "albm916.mp3" },
            { "nombre": "Shako - Amigdalas", "archivo": "albm917.mp3" },
            { "nombre": "Shako - Hotel", "archivo": "albm918.mp3" },
            { "nombre": "Shako - 2030", "archivo": "albm919.mp3" },
            { "nombre": "Shako - Shako West", "archivo": "albm920.mp3" }
        ]
    },
    {
        "name": "Muy Imbecil",
        "cover": COVERS_BASE_URL + "img_muyimbecil.png",
        "songs": [
            { "nombre": "Cluster, cero - Imbecil Anthem", "archivo": "albm921.mp3" },
            { "nombre": "Cluster, Francis Jeremy - MUY IMBECIL", "archivo": "albm922.mp3" },
            { "nombre": "Cluster, Icynico - Slime, slime, slime", "archivo": "albm923.mp3" },
            { "nombre": "Cluster - Vuelvo a ser yo", "archivo": "albm924.mp3" },
            { "nombre": "Cluster, Doly Flackko - OREO", "archivo": "albm925.mp3" },
            { "nombre": "Cluster - Bagg", "archivo": "albm926.mp3" },
            { "nombre": "Cluster, Gllato, Dreiko Estrada - TONTO, RETONTO Y REQUETETONTO", "archivo": "albm927.mp3" },
            { "nombre": "Cluster, Aleezok - CARGO", "archivo": "albm928.mp3" },
            { "nombre": "Cluster - JUMPOUTHEHOUSE", "archivo": "albm929.mp3" },
            { "nombre": "Cluster, enzocerobulto - FFumando", "archivo": "albm930.mp3" },
            { "nombre": "Cluster - AK de Irak", "archivo": "albm931.mp3" },
            { "nombre": "Cluster, Pabloxo - OTRA SEDA", "archivo": "albm932.mp3" },
            { "nombre": "Cluster - JEFFES", "archivo": "albm933.mp3" },
            { "nombre": "Cluster, Frozouda - TOP 1 CHARTS", "archivo": "albm934.mp3" },
            { "nombre": "Cluster - En cada verbo", "archivo": "albm935.mp3" }
        ]
    },
    {
        "name": "PILF",
        "cover": COVERS_BASE_URL + "img_pilf.png",
        "songs": [
            { "nombre": "PILF - ENTRO A LA CANCHA", "archivo": "albm936.mp3" },
            { "nombre": "PILF - FUMO UNO FUMO DOS", "archivo": "albm937.mp3" },
            { "nombre": "PILF - HIT", "archivo": "albm938.mp3" },
            { "nombre": "PILF - MALVIAJAR", "archivo": "albm939.mp3" },
            { "nombre": "PILF - NABO", "archivo": "albm940.mp3" },
            { "nombre": "PILF - NI ME ACUERDO", "archivo": "albm941.mp3" },
            { "nombre": "PILF - PILF", "archivo": "albm942.mp3" },
            { "nombre": "PILF - ROMANCE TE PUEDO DAR", "archivo": "albm943.mp3" },
            { "nombre": "PILF - TANTA GIRA", "archivo": "albm944.mp3" },
            { "nombre": "PILF - YO SOY ASI", "archivo": "albm945.mp3" }
        ]
    },
    {
        "name": "Goat Talk",
        "cover": COVERS_BASE_URL + "img_goattalk.png",
        "songs": [
            { "nombre": "Zell - Zzz", "archivo": "albm946.mp3" },
            { "nombre": "Zell - iPhone", "archivo": "albm947.mp3" },
            { "nombre": "Zell - Starboy", "archivo": "albm948.mp3" },
            { "nombre": "Zell - Uber", "archivo": "albm949.mp3" },
            { "nombre": "Zell - Whats Up", "archivo": "albm950.mp3" },
            { "nombre": "Zell - Joven Ballin", "archivo": "albm951.mp3" },
            { "nombre": "Zell, Rojuu - Bye Bye", "archivo": "albm952.mp3" },
            { "nombre": "Zell - Aura", "archivo": "albm953.mp3" },
            { "nombre": "Zell - Cero Cero", "archivo": "albm954.mp3" },
            { "nombre": "Zell - Keep It Quiet", "archivo": "albm955.mp3" },
            { "nombre": "Zell - Kendall", "archivo": "albm956.mp3" },
            { "nombre": "Zell, KNAK - Me Da Igual", "archivo": "albm957.mp3" },
            { "nombre": "Zell - Otra Chance", "archivo": "albm958.mp3" }
        ]
    },
    {
        "name": "Ballin de verdad",
        "cover": COVERS_BASE_URL + "img_ballinfr.png",
        "songs": [
            { "nombre": "Zell - que paso ayer", "archivo": "albm959.mp3" },
            { "nombre": "Zell, Salastkbron - luna", "archivo": "albm960.mp3" },
            { "nombre": "Zell - ballin de verdad", "archivo": "albm961.mp3" },
            { "nombre": "Zell - calvin klein", "archivo": "albm962.mp3" },
            { "nombre": "Zell - diamante", "archivo": "albm963.mp3" },
            { "nombre": "Zell - diva", "archivo": "albm964.mp3" },
            { "nombre": "Zell - humo", "archivo": "albm965.mp3" },
            { "nombre": "Zell - piso 3", "archivo": "albm966.mp3" },
            { "nombre": "Zell - que paso ayer", "archivo": "albm967.mp3" },
            { "nombre": "Zell - Rainbow", "archivo": "albm968.mp3" },
            { "nombre": "Zell - stripper", "archivo": "albm969.mp3" },
            { "nombre": "Zell - vamonos", "archivo": "albm970.mp3" },
            { "nombre": "Zell - webcam", "archivo": "albm971.mp3" },
            { "nombre": "Zell, Bhavi - nanana", "archivo": "albm972.mp3" },
            { "nombre": "Zell, Polima Westcoast - g wagon", "archivo": "albm973.mp3" },
            { "nombre": "Zell, Tiago PZK - xq te enamoraste", "archivo": "albm974.mp3" }
        ]
    },
    {
        "name": "I Love Wachas",
        "cover": COVERS_BASE_URL + "img_ilw.png",
        "songs": [
            { "nombre": "TURROBABY - Toda La Plata", "archivo": "albm975.mp3" },
            { "nombre": "TURROBABY - Bici Itau", "archivo": "albm976.mp3" },
            { "nombre": "TURROBABY - Cornudo Consciente", "archivo": "albm977.mp3" },
            { "nombre": "TURROBABY - De Cote", "archivo": "albm978.mp3" },
            { "nombre": "TURROBABY - Franco Colapinto", "archivo": "albm979.mp3" },
            { "nombre": "TURROBABY - Lgante Y Wanda Nara", "archivo": "albm980.mp3" },
            { "nombre": "TURROBABY - Sergio Massa", "archivo": "albm981.mp3" },
            { "nombre": "TURROBABY - Toda La Plata", "archivo": "albm982.mp3" },
            { "nombre": "TURROBABY - Wacha Flequilluda", "archivo": "albm983.mp3" },
            { "nombre": "TURROBABY, baby cashy - Colorada", "archivo": "albm984.mp3" },
            { "nombre": "TURROBABY, Doble P - ANTO ROCUZZO", "archivo": "albm985.mp3" },
            { "nombre": "TURROBABY, tussiwarriors, Ze Pequeña - Natalia Oreiro", "archivo": "albm986.mp3" },
            { "nombre": "TURROBABY, ZELL, Stiffy - Cara De Boludo", "archivo": "albm987.mp3" }
        ]
    },
    {
        "name": "Muchas gracias autotune",
        "cover": COVERS_BASE_URL + "img_graciastune.png",
        "songs": [
            { "nombre": "TURROBABY - Aca y Alla y En Todos Lados", "archivo": "albm988.mp3" },
            { "nombre": "TURROBABY - Filmemos Una Peli", "archivo": "albm989.mp3" },
            { "nombre": "TURROBABY - Mañana Me Voy De Gira", "archivo": "albm990.mp3" },
            { "nombre": "TURROBABY - Yo Te Amo Toda", "archivo": "albm991.mp3" },
            { "nombre": "TURROBABY, Bhavi - Parabrisas", "archivo": "albm992.mp3" },
            { "nombre": "TURROBABY, enzocerobulto - Las Seis", "archivo": "albm993.mp3" },
            { "nombre": "TURROBABY, Lolo OG - Lovebombing", "archivo": "albm994.mp3" },
            { "nombre": "TURROBABY, ZELL - Inter De Miami", "archivo": "albm995.mp3" }
        ]
    },
    {
        "name": "blackalbum",
        "cover": COVERS_BASE_URL + "img_blackalbum.png",
        "songs": [
            { "nombre": "enzocerobulto, liluno - Pullop", "archivo": "albm996.mp3" },
            { "nombre": "enzocerobulto - Comoledoy", "archivo": "albm997.mp3" },
            { "nombre": "enzocerobulto - Esta nota", "archivo": "albm998.mp3" },
            { "nombre": "enzocerobulto - partexparte", "archivo": "albm999.mp3" },
            { "nombre": "enzocerobulto - perdiendo", "archivo": "albm1000.mp3" },
            { "nombre": "enzocerobulto - Toda la culpa es mia", "archivo": "albm1001.mp3" },
            { "nombre": "enzocerobulto - w el filo", "archivo": "albm1002.mp3" },
            { "nombre": "enzocerobulto, J Bern - xdentromuerto", "archivo": "albm1003.mp3" },
            { "nombre": "enzocerobulto, Komp - Como antes", "archivo": "albm1004.mp3" },
            { "nombre": "enzocerobulto, Komp - Fe Intacta", "archivo": "albm1005.mp3" },
            { "nombre": "enzocerobulto, pa2k - w el K1", "archivo": "albm1006.mp3" }
        ]
    },
    {
        "name": "Big Moli 3",
        "cover": COVERS_BASE_URL + "img_bigmoli.png",
        "songs": [
            { "nombre": "rageylo - coscu army", "archivo": "albm1007.mp3" },
            { "nombre": "rageylo - Dinero Llueve", "archivo": "albm1008.mp3" },
            { "nombre": "rageylo, Banatroll - Haz Mas Dinero", "archivo": "albm1009.mp3" },
            { "nombre": "rageylo - Joda estoy Gede", "archivo": "albm1010.mp3" },
            { "nombre": "rageylo - Moscu", "archivo": "albm1011.mp3" },
            { "nombre": "rageylo - Quemando Solo", "archivo": "albm1012.mp3" },
            { "nombre": "rageylo, Banatroll - Toy Ganado", "archivo": "albm1013.mp3" }
        ]
    },
    {
        "name": "Murio la Musica",
        "cover": COVERS_BASE_URL + "img_muriomusica.png",
        "songs": [
            { "nombre": "SWAGGERBOYZ - 24 7", "archivo": "albm1014.mp3" },
            { "nombre": "SWAGGERBOYZ - COF COF", "archivo": "albm1015.mp3" },
            { "nombre": "SWAGGERBOYZ - ESTOY RE PANCHO", "archivo": "albm1016.mp3" },
            { "nombre": "SWAGGERBOYZ - GUISO", "archivo": "albm1017.mp3" },
            { "nombre": "SWAGGERBOYZ - ME LO MUEVE", "archivo": "albm1018.mp3" },
            { "nombre": "SWAGGERBOYZ - MEJORES HOES", "archivo": "albm1019.mp3" },
            { "nombre": "SWAGGERBOYZ - MUSICA ANTI VIEJOS", "archivo": "albm1020.mp3" },
            { "nombre": "SWAGGERBOYZ - PIE EN LA PISTA", "archivo": "albm1021.mp3" },
            { "nombre": "SWAGGERBOYZ - SHH CERRA EL ORTO VIEJO ROCKERO", "archivo": "albm1022.mp3" },
            { "nombre": "SWAGGERBOYZ - TRES PATITOS", "archivo": "albm1023.mp3" },
            { "nombre": "SWAGGERBOYZ - YO ESTOY", "archivo": "albm1024.mp3" },
            { "nombre": "SWAGGERBOYZ, Joshu Joshu - ESTO ES ENCHUFE LA CHUPA EL HIP HOP", "archivo": "albm1025.mp3" },
            { "nombre": "SWAGGERBOYZ, Joshu Joshu, Matiasenchufe - FERNET", "archivo": "albm1026.mp3" },
            { "nombre": "SWAGGERBOYZ, NEO PISTEA - MEJORALITO", "archivo": "albm1027.mp3" },
            { "nombre": "SWAGGERBOYZ, Polus - REMERA I LOVE SWAG", "archivo": "albm1028.mp3" }
        ]
    },
    {
        "name": "Plug Park",
        "cover": COVERS_BASE_URL + "img_plugpark.png",
        "songs": [
            { "nombre": "SWAGGERBOYZ - 8 JEANS", "archivo": "albm1029.mp3" },
            { "nombre": "SWAGGERBOYZ - DESDE LOS 14", "archivo": "albm1030.mp3" },
            { "nombre": "SWAGGERBOYZ - MUSICA DE ASCENSOR", "archivo": "albm1031.mp3" },
            { "nombre": "SWAGGERBOYZ - PETER GRIFFIN", "archivo": "albm1032.mp3" },
            { "nombre": "SWAGGERBOYZ - ZAZA", "archivo": "albm1033.mp3" },
            { "nombre": "SWAGGERBOYZ - BB BELT", "archivo": "albm1034.mp3" },
            { "nombre": "SWAGGERBOYZ - DORITOS", "archivo": "albm1035.mp3" },
            { "nombre": "SWAGGERBOYZ - FIDO DIDO", "archivo": "albm1036.mp3" },
            { "nombre": "SWAGGERBOYZ - HOMBRE SWAG", "archivo": "albm1037.mp3" },
            { "nombre": "SWAGGERBOYZ - LE PIDO A DIOS", "archivo": "albm1038.mp3" },
            { "nombre": "SWAGGERBOYZ - NO SE", "archivo": "albm1039.mp3" },
            { "nombre": "SWAGGERBOYZ - OKAY OKAY", "archivo": "albm1040.mp3" },
            { "nombre": "SWAGGERBOYZ - PALITO DE LA SELVA", "archivo": "albm1041.mp3" },
            { "nombre": "SWAGGERBOYZ - SWAGBOI", "archivo": "albm1042.mp3" },
            { "nombre": "SWAGGERBOYZ - Otro idioma", "archivo": "albm1043.mp3" },
            { "nombre": "SWAGGERBOYZ - FIDO DIDO", "archivo": "albm1044.mp3" }
        ]
    },
    {
        "name": "Hacelos Concha Agus",
        "cover": COVERS_BASE_URL + "img_hacelosconcha.png",
        "songs": [
            { "nombre": "AGUSFORTNITE2008 - DEJO EL HUMO", "archivo": "albm1045.mp3" },
            { "nombre": "AGUSFORTNITE2008 - ELLA ME LLAMA", "archivo": "albm1046.mp3" },
            { "nombre": "AGUSFORTNITE2008 - ENCONTRATE A VOS", "archivo": "albm1047.mp3" },
            { "nombre": "AGUSFORTNITE2008 - MENTIR", "archivo": "albm1048.mp3" },
            { "nombre": "AGUSFORTNITE2008 - VIP DEL VIP", "archivo": "albm1049.mp3" },
            { "nombre": "AGUSFORTNITE2008 - YO ESTOY EN UNA Y ELLA EN 4", "archivo": "albm1050.mp3" },
            { "nombre": "AGUSFORTNITE2008 - HOTEL EN HOTEL", "archivo": "albm1051.mp3" },
            { "nombre": "AGUSFORTNITE2008 - VUELVO A FUMAR", "archivo": "albm1052.mp3" },
            { "nombre": "AGUSFORTNITE2008, Stiffy, DILLOM - EL MOROCHO EL RUBIO Y EL COLO", "archivo": "albm1053.mp3" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - GOFUE", "archivo": "albm1054.mp3" },
            { "nombre": "AGUSFORTNITE2008 - SWAGGEANDO EN EL BANDO", "archivo": "albm1055.mp3" },
            { "nombre": "AGUSFORTNITE2008 - LOS HAGO CONCHA", "archivo": "albm1056.mp3" }
        ]
    },
    {
        "name": "Hacelos Concha Stiffy",
        "cover": COVERS_BASE_URL + "img_hacelosconchast.png",
        "songs": [
            { "nombre": "Stiffy - DISFRUTAR", "archivo": "albm1057.mp3" },
            { "nombre": "Stiffy - escudo y espada", "archivo": "albm1058.mp3" },
            { "nombre": "Stiffy - GUASO BALLS Z", "archivo": "albm1059.mp3" },
            { "nombre": "Stiffy - LOS DOS", "archivo": "albm1060.mp3" },
            { "nombre": "Stiffy - NO ME CANSO", "archivo": "albm1061.mp3" },
            { "nombre": "Stiffy - SIEMPRE FUMO PORRO", "archivo": "albm1062.mp3" },
            { "nombre": "Stiffy - YA CASI", "archivo": "albm1063.mp3" },
            { "nombre": "Stiffy - MECHINSTRONGAS", "archivo": "albm1064.mp3" },
            { "nombre": "Stiffy - NO ES LO QUE PENSAS", "archivo": "albm1065.mp3" },
            { "nombre": "Stiffy - NO LA CUELGO", "archivo": "albm1066.mp3" },
            { "nombre": "Stiffy - PEGO FLORES", "archivo": "albm1067.mp3" },
            { "nombre": "Stiffy - SIEMPRE FUMO PORRO", "archivo": "albm1068.mp3" },
            { "nombre": "Stiffy - WACHA LOCA", "archivo": "albm1069.mp3" },
            { "nombre": "Stiffy - WACKAFLOKA", "archivo": "albm1070.mp3" },
            { "nombre": "Stiffy, AGUSFORTNITE2008 - CON PEDRO Y CON LA DROGA", "archivo": "albm1071.mp3" },
            { "nombre": "Stiffy, AGUSFORTNITE2008 - QUIERE PENE", "archivo": "albm1072.mp3" },
            { "nombre": "Stiffy, Rojuu - AMNESIA", "archivo": "albm1073.mp3" },
            { "nombre": "Stiffy, TURROBABY, ZELL, AGUSFORTNITE2008 - BABASONICO", "archivo": "albm1074.mp3" }
        ]
    },
    {
        "name": "Sentimental Gangster 2",
        "cover": COVERS_BASE_URL + "img_sentimentalgn2.png",
        "songs": [
            { "nombre": "Jugo! - Desde cba", "archivo": "albm1075.mp3" },
            { "nombre": "Jugo! - Es una obsesion", "archivo": "albm1076.mp3" },
            { "nombre": "Jugo! - Esto es transitorio", "archivo": "albm1077.mp3" },
            { "nombre": "Jugo! - Maradona", "archivo": "albm1078.mp3" },
            { "nombre": "Jugo! - Me neutralice", "archivo": "albm1079.mp3" },
            { "nombre": "Jugo! - Sube la sintonia", "archivo": "albm1080.mp3" },
            { "nombre": "Jugo! - Tengo que hacerlo", "archivo": "albm1081.mp3" },
            { "nombre": "Jugo! - Un solo cable", "archivo": "albm1082.mp3" },
            { "nombre": "Jugo! - Nunca me vire", "archivo": "albm1083.mp3" },
            { "nombre": "Jugo! - Todo el año", "archivo": "albm1084.mp3" },
            { "nombre": "Jugo! , Cluster - Nos retiene el estado", "archivo": "albm1085.mp3" },
            { "nombre": "Jugo! , enzocerobulto - Musicalmente", "archivo": "albm1086.mp3" },
            { "nombre": "Jugo! , YSY A - Todo el dia en el trap", "archivo": "albm1087.mp3" },
            { "nombre": "Jugo!, bic - Hard", "archivo": "albm1088.mp3" },
            { "nombre": "Jugo!, Emirsito, Frozouda - Parece que entreno", "archivo": "albm1089.mp3" },
            { "nombre": "Jugo!, Emirsito, Mhtresuno - Estimulos", "archivo": "albm1090.mp3" },
            { "nombre": "Jugo!, LuchoSSJ, KNAK - Reviento el spot", "archivo": "albm1091.mp3" },
            { "nombre": "Jugo!, Neo Pistea - Quieren aparentar", "archivo": "albm1092.mp3" },
            { "nombre": "Jugo!, pabloxo - Nunca va a ser igual el esfuerzo", "archivo": "albm1093.mp3" },
            { "nombre": "Jugo!, TURROBABY - Zafiros", "archivo": "albm1094.mp3" }
        ]
    },
    {
        "name": "PERNOCTANDO EN EL BALCON",
        "cover": COVERS_BASE_URL + "img_pernoctando.png",
        "songs": [
            { "nombre": "AFKgoat - ASI DE DESCONFIADO", "archivo": "albm1095.mp3" },
            { "nombre": "AFKgoat - ASI NO", "archivo": "albm1096.mp3" },
            { "nombre": "AFKgoat - BANCAR EL PARCHE", "archivo": "albm1097.mp3" },
            { "nombre": "AFKgoat - HACERME TRAICIONAR", "archivo": "albm1098.mp3" },
            { "nombre": "AFKgoat - PERNOCTANDO EN EL BALCON", "archivo": "albm1099.mp3" },
            { "nombre": "AFKgoat, cero  - ME QUEMAN LOS DEDOS", "archivo": "albm1100.mp3" }
        ]
    },
    {
        "name": "La Ultima Gota",
        "cover": COVERS_BASE_URL + "img_ultimagota.png",
        "songs": [
            { "nombre": "enzocerobulto - Como Lastima", "archivo": "albm1101.mp3" },
            { "nombre": "enzocerobulto - En donde", "archivo": "albm1102.mp3" },
            { "nombre": "enzocerobulto - Como se lo hago", "archivo": "albm1103.mp3" },
            { "nombre": "enzocerobulto - De vuelta", "archivo": "albm1104.mp3" },
            { "nombre": "enzocerobulto - Diez en la trampa", "archivo": "albm1105.mp3" },
            { "nombre": "enzocerobulto - Lo que fumo lo que tomo", "archivo": "albm1106.mp3" },
            { "nombre": "enzocerobulto - Quien tiene la mirada mas cansada", "archivo": "albm1107.mp3" },
            { "nombre": "enzocerobulto - De capital al Sifon", "archivo": "albm1108.mp3" },
            { "nombre": "enzocerobulto - Falsa tu cara de Cristo", "archivo": "albm1109.mp3" },
            { "nombre": "enzocerobulto - Hasta que termine el dia", "archivo": "albm1110.mp3" },
            { "nombre": "enzocerobulto - una tira", "archivo": "albm1111.mp3" },
            { "nombre": "enzocerobulto - Mi computadora", "archivo": "albm1112.mp3" }
        ]
    },
    {
        "name": "otramasdelpablo",
        "cover": COVERS_BASE_URL + "img_pablo.png",
        "songs": [
            { "nombre": "pabloxo - Astigmatismo", "archivo": "albm1113.mp3" },
            { "nombre": "pabloxo - dB", "archivo": "albm1114.mp3" },
            { "nombre": "pabloxo - dosydos", "archivo": "albm1115.mp3" },
            { "nombre": "pabloxo - Fajos de 20 mil", "archivo": "albm1116.mp3" },
            { "nombre": "pabloxo - Fumando en los clubes", "archivo": "albm1117.mp3" },
            { "nombre": "pabloxo - lo hago x mi", "archivo": "albm1118.mp3" },
            { "nombre": "pabloxo - no son dos f son clones", "archivo": "albm1119.mp3" },
            { "nombre": "pabloxo - Porrible", "archivo": "albm1120.mp3" },
            { "nombre": "pabloxo - Una mas por mis amigos", "archivo": "albm1121.mp3" },
            { "nombre": "pabloxo, Frozouda - Time Break", "archivo": "albm1122.mp3" },
            { "nombre": "pabloxo, Hwii - PABLOXO", "archivo": "albm1123.mp3" }
        ]
    },
    {
        "name": "mecae",
        "cover": COVERS_BASE_URL + "img_mecae.png",
        "songs": [
            { "nombre": "cero - 5velas", "archivo": "albm1124.mp3" },
            { "nombre": "cero - 10g", "archivo": "albm1125.mp3" },
            { "nombre": "cero - 1234", "archivo": "albm1126.mp3" },
            { "nombre": "cero - a correr", "archivo": "albm1127.mp3" },
            { "nombre": "cero - como roe", "archivo": "albm1128.mp3" },
            { "nombre": "cero - Con frio y calor", "archivo": "albm1129.mp3" },
            { "nombre": "cero - Ella", "archivo": "albm1130.mp3" },
            { "nombre": "cero - huida", "archivo": "albm1131.mp3" },
            { "nombre": "cero - las otras victorias quedan chicas con lo que te anhelo", "archivo": "albm1132.mp3" },
            { "nombre": "cero - Plata dolida", "archivo": "albm1133.mp3" },
            { "nombre": "cero - Plata tarada", "archivo": "albm1134.mp3" },
            { "nombre": "cero - Sonajero", "archivo": "albm1135.mp3" },
            { "nombre": "cero - t2o", "archivo": "albm1136.mp3" },
            { "nombre": "cero - xq soy el villano", "archivo": "albm1137.mp3" },
            { "nombre": "cero, enzocerobulto - De concierto en concierto", "archivo": "albm1138.mp3" },
            { "nombre": "cero, huntr - a donde vas¿", "archivo": "albm1139.mp3" },
            { "nombre": "cero, Jugo! - YeA 2", "archivo": "albm1140.mp3" },
            { "nombre": "cero, pabloxo - oki", "archivo": "albm1141.mp3" }
        ]
    },
    {
        "name": "foe",
        "cover": COVERS_BASE_URL + "img_foe.png",
        "songs": [
            { "nombre": "cero - +personal", "archivo": "albm1142.mp3" },
            { "nombre": "cero, TURROBABY - a solas", "archivo": "albm1143.mp3" },
            { "nombre": "cero, underaiki - sisu", "archivo": "albm1144.mp3" },
            { "nombre": "cero - toco madera", "archivo": "albm1145.mp3" },
            { "nombre": "cero - 1-2", "archivo": "albm1146.mp3" },
            { "nombre": "cero, knak - TOA", "archivo": "albm1147.mp3" },
            { "nombre": "cero - foe", "archivo": "albm1148.mp3" }
        ]
    },
    {
        "name": "mecanico",
        "cover": COVERS_BASE_URL + "img_mecanico.png",
        "songs": [
            { "nombre": "cero - 2 Sedas", "archivo": "albm1149.mp3" },
            { "nombre": "cero - Cabra", "archivo": "albm1150.mp3" },
            { "nombre": "cero - De moda", "archivo": "albm1151.mp3" },
            { "nombre": "cero - DEAM", "archivo": "albm1152.mp3" },
            { "nombre": "cero - Drumkits en el pantalon", "archivo": "albm1153.mp3" },
            { "nombre": "cero - Locomotora", "archivo": "albm1154.mp3" },
            { "nombre": "cero - Mr wow", "archivo": "albm1155.mp3" },
            { "nombre": "cero - Sin ayuda", "archivo": "albm1156.mp3" },
            { "nombre": "cero - t & p", "archivo": "albm1157.mp3" },
            { "nombre": "cero - t", "archivo": "albm1158.mp3" },
            { "nombre": "cero - Vicky", "archivo": "albm1159.mp3" },
            { "nombre": "cero - Ye A", "archivo": "albm1160.mp3" },
            { "nombre": "cero, Doly Flackko - Peine teta", "archivo": "albm1161.mp3" },
            { "nombre": "cero, Jugo! - Voy a hacer historia", "archivo": "albm1162.mp3" },
            { "nombre": "cero, Lthelizard - Jakaranda", "archivo": "albm1163.mp3" },
            { "nombre": "cero, Sixup - Palo", "archivo": "albm1164.mp3" }
        ]
    },
    {
        "name": "Piola Vago",
        "cover": COVERS_BASE_URL + "img_piola.png",
        "songs": [
            { "nombre": "Doly Flackko - Veneno", "archivo": "albm1165.mp3" },
            { "nombre": "Doly Flackko - Uber", "archivo": "albm1166.mp3" },
            { "nombre": "Doly Flackko - TRES TRISTES TIGUERES", "archivo": "albm1167.mp3" },
            { "nombre": "Doly Flackko - Street Pain", "archivo": "albm1168.mp3" },
            { "nombre": "Doly Flackko - PIOLA VAGO", "archivo": "albm1169.mp3" },
            { "nombre": "Doly Flackko - Pala Ancha", "archivo": "albm1170.mp3" },
            { "nombre": "Doly Flackko - Outro Chau", "archivo": "albm1171.mp3" },
            { "nombre": "Doly Flackko - Flackkosito", "archivo": "albm1172.mp3" },
            { "nombre": "Doly Flackko - donde queres estar", "archivo": "albm1173.mp3" },
            { "nombre": "Doly Flackko - Delirio de Grandeza", "archivo": "albm1174.mp3" },
            { "nombre": "Doly Flackko - Ambicion & Adrenalina", "archivo": "albm1175.mp3" }
        ]
    },
    {
        "name": "El Morfón",
        "cover": COVERS_BASE_URL + "img_morfon.png",
        "songs": [
            { "nombre": "eluney benedetti, TULO13 - Che", "archivo": "albm1176.mp3" },
            { "nombre": "eluney benedetti, elaiyah - Idioma", "archivo": "albm1177.mp3" },
            { "nombre": "eluney benedetti - aYvamo", "archivo": "albm1178.mp3" },
            { "nombre": "eluney benedetti, elaiyah - Los3", "archivo": "albm1179.mp3" },
            { "nombre": "eluney benedetti, TULO13 - Che", "archivo": "albm1180.mp3" },
            { "nombre": "eluney benedetti, elaiyah - A los palomos", "archivo": "albm1181.mp3" },
            { "nombre": "eluney benedetti, elaiyah - El morfon", "archivo": "albm1182.mp3" }
        ]
    },
    {
        "name": "Pekelandia",
        "cover": COVERS_BASE_URL + "img_pekelandia.png",
        "songs": [
            { "nombre": "CHOOSEY, Yvng Jorge - Le TOTO", "archivo": "albm1183.mp3" },
            { "nombre": "CHOOSEY, n0tgiova - DON ROKE", "archivo": "albm1184.mp3" },
            { "nombre": "CHOOSEY, DLANG - DE MAS DE MI", "archivo": "albm1185.mp3" },
            { "nombre": "CHOOSEY - X Belgrano", "archivo": "albm1186.mp3" },
            { "nombre": "CHOOSEY - SIGAN SIN MI", "archivo": "albm1187.mp3" },
            { "nombre": "CHOOSEY - ROMPEDISKOTECA", "archivo": "albm1188.mp3" },
            { "nombre": "CHOOSEY - QUE CONCHA QUERES", "archivo": "albm1189.mp3" },
            { "nombre": "CHOOSEY - pero CHATGPT", "archivo": "albm1190.mp3" },
            { "nombre": "CHOOSEY - ORISHINAL", "archivo": "albm1191.mp3" },
            { "nombre": "CHOOSEY - MI NUMERO TELEFONICO", "archivo": "albm1192.mp3" },
            { "nombre": "CHOOSEY - mi AUTOMOVIL", "archivo": "albm1193.mp3" },
            { "nombre": "CHOOSEY - DITOYS", "archivo": "albm1194.mp3" },
            { "nombre": "CHOOSEY - CARS BEAT", "archivo": "albm1195.mp3" },
            { "nombre": "CHOOSEY - BANCO", "archivo": "albm1196.mp3" },
            { "nombre": "CHOOSEY - 100 LUCHA", "archivo": "albm1197.mp3" },
            { "nombre": "CHOOSEY - 3 MONITOS", "archivo": "albm1198.mp3" },
            { "nombre": "CHOOSEY - 2 SAMPLEOS", "archivo": "albm1199.mp3" },
            { "nombre": "CHOOSEY - 1-2 groupie", "archivo": "albm1200.mp3" }
        ]
    }
];
