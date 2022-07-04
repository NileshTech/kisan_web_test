'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "295e26eceb35ca1d77ac7de3c97538e9",
"index.html": "d870578aa10468aa4885cd4d07c9f0e6",
"/": "d870578aa10468aa4885cd4d07c9f0e6",
"main.dart.js": "4d673d43809225244f2c4e748c41abcc",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "3647872be98fa436e090a37ba2dd1852",
"icons/Icon-192.png": "ec2a80a5330c85b252e5cef6918daa61",
"icons/Icon-maskable-192.png": "5d7d187f6890ae45f422103b911ece7b",
"icons/Icon-maskable-512.png": "8804f5fa778bb91a87ee71e4b4a86d61",
"icons/Icon-512.png": "babf1eed827d3d205394fe679e604457",
"manifest.json": "c3a8bb44e060d16f886277e7222d1f3f",
"assets/AssetManifest.json": "9b68206847393dd809c57a679fef1278",
"assets/NOTICES": "13da3b59eb6741f7607b67469c471e52",
"assets/FontManifest.json": "eaafc73c8a7887cc937563e80336056d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/sn_progress_dialog/example/assets/completed.png": "3e65bf4ed5f8b0f808b57fecdb26b7d1",
"assets/packages/sn_progress_dialog/assets/completed.png": "4f4ec717f6bb773c80db76261bb367c3",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_icons_null_safety/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons_null_safety/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons_null_safety/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons_null_safety/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons_null_safety/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons_null_safety/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons_null_safety/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons_null_safety/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons_null_safety/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons_null_safety/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons_null_safety/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons_null_safety/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/lib/lang/mr.json": "575bf2bdd07378893e9f531baa1f2038",
"assets/lib/lang/en.json": "1bef99752278a518da6fa83daac0ecbb",
"assets/lib/lang/hi.json": "db6aeffa1226835f215a9096dbb6374b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/getlocation.html": "f0109ab2b314d5bf857baedf10c42ab1",
"assets/assets/images/KISAN_APP_ICON.png": "5ff8b9ef2a45f4cba8ce58b4d7748bba",
"assets/assets/images/fade.png": "5ffe95bc22322f9f9fb53c6e6ec17a5e",
"assets/assets/images/loader.png": "23ec1927741ee02cef4722d012b46fee",
"assets/assets/images/comparearrows.png": "4243f80c36ccbae1ee71421662765a11",
"assets/assets/images/flag.png": "791b0c15b052145bbda06804c1abb648",
"assets/assets/images/icon_close.png": "a1f2e8357465fe7f714718ac227dc3c7",
"assets/assets/images/agree_corp.png": "f390ce569dcb4630460852c98a720e84",
"assets/assets/images/white_kisan_logo.png": "ef02c898c9dd399068b1712290eec95f",
"assets/assets/images/icon_calender.png": "0d61f7bcd2c596226ebe98eb059c2384",
"assets/assets/images/suggest_bulb.png": "2e01483b906ff0f050676676fc93c6ca",
"assets/assets/images/cart.png": "e814edc0a804d8c0f65021d7ca2e0deb",
"assets/assets/images/business_bag_brown.png": "e6798d9559709ff07fdeab9aae19b4dc",
"assets/assets/images/brown_calender.png": "2722a49cb53643f0dd36ac2831741910",
"assets/assets/images/stopwatch.png": "4aa312720dd1036ba198aa834a7e3aa3",
"assets/assets/images/defaultProfile.png": "41f07009c6ed823e2fd561c74b63c42d",
"assets/assets/images/kisan_biz_logo.png": "987f3b5d2c17d1fde58835cac13ba114",
"assets/assets/images/Subscribe.png": "c2bfa33bb2072aae1b45f4a52515f9f3",
"assets/assets/images/farm.jpg": "62906e90f24db7d99fc23f0f48056fd3",
"assets/assets/images/upgrade_thank_you.png": "f623ad9b8325310de2282da7bc2439f1",
"assets/assets/images/discount.png": "35fd78cc6e4b1fdfae144e04a3d85658",
"assets/assets/images/calender.png": "195828253add589dd7d4a0afaa793e95",
"assets/assets/images/subSuccess.png": "3c150729708d317fd02040af69705aa7",
"assets/assets/images/tileGreen1.png": "490c54eebd2ae4a31512b0ccc1c689a8",
"assets/assets/images/KisanBiz_Logo.png": "49bc37bf535960e0aff58ead403b7c6f",
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
"assets/assets/images/conf_entry.png": "db2fa192e2678f35b6d5cbb47f16cf91",
"assets/assets/images/icon_calender_2.png": "d4fe23d10f4cde8a8e1cc50690317a49",
"assets/assets/images/camera-icon.png": "0e3f2c6f6328b0f3b84bbaa96db88e5f",
"assets/assets/images/arrow.png": "92977db0646b0c660c15f83097ff2e8a",
"assets/assets/images/restaurant.png": "5d47ca6d2280183c7eca3f7e4fad6999",
"assets/assets/images/callhistory.png": "97a692253e258a6ae8c4283555fb1fd3",
"assets/assets/images/distance.png": "aef44273749aa1e3f1699c2f2586b918",
"assets/assets/images/sample_add.jpg": "b1ac3a564fffef5b10b0fbc30c3ce1d0",
"assets/assets/images/storagefolder-icon.png": "a60633b44e87109b30c2d72fe7d9ba24",
"assets/assets/images/KISAN-logo.png": "3647872be98fa436e090a37ba2dd1852",
"assets/assets/images/multi_entry.png": "4ba337423918f333a7d133781c01e514",
"assets/assets/images/webp/kisanbiz_agricorp_image.webp": "18ca090d382f39485a479cf6660a5be8",
"assets/assets/images/webp/kisan_biz_image.webp": "9d6fbdea76480fb62e81c04fc01bb11d",
"assets/assets/images/webp/conf_ticket.webp": "6791789f569b2df3e3ba137b667808d4",
"assets/assets/images/webp/checkmark_blue.webp": "a82b6c0b93fff066f956495206af18b9",
"assets/assets/images/webp/exh_ticket.webp": "bc4e547a0519ae352aec9f9ba9f51d4d",
"assets/assets/images/webp/kisan_conf_image.webp": "fc98c3183c918c4beec3dac3dd18b8f4",
"assets/assets/images/webp/clipped_tile_orange.webp": "42788893f4b1cf68d594c76a0e4205d7",
"assets/assets/images/webp/kisan_agricorp_image.webp": "198f17786a0c08fe8b1078077c822465",
"assets/assets/images/feather_map.png": "b065b7a070fbd7996b36c37f468ba38a",
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
"assets/assets/images/ticket_tile_indigo.png": "45e9abb88334025a55f2644957dac727",
"assets/assets/images/bookmark.png": "809964b26d7a94e0ef208503f7e5ce54",
"assets/assets/images/whatsappYellow.png": "c325f56ebb57f652795d8884f2adb562",
"assets/assets/images/upgrade-button_biz.png": "38a26ecbee67ce8839887851988fce95",
"assets/assets/images/rocket.png": "d01727ba600f948d21f6ae010f5ef7db",
"assets/assets/images/kisan_biz_white.png": "d3e0d4eb406824e14be48d8bd050c485",
"assets/assets/images/ruralfirst.jpg": "b1b10993c651a0fc62b59fe344d3d8b7",
"assets/assets/images/feather_list.png": "e061a9c61996d699e4165ab6a0445ecb",
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
"assets/assets/images/calendarcheck.png": "9543492234f22ff731dd406ee1041096",
"assets/assets/images/eventgifs/survey_gif.gif": "8d2555b332c9fb4a8cfcff9ff3891471",
"assets/assets/images/eventgifs/quiz_gif.gif": "0ad84606938955ec813e6b1f0fa25020",
"assets/assets/images/eventgifs/poll_gif.gif": "7575137678a9f0e9a7bfa903a46f045b",
"assets/assets/images/star1.png": "5e579691e9fdcebf06f032096000252e",
"assets/assets/images/feather_flag.png": "690e0e10b04a7be95a8c697648338e4d",
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
"assets/assets/images/conference_new_logo.png": "4891ad1a09219f6079256cc6c50229e2",
"assets/assets/images/google.jpg": "21691b39ff925c633115f0021e72d7f5",
"assets/assets/images/whatsapp.png": "774352deeaa60ebe04164a1e28489771",
"assets/assets/images/tileOrange.png": "f51db1e3fc4129c1045bb28f7a68879b",
"assets/assets/images/vaccination_proof.png": "26bb484c68def21de8c5d9f034e9d456",
"assets/assets/images/KISAN.png": "2fe032a90b0c1ae70809935778154c42",
"assets/assets/images/per1.png": "d46f727a072fa9261529cba598eb45d9",
"assets/assets/images/exh_entry.png": "7f9d13058ea63aefc931348c8a9f2c16",
"assets/assets/images/kisanexb.png": "8e1e63d5e0353759d5eb9ec236f55106",
"assets/assets/images/storagecamera-icon.png": "132490bbdc70b77d0f288414468b558b",
"assets/assets/images/green_leaf.png": "4f30d0157f9e8dede2f09204c71545a9",
"assets/assets/images/per2.png": "016a1356ff9ab19bd38e2a0f5592c899",
"assets/assets/images/exhibition_ticket.png": "d75f85edb626d1047fb22d0cac8cdd30",
"assets/assets/images/kisan_biz_logos_con.png": "f57ff9b2298d0bfedf1c535b577efb83",
"assets/assets/images/youtube_grey.png": "fe1f7f632df4001504afb9f4f64de688",
"assets/assets/images/kisan_logo.png": "a133af4adef1113eac4aad31fb9e7e7e",
"assets/assets/payments.html": "421b567d88ede752efcc0c5d5ca39f89",
"assets/assets/icons/greenKisan_Logo.svg": "5dc13601dd10dcfd72e2080cad3dfd8c",
"assets/assets/icons/list.svg": "231c4060719d7d8820d4246c3e64f4aa",
"assets/assets/icons/drawer/icon_share.svg": "91f9b521954fd1902339007b6a2dec9c",
"assets/assets/icons/drawer/icon_tnc.svg": "6c543a62c20c154fd206b430b863ad2f",
"assets/assets/icons/drawer/icon_ticket.svg": "16e543d5a504ed7ac2ac2c60730f93c4",
"assets/assets/icons/drawer/icon_logout.svg": "a7a697e688427feac0a5a5b8ac19233d",
"assets/assets/icons/drawer/icon_calendar.svg": "82baeb53dc7914428e7c5bd92a975411",
"assets/assets/icons/drawer/icon_language.svg": "2745d0a5079dcdf4cea0a17869dcbaa7",
"assets/assets/icons/drawer/icon_support.svg": "3ab6dc8c61bfd2e861bbcd4aa0427f27",
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
"assets/assets/icons/arrow_right.svg": "16a5ac20d3b9552a90d76cf88c4fb242",
"assets/assets/icons/menuIcon.svg": "e2ae1d896480b6e9b181a1ad4454e12e",
"assets/assets/icons/forwardIcon.svg": "3c209d67d7fc9a767e43e9668bf6444a",
"assets/assets/icons/Offers.svg": "7a7a87d114658e477b741718c843d282",
"assets/assets/icons/check_circle.svg": "f08dbc59ad70ff0f0b31fd6c38429970",
"assets/assets/icons/flag_of_india.svg": "f3a60ba3f717eca3ed511426a1debc55",
"assets/assets/icons/Launch.svg": "5ea8837bb992612db19fa4d1062f8156",
"assets/assets/icons/greenlogoweb.png": "297183f341501712c3712b9ea00b590a",
"assets/assets/icons/iosLeaf.svg": "996f9b601e75b0a1a00df6e7cdae74ef",
"assets/assets/icons/leaf.svg": "ffd51f450e6fff3841ff3dac391c36ca",
"assets/assets/icons/kisan_calender_tile.png": "b23c138ccf6d8b5442a6959c09b794de",
"assets/assets/icons/products.svg": "de2df9b2a37f12e36b1626e8eb63bf2b",
"assets/assets/icons/companies.svg": "7d8a527089cc8bb93abfee0731a37d04",
"assets/assets/icons/webinarOptIcon.svg": "bd178feb499094db9e36bdccbb73ffa2",
"assets/assets/icons/shortlisticon.svg": "9c3f6d434848eebc90662c854930a113",
"assets/assets/icons/daysLogo.svg": "6e34d151584c6ace2886fd2d49c02efb",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
