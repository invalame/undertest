const WORKER_URL = "https://underless-audio.heladoposting.workers.dev/";
const COVERS_BASE_URL = "./covers/";
const biblioteca = [
    {
        "nombre": "143LETI - En mis sueños soy tu novia",
        "archivo": "143LETI - En mis sueños soy tu novia.mp3"
    },
    {
        "nombre": "143LETI - EU TE AMO",
        "archivo": "143LETI - EU TE AMO.mp3"
    },
    {
        "nombre": "143LETI, VALUTO  - COSAS QUE ESTAN MAL",
        "archivo": "143LETI, VALUTO  - COSAS QUE ESTAN MAL.mp3"
    },
    {
        "nombre": "2UU!, Asan - CELOSA",
        "archivo": "2UU!, Asan - CELOSA.mp3"
    },
    {
        "nombre": "2UU!, enzocerobulto, Jugo!, Soowney - ESO QUERE TULI",
        "archivo": "2UU!, enzocerobulto, Jugo!, Soowney - ESO QUERE TULI.mp3"
    },
    {
        "nombre": "2UU!, turrobaby - LA GATA GOZA",
        "archivo": "2UU!, turrobaby - LA GATA GOZA.mp3"
    },
    {
        "nombre": "AFKgoat - 1VUELTAINTERMINABLE",
        "archivo": "AFKgoat - 1VUELTAINTERMINABLE.mp3"
    },
    {
        "nombre": "AFKgoat - ASI NO",
        "archivo": "AFKgoat - ASI NO.mp3"
    },
    {
        "nombre": "AFKgoat - OSLAVA",
        "archivo": "AFKgoat - OSLAVA.mp3"
    },
    {
        "nombre": "AFKgoat - Te caigo mas tarde",
        "archivo": "AFKgoat - Te caigo mas tarde.mp3"
    },
    {
        "nombre": "AFKgoat, cero  - ME QUEMAN LOS DEDOS",
        "archivo": "AFKgoat, cero  - ME QUEMAN LOS DEDOS.mp3"
    },
    {
        "nombre": "AFKgoat- DEFRENTEMAL",
        "archivo": "AFKgoat- DEFRENTEMAL.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - FLEKO",
        "archivo": "AGUSFORTNITE2008 - FLEKO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - PASO",
        "archivo": "AGUSFORTNITE2008 - PASO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - SWAGGEANDO EN EL BANDO",
        "archivo": "AGUSFORTNITE2008 - SWAGGEANDO EN EL BANDO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - 24 7",
        "archivo": "AGUSFORTNITE2008, Stiffy - 24 7.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, STIFFY - CUANDO QUIERO",
        "archivo": "AGUSFORTNITE2008, STIFFY - CUANDO QUIERO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, STIFFY - DISTINTO",
        "archivo": "AGUSFORTNITE2008, STIFFY - DISTINTO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, STIFFY - GOFUE",
        "archivo": "AGUSFORTNITE2008, STIFFY - GOFUE.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - GUISO",
        "archivo": "AGUSFORTNITE2008, Stiffy - GUISO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - MUSICA DE ASCENSOR",
        "archivo": "AGUSFORTNITE2008, Stiffy - MUSICA DE ASCENSOR.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - PIE EN LA PISTA",
        "archivo": "AGUSFORTNITE2008, Stiffy - PIE EN LA PISTA.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, NEO PISTEA - MEJORALITO",
        "archivo": "AGUSFORTNITE2008, Stiffy, NEO PISTEA - MEJORALITO.mp3"
    },
    {
        "nombre": "bic - letal",
        "archivo": "bic - letal.mp3"
    },
    {
        "nombre": "bic - mis maneras",
        "archivo": "bic - mis maneras.mp3"
    },
    {
        "nombre": "bic - phone off",
        "archivo": "bic - phone off.mp3"
    },
    {
        "nombre": "Blagh  - GET IT UP",
        "archivo": "Blagh  - GET IT UP.mp3"
    },
    {
        "nombre": "Blagh  - High",
        "archivo": "Blagh  - High.mp3"
    },
    {
        "nombre": "Blagh  - No Loyalty",
        "archivo": "Blagh  - No Loyalty.mp3"
    },
    {
        "nombre": "Blagh - 2013",
        "archivo": "Blagh - 2013.mp3"
    },
    {
        "nombre": "Blagh - Toxico",
        "archivo": "Blagh - Toxico.mp3"
    },
    {
        "nombre": "Blagh, Agush  - TIBURON",
        "archivo": "Blagh, Agush  - TIBURON.mp3"
    },
    {
        "nombre": "Blagh, Agush - sex",
        "archivo": "Blagh, Agush - sex.mp3"
    },
    {
        "nombre": "cero - 1234",
        "archivo": "cero - 1234.mp3"
    },
    {
        "nombre": "cero - como roe",
        "archivo": "cero - como roe.mp3"
    },
    {
        "nombre": "cero - Con frio y calor",
        "archivo": "cero - Con frio y calor.mp3"
    },
    {
        "nombre": "cero - De moda",
        "archivo": "cero - De moda.mp3"
    },
    {
        "nombre": "Cero - Mr wow",
        "archivo": "Cero - Mr wow.mp3"
    },
    {
        "nombre": "Cero - Sonajero",
        "archivo": "Cero - Sonajero.mp3"
    },
    {
        "nombre": "cero - t2o",
        "archivo": "cero - t2o.mp3"
    },
    {
        "nombre": "cero - xq soy el villano",
        "archivo": "cero - xq soy el villano.mp3"
    },
    {
        "nombre": "cero, enzocerobulto - De concierto en concierto",
        "archivo": "cero, enzocerobulto - De concierto en concierto.mp3"
    },
    {
        "nombre": "cero, knak - TOA",
        "archivo": "cero, knak - TOA.mp3"
    },
    {
        "nombre": "cero, TURROBABY - Slat",
        "archivo": "cero, TURROBABY - Slat.mp3"
    },
    {
        "nombre": "Chiki Wanted - que es el under",
        "archivo": "Chiki Wanted - que es el under.mp3"
    },
    {
        "nombre": "CHOOSEY , STIFFY - BeastieBoyZZZ",
        "archivo": "CHOOSEY , STIFFY - BeastieBoyZZZ.mp3"
    },
    {
        "nombre": "CHOOSEY - 1-2 groupie",
        "archivo": "CHOOSEY - 1-2 groupie.mp3"
    },
    {
        "nombre": "CHOOSEY - 100 LUCHA",
        "archivo": "CHOOSEY - 100 LUCHA.mp3"
    },
    {
        "nombre": "CHOOSEY - 2 SAMPLEOS",
        "archivo": "CHOOSEY - 2 SAMPLEOS.mp3"
    },
    {
        "nombre": "CHOOSEY - ADOPTA POSES",
        "archivo": "CHOOSEY - ADOPTA POSES.mp3"
    },
    {
        "nombre": "CHOOSEY - ROMPEDISKOTECA",
        "archivo": "CHOOSEY - ROMPEDISKOTECA.mp3"
    },
    {
        "nombre": "CHOOSEY - SI NO ME CONOCES",
        "archivo": "CHOOSEY - SI NO ME CONOCES.mp3"
    },
    {
        "nombre": "Cluster - Muy imbecil",
        "archivo": "Cluster - Muy imbecil.mp3"
    },
    {
        "nombre": "Cluster, Doly Flackko - OREO",
        "archivo": "Cluster, Doly Flackko - OREO.mp3"
    },
    {
        "nombre": "Cluster, Duki - aGaRRo La PLaTa",
        "archivo": "Cluster, Duki - aGaRRo La PLaTa.mp3"
    },
    {
        "nombre": "Cluster, Frozouda - TOP 1 CHARTS",
        "archivo": "Cluster, Frozouda - TOP 1 CHARTS.mp3"
    },
    {
        "nombre": "Cluster, Pabloxo - OTRA SEDA",
        "archivo": "Cluster, Pabloxo - OTRA SEDA.mp3"
    },
    {
        "nombre": "cybernene, TURROBABY - LEANCOLN REMIX",
        "archivo": "cybernene, TURROBABY - LEANCOLN REMIX.mp3"
    },
    {
        "nombre": "Doly Flackko - LEGENDARIO",
        "archivo": "Doly Flackko - LEGENDARIO.mp3"
    },
    {
        "nombre": "Doly Flackko - PIOLA VAGO",
        "archivo": "Doly Flackko - PIOLA VAGO.mp3"
    },
    {
        "nombre": "Doly Flackko - TRES TRISTES TIGUERES",
        "archivo": "Doly Flackko - TRES TRISTES TIGUERES.mp3"
    },
    {
        "nombre": "Doly Flackko - Uber",
        "archivo": "Doly Flackko - Uber.mp3"
    },
    {
        "nombre": "EL DOCTOR - STARBOY",
        "archivo": "EL DOCTOR - STARBOY.mp3"
    },
    {
        "nombre": "elchombapolo - CHIQUI TAPIA",
        "archivo": "elchombapolo - CHIQUI TAPIA.mp3"
    },
    {
        "nombre": "elchombapolo - el under me chupa la pija",
        "archivo": "elchombapolo - el under me chupa la pija.mp3"
    },
    {
        "nombre": "elchombapolo - Estoy En Tu Cesped",
        "archivo": "elchombapolo - Estoy En Tu Cesped.mp3"
    },
    {
        "nombre": "elchombapolo - UN OSO WACHO",
        "archivo": "elchombapolo - UN OSO WACHO.mp3"
    },
    {
        "nombre": "enzocerobulto - Falsa tu cara de Cristo",
        "archivo": "enzocerobulto - Falsa tu cara de Cristo.mp3"
    },
    {
        "nombre": "enzocerobulto - Hasta que termine el dia",
        "archivo": "enzocerobulto - Hasta que termine el dia.mp3"
    },
    {
        "nombre": "enzocerobulto - Ocupado en mi droga",
        "archivo": "enzocerobulto - Ocupado en mi droga.mp3"
    },
    {
        "nombre": "enzocerobulto - Un banger tras otro",
        "archivo": "enzocerobulto - Un banger tras otro.mp3"
    },
    {
        "nombre": "enzocerobulto - una tira",
        "archivo": "enzocerobulto - una tira.mp3"
    },
    {
        "nombre": "enzocerobulto, 2UU! - Tanta plata",
        "archivo": "enzocerobulto, 2UU! - Tanta plata.mp3"
    },
    {
        "nombre": "enzocerobulto, panchitolefleur - Por un cuarto",
        "archivo": "enzocerobulto, panchitolefleur - Por un cuarto.mp3"
    },
    {
        "nombre": "Francis Jeremy, Banatroll - Skibidi Toilet",
        "archivo": "Francis Jeremy, Banatroll - Skibidi Toilet.mp3"
    },
    {
        "nombre": "Frozouda , Cero , Cluster - plinko",
        "archivo": "Frozouda , Cero , Cluster - plinko.mp3"
    },
    {
        "nombre": "Frozouda - doble F con visa",
        "archivo": "Frozouda - doble F con visa.mp3"
    },
    {
        "nombre": "Frozouda - fumamos una ZAZA",
        "archivo": "Frozouda - fumamos una ZAZA.mp3"
    },
    {
        "nombre": "Frozouda - GAS O PORRO",
        "archivo": "Frozouda - GAS O PORRO.mp3"
    },
    {
        "nombre": "Frozouda - hot money",
        "archivo": "Frozouda - hot money.mp3"
    },
    {
        "nombre": "Frozouda - mi RACE",
        "archivo": "Frozouda - mi RACE.mp3"
    },
    {
        "nombre": "Frozouda - nicki nicole",
        "archivo": "Frozouda - nicki nicole.mp3"
    },
    {
        "nombre": "Frozouda - quitate las BAPE",
        "archivo": "Frozouda - quitate las BAPE.mp3"
    },
    {
        "nombre": "Frozouda - quitate los Jeans",
        "archivo": "Frozouda - quitate los Jeans.mp3"
    },
    {
        "nombre": "Frozouda - tatiana !",
        "archivo": "Frozouda - tatiana !.mp3"
    },
    {
        "nombre": "Frozouda - TOP !",
        "archivo": "Frozouda - TOP !.mp3"
    },
    {
        "nombre": "Frozouda - un goat siempre esta busy",
        "archivo": "Frozouda - un goat siempre esta busy.mp3"
    },
    {
        "nombre": "Frozouda, Cluster - hot box",
        "archivo": "Frozouda, Cluster - hot box.mp3"
    },
    {
        "nombre": "Frozouda, Jugo!, KNAK - chirlito",
        "archivo": "Frozouda, Jugo!, KNAK - chirlito.mp3"
    },
    {
        "nombre": "Hepa - Batman",
        "archivo": "Hepa - Batman.mp3"
    },
    {
        "nombre": "Hepa - Cuando estas high",
        "archivo": "Hepa - Cuando estas high.mp3"
    },
    {
        "nombre": "Hepa - Lovestar",
        "archivo": "Hepa - Lovestar.mp3"
    },
    {
        "nombre": "Hepa - Sintonizame",
        "archivo": "Hepa - Sintonizame.mp3"
    },
    {
        "nombre": "Hepa - Varios Puntos",
        "archivo": "Hepa - Varios Puntos.mp3"
    },
    {
        "nombre": "huntr - baby boo",
        "archivo": "huntr - baby boo.mp3"
    },
    {
        "nombre": "huntr - esta va porque te quiero",
        "archivo": "huntr - esta va porque te quiero.mp3"
    },
    {
        "nombre": "huntr - partydanc3",
        "archivo": "huntr - partydanc3.mp3"
    },
    {
        "nombre": "ISMA - 2037",
        "archivo": "ISMA - 2037.mp3"
    },
    {
        "nombre": "ISMA - Antes del Amanecer",
        "archivo": "ISMA - Antes del Amanecer.mp3"
    },
    {
        "nombre": "ISMA - Cuanto va a pasar",
        "archivo": "ISMA - Cuanto va a pasar.mp3"
    },
    {
        "nombre": "ISMA, LOLO  - CUAL ES TU PLAN",
        "archivo": "ISMA, LOLO  - CUAL ES TU PLAN.mp3"
    },
    {
        "nombre": "jovenalien - ME PASO LA SEMANA",
        "archivo": "jovenalien - ME PASO LA SEMANA.mp3"
    },
    {
        "nombre": "jovenalien - No vale la pena enojarse",
        "archivo": "jovenalien - No vale la pena enojarse.mp3"
    },
    {
        "nombre": "jovenalien - tengo hambre",
        "archivo": "jovenalien - tengo hambre.mp3"
    },
    {
        "nombre": "Jugo! , Cluster - Nos retiene el estado",
        "archivo": "Jugo! , Cluster - Nos retiene el estado.mp3"
    },
    {
        "nombre": "Jugo! , enzocerobulto - Musicalmente",
        "archivo": "Jugo! , enzocerobulto - Musicalmente.mp3"
    },
    {
        "nombre": "Jugo! , YSY A - Todo el dia en el trap",
        "archivo": "Jugo! , YSY A - Todo el dia en el trap.mp3"
    },
    {
        "nombre": "Jugo!, salas flaco - Desfile",
        "archivo": "Jugo!, salas flaco - Desfile.mp3"
    },
    {
        "nombre": "KERCHAK, Cluster - No Me Pienso Demorar",
        "archivo": "KERCHAK, Cluster - No Me Pienso Demorar.mp3"
    },
    {
        "nombre": "KERCHAK - Viviendo Al Corte",
        "archivo": "KERCHAK - Viviendo Al Corte.mp3"
    },
    {
        "nombre": "KERCHAK, Cluster - Una Noche Con Los Tios 2",
        "archivo": "KERCHAK, Cluster - Una Noche Con Los Tios 2.mp3"
    },
    {
        "nombre": "KERCHAK, enzocerobulto - Chamuyo Habilidoso",
        "archivo": "KERCHAK, enzocerobulto - Chamuyo Habilidoso.mp3"
    },
    {
        "nombre": "KERCHAK, PANCHITOLEFLEUR - ANOTHER NIGHT WITH THE UNCLE",
        "archivo": "KERCHAK, PANCHITOLEFLEUR - ANOTHER NIGHT WITH THE UNCLE.mp3"
    },
    {
        "nombre": "KERCHAK, PANCHITOLEFLEUR - Tamo a Full",
        "archivo": "KERCHAK, PANCHITOLEFLEUR - Tamo a Full.mp3"
    },
    {
        "nombre": "KERCHAK, TURROBABY, Cluster, Tuw4 - Un picadito",
        "archivo": "KERCHAK, TURROBABY, Cluster, Tuw4 - Un picadito.mp3"
    },
    {
        "nombre": "laura sad - chupavrga",
        "archivo": "laura sad - chupavrga.mp3"
    },
    {
        "nombre": "laura sad - i Laurie",
        "archivo": "laura sad - i Laurie.mp3"
    },
    {
        "nombre": "laura sad, LOLO - Joseador Boy",
        "archivo": "laura sad, LOLO - Joseador Boy.mp3"
    },
    {
        "nombre": "laura sad, MAGNESIO - Perdon Mama",
        "archivo": "laura sad, MAGNESIO - Perdon Mama.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - CLICK CLACK",
        "archivo": "LITTLE BOOGIE - CLICK CLACK.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - COMPA LO HICIMOS",
        "archivo": "LITTLE BOOGIE - COMPA LO HICIMOS.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - DANDO CLASE",
        "archivo": "LITTLE BOOGIE - DANDO CLASE.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - DEJA DE SUFRIR",
        "archivo": "LITTLE BOOGIE - DEJA DE SUFRIR.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - LITTLE BOOGIE VS EL GOBIERNO",
        "archivo": "LITTLE BOOGIE - LITTLE BOOGIE VS EL GOBIERNO.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - LOS DEL BOHIO",
        "archivo": "LITTLE BOOGIE - LOS DEL BOHIO.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - OKUPAS",
        "archivo": "LITTLE BOOGIE - OKUPAS.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - TODO BIEN TODO CHETO",
        "archivo": "LITTLE BOOGIE - TODO BIEN TODO CHETO.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, DOLY FLACKKO - EL MUNDO ES MIO",
        "archivo": "LITTLE BOOGIE, DOLY FLACKKO - EL MUNDO ES MIO.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR - BILLIE JEAN",
        "archivo": "LITTLE BOOGIE, EL DOCTOR - BILLIE JEAN.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR, RUSHERKING - SOY FAMOSO Y TENGO PLATA",
        "archivo": "LITTLE BOOGIE, EL DOCTOR, RUSHERKING - SOY FAMOSO Y TENGO PLATA.mp3"
    },
    {
        "nombre": "LOLO , BANATROLL - HAZ MAS DINERO",
        "archivo": "LOLO , BANATROLL - HAZ MAS DINERO.mp3"
    },
    {
        "nombre": "LOLO , BANATROLL - TOY GANADO",
        "archivo": "LOLO , BANATROLL - TOY GANADO.mp3"
    },
    {
        "nombre": "LOLO , CHOOSEY - QUE PUEDE PASAR",
        "archivo": "LOLO , CHOOSEY - QUE PUEDE PASAR.mp3"
    },
    {
        "nombre": "LOLO - A TU MODO",
        "archivo": "LOLO - A TU MODO.mp3"
    },
    {
        "nombre": "LOLO - EMILIA MERNES",
        "archivo": "LOLO - EMILIA MERNES.mp3"
    },
    {
        "nombre": "LOLO - FERNET HIELO",
        "archivo": "LOLO - FERNET HIELO.mp3"
    },
    {
        "nombre": "LOLO - GASTEMOS MAS",
        "archivo": "LOLO - GASTEMOS MAS.mp3"
    },
    {
        "nombre": "LOLO - HATER",
        "archivo": "LOLO - HATER.mp3"
    },
    {
        "nombre": "LOLO - HOY SI QUEMO",
        "archivo": "LOLO - HOY SI QUEMO.mp3"
    },
    {
        "nombre": "LOLO - MINI LOLO",
        "archivo": "LOLO - MINI LOLO.mp3"
    },
    {
        "nombre": "LOLO - OSCUROoOo",
        "archivo": "LOLO - OSCUROoOo.mp3"
    },
    {
        "nombre": "LOLO - QUIEN FUE",
        "archivo": "LOLO - QUIEN FUE.mp3"
    },
    {
        "nombre": "LOLO - YO RAPERO ELLA DELANTERA",
        "archivo": "LOLO - YO RAPERO ELLA DELANTERA.mp3"
    },
    {
        "nombre": "LOLO, 143LETI - LUNES A VIERNES",
        "archivo": "LOLO, 143LETI - LUNES A VIERNES.mp3"
    },
    {
        "nombre": "MAGNESIO - MAS LENTO",
        "archivo": "MAGNESIO - MAS LENTO.mp3"
    },
    {
        "nombre": "MAGNESIO - OLLA POPULAR",
        "archivo": "MAGNESIO - OLLA POPULAR.mp3"
    },
    {
        "nombre": "MAGNESIO - WING WANG WOW",
        "archivo": "MAGNESIO - WING WANG WOW.mp3"
    },
    {
        "nombre": "MAGNESIO - ZLATAN",
        "archivo": "MAGNESIO - ZLATAN.mp3"
    },
    {
        "nombre": "MAGNESIO, White! - GOKU",
        "archivo": "MAGNESIO, White! - GOKU.mp3"
    },
    {
        "nombre": "Matias Fisher - Muerte en Halloween",
        "archivo": "Matias Fisher - Muerte en Halloween.mp3"
    },
    {
        "nombre": "Nykoo0 - Anorexico",
        "archivo": "Nykoo0 - Anorexico.mp3"
    },
    {
        "nombre": "Nykoo0 - Que sabes de amor",
        "archivo": "Nykoo0 - Que sabes de amor.mp3"
    },
    {
        "nombre": "pa2k, cero - Rn",
        "archivo": "pa2k, cero - Rn.mp3"
    },
    {
        "nombre": "pa2k, cero - yEye",
        "archivo": "pa2k, cero - yEye.mp3"
    },
    {
        "nombre": "pa2k, enzocerobulto - BOYFRIEND",
        "archivo": "pa2k, enzocerobulto - BOYFRIEND.mp3"
    },
    {
        "nombre": "pa2k, enzocerobulto - RIGHT NOW",
        "archivo": "pa2k, enzocerobulto - RIGHT NOW.mp3"
    },
    {
        "nombre": "pabloxo - dosydos",
        "archivo": "pabloxo - dosydos.mp3"
    },
    {
        "nombre": "pabloxo - lo hago x mi",
        "archivo": "pabloxo - lo hago x mi.mp3"
    },
    {
        "nombre": "pabloxo - no son dos f son clones",
        "archivo": "pabloxo - no son dos f son clones.mp3"
    },
    {
        "nombre": "PANKKY - FREEHOMMIES",
        "archivo": "PANKKY - FREEHOMMIES.mp3"
    },
    {
        "nombre": "PANKKY - GLOPETA",
        "archivo": "PANKKY - GLOPETA.mp3"
    },
    {
        "nombre": "PANKKY - TELL ME",
        "archivo": "PANKKY - TELL ME.mp3"
    },
    {
        "nombre": "papirola - sos mi papirola",
        "archivo": "papirola - sos mi papirola.mp3"
    },
    {
        "nombre": "salas flaco - PANICO ESCENICO",
        "archivo": "salas flaco - PANICO ESCENICO.mp3"
    },
    {
        "nombre": "salas flaco - Por Argentina",
        "archivo": "salas flaco - Por Argentina.mp3"
    },
    {
        "nombre": "salas flaco - TAN MALA",
        "archivo": "salas flaco - TAN MALA.mp3"
    },
    {
        "nombre": "salas flaco, Bhavi, Asan - EL DINERO DE INTERNET",
        "archivo": "salas flaco, Bhavi, Asan - EL DINERO DE INTERNET.mp3"
    },
    {
        "nombre": "Shako , Jugo! - Medio Tana",
        "archivo": "Shako , Jugo! - Medio Tana.mp3"
    },
    {
        "nombre": "Shako - 4eva",
        "archivo": "Shako - 4eva.mp3"
    },
    {
        "nombre": "Shako - Amigdalas",
        "archivo": "Shako - Amigdalas.mp3"
    },
    {
        "nombre": "Shako - Hotel",
        "archivo": "Shako - Hotel.mp3"
    },
    {
        "nombre": "Shako - RACKLESS",
        "archivo": "Shako - RACKLESS.mp3"
    },
    {
        "nombre": "Shako - vas a ver el alma mula",
        "archivo": "Shako - vas a ver el alma mula.mp3"
    },
    {
        "nombre": "Shako, Bhavi, Seven Kayne - K.O",
        "archivo": "Shako, Bhavi, Seven Kayne - K.O.mp3"
    },
    {
        "nombre": "SixUp - Anti",
        "archivo": "SixUp - Anti.mp3"
    },
    {
        "nombre": "SixUp - DobleVaso",
        "archivo": "SixUp - DobleVaso.mp3"
    },
    {
        "nombre": "SixUp - TikiTime",
        "archivo": "SixUp - TikiTime.mp3"
    },
    {
        "nombre": "SixUp - TripleVaso",
        "archivo": "SixUp - TripleVaso.mp3"
    },
    {
        "nombre": "Stiffy - FARANDULERO",
        "archivo": "Stiffy - FARANDULERO.mp3"
    },
    {
        "nombre": "Stiffy - GUAP",
        "archivo": "Stiffy - GUAP.mp3"
    },
    {
        "nombre": "Stiffy - GUASO BALLS Z",
        "archivo": "Stiffy - GUASO BALLS Z.mp3"
    },
    {
        "nombre": "Stiffy - MECHINSTRONGAS",
        "archivo": "Stiffy - MECHINSTRONGAS.mp3"
    },
    {
        "nombre": "Stiffy - NO ES LO QUE PENSAS",
        "archivo": "Stiffy - NO ES LO QUE PENSAS.mp3"
    },
    {
        "nombre": "Stiffy - NO LA CUELGO",
        "archivo": "Stiffy - NO LA CUELGO.mp3"
    },
    {
        "nombre": "Stiffy - SANDRO",
        "archivo": "Stiffy - SANDRO.mp3"
    },
    {
        "nombre": "Stiffy - SWAG DE SOSA",
        "archivo": "Stiffy - SWAG DE SOSA.mp3"
    },
    {
        "nombre": "Stiffy, Agusfortnite2008 - AFIP",
        "archivo": "Stiffy, Agusfortnite2008 - AFIP.mp3"
    },
    {
        "nombre": "Stiffy, AGUSFORTNITE2008 - QUIERE PENE",
        "archivo": "Stiffy, AGUSFORTNITE2008 - QUIERE PENE.mp3"
    },
    {
        "nombre": "Stiffy, Jon Z - COMO ANTES",
        "archivo": "Stiffy, Jon Z - COMO ANTES.mp3"
    },
    {
        "nombre": "Stiffy, Rojuu - AMNESIA",
        "archivo": "Stiffy, Rojuu - AMNESIA.mp3"
    },
    {
        "nombre": "STIFFY, TURROBABY, ZELL, AGUSFORTNITE2008 - BABASONICO",
        "archivo": "STIFFY, TURROBABY, ZELL, AGUSFORTNITE2008 - BABASONICO.mp3"
    },
    {
        "nombre": "TURROBABY - 2017",
        "archivo": "TURROBABY - 2017.mp3"
    },
    {
        "nombre": "TURROBABY - Aca y Alla y En Todos Lados",
        "archivo": "TURROBABY - Aca y Alla y En Todos Lados.mp3"
    },
    {
        "nombre": "TURROBABY - Bajo El Sol",
        "archivo": "TURROBABY - Bajo El Sol.mp3"
    },
    {
        "nombre": "TURROBABY - COLOMBIANA HOODTRAP",
        "archivo": "TURROBABY - COLOMBIANA HOODTRAP.mp3"
    },
    {
        "nombre": "TURROBABY - Cornudo Consciente",
        "archivo": "TURROBABY - Cornudo Consciente.mp3"
    },
    {
        "nombre": "TURROBABY - Filmemos Una Peli",
        "archivo": "TURROBABY - Filmemos Una Peli.mp3"
    },
    {
        "nombre": "TURROBABY - Sergio Massa",
        "archivo": "TURROBABY - Sergio Massa.mp3"
    },
    {
        "nombre": "TURROBABY - SIMO VIANI",
        "archivo": "TURROBABY - SIMO VIANI.mp3"
    },
    {
        "nombre": "TURROBABY - Wacha Flequilluda",
        "archivo": "TURROBABY - Wacha Flequilluda.mp3"
    },
    {
        "nombre": "TURROBABY - YPF",
        "archivo": "TURROBABY - YPF.mp3"
    },
    {
        "nombre": "TURROBABY, Bhavi - Parabrisas",
        "archivo": "TURROBABY, Bhavi - Parabrisas.mp3"
    },
    {
        "nombre": "TURROBABY, Doble P - ANTO ROCUZZO",
        "archivo": "TURROBABY, Doble P - ANTO ROCUZZO.mp3"
    },
    {
        "nombre": "TURROBABY, enzocerobulto - Las Seis",
        "archivo": "TURROBABY, enzocerobulto - Las Seis.mp3"
    },
    {
        "nombre": "TURROBABY, Lolo OG - Lovebombing",
        "archivo": "TURROBABY, Lolo OG - Lovebombing.mp3"
    },
    {
        "nombre": "TURROBABY, Stiffy - PENDEJO ATREVIDO",
        "archivo": "TURROBABY, Stiffy - PENDEJO ATREVIDO.mp3"
    },
    {
        "nombre": "TURROBABY, ZELL - Inter De Miami",
        "archivo": "TURROBABY, ZELL - Inter De Miami.mp3"
    },
    {
        "nombre": "TURROBABY, ZELL, Stiffy - Cara De Boludo",
        "archivo": "TURROBABY, ZELL, Stiffy - Cara De Boludo.mp3"
    },
    {
        "nombre": "vahel - .",
        "archivo": "vahel - ..mp3"
    },
    {
        "nombre": "vahel - PLAN B",
        "archivo": "vahel - PLAN B.mp3"
    },
    {
        "nombre": "vahel - tunel",
        "archivo": "vahel - tunel.mp3"
    },
    {
        "nombre": "vahel, pachudani - loquita",
        "archivo": "vahel, pachudani - loquita.mp3"
    },
    {
        "nombre": "White! - FR",
        "archivo": "White! - FR.mp3"
    },
    {
        "nombre": "White! - No lo intentes en tu home",
        "archivo": "White! - No lo intentes en tu home.mp3"
    },
    {
        "nombre": "White! - X - RAY",
        "archivo": "White! - X - RAY.mp3"
    },
    {
        "nombre": "White!, magnesio - Shen Long",
        "archivo": "White!, magnesio - Shen Long.mp3"
    },
    {
        "nombre": "Zell - ballin de verdad",
        "archivo": "Zell - ballin de verdad.mp3"
    },
    {
        "nombre": "Zell - Ballin",
        "archivo": "Zell - Ballin.mp3"
    },
    {
        "nombre": "Zell - calvin klein",
        "archivo": "Zell - calvin klein.mp3"
    },
    {
        "nombre": "Zell - diva",
        "archivo": "Zell - diva.mp3"
    },
    {
        "nombre": "Zell - iceberg",
        "archivo": "Zell - iceberg.mp3"
    },
    {
        "nombre": "Zell - iPhone",
        "archivo": "Zell - iPhone.mp3"
    },
    {
        "nombre": "Zell - Joven Ballin",
        "archivo": "Zell - Joven Ballin.mp3"
    },
    {
        "nombre": "Zell - piso 3",
        "archivo": "Zell - piso 3.mp3"
    },
    {
        "nombre": "Zell - Ritual",
        "archivo": "Zell - Ritual.mp3"
    },
    {
        "nombre": "Zell - Starboy",
        "archivo": "Zell - Starboy.mp3"
    },
    {
        "nombre": "Zell - stripper",
        "archivo": "Zell - stripper.mp3"
    },
    {
        "nombre": "Zell - Uber",
        "archivo": "Zell - Uber.mp3"
    },
    {
        "nombre": "Zell - vamonos",
        "archivo": "Zell - vamonos.mp3"
    },
    {
        "nombre": "Zell - webcam",
        "archivo": "Zell - webcam.mp3"
    },
    {
        "nombre": "Zell - Whats Up",
        "archivo": "Zell - Whats Up.mp3"
    },
    {
        "nombre": "Zell, KNAK - ZiploK",
        "archivo": "Zell, KNAK - ZiploK.mp3"
    },
    {
        "nombre": "Zell, Tiago PZK - xq te enamoraste",
        "archivo": "Zell, Tiago PZK - xq te enamoraste.mp3"
    },
    {
        "nombre": "LOLO - OG KUSH",
        "archivo": "LOLO - OG KUSH.mp3"
    },
    {
        "nombre": "MAGNESIO - COKER",
        "archivo": "MAGNESIO - COKER.mp3"
    },
    {
        "nombre": "PILF - TANTA GIRA",
        "archivo": "PILF - TANTA GIRA.mp3"
    },
    {
        "nombre": "PILF - HIT",
        "archivo": "PILF - HIT.mp3"
    },
    {
        "nombre": "PILF - FUMO UNO FUMO DOS",
        "archivo": "PILF - FUMO UNO FUMO DOS.mp3"
    },
    {
        "nombre": "PILF - ENTRO A LA CANCHA",
        "archivo": "PILF - ENTRO A LA CANCHA.mp3"
    },
    {
        "nombre": "Zell, KNAK - Me Da Igual",
        "archivo": "Zell, KNAK - Me Da Igual.mp3"
    },
    {
        "nombre": "TURROBABY - Toda La Plata",
        "archivo": "TURROBABY - Toda La Plata.mp3"
    },
    {
        "nombre": "Red Shine, MAGNESIO - ELDEN RING",
        "archivo": "Red Shine, MAGNESIO - ELDEN RING.mp3"
    },
    {
        "nombre": "TURROBABY, LITTLE BOOGIE - Emotes",
        "archivo": "TURROBABY, LITTLE BOOGIE - Emotes.mp3"
    },
    /*
    {
        "nombre": "",
        "archivo": ""
    },
    */

];

const bibliotecaArtist = [
    {
        "nombre": "143LETI - En mis sueños soy tu novia",
        "archivo": "musicartist/143LETI - En mis sueños soy tu novia.mp3"
    },
    {
        "nombre": "143LETI - EU TE AMO",
        "archivo": "musicartist/143LETI - EU TE AMO.mp3"
    },
    {
        "nombre": "143LETI, VALUTO  - COSAS QUE ESTAN MAL",
        "archivo": "musicartist/143LETI, VALUTO  - COSAS QUE ESTAN MAL.mp3"
    },
    {
        "nombre": "2UU! - PEPSI",
        "archivo": "musicartist/2UU! - PEPSI.mp3"
    },
    {
        "nombre": "2UU! - vuelve a mi",
        "archivo": "musicartist/2UU! - vuelve a mi.mp3"
    },
    {
        "nombre": "2UU! - WORLDWIDE",
        "archivo": "musicartist/2UU! - WORLDWIDE.mp3"
    },
    {
        "nombre": "2UU!, Asan - CELOSA",
        "archivo": "musicartist/2UU!, Asan - CELOSA.mp3"
    },
    {
        "nombre": "2UU!, ELUNEYBENEDETTI - TARADA",
        "archivo": "musicartist/2UU!, ELUNEYBENEDETTI - TARADA.mp3"
    },
    {
        "nombre": "2UU!, enzocerobulto - PALMERA",
        "archivo": "musicartist/2UU!, enzocerobulto - PALMERA.mp3"
    },
    {
        "nombre": "2UU!, enzocerobulto, Jugo!, Soowney - ESO QUERE TULI",
        "archivo": "musicartist/2UU!, enzocerobulto, Jugo!, Soowney - ESO QUERE TULI.mp3"
    },
    {
        "nombre": "2UU!, enzocerobulto, SKIIDY, TULO13 - Promesas sobre el bidet",
        "archivo": "musicartist/2UU!, enzocerobulto, SKIIDY, TULO13 - Promesas sobre el bidet.mp3"
    },
    {
        "nombre": "2UU!, LTHELIZARD - FERRAGAMO",
        "archivo": "musicartist/2UU!, LTHELIZARD - FERRAGAMO.mp3"
    },
    {
        "nombre": "2UU!, TULO13 - 2 DIAS",
        "archivo": "musicartist/2UU!, TULO13 - 2 DIAS.mp3"
    },
    {
        "nombre": "2UU!, TULO13 - GREENDAY",
        "archivo": "musicartist/2UU!, TULO13 - GREENDAY.mp3"
    },
    {
        "nombre": "2UU!, turrobaby - LA GATA GOZA",
        "archivo": "musicartist/2UU!, turrobaby - LA GATA GOZA.mp3"
    },
    {
        "nombre": "AFKgoat - 1VUELTAINTERMINABLE",
        "archivo": "musicartist/AFKgoat - 1VUELTAINTERMINABLE.mp3"
    },
    {
        "nombre": "AFKgoat - ASI DE DESCONFIADO",
        "archivo": "musicartist/AFKgoat - ASI DE DESCONFIADO.mp3"
    },
    {
        "nombre": "AFKgoat - ASI NO",
        "archivo": "musicartist/AFKgoat - ASI NO.mp3"
    },
    {
        "nombre": "AFKgoat - BANCAR EL PARCHE",
        "archivo": "musicartist/AFKgoat - BANCAR EL PARCHE.mp3"
    },
    {
        "nombre": "AFKgoat - HACERME TRAICIONAR",
        "archivo": "musicartist/AFKgoat - HACERME TRAICIONAR.mp3"
    },
    {
        "nombre": "AFKgoat - OSLAVA",
        "archivo": "musicartist/AFKgoat - OSLAVA.mp3"
    },
    {
        "nombre": "AFKgoat - PERNOCTANDO EN EL BALCON",
        "archivo": "musicartist/AFKgoat - PERNOCTANDO EN EL BALCON.mp3"
    },
    {
        "nombre": "AFKgoat - Te caigo mas tarde",
        "archivo": "musicartist/AFKgoat - Te caigo mas tarde.mp3"
    },
    {
        "nombre": "AFKgoat, cero  - ME QUEMAN LOS DEDOS",
        "archivo": "musicartist/AFKgoat, cero  - ME QUEMAN LOS DEDOS.mp3"
    },
    {
        "nombre": "AFKgoat- DEFRENTEMAL",
        "archivo": "musicartist/AFKgoat- DEFRENTEMAL.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - ELLA ME LLAMA",
        "archivo": "musicartist/AGUSFORTNITE2008 - ELLA ME LLAMA.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - FLEKO",
        "archivo": "musicartist/AGUSFORTNITE2008 - FLEKO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - HOTEL EN HOTEL",
        "archivo": "musicartist/AGUSFORTNITE2008 - HOTEL EN HOTEL.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - LOS HAGO CONCHA",
        "archivo": "musicartist/AGUSFORTNITE2008 - LOS HAGO CONCHA.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - PASO",
        "archivo": "musicartist/AGUSFORTNITE2008 - PASO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - SWAGGEANDO EN EL BANDO",
        "archivo": "musicartist/AGUSFORTNITE2008 - SWAGGEANDO EN EL BANDO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - VUELVO A FUMAR",
        "archivo": "musicartist/AGUSFORTNITE2008 - VUELVO A FUMAR.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - 24 7",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - 24 7.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - 8 JEANS",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - 8 JEANS.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - CUANDO QUIERO",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - CUANDO QUIERO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - DESDE LOS 14",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - DESDE LOS 14.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - DISTINTO",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - DISTINTO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - GOFUE",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - GOFUE.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - GUISO",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - GUISO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - MEJORES HOES",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - MEJORES HOES.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - MUSICA DE ASCENSOR",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - MUSICA DE ASCENSOR.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - PIE EN LA PISTA",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - PIE EN LA PISTA.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - TRES PATITOS",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - TRES PATITOS.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, DILLOM - EL MOROCHO EL RUBIO Y EL COLO",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy, DILLOM - EL MOROCHO EL RUBIO Y EL COLO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, Joshu Joshu - Jesus Escucha Plug",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy, Joshu Joshu - Jesus Escucha Plug.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, NEO PISTEA - MEJORALITO",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy, NEO PISTEA - MEJORALITO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - PETER GRIFFIN",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - PETER GRIFFIN.mp3"
    },
    {
        "nombre": "Banatroll - CAMIONETA",
        "archivo": "musicartist/Banatroll - CAMIONETA.mp3"
    },
    {
        "nombre": "Banatroll - GTA 6 RAP",
        "archivo": "musicartist/Banatroll - GTA 6 RAP.mp3"
    },
    {
        "nombre": "Banatroll - MONTAGEM DUBAI (Slowed)",
        "archivo": "musicartist/Banatroll - MONTAGEM DUBAI (Slowed).mp3"
    },
    {
        "nombre": "Banatroll - OUTLAST RAP",
        "archivo": "musicartist/Banatroll - OUTLAST RAP.mp3"
    },
    {
        "nombre": "Banatroll - RAP DE PEDIR LOS PUNTOS",
        "archivo": "musicartist/Banatroll - RAP DE PEDIR LOS PUNTOS.mp3"
    },
    {
        "nombre": "Banatroll - Rap del Hornet",
        "archivo": "musicartist/Banatroll - Rap del Hornet.mp3"
    },
    {
        "nombre": "Banatroll - RIP RESIDENTE",
        "archivo": "musicartist/Banatroll - RIP RESIDENTE.mp3"
    },
    {
        "nombre": "Banatroll - SUBWAY",
        "archivo": "musicartist/Banatroll - SUBWAY.mp3"
    },
    {
        "nombre": "Banatroll - TOY DE PARTY",
        "archivo": "musicartist/Banatroll - TOY DE PARTY.mp3"
    },
    {
        "nombre": "Banatroll, Francis Jeremy - SKIBIDI TOILET REMIX",
        "archivo": "musicartist/Banatroll, Francis Jeremy - SKIBIDI TOILET REMIX.mp3"
    },
    {
        "nombre": "Banatroll, LOLO - CALIFORNIA",
        "archivo": "musicartist/Banatroll, LOLO - CALIFORNIA.mp3"
    },
    {
        "nombre": "Banatroll, LOLO - KULEANDO NARKOS",
        "archivo": "musicartist/Banatroll, LOLO - KULEANDO NARKOS.mp3"
    },
    {
        "nombre": "Banatroll, LOLO- soy un virgen",
        "archivo": "musicartist/Banatroll, LOLO- soy un virgen.mp3"
    },
    {
        "nombre": "Banatroll, zEkO - GUERRA FUNK (Slowed)",
        "archivo": "musicartist/Banatroll, zEkO - GUERRA FUNK (Slowed).mp3"
    },
    {
        "nombre": "bic - letal",
        "archivo": "musicartist/bic - letal.mp3"
    },
    {
        "nombre": "bic - mis maneras",
        "archivo": "musicartist/bic - mis maneras.mp3"
    },
    {
        "nombre": "bic - phone off",
        "archivo": "musicartist/bic - phone off.mp3"
    },
    {
        "nombre": "bic, Jugo! - paintball",
        "archivo": "musicartist/bic, Jugo! - paintball.mp3"
    },
    {
        "nombre": "Blagh  - GET IT UP",
        "archivo": "musicartist/Blagh  - GET IT UP.mp3"
    },
    {
        "nombre": "Blagh  - High",
        "archivo": "musicartist/Blagh  - High.mp3"
    },
    {
        "nombre": "Blagh  - No Loyalty",
        "archivo": "musicartist/Blagh  - No Loyalty.mp3"
    },
    {
        "nombre": "Blagh  - Purple",
        "archivo": "musicartist/Blagh  - Purple.mp3"
    },
    {
        "nombre": "Blagh - 2013",
        "archivo": "musicartist/Blagh - 2013.mp3"
    },
    {
        "nombre": "Blagh - Leave Me Alone",
        "archivo": "musicartist/Blagh - Leave Me Alone.mp3"
    },
    {
        "nombre": "Blagh - Priceless",
        "archivo": "musicartist/Blagh - Priceless.mp3"
    },
    {
        "nombre": "Blagh - Safe Room",
        "archivo": "musicartist/Blagh - Safe Room.mp3"
    },
    {
        "nombre": "Blagh - Toxico",
        "archivo": "musicartist/Blagh - Toxico.mp3"
    },
    {
        "nombre": "Blagh, Agush  - TIBURON",
        "archivo": "musicartist/Blagh, Agush  - TIBURON.mp3"
    },
    {
        "nombre": "Blagh, Agush - sex",
        "archivo": "musicartist/Blagh, Agush - sex.mp3"
    },
    {
        "nombre": "Blagh, ISMA - Particular",
        "archivo": "musicartist/Blagh, ISMA - Particular.mp3"
    },
    {
        "nombre": "Blagh, KKAFU - TE ROBO",
        "archivo": "musicartist/Blagh, KKAFU - TE ROBO.mp3"
    },
    {
        "nombre": "cero - 1234",
        "archivo": "musicartist/cero - 1234.mp3"
    },
    {
        "nombre": "cero - como roe",
        "archivo": "musicartist/cero - como roe.mp3"
    },
    {
        "nombre": "cero - Con frio y calor",
        "archivo": "musicartist/cero - Con frio y calor.mp3"
    },
    {
        "nombre": "cero - De moda",
        "archivo": "musicartist/cero - De moda.mp3"
    },
    {
        "nombre": "cero - DEAM",
        "archivo": "musicartist/cero - DEAM.mp3"
    },
    {
        "nombre": "cero - Mr wow",
        "archivo": "musicartist/cero - Mr wow.mp3"
    },
    {
        "nombre": "cero - Sonajero",
        "archivo": "musicartist/cero - Sonajero.mp3"
    },
    {
        "nombre": "cero - t2o",
        "archivo": "musicartist/cero - t2o.mp3"
    },
    {
        "nombre": "cero - Vicky",
        "archivo": "musicartist/cero - Vicky.mp3"
    },
    {
        "nombre": "cero - xq soy el villano",
        "archivo": "musicartist/cero - xq soy el villano.mp3"
    },
    {
        "nombre": "cero, enzocerobulto - De concierto en concierto",
        "archivo": "musicartist/cero, enzocerobulto - De concierto en concierto.mp3"
    },
    {
        "nombre": "cero, knak - TOA",
        "archivo": "musicartist/cero, knak - TOA.mp3"
    },
    {
        "nombre": "cero, TURROBABY - Slat",
        "archivo": "musicartist/cero, TURROBABY - Slat.mp3"
    },
    {
        "nombre": "Chiki Wanted - que es el under",
        "archivo": "musicartist/Chiki Wanted - que es el under.mp3"
    },
    {
        "nombre": "CHOOSEY , Stiffy - BeastieBoyZZZ",
        "archivo": "musicartist/CHOOSEY , Stiffy - BeastieBoyZZZ.mp3"
    },
    {
        "nombre": "CHOOSEY - 1-2 groupie",
        "archivo": "musicartist/CHOOSEY - 1-2 groupie.mp3"
    },
    {
        "nombre": "CHOOSEY - 100 LUCHA",
        "archivo": "musicartist/CHOOSEY - 100 LUCHA.mp3"
    },
    {
        "nombre": "CHOOSEY - 2 SAMPLEOS",
        "archivo": "musicartist/CHOOSEY - 2 SAMPLEOS.mp3"
    },
    {
        "nombre": "CHOOSEY - ADOPTA POSES",
        "archivo": "musicartist/CHOOSEY - ADOPTA POSES.mp3"
    },
    {
        "nombre": "CHOOSEY - CARS BEAT",
        "archivo": "musicartist/CHOOSEY - CARS BEAT.mp3"
    },
    {
        "nombre": "CHOOSEY - mi AUTOMOVIL",
        "archivo": "musicartist/CHOOSEY - mi AUTOMOVIL.mp3"
    },
    {
        "nombre": "CHOOSEY - MI NUMERO TELEFONICO",
        "archivo": "musicartist/CHOOSEY - MI NUMERO TELEFONICO.mp3"
    },
    {
        "nombre": "CHOOSEY - NDQV",
        "archivo": "musicartist/CHOOSEY - NDQV.mp3"
    },
    {
        "nombre": "CHOOSEY - pero CHATGPT",
        "archivo": "musicartist/CHOOSEY - pero CHATGPT.mp3"
    },
    {
        "nombre": "CHOOSEY - Prod Pimpinela",
        "archivo": "musicartist/CHOOSEY - Prod Pimpinela.mp3"
    },
    {
        "nombre": "CHOOSEY - ROMPEDISKOTECA",
        "archivo": "musicartist/CHOOSEY - ROMPEDISKOTECA.mp3"
    },
    {
        "nombre": "CHOOSEY - SI NO ME CONOCES",
        "archivo": "musicartist/CHOOSEY - SI NO ME CONOCES.mp3"
    },
    {
        "nombre": "CHOOSEY, DLANG - DE MAS DE MI",
        "archivo": "musicartist/CHOOSEY, DLANG - DE MAS DE MI.mp3"
    },
    {
        "nombre": "Cluster - Gucci Mane en la traphouse",
        "archivo": "musicartist/Cluster - Gucci Mane en la traphouse.mp3"
    },
    {
        "nombre": "Cluster - JEFFES",
        "archivo": "musicartist/Cluster - JEFFES.mp3"
    },
    {
        "nombre": "Cluster - Levanto el tubo",
        "archivo": "musicartist/Cluster - Levanto el tubo.mp3"
    },
    {
        "nombre": "Cluster - Muy imbecil",
        "archivo": "musicartist/Cluster - Muy imbecil.mp3"
    },
    {
        "nombre": "Cluster, Aleezok - CARGO",
        "archivo": "musicartist/Cluster, Aleezok - CARGO.mp3"
    },
    {
        "nombre": "Cluster, Doly Flackko - OREO",
        "archivo": "musicartist/Cluster, Doly Flackko - OREO.mp3"
    },
    {
        "nombre": "Cluster, Duki - aGaRRo La PLaTa",
        "archivo": "musicartist/Cluster, Duki - aGaRRo La PLaTa.mp3"
    },
    {
        "nombre": "Cluster, enzocerobulto - FFumando",
        "archivo": "musicartist/Cluster, enzocerobulto - FFumando.mp3"
    },
    {
        "nombre": "Cluster, Francis Jeremy - MUY IMBECIL",
        "archivo": "musicartist/Cluster, Francis Jeremy - MUY IMBECIL.mp3"
    },
    {
        "nombre": "Cluster, Frozouda - TOP 1 CHARTS",
        "archivo": "musicartist/Cluster, Frozouda - TOP 1 CHARTS.mp3"
    },
    {
        "nombre": "Cluster, Pabloxo - OTRA SEDA",
        "archivo": "musicartist/Cluster, Pabloxo - OTRA SEDA.mp3"
    },
    {
        "nombre": "Cluster- EL COLO",
        "archivo": "musicartist/Cluster- EL COLO.mp3"
    },
    {
        "nombre": "cybernene - DIAMANTES",
        "archivo": "musicartist/cybernene - DIAMANTES.mp3"
    },
    {
        "nombre": "cybernene - MTGA",
        "archivo": "musicartist/cybernene - MTGA.mp3"
    },
    {
        "nombre": "cybernene - PRIMERA DAMA (CYBERSEXO)",
        "archivo": "musicartist/cybernene - PRIMERA DAMA (CYBERSEXO).mp3"
    },
    {
        "nombre": "cybernene - WHITE WIDOW HOUSE",
        "archivo": "musicartist/cybernene - WHITE WIDOW HOUSE.mp3"
    },
    {
        "nombre": "cybernene, 8belial - LOUD BONUS TRACK",
        "archivo": "musicartist/cybernene, 8belial - LOUD BONUS TRACK.mp3"
    },
    {
        "nombre": "cybernene, roomtrash6 - KENNEDY",
        "archivo": "musicartist/cybernene, roomtrash6 - KENNEDY.mp3"
    },
    {
        "nombre": "cybernene, roomtrash6 - MEJOR NO",
        "archivo": "musicartist/cybernene, roomtrash6 - MEJOR NO.mp3"
    },
    {
        "nombre": "cybernene, roomtrash6, yyy891, 8belial - ENVIDIA",
        "archivo": "musicartist/cybernene, roomtrash6, yyy891, 8belial - ENVIDIA.mp3"
    },
    {
        "nombre": "cybernene, TURROBABY - LEANCOLN REMIX",
        "archivo": "musicartist/cybernene, TURROBABY - LEANCOLN REMIX.mp3"
    },
    {
        "nombre": "Doly Flackko - LEGENDARIO",
        "archivo": "musicartist/Doly Flackko - LEGENDARIO.mp3"
    },
    {
        "nombre": "Doly Flackko - PIOLA VAGO",
        "archivo": "musicartist/Doly Flackko - PIOLA VAGO.mp3"
    },
    {
        "nombre": "Doly Flackko - TRES TRISTES TIGUERES",
        "archivo": "musicartist/Doly Flackko - TRES TRISTES TIGUERES.mp3"
    },
    {
        "nombre": "Doly Flackko - Uber",
        "archivo": "musicartist/Doly Flackko - Uber.mp3"
    },
    {
        "nombre": "EL DOCTOR - DIDDY",
        "archivo": "musicartist/EL DOCTOR - DIDDY.mp3"
    },
    {
        "nombre": "EL DOCTOR - LA SEPARACION",
        "archivo": "musicartist/EL DOCTOR - LA SEPARACION.mp3"
    },
    {
        "nombre": "EL DOCTOR - LOS QUE SON MAS ATREVIDOS",
        "archivo": "musicartist/EL DOCTOR - LOS QUE SON MAS ATREVIDOS.mp3"
    },
    {
        "nombre": "EL DOCTOR - RESCATE UNA METRA",
        "archivo": "musicartist/EL DOCTOR - RESCATE UNA METRA.mp3"
    },
    {
        "nombre": "EL DOCTOR - STARBOY",
        "archivo": "musicartist/EL DOCTOR - STARBOY.mp3"
    },
    {
        "nombre": "EL DOCTOR, CHILI PARKER - VELORIO",
        "archivo": "musicartist/EL DOCTOR, CHILI PARKER - VELORIO.mp3"
    },
    {
        "nombre": "EL DOCTOR, FALA FABIO - BARCELONA 90",
        "archivo": "musicartist/EL DOCTOR, FALA FABIO - BARCELONA 90.mp3"
    },
    {
        "nombre": "EL DOCTOR, FOYONE - PA QUE NO PASES HAMBRE",
        "archivo": "musicartist/EL DOCTOR, FOYONE - PA QUE NO PASES HAMBRE.mp3"
    },
    {
        "nombre": "EL DOCTOR, Homer El Mero Mero - Adelantado",
        "archivo": "musicartist/EL DOCTOR, Homer El Mero Mero - Adelantado.mp3"
    },
    {
        "nombre": "EL DOCTOR, TURROBABY - LA TIENE",
        "archivo": "musicartist/EL DOCTOR, TURROBABY - LA TIENE.mp3"
    },
    {
        "nombre": "elchombapolo - CHAIN  FREESTYLE",
        "archivo": "musicartist/elchombapolo - CHAIN  FREESTYLE.mp3"
    },
    {
        "nombre": "elchombapolo - CHIQUI TAPIA",
        "archivo": "musicartist/elchombapolo - CHIQUI TAPIA.mp3"
    },
    {
        "nombre": "elchombapolo - EL PISO ES LABURO",
        "archivo": "musicartist/elchombapolo - EL PISO ES LABURO.mp3"
    },
    {
        "nombre": "elchombapolo - el under me chupa la pija",
        "archivo": "musicartist/elchombapolo - el under me chupa la pija.mp3"
    },
    {
        "nombre": "elchombapolo - ESTA PERRA ESTA LOCA",
        "archivo": "musicartist/elchombapolo - ESTA PERRA ESTA LOCA.mp3"
    },
    {
        "nombre": "elchombapolo - Estoy En Tu Cesped",
        "archivo": "musicartist/elchombapolo - Estoy En Tu Cesped.mp3"
    },
    {
        "nombre": "elchombapolo - LA PREGUNTA",
        "archivo": "musicartist/elchombapolo - LA PREGUNTA.mp3"
    },
    {
        "nombre": "elchombapolo - SAL AFUERA Y JOSEA",
        "archivo": "musicartist/elchombapolo - SAL AFUERA Y JOSEA.mp3"
    },
    {
        "nombre": "elchombapolo - SIX SEVEN",
        "archivo": "musicartist/elchombapolo - SIX SEVEN.mp3"
    },
    {
        "nombre": "elchombapolo - TE LA RIFASTE FERNANDO",
        "archivo": "musicartist/elchombapolo - TE LA RIFASTE FERNANDO.mp3"
    },
    {
        "nombre": "elchombapolo - UN OSO WACHO",
        "archivo": "musicartist/elchombapolo - UN OSO WACHO.mp3"
    },
    {
        "nombre": "enzocerobulto - Ahora y mas tarde",
        "archivo": "musicartist/enzocerobulto - Ahora y mas tarde.mp3"
    },
    {
        "nombre": "enzocerobulto - Cada vez mas",
        "archivo": "musicartist/enzocerobulto - Cada vez mas.mp3"
    },
    {
        "nombre": "enzocerobulto - De capital al Sifon",
        "archivo": "musicartist/enzocerobulto - De capital al Sifon.mp3"
    },
    {
        "nombre": "enzocerobulto - Es humo no es vapor",
        "archivo": "musicartist/enzocerobulto - Es humo no es vapor.mp3"
    },
    {
        "nombre": "enzocerobulto - Esta nota",
        "archivo": "musicartist/enzocerobulto - Esta nota.mp3"
    },
    {
        "nombre": "enzocerobulto - Falsa tu cara de Cristo",
        "archivo": "musicartist/enzocerobulto - Falsa tu cara de Cristo.mp3"
    },
    {
        "nombre": "enzocerobulto - Hasta que termine el dia",
        "archivo": "musicartist/enzocerobulto - Hasta que termine el dia.mp3"
    },
    {
        "nombre": "enzocerobulto - Mitad",
        "archivo": "musicartist/enzocerobulto - Mitad.mp3"
    },
    {
        "nombre": "enzocerobulto - Ocupado en mi droga",
        "archivo": "musicartist/enzocerobulto - Ocupado en mi droga.mp3"
    },
    {
        "nombre": "enzocerobulto - perdiendo",
        "archivo": "musicartist/enzocerobulto - perdiendo.mp3"
    },
    {
        "nombre": "enzocerobulto - Por las nubes",
        "archivo": "musicartist/enzocerobulto - Por las nubes.mp3"
    },
    {
        "nombre": "enzocerobulto - Un banger tras otro",
        "archivo": "musicartist/enzocerobulto - Un banger tras otro.mp3"
    },
    {
        "nombre": "enzocerobulto - una tira",
        "archivo": "musicartist/enzocerobulto - una tira.mp3"
    },
    {
        "nombre": "enzocerobulto - Vos y yo!",
        "archivo": "musicartist/enzocerobulto - Vos y yo!.mp3"
    },
    {
        "nombre": "enzocerobulto, 2UU! - Tanta plata",
        "archivo": "musicartist/enzocerobulto, 2UU! - Tanta plata.mp3"
    },
    {
        "nombre": "enzocerobulto, eluney - ying yang",
        "archivo": "musicartist/enzocerobulto, eluney - ying yang.mp3"
    },
    {
        "nombre": "enzocerobulto, panchitolefleur - Por un cuarto",
        "archivo": "musicartist/enzocerobulto, panchitolefleur - Por un cuarto.mp3"
    },
    {
        "nombre": "Francis Jeremy - BIGGEST PLAYERS",
        "archivo": "musicartist/Francis Jeremy - BIGGEST PLAYERS.mp3"
    },
    {
        "nombre": "Francis Jeremy - CUMPLEAÑOS DEL MEJOR RAPERO EN URUGUAY",
        "archivo": "musicartist/Francis Jeremy - CUMPLEAÑOS DEL MEJOR RAPERO EN URUGUAY.mp3"
    },
    {
        "nombre": "Francis Jeremy - NEGRA DE MIERDA",
        "archivo": "musicartist/Francis Jeremy - NEGRA DE MIERDA.mp3"
    },
    {
        "nombre": "Francis Jeremy - RIP SURF Y RIP SURFISTAS",
        "archivo": "musicartist/Francis Jeremy - RIP SURF Y RIP SURFISTAS.mp3"
    },
    {
        "nombre": "Francis Jeremy - SAYAGLO",
        "archivo": "musicartist/Francis Jeremy - SAYAGLO.mp3"
    },
    {
        "nombre": "Francis Jeremy - YO LE DIJE WEPA UEPA!",
        "archivo": "musicartist/Francis Jeremy - YO LE DIJE WEPA UEPA!.mp3"
    },
    {
        "nombre": "Francis Jeremy, Banatroll - Skibidi Toilet",
        "archivo": "musicartist/Francis Jeremy, Banatroll - Skibidi Toilet.mp3"
    },
    {
        "nombre": "Francis Jeremy, Doly Flackko  - SAYAGO Y RIO GALLEGOS",
        "archivo": "musicartist/Francis Jeremy, Doly Flackko  - SAYAGO Y RIO GALLEGOS.mp3"
    },
    {
        "nombre": "Francis Jeremy, enzocerobulto - DEUCOTOS",
        "archivo": "musicartist/Francis Jeremy, enzocerobulto - DEUCOTOS.mp3"
    },
    {
        "nombre": "Francis Jeremy, Komp - MILAGROSA X SAYAGO",
        "archivo": "musicartist/Francis Jeremy, Komp - MILAGROSA X SAYAGO.mp3"
    },
    {
        "nombre": "Francis Jeremy, underaiki - BLUE DREAM",
        "archivo": "musicartist/Francis Jeremy, underaiki - BLUE DREAM.mp3"
    },
    {
        "nombre": "Frozouda , Cero , Cluster - plinko",
        "archivo": "musicartist/Frozouda , Cero , Cluster - plinko.mp3"
    },
    {
        "nombre": "Frozouda - doble F con visa",
        "archivo": "musicartist/Frozouda - doble F con visa.mp3"
    },
    {
        "nombre": "Frozouda - fumamos una ZAZA",
        "archivo": "musicartist/Frozouda - fumamos una ZAZA.mp3"
    },
    {
        "nombre": "Frozouda - GAS O PORRO",
        "archivo": "musicartist/Frozouda - GAS O PORRO.mp3"
    },
    {
        "nombre": "Frozouda - hot money",
        "archivo": "musicartist/Frozouda - hot money.mp3"
    },
    {
        "nombre": "Frozouda - mi RACE",
        "archivo": "musicartist/Frozouda - mi RACE.mp3"
    },
    {
        "nombre": "Frozouda - nicki nicole",
        "archivo": "musicartist/Frozouda - nicki nicole.mp3"
    },
    {
        "nombre": "Frozouda - quitate las BAPE",
        "archivo": "musicartist/Frozouda - quitate las BAPE.mp3"
    },
    {
        "nombre": "Frozouda - quitate los Jeans",
        "archivo": "musicartist/Frozouda - quitate los Jeans.mp3"
    },
    {
        "nombre": "Frozouda - tatiana !",
        "archivo": "musicartist/Frozouda - tatiana !.mp3"
    },
    {
        "nombre": "Frozouda - TOP !",
        "archivo": "musicartist/Frozouda - TOP !.mp3"
    },
    {
        "nombre": "Frozouda - un goat siempre esta busy",
        "archivo": "musicartist/Frozouda - un goat siempre esta busy.mp3"
    },
    {
        "nombre": "Frozouda, Cluster - hot box",
        "archivo": "musicartist/Frozouda, Cluster - hot box.mp3"
    },
    {
        "nombre": "Frozouda, Jugo!, KNAK - chirlito",
        "archivo": "musicartist/Frozouda, Jugo!, KNAK - chirlito.mp3"
    },
    {
        "nombre": "Hepa - Batman",
        "archivo": "musicartist/Hepa - Batman.mp3"
    },
    {
        "nombre": "Hepa - Carlos Padilla",
        "archivo": "musicartist/Hepa - Carlos Padilla.mp3"
    },
    {
        "nombre": "Hepa - Con mi cousin",
        "archivo": "musicartist/Hepa - Con mi cousin.mp3"
    },
    {
        "nombre": "Hepa - Cuando estas high",
        "archivo": "musicartist/Hepa - Cuando estas high.mp3"
    },
    {
        "nombre": "Hepa - Lovestar",
        "archivo": "musicartist/Hepa - Lovestar.mp3"
    },
    {
        "nombre": "Hepa - Pepe Argento",
        "archivo": "musicartist/Hepa - Pepe Argento.mp3"
    },
    {
        "nombre": "Hepa - Sintonizame",
        "archivo": "musicartist/Hepa - Sintonizame.mp3"
    },
    {
        "nombre": "Hepa - Varios Puntos",
        "archivo": "musicartist/Hepa - Varios Puntos.mp3"
    },
    {
        "nombre": "Hepa, Cluster - Dolor de muela",
        "archivo": "musicartist/Hepa, Cluster - Dolor de muela.mp3"
    },
    {
        "nombre": "Hepa, nykoo0 - MI HERMANO SE LAS MANDA",
        "archivo": "musicartist/Hepa, nykoo0 - MI HERMANO SE LAS MANDA.mp3"
    },
    {
        "nombre": "huntr - baby boo",
        "archivo": "musicartist/huntr - baby boo.mp3"
    },
    {
        "nombre": "huntr - esta va porque te quiero",
        "archivo": "musicartist/huntr - esta va porque te quiero.mp3"
    },
    {
        "nombre": "huntr - pain",
        "archivo": "musicartist/huntr - pain.mp3"
    },
    {
        "nombre": "huntr - partydanc3",
        "archivo": "musicartist/huntr - partydanc3.mp3"
    },
    {
        "nombre": "ISMA - 2037",
        "archivo": "musicartist/ISMA - 2037.mp3"
    },
    {
        "nombre": "ISMA - Antes del Amanecer",
        "archivo": "musicartist/ISMA - Antes del Amanecer.mp3"
    },
    {
        "nombre": "ISMA - Cuanto va a pasar",
        "archivo": "musicartist/ISMA - Cuanto va a pasar.mp3"
    },
    {
        "nombre": "ISMA, LOLO  - CUAL ES TU PLAN",
        "archivo": "musicartist/ISMA, LOLO  - CUAL ES TU PLAN.mp3"
    },
    {
        "nombre": "jovenalien - ME PASO LA SEMANA",
        "archivo": "musicartist/jovenalien - ME PASO LA SEMANA.mp3"
    },
    {
        "nombre": "jovenalien - No vale la pena enojarse",
        "archivo": "musicartist/jovenalien - No vale la pena enojarse.mp3"
    },
    {
        "nombre": "jovenalien - tengo hambre",
        "archivo": "musicartist/jovenalien - tengo hambre.mp3"
    },
    {
        "nombre": "Jugo! , Cluster - Nos retiene el estado",
        "archivo": "musicartist/Jugo! , Cluster - Nos retiene el estado.mp3"
    },
    {
        "nombre": "Jugo! , enzocerobulto - Musicalmente",
        "archivo": "musicartist/Jugo! , enzocerobulto - Musicalmente.mp3"
    },
    {
        "nombre": "Jugo! , YSY A - Todo el dia en el trap",
        "archivo": "musicartist/Jugo! , YSY A - Todo el dia en el trap.mp3"
    },
    {
        "nombre": "Jugo! - La chupa la fame",
        "archivo": "musicartist/Jugo! - La chupa la fame.mp3"
    },
    {
        "nombre": "Jugo! - Nadie se salva",
        "archivo": "musicartist/Jugo! - Nadie se salva.mp3"
    },
    {
        "nombre": "Jugo! - Quiere algo de mi",
        "archivo": "musicartist/Jugo! - Quiere algo de mi.mp3"
    },
    {
        "nombre": "Jugo!, enzocerobulto - Hacela facil",
        "archivo": "musicartist/Jugo!, enzocerobulto - Hacela facil.mp3"
    },
    {
        "nombre": "Jugo!, salas flaco - Desfile",
        "archivo": "musicartist/Jugo!, salas flaco - Desfile.mp3"
    },
    {
        "nombre": "KERCHAK - BACK",
        "archivo": "musicartist/KERCHAK - BACK.mp3"
    },
    {
        "nombre": "KERCHAK - CHILL AF",
        "archivo": "musicartist/KERCHAK - CHILL AF.mp3"
    },
    {
        "nombre": "KERCHAK - Fajos en el Camperon",
        "archivo": "musicartist/KERCHAK - Fajos en el Camperon.mp3"
    },
    {
        "nombre": "KERCHAK - MI BRO SE MAMO",
        "archivo": "musicartist/KERCHAK - MI BRO SE MAMO.mp3"
    },
    {
        "nombre": "KERCHAK, Cluster - No Me Pienso Demorar",
        "archivo": "musicartist/KERCHAK, Cluster - No Me Pienso Demorar.mp3"
    },
    {
        "nombre": "KERCHAK - Viviendo Al Corte",
        "archivo": "musicartist/KERCHAK - Viviendo Al Corte.mp3"
    },
    {
        "nombre": "KERCHAK - WIDE OPEN",
        "archivo": "musicartist/KERCHAK - WIDE OPEN.mp3"
    },
    {
        "nombre": "KERCHAK, Cluster - Una Noche Con Los Tios 2",
        "archivo": "musicartist/KERCHAK, Cluster - Una Noche Con Los Tios 2.mp3"
    },
    {
        "nombre": "KERCHAK, DAGGER - BOOFER",
        "archivo": "musicartist/KERCHAK, DAGGER - BOOFER.mp3"
    },
    {
        "nombre": "KERCHAK, ENZOCEROBULTO - Chamuyo Habilidoso",
        "archivo": "musicartist/KERCHAK, ENZOCEROBULTO - Chamuyo Habilidoso.mp3"
    },
    {
        "nombre": "KERCHAK, PANCHITOLEFLEUR - ANOTHER NIGHT WITH THE UNCLE",
        "archivo": "musicartist/KERCHAK, PANCHITOLEFLEUR - ANOTHER NIGHT WITH THE UNCLE.mp3"
    },
    {
        "nombre": "KERCHAK, PANCHITOLEFLEUR - Tamo a Full",
        "archivo": "musicartist/KERCHAK, PANCHITOLEFLEUR - Tamo a Full.mp3"
    },
    {
        "nombre": "KERCHAK, TURROBABY, Cluster, Tuw4 - Un picadito",
        "archivo": "musicartist/KERCHAK, TURROBABY, Cluster, Tuw4 - Un picadito.mp3"
    },
    {
        "nombre": "kino frizza - ADEMAS DE MI REMIX",
        "archivo": "musicartist/kino frizza - ADEMAS DE MI REMIX.mp3"
    },
    {
        "nombre": "kino frizza - AYER ME COMI UNAS REX",
        "archivo": "musicartist/kino frizza - AYER ME COMI UNAS REX.mp3"
    },
    {
        "nombre": "kino frizza - Cancion para cuando te quedas sin internet",
        "archivo": "musicartist/kino frizza - Cancion para cuando te quedas sin internet.mp3"
    },
    {
        "nombre": "kino frizza - GIVENCHY PARODIA",
        "archivo": "musicartist/kino frizza - GIVENCHY PARODIA.mp3"
    },
    {
        "nombre": "kino frizza - LA SAVEIRO LA SAVEIRO",
        "archivo": "musicartist/kino frizza - LA SAVEIRO LA SAVEIRO.mp3"
    },
    {
        "nombre": "kino frizza - LUCK RA  BZRP",
        "archivo": "musicartist/kino frizza - LUCK RA  BZRP.mp3"
    },
    {
        "nombre": "kino frizza - MAMICHULA",
        "archivo": "musicartist/kino frizza - MAMICHULA.mp3"
    },
    {
        "nombre": "kino frizza - QUEVEDO  BZRP",
        "archivo": "musicartist/kino frizza - QUEVEDO  BZRP.mp3"
    },
    {
        "nombre": "kino frizza - SHAKIRA  BZRP",
        "archivo": "musicartist/kino frizza - SHAKIRA  BZRP.mp3"
    },
    {
        "nombre": "kino frizza - SI ME TOMO UNA CERVEZA",
        "archivo": "musicartist/kino frizza - SI ME TOMO UNA CERVEZA.mp3"
    },
    {
        "nombre": "kino frizza, Nico Melo -  L-GANTE  BZRP",
        "archivo": "musicartist/kino frizza, Nico Melo -  L-GANTE  BZRP.mp3"
    },
    {
        "nombre": "kino frizza, Nico Melo - ENTRE NOSOTROS",
        "archivo": "musicartist/kino frizza, Nico Melo - ENTRE NOSOTROS.mp3"
    },
    {
        "nombre": "kino frizza, pijarrap - Malbec",
        "archivo": "musicartist/kino frizza, pijarrap - Malbec.mp3"
    },
    {
        "nombre": "laura sad - capitulo perdido",
        "archivo": "musicartist/laura sad - capitulo perdido.mp3"
    },
    {
        "nombre": "laura sad - chupavrga",
        "archivo": "musicartist/laura sad - chupavrga.mp3"
    },
    {
        "nombre": "laura sad - i Laurie",
        "archivo": "musicartist/laura sad - i Laurie.mp3"
    },
    {
        "nombre": "laura sad - mochila",
        "archivo": "musicartist/laura sad - mochila.mp3"
    },
    {
        "nombre": "laura sad - PUCCA",
        "archivo": "musicartist/laura sad - PUCCA.mp3"
    },
    {
        "nombre": "laura sad - todos pvtos",
        "archivo": "musicartist/laura sad - todos pvtos.mp3"
    },
    {
        "nombre": "laura sad, LOLO - Joseador Boy",
        "archivo": "musicartist/laura sad, LOLO - Joseador Boy.mp3"
    },
    {
        "nombre": "laura sad, MAGNESIO - Perdon Mama",
        "archivo": "musicartist/laura sad, MAGNESIO - Perdon Mama.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - CLICK CLACK",
        "archivo": "musicartist/LITTLE BOOGIE - CLICK CLACK.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - COMPA LO HICIMOS",
        "archivo": "musicartist/LITTLE BOOGIE - COMPA LO HICIMOS.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - CREPUSCULO",
        "archivo": "musicartist/LITTLE BOOGIE - CREPUSCULO.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - DANDO CLASE",
        "archivo": "musicartist/LITTLE BOOGIE - DANDO CLASE.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - DEJA DE SUFRIR",
        "archivo": "musicartist/LITTLE BOOGIE - DEJA DE SUFRIR.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - LITTLE BOOGIE VS EL GOBIERNO",
        "archivo": "musicartist/LITTLE BOOGIE - LITTLE BOOGIE VS EL GOBIERNO.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - LOS DEL BOHIO",
        "archivo": "musicartist/LITTLE BOOGIE - LOS DEL BOHIO.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - OKUPAS",
        "archivo": "musicartist/LITTLE BOOGIE - OKUPAS.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - SUAVE CRIMINAL",
        "archivo": "musicartist/LITTLE BOOGIE - SUAVE CRIMINAL.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE - TODO BIEN TODO CHETO",
        "archivo": "musicartist/LITTLE BOOGIE - TODO BIEN TODO CHETO.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, DOLY FLACKKO - EL MUNDO ES MIO",
        "archivo": "musicartist/LITTLE BOOGIE, DOLY FLACKKO - EL MUNDO ES MIO.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR - BILLIE JEAN",
        "archivo": "musicartist/LITTLE BOOGIE, EL DOCTOR - BILLIE JEAN.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR - LOS MAS ODIADOS",
        "archivo": "musicartist/LITTLE BOOGIE, EL DOCTOR - LOS MAS ODIADOS.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR - MARTES 13",
        "archivo": "musicartist/LITTLE BOOGIE, EL DOCTOR - MARTES 13.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR, RUSHERKING - SOY FAMOSO Y TENGO PLATA",
        "archivo": "musicartist/LITTLE BOOGIE, EL DOCTOR, RUSHERKING - SOY FAMOSO Y TENGO PLATA.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, KID$$UP - HATERS",
        "archivo": "musicartist/LITTLE BOOGIE, KID$$UP - HATERS.mp3"
    },
    {
        "nombre": "LITTLE BOOGIE, MC CACO - SE TE QUEDO EL VENTO",
        "archivo": "musicartist/LITTLE BOOGIE, MC CACO - SE TE QUEDO EL VENTO.mp3"
    },
    {
        "nombre": "LOLO , BANATROLL - HAZ MAS DINERO",
        "archivo": "musicartist/LOLO , BANATROLL - HAZ MAS DINERO.mp3"
    },
    {
        "nombre": "LOLO , BANATROLL - TOY GANADO",
        "archivo": "musicartist/LOLO , BANATROLL - TOY GANADO.mp3"
    },
    {
        "nombre": "LOLO , CHOOSEY - QUE PUEDE PASAR",
        "archivo": "musicartist/LOLO , CHOOSEY - QUE PUEDE PASAR.mp3"
    },
    {
        "nombre": "LOLO - A TU MODO",
        "archivo": "musicartist/LOLO - A TU MODO.mp3"
    },
    {
        "nombre": "LOLO - ALEJO ISAKK",
        "archivo": "musicartist/LOLO - ALEJO ISAKK.mp3"
    },
    {
        "nombre": "LOLO - APHEX TWIN",
        "archivo": "musicartist/LOLO - APHEX TWIN.mp3"
    },
    {
        "nombre": "LOLO - EMILIA MERNES",
        "archivo": "musicartist/LOLO - EMILIA MERNES.mp3"
    },
    {
        "nombre": "LOLO - FERNET HIELO",
        "archivo": "musicartist/LOLO - FERNET HIELO.mp3"
    },
    {
        "nombre": "LOLO - GASTEMOS MAS",
        "archivo": "musicartist/LOLO - GASTEMOS MAS.mp3"
    },
    {
        "nombre": "LOLO - HATER",
        "archivo": "musicartist/LOLO - HATER.mp3"
    },
    {
        "nombre": "LOLO - hoy es mi dia",
        "archivo": "musicartist/LOLO - hoy es mi dia.mp3"
    },
    {
        "nombre": "LOLO - HOY SI QUEMO",
        "archivo": "musicartist/LOLO - HOY SI QUEMO.mp3"
    },
    {
        "nombre": "LOLO - INIMU",
        "archivo": "musicartist/LOLO - INIMU.mp3"
    },
    {
        "nombre": "LOLO - JESSE PINKMAN",
        "archivo": "musicartist/LOLO - JESSE PINKMAN.mp3"
    },
    {
        "nombre": "LOLO, 143LETI - LUNES A VIERNES",
        "archivo": "musicartist/LOLO, 143LETI - LUNES A VIERNES.mp3"
    },
    {
        "nombre": "MAGNESIO - COKER",
        "archivo": "musicartist/MAGNESIO - COKER.mp3"
    },
    {
        "nombre": "MAGNESIO - MAS LENTO",
        "archivo": "musicartist/MAGNESIO - MAS LENTO.mp3"
    },
    {
        "nombre": "MAGNESIO - OLLA POPULAR",
        "archivo": "musicartist/MAGNESIO - OLLA POPULAR.mp3"
    },
    {
        "nombre": "MAGNESIO - WING WANG WOW",
        "archivo": "musicartist/MAGNESIO - WING WANG WOW.mp3"
    },
    {
        "nombre": "MAGNESIO - ZLATAN",
        "archivo": "musicartist/MAGNESIO - ZLATAN.mp3"
    },
    {
        "nombre": "MAGNESIO, jovenalien - ROBANDO EN EL CARRE",
        "archivo": "musicartist/MAGNESIO, jovenalien - ROBANDO EN EL CARRE.mp3"
    },
    {
        "nombre": "MAGNESIO, White! - GOKU",
        "archivo": "musicartist/MAGNESIO, White! - GOKU.mp3"
    },
    {
        "nombre": "Matias Fisher - Muerte en Halloween",
        "archivo": "musicartist/Matias Fisher - Muerte en Halloween.mp3"
    },
    {
        "nombre": "Nykoo0 - Anorexico",
        "archivo": "musicartist/Nykoo0 - Anorexico.mp3"
    },
    {
        "nombre": "Nykoo0 - Que sabes de amor",
        "archivo": "musicartist/Nykoo0 - Que sabes de amor.mp3"
    },
    {
        "nombre": "pa2k - DEMOLIENDO HOTELES",
        "archivo": "musicartist/pa2k - DEMOLIENDO HOTELES.mp3"
    },
    {
        "nombre": "pa2k - Fumando Afuera",
        "archivo": "musicartist/pa2k - Fumando Afuera.mp3"
    },
    {
        "nombre": "pa2k - TODA",
        "archivo": "musicartist/pa2k - TODA.mp3"
    },
    {
        "nombre": "pa2k, cero - Rn",
        "archivo": "musicartist/pa2k, cero - Rn.mp3"
    },
    {
        "nombre": "pa2k, cero - yEye",
        "archivo": "musicartist/pa2k, cero - yEye.mp3"
    },
    {
        "nombre": "pa2k, enzocerobulto - BOYFRIEND",
        "archivo": "musicartist/pa2k, enzocerobulto - BOYFRIEND.mp3"
    },
    {
        "nombre": "pa2k, enzocerobulto - RIGHT NOW",
        "archivo": "musicartist/pa2k, enzocerobulto - RIGHT NOW.mp3"
    },
    {
        "nombre": "pabloxo - Astigmatismo",
        "archivo": "musicartist/pabloxo - Astigmatismo.mp3"
    },
    {
        "nombre": "pabloxo - COMIDA POR PESO",
        "archivo": "musicartist/pabloxo - COMIDA POR PESO.mp3"
    },
    {
        "nombre": "pabloxo - dB",
        "archivo": "musicartist/pabloxo - dB.mp3"
    },
    {
        "nombre": "pabloxo - Doble F",
        "archivo": "musicartist/pabloxo - Doble F.mp3"
    },
    {
        "nombre": "pabloxo - dosydos",
        "archivo": "musicartist/pabloxo - dosydos.mp3"
    },
    {
        "nombre": "pabloxo - lo hago x mi",
        "archivo": "musicartist/pabloxo - lo hago x mi.mp3"
    },
    {
        "nombre": "pabloxo - no son dos f son clones",
        "archivo": "musicartist/pabloxo - no son dos f son clones.mp3"
    },
    {
        "nombre": "pabloxo - Plata con lo que me gusta",
        "archivo": "musicartist/pabloxo - Plata con lo que me gusta.mp3"
    },
    {
        "nombre": "pabloxo - Una mas por mis amigos",
        "archivo": "musicartist/pabloxo - Una mas por mis amigos.mp3"
    },
    {
        "nombre": "pabloxo, Cluster - Fuego en el microfono",
        "archivo": "musicartist/pabloxo, Cluster - Fuego en el microfono.mp3"
    },
    {
        "nombre": "pabloxo, Frozouda - Time Break",
        "archivo": "musicartist/pabloxo, Frozouda - Time Break.mp3"
    },
    {
        "nombre": "PANKKY - FREEHOMMIES",
        "archivo": "musicartist/PANKKY - FREEHOMMIES.mp3"
    },
    {
        "nombre": "PANKKY - GLOPETA",
        "archivo": "musicartist/PANKKY - GLOPETA.mp3"
    },
    {
        "nombre": "PANKKY - TELL ME",
        "archivo": "musicartist/PANKKY - TELL ME.mp3"
    },
    {
        "nombre": "papirola - sos mi papirola",
        "archivo": "musicartist/papirola - sos mi papirola.mp3"
    },
    {
        "nombre": "salas flaco - PANICO ESCENICO",
        "archivo": "musicartist/salas flaco - PANICO ESCENICO.mp3"
    },
    {
        "nombre": "salas flaco - Por Argentina",
        "archivo": "musicartist/salas flaco - Por Argentina.mp3"
    },
    {
        "nombre": "salas flaco - TAN MALA",
        "archivo": "musicartist/salas flaco - TAN MALA.mp3"
    },
    {
        "nombre": "salas flaco, Bhavi, Asan - EL DINERO DE INTERNET",
        "archivo": "musicartist/salas flaco, Bhavi, Asan - EL DINERO DE INTERNET.mp3"
    },
    {
        "nombre": "Shako , Jugo! - Medio Tana",
        "archivo": "musicartist/Shako , Jugo! - Medio Tana.mp3"
    },
    {
        "nombre": "Shako - 4eva",
        "archivo": "musicartist/Shako - 4eva.mp3"
    },
    {
        "nombre": "Shako - Amigdalas",
        "archivo": "musicartist/Shako - Amigdalas.mp3"
    },
    {
        "nombre": "Shako - es la vencida",
        "archivo": "musicartist/Shako - es la vencida.mp3"
    },
    {
        "nombre": "Shako - Hotel",
        "archivo": "musicartist/Shako - Hotel.mp3"
    },
    {
        "nombre": "Shako - RACKLESS",
        "archivo": "musicartist/Shako - RACKLESS.mp3"
    },
    {
        "nombre": "Shako - vas a ver el alma mula",
        "archivo": "musicartist/Shako - vas a ver el alma mula.mp3"
    },
    {
        "nombre": "Shako, Bhavi, Seven Kayne - K.O",
        "archivo": "musicartist/Shako, Bhavi, Seven Kayne - K.O.mp3"
    },
    {
        "nombre": "Shako, SixUp - Daily",
        "archivo": "musicartist/Shako, SixUp - Daily.mp3"
    },
    {
        "nombre": "SixUp - 10 tucas",
        "archivo": "musicartist/SixUp - 10 tucas.mp3"
    },
    {
        "nombre": "SixUp - Anti",
        "archivo": "musicartist/SixUp - Anti.mp3"
    },
    {
        "nombre": "SixUp - DobleVaso",
        "archivo": "musicartist/SixUp - DobleVaso.mp3"
    },
    {
        "nombre": "SixUp - Falso",
        "archivo": "musicartist/SixUp - Falso.mp3"
    },
    {
        "nombre": "SixUp - Mortedor",
        "archivo": "musicartist/SixUp - Mortedor.mp3"
    },
    {
        "nombre": "SixUp - TikiTime",
        "archivo": "musicartist/SixUp - TikiTime.mp3"
    },
    {
        "nombre": "SixUp - TripleVaso",
        "archivo": "musicartist/SixUp - TripleVaso.mp3"
    },
    {
        "nombre": "Stiffy - escudo y espada",
        "archivo": "musicartist/Stiffy - escudo y espada.mp3"
    },
    {
        "nombre": "Stiffy - FARANDULERO",
        "archivo": "musicartist/Stiffy - FARANDULERO.mp3"
    },
    {
        "nombre": "Stiffy - GUAP",
        "archivo": "musicartist/Stiffy - GUAP.mp3"
    },
    {
        "nombre": "Stiffy - GUASO BALLS Z",
        "archivo": "musicartist/Stiffy - GUASO BALLS Z.mp3"
    },
    {
        "nombre": "Stiffy - MECHINSTRONGAS",
        "archivo": "musicartist/Stiffy - MECHINSTRONGAS.mp3"
    },
    {
        "nombre": "Stiffy - NO ES LO QUE PENSAS",
        "archivo": "musicartist/Stiffy - NO ES LO QUE PENSAS.mp3"
    },
    {
        "nombre": "Stiffy - NO LA CUELGO",
        "archivo": "musicartist/Stiffy - NO LA CUELGO.mp3"
    },
    {
        "nombre": "Stiffy - PEGO FLORES",
        "archivo": "musicartist/Stiffy - PEGO FLORES.mp3"
    },
    {
        "nombre": "Stiffy - SANDRO",
        "archivo": "musicartist/Stiffy - SANDRO.mp3"
    },
    {
        "nombre": "Stiffy - SECONDLIFE",
        "archivo": "musicartist/Stiffy - SECONDLIFE.mp3"
    },
    {
        "nombre": "Stiffy - SWAG DE SOSA",
        "archivo": "musicartist/Stiffy - SWAG DE SOSA.mp3"
    },
    {
        "nombre": "Stiffy - WACHA LOCA",
        "archivo": "musicartist/Stiffy - WACHA LOCA.mp3"
    },
    {
        "nombre": "Stiffy, Agusfortnite2008 - AFIP",
        "archivo": "musicartist/Stiffy, Agusfortnite2008 - AFIP.mp3"
    },
    {
        "nombre": "Stiffy, AGUSFORTNITE2008 - CON PEDRO Y CON LA DROGA",
        "archivo": "musicartist/Stiffy, AGUSFORTNITE2008 - CON PEDRO Y CON LA DROGA.mp3"
    },
    {
        "nombre": "Stiffy, AGUSFORTNITE2008 - QUIERE PENE",
        "archivo": "musicartist/Stiffy, AGUSFORTNITE2008 - QUIERE PENE.mp3"
    },
    {
        "nombre": "Stiffy, Jon Z - COMO ANTES",
        "archivo": "musicartist/Stiffy, Jon Z - COMO ANTES.mp3"
    },
    {
        "nombre": "Stiffy, Rojuu - AMNESIA",
        "archivo": "musicartist/Stiffy, Rojuu - AMNESIA.mp3"
    },
    {
        "nombre": "Stiffy, TURROBABY, ZELL, AGUSFORTNITE2008 - BABASONICO",
        "archivo": "musicartist/Stiffy, TURROBABY, ZELL, AGUSFORTNITE2008 - BABASONICO.mp3"
    },
    {
        "nombre": "TURROBABY - 2017",
        "archivo": "musicartist/TURROBABY - 2017.mp3"
    },
    {
        "nombre": "TURROBABY - Aca y Alla y En Todos Lados",
        "archivo": "musicartist/TURROBABY - Aca y Alla y En Todos Lados.mp3"
    },
    {
        "nombre": "TURROBABY - Bajo El Sol",
        "archivo": "musicartist/TURROBABY - Bajo El Sol.mp3"
    },
    {
        "nombre": "TURROBABY - Bici Itau",
        "archivo": "musicartist/TURROBABY - Bici Itau.mp3"
    },
    {
        "nombre": "TURROBABY - COJER WACHAS",
        "archivo": "musicartist/TURROBABY - COJER WACHAS.mp3"
    },
    {
        "nombre": "TURROBABY - COLOMBIANA HOODTRAP",
        "archivo": "musicartist/TURROBABY - COLOMBIANA HOODTRAP.mp3"
    },
    {
        "nombre": "TURROBABY - Cornudo Consciente",
        "archivo": "musicartist/TURROBABY - Cornudo Consciente.mp3"
    },
    {
        "nombre": "TURROBABY - De Cote",
        "archivo": "musicartist/TURROBABY - De Cote.mp3"
    },
    {
        "nombre": "TURROBABY - Filmemos Una Peli",
        "archivo": "musicartist/TURROBABY - Filmemos Una Peli.mp3"
    },
    {
        "nombre": "TURROBABY - Franco Colapinto",
        "archivo": "musicartist/TURROBABY - Franco Colapinto.mp3"
    },
    {
        "nombre": "TURROBABY - Lgante Y Wanda Nara",
        "archivo": "musicartist/TURROBABY - Lgante Y Wanda Nara.mp3"
    },
    {
        "nombre": "TURROBABY - Mañana Me Voy De Gira",
        "archivo": "musicartist/TURROBABY - Mañana Me Voy De Gira.mp3"
    },
    {
        "nombre": "TURROBABY - Sergio Massa",
        "archivo": "musicartist/TURROBABY - Sergio Massa.mp3"
    },
    {
        "nombre": "TURROBABY - SIMO VIANI",
        "archivo": "musicartist/TURROBABY - SIMO VIANI.mp3"
    },
    {
        "nombre": "TURROBABY - Wacha Flequilluda",
        "archivo": "musicartist/TURROBABY - Wacha Flequilluda.mp3"
    },
    {
        "nombre": "TURROBABY - Yo Te Amo Toda",
        "archivo": "musicartist/TURROBABY - Yo Te Amo Toda.mp3"
    },
    {
        "nombre": "TURROBABY - YPF",
        "archivo": "musicartist/TURROBABY - YPF.mp3"
    },
    {
        "nombre": "TURROBABY, baby cashy - Colorada",
        "archivo": "musicartist/TURROBABY, baby cashy - Colorada.mp3"
    },
    {
        "nombre": "TURROBABY, Bhavi - Parabrisas",
        "archivo": "musicartist/TURROBABY, Bhavi - Parabrisas.mp3"
    },
    {
        "nombre": "TURROBABY, Doble P - ANTO ROCUZZO",
        "archivo": "musicartist/TURROBABY, Doble P - ANTO ROCUZZO.mp3"
    },
    {
        "nombre": "TURROBABY, enzocerobulto - Las Seis",
        "archivo": "musicartist/TURROBABY, enzocerobulto - Las Seis.mp3"
    },
    {
        "nombre": "TURROBABY, Lolo OG - Lovebombing",
        "archivo": "musicartist/TURROBABY, Lolo OG - Lovebombing.mp3"
    },
    {
        "nombre": "TURROBABY, Stiffy - PENDEJO ATREVIDO",
        "archivo": "musicartist/TURROBABY, Stiffy - PENDEJO ATREVIDO.mp3"
    },
    {
        "nombre": "TURROBABY, tussiwarriors, Ze Pequeña - Natalia Oreiro",
        "archivo": "musicartist/TURROBABY, tussiwarriors, Ze Pequeña - Natalia Oreiro.mp3"
    },
    {
        "nombre": "TURROBABY, ZELL - Inter De Miami",
        "archivo": "musicartist/TURROBABY, ZELL - Inter De Miami.mp3"
    },
    {
        "nombre": "TURROBABY, ZELL, Stiffy - Cara De Boludo",
        "archivo": "musicartist/TURROBABY, ZELL, Stiffy - Cara De Boludo.mp3"
    },
    {
        "nombre": "underaiki - borsi",
        "archivo": "musicartist/underaiki - borsi.mp3"
    },
    {
        "nombre": "underaiki - fuli",
        "archivo": "musicartist/underaiki - fuli.mp3"
    },
    {
        "nombre": "underaiki - Majora",
        "archivo": "musicartist/underaiki - Majora.mp3"
    },
    {
        "nombre": "underaiki - mugi",
        "archivo": "musicartist/underaiki - mugi.mp3"
    },
    {
        "nombre": "underaiki - No Es Personal",
        "archivo": "musicartist/underaiki - No Es Personal.mp3"
    },
    {
        "nombre": "underaiki - sushi",
        "archivo": "musicartist/underaiki - sushi.mp3"
    },
    {
        "nombre": "underaiki - Too Late",
        "archivo": "musicartist/underaiki - Too Late.mp3"
    },
    {
        "nombre": "underaiki, Suei - Marceline",
        "archivo": "musicartist/underaiki, Suei - Marceline.mp3"
    },
    {
        "nombre": "vahel - .",
        "archivo": "musicartist/vahel - ..mp3"
    },
    {
        "nombre": "vahel - PLAN B",
        "archivo": "musicartist/vahel - PLAN B.mp3"
    },
    {
        "nombre": "vahel - tunel",
        "archivo": "musicartist/vahel - tunel.mp3"
    },
    {
        "nombre": "vahel, fukinmari - UuuUUuuu",
        "archivo": "musicartist/vahel, fukinmari - UuuUUuuu.mp3"
    },
    {
        "nombre": "vahel, pachudani - loquita",
        "archivo": "musicartist/vahel, pachudani - loquita.mp3"
    },
    {
        "nombre": "White! - FR",
        "archivo": "musicartist/White! - FR.mp3"
    },
    {
        "nombre": "White! - No lo intentes en tu home",
        "archivo": "musicartist/White! - No lo intentes en tu home.mp3"
    },
    {
        "nombre": "White! - X - RAY",
        "archivo": "musicartist/White! - X - RAY.mp3"
    },
    {
        "nombre": "White!, magnesio - Shen Long",
        "archivo": "musicartist/White!, magnesio - Shen Long.mp3"
    },
    {
        "nombre": "Zell - Aura",
        "archivo": "musicartist/Zell - Aura.mp3"
    },
    {
        "nombre": "Zell - ballin de verdad",
        "archivo": "musicartist/Zell - ballin de verdad.mp3"
    },
    {
        "nombre": "Zell - Ballin",
        "archivo": "musicartist/Zell - Ballin.mp3"
    },
    {
        "nombre": "Zell - calvin klein",
        "archivo": "musicartist/Zell - calvin klein.mp3"
    },
    {
        "nombre": "Zell - Cero Cero",
        "archivo": "musicartist/Zell - Cero Cero.mp3"
    },
    {
        "nombre": "Zell - diamante",
        "archivo": "musicartist/Zell - diamante.mp3"
    },
    {
        "nombre": "Zell - diva",
        "archivo": "musicartist/Zell - diva.mp3"
    },
    {
        "nombre": "Zell - humo",
        "archivo": "musicartist/Zell - humo.mp3"
    },
    {
        "nombre": "Zell - iceberg",
        "archivo": "musicartist/Zell - iceberg.mp3"
    },
    {
        "nombre": "Zell - iPhone",
        "archivo": "musicartist/Zell - iPhone.mp3"
    },
    {
        "nombre": "Zell - Joven Ballin",
        "archivo": "musicartist/Zell - Joven Ballin.mp3"
    },
    {
        "nombre": "Zell - Keep It Quiet",
        "archivo": "musicartist/Zell - Keep It Quiet.mp3"
    },
    {
        "nombre": "Zell - Kendall",
        "archivo": "musicartist/Zell - Kendall.mp3"
    },
    {
        "nombre": "Zell - on my mind",
        "archivo": "musicartist/Zell - on my mind.mp3"
    },
    {
        "nombre": "Zell - piso 3",
        "archivo": "musicartist/Zell - piso 3.mp3"
    },
    {
        "nombre": "Zell - Rainbow",
        "archivo": "musicartist/Zell - Rainbow.mp3"
    },
    {
        "nombre": "Zell - Ritual",
        "archivo": "musicartist/Zell - Ritual.mp3"
    },
    {
        "nombre": "Zell - Starboy",
        "archivo": "musicartist/Zell - Starboy.mp3"
    },
    {
        "nombre": "Zell - stripper",
        "archivo": "musicartist/Zell - stripper.mp3"
    },
    {
        "nombre": "Zell - Uber",
        "archivo": "musicartist/Zell - Uber.mp3"
    },
    {
        "nombre": "Zell - vamonos",
        "archivo": "musicartist/Zell - vamonos.mp3"
    },
    {
        "nombre": "Zell - webcam",
        "archivo": "musicartist/Zell - webcam.mp3"
    },
    {
        "nombre": "Zell - Whats Up",
        "archivo": "musicartist/Zell - Whats Up.mp3"
    },
    {
        "nombre": "Zell - ᐸ3",
        "archivo": "musicartist/Zell - ᐸ3.mp3"
    },
    {
        "nombre": "Zell, Bhavi - nanana",
        "archivo": "musicartist/Zell, Bhavi - nanana.mp3"
    },
    {
        "nombre": "Zell, KNAK - ZiploK",
        "archivo": "musicartist/Zell, KNAK - ZiploK.mp3"
    },
    {
        "nombre": "Zell, Polima Westcoast - g wagon",
        "archivo": "musicartist/Zell, Polima Westcoast - g wagon.mp3"
    },
    {
        "nombre": "Zell, Rojuu - Bye Bye",
        "archivo": "musicartist/Zell, Rojuu - Bye Bye.mp3"
    },
    {
        "nombre": "Zell, Tiago PZK - xq te enamoraste",
        "archivo": "musicartist/Zell, Tiago PZK - xq te enamoraste.mp3"
    },
    {
        "nombre": "Frozouda - doble F con visa",
        "archivo": "musicartist/Frozouda - doble F con visa.mp3"
    },
    {
        "nombre": "Frozouda - TOP !",
        "archivo": "musicartist/Frozouda - TOP !.mp3"
    },
    {
        "nombre": "Frozouda - no le di un break",
        "archivo": "musicartist/Frozouda - no le di un break.mp3"
    },
    {
        "nombre": "Frozouda - antipatico",
        "archivo": "musicartist/Frozouda - antipatico.mp3"
    },
    {
        "nombre": "LOLO - OG KUSH",
        "archivo": "musicartist/LOLO - OG KUSH.mp3"
    },
    {
        "nombre": "LOLO - POP POP POP",
        "archivo": "musicartist/LOLO - POP POP POP.mp3"
    },
    {
        "nombre": "LOLO - GAS DE ENERO",
        "archivo": "musicartist/LOLO - GAS DE ENERO.mp3"
    },
    {
        "nombre": "LOLO - NO WAY",
        "archivo": "musicartist/LOLO - NO WAY.mp3"
    },
    {
        "nombre": "LOLO - HOY SI QUEMO",
        "archivo": "musicartist/LOLO - HOY SI QUEMO.mp3"
    },
    {
        "nombre": "LOLO - ALEJO ISAKK",
        "archivo": "musicartist/LOLO - ALEJO ISAKK.mp3"
    },
    {
        "nombre": "LOLO - NOVIEMBRE",
        "archivo": "musicartist/LOLO - NOVIEMBRE.mp3"
    },
    {
        "nombre": "LOLO - FRIO EN DICIEMBRE",
        "archivo": "musicartist/LOLO - FRIO EN DICIEMBRE.mp3"
    },
    {
        "nombre": "LOLO - VASO DE A DOS",
        "archivo": "musicartist/LOLO - VASO DE A DOS.mp3"
    },
    {
        "nombre": "Frozouda - mama reza por mi",
        "archivo": "musicartist/Frozouda - mama reza por mi.mp3"
    },
    {
        "nombre": "Frozouda - poema a mi nena",
        "archivo": "musicartist/Frozouda - poema a mi nena.mp3"
    },

    {
        "nombre": "Frozouda - ahorrando para un fennec",
        "archivo": "musicartist/Frozouda - ahorrando para un fennec.mp3"
    },
    {
        "nombre": "Frozouda - la cruz como a sampaoli",
        "archivo": "musicartist/Frozouda - la cruz como a sampaoli.mp3"
    },
    {
        "nombre": "Frozouda, pabloxo - con los duros",
        "archivo": "musicartist/Frozouda, pabloxo - con los duros.mp3"
    },
    {
        "nombre": "Frozouda - sugarrrush",
        "archivo": "musicartist/Frozouda - sugarrrush.mp3"
    },
    {
        "nombre": "Shako - elvira",
        "archivo": "musicartist/Shako - elvira.mp3"
    },
    {
        "nombre": "Shako - es la vencida",
        "archivo": "musicartist/Shako - es la vencida.mp3"
    },
    {
        "nombre": "Shako - roli rola",
        "archivo": "musicartist/Shako - roli rola.mp3"
    },

    {
        "nombre": "Shako - press play to join party",
        "archivo": "musicartist/Shako - press play to join party.mp3"
    },

    {
        "nombre": "Shako - 2030",
        "archivo": "musicartist/Shako - 2030.mp3"
    },

    {
        "nombre": "Shako - Shako West",
        "archivo": "musicartist/Shako - Shako West.mp3"
    },
    {
        "nombre": "Cluster, Icynico - Slime, slime, slime",
        "archivo": "musicartist/Cluster, Icynico - Slime, slime, slime.mp3"
    },
    {
        "nombre": "Cluster - Vuelvo a ser yo",
        "archivo": "musicartist/Cluster - Vuelvo a ser yo.mp3"
    },
    {
        "nombre": "Cluster - Bagg",
        "archivo": "musicartist/Cluster - Bagg.mp3"
    },
    {
        "nombre": "Cluster, Gllato, Dreiko Estrada - TONTO, RETONTO Y REQUETETONTO",
        "archivo": "musicartist/Cluster, Gllato, Dreiko Estrada - TONTO, RETONTO Y REQUETETONTO.mp3"
    },
    {
        "nombre": "Cluster - JUMPOUTHEHOUSE",
        "archivo": "musicartist/Cluster - JUMPOUTHEHOUSE.mp3"
    },
    {
        "nombre": "Cluster - AK de Irak",
        "archivo": "musicartist/Cluster - AK de Irak.mp3"
    },
    {
        "nombre": "Cluster - En cada verbo",
        "archivo": "musicartist/Cluster - En cada verbo.mp3"
    },
    {
        "nombre": "Zell, KNAK - Me Da Igual",
        "archivo": "musicartist/Zell, KNAK - Me Da Igual.mp3"
    },
    {
        "nombre": "Zell - Where U At",
        "archivo": "musicartist/Zell - Where U At.mp3"
    },
    {
        "nombre": "Zell - Otra Chance",
        "archivo": "musicartist/Zell - Otra Chance.mp3"
    },
    {
        "nombre": "Zell - que paso ayer",
        "archivo": "musicartist/Zell - que paso ayer.mp3"
    },
    {
        "nombre": "Zell, Salastkbron - luna",
        "archivo": "musicartist/Zell, Salastkbron - luna.mp3"
    },
    {
        "nombre": "TURROBABY - Toda La Plata",
        "archivo": "musicartist/TURROBABY - Toda La Plata.mp3"
    },
    {
        "nombre": "TURROBABY - Ventilador",
        "archivo": "musicartist/TURROBABY - Ventilador.mp3"
    },
    {
        "nombre": "TURROBABY - Billetes De Cien",
        "archivo": "musicartist/TURROBABY - Billetes De Cien.mp3"
    },
    {
        "nombre": "MAGNESIO - YUYOS",
        "archivo": "musicartist/MAGNESIO - YUYOS.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ME LO MUEVE",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - ME LO MUEVE.mp3"
    },


    {
        "nombre": "AGUSFORTNITE2008, Stiffy - COF COF",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - COF COF.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, Polus - REMERA I LOVE SWAG",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy, Polus - REMERA I LOVE SWAG.mp3"
    },

    {
        "nombre": "AGUSFORTNITE2008, Stiffy - MUSICA ANTI VIEJOS",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - MUSICA ANTI VIEJOS.mp3"
    },

    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ESTO ES ENCHUFE LA CHUPA EL HIP HOP",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - ESTO ES ENCHUFE LA CHUPA EL HIP HOP.mp3"
    },

    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ESTOY RE PANCHO",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - ESTOY RE PANCHO.mp3"
    },

    {
        "nombre": "AGUSFORTNITE2008, Stiffy - SHH CERRA EL ORTO VIEJO ROCKERO",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - SHH CERRA EL ORTO VIEJO ROCKERO.mp3"
    },

    {
        "nombre": "AGUSFORTNITE2008, Stiffy, Joshu Joshu, Matiasenchufe - FERNET",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy, Joshu Joshu, Matiasenchufe - FERNET.mp3"
    },

    {
        "nombre": "AGUSFORTNITE2008, Stiffy - YO ESTOY",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - YO ESTOY.mp3"
    },

    {
        "nombre": "AGUSFORTNITE2008, Stiffy - BB BELT",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - BB BELT.mp3"
    },

    {
        "nombre": "AGUSFORTNITE2008, Stiffy - OKAY OKAY",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - OKAY OKAY.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - LE PIDO A DIOS",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - LE PIDO A DIOS.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - HOMBRE SWAG",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - HOMBRE SWAG.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ABUELO",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - ABUELO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - DORITOS",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - DORITOS.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - PALITO DE LA SELVA",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - PALITO DE LA SELVA.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ZAZA",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - ZAZA.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - FIDO DIDO",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - FIDO DIDO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - NO SE",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - NO SE.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - SWAGBOI",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - SWAGBOI.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - Otro idioma",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy - Otro idioma.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - ENCONTRATE A VOS",
        "archivo": "musicartist/AGUSFORTNITE2008 - ENCONTRATE A VOS.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - MENTIR",
        "archivo": "musicartist/AGUSFORTNITE2008 - MENTIR.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - YO ESTOY EN UNA Y ELLA EN 4",
        "archivo": "musicartist/AGUSFORTNITE2008 - YO ESTOY EN UNA Y ELLA EN 4.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - DEJO EL HUMO",
        "archivo": "musicartist/AGUSFORTNITE2008 - DEJO EL HUMO.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008 - VIP DEL VIP",
        "archivo": "musicartist/AGUSFORTNITE2008 - VIP DEL VIP.mp3"
    },
    {
        "nombre": "Stiffy - LOS DOS",
        "archivo": "musicartist/Stiffy - LOS DOS.mp3"
    },
    {
        "nombre": "Stiffy - WACKAFLOKA",
        "archivo": "musicartist/Stiffy - WACKAFLOKA.mp3"
    },
    {
        "nombre": "Stiffy - SIEMPRE FUMO PORRO",
        "archivo": "musicartist/Stiffy - SIEMPRE FUMO PORRO.mp3"
    },
    {
        "nombre": "Stiffy - SIEMPRE FUMO PORRO",
        "archivo": "musicartist/Stiffy - SIEMPRE FUMO PORRO.mp3"
    },
    {
        "nombre": "Stiffy - DISFRUTAR",
        "archivo": "musicartist/Stiffy - DISFRUTAR.mp3"
    },
    {
        "nombre": "Stiffy - YA CASI",
        "archivo": "musicartist/Stiffy - YA CASI.mp3"
    },
    {
        "nombre": "Stiffy - NO ME CANSO",
        "archivo": "musicartist/Stiffy - NO ME CANSO.mp3"
    },
    {
        "nombre": "Jugo!, Emirsito, Mhtresuno - Estimulos",
        "archivo": "musicartist/Jugo!, Emirsito, Mhtresuno - Estimulos.mp3"
    },
    {
        "nombre": "Jugo!, pabloxo - Nunca va a ser igual el esfuerzo",
        "archivo": "musicartist/Jugo!, pabloxo - Nunca va a ser igual el esfuerzo.mp3"
    },
    {
        "nombre": "Jugo! - Me neutralice",
        "archivo": "musicartist/Jugo! - Me neutralice.mp3"
    },
    {
        "nombre": "Jugo! - Maradona",
        "archivo": "musicartist/Jugo! - Maradona.mp3"
    },
    {
        "nombre": "Jugo! - Tengo que hacerlo",
        "archivo": "musicartist/Jugo! - Tengo que hacerlo.mp3"
    },
    {
        "nombre": "Jugo!, Emirsito, Frozouda - Parece que entreno",
        "archivo": "musicartist/Jugo!, Emirsito, Frozouda - Parece que entreno.mp3"
    },
    {
        "nombre": "Jugo!, LuchoSSJ, KNAK - Reviento el spot",
        "archivo": "musicartist/Jugo!, LuchoSSJ, KNAK - Reviento el spot.mp3"
    },
    {
        "nombre": "Jugo! - Desde cba",
        "archivo": "musicartist/Jugo! - Desde cba.mp3"
    },
    {
        "nombre": "Jugo! - Sube la sintonia",
        "archivo": "musicartist/Jugo! - Sube la sintonia.mp3"
    },
    {
        "nombre": "Jugo! - Es una obsesion",
        "archivo": "musicartist/Jugo! - Es una obsesion.mp3"
    },
    {
        "nombre": "Jugo!, TURROBABY - Zafiros",
        "archivo": "musicartist/Jugo!, TURROBABY - Zafiros.mp3"
    },
    {
        "nombre": "Jugo!, bic - Hard",
        "archivo": "musicartist/Jugo!, bic - Hard.mp3"
    },
    {
        "nombre": "Jugo! - Todo el año",
        "archivo": "musicartist/Jugo! - Todo el año.mp3"
    },
    {
        "nombre": "Jugo! - Esto es transitorio",
        "archivo": "musicartist/Jugo! - Esto es transitorio.mp3"
    },
    {
        "nombre": "Jugo!, Neo Pistea - Quieren aparentar",
        "archivo": "musicartist/Jugo!, Neo Pistea - Quieren aparentar.mp3"
    },
    {
        "nombre": "Jugo! - Un solo cable",
        "archivo": "musicartist/Jugo! - Un solo cable.mp3"
    },
    {
        "nombre": "enzocerobulto - Quien tiene la mirada mas cansada",
        "archivo": "musicartist/enzocerobulto - Quien tiene la mirada mas cansada.mp3"
    },
    {
        "nombre": "enzocerobulto - Mi computadora",
        "archivo": "musicartist/enzocerobulto - Mi computadora.mp3"
    },
    {
        "nombre": "enzocerobulto - Como Lastima",
        "archivo": "musicartist/enzocerobulto - Como Lastima.mp3"
    },
    {
        "nombre": "enzocerobulto - En donde",
        "archivo": "musicartist/enzocerobulto - En donde.mp3"
    },
    {
        "nombre": "enzocerobulto - Como se lo hago",
        "archivo": "musicartist/enzocerobulto - Como se lo hago.mp3"
    },
    {
        "nombre": "enzocerobulto - De vuelta",
        "archivo": "musicartist/enzocerobulto - De vuelta.mp3"
    },
    {
        "nombre": "enzocerobulto - Diez en la trampa",
        "archivo": "musicartist/enzocerobulto - Diez en la trampa.mp3"
    },
    {
        "nombre": "enzocerobulto - Lo que fumo lo que tomo",
        "archivo": "musicartist/enzocerobulto - Lo que fumo lo que tomo.mp3"
    },
    {
        "nombre": "pabloxo - Fajos de 20 mil",
        "archivo": "musicartist/pabloxo - Fajos de 20 mil.mp3"
    },
    {
        "nombre": "pabloxo - Fumando en los clubes",
        "archivo": "musicartist/pabloxo - Fumando en los clubes.mp3"
    },
    {
        "nombre": "pabloxo, Hwii - PABLOXO",
        "archivo": "musicartist/pabloxo, Hwii - PABLOXO.mp3"
    },
    {
        "nombre": "cero - 10g",
        "archivo": "musicartist/cero - 10g.mp3"
    },
    {
        "nombre": "cero - Plata dolida",
        "archivo": "musicartist/cero - Plata dolida.mp3"
    },
    {
        "nombre": "cero - Plata tarada",
        "archivo": "musicartist/cero - Plata tarada.mp3"
    },
    {
        "nombre": "cero - 5velas",
        "archivo": "musicartist/cero - 5velas.mp3"
    },
    {
        "nombre": "cero - huida",
        "archivo": "musicartist/cero - huida.mp3"
    },
    {
        "nombre": "cero - a correr",
        "archivo": "musicartist/cero - a correr.mp3"
    },
    {
        "nombre": "cero - Ella",
        "archivo": "musicartist/cero - Ella.mp3"
    },
    {
        "nombre": "cero, Jugo! - YeA 2",
        "archivo": "musicartist/cero, Jugo! - YeA 2.mp3"
    },
    {
        "nombre": "cero, pabloxo - oki",
        "archivo": "musicartist/cero, pabloxo - oki.mp3"
    },
    {
        "nombre": "cero - las otras victorias quedan chicas con lo que te anhelo",
        "archivo": "musicartist/cero - las otras victorias quedan chicas con lo que te anhelo.mp3"
    },
    {
        "nombre": "cero, huntr - a donde vas¿",
        "archivo": "musicartist/cero, huntr - a donde vas¿.mp3"
    },
    {
        "nombre": "cero - foe",
        "archivo": "musicartist/cero - foe.mp3"
    },
    {
        "nombre": "cero - +personal",
        "archivo": "musicartist/cero - +personal.mp3"
    },
    {
        "nombre": "cero, TURROBABY - a solas",
        "archivo": "musicartist/cero, TURROBABY - a solas.mp3"
    },
    {
        "nombre": "cero, underaiki - sisu",
        "archivo": "musicartist/cero, underaiki - sisu.mp3"
    },
    {
        "nombre": "cero - toco madera",
        "archivo": "musicartist/cero - toco madera.mp3"
    },
    {
        "nombre": "cero - 1-2",
        "archivo": "musicartist/cero - 1-2.mp3"
    },
    {
        "nombre": "cero - Sin ayuda",
        "archivo": "musicartist/cero - Sin ayuda.mp3"
    },
    {
        "nombre": "cero, Lthelizard - Jakaranda",
        "archivo": "musicartist/cero, Lthelizard - Jakaranda.mp3"
    },
    {
        "nombre": "cero - t & p",
        "archivo": "musicartist/cero - t & p.mp3"
    },
    {
        "nombre": "cero - Ye A",
        "archivo": "musicartist/cero - Ye A.mp3"
    },
    {
        "nombre": "cero, Doly Flackko - Peine teta",
        "archivo": "musicartist/cero, Doly Flackko - Peine teta.mp3"
    },
    {
        "nombre": "cero, Sixup - Palo",
        "archivo": "musicartist/cero, Sixup - Palo.mp3"
    },
    {
        "nombre": "cero - Drumkits en el pantalon",
        "archivo": "musicartist/cero - Drumkits en el pantalon.mp3"
    },
    {
        "nombre": "cero - t",
        "archivo": "musicartist/cero - t.mp3"
    },
    {
        "nombre": "cero - 2 Sedas",
        "archivo": "musicartist/cero - 2 Sedas.mp3"
    },
    {
        "nombre": "cero, Jugo! - Voy a hacer historia",
        "archivo": "musicartist/cero, Jugo! - Voy a hacer historia.mp3"
    },
    {
        "nombre": "cero - Locomotora",
        "archivo": "musicartist/cero - Locomotora.mp3"
    },
    {
        "nombre": "cero - Cabra",
        "archivo": "musicartist/cero - Cabra.mp3"
    },
    {
        "nombre": "Cluster, cero - Imbecil Anthem (intro)",
        "archivo": "musicartist/Cluster, cero - Imbecil Anthem (intro).mp3"
    },
    {
        "nombre": "enzocerobulto - Comoledoy",
        "archivo": "musicartist/enzocerobulto - Comoledoy.mp3"
    },
    {
        "nombre": "enzocerobulto - partexparte",
        "archivo": "musicartist/enzocerobulto - partexparte.mp3"
    },
    {
        "nombre": "enzocerobulto - Toda la culpa es mia",
        "archivo": "musicartist/enzocerobulto - Toda la culpa es mia.mp3"
    },
    {
        "nombre": "enzocerobulto - w el filo",
        "archivo": "musicartist/enzocerobulto - w el filo.mp3"
    },
    {
        "nombre": "enzocerobulto, J Bern - xdentromuerto",
        "archivo": "musicartist/enzocerobulto, J Bern - xdentromuerto.mp3"
    },
    {
        "nombre": "enzocerobulto, Komp - Como antes",
        "archivo": "musicartist/enzocerobulto, Komp - Como antes.mp3"
    },
    {
        "nombre": "enzocerobulto, Komp - Fe Intacta",
        "archivo": "musicartist/enzocerobulto, Komp - Fe Intacta.mp3"
    },
    {
        "nombre": "enzocerobulto, liluno - Pullop",
        "archivo": "musicartist/enzocerobulto, liluno - Pullop.mp3"
    },
    {
        "nombre": "enzocerobulto, pa2k - w el K1",
        "archivo": "musicartist/enzocerobulto, pa2k - w el K1.mp3"
    },
    {
        "nombre": "pabloxo - Porrible",
        "archivo": "musicartist/pabloxo - Porrible.mp3"
    },
    {
        "nombre": "Shako - Con Fines De Lucro",
        "archivo": "musicartist/Shako - Con Fines De Lucro.mp3"
    },
    {
        "nombre": "Zell - Zzz",
        "archivo": "musicartist/Zell - Zzz.mp3"
    },
    {
        "nombre": "Jugo! - Nunca me vire",
        "archivo": "musicartist/Jugo! - Nunca me vire.mp3"
    },
    {
        "nombre": "Doly Flackko - Street Pain",
        "archivo": "musicartist/Doly Flackko - Street Pain.mp3"
    },
    {
        "nombre": "Doly Flackko - Ambicion & Adrenalina",
        "archivo": "musicartist/Doly Flackko - Ambicion & Adrenalina.mp3"
    },
    {
        "nombre": "Doly Flackko - Flackkosito",
        "archivo": "musicartist/Doly Flackko - Flackkosito.mp3"
    },
    {
        "nombre": "Doly Flackko - Delirio de Grandeza",
        "archivo": "musicartist/Doly Flackko - Delirio de Grandeza.mp3"
    },
    {
        "nombre": "Doly Flackko - Pala Ancha",
        "archivo": "musicartist/Doly Flackko - Pala Ancha.mp3"
    },
    {
        "nombre": "Doly Flackko - Veneno",
        "archivo": "musicartist/Doly Flackko - Veneno.mp3"
    },
    {
        "nombre": "Doly Flackko - donde queres estar",
        "archivo": "musicartist/Doly Flackko - donde queres estar.mp3"
    },
    {
        "nombre": "Doly Flackko - Outro Chau",
        "archivo": "musicartist/Doly Flackko - Outro Chau.mp3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, TURROBABY - ESCENARIO",
        "archivo": "musicartist/AGUSFORTNITE2008, Stiffy, TURROBABY - ESCENARIO.mp3"
    },
    {
        "nombre": "eluney benedetti, elaiyah - El morfon",
        "archivo": "musicartist/eluney benedetti, elaiyah - El morfon.mp3"
    },
    {
        "nombre": "eluney benedetti - mi ñerY",
        "archivo": "musicartist/eluney benedetti - mi ñerY.mp3"
    },
    {
        "nombre": "eluney benedetti, elaiyah - Idioma",
        "archivo": "musicartist/eluney benedetti, elaiyah - Idioma.mp3"
    },
    {
        "nombre": "eluney benedetti, elaiyah - A los palomos",
        "archivo": "musicartist/eluney benedetti, elaiyah - A los palomos.mp3"
    },
    {
        "nombre": "eluney benedetti - aYvamo",
        "archivo": "musicartist/eluney benedetti - aYvamo.mp3"
    },
    {
        "nombre": "eluney benedetti, elaiyah - Los3",
        "archivo": "musicartist/eluney benedetti, elaiyah - Los3.mp3"
    },
    {
        "nombre": "eluney benedetti, TULO13 - Che",
        "archivo": "musicartist/eluney benedetti, TULO13 - Che.mp3"
    },
    {
        "nombre": "eluney benedetti, 2uu! - ENCIMA MIO",
        "archivo": "musicartist/eluney benedetti, 2uu! - ENCIMA MIO.mp3"
    },
    {
        "nombre": "eluney benedetti - Pimpinela Love",
        "archivo": "musicartist/eluney benedetti - Pimpinela Love.mp3"
    },
    {
        "nombre": "eluney benedetti - Le Da Igual",
        "archivo": "musicartist/eluney benedetti - Le Da Igual.mp3"
    },
    {
        "nombre": "elaiyah - mala sangre",
        "archivo": "musicartist/elaiyah - mala sangre.mp3"
    },
    {
        "nombre": "elaiyah - una lagrima y una pua",
        "archivo": "musicartist/elaiyah - una lagrima y una pua.mp3"
    },
    {
        "nombre": "elaiyah - mi culpa",
        "archivo": "musicartist/elaiyah - mi culpa.mp3"
    },
    {
        "nombre": "elaiyah - Pudrete",
        "archivo": "musicartist/elaiyah - Pudrete.mp3"
    },
    {
        "nombre": "elaiyah - Evocar",
        "archivo": "musicartist/elaiyah - Evocar.mp3"
    },
    {
        "nombre": "CHOOSEY, Yvng Jorge - Le TOTO",
        "archivo": "musicartist/CHOOSEY, Yvng Jorge - Le TOTO.mp3"
    },
    {
        "nombre": "CHOOSEY - X Belgrano",
        "archivo": "musicartist/CHOOSEY - X Belgrano.mp3"
    },
    {
        "nombre": "CHOOSEY - DITOYS",
        "archivo": "musicartist/CHOOSEY - DITOYS.mp3"
    },
    {
        "nombre": "CHOOSEY - 3 MONITOS",
        "archivo": "musicartist/CHOOSEY - 3 MONITOS.mp3"
    },
    {
        "nombre": "CHOOSEY - BANCO",
        "archivo": "musicartist/CHOOSEY - BANCO.mp3"
    },
    {
        "nombre": "CHOOSEY - QUE CONCHA QUERES",
        "archivo": "musicartist/CHOOSEY - QUE CONCHA QUERES.mp3"
    },
    {
        "nombre": "CHOOSEY - SIGAN SIN MI",
        "archivo": "musicartist/CHOOSEY - SIGAN SIN MI.mp3"
    },
    {
        "nombre": "CHOOSEY, n0tgiova - DON ROKE",
        "archivo": "musicartist/CHOOSEY, n0tgiova - DON ROKE.mp3"
    },
    {
        "nombre": "CHOOSEY - ORISHINAL",
        "archivo": "musicartist/CHOOSEY - ORISHINAL.mp3"
    },
    {
        "nombre": "TURROBABY, LITTLE BOOGIE - Emotes",
        "archivo": "musicartist/TURROBABY, LITTLE BOOGIE - Emotes.mp3"
    },
    {
        "nombre": "jovenalien - Ni ahi con tus quilombos",
        "archivo": "musicartist/jovenalien - Ni ahi con tus quilombos.mp3"
    },
    {
        "nombre": "White! - Sombras",
        "archivo": "musicartist/White! - Sombras.mp3"
    },
    {
        "nombre": "Nykoo0 - Barack Obama",
        "archivo": "musicartist/Nykoo0 - Barack Obama.mp3"
    },
    {
        "nombre": "bic - selfish",
        "archivo": "musicartist/bic - selfish.mp3"
    },
    {
        "nombre": "bic - como amar",
        "archivo": "musicartist/bic - como amar.mp3"
    },
    {
        "nombre": "bic - silly",
        "archivo": "musicartist/bic - silly.mp3"
    },
    {
        "nombre": "bic - new one",
        "archivo": "musicartist/bic - new one.mp3"
    },
    {
        "nombre": "bic - tus recuerdos",
        "archivo": "musicartist/bic - tus recuerdos.mp3"
    },
    {
        "nombre": "bic - dramas",
        "archivo": "musicartist/bic - dramas.mp3"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    {
        "nombre": "",
        "archivo": "musicartist/"
    },







    /*
    {
        "nombre": "",
        "archivo": "musicartist/"
    },
    */


];

const albumsData = [
    {
        "name": "Joseo exclusive club",
        "cover": COVERS_BASE_URL + "img_JOSEO EXCLUSIVE CLUB.png",
        "songs": [
            { "nombre": "LOLO - MINI LOLO", "archivo": "LOLO - MINI LOLO.mp3" },
            { "nombre": "LOLO - OSCUROoOo", "archivo": "LOLO - OSCUROoOo.mp3" },
            { "nombre": "LOLO - APHEX TWIN", "archivo": "LOLO - APHEX TWIN.mp3" },
            { "nombre": "LOLO - QUIEN FUE", "archivo": "LOLO - QUIEN FUE.mp3" },
            { "nombre": "LOLO - SYDNEY", "archivo": "LOLO - SYDNEY.mp3" },
            { "nombre": "LOLO - GASTEMOS MAS", "archivo": "LOLO - GASTEMOS MAS.mp3" },
            { "nombre": "LOLO - HATER", "archivo": "LOLO - HATER.mp3" },
            { "nombre": "LOLO - ALEJO ISAKK", "archivo": "LOLO - ALEJO ISAKK.mp3" },
            { "nombre": "LOLO - HOY SI QUEMO", "archivo": "LOLO - HOY SI QUEMO.mp3" },
            { "nombre": "LOLO - OG KUSH", "archivo": "LOLO - OG KUSH.mp3" },
            { "nombre": "LOLO - NO WAY", "archivo": "LOLO - NO WAY.mp3" },
            { "nombre": "LOLO - GAS DE ENERO", "archivo": "LOLO - GAS DE ENERO.mp3" },
            { "nombre": "LOLO - POP POP POP", "archivo": "LOLO - POP POP POP.mp3" },
            { "nombre": "LOLO - NOVIEMBRE", "archivo": "LOLO - NOVIEMBRE.mp3" },
            { "nombre": "LOLO - FRIO EN DICIEMBRE", "archivo": "LOLO - FRIO EN DICIEMBRE.mp3" },
            { "nombre": "LOLO - VASO DE A DOS", "archivo": "LOLO - VASO DE A DOS.mp3" },

        ]
    },
    {
        "name": "Fro! 2",
        "cover": COVERS_BASE_URL + "img_FRO2.png",
        "songs": [
            { "nombre": "Frozouda - no le di un break", "archivo": "Frozouda - no le di un break.mp3" },
            { "nombre": "Frozouda - quitate las BAPE", "archivo": "Frozouda - quitate las BAPE.mp3" },
            { "nombre": "Frozouda - antipatico", "archivo": "Frozouda - antipatico.mp3" },
            { "nombre": "Frozouda - quitate los Jeans", "archivo": "Frozouda - quitate los Jeans.mp3" },
            { "nombre": "Frozouda - TOP !", "archivo": "Frozouda - TOP !.mp3" },
            { "nombre": "Frozouda , Cero , Cluster - plinko", "archivo": "Frozouda , Cero , Cluster - plinko.mp3" },
            { "nombre": "Frozouda - doble F con visa", "archivo": "Frozouda - doble F con visa.mp3" },
        ]
    },
    {
        "name": "Fro!",
        "cover": COVERS_BASE_URL + "img_FRO.png",
        "songs": [
            { "nombre": "Frozouda, Jugo!, KNAK - chirlito", "archivo": "Frozouda, Jugo!, KNAK - chirlito.mp3" },
            { "nombre": "Frozouda, Cluster - hot box", "archivo": "Frozouda, Cluster - hot box.mp3" },
            { "nombre": "Frozouda - un goat siempre esta busy", "archivo": "Frozouda - un goat siempre esta busy.mp3" },
            { "nombre": "Frozouda - nicki nicole", "archivo": "Frozouda - nicki nicole.mp3" },
            { "nombre": "Frozouda - GAS O PORRO", "archivo": "Frozouda - GAS O PORRO.mp3" },
            { "nombre": "Frozouda - mama reza por mi", "archivo": "Frozouda - mama reza por mi.mp3" },
            { "nombre": "Frozouda - poema a mi nena", "archivo": "Frozouda - poema a mi nena.mp3" },
            { "nombre": "Frozouda - ahorrando para un fennec", "archivo": "Frozouda - ahorrando para un fennec.mp3" },
            { "nombre": "Frozouda - sugarrrush", "archivo": "Frozouda - sugarrrush.mp3" },
            { "nombre": "Frozouda, pabloxo - con los duros", "archivo": "Frozouda, pabloxo - con los duros.mp3" },
            { "nombre": "Frozouda - la cruz como a sampaoli", "archivo": "Frozouda - la cruz como a sampaoli.mp3" },
        ]
    },
    {
        "name": "grandes éxitos",
        "cover": COVERS_BASE_URL + "img_grandesexitos.png",
        "songs": [
            { "nombre": "Shako - Con Fines De Lucro", "archivo": "Shako - Con Fines De Lucro.mp3" },
            { "nombre": "Shako - elvira", "archivo": "Shako - elvira.mp3" },
            { "nombre": "Shako - es la vencida", "archivo": "Shako - es la vencida.mp3" },
            { "nombre": "Shako - vas a ver el alma mula", "archivo": "Shako - vas a ver el alma mula.mp3" },
            { "nombre": "Shako - roli rola", "archivo": "Shako - roli rola.mp3" },
            { "nombre": "Shako - press play to join party", "archivo": "Shako - press play to join party.mp3" },
            { "nombre": "Shako - Amigdalas", "archivo": "Shako - Amigdalas.mp3" },
            { "nombre": "Shako - Hotel", "archivo": "Shako - Hotel.mp3" },
            { "nombre": "Shako - 2030", "archivo": "Shako - 2030.mp3" },
            { "nombre": "Shako - Shako West", "archivo": "Shako - Shako West.mp3" },
        ]
    },
    {
        "name": "Muy Imbecil",
        "cover": COVERS_BASE_URL + "img_muyimbecil.png",
        "songs": [
            { "nombre": "Cluster, cero - Imbecil Anthem", "archivo": "Cluster, cero - Imbecil Anthem.mp3" },
            { "nombre": "Cluster, Francis Jeremy - MUY IMBECIL", "archivo": "Cluster, Francis Jeremy - MUY IMBECIL.mp3" },
            { "nombre": "Cluster, Icynico - Slime, slime, slime", "archivo": "Cluster, Icynico - Slime, slime, slime.mp3" },
            { "nombre": "Cluster - Vuelvo a ser yo", "archivo": "Cluster - Vuelvo a ser yo.mp3" },
            { "nombre": "Cluster, Doly Flackko - OREO", "archivo": "Cluster, Doly Flackko - OREO.mp3" },
            { "nombre": "Cluster - Bagg", "archivo": "Cluster - Bagg.mp3" },
            { "nombre": "Cluster, Gllato, Dreiko Estrada - TONTO, RETONTO Y REQUETETONTO", "archivo": "Cluster, Gllato, Dreiko Estrada - TONTO, RETONTO Y REQUETETONTO.mp3" },
            { "nombre": "Cluster, Aleezok - CARGO", "archivo": "Cluster, Aleezok - CARGO.mp3" },
            { "nombre": "Cluster - JUMPOUTHEHOUSE", "archivo": "Cluster - JUMPOUTHEHOUSE.mp3" },
            { "nombre": "Cluster, enzocerobulto - FFumando", "archivo": "Cluster, enzocerobulto - FFumando.mp3" },
            { "nombre": "Cluster - AK de Irak", "archivo": "Cluster - AK de Irak.mp3" },
            { "nombre": "Cluster, Pabloxo - OTRA SEDA", "archivo": "Cluster, Pabloxo - OTRA SEDA.mp3" },
            { "nombre": "Cluster - JEFFES", "archivo": "Cluster - JEFFES.mp3" },
            { "nombre": "Cluster, Frozouda - TOP 1 CHARTS", "archivo": "Cluster, Frozouda - TOP 1 CHARTS.mp3" },
            { "nombre": "Cluster - En cada verbo", "archivo": "Cluster - En cada verbo.mp3" },
        ]
    },
    {
        "name": "PILF",
        "cover": COVERS_BASE_URL + "img_pilf.png",
        "songs": [
            { "nombre": "PILF - ENTRO A LA CANCHA", "archivo": "PILF - ENTRO A LA CANCHA.mp3" },
            { "nombre": "PILF - FUMO UNO FUMO DOS", "archivo": "PILF - FUMO UNO FUMO DOS.mp3" },
            { "nombre": "PILF - HIT", "archivo": "PILF - HIT.mp3" },
            { "nombre": "PILF - MALVIAJAR", "archivo": "PILF - MALVIAJAR.mp3" },
            { "nombre": "PILF - NABO", "archivo": "PILF - NABO.mp3" },
            { "nombre": "PILF - NI ME ACUERDO", "archivo": "PILF - NI ME ACUERDO.mp3" },
            { "nombre": "PILF - PILF", "archivo": "PILF - PILF.mp3" },
            { "nombre": "PILF - ROMANCE TE PUEDO DAR", "archivo": "PILF - ROMANCE TE PUEDO DAR.mp3" },
            { "nombre": "PILF - TANTA GIRA", "archivo": "PILF - TANTA GIRA.mp3" },
            { "nombre": "PILF - YO SOY ASI", "archivo": "PILF - YO SOY ASI.mp3" },

        ]
    },
    {
        "name": "Goat Talk",
        "cover": COVERS_BASE_URL + "img_goattalk.png",
        "songs": [
            { "nombre": "Zell - Zzz", "archivo": "Zell - Zzz.mp3" },
            { "nombre": "Zell - iPhone", "archivo": "Zell - iPhone.mp3" },
            { "nombre": "Zell - Starboy", "archivo": "Zell - Starboy.mp3" },
            { "nombre": "Zell - Uber", "archivo": "Zell - Uber.mp3" },
            { "nombre": "Zell - Whats Up", "archivo": "Zell - Whats Up.mp3" },
            { "nombre": "Zell - Joven Ballin", "archivo": "Zell - Joven Ballin.mp3" },
            { "nombre": "Zell, Rojuu - Bye Bye", "archivo": "Zell, Rojuu - Bye Bye.mp3" },
            { "nombre": "Zell - Aura", "archivo": "Zell - Aura.mp3" },
            { "nombre": "Zell - Cero Cero", "archivo": "Zell - Cero Cero.mp3" },
            { "nombre": "Zell - Keep It Quiet", "archivo": "Zell - Keep It Quiet.mp3" },
            { "nombre": "Zell - Kendall", "archivo": "Zell - Kendall.mp3" },
            { "nombre": "Zell, KNAK - Me Da Igual", "archivo": "Zell, KNAK - Me Da Igual.mp3" },
            { "nombre": "Zell - Otra Chance", "archivo": "Zell - Otra Chance.mp3" },
        ]
    },
    {
        "name": "Ballin de verdad",
        "cover": COVERS_BASE_URL + "img_ballinfr.png",
        "songs": [
            { "nombre": "Zell - que paso ayer", "archivo": "Zell - que paso ayer.mp3" },
            { "nombre": "Zell, Salastkbron - luna", "archivo": "Zell, Salastkbron - luna.mp3" },
            { "nombre": "Zell - ballin de verdad", "archivo": "Zell - ballin de verdad.mp3" },
            { "nombre": "Zell - calvin klein", "archivo": "Zell - calvin klein.mp3" },
            { "nombre": "Zell - diamante", "archivo": "Zell - diamante.mp3" },
            { "nombre": "Zell - diva", "archivo": "Zell - diva.mp3" },
            { "nombre": "Zell - humo", "archivo": "Zell - humo.mp3" },
            { "nombre": "Zell - piso 3", "archivo": "Zell - piso 3.mp3" },
            { "nombre": "Zell - que paso ayer", "archivo": "Zell - que paso ayer.mp3" },
            { "nombre": "Zell - Rainbow", "archivo": "Zell - Rainbow.mp3" },
            { "nombre": "Zell - stripper", "archivo": "Zell - stripper.mp3" },
            { "nombre": "Zell - vamonos", "archivo": "Zell - vamonos.mp3" },
            { "nombre": "Zell - webcam", "archivo": "Zell - webcam.mp3" },
            { "nombre": "Zell, Bhavi - nanana", "archivo": "Zell, Bhavi - nanana.mp3" },
            { "nombre": "Zell, Polima Westcoast - g wagon", "archivo": "Zell, Polima Westcoast - g wagon.mp3" },
            { "nombre": "Zell, Tiago PZK - xq te enamoraste", "archivo": "Zell, Tiago PZK - xq te enamoraste.mp3" },
        ]


    },
    {
        "name": "I Love Wachas",
        "cover": COVERS_BASE_URL + "img_ilw.png",
        "songs": [
            { "nombre": "TURROBABY - Toda La Plata", "archivo": "TURROBABY - Toda La Plata.mp3" },
            { "nombre": "TURROBABY - Bici Itau", "archivo": "TURROBABY - Bici Itau.mp3" },
            { "nombre": "TURROBABY - Cornudo Consciente", "archivo": "TURROBABY - Cornudo Consciente.mp3" },
            { "nombre": "TURROBABY - De Cote", "archivo": "TURROBABY - De Cote.mp3" },
            { "nombre": "TURROBABY - Franco Colapinto", "archivo": "TURROBABY - Franco Colapinto.mp3" },
            { "nombre": "TURROBABY - Lgante Y Wanda Nara", "archivo": "TURROBABY - Lgante Y Wanda Nara.mp3" },
            { "nombre": "TURROBABY - Sergio Massa", "archivo": "TURROBABY - Sergio Massa.mp3" },
            { "nombre": "TURROBABY - Toda La Plata", "archivo": "TURROBABY - Toda La Plata.mp3" },
            { "nombre": "TURROBABY - Wacha Flequilluda", "archivo": "TURROBABY - Wacha Flequilluda.mp3" },
            { "nombre": "TURROBABY, baby cashy - Colorada", "archivo": "TURROBABY, baby cashy - Colorada.mp3" },
            { "nombre": "TURROBABY, Doble P - ANTO ROCUZZO", "archivo": "TURROBABY, Doble P - ANTO ROCUZZO.mp3" },
            { "nombre": "TURROBABY, tussiwarriors, Ze Pequeña - Natalia Oreiro", "archivo": "TURROBABY, tussiwarriors, Ze Pequeña - Natalia Oreiro.mp3" },
            { "nombre": "TURROBABY, ZELL, Stiffy - Cara De Boludo", "archivo": "TURROBABY, ZELL, Stiffy - Cara De Boludo.mp3" },



        ]


    },
    {
        "name": "Muchas gracias autotune",
        "cover": COVERS_BASE_URL + "img_graciastune.png",
        "songs": [
            { "nombre": "TURROBABY - Aca y Alla y En Todos Lados", "archivo": "TURROBABY - Aca y Alla y En Todos Lados.mp3" },
            { "nombre": "TURROBABY - Filmemos Una Peli", "archivo": "TURROBABY - Filmemos Una Peli.mp3" },
            { "nombre": "TURROBABY - Mañana Me Voy De Gira", "archivo": "TURROBABY - Mañana Me Voy De Gira.mp3" },
            { "nombre": "TURROBABY - Yo Te Amo Toda", "archivo": "TURROBABY - Yo Te Amo Toda.mp3" },
            { "nombre": "TURROBABY, Bhavi - Parabrisas", "archivo": "TURROBABY, Bhavi - Parabrisas.mp3" },
            { "nombre": "TURROBABY, enzocerobulto - Las Seis", "archivo": "TURROBABY, enzocerobulto - Las Seis.mp3" },
            { "nombre": "TURROBABY, Lolo OG - Lovebombing", "archivo": "TURROBABY, Lolo OG - Lovebombing.mp3" },
            { "nombre": "TURROBABY, ZELL - Inter De Miami", "archivo": "TURROBABY, ZELL - Inter De Miami.mp3" },
        ]


    },
    {
        "name": "blackalbum",
        "cover": COVERS_BASE_URL + "img_blackalbum.png",
        "songs": [
            { "nombre": "enzocerobulto, liluno - Pullop", "archivo": "enzocerobulto, liluno - Pullop.mp3" },
            { "nombre": "enzocerobulto - Comoledoy", "archivo": "enzocerobulto - Comoledoy.mp3" },
            { "nombre": "enzocerobulto - Esta nota", "archivo": "enzocerobulto - Esta nota.mp3" },
            { "nombre": "enzocerobulto - partexparte", "archivo": "enzocerobulto - partexparte.mp3" },
            { "nombre": "enzocerobulto - perdiendo", "archivo": "enzocerobulto - perdiendo.mp3" },
            { "nombre": "enzocerobulto - Toda la culpa es mia", "archivo": "enzocerobulto - Toda la culpa es mia.mp3" },
            { "nombre": "enzocerobulto - w el filo", "archivo": "enzocerobulto - w el filo.mp3" },
            { "nombre": "enzocerobulto, J Bern - xdentromuerto", "archivo": "enzocerobulto, J Bern - xdentromuerto.mp3" },
            { "nombre": "enzocerobulto, Komp - Como antes", "archivo": "enzocerobulto, Komp - Como antes.mp3" },
            { "nombre": "enzocerobulto, Komp - Fe Intacta", "archivo": "enzocerobulto, Komp - Fe Intacta.mp3" },
            { "nombre": "enzocerobulto, pa2k - w el K1", "archivo": "enzocerobulto, pa2k - w el K1.mp3" },


        ]


    },
    {
        "name": "Big Moli 3",
        "cover": COVERS_BASE_URL + "img_bigmoli.png",
        "songs": [
            { "nombre": "rageylo - coscu army", "archivo": "rageylo - coscu army.mp3" },
            { "nombre": "rageylo - Dinero Llueve", "archivo": "rageylo - Dinero Llueve.mp3" },
            { "nombre": "rageylo, Banatroll - Haz Mas Dinero", "archivo": "rageylo, Banatroll - Haz Mas Dinero.mp3" },
            { "nombre": "rageylo - Joda estoy Gede", "archivo": "rageylo - Joda estoy Gede.mp3" },
            { "nombre": "rageylo - Moscu", "archivo": "rageylo - Moscu.mp3" },
            { "nombre": "rageylo - Quemando Solo", "archivo": "rageylo - Quemando Solo.mp3" },
            { "nombre": "rageylo, Banatroll - Toy Ganado", "archivo": "rageylo, Banatroll - Toy Ganado.mp3" }
        ]
    },
    {
        "name": "Murio la Musica",
        "cover": COVERS_BASE_URL + "img_muriomusica.png",
        "songs": [
            { "nombre": "SWAGGERBOYZ - 24 7", "archivo": "SWAGGERBOYZ - 24 7.mp3" },
            { "nombre": "SWAGGERBOYZ - COF COF", "archivo": "SWAGGERBOYZ - COF COF.mp3" },
            { "nombre": "SWAGGERBOYZ - ESTOY RE PANCHO", "archivo": "SWAGGERBOYZ - ESTOY RE PANCHO.mp3" },
            { "nombre": "SWAGGERBOYZ - GUISO", "archivo": "SWAGGERBOYZ - GUISO.mp3" },
            { "nombre": "SWAGGERBOYZ - ME LO MUEVE", "archivo": "SWAGGERBOYZ - ME LO MUEVE.mp3" },
            { "nombre": "SWAGGERBOYZ - MEJORES HOES", "archivo": "SWAGGERBOYZ - MEJORES HOES.mp3" },
            { "nombre": "SWAGGERBOYZ - MUSICA ANTI VIEJOS", "archivo": "SWAGGERBOYZ - MUSICA ANTI VIEJOS.mp3" },
            { "nombre": "SWAGGERBOYZ - PIE EN LA PISTA", "archivo": "SWAGGERBOYZ - PIE EN LA PISTA.mp3" },
            { "nombre": "SWAGGERBOYZ - SHH CERRA EL ORTO VIEJO ROCKERO", "archivo": "SWAGGERBOYZ - SHH CERRA EL ORTO VIEJO ROCKERO.mp3" },
            { "nombre": "SWAGGERBOYZ - TRES PATITOS", "archivo": "SWAGGERBOYZ - TRES PATITOS.mp3" },
            { "nombre": "SWAGGERBOYZ - YO ESTOY", "archivo": "SWAGGERBOYZ - YO ESTOY.mp3" },
            { "nombre": "SWAGGERBOYZ, Joshu Joshu - ESTO ES ENCHUFE LA CHUPA EL HIP HOP", "archivo": "SWAGGERBOYZ, Joshu Joshu - ESTO ES ENCHUFE LA CHUPA EL HIP HOP.mp3" },
            { "nombre": "SWAGGERBOYZ, Joshu Joshu, Matiasenchufe - FERNET", "archivo": "SWAGGERBOYZ, Joshu Joshu, Matiasenchufe - FERNET.mp3" },
            { "nombre": "SWAGGERBOYZ, NEO PISTEA - MEJORALITO", "archivo": "SWAGGERBOYZ, NEO PISTEA - MEJORALITO.mp3" },
            { "nombre": "SWAGGERBOYZ, Polus - REMERA I LOVE SWAG", "archivo": "SWAGGERBOYZ, Polus - REMERA I LOVE SWAG.mp3" },

        ]
    },
    {
        "name": "Plug Park",
        "cover": COVERS_BASE_URL + "img_plugpark.png",
        "songs": [
            { "nombre": "SWAGGERBOYZ - 8 JEANS", "archivo": "SWAGGERBOYZ - 8 JEANS.mp3" },
            { "nombre": "SWAGGERBOYZ - DESDE LOS 14", "archivo": "SWAGGERBOYZ - DESDE LOS 14.mp3" },
            { "nombre": "SWAGGERBOYZ - MUSICA DE ASCENSOR", "archivo": "SWAGGERBOYZ - MUSICA DE ASCENSOR.mp3" },
            { "nombre": "SWAGGERBOYZ - PETER GRIFFIN", "archivo": "SWAGGERBOYZ - PETER GRIFFIN.mp3" },
            { "nombre": "SWAGGERBOYZ - ZAZA", "archivo": "SWAGGERBOYZ - ZAZA.mp3" },
            { "nombre": "SWAGGERBOYZ - BB BELT", "archivo": "SWAGGERBOYZ - BB BELT.mp3" },
            { "nombre": "SWAGGERBOYZ - DORITOS", "archivo": "SWAGGERBOYZ - DORITOS.mp3" },
            { "nombre": "SWAGGERBOYZ - FIDO DIDO", "archivo": "SWAGGERBOYZ - FIDO DIDO.mp3" },
            { "nombre": "SWAGGERBOYZ - HOMBRE SWAG", "archivo": "SWAGGERBOYZ - HOMBRE SWAG.mp3" },
            { "nombre": "SWAGGERBOYZ - LE PIDO A DIOS", "archivo": "SWAGGERBOYZ - LE PIDO A DIOS.mp3" },
            { "nombre": "SWAGGERBOYZ - NO SE", "archivo": "SWAGGERBOYZ - NO SE.mp3" },
            { "nombre": "SWAGGERBOYZ - OKAY OKAY", "archivo": "SWAGGERBOYZ - OKAY OKAY.mp3" },
            { "nombre": "SWAGGERBOYZ - PALITO DE LA SELVA", "archivo": "SWAGGERBOYZ - PALITO DE LA SELVA.mp3" },
            { "nombre": "SWAGGERBOYZ - SWAGBOI", "archivo": "SWAGGERBOYZ - SWAGBOI.mp3" },
            { "nombre": "SWAGGERBOYZ - Otro idioma", "archivo": "SWAGGERBOYZ - Otro idioma.mp3" },
            { "nombre": "SWAGGERBOYZ - FIDO DIDO", "archivo": "SWAGGERBOYZ - FIDO DIDO.mp3" },
        ]
    },
    {
        "name": "Hacelos Concha Agus",
        "cover": COVERS_BASE_URL + "img_hacelosconcha.png",
        "songs": [
            { "nombre": "AGUSFORTNITE2008 - DEJO EL HUMO", "archivo": "AGUSFORTNITE2008 - DEJO EL HUMO.mp3" },
            { "nombre": "AGUSFORTNITE2008 - ELLA ME LLAMA", "archivo": "AGUSFORTNITE2008 - ELLA ME LLAMA.mp3" },
            { "nombre": "AGUSFORTNITE2008 - ENCONTRATE A VOS", "archivo": "AGUSFORTNITE2008 - ENCONTRATE A VOS.mp3" },
            { "nombre": "AGUSFORTNITE2008 - MENTIR", "archivo": "AGUSFORTNITE2008 - MENTIR.mp3" },
            { "nombre": "AGUSFORTNITE2008 - VIP DEL VIP", "archivo": "AGUSFORTNITE2008 - VIP DEL VIP.mp3" },
            { "nombre": "AGUSFORTNITE2008 - YO ESTOY EN UNA Y ELLA EN 4", "archivo": "AGUSFORTNITE2008 - YO ESTOY EN UNA Y ELLA EN 4.mp3" },
            { "nombre": "AGUSFORTNITE2008 - HOTEL EN HOTEL", "archivo": "AGUSFORTNITE2008 - HOTEL EN HOTEL.mp3" },
            { "nombre": "AGUSFORTNITE2008 - VUELVO A FUMAR", "archivo": "AGUSFORTNITE2008 - VUELVO A FUMAR.mp3" },
            { "nombre": "AGUSFORTNITE2008, Stiffy, DILLOM - EL MOROCHO EL RUBIO Y EL COLO", "archivo": "AGUSFORTNITE2008, Stiffy, DILLOM - EL MOROCHO EL RUBIO Y EL COLO.mp3" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - GOFUE", "archivo": "AGUSFORTNITE2008, Stiffy - GOFUE.mp3" },
            { "nombre": "AGUSFORTNITE2008 - SWAGGEANDO EN EL BANDO", "archivo": "AGUSFORTNITE2008 - SWAGGEANDO EN EL BANDO.mp3" },
            { "nombre": "AGUSFORTNITE2008 - LOS HAGO CONCHA", "archivo": "AGUSFORTNITE2008 - LOS HAGO CONCHA.mp3" },
        ]
    },
    {
        "name": "Hacelos Concha Stiffy",
        "cover": COVERS_BASE_URL + "img_hacelosconchast.png",
        "songs": [
            { "nombre": "Stiffy - DISFRUTAR", "archivo": "Stiffy - DISFRUTAR.mp3" },
            { "nombre": "Stiffy - escudo y espada", "archivo": "Stiffy - escudo y espada.mp3" },
            { "nombre": "Stiffy - GUASO BALLS Z", "archivo": "Stiffy - GUASO BALLS Z.mp3" },
            { "nombre": "Stiffy - LOS DOS", "archivo": "Stiffy - LOS DOS.mp3" },
            { "nombre": "Stiffy - NO ME CANSO", "archivo": "Stiffy - NO ME CANSO.mp3" },
            { "nombre": "Stiffy - SIEMPRE FUMO PORRO", "archivo": "Stiffy - SIEMPRE FUMO PORRO.mp3" },
            { "nombre": "Stiffy - YA CASI", "archivo": "Stiffy - YA CASI.mp3" },
            { "nombre": "Stiffy - MECHINSTRONGAS", "archivo": "Stiffy - MECHINSTRONGAS.mp3" },
            { "nombre": "Stiffy - NO ES LO QUE PENSAS", "archivo": "Stiffy - NO ES LO QUE PENSAS.mp3" },
            { "nombre": "Stiffy - NO LA CUELGO", "archivo": "Stiffy - NO LA CUELGO.mp3" },
            { "nombre": "Stiffy - PEGO FLORES", "archivo": "Stiffy - PEGO FLORES.mp3" },
            { "nombre": "Stiffy - SIEMPRE FUMO PORRO", "archivo": "Stiffy - SIEMPRE FUMO PORRO.mp3" },
            { "nombre": "Stiffy - WACHA LOCA", "archivo": "Stiffy - WACHA LOCA.mp3" },
            { "nombre": "Stiffy - WACKAFLOKA", "archivo": "Stiffy - WACKAFLOKA.mp3" },
            { "nombre": "Stiffy, AGUSFORTNITE2008 - CON PEDRO Y CON LA DROGA", "archivo": "Stiffy, AGUSFORTNITE2008 - CON PEDRO Y CON LA DROGA.mp3" },
            { "nombre": "Stiffy, AGUSFORTNITE2008 - QUIERE PENE", "archivo": "Stiffy, AGUSFORTNITE2008 - QUIERE PENE.mp3" },
            { "nombre": "Stiffy, Rojuu - AMNESIA", "archivo": "Stiffy, Rojuu - AMNESIA.mp3" },
            { "nombre": "Stiffy, TURROBABY, ZELL, AGUSFORTNITE2008 - BABASONICO", "archivo": "Stiffy, TURROBABY, ZELL, AGUSFORTNITE2008 - BABASONICO.mp3" },
        ]
    },
    {
        "name": "Sentimental Gangster 2",
        "cover": COVERS_BASE_URL + "img_sentimentalgn2.png",
        "songs": [
            { "nombre": "Jugo! - Desde cba", "archivo": "Jugo! - Desde cba.mp3" },
            { "nombre": "Jugo! - Es una obsesion", "archivo": "Jugo! - Es una obsesion.mp3" },
            { "nombre": "Jugo! - Esto es transitorio", "archivo": "Jugo! - Esto es transitorio.mp3" },
            { "nombre": "Jugo! - Maradona", "archivo": "Jugo! - Maradona.mp3" },
            { "nombre": "Jugo! - Me neutralice", "archivo": "Jugo! - Me neutralice.mp3" },
            { "nombre": "Jugo! - Sube la sintonia", "archivo": "Jugo! - Sube la sintonia.mp3" },
            { "nombre": "Jugo! - Tengo que hacerlo", "archivo": "Jugo! - Tengo que hacerlo.mp3" },
            { "nombre": "Jugo! - Un solo cable", "archivo": "Jugo! - Un solo cable.mp3" },
            { "nombre": "Jugo! - Nunca me vire", "archivo": "Jugo! - Nunca me vire.mp3" },
            { "nombre": "Jugo! - Todo el año", "archivo": "Jugo! - Todo el año.mp3" },
            { "nombre": "Jugo! , Cluster - Nos retiene el estado", "archivo": "Jugo! , Cluster - Nos retiene el estado.mp3" },
            { "nombre": "Jugo! , enzocerobulto - Musicalmente", "archivo": "Jugo! , enzocerobulto - Musicalmente.mp3" },
            { "nombre": "Jugo! , YSY A - Todo el dia en el trap", "archivo": "Jugo! , YSY A - Todo el dia en el trap.mp3" },
            { "nombre": "Jugo!, bic - Hard", "archivo": "Jugo!, bic - Hard.mp3" },
            { "nombre": "Jugo!, Emirsito, Frozouda - Parece que entreno", "archivo": "Jugo!, Emirsito, Frozouda - Parece que entreno.mp3" },
            { "nombre": "Jugo!, Emirsito, Mhtresuno - Estimulos", "archivo": "Jugo!, Emirsito, Mhtresuno - Estimulos.mp3" },
            { "nombre": "Jugo!, LuchoSSJ, KNAK - Reviento el spot", "archivo": "Jugo!, LuchoSSJ, KNAK - Reviento el spot.mp3" },
            { "nombre": "Jugo!, Neo Pistea - Quieren aparentar", "archivo": "Jugo!, Neo Pistea - Quieren aparentar.mp3" },
            { "nombre": "Jugo!, pabloxo - Nunca va a ser igual el esfuerzo", "archivo": "Jugo!, pabloxo - Nunca va a ser igual el esfuerzo.mp3" },
            { "nombre": "Jugo!, TURROBABY - Zafiros", "archivo": "Jugo!, TURROBABY - Zafiros.mp3" },

        ]
    },
    {
        "name": "PERNOCTANDO EN EL BALCON",
        "cover": COVERS_BASE_URL + "img_pernoctando.png",
        "songs": [
            { "nombre": "AFKgoat - ASI DE DESCONFIADO", "archivo": "AFKgoat - ASI DE DESCONFIADO.mp3" },
            { "nombre": "AFKgoat - ASI NO", "archivo": "AFKgoat - ASI NO.mp3" },
            { "nombre": "AFKgoat - BANCAR EL PARCHE", "archivo": "AFKgoat - BANCAR EL PARCHE.mp3" },
            { "nombre": "AFKgoat - HACERME TRAICIONAR", "archivo": "AFKgoat - HACERME TRAICIONAR.mp3" },
            { "nombre": "AFKgoat - PERNOCTANDO EN EL BALCON", "archivo": "AFKgoat - PERNOCTANDO EN EL BALCON.mp3" },
            { "nombre": "AFKgoat, cero  - ME QUEMAN LOS DEDOS", "archivo": "AFKgoat, cero  - ME QUEMAN LOS DEDOS.mp3" },
        ]
    },
    {
        "name": "La Ultima Gota",
        "cover": COVERS_BASE_URL + "img_ultimagota.png",
        "songs": [
            { "nombre": "enzocerobulto - Como Lastima", "archivo": "enzocerobulto - Como Lastima.mp3" },
            { "nombre": "enzocerobulto - En donde", "archivo": "enzocerobulto - En donde.mp3" },
            { "nombre": "enzocerobulto - Como se lo hago", "archivo": "enzocerobulto - Como se lo hago.mp3" },
            { "nombre": "enzocerobulto - De vuelta", "archivo": "enzocerobulto - De vuelta.mp3" },
            { "nombre": "enzocerobulto - Diez en la trampa", "archivo": "enzocerobulto - Diez en la trampa.mp3" },
            { "nombre": "enzocerobulto - Lo que fumo lo que tomo", "archivo": "enzocerobulto - Lo que fumo lo que tomo.mp3" },
            { "nombre": "enzocerobulto - Quien tiene la mirada mas cansada", "archivo": "enzocerobulto - Quien tiene la mirada mas cansada.mp3" },
            { "nombre": "enzocerobulto - De capital al Sifon", "archivo": "enzocerobulto - De capital al Sifon.mp3" },
            { "nombre": "enzocerobulto - Falsa tu cara de Cristo", "archivo": "enzocerobulto - Falsa tu cara de Cristo.mp3" },
            { "nombre": "enzocerobulto - Hasta que termine el dia", "archivo": "enzocerobulto - Hasta que termine el dia.mp3" },
            { "nombre": "enzocerobulto - una tira", "archivo": "enzocerobulto - una tira.mp3" },
            { "nombre": "enzocerobulto - Mi computadora", "archivo": "enzocerobulto - Mi computadora.mp3" },

        ]
    },
    {
        "name": "otramasdelpablo",
        "cover": COVERS_BASE_URL + "img_pablo.png",
        "songs": [
            { "nombre": "pabloxo - Astigmatismo", "archivo": "pabloxo - Astigmatismo.mp3" },
            { "nombre": "pabloxo - dB", "archivo": "pabloxo - dB.mp3" },
            { "nombre": "pabloxo - dosydos", "archivo": "pabloxo - dosydos.mp3" },
            { "nombre": "pabloxo - Fajos de 20 mil", "archivo": "pabloxo - Fajos de 20 mil.mp3" },
            { "nombre": "pabloxo - Fumando en los clubes", "archivo": "pabloxo - Fumando en los clubes.mp3" },
            { "nombre": "pabloxo - lo hago x mi", "archivo": "pabloxo - lo hago x mi.mp3" },
            { "nombre": "pabloxo - no son dos f son clones", "archivo": "pabloxo - no son dos f son clones.mp3" },
            { "nombre": "pabloxo - Porrible", "archivo": "pabloxo - Porrible.mp3" },
            { "nombre": "pabloxo - Una mas por mis amigos", "archivo": "pabloxo - Una mas por mis amigos.mp3" },
            { "nombre": "pabloxo, Frozouda - Time Break", "archivo": "pabloxo, Frozouda - Time Break.mp3" },
            { "nombre": "pabloxo, Hwii - PABLOXO", "archivo": "pabloxo, Hwii - PABLOXO.mp3" },
        ]
    },
    {
        "name": "mecae",
        "cover": COVERS_BASE_URL + "img_mecae.png",
        "songs": [
            { "nombre": "cero - 5velas", "archivo": "cero - 5velas.mp3" },
            { "nombre": "cero - 10g", "archivo": "cero - 10g.mp3" },
            { "nombre": "cero - 1234", "archivo": "cero - 1234.mp3" },
            { "nombre": "cero - a correr", "archivo": "cero - a correr.mp3" },
            { "nombre": "cero - como roe", "archivo": "cero - como roe.mp3" },
            { "nombre": "cero - Con frio y calor", "archivo": "cero - Con frio y calor.mp3" },
            { "nombre": "cero - Ella", "archivo": "cero - Ella.mp3" },
            { "nombre": "cero - huida", "archivo": "cero - huida.mp3" },
            { "nombre": "cero - las otras victorias quedan chicas con lo que te anhelo", "archivo": "cero - las otras victorias quedan chicas con lo que te anhelo.mp3" },
            { "nombre": "cero - Plata dolida", "archivo": "cero - Plata dolida.mp3" },
            { "nombre": "cero - Plata tarada", "archivo": "cero - Plata tarada.mp3" },
            { "nombre": "cero - Sonajero", "archivo": "cero - Sonajero.mp3" },
            { "nombre": "cero - t2o", "archivo": "cero - t2o.mp3" },
            { "nombre": "cero - xq soy el villano", "archivo": "cero - xq soy el villano.mp3" },
            { "nombre": "cero, enzocerobulto - De concierto en concierto", "archivo": "cero, enzocerobulto - De concierto en concierto.mp3" },
            { "nombre": "cero, huntr - a donde vas¿", "archivo": "cero, huntr - a donde vas¿.mp3" },
            { "nombre": "cero, Jugo! - YeA 2", "archivo": "cero, Jugo! - YeA 2.mp3" },
            { "nombre": "cero, pabloxo - oki", "archivo": "cero, pabloxo - oki.mp3" },
        ]
    },
    {
        "name": "foe",
        "cover": COVERS_BASE_URL + "img_foe.png",
        "songs": [
            { "nombre": "cero - +personal", "archivo": "cero - +personal.mp3" },
            { "nombre": "cero, TURROBABY - a solas", "archivo": "cero, TURROBABY - a solas.mp3" },
            { "nombre": "cero, underaiki - sisu", "archivo": "cero, underaiki - sisu.mp3" },
            { "nombre": "cero - toco madera", "archivo": "cero - toco madera.mp3" },
            { "nombre": "cero - 1-2", "archivo": "cero - 1-2.mp3" },
            { "nombre": "cero, knak - TOA", "archivo": "cero, knak - TOA.mp3" },
            { "nombre": "cero - foe", "archivo": "cero - foe.mp3" },
        ]
    },
    {
        "name": "mecanico",
        "cover": COVERS_BASE_URL + "img_mecanico.png",
        "songs": [
            { "nombre": "cero - 2 Sedas", "archivo": "cero - 2 Sedas.mp3" },
            { "nombre": "cero - Cabra", "archivo": "cero - Cabra.mp3" },
            { "nombre": "cero - De moda", "archivo": "cero - De moda.mp3" },
            { "nombre": "cero - DEAM", "archivo": "cero - DEAM.mp3" },
            { "nombre": "cero - Drumkits en el pantalon", "archivo": "cero - Drumkits en el pantalon.mp3" },
            { "nombre": "cero - Locomotora", "archivo": "cero - Locomotora.mp3" },
            { "nombre": "cero - Mr wow", "archivo": "cero - Mr wow.mp3" },
            { "nombre": "cero - Sin ayuda", "archivo": "cero - Sin ayuda.mp3" },
            { "nombre": "cero - t & p", "archivo": "cero - t & p.mp3" },
            { "nombre": "cero - t", "archivo": "cero - t.mp3" },
            { "nombre": "cero - Vicky", "archivo": "cero - Vicky.mp3" },
            { "nombre": "cero - Ye A", "archivo": "cero - Ye A.mp3" },
            { "nombre": "cero, Doly Flackko - Peine teta", "archivo": "cero, Doly Flackko - Peine teta.mp3" },
            { "nombre": "cero, Jugo! - Voy a hacer historia", "archivo": "cero, Jugo! - Voy a hacer historia.mp3" },
            { "nombre": "cero, Lthelizard - Jakaranda", "archivo": "cero, Lthelizard - Jakaranda.mp3" },
            { "nombre": "cero, Sixup - Palo", "archivo": "cero, Sixup - Palo.mp3" },

        ]
    },
    {
        "name": "Piola Vago",
        "cover": COVERS_BASE_URL + "img_piola.png",
        "songs": [
            { "nombre": "Doly Flackko - Veneno", "archivo": "Doly Flackko - Veneno.mp3" },
            { "nombre": "Doly Flackko - Uber", "archivo": "Doly Flackko - Uber.mp3" },
            { "nombre": "Doly Flackko - TRES TRISTES TIGUERES", "archivo": "Doly Flackko - TRES TRISTES TIGUERES.mp3" },
            { "nombre": "Doly Flackko - Street Pain", "archivo": "Doly Flackko - Street Pain.mp3" },
            { "nombre": "Doly Flackko - PIOLA VAGO", "archivo": "Doly Flackko - PIOLA VAGO.mp3" },
            { "nombre": "Doly Flackko - Pala Ancha", "archivo": "Doly Flackko - Pala Ancha.mp3" },
            { "nombre": "Doly Flackko - Outro Chau", "archivo": "Doly Flackko - Outro Chau.mp3" },
            { "nombre": "Doly Flackko - Flackkosito", "archivo": "Doly Flackko - Flackkosito.mp3" },
            { "nombre": "Doly Flackko - donde queres estar", "archivo": "Doly Flackko - donde queres estar.mp3" },
            { "nombre": "Doly Flackko - Delirio de Grandeza", "archivo": "Doly Flackko - Delirio de Grandeza.mp3" },
            { "nombre": "Doly Flackko - Ambicion & Adrenalina", "archivo": "Doly Flackko - Ambicion & Adrenalina.mp3" },

        ]
    },
    {
        "name": "El Morfón",
        "cover": COVERS_BASE_URL + "img_morfon.png",
        "songs": [
            { "nombre": "eluney benedetti, TULO13 - Che", "archivo": "eluney benedetti, TULO13 - Che.mp3" },
            { "nombre": "eluney benedetti, elaiyah - Idioma", "archivo": "eluney benedetti, elaiyah - Idioma.mp3" },
            { "nombre": "eluney benedetti - aYvamo", "archivo": "eluney benedetti - aYvamo.mp3" },
            { "nombre": "eluney benedetti, elaiyah - Los3", "archivo": "eluney benedetti, elaiyah - Los3.mp3" },
            { "nombre": "eluney benedetti, TULO13 - Che", "archivo": "eluney benedetti, TULO13 - Che.mp3" },
            { "nombre": "eluney benedetti, elaiyah - A los palomos", "archivo": "eluney benedetti, elaiyah - A los palomos.mp3" },
            { "nombre": "eluney benedetti, elaiyah - El morfon", "archivo": "eluney benedetti, elaiyah - El morfon.mp3" },

        ]
    },

    {
        "name": "Pekelandia",
        "cover": COVERS_BASE_URL + "img_pekelandia.png",
        "songs": [
            { "nombre": "CHOOSEY, Yvng Jorge - Le TOTO", "archivo": "CHOOSEY, Yvng Jorge - Le TOTO.mp3" },
            { "nombre": "CHOOSEY, n0tgiova - DON ROKE", "archivo": "CHOOSEY, n0tgiova - DON ROKE.mp3" },
            { "nombre": "CHOOSEY, DLANG - DE MAS DE MI", "archivo": "CHOOSEY, DLANG - DE MAS DE MI.mp3" },
            { "nombre": "CHOOSEY - X Belgrano", "archivo": "CHOOSEY - X Belgrano.mp3" },
            { "nombre": "CHOOSEY - SIGAN SIN MI", "archivo": "CHOOSEY - SIGAN SIN MI.mp3" },
            { "nombre": "CHOOSEY - ROMPEDISKOTECA", "archivo": "CHOOSEY - ROMPEDISKOTECA.mp3" },
            { "nombre": "CHOOSEY - QUE CONCHA QUERES", "archivo": "CHOOSEY - QUE CONCHA QUERES.mp3" },
            { "nombre": "CHOOSEY - pero CHATGPT", "archivo": "CHOOSEY - pero CHATGPT.mp3" },
            { "nombre": "CHOOSEY - ORISHINAL", "archivo": "CHOOSEY - ORISHINAL.mp3" },
            { "nombre": "CHOOSEY - MI NUMERO TELEFONICO", "archivo": "CHOOSEY - MI NUMERO TELEFONICO.mp3" },
            { "nombre": "CHOOSEY - mi AUTOMOVIL", "archivo": "CHOOSEY - mi AUTOMOVIL.mp3" },
            { "nombre": "CHOOSEY - DITOYS", "archivo": "CHOOSEY - DITOYS.mp3" },
            { "nombre": "CHOOSEY - CARS BEAT", "archivo": "CHOOSEY - CARS BEAT.mp3" },
            { "nombre": "CHOOSEY - BANCO", "archivo": "CHOOSEY - BANCO.mp3" },
            { "nombre": "CHOOSEY - 100 LUCHA", "archivo": "CHOOSEY - 100 LUCHA.mp3" },
            { "nombre": "CHOOSEY - 3 MONITOS", "archivo": "CHOOSEY - 3 MONITOS.mp3" },
            { "nombre": "CHOOSEY - 2 SAMPLEOS", "archivo": "CHOOSEY - 2 SAMPLEOS.mp3" },
            { "nombre": "CHOOSEY - 1-2 groupie", "archivo": "CHOOSEY - 1-2 groupie.mp3" },

        ]
    },

    /*
    {
        "name": "",
        "cover": WORKER_URL + "albums//img_.png",
        "songs": [
            { "nombre": "", "archivo": "" },
            { "nombre": "", "archivo": "" },
            { "nombre": "", "archivo": "" },
            { "nombre": "", "archivo": "" },
            { "nombre": "", "archivo": "" },
            { "nombre": "", "archivo": "" },
            { "nombre": "", "archivo": "" },
        ]
    },
    */
];


