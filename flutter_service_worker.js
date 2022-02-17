'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "295e26eceb35ca1d77ac7de3c97538e9",
"index.html": "39d687b0040bd1876a9ce660714705bc",
"/": "39d687b0040bd1876a9ce660714705bc",
"firebase-messaging-sw.js": "2cf40a461f2d10f7ce15517dcc70a80d",
"main.dart.js": "086195ebffea7a492f4d3f1f1a3bb788",
"favicon.png": "3647872be98fa436e090a37ba2dd1852",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bbaaede787f764bafc79e392d35aa7e2",
"assets/AssetManifest.json": "ad3c6be10ca2495b1ae8169c1d0968e9",
"assets/NOTICES": "580650b0d73d7de538d55fd3ca8ada1a",
"assets/FontManifest.json": "468ba686a4a50720bf58ac773ee3b1ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconly/fonts/IconlyBold.ttf": "128714c5bf5b14842f735ecf709ca0d1",
"assets/packages/iconly/fonts/IconlyLight.ttf": "5f376412227e6f8450fe79aec1c2a800",
"assets/packages/iconly/fonts/IconlyBroken.ttf": "6fbd555150d4f77e91c345e125c4ecb6",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/country_code_picker/flags/tg.png": "82dabd3a1a4900ae4866a4da65f373e5",
"assets/packages/country_code_picker/flags/me.png": "74434a1447106cc4fb7556c76349c3da",
"assets/packages/country_code_picker/flags/la.png": "8c88d02c3824eea33af66723d41bb144",
"assets/packages/country_code_picker/flags/mr.png": "733d747ba4ec8cf120d5ebc0852de34a",
"assets/packages/country_code_picker/flags/ni.png": "6985ed1381cb33a5390258795f72e95a",
"assets/packages/country_code_picker/flags/lv.png": "6a86b0357df4c815f1dc21e0628aeb5f",
"assets/packages/country_code_picker/flags/om.png": "79a867771bd9447d372d5df5ec966b36",
"assets/packages/country_code_picker/flags/af.png": "44bc280cbce3feb6ad13094636033999",
"assets/packages/country_code_picker/flags/cy.png": "9a3518f15815fa1705f1d7ca18907748",
"assets/packages/country_code_picker/flags/bj.png": "9b503fbf4131f93fbe7b574b8c74357e",
"assets/packages/country_code_picker/flags/aq.png": "c57c903b39fe5e2ba1e01bc3d330296c",
"assets/packages/country_code_picker/flags/cn.png": "6b8c353044ef5e29631279e0afc1a8c3",
"assets/packages/country_code_picker/flags/gb-sct.png": "075bb357733327ec4115ab5cbba792ac",
"assets/packages/country_code_picker/flags/co.png": "e2fa18bb920565594a0e62427540163c",
"assets/packages/country_code_picker/flags/cx.png": "65421207e2eb319ba84617290bf24082",
"assets/packages/country_code_picker/flags/ag.png": "9bae91983418f15d9b8ffda5ba340c4e",
"assets/packages/country_code_picker/flags/ms.png": "32daa6ee99335b73cb3c7519cfd14a61",
"assets/packages/country_code_picker/flags/md.png": "7b273f5526b88ed0d632fd0fd8be63be",
"assets/packages/country_code_picker/flags/zm.png": "29b67848f5e3864213c84ccf108108ea",
"assets/packages/country_code_picker/flags/vn.png": "7c8f8457485f14482dcab4042e432e87",
"assets/packages/country_code_picker/flags/tf.png": "dc3f8c0d9127aa82cbd45b8861a67bf5",
"assets/packages/country_code_picker/flags/td.png": "51b129223db46adc71f9df00c93c2868",
"assets/packages/country_code_picker/flags/yt.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/lb.png": "b21c8d6f5dd33761983c073f217a0c4f",
"assets/packages/country_code_picker/flags/mf.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/lu.png": "4cc30d7a4c3c3b98f55824487137680d",
"assets/packages/country_code_picker/flags/mq.png": "446edd9300307eda562e5c9ac307d7f2",
"assets/packages/country_code_picker/flags/cz.png": "482c8ba16ff3d81eeef60650db3802e4",
"assets/packages/country_code_picker/flags/ae.png": "045eddd7da0ef9fb3a7593d7d2262659",
"assets/packages/country_code_picker/flags/cm.png": "89f02c01702cb245938f3d62db24f75d",
"assets/packages/country_code_picker/flags/bi.png": "fb60b979ef7d78391bb32896af8b7021",
"assets/packages/country_code_picker/flags/ar.png": "bd71b7609d743ab9ecfb600e10ac7070",
"assets/packages/country_code_picker/flags/as.png": "830d17d172d2626e13bc6397befa74f3",
"assets/packages/country_code_picker/flags/bh.png": "6e48934b768705ca98a7d1e56422dc83",
"assets/packages/country_code_picker/flags/cl.png": "658cdc5c9fd73213495f1800ce1e2b78",
"assets/packages/country_code_picker/flags/ad.png": "796914c894c19b68adf1a85057378dbc",
"assets/packages/country_code_picker/flags/mp.png": "60b14b06d1ce23761767b73d54ef613a",
"assets/packages/country_code_picker/flags/lt.png": "e38382f3f7cb60cdccbf381cea594d2d",
"assets/packages/country_code_picker/flags/mg.png": "a562a819338427e57c57744bb92b1ef1",
"assets/packages/country_code_picker/flags/lc.png": "055c35de209c63b67707c5297ac5079a",
"assets/packages/country_code_picker/flags/tr.png": "0100620dedad6034185d0d53f80287bd",
"assets/packages/country_code_picker/flags/ua.png": "dbd97cfa852ffc84bfdf98bc2a2c3789",
"assets/packages/country_code_picker/flags/tv.png": "493c543f07de75f222d8a76506c57989",
"assets/packages/country_code_picker/flags/vi.png": "944281795d5daf17a273f394e51b8b79",
"assets/packages/country_code_picker/flags/mt.png": "808538b29f6b248469a184bbf787a97f",
"assets/packages/country_code_picker/flags/no.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/mc.png": "412ce0b1f821e3912e83ae356b30052e",
"assets/packages/country_code_picker/flags/ch.png": "8d7a211fd742d4dea9d1124672b88cda",
"assets/packages/country_code_picker/flags/bl.png": "30f55fe505cb4f3ddc09a890d4073ebe",
"assets/packages/country_code_picker/flags/aw.png": "8966dbf74a9f3fd342b8d08768e134cc",
"assets/packages/country_code_picker/flags/bz.png": "e95df47896e2a25df726c1dccf8af9ab",
"assets/packages/country_code_picker/flags/bm.png": "eb2492b804c9028f3822cdb1f83a48e2",
"assets/packages/country_code_picker/flags/ci.png": "0f94edf22f735b4455ac7597efb47ca5",
"assets/packages/country_code_picker/flags/mu.png": "aec293ef26a9df356ea2f034927b0a74",
"assets/packages/country_code_picker/flags/us.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/country_code_picker/flags/tw.png": "94322a94d308c89d1bc7146e05f1d3e5",
"assets/packages/country_code_picker/flags/ye.png": "1d5dcbcbbc8de944c3db228f0c089569",
"assets/packages/country_code_picker/flags/mw.png": "efc0c58b76be4bf1c3efda589b838132",
"assets/packages/country_code_picker/flags/nl.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/country_code_picker/flags/ls.png": "f2d4025bf560580ab141810a83249df0",
"assets/packages/country_code_picker/flags/bo.png": "92c247480f38f66397df4eb1f8ff0a68",
"assets/packages/country_code_picker/flags/at.png": "7edbeb0f5facb47054a894a5deb4533c",
"assets/packages/country_code_picker/flags/ck.png": "35c6c878d96485422e28461bb46e7d9f",
"assets/packages/country_code_picker/flags/by.png": "03f5334e6ab8a537d0fc03d76a4e0c8a",
"assets/packages/country_code_picker/flags/au.png": "600835121397ea512cea1f3204278329",
"assets/packages/country_code_picker/flags/bn.png": "94d863533155418d07a607b52ca1b701",
"assets/packages/country_code_picker/flags/ma.png": "dd5dc19e011755a7610c1e7ccd8abdae",
"assets/packages/country_code_picker/flags/nz.png": "b48a5e047a5868e59c2abcbd8387082d",
"assets/packages/country_code_picker/flags/lr.png": "1c159507670497f25537ad6f6d64f88d",
"assets/packages/country_code_picker/flags/mv.png": "69843b1ad17352372e70588b9c37c7cc",
"assets/packages/country_code_picker/flags/tc.png": "6f2d1a2b9f887be4b3568169e297a506",
"assets/packages/country_code_picker/flags/ug.png": "6ae26af3162e5e3408cb5c5e1c968047",
"assets/packages/country_code_picker/flags/tt.png": "716fa6f4728a25ffccaf3770f5f05f7b",
"assets/packages/country_code_picker/flags/pl.png": "a7b46e3dcd5571d40c3fa8b62b1f334a",
"assets/packages/country_code_picker/flags/rs.png": "ee9ae3b80531d6d0352a39a56c5130c0",
"assets/packages/country_code_picker/flags/in.png": "be8bf440db707c1cc2ff9dd0328414e5",
"assets/packages/country_code_picker/flags/ge.png": "93d6c82e9dc8440b706589d086be2c1c",
"assets/packages/country_code_picker/flags/gr.png": "86aeb970a79aa561187fa8162aee2938",
"assets/packages/country_code_picker/flags/gs.png": "524d0f00ee874af0cdf3c00f49fa17ae",
"assets/packages/country_code_picker/flags/gd.png": "42ad178232488665870457dd53e2b037",
"assets/packages/country_code_picker/flags/io.png": "8021829259b5030e95f45902d30f137c",
"assets/packages/country_code_picker/flags/hk.png": "51df04cf3db3aefd1778761c25a697dd",
"assets/packages/country_code_picker/flags/kp.png": "fd6e44b3fe460988afbfd0cb456282b2",
"assets/packages/country_code_picker/flags/gb-nir.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/kg.png": "a9b6a1b8fe03b8b617f30a28a1d61c12",
"assets/packages/country_code_picker/flags/pm.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/sv.png": "994c8315ced2a4d8c728010447371ea1",
"assets/packages/country_code_picker/flags/re.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/sa.png": "ef836bd02f745af03aa0d01003942d44",
"assets/packages/country_code_picker/flags/sc.png": "52f9bd111531041468c89ce9da951026",
"assets/packages/country_code_picker/flags/st.png": "7a28a4f0333bf4fb4f34b68e65c04637",
"assets/packages/country_code_picker/flags/ke.png": "034164976de81ef96f47cfc6f708dde6",
"assets/packages/country_code_picker/flags/im.png": "17ddc1376b22998731ccc5295ba9db1c",
"assets/packages/country_code_picker/flags/kr.png": "9e2a9c7ae07cf8977e8f01200ee2912e",
"assets/packages/country_code_picker/flags/gf.png": "71678ea3b4a8eeabd1e64a60eece4256",
"assets/packages/country_code_picker/flags/dj.png": "dc144d9502e4edb3e392d67965f7583e",
"assets/packages/country_code_picker/flags/gq.png": "0dc3ca0cda7dfca81244e1571a4c466c",
"assets/packages/country_code_picker/flags/gp.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/dk.png": "f9d6bcded318f5910b8bc49962730afa",
"assets/packages/country_code_picker/flags/gg.png": "cdb11f97802d458cfa686f33459f0d4b",
"assets/packages/country_code_picker/flags/il.png": "b72b572cc199bf03eba1c008cd00d3cb",
"assets/packages/country_code_picker/flags/pn.png": "ffa91e8a1df1eac6b36d737aa76d701b",
"assets/packages/country_code_picker/flags/sb.png": "e3a6704b7ba2621480d7074a6e359b03",
"assets/packages/country_code_picker/flags/py.png": "6bb880f2dd24622093ac59d4959ae70d",
"assets/packages/country_code_picker/flags/ru.png": "9a3b50fcf2f7ae2c33aa48b91ab6cd85",
"assets/packages/country_code_picker/flags/kw.png": "b2afbb748e0b7c0b0c22f53e11e7dd55",
"assets/packages/country_code_picker/flags/do.png": "a05514a849c002b2a30f420070eb0bbb",
"assets/packages/country_code_picker/flags/gt.png": "df7a020c2f611bdcb3fa8cd2f581b12f",
"assets/packages/country_code_picker/flags/gb.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/gu.png": "babddec7750bad459ca1289d7ac7fc6a",
"assets/packages/country_code_picker/flags/je.png": "8d6482f71bd0728025134398fc7c6e58",
"assets/packages/country_code_picker/flags/hm.png": "600835121397ea512cea1f3204278329",
"assets/packages/country_code_picker/flags/sg.png": "94ea82acf1aa0ea96f58c6b0cd1ed452",
"assets/packages/country_code_picker/flags/pk.png": "0228ceefa355b34e8ec3be8bfd1ddb42",
"assets/packages/country_code_picker/flags/sr.png": "e5719b1a8ded4e5230f6bac3efc74a90",
"assets/packages/country_code_picker/flags/se.png": "24d2bed25b5aad316134039c2903ac59",
"assets/packages/country_code_picker/flags/jp.png": "b7a724413be9c2b001112c665d764385",
"assets/packages/country_code_picker/flags/gw.png": "25bc1b5542dadf2992b025695baf056c",
"assets/packages/country_code_picker/flags/eh.png": "f781a34a88fa0adf175e3aad358575ed",
"assets/packages/country_code_picker/flags/dz.png": "93afdc9291f99de3dd88b29be3873a20",
"assets/packages/country_code_picker/flags/ga.png": "fa05207326e695b552e0a885164ee5ac",
"assets/packages/country_code_picker/flags/fr.png": "79cbece941f09f9a9a46d42cabd523b1",
"assets/packages/country_code_picker/flags/dm.png": "b7ab53eeee4303e193ea1603f33b9c54",
"assets/packages/country_code_picker/flags/hn.png": "09ca9da67a9c84f4fc25f96746162f3c",
"assets/packages/country_code_picker/flags/sd.png": "93e252f26bead630c0a0870de5a88f14",
"assets/packages/country_code_picker/flags/rw.png": "6ef05d29d0cded56482b1ad17f49e186",
"assets/packages/country_code_picker/flags/ph.png": "de75e3931c41ae8b9cae8823a9500ca7",
"assets/packages/country_code_picker/flags/ss.png": "f1c99aded110fc8a0bc85cd6c63895fb",
"assets/packages/country_code_picker/flags/qa.png": "b95e814a13e5960e28042347cec5bc0d",
"assets/packages/country_code_picker/flags/pe.png": "724d3525f205dfc8705bb6e66dd5bdff",
"assets/packages/country_code_picker/flags/pr.png": "ac1c4bcef3da2034e1668ab1e95ae82d",
"assets/packages/country_code_picker/flags/si.png": "922d047a95387277f84fdc246f0a8d11",
"assets/packages/country_code_picker/flags/ht.png": "009d5c3627c89310bd25522b636b09bf",
"assets/packages/country_code_picker/flags/es.png": "e180e29212048d64951449cc80631440",
"assets/packages/country_code_picker/flags/gl.png": "d09f355715f608263cf0ceecd3c910ed",
"assets/packages/country_code_picker/flags/gm.png": "c670404188a37f5d347d03947f02e4d7",
"assets/packages/country_code_picker/flags/er.png": "08a95adef16cb9174f183f8d7ac1102b",
"assets/packages/country_code_picker/flags/fi.png": "a79f2dbc126dac46e4396fcc80942a82",
"assets/packages/country_code_picker/flags/ee.png": "54aa1816507276a17070f395a4a89e2e",
"assets/packages/country_code_picker/flags/kn.png": "65d2fc69949162f1bc14eb9f2da5ecbc",
"assets/packages/country_code_picker/flags/hu.png": "66c22db579470694c7928598f6643cc6",
"assets/packages/country_code_picker/flags/iq.png": "dc9f3e8ab93b20c33f4a4852c162dc1e",
"assets/packages/country_code_picker/flags/ky.png": "666d01aa03ecdf6b96202cdf6b08b732",
"assets/packages/country_code_picker/flags/sh.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/ps.png": "b6e1bd808cf8e5e3cd2b23e9cf98d12e",
"assets/packages/country_code_picker/flags/pf.png": "3ba7f48f96a7189f9511a7f77ea0a7a4",
"assets/packages/country_code_picker/flags/sj.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/id.png": "78d94c7d31fed988e9b92279895d8b05",
"assets/packages/country_code_picker/flags/is.png": "22358dadd1d5fc4f11fcb3c41d453ec0",
"assets/packages/country_code_picker/flags/eg.png": "9e371179452499f2ba7b3c5ff47bec69",
"assets/packages/country_code_picker/flags/fk.png": "0e9d14f59e2e858cd0e89bdaec88c2c6",
"assets/packages/country_code_picker/flags/fj.png": "6030dc579525663142e3e8e04db80154",
"assets/packages/country_code_picker/flags/gn.png": "765a0434cb071ad4090a8ea06797a699",
"assets/packages/country_code_picker/flags/gy.png": "75f8dd61ddedb3cf595075e64fc80432",
"assets/packages/country_code_picker/flags/ir.png": "df9b6d2134d1c5d4d3e676d9857eb675",
"assets/packages/country_code_picker/flags/km.png": "204a44c4c89449415168f8f77c4c0d31",
"assets/packages/country_code_picker/flags/ie.png": "5790c74e53070646cd8a06eec43e25d6",
"assets/packages/country_code_picker/flags/kz.png": "cfce5cd7842ef8091b7c25b23c3bb069",
"assets/packages/country_code_picker/flags/ro.png": "1ee3ca39dbe79f78d7fa903e65161fdb",
"assets/packages/country_code_picker/flags/sk.png": "0f8da623c8f140ac2b5a61234dd3e7cd",
"assets/packages/country_code_picker/flags/pg.png": "06961c2b216061b0e40cb4221abc2bff",
"assets/packages/country_code_picker/flags/pt.png": "b4cf39fbafb4930dec94f416e71fc232",
"assets/packages/country_code_picker/flags/so.png": "cfe6bb95bcd259a3cc41a09ee7ca568b",
"assets/packages/country_code_picker/flags/sx.png": "8fce7986b531ff8936540ad1155a5df5",
"assets/packages/country_code_picker/flags/hr.png": "04cfd167b9564faae3b2dd3ef13a0794",
"assets/packages/country_code_picker/flags/ki.png": "69a7d5a8f6f622e6d2243f3f04d1d4c0",
"assets/packages/country_code_picker/flags/jm.png": "3537217c5eeb048198415d398e0fa19e",
"assets/packages/country_code_picker/flags/eu.png": "b32e3d089331f019b61399a1df5a763a",
"assets/packages/country_code_picker/flags/ec.png": "cbaf1d60bbcde904a669030e1c883f3e",
"assets/packages/country_code_picker/flags/et.png": "2c5eec0cda6655b5228fe0e9db763a8e",
"assets/packages/country_code_picker/flags/fo.png": "0bfc387f2eb3d9b85225d61b515ee8fc",
"assets/packages/country_code_picker/flags/kh.png": "cd50a67c3b8058585b19a915e3635107",
"assets/packages/country_code_picker/flags/sy.png": "2e33ad23bffc935e4a06128bc5519a2b",
"assets/packages/country_code_picker/flags/sn.png": "25201e1833a1b642c66c52a09b43f71e",
"assets/packages/country_code_picker/flags/pw.png": "92ec1edf965de757bc3cca816f4cebbd",
"assets/packages/country_code_picker/flags/sl.png": "a7785c2c81149afab11a5fa86ee0edae",
"assets/packages/country_code_picker/flags/gb-eng.png": "0b05e615c5a3feee707a4d72009cd767",
"assets/packages/country_code_picker/flags/fm.png": "d4dffd237271ddd37f3bbde780a263bb",
"assets/packages/country_code_picker/flags/gi.png": "58894db0e25e9214ec2271d96d4d1623",
"assets/packages/country_code_picker/flags/de.png": "6f94b174f4a02f3292a521d992ed5193",
"assets/packages/country_code_picker/flags/gh.png": "c73432df8a63fb674f93e8424eae545f",
"assets/packages/country_code_picker/flags/jo.png": "d5bfa96801b7ed670ad1be55a7bd94ed",
"assets/packages/country_code_picker/flags/it.png": "99f67d3c919c7338627d922f552c8794",
"assets/packages/country_code_picker/flags/pa.png": "49d53d64564555ea5976c20ea9365ea6",
"assets/packages/country_code_picker/flags/sz.png": "5e45a755ac4b33df811f0fb76585270e",
"assets/packages/country_code_picker/flags/sm.png": "b41d5b7eb3679c2e477fbd25f5ee9e7d",
"assets/packages/country_code_picker/flags/tn.png": "87f591537e0a5f01bb10fe941798d4e4",
"assets/packages/country_code_picker/flags/ml.png": "1a3a39e5c9f2fdccfb6189a117d04f72",
"assets/packages/country_code_picker/flags/cg.png": "7ea7b458a77558527c030a5580b06779",
"assets/packages/country_code_picker/flags/ax.png": "ffffd1de8a677dc02a47eb8f0e98d9ac",
"assets/packages/country_code_picker/flags/ao.png": "d19240c02a02e59c3c1ec0959f877f2e",
"assets/packages/country_code_picker/flags/bt.png": "3c0fed3f67d5aa1132355ed76d2a14d0",
"assets/packages/country_code_picker/flags/an.png": "469f91bffae95b6ad7c299ac800ee19d",
"assets/packages/country_code_picker/flags/bb.png": "a5bb4503d41e97c08b2d4a9dd934fa30",
"assets/packages/country_code_picker/flags/cf.png": "625ad124ba8147122ee198ae5b9f061e",
"assets/packages/country_code_picker/flags/mm.png": "b664dc1c591c3bf34ad4fd223922a439",
"assets/packages/country_code_picker/flags/li.png": "3cf7e27712e36f277ca79120c447e5d1",
"assets/packages/country_code_picker/flags/na.png": "3499146c4205c019196f8a0f7a7aa156",
"assets/packages/country_code_picker/flags/mz.png": "40a78c6fa368aed11b3d483cdd6973a5",
"assets/packages/country_code_picker/flags/to.png": "a93fdd2ace7777e70528936a135f1610",
"assets/packages/country_code_picker/flags/vg.png": "0f19ce4f3c92b0917902cb316be492ba",
"assets/packages/country_code_picker/flags/ve.png": "f5dabf05e3a70b4eeffa5dad32d10a67",
"assets/packages/country_code_picker/flags/tz.png": "389451347d28584d88b199f0cbe0116b",
"assets/packages/country_code_picker/flags/tm.png": "3fe5e44793aad4e8997c175bc72fda06",
"assets/packages/country_code_picker/flags/mx.png": "b69db8e7f14b18ddd0e3769f28137552",
"assets/packages/country_code_picker/flags/nc.png": "a3ee8fc05db66f7ce64bce533441da7f",
"assets/packages/country_code_picker/flags/mo.png": "da3700f98c1fe1739505297d1efb9e12",
"assets/packages/country_code_picker/flags/lk.png": "56412c68b1d952486f2da6c1318adaf2",
"assets/packages/country_code_picker/flags/cd.png": "072243e38f84b5d2a7c39092fa883dda",
"assets/packages/country_code_picker/flags/al.png": "af06d6e1028d16ec472d94e9bf04d593",
"assets/packages/country_code_picker/flags/bw.png": "04fa1f47fc150e7e10938a2f497795be",
"assets/packages/country_code_picker/flags/cr.png": "475b2d72352df176b722da898490afa2",
"assets/packages/country_code_picker/flags/bv.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/am.png": "2de892fa2f750d73118b1aafaf857884",
"assets/packages/country_code_picker/flags/az.png": "967d8ee83bfe2f84234525feab9d1d4c",
"assets/packages/country_code_picker/flags/ba.png": "9faf88de03becfcd39b6231e79e51c2e",
"assets/packages/country_code_picker/flags/mn.png": "02af8519f83d06a69068c4c0f6463c8a",
"assets/packages/country_code_picker/flags/nu.png": "c8bb4da14b8ffb703036b1bae542616d",
"assets/packages/country_code_picker/flags/my.png": "7b4bc8cdef4f7b237791c01f5e7874f4",
"assets/packages/country_code_picker/flags/tl.png": "b3475faa9840f875e5ec38b0e6a6c170",
"assets/packages/country_code_picker/flags/ws.png": "8cef2c9761d3c8107145d038bf1417ea",
"assets/packages/country_code_picker/flags/th.png": "d4bd67d33ed4ac74b4e9b75d853dae02",
"assets/packages/country_code_picker/flags/xk.png": "b75ba9ad218b109fca4ef1f3030936f1",
"assets/packages/country_code_picker/flags/nf.png": "9a4a607db5bc122ff071cbfe58040cf7",
"assets/packages/country_code_picker/flags/ly.png": "777f861e476f1426bf6663fa283243e5",
"assets/packages/country_code_picker/flags/ai.png": "cfb0f715fc17e9d7c8662987fbe30867",
"assets/packages/country_code_picker/flags/br.png": "8fa9d6f8a64981d554e48f125c59c924",
"assets/packages/country_code_picker/flags/cv.png": "60d75c9d0e0cd186bb1b70375c797a0c",
"assets/packages/country_code_picker/flags/be.png": "498270989eaefce71c393075c6e154c8",
"assets/packages/country_code_picker/flags/ca.png": "bc87852952310960507a2d2e590c92bf",
"assets/packages/country_code_picker/flags/bd.png": "5fbfa1a996e6da8ad4c5f09efc904798",
"assets/packages/country_code_picker/flags/cw.png": "db36ed08bfafe9c5d0d02332597676ca",
"assets/packages/country_code_picker/flags/bs.png": "814a9a20dd15d78f555e8029795821f3",
"assets/packages/country_code_picker/flags/ng.png": "15b7ad41c03c87b9f30c19d37f457817",
"assets/packages/country_code_picker/flags/mk.png": "8b17ec36efa149749b8d3fd59f55974b",
"assets/packages/country_code_picker/flags/np.png": "35e3d64e59650e1f1cf909f5c6d85176",
"assets/packages/country_code_picker/flags/va.png": "cfbf48f8fcaded75f186d10e9d1408fd",
"assets/packages/country_code_picker/flags/uz.png": "d3713ea19c37aaf94975c3354edd7bb7",
"assets/packages/country_code_picker/flags/um.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/country_code_picker/flags/tk.png": "87e390b384b39af41afd489e42b03e07",
"assets/packages/country_code_picker/flags/vc.png": "a604d5acd8c7be6a2bbaa1759ac2949d",
"assets/packages/country_code_picker/flags/zw.png": "d5c4fe9318ebc1a68e3445617215195f",
"assets/packages/country_code_picker/flags/nr.png": "f5ae3c51dfacfd6719202b4b24e20131",
"assets/packages/country_code_picker/flags/ne.png": "a152defcfb049fa960c29098c08e3cd3",
"assets/packages/country_code_picker/flags/cu.png": "8d4a05799ef3d6bbe07b241dd4398114",
"assets/packages/country_code_picker/flags/bq.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/country_code_picker/flags/bf.png": "9b91173a8f8bb52b1eca2e97908f55dd",
"assets/packages/country_code_picker/flags/bg.png": "d591e9fa192837524f57db9ab2020a9e",
"assets/packages/country_code_picker/flags/cc.png": "126eedd79580be7279fec9bb78add64d",
"assets/packages/country_code_picker/flags/gb-wls.png": "72005cb7be41ac749368a50a9d9f29ee",
"assets/packages/country_code_picker/flags/mh.png": "2a7c77b8b1b4242c6aa8539babe127a7",
"assets/packages/country_code_picker/flags/za.png": "aa749828e6cf1a3393e0d5c9ab088af0",
"assets/packages/country_code_picker/flags/uy.png": "20c63ac48df3e394fa242d430276a988",
"assets/packages/country_code_picker/flags/wf.png": "4d33c71f87a33e47a0e466191c4eb3db",
"assets/packages/country_code_picker/flags/vu.png": "1bed31828f3b7e0ff260f61ab45396ad",
"assets/packages/country_code_picker/flags/tj.png": "2407ba3e581ffd6c2c6b28e9692f9e39",
"assets/packages/country_code_picker/i18n/zh.json": "bbabbd76b94c0f63ad9aa880f5c23d43",
"assets/packages/country_code_picker/i18n/de.json": "d8b87bb657b9438677c4b08caf6cd52f",
"assets/packages/country_code_picker/i18n/pt.json": "4a3aaf2f334359822f3d781045ad8606",
"assets/packages/country_code_picker/i18n/en.json": "8fe204625d66a906988add1c4d372972",
"assets/packages/country_code_picker/i18n/it.json": "346d53d5123fd692766a686887a75355",
"assets/packages/country_code_picker/i18n/fr.json": "8a8c0f13bb50d940bbc1bb046dd360cf",
"assets/packages/country_code_picker/i18n/ko.json": "460d6dc9bc98fed196d7f08721265dc7",
"assets/packages/country_code_picker/i18n/es.json": "ccfbb564f963b9738e0ca6dcefa81286",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/lib/lang/mr.json": "575bf2bdd07378893e9f531baa1f2038",
"assets/lib/lang/en.json": "1bef99752278a518da6fa83daac0ecbb",
"assets/lib/lang/hi.json": "db6aeffa1226835f215a9096dbb6374b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/getlocation.html": "f0109ab2b314d5bf857baedf10c42ab1",
"assets/assets/images/KISAN_APP_ICON.png": "5ff8b9ef2a45f4cba8ce58b4d7748bba",
"assets/assets/images/fade.png": "5ffe95bc22322f9f9fb53c6e6ec17a5e",
"assets/assets/images/loader.png": "23ec1927741ee02cef4722d012b46fee",
"assets/assets/images/comparearrows.png": "4243f80c36ccbae1ee71421662765a11",
"assets/assets/images/flag.png": "791b0c15b052145bbda06804c1abb648",
"assets/assets/images/icon_close.png": "a1f2e8357465fe7f714718ac227dc3c7",
"assets/assets/images/white_kisan_logo.png": "ef02c898c9dd399068b1712290eec95f",
"assets/assets/images/icon_calender.png": "0d61f7bcd2c596226ebe98eb059c2384",
"assets/assets/images/suggest_bulb.png": "2e01483b906ff0f050676676fc93c6ca",
"assets/assets/images/cart.png": "e814edc0a804d8c0f65021d7ca2e0deb",
"assets/assets/images/business_bag_brown.png": "e6798d9559709ff07fdeab9aae19b4dc",
"assets/assets/images/brown_calender.png": "2722a49cb53643f0dd36ac2831741910",
"assets/assets/images/stopwatch.png": "4aa312720dd1036ba198aa834a7e3aa3",
"assets/assets/images/defaultProfile.png": "41f07009c6ed823e2fd561c74b63c42d",
"assets/assets/images/Subscribe.png": "c2bfa33bb2072aae1b45f4a52515f9f3",
"assets/assets/images/farm.jpg": "62906e90f24db7d99fc23f0f48056fd3",
"assets/assets/images/upgrade_thank_you.png": "f623ad9b8325310de2282da7bc2439f1",
"assets/assets/images/discount.png": "35fd78cc6e4b1fdfae144e04a3d85658",
"assets/assets/images/calender.png": "195828253add589dd7d4a0afaa793e95",
"assets/assets/images/subSuccess.png": "3c150729708d317fd02040af69705aa7",
"assets/assets/images/tileGreen1.png": "490c54eebd2ae4a31512b0ccc1c689a8",
"assets/assets/images/defaultprofileorganization.jpg": "a32204c6fe38711178a8198d278b3c61",
"assets/assets/images/tractor2.jpg": "dcd9b8d8f4beb1851d83905d322cc0d4",
"assets/assets/images/select_person.png": "0fc9ebea63a4e12cdf4a008d4248537d",
"assets/assets/images/tileGreen.png": "295725f3482158cadeb752ec2cb0c828",
"assets/assets/images/upgrade-button.png": "4403d339efc878a7ffcb0b2f768325ac",
"assets/assets/images/single_entry.png": "ce3bd051aadaf34b14b098b1da356a4e",
"assets/assets/images/whatsappdialog.png": "8b357b47f00b0b898a8ba58203557582",
"assets/assets/images/please_note_tile.png": "90227a36b659e3bf6d8e39c77f26e3d5",
"assets/assets/images/map.png": "a752d08aaa67769b26130a0c1525387d",
"assets/assets/images/emailgreen.png": "5eaab3fa2e5509e1df1f4fe15999e15a",
"assets/assets/images/white_star.png": "ffda3011a33314db1546bb29df520b7b",
"assets/assets/images/option.png": "0945ce6127aeb70f0439b1e5662a13b9",
"assets/assets/images/contact_brown.png": "e2bc3655d3bfbbc662e5be0cfdb161df",
"assets/assets/images/align.png": "413cc82b6d883c72b05563d81c571b4a",
"assets/assets/images/video_play.png": "df2aab83045469a0a413af6dd54b565e",
"assets/assets/images/catImages/plant.png": "51556c250b81600a6120df14ada5b244",
"assets/assets/images/catImages/book.png": "f6374d703d8f00775b50ebcdd6844c41",
"assets/assets/images/catImages/fertilizers.png": "a4db34b0a536a62f1eb0c56c5ff2dab7",
"assets/assets/images/catImages/sprinklers.png": "fe7434fb5629586b8c6a7ec955736e02",
"assets/assets/images/catImages/blueBarrel.png": "94f23b32cacb74bfceb11469030f8562",
"assets/assets/images/catImages/cow.png": "ee0816669f8af52f08b182930eb28f3f",
"assets/assets/images/catImages/tools.png": "124402534cb826da5e0e2cd01d6a89d0",
"assets/assets/images/catImages/greens.png": "a11b08f52d0775d07bdc5cbac9c63351",
"assets/assets/images/catImages/solar.png": "6e6d08007f4aa2c1c2708276aa054b45",
"assets/assets/images/catImages/apple.png": "45cef4f6137d56204b42788a7fddc786",
"assets/assets/images/catImages/GreenTractor.png": "5a39439871b2c8dac320102949238cc6",
"assets/assets/images/catImages/trailor.png": "d070de67edd903f113ad6a615dcde108",
"assets/assets/images/catImages/drone.png": "86c7ea871f37abc68df8ae6025acb85e",
"assets/assets/images/catImages/leaves.png": "34174040da0c0e9a4d3af9bd4a38fa76",
"assets/assets/images/catImages/truck.png": "3a8942232820dd16cc15c9dda3483ac9",
"assets/assets/images/suggest_bulb_white.png": "0e76665816528912bd981e7aff1ac10b",
"assets/assets/images/splashgifs/screen-2-300p.gif": "ba8d6f4595ab20fd71910fb84481ca21",
"assets/assets/images/splashgifs/screen-3-300p.gif": "404750c5d2de258276d69403acdf25bc",
"assets/assets/images/splashgifs/screen-5-300p.gif": "eeaeb88354e4e1e57c39321b53be80bb",
"assets/assets/images/splashgifs/screen-1-300p.gif": "a7a554abae0ef70e93e41fe3dacf4bdf",
"assets/assets/images/tileOrange1.png": "a6e43906b94fec8aa77219c584da07aa",
"assets/assets/images/ExistingProfile.png": "cd5a7bf0cfd2fb98a708f3d0b2afeee6",
"assets/assets/images/catalogue_image.png": "f1509eca9d625004d0e2cda5e9dba04c",
"assets/assets/images/youtube_button.png": "8f1e52535cd49d9603398d12abae7efd",
"assets/assets/images/icon_calender_2.png": "d4fe23d10f4cde8a8e1cc50690317a49",
"assets/assets/images/camera-icon.png": "0e3f2c6f6328b0f3b84bbaa96db88e5f",
"assets/assets/images/arrow.png": "92977db0646b0c660c15f83097ff2e8a",
"assets/assets/images/callhistory.png": "97a692253e258a6ae8c4283555fb1fd3",
"assets/assets/images/distance.png": "aef44273749aa1e3f1699c2f2586b918",
"assets/assets/images/sample_add.jpg": "b1ac3a564fffef5b10b0fbc30c3ce1d0",
"assets/assets/images/storagefolder-icon.png": "a60633b44e87109b30c2d72fe7d9ba24",
"assets/assets/images/KISAN-logo.png": "3647872be98fa436e090a37ba2dd1852",
"assets/assets/images/multi_entry.png": "4ba337423918f333a7d133781c01e514",
"assets/assets/images/assigned_checkmark.png": "dc7f5c04f5965f0fd2491c525fe5f8e2",
"assets/assets/images/planbg.png": "bce7aacb2d2a67f20ab275e61677ea7b",
"assets/assets/images/icon_bulk.png": "c691a471b54ea38fbd8c3ce7a6c09afd",
"assets/assets/images/sample_featured_brands.png": "d0885e1939dad328dec61aff1cfcb8ef",
"assets/assets/images/face_mask.png": "68165a547dbe006729616c320f145b57",
"assets/assets/images/subtitle.png": "3460ba75f65e6902c5310a143defe5be",
"assets/assets/images/assigned_checkmark_brown.png": "faf7061e249194b62ffdf34f8787ce44",
"assets/assets/images/35.png": "09b06d020818531c8057a83a6366b4c8",
"assets/assets/images/contact_icon.png": "3754f889c69a26b88a153dd05e850ccd",
"assets/assets/images/assign_image.png": "edbd5738b0d325e8428e6e079657d48c",
"assets/assets/images/drone-fed.png": "4d9105e265c63fe9caf4214197dc8fee",
"assets/assets/images/bookmark.png": "809964b26d7a94e0ef208503f7e5ce54",
"assets/assets/images/whatsappYellow.png": "c325f56ebb57f652795d8884f2adb562",
"assets/assets/images/rocket.png": "d01727ba600f948d21f6ae010f5ef7db",
"assets/assets/images/ruralfirst.jpg": "b1b10993c651a0fc62b59fe344d3d8b7",
"assets/assets/images/select_person_2.png": "5f744167024a7f5d135166dc65c5c650",
"assets/assets/images/google_logo.png": "e9612850a6cb55eb547266043e1eef86",
"assets/assets/images/ticket_tile_green.png": "620790af45b687136022a7ab34165949",
"assets/assets/images/pic_strip.png": "97a9beee6be8f0c86e1dd9aca9788f61",
"assets/assets/images/profileIcon.png": "8ac600d0b8f641c137eb1e60cbf17ae8",
"assets/assets/images/right_mark.png": "2f0f54b7420de18a9a239d4c4234bcc7",
"assets/assets/images/days.png": "14e78cea4a0690bbe3e05eb0d35ea26a",
"assets/assets/images/product_placeholder.png": "266aee1cbe23fe8661eea496683a5045",
"assets/assets/images/tractor.png": "b6fffcb1333bb32144717cbfe85c54e3",
"assets/assets/images/kisan_calender_tile.png": "b23c138ccf6d8b5442a6959c09b794de",
"assets/assets/images/zoom_video_icon_company.png": "da5366ec2c3f2b0418c4ae9fa01fcd89",
"assets/assets/images/arrow_right_circle.png": "ebd05255fd63f5fe066d0e51ef758e71",
"assets/assets/images/download_this_ticket.png": "09312ec9e203d60d554b971538f3d371",
"assets/assets/images/apple-logo.png": "a8b0e6fac04c43e040a8eb6bfd74b100",
"assets/assets/images/bulb_brown.png": "77353ac34a6f5628fcd35d7c458c1759",
"assets/assets/images/zoom_video_icon.png": "0dd77a2ee14c387556a056d6667ce3ec",
"assets/assets/images/ticket_tile_white.png": "7a410b9452e3853983e424e079ee5af9",
"assets/assets/images/eventgifs/survey_gif.gif": "8d2555b332c9fb4a8cfcff9ff3891471",
"assets/assets/images/eventgifs/quiz_gif.gif": "0ad84606938955ec813e6b1f0fa25020",
"assets/assets/images/eventgifs/poll_gif.gif": "7575137678a9f0e9a7bfa903a46f045b",
"assets/assets/images/star1.png": "5e579691e9fdcebf06f032096000252e",
"assets/assets/images/star.png": "7dd045a8dc0e884b0a49f53abf22d2d0",
"assets/assets/images/filter/Kannada.png": "a728045202d2d974436583a37c7901dd",
"assets/assets/images/filter/Punjabi.png": "a740ed345ea7ecb0c90d3143d876bcfa",
"assets/assets/images/filter/English_blur.png": "e45bb29f0ca8e5a8b2df53527cad8044",
"assets/assets/images/filter/Malayalam_selected.png": "5358d80fb7b82db39f5519ad0de8b9fe",
"assets/assets/images/filter/Punjabi_selected.png": "236f5201e53d47970bc827b944db2457",
"assets/assets/images/filter/Hindi.png": "171ee0321fbcb5aeadfad9ee6c46911c",
"assets/assets/images/filter/Urdu.png": "8e613b535642af84a0800afebd378eb3",
"assets/assets/images/filter/Gujarati_blur.png": "286ea64a33c9accea98478c2cea89c08",
"assets/assets/images/filter/Gujarati.png": "b2d3637d0fb7ff3d99c8f65f9a9069c3",
"assets/assets/images/filter/Tamil.png": "78d446cd4080aa900ee4af709df97d0b",
"assets/assets/images/filter/English_selected.png": "60a04476792a3a708a9f24aa668d354f",
"assets/assets/images/filter/Malayalam.png": "ebccfd973100e9d650f9e361151b1b65",
"assets/assets/images/filter/Bengali_selected.png": "6d5c9c6b046cdcc1780161771f1b61c8",
"assets/assets/images/filter/Marathi_blur.png": "55d44ef2f16b5b92191dbce5bbad329f",
"assets/assets/images/filter/Konkani_blur.png": "5ed6af156a320cc8d9fa5fc6b7a62b65",
"assets/assets/images/filter/Gujarati_selected.png": "b9a25109a44946a2be1e5b612d77d53e",
"assets/assets/images/filter/Urdu_blur.png": "9156b31d35f69875298dcf6fb75bc907",
"assets/assets/images/filter/Kokani_selected.png": "b16e590846077befad7fca75fe16d160",
"assets/assets/images/filter/Hindi_blur.png": "d09d9946496f13ddbafb714270b11420",
"assets/assets/images/filter/Telugu_selected.png": "3297017a97a60d03eefec20da5a59fc1",
"assets/assets/images/filter/Marathi.png": "d1f8e1c4542d70dbe8fc3b539f367d64",
"assets/assets/images/filter/Tamil_selected.png": "9ca56cc97f5a752c1fc6296877a685e6",
"assets/assets/images/filter/Hindi_selected.png": "c76be615ae4b41f7d1b2856cec4d11ad",
"assets/assets/images/filter/Konkani.png": "b82da2ef187032f2e23a8b90e6e76fc7",
"assets/assets/images/filter/Kannada_selected.png": "652aa7518c81d8fa2fe979a64d3f1721",
"assets/assets/images/filter/Bengali_blur.png": "a7abc710bc83316f2cf99dba2ee47be3",
"assets/assets/images/filter/Telugu.png": "757a87a276129a996d5bbbcc7b738daf",
"assets/assets/images/filter/Kannada_blur.png": "8c0a1b4cfb95e5f27a6e8771f8ea6357",
"assets/assets/images/filter/Tamil_blur.png": "6a13a2a78f903887bbdf5c0711bffae8",
"assets/assets/images/filter/Telugu_blur.png": "b14e35653b02f86935e7250391dab873",
"assets/assets/images/filter/Bengali.png": "75d90169e2468aa7bb5f4f58e7103dbd",
"assets/assets/images/filter/Punjabi_blur.png": "fccbd6a091e13669487271b2ea195799",
"assets/assets/images/filter/Malayalam_blur.png": "1ee29131b8be5a0e2aaaea66b1276440",
"assets/assets/images/filter/Marathi_selected.png": "9a0d449305fc264b215eb63195e8218c",
"assets/assets/images/filter/English.png": "0f922cf8e8a45511c4b1d246cb2257f9",
"assets/assets/images/filter/Urdu_selected.png": "9061095ca8360c159e9f2908211fd26f",
"assets/assets/images/whatsappGrey.png": "672f8f1816184721465c70187145a326",
"assets/assets/images/google.jpg": "21691b39ff925c633115f0021e72d7f5",
"assets/assets/images/whatsapp.png": "774352deeaa60ebe04164a1e28489771",
"assets/assets/images/tileOrange.png": "f51db1e3fc4129c1045bb28f7a68879b",
"assets/assets/images/vaccination_proof.png": "26bb484c68def21de8c5d9f034e9d456",
"assets/assets/images/KISAN.png": "2fe032a90b0c1ae70809935778154c42",
"assets/assets/images/per1.png": "d46f727a072fa9261529cba598eb45d9",
"assets/assets/images/kisanexb.png": "8e1e63d5e0353759d5eb9ec236f55106",
"assets/assets/images/storagecamera-icon.png": "132490bbdc70b77d0f288414468b558b",
"assets/assets/images/green_leaf.png": "4f30d0157f9e8dede2f09204c71545a9",
"assets/assets/images/per2.png": "016a1356ff9ab19bd38e2a0f5592c899",
"assets/assets/images/kisan_logo.png": "a133af4adef1113eac4aad31fb9e7e7e",
"assets/assets/payments.html": "421b567d88ede752efcc0c5d5ca39f89",
"assets/assets/icons/greenKisan_Logo.svg": "5dc13601dd10dcfd72e2080cad3dfd8c",
"assets/assets/icons/list.svg": "231c4060719d7d8820d4246c3e64f4aa",
"assets/assets/icons/drawer/icon_logout.png": "509c4c0b751713664d25804fb3003243",
"assets/assets/icons/drawer/icon_ticket.png": "c691a471b54ea38fbd8c3ce7a6c09afd",
"assets/assets/icons/drawer/icon_about.png": "1086d8dfe40d688f33d52749624f1976",
"assets/assets/icons/drawer/icon_tnc.png": "5462abe11ea4d8ed778b23d6d62c0c2c",
"assets/assets/icons/drawer/icon_share.png": "3493a5686891c808ebf0f1255b64b162",
"assets/assets/icons/drawer/icon_support.png": "3b332267f8d844547890cbb98b253d84",
"assets/assets/icons/drawer/icon_language.png": "812254ae06b0ff5310acc1f41924053e",
"assets/assets/icons/drawer/icon_calendar.png": "172d8e50260cc9f841bfce95f8661356",
"assets/assets/icons/Demo.svg": "9a30c910bc50706c699886bc96066cb5",
"assets/assets/icons/Webinar.svg": "25e20bd73565cc53f50da085931b608b",
"assets/assets/icons/home.svg": "235a3d928659918d5a23302bef8e503c",
"assets/assets/icons/map.svg": "84bf10caeeb61d0bc1b62d7f5f37fd0d",
"assets/assets/icons/optionIcon.svg": "e93a9550b0e09339dff4505358d62e3e",
"assets/assets/icons/submitButton.svg": "3f8904fb6d0a97c50d01ef6f6ff5cc50",
"assets/assets/icons/searchIcon.svg": "67ac3a19ee2f558a544bb82f27e2899f",
"assets/assets/icons/library_books.svg": "7fcb0097bd6fc36186292dd3fc93542b",
"assets/assets/icons/callHistoryIcon.svg": "2e46972f25e8580a0beff14f8c6e4806",
"assets/assets/icons/white_kisan_logo.svg": "fcd6c9052f7d1d850d2d43685e4a8ac9",
"assets/assets/icons/flag.svg": "9b135b5057d7e5aa25bfb57f77a975a7",
"assets/assets/icons/menuIcon.svg": "e2ae1d896480b6e9b181a1ad4454e12e",
"assets/assets/icons/forwardIcon.svg": "3c209d67d7fc9a767e43e9668bf6444a",
"assets/assets/icons/Offers.svg": "7a7a87d114658e477b741718c843d282",
"assets/assets/icons/Launch.svg": "5ea8837bb992612db19fa4d1062f8156",
"assets/assets/icons/greenlogoweb.png": "297183f341501712c3712b9ea00b590a",
"assets/assets/icons/iosLeaf.svg": "996f9b601e75b0a1a00df6e7cdae74ef",
"assets/assets/icons/leaf.svg": "ffd51f450e6fff3841ff3dac391c36ca",
"assets/assets/icons/kisan_calender_tile.png": "b23c138ccf6d8b5442a6959c09b794de",
"assets/assets/icons/products.svg": "de2df9b2a37f12e36b1626e8eb63bf2b",
"assets/assets/icons/companies.svg": "7d8a527089cc8bb93abfee0731a37d04",
"assets/assets/icons/webinarOptIcon.svg": "bd178feb499094db9e36bdccbb73ffa2",
"assets/assets/icons/shortlisticon.svg": "02188df32d2f8a17efefc401602326bd",
"assets/assets/icons/daysLogo.svg": "6e34d151584c6ace2886fd2d49c02efb",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
