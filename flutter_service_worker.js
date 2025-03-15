'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "e42d6aff408a86b983d1ddfa1c2eb231",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "af5d37fb80b214ae8c3731c2d2a73f8e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "45486538973d061c2eed347a3c247732",
".git/logs/refs/heads/main": "c2300980217330bb65129f9dcda1230a",
".git/logs/refs/remotes/origin/main": "8a1e3f622867840cfd0b9834986137a0",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/03/3fc18ec8e10ad49021746e8556c87db05986de": "fa8b7e411e4f16b78a73ecc3ebcfd375",
".git/objects/04/f3e3bfcbd2d1c45558998e28743b22476891fa": "c046f5f73bc956f0e99218a12ba6ebe7",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/09/e95e382094cc65bc90b6449ad1e8c419bdc810": "f7a8ef31614a7ab7cb4bb7f0c77b14aa",
".git/objects/0c/822d159d912baa198c2b170ab33a8b88e5742a": "9457f5af9552b8bb862c2a7642077615",
".git/objects/0c/86327e0c4334bd5b46bf483f806c8125b1201d": "b1bcf35c5c4263b7bf9c0de8acfe08a4",
".git/objects/11/8def048eb62d513805203b22665618ed9c1e5c": "492895c41e592c2d9b0ddc5e39460b5b",
".git/objects/12/38d17d8c3beb42bd3c00188bfb46fdc2b54650": "1855cc238ffbe792a2013c5a742cdb3d",
".git/objects/13/0e610d56eeb2f644c03a5696dd4c7e2f1da8b5": "c52c32b97556c5378c8da7042f5e17a5",
".git/objects/16/6ca041901e0a3031d6aac5f97c6d7d87d96a54": "2b885ea8ddcb82684699b78b21361bc3",
".git/objects/16/dee89364868a48f4b62517349d8f83838872be": "da88e4ba189b58c7b56b794e118cff54",
".git/objects/18/335f7413003c3bb394fe22260729a0009e6fda": "8dfb84540ae549b14277e10b04d22202",
".git/objects/18/7c59ae2b1f091d87ec70ff2b12afb5a2097eb9": "307eb67fbb4c85bfefe8ba1baf23996f",
".git/objects/21/762f29928c063125494c6d81866f0a87db7b62": "588ca15ba81104eee8b0775c6398085d",
".git/objects/22/ba8d4f9a9608f47235c7ee8c2606dfecb59faf": "5146fdbd235cd0cd51131dc47147ecb4",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2b/a7a597371657d626d568a9cb831e238ecdabd3": "39f0d4d5c7c6fc196d6b270890a12fd5",
".git/objects/2c/9b4ea457b818cbf8f9beb4ae5e52098e3768b8": "af8cf605ea511c56b5891e998c945099",
".git/objects/2c/ebc9d70290ef8a7efa7d4b755f7836f0c4c32f": "8fabd919801089c6e94ea35d89a9dbb6",
".git/objects/34/1f2939910ea228a77ceafc808b8ff2b6bacb25": "01fcfee70c073821e75e89d09fd8f7f6",
".git/objects/34/8d55667e2d06da957e0bf945c0b5ebb1d3006c": "675957a39f97e81adc2c434f17f9d8bc",
".git/objects/34/a89588e0d96c129b60e0655e1c2e5025b775dd": "0cb80c23107904f13b07ffced1ddfd95",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/36/9cf865ccecbd40a984b4e5477ef7d54049345b": "376ecd194c3ce8421d6b4053907901e8",
".git/objects/3c/e680026511a2dbd43df24a5a04b24e0d4b87f8": "7735edff0cb7816e53eb78d694b18771",
".git/objects/3f/640ad1fb85823e490a51ec1eabe7ffaf4a41c0": "7a9ed37acf7e0835c5ae150b2e6fcdbf",
".git/objects/3f/e8f35c358ae9c51116f2c4a742cf9b29d18cf9": "e9f50d1ea44117f4dca6a423733dd84f",
".git/objects/40/a0e24cd6c81c52e43f651a3d849d47d06bbe1b": "4dc45eacbe704954940568fa1ba10f7d",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/41/4eddf90a1bbc40383c23a412c0552f4921a526": "0a381dc77cd2fdcc07823bbf917e2135",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/cf50d8606ad10aad8d0d55ba0c3ebdc93f0aa4": "685318dbd02ca2c97061250cd0eba4f7",
".git/objects/43/5e75479f96cb3530fa3084da56e2b21092099e": "4cac8757097171f168e428315577bd80",
".git/objects/46/6d25483bb615e55e356a752070bc284a96afbd": "bba89efe7c23fd45a0ea61e657cb7afd",
".git/objects/46/9b0ca82df4d478b5abeae10cac0f4f00247da6": "52d0002a737a3c4500a45c7da1e9338a",
".git/objects/47/eab32bf7044ddf17d89a4479fc1bc3aba654bb": "a3e44e5ac7583a7a4fb490794e33d472",
".git/objects/49/a7ee40ab51b6e9fbc198ef1fb7887a8be1f684": "6ebae38a5d56132f2280d0f021beff43",
".git/objects/49/e08c3fdbedf9284faaad80902232f2df11be69": "09c745cc0b858a8f69f667897ca1bb35",
".git/objects/4a/d072f20b13bc3ee494869902ffbb44e7cdf046": "4a77523a809789a23bb8ec2d6d8b7f2d",
".git/objects/55/501fe6720b2415e446792ce47f03c144f13a20": "b5205e3fd08b5bb453730c2b05632848",
".git/objects/5b/bde26928432c27589d514cda5fa40e3eae3336": "a4085bd54341e8abd6c77b1c7d511e98",
".git/objects/5b/e4df78592cd72c9c39a9729f46b1c5d933c6a7": "3f39a7d5d69971428bdd3d645c240053",
".git/objects/5c/0ac36340f88cd3863d94bf22138f7875529c5f": "93400176586596c54badc767943e6287",
".git/objects/5c/d549ccb690d61505f6fc6c1922d4e74ced22fa": "6e2c62561e3d9f03510f1672ae2fd86e",
".git/objects/5d/faae13c3747a72c0e23d1b24157dd1d29276d7": "42edc14e4694f1706ce79ba0b4dd393a",
".git/objects/5e/f14d06931123c7b3b0d16836d5e851e6499a03": "58914fd3b283e70d6639b44a45f8608e",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/70ad5802289fb4cd4218b39da2582a1c834320": "9e86666cb88ed8327ff0508b8f29ddd9",
".git/objects/66/dd4bbc43c054c3ae96bef69f3b5b0dd630adad": "9c6ebf2f3ec3966de9abe76c3ae1bb04",
".git/objects/67/86e13aaeeac38276c8c8e75a2f92a5c5a8a031": "c5b1e0f2ff86e6cfaed3f103ba6b8d65",
".git/objects/6a/73b6817c23a143ecfca0ced5b88827c0cf363c": "560cd97a8b12b952abe36989d48d3b15",
".git/objects/6a/d8ebdeaa44da9c992ae0168047818e0cd53a77": "8f712c07a29bd17c265f0960d6d90aac",
".git/objects/6d/4c1570c9d5dc6a41735bb13dadc00d699e2592": "c980419b29c9a01390759e29c7798636",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/702cbc90917d1816b74c419ec569befd4f4f2a": "cd117cc9b4c3d92927aadb615f5e4d6b",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/88d0973ea9aa7d4f6e472a704ad06904c36fef": "948b79f40bf29175ad2148c8e9ce4bfa",
".git/objects/74/746ca5ecbc5e84b81aadb002f4b7bf36f01205": "1077c724ee0f26e37e4c8096c4c35322",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/75/40aa867e3f1f25a1edb11d28eba41a162de392": "0fd6555c4cf137beedab82c51ad6da09",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/e06e0c35591a38e9b5ee2bbe30038f12c0b269": "06b0f1e0a217af07d7fbaa48d02cfff7",
".git/objects/79/bf73aaf2fab65e14ea5681c51b8791b5f7da93": "16361aca015aac7775e86f5392b0cb3c",
".git/objects/82/945dfa184203679a3c4ebd6235c85cb7040093": "b6d02e8bd3b96aa1bf1c933a27feb44b",
".git/objects/84/5526b9038ed350b7f25d62227ef531abced3a0": "24f57a9153b2839d2bd7630368ee0048",
".git/objects/84/ab009a504802eb5a8aee9ddf3dd231a19fd1a5": "3fa44488556035e7384c9b44f8d7334f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2a7b4540cf4aa2d3e7a236227e5eeb42b2e389": "f4b4da72e3714af32fe3e3fb924a2d5a",
".git/objects/89/cb3047cafc6b9abf220cbf649e227fc09b7a12": "11781fea7edb74832acc24c87abf33e7",
".git/objects/8b/2982e22c4894965d4b37f5d1ca083ee2d44b78": "c892498dad2e42b9dc5aea7b9ecdf332",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/78bae01a15273fd86052989708b4143a964e7f": "8a5ebfbf5f0753137f058c7bedc25be2",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/6d0c5d1b261887bf8e09ed07379fa4039ed922": "d25a5ff6add540eafc50143f845d3281",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/9b/f5b696db77e1468e69a254403c200114277bef": "725fb6b156ce20ec9a61faa7809339c3",
".git/objects/9c/34af73f23cab30f9b65b284c484bb9ea58cf7c": "418344ccd69d208fc87204652e8b7f77",
".git/objects/9c/c88f756ee578d5da77dae46ae41cfb3c41582c": "fc61cff276835159038967f013554447",
".git/objects/9d/70afc63667222caa98576fba96e5ac628f7872": "81636c29f613034e591522f0d6fd376c",
".git/objects/9d/8b650fa5d595d85627f0809b1eddc487103cd0": "73459a8e6afcfacf3f6b1c10520e4a2b",
".git/objects/9f/7b6925d694476159798425776e4664c007cc5b": "ed7e34b007d543dfb562387a2c8f1869",
".git/objects/9f/d9794e6e220cfdec21d7b9bf66c515b784003e": "5e0e77ac3102a7e9a436535392aed885",
".git/objects/a0/8487d6edde1e09bc9aee5b78bc29c2c6f57d1e": "ea5d73ab9534b787f850dcca6ff8f8fd",
".git/objects/a5/43d624e3dce2aa690d6269c01244f3e418cdf5": "41073bf366fdadaf1ec4b3d465bb84c3",
".git/objects/a9/793169520f58d62d3297a176857b26bde33e01": "545e9d4e3ae3b38f69c349be5bc3c964",
".git/objects/aa/9aa95a850456441f60ec474021276482efa8b6": "e574fc01ab1d903682ceffd6e78e9eec",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ae/e4eb1e74824baff775796e74fb0c940b9b506f": "e4595dc9390fe787bf8eb005b56183f8",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/1093c1d3256e9bf157403df3bd3c4e21ddce71": "62fe800cf168e8881ab00d4ff6b6619f",
".git/objects/b1/1a1e8dadc949546b39c746fc927b730ea0e4e4": "62d54cba9cf907e15965749997ab5644",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/d4450179dc6373fadf009d5fc41cacb8f89bc4": "74217a171b6ae97fc53925abaf1d83fa",
".git/objects/b6/3a32976623cd7ffe5a45831eeded19a75f9219": "d411a17cf49b0f5fd5b32c27f1ce240f",
".git/objects/b6/6f21b56cd519eb72ba21171184b5c6a84c4c5b": "b52af87581c9e321963185e510f90dcb",
".git/objects/b6/b1b67d4274a31e746e4cd9e629034a9d37a73a": "11b5660e133c999c93934bd29cb7c08b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d399c3daa82187abfa98e9c439bad60d38c7d9": "4155c031b88f707e19c08452a7ae359d",
".git/objects/b8/67bf29fe40a0236d277ce14657565c8e055d17": "e854d5f1b69d239b66485100dc6c0876",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/cb68589b14da8d51c25000b507e24d8243ca29": "e8604041e046609228f6fbc9ed04bce8",
".git/objects/bc/d979f0a54afd2a05cabeedf82d7da0b4f76459": "443df0f2c5c8c8b8bc637d3413f70f71",
".git/objects/bd/97707038fade6d391ac4af58f86fff592edf5f": "03ae509be1414a7833ab30e9c7bfdab2",
".git/objects/bd/b3a1f086ccafbcf833400a0e6a45ee01ffc3c0": "9787947d900c86d026628982c64dc82c",
".git/objects/be/e6a33bd29c276c6722e2907cc6c6ae8b4ff711": "75aab3637b4b3b81fe2e387371adebd1",
".git/objects/bf/64981a900ead5a3dab2b06b16a8d96091bf269": "274d8eb193b4801a4db25b433d0833b3",
".git/objects/bf/ec14779f3ba1896628c96c0db3a66686dd5a24": "77430fd7474982b37121b2f808977363",
".git/objects/c1/0e8bfcf35e39fbe043f33579cac6341af0f0b3": "30aba7e6287c847c04cc8c125384da39",
".git/objects/c1/ae16d7dfaf9dca1b08bdfc1ec97d0df3169674": "f4361cc3c75359e601357b1fef7ffc0a",
".git/objects/c2/b8e73a217f87abafb02591207497a21cbd6401": "46f6be190045dccd21c0b7f65080a0d5",
".git/objects/c3/a324850fa0a0293bec2fa1dc4f26a2c8af7e30": "6693e67a8847251472f011ba3dc76d17",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/582be40cde892d03cc9a098790122509da3a6a": "383533b72e0d4ec9ba82d7a866edbda5",
".git/objects/cc/4945454854e1aa8be31019fcd953112c5d1807": "af52be622a29a2ad6208f29e162c2b4a",
".git/objects/d2/f0be1d5ca9d5167b1055fbc40fae40cf82e2fa": "7544b995cf0f6417e590f441c8a922b0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/e28e485b71c875a5364924fe2dd391bb57d084": "376d57533a24da87116dd06fff906049",
".git/objects/db/dbc0404c1f469768bf90a8ad419dd1869f4221": "f259ce2fdaac6a193b59a9b9127514a4",
".git/objects/dd/6fb04e174446d0b0d669ba58f02772ce3ed670": "efc9e3847fe2997b4f2afa3583fd8e7b",
".git/objects/e0/1ee6eb0f01a4cb18c72c6b0cf523c3fd46a7e8": "17e3671f66c3186663950012e04ddb3d",
".git/objects/e1/8ec991da932f981e956e20fad8c7ab91805b89": "c4de27cf64590079b675bb572a89d8c3",
".git/objects/e5/3a87a36343ea2bc9db0f2a1aa5031e40800659": "9d797a7fa4db899eda234ab0f1986e61",
".git/objects/e5/c6f6eac0be3bf60b1c8a65a1204fe24e675f44": "9415076e3457828abf0b3bbbaaa6d683",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/3c5411f15ff2a09da38e8658d2a131747b35b7": "bc9c0add0831ed510c2075f69e82fe2b",
".git/objects/eb/432339cd7adb7082db97aefd30b50915549a4d": "4f6d908aaefd4f36d69f8dc64a8e093d",
".git/objects/eb/638da7568f1652f6ac00f855dce0c17f73829b": "f78f859ed43dd2cc624b46f0bfcdda31",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f1/7052d0be9af3392338951e24c31b335b706d6a": "ec6cafa32e2ef95d13e41f31f053cd33",
".git/objects/f1/84e149926483ea02013086a97d66d179051a55": "c260996396c78e4cd48e17ca3b1631c2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/9c85aec3c44bfc181967a13eb2b66849182e70": "19498f715a7cff1692dbfa75473db20f",
".git/objects/f3/3e5656359b1d4cca6f317a37aee43aa2fb53b7": "8e2613c15c25092f678ba6487188f84c",
".git/objects/f7/998019116d8c8269adaa410bdcb1057ff949ee": "73440e0edb0c6403524d820577cd39de",
".git/objects/fc/3d3f0a2fad6b5405a829497514eb280073e9d3": "448b7e0b6532a72a4d2f85d163d87514",
".git/objects/fc/4601003bbea7f66eb4c08bf94b4219e795efab": "8c9631bcb7c6808c57cf00d873bc7758",
".git/objects/fe/640637f3e9331b267ee8bb3b6945fc1c3c000c": "98405a13e20035fc55dc360ff855fe0d",
".git/objects/fe/b789bbacdbc30764b6f694313bedb540ef2065": "50bfde727a28a2879c3a2cb7ebe3003c",
".git/refs/heads/main": "a904f83e6dc7462cdd65c1333c05af2a",
".git/refs/remotes/origin/main": "a904f83e6dc7462cdd65c1333c05af2a",
"assets/AssetManifest.bin": "f68ebb8c36aeabd9d287160304254ffc",
"assets/AssetManifest.bin.json": "f5622b5741ffe84bb27c9cb567b99e3c",
"assets/AssetManifest.json": "976cf812eee570f368b58cf096579259",
"assets/assets/1.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/background.png": "4cf63ac64c4c29dbbbb9b5086c0d888b",
"assets/assets/ED%2520helper.zip": "61e4b723d828dd2844940764809e9ded",
"assets/assets/logo/google.png": "08e7e38dbbc043cbb28397aae0f89014",
"assets/assets/logo/google.svg": "4a061ae8f26caa945a94a899d9051e25",
"assets/assets/logo/instagram_blue.svg": "0f94c6bc74405b75ad13fcf82046cc74",
"assets/assets/logo/logo.ico": "d4876b25e1feaf3b2dc0f371a8134a27",
"assets/assets/logo/logo.png": "acfad2dcf13a56234675d5366253888b",
"assets/assets/logo/logo.svg": "c51aaedea1d314acbbf06702b63f35b7",
"assets/assets/logo/mail.png": "8cf824c441a10653980c3ad239556e5b",
"assets/assets/logo/mail.svg": "5260b782cd3972f189e5e9f574173c21",
"assets/assets/logo/telegram_blue.svg": "47ef22b5477943d844a2a14689211f67",
"assets/assets/logo/title_logo.svg": "2a50ed046acb86af858528cf5e7faa37",
"assets/assets/logo/vk.png": "9583f79bdb8ea75f02ef9bd172296072",
"assets/assets/logo/vk.svg": "c120f1f74b8b035f6beb7c0c4721d8bb",
"assets/assets/logo/vk_blue.svg": "065ec55d85da3ab114faec2fd7d82e46",
"assets/assets/logo/watsapp_blue.svg": "97281e506bb3698f52fbe8b4168c9e9d",
"assets/assets/logo/windows.svg": "eaeb5c8469ad244ba91d699ef921cbec",
"assets/assets/logo/yandex.png": "e8c799e8e67f709722bf0f5eb7024bb2",
"assets/assets/logo/yandex.svg": "8270ba8b284123ede9a777f9b88ba29d",
"assets/assets/logo.cur": "4efdc9c15a54873726a2de7c63b62311",
"assets/assets/logo_back.png": "2a2f610e8bec9afd6fbd5e74471f1ae9",
"assets/assets/logo_background_1.png": "6e70a37375d3d87607879ed89c9a7b14",
"assets/assets/logo_background_2.png": "8f98332a1a9cb7bccf2d16f559776c6e",
"assets/assets/logo_back_transparet.png": "fd9b2388812836fde8aef898dc8545aa",
"assets/assets/main_logo.png": "bde47053662192522edbd8068b891840",
"assets/assets/main_logo_light.png": "d2a697c55f4987aeaaab875e344d179c",
"assets/assets/review_img/alexey.png": "b43210176ba4e2ee4ca78d348528b015",
"assets/assets/review_img/anna.png": "63b88fb240706e535bc30ea2c241031d",
"assets/assets/review_img/hizri.png": "ebf7ad38d34da9f73ee44c056814c5a5",
"assets/assets/review_img/kate.png": "215098448af72e2f939b1eab9bd03a2a",
"assets/assets/review_img/olga.png": "72788f5deda2e2398f3760ee63afe5d9",
"assets/assets/svg/add.svg": "02bb2f6a707c2d07837ac1b552fd968d",
"assets/assets/svg/arrow_back.svg": "70a11fba16e1ed78fba959ab5446eee5",
"assets/assets/svg/arrow_down.svg": "e4d00bfe90df5761c943d7d393ff07b5",
"assets/assets/svg/arrow_right.svg": "923eb522e226c1030ee4ae47a358db3f",
"assets/assets/svg/arrow_right_black.svg": "96a04112fdd969387fdeb72bf082b76d",
"assets/assets/svg/arrow_up.svg": "e34d554db3c667b668cad99735f548c3",
"assets/assets/svg/attach_icon.svg": "4467eaef16e3658ea75c0e8c5ffbea1f",
"assets/assets/svg/attach_icon_disable.svg": "7b15b61ca83114be2fbddf4df2b4a2aa",
"assets/assets/svg/bot_message.svg": "efaabb79dd123fab2da59f1d6029dcdc",
"assets/assets/svg/camera.svg": "cdc854321e7925ca86fbda5d672e188b",
"assets/assets/svg/camera_disable.svg": "559fe4c2de9fd9b0bf9f9d6738fabf1b",
"assets/assets/svg/checkbox_icon.svg": "858b1c8ed49b2f43035a74854bcd85ff",
"assets/assets/svg/client_message.svg": "c925fd4d374cdc83a6ebef1cd4d5711b",
"assets/assets/svg/copy.svg": "2b02b5313e2eb91d993c6d5c19532d39",
"assets/assets/svg/delete_chat.svg": "2f1b5dcab9de46f3c6a7aeb6737e8a8c",
"assets/assets/svg/delete_icon.svg": "5b85e9e9d197994f20e41793cc8d6415",
"assets/assets/svg/done.svg": "845de97434aee9de0208bc58617998d1",
"assets/assets/svg/error.svg": "b52ffad07665c3d015db940028df67d2",
"assets/assets/svg/gallery.svg": "4bbc8e23b41bf487ce0766b972c04f91",
"assets/assets/svg/gallery_disable.svg": "bd088f718edb5c87f2de15a2d82f94da",
"assets/assets/svg/headline_substrate.svg": "6662effe21f500cc986473a9bb3c5b27",
"assets/assets/svg/ion_camera_sharp.svg": "8ad7aafa1d12470f0cfffb804ce566e4",
"assets/assets/svg/land.svg": "aa311126028e801036ab7418daa5a8f6",
"assets/assets/svg/listen.svg": "a237bb7a9526c82e3e430cd7f731ac17",
"assets/assets/svg/logos_mastercard.svg": "dcb63ef84efecd745599feffea62df62",
"assets/assets/svg/main_logo.svg": "5068e8a8238182a407775f498dbbe4e1",
"assets/assets/svg/menu.svg": "d2cd69dac746f3d2a345cc0c84350d90",
"assets/assets/svg/microphone.svg": "3a265f30ccb08ab6afc98a33d0b59012",
"assets/assets/svg/microphone_disable.svg": "86a9432707ac581a4f8bce89e07fe4bb",
"assets/assets/svg/photo_2024-11-22_14-30-45.jpg": "d57be9a189cf6bbd69eefc116517af6c",
"assets/assets/svg/play.svg": "85aa9664ec3089f7431b4e4a781159ba",
"assets/assets/svg/profile_icon.svg": "18a30c94ff59743027d99d5718358545",
"assets/assets/svg/save.svg": "0cb767c31bdb815304abec50a8b26ce9",
"assets/assets/svg/save_message.svg": "c74399fd6b0c3cdc3a4523315b51f386",
"assets/assets/svg/select_profile_icon.svg": "ed834b47e8a8f3b2e5731f1b8310c9d0",
"assets/assets/svg/send_message.svg": "ec6b642f0e30c940f58addf2a773ff83",
"assets/assets/svg/send_message_disable.svg": "7ea6cae2d6341e00d34e876cab41bf0f",
"assets/assets/svg/star.svg": "489a03c9538d9225985ef994d75e5b97",
"assets/assets/svg/title_menu.svg": "9dc9d6f6cdf2679acd61580861e77fa6",
"assets/assets/svg/trash.svg": "8d7c659c5158b88abbbdc69fad1b24a8",
"assets/assets/svg/trash_disable.svg": "728ac51968cb2600092fc751910d7cda",
"assets/assets/svg/video_part.svg": "691bafac16a8c8c8c18091f3274ea85e",
"assets/assets/svg/voice_massage_field.svg": "f25f7ee57058ed695d79c420b54e5d27",
"assets/assets/svg/voice_message.svg": "ccf0b648a598f0062ff2250112cf5095",
"assets/assets/voice_message.png": "2bd1f270b70b0197d4b9772649537462",
"assets/FontManifest.json": "3c6f2aec284ba6e927fd5e00fb6c4257",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9c569adf46c77a33cdcc75bfc2a8e4ae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_sound/assets/js/async_processor.js": "1665e1cb34d59d2769956d2f14290274",
"assets/packages/flutter_sound/assets/js/tau_web.js": "32cc693445f561133647b10d1b97ca07",
"assets/packages/flutter_sound_web/howler/howler.js": "3030c6101d2f8078546711db0d1a24e9",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "7e0e9abfa360d15170e1523cd2fff125",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "7659d6a7015a8a4e14abaaf3321509df",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "4884497120ca121dfc6212ac2adcefe9",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "4ebb4a739617c6aad6f822df9c35dfed",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "cd16f87334f62d0269cbc48f9af58f40",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "70ec900d430120384747e741ea999e66",
"/": "70ec900d430120384747e741ea999e66",
"main.dart.js": "ccbdef0a657776210b5f52c1241a70e3",
"manifest.json": "803f2b3d9efa21923f1bff2c076f3129",
"version.json": "23086162bdb2d8ae13299e3e4826de3a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
