const WORKER_URL = "https://underless-audio.heladoposting.workers.dev/";
const COVERS_BASE_URL = "./covers/";

const biblioteca = [
    {
        "nombre": "143LETI - En mis sueños soy tu novia",
        "archivo": "n1.mp3",
        "songId": "song_s8tl1v3y"
    },
    {
        "nombre": "143LETI - EU TE AMO",
        "archivo": "n2.mp3",
        "songId": "song_2j8be79r"
    },
    {
        "nombre": "143LETI, VALUTO  - COSAS QUE ESTAN MAL",
        "archivo": "n3.mp3",
        "songId": "song_ckhmipor"
    },
    {
        "nombre": "2UU!, Asan - CELOSA",
        "archivo": "n4.mp3",
        "songId": "song_p7vm2cfr"
    },
    {
        "nombre": "2UU!, enzocerobulto, Jugo!, Soowney - ESO QUERE TULI",
        "archivo": "n5.mp3",
        "songId": "song_ugr06uo8"
    },
    {
        "nombre": "2UU!, turrobaby - LA GATA GOZA",
        "archivo": "n6.mp3",
        "songId": "song_tzwmofob"
    },
    {
        "nombre": "AFKgoat - 1VUELTAINTERMINABLE",
        "archivo": "n7.mp3",
        "songId": "song_unny8708"
    },
    {
        "nombre": "AFKgoat - ASI NO",
        "archivo": "n8.mp3",
        "songId": "song_6uaw9zrf"
    },
    {
        "nombre": "AFKgoat - OSLAVA",
        "archivo": "n9.mp3",
        "songId": "song_zl3bfdqh"
    },
    {
        "nombre": "AFKgoat - Te caigo mas tarde",
        "archivo": "n10.mp3",
        "songId": "song_fu4riyb0"
    },
    {
        "nombre": "AFKgoat, cero  - ME QUEMAN LOS DEDOS",
        "archivo": "n11.mp3",
        "songId": "song_jba8py7g"
    },
    {
        "nombre": "AFKgoat- DEFRENTEMAL",
        "archivo": "n12.mp3",
        "songId": "song_vpfah03e"
    },
    {
        "nombre": "AGUSFORTNITE2008 - FLEKO",
        "archivo": "n13.mp3",
        "songId": "song_7k0shu14"
    },
    {
        "nombre": "AGUSFORTNITE2008 - PASO",
        "archivo": "n14.mp3",
        "songId": "song_bu5q89jk"
    },
    {
        "nombre": "AGUSFORTNITE2008 - SWAGGEANDO EN EL BANDO",
        "archivo": "n15.mp3",
        "songId": "song_hi9fp187"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - 24 7",
        "archivo": "n16.mp3",
        "songId": "song_znzfeiij"
    },
    {
        "nombre": "AGUSFORTNITE2008, STIFFY - CUANDO QUIERO",
        "archivo": "n17.mp3",
        "songId": "song_v8puwoaj"
    },
    {
        "nombre": "AGUSFORTNITE2008, STIFFY - DISTINTO",
        "archivo": "n18.mp3",
        "songId": "song_eza14w8v"
    },
    {
        "nombre": "AGUSFORTNITE2008, STIFFY - GOFUE",
        "archivo": "n19.mp3",
        "songId": "song_fj43udpk"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - GUISO",
        "archivo": "n20.mp3",
        "songId": "song_3tq2qnjk"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - MUSICA DE ASCENSOR",
        "archivo": "n21.mp3",
        "songId": "song_mdaq3ygh"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - PIE EN LA PISTA",
        "archivo": "n22.mp3",
        "songId": "song_skqje9e4"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, NEO PISTEA - MEJORALITO",
        "archivo": "n23.mp3",
        "songId": "song_1w7idehu"
    },
    {
        "nombre": "bic - letal",
        "archivo": "n24.mp3",
        "songId": "song_lglu0jcc"
    },
    {
        "nombre": "bic - mis maneras",
        "archivo": "n25.mp3",
        "songId": "song_rrqh05v1"
    },
    {
        "nombre": "bic - phone off",
        "archivo": "n26.mp3",
        "songId": "song_cyult56j"
    },
    {
        "nombre": "Blagh  - GET IT UP",
        "archivo": "n27.mp3",
        "songId": "song_j20t036v"
    },
    {
        "nombre": "Blagh  - High",
        "archivo": "n28.mp3",
        "songId": "song_k4p8kyj9"
    },
    {
        "nombre": "Blagh  - No Loyalty",
        "archivo": "n29.mp3",
        "songId": "song_qlqiw57d"
    },
    {
        "nombre": "Blagh - 2013",
        "archivo": "n30.mp3",
        "songId": "song_sxfgaba5"
    },
    {
        "nombre": "Blagh - Toxico",
        "archivo": "n31.mp3",
        "songId": "song_297hza0n"
    },
    {
        "nombre": "Blagh, Agush  - TIBURON",
        "archivo": "n32.mp3",
        "songId": "song_pnx1su55"
    },
    {
        "nombre": "Blagh, Agush - sex",
        "archivo": "n33.mp3",
        "songId": "song_w0sb44l0"
    },
    {
        "nombre": "cero - 1234",
        "archivo": "n34.mp3",
        "songId": "song_a9ilctdg"
    },
    {
        "nombre": "cero - como roe",
        "archivo": "n35.mp3",
        "songId": "song_jb36uv4v"
    },
    {
        "nombre": "cero - Con frio y calor",
        "archivo": "n36.mp3",
        "songId": "song_77enz0jb"
    },
    {
        "nombre": "cero - De moda",
        "archivo": "n37.mp3",
        "songId": "song_ntbpzpua"
    },
    {
        "nombre": "Cero - Mr wow",
        "archivo": "n38.mp3",
        "songId": "song_y7wlld6o"
    },
    {
        "nombre": "Cero - Sonajero",
        "archivo": "n39.mp3",
        "songId": "song_27szpy3v"
    },
    {
        "nombre": "cero - t2o",
        "archivo": "n40.mp3",
        "songId": "song_5uxl3cvn"
    },
    {
        "nombre": "cero - xq soy el villano",
        "archivo": "n41.mp3",
        "songId": "song_bqkckey3"
    },
    {
        "nombre": "cero, enzocerobulto - De concierto en concierto",
        "archivo": "n42.mp3",
        "songId": "song_qfh9yf2j"
    },
    {
        "nombre": "cero, knak - TOA",
        "archivo": "n43.mp3",
        "songId": "song_u4650f9x"
    },
    {
        "nombre": "cero, TURROBABY - Slat",
        "archivo": "n44.mp3",
        "songId": "song_suza15qe"
    },
    {
        "nombre": "Chiki Wanted - que es el under",
        "archivo": "n45.mp3",
        "songId": "song_jhjj6f6d"
    },
    {
        "nombre": "CHOOSEY , STIFFY - BeastieBoyZZZ",
        "archivo": "n46.mp3",
        "songId": "song_gzdl47z2"
    },
    {
        "nombre": "CHOOSEY - 1-2 groupie",
        "archivo": "n47.mp3",
        "songId": "song_rrh0lmkq"
    },
    {
        "nombre": "CHOOSEY - 100 LUCHA",
        "archivo": "n48.mp3",
        "songId": "song_d9kdulxe"
    },
    {
        "nombre": "CHOOSEY - 2 SAMPLEOS",
        "archivo": "n49.mp3",
        "songId": "song_02j20nzo"
    },
    {
        "nombre": "CHOOSEY - ADOPTA POSES",
        "archivo": "n50.mp3",
        "songId": "song_9s6904yy"
    },
    {
        "nombre": "CHOOSEY - ROMPEDISKOTECA",
        "archivo": "n51.mp3",
        "songId": "song_trdirzpz"
    },
    {
        "nombre": "CHOOSEY - SI NO ME CONOCES",
        "archivo": "n52.mp3",
        "songId": "song_k0gaiwje"
    },
    {
        "nombre": "Cluster - Muy imbecil",
        "archivo": "n53.mp3",
        "songId": "song_oo4hzj42"
    },
    {
        "nombre": "Cluster, Doly Flackko - OREO",
        "archivo": "n54.mp3",
        "songId": "song_juikyo04"
    },
    {
        "nombre": "Cluster, Duki - aGaRRo La PLaTa",
        "archivo": "n55.mp3",
        "songId": "song_qpvqxk41"
    },
    {
        "nombre": "Cluster, Frozouda - TOP 1 CHARTS",
        "archivo": "n56.mp3",
        "songId": "song_ser3s4zl"
    },
    {
        "nombre": "Cluster, Pabloxo - OTRA SEDA",
        "archivo": "n57.mp3",
        "songId": "song_anctt96u"
    },
    {
        "nombre": "cybernene, TURROBABY - LEANCOLN REMIX",
        "archivo": "n58.mp3",
        "songId": "song_2kq2uq4s"
    },
    {
        "nombre": "Doly Flackko - LEGENDARIO",
        "archivo": "n59.mp3",
        "songId": "song_zgn7my44"
    },
    {
        "nombre": "Doly Flackko - PIOLA VAGO",
        "archivo": "n60.mp3",
        "songId": "song_demr7r8p"
    },
    {
        "nombre": "Doly Flackko - TRES TRISTES TIGUERES",
        "archivo": "n61.mp3",
        "songId": "song_b074ior5"
    },
    {
        "nombre": "Doly Flackko - Uber",
        "archivo": "n62.mp3",
        "songId": "song_gbe3op86"
    },
    {
        "nombre": "EL DOCTOR - STARBOY",
        "archivo": "n63.mp3",
        "songId": "song_6p8y997l"
    },
    {
        "nombre": "elchombapolo - CHIQUI TAPIA",
        "archivo": "n64.mp3",
        "songId": "song_yknch2t2"
    },
    {
        "nombre": "elchombapolo - el under me chupa la pija",
        "archivo": "n65.mp3",
        "songId": "song_b3sva48t"
    },
    {
        "nombre": "elchombapolo - Estoy En Tu Cesped",
        "archivo": "n66.mp3",
        "songId": "song_mjkcz1aq"
    },
    {
        "nombre": "elchombapolo - UN OSO WACHO",
        "archivo": "n67.mp3",
        "songId": "song_xi63aj4f"
    },
    {
        "nombre": "enzocerobulto - Falsa tu cara de Cristo",
        "archivo": "n68.mp3",
        "songId": "song_ql4s239c"
    },
    {
        "nombre": "enzocerobulto - Hasta que termine el dia",
        "archivo": "n69.mp3",
        "songId": "song_s91irehy"
    },
    {
        "nombre": "enzocerobulto - Ocupado en mi droga",
        "archivo": "n70.mp3",
        "songId": "song_ypuatxm8"
    },
    {
        "nombre": "enzocerobulto - Un banger tras otro",
        "archivo": "n71.mp3",
        "songId": "song_pi6i1f71"
    },
    {
        "nombre": "enzocerobulto - una tira",
        "archivo": "n72.mp3",
        "songId": "song_096l2p08"
    },
    {
        "nombre": "enzocerobulto, 2UU! - Tanta plata",
        "archivo": "n73.mp3",
        "songId": "song_jyfk746h"
    },
    {
        "nombre": "enzocerobulto, panchitolefleur - Por un cuarto",
        "archivo": "n74.mp3",
        "songId": "song_h7x2y1ep"
    },
    {
        "nombre": "Francis Jeremy, Banatroll - Skibidi Toilet",
        "archivo": "n75.mp3",
        "songId": "song_ubn640o0"
    },
    {
        "nombre": "Frozouda , Cero , Cluster - plinko",
        "archivo": "n76.mp3",
        "songId": "song_qhsq7gv2"
    },
    {
        "nombre": "Frozouda - doble F con visa",
        "archivo": "n77.mp3",
        "songId": "song_sec63v10"
    },
    {
        "nombre": "Frozouda - fumamos una ZAZA",
        "archivo": "n78.mp3",
        "songId": "song_ftyyjopw"
    },
    {
        "nombre": "Frozouda - GAS O PORRO",
        "archivo": "n79.mp3",
        "songId": "song_6hvxzxel"
    },
    {
        "nombre": "Frozouda - hot money",
        "archivo": "n80.mp3",
        "songId": "song_eu7wq6f6"
    },
    {
        "nombre": "Frozouda - mi RACE",
        "archivo": "n81.mp3",
        "songId": "song_jferwpne"
    },
    {
        "nombre": "Frozouda - nicki nicole",
        "archivo": "n82.mp3",
        "songId": "song_z19n1uxn"
    },
    {
        "nombre": "Frozouda - quitate las BAPE",
        "archivo": "n83.mp3",
        "songId": "song_0czmocbq"
    },
    {
        "nombre": "Frozouda - quitate los Jeans",
        "archivo": "n84.mp3",
        "songId": "song_72aknyvp"
    },
    {
        "nombre": "Frozouda - tatiana !",
        "archivo": "n85.mp3",
        "songId": "song_4l72318q"
    },
    {
        "nombre": "Frozouda - TOP !",
        "archivo": "n86.mp3",
        "songId": "song_jqzo76ux"
    },
    {
        "nombre": "Frozouda - un goat siempre esta busy",
        "archivo": "n87.mp3",
        "songId": "song_nishzl1j"
    },
    {
        "nombre": "Frozouda, Cluster - hot box",
        "archivo": "n88.mp3",
        "songId": "song_pjctru1n"
    },
    {
        "nombre": "Frozouda, Jugo!, KNAK - chirlito",
        "archivo": "n89.mp3",
        "songId": "song_uxx2t3nm"
    },
    {
        "nombre": "Hepa - Batman",
        "archivo": "n90.mp3",
        "songId": "song_42pkjivc"
    },
    {
        "nombre": "Hepa - Cuando estas high",
        "archivo": "n91.mp3",
        "songId": "song_i8i3h9oe"
    },
    {
        "nombre": "Hepa - Lovestar",
        "archivo": "n92.mp3",
        "songId": "song_fchjz38m"
    },
    {
        "nombre": "Hepa - Sintonizame",
        "archivo": "n93.mp3",
        "songId": "song_ta5exg01"
    },
    {
        "nombre": "Hepa - Varios Puntos",
        "archivo": "n94.mp3",
        "songId": "song_zjwrbyh3"
    },
    {
        "nombre": "huntr - baby boo",
        "archivo": "n95.mp3",
        "songId": "song_y139it8i"
    },
    {
        "nombre": "huntr - esta va porque te quiero",
        "archivo": "n96.mp3",
        "songId": "song_to2dspn8"
    },
    {
        "nombre": "huntr - partydanc3",
        "archivo": "n97.mp3",
        "songId": "song_xeruaf10"
    },
    {
        "nombre": "ISMA - 2037",
        "archivo": "n98.mp3",
        "songId": "song_jgl7t9eq"
    },
    {
        "nombre": "ISMA - Antes del Amanecer",
        "archivo": "n99.mp3",
        "songId": "song_1hlkmsdd"
    },
    {
        "nombre": "ISMA - Cuanto va a pasar",
        "archivo": "n100.mp3",
        "songId": "song_jd1mapsv"
    },
    {
        "nombre": "ISMA, LOLO  - CUAL ES TU PLAN",
        "archivo": "n101.mp3",
        "songId": "song_ojsn3rvj"
    },
    {
        "nombre": "jovenalien - ME PASO LA SEMANA",
        "archivo": "n102.mp3",
        "songId": "song_tvgg0ki6"
    },
    {
        "nombre": "jovenalien - No vale la pena enojarse",
        "archivo": "n103.mp3",
        "songId": "song_80cxcr31"
    },
    {
        "nombre": "jovenalien - tengo hambre",
        "archivo": "n104.mp3",
        "songId": "song_2uusc9li"
    },
    {
        "nombre": "Jugo! , Cluster - Nos retiene el estado",
        "archivo": "n105.mp3",
        "songId": "song_1abmqogs"
    },
    {
        "nombre": "Jugo! , enzocerobulto - Musicalmente",
        "archivo": "n106.mp3",
        "songId": "song_ajdft4mb"
    },
    {
        "nombre": "Jugo! , YSY A - Todo el dia en el trap",
        "archivo": "n107.mp3",
        "songId": "song_uafaf5iq"
    },
    {
        "nombre": "Jugo!, salas flaco - Desfile",
        "archivo": "n108.mp3",
        "songId": "song_1kbdfpb9"
    },
    {
        "nombre": "KERCHAK, Cluster - No Me Pienso Demorar",
        "archivo": "n109.mp3",
        "songId": "song_wr6w3jwe"
    },
    {
        "nombre": "KERCHAK - Viviendo Al Corte",
        "archivo": "n110.mp3",
        "songId": "song_juiqirrp"
    },
    {
        "nombre": "KERCHAK, Cluster - Una Noche Con Los Tios 2",
        "archivo": "n111.mp3",
        "songId": "song_i4fbg4ea"
    },
    {
        "nombre": "KERCHAK, enzocerobulto - Chamuyo Habilidoso",
        "archivo": "n112.mp3",
        "songId": "song_p877agsn"
    },
    {
        "nombre": "KERCHAK, PANCHITOLEFLEUR - ANOTHER NIGHT WITH THE UNCLE",
        "archivo": "n113.mp3",
        "songId": "song_lesy1gii"
    },
    {
        "nombre": "KERCHAK, PANCHITOLEFLEUR - Tamo a Full",
        "archivo": "n114.mp3",
        "songId": "song_hd7lcnbt"
    },
    {
        "nombre": "KERCHAK, TURROBABY, Cluster, Tuw4 - Un picadito",
        "archivo": "n115.mp3",
        "songId": "song_7tcitj40"
    },
    {
        "nombre": "laura sad - chupavrga",
        "archivo": "n116.mp3",
        "songId": "song_guey26du"
    },
    {
        "nombre": "laura sad - i Laurie",
        "archivo": "n117.mp3",
        "songId": "song_e0qblvwk"
    },
    {
        "nombre": "laura sad, LOLO - Joseador Boy",
        "archivo": "n118.mp3",
        "songId": "song_vz1wbi3f"
    },
    {
        "nombre": "laura sad, MAGNESIO - Perdon Mama",
        "archivo": "n119.mp3",
        "songId": "song_qx9kuq2o"
    },
    {
        "nombre": "LITTLE BOOGIE - CLICK CLACK",
        "archivo": "n120.mp3",
        "songId": "song_tbbharuu"
    },
    {
        "nombre": "LITTLE BOOGIE - COMPA LO HICIMOS",
        "archivo": "n121.mp3",
        "songId": "song_uvrlubl9"
    },
    {
        "nombre": "LITTLE BOOGIE - DANDO CLASE",
        "archivo": "n122.mp3",
        "songId": "song_4yu91pxv"
    },
    {
        "nombre": "LITTLE BOOGIE - DEJA DE SUFRIR",
        "archivo": "n123.mp3",
        "songId": "song_oahtc8ks"
    },
    {
        "nombre": "LITTLE BOOGIE - LITTLE BOOGIE VS EL GOBIERNO",
        "archivo": "n124.mp3",
        "songId": "song_9v3c7g0v"
    },
    {
        "nombre": "LITTLE BOOGIE - LOS DEL BOHIO",
        "archivo": "n125.mp3",
        "songId": "song_1vcxn46j"
    },
    {
        "nombre": "LITTLE BOOGIE - OKUPAS",
        "archivo": "n126.mp3",
        "songId": "song_0uafxqo4"
    },
    {
        "nombre": "LITTLE BOOGIE - TODO BIEN TODO CHETO",
        "archivo": "n127.mp3",
        "songId": "song_jsgoqbt9"
    },
    {
        "nombre": "LITTLE BOOGIE, DOLY FLACKKO - EL MUNDO ES MIO",
        "archivo": "n128.mp3",
        "songId": "song_wnv89w0m"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR - BILLIE JEAN",
        "archivo": "n129.mp3",
        "songId": "song_nxvina0r"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR, RUSHERKING - SOY FAMOSO Y TENGO PLATA",
        "archivo": "n130.mp3",
        "songId": "song_g64qa8ul"
    },
    {
        "nombre": "LOLO , BANATROLL - HAZ MAS DINERO",
        "archivo": "n131.mp3",
        "songId": "song_i88rbhta"
    },
    {
        "nombre": "LOLO , BANATROLL - TOY GANADO",
        "archivo": "n132.mp3",
        "songId": "song_kpj9ufij"
    },
    {
        "nombre": "LOLO , CHOOSEY - QUE PUEDE PASAR",
        "archivo": "n133.mp3",
        "songId": "song_1dmc5i5m"
    },
    {
        "nombre": "LOLO - A TU MODO",
        "archivo": "n134.mp3",
        "songId": "song_pevfj5m4"
    },
    {
        "nombre": "LOLO - EMILIA MERNES",
        "archivo": "n135.mp3",
        "songId": "song_mej6rbhv"
    },
    {
        "nombre": "LOLO - FERNET HIELO",
        "archivo": "n136.mp3",
        "songId": "song_12jc5yn4"
    },
    {
        "nombre": "LOLO - GASTEMOS MAS",
        "archivo": "n137.mp3",
        "songId": "song_q0ivrpfq"
    },
    {
        "nombre": "LOLO - HATER",
        "archivo": "n138.mp3",
        "songId": "song_31bxy36i"
    },
    {
        "nombre": "LOLO - HOY SI QUEMO",
        "archivo": "n139.mp3",
        "songId": "song_odheuch1"
    },
    {
        "nombre": "LOLO - MINI LOLO",
        "archivo": "n140.mp3",
        "songId": "song_paailwkq"
    },
    {
        "nombre": "LOLO - OSCUROoOo",
        "archivo": "n141.mp3",
        "songId": "song_2f2q3cu6"
    },
    {
        "nombre": "LOLO - QUIEN FUE",
        "archivo": "n142.mp3",
        "songId": "song_ir7fedeb"
    },
    {
        "nombre": "LOLO - YO RAPERO ELLA DELANTERA",
        "archivo": "n143.mp3",
        "songId": "song_86unbu2h"
    },
    {
        "nombre": "LOLO, 143LETI - LUNES A VIERNES",
        "archivo": "n144.mp3",
        "songId": "song_he3jjfaj"
    },
    {
        "nombre": "MAGNESIO - MAS LENTO",
        "archivo": "n145.mp3",
        "songId": "song_py39zcmz"
    },
    {
        "nombre": "MAGNESIO - OLLA POPULAR",
        "archivo": "n146.mp3",
        "songId": "song_c22almsm"
    },
    {
        "nombre": "MAGNESIO - WING WANG WOW",
        "archivo": "n147.mp3",
        "songId": "song_ze0kvslg"
    },
    {
        "nombre": "MAGNESIO - ZLATAN",
        "archivo": "n148.mp3",
        "songId": "song_cphzqbr7"
    },
    {
        "nombre": "MAGNESIO, White! - GOKU",
        "archivo": "n149.mp3",
        "songId": "song_6sxqjmqu"
    },
    {
        "nombre": "Matias Fisher - Muerte en Halloween",
        "archivo": "n150.mp3",
        "songId": "song_8btpbqpa"
    },
    {
        "nombre": "Nykoo0 - Anorexico",
        "archivo": "n151.mp3",
        "songId": "song_p605vle8"
    },
    {
        "nombre": "Nykoo0 - Que sabes de amor",
        "archivo": "n152.mp3",
        "songId": "song_obni71sl"
    },
    {
        "nombre": "pa2k, cero - Rn",
        "archivo": "n153.mp3",
        "songId": "song_n492o710"
    },
    {
        "nombre": "pa2k, cero - yEye",
        "archivo": "n154.mp3",
        "songId": "song_p5wo4wpi"
    },
    {
        "nombre": "pa2k, enzocerobulto - BOYFRIEND",
        "archivo": "n155.mp3",
        "songId": "song_oamt0sr6"
    },
    {
        "nombre": "pa2k, enzocerobulto - RIGHT NOW",
        "archivo": "n156.mp3",
        "songId": "song_qk50xz18"
    },
    {
        "nombre": "pabloxo - dosydos",
        "archivo": "n157.mp3",
        "songId": "song_xprmlj9w"
    },
    {
        "nombre": "pabloxo - lo hago x mi",
        "archivo": "n158.mp3",
        "songId": "song_bjryr4uo"
    },
    {
        "nombre": "pabloxo - no son dos f son clones",
        "archivo": "n159.mp3",
        "songId": "song_3jzmtc8v"
    },
    {
        "nombre": "PANKKY - FREEHOMMIES",
        "archivo": "n160.mp3",
        "songId": "song_fccxmnjy"
    },
    {
        "nombre": "PANKKY - GLOPETA",
        "archivo": "n161.mp3",
        "songId": "song_4288tuab"
    },
    {
        "nombre": "PANKKY - TELL ME",
        "archivo": "n162.mp3",
        "songId": "song_t7dcyu5h"
    },
    {
        "nombre": "papirola - sos mi papirola",
        "archivo": "n163.mp3",
        "songId": "song_ljwb7j9p"
    },
    {
        "nombre": "salas flaco - PANICO ESCENICO",
        "archivo": "n164.mp3",
        "songId": "song_rlx2r54d"
    },
    {
        "nombre": "salas flaco - Por Argentina",
        "archivo": "n165.mp3",
        "songId": "song_09um9roh"
    },
    {
        "nombre": "salas flaco - TAN MALA",
        "archivo": "n166.mp3",
        "songId": "song_eih9umdq"
    },
    {
        "nombre": "salas flaco, Bhavi, Asan - EL DINERO DE INTERNET",
        "archivo": "n167.mp3",
        "songId": "song_dia77wfz"
    },
    {
        "nombre": "Shako , Jugo! - Medio Tana",
        "archivo": "n168.mp3",
        "songId": "song_uk2vsik4"
    },
    {
        "nombre": "Shako - 4eva",
        "archivo": "n169.mp3",
        "songId": "song_rbowdwgp"
    },
    {
        "nombre": "Shako - Amigdalas",
        "archivo": "n170.mp3",
        "songId": "song_su693fdf"
    },
    {
        "nombre": "Shako - Hotel",
        "archivo": "n171.mp3",
        "songId": "song_xfrace5p"
    },
    {
        "nombre": "Shako - RACKLESS",
        "archivo": "n172.mp3",
        "songId": "song_8dew07zw"
    },
    {
        "nombre": "Shako - vas a ver el alma mula",
        "archivo": "n173.mp3",
        "songId": "song_tc6gupsd"
    },
    {
        "nombre": "Shako, Bhavi, Seven Kayne - K.O",
        "archivo": "n174.mp3",
        "songId": "song_kz2f020a"
    },
    {
        "nombre": "SixUp - Anti",
        "archivo": "n175.mp3",
        "songId": "song_w694s0p7"
    },
    {
        "nombre": "SixUp - DobleVaso",
        "archivo": "n176.mp3",
        "songId": "song_peu97ac3"
    },
    {
        "nombre": "SixUp - TikiTime",
        "archivo": "n177.mp3",
        "songId": "song_b5n6io6w"
    },
    {
        "nombre": "SixUp - TripleVaso",
        "archivo": "n178.mp3",
        "songId": "song_mq69f2q7"
    },
    {
        "nombre": "Stiffy - FARANDULERO",
        "archivo": "n179.mp3",
        "songId": "song_jj5q3t3p"
    },
    {
        "nombre": "Stiffy - GUAP",
        "archivo": "n180.mp3",
        "songId": "song_0g3qkjy4"
    },
    {
        "nombre": "Stiffy - GUASO BALLS Z",
        "archivo": "n181.mp3",
        "songId": "song_8uh72jxy"
    },
    {
        "nombre": "Stiffy - MECHINSTRONGAS",
        "archivo": "n182.mp3",
        "songId": "song_7uknur4r"
    },
    {
        "nombre": "Stiffy - NO ES LO QUE PENSAS",
        "archivo": "n183.mp3",
        "songId": "song_8onvgx5l"
    },
    {
        "nombre": "Stiffy - NO LA CUELGO",
        "archivo": "n184.mp3",
        "songId": "song_hwjjfrrf"
    },
    {
        "nombre": "Stiffy - SANDRO",
        "archivo": "n185.mp3",
        "songId": "song_r2znh0j4"
    },
    {
        "nombre": "Stiffy - SWAG DE SOSA",
        "archivo": "n186.mp3",
        "songId": "song_r2i3yiaz"
    },
    {
        "nombre": "Stiffy, Agusfortnite2008 - AFIP",
        "archivo": "n187.mp3",
        "songId": "song_27lnyut4"
    },
    {
        "nombre": "Stiffy, AGUSFORTNITE2008 - QUIERE PENE",
        "archivo": "n188.mp3",
        "songId": "song_0horexho"
    },
    {
        "nombre": "Stiffy, Jon Z - COMO ANTES",
        "archivo": "n189.mp3",
        "songId": "song_15rig9ls"
    },
    {
        "nombre": "Stiffy, Rojuu - AMNESIA",
        "archivo": "n190.mp3",
        "songId": "song_0a2txv2u"
    },
    {
        "nombre": "STIFFY, TURROBABY, ZELL, AGUSFORTNITE2008 - BABASONICO",
        "archivo": "n191.mp3",
        "songId": "song_nux88jst"
    },
    {
        "nombre": "TURROBABY - 2017",
        "archivo": "n192.mp3",
        "songId": "song_ibdc1xge"
    },
    {
        "nombre": "TURROBABY - Aca y Alla y En Todos Lados",
        "archivo": "n193.mp3",
        "songId": "song_qrajbzsg"
    },
    {
        "nombre": "TURROBABY - Bajo El Sol",
        "archivo": "n194.mp3",
        "songId": "song_thsbgzf4"
    },
    {
        "nombre": "TURROBABY - COLOMBIANA HOODTRAP",
        "archivo": "n195.mp3",
        "songId": "song_xe0yjdwa"
    },
    {
        "nombre": "TURROBABY - Cornudo Consciente",
        "archivo": "n196.mp3",
        "songId": "song_32b9voi1"
    },
    {
        "nombre": "TURROBABY - Filmemos Una Peli",
        "archivo": "n197.mp3",
        "songId": "song_5b6omub4"
    },
    {
        "nombre": "TURROBABY - Sergio Massa",
        "archivo": "n198.mp3",
        "songId": "song_67mlpdwz"
    },
    {
        "nombre": "TURROBABY - SIMO VIANI",
        "archivo": "n199.mp3",
        "songId": "song_jspnanmm"
    },
    {
        "nombre": "TURROBABY - Wacha Flequilluda",
        "archivo": "n200.mp3",
        "songId": "song_bzfmfj23"
    },
    {
        "nombre": "TURROBABY - YPF",
        "archivo": "n201.mp3",
        "songId": "song_diasl0bs"
    },
    {
        "nombre": "TURROBABY, Bhavi - Parabrisas",
        "archivo": "n202.mp3",
        "songId": "song_56do1tdd"
    },
    {
        "nombre": "TURROBABY, Doble P - ANTO ROCUZZO",
        "archivo": "n203.mp3",
        "songId": "song_vzmaa9nw"
    },
    {
        "nombre": "TURROBABY, enzocerobulto - Las Seis",
        "archivo": "n204.mp3",
        "songId": "song_v03dg44t"
    },
    {
        "nombre": "TURROBABY, Lolo OG - Lovebombing",
        "archivo": "n205.mp3",
        "songId": "song_9kfurvoe"
    },
    {
        "nombre": "TURROBABY, Stiffy - PENDEJO ATREVIDO",
        "archivo": "n206.mp3",
        "songId": "song_9n6hutii"
    },
    {
        "nombre": "TURROBABY, ZELL - Inter De Miami",
        "archivo": "n207.mp3",
        "songId": "song_r25mavv1"
    },
    {
        "nombre": "TURROBABY, ZELL, Stiffy - Cara De Boludo",
        "archivo": "n208.mp3",
        "songId": "song_plpo4tkr"
    },
    {
        "nombre": "vahel - .",
        "archivo": "n209.mp3",
        "songId": "song_8w7bb28f"
    },
    {
        "nombre": "vahel - PLAN B",
        "archivo": "n210.mp3",
        "songId": "song_j75nooe8"
    },
    {
        "nombre": "vahel - tunel",
        "archivo": "n211.mp3",
        "songId": "song_z82l8jst"
    },
    {
        "nombre": "vahel, pachudani - loquita",
        "archivo": "n212.mp3",
        "songId": "song_k7cndyxs"
    },
    {
        "nombre": "White! - FR",
        "archivo": "n213.mp3",
        "songId": "song_hrah2u3h"
    },
    {
        "nombre": "White! - No lo intentes en tu home",
        "archivo": "n214.mp3",
        "songId": "song_x47o41pr"
    },
    {
        "nombre": "White! - X - RAY",
        "archivo": "n215.mp3",
        "songId": "song_fjrlmg0o"
    },
    {
        "nombre": "White!, magnesio - Shen Long",
        "archivo": "n216.mp3",
        "songId": "song_ah2pxzqz"
    },
    {
        "nombre": "Zell - ballin de verdad",
        "archivo": "n217.mp3",
        "songId": "song_qaugr91h"
    },
    {
        "nombre": "Zell - Ballin",
        "archivo": "n218.mp3",
        "songId": "song_n9galdte"
    },
    {
        "nombre": "Zell - calvin klein",
        "archivo": "n219.mp3",
        "songId": "song_kkhz49e5"
    },
    {
        "nombre": "Zell - diva",
        "archivo": "n220.mp3",
        "songId": "song_al85ch52"
    },
    {
        "nombre": "Zell - iceberg",
        "archivo": "n221.mp3",
        "songId": "song_40hpk8py"
    },
    {
        "nombre": "Zell - iPhone",
        "archivo": "n222.mp3",
        "songId": "song_jzpy7ft3"
    },
    {
        "nombre": "Zell - Joven Ballin",
        "archivo": "n223.mp3",
        "songId": "song_wrbly0dm"
    },
    {
        "nombre": "Zell - piso 3",
        "archivo": "n224.mp3",
        "songId": "song_u5c57fm2"
    },
    {
        "nombre": "Zell - Ritual",
        "archivo": "n225.mp3",
        "songId": "song_m6ykzoc1"
    },
    {
        "nombre": "Zell - Starboy",
        "archivo": "n226.mp3",
        "songId": "song_r8uqne76"
    },
    {
        "nombre": "Zell - stripper",
        "archivo": "n227.mp3",
        "songId": "song_xfx353dm"
    },
    {
        "nombre": "Zell - Uber",
        "archivo": "n228.mp3",
        "songId": "song_yzsgmynr"
    },
    {
        "nombre": "Zell - vamonos",
        "archivo": "n229.mp3",
        "songId": "song_tvkjjk0f"
    },
    {
        "nombre": "Zell - webcam",
        "archivo": "n230.mp3",
        "songId": "song_jfc4dc3c"
    },
    {
        "nombre": "Zell - Whats Up",
        "archivo": "n231.mp3",
        "songId": "song_u9n7o72a"
    },
    {
        "nombre": "Zell, KNAK - ZiploK",
        "archivo": "n232.mp3",
        "songId": "song_qbr14twi"
    },
    {
        "nombre": "Zell, Tiago PZK - xq te enamoraste",
        "archivo": "n233.mp3",
        "songId": "song_72ns499f"
    },
    {
        "nombre": "LOLO - OG KUSH",
        "archivo": "n234.mp3",
        "songId": "song_q4xumxrq"
    },
    {
        "nombre": "MAGNESIO - COKER",
        "archivo": "n235.mp3",
        "songId": "song_lpzqvie0"
    },
    {
        "nombre": "PILF - TANTA GIRA",
        "archivo": "n236.mp3",
        "songId": "song_eyn8t7ih"
    },
    {
        "nombre": "PILF - HIT",
        "archivo": "n237.mp3",
        "songId": "song_2jkrmxp1"
    },
    {
        "nombre": "PILF - FUMO UNO FUMO DOS",
        "archivo": "n238.mp3",
        "songId": "song_438zinkc"
    },
    {
        "nombre": "PILF - ENTRO A LA CANCHA",
        "archivo": "n239.mp3",
        "songId": "song_pvzzo8ws"
    },
    {
        "nombre": "Zell, KNAK - Me Da Igual",
        "archivo": "n240.mp3",
        "songId": "song_z3ybffnt"
    },
    {
        "nombre": "TURROBABY - Toda La Plata",
        "archivo": "n241.mp3",
        "songId": "song_lhj9guo8"
    },
    {
        "nombre": "Red Shine, MAGNESIO - ELDEN RING",
        "archivo": "n242.mp3",
        "songId": "song_aey3aysl"
    },
    {
        "nombre": "TURROBABY, LITTLE BOOGIE - Emotes",
        "archivo": "n243.mp3",
        "songId": "song_ojltaeki"
    },
    {
        "nombre": "slimesanti - Friendzone",
        "archivo": "n244.mp3",
        "songId": "song_rq4w8a4f"
    },
    {
        "nombre": "rageylo - coscu army",
        "archivo": "albm1007.mp3",
        "songId": "song_6x5n2ip6"
    },
    {
        "nombre": "rageylo - Dinero Llueve",
        "archivo": "albm1008.mp3",
        "songId": "song_xmqsnftx"
    },
    {
        "nombre": "rageylo, Banatroll - Haz Mas Dinero",
        "archivo": "albm1009.mp3",
        "songId": "song_fx7u0ws3"
    },
    {
        "nombre": "rageylo - Joda estoy Gede",
        "archivo": "albm1010.mp3",
        "songId": "song_9jwmo5t7"
    },
    {
        "nombre": "rageylo - Moscu",
        "archivo": "albm1011.mp3",
        "songId": "song_gm94xs92"
    },
    {
        "nombre": "rageylo - Quemando Solo",
        "archivo": "albm1012.mp3",
        "songId": "song_6g09r11k"
    },
    {
        "nombre": "rageylo, Banatroll - Toy Ganado",
        "archivo": "albm1013.mp3",
        "songId": "song_h30ft2uo"
    }
];

const bibliotecaArtist = [
    {
        "nombre": "143LETI - En mis sueños soy tu novia",
        "archivo": "art244.mp3",
        "songId": "song_mesxpwd4"
    },
    {
        "nombre": "143LETI - EU TE AMO",
        "archivo": "art245.mp3",
        "songId": "song_7r3ouvb0"
    },
    {
        "nombre": "143LETI, VALUTO  - COSAS QUE ESTAN MAL",
        "archivo": "art246.mp3",
        "songId": "song_dzndr9kn"
    },
    {
        "nombre": "2UU! - PEPSI",
        "archivo": "art247.mp3",
        "songId": "song_8fvtodxh"
    },
    {
        "nombre": "2UU! - vuelve a mi",
        "archivo": "art248.mp3",
        "songId": "song_adsnlta9"
    },
    {
        "nombre": "2UU! - WORLDWIDE",
        "archivo": "art249.mp3",
        "songId": "song_fvi7l95r"
    },
    {
        "nombre": "2UU!, Asan - CELOSA",
        "archivo": "art250.mp3",
        "songId": "song_mb84mn1u"
    },
    {
        "nombre": "2UU!, ELUNEYBENEDETTI - TARADA",
        "archivo": "art251.mp3",
        "songId": "song_uw6pygbs"
    },
    {
        "nombre": "2UU!, enzocerobulto - PALMERA",
        "archivo": "art252.mp3",
        "songId": "song_kryyp57k"
    },
    {
        "nombre": "2UU!, enzocerobulto, Jugo!, Soowney - ESO QUERE TULI",
        "archivo": "art253.mp3",
        "songId": "song_d31acc7z"
    },
    {
        "nombre": "2UU!, enzocerobulto, SKIIDY, TULO13 - Promesas sobre el bidet",
        "archivo": "art254.mp3",
        "songId": "song_osaczc55"
    },
    {
        "nombre": "2UU!, LTHELIZARD - FERRAGAMO",
        "archivo": "art255.mp3",
        "songId": "song_1wfk7dom"
    },
    {
        "nombre": "2UU!, TULO13 - 2 DIAS",
        "archivo": "art256.mp3",
        "songId": "song_wqn0yqaj"
    },
    {
        "nombre": "2UU!, TULO13 - GREENDAY",
        "archivo": "art257.mp3",
        "songId": "song_tme0zz25"
    },
    {
        "nombre": "2UU!, turrobaby - LA GATA GOZA",
        "archivo": "art258.mp3",
        "songId": "song_fb66bwqp"
    },
    {
        "nombre": "AFKgoat - 1VUELTAINTERMINABLE",
        "archivo": "art259.mp3",
        "songId": "song_vn7cojkt"
    },
    {
        "nombre": "AFKgoat - ASI DE DESCONFIADO",
        "archivo": "art260.mp3",
        "songId": "song_fe8oxc1y"
    },
    {
        "nombre": "AFKgoat - ASI NO",
        "archivo": "art261.mp3",
        "songId": "song_dro2x2yb"
    },
    {
        "nombre": "AFKgoat - BANCAR EL PARCHE",
        "archivo": "art262.mp3",
        "songId": "song_gns17jnb"
    },
    {
        "nombre": "AFKgoat - HACERME TRAICIONAR",
        "archivo": "art263.mp3",
        "songId": "song_r14elxeg"
    },
    {
        "nombre": "AFKgoat - OSLAVA",
        "archivo": "art264.mp3",
        "songId": "song_8jhdrjfd"
    },
    {
        "nombre": "AFKgoat - PERNOCTANDO EN EL BALCON",
        "archivo": "art265.mp3",
        "songId": "song_9n2dgk24"
    },
    {
        "nombre": "AFKgoat - Te caigo mas tarde",
        "archivo": "art266.mp3",
        "songId": "song_ruc2w29h"
    },
    {
        "nombre": "AFKgoat, cero  - ME QUEMAN LOS DEDOS",
        "archivo": "art267.mp3",
        "songId": "song_rhmotln5"
    },
    {
        "nombre": "AFKgoat- DEFRENTEMAL",
        "archivo": "art268.mp3",
        "songId": "song_2jrxyuk0"
    },
    {
        "nombre": "AGUSFORTNITE2008 - ELLA ME LLAMA",
        "archivo": "art269.mp3",
        "songId": "song_wy1gijta"
    },
    {
        "nombre": "AGUSFORTNITE2008 - FLEKO",
        "archivo": "art270.mp3",
        "songId": "song_77m3fyug"
    },
    {
        "nombre": "AGUSFORTNITE2008 - HOTEL EN HOTEL",
        "archivo": "art271.mp3",
        "songId": "song_53b8cluc"
    },
    {
        "nombre": "AGUSFORTNITE2008 - LOS HAGO CONCHA",
        "archivo": "art272.mp3",
        "songId": "song_2ox7h72a"
    },
    {
        "nombre": "AGUSFORTNITE2008 - PASO",
        "archivo": "art273.mp3",
        "songId": "song_r188e0b8"
    },
    {
        "nombre": "AGUSFORTNITE2008 - SWAGGEANDO EN EL BANDO",
        "archivo": "art274.mp3",
        "songId": "song_o4w5zavx"
    },
    {
        "nombre": "AGUSFORTNITE2008 - VUELVO A FUMAR",
        "archivo": "art275.mp3",
        "songId": "song_3ywxso25"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - 24 7",
        "archivo": "art276.mp3",
        "songId": "song_4k0c20b7"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - 8 JEANS",
        "archivo": "art277.mp3",
        "songId": "song_ws8ljzue"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - CUANDO QUIERO",
        "archivo": "art278.mp3",
        "songId": "song_7a7726rc"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - DESDE LOS 14",
        "archivo": "art279.mp3",
        "songId": "song_6fv9is8r"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - DISTINTO",
        "archivo": "art280.mp3",
        "songId": "song_vt15q13r"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - GOFUE",
        "archivo": "art281.mp3",
        "songId": "song_37jggi6u"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - GUISO",
        "archivo": "art282.mp3",
        "songId": "song_kwqsdrzb"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - MEJORES HOES",
        "archivo": "art283.mp3",
        "songId": "song_6ao92l0n"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - MUSICA DE ASCENSOR",
        "archivo": "art284.mp3",
        "songId": "song_nyskzg10"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - PIE EN LA PISTA",
        "archivo": "art285.mp3",
        "songId": "song_z5mrpi0q"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - TRES PATITOS",
        "archivo": "art286.mp3",
        "songId": "song_68l96qn0"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, DILLOM - EL MOROCHO EL RUBIO Y EL COLO",
        "archivo": "art287.mp3",
        "songId": "song_pqt70sfq"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, Joshu Joshu - Jesus Escucha Plug",
        "archivo": "art288.mp3",
        "songId": "song_l3wpzo77"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, NEO PISTEA - MEJORALITO",
        "archivo": "art289.mp3",
        "songId": "song_2omma7et"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - PETER GRIFFIN",
        "archivo": "art290.mp3",
        "songId": "song_3z3qwd6s"
    },
    {
        "nombre": "Banatroll - CAMIONETA",
        "archivo": "art291.mp3",
        "songId": "song_450u8uoj"
    },
    {
        "nombre": "Banatroll - GTA 6 RAP",
        "archivo": "art292.mp3",
        "songId": "song_0pmx2rxb"
    },
    {
        "nombre": "Banatroll - MONTAGEM DUBAI (Slowed)",
        "archivo": "art293.mp3",
        "songId": "song_nzq3vdcz"
    },
    {
        "nombre": "Banatroll - OUTLAST RAP",
        "archivo": "art294.mp3",
        "songId": "song_wtkolgzu"
    },
    {
        "nombre": "Banatroll - RAP DE PEDIR LOS PUNTOS",
        "archivo": "art295.mp3",
        "songId": "song_v5zjyqho"
    },
    {
        "nombre": "Banatroll - Rap del Hornet",
        "archivo": "art296.mp3",
        "songId": "song_5uy2khwq"
    },
    {
        "nombre": "Banatroll - RIP RESIDENTE",
        "archivo": "art297.mp3",
        "songId": "song_sl3rpyh5"
    },
    {
        "nombre": "Banatroll - SUBWAY",
        "archivo": "art298.mp3",
        "songId": "song_k4gmnhlq"
    },
    {
        "nombre": "Banatroll - TOY DE PARTY",
        "archivo": "art299.mp3",
        "songId": "song_1vooe7pw"
    },
    {
        "nombre": "Banatroll, Francis Jeremy - SKIBIDI TOILET REMIX",
        "archivo": "art300.mp3",
        "songId": "song_qv8maetg"
    },
    {
        "nombre": "Banatroll, LOLO - CALIFORNIA",
        "archivo": "art301.mp3",
        "songId": "song_egfew2de"
    },
    {
        "nombre": "Banatroll, LOLO - KULEANDO NARKOS",
        "archivo": "art302.mp3",
        "songId": "song_re90unuy"
    },
    {
        "nombre": "Banatroll, LOLO- soy un virgen",
        "archivo": "art303.mp3",
        "songId": "song_xo0qwjq7"
    },
    {
        "nombre": "Banatroll, zEkO - GUERRA FUNK (Slowed)",
        "archivo": "art304.mp3",
        "songId": "song_ficot9c3"
    },
    {
        "nombre": "bic - letal",
        "archivo": "art305.mp3",
        "songId": "song_7nf94ynb"
    },
    {
        "nombre": "bic - mis maneras",
        "archivo": "art306.mp3",
        "songId": "song_w13mo0gh"
    },
    {
        "nombre": "bic - phone off",
        "archivo": "art307.mp3",
        "songId": "song_7oqda9hb"
    },
    {
        "nombre": "bic, Jugo! - paintball",
        "archivo": "art308.mp3",
        "songId": "song_8jmd8oum"
    },
    {
        "nombre": "Blagh  - GET IT UP",
        "archivo": "art309.mp3",
        "songId": "song_7warlv2b"
    },
    {
        "nombre": "Blagh  - High",
        "archivo": "art310.mp3",
        "songId": "song_oe3sompk"
    },
    {
        "nombre": "Blagh  - No Loyalty",
        "archivo": "art311.mp3",
        "songId": "song_p3qs9c99"
    },
    {
        "nombre": "Blagh  - Purple",
        "archivo": "art312.mp3",
        "songId": "song_p72gmeyi"
    },
    {
        "nombre": "Blagh - 2013",
        "archivo": "art313.mp3",
        "songId": "song_mwv5nn9z"
    },
    {
        "nombre": "Blagh - Leave Me Alone",
        "archivo": "art314.mp3",
        "songId": "song_bcj8tfrt"
    },
    {
        "nombre": "Blagh - Priceless",
        "archivo": "art315.mp3",
        "songId": "song_w46o8vaf"
    },
    {
        "nombre": "Blagh - Safe Room",
        "archivo": "art316.mp3",
        "songId": "song_nw9r3sfa"
    },
    {
        "nombre": "Blagh - Toxico",
        "archivo": "art317.mp3",
        "songId": "song_sc5don7s"
    },
    {
        "nombre": "Blagh, Agush  - TIBURON",
        "archivo": "art318.mp3",
        "songId": "song_qyalhc6u"
    },
    {
        "nombre": "Blagh, Agush - sex",
        "archivo": "art319.mp3",
        "songId": "song_aorv2wbn"
    },
    {
        "nombre": "Blagh, ISMA - Particular",
        "archivo": "art320.mp3",
        "songId": "song_cc55t00x"
    },
    {
        "nombre": "Blagh, KKAFU - TE ROBO",
        "archivo": "art321.mp3",
        "songId": "song_4v3ajp8z"
    },
    {
        "nombre": "cero - 1234",
        "archivo": "art322.mp3",
        "songId": "song_aj9sn4ue"
    },
    {
        "nombre": "cero - como roe",
        "archivo": "art323.mp3",
        "songId": "song_5ht0lmjo"
    },
    {
        "nombre": "cero - Con frio y calor",
        "archivo": "art324.mp3",
        "songId": "song_8n0evky0"
    },
    {
        "nombre": "cero - De moda",
        "archivo": "art325.mp3",
        "songId": "song_aca61hnm"
    },
    {
        "nombre": "cero - DEAM",
        "archivo": "art326.mp3",
        "songId": "song_mh3w2vpc"
    },
    {
        "nombre": "cero - Mr wow",
        "archivo": "art327.mp3",
        "songId": "song_rkgzc6jw"
    },
    {
        "nombre": "cero - Sonajero",
        "archivo": "art328.mp3",
        "songId": "song_8yy3xtu9"
    },
    {
        "nombre": "cero - t2o",
        "archivo": "art329.mp3",
        "songId": "song_8kr0v5e7"
    },
    {
        "nombre": "cero - Vicky",
        "archivo": "art330.mp3",
        "songId": "song_wz1yxmav"
    },
    {
        "nombre": "cero - xq soy el villano",
        "archivo": "art331.mp3",
        "songId": "song_yoyno3k0"
    },
    {
        "nombre": "cero, enzocerobulto - De concierto en concierto",
        "archivo": "art332.mp3",
        "songId": "song_4gtdgz7w"
    },
    {
        "nombre": "cero, knak - TOA",
        "archivo": "art333.mp3",
        "songId": "song_w18kxgui"
    },
    {
        "nombre": "cero, TURROBABY - Slat",
        "archivo": "art334.mp3",
        "songId": "song_01o3fqob"
    },
    {
        "nombre": "Chiki Wanted - que es el under",
        "archivo": "art335.mp3",
        "songId": "song_s2tikluh"
    },
    {
        "nombre": "CHOOSEY , Stiffy - BeastieBoyZZZ",
        "archivo": "art336.mp3",
        "songId": "song_c31h0xeb"
    },
    {
        "nombre": "CHOOSEY - 1-2 groupie",
        "archivo": "art337.mp3",
        "songId": "song_ym46rflv"
    },
    {
        "nombre": "CHOOSEY - 100 LUCHA",
        "archivo": "art338.mp3",
        "songId": "song_4h92gbll"
    },
    {
        "nombre": "CHOOSEY - 2 SAMPLEOS",
        "archivo": "art339.mp3",
        "songId": "song_0qzsud5u"
    },
    {
        "nombre": "CHOOSEY - ADOPTA POSES",
        "archivo": "art340.mp3",
        "songId": "song_69stau7m"
    },
    {
        "nombre": "CHOOSEY - CARS BEAT",
        "archivo": "art341.mp3",
        "songId": "song_6sedgr1t"
    },
    {
        "nombre": "CHOOSEY - mi AUTOMOVIL",
        "archivo": "art342.mp3",
        "songId": "song_zgoxr4u0"
    },
    {
        "nombre": "CHOOSEY - MI NUMERO TELEFONICO",
        "archivo": "art343.mp3",
        "songId": "song_wqnhaqdl"
    },
    {
        "nombre": "CHOOSEY - NDQV",
        "archivo": "art344.mp3",
        "songId": "song_vn912fei"
    },
    {
        "nombre": "CHOOSEY - pero CHATGPT",
        "archivo": "art345.mp3",
        "songId": "song_zbpevmgi"
    },
    {
        "nombre": "CHOOSEY - Prod Pimpinela",
        "archivo": "art346.mp3",
        "songId": "song_lmrdn0pv"
    },
    {
        "nombre": "CHOOSEY - ROMPEDISKOTECA",
        "archivo": "art347.mp3",
        "songId": "song_jgjzlpp3"
    },
    {
        "nombre": "CHOOSEY - SI NO ME CONOCES",
        "archivo": "art348.mp3",
        "songId": "song_sk0ogbwb"
    },
    {
        "nombre": "CHOOSEY, DLANG - DE MAS DE MI",
        "archivo": "art349.mp3",
        "songId": "song_2ufz7mdc"
    },
    {
        "nombre": "Cluster - Gucci Mane en la traphouse",
        "archivo": "art350.mp3",
        "songId": "song_1hlxj1ob"
    },
    {
        "nombre": "Cluster - JEFFES",
        "archivo": "art351.mp3",
        "songId": "song_8j8oqa1z"
    },
    {
        "nombre": "Cluster - Levanto el tubo",
        "archivo": "art352.mp3",
        "songId": "song_h452aj11"
    },
    {
        "nombre": "Cluster - Muy imbecil",
        "archivo": "art353.mp3",
        "songId": "song_q63phxfr"
    },
    {
        "nombre": "Cluster, Aleezok - CARGO",
        "archivo": "art354.mp3",
        "songId": "song_vwyop5f3"
    },
    {
        "nombre": "Cluster, Doly Flackko - OREO",
        "archivo": "art355.mp3",
        "songId": "song_lih50ut8"
    },
    {
        "nombre": "Cluster, Duki - aGaRRo La PLaTa",
        "archivo": "art356.mp3",
        "songId": "song_4iif7v26"
    },
    {
        "nombre": "Cluster, enzocerobulto - FFumando",
        "archivo": "art357.mp3",
        "songId": "song_ngwzv14x"
    },
    {
        "nombre": "Cluster, Francis Jeremy - MUY IMBECIL",
        "archivo": "art358.mp3",
        "songId": "song_jfmkoah6"
    },
    {
        "nombre": "Cluster, Frozouda - TOP 1 CHARTS",
        "archivo": "art359.mp3",
        "songId": "song_2ldcbxjq"
    },
    {
        "nombre": "Cluster, Pabloxo - OTRA SEDA",
        "archivo": "art360.mp3",
        "songId": "song_jo4ji4ha"
    },
    {
        "nombre": "Cluster- EL COLO",
        "archivo": "art361.mp3",
        "songId": "song_qmaozyh8"
    },
    {
        "nombre": "cybernene - DIAMANTES",
        "archivo": "art362.mp3",
        "songId": "song_buplt9ym"
    },
    {
        "nombre": "cybernene - MTGA",
        "archivo": "art363.mp3",
        "songId": "song_80tiqlp3"
    },
    {
        "nombre": "cybernene - PRIMERA DAMA (CYBERSEXO)",
        "archivo": "art364.mp3",
        "songId": "song_uj4frdq5"
    },
    {
        "nombre": "cybernene - WHITE WIDOW HOUSE",
        "archivo": "art365.mp3",
        "songId": "song_fl3jonzs"
    },
    {
        "nombre": "cybernene, 8belial - LOUD BONUS TRACK",
        "archivo": "art366.mp3",
        "songId": "song_olndzypl"
    },
    {
        "nombre": "cybernene, roomtrash6 - KENNEDY",
        "archivo": "art367.mp3",
        "songId": "song_i786ey25"
    },
    {
        "nombre": "cybernene, roomtrash6 - MEJOR NO",
        "archivo": "art368.mp3",
        "songId": "song_5ptl9eui"
    },
    {
        "nombre": "cybernene, roomtrash6, yyy891, 8belial - ENVIDIA",
        "archivo": "art369.mp3",
        "songId": "song_b1mq7jqx"
    },
    {
        "nombre": "cybernene, TURROBABY - LEANCOLN REMIX",
        "archivo": "art370.mp3",
        "songId": "song_rxaylvje"
    },
    {
        "nombre": "Doly Flackko - LEGENDARIO",
        "archivo": "art371.mp3",
        "songId": "song_sinzk55e"
    },
    {
        "nombre": "Doly Flackko - PIOLA VAGO",
        "archivo": "art372.mp3",
        "songId": "song_q6dffp0v"
    },
    {
        "nombre": "Doly Flackko - TRES TRISTES TIGUERES",
        "archivo": "art373.mp3",
        "songId": "song_qvl43zuy"
    },
    {
        "nombre": "Doly Flackko - Uber",
        "archivo": "art374.mp3",
        "songId": "song_q9hv0avk"
    },
    {
        "nombre": "EL DOCTOR - DIDDY",
        "archivo": "art375.mp3",
        "songId": "song_fptgyf3y"
    },
    {
        "nombre": "EL DOCTOR - LA SEPARACION",
        "archivo": "art376.mp3",
        "songId": "song_zg7ji4ud"
    },
    {
        "nombre": "EL DOCTOR - LOS QUE SON MAS ATREVIDOS",
        "archivo": "art377.mp3",
        "songId": "song_5bt7pve7"
    },
    {
        "nombre": "EL DOCTOR - RESCATE UNA METRA",
        "archivo": "art378.mp3",
        "songId": "song_6cxyuej3"
    },
    {
        "nombre": "EL DOCTOR - STARBOY",
        "archivo": "art379.mp3",
        "songId": "song_34vlf4qy"
    },
    {
        "nombre": "EL DOCTOR, CHILI PARKER - VELORIO",
        "archivo": "art380.mp3",
        "songId": "song_q5cfoyjr"
    },
    {
        "nombre": "EL DOCTOR, FALA FABIO - BARCELONA 90",
        "archivo": "art381.mp3",
        "songId": "song_oqlx88dn"
    },
    {
        "nombre": "EL DOCTOR, FOYONE - PA QUE NO PASES HAMBRE",
        "archivo": "art382.mp3",
        "songId": "song_drumoy2n"
    },
    {
        "nombre": "EL DOCTOR, Homer El Mero Mero - Adelantado",
        "archivo": "art383.mp3",
        "songId": "song_3gxw74yy"
    },
    {
        "nombre": "EL DOCTOR, TURROBABY - LA TIENE",
        "archivo": "art384.mp3",
        "songId": "song_edey3b76"
    },
    {
        "nombre": "elchombapolo - CHAIN  FREESTYLE",
        "archivo": "art385.mp3",
        "songId": "song_qvx5rmlv"
    },
    {
        "nombre": "elchombapolo - CHIQUI TAPIA",
        "archivo": "art386.mp3",
        "songId": "song_9rdv5gt2"
    },
    {
        "nombre": "elchombapolo - EL PISO ES LABURO",
        "archivo": "art387.mp3",
        "songId": "song_kxcxajaw"
    },
    {
        "nombre": "elchombapolo - el under me chupa la pija",
        "archivo": "art388.mp3",
        "songId": "song_ryr27rt5"
    },
    {
        "nombre": "elchombapolo - ESTA PERRA ESTA LOCA",
        "archivo": "art389.mp3",
        "songId": "song_n5eyf406"
    },
    {
        "nombre": "elchombapolo - Estoy En Tu Cesped",
        "archivo": "art390.mp3",
        "songId": "song_3u6e9tq1"
    },
    {
        "nombre": "elchombapolo - LA PREGUNTA",
        "archivo": "art391.mp3",
        "songId": "song_xasmkt0o"
    },
    {
        "nombre": "elchombapolo - SAL AFUERA Y JOSEA",
        "archivo": "art392.mp3",
        "songId": "song_e8tab459"
    },
    {
        "nombre": "elchombapolo - SIX SEVEN",
        "archivo": "art393.mp3",
        "songId": "song_2vyy3l7y"
    },
    {
        "nombre": "elchombapolo - TE LA RIFASTE FERNANDO",
        "archivo": "art394.mp3",
        "songId": "song_cruaeaal"
    },
    {
        "nombre": "elchombapolo - UN OSO WACHO",
        "archivo": "art395.mp3",
        "songId": "song_zsqiir23"
    },
    {
        "nombre": "enzocerobulto - Ahora y mas tarde",
        "archivo": "art396.mp3",
        "songId": "song_kvq623gg"
    },
    {
        "nombre": "enzocerobulto - Cada vez mas",
        "archivo": "art397.mp3",
        "songId": "song_7yx8gulc"
    },
    {
        "nombre": "enzocerobulto - De capital al Sifon",
        "archivo": "art398.mp3",
        "songId": "song_tkk5e9b6"
    },
    {
        "nombre": "enzocerobulto - Es humo no es vapor",
        "archivo": "art399.mp3",
        "songId": "song_0kad1id2"
    },
    {
        "nombre": "enzocerobulto - Esta nota",
        "archivo": "art400.mp3",
        "songId": "song_nn2mjawf"
    },
    {
        "nombre": "enzocerobulto - Falsa tu cara de Cristo",
        "archivo": "art401.mp3",
        "songId": "song_0lfgnlj6"
    },
    {
        "nombre": "enzocerobulto - Hasta que termine el dia",
        "archivo": "art402.mp3",
        "songId": "song_qnu6mxj5"
    },
    {
        "nombre": "enzocerobulto - Mitad",
        "archivo": "art403.mp3",
        "songId": "song_hhswyemx"
    },
    {
        "nombre": "enzocerobulto - Ocupado en mi droga",
        "archivo": "art404.mp3",
        "songId": "song_ivsebm6h"
    },
    {
        "nombre": "enzocerobulto - perdiendo",
        "archivo": "art405.mp3",
        "songId": "song_a90wr5of"
    },
    {
        "nombre": "enzocerobulto - Por las nubes",
        "archivo": "art406.mp3",
        "songId": "song_myt31ymo"
    },
    {
        "nombre": "enzocerobulto - Un banger tras otro",
        "archivo": "art407.mp3",
        "songId": "song_tov58g8k"
    },
    {
        "nombre": "enzocerobulto - una tira",
        "archivo": "art408.mp3",
        "songId": "song_qfe78m94"
    },
    {
        "nombre": "enzocerobulto - Vos y yo!",
        "archivo": "art409.mp3",
        "songId": "song_q99uwbuo"
    },
    {
        "nombre": "enzocerobulto, 2UU! - Tanta plata",
        "archivo": "art410.mp3",
        "songId": "song_88lh6uoz"
    },
    {
        "nombre": "enzocerobulto, eluney - ying yang",
        "archivo": "art411.mp3",
        "songId": "song_33rl37qs"
    },
    {
        "nombre": "enzocerobulto, panchitolefleur - Por un cuarto",
        "archivo": "art412.mp3",
        "songId": "song_pl46jhu3"
    },
    {
        "nombre": "Francis Jeremy - BIGGEST PLAYERS",
        "archivo": "art413.mp3",
        "songId": "song_ve1j425p"
    },
    {
        "nombre": "Francis Jeremy - CUMPLEAÑOS DEL MEJOR RAPERO EN URUGUAY",
        "archivo": "art414.mp3",
        "songId": "song_dsax2fgr"
    },
    {
        "nombre": "Francis Jeremy - NEGRA DE MIERDA",
        "archivo": "art415.mp3",
        "songId": "song_x7mfqms5"
    },
    {
        "nombre": "Francis Jeremy - RIP SURF Y RIP SURFISTAS",
        "archivo": "art416.mp3",
        "songId": "song_no815cs8"
    },
    {
        "nombre": "Francis Jeremy - SAYAGLO",
        "archivo": "art417.mp3",
        "songId": "song_q347bycv"
    },
    {
        "nombre": "Francis Jeremy - YO LE DIJE WEPA UEPA!",
        "archivo": "art418.mp3",
        "songId": "song_2puou33y"
    },
    {
        "nombre": "Francis Jeremy, Banatroll - Skibidi Toilet",
        "archivo": "art419.mp3",
        "songId": "song_woef8aik"
    },
    {
        "nombre": "Francis Jeremy, Doly Flackko  - SAYAGO Y RIO GALLEGOS",
        "archivo": "art420.mp3",
        "songId": "song_3n6nc0cd"
    },
    {
        "nombre": "Francis Jeremy, enzocerobulto - DEUCOTOS",
        "archivo": "art421.mp3",
        "songId": "song_qhwx0vum"
    },
    {
        "nombre": "Francis Jeremy, Komp - MILAGROSA X SAYAGO",
        "archivo": "art422.mp3",
        "songId": "song_t4k2sfnw"
    },
    {
        "nombre": "Francis Jeremy, underaiki - BLUE DREAM",
        "archivo": "art423.mp3",
        "songId": "song_wap3gqyd"
    },
    {
        "nombre": "Frozouda , Cero , Cluster - plinko",
        "archivo": "art424.mp3",
        "songId": "song_nsz8684k"
    },
    {
        "nombre": "Frozouda - doble F con visa",
        "archivo": "art425.mp3",
        "songId": "song_pcku4x39"
    },
    {
        "nombre": "Frozouda - fumamos una ZAZA",
        "archivo": "art426.mp3",
        "songId": "song_3yrc2qvu"
    },
    {
        "nombre": "Frozouda - GAS O PORRO",
        "archivo": "art427.mp3",
        "songId": "song_i7favvl2"
    },
    {
        "nombre": "Frozouda - hot money",
        "archivo": "art428.mp3",
        "songId": "song_ucyv2xcl"
    },
    {
        "nombre": "Frozouda - mi RACE",
        "archivo": "art429.mp3",
        "songId": "song_zjm5dsej"
    },
    {
        "nombre": "Frozouda - nicki nicole",
        "archivo": "art430.mp3",
        "songId": "song_moi37o24"
    },
    {
        "nombre": "Frozouda - quitate las BAPE",
        "archivo": "art431.mp3",
        "songId": "song_f7wlbslo"
    },
    {
        "nombre": "Frozouda - quitate los Jeans",
        "archivo": "art432.mp3",
        "songId": "song_i92pix18"
    },
    {
        "nombre": "Frozouda - tatiana !",
        "archivo": "art433.mp3",
        "songId": "song_ua72m7kj"
    },
    {
        "nombre": "Frozouda - TOP !",
        "archivo": "art434.mp3",
        "songId": "song_5v28tcgd"
    },
    {
        "nombre": "Frozouda - un goat siempre esta busy",
        "archivo": "art435.mp3",
        "songId": "song_mde14ye6"
    },
    {
        "nombre": "Frozouda, Cluster - hot box",
        "archivo": "art436.mp3",
        "songId": "song_z7olo2ru"
    },
    {
        "nombre": "Frozouda, Jugo!, KNAK - chirlito",
        "archivo": "art437.mp3",
        "songId": "song_dw461f4n"
    },
    {
        "nombre": "Hepa - Batman",
        "archivo": "art438.mp3",
        "songId": "song_9m3l2qtk"
    },
    {
        "nombre": "Hepa - Carlos Padilla",
        "archivo": "art439.mp3",
        "songId": "song_a2is6mo7"
    },
    {
        "nombre": "Hepa - Con mi cousin",
        "archivo": "art440.mp3",
        "songId": "song_nn75csml"
    },
    {
        "nombre": "Hepa - Cuando estas high",
        "archivo": "art441.mp3",
        "songId": "song_e7yvgtvw"
    },
    {
        "nombre": "Hepa - Lovestar",
        "archivo": "art442.mp3",
        "songId": "song_bmex4sdo"
    },
    {
        "nombre": "Hepa - Pepe Argento",
        "archivo": "art443.mp3",
        "songId": "song_ddgq1vk6"
    },
    {
        "nombre": "Hepa - Sintonizame",
        "archivo": "art444.mp3",
        "songId": "song_fiok4b3g"
    },
    {
        "nombre": "Hepa - Varios Puntos",
        "archivo": "art445.mp3",
        "songId": "song_lzdepg0z"
    },
    {
        "nombre": "Hepa, Cluster - Dolor de muela",
        "archivo": "art446.mp3",
        "songId": "song_v6ws8756"
    },
    {
        "nombre": "Hepa, nykoo0 - MI HERMANO SE LAS MANDA",
        "archivo": "art447.mp3",
        "songId": "song_hb9jhmx5"
    },
    {
        "nombre": "huntr - baby boo",
        "archivo": "art448.mp3",
        "songId": "song_yix1rggj"
    },
    {
        "nombre": "huntr - esta va porque te quiero",
        "archivo": "art449.mp3",
        "songId": "song_rj0q2e30"
    },
    {
        "nombre": "huntr - pain",
        "archivo": "art450.mp3",
        "songId": "song_wnrpmnuh"
    },
    {
        "nombre": "huntr - partydanc3",
        "archivo": "art451.mp3",
        "songId": "song_q970bxgp"
    },
    {
        "nombre": "ISMA - 2037",
        "archivo": "art452.mp3",
        "songId": "song_ykzxkv8v"
    },
    {
        "nombre": "ISMA - Antes del Amanecer",
        "archivo": "art453.mp3",
        "songId": "song_net7xzb4"
    },
    {
        "nombre": "ISMA - Cuanto va a pasar",
        "archivo": "art454.mp3",
        "songId": "song_12shrnw3"
    },
    {
        "nombre": "ISMA, LOLO  - CUAL ES TU PLAN",
        "archivo": "art455.mp3",
        "songId": "song_f321k5g6"
    },
    {
        "nombre": "jovenalien - ME PASO LA SEMANA",
        "archivo": "art456.mp3",
        "songId": "song_stqaekof"
    },
    {
        "nombre": "jovenalien - No vale la pena enojarse",
        "archivo": "art457.mp3",
        "songId": "song_eo5nl1pm"
    },
    {
        "nombre": "jovenalien - tengo hambre",
        "archivo": "art458.mp3",
        "songId": "song_7puuv6b0"
    },
    {
        "nombre": "Jugo! , Cluster - Nos retiene el estado",
        "archivo": "art459.mp3",
        "songId": "song_li5zkqch"
    },
    {
        "nombre": "Jugo! , enzocerobulto - Musicalmente",
        "archivo": "art460.mp3",
        "songId": "song_o3pk5s4l"
    },
    {
        "nombre": "Jugo! , YSY A - Todo el dia en el trap",
        "archivo": "art461.mp3",
        "songId": "song_uvdyxfny"
    },
    {
        "nombre": "Jugo! - La chupa la fame",
        "archivo": "art462.mp3",
        "songId": "song_7e9nnyb6"
    },
    {
        "nombre": "Jugo! - Nadie se salva",
        "archivo": "art463.mp3",
        "songId": "song_dij2vwvc"
    },
    {
        "nombre": "Jugo! - Quiere algo de mi",
        "archivo": "art464.mp3",
        "songId": "song_xx8jnaah"
    },
    {
        "nombre": "Jugo!, enzocerobulto - Hacela facil",
        "archivo": "art465.mp3",
        "songId": "song_vnv3giky"
    },
    {
        "nombre": "Jugo!, salas flaco - Desfile",
        "archivo": "art466.mp3",
        "songId": "song_iy8dr8zk"
    },
    {
        "nombre": "KERCHAK - BACK",
        "archivo": "art467.mp3",
        "songId": "song_bxmrugn7"
    },
    {
        "nombre": "KERCHAK - CHILL AF",
        "archivo": "art468.mp3",
        "songId": "song_actdvllr"
    },
    {
        "nombre": "KERCHAK - Fajos en el Camperon",
        "archivo": "art469.mp3",
        "songId": "song_0f5ldlhd"
    },
    {
        "nombre": "KERCHAK - MI BRO SE MAMO",
        "archivo": "art470.mp3",
        "songId": "song_zktlctw8"
    },
    {
        "nombre": "KERCHAK, Cluster - No Me Pienso Demorar",
        "archivo": "art471.mp3",
        "songId": "song_hlbrgcaw"
    },
    {
        "nombre": "KERCHAK - Viviendo Al Corte",
        "archivo": "art472.mp3",
        "songId": "song_wfhlmqt2"
    },
    {
        "nombre": "KERCHAK - WIDE OPEN",
        "archivo": "art473.mp3",
        "songId": "song_4quwaktk"
    },
    {
        "nombre": "KERCHAK, Cluster - Una Noche Con Los Tios 2",
        "archivo": "art474.mp3",
        "songId": "song_7d1b793z"
    },
    {
        "nombre": "KERCHAK, DAGGER - BOOFER",
        "archivo": "art475.mp3",
        "songId": "song_kymh5mw6"
    },
    {
        "nombre": "KERCHAK, ENZOCEROBULTO - Chamuyo Habilidoso",
        "archivo": "art476.mp3",
        "songId": "song_i3xgyxqg"
    },
    {
        "nombre": "KERCHAK, PANCHITOLEFLEUR - ANOTHER NIGHT WITH THE UNCLE",
        "archivo": "art477.mp3",
        "songId": "song_8rjvvw6w"
    },
    {
        "nombre": "KERCHAK, PANCHITOLEFLEUR - Tamo a Full",
        "archivo": "art478.mp3",
        "songId": "song_m5xhdu8r"
    },
    {
        "nombre": "KERCHAK, TURROBABY, Cluster, Tuw4 - Un picadito",
        "archivo": "art479.mp3",
        "songId": "song_33wf3ywb"
    },
    {
        "nombre": "kino frizza - ADEMAS DE MI REMIX",
        "archivo": "art480.mp3",
        "songId": "song_fl0a7xjq"
    },
    {
        "nombre": "kino frizza - AYER ME COMI UNAS REX",
        "archivo": "art481.mp3",
        "songId": "song_ygyx9sok"
    },
    {
        "nombre": "kino frizza - Cancion para cuando te quedas sin internet",
        "archivo": "art482.mp3",
        "songId": "song_x4vwrhp4"
    },
    {
        "nombre": "kino frizza - GIVENCHY PARODIA",
        "archivo": "art483.mp3",
        "songId": "song_bqof3nz1"
    },
    {
        "nombre": "kino frizza - LA SAVEIRO LA SAVEIRO",
        "archivo": "art484.mp3",
        "songId": "song_6tliwjkq"
    },
    {
        "nombre": "kino frizza - LUCK RA  BZRP",
        "archivo": "art485.mp3",
        "songId": "song_6inhnpy5"
    },
    {
        "nombre": "kino frizza - MAMICHULA",
        "archivo": "art486.mp3",
        "songId": "song_4e1f0fpr"
    },
    {
        "nombre": "kino frizza - QUEVEDO  BZRP",
        "archivo": "art487.mp3",
        "songId": "song_oa674iom"
    },
    {
        "nombre": "kino frizza - SHAKIRA  BZRP",
        "archivo": "art488.mp3",
        "songId": "song_6z4rseqo"
    },
    {
        "nombre": "kino frizza - SI ME TOMO UNA CERVEZA",
        "archivo": "art489.mp3",
        "songId": "song_9w0cylvr"
    },
    {
        "nombre": "kino frizza, Nico Melo -  L-GANTE  BZRP",
        "archivo": "art490.mp3",
        "songId": "song_lyle0nlc"
    },
    {
        "nombre": "kino frizza, Nico Melo - ENTRE NOSOTROS",
        "archivo": "art491.mp3",
        "songId": "song_3upopn7k"
    },
    {
        "nombre": "kino frizza, pijarrap - Malbec",
        "archivo": "art492.mp3",
        "songId": "song_v00hkvol"
    },
    {
        "nombre": "laura sad - capitulo perdido",
        "archivo": "art493.mp3",
        "songId": "song_3gaqgqhz"
    },
    {
        "nombre": "laura sad - chupavrga",
        "archivo": "art494.mp3",
        "songId": "song_ngxvy8yo"
    },
    {
        "nombre": "laura sad - i Laurie",
        "archivo": "art495.mp3",
        "songId": "song_o35hragq"
    },
    {
        "nombre": "laura sad - mochila",
        "archivo": "art496.mp3",
        "songId": "song_r6vhlxcu"
    },
    {
        "nombre": "laura sad - PUCCA",
        "archivo": "art497.mp3",
        "songId": "song_kldcvksi"
    },
    {
        "nombre": "laura sad - todos pvtos",
        "archivo": "art498.mp3",
        "songId": "song_xqcx7kxk"
    },
    {
        "nombre": "laura sad, LOLO - Joseador Boy",
        "archivo": "art499.mp3",
        "songId": "song_awv9wkz4"
    },
    {
        "nombre": "laura sad, MAGNESIO - Perdon Mama",
        "archivo": "art500.mp3",
        "songId": "song_5wq6gero"
    },
    {
        "nombre": "LITTLE BOOGIE - CLICK CLACK",
        "archivo": "art501.mp3",
        "songId": "song_nfnj55xq"
    },
    {
        "nombre": "LITTLE BOOGIE - COMPA LO HICIMOS",
        "archivo": "art502.mp3",
        "songId": "song_5is8awef"
    },
    {
        "nombre": "LITTLE BOOGIE - CREPUSCULO",
        "archivo": "art503.mp3",
        "songId": "song_tt77e33k"
    },
    {
        "nombre": "LITTLE BOOGIE - DANDO CLASE",
        "archivo": "art504.mp3",
        "songId": "song_h2sps098"
    },
    {
        "nombre": "LITTLE BOOGIE - DEJA DE SUFRIR",
        "archivo": "art505.mp3",
        "songId": "song_bco2yi70"
    },
    {
        "nombre": "LITTLE BOOGIE - LITTLE BOOGIE VS EL GOBIERNO",
        "archivo": "art506.mp3",
        "songId": "song_dzc80552"
    },
    {
        "nombre": "LITTLE BOOGIE - LOS DEL BOHIO",
        "archivo": "art507.mp3",
        "songId": "song_ycy4fr8k"
    },
    {
        "nombre": "LITTLE BOOGIE - OKUPAS",
        "archivo": "art508.mp3",
        "songId": "song_ry7zhj8i"
    },
    {
        "nombre": "LITTLE BOOGIE - SUAVE CRIMINAL",
        "archivo": "art509.mp3",
        "songId": "song_6e4rtdtw"
    },
    {
        "nombre": "LITTLE BOOGIE - TODO BIEN TODO CHETO",
        "archivo": "art510.mp3",
        "songId": "song_r6jo7aq2"
    },
    {
        "nombre": "LITTLE BOOGIE, DOLY FLACKKO - EL MUNDO ES MIO",
        "archivo": "art511.mp3",
        "songId": "song_hkr7moxa"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR - BILLIE JEAN",
        "archivo": "art512.mp3",
        "songId": "song_8gi4f22j"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR - LOS MAS ODIADOS",
        "archivo": "art513.mp3",
        "songId": "song_0fl37po6"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR - MARTES 13",
        "archivo": "art514.mp3",
        "songId": "song_zmps4u8b"
    },
    {
        "nombre": "LITTLE BOOGIE, EL DOCTOR, RUSHERKING - SOY FAMOSO Y TENGO PLATA",
        "archivo": "art515.mp3",
        "songId": "song_1p6w18rt"
    },
    {
        "nombre": "LITTLE BOOGIE, KID$$UP - HATERS",
        "archivo": "art516.mp3",
        "songId": "song_ml0qogcs"
    },
    {
        "nombre": "LITTLE BOOGIE, MC CACO - SE TE QUEDO EL VENTO",
        "archivo": "art517.mp3",
        "songId": "song_h25pwf40"
    },
    {
        "nombre": "LOLO , BANATROLL - HAZ MAS DINERO",
        "archivo": "art518.mp3",
        "songId": "song_iw22j85q"
    },
    {
        "nombre": "LOLO , BANATROLL - TOY GANADO",
        "archivo": "art519.mp3",
        "songId": "song_yr6jhsgg"
    },
    {
        "nombre": "LOLO , CHOOSEY - QUE PUEDE PASAR",
        "archivo": "art520.mp3",
        "songId": "song_xkq55jsy"
    },
    {
        "nombre": "LOLO - A TU MODO",
        "archivo": "art521.mp3",
        "songId": "song_4xjk5zeg"
    },
    {
        "nombre": "LOLO - ALEJO ISAKK",
        "archivo": "art522.mp3",
        "songId": "song_rzrmaga3"
    },
    {
        "nombre": "LOLO - APHEX TWIN",
        "archivo": "art523.mp3",
        "songId": "song_8h8l57oh"
    },
    {
        "nombre": "LOLO - EMILIA MERNES",
        "archivo": "art524.mp3",
        "songId": "song_gh8rgzrq"
    },
    {
        "nombre": "LOLO - FERNET HIELO",
        "archivo": "art525.mp3",
        "songId": "song_ea13lw6m"
    },
    {
        "nombre": "LOLO - GASTEMOS MAS",
        "archivo": "art526.mp3",
        "songId": "song_zttw61od"
    },
    {
        "nombre": "LOLO - HATER",
        "archivo": "art527.mp3",
        "songId": "song_nyxheolq"
    },
    {
        "nombre": "LOLO - hoy es mi dia",
        "archivo": "art528.mp3",
        "songId": "song_o9ozhwha"
    },
    {
        "nombre": "LOLO - HOY SI QUEMO",
        "archivo": "art529.mp3",
        "songId": "song_lubfpf2i"
    },
    {
        "nombre": "LOLO - INIMU",
        "archivo": "art530.mp3",
        "songId": "song_fzcc8zu9"
    },
    {
        "nombre": "LOLO - JESSE PINKMAN",
        "archivo": "art531.mp3",
        "songId": "song_pfz7zgq1"
    },
    {
        "nombre": "LOLO, 143LETI - LUNES A VIERNES",
        "archivo": "art532.mp3",
        "songId": "song_u2y6shio"
    },
    {
        "nombre": "MAGNESIO - COKER",
        "archivo": "art533.mp3",
        "songId": "song_pz1bjfj0"
    },
    {
        "nombre": "MAGNESIO - MAS LENTO",
        "archivo": "art534.mp3",
        "songId": "song_3d7f9l9m"
    },
    {
        "nombre": "MAGNESIO - OLLA POPULAR",
        "archivo": "art535.mp3",
        "songId": "song_xd1e1l9t"
    },
    {
        "nombre": "MAGNESIO - WING WANG WOW",
        "archivo": "art536.mp3",
        "songId": "song_1sgitazr"
    },
    {
        "nombre": "MAGNESIO - ZLATAN",
        "archivo": "art537.mp3",
        "songId": "song_i1okqhvr"
    },
    {
        "nombre": "MAGNESIO, jovenalien - ROBANDO EN EL CARRE",
        "archivo": "art538.mp3",
        "songId": "song_k5s1hsye"
    },
    {
        "nombre": "MAGNESIO, White! - GOKU",
        "archivo": "art539.mp3",
        "songId": "song_7p268crs"
    },
    {
        "nombre": "Matias Fisher - Muerte en Halloween",
        "archivo": "art540.mp3",
        "songId": "song_a4rjkr5l"
    },
    {
        "nombre": "Nykoo0 - Anorexico",
        "archivo": "art541.mp3",
        "songId": "song_gqdkx29l"
    },
    {
        "nombre": "Nykoo0 - Que sabes de amor",
        "archivo": "art542.mp3",
        "songId": "song_4zqrcx6d"
    },
    {
        "nombre": "pa2k - DEMOLIENDO HOTELES",
        "archivo": "art543.mp3",
        "songId": "song_9x77y1ro"
    },
    {
        "nombre": "pa2k - Fumando Afuera",
        "archivo": "art544.mp3",
        "songId": "song_dxb3zcdm"
    },
    {
        "nombre": "pa2k - TODA",
        "archivo": "art545.mp3",
        "songId": "song_o1wi858q"
    },
    {
        "nombre": "pa2k, cero - Rn",
        "archivo": "art546.mp3",
        "songId": "song_05ur44cw"
    },
    {
        "nombre": "pa2k, cero - yEye",
        "archivo": "art547.mp3",
        "songId": "song_l1gmnit2"
    },
    {
        "nombre": "pa2k, enzocerobulto - BOYFRIEND",
        "archivo": "art548.mp3",
        "songId": "song_njkjk3y0"
    },
    {
        "nombre": "pa2k, enzocerobulto - RIGHT NOW",
        "archivo": "art549.mp3",
        "songId": "song_2cxvdxuc"
    },
    {
        "nombre": "pabloxo - Astigmatismo",
        "archivo": "art550.mp3",
        "songId": "song_j2qo2dlo"
    },
    {
        "nombre": "pabloxo - COMIDA POR PESO",
        "archivo": "art551.mp3",
        "songId": "song_3abygwoj"
    },
    {
        "nombre": "pabloxo - dB",
        "archivo": "art552.mp3",
        "songId": "song_95fdwazm"
    },
    {
        "nombre": "pabloxo - Doble F",
        "archivo": "art553.mp3",
        "songId": "song_0si8j8n9"
    },
    {
        "nombre": "pabloxo - dosydos",
        "archivo": "art554.mp3",
        "songId": "song_ygdtud7z"
    },
    {
        "nombre": "pabloxo - lo hago x mi",
        "archivo": "art555.mp3",
        "songId": "song_av9uomqu"
    },
    {
        "nombre": "pabloxo - no son dos f son clones",
        "archivo": "art556.mp3",
        "songId": "song_6sgxut58"
    },
    {
        "nombre": "pabloxo - Plata con lo que me gusta",
        "archivo": "art557.mp3",
        "songId": "song_wta88d8n"
    },
    {
        "nombre": "pabloxo - Una mas por mis amigos",
        "archivo": "art558.mp3",
        "songId": "song_ln4dwy83"
    },
    {
        "nombre": "pabloxo, Cluster - Fuego en el microfono",
        "archivo": "art559.mp3",
        "songId": "song_ff60ixyk"
    },
    {
        "nombre": "pabloxo, Frozouda - Time Break",
        "archivo": "art560.mp3",
        "songId": "song_in33flug"
    },
    {
        "nombre": "PANKKY - FREEHOMMIES",
        "archivo": "art561.mp3",
        "songId": "song_oqkzugiw"
    },
    {
        "nombre": "PANKKY - GLOPETA",
        "archivo": "art562.mp3",
        "songId": "song_zl71bs8n"
    },
    {
        "nombre": "PANKKY - TELL ME",
        "archivo": "art563.mp3",
        "songId": "song_pwobwh86"
    },
    {
        "nombre": "papirola - sos mi papirola",
        "archivo": "art564.mp3",
        "songId": "song_vwld298w"
    },
    {
        "nombre": "salas flaco - PANICO ESCENICO",
        "archivo": "art565.mp3",
        "songId": "song_1jxfm70s"
    },
    {
        "nombre": "salas flaco - Por Argentina",
        "archivo": "art566.mp3",
        "songId": "song_8bb89zq5"
    },
    {
        "nombre": "salas flaco - TAN MALA",
        "archivo": "art567.mp3",
        "songId": "song_a6nx9aiy"
    },
    {
        "nombre": "salas flaco, Bhavi, Asan - EL DINERO DE INTERNET",
        "archivo": "art568.mp3",
        "songId": "song_5qcx41ic"
    },
    {
        "nombre": "Shako , Jugo! - Medio Tana",
        "archivo": "art569.mp3",
        "songId": "song_sbtwujn9"
    },
    {
        "nombre": "Shako - 4eva",
        "archivo": "art570.mp3",
        "songId": "song_hl1c917u"
    },
    {
        "nombre": "Shako - Amigdalas",
        "archivo": "art571.mp3",
        "songId": "song_su693fdf"
    },
    {
        "nombre": "Shako - es la vencida",
        "archivo": "art572.mp3",
        "songId": "song_hy0xa2n0"
    },
    {
        "nombre": "Shako - Hotel",
        "archivo": "art573.mp3",
        "songId": "song_xmy6xn2t"
    },
    {
        "nombre": "Shako - RACKLESS",
        "archivo": "art574.mp3",
        "songId": "song_bwp97523"
    },
    {
        "nombre": "Shako - vas a ver el alma mula",
        "archivo": "art575.mp3",
        "songId": "song_e49l4efy"
    },
    {
        "nombre": "Shako, Bhavi, Seven Kayne - K.O",
        "archivo": "art576.mp3",
        "songId": "song_kvpqdlb3"
    },
    {
        "nombre": "Shako, SixUp - Daily",
        "archivo": "art577.mp3",
        "songId": "song_jwxdkax2"
    },
    {
        "nombre": "SixUp - 10 tucas",
        "archivo": "art578.mp3",
        "songId": "song_pwnn0m8h"
    },
    {
        "nombre": "SixUp - Anti",
        "archivo": "art579.mp3",
        "songId": "song_60802yyg"
    },
    {
        "nombre": "SixUp - DobleVaso",
        "archivo": "art580.mp3",
        "songId": "song_rnsqur6v"
    },
    {
        "nombre": "SixUp - Falso",
        "archivo": "art581.mp3",
        "songId": "song_pbewid0j"
    },
    {
        "nombre": "SixUp - Mortedor",
        "archivo": "art582.mp3",
        "songId": "song_7ri9f3tb"
    },
    {
        "nombre": "SixUp - TikiTime",
        "archivo": "art583.mp3",
        "songId": "song_4biv21ow"
    },
    {
        "nombre": "SixUp - TripleVaso",
        "archivo": "art584.mp3",
        "songId": "song_e9e7ax94"
    },
    {
        "nombre": "Stiffy - escudo y espada",
        "archivo": "art585.mp3",
        "songId": "song_150emymi"
    },
    {
        "nombre": "Stiffy - FARANDULERO",
        "archivo": "art586.mp3",
        "songId": "song_jrp9ow1k"
    },
    {
        "nombre": "Stiffy - GUAP",
        "archivo": "art587.mp3",
        "songId": "song_iilv05ln"
    },
    {
        "nombre": "Stiffy - GUASO BALLS Z",
        "archivo": "art588.mp3",
        "songId": "song_rsd27tau"
    },
    {
        "nombre": "Stiffy - MECHINSTRONGAS",
        "archivo": "art589.mp3",
        "songId": "song_key9o1vm"
    },
    {
        "nombre": "Stiffy - NO ES LO QUE PENSAS",
        "archivo": "art590.mp3",
        "songId": "song_3f9vnjd6"
    },
    {
        "nombre": "Stiffy - NO LA CUELGO",
        "archivo": "art591.mp3",
        "songId": "song_f6c9s1m1"
    },
    {
        "nombre": "Stiffy - PEGO FLORES",
        "archivo": "art592.mp3",
        "songId": "song_eeclaxhv"
    },
    {
        "nombre": "Stiffy - SANDRO",
        "archivo": "art593.mp3",
        "songId": "song_9bekxlot"
    },
    {
        "nombre": "Stiffy - SECONDLIFE",
        "archivo": "art594.mp3",
        "songId": "song_yx82oxq1"
    },
    {
        "nombre": "Stiffy - SWAG DE SOSA",
        "archivo": "art595.mp3",
        "songId": "song_npbcq9vt"
    },
    {
        "nombre": "Stiffy - WACHA LOCA",
        "archivo": "art596.mp3",
        "songId": "song_ntyq3tnt"
    },
    {
        "nombre": "Stiffy, Agusfortnite2008 - AFIP",
        "archivo": "art597.mp3",
        "songId": "song_0ubpqay2"
    },
    {
        "nombre": "Stiffy, AGUSFORTNITE2008 - CON PEDRO Y CON LA DROGA",
        "archivo": "art598.mp3",
        "songId": "song_0gvyf7me"
    },
    {
        "nombre": "Stiffy, AGUSFORTNITE2008 - QUIERE PENE",
        "archivo": "art599.mp3",
        "songId": "song_0ebmqn0z"
    },
    {
        "nombre": "Stiffy, Jon Z - COMO ANTES",
        "archivo": "art600.mp3",
        "songId": "song_z7qtw9cc"
    },
    {
        "nombre": "Stiffy, Rojuu - AMNESIA",
        "archivo": "art601.mp3",
        "songId": "song_qdo3m07q"
    },
    {
        "nombre": "Stiffy, TURROBABY, ZELL, AGUSFORTNITE2008 - BABASONICO",
        "archivo": "art602.mp3",
        "songId": "song_pegsajr3"
    },
    {
        "nombre": "TURROBABY - 2017",
        "archivo": "art603.mp3",
        "songId": "song_jmp4axs0"
    },
    {
        "nombre": "TURROBABY - Aca y Alla y En Todos Lados",
        "archivo": "art604.mp3",
        "songId": "song_9pvpixvl"
    },
    {
        "nombre": "TURROBABY - Bajo El Sol",
        "archivo": "art605.mp3",
        "songId": "song_oq7awsg2"
    },
    {
        "nombre": "TURROBABY - Bici Itau",
        "archivo": "art606.mp3",
        "songId": "song_o9e0wvmo"
    },
    {
        "nombre": "TURROBABY - COJER WACHAS",
        "archivo": "art607.mp3",
        "songId": "song_2015wh83"
    },
    {
        "nombre": "TURROBABY - COLOMBIANA HOODTRAP",
        "archivo": "art608.mp3",
        "songId": "song_gkby8ruk"
    },
    {
        "nombre": "TURROBABY - Cornudo Consciente",
        "archivo": "art609.mp3",
        "songId": "song_ndj99oc5"
    },
    {
        "nombre": "TURROBABY - De Cote",
        "archivo": "art610.mp3",
        "songId": "song_1olk5bnm"
    },
    {
        "nombre": "TURROBABY - Filmemos Una Peli",
        "archivo": "art611.mp3",
        "songId": "song_nmzbb2mu"
    },
    {
        "nombre": "TURROBABY - Franco Colapinto",
        "archivo": "art612.mp3",
        "songId": "song_sdmnmlbz"
    },
    {
        "nombre": "TURROBABY - Lgante Y Wanda Nara",
        "archivo": "art613.mp3",
        "songId": "song_so7xk44l"
    },
    {
        "nombre": "TURROBABY - Mañana Me Voy De Gira",
        "archivo": "art614.mp3",
        "songId": "song_0vb0d3ge"
    },
    {
        "nombre": "TURROBABY - Sergio Massa",
        "archivo": "art615.mp3",
        "songId": "song_uavb6c8z"
    },
    {
        "nombre": "TURROBABY - SIMO VIANI",
        "archivo": "art616.mp3",
        "songId": "song_qknl97mo"
    },
    {
        "nombre": "TURROBABY - Wacha Flequilluda",
        "archivo": "art617.mp3",
        "songId": "song_tcsh35kw"
    },
    {
        "nombre": "TURROBABY - Yo Te Amo Toda",
        "archivo": "art618.mp3",
        "songId": "song_ug5itifp"
    },
    {
        "nombre": "TURROBABY - YPF",
        "archivo": "art619.mp3",
        "songId": "song_7c0y6jmw"
    },
    {
        "nombre": "TURROBABY, baby cashy - Colorada",
        "archivo": "art620.mp3",
        "songId": "song_n9t7pkws"
    },
    {
        "nombre": "TURROBABY, Bhavi - Parabrisas",
        "archivo": "art621.mp3",
        "songId": "song_a8v8cqxv"
    },
    {
        "nombre": "TURROBABY, Doble P - ANTO ROCUZZO",
        "archivo": "art622.mp3",
        "songId": "song_ukymy5ti"
    },
    {
        "nombre": "TURROBABY, enzocerobulto - Las Seis",
        "archivo": "art623.mp3",
        "songId": "song_dyvngnk5"
    },
    {
        "nombre": "TURROBABY, Lolo OG - Lovebombing",
        "archivo": "art624.mp3",
        "songId": "song_pir4zatd"
    },
    {
        "nombre": "TURROBABY, Stiffy - PENDEJO ATREVIDO",
        "archivo": "art625.mp3",
        "songId": "song_zz68f9qr"
    },
    {
        "nombre": "TURROBABY, tussiwarriors, Ze Pequeña - Natalia Oreiro",
        "archivo": "art626.mp3",
        "songId": "song_clbp1wge"
    },
    {
        "nombre": "TURROBABY, ZELL - Inter De Miami",
        "archivo": "art627.mp3",
        "songId": "song_f7jubuqs"
    },
    {
        "nombre": "TURROBABY, ZELL, Stiffy - Cara De Boludo",
        "archivo": "art628.mp3",
        "songId": "song_cnrlakyn"
    },
    {
        "nombre": "underaiki - borsi",
        "archivo": "art629.mp3",
        "songId": "song_ma9pfjm7"
    },
    {
        "nombre": "underaiki - fuli",
        "archivo": "art630.mp3",
        "songId": "song_szb4fxhl"
    },
    {
        "nombre": "underaiki - Majora",
        "archivo": "art631.mp3",
        "songId": "song_oi447kjl"
    },
    {
        "nombre": "underaiki - mugi",
        "archivo": "art632.mp3",
        "songId": "song_duo74iga"
    },
    {
        "nombre": "underaiki - No Es Personal",
        "archivo": "art633.mp3",
        "songId": "song_k20nuh0g"
    },
    {
        "nombre": "underaiki - sushi",
        "archivo": "art634.mp3",
        "songId": "song_7gaaqb3h"
    },
    {
        "nombre": "underaiki - Too Late",
        "archivo": "art635.mp3",
        "songId": "song_4rt4gjo4"
    },
    {
        "nombre": "underaiki, Suei - Marceline",
        "archivo": "art636.mp3",
        "songId": "song_ezxxqz4f"
    },
    {
        "nombre": "vahel - .",
        "archivo": "art637.mp3",
        "songId": "song_z3kdxhsh"
    },
    {
        "nombre": "vahel - PLAN B",
        "archivo": "art638.mp3",
        "songId": "song_qrlrri0q"
    },
    {
        "nombre": "vahel - tunel",
        "archivo": "art639.mp3",
        "songId": "song_3chi6i77"
    },
    {
        "nombre": "vahel, fukinmari - UuuUUuuu",
        "archivo": "art640.mp3",
        "songId": "song_r3a5mnmc"
    },
    {
        "nombre": "vahel, pachudani - loquita",
        "archivo": "art641.mp3",
        "songId": "song_o2vr7df8"
    },
    {
        "nombre": "White! - FR",
        "archivo": "art642.mp3",
        "songId": "song_01nximus"
    },
    {
        "nombre": "White! - No lo intentes en tu home",
        "archivo": "art643.mp3",
        "songId": "song_8va7me3e"
    },
    {
        "nombre": "White! - X - RAY",
        "archivo": "art644.mp3",
        "songId": "song_vgeq90ep"
    },
    {
        "nombre": "White!, magnesio - Shen Long",
        "archivo": "art645.mp3",
        "songId": "song_w9dh0noa"
    },
    {
        "nombre": "Zell - Aura",
        "archivo": "art646.mp3",
        "songId": "song_s27l92a6"
    },
    {
        "nombre": "Zell - ballin de verdad",
        "archivo": "art647.mp3",
        "songId": "song_1dgqc5q1"
    },
    {
        "nombre": "Zell - Ballin",
        "archivo": "art648.mp3",
        "songId": "song_autlz8w4"
    },
    {
        "nombre": "Zell - calvin klein",
        "archivo": "art649.mp3",
        "songId": "song_9t60u2z3"
    },
    {
        "nombre": "Zell - Cero Cero",
        "archivo": "art650.mp3",
        "songId": "song_nips7fh2"
    },
    {
        "nombre": "Zell - diamante",
        "archivo": "art651.mp3",
        "songId": "song_birnm9sx"
    },
    {
        "nombre": "Zell - diva",
        "archivo": "art652.mp3",
        "songId": "song_s1ci8axv"
    },
    {
        "nombre": "Zell - humo",
        "archivo": "art653.mp3",
        "songId": "song_jvumsunr"
    },
    {
        "nombre": "Zell - iceberg",
        "archivo": "art654.mp3",
        "songId": "song_ipwhtogh"
    },
    {
        "nombre": "Zell - iPhone",
        "archivo": "art655.mp3",
        "songId": "song_9mdsdkzi"
    },
    {
        "nombre": "Zell - Joven Ballin",
        "archivo": "art656.mp3",
        "songId": "song_q7h478mo"
    },
    {
        "nombre": "Zell - Keep It Quiet",
        "archivo": "art657.mp3",
        "songId": "song_7wdatq3t"
    },
    {
        "nombre": "Zell - Kendall",
        "archivo": "art658.mp3",
        "songId": "song_yhtv3zfs"
    },
    {
        "nombre": "Zell - on my mind",
        "archivo": "art659.mp3",
        "songId": "song_zx0l2sov"
    },
    {
        "nombre": "Zell - piso 3",
        "archivo": "art660.mp3",
        "songId": "song_a2qoaeyl"
    },
    {
        "nombre": "Zell - Rainbow",
        "archivo": "art661.mp3",
        "songId": "song_bytzy3e2"
    },
    {
        "nombre": "Zell - Ritual",
        "archivo": "art662.mp3",
        "songId": "song_32izd773"
    },
    {
        "nombre": "Zell - Starboy",
        "archivo": "art663.mp3",
        "songId": "song_w6cipuh8"
    },
    {
        "nombre": "Zell - stripper",
        "archivo": "art664.mp3",
        "songId": "song_cu440o0h"
    },
    {
        "nombre": "Zell - Uber",
        "archivo": "art665.mp3",
        "songId": "song_3hspt9ev"
    },
    {
        "nombre": "Zell - vamonos",
        "archivo": "art666.mp3",
        "songId": "song_4383vkqx"
    },
    {
        "nombre": "Zell - webcam",
        "archivo": "art667.mp3",
        "songId": "song_u79eug69"
    },
    {
        "nombre": "Zell - Whats Up",
        "archivo": "art668.mp3",
        "songId": "song_x1i8rf68"
    },
    {
        "nombre": "Zell - ᐸ3",
        "archivo": "art669.mp3",
        "songId": "song_zddrp170"
    },
    {
        "nombre": "Zell, Bhavi - nanana",
        "archivo": "art670.mp3",
        "songId": "song_8e16iuc3"
    },
    {
        "nombre": "Zell, KNAK - ZiploK",
        "archivo": "art671.mp3",
        "songId": "song_q16ezt7k"
    },
    {
        "nombre": "Zell, Polima Westcoast - g wagon",
        "archivo": "art672.mp3",
        "songId": "song_0qbrzlrq"
    },
    {
        "nombre": "Zell, Rojuu - Bye Bye",
        "archivo": "art673.mp3",
        "songId": "song_151fbv3k"
    },
    {
        "nombre": "Zell, Tiago PZK - xq te enamoraste",
        "archivo": "art674.mp3",
        "songId": "song_vlg60z9c"
    },
    {
        "nombre": "Frozouda - doble F con visa",
        "archivo": "art675.mp3",
        "songId": "song_yjgsmsje"
    },
    {
        "nombre": "Frozouda - TOP !",
        "archivo": "art676.mp3",
        "songId": "song_4squ5eiq"
    },
    {
        "nombre": "Frozouda - no le di un break",
        "archivo": "art677.mp3",
        "songId": "song_esapf8ev"
    },
    {
        "nombre": "Frozouda - antipatico",
        "archivo": "art678.mp3",
        "songId": "song_zsb3p5dd"
    },
    {
        "nombre": "LOLO - OG KUSH",
        "archivo": "art679.mp3",
        "songId": "song_vrkfvma2"
    },
    {
        "nombre": "LOLO - POP POP POP",
        "archivo": "art680.mp3",
        "songId": "song_8zmy3fla"
    },
    {
        "nombre": "LOLO - GAS DE ENERO",
        "archivo": "art681.mp3",
        "songId": "song_nn0jn89q"
    },
    {
        "nombre": "LOLO - NO WAY",
        "archivo": "art682.mp3",
        "songId": "song_zjzraaxk"
    },
    {
        "nombre": "LOLO - HOY SI QUEMO",
        "archivo": "art683.mp3",
        "songId": "song_clo3cnpu"
    },
    {
        "nombre": "LOLO - ALEJO ISAKK",
        "archivo": "art684.mp3",
        "songId": "song_8wahp6hb"
    },
    {
        "nombre": "LOLO - NOVIEMBRE",
        "archivo": "art685.mp3",
        "songId": "song_2kum7ocj"
    },
    {
        "nombre": "LOLO - FRIO EN DICIEMBRE",
        "archivo": "art686.mp3",
        "songId": "song_hiqt1h5w"
    },
    {
        "nombre": "LOLO - VASO DE A DOS",
        "archivo": "art687.mp3",
        "songId": "song_2ka2zhxe"
    },
    {
        "nombre": "Frozouda - mama reza por mi",
        "archivo": "art688.mp3",
        "songId": "song_em1g4v72"
    },
    {
        "nombre": "Frozouda - poema a mi nena",
        "archivo": "art689.mp3",
        "songId": "song_f5somopr"
    },
    {
        "nombre": "Frozouda - ahorrando para un fennec",
        "archivo": "art690.mp3",
        "songId": "song_q6sk907i"
    },
    {
        "nombre": "Frozouda - la cruz como a sampaoli",
        "archivo": "art691.mp3",
        "songId": "song_evjnytee"
    },
    {
        "nombre": "Frozouda, pabloxo - con los duros",
        "archivo": "art692.mp3",
        "songId": "song_4s8lr7dd"
    },
    {
        "nombre": "Frozouda - sugarrrush",
        "archivo": "art693.mp3",
        "songId": "song_2wcl06oa"
    },
    {
        "nombre": "Shako - elvira",
        "archivo": "art694.mp3",
        "songId": "song_ijbez7hp"
    },
    {
        "nombre": "Shako - es la vencida",
        "archivo": "art695.mp3",
        "songId": "song_jticz9ge"
    },
    {
        "nombre": "Shako - roli rola",
        "archivo": "art696.mp3",
        "songId": "song_ex17ocpp"
    },
    {
        "nombre": "Shako - press play to join party",
        "archivo": "art697.mp3",
        "songId": "song_2vb272u3"
    },
    {
        "nombre": "Shako - 2030",
        "archivo": "art698.mp3",
        "songId": "song_n4gcsj23"
    },
    {
        "nombre": "Shako - Shako West",
        "archivo": "art699.mp3",
        "songId": "song_eqvxkycc"
    },
    {
        "nombre": "Cluster, Icynico - Slime, slime, slime",
        "archivo": "art700.mp3",
        "songId": "song_h0p14we4"
    },
    {
        "nombre": "Cluster - Vuelvo a ser yo",
        "archivo": "art701.mp3",
        "songId": "song_58ftadp0"
    },
    {
        "nombre": "Cluster - Bagg",
        "archivo": "art702.mp3",
        "songId": "song_czqsprb6"
    },
    {
        "nombre": "Cluster, Gllato, Dreiko Estrada - TONTO, RETONTO Y REQUETETONTO",
        "archivo": "art703.mp3",
        "songId": "song_3b00fkvt"
    },
    {
        "nombre": "Cluster - JUMPOUTHEHOUSE",
        "archivo": "art704.mp3",
        "songId": "song_s84wybpt"
    },
    {
        "nombre": "Cluster - AK de Irak",
        "archivo": "art705.mp3",
        "songId": "song_nnqievwl"
    },
    {
        "nombre": "Cluster - En cada verbo",
        "archivo": "art706.mp3",
        "songId": "song_rriw5vsd"
    },
    {
        "nombre": "Zell, KNAK - Me Da Igual",
        "archivo": "art707.mp3",
        "songId": "song_fojpm84i"
    },
    {
        "nombre": "Zell - Where U At",
        "archivo": "art708.mp3",
        "songId": "song_9koxflrn"
    },
    {
        "nombre": "Zell - Otra Chance",
        "archivo": "art709.mp3",
        "songId": "song_pipl89we"
    },
    {
        "nombre": "Zell - que paso ayer",
        "archivo": "art710.mp3",
        "songId": "song_j2lviyn7"
    },
    {
        "nombre": "Zell, Salastkbron - luna",
        "archivo": "art711.mp3",
        "songId": "song_vwrjcf2x"
    },
    {
        "nombre": "TURROBABY - Toda La Plata",
        "archivo": "art712.mp3",
        "songId": "song_a4epoyzv"
    },
    {
        "nombre": "TURROBABY - Ventilador",
        "archivo": "art713.mp3",
        "songId": "song_xc9e40r7"
    },
    {
        "nombre": "TURROBABY - Billetes De Cien",
        "archivo": "art714.mp3",
        "songId": "song_k6ogu5ey"
    },
    {
        "nombre": "MAGNESIO - YUYOS",
        "archivo": "art715.mp3",
        "songId": "song_wa21beci"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ME LO MUEVE",
        "archivo": "art716.mp3",
        "songId": "song_e3pxyl9j"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - COF COF",
        "archivo": "art717.mp3",
        "songId": "song_i6lbfpjk"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, Polus - REMERA I LOVE SWAG",
        "archivo": "art718.mp3",
        "songId": "song_2palerl2"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - MUSICA ANTI VIEJOS",
        "archivo": "art719.mp3",
        "songId": "song_9a5bso8s"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ESTO ES ENCHUFE LA CHUPA EL HIP HOP",
        "archivo": "art720.mp3",
        "songId": "song_c42q12gr"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ESTOY RE PANCHO",
        "archivo": "art721.mp3",
        "songId": "song_owiw061y"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - SHH CERRA EL ORTO VIEJO ROCKERO",
        "archivo": "art722.mp3",
        "songId": "song_88mz6eco"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, Joshu Joshu, Matiasenchufe - FERNET",
        "archivo": "art723.mp3",
        "songId": "song_8r668jbw"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - YO ESTOY",
        "archivo": "art724.mp3",
        "songId": "song_bfh7xpo0"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - BB BELT",
        "archivo": "art725.mp3",
        "songId": "song_3cf7x414"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - OKAY OKAY",
        "archivo": "art726.mp3",
        "songId": "song_y701qc1y"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - LE PIDO A DIOS",
        "archivo": "art727.mp3",
        "songId": "song_v5j4thsp"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - HOMBRE SWAG",
        "archivo": "art728.mp3",
        "songId": "song_rvc8e406"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ABUELO",
        "archivo": "art729.mp3",
        "songId": "song_fs8e341k"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - DORITOS",
        "archivo": "art730.mp3",
        "songId": "song_5e7g6uy4"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - PALITO DE LA SELVA",
        "archivo": "art731.mp3",
        "songId": "song_8c9isgep"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - ZAZA",
        "archivo": "art732.mp3",
        "songId": "song_fjw23j60"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - FIDO DIDO",
        "archivo": "art733.mp3",
        "songId": "song_ljopswy3"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - NO SE",
        "archivo": "art734.mp3",
        "songId": "song_oucgy3d5"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - SWAGBOI",
        "archivo": "art735.mp3",
        "songId": "song_kmaql1tc"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy - Otro idioma",
        "archivo": "art736.mp3",
        "songId": "song_gnax31nb"
    },
    {
        "nombre": "AGUSFORTNITE2008 - ENCONTRATE A VOS",
        "archivo": "art737.mp3",
        "songId": "song_3ftozufy"
    },
    {
        "nombre": "AGUSFORTNITE2008 - MENTIR",
        "archivo": "art738.mp3",
        "songId": "song_451wd4rp"
    },
    {
        "nombre": "AGUSFORTNITE2008 - YO ESTOY EN UNA Y ELLA EN 4",
        "archivo": "art739.mp3",
        "songId": "song_e8xrg8lp"
    },
    {
        "nombre": "AGUSFORTNITE2008 - DEJO EL HUMO",
        "archivo": "art740.mp3",
        "songId": "song_99uxgfpo"
    },
    {
        "nombre": "AGUSFORTNITE2008 - VIP DEL VIP",
        "archivo": "art741.mp3",
        "songId": "song_d3efcs0k"
    },
    {
        "nombre": "Stiffy - LOS DOS",
        "archivo": "art742.mp3",
        "songId": "song_odmolfyv"
    },
    {
        "nombre": "Stiffy - WACKAFLOKA",
        "archivo": "art743.mp3",
        "songId": "song_dq0gmjy8"
    },
    {
        "nombre": "Stiffy - SIEMPRE FUMO PORRO",
        "archivo": "art744.mp3",
        "songId": "song_n23kgsdy"
    },
    {
        "nombre": "Stiffy - SIEMPRE FUMO PORRO",
        "archivo": "art745.mp3",
        "songId": "song_0qerrdj9"
    },
    {
        "nombre": "Stiffy - DISFRUTAR",
        "archivo": "art746.mp3",
        "songId": "song_j9oltb7c"
    },
    {
        "nombre": "Stiffy - YA CASI",
        "archivo": "art747.mp3",
        "songId": "song_fmq1q5fd"
    },
    {
        "nombre": "Stiffy - NO ME CANSO",
        "archivo": "art748.mp3",
        "songId": "song_4wdcrdda"
    },
    {
        "nombre": "Jugo!, Emirsito, Mhtresuno - Estimulos",
        "archivo": "art749.mp3",
        "songId": "song_6ft4bel6"
    },
    {
        "nombre": "Jugo!, pabloxo - Nunca va a ser igual el esfuerzo",
        "archivo": "art750.mp3",
        "songId": "song_4j9eohzi"
    },
    {
        "nombre": "Jugo! - Me neutralice",
        "archivo": "art751.mp3",
        "songId": "song_bmbljq29"
    },
    {
        "nombre": "Jugo! - Maradona",
        "archivo": "art752.mp3",
        "songId": "song_5ugt473p"
    },
    {
        "nombre": "Jugo! - Tengo que hacerlo",
        "archivo": "art753.mp3",
        "songId": "song_uyxq9k2o"
    },
    {
        "nombre": "Jugo!, Emirsito, Frozouda - Parece que entreno",
        "archivo": "art754.mp3",
        "songId": "song_sgt48plf"
    },
    {
        "nombre": "Jugo!, LuchoSSJ, KNAK - Reviento el spot",
        "archivo": "art755.mp3",
        "songId": "song_hd3vmfet"
    },
    {
        "nombre": "Jugo! - Desde cba",
        "archivo": "art756.mp3",
        "songId": "song_f3jqov1z"
    },
    {
        "nombre": "Jugo! - Sube la sintonia",
        "archivo": "art757.mp3",
        "songId": "song_a3dvu8f2"
    },
    {
        "nombre": "Jugo! - Es una obsesion",
        "archivo": "art758.mp3",
        "songId": "song_1xltdcrh"
    },
    {
        "nombre": "Jugo!, TURROBABY - Zafiros",
        "archivo": "art759.mp3",
        "songId": "song_uemw6aeh"
    },
    {
        "nombre": "Jugo!, bic - Hard",
        "archivo": "art760.mp3",
        "songId": "song_ij1hat96"
    },
    {
        "nombre": "Jugo! - Todo el año",
        "archivo": "art761.mp3",
        "songId": "song_uffkq7a1"
    },
    {
        "nombre": "Jugo! - Esto es transitorio",
        "archivo": "art762.mp3",
        "songId": "song_hc0myx9f"
    },
    {
        "nombre": "Jugo!, Neo Pistea - Quieren aparentar",
        "archivo": "art763.mp3",
        "songId": "song_0anwihvn"
    },
    {
        "nombre": "Jugo! - Un solo cable",
        "archivo": "art764.mp3",
        "songId": "song_m1b1dmgd"
    },
    {
        "nombre": "enzocerobulto - Quien tiene la mirada mas cansada",
        "archivo": "art765.mp3",
        "songId": "song_by6pdg2h"
    },
    {
        "nombre": "enzocerobulto - Mi computadora",
        "archivo": "art766.mp3",
        "songId": "song_s7ekg2nl"
    },
    {
        "nombre": "enzocerobulto - Como Lastima",
        "archivo": "art767.mp3",
        "songId": "song_4l4hijes"
    },
    {
        "nombre": "enzocerobulto - En donde",
        "archivo": "art768.mp3",
        "songId": "song_0bvk3xwf"
    },
    {
        "nombre": "enzocerobulto - Como se lo hago",
        "archivo": "art769.mp3",
        "songId": "song_mcmkxoi6"
    },
    {
        "nombre": "enzocerobulto - De vuelta",
        "archivo": "art770.mp3",
        "songId": "song_1xokdby1"
    },
    {
        "nombre": "enzocerobulto - Diez en la trampa",
        "archivo": "art771.mp3",
        "songId": "song_9m43w5i2"
    },
    {
        "nombre": "enzocerobulto - Lo que fumo lo que tomo",
        "archivo": "art772.mp3",
        "songId": "song_q4a68420"
    },
    {
        "nombre": "pabloxo - Fajos de 20 mil",
        "archivo": "art773.mp3",
        "songId": "song_ydvhfz3s"
    },
    {
        "nombre": "pabloxo - Fumando en los clubes",
        "archivo": "art774.mp3",
        "songId": "song_i248978z"
    },
    {
        "nombre": "pabloxo, Hwii - PABLOXO",
        "archivo": "art775.mp3",
        "songId": "song_fugm9h7c"
    },
    {
        "nombre": "cero - 10g",
        "archivo": "art776.mp3",
        "songId": "song_t2bv3jhz"
    },
    {
        "nombre": "cero - Plata dolida",
        "archivo": "art777.mp3",
        "songId": "song_ufr3z1ix"
    },
    {
        "nombre": "cero - Plata tarada",
        "archivo": "art778.mp3",
        "songId": "song_778i5upr"
    },
    {
        "nombre": "cero - 5velas",
        "archivo": "art779.mp3",
        "songId": "song_undpokza"
    },
    {
        "nombre": "cero - huida",
        "archivo": "art780.mp3",
        "songId": "song_tr2kuze6"
    },
    {
        "nombre": "cero - a correr",
        "archivo": "art781.mp3",
        "songId": "song_e9rio5do"
    },
    {
        "nombre": "cero - Ella",
        "archivo": "art782.mp3",
        "songId": "song_webewgkd"
    },
    {
        "nombre": "cero, Jugo! - YeA 2",
        "archivo": "art783.mp3",
        "songId": "song_7h5i65co"
    },
    {
        "nombre": "cero, pabloxo - oki",
        "archivo": "art784.mp3",
        "songId": "song_g0z6plwt"
    },
    {
        "nombre": "cero - las otras victorias quedan chicas con lo que te anhelo",
        "archivo": "art785.mp3",
        "songId": "song_qx6lh943"
    },
    {
        "nombre": "cero, huntr - a donde vas¿",
        "archivo": "art786.mp3",
        "songId": "song_ox78ypy2"
    },
    {
        "nombre": "cero - foe",
        "archivo": "art787.mp3",
        "songId": "song_66jpbzv6"
    },
    {
        "nombre": "cero - +personal",
        "archivo": "art788.mp3",
        "songId": "song_umm064z7"
    },
    {
        "nombre": "cero, TURROBABY - a solas",
        "archivo": "art789.mp3",
        "songId": "song_p165imfk"
    },
    {
        "nombre": "cero, underaiki - sisu",
        "archivo": "art790.mp3",
        "songId": "song_1j08oi6e"
    },
    {
        "nombre": "cero - toco madera",
        "archivo": "art791.mp3",
        "songId": "song_bl16rt07"
    },
    {
        "nombre": "cero - 1-2",
        "archivo": "art792.mp3",
        "songId": "song_l34dznm3"
    },
    {
        "nombre": "cero - Sin ayuda",
        "archivo": "art793.mp3",
        "songId": "song_t9w048xh"
    },
    {
        "nombre": "cero, Lthelizard - Jakaranda",
        "archivo": "art794.mp3",
        "songId": "song_u730c3lc"
    },
    {
        "nombre": "cero - t & p",
        "archivo": "art795.mp3",
        "songId": "song_q3z5c809"
    },
    {
        "nombre": "cero - Ye A",
        "archivo": "art796.mp3",
        "songId": "song_jx6ni8gu"
    },
    {
        "nombre": "cero, Doly Flackko - Peine teta",
        "archivo": "art797.mp3",
        "songId": "song_y1mc2ucd"
    },
    {
        "nombre": "cero, Sixup - Palo",
        "archivo": "art798.mp3",
        "songId": "song_ec75k9he"
    },
    {
        "nombre": "cero - Drumkits en el pantalon",
        "archivo": "art799.mp3",
        "songId": "song_9m9epe33"
    },
    {
        "nombre": "cero - t",
        "archivo": "art800.mp3",
        "songId": "song_kgenrk5h"
    },
    {
        "nombre": "cero - 2 Sedas",
        "archivo": "art801.mp3",
        "songId": "song_hz14bf4n"
    },
    {
        "nombre": "cero, Jugo! - Voy a hacer historia",
        "archivo": "art802.mp3",
        "songId": "song_52hipcqw"
    },
    {
        "nombre": "cero - Locomotora",
        "archivo": "art803.mp3",
        "songId": "song_6o96h8f9"
    },
    {
        "nombre": "cero - Cabra",
        "archivo": "art804.mp3",
        "songId": "song_wfsfks6q"
    },
    {
        "nombre": "Cluster, cero - Imbecil Anthem (intro)",
        "archivo": "art805.mp3",
        "songId": "song_hmip8i3u"
    },
    {
        "nombre": "enzocerobulto - Comoledoy",
        "archivo": "art806.mp3",
        "songId": "song_zlq40iym"
    },
    {
        "nombre": "enzocerobulto - partexparte",
        "archivo": "art807.mp3",
        "songId": "song_o0dbwost"
    },
    {
        "nombre": "enzocerobulto - Toda la culpa es mia",
        "archivo": "art808.mp3",
        "songId": "song_zv0gubag"
    },
    {
        "nombre": "enzocerobulto - w el filo",
        "archivo": "art809.mp3",
        "songId": "song_uo80dvri"
    },
    {
        "nombre": "enzocerobulto, J Bern - xdentromuerto",
        "archivo": "art810.mp3",
        "songId": "song_ior0ayv3"
    },
    {
        "nombre": "enzocerobulto, Komp - Como antes",
        "archivo": "art811.mp3",
        "songId": "song_0kv7z1d5"
    },
    {
        "nombre": "enzocerobulto, Komp - Fe Intacta",
        "archivo": "art812.mp3",
        "songId": "song_0zi1lku5"
    },
    {
        "nombre": "enzocerobulto, liluno - Pullop",
        "archivo": "art813.mp3",
        "songId": "song_ok4swcmg"
    },
    {
        "nombre": "enzocerobulto, pa2k - w el K1",
        "archivo": "art814.mp3",
        "songId": "song_r0mn79ug"
    },
    {
        "nombre": "pabloxo - Porrible",
        "archivo": "art815.mp3",
        "songId": "song_siziwjvc"
    },
    {
        "nombre": "Shako - Con Fines De Lucro",
        "archivo": "art816.mp3",
        "songId": "song_j3i6nm5f"
    },
    {
        "nombre": "Zell - Zzz",
        "archivo": "art817.mp3",
        "songId": "song_f0jay4yd"
    },
    {
        "nombre": "Jugo! - Nunca me vire",
        "archivo": "art818.mp3",
        "songId": "song_df6tmq5i"
    },
    {
        "nombre": "Doly Flackko - Street Pain",
        "archivo": "art819.mp3",
        "songId": "song_22d7r0rv"
    },
    {
        "nombre": "Doly Flackko - Ambicion & Adrenalina",
        "archivo": "art820.mp3",
        "songId": "song_fktv89wo"
    },
    {
        "nombre": "Doly Flackko - Flackkosito",
        "archivo": "art821.mp3",
        "songId": "song_ven9naqc"
    },
    {
        "nombre": "Doly Flackko - Delirio de Grandeza",
        "archivo": "art822.mp3",
        "songId": "song_csgbn3po"
    },
    {
        "nombre": "Doly Flackko - Pala Ancha",
        "archivo": "art823.mp3",
        "songId": "song_glpa2h0l"
    },
    {
        "nombre": "Doly Flackko - Veneno",
        "archivo": "art824.mp3",
        "songId": "song_myj1vg0d"
    },
    {
        "nombre": "Doly Flackko - donde queres estar",
        "archivo": "art825.mp3",
        "songId": "song_6sc1buxp"
    },
    {
        "nombre": "Doly Flackko - Outro Chau",
        "archivo": "art826.mp3",
        "songId": "song_zck0m27p"
    },
    {
        "nombre": "AGUSFORTNITE2008, Stiffy, TURROBABY - ESCENARIO",
        "archivo": "art827.mp3",
        "songId": "song_2fyabznd"
    },
    {
        "nombre": "eluney benedetti, elaiyah - El morfon",
        "archivo": "art828.mp3",
        "songId": "song_mb143r3h"
    },
    {
        "nombre": "eluney benedetti - mi ñerY",
        "archivo": "art829.mp3",
        "songId": "song_4kc4jwtx"
    },
    {
        "nombre": "eluney benedetti, elaiyah - Idioma",
        "archivo": "art830.mp3",
        "songId": "song_mg63r0it"
    },
    {
        "nombre": "eluney benedetti, elaiyah - A los palomos",
        "archivo": "art831.mp3",
        "songId": "song_ejcqkjbp"
    },
    {
        "nombre": "eluney benedetti - aYvamo",
        "archivo": "art832.mp3",
        "songId": "song_r453fsr7"
    },
    {
        "nombre": "eluney benedetti, elaiyah - Los3",
        "archivo": "art833.mp3",
        "songId": "song_ht59se71"
    },
    {
        "nombre": "eluney benedetti, TULO13 - Che",
        "archivo": "art834.mp3",
        "songId": "song_k62nczi0"
    },
    {
        "nombre": "eluney benedetti, 2uu! - ENCIMA MIO",
        "archivo": "art835.mp3",
        "songId": "song_zmmf97x3"
    },
    {
        "nombre": "eluney benedetti - Pimpinela Love",
        "archivo": "art836.mp3",
        "songId": "song_zqw16xtn"
    },
    {
        "nombre": "eluney benedetti - Le Da Igual",
        "archivo": "art837.mp3",
        "songId": "song_haqts0tq"
    },
    {
        "nombre": "elaiyah - mala sangre",
        "archivo": "art838.mp3",
        "songId": "song_dgnvtewj"
    },
    {
        "nombre": "elaiyah - una lagrima y una pua",
        "archivo": "art839.mp3",
        "songId": "song_rnr63iz4"
    },
    {
        "nombre": "elaiyah - mi culpa",
        "archivo": "art840.mp3",
        "songId": "song_q4f19g0x"
    },
    {
        "nombre": "elaiyah - Pudrete",
        "archivo": "art841.mp3",
        "songId": "song_7d4x7qq9"
    },
    {
        "nombre": "elaiyah - Evocar",
        "archivo": "art842.mp3",
        "songId": "song_jjg8258q"
    },
    {
        "nombre": "CHOOSEY, Yvng Jorge - Le TOTO",
        "archivo": "art843.mp3",
        "songId": "song_kougeby2"
    },
    {
        "nombre": "CHOOSEY - X Belgrano",
        "archivo": "art844.mp3",
        "songId": "song_6wg9efdt"
    },
    {
        "nombre": "CHOOSEY - DITOYS",
        "archivo": "art845.mp3",
        "songId": "song_iq6zioux"
    },
    {
        "nombre": "CHOOSEY - 3 MONITOS",
        "archivo": "art846.mp3",
        "songId": "song_0oosmjuy"
    },
    {
        "nombre": "CHOOSEY - BANCO",
        "archivo": "art847.mp3",
        "songId": "song_5e43o7yj"
    },
    {
        "nombre": "CHOOSEY - QUE CONCHA QUERES",
        "archivo": "art848.mp3",
        "songId": "song_2c7tqpqm"
    },
    {
        "nombre": "CHOOSEY - SIGAN SIN MI",
        "archivo": "art849.mp3",
        "songId": "song_9zk5v974"
    },
    {
        "nombre": "CHOOSEY, n0tgiova - DON ROKE",
        "archivo": "art850.mp3",
        "songId": "song_j3wfabj2"
    },
    {
        "nombre": "CHOOSEY - ORISHINAL",
        "archivo": "art851.mp3",
        "songId": "song_cbtu9x38"
    },
    {
        "nombre": "TURROBABY, LITTLE BOOGIE - Emotes",
        "archivo": "art852.mp3",
        "songId": "song_rq9v806m"
    },
    {
        "nombre": "jovenalien - Ni ahi con tus quilombos",
        "archivo": "art853.mp3",
        "songId": "song_w6gau36k"
    },
    {
        "nombre": "White! - Sombras",
        "archivo": "art854.mp3",
        "songId": "song_vnm5cwxl"
    },
    {
        "nombre": "Nykoo0 - Barack Obama",
        "archivo": "art855.mp3",
        "songId": "song_8crghd4o"
    },
    {
        "nombre": "bic - selfish",
        "archivo": "art856.mp3",
        "songId": "song_vtivaenc"
    },
    {
        "nombre": "bic - como amar",
        "archivo": "art857.mp3",
        "songId": "song_ed1jix0g"
    },
    {
        "nombre": "bic - silly",
        "archivo": "art858.mp3",
        "songId": "song_h4e6srgx"
    },
    {
        "nombre": "bic - new one",
        "archivo": "art859.mp3",
        "songId": "song_bdtbp6er"
    },
    {
        "nombre": "bic - tus recuerdos",
        "archivo": "art860.mp3",
        "songId": "song_4n3cnfv0"
    },
    {
        "nombre": "bic - dramas",
        "archivo": "art861.mp3",
        "songId": "song_ebcapdzp"
    },
    {
        "nombre": "slimesanti - Friendzone",
        "archivo": "art862.mp3",
        "songId": "song_v85xce5k"
    }
];

const albumsData = [
    {
        "name": "Joseo exclusive club",
        "cover": COVERS_BASE_URL + "img_JOSEO EXCLUSIVE CLUB.png",
        "songs": [
            { "nombre": "LOLO - MINI LOLO", "archivo": "albm877.mp3",
        "songId": "song_0opnh076" },
            { "nombre": "LOLO - OSCUROoOo", "archivo": "albm878.mp3",
        "songId": "song_3j4we3fk" },
            { "nombre": "LOLO - APHEX TWIN", "archivo": "albm879.mp3",
        "songId": "song_pdcueu0z" },
            { "nombre": "LOLO - QUIEN FUE", "archivo": "albm880.mp3",
        "songId": "song_o15e7x5z" },
            { "nombre": "LOLO - SYDNEY", "archivo": "albm881.mp3",
        "songId": "song_q81za40e" },
            { "nombre": "LOLO - GASTEMOS MAS", "archivo": "albm882.mp3",
        "songId": "song_w5w1wtwn" },
            { "nombre": "LOLO - HATER", "archivo": "albm883.mp3",
        "songId": "song_3ww77bla" },
            { "nombre": "LOLO - ALEJO ISAKK", "archivo": "albm884.mp3",
        "songId": "song_vd8f9b9q" },
            { "nombre": "LOLO - HOY SI QUEMO", "archivo": "albm885.mp3",
        "songId": "song_met3073l" },
            { "nombre": "LOLO - OG KUSH", "archivo": "albm886.mp3",
        "songId": "song_5y1dy611" },
            { "nombre": "LOLO - NO WAY", "archivo": "albm887.mp3",
        "songId": "song_repy7m7g" },
            { "nombre": "LOLO - GAS DE ENERO", "archivo": "albm888.mp3",
        "songId": "song_4x7v7czw" },
            { "nombre": "LOLO - POP POP POP", "archivo": "albm889.mp3",
        "songId": "song_ayn4slzj" },
            { "nombre": "LOLO - NOVIEMBRE", "archivo": "albm890.mp3",
        "songId": "song_3kz9854b" },
            { "nombre": "LOLO - FRIO EN DICIEMBRE", "archivo": "albm891.mp3",
        "songId": "song_rx0xseuj" },
            { "nombre": "LOLO - VASO DE A DOS", "archivo": "albm892.mp3",
        "songId": "song_g43vp1dp" }
        ]
    },
    {
        "name": "Fro! 2",
        "cover": COVERS_BASE_URL + "img_FRO2.png",
        "songs": [
            { "nombre": "Frozouda - no le di un break", "archivo": "albm893.mp3",
        "songId": "song_c6m13wuc" },
            { "nombre": "Frozouda - quitate las BAPE", "archivo": "albm894.mp3",
        "songId": "song_zm388ivv" },
            { "nombre": "Frozouda - antipatico", "archivo": "albm895.mp3",
        "songId": "song_a2yh4oo0" },
            { "nombre": "Frozouda - quitate los Jeans", "archivo": "albm896.mp3",
        "songId": "song_vhwc4oqi" },
            { "nombre": "Frozouda - TOP !", "archivo": "albm897.mp3",
        "songId": "song_90m7gy20" },
            { "nombre": "Frozouda , Cero , Cluster - plinko", "archivo": "albm898.mp3",
        "songId": "song_h1qnpa6e" },
            { "nombre": "Frozouda - doble F con visa", "archivo": "albm899.mp3",
        "songId": "song_k50tj13z" }
        ]
    },
    {
        "name": "Fro!",
        "cover": COVERS_BASE_URL + "img_FRO.png",
        "songs": [
            { "nombre": "Frozouda, Jugo!, KNAK - chirlito", "archivo": "albm900.mp3",
        "songId": "song_v1r8w1wq" },
            { "nombre": "Frozouda, Cluster - hot box", "archivo": "albm901.mp3",
        "songId": "song_zskgh058" },
            { "nombre": "Frozouda - un goat siempre esta busy", "archivo": "albm902.mp3",
        "songId": "song_714d0cox" },
            { "nombre": "Frozouda - nicki nicole", "archivo": "albm903.mp3",
        "songId": "song_rcjpy9dc" },
            { "nombre": "Frozouda - GAS O PORRO", "archivo": "albm904.mp3",
        "songId": "song_set94afw" },
            { "nombre": "Frozouda - mama reza por mi", "archivo": "albm905.mp3",
        "songId": "song_123e3g8a" },
            { "nombre": "Frozouda - poema a mi nena", "archivo": "albm906.mp3",
        "songId": "song_opq3t9yw" },
            { "nombre": "Frozouda - ahorrando para un fennec", "archivo": "albm907.mp3",
        "songId": "song_t5yt8wkk" },
            { "nombre": "Frozouda - sugarrrush", "archivo": "albm908.mp3",
        "songId": "song_tidf8lkv" },
            { "nombre": "Frozouda, pabloxo - con los duros", "archivo": "albm909.mp3",
        "songId": "song_fdidkm05" },
            { "nombre": "Frozouda - la cruz como a sampaoli", "archivo": "albm910.mp3",
        "songId": "song_wt5ai8po" }
        ]
    },
    {
        "name": "grandes éxitos",
        "cover": COVERS_BASE_URL + "img_grandesexitos.png",
        "songs": [
            { "nombre": "Shako - Con Fines De Lucro", "archivo": "albm911.mp3",
        "songId": "song_inxc8a1h" },
            { "nombre": "Shako - elvira", "archivo": "albm912.mp3",
        "songId": "song_gphznf1x" },
            { "nombre": "Shako - es la vencida", "archivo": "albm913.mp3",
        "songId": "song_g7aox7zh" },
            { "nombre": "Shako - vas a ver el alma mula", "archivo": "albm914.mp3",
        "songId": "song_cyqqiris" },
            { "nombre": "Shako - roli rola", "archivo": "albm915.mp3",
        "songId": "song_imrbefv5" },
            { "nombre": "Shako - press play to join party", "archivo": "albm916.mp3",
        "songId": "song_oyj1vyon" },
            { "nombre": "Shako - Amigdalas", "archivo": "albm917.mp3",
        "songId": "song_su693fdf" },
            { "nombre": "Shako - Hotel", "archivo": "albm918.mp3",
        "songId": "song_dyg5ki4b" },
            { "nombre": "Shako - 2030", "archivo": "albm919.mp3",
        "songId": "song_4hkk6o6o" },
            { "nombre": "Shako - Shako West", "archivo": "albm920.mp3",
        "songId": "song_2eo9dnt5" }
        ]
    },
    {
        "name": "Muy Imbecil",
        "cover": COVERS_BASE_URL + "img_muyimbecil.png",
        "songs": [
            { "nombre": "Cluster, cero - Imbecil Anthem", "archivo": "albm921.mp3",
        "songId": "song_52j99026" },
            { "nombre": "Cluster, Francis Jeremy - MUY IMBECIL", "archivo": "albm922.mp3",
        "songId": "song_b9jkvgn2" },
            { "nombre": "Cluster, Icynico - Slime, slime, slime", "archivo": "albm923.mp3",
        "songId": "song_jscsgpmc" },
            { "nombre": "Cluster - Vuelvo a ser yo", "archivo": "albm924.mp3",
        "songId": "song_jntjb594" },
            { "nombre": "Cluster, Doly Flackko - OREO", "archivo": "albm925.mp3",
        "songId": "song_02xfvy7c" },
            { "nombre": "Cluster - Bagg", "archivo": "albm926.mp3",
        "songId": "song_7v8zdq68" },
            { "nombre": "Cluster, Gllato, Dreiko Estrada - TONTO, RETONTO Y REQUETETONTO", "archivo": "albm927.mp3",
        "songId": "song_9csbdrtd" },
            { "nombre": "Cluster, Aleezok - CARGO", "archivo": "albm928.mp3",
        "songId": "song_pgri0d49" },
            { "nombre": "Cluster - JUMPOUTHEHOUSE", "archivo": "albm929.mp3",
        "songId": "song_22qz232e" },
            { "nombre": "Cluster, enzocerobulto - FFumando", "archivo": "albm930.mp3",
        "songId": "song_ejnhlynm" },
            { "nombre": "Cluster - AK de Irak", "archivo": "albm931.mp3",
        "songId": "song_vyjdolbs" },
            { "nombre": "Cluster, Pabloxo - OTRA SEDA", "archivo": "albm932.mp3",
        "songId": "song_4safdc7b" },
            { "nombre": "Cluster - JEFFES", "archivo": "albm933.mp3",
        "songId": "song_9rssjel2" },
            { "nombre": "Cluster, Frozouda - TOP 1 CHARTS", "archivo": "albm934.mp3",
        "songId": "song_1qz3c30e" },
            { "nombre": "Cluster - En cada verbo", "archivo": "albm935.mp3",
        "songId": "song_y3f2arby" }
        ]
    },
    {
        "name": "PILF",
        "cover": COVERS_BASE_URL + "img_pilf.png",
        "songs": [
            { "nombre": "PILF - ENTRO A LA CANCHA", "archivo": "albm936.mp3",
        "songId": "song_2d6o3r61" },
            { "nombre": "PILF - FUMO UNO FUMO DOS", "archivo": "albm937.mp3",
        "songId": "song_h4phdpjr" },
            { "nombre": "PILF - HIT", "archivo": "albm938.mp3",
        "songId": "song_vw9fyg3i" },
            { "nombre": "PILF - MALVIAJAR", "archivo": "albm939.mp3",
        "songId": "song_rj8gsame" },
            { "nombre": "PILF - NABO", "archivo": "albm940.mp3",
        "songId": "song_dwulk5dq" },
            { "nombre": "PILF - NI ME ACUERDO", "archivo": "albm941.mp3",
        "songId": "song_pg525ys7" },
            { "nombre": "PILF - PILF", "archivo": "albm942.mp3",
        "songId": "song_rpzflhmw" },
            { "nombre": "PILF - ROMANCE TE PUEDO DAR", "archivo": "albm943.mp3",
        "songId": "song_zlia4jx9" },
            { "nombre": "PILF - TANTA GIRA", "archivo": "albm944.mp3",
        "songId": "song_6byxnatk" },
            { "nombre": "PILF - YO SOY ASI", "archivo": "albm945.mp3",
        "songId": "song_o1fkx93g" }
        ]
    },
    {
        "name": "Goat Talk",
        "cover": COVERS_BASE_URL + "img_goattalk.png",
        "songs": [
            { "nombre": "Zell - Zzz", "archivo": "albm946.mp3",
        "songId": "song_hhcwcicd" },
            { "nombre": "Zell - iPhone", "archivo": "albm947.mp3",
        "songId": "song_r2az6qdo" },
            { "nombre": "Zell - Starboy", "archivo": "albm948.mp3",
        "songId": "song_wrqt4s79" },
            { "nombre": "Zell - Uber", "archivo": "albm949.mp3",
        "songId": "song_pv6o9i4w" },
            { "nombre": "Zell - Whats Up", "archivo": "albm950.mp3",
        "songId": "song_qveg1yj8" },
            { "nombre": "Zell - Joven Ballin", "archivo": "albm951.mp3",
        "songId": "song_6h4o03dp" },
            { "nombre": "Zell, Rojuu - Bye Bye", "archivo": "albm952.mp3",
        "songId": "song_wn2g4hr8" },
            { "nombre": "Zell - Aura", "archivo": "albm953.mp3",
        "songId": "song_qlu7sp55" },
            { "nombre": "Zell - Cero Cero", "archivo": "albm954.mp3",
        "songId": "song_2rtzl0qb" },
            { "nombre": "Zell - Keep It Quiet", "archivo": "albm955.mp3",
        "songId": "song_bcayffi0" },
            { "nombre": "Zell - Kendall", "archivo": "albm956.mp3",
        "songId": "song_fnjozjls" },
            { "nombre": "Zell, KNAK - Me Da Igual", "archivo": "albm957.mp3",
        "songId": "song_wfw6b9xn" },
            { "nombre": "Zell - Otra Chance", "archivo": "albm958.mp3",
        "songId": "song_87bif1bk" }
        ]
    },
    {
        "name": "Ballin de verdad",
        "cover": COVERS_BASE_URL + "img_ballinfr.png",
        "songs": [
            { "nombre": "Zell - que paso ayer", "archivo": "albm959.mp3",
        "songId": "song_af0lw2gc" },
            { "nombre": "Zell, Salastkbron - luna", "archivo": "albm960.mp3",
        "songId": "song_uqcu4jmx" },
            { "nombre": "Zell - ballin de verdad", "archivo": "albm961.mp3",
        "songId": "song_kdn7zn8v" },
            { "nombre": "Zell - calvin klein", "archivo": "albm962.mp3",
        "songId": "song_loyl455r" },
            { "nombre": "Zell - diamante", "archivo": "albm963.mp3",
        "songId": "song_gymdg9s9" },
            { "nombre": "Zell - diva", "archivo": "albm964.mp3",
        "songId": "song_8ubjgxi4" },
            { "nombre": "Zell - humo", "archivo": "albm965.mp3",
        "songId": "song_tamui8qt" },
            { "nombre": "Zell - piso 3", "archivo": "albm966.mp3",
        "songId": "song_r5jpqvbh" },
            { "nombre": "Zell - que paso ayer", "archivo": "albm967.mp3",
        "songId": "song_vd467zmh" },
            { "nombre": "Zell - Rainbow", "archivo": "albm968.mp3",
        "songId": "song_aya2zusf" },
            { "nombre": "Zell - stripper", "archivo": "albm969.mp3",
        "songId": "song_k8xpj2hs" },
            { "nombre": "Zell - vamonos", "archivo": "albm970.mp3",
        "songId": "song_l0wag2at" },
            { "nombre": "Zell - webcam", "archivo": "albm971.mp3",
        "songId": "song_ic5wp6ic" },
            { "nombre": "Zell, Bhavi - nanana", "archivo": "albm972.mp3",
        "songId": "song_lrtzv0me" },
            { "nombre": "Zell, Polima Westcoast - g wagon", "archivo": "albm973.mp3",
        "songId": "song_pps4rzet" },
            { "nombre": "Zell, Tiago PZK - xq te enamoraste", "archivo": "albm974.mp3",
        "songId": "song_lw8rdyl9" }
        ]
    },
    {
        "name": "I Love Wachas",
        "cover": COVERS_BASE_URL + "img_ilw.png",
        "songs": [
            { "nombre": "TURROBABY - Toda La Plata", "archivo": "albm975.mp3",
        "songId": "song_hwg6g0zm" },
            { "nombre": "TURROBABY - Bici Itau", "archivo": "albm976.mp3",
        "songId": "song_f2ysdql3" },
            { "nombre": "TURROBABY - Cornudo Consciente", "archivo": "albm977.mp3",
        "songId": "song_xbinriua" },
            { "nombre": "TURROBABY - De Cote", "archivo": "albm978.mp3",
        "songId": "song_e0o82me2" },
            { "nombre": "TURROBABY - Franco Colapinto", "archivo": "albm979.mp3",
        "songId": "song_oxswlbxt" },
            { "nombre": "TURROBABY - Lgante Y Wanda Nara", "archivo": "albm980.mp3",
        "songId": "song_l77so2h7" },
            { "nombre": "TURROBABY - Sergio Massa", "archivo": "albm981.mp3",
        "songId": "song_tkwizpb3" },
            { "nombre": "TURROBABY - Toda La Plata", "archivo": "albm982.mp3",
        "songId": "song_6jizcybt" },
            { "nombre": "TURROBABY - Wacha Flequilluda", "archivo": "albm983.mp3",
        "songId": "song_cx40li1t" },
            { "nombre": "TURROBABY, baby cashy - Colorada", "archivo": "albm984.mp3",
        "songId": "song_hj7lgt0s" },
            { "nombre": "TURROBABY, Doble P - ANTO ROCUZZO", "archivo": "albm985.mp3",
        "songId": "song_urfeygux" },
            { "nombre": "TURROBABY, tussiwarriors, Ze Pequeña - Natalia Oreiro", "archivo": "albm986.mp3",
        "songId": "song_w26qd1ij" },
            { "nombre": "TURROBABY, ZELL, Stiffy - Cara De Boludo", "archivo": "albm987.mp3",
        "songId": "song_pjsym3x7" }
        ]
    },
    {
        "name": "Muchas gracias autotune",
        "cover": COVERS_BASE_URL + "img_graciastune.png",
        "songs": [
            { "nombre": "TURROBABY - Aca y Alla y En Todos Lados", "archivo": "albm988.mp3",
        "songId": "song_6xmbr9km" },
            { "nombre": "TURROBABY - Filmemos Una Peli", "archivo": "albm989.mp3",
        "songId": "song_vazzfrhe" },
            { "nombre": "TURROBABY - Mañana Me Voy De Gira", "archivo": "albm990.mp3",
        "songId": "song_743kbit7" },
            { "nombre": "TURROBABY - Yo Te Amo Toda", "archivo": "albm991.mp3",
        "songId": "song_24gvcqhx" },
            { "nombre": "TURROBABY, Bhavi - Parabrisas", "archivo": "albm992.mp3",
        "songId": "song_l0kg11dq" },
            { "nombre": "TURROBABY, enzocerobulto - Las Seis", "archivo": "albm993.mp3",
        "songId": "song_r5ptttzg" },
            { "nombre": "TURROBABY, Lolo OG - Lovebombing", "archivo": "albm994.mp3",
        "songId": "song_zd1bkjo8" },
            { "nombre": "TURROBABY, ZELL - Inter De Miami", "archivo": "albm995.mp3",
        "songId": "song_iqb3ekt6" }
        ]
    },
    {
        "name": "blackalbum",
        "cover": COVERS_BASE_URL + "img_blackalbum.png",
        "songs": [
            { "nombre": "enzocerobulto, liluno - Pullop", "archivo": "albm996.mp3",
        "songId": "song_lrr5ewy8" },
            { "nombre": "enzocerobulto - Comoledoy", "archivo": "albm997.mp3",
        "songId": "song_rp98hm9s" },
            { "nombre": "enzocerobulto - Esta nota", "archivo": "albm998.mp3",
        "songId": "song_b3j3f1sy" },
            { "nombre": "enzocerobulto - partexparte", "archivo": "albm999.mp3",
        "songId": "song_ckr5ywfv" },
            { "nombre": "enzocerobulto - perdiendo", "archivo": "albm1000.mp3",
        "songId": "song_y6y0a9vc" },
            { "nombre": "enzocerobulto - Toda la culpa es mia", "archivo": "albm1001.mp3",
        "songId": "song_7sc33i8y" },
            { "nombre": "enzocerobulto - w el filo", "archivo": "albm1002.mp3",
        "songId": "song_ubftsxvl" },
            { "nombre": "enzocerobulto, J Bern - xdentromuerto", "archivo": "albm1003.mp3",
        "songId": "song_lcl3r9jp" },
            { "nombre": "enzocerobulto, Komp - Como antes", "archivo": "albm1004.mp3",
        "songId": "song_sfa9h103" },
            { "nombre": "enzocerobulto, Komp - Fe Intacta", "archivo": "albm1005.mp3",
        "songId": "song_xkb4rd0a" },
            { "nombre": "enzocerobulto, pa2k - w el K1", "archivo": "albm1006.mp3",
        "songId": "song_itcwu94x" }
        ]
    },
    {
        "name": "Big Moli 3",
        "cover": COVERS_BASE_URL + "img_bigmoli.png",
        "songs": [
            { "nombre": "rageylo - coscu army", "archivo": "albm1007.mp3",
        "songId": "song_6x5n2ip6" },
            { "nombre": "rageylo - Dinero Llueve", "archivo": "albm1008.mp3",
        "songId": "song_xmqsnftx" },
            { "nombre": "rageylo, Banatroll - Haz Mas Dinero", "archivo": "albm1009.mp3",
        "songId": "song_fx7u0ws3" },
            { "nombre": "rageylo - Joda estoy Gede", "archivo": "albm1010.mp3",
        "songId": "song_9jwmo5t7" },
            { "nombre": "rageylo - Moscu", "archivo": "albm1011.mp3",
        "songId": "song_gm94xs92" },
            { "nombre": "rageylo - Quemando Solo", "archivo": "albm1012.mp3",
        "songId": "song_6g09r11k" },
            { "nombre": "rageylo, Banatroll - Toy Ganado", "archivo": "albm1013.mp3",
        "songId": "song_h30ft2uo" }
        ]
    },
    {
        "name": "Murio la Musica",
        "cover": COVERS_BASE_URL + "img_muriomusica.png",
        "songs": [
            { "nombre": "AGUSFORTNITE2008, Stiffy - 24 7", "archivo": "albm1014.mp3",
        "songId": "song_znzfeiij" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - COF COF", "archivo": "albm1015.mp3",
        "songId": "song_i6lbfpjk" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - ESTOY RE PANCHO", "archivo": "albm1016.mp3",
        "songId": "song_owiw061y" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - GUISO", "archivo": "albm1017.mp3",
        "songId": "song_kwqsdrzb" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - ME LO MUEVE", "archivo": "albm1018.mp3",
        "songId": "song_e3pxyl9j" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - MEJORES HOES", "archivo": "albm1019.mp3",
        "songId": "song_6ao92l0n" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - MUSICA ANTI VIEJOS", "archivo": "albm1020.mp3",
        "songId": "song_9a5bso8s" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - PIE EN LA PISTA", "archivo": "albm1021.mp3",
        "songId": "song_z5mrpi0q" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - SHH CERRA EL ORTO VIEJO ROCKERO", "archivo": "albm1022.mp3",
        "songId": "song_88mz6eco" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - TRES PATITOS", "archivo": "albm1023.mp3",
        "songId": "song_68l96qn0" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - YO ESTOY", "archivo": "albm1024.mp3",
        "songId": "song_bfh7xpo0" },
            { "nombre": "AGUSFORTNITE2008, Stiffy, Joshu Joshu - ESTO ES ENCHUFE LA CHUPA EL HIP HOP", "archivo": "albm1025.mp3",
        "songId": "song_c42q12gr" },
            { "nombre": "AGUSFORTNITE2008, Stiffy, Joshu Joshu, Matiasenchufe - FERNET", "archivo": "albm1026.mp3",
        "songId": "song_8r668jbw" },
            { "nombre": "AGUSFORTNITE2008, Stiffy, NEO PISTEA - MEJORALITO", "archivo": "albm1027.mp3",
        "songId": "song_2omma7et" },
            { "nombre": "AGUSFORTNITE2008, Stiffy, Polus - REMERA I LOVE SWAG", "archivo": "albm1028.mp3",
        "songId": "song_2palerl2" }
        ]
    },
    {
        "name": "Plug Park",
        "cover": COVERS_BASE_URL + "img_plugpark.png",
        "songs": [
            { "nombre": "AGUSFORTNITE2008, Stiffy - 8 JEANS", "archivo": "albm1029.mp3",
        "songId": "song_ws8ljzue" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - DESDE LOS 14", "archivo": "albm1030.mp3",
        "songId": "song_6fv9is8r" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - MUSICA DE ASCENSOR", "archivo": "albm1031.mp3",
        "songId": "song_nyskzg10" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - PETER GRIFFIN", "archivo": "albm1032.mp3",
        "songId": "song_3z3qwd6s" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - ZAZA", "archivo": "albm1033.mp3",
        "songId": "song_fjw23j60" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - BB BELT", "archivo": "albm1034.mp3",
        "songId": "song_3cf7x414" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - DORITOS", "archivo": "albm1035.mp3",
        "songId": "song_5e7g6uy4" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - FIDO DIDO", "archivo": "albm1036.mp3",
        "songId": "song_ljopswy3" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - HOMBRE SWAG", "archivo": "albm1037.mp3",
        "songId": "song_rvc8e406" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - LE PIDO A DIOS", "archivo": "albm1038.mp3",
        "songId": "song_v5j4thsp" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - NO SE", "archivo": "albm1039.mp3",
        "songId": "song_oucgy3d5" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - OKAY OKAY", "archivo": "albm1040.mp3",
        "songId": "song_y701qc1y" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - PALITO DE LA SELVA", "archivo": "albm1041.mp3",
        "songId": "song_8c9isgep" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - SWAGBOI", "archivo": "albm1042.mp3",
        "songId": "song_kmaql1tc" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - Otro idioma", "archivo": "albm1043.mp3",
        "songId": "song_gnax31nb" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - FIDO DIDO", "archivo": "albm1044.mp3",
        "songId": "song_ljopswy3" }
        ]
    },
    {
        "name": "Hacelos Concha Agus",
        "cover": COVERS_BASE_URL + "img_hacelosconcha.png",
        "songs": [
            { "nombre": "AGUSFORTNITE2008 - DEJO EL HUMO", "archivo": "albm1045.mp3",
        "songId": "song_eadm8kw2" },
            { "nombre": "AGUSFORTNITE2008 - ELLA ME LLAMA", "archivo": "albm1046.mp3",
        "songId": "song_gawf44pc" },
            { "nombre": "AGUSFORTNITE2008 - ENCONTRATE A VOS", "archivo": "albm1047.mp3",
        "songId": "song_0o45gq80" },
            { "nombre": "AGUSFORTNITE2008 - MENTIR", "archivo": "albm1048.mp3",
        "songId": "song_w3wfbt95" },
            { "nombre": "AGUSFORTNITE2008 - VIP DEL VIP", "archivo": "albm1049.mp3",
        "songId": "song_mgd3ia1n" },
            { "nombre": "AGUSFORTNITE2008 - YO ESTOY EN UNA Y ELLA EN 4", "archivo": "albm1050.mp3",
        "songId": "song_yhdno5o5" },
            { "nombre": "AGUSFORTNITE2008 - HOTEL EN HOTEL", "archivo": "albm1051.mp3",
        "songId": "song_0zaanvji" },
            { "nombre": "AGUSFORTNITE2008 - VUELVO A FUMAR", "archivo": "albm1052.mp3",
        "songId": "song_e4a4orfu" },
            { "nombre": "AGUSFORTNITE2008, Stiffy, DILLOM - EL MOROCHO EL RUBIO Y EL COLO", "archivo": "albm1053.mp3",
        "songId": "song_8v9k5hs6" },
            { "nombre": "AGUSFORTNITE2008, Stiffy - GOFUE", "archivo": "albm1054.mp3",
        "songId": "song_q9bye859" },
            { "nombre": "AGUSFORTNITE2008 - SWAGGEANDO EN EL BANDO", "archivo": "albm1055.mp3",
        "songId": "song_lvnkylyx" },
            { "nombre": "AGUSFORTNITE2008 - LOS HAGO CONCHA", "archivo": "albm1056.mp3",
        "songId": "song_d14u1mat" }
        ]
    },
    {
        "name": "Hacelos Concha Stiffy",
        "cover": COVERS_BASE_URL + "img_hacelosconchast.png",
        "songs": [
            { "nombre": "Stiffy - DISFRUTAR", "archivo": "albm1057.mp3",
        "songId": "song_kxl9lz9j" },
            { "nombre": "Stiffy - escudo y espada", "archivo": "albm1058.mp3",
        "songId": "song_zsxrbigv" },
            { "nombre": "Stiffy - GUASO BALLS Z", "archivo": "albm1059.mp3",
        "songId": "song_ruy6dgzk" },
            { "nombre": "Stiffy - LOS DOS", "archivo": "albm1060.mp3",
        "songId": "song_lzz9l60q" },
            { "nombre": "Stiffy - NO ME CANSO", "archivo": "albm1061.mp3",
        "songId": "song_hyx9nn5r" },
            { "nombre": "Stiffy - SIEMPRE FUMO PORRO", "archivo": "albm1062.mp3",
        "songId": "song_lqn5b0po" },
            { "nombre": "Stiffy - YA CASI", "archivo": "albm1063.mp3",
        "songId": "song_fmantyne" },
            { "nombre": "Stiffy - MECHINSTRONGAS", "archivo": "albm1064.mp3",
        "songId": "song_v0acjhb3" },
            { "nombre": "Stiffy - NO ES LO QUE PENSAS", "archivo": "albm1065.mp3",
        "songId": "song_urmcitus" },
            { "nombre": "Stiffy - NO LA CUELGO", "archivo": "albm1066.mp3",
        "songId": "song_rtwsoab2" },
            { "nombre": "Stiffy - PEGO FLORES", "archivo": "albm1067.mp3",
        "songId": "song_hfgdnb6w" },
            { "nombre": "Stiffy - SIEMPRE FUMO PORRO", "archivo": "albm1068.mp3",
        "songId": "song_c8nrb27q" },
            { "nombre": "Stiffy - WACHA LOCA", "archivo": "albm1069.mp3",
        "songId": "song_usl4g0n4" },
            { "nombre": "Stiffy - WACKAFLOKA", "archivo": "albm1070.mp3",
        "songId": "song_1bmcwutj" },
            { "nombre": "Stiffy, AGUSFORTNITE2008 - CON PEDRO Y CON LA DROGA", "archivo": "albm1071.mp3",
        "songId": "song_mz9v4z3w" },
            { "nombre": "Stiffy, AGUSFORTNITE2008 - QUIERE PENE", "archivo": "albm1072.mp3",
        "songId": "song_vj9gpcdx" },
            { "nombre": "Stiffy, Rojuu - AMNESIA", "archivo": "albm1073.mp3",
        "songId": "song_e0gk0bri" },
            { "nombre": "Stiffy, TURROBABY, ZELL, AGUSFORTNITE2008 - BABASONICO", "archivo": "albm1074.mp3",
        "songId": "song_da84ly0g" }
        ]
    },
    {
        "name": "Sentimental Gangster 2",
        "cover": COVERS_BASE_URL + "img_sentimentalgn2.png",
        "songs": [
            { "nombre": "Jugo! - Desde cba", "archivo": "albm1075.mp3",
        "songId": "song_9tmvt9q6" },
            { "nombre": "Jugo! - Es una obsesion", "archivo": "albm1076.mp3",
        "songId": "song_ndnv8bgp" },
            { "nombre": "Jugo! - Esto es transitorio", "archivo": "albm1077.mp3",
        "songId": "song_7jubbr9g" },
            { "nombre": "Jugo! - Maradona", "archivo": "albm1078.mp3",
        "songId": "song_t58ldha1" },
            { "nombre": "Jugo! - Me neutralice", "archivo": "albm1079.mp3",
        "songId": "song_tl67tp22" },
            { "nombre": "Jugo! - Sube la sintonia", "archivo": "albm1080.mp3",
        "songId": "song_smwrh7oc" },
            { "nombre": "Jugo! - Tengo que hacerlo", "archivo": "albm1081.mp3",
        "songId": "song_od205pir" },
            { "nombre": "Jugo! - Un solo cable", "archivo": "albm1082.mp3",
        "songId": "song_iovxjz8a" },
            { "nombre": "Jugo! - Nunca me vire", "archivo": "albm1083.mp3",
        "songId": "song_h4lfcv1e" },
            { "nombre": "Jugo! - Todo el año", "archivo": "albm1084.mp3",
        "songId": "song_uitq7o6r" },
            { "nombre": "Jugo! , Cluster - Nos retiene el estado", "archivo": "albm1085.mp3",
        "songId": "song_vv47tpvi" },
            { "nombre": "Jugo! , enzocerobulto - Musicalmente", "archivo": "albm1086.mp3",
        "songId": "song_nt44s7qv" },
            { "nombre": "Jugo! , YSY A - Todo el dia en el trap", "archivo": "albm1087.mp3",
        "songId": "song_dvibdmlg" },
            { "nombre": "Jugo!, bic - Hard", "archivo": "albm1088.mp3",
        "songId": "song_ywk8lco1" },
            { "nombre": "Jugo!, Emirsito, Frozouda - Parece que entreno", "archivo": "albm1089.mp3",
        "songId": "song_qs8wp2xy" },
            { "nombre": "Jugo!, Emirsito, Mhtresuno - Estimulos", "archivo": "albm1090.mp3",
        "songId": "song_p1tx818t" },
            { "nombre": "Jugo!, LuchoSSJ, KNAK - Reviento el spot", "archivo": "albm1091.mp3",
        "songId": "song_kvbsyfb9" },
            { "nombre": "Jugo!, Neo Pistea - Quieren aparentar", "archivo": "albm1092.mp3",
        "songId": "song_se6xjzek" },
            { "nombre": "Jugo!, pabloxo - Nunca va a ser igual el esfuerzo", "archivo": "albm1093.mp3",
        "songId": "song_mgz19156" },
            { "nombre": "Jugo!, TURROBABY - Zafiros", "archivo": "albm1094.mp3",
        "songId": "song_y1obxlvd" }
        ]
    },
    {
        "name": "PERNOCTANDO EN EL BALCON",
        "cover": COVERS_BASE_URL + "img_pernoctando.png",
        "songs": [
            { "nombre": "AFKgoat - ASI DE DESCONFIADO", "archivo": "albm1095.mp3",
        "songId": "song_gyhpsg70" },
            { "nombre": "AFKgoat - ASI NO", "archivo": "albm1096.mp3",
        "songId": "song_5q5pvhyy" },
            { "nombre": "AFKgoat - BANCAR EL PARCHE", "archivo": "albm1097.mp3",
        "songId": "song_e6gmebja" },
            { "nombre": "AFKgoat - HACERME TRAICIONAR", "archivo": "albm1098.mp3",
        "songId": "song_2fvf4a5z" },
            { "nombre": "AFKgoat - PERNOCTANDO EN EL BALCON", "archivo": "albm1099.mp3",
        "songId": "song_jg0u8rzt" },
            { "nombre": "AFKgoat, cero  - ME QUEMAN LOS DEDOS", "archivo": "albm1100.mp3",
        "songId": "song_mniep927" }
        ]
    },
    {
        "name": "La Ultima Gota",
        "cover": COVERS_BASE_URL + "img_ultimagota.png",
        "songs": [
            { "nombre": "enzocerobulto - Como Lastima", "archivo": "albm1101.mp3",
        "songId": "song_sedelvpm" },
            { "nombre": "enzocerobulto - En donde", "archivo": "albm1102.mp3",
        "songId": "song_soyr1xu2" },
            { "nombre": "enzocerobulto - Como se lo hago", "archivo": "albm1103.mp3",
        "songId": "song_9yz4bdqy" },
            { "nombre": "enzocerobulto - De vuelta", "archivo": "albm1104.mp3",
        "songId": "song_mxh5gdss" },
            { "nombre": "enzocerobulto - Diez en la trampa", "archivo": "albm1105.mp3",
        "songId": "song_p884g32b" },
            { "nombre": "enzocerobulto - Lo que fumo lo que tomo", "archivo": "albm1106.mp3",
        "songId": "song_j94uake3" },
            { "nombre": "enzocerobulto - Quien tiene la mirada mas cansada", "archivo": "albm1107.mp3",
        "songId": "song_o5iopomk" },
            { "nombre": "enzocerobulto - De capital al Sifon", "archivo": "albm1108.mp3",
        "songId": "song_gg2xj413" },
            { "nombre": "enzocerobulto - Falsa tu cara de Cristo", "archivo": "albm1109.mp3",
        "songId": "song_vq9kbx2u" },
            { "nombre": "enzocerobulto - Hasta que termine el dia", "archivo": "albm1110.mp3",
        "songId": "song_nrw1ixkd" },
            { "nombre": "enzocerobulto - una tira", "archivo": "albm1111.mp3",
        "songId": "song_q5osa607" },
            { "nombre": "enzocerobulto - Mi computadora", "archivo": "albm1112.mp3",
        "songId": "song_tkqdwg6a" }
        ]
    },
    {
        "name": "otramasdelpablo",
        "cover": COVERS_BASE_URL + "img_pablo.png",
        "songs": [
            { "nombre": "pabloxo - Astigmatismo", "archivo": "albm1113.mp3",
        "songId": "song_y1jd4gt6" },
            { "nombre": "pabloxo - dB", "archivo": "albm1114.mp3",
        "songId": "song_33lp6b90" },
            { "nombre": "pabloxo - dosydos", "archivo": "albm1115.mp3",
        "songId": "song_jy7kwt77" },
            { "nombre": "pabloxo - Fajos de 20 mil", "archivo": "albm1116.mp3",
        "songId": "song_7zkzams8" },
            { "nombre": "pabloxo - Fumando en los clubes", "archivo": "albm1117.mp3",
        "songId": "song_rm7y63km" },
            { "nombre": "pabloxo - lo hago x mi", "archivo": "albm1118.mp3",
        "songId": "song_2cxebqg4" },
            { "nombre": "pabloxo - no son dos f son clones", "archivo": "albm1119.mp3",
        "songId": "song_vh1bef8s" },
            { "nombre": "pabloxo - Porrible", "archivo": "albm1120.mp3",
        "songId": "song_e8iswg6g" },
            { "nombre": "pabloxo - Una mas por mis amigos", "archivo": "albm1121.mp3",
        "songId": "song_1hmm4lfp" },
            { "nombre": "pabloxo, Frozouda - Time Break", "archivo": "albm1122.mp3",
        "songId": "song_2f6gxju6" },
            { "nombre": "pabloxo, Hwii - PABLOXO", "archivo": "albm1123.mp3",
        "songId": "song_78sunhas" }
        ]
    },
    {
        "name": "mecae",
        "cover": COVERS_BASE_URL + "img_mecae.png",
        "songs": [
            { "nombre": "cero - 5velas", "archivo": "albm1124.mp3",
        "songId": "song_azin8349" },
            { "nombre": "cero - 10g", "archivo": "albm1125.mp3",
        "songId": "song_zoq30o6a" },
            { "nombre": "cero - 1234", "archivo": "albm1126.mp3",
        "songId": "song_8wkt3vvb" },
            { "nombre": "cero - a correr", "archivo": "albm1127.mp3",
        "songId": "song_n319fedl" },
            { "nombre": "cero - como roe", "archivo": "albm1128.mp3",
        "songId": "song_60tvvvpc" },
            { "nombre": "cero - Con frio y calor", "archivo": "albm1129.mp3",
        "songId": "song_amrquzxu" },
            { "nombre": "cero - Ella", "archivo": "albm1130.mp3",
        "songId": "song_gs0cijrt" },
            { "nombre": "cero - huida", "archivo": "albm1131.mp3",
        "songId": "song_dsc4l0mf" },
            { "nombre": "cero - las otras victorias quedan chicas con lo que te anhelo", "archivo": "albm1132.mp3",
        "songId": "song_kgbb709m" },
            { "nombre": "cero - Plata dolida", "archivo": "albm1133.mp3",
        "songId": "song_klmx5arp" },
            { "nombre": "cero - Plata tarada", "archivo": "albm1134.mp3",
        "songId": "song_t4nfsw4n" },
            { "nombre": "cero - Sonajero", "archivo": "albm1135.mp3",
        "songId": "song_wnkuior1" },
            { "nombre": "cero - t2o", "archivo": "albm1136.mp3",
        "songId": "song_13etfnee" },
            { "nombre": "cero - xq soy el villano", "archivo": "albm1137.mp3",
        "songId": "song_io26njk0" },
            { "nombre": "cero, enzocerobulto - De concierto en concierto", "archivo": "albm1138.mp3",
        "songId": "song_wvbrsapf" },
            { "nombre": "cero, huntr - a donde vas¿", "archivo": "albm1139.mp3",
        "songId": "song_tpzdrtml" },
            { "nombre": "cero, Jugo! - YeA 2", "archivo": "albm1140.mp3",
        "songId": "song_4wdu1m40" },
            { "nombre": "cero, pabloxo - oki", "archivo": "albm1141.mp3",
        "songId": "song_t455ckn4" }
        ]
    },
    {
        "name": "foe",
        "cover": COVERS_BASE_URL + "img_foe.png",
        "songs": [
            { "nombre": "cero - +personal", "archivo": "albm1142.mp3",
        "songId": "song_frm9fdlk" },
            { "nombre": "cero, TURROBABY - a solas", "archivo": "albm1143.mp3",
        "songId": "song_nq3nol7v" },
            { "nombre": "cero, underaiki - sisu", "archivo": "albm1144.mp3",
        "songId": "song_j6hjd8p8" },
            { "nombre": "cero - toco madera", "archivo": "albm1145.mp3",
        "songId": "song_ohg7r3hd" },
            { "nombre": "cero - 1-2", "archivo": "albm1146.mp3",
        "songId": "song_jtiavzsb" },
            { "nombre": "cero, knak - TOA", "archivo": "albm1147.mp3",
        "songId": "song_w9jp0swo" },
            { "nombre": "cero - foe", "archivo": "albm1148.mp3",
        "songId": "song_d31ssdia" }
        ]
    },
    {
        "name": "mecanico",
        "cover": COVERS_BASE_URL + "img_mecanico.png",
        "songs": [
            { "nombre": "cero - 2 Sedas", "archivo": "albm1149.mp3",
        "songId": "song_y7k69k63" },
            { "nombre": "cero - Cabra", "archivo": "albm1150.mp3",
        "songId": "song_z58laxnq" },
            { "nombre": "cero - De moda", "archivo": "albm1151.mp3",
        "songId": "song_pyjtzyi0" },
            { "nombre": "cero - DEAM", "archivo": "albm1152.mp3",
        "songId": "song_wkavbfdy" },
            { "nombre": "cero - Drumkits en el pantalon", "archivo": "albm1153.mp3",
        "songId": "song_oyzvoba5" },
            { "nombre": "cero - Locomotora", "archivo": "albm1154.mp3",
        "songId": "song_i63xp503" },
            { "nombre": "cero - Mr wow", "archivo": "albm1155.mp3",
        "songId": "song_k4tbmqla" },
            { "nombre": "cero - Sin ayuda", "archivo": "albm1156.mp3",
        "songId": "song_1xcnkqft" },
            { "nombre": "cero - t & p", "archivo": "albm1157.mp3",
        "songId": "song_6vldgcmk" },
            { "nombre": "cero - t", "archivo": "albm1158.mp3",
        "songId": "song_e5x1fj8m" },
            { "nombre": "cero - Vicky", "archivo": "albm1159.mp3",
        "songId": "song_xgn9t70o" },
            { "nombre": "cero - Ye A", "archivo": "albm1160.mp3",
        "songId": "song_eogy21c2" },
            { "nombre": "cero, Doly Flackko - Peine teta", "archivo": "albm1161.mp3",
        "songId": "song_ttkdix8a" },
            { "nombre": "cero, Jugo! - Voy a hacer historia", "archivo": "albm1162.mp3",
        "songId": "song_rpat2qt1" },
            { "nombre": "cero, Lthelizard - Jakaranda", "archivo": "albm1163.mp3",
        "songId": "song_u3slkgqd" },
            { "nombre": "cero, Sixup - Palo", "archivo": "albm1164.mp3",
        "songId": "song_v950t3or" }
        ]
    },
    {
        "name": "Piola Vago",
        "cover": COVERS_BASE_URL + "img_piola.png",
        "songs": [
            { "nombre": "Doly Flackko - Veneno", "archivo": "albm1165.mp3",
        "songId": "song_rdi7weza" },
            { "nombre": "Doly Flackko - Uber", "archivo": "albm1166.mp3",
        "songId": "song_0sh2kd7s" },
            { "nombre": "Doly Flackko - TRES TRISTES TIGUERES", "archivo": "albm1167.mp3",
        "songId": "song_1x3g8bdq" },
            { "nombre": "Doly Flackko - Street Pain", "archivo": "albm1168.mp3",
        "songId": "song_u4jww8ow" },
            { "nombre": "Doly Flackko - PIOLA VAGO", "archivo": "albm1169.mp3",
        "songId": "song_jeen58dt" },
            { "nombre": "Doly Flackko - Pala Ancha", "archivo": "albm1170.mp3",
        "songId": "song_vtv8amkp" },
            { "nombre": "Doly Flackko - Outro Chau", "archivo": "albm1171.mp3",
        "songId": "song_21qe21mj" },
            { "nombre": "Doly Flackko - Flackkosito", "archivo": "albm1172.mp3",
        "songId": "song_2yt2io9o" },
            { "nombre": "Doly Flackko - donde queres estar", "archivo": "albm1173.mp3",
        "songId": "song_hk0v4m40" },
            { "nombre": "Doly Flackko - Delirio de Grandeza", "archivo": "albm1174.mp3",
        "songId": "song_upznzy0m" },
            { "nombre": "Doly Flackko - Ambicion & Adrenalina", "archivo": "albm1175.mp3",
        "songId": "song_jg193g6r" }
        ]
    },
    {
        "name": "El Morfón",
        "cover": COVERS_BASE_URL + "img_morfon.png",
        "songs": [
            { "nombre": "eluney benedetti, TULO13 - Che", "archivo": "albm1176.mp3",
        "songId": "song_w3zao4u0" },
            { "nombre": "eluney benedetti, elaiyah - Idioma", "archivo": "albm1177.mp3",
        "songId": "song_18ru4k3u" },
            { "nombre": "eluney benedetti - aYvamo", "archivo": "albm1178.mp3",
        "songId": "song_79anx28v" },
            { "nombre": "eluney benedetti, elaiyah - Los3", "archivo": "albm1179.mp3",
        "songId": "song_m7zzwtll" },
            { "nombre": "eluney benedetti, TULO13 - Che", "archivo": "albm1180.mp3",
        "songId": "song_is0964dp" },
            { "nombre": "eluney benedetti, elaiyah - A los palomos", "archivo": "albm1181.mp3",
        "songId": "song_7jp4zgri" },
            { "nombre": "eluney benedetti, elaiyah - El morfon", "archivo": "albm1182.mp3",
        "songId": "song_pywhs3d8" }
        ]
    },
    {
        "name": "Pekelandia",
        "cover": COVERS_BASE_URL + "img_pekelandia.png",
        "songs": [
            { "nombre": "CHOOSEY, Yvng Jorge - Le TOTO", "archivo": "albm1183.mp3",
        "songId": "song_pgwnb96s" },
            { "nombre": "CHOOSEY, n0tgiova - DON ROKE", "archivo": "albm1184.mp3",
        "songId": "song_9lyvyxwm" },
            { "nombre": "CHOOSEY, DLANG - DE MAS DE MI", "archivo": "albm1185.mp3",
        "songId": "song_o8i7ft3m" },
            { "nombre": "CHOOSEY - X Belgrano", "archivo": "albm1186.mp3",
        "songId": "song_ok0gn3rv" },
            { "nombre": "CHOOSEY - SIGAN SIN MI", "archivo": "albm1187.mp3",
        "songId": "song_pih7ibir" },
            { "nombre": "CHOOSEY - ROMPEDISKOTECA", "archivo": "albm1188.mp3",
        "songId": "song_jygkieb2" },
            { "nombre": "CHOOSEY - QUE CONCHA QUERES", "archivo": "albm1189.mp3",
        "songId": "song_pf1tny0i" },
            { "nombre": "CHOOSEY - pero CHATGPT", "archivo": "albm1190.mp3",
        "songId": "song_zl2vcdnw" },
            { "nombre": "CHOOSEY - ORISHINAL", "archivo": "albm1191.mp3",
        "songId": "song_dxuklmn3" },
            { "nombre": "CHOOSEY - MI NUMERO TELEFONICO", "archivo": "albm1192.mp3",
        "songId": "song_ht6om4nz" },
            { "nombre": "CHOOSEY - mi AUTOMOVIL", "archivo": "albm1193.mp3",
        "songId": "song_olxtxxuu" },
            { "nombre": "CHOOSEY - DITOYS", "archivo": "albm1194.mp3",
        "songId": "song_8jyvr36l" },
            { "nombre": "CHOOSEY - CARS BEAT", "archivo": "albm1195.mp3",
        "songId": "song_v3tcxefl" },
            { "nombre": "CHOOSEY - BANCO", "archivo": "albm1196.mp3",
        "songId": "song_zhymgf2x" },
            { "nombre": "CHOOSEY - 100 LUCHA", "archivo": "albm1197.mp3",
        "songId": "song_esxpnxfy" },
            { "nombre": "CHOOSEY - 3 MONITOS", "archivo": "albm1198.mp3",
        "songId": "song_4p6yut6v" },
            { "nombre": "CHOOSEY - 2 SAMPLEOS", "archivo": "albm1199.mp3",
        "songId": "song_jqhzwt6v" },
            { "nombre": "CHOOSEY - 1-2 groupie", "archivo": "albm1200.mp3",
        "songId": "song_lgunjgy8" }
        ]
    }
];
