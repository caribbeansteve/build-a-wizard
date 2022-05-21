// frwc64 = typeof frwc64 != 'undefined' ? frwc64 : {}

let wizards = [
  {
    "idx": 0,
    "name": "Holy Arcanist Illuminus of the Heavens",
    "background": 0,
    "body": 86,
    "familiar": 7777,
    "head": 170,
    "prop": 272,
    "rune": 7777
  },
  {
    "idx": 1,
    "name": "Evil Arcanist Black Goat of the Wood",
    "background": 0,
    "body": 85,
    "familiar": 7777,
    "head": 136,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 2,
    "name": "Archmagus Poppy of the Moors",
    "background": 0,
    "body": 79,
    "familiar": 7777,
    "head": 178,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 3,
    "name": "Voodoo Priest Caligari of the Mount",
    "background": 1,
    "body": 50,
    "familiar": 7777,
    "head": 179,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4,
    "name": "Hedge Wizard Chandler of the Wild",
    "background": 1,
    "body": 45,
    "familiar": 7777,
    "head": 207,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 5,
    "name": "Runecaster Hadrien of Mu",
    "background": 1,
    "body": 8,
    "familiar": 114,
    "head": 238,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 6,
    "name": "Wild Mage Rowena of El Dorado",
    "background": 1,
    "body": 77,
    "familiar": 95,
    "head": 159,
    "prop": 321,
    "rune": 296
  },
  {
    "idx": 7,
    "name": "Rogue Mage Andy",
    "background": 0,
    "body": 66,
    "familiar": 94,
    "head": 205,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 8,
    "name": "Bunny Wizard Bernardo",
    "background": 0,
    "body": 60,
    "familiar": 124,
    "head": 134,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 9,
    "name": "Prismatic Magi Braindraind",
    "background": 0,
    "body": 16,
    "familiar": 113,
    "head": 137,
    "prop": 272,
    "rune": 300
  },
  {
    "idx": 10,
    "name": "Edge Arcanist Artchick",
    "background": 0,
    "body": 31,
    "familiar": 93,
    "head": 130,
    "prop": 309,
    "rune": 7777
  },
  {
    "idx": 11,
    "name": "Crow Master Claire Sliver",
    "background": 0,
    "body": 22,
    "familiar": 98,
    "head": 143,
    "prop": 333,
    "rune": 7777
  },
  {
    "idx": 12,
    "name": "The Wizard Empress",
    "background": 0,
    "body": 34,
    "familiar": 93,
    "head": 156,
    "prop": 311,
    "rune": 7777
  },
  {
    "idx": 13,
    "name": "3D Wizz DeeZe",
    "background": 0,
    "body": 25,
    "familiar": 102,
    "head": 148,
    "prop": 266,
    "rune": 7777
  },
  {
    "idx": 14,
    "name": "Cat Wizard El Crypto Ball",
    "background": 0,
    "body": 48,
    "familiar": 106,
    "head": 140,
    "prop": 331,
    "rune": 301
  },
  {
    "idx": 15,
    "name": "Arcanist EyesTeethFlesh",
    "background": 0,
    "body": 24,
    "familiar": 92,
    "head": 241,
    "prop": 339,
    "rune": 7777
  },
  {
    "idx": 16,
    "name": "Sorcerer Alessar of the Moors",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 231,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 17,
    "name": "Master Ape Gfunk",
    "background": 0,
    "body": 47,
    "familiar": 108,
    "head": 163,
    "prop": 266,
    "rune": 7777
  },
  {
    "idx": 18,
    "name": "Cartomancer Fiskantes",
    "background": 0,
    "body": 4,
    "familiar": 7777,
    "head": 168,
    "prop": 251,
    "rune": 7777
  },
  {
    "idx": 19,
    "name": "Master of Spots Hunter",
    "background": 0,
    "body": 51,
    "familiar": 100,
    "head": 163,
    "prop": 266,
    "rune": 7777
  },
  {
    "idx": 20,
    "name": "Punk Rock Arcanist Joey",
    "background": 0,
    "body": 69,
    "familiar": 88,
    "head": 175,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 21,
    "name": "Loop Master Loopify",
    "background": 0,
    "body": 53,
    "familiar": 105,
    "head": 181,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 22,
    "name": "Necromancer ManuelDaMoon",
    "background": 0,
    "body": 72,
    "familiar": 112,
    "head": 242,
    "prop": 309,
    "rune": 7777
  },
  {
    "idx": 23,
    "name": "Alien Arcanist Marlo of the Cosmos",
    "background": 0,
    "body": 56,
    "familiar": 91,
    "head": 184,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 24,
    "name": "Philosopher Nietzsche of the Mountain",
    "background": 0,
    "body": 78,
    "familiar": 118,
    "head": 196,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 25,
    "name": "Necromancer Nikita",
    "background": 0,
    "body": 71,
    "familiar": 7777,
    "head": 239,
    "prop": 336,
    "rune": 7777
  },
  {
    "idx": 26,
    "name": "Fortune Master Oxelrod",
    "background": 0,
    "body": 9,
    "familiar": 119,
    "head": 197,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 27,
    "name": "Great Old One 0xmon",
    "background": 0,
    "body": 11,
    "familiar": 115,
    "head": 145,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 28,
    "name": "The Great and Magical UserGnome",
    "background": 0,
    "body": 80,
    "familiar": 110,
    "head": 244,
    "prop": 319,
    "rune": 7777
  },
  {
    "idx": 29,
    "name": "Necromancer LeggoMyGreggo",
    "background": 0,
    "body": 70,
    "familiar": 117,
    "head": 210,
    "prop": 330,
    "rune": 7777
  },
  {
    "idx": 30,
    "name": "Great Old One Andolini",
    "background": 0,
    "body": 9,
    "familiar": 108,
    "head": 145,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 31,
    "name": "Sorcerer George of the Reach",
    "background": 2,
    "body": 44,
    "familiar": 7777,
    "head": 189,
    "prop": 271,
    "rune": 292
  },
  {
    "idx": 32,
    "name": "Adept Carly of the Wood",
    "background": 2,
    "body": 19,
    "familiar": 120,
    "head": 190,
    "prop": 339,
    "rune": 282
  },
  {
    "idx": 33,
    "name": "Bringer of Thunder",
    "background": 1,
    "body": 86,
    "familiar": 7777,
    "head": 188,
    "prop": 305,
    "rune": 295
  },
  {
    "idx": 34,
    "name": "Druid Rowena of the Wold",
    "background": 1,
    "body": 38,
    "familiar": 115,
    "head": 166,
    "prop": 264,
    "rune": 299
  },
  {
    "idx": 35,
    "name": "Archmagus Casper of the Hall",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 233,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 36,
    "name": "Chronomancer Gunthor of the Circle",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 203,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 37,
    "name": "Holy Monk Alvaro of the Sea",
    "background": 2,
    "body": 57,
    "familiar": 115,
    "head": 150,
    "prop": 320,
    "rune": 282
  },
  {
    "idx": 38,
    "name": "Sorcerer Zaros of the Tower",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 153,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 39,
    "name": "Battle Mage Wolfram out of the Void",
    "background": 1,
    "body": 86,
    "familiar": 115,
    "head": 173,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 40,
    "name": "Hydromancer Feng of the Plains",
    "background": 2,
    "body": 13,
    "familiar": 114,
    "head": 236,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 41,
    "name": "Arcanist Atlanta of the Palms",
    "background": 0,
    "body": 5,
    "familiar": 94,
    "head": 190,
    "prop": 335,
    "rune": 300
  },
  {
    "idx": 42,
    "name": "Cosmic Mage Voidoth of the Ether",
    "background": 0,
    "body": 52,
    "familiar": 120,
    "head": 194,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 43,
    "name": "Enchanter Zelroth of the Mount",
    "background": 1,
    "body": 54,
    "familiar": 111,
    "head": 211,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 44,
    "name": "Wild Mage Lumos of the Hollow",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 230,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 45,
    "name": "Runecaster Ratko of the Cosmos",
    "background": 1,
    "body": 75,
    "familiar": 94,
    "head": 133,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 46,
    "name": "Witch Gorgana of the Villa",
    "background": 2,
    "body": 19,
    "familiar": 112,
    "head": 155,
    "prop": 314,
    "rune": 303
  },
  {
    "idx": 47,
    "name": "Chronomancer George of Dreams",
    "background": 2,
    "body": 50,
    "familiar": 107,
    "head": 227,
    "prop": 259,
    "rune": 302
  },
  {
    "idx": 48,
    "name": "Bard Finch of the Keep",
    "background": 1,
    "body": 74,
    "familiar": 111,
    "head": 207,
    "prop": 257,
    "rune": 282
  },
  {
    "idx": 49,
    "name": "Magus Ixar of the Sacred Pillars",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 153,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 50,
    "name": "Shaman Alizam of the Riviera",
    "background": 0,
    "body": 19,
    "familiar": 111,
    "head": 142,
    "prop": 340,
    "rune": 293
  },
  {
    "idx": 51,
    "name": "Cleric Orpheus of the Citadel",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 233,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 52,
    "name": "Runecaster Eric of the Keep",
    "background": 1,
    "body": 55,
    "familiar": 7777,
    "head": 182,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 53,
    "name": "Adept Milo from the Shadow",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 230,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 54,
    "name": "Druid Mina of the Forest",
    "background": 2,
    "body": 35,
    "familiar": 114,
    "head": 198,
    "prop": 322,
    "rune": 289
  },
  {
    "idx": 55,
    "name": "Ghost Eater Kobold of the Technochrome",
    "background": 2,
    "body": 64,
    "familiar": 113,
    "head": 235,
    "prop": 254,
    "rune": 286
  },
  {
    "idx": 56,
    "name": "Archmagus Baird of the Valley",
    "background": 2,
    "body": 43,
    "familiar": 99,
    "head": 129,
    "prop": 316,
    "rune": 284
  },
  {
    "idx": 57,
    "name": "Void Disciple Magpie of the Gnostics",
    "background": 2,
    "body": 52,
    "familiar": 120,
    "head": 144,
    "prop": 274,
    "rune": 288
  },
  {
    "idx": 58,
    "name": "Magus Hestia of the Wild",
    "background": 1,
    "body": 36,
    "familiar": 107,
    "head": 209,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 59,
    "name": "Wild Mage Ratko of the Villa",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 188,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 60,
    "name": "Alchemist Soya of the Hollow",
    "background": 0,
    "body": 41,
    "familiar": 110,
    "head": 186,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 61,
    "name": "Arch-Magician Leah of the Platonic Shadow",
    "background": 3,
    "body": 75,
    "familiar": 110,
    "head": 139,
    "prop": 306,
    "rune": 283
  },
  {
    "idx": 62,
    "name": "Hue of Elysium",
    "background": 1,
    "body": 6,
    "familiar": 103,
    "head": 169,
    "prop": 328,
    "rune": 286
  },
  {
    "idx": 63,
    "name": "Magus Zhan of the Steppe",
    "background": 1,
    "body": 34,
    "familiar": 106,
    "head": 180,
    "prop": 263,
    "rune": 289
  },
  {
    "idx": 64,
    "name": "Amir from the Abyss",
    "background": 1,
    "body": 87,
    "familiar": 116,
    "head": 202,
    "prop": 260,
    "rune": 287
  },
  {
    "idx": 65,
    "name": "Battle Mage Angus of Elysium",
    "background": 1,
    "body": 54,
    "familiar": 89,
    "head": 218,
    "prop": 312,
    "rune": 296
  },
  {
    "idx": 66,
    "name": "Hedge Wizard Soya of the Thorn",
    "background": 3,
    "body": 30,
    "familiar": 94,
    "head": 232,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 67,
    "name": "Apollo of the Heath",
    "background": 1,
    "body": 15,
    "familiar": 110,
    "head": 214,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 68,
    "name": "Wild Mage Soya of the Gnostics",
    "background": 0,
    "body": 10,
    "familiar": 99,
    "head": 228,
    "prop": 319,
    "rune": 297
  },
  {
    "idx": 69,
    "name": "Scryer Aleister of the Mountain",
    "background": 2,
    "body": 19,
    "familiar": 109,
    "head": 174,
    "prop": 245,
    "rune": 290
  },
  {
    "idx": 70,
    "name": "Archmagus Oberon of the Marsh",
    "background": 1,
    "body": 84,
    "familiar": 89,
    "head": 228,
    "prop": 321,
    "rune": 282
  },
  {
    "idx": 71,
    "name": "Enchanter Ash of the Forest",
    "background": 3,
    "body": 39,
    "familiar": 101,
    "head": 191,
    "prop": 325,
    "rune": 303
  },
  {
    "idx": 72,
    "name": "Supa Wizz 9272",
    "background": 0,
    "body": 46,
    "familiar": 88,
    "head": 161,
    "prop": 266,
    "rune": 7777
  },
  {
    "idx": 73,
    "name": "Battle Mage Devin of the Dunes",
    "background": 1,
    "body": 58,
    "familiar": 99,
    "head": 165,
    "prop": 319,
    "rune": 297
  },
  {
    "idx": 74,
    "name": "Runecaster Gee of the Citadel",
    "background": 1,
    "body": 77,
    "familiar": 112,
    "head": 200,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 75,
    "name": "Dwarzgarth of The Hills",
    "background": 0,
    "body": 49,
    "familiar": 100,
    "head": 218,
    "prop": 316,
    "rune": 293
  },
  {
    "idx": 76,
    "name": "Wise Sam",
    "background": 1,
    "body": 26,
    "familiar": 118,
    "head": 146,
    "prop": 266,
    "rune": 302
  },
  {
    "idx": 77,
    "name": "Bob the Bearded",
    "background": 1,
    "body": 18,
    "familiar": 115,
    "head": 229,
    "prop": 262,
    "rune": 304
  },
  {
    "idx": 78,
    "name": "Battle Mage Malthus of the Plains",
    "background": 2,
    "body": 45,
    "familiar": 112,
    "head": 220,
    "prop": 273,
    "rune": 291
  },
  {
    "idx": 79,
    "name": "Catherine The Great",
    "background": 2,
    "body": 38,
    "familiar": 89,
    "head": 132,
    "prop": 273,
    "rune": 303
  },
  {
    "idx": 80,
    "name": "Void Disciple Zafar of the Dunes",
    "background": 1,
    "body": 58,
    "familiar": 115,
    "head": 219,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 81,
    "name": "Evoker Otto of the Realm",
    "background": 2,
    "body": 24,
    "familiar": 109,
    "head": 217,
    "prop": 306,
    "rune": 291
  },
  {
    "idx": 82,
    "name": "Shadow Mage Dante of the Valley",
    "background": 1,
    "body": 82,
    "familiar": 95,
    "head": 188,
    "prop": 248,
    "rune": 287
  },
  {
    "idx": 83,
    "name": "Archmagus Alessar of the Tower",
    "background": 3,
    "body": 17,
    "familiar": 90,
    "head": 232,
    "prop": 266,
    "rune": 282
  },
  {
    "idx": 84,
    "name": "Alchemist Ratko of the Steppe",
    "background": 0,
    "body": 42,
    "familiar": 7777,
    "head": 165,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 85,
    "name": "Enchanter Daphne of the Forest",
    "background": 2,
    "body": 13,
    "familiar": 109,
    "head": 132,
    "prop": 249,
    "rune": 282
  },
  {
    "idx": 86,
    "name": "Battle Mage Khudalf of the Desert",
    "background": 0,
    "body": 5,
    "familiar": 7777,
    "head": 182,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 87,
    "name": "Shaman Mace of the Citadel",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 207,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 88,
    "name": "Shaman Lamia of the Berg",
    "background": 0,
    "body": 73,
    "familiar": 111,
    "head": 166,
    "prop": 276,
    "rune": 284
  },
  {
    "idx": 89,
    "name": "Ghost Eater Layla of the Marsh",
    "background": 2,
    "body": 36,
    "familiar": 106,
    "head": 191,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 90,
    "name": "Spellsinger Brutus of the Citadel",
    "background": 0,
    "body": 46,
    "familiar": 117,
    "head": 204,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 91,
    "name": "Battle Mage Flynn of the Road",
    "background": 1,
    "body": 42,
    "familiar": 7777,
    "head": 188,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 92,
    "name": "Sky Master Jagger of the Gnostics",
    "background": 3,
    "body": 10,
    "familiar": 94,
    "head": 144,
    "prop": 315,
    "rune": 286
  },
  {
    "idx": 93,
    "name": "Druid Diana of Avalon",
    "background": 0,
    "body": 49,
    "familiar": 120,
    "head": 131,
    "prop": 276,
    "rune": 291
  },
  {
    "idx": 94,
    "name": "Sorcerer Jahid of the Mist",
    "background": 0,
    "body": 50,
    "familiar": 114,
    "head": 219,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 95,
    "name": "Sorcerer Soya of the Psychic Leap",
    "background": 0,
    "body": 10,
    "familiar": 108,
    "head": 229,
    "prop": 260,
    "rune": 291
  },
  {
    "idx": 96,
    "name": "Clairvoyant Tundror of the Toadstools",
    "background": 0,
    "body": 29,
    "familiar": 94,
    "head": 203,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 97,
    "name": "Archmagus Apollo of the Sacred Pillars",
    "background": 1,
    "body": 55,
    "familiar": 7777,
    "head": 214,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 98,
    "name": "Bard Gourdon of the Platonic Shadow",
    "background": 0,
    "body": 10,
    "familiar": 105,
    "head": 172,
    "prop": 247,
    "rune": 304
  },
  {
    "idx": 99,
    "name": "Archmagus Jeldor of the Hills",
    "background": 1,
    "body": 23,
    "familiar": 108,
    "head": 232,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 100,
    "name": "Arcanist Porto of the Cold",
    "background": 1,
    "body": 65,
    "familiar": 120,
    "head": 195,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 101,
    "name": "Archmagus Milton",
    "background": 1,
    "body": 9,
    "familiar": 111,
    "head": 238,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 102,
    "name": "Battle Mage Cassius of the Steppe",
    "background": 2,
    "body": 23,
    "familiar": 112,
    "head": 220,
    "prop": 250,
    "rune": 296
  },
  {
    "idx": 103,
    "name": "Sondra of the Wood",
    "background": 0,
    "body": 41,
    "familiar": 105,
    "head": 156,
    "prop": 263,
    "rune": 285
  },
  {
    "idx": 104,
    "name": "Sky Master JackDaw of the Sun",
    "background": 0,
    "body": 60,
    "familiar": 112,
    "head": 144,
    "prop": 271,
    "rune": 291
  },
  {
    "idx": 105,
    "name": "Shaman Ivy of Elysium",
    "background": 1,
    "body": 55,
    "familiar": 117,
    "head": 176,
    "prop": 264,
    "rune": 297
  },
  {
    "idx": 106,
    "name": "Zubin of the Rock",
    "background": 1,
    "body": 60,
    "familiar": 7777,
    "head": 138,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 107,
    "name": "Adept David of the Marsh",
    "background": 3,
    "body": 23,
    "familiar": 101,
    "head": 147,
    "prop": 326,
    "rune": 292
  },
  {
    "idx": 108,
    "name": "Artificer Nadeem of the Hollow",
    "background": 0,
    "body": 43,
    "familiar": 104,
    "head": 128,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 109,
    "name": "Enchanter Lucinda of the Moors",
    "background": 1,
    "body": 13,
    "familiar": 120,
    "head": 209,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 110,
    "name": "Arch-Magician Jasper of Arcadia",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 150,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 111,
    "name": "Battle Mage Durm of the Bastion",
    "background": 1,
    "body": 74,
    "familiar": 111,
    "head": 204,
    "prop": 7777,
    "rune": 285
  },
  {
    "idx": 112,
    "name": "Artificer Axel of the Valley",
    "background": 1,
    "body": 54,
    "familiar": 111,
    "head": 213,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 113,
    "name": "Sorcerer Hadrien of the Hills",
    "background": 2,
    "body": 42,
    "familiar": 89,
    "head": 227,
    "prop": 276,
    "rune": 282
  },
  {
    "idx": 114,
    "name": "Sage Eden of the Havens",
    "background": 1,
    "body": 7,
    "familiar": 97,
    "head": 185,
    "prop": 256,
    "rune": 285
  },
  {
    "idx": 115,
    "name": "Witch Hecate of the Hollow",
    "background": 1,
    "body": 33,
    "familiar": 120,
    "head": 223,
    "prop": 7777,
    "rune": 292
  },
  {
    "idx": 116,
    "name": "Runecaster Huan of the Atheneum",
    "background": 0,
    "body": 54,
    "familiar": 112,
    "head": 236,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 117,
    "name": "Diabolist Elena of the Keep",
    "background": 0,
    "body": 17,
    "familiar": 120,
    "head": 209,
    "prop": 309,
    "rune": 285
  },
  {
    "idx": 118,
    "name": "Bard Eliphas",
    "background": 2,
    "body": 40,
    "familiar": 95,
    "head": 149,
    "prop": 247,
    "rune": 292
  },
  {
    "idx": 119,
    "name": "Bard Alizam of the Cosmos",
    "background": 1,
    "body": 9,
    "familiar": 108,
    "head": 164,
    "prop": 257,
    "rune": 287
  },
  {
    "idx": 120,
    "name": "Merlon of the Villa",
    "background": 0,
    "body": 40,
    "familiar": 93,
    "head": 232,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 121,
    "name": "Sorcerer Zafar of the Havens",
    "background": 0,
    "body": 10,
    "familiar": 94,
    "head": 164,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 122,
    "name": "Battle Mage Atlas of the Valley",
    "background": 2,
    "body": 45,
    "familiar": 97,
    "head": 133,
    "prop": 317,
    "rune": 287
  },
  {
    "idx": 123,
    "name": "Charmer Circe of the Fey",
    "background": 0,
    "body": 28,
    "familiar": 109,
    "head": 208,
    "prop": 273,
    "rune": 304
  },
  {
    "idx": 124,
    "name": "Archmagus Salvatore of the Toadstools",
    "background": 0,
    "body": 30,
    "familiar": 104,
    "head": 147,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 125,
    "name": "Eden of the Thorn",
    "background": 3,
    "body": 28,
    "familiar": 104,
    "head": 238,
    "prop": 305,
    "rune": 299
  },
  {
    "idx": 126,
    "name": "Arch-Magician Asphodel of the Grotto",
    "background": 2,
    "body": 82,
    "familiar": 104,
    "head": 131,
    "prop": 258,
    "rune": 285
  },
  {
    "idx": 127,
    "name": "Pyromancer Rodolfo of the Temple",
    "background": 0,
    "body": 54,
    "familiar": 107,
    "head": 129,
    "prop": 255,
    "rune": 285
  },
  {
    "idx": 128,
    "name": "Arcanist Helix of the Sea",
    "background": 1,
    "body": 57,
    "familiar": 7777,
    "head": 200,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 129,
    "name": "Sage Uur'lok of El Dorado",
    "background": 3,
    "body": 78,
    "familiar": 95,
    "head": 235,
    "prop": 328,
    "rune": 290
  },
  {
    "idx": 130,
    "name": "Archmagus Oberon of the Cosmos",
    "background": 2,
    "body": 75,
    "familiar": 93,
    "head": 227,
    "prop": 318,
    "rune": 299
  },
  {
    "idx": 131,
    "name": "Shadow Mage Alessar of the Inferno",
    "background": 2,
    "body": 83,
    "familiar": 120,
    "head": 127,
    "prop": 309,
    "rune": 7777
  },
  {
    "idx": 132,
    "name": "Arch-Magician Burnside out of the Void",
    "background": 3,
    "body": 87,
    "familiar": 123,
    "head": 158,
    "prop": 253,
    "rune": 303
  },
  {
    "idx": 133,
    "name": "Enchanter Maia of the River",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 132,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 134,
    "name": "Necromancer Zeromus of Elysium",
    "background": 2,
    "body": 49,
    "familiar": 120,
    "head": 205,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 135,
    "name": "Battle Mage Nicolas of the Wild",
    "background": 0,
    "body": 43,
    "familiar": 119,
    "head": 217,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 136,
    "name": "Sorcerer Basil of the Dunes",
    "background": 1,
    "body": 27,
    "familiar": 101,
    "head": 189,
    "prop": 273,
    "rune": 297
  },
  {
    "idx": 137,
    "name": "Shaman Flynn of the Brambles",
    "background": 0,
    "body": 14,
    "familiar": 89,
    "head": 218,
    "prop": 317,
    "rune": 303
  },
  {
    "idx": 138,
    "name": "Magus Thor of the Atheneum",
    "background": 1,
    "body": 63,
    "familiar": 90,
    "head": 206,
    "prop": 253,
    "rune": 288
  },
  {
    "idx": 139,
    "name": "Archmagus George of the Carnival",
    "background": 2,
    "body": 28,
    "familiar": 89,
    "head": 212,
    "prop": 265,
    "rune": 299
  },
  {
    "idx": 140,
    "name": "Shaman Angus of Elysium",
    "background": 0,
    "body": 55,
    "familiar": 108,
    "head": 206,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 141,
    "name": "Scryer Arabella of the Cosmos",
    "background": 0,
    "body": 24,
    "familiar": 88,
    "head": 139,
    "prop": 251,
    "rune": 304
  },
  {
    "idx": 142,
    "name": "Ghost Eater Galatea of the Isle",
    "background": 1,
    "body": 57,
    "familiar": 7777,
    "head": 135,
    "prop": 335,
    "rune": 303
  },
  {
    "idx": 143,
    "name": "Archmagus Cairon of the Villa",
    "background": 3,
    "body": 77,
    "familiar": 124,
    "head": 189,
    "prop": 261,
    "rune": 288
  },
  {
    "idx": 144,
    "name": "Archmagus Jerret of the Dunes",
    "background": 3,
    "body": 59,
    "familiar": 103,
    "head": 185,
    "prop": 305,
    "rune": 300
  },
  {
    "idx": 145,
    "name": "Cryptomancer Blaise of the Veil",
    "background": 0,
    "body": 30,
    "familiar": 104,
    "head": 173,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 146,
    "name": "Allistair in the Shadows",
    "background": 1,
    "body": 86,
    "familiar": 95,
    "head": 231,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 147,
    "name": "Ghost Eater Vossler of the Tundra",
    "background": 0,
    "body": 73,
    "familiar": 88,
    "head": 242,
    "prop": 307,
    "rune": 304
  },
  {
    "idx": 148,
    "name": "Void Disciple Aamon of the Quantum Downs",
    "background": 0,
    "body": 9,
    "familiar": 7777,
    "head": 194,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 149,
    "name": "Archmagus Akron of the Sun",
    "background": 1,
    "body": 61,
    "familiar": 116,
    "head": 125,
    "prop": 340,
    "rune": 288
  },
  {
    "idx": 150,
    "name": "Arch-Magician Alessar of Mu",
    "background": 1,
    "body": 10,
    "familiar": 95,
    "head": 232,
    "prop": 323,
    "rune": 293
  },
  {
    "idx": 151,
    "name": "Ixar of the Mount",
    "background": 2,
    "body": 55,
    "familiar": 119,
    "head": 238,
    "prop": 280,
    "rune": 292
  },
  {
    "idx": 152,
    "name": "Hedge Wizard Victoria of the Road",
    "background": 2,
    "body": 31,
    "familiar": 93,
    "head": 208,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 153,
    "name": "Illusionist Aleister of the Oasis",
    "background": 2,
    "body": 58,
    "familiar": 103,
    "head": 141,
    "prop": 273,
    "rune": 285
  },
  {
    "idx": 154,
    "name": "Druid Soya of the Sun",
    "background": 2,
    "body": 60,
    "familiar": 119,
    "head": 214,
    "prop": 325,
    "rune": 299
  },
  {
    "idx": 155,
    "name": "Magus Pumlo of the Hall",
    "background": 1,
    "body": 40,
    "familiar": 114,
    "head": 162,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 156,
    "name": "Magus Nixie of the Lake",
    "background": 2,
    "body": 82,
    "familiar": 115,
    "head": 171,
    "prop": 262,
    "rune": 296
  },
  {
    "idx": 157,
    "name": "Archmagus Hadrien of the Valley",
    "background": 3,
    "body": 54,
    "familiar": 89,
    "head": 189,
    "prop": 255,
    "rune": 288
  },
  {
    "idx": 158,
    "name": "Enchanter Atlanta of the Forest",
    "background": 1,
    "body": 21,
    "familiar": 111,
    "head": 135,
    "prop": 256,
    "rune": 293
  },
  {
    "idx": 159,
    "name": "Charmer Iris of the Plains",
    "background": 0,
    "body": 32,
    "familiar": 93,
    "head": 187,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 160,
    "name": "Daphne of the Wold",
    "background": 0,
    "body": 36,
    "familiar": 101,
    "head": 156,
    "prop": 275,
    "rune": 301
  },
  {
    "idx": 161,
    "name": "Archmagus Aleister of the Palms",
    "background": 2,
    "body": 61,
    "familiar": 114,
    "head": 215,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 162,
    "name": "Hex Mage Atlas of the Gnostics",
    "background": 2,
    "body": 75,
    "familiar": 97,
    "head": 177,
    "prop": 329,
    "rune": 284
  },
  {
    "idx": 163,
    "name": "Scryer Milton of the Keep",
    "background": 1,
    "body": 62,
    "familiar": 94,
    "head": 186,
    "prop": 329,
    "rune": 283
  },
  {
    "idx": 164,
    "name": "Archmagus Pumlo of the Veil",
    "background": 1,
    "body": 29,
    "familiar": 104,
    "head": 233,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 165,
    "name": "Witch Carmilla of the Wood",
    "background": 1,
    "body": 82,
    "familiar": 115,
    "head": 166,
    "prop": 276,
    "rune": 293
  },
  {
    "idx": 166,
    "name": "Enchanter Bayard of the Capital",
    "background": 0,
    "body": 26,
    "familiar": 103,
    "head": 217,
    "prop": 265,
    "rune": 288
  },
  {
    "idx": 167,
    "name": "Faye of the Field",
    "background": 1,
    "body": 31,
    "familiar": 88,
    "head": 131,
    "prop": 310,
    "rune": 303
  },
  {
    "idx": 168,
    "name": "Spellsinger Danny of the Marsh",
    "background": 1,
    "body": 13,
    "familiar": 108,
    "head": 216,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 169,
    "name": "Necromancer Seth of the Mountain",
    "background": 2,
    "body": 79,
    "familiar": 116,
    "head": 205,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 170,
    "name": "Voodoo Priest Impy of the Hollow",
    "background": 0,
    "body": 19,
    "familiar": 7777,
    "head": 200,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 171,
    "name": "Conjurer Galatea of the Wild",
    "background": 2,
    "body": 84,
    "familiar": 90,
    "head": 135,
    "prop": 306,
    "rune": 287
  },
  {
    "idx": 172,
    "name": "Transmuter Alessar of the Sun",
    "background": 2,
    "body": 59,
    "familiar": 93,
    "head": 214,
    "prop": 256,
    "rune": 286
  },
  {
    "idx": 173,
    "name": "Arch-Magician Gwendolin of the Wood",
    "background": 1,
    "body": 37,
    "familiar": 7777,
    "head": 155,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 174,
    "name": "Archmagus Aslan of the Wild",
    "background": 1,
    "body": 44,
    "familiar": 103,
    "head": 206,
    "prop": 326,
    "rune": 302
  },
  {
    "idx": 175,
    "name": "Sage Larissa of the Wood",
    "background": 2,
    "body": 21,
    "familiar": 94,
    "head": 198,
    "prop": 339,
    "rune": 293
  },
  {
    "idx": 176,
    "name": "Enchanter Mina of the Field",
    "background": 0,
    "body": 38,
    "familiar": 110,
    "head": 132,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 177,
    "name": "Shaman Crowley of Mu",
    "background": 0,
    "body": 52,
    "familiar": 105,
    "head": 144,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 178,
    "name": "Chaos Mage Milo of the Hollow",
    "background": 1,
    "body": 14,
    "familiar": 96,
    "head": 186,
    "prop": 309,
    "rune": 293
  },
  {
    "idx": 179,
    "name": "Arch-Magician Silas of the Mist",
    "background": 1,
    "body": 55,
    "familiar": 7777,
    "head": 147,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 180,
    "name": "Geomancer Hagar",
    "background": 1,
    "body": 67,
    "familiar": 107,
    "head": 217,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 181,
    "name": "Void Disciple Voidoth of the Cosmos",
    "background": 2,
    "body": 52,
    "familiar": 120,
    "head": 194,
    "prop": 274,
    "rune": 294
  },
  {
    "idx": 182,
    "name": "Witch Hecate of the Road",
    "background": 3,
    "body": 82,
    "familiar": 106,
    "head": 166,
    "prop": 273,
    "rune": 291
  },
  {
    "idx": 183,
    "name": "Eden of Dreams",
    "background": 0,
    "body": 55,
    "familiar": 120,
    "head": 238,
    "prop": 328,
    "rune": 290
  },
  {
    "idx": 184,
    "name": "Sorcerer Iprix of the Plains",
    "background": 0,
    "body": 41,
    "familiar": 7777,
    "head": 202,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 185,
    "name": "Sage Caligula of the Riviera",
    "background": 2,
    "body": 45,
    "familiar": 120,
    "head": 204,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 186,
    "name": "Alchemist Ozohr of the River",
    "background": 1,
    "body": 12,
    "familiar": 7777,
    "head": 127,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 187,
    "name": "Enchanter Katherine of the Moors",
    "background": 3,
    "body": 22,
    "familiar": 88,
    "head": 139,
    "prop": 270,
    "rune": 298
  },
  {
    "idx": 188,
    "name": "Alchemist Fark of the Veil",
    "background": 0,
    "body": 28,
    "familiar": 7777,
    "head": 207,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 189,
    "name": "Daria of the Lake",
    "background": 1,
    "body": 21,
    "familiar": 103,
    "head": 190,
    "prop": 260,
    "rune": 292
  },
  {
    "idx": 190,
    "name": "Aeromancer Onaxx of the Forest",
    "background": 0,
    "body": 41,
    "familiar": 110,
    "head": 207,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 191,
    "name": "Hedge Wizard Suki of the Grotto",
    "background": 3,
    "body": 82,
    "familiar": 115,
    "head": 171,
    "prop": 276,
    "rune": 290
  },
  {
    "idx": 192,
    "name": "Conjurer Maia of the Canyon",
    "background": 1,
    "body": 21,
    "familiar": 114,
    "head": 135,
    "prop": 273,
    "rune": 296
  },
  {
    "idx": 193,
    "name": "Arch-Magician Gully of the Villa",
    "background": 1,
    "body": 77,
    "familiar": 7777,
    "head": 235,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 194,
    "name": "Alchemist George of the Court",
    "background": 1,
    "body": 40,
    "familiar": 123,
    "head": 231,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 195,
    "name": "Alchemist Rowena of the Quantum Shadow",
    "background": 1,
    "body": 83,
    "familiar": 112,
    "head": 159,
    "prop": 268,
    "rune": 298
  },
  {
    "idx": 196,
    "name": "Conjurer Isaac of the Realm",
    "background": 1,
    "body": 11,
    "familiar": 108,
    "head": 232,
    "prop": 246,
    "rune": 304
  },
  {
    "idx": 197,
    "name": "Arch-Magician Aslan of the Sands",
    "background": 0,
    "body": 58,
    "familiar": 111,
    "head": 204,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 198,
    "name": "Alchemist Moka of the Tower",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 178,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 199,
    "name": "Electromancer Shivra of the Road",
    "background": 3,
    "body": 35,
    "familiar": 103,
    "head": 223,
    "prop": 305,
    "rune": 297
  },
  {
    "idx": 200,
    "name": "Summoner Silas of the Woodlands",
    "background": 0,
    "body": 28,
    "familiar": 114,
    "head": 160,
    "prop": 254,
    "rune": 292
  },
  {
    "idx": 201,
    "name": "Jeldor from the Shadow",
    "background": 1,
    "body": 87,
    "familiar": 7777,
    "head": 127,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 202,
    "name": "Illusionist Bathsheba of the Plains",
    "background": 2,
    "body": 37,
    "familiar": 115,
    "head": 187,
    "prop": 273,
    "rune": 292
  },
  {
    "idx": 203,
    "name": "Battle Mage Angus of the Valley",
    "background": 0,
    "body": 12,
    "familiar": 116,
    "head": 165,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 204,
    "name": "Transmuter Isaac of Avalon",
    "background": 0,
    "body": 6,
    "familiar": 109,
    "head": 162,
    "prop": 256,
    "rune": 303
  },
  {
    "idx": 205,
    "name": "Arch-Magician Nassif of the Villa",
    "background": 1,
    "body": 48,
    "familiar": 7777,
    "head": 164,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 206,
    "name": "Cosmic Mage Bathsheba of the Heath",
    "background": 0,
    "body": 37,
    "familiar": 107,
    "head": 156,
    "prop": 309,
    "rune": 282
  },
  {
    "idx": 207,
    "name": "Arch-Magician Zolona of the Steppe",
    "background": 0,
    "body": 35,
    "familiar": 94,
    "head": 223,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 208,
    "name": "Artificer Lumos of the Tower",
    "background": 1,
    "body": 49,
    "familiar": 90,
    "head": 192,
    "prop": 260,
    "rune": 282
  },
  {
    "idx": 209,
    "name": "Geomancer Merlon of the Reach",
    "background": 2,
    "body": 82,
    "familiar": 123,
    "head": 192,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 210,
    "name": "Sorcerer Apollo of the Hills",
    "background": 1,
    "body": 15,
    "familiar": 93,
    "head": 211,
    "prop": 309,
    "rune": 304
  },
  {
    "idx": 211,
    "name": "Enchanter Arabella of the Wold",
    "background": 2,
    "body": 21,
    "familiar": 7777,
    "head": 198,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 212,
    "name": "Archmagus Samuel of the Belfry",
    "background": 1,
    "body": 50,
    "familiar": 105,
    "head": 204,
    "prop": 329,
    "rune": 297
  },
  {
    "idx": 213,
    "name": "Pyromancer Soya of the Astral Plane",
    "background": 0,
    "body": 67,
    "familiar": 111,
    "head": 212,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 214,
    "name": "Sorcerer Apollo of Avalon",
    "background": 0,
    "body": 6,
    "familiar": 7777,
    "head": 174,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 215,
    "name": "Druid Ming of the Hollow",
    "background": 1,
    "body": 22,
    "familiar": 123,
    "head": 180,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 216,
    "name": "Hedge Wizard Hashim of the Atheneum",
    "background": 2,
    "body": 7,
    "familiar": 104,
    "head": 237,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 217,
    "name": "Enchanter Asphodel of the Grotto",
    "background": 0,
    "body": 21,
    "familiar": 104,
    "head": 187,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 218,
    "name": "Archmagus Orpheus of the Keep",
    "background": 2,
    "body": 48,
    "familiar": 107,
    "head": 162,
    "prop": 322,
    "rune": 304
  },
  {
    "idx": 219,
    "name": "Holy Magus Illuminus of the Grotto",
    "background": 3,
    "body": 17,
    "familiar": 112,
    "head": 170,
    "prop": 253,
    "rune": 290
  },
  {
    "idx": 220,
    "name": "Chaos Mage Properpine of the Reach",
    "background": 0,
    "body": 36,
    "familiar": 104,
    "head": 159,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 221,
    "name": "Mystic Merlon of the Temple",
    "background": 3,
    "body": 6,
    "familiar": 103,
    "head": 147,
    "prop": 339,
    "rune": 299
  },
  {
    "idx": 222,
    "name": "Shaman Molek of the Valley",
    "background": 3,
    "body": 43,
    "familiar": 99,
    "head": 193,
    "prop": 329,
    "rune": 297
  },
  {
    "idx": 223,
    "name": "Thaumaturge George of the Havens",
    "background": 0,
    "body": 75,
    "familiar": 89,
    "head": 141,
    "prop": 338,
    "rune": 295
  },
  {
    "idx": 224,
    "name": "Sage Silas of the Hall",
    "background": 2,
    "body": 26,
    "familiar": 105,
    "head": 189,
    "prop": 277,
    "rune": 304
  },
  {
    "idx": 225,
    "name": "Alchemist Robert of the Canyon",
    "background": 0,
    "body": 23,
    "familiar": 90,
    "head": 203,
    "prop": 326,
    "rune": 303
  },
  {
    "idx": 226,
    "name": "Conjurer Zhan of the Heath",
    "background": 1,
    "body": 38,
    "familiar": 110,
    "head": 180,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 227,
    "name": "Conjurer Samuel of the Tower",
    "background": 2,
    "body": 76,
    "familiar": 107,
    "head": 206,
    "prop": 339,
    "rune": 303
  },
  {
    "idx": 228,
    "name": "Archmagus Adrienne of the Marsh",
    "background": 3,
    "body": 41,
    "familiar": 105,
    "head": 208,
    "prop": 339,
    "rune": 301
  },
  {
    "idx": 229,
    "name": "Wild Mage Jiang of the Mount",
    "background": 3,
    "body": 54,
    "familiar": 109,
    "head": 236,
    "prop": 320,
    "rune": 296
  },
  {
    "idx": 230,
    "name": "Evoker Jadis of the Plains",
    "background": 1,
    "body": 22,
    "familiar": 104,
    "head": 131,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 231,
    "name": "Artificer Apollo of Mu",
    "background": 1,
    "body": 67,
    "familiar": 7777,
    "head": 162,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 232,
    "name": "Alchemist Malcom of the Platonic Shadow",
    "background": 0,
    "body": 8,
    "familiar": 88,
    "head": 205,
    "prop": 245,
    "rune": 293
  },
  {
    "idx": 233,
    "name": "Enchanter Daphne of the Steppe",
    "background": 1,
    "body": 38,
    "familiar": 119,
    "head": 135,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 234,
    "name": "Witch Edge of the Pit",
    "background": 2,
    "body": 83,
    "familiar": 123,
    "head": 194,
    "prop": 321,
    "rune": 284
  },
  {
    "idx": 235,
    "name": "Summoner Uur'lok of the Circle",
    "background": 2,
    "body": 30,
    "familiar": 94,
    "head": 235,
    "prop": 254,
    "rune": 288
  },
  {
    "idx": 236,
    "name": "Witch Sylvia of the Wold",
    "background": 1,
    "body": 39,
    "familiar": 123,
    "head": 155,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 237,
    "name": "Battlemage Faye of the Lake",
    "background": 0,
    "body": 21,
    "familiar": 94,
    "head": 190,
    "prop": 309,
    "rune": 304
  },
  {
    "idx": 238,
    "name": "Alchemist Lumos of Dreams",
    "background": 1,
    "body": 54,
    "familiar": 105,
    "head": 189,
    "prop": 271,
    "rune": 284
  },
  {
    "idx": 239,
    "name": "Wild Mage Xiaobo of Elysium",
    "background": 0,
    "body": 54,
    "familiar": 123,
    "head": 236,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 240,
    "name": "Spellsinger Celah of Avalon",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 221,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 241,
    "name": "Fortune Teller Argus of El Dorado",
    "background": 0,
    "body": 78,
    "familiar": 120,
    "head": 189,
    "prop": 251,
    "rune": 297
  },
  {
    "idx": 242,
    "name": "Clairvoyant Nassif of the Plains",
    "background": 0,
    "body": 19,
    "familiar": 105,
    "head": 164,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 243,
    "name": "Archmagus Remus of the Inferno",
    "background": 1,
    "body": 85,
    "familiar": 101,
    "head": 212,
    "prop": 334,
    "rune": 303
  },
  {
    "idx": 244,
    "name": "Ice Mage Robert",
    "background": 0,
    "body": 65,
    "familiar": 120,
    "head": 129,
    "prop": 273,
    "rune": 299
  },
  {
    "idx": 245,
    "name": "Archmagus Alessar of the Havens",
    "background": 2,
    "body": 11,
    "familiar": 112,
    "head": 197,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 246,
    "name": "Archmagus Solomon from the Abyss",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 202,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 247,
    "name": "Magus Amir of the Forest",
    "background": 1,
    "body": 82,
    "familiar": 112,
    "head": 162,
    "prop": 249,
    "rune": 299
  },
  {
    "idx": 248,
    "name": "Uvlius of the Hills",
    "background": 0,
    "body": 13,
    "familiar": 107,
    "head": 160,
    "prop": 254,
    "rune": 300
  },
  {
    "idx": 249,
    "name": "Archmagus Allistair of the Reach",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 174,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 250,
    "name": "Hedge Wizard Enigma of the Hills",
    "background": 3,
    "body": 45,
    "familiar": 97,
    "head": 209,
    "prop": 312,
    "rune": 297
  },
  {
    "idx": 251,
    "name": "Battle Mage Blaise of the Sun",
    "background": 0,
    "body": 58,
    "familiar": 94,
    "head": 177,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 252,
    "name": "Chaos Mage Eden of the Bastion",
    "background": 3,
    "body": 77,
    "familiar": 103,
    "head": 233,
    "prop": 339,
    "rune": 7777
  },
  {
    "idx": 253,
    "name": "Archmagus Zaros of the Waste",
    "background": 0,
    "body": 86,
    "familiar": 105,
    "head": 197,
    "prop": 248,
    "rune": 300
  },
  {
    "idx": 254,
    "name": "Sorcerer Casper of the Valley",
    "background": 0,
    "body": 41,
    "familiar": 120,
    "head": 231,
    "prop": 309,
    "rune": 304
  },
  {
    "idx": 255,
    "name": "Hedge Wizard Poppy of the Havens",
    "background": 2,
    "body": 63,
    "familiar": 110,
    "head": 171,
    "prop": 273,
    "rune": 282
  },
  {
    "idx": 256,
    "name": "Hedge Wizard Brown Cow of the Steppe",
    "background": 0,
    "body": 84,
    "familiar": 89,
    "head": 193,
    "prop": 276,
    "rune": 299
  },
  {
    "idx": 257,
    "name": "Witch Lenora of the Grotto",
    "background": 2,
    "body": 82,
    "familiar": 115,
    "head": 155,
    "prop": 268,
    "rune": 287
  },
  {
    "idx": 258,
    "name": "Alchemist Ramiz of the Bastion",
    "background": 0,
    "body": 48,
    "familiar": 93,
    "head": 128,
    "prop": 271,
    "rune": 291
  },
  {
    "idx": 259,
    "name": "Magus Yuki of the Bastion",
    "background": 1,
    "body": 76,
    "familiar": 95,
    "head": 126,
    "prop": 263,
    "rune": 298
  },
  {
    "idx": 260,
    "name": "Ghost Eater Eden",
    "background": 0,
    "body": 67,
    "familiar": 93,
    "head": 147,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 261,
    "name": "Shadow Mage Katherine of the Marsh",
    "background": 0,
    "body": 34,
    "familiar": 94,
    "head": 132,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 262,
    "name": "Archmagus Ethan of the Belfry",
    "background": 3,
    "body": 50,
    "familiar": 95,
    "head": 173,
    "prop": 245,
    "rune": 285
  },
  {
    "idx": 263,
    "name": "Battle Mage Axel of the Cosmos",
    "background": 2,
    "body": 11,
    "familiar": 115,
    "head": 204,
    "prop": 247,
    "rune": 296
  },
  {
    "idx": 264,
    "name": "Magus Hothor of the Wood",
    "background": 2,
    "body": 79,
    "familiar": 89,
    "head": 218,
    "prop": 318,
    "rune": 296
  },
  {
    "idx": 265,
    "name": "Geomancer Ai of the Plains",
    "background": 2,
    "body": 34,
    "familiar": 120,
    "head": 180,
    "prop": 308,
    "rune": 284
  },
  {
    "idx": 266,
    "name": "Witch Shivra of the Wood",
    "background": 1,
    "body": 44,
    "familiar": 7777,
    "head": 155,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 267,
    "name": "Cryptomancer Lavinia of the Thorn",
    "background": 0,
    "body": 29,
    "familiar": 108,
    "head": 176,
    "prop": 310,
    "rune": 291
  },
  {
    "idx": 268,
    "name": "Aeromancer Bojangles of the Sea",
    "background": 3,
    "body": 57,
    "familiar": 97,
    "head": 201,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 269,
    "name": "Necromancer Norix of the Heath",
    "background": 1,
    "body": 79,
    "familiar": 107,
    "head": 205,
    "prop": 305,
    "rune": 292
  },
  {
    "idx": 270,
    "name": "Sage Ixar of the Wild",
    "background": 0,
    "body": 15,
    "familiar": 115,
    "head": 162,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 271,
    "name": "Shaman Xerxes of the Realm",
    "background": 2,
    "body": 30,
    "familiar": 105,
    "head": 205,
    "prop": 265,
    "rune": 304
  },
  {
    "idx": 272,
    "name": "Druid Corky of the Brambles",
    "background": 1,
    "body": 84,
    "familiar": 7777,
    "head": 201,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 273,
    "name": "Druid Quddus of the Grotto",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 164,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 274,
    "name": "Hydromancer Zaros of Atlantis",
    "background": 2,
    "body": 80,
    "familiar": 104,
    "head": 228,
    "prop": 314,
    "rune": 300
  },
  {
    "idx": 275,
    "name": "Alchemist Axel of the Wood",
    "background": 0,
    "body": 82,
    "familiar": 111,
    "head": 133,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 276,
    "name": "Alchemist Isaac of the Dunes",
    "background": 1,
    "body": 60,
    "familiar": 111,
    "head": 226,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 277,
    "name": "Witch Zelda of the River",
    "background": 2,
    "body": 38,
    "familiar": 104,
    "head": 223,
    "prop": 340,
    "rune": 283
  },
  {
    "idx": 278,
    "name": "Witch Lucinda of the Brambles",
    "background": 1,
    "body": 18,
    "familiar": 115,
    "head": 155,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 279,
    "name": "Mystic Ophelia of Avalon",
    "background": 2,
    "body": 6,
    "familiar": 103,
    "head": 159,
    "prop": 338,
    "rune": 291
  },
  {
    "idx": 280,
    "name": "Sorcerer Udor of the Havens",
    "background": 0,
    "body": 7,
    "familiar": 115,
    "head": 192,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 281,
    "name": "Battle Mage Magnus of the Wild",
    "background": 1,
    "body": 15,
    "familiar": 115,
    "head": 216,
    "prop": 312,
    "rune": 292
  },
  {
    "idx": 282,
    "name": "Charmer Bathsheba of the Wood",
    "background": 2,
    "body": 37,
    "familiar": 106,
    "head": 135,
    "prop": 310,
    "rune": 285
  },
  {
    "idx": 283,
    "name": "Hex Mage Trollin of the Wold",
    "background": 2,
    "body": 18,
    "familiar": 95,
    "head": 235,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 284,
    "name": "Alchemist Oberon of the Wold",
    "background": 0,
    "body": 79,
    "familiar": 114,
    "head": 147,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 285,
    "name": "Archmagus Aleister of the Desert",
    "background": 2,
    "body": 27,
    "familiar": 99,
    "head": 228,
    "prop": 315,
    "rune": 292
  },
  {
    "idx": 286,
    "name": "Archmagus Amir of the Quantum Downs",
    "background": 0,
    "body": 67,
    "familiar": 90,
    "head": 238,
    "prop": 261,
    "rune": 300
  },
  {
    "idx": 287,
    "name": "Enchanter Aldus of the Palms",
    "background": 1,
    "body": 61,
    "familiar": 123,
    "head": 160,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 288,
    "name": "Artificer Daria of the Grotto",
    "background": 0,
    "body": 32,
    "familiar": 90,
    "head": 135,
    "prop": 260,
    "rune": 294
  },
  {
    "idx": 289,
    "name": "Archmagus Udor of the Hills",
    "background": 1,
    "body": 44,
    "familiar": 109,
    "head": 199,
    "prop": 245,
    "rune": 292
  },
  {
    "idx": 290,
    "name": "Archmagus Merlon of the Secret Fire",
    "background": 1,
    "body": 85,
    "familiar": 123,
    "head": 233,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 291,
    "name": "Shaman Celah of the Mist",
    "background": 2,
    "body": 7,
    "familiar": 119,
    "head": 199,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 292,
    "name": "Magus Basil of the Astral Plane",
    "background": 0,
    "body": 67,
    "familiar": 117,
    "head": 162,
    "prop": 322,
    "rune": 304
  },
  {
    "idx": 293,
    "name": "Battle Mage Dutorn of the Morning Star",
    "background": 3,
    "body": 87,
    "familiar": 97,
    "head": 213,
    "prop": 274,
    "rune": 300
  },
  {
    "idx": 294,
    "name": "Sage Ariadne of the Wood",
    "background": 3,
    "body": 36,
    "familiar": 105,
    "head": 190,
    "prop": 339,
    "rune": 298
  },
  {
    "idx": 295,
    "name": "Enchanter Larissa of the Hollow",
    "background": 2,
    "body": 22,
    "familiar": 109,
    "head": 139,
    "prop": 249,
    "rune": 291
  },
  {
    "idx": 296,
    "name": "Runecaster Asmodeus of the Belfry",
    "background": 3,
    "body": 50,
    "familiar": 101,
    "head": 242,
    "prop": 324,
    "rune": 292
  },
  {
    "idx": 297,
    "name": "Arcanist Scorch",
    "background": 2,
    "body": 87,
    "familiar": 89,
    "head": 158,
    "prop": 250,
    "rune": 285
  },
  {
    "idx": 298,
    "name": "Illusionist Pozzik of the Veil",
    "background": 1,
    "body": 29,
    "familiar": 108,
    "head": 200,
    "prop": 306,
    "rune": 290
  },
  {
    "idx": 299,
    "name": "Cosmic Mage Jabir of the Oasis",
    "background": 0,
    "body": 27,
    "familiar": 94,
    "head": 219,
    "prop": 335,
    "rune": 299
  },
  {
    "idx": 300,
    "name": "Battle Mage Darick of the Plains",
    "background": 0,
    "body": 14,
    "familiar": 89,
    "head": 204,
    "prop": 308,
    "rune": 302
  },
  {
    "idx": 301,
    "name": "Battle Mage Homer of Atlantis",
    "background": 1,
    "body": 57,
    "familiar": 112,
    "head": 165,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 302,
    "name": "Artificer Aldus of the Mist",
    "background": 0,
    "body": 6,
    "familiar": 120,
    "head": 127,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 303,
    "name": "Enchanter Sarah of the Hollow",
    "background": 3,
    "body": 32,
    "familiar": 93,
    "head": 190,
    "prop": 255,
    "rune": 295
  },
  {
    "idx": 304,
    "name": "Archmagus Merlon of the Keep",
    "background": 0,
    "body": 26,
    "familiar": 97,
    "head": 232,
    "prop": 315,
    "rune": 291
  },
  {
    "idx": 305,
    "name": "The Red Witch",
    "background": 1,
    "body": 34,
    "familiar": 97,
    "head": 191,
    "prop": 309,
    "rune": 7777
  },
  {
    "idx": 306,
    "name": "Enchanter Ariadne of the Road",
    "background": 2,
    "body": 23,
    "familiar": 105,
    "head": 135,
    "prop": 312,
    "rune": 282
  },
  {
    "idx": 307,
    "name": "Adept Argus of the Sands",
    "background": 0,
    "body": 61,
    "familiar": 95,
    "head": 215,
    "prop": 328,
    "rune": 300
  },
  {
    "idx": 308,
    "name": "Druid Alessar of the Cosmos",
    "background": 2,
    "body": 11,
    "familiar": 93,
    "head": 226,
    "prop": 323,
    "rune": 299
  },
  {
    "idx": 309,
    "name": "Adept Darick of the Fey",
    "background": 0,
    "body": 29,
    "familiar": 104,
    "head": 203,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 310,
    "name": "Druid Brutus of the Brambles",
    "background": 0,
    "body": 45,
    "familiar": 97,
    "head": 133,
    "prop": 326,
    "rune": 295
  },
  {
    "idx": 311,
    "name": "Conjurer Finn of the Hollow",
    "background": 1,
    "body": 45,
    "familiar": 97,
    "head": 129,
    "prop": 339,
    "rune": 295
  },
  {
    "idx": 312,
    "name": "Holy Monk Edge of Dreams",
    "background": 1,
    "body": 6,
    "familiar": 110,
    "head": 207,
    "prop": 315,
    "rune": 285
  },
  {
    "idx": 313,
    "name": "Druid Samuel of the Mount",
    "background": 3,
    "body": 55,
    "familiar": 111,
    "head": 133,
    "prop": 319,
    "rune": 282
  },
  {
    "idx": 314,
    "name": "Pyromancer Burnside of the Wood",
    "background": 0,
    "body": 84,
    "familiar": 104,
    "head": 158,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 315,
    "name": "Archmagus Hecate of the Moors",
    "background": 3,
    "body": 38,
    "familiar": 93,
    "head": 176,
    "prop": 334,
    "rune": 283
  },
  {
    "idx": 316,
    "name": "Fortune Teller Takao of the Realm",
    "background": 0,
    "body": 24,
    "familiar": 117,
    "head": 243,
    "prop": 252,
    "rune": 289
  },
  {
    "idx": 317,
    "name": "Battle Mage Dutorn of the Hills",
    "background": 3,
    "body": 82,
    "familiar": 111,
    "head": 133,
    "prop": 316,
    "rune": 300
  },
  {
    "idx": 318,
    "name": "Voodoo Priest Gaspard of the Toadstools",
    "background": 2,
    "body": 30,
    "familiar": 119,
    "head": 179,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 319,
    "name": "Alchemist Victoria of the Realm",
    "background": 1,
    "body": 29,
    "familiar": 117,
    "head": 190,
    "prop": 270,
    "rune": 298
  },
  {
    "idx": 320,
    "name": "Augurer Hagatha of the Valley",
    "background": 0,
    "body": 38,
    "familiar": 115,
    "head": 166,
    "prop": 329,
    "rune": 298
  },
  {
    "idx": 321,
    "name": "Sorcerer Alatar of the Mount",
    "background": 0,
    "body": 6,
    "familiar": 110,
    "head": 186,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 322,
    "name": "Shaman Mushy of the Cold",
    "background": 0,
    "body": 65,
    "familiar": 107,
    "head": 195,
    "prop": 316,
    "rune": 290
  },
  {
    "idx": 323,
    "name": "Alchemist Shivra of the Grotto",
    "background": 1,
    "body": 32,
    "familiar": 93,
    "head": 176,
    "prop": 270,
    "rune": 292
  },
  {
    "idx": 324,
    "name": "Arcanist Gunthor",
    "background": 0,
    "body": 9,
    "familiar": 99,
    "head": 220,
    "prop": 266,
    "rune": 297
  },
  {
    "idx": 325,
    "name": "Druid Anton of the Havens",
    "background": 2,
    "body": 63,
    "familiar": 117,
    "head": 205,
    "prop": 265,
    "rune": 299
  },
  {
    "idx": 326,
    "name": "Ice Mage Marceau of the Cold",
    "background": 1,
    "body": 73,
    "familiar": 93,
    "head": 149,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 327,
    "name": "Battle Mage Ulysse of the Moors",
    "background": 0,
    "body": 82,
    "familiar": 111,
    "head": 220,
    "prop": 271,
    "rune": 284
  },
  {
    "idx": 328,
    "name": "Thaumaturge Aldus of the Sun",
    "background": 2,
    "body": 58,
    "familiar": 111,
    "head": 238,
    "prop": 332,
    "rune": 291
  },
  {
    "idx": 329,
    "name": "Bard Poppy of the Moors",
    "background": 1,
    "body": 82,
    "familiar": 7777,
    "head": 171,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 330,
    "name": "Hedge Wizard Rita of the Plains",
    "background": 3,
    "body": 36,
    "familiar": 101,
    "head": 166,
    "prop": 273,
    "rune": 292
  },
  {
    "idx": 331,
    "name": "Ghost Eater Judas of the Tower",
    "background": 0,
    "body": 77,
    "familiar": 123,
    "head": 205,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 332,
    "name": "Witch Sylvia of the Plains",
    "background": 2,
    "body": 36,
    "familiar": 120,
    "head": 209,
    "prop": 271,
    "rune": 290
  },
  {
    "idx": 333,
    "name": "Druid Eizo of the Plains",
    "background": 2,
    "body": 44,
    "familiar": 7777,
    "head": 233,
    "prop": 337,
    "rune": 290
  },
  {
    "idx": 334,
    "name": "Battle Mage Wolfram of the Brambles",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 183,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 335,
    "name": "Enchanter Oxnard of the Marsh",
    "background": 1,
    "body": 42,
    "familiar": 114,
    "head": 193,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 336,
    "name": "Holy Magus Ilu of the Ice",
    "background": 2,
    "body": 73,
    "familiar": 95,
    "head": 170,
    "prop": 250,
    "rune": 304
  },
  {
    "idx": 337,
    "name": "Sorcerer Ming of the Secret Fire",
    "background": 1,
    "body": 87,
    "familiar": 95,
    "head": 180,
    "prop": 256,
    "rune": 300
  },
  {
    "idx": 338,
    "name": "Sorcerer Chooki of the Riviera",
    "background": 2,
    "body": 79,
    "familiar": 89,
    "head": 142,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 339,
    "name": "Solomon of the River",
    "background": 3,
    "body": 17,
    "familiar": 120,
    "head": 231,
    "prop": 306,
    "rune": 291
  },
  {
    "idx": 340,
    "name": "Conjurer Chiyo of the Citadel",
    "background": 2,
    "body": 40,
    "familiar": 95,
    "head": 126,
    "prop": 273,
    "rune": 299
  },
  {
    "idx": 341,
    "name": "Mystic Caligula of the Lake",
    "background": 0,
    "body": 18,
    "familiar": 115,
    "head": 182,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 342,
    "name": "Shadow Mage Hagar of the Dunes",
    "background": 2,
    "body": 58,
    "familiar": 94,
    "head": 177,
    "prop": 307,
    "rune": 291
  },
  {
    "idx": 343,
    "name": "Witch Marceline of the Wood",
    "background": 0,
    "body": 35,
    "familiar": 96,
    "head": 166,
    "prop": 268,
    "rune": 303
  },
  {
    "idx": 344,
    "name": "Archmagus Suki of the Hall",
    "background": 2,
    "body": 76,
    "familiar": 112,
    "head": 235,
    "prop": 317,
    "rune": 302
  },
  {
    "idx": 345,
    "name": "Archmagus Milo of El Dorado",
    "background": 2,
    "body": 74,
    "familiar": 123,
    "head": 160,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 346,
    "name": "Runecaster David of the Oasis",
    "background": 1,
    "body": 27,
    "familiar": 97,
    "head": 162,
    "prop": 256,
    "rune": 287
  },
  {
    "idx": 347,
    "name": "Magus Pumlo of the Havens",
    "background": 2,
    "body": 49,
    "familiar": 111,
    "head": 212,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 348,
    "name": "Shadow Mage Pandora of the Reach",
    "background": 1,
    "body": 39,
    "familiar": 105,
    "head": 208,
    "prop": 332,
    "rune": 282
  },
  {
    "idx": 349,
    "name": "Artificer Hanataka of the Keep",
    "background": 0,
    "body": 55,
    "familiar": 90,
    "head": 243,
    "prop": 261,
    "rune": 285
  },
  {
    "idx": 350,
    "name": "George of Alfheim",
    "background": 1,
    "body": 30,
    "familiar": 104,
    "head": 229,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 351,
    "name": "Shaman Embrose of the Palms",
    "background": 1,
    "body": 27,
    "familiar": 105,
    "head": 158,
    "prop": 327,
    "rune": 283
  },
  {
    "idx": 352,
    "name": "Sage Zeromus of the Garden",
    "background": 1,
    "body": 28,
    "familiar": 90,
    "head": 194,
    "prop": 252,
    "rune": 303
  },
  {
    "idx": 353,
    "name": "Battle Mage Bayard of the Bibliotheca",
    "background": 0,
    "body": 54,
    "familiar": 89,
    "head": 165,
    "prop": 316,
    "rune": 298
  },
  {
    "idx": 354,
    "name": "Druid Larissa of the Circle",
    "background": 2,
    "body": 30,
    "familiar": 88,
    "head": 187,
    "prop": 325,
    "rune": 294
  },
  {
    "idx": 355,
    "name": "Holy Monk Onaxx of the Marsh",
    "background": 0,
    "body": 13,
    "familiar": 105,
    "head": 207,
    "prop": 314,
    "rune": 301
  },
  {
    "idx": 356,
    "name": "Hedge Wizard Dante of Xanadu",
    "background": 0,
    "body": 9,
    "familiar": 111,
    "head": 204,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 357,
    "name": "Conjurer Nixie of the Swell",
    "background": 2,
    "body": 57,
    "familiar": 109,
    "head": 171,
    "prop": 311,
    "rune": 304
  },
  {
    "idx": 358,
    "name": "Alchemist Eden of the Psychic Leap",
    "background": 2,
    "body": 8,
    "familiar": 120,
    "head": 221,
    "prop": 267,
    "rune": 283
  },
  {
    "idx": 359,
    "name": "Enchanter Daria of the Wood",
    "background": 0,
    "body": 35,
    "familiar": 114,
    "head": 187,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 360,
    "name": "Hedge Wizard Jerret of the Swell",
    "background": 0,
    "body": 57,
    "familiar": 123,
    "head": 230,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 361,
    "name": "Illusionist Gunthor of the Rock",
    "background": 1,
    "body": 27,
    "familiar": 88,
    "head": 129,
    "prop": 273,
    "rune": 292
  },
  {
    "idx": 362,
    "name": "Alchemist Celah of Mu",
    "background": 2,
    "body": 52,
    "familiar": 120,
    "head": 127,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 363,
    "name": "Magus Raul of the Veil",
    "background": 1,
    "body": 29,
    "familiar": 123,
    "head": 125,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 364,
    "name": "Wild Mage Samuel of the Villa",
    "background": 0,
    "body": 40,
    "familiar": 111,
    "head": 165,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 365,
    "name": "Cronus",
    "background": 0,
    "body": 83,
    "familiar": 109,
    "head": 212,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 366,
    "name": "Druid Isaac of the Court",
    "background": 0,
    "body": 76,
    "familiar": 88,
    "head": 230,
    "prop": 264,
    "rune": 303
  },
  {
    "idx": 367,
    "name": "Illusionist Udor of the Ether",
    "background": 0,
    "body": 52,
    "familiar": 120,
    "head": 238,
    "prop": 273,
    "rune": 283
  },
  {
    "idx": 368,
    "name": "Calista of the Wood",
    "background": 0,
    "body": 36,
    "familiar": 104,
    "head": 139,
    "prop": 276,
    "rune": 284
  },
  {
    "idx": 369,
    "name": "Enchanter Ariadne of the Plains",
    "background": 0,
    "body": 38,
    "familiar": 120,
    "head": 208,
    "prop": 311,
    "rune": 303
  },
  {
    "idx": 370,
    "name": "Thaumaturge Daria of the Hills",
    "background": 0,
    "body": 31,
    "familiar": 88,
    "head": 191,
    "prop": 339,
    "rune": 296
  },
  {
    "idx": 371,
    "name": "Geomancer Hansel of the Marsh",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 182,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 372,
    "name": "Archmagus George of the Moors",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 174,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 373,
    "name": "Sorcerer David of the Sacred Pillars",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 174,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 374,
    "name": "Sorcerer Remus of the Capital",
    "background": 1,
    "body": 74,
    "familiar": 7777,
    "head": 227,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 375,
    "name": "Artificer Daria of the Cosmos",
    "background": 2,
    "body": 8,
    "familiar": 88,
    "head": 187,
    "prop": 258,
    "rune": 290
  },
  {
    "idx": 376,
    "name": "Salvatore of the Road",
    "background": 0,
    "body": 42,
    "familiar": 7777,
    "head": 174,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 377,
    "name": "Hex Mage Orpheus of the Quantum Shadow",
    "background": 1,
    "body": 87,
    "familiar": 7777,
    "head": 221,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 378,
    "name": "Magus Wazir of the Dunes",
    "background": 0,
    "body": 5,
    "familiar": 95,
    "head": 142,
    "prop": 317,
    "rune": 299
  },
  {
    "idx": 379,
    "name": "Archmagus Eden of the Hall",
    "background": 1,
    "body": 74,
    "familiar": 101,
    "head": 185,
    "prop": 246,
    "rune": 300
  },
  {
    "idx": 380,
    "name": "Alchemist Alessar of the Quantum Shadow",
    "background": 2,
    "body": 85,
    "familiar": 90,
    "head": 233,
    "prop": 267,
    "rune": 303
  },
  {
    "idx": 381,
    "name": "Archmagus Amir from the Shadow",
    "background": 1,
    "body": 85,
    "familiar": 115,
    "head": 221,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 382,
    "name": "Battle Mage Blaise of the Court",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 183,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 383,
    "name": "Shaman Devon of the Valley",
    "background": 1,
    "body": 50,
    "familiar": 116,
    "head": 190,
    "prop": 265,
    "rune": 297
  },
  {
    "idx": 384,
    "name": "Enchanter Diana of the Lake",
    "background": 0,
    "body": 44,
    "familiar": 115,
    "head": 190,
    "prop": 273,
    "rune": 294
  },
  {
    "idx": 385,
    "name": "Archmagus Ofaris",
    "background": 2,
    "body": 52,
    "familiar": 93,
    "head": 127,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 386,
    "name": "Sorcerer Crowley of the Platonic Shadow",
    "background": 1,
    "body": 11,
    "familiar": 123,
    "head": 211,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 387,
    "name": "Illusionist Venga of the Wood",
    "background": 3,
    "body": 14,
    "familiar": 99,
    "head": 142,
    "prop": 246,
    "rune": 286
  },
  {
    "idx": 388,
    "name": "Sorcerer Iprix of the River",
    "background": 0,
    "body": 44,
    "familiar": 123,
    "head": 231,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 389,
    "name": "Lumos of the Havens",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 214,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 390,
    "name": "Pyromancer Helix of the Toadstools",
    "background": 0,
    "body": 28,
    "familiar": 113,
    "head": 235,
    "prop": 310,
    "rune": 300
  },
  {
    "idx": 391,
    "name": "Enchanter Ariadne of the Wold",
    "background": 2,
    "body": 22,
    "familiar": 95,
    "head": 191,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 392,
    "name": "Archmagus Eric of the North",
    "background": 1,
    "body": 65,
    "familiar": 89,
    "head": 133,
    "prop": 316,
    "rune": 7777
  },
  {
    "idx": 393,
    "name": "Adept David of the Tower",
    "background": 0,
    "body": 74,
    "familiar": 93,
    "head": 214,
    "prop": 249,
    "rune": 301
  },
  {
    "idx": 394,
    "name": "Sorcerer Milton of the Atheneum",
    "background": 1,
    "body": 55,
    "familiar": 116,
    "head": 212,
    "prop": 269,
    "rune": 294
  },
  {
    "idx": 395,
    "name": "Battle Mage Talon of the Field",
    "background": 2,
    "body": 17,
    "familiar": 95,
    "head": 188,
    "prop": 308,
    "rune": 283
  },
  {
    "idx": 396,
    "name": "Merlon of the Dunes",
    "background": 1,
    "body": 58,
    "familiar": 7777,
    "head": 228,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 397,
    "name": "Chronomancer Azahl of the Realm",
    "background": 2,
    "body": 28,
    "familiar": 93,
    "head": 215,
    "prop": 259,
    "rune": 296
  },
  {
    "idx": 398,
    "name": "Hedge Wizard Edge of the Citadel",
    "background": 1,
    "body": 74,
    "familiar": 116,
    "head": 194,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 399,
    "name": "Archmagus Alessar of the Marsh",
    "background": 1,
    "body": 82,
    "familiar": 104,
    "head": 228,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 400,
    "name": "Illusionist Fumiko of the Hills",
    "background": 1,
    "body": 36,
    "familiar": 94,
    "head": 126,
    "prop": 273,
    "rune": 291
  },
  {
    "idx": 401,
    "name": "Hedge Wizard Kalo of the Capital",
    "background": 1,
    "body": 77,
    "familiar": 7777,
    "head": 171,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 402,
    "name": "Enchanter Faye of the Steppe",
    "background": 2,
    "body": 31,
    "familiar": 90,
    "head": 208,
    "prop": 260,
    "rune": 299
  },
  {
    "idx": 403,
    "name": "Charmer Devon of Elysium",
    "background": 1,
    "body": 7,
    "familiar": 88,
    "head": 130,
    "prop": 270,
    "rune": 300
  },
  {
    "idx": 404,
    "name": "Hedge Wizard Imeena of the Plains",
    "background": 0,
    "body": 33,
    "familiar": 108,
    "head": 223,
    "prop": 326,
    "rune": 285
  },
  {
    "idx": 405,
    "name": "Larissa of Alfheim",
    "background": 1,
    "body": 28,
    "familiar": 110,
    "head": 191,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 406,
    "name": "Sorcerer Ilyas of Cuckoo Land",
    "background": 0,
    "body": 30,
    "familiar": 7777,
    "head": 164,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 407,
    "name": "Sorcerer Taqi of the Desert",
    "background": 1,
    "body": 27,
    "familiar": 94,
    "head": 219,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 408,
    "name": "Alchemist Atlanta of the Lake",
    "background": 3,
    "body": 34,
    "familiar": 101,
    "head": 156,
    "prop": 271,
    "rune": 289
  },
  {
    "idx": 409,
    "name": "Magus Liliana of the Moors",
    "background": 2,
    "body": 82,
    "familiar": 119,
    "head": 159,
    "prop": 262,
    "rune": 287
  },
  {
    "idx": 410,
    "name": "Archmagus Nikolas of Dreams",
    "background": 0,
    "body": 7,
    "familiar": 109,
    "head": 214,
    "prop": 315,
    "rune": 302
  },
  {
    "idx": 411,
    "name": "Conjurer Alessar of Alfheim",
    "background": 2,
    "body": 28,
    "familiar": 94,
    "head": 196,
    "prop": 273,
    "rune": 296
  },
  {
    "idx": 412,
    "name": "Arch-Magician Jasper of the Rainbow",
    "background": 3,
    "body": 64,
    "familiar": 108,
    "head": 201,
    "prop": 306,
    "rune": 303
  },
  {
    "idx": 413,
    "name": "Mystic Axel of the Villa",
    "background": 3,
    "body": 26,
    "familiar": 109,
    "head": 217,
    "prop": 313,
    "rune": 292
  },
  {
    "idx": 414,
    "name": "Adept Leah of the Villa",
    "background": 0,
    "body": 76,
    "familiar": 103,
    "head": 139,
    "prop": 339,
    "rune": 291
  },
  {
    "idx": 415,
    "name": "Archmagus  of the Sacred Pillars",
    "background": 1,
    "body": 6,
    "familiar": 114,
    "head": 207,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 416,
    "name": "Conjurer Rita of the Brambles",
    "background": 2,
    "body": 33,
    "familiar": 120,
    "head": 223,
    "prop": 339,
    "rune": 287
  },
  {
    "idx": 417,
    "name": "Witch Juniper of the Brambles",
    "background": 1,
    "body": 33,
    "familiar": 114,
    "head": 223,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 418,
    "name": "Thaumaturge Davos of the Ether",
    "background": 1,
    "body": 10,
    "familiar": 123,
    "head": 147,
    "prop": 328,
    "rune": 297
  },
  {
    "idx": 419,
    "name": "Shaman Malthus of the Canyon",
    "background": 0,
    "body": 15,
    "familiar": 89,
    "head": 218,
    "prop": 340,
    "rune": 290
  },
  {
    "idx": 420,
    "name": "Sorcerer Jahid of the Wild",
    "background": 2,
    "body": 84,
    "familiar": 93,
    "head": 142,
    "prop": 318,
    "rune": 304
  },
  {
    "idx": 421,
    "name": "Archmagus Apollo of the Plains",
    "background": 1,
    "body": 43,
    "familiar": 123,
    "head": 199,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 422,
    "name": "Illusionist Xiaobo of the Sun",
    "background": 3,
    "body": 61,
    "familiar": 117,
    "head": 236,
    "prop": 246,
    "rune": 300
  },
  {
    "idx": 423,
    "name": "Archmagus Azahl of the Villa",
    "background": 0,
    "body": 78,
    "familiar": 95,
    "head": 160,
    "prop": 332,
    "rune": 300
  },
  {
    "idx": 424,
    "name": "Chronomancer Milton of the Mist",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 162,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 425,
    "name": "Alchemist David of the Valley",
    "background": 0,
    "body": 12,
    "familiar": 119,
    "head": 199,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 426,
    "name": "Augurer Milton of the Bastion",
    "background": 0,
    "body": 76,
    "familiar": 114,
    "head": 227,
    "prop": 251,
    "rune": 295
  },
  {
    "idx": 427,
    "name": "Enchanter Lamia of the Capital",
    "background": 1,
    "body": 78,
    "familiar": 88,
    "head": 132,
    "prop": 278,
    "rune": 298
  },
  {
    "idx": 428,
    "name": "Witch Ivy of the Hills",
    "background": 3,
    "body": 39,
    "familiar": 93,
    "head": 159,
    "prop": 247,
    "rune": 287
  },
  {
    "idx": 429,
    "name": "Alchemist Hank of the Steppe",
    "background": 2,
    "body": 18,
    "familiar": 116,
    "head": 144,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 430,
    "name": "Archmagus Remus of the Ether",
    "background": 3,
    "body": 75,
    "familiar": 115,
    "head": 228,
    "prop": 340,
    "rune": 287
  },
  {
    "idx": 431,
    "name": "Necromancer Shivra of the Marsh",
    "background": 3,
    "body": 39,
    "familiar": 93,
    "head": 166,
    "prop": 274,
    "rune": 304
  },
  {
    "idx": 432,
    "name": "Sorcerer Alessar of the Bibliotheca",
    "background": 1,
    "body": 62,
    "familiar": 104,
    "head": 226,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 433,
    "name": "Alchemist Yog-Sothoth of the Wood",
    "background": 1,
    "body": 18,
    "familiar": 108,
    "head": 145,
    "prop": 268,
    "rune": 292
  },
  {
    "idx": 434,
    "name": "Cosmic Mage Soya of the Keep",
    "background": 0,
    "body": 77,
    "familiar": 103,
    "head": 186,
    "prop": 338,
    "rune": 293
  },
  {
    "idx": 435,
    "name": "Enchanter Angus from the Shadow",
    "background": 3,
    "body": 85,
    "familiar": 101,
    "head": 183,
    "prop": 265,
    "rune": 288
  },
  {
    "idx": 436,
    "name": "Shaman Aslan of the Moors",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 133,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 437,
    "name": "Druid Jabir of the Marsh",
    "background": 1,
    "body": 42,
    "familiar": 97,
    "head": 142,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 438,
    "name": "Enchanter Shizu of the Road",
    "background": 1,
    "body": 44,
    "familiar": 114,
    "head": 126,
    "prop": 316,
    "rune": 287
  },
  {
    "idx": 439,
    "name": "Aeromancer Kobold of the Rock",
    "background": 1,
    "body": 60,
    "familiar": 104,
    "head": 171,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 440,
    "name": "Illusionist Ethan of the Court",
    "background": 3,
    "body": 20,
    "familiar": 96,
    "head": 129,
    "prop": 246,
    "rune": 287
  },
  {
    "idx": 441,
    "name": "Arcanist Nolan of the Road",
    "background": 3,
    "body": 84,
    "familiar": 104,
    "head": 188,
    "prop": 306,
    "rune": 292
  },
  {
    "idx": 442,
    "name": "Runecaster David of the Citadel",
    "background": 2,
    "body": 48,
    "familiar": 103,
    "head": 141,
    "prop": 328,
    "rune": 283
  },
  {
    "idx": 443,
    "name": "Battle Mage Borak of the Marsh",
    "background": 2,
    "body": 12,
    "familiar": 110,
    "head": 206,
    "prop": 267,
    "rune": 295
  },
  {
    "idx": 444,
    "name": "Arch-Magician Diana of the Wood",
    "background": 2,
    "body": 22,
    "familiar": 106,
    "head": 156,
    "prop": 266,
    "rune": 293
  },
  {
    "idx": 445,
    "name": "Archmagus Armstrong of the Platonic Shadow",
    "background": 0,
    "body": 24,
    "familiar": 109,
    "head": 217,
    "prop": 245,
    "rune": 296
  },
  {
    "idx": 446,
    "name": "Hedge Wizard Peter of the Fey",
    "background": 3,
    "body": 28,
    "familiar": 99,
    "head": 172,
    "prop": 312,
    "rune": 283
  },
  {
    "idx": 447,
    "name": "Leah of the Plains",
    "background": 1,
    "body": 82,
    "familiar": 96,
    "head": 131,
    "prop": 268,
    "rune": 288
  },
  {
    "idx": 448,
    "name": "Witch Basil of Xanadu",
    "background": 0,
    "body": 24,
    "familiar": 113,
    "head": 160,
    "prop": 321,
    "rune": 297
  },
  {
    "idx": 449,
    "name": "Apollo of the Dunes",
    "background": 1,
    "body": 60,
    "familiar": 95,
    "head": 189,
    "prop": 311,
    "rune": 295
  },
  {
    "idx": 450,
    "name": "Battlemage Soya of the River",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 215,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 451,
    "name": "Battle Mage Bartholomew of Atlantis",
    "background": 0,
    "body": 80,
    "familiar": 105,
    "head": 216,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 452,
    "name": "Archmagus Remus of Arcadia",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 230,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 453,
    "name": "Ghost Eater Aleister of the Light",
    "background": 2,
    "body": 67,
    "familiar": 97,
    "head": 211,
    "prop": 307,
    "rune": 291
  },
  {
    "idx": 454,
    "name": "Archmagus Merlon of the Bibliotheca",
    "background": 1,
    "body": 6,
    "familiar": 110,
    "head": 212,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 455,
    "name": "Enchanter Adrienne of the Capital",
    "background": 0,
    "body": 26,
    "familiar": 106,
    "head": 190,
    "prop": 276,
    "rune": 284
  },
  {
    "idx": 456,
    "name": "Charmer Layla of the Steppe",
    "background": 1,
    "body": 31,
    "familiar": 93,
    "head": 208,
    "prop": 270,
    "rune": 282
  },
  {
    "idx": 457,
    "name": "Battle Mage Horace of the River",
    "background": 0,
    "body": 42,
    "familiar": 123,
    "head": 173,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 458,
    "name": "Amir of the Brambles",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 162,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 459,
    "name": "Summoner Aldo of the Riviera",
    "background": 1,
    "body": 41,
    "familiar": 110,
    "head": 207,
    "prop": 253,
    "rune": 284
  },
  {
    "idx": 460,
    "name": "Arcanist Eden of the Belfry",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 174,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 461,
    "name": "Hedge Wizard Dr. Death of the Keep",
    "background": 0,
    "body": 26,
    "familiar": 119,
    "head": 242,
    "prop": 273,
    "rune": 284
  },
  {
    "idx": 462,
    "name": "Scryer Tundror of the Field",
    "background": 1,
    "body": 19,
    "familiar": 123,
    "head": 216,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 463,
    "name": "Adept Caligula of the Cosmos",
    "background": 2,
    "body": 75,
    "familiar": 93,
    "head": 188,
    "prop": 338,
    "rune": 287
  },
  {
    "idx": 464,
    "name": "Shaman Bobbin of the Bastion",
    "background": 0,
    "body": 26,
    "familiar": 108,
    "head": 201,
    "prop": 264,
    "rune": 304
  },
  {
    "idx": 465,
    "name": "Milo of the Wood",
    "background": 1,
    "body": 19,
    "familiar": 7777,
    "head": 229,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 466,
    "name": "Druid Faiz of Arcadia",
    "background": 1,
    "body": 19,
    "familiar": 7777,
    "head": 222,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 467,
    "name": "Null Mage Drusilla of the Waste",
    "background": 1,
    "body": 85,
    "familiar": 93,
    "head": 223,
    "prop": 334,
    "rune": 290
  },
  {
    "idx": 468,
    "name": "Charmer Celeste of the Hills",
    "background": 1,
    "body": 17,
    "familiar": 101,
    "head": 156,
    "prop": 273,
    "rune": 299
  },
  {
    "idx": 469,
    "name": "Geomancer Woomba of the Wood",
    "background": 1,
    "body": 14,
    "familiar": 119,
    "head": 235,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 470,
    "name": "Battle Mage Dutorn of the Villa",
    "background": 0,
    "body": 18,
    "familiar": 119,
    "head": 165,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 471,
    "name": "Eden of the Event Horizon",
    "background": 1,
    "body": 52,
    "familiar": 123,
    "head": 211,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 472,
    "name": "Oberon of the Hall",
    "background": 3,
    "body": 74,
    "familiar": 109,
    "head": 160,
    "prop": 262,
    "rune": 298
  },
  {
    "idx": 473,
    "name": "Enchanter Beyna of the Canyon",
    "background": 0,
    "body": 22,
    "familiar": 104,
    "head": 208,
    "prop": 316,
    "rune": 293
  },
  {
    "idx": 474,
    "name": "Arcanist Soya of the Ice",
    "background": 1,
    "body": 65,
    "familiar": 93,
    "head": 229,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 475,
    "name": "Archmagus Alatar of the Havens",
    "background": 1,
    "body": 7,
    "familiar": 7777,
    "head": 174,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 476,
    "name": "Sorcerer Ali of the Mount",
    "background": 2,
    "body": 63,
    "familiar": 114,
    "head": 142,
    "prop": 314,
    "rune": 293
  },
  {
    "idx": 477,
    "name": "Battle Mage Durm of the Bibliotheca",
    "background": 0,
    "body": 49,
    "familiar": 95,
    "head": 129,
    "prop": 258,
    "rune": 287
  },
  {
    "idx": 478,
    "name": "Battle Mage Nicolas of the Riviera",
    "background": 1,
    "body": 44,
    "familiar": 103,
    "head": 206,
    "prop": 339,
    "rune": 293
  },
  {
    "idx": 479,
    "name": "Archmagus Alatar of the Hall",
    "background": 0,
    "body": 26,
    "familiar": 94,
    "head": 197,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 480,
    "name": "Archmagus Lin of the Brambles",
    "background": 0,
    "body": 34,
    "familiar": 7777,
    "head": 180,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 481,
    "name": "Arcanist Lumos of the Havens",
    "background": 3,
    "body": 10,
    "familiar": 95,
    "head": 212,
    "prop": 322,
    "rune": 285
  },
  {
    "idx": 482,
    "name": "Sorcerer Izible of the Bastion",
    "background": 1,
    "body": 40,
    "familiar": 7777,
    "head": 171,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 483,
    "name": "Witch Rowena of the Plains",
    "background": 1,
    "body": 36,
    "familiar": 107,
    "head": 176,
    "prop": 309,
    "rune": 298
  },
  {
    "idx": 484,
    "name": "Battle Mage Luther of the Cosmos",
    "background": 1,
    "body": 67,
    "familiar": 123,
    "head": 177,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 485,
    "name": "Arch-Magician George of the Sands",
    "background": 3,
    "body": 60,
    "familiar": 103,
    "head": 199,
    "prop": 306,
    "rune": 291
  },
  {
    "idx": 486,
    "name": "Maia of the Hills",
    "background": 1,
    "body": 12,
    "familiar": 111,
    "head": 135,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 487,
    "name": "Shaman Daphne of the Heath",
    "background": 1,
    "body": 22,
    "familiar": 103,
    "head": 208,
    "prop": 328,
    "rune": 292
  },
  {
    "idx": 488,
    "name": "Archmagus Baozhai of the Wold",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 180,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 489,
    "name": "Witch Cassandra of the Toadstools",
    "background": 2,
    "body": 30,
    "familiar": 111,
    "head": 155,
    "prop": 262,
    "rune": 303
  },
  {
    "idx": 490,
    "name": "Sorcerer Zelroth of Elysium",
    "background": 2,
    "body": 54,
    "familiar": 123,
    "head": 162,
    "prop": 305,
    "rune": 292
  },
  {
    "idx": 491,
    "name": "Hedge Wizard Lamia of the Canyon",
    "background": 1,
    "body": 39,
    "familiar": 93,
    "head": 132,
    "prop": 325,
    "rune": 296
  },
  {
    "idx": 492,
    "name": "Azahl of the Platonic Shadow",
    "background": 1,
    "body": 67,
    "familiar": 112,
    "head": 227,
    "prop": 315,
    "rune": 297
  },
  {
    "idx": 493,
    "name": "Archmagus Katherine of the Desert",
    "background": 2,
    "body": 60,
    "familiar": 93,
    "head": 130,
    "prop": 322,
    "rune": 304
  },
  {
    "idx": 494,
    "name": "Mystic Ursula of the Plains",
    "background": 1,
    "body": 37,
    "familiar": 120,
    "head": 209,
    "prop": 339,
    "rune": 284
  },
  {
    "idx": 495,
    "name": "Mystic Atlanta of the Field",
    "background": 0,
    "body": 21,
    "familiar": 115,
    "head": 190,
    "prop": 249,
    "rune": 285
  },
  {
    "idx": 496,
    "name": "Void Disciple Lupa of the Quantum Shadow",
    "background": 0,
    "body": 83,
    "familiar": 110,
    "head": 234,
    "prop": 274,
    "rune": 299
  },
  {
    "idx": 497,
    "name": "Sorcerer Lumos of the Plains",
    "background": 1,
    "body": 42,
    "familiar": 7777,
    "head": 192,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 498,
    "name": "Aeromancer Aleister of the Villa",
    "background": 2,
    "body": 78,
    "familiar": 104,
    "head": 162,
    "prop": 315,
    "rune": 301
  },
  {
    "idx": 499,
    "name": "Battle Mage Axel of the Valley",
    "background": 0,
    "body": 49,
    "familiar": 111,
    "head": 220,
    "prop": 261,
    "rune": 294
  },
  {
    "idx": 500,
    "name": "Witch Lilith of the Pit",
    "background": 1,
    "body": 86,
    "familiar": 90,
    "head": 176,
    "prop": 258,
    "rune": 303
  },
  {
    "idx": 501,
    "name": "Hex Mage Konoha of the Field",
    "background": 3,
    "body": 41,
    "familiar": 90,
    "head": 243,
    "prop": 277,
    "rune": 297
  },
  {
    "idx": 502,
    "name": "Shaman Sturgis of Avalon",
    "background": 0,
    "body": 50,
    "familiar": 109,
    "head": 177,
    "prop": 276,
    "rune": 290
  },
  {
    "idx": 503,
    "name": "Archmagus Oberon of the Mist",
    "background": 1,
    "body": 49,
    "familiar": 115,
    "head": 226,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 504,
    "name": "Magus Lumos of the Bibliotheca",
    "background": 2,
    "body": 50,
    "familiar": 111,
    "head": 160,
    "prop": 318,
    "rune": 304
  },
  {
    "idx": 505,
    "name": "Pyromancer Chiyo of the Villa",
    "background": 0,
    "body": 77,
    "familiar": 97,
    "head": 126,
    "prop": 255,
    "rune": 302
  },
  {
    "idx": 506,
    "name": "Scorch of the Keep",
    "background": 0,
    "body": 74,
    "familiar": 120,
    "head": 158,
    "prop": 265,
    "rune": 299
  },
  {
    "idx": 507,
    "name": "Leah of the Valley",
    "background": 0,
    "body": 12,
    "familiar": 110,
    "head": 132,
    "prop": 314,
    "rune": 288
  },
  {
    "idx": 508,
    "name": "Hedge Wizard Bolin of the Desert",
    "background": 0,
    "body": 61,
    "familiar": 95,
    "head": 236,
    "prop": 328,
    "rune": 294
  },
  {
    "idx": 509,
    "name": "Illusionist Leah of the Lake",
    "background": 3,
    "body": 21,
    "familiar": 101,
    "head": 198,
    "prop": 273,
    "rune": 296
  },
  {
    "idx": 510,
    "name": "Hedge Wizard Merlon of the Capital",
    "background": 3,
    "body": 17,
    "familiar": 120,
    "head": 232,
    "prop": 265,
    "rune": 282
  },
  {
    "idx": 511,
    "name": "Illusionist Uday of Dreams",
    "background": 1,
    "body": 7,
    "familiar": 104,
    "head": 237,
    "prop": 273,
    "rune": 296
  },
  {
    "idx": 512,
    "name": "Witch Florah of the Mountain",
    "background": 1,
    "body": 84,
    "familiar": 111,
    "head": 159,
    "prop": 314,
    "rune": 303
  },
  {
    "idx": 513,
    "name": "Hedge Wizard Chu Hua of the Valley",
    "background": 0,
    "body": 22,
    "familiar": 108,
    "head": 180,
    "prop": 273,
    "rune": 299
  },
  {
    "idx": 514,
    "name": "Chronomancer Apollo of the Platonic Shadow",
    "background": 0,
    "body": 8,
    "familiar": 93,
    "head": 238,
    "prop": 259,
    "rune": 290
  },
  {
    "idx": 515,
    "name": "Archmagus Aleister of the Villa",
    "background": 2,
    "body": 40,
    "familiar": 120,
    "head": 215,
    "prop": 339,
    "rune": 303
  },
  {
    "idx": 516,
    "name": "Lumos of the Cosmos",
    "background": 0,
    "body": 75,
    "familiar": 90,
    "head": 212,
    "prop": 315,
    "rune": 290
  },
  {
    "idx": 517,
    "name": "Sage Nazim of the Desert",
    "background": 2,
    "body": 5,
    "familiar": 110,
    "head": 142,
    "prop": 322,
    "rune": 300
  },
  {
    "idx": 518,
    "name": "Battle Mage Nicolas of the Tower",
    "background": 0,
    "body": 18,
    "familiar": 96,
    "head": 218,
    "prop": 254,
    "rune": 299
  },
  {
    "idx": 519,
    "name": "Cryptomancer Caligula of the Valley",
    "background": 0,
    "body": 50,
    "familiar": 112,
    "head": 206,
    "prop": 309,
    "rune": 285
  },
  {
    "idx": 520,
    "name": "Battle Mage Bayard of the Sands",
    "background": 2,
    "body": 58,
    "familiar": 89,
    "head": 220,
    "prop": 339,
    "rune": 291
  },
  {
    "idx": 521,
    "name": "Hedge Wizard Alizam of the Dunes",
    "background": 2,
    "body": 58,
    "familiar": 110,
    "head": 219,
    "prop": 276,
    "rune": 287
  },
  {
    "idx": 522,
    "name": "Archmagus Solomon of the Havens",
    "background": 1,
    "body": 52,
    "familiar": 90,
    "head": 212,
    "prop": 280,
    "rune": 288
  },
  {
    "idx": 523,
    "name": "Shaman Udor of the Sea",
    "background": 3,
    "body": 57,
    "familiar": 101,
    "head": 212,
    "prop": 276,
    "rune": 291
  },
  {
    "idx": 524,
    "name": "Battle Mage Finn of the Dunes",
    "background": 1,
    "body": 58,
    "familiar": 89,
    "head": 204,
    "prop": 319,
    "rune": 299
  },
  {
    "idx": 525,
    "name": "Sage Rita of the Carnival",
    "background": 1,
    "body": 29,
    "familiar": 108,
    "head": 176,
    "prop": 326,
    "rune": 287
  },
  {
    "idx": 526,
    "name": "Cosmic Mage Galatea of the Mountain",
    "background": 0,
    "body": 21,
    "familiar": 112,
    "head": 135,
    "prop": 310,
    "rune": 293
  },
  {
    "idx": 527,
    "name": "Arch-Magician Udor of the Light",
    "background": 3,
    "body": 9,
    "familiar": 7777,
    "head": 215,
    "prop": 321,
    "rune": 297
  },
  {
    "idx": 528,
    "name": "Shaman Beyna in the Shadows",
    "background": 1,
    "body": 87,
    "familiar": 107,
    "head": 156,
    "prop": 316,
    "rune": 294
  },
  {
    "idx": 529,
    "name": "Shaman Ulysse of the Wood",
    "background": 0,
    "body": 13,
    "familiar": 124,
    "head": 173,
    "prop": 265,
    "rune": 298
  },
  {
    "idx": 530,
    "name": "Cryptomancer Demos of the Rock",
    "background": 1,
    "body": 5,
    "familiar": 93,
    "head": 158,
    "prop": 309,
    "rune": 299
  },
  {
    "idx": 531,
    "name": "Sage Voidoth of the Ash",
    "background": 0,
    "body": 71,
    "familiar": 96,
    "head": 240,
    "prop": 256,
    "rune": 291
  },
  {
    "idx": 532,
    "name": "Archmagus Cairon of the Hills",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 153,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 533,
    "name": "Hedge Wizard Alatar of the Belfry",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 231,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 534,
    "name": "Sorcerer Alatar out of the Void",
    "background": 1,
    "body": 86,
    "familiar": 110,
    "head": 197,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 535,
    "name": "Alchemist Goliath of the Sun",
    "background": 1,
    "body": 5,
    "familiar": 99,
    "head": 213,
    "prop": 268,
    "rune": 294
  },
  {
    "idx": 536,
    "name": "Battle Mage Hansel of the Hall",
    "background": 3,
    "body": 46,
    "familiar": 114,
    "head": 204,
    "prop": 263,
    "rune": 288
  },
  {
    "idx": 537,
    "name": "Arch-Magician Asphodel of the Hills",
    "background": 2,
    "body": 39,
    "familiar": 93,
    "head": 187,
    "prop": 258,
    "rune": 287
  },
  {
    "idx": 538,
    "name": "Enchanter Carly of the Steppe",
    "background": 0,
    "body": 31,
    "familiar": 99,
    "head": 131,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 539,
    "name": "Thaumaturge Goliath of the Quantum Downs",
    "background": 1,
    "body": 75,
    "familiar": 7777,
    "head": 216,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 540,
    "name": "Merlin",
    "background": 1,
    "body": 24,
    "familiar": 109,
    "head": 230,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 541,
    "name": "Alchemist Axel of the Tower",
    "background": 1,
    "body": 62,
    "familiar": 94,
    "head": 177,
    "prop": 323,
    "rune": 285
  },
  {
    "idx": 542,
    "name": "Augurer Hagar of the Palms",
    "background": 2,
    "body": 27,
    "familiar": 103,
    "head": 213,
    "prop": 245,
    "rune": 288
  },
  {
    "idx": 543,
    "name": "Archmagus Aslan of the Valley",
    "background": 2,
    "body": 50,
    "familiar": 97,
    "head": 213,
    "prop": 316,
    "rune": 7777
  },
  {
    "idx": 544,
    "name": "Celah of the Atheneum",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 185,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 545,
    "name": "Illusionist Idris of the Moors",
    "background": 1,
    "body": 19,
    "familiar": 105,
    "head": 164,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 546,
    "name": "Sage Solomon of the Tower",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 231,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 547,
    "name": "Archmagus Crobas of the Garden",
    "background": 3,
    "body": 29,
    "familiar": 104,
    "head": 207,
    "prop": 275,
    "rune": 295
  },
  {
    "idx": 548,
    "name": "Battle Mage Malthus of the Ether",
    "background": 1,
    "body": 9,
    "familiar": 94,
    "head": 177,
    "prop": 271,
    "rune": 300
  },
  {
    "idx": 549,
    "name": "Thaumaturge Milo of the Reach",
    "background": 3,
    "body": 44,
    "familiar": 103,
    "head": 137,
    "prop": 339,
    "rune": 304
  },
  {
    "idx": 550,
    "name": "Charmer Daria of the Plains",
    "background": 1,
    "body": 37,
    "familiar": 7777,
    "head": 191,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 551,
    "name": "Geomancer Fumiko of the Wood",
    "background": 1,
    "body": 82,
    "familiar": 99,
    "head": 126,
    "prop": 308,
    "rune": 293
  },
  {
    "idx": 552,
    "name": "Sorcerer Merlon of the Pit",
    "background": 1,
    "body": 87,
    "familiar": 123,
    "head": 147,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 553,
    "name": "Alchemist Celeste of the Field",
    "background": 1,
    "body": 35,
    "familiar": 103,
    "head": 131,
    "prop": 328,
    "rune": 296
  },
  {
    "idx": 554,
    "name": "Hydromancer Crowley of the Capital",
    "background": 0,
    "body": 19,
    "familiar": 104,
    "head": 147,
    "prop": 314,
    "rune": 287
  },
  {
    "idx": 555,
    "name": "Arcanist Goliath of the Hills",
    "background": 1,
    "body": 41,
    "familiar": 97,
    "head": 217,
    "prop": 327,
    "rune": 303
  },
  {
    "idx": 556,
    "name": "Summoner Seth of the Realm",
    "background": 2,
    "body": 24,
    "familiar": 109,
    "head": 194,
    "prop": 322,
    "rune": 292
  },
  {
    "idx": 557,
    "name": "Spellsinger Magnus of the Veil",
    "background": 1,
    "body": 9,
    "familiar": 116,
    "head": 165,
    "prop": 247,
    "rune": 301
  },
  {
    "idx": 558,
    "name": "Clairvoyant Titania of the Belfry",
    "background": 0,
    "body": 7,
    "familiar": 93,
    "head": 187,
    "prop": 251,
    "rune": 285
  },
  {
    "idx": 559,
    "name": "Ghost Eater Bartholomew of the Keep",
    "background": 1,
    "body": 6,
    "familiar": 103,
    "head": 206,
    "prop": 332,
    "rune": 285
  },
  {
    "idx": 560,
    "name": "Witch Rita of the Wild",
    "background": 1,
    "body": 38,
    "familiar": 120,
    "head": 155,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 561,
    "name": "Alchemist Lumos of the Tower",
    "background": 2,
    "body": 7,
    "familiar": 104,
    "head": 226,
    "prop": 268,
    "rune": 283
  },
  {
    "idx": 562,
    "name": "Scryer Isaac of the Gnostics",
    "background": 1,
    "body": 67,
    "familiar": 110,
    "head": 238,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 563,
    "name": "Hedge Wizard Jeldor of the Road",
    "background": 2,
    "body": 43,
    "familiar": 117,
    "head": 153,
    "prop": 312,
    "rune": 298
  },
  {
    "idx": 564,
    "name": "Hedge Wizard Otto of the Sands",
    "background": 2,
    "body": 27,
    "familiar": 123,
    "head": 165,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 565,
    "name": "Ghost Eater Durm of the Toadstools",
    "background": 0,
    "body": 30,
    "familiar": 114,
    "head": 203,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 566,
    "name": "Artificer Homer of Dreams",
    "background": 1,
    "body": 49,
    "familiar": 101,
    "head": 133,
    "prop": 261,
    "rune": 299
  },
  {
    "idx": 567,
    "name": "Mystic Pix in the Shadows",
    "background": 1,
    "body": 86,
    "familiar": 7777,
    "head": 178,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 568,
    "name": "Arch-Magician Danny of the Villa",
    "background": 2,
    "body": 18,
    "familiar": 89,
    "head": 203,
    "prop": 253,
    "rune": 303
  },
  {
    "idx": 569,
    "name": "Transmuter Hadrien of the Tower",
    "background": 2,
    "body": 54,
    "familiar": 116,
    "head": 141,
    "prop": 256,
    "rune": 284
  },
  {
    "idx": 570,
    "name": "Cryptomancer Cedric of the Wood",
    "background": 1,
    "body": 19,
    "familiar": 116,
    "head": 125,
    "prop": 309,
    "rune": 300
  },
  {
    "idx": 571,
    "name": "Iprix of the Brine",
    "background": 0,
    "body": 57,
    "familiar": 7777,
    "head": 127,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 572,
    "name": "Geomancer Bathsheba of the Villa",
    "background": 0,
    "body": 78,
    "familiar": 95,
    "head": 198,
    "prop": 308,
    "rune": 302
  },
  {
    "idx": 573,
    "name": "Magus Bathsheba of the Grotto",
    "background": 2,
    "body": 31,
    "familiar": 104,
    "head": 191,
    "prop": 262,
    "rune": 287
  },
  {
    "idx": 574,
    "name": "Sorcerer Pumlo of the Marsh",
    "background": 1,
    "body": 82,
    "familiar": 7777,
    "head": 229,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 575,
    "name": "Archmagus Basil of Xanadu",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 232,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 576,
    "name": "Augurer Eden of the Circle",
    "background": 0,
    "body": 29,
    "familiar": 119,
    "head": 199,
    "prop": 245,
    "rune": 302
  },
  {
    "idx": 577,
    "name": "Alchemist Lin of the River",
    "background": 1,
    "body": 37,
    "familiar": 115,
    "head": 180,
    "prop": 268,
    "rune": 291
  },
  {
    "idx": 578,
    "name": "Archmagus Alessar of Arcadia",
    "background": 1,
    "body": 82,
    "familiar": 116,
    "head": 192,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 579,
    "name": "Pyromancer Naoki of the Marsh",
    "background": 2,
    "body": 31,
    "familiar": 105,
    "head": 126,
    "prop": 309,
    "rune": 290
  },
  {
    "idx": 580,
    "name": "Sage Artis of the Brine",
    "background": 3,
    "body": 57,
    "familiar": 101,
    "head": 132,
    "prop": 245,
    "rune": 285
  },
  {
    "idx": 581,
    "name": "Battle Mage Samuel of the Quantum Shadow",
    "background": 2,
    "body": 86,
    "familiar": 112,
    "head": 220,
    "prop": 318,
    "rune": 302
  },
  {
    "idx": 582,
    "name": "Shaman Magnus of the Valley",
    "background": 0,
    "body": 82,
    "familiar": 99,
    "head": 173,
    "prop": 317,
    "rune": 291
  },
  {
    "idx": 583,
    "name": "Runecaster George of the Wood",
    "background": 3,
    "body": 41,
    "familiar": 114,
    "head": 212,
    "prop": 323,
    "rune": 291
  },
  {
    "idx": 584,
    "name": "Enchanter Uvlius of the Astral Plane",
    "background": 0,
    "body": 75,
    "familiar": 117,
    "head": 162,
    "prop": 249,
    "rune": 288
  },
  {
    "idx": 585,
    "name": "Enchanter Daphne of the Reach",
    "background": 2,
    "body": 21,
    "familiar": 90,
    "head": 187,
    "prop": 261,
    "rune": 296
  },
  {
    "idx": 586,
    "name": "Battlemage Uvlius of the Citadel",
    "background": 2,
    "body": 48,
    "familiar": 93,
    "head": 127,
    "prop": 309,
    "rune": 304
  },
  {
    "idx": 587,
    "name": "Hedge Wizard Iprix of the Mist",
    "background": 2,
    "body": 7,
    "familiar": 115,
    "head": 192,
    "prop": 312,
    "rune": 282
  },
  {
    "idx": 588,
    "name": "Wild Mage Edge of the Road",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 207,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 589,
    "name": "Sage Jeldor of the Brambles",
    "background": 1,
    "body": 82,
    "familiar": 7777,
    "head": 214,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 590,
    "name": "Archmagus Amir of the Hollow",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 138,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 591,
    "name": "Enchanter Layla of the Grotto",
    "background": 2,
    "body": 15,
    "familiar": 99,
    "head": 132,
    "prop": 319,
    "rune": 7777
  },
  {
    "idx": 592,
    "name": "Geomancer Herne of the Heath",
    "background": 2,
    "body": 15,
    "familiar": 99,
    "head": 167,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 593,
    "name": "Sage Rita of the Wood",
    "background": 2,
    "body": 38,
    "familiar": 96,
    "head": 209,
    "prop": 252,
    "rune": 302
  },
  {
    "idx": 594,
    "name": "Geomancer Behemoth of the Wood",
    "background": 1,
    "body": 42,
    "familiar": 99,
    "head": 193,
    "prop": 308,
    "rune": 287
  },
  {
    "idx": 595,
    "name": "Ice Mage Ofaris",
    "background": 1,
    "body": 73,
    "familiar": 95,
    "head": 232,
    "prop": 264,
    "rune": 304
  },
  {
    "idx": 596,
    "name": "Lux of the Havens",
    "background": 0,
    "body": 11,
    "familiar": 7777,
    "head": 221,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 597,
    "name": "Arcanist Twitch of the Palms",
    "background": 0,
    "body": 5,
    "familiar": 7777,
    "head": 201,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 598,
    "name": "Spellsinger Soya of the Sea",
    "background": 1,
    "body": 57,
    "familiar": 90,
    "head": 212,
    "prop": 247,
    "rune": 296
  },
  {
    "idx": 599,
    "name": "Shaman Aleister in the Shadows",
    "background": 0,
    "body": 86,
    "familiar": 110,
    "head": 232,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 600,
    "name": "Cosmic Mage Fugh of the Mist",
    "background": 0,
    "body": 55,
    "familiar": 103,
    "head": 200,
    "prop": 338,
    "rune": 283
  },
  {
    "idx": 601,
    "name": "Sage Bane of the Atheneum",
    "background": 0,
    "body": 55,
    "familiar": 112,
    "head": 194,
    "prop": 322,
    "rune": 296
  },
  {
    "idx": 602,
    "name": "Ghost Eater Milo of the Desert",
    "background": 2,
    "body": 61,
    "familiar": 110,
    "head": 185,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 603,
    "name": "Alchemist Patch",
    "background": 1,
    "body": 30,
    "familiar": 108,
    "head": 200,
    "prop": 267,
    "rune": 297
  },
  {
    "idx": 604,
    "name": "Archmagus Orpheus of the Marsh",
    "background": 1,
    "body": 79,
    "familiar": 119,
    "head": 238,
    "prop": 261,
    "rune": 297
  },
  {
    "idx": 605,
    "name": "Wild Mage Sturgis of the Court",
    "background": 0,
    "body": 18,
    "familiar": 123,
    "head": 165,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 606,
    "name": "Battle Mage Blaise of the Ice",
    "background": 0,
    "body": 65,
    "familiar": 119,
    "head": 213,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 607,
    "name": "Enchanter Titania of the Sacred Pillars",
    "background": 3,
    "body": 54,
    "familiar": 90,
    "head": 156,
    "prop": 255,
    "rune": 288
  },
  {
    "idx": 608,
    "name": "Alchemist Adium of the Cosmos",
    "background": 1,
    "body": 9,
    "familiar": 97,
    "head": 125,
    "prop": 269,
    "rune": 296
  },
  {
    "idx": 609,
    "name": "Scryer Allistair of the Mist",
    "background": 1,
    "body": 55,
    "familiar": 114,
    "head": 211,
    "prop": 252,
    "rune": 292
  },
  {
    "idx": 610,
    "name": "Arcanist Rodolfo of Xanadu",
    "background": 0,
    "body": 11,
    "familiar": 7777,
    "head": 204,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 611,
    "name": "Isaac of the Lake",
    "background": 0,
    "body": 15,
    "familiar": 117,
    "head": 233,
    "prop": 247,
    "rune": 287
  },
  {
    "idx": 612,
    "name": "Witch Ambrosia of the Veil",
    "background": 0,
    "body": 29,
    "familiar": 115,
    "head": 166,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 613,
    "name": "Sorcerer Basil of the Sun",
    "background": 1,
    "body": 27,
    "familiar": 7777,
    "head": 185,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 614,
    "name": "Archmagus Lumos of the Oasis",
    "background": 0,
    "body": 60,
    "familiar": 7777,
    "head": 202,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 615,
    "name": "Archmagus Crowley of the Secret Fire",
    "background": 0,
    "body": 85,
    "familiar": 123,
    "head": 230,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 616,
    "name": "Hedge Wizard Amir of the Canyon",
    "background": 1,
    "body": 44,
    "familiar": 7777,
    "head": 147,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 617,
    "name": "Thaumaturge Aldo of the Light",
    "background": 1,
    "body": 52,
    "familiar": 110,
    "head": 207,
    "prop": 323,
    "rune": 302
  },
  {
    "idx": 618,
    "name": "Witch Lucinda of Cuckoo Land",
    "background": 0,
    "body": 29,
    "familiar": 93,
    "head": 166,
    "prop": 263,
    "rune": 283
  },
  {
    "idx": 619,
    "name": "Battlemage Jastor of the Waste",
    "background": 2,
    "body": 86,
    "familiar": 120,
    "head": 178,
    "prop": 335,
    "rune": 296
  },
  {
    "idx": 620,
    "name": "Battle Mage Wolfram of the Hall",
    "background": 1,
    "body": 74,
    "familiar": 111,
    "head": 206,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 621,
    "name": "Hex Mage Ethan of the Valley",
    "background": 0,
    "body": 18,
    "familiar": 119,
    "head": 129,
    "prop": 329,
    "rune": 296
  },
  {
    "idx": 622,
    "name": "Cosmic Mage Winter Squash of the Inferno",
    "background": 2,
    "body": 83,
    "familiar": 97,
    "head": 172,
    "prop": 335,
    "rune": 298
  },
  {
    "idx": 623,
    "name": "Enchanter Evangeline of the Forest",
    "background": 3,
    "body": 36,
    "familiar": 120,
    "head": 209,
    "prop": 329,
    "rune": 287
  },
  {
    "idx": 624,
    "name": "Arch-Magician Enigma of the Wood",
    "background": 1,
    "body": 38,
    "familiar": 111,
    "head": 155,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 625,
    "name": "Magus Armstrong of the Road",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 203,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 626,
    "name": "Medium Solomon of the Astral Plane",
    "background": 1,
    "body": 24,
    "familiar": 93,
    "head": 127,
    "prop": 252,
    "rune": 284
  },
  {
    "idx": 627,
    "name": "Enchanter Durm of the Wood",
    "background": 1,
    "body": 44,
    "familiar": 117,
    "head": 203,
    "prop": 316,
    "rune": 301
  },
  {
    "idx": 628,
    "name": "Arch-Magician Otto of the Hills",
    "background": 0,
    "body": 79,
    "familiar": 89,
    "head": 165,
    "prop": 253,
    "rune": 304
  },
  {
    "idx": 629,
    "name": "Ice Mage Apollo of the Ice",
    "background": 1,
    "body": 65,
    "familiar": 115,
    "head": 186,
    "prop": 259,
    "rune": 284
  },
  {
    "idx": 630,
    "name": "Holy Monk Eronin of the Obelisk",
    "background": 2,
    "body": 6,
    "familiar": 114,
    "head": 207,
    "prop": 254,
    "rune": 301
  },
  {
    "idx": 631,
    "name": "Thaumaturge Jahid of the Hollow",
    "background": 1,
    "body": 42,
    "familiar": 109,
    "head": 219,
    "prop": 256,
    "rune": 304
  },
  {
    "idx": 632,
    "name": "Archmagus  of the Atheneum",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 153,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 633,
    "name": "Battle Mage Blaise of the Sands",
    "background": 0,
    "body": 27,
    "familiar": 7777,
    "head": 204,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 634,
    "name": "Arch-Magician Patch of the Havens",
    "background": 2,
    "body": 55,
    "familiar": 103,
    "head": 200,
    "prop": 306,
    "rune": 288
  },
  {
    "idx": 635,
    "name": "Summoner Cedric of the Citadel",
    "background": 1,
    "body": 76,
    "familiar": 110,
    "head": 207,
    "prop": 254,
    "rune": 291
  },
  {
    "idx": 636,
    "name": "Ghost Eater Calypso of Cuckoo Land",
    "background": 1,
    "body": 30,
    "familiar": 108,
    "head": 176,
    "prop": 254,
    "rune": 292
  },
  {
    "idx": 637,
    "name": "George of the Cosmos",
    "background": 2,
    "body": 75,
    "familiar": 110,
    "head": 227,
    "prop": 253,
    "rune": 302
  },
  {
    "idx": 638,
    "name": "Archmagus Ravana of the Light",
    "background": 1,
    "body": 9,
    "familiar": 7777,
    "head": 207,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 639,
    "name": "Pyromancer Titania of the Bibliotheca",
    "background": 1,
    "body": 50,
    "familiar": 116,
    "head": 132,
    "prop": 309,
    "rune": 298
  },
  {
    "idx": 640,
    "name": "Magus Apollo of the Bastion",
    "background": 3,
    "body": 76,
    "familiar": 109,
    "head": 227,
    "prop": 249,
    "rune": 295
  },
  {
    "idx": 641,
    "name": "Arch-Magician Ethan of the Riviera",
    "background": 2,
    "body": 44,
    "familiar": 103,
    "head": 165,
    "prop": 306,
    "rune": 294
  },
  {
    "idx": 642,
    "name": "Magus Kazem of the Steppe",
    "background": 0,
    "body": 19,
    "familiar": 115,
    "head": 222,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 643,
    "name": "Charmer Calliope of the Field",
    "background": 2,
    "body": 21,
    "familiar": 108,
    "head": 135,
    "prop": 269,
    "rune": 284
  },
  {
    "idx": 644,
    "name": "Arcanist Aleister of the Mount",
    "background": 2,
    "body": 55,
    "familiar": 110,
    "head": 147,
    "prop": 323,
    "rune": 303
  },
  {
    "idx": 645,
    "name": "Sage Solomon of the Light",
    "background": 0,
    "body": 11,
    "familiar": 123,
    "head": 202,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 646,
    "name": "Thaumaturge Basil of the Mount",
    "background": 1,
    "body": 6,
    "familiar": 7777,
    "head": 160,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 647,
    "name": "Enchanter Rita of the Mount",
    "background": 0,
    "body": 50,
    "familiar": 89,
    "head": 209,
    "prop": 316,
    "rune": 284
  },
  {
    "idx": 648,
    "name": "Sorcerer Lamia of the Tower",
    "background": 1,
    "body": 63,
    "familiar": 103,
    "head": 156,
    "prop": 256,
    "rune": 288
  },
  {
    "idx": 649,
    "name": "Sage Kryll of the Plains",
    "background": 1,
    "body": 15,
    "familiar": 7777,
    "head": 235,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 650,
    "name": "Arch-Magician Azahl of the Valley",
    "background": 0,
    "body": 49,
    "familiar": 123,
    "head": 228,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 651,
    "name": "Sage Pumlo of the Court",
    "background": 0,
    "body": 76,
    "familiar": 103,
    "head": 186,
    "prop": 339,
    "rune": 290
  },
  {
    "idx": 652,
    "name": "Alchemist Rita of the Plains",
    "background": 0,
    "body": 38,
    "familiar": 115,
    "head": 223,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 653,
    "name": "Hedge Wizard Kalo of the Havens",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 171,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 654,
    "name": "Archmagus Hadrien of the Bastion",
    "background": 1,
    "body": 77,
    "familiar": 7777,
    "head": 214,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 655,
    "name": "Hedge Wizard Borak of the Cosmos",
    "background": 1,
    "body": 67,
    "familiar": 99,
    "head": 204,
    "prop": 319,
    "rune": 284
  },
  {
    "idx": 656,
    "name": "Battle Mage Cromwell of the Oasis",
    "background": 3,
    "body": 5,
    "familiar": 94,
    "head": 177,
    "prop": 265,
    "rune": 303
  },
  {
    "idx": 657,
    "name": "Sorcerer Ali of the Mount",
    "background": 2,
    "body": 49,
    "familiar": 97,
    "head": 142,
    "prop": 338,
    "rune": 283
  },
  {
    "idx": 658,
    "name": "Magus Milo from the Abyss",
    "background": 1,
    "body": 87,
    "familiar": 7777,
    "head": 127,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 659,
    "name": "Battle Mage Gary of the Ether",
    "background": 1,
    "body": 67,
    "familiar": 7777,
    "head": 203,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 660,
    "name": "Chaos Mage Marceline of the Atheneum",
    "background": 2,
    "body": 62,
    "familiar": 104,
    "head": 155,
    "prop": 310,
    "rune": 294
  },
  {
    "idx": 661,
    "name": "Necromancer Dr. Death of the Sacred Pillars",
    "background": 2,
    "body": 6,
    "familiar": 95,
    "head": 194,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 662,
    "name": "Archmagus Zaros of the Keep",
    "background": 2,
    "body": 46,
    "familiar": 93,
    "head": 202,
    "prop": 274,
    "rune": 288
  },
  {
    "idx": 663,
    "name": "Shadow Mage Nadeem of the Toadstools",
    "background": 0,
    "body": 28,
    "familiar": 105,
    "head": 219,
    "prop": 248,
    "rune": 287
  },
  {
    "idx": 664,
    "name": "Battlemage Caligula of the Keep",
    "background": 0,
    "body": 54,
    "familiar": 114,
    "head": 129,
    "prop": 309,
    "rune": 298
  },
  {
    "idx": 665,
    "name": "Arcanist Carly of the Mist",
    "background": 2,
    "body": 55,
    "familiar": 111,
    "head": 131,
    "prop": 306,
    "rune": 297
  },
  {
    "idx": 666,
    "name": "Old Scratch",
    "background": 3,
    "body": 65,
    "familiar": 88,
    "head": 136,
    "prop": 266,
    "rune": 284
  },
  {
    "idx": 667,
    "name": "Void Disciple Voidoth of the Veil",
    "background": 3,
    "body": 52,
    "familiar": 95,
    "head": 224,
    "prop": 307,
    "rune": 293
  },
  {
    "idx": 668,
    "name": "Oracle Abbadon of the Ether",
    "background": 0,
    "body": 8,
    "familiar": 88,
    "head": 240,
    "prop": 252,
    "rune": 300
  },
  {
    "idx": 669,
    "name": "Archmagus Eden of the Event Horizon",
    "background": 1,
    "body": 24,
    "familiar": 93,
    "head": 127,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 670,
    "name": "Enchanter Eden of the Inferno",
    "background": 2,
    "body": 87,
    "familiar": 112,
    "head": 162,
    "prop": 249,
    "rune": 294
  },
  {
    "idx": 671,
    "name": "Oracle Lin of the Wold",
    "background": 2,
    "body": 31,
    "familiar": 93,
    "head": 180,
    "prop": 252,
    "rune": 287
  },
  {
    "idx": 672,
    "name": "Enchanter Apollo of the Desert",
    "background": 1,
    "body": 27,
    "familiar": 105,
    "head": 189,
    "prop": 265,
    "rune": 291
  },
  {
    "idx": 673,
    "name": "Sorcerer Salah of the Grotto",
    "background": 2,
    "body": 15,
    "familiar": 94,
    "head": 219,
    "prop": 250,
    "rune": 291
  },
  {
    "idx": 674,
    "name": "Necromancer Moloch of Xanadu",
    "background": 1,
    "body": 67,
    "familiar": 88,
    "head": 193,
    "prop": 307,
    "rune": 299
  },
  {
    "idx": 675,
    "name": "Druid Elizabeth of the Wood",
    "background": 0,
    "body": 37,
    "familiar": 107,
    "head": 155,
    "prop": 316,
    "rune": 303
  },
  {
    "idx": 676,
    "name": "Pyromancer Flamos of the Swell",
    "background": 0,
    "body": 57,
    "familiar": 105,
    "head": 158,
    "prop": 255,
    "rune": 288
  },
  {
    "idx": 677,
    "name": "Illusionist Iprix of the Bibliotheca",
    "background": 1,
    "body": 54,
    "familiar": 120,
    "head": 185,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 678,
    "name": "Charmer Lamia of the Valley",
    "background": 3,
    "body": 37,
    "familiar": 107,
    "head": 191,
    "prop": 250,
    "rune": 291
  },
  {
    "idx": 679,
    "name": "Hedge Wizard Moloch of the Reach",
    "background": 0,
    "body": 19,
    "familiar": 111,
    "head": 193,
    "prop": 312,
    "rune": 288
  },
  {
    "idx": 680,
    "name": "Arcanist Aden of the Event Horizon",
    "background": 1,
    "body": 11,
    "familiar": 103,
    "head": 125,
    "prop": 325,
    "rune": 291
  },
  {
    "idx": 681,
    "name": "Thaumaturge Rocco of the Field",
    "background": 1,
    "body": 14,
    "familiar": 123,
    "head": 125,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 682,
    "name": "Battle Mage Atlas of the Brambles",
    "background": 1,
    "body": 79,
    "familiar": 119,
    "head": 213,
    "prop": 280,
    "rune": 302
  },
  {
    "idx": 683,
    "name": "Battle Mage Hansel of the Wold",
    "background": 1,
    "body": 18,
    "familiar": 119,
    "head": 165,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 684,
    "name": "Evoker Helix of the Road",
    "background": 2,
    "body": 44,
    "familiar": 114,
    "head": 200,
    "prop": 306,
    "rune": 283
  },
  {
    "idx": 685,
    "name": "Arch-Magician Edge of the Sun",
    "background": 0,
    "body": 60,
    "familiar": 93,
    "head": 125,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 686,
    "name": "Alchemist Nikolas of the Marsh",
    "background": 0,
    "body": 45,
    "familiar": 123,
    "head": 233,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 687,
    "name": "Artificer Solomon of the Light",
    "background": 2,
    "body": 16,
    "familiar": 109,
    "head": 138,
    "prop": 340,
    "rune": 295
  },
  {
    "idx": 688,
    "name": "Battle Mage Nolan of the Isle",
    "background": 1,
    "body": 57,
    "familiar": 7777,
    "head": 165,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 689,
    "name": "Battle Mage Goliath of the Psychic Leap",
    "background": 3,
    "body": 9,
    "familiar": 111,
    "head": 204,
    "prop": 319,
    "rune": 287
  },
  {
    "idx": 690,
    "name": "Diabolist Hagar of the Forest",
    "background": 1,
    "body": 12,
    "familiar": 123,
    "head": 217,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 691,
    "name": "Shadow Mage Darick of the Loch",
    "background": 3,
    "body": 80,
    "familiar": 94,
    "head": 188,
    "prop": 332,
    "rune": 286
  },
  {
    "idx": 692,
    "name": "Hedge Wizard Marceau of the Light",
    "background": 0,
    "body": 75,
    "familiar": 94,
    "head": 179,
    "prop": 265,
    "rune": 297
  },
  {
    "idx": 693,
    "name": "Aleister of the Mount",
    "background": 1,
    "body": 54,
    "familiar": 7777,
    "head": 127,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 694,
    "name": "Alchemist Cassiopeia of the Garden",
    "background": 3,
    "body": 28,
    "familiar": 114,
    "head": 139,
    "prop": 268,
    "rune": 303
  },
  {
    "idx": 695,
    "name": "Electromancer Davos of the Toadstools",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 233,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 696,
    "name": "Battle Mage Hagar of the Valley",
    "background": 0,
    "body": 41,
    "familiar": 89,
    "head": 129,
    "prop": 317,
    "rune": 283
  },
  {
    "idx": 697,
    "name": "Adept Sabina of the Riviera",
    "background": 0,
    "body": 37,
    "familiar": 7777,
    "head": 159,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 698,
    "name": "Archmagus Bogey of the Hollow",
    "background": 1,
    "body": 14,
    "familiar": 101,
    "head": 244,
    "prop": 316,
    "rune": 287
  },
  {
    "idx": 699,
    "name": "Arcanist Beyna of the Reach",
    "background": 0,
    "body": 34,
    "familiar": 120,
    "head": 191,
    "prop": 250,
    "rune": 300
  },
  {
    "idx": 700,
    "name": "Sorcerer George of the Waste",
    "background": 2,
    "body": 83,
    "familiar": 110,
    "head": 211,
    "prop": 259,
    "rune": 282
  },
  {
    "idx": 701,
    "name": "Alatar of the Ether",
    "background": 2,
    "body": 10,
    "familiar": 94,
    "head": 227,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 702,
    "name": "Geomancer Cosmo of the Thorn",
    "background": 0,
    "body": 30,
    "familiar": 7777,
    "head": 164,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 703,
    "name": "Necromancer Zelda of the Wood",
    "background": 2,
    "body": 18,
    "familiar": 88,
    "head": 223,
    "prop": 307,
    "rune": 304
  },
  {
    "idx": 704,
    "name": "Conjurer Jack of the Brambles",
    "background": 3,
    "body": 14,
    "familiar": 99,
    "head": 172,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 705,
    "name": "Zaros of the Isle",
    "background": 1,
    "body": 57,
    "familiar": 103,
    "head": 186,
    "prop": 280,
    "rune": 293
  },
  {
    "idx": 706,
    "name": "Enchanter Magnus of the Secret Fire",
    "background": 0,
    "body": 85,
    "familiar": 107,
    "head": 217,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 707,
    "name": "Magus Zorko of the Veil",
    "background": 1,
    "body": 8,
    "familiar": 112,
    "head": 222,
    "prop": 334,
    "rune": 291
  },
  {
    "idx": 708,
    "name": "Archmagus Milo in the Shadows",
    "background": 3,
    "body": 86,
    "familiar": 118,
    "head": 212,
    "prop": 334,
    "rune": 297
  },
  {
    "idx": 709,
    "name": "Jadis of the Hollow",
    "background": 0,
    "body": 36,
    "familiar": 104,
    "head": 131,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 710,
    "name": "Battle Mage Rodolfo of the Bastion",
    "background": 1,
    "body": 26,
    "familiar": 115,
    "head": 218,
    "prop": 268,
    "rune": 287
  },
  {
    "idx": 711,
    "name": "Archmagus Apollo of the Dunes",
    "background": 2,
    "body": 27,
    "familiar": 106,
    "head": 214,
    "prop": 315,
    "rune": 287
  },
  {
    "idx": 712,
    "name": "Daria of the Wood",
    "background": 1,
    "body": 34,
    "familiar": 114,
    "head": 191,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 713,
    "name": "Zane of the Desert",
    "background": 1,
    "body": 60,
    "familiar": 95,
    "head": 231,
    "prop": 273,
    "rune": 304
  },
  {
    "idx": 714,
    "name": "Scryer Isaac of the Heath",
    "background": 1,
    "body": 12,
    "familiar": 112,
    "head": 232,
    "prop": 251,
    "rune": 303
  },
  {
    "idx": 715,
    "name": "Evoker Kingsley of Mu",
    "background": 1,
    "body": 83,
    "familiar": 108,
    "head": 201,
    "prop": 306,
    "rune": 300
  },
  {
    "idx": 716,
    "name": "Archmagus Aleister of the Cosmos",
    "background": 0,
    "body": 10,
    "familiar": 119,
    "head": 212,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 717,
    "name": "Geomancer Wolfram of the Atheneum",
    "background": 1,
    "body": 50,
    "familiar": 111,
    "head": 129,
    "prop": 308,
    "rune": 283
  },
  {
    "idx": 718,
    "name": "Silas of the Villa",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 214,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 719,
    "name": "Stellar Mage Cybele of the Realm",
    "background": 1,
    "body": 29,
    "familiar": 119,
    "head": 190,
    "prop": 338,
    "rune": 282
  },
  {
    "idx": 720,
    "name": "Necromancer Chooki of the Toadstools",
    "background": 3,
    "body": 28,
    "familiar": 93,
    "head": 222,
    "prop": 307,
    "rune": 282
  },
  {
    "idx": 721,
    "name": "Illusionist Salvatore of the Platonic Shadow",
    "background": 0,
    "body": 75,
    "familiar": 110,
    "head": 186,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 722,
    "name": "Cosmic Mage Willow",
    "background": 1,
    "body": 75,
    "familiar": 115,
    "head": 156,
    "prop": 338,
    "rune": 293
  },
  {
    "idx": 723,
    "name": "Hydromancer Quddus of the Keep",
    "background": 2,
    "body": 50,
    "familiar": 94,
    "head": 164,
    "prop": 314,
    "rune": 300
  },
  {
    "idx": 724,
    "name": "Shaman Zelda of the Hollow",
    "background": 1,
    "body": 82,
    "familiar": 97,
    "head": 209,
    "prop": 316,
    "rune": 294
  },
  {
    "idx": 725,
    "name": "Archmagus Aleister of the Wold",
    "background": 2,
    "body": 41,
    "familiar": 114,
    "head": 199,
    "prop": 315,
    "rune": 295
  },
  {
    "idx": 726,
    "name": "Ice Mage Homer of the Ice",
    "background": 1,
    "body": 73,
    "familiar": 96,
    "head": 165,
    "prop": 268,
    "rune": 300
  },
  {
    "idx": 727,
    "name": "Magus George of the Hall",
    "background": 1,
    "body": 48,
    "familiar": 110,
    "head": 212,
    "prop": 323,
    "rune": 297
  },
  {
    "idx": 728,
    "name": "Battle Mage Baird",
    "background": 2,
    "body": 10,
    "familiar": 89,
    "head": 220,
    "prop": 316,
    "rune": 296
  },
  {
    "idx": 729,
    "name": "Artificer Hanataka of the Court",
    "background": 1,
    "body": 77,
    "familiar": 90,
    "head": 243,
    "prop": 260,
    "rune": 303
  },
  {
    "idx": 730,
    "name": "Scryer Liliana of the Wood",
    "background": 1,
    "body": 14,
    "familiar": 89,
    "head": 209,
    "prop": 245,
    "rune": 283
  },
  {
    "idx": 731,
    "name": "Witch Lucinda of the Atheneum",
    "background": 2,
    "body": 49,
    "familiar": 89,
    "head": 176,
    "prop": 262,
    "rune": 297
  },
  {
    "idx": 732,
    "name": "Shadow Mage Robert of Mu",
    "background": 2,
    "body": 24,
    "familiar": 88,
    "head": 203,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 733,
    "name": "Alchemist Epher of the Wood",
    "background": 0,
    "body": 79,
    "familiar": 111,
    "head": 167,
    "prop": 268,
    "rune": 290
  },
  {
    "idx": 734,
    "name": "Illusionist Qianfan of the Keep",
    "background": 2,
    "body": 6,
    "familiar": 109,
    "head": 236,
    "prop": 246,
    "rune": 285
  },
  {
    "idx": 735,
    "name": "Ice Mage Milo of the Cold",
    "background": 1,
    "body": 73,
    "familiar": 111,
    "head": 228,
    "prop": 250,
    "rune": 301
  },
  {
    "idx": 736,
    "name": "Thaumaturge Celah of the Event Horizon",
    "background": 0,
    "body": 52,
    "familiar": 103,
    "head": 233,
    "prop": 332,
    "rune": 285
  },
  {
    "idx": 737,
    "name": "Augurer Chromo of the Thorn",
    "background": 0,
    "body": 29,
    "familiar": 95,
    "head": 169,
    "prop": 251,
    "rune": 299
  },
  {
    "idx": 738,
    "name": "Alchemist Hestia of the Hall",
    "background": 1,
    "body": 77,
    "familiar": 104,
    "head": 159,
    "prop": 268,
    "rune": 294
  },
  {
    "idx": 739,
    "name": "Summoner Kryll of the Bastion",
    "background": 1,
    "body": 77,
    "familiar": 115,
    "head": 200,
    "prop": 254,
    "rune": 297
  },
  {
    "idx": 740,
    "name": "Solar Mage Liliana of the Pit",
    "background": 0,
    "body": 86,
    "familiar": 120,
    "head": 223,
    "prop": 309,
    "rune": 285
  },
  {
    "idx": 741,
    "name": "Archmagus Solomon of the Belfry",
    "background": 2,
    "body": 50,
    "familiar": 104,
    "head": 215,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 742,
    "name": "Archmagus Aden of the Cosmos",
    "background": 1,
    "body": 11,
    "familiar": 7777,
    "head": 207,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 743,
    "name": "Necromancer Black Goat of the Event Horizon",
    "background": 1,
    "body": 9,
    "familiar": 108,
    "head": 136,
    "prop": 307,
    "rune": 304
  },
  {
    "idx": 744,
    "name": "Magus Cedric of the Steppe",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 150,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 745,
    "name": "Charmer Galatea of the Bastion",
    "background": 3,
    "body": 77,
    "familiar": 103,
    "head": 131,
    "prop": 310,
    "rune": 302
  },
  {
    "idx": 746,
    "name": "Cleric Magnus of the Riviera",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 213,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 747,
    "name": "Milo of the Tower",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 153,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 748,
    "name": "Hedge Wizard Basil of the Wild",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 192,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 749,
    "name": "Magus George of the Heath",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 197,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 750,
    "name": "Thaumaturge Wolfram of the Marsh",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 217,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 751,
    "name": "Sky Master Magpie of the Bibliotheca",
    "background": 1,
    "body": 7,
    "familiar": 108,
    "head": 144,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 752,
    "name": "David of the Villa",
    "background": 2,
    "body": 40,
    "familiar": 107,
    "head": 214,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 753,
    "name": "Voodoo Priest Caligari of the Marsh",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 179,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 754,
    "name": "Enchanter Tundror of the Lake",
    "background": 1,
    "body": 41,
    "familiar": 101,
    "head": 220,
    "prop": 329,
    "rune": 291
  },
  {
    "idx": 755,
    "name": "Necromancer Zeromus of the Ash",
    "background": 2,
    "body": 71,
    "familiar": 97,
    "head": 224,
    "prop": 254,
    "rune": 297
  },
  {
    "idx": 756,
    "name": "Alchemist Min of the Wood",
    "background": 0,
    "body": 31,
    "familiar": 114,
    "head": 180,
    "prop": 267,
    "rune": 285
  },
  {
    "idx": 757,
    "name": "Archmagus Pumlo of the Hills",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 153,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 758,
    "name": "Wild Mage Hadrien of the Steppe",
    "background": 1,
    "body": 12,
    "familiar": 111,
    "head": 228,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 759,
    "name": "Ozohr of the Moors",
    "background": 1,
    "body": 82,
    "familiar": 7777,
    "head": 227,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 760,
    "name": "Druid Ulysse of the Riviera",
    "background": 0,
    "body": 42,
    "familiar": 97,
    "head": 218,
    "prop": 319,
    "rune": 303
  },
  {
    "idx": 761,
    "name": "Artificer David of Xanadu",
    "background": 1,
    "body": 8,
    "familiar": 114,
    "head": 127,
    "prop": 261,
    "rune": 299
  },
  {
    "idx": 762,
    "name": "Holy Monk Aldo of the Tower",
    "background": 0,
    "body": 6,
    "familiar": 7777,
    "head": 125,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 763,
    "name": "Shadow Mage Zelroth of the Ether",
    "background": 1,
    "body": 24,
    "familiar": 90,
    "head": 212,
    "prop": 248,
    "rune": 291
  },
  {
    "idx": 764,
    "name": "Shaman Chyou of the Brambles",
    "background": 0,
    "body": 39,
    "familiar": 111,
    "head": 180,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 765,
    "name": "Mystic Amir of the Hall",
    "background": 0,
    "body": 40,
    "familiar": 111,
    "head": 238,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 766,
    "name": "Magus Danny of the Realm",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 203,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 767,
    "name": "Hydromancer  of the Swell",
    "background": 3,
    "body": 80,
    "familiar": 116,
    "head": 195,
    "prop": 314,
    "rune": 286
  },
  {
    "idx": 768,
    "name": "Druid Zane of the Capital",
    "background": 2,
    "body": 74,
    "familiar": 95,
    "head": 160,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 769,
    "name": "Faye of the Heath",
    "background": 3,
    "body": 43,
    "familiar": 106,
    "head": 131,
    "prop": 312,
    "rune": 284
  },
  {
    "idx": 770,
    "name": "Sky Master Hank of the Bastion",
    "background": 2,
    "body": 18,
    "familiar": 90,
    "head": 144,
    "prop": 322,
    "rune": 296
  },
  {
    "idx": 771,
    "name": "Alchemist Giuseppe of Atlantis",
    "background": 1,
    "body": 57,
    "familiar": 7777,
    "head": 179,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 772,
    "name": "Pyromancer Ixar of the Astral Plane",
    "background": 2,
    "body": 75,
    "familiar": 101,
    "head": 189,
    "prop": 309,
    "rune": 282
  },
  {
    "idx": 773,
    "name": "Sage Eronin of Mu",
    "background": 2,
    "body": 75,
    "familiar": 116,
    "head": 125,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 774,
    "name": "Battle Mage Hagar of the Woodlands",
    "background": 0,
    "body": 28,
    "familiar": 112,
    "head": 217,
    "prop": 319,
    "rune": 287
  },
  {
    "idx": 775,
    "name": "Ice Mage Pezo of the Ice",
    "background": 0,
    "body": 73,
    "familiar": 7777,
    "head": 235,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 776,
    "name": "Sorcerer Alizam of the Mountain",
    "background": 0,
    "body": 19,
    "familiar": 7777,
    "head": 219,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 777,
    "name": "Sacred Key Master",
    "background": 1,
    "body": 64,
    "familiar": 121,
    "head": 170,
    "prop": 260,
    "rune": 289
  },
  {
    "idx": 778,
    "name": "Enchanter Arabella of the Capital",
    "background": 0,
    "body": 18,
    "familiar": 97,
    "head": 187,
    "prop": 308,
    "rune": 284
  },
  {
    "idx": 779,
    "name": "Hedge Wizard Lenora of the Hollow",
    "background": 0,
    "body": 37,
    "familiar": 106,
    "head": 166,
    "prop": 312,
    "rune": 303
  },
  {
    "idx": 780,
    "name": "Diviner Jahid of the Veil",
    "background": 3,
    "body": 24,
    "familiar": 88,
    "head": 142,
    "prop": 252,
    "rune": 289
  },
  {
    "idx": 781,
    "name": "Sorcerer Robert of the Toadstools",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 204,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 782,
    "name": "Druid Lilith of the Gnostics",
    "background": 2,
    "body": 10,
    "familiar": 104,
    "head": 159,
    "prop": 276,
    "rune": 292
  },
  {
    "idx": 783,
    "name": "Summoner Milton of the Temple",
    "background": 2,
    "body": 63,
    "familiar": 7777,
    "head": 212,
    "prop": 253,
    "rune": 287
  },
  {
    "idx": 784,
    "name": "Battle Mage Wolfram of the Wood",
    "background": 1,
    "body": 84,
    "familiar": 93,
    "head": 218,
    "prop": 340,
    "rune": 299
  },
  {
    "idx": 785,
    "name": "Enchanter Circe of the Realm",
    "background": 2,
    "body": 30,
    "familiar": 120,
    "head": 191,
    "prop": 311,
    "rune": 7777
  },
  {
    "idx": 786,
    "name": "Oracle Circe of the Valley",
    "background": 2,
    "body": 21,
    "familiar": 95,
    "head": 198,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 787,
    "name": "Sorcerer Lumos of the Realm",
    "background": 1,
    "body": 67,
    "familiar": 119,
    "head": 229,
    "prop": 310,
    "rune": 300
  },
  {
    "idx": 788,
    "name": "Archmagus George of the Hall",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 153,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 789,
    "name": "Battlemage Kurama of the Morning Star",
    "background": 1,
    "body": 86,
    "familiar": 120,
    "head": 243,
    "prop": 309,
    "rune": 284
  },
  {
    "idx": 790,
    "name": "Necromancer Samael of the Wold",
    "background": 0,
    "body": 13,
    "familiar": 105,
    "head": 194,
    "prop": 314,
    "rune": 282
  },
  {
    "idx": 791,
    "name": "Geomancer Ariadne of the Forest",
    "background": 1,
    "body": 34,
    "familiar": 89,
    "head": 132,
    "prop": 317,
    "rune": 287
  },
  {
    "idx": 792,
    "name": "Pyromancer Flamos from the Abyss",
    "background": 1,
    "body": 85,
    "familiar": 89,
    "head": 158,
    "prop": 271,
    "rune": 288
  },
  {
    "idx": 793,
    "name": "Battlemage Lei of Mu",
    "background": 3,
    "body": 68,
    "familiar": 88,
    "head": 180,
    "prop": 309,
    "rune": 292
  },
  {
    "idx": 794,
    "name": "Pyromancer Miyo of the Great Blue",
    "background": 2,
    "body": 57,
    "familiar": 120,
    "head": 126,
    "prop": 277,
    "rune": 290
  },
  {
    "idx": 795,
    "name": "Adept Hind of the Brambles",
    "background": 3,
    "body": 82,
    "familiar": 111,
    "head": 167,
    "prop": 266,
    "rune": 283
  },
  {
    "idx": 796,
    "name": "Charmer Daphne of the Wild",
    "background": 0,
    "body": 36,
    "familiar": 120,
    "head": 156,
    "prop": 315,
    "rune": 292
  },
  {
    "idx": 797,
    "name": "Enchanter Artis of the Canyon",
    "background": 1,
    "body": 34,
    "familiar": 105,
    "head": 131,
    "prop": 7777,
    "rune": 297
  },
  {
    "idx": 798,
    "name": "Oracle Cosmo of Arcadia",
    "background": 3,
    "body": 43,
    "familiar": 123,
    "head": 164,
    "prop": 251,
    "rune": 284
  },
  {
    "idx": 799,
    "name": "Arch-Magician Properpine of the Thorn",
    "background": 1,
    "body": 28,
    "familiar": 108,
    "head": 176,
    "prop": 306,
    "rune": 294
  },
  {
    "idx": 800,
    "name": "Adept Beyna of the Event Horizon",
    "background": 0,
    "body": 24,
    "familiar": 88,
    "head": 139,
    "prop": 338,
    "rune": 302
  },
  {
    "idx": 801,
    "name": "Zane of the Havens",
    "background": 2,
    "body": 6,
    "familiar": 110,
    "head": 228,
    "prop": 260,
    "rune": 289
  },
  {
    "idx": 802,
    "name": "Electromancer Lucinda of the Valley",
    "background": 3,
    "body": 21,
    "familiar": 117,
    "head": 176,
    "prop": 305,
    "rune": 300
  },
  {
    "idx": 803,
    "name": "Hedge Wizard Ursula of the Hills",
    "background": 2,
    "body": 35,
    "familiar": 114,
    "head": 223,
    "prop": 253,
    "rune": 302
  },
  {
    "idx": 804,
    "name": "Artificer Brown Cow of the River",
    "background": 0,
    "body": 15,
    "familiar": 89,
    "head": 193,
    "prop": 261,
    "rune": 287
  },
  {
    "idx": 805,
    "name": "Amir of the Wood",
    "background": 0,
    "body": 44,
    "familiar": 123,
    "head": 230,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 806,
    "name": "Magus Tabitha of the Marsh",
    "background": 1,
    "body": 37,
    "familiar": 123,
    "head": 155,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 807,
    "name": "Battle Mage Ratko of Xanadu",
    "background": 1,
    "body": 10,
    "familiar": 119,
    "head": 213,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 808,
    "name": "Null Mage Voidoth of Mu",
    "background": 3,
    "body": 9,
    "familiar": 88,
    "head": 194,
    "prop": 334,
    "rune": 286
  },
  {
    "idx": 809,
    "name": "Wild Mage Bathsheba of the Moors",
    "background": 0,
    "body": 34,
    "familiar": 99,
    "head": 131,
    "prop": 319,
    "rune": 304
  },
  {
    "idx": 810,
    "name": "Augurer Eric of the Tower",
    "background": 1,
    "body": 48,
    "familiar": 88,
    "head": 177,
    "prop": 252,
    "rune": 293
  },
  {
    "idx": 811,
    "name": "Cleric Elizabeth of the Plains",
    "background": 1,
    "body": 32,
    "familiar": 93,
    "head": 176,
    "prop": 325,
    "rune": 287
  },
  {
    "idx": 812,
    "name": "Magus Jahid of Xanadu",
    "background": 0,
    "body": 67,
    "familiar": 119,
    "head": 237,
    "prop": 268,
    "rune": 290
  },
  {
    "idx": 813,
    "name": "Bard Diabolos of the Toadstools",
    "background": 3,
    "body": 30,
    "familiar": 104,
    "head": 242,
    "prop": 257,
    "rune": 284
  },
  {
    "idx": 814,
    "name": "Alessar of the Mist",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 138,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 815,
    "name": "Adept Jahid of the Keep",
    "background": 2,
    "body": 78,
    "familiar": 93,
    "head": 146,
    "prop": 325,
    "rune": 298
  },
  {
    "idx": 816,
    "name": "Magus Lumos of the Hall",
    "background": 3,
    "body": 77,
    "familiar": 103,
    "head": 186,
    "prop": 328,
    "rune": 283
  },
  {
    "idx": 817,
    "name": "Alchemist Jianyu of the Mount",
    "background": 0,
    "body": 63,
    "familiar": 97,
    "head": 236,
    "prop": 271,
    "rune": 283
  },
  {
    "idx": 818,
    "name": "Enchanter Victoria of the Valley",
    "background": 1,
    "body": 35,
    "familiar": 114,
    "head": 139,
    "prop": 315,
    "rune": 294
  },
  {
    "idx": 819,
    "name": "Sorcerer Celah of the Desert",
    "background": 0,
    "body": 5,
    "familiar": 89,
    "head": 232,
    "prop": 280,
    "rune": 288
  },
  {
    "idx": 820,
    "name": "Bard Milo of the Wood",
    "background": 1,
    "body": 13,
    "familiar": 123,
    "head": 127,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 821,
    "name": "Arch-Magician Sonja of the Grotto",
    "background": 3,
    "body": 31,
    "familiar": 88,
    "head": 131,
    "prop": 325,
    "rune": 287
  },
  {
    "idx": 822,
    "name": "Alchemist Rita of the Hills",
    "background": 0,
    "body": 35,
    "familiar": 110,
    "head": 155,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 823,
    "name": "Enchanter Cassiopeia of the Road",
    "background": 2,
    "body": 21,
    "familiar": 114,
    "head": 135,
    "prop": 280,
    "rune": 301
  },
  {
    "idx": 824,
    "name": "Battle Mage Talon of the Oasis",
    "background": 1,
    "body": 58,
    "familiar": 104,
    "head": 177,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 825,
    "name": "Archmagus Jerret of the Wood",
    "background": 0,
    "body": 84,
    "familiar": 103,
    "head": 147,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 826,
    "name": "Runecaster Voidoth of the Capital",
    "background": 0,
    "body": 74,
    "familiar": 103,
    "head": 239,
    "prop": 256,
    "rune": 304
  },
  {
    "idx": 827,
    "name": "Celah of the Atheneum",
    "background": 1,
    "body": 6,
    "familiar": 103,
    "head": 212,
    "prop": 305,
    "rune": 290
  },
  {
    "idx": 828,
    "name": "Illusionist Celeste of the Brambles",
    "background": 2,
    "body": 37,
    "familiar": 105,
    "head": 191,
    "prop": 246,
    "rune": 296
  },
  {
    "idx": 829,
    "name": "Alchemist Hagar of the Palms",
    "background": 0,
    "body": 60,
    "familiar": 7777,
    "head": 182,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 830,
    "name": "Battle Mage Magnus of the River",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 216,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 831,
    "name": "Archmagus Milo of the Gnostics",
    "background": 2,
    "body": 75,
    "familiar": 93,
    "head": 202,
    "prop": 270,
    "rune": 299
  },
  {
    "idx": 832,
    "name": "Ice Mage Magnus out of the Blizzard",
    "background": 1,
    "body": 73,
    "familiar": 89,
    "head": 220,
    "prop": 312,
    "rune": 303
  },
  {
    "idx": 833,
    "name": "Druid Silas of the Mist",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 211,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 834,
    "name": "Arch-Magician Marceau of the Bastion",
    "background": 2,
    "body": 77,
    "familiar": 89,
    "head": 179,
    "prop": 306,
    "rune": 296
  },
  {
    "idx": 835,
    "name": "Mystic Oxnard of the Cold",
    "background": 0,
    "body": 65,
    "familiar": 89,
    "head": 193,
    "prop": 322,
    "rune": 294
  },
  {
    "idx": 836,
    "name": "Sage Dante of the Havens",
    "background": 1,
    "body": 55,
    "familiar": 111,
    "head": 133,
    "prop": 316,
    "rune": 302
  },
  {
    "idx": 837,
    "name": "Shaman Ixar of the Desert",
    "background": 0,
    "body": 5,
    "familiar": 7777,
    "head": 238,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 838,
    "name": "Artificer Salty of the Thorn",
    "background": 0,
    "body": 29,
    "familiar": 108,
    "head": 235,
    "prop": 260,
    "rune": 294
  },
  {
    "idx": 839,
    "name": "Charmer Daria of the Hollow",
    "background": 2,
    "body": 31,
    "familiar": 93,
    "head": 132,
    "prop": 270,
    "rune": 304
  },
  {
    "idx": 840,
    "name": "Pyromancer Lamia",
    "background": 2,
    "body": 48,
    "familiar": 7777,
    "head": 191,
    "prop": 309,
    "rune": 304
  },
  {
    "idx": 841,
    "name": "Arch-Magician Bucky of the Brambles",
    "background": 1,
    "body": 42,
    "familiar": 7777,
    "head": 167,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 842,
    "name": "Archmagus Alessar of the Havens",
    "background": 3,
    "body": 10,
    "familiar": 105,
    "head": 221,
    "prop": 306,
    "rune": 301
  },
  {
    "idx": 843,
    "name": "Archmagus David of the Citadel",
    "background": 0,
    "body": 74,
    "familiar": 104,
    "head": 147,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 844,
    "name": "Archmagus Aldus of the Marsh",
    "background": 2,
    "body": 44,
    "familiar": 112,
    "head": 185,
    "prop": 316,
    "rune": 303
  },
  {
    "idx": 845,
    "name": "Witch Ambrosia of the Hollow",
    "background": 0,
    "body": 36,
    "familiar": 115,
    "head": 209,
    "prop": 262,
    "rune": 287
  },
  {
    "idx": 846,
    "name": "Clairvoyant Uvlius of the Citadel",
    "background": 1,
    "body": 74,
    "familiar": 112,
    "head": 228,
    "prop": 252,
    "rune": 299
  },
  {
    "idx": 847,
    "name": "Colormancer Colorman of the Capital",
    "background": 2,
    "body": 46,
    "familiar": 123,
    "head": 169,
    "prop": 254,
    "rune": 285
  },
  {
    "idx": 848,
    "name": "Alchemist Oberon of the Sun",
    "background": 1,
    "body": 61,
    "familiar": 110,
    "head": 230,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 849,
    "name": "Chronomancer Zaros of the Gnostics",
    "background": 0,
    "body": 10,
    "familiar": 7777,
    "head": 162,
    "prop": 259,
    "rune": 300
  },
  {
    "idx": 850,
    "name": "Illusionist Ozohr of the Glacier",
    "background": 1,
    "body": 73,
    "familiar": 103,
    "head": 153,
    "prop": 306,
    "rune": 303
  },
  {
    "idx": 851,
    "name": "Geomancer Behemoth",
    "background": 1,
    "body": 9,
    "familiar": 89,
    "head": 193,
    "prop": 308,
    "rune": 283
  },
  {
    "idx": 852,
    "name": "Ice Mage Flynn of the Cold",
    "background": 3,
    "body": 65,
    "familiar": 119,
    "head": 173,
    "prop": 247,
    "rune": 292
  },
  {
    "idx": 853,
    "name": "Sorcerer Quddus of the Bibliotheca",
    "background": 2,
    "body": 49,
    "familiar": 119,
    "head": 142,
    "prop": 308,
    "rune": 285
  },
  {
    "idx": 854,
    "name": "Arcanist Hothor of the Wood",
    "background": 1,
    "body": 42,
    "familiar": 7777,
    "head": 188,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 855,
    "name": "Artificer Baozhai of the Moors",
    "background": 2,
    "body": 34,
    "familiar": 109,
    "head": 180,
    "prop": 261,
    "rune": 302
  },
  {
    "idx": 856,
    "name": "Artificer Orpheus of the Citadel",
    "background": 1,
    "body": 40,
    "familiar": 110,
    "head": 160,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 857,
    "name": "Archmagus Alessar of the Circle",
    "background": 2,
    "body": 30,
    "familiar": 119,
    "head": 226,
    "prop": 268,
    "rune": 282
  },
  {
    "idx": 858,
    "name": "Larissa of the Wood",
    "background": 2,
    "body": 21,
    "familiar": 7777,
    "head": 135,
    "prop": 261,
    "rune": 285
  },
  {
    "idx": 859,
    "name": "Conjurer Azar of the Wold",
    "background": 3,
    "body": 44,
    "familiar": 105,
    "head": 158,
    "prop": 273,
    "rune": 297
  },
  {
    "idx": 860,
    "name": "Nikolas of the Canyon",
    "background": 0,
    "body": 84,
    "familiar": 103,
    "head": 233,
    "prop": 338,
    "rune": 294
  },
  {
    "idx": 861,
    "name": "Hedge Wizard Robert of the Desert",
    "background": 3,
    "body": 58,
    "familiar": 89,
    "head": 165,
    "prop": 312,
    "rune": 297
  },
  {
    "idx": 862,
    "name": "Archmagus Charlord of the Gnostics",
    "background": 1,
    "body": 24,
    "familiar": 88,
    "head": 158,
    "prop": 326,
    "rune": 295
  },
  {
    "idx": 863,
    "name": "Mystic Nicolas of the Carnival",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 177,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 864,
    "name": "Archmagus Isaac of the Bastion",
    "background": 1,
    "body": 26,
    "familiar": 7777,
    "head": 153,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 865,
    "name": "Calista of the Moors",
    "background": 2,
    "body": 21,
    "familiar": 111,
    "head": 187,
    "prop": 7777,
    "rune": 304
  },
  {
    "idx": 866,
    "name": "Archmagus Devon of the River",
    "background": 0,
    "body": 36,
    "familiar": 108,
    "head": 187,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 867,
    "name": "Sorcerer Alizam of the Mist",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 222,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 868,
    "name": "Sorcerer Quddus of the Brambles",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 219,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 869,
    "name": "Illusionist Dutorn of the Realm",
    "background": 2,
    "body": 29,
    "familiar": 120,
    "head": 183,
    "prop": 273,
    "rune": 294
  },
  {
    "idx": 870,
    "name": "Artificer Bayard of the Desert",
    "background": 2,
    "body": 5,
    "familiar": 116,
    "head": 206,
    "prop": 260,
    "rune": 290
  },
  {
    "idx": 871,
    "name": "Archmagus Iprix of the Hall",
    "background": 0,
    "body": 77,
    "familiar": 104,
    "head": 192,
    "prop": 273,
    "rune": 288
  },
  {
    "idx": 872,
    "name": "Ghost Eater Jig of the Keep",
    "background": 1,
    "body": 6,
    "familiar": 103,
    "head": 200,
    "prop": 332,
    "rune": 284
  },
  {
    "idx": 873,
    "name": "Enchanter Bathsheba of the Marsh",
    "background": 3,
    "body": 18,
    "familiar": 119,
    "head": 132,
    "prop": 256,
    "rune": 292
  },
  {
    "idx": 874,
    "name": "Enchanter Danny of the Glacier",
    "background": 2,
    "body": 65,
    "familiar": 99,
    "head": 218,
    "prop": 266,
    "rune": 301
  },
  {
    "idx": 875,
    "name": "Arch-Magician Epher of Elysium",
    "background": 2,
    "body": 50,
    "familiar": 94,
    "head": 167,
    "prop": 324,
    "rune": 287
  },
  {
    "idx": 876,
    "name": "Battle Mage Ulysse of the Sacred Pillars",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 203,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 877,
    "name": "Arch-Magician Goliath of Arcadia",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 204,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 878,
    "name": "Alchemist Moka of Xanadu",
    "background": 1,
    "body": 24,
    "familiar": 7777,
    "head": 171,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 879,
    "name": "Titania of the Valley",
    "background": 0,
    "body": 36,
    "familiar": 115,
    "head": 139,
    "prop": 250,
    "rune": 299
  },
  {
    "idx": 880,
    "name": "Arch-Magician Apollo of Dreams",
    "background": 1,
    "body": 7,
    "familiar": 7777,
    "head": 229,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 881,
    "name": "Battlemage Zubin of the River",
    "background": 0,
    "body": 42,
    "familiar": 112,
    "head": 141,
    "prop": 277,
    "rune": 296
  },
  {
    "idx": 882,
    "name": "Enchanter Sondra of the Forest",
    "background": 0,
    "body": 44,
    "familiar": 123,
    "head": 191,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 883,
    "name": "Aeromancer Min of the Obelisk",
    "background": 0,
    "body": 54,
    "familiar": 110,
    "head": 180,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 884,
    "name": "Archmagus Jig of the Marsh",
    "background": 1,
    "body": 15,
    "familiar": 7777,
    "head": 178,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 885,
    "name": "Sorcerer Jeldor of the Tower",
    "background": 0,
    "body": 74,
    "familiar": 123,
    "head": 185,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 886,
    "name": "Archmagus Aldo of the Heath",
    "background": 1,
    "body": 41,
    "familiar": 110,
    "head": 150,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 887,
    "name": "Arcanist Aleister of the Steppe",
    "background": 0,
    "body": 84,
    "familiar": 120,
    "head": 185,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 888,
    "name": "Geomancer Hind of the Mountain",
    "background": 1,
    "body": 23,
    "familiar": 97,
    "head": 167,
    "prop": 308,
    "rune": 297
  },
  {
    "idx": 889,
    "name": "Magus Taqi of the Steppe",
    "background": 0,
    "body": 19,
    "familiar": 104,
    "head": 219,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 890,
    "name": "Mystic JackDaw of the Veil",
    "background": 1,
    "body": 10,
    "familiar": 109,
    "head": 144,
    "prop": 249,
    "rune": 284
  },
  {
    "idx": 891,
    "name": "Arch-Magician Angus of the Desert",
    "background": 0,
    "body": 5,
    "familiar": 7777,
    "head": 216,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 892,
    "name": "Archmagus Ixar in the Shadows",
    "background": 2,
    "body": 87,
    "familiar": 97,
    "head": 211,
    "prop": 307,
    "rune": 290
  },
  {
    "idx": 893,
    "name": "Orpheus of the Fey",
    "background": 0,
    "body": 28,
    "familiar": 114,
    "head": 141,
    "prop": 338,
    "rune": 299
  },
  {
    "idx": 894,
    "name": "Magus Faiz of the Palms",
    "background": 0,
    "body": 58,
    "familiar": 94,
    "head": 237,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 895,
    "name": "Sorcerer Crowley of the Hall",
    "background": 0,
    "body": 76,
    "familiar": 114,
    "head": 227,
    "prop": 312,
    "rune": 291
  },
  {
    "idx": 896,
    "name": "Archmagus Alatar of the Realm",
    "background": 2,
    "body": 68,
    "familiar": 93,
    "head": 202,
    "prop": 251,
    "rune": 299
  },
  {
    "idx": 897,
    "name": "Sorcerer Alatar in the Shadows",
    "background": 1,
    "body": 83,
    "familiar": 90,
    "head": 238,
    "prop": 260,
    "rune": 303
  },
  {
    "idx": 898,
    "name": "Arcanist Artis of Mu",
    "background": 2,
    "body": 11,
    "familiar": 111,
    "head": 131,
    "prop": 328,
    "rune": 304
  },
  {
    "idx": 899,
    "name": "Chronomancer Udor of the Marsh",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 138,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 900,
    "name": "Magus Atlanta of the Hills",
    "background": 1,
    "body": 37,
    "familiar": 120,
    "head": 187,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 901,
    "name": "Battle Mage Durm of the Marsh",
    "background": 1,
    "body": 82,
    "familiar": 111,
    "head": 133,
    "prop": 308,
    "rune": 304
  },
  {
    "idx": 902,
    "name": "Witch Sylvia of the Steppe",
    "background": 0,
    "body": 15,
    "familiar": 119,
    "head": 166,
    "prop": 312,
    "rune": 304
  },
  {
    "idx": 903,
    "name": "Druid Anton of Alfheim",
    "background": 2,
    "body": 29,
    "familiar": 119,
    "head": 205,
    "prop": 337,
    "rune": 300
  },
  {
    "idx": 904,
    "name": "Sage Idris of the Desert",
    "background": 0,
    "body": 27,
    "familiar": 94,
    "head": 237,
    "prop": 277,
    "rune": 287
  },
  {
    "idx": 905,
    "name": "Bard Alessar of the Brine",
    "background": 2,
    "body": 57,
    "familiar": 89,
    "head": 229,
    "prop": 247,
    "rune": 285
  },
  {
    "idx": 906,
    "name": "Geomancer Aleister of the Riviera",
    "background": 1,
    "body": 42,
    "familiar": 7777,
    "head": 227,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 907,
    "name": "Arcanist Goober of the Sacred Pillars",
    "background": 0,
    "body": 6,
    "familiar": 7777,
    "head": 200,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 908,
    "name": "Pyromancer Nolan of the Palms",
    "background": 3,
    "body": 27,
    "familiar": 94,
    "head": 177,
    "prop": 309,
    "rune": 7777
  },
  {
    "idx": 909,
    "name": "Arch-Magician Ofaris",
    "background": 0,
    "body": 86,
    "familiar": 114,
    "head": 147,
    "prop": 253,
    "rune": 299
  },
  {
    "idx": 910,
    "name": "Battle Mage Cromwell of the Dunes",
    "background": 0,
    "body": 27,
    "familiar": 7777,
    "head": 188,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 911,
    "name": "Archmagus Sisk of the Moors",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 207,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 912,
    "name": "Charmer Circe of the Heath",
    "background": 1,
    "body": 21,
    "familiar": 119,
    "head": 190,
    "prop": 268,
    "rune": 294
  },
  {
    "idx": 913,
    "name": "Battle Mage Danny of Alfheim",
    "background": 2,
    "body": 30,
    "familiar": 119,
    "head": 173,
    "prop": 276,
    "rune": 283
  },
  {
    "idx": 914,
    "name": "Druid Soya in the Shadows",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 185,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 915,
    "name": "Alchemist Kryll of the Villa",
    "background": 2,
    "body": 74,
    "familiar": 95,
    "head": 178,
    "prop": 270,
    "rune": 302
  },
  {
    "idx": 916,
    "name": "Arch-Magician Nicolas of the Garden",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 177,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 917,
    "name": "Sorcerer Jerret of the Dunes",
    "background": 0,
    "body": 5,
    "familiar": 112,
    "head": 232,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 918,
    "name": "Sorcerer Ixar of the Marsh",
    "background": 3,
    "body": 84,
    "familiar": 107,
    "head": 189,
    "prop": 326,
    "rune": 297
  },
  {
    "idx": 919,
    "name": "Battle Mage Rodolfo of the Havens",
    "background": 3,
    "body": 62,
    "familiar": 110,
    "head": 217,
    "prop": 261,
    "rune": 293
  },
  {
    "idx": 920,
    "name": "Void Disciple Reza of the Cosmos",
    "background": 1,
    "body": 67,
    "familiar": 7777,
    "head": 222,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 921,
    "name": "Charmer Titania of the Sea",
    "background": 2,
    "body": 80,
    "familiar": 119,
    "head": 132,
    "prop": 250,
    "rune": 296
  },
  {
    "idx": 922,
    "name": "Thaumaturge Anton of the Dunes",
    "background": 2,
    "body": 61,
    "familiar": 94,
    "head": 205,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 923,
    "name": "Colormancer Devo of the Hall",
    "background": 0,
    "body": 26,
    "familiar": 108,
    "head": 169,
    "prop": 271,
    "rune": 288
  },
  {
    "idx": 924,
    "name": "Battlemage Ravana of the Sea",
    "background": 1,
    "body": 57,
    "familiar": 88,
    "head": 125,
    "prop": 309,
    "rune": 301
  },
  {
    "idx": 925,
    "name": "Witch Milo of the Hall",
    "background": 2,
    "body": 26,
    "familiar": 95,
    "head": 160,
    "prop": 321,
    "rune": 297
  },
  {
    "idx": 926,
    "name": "Soran of Limbo",
    "background": 0,
    "body": 87,
    "familiar": 115,
    "head": 127,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 927,
    "name": "Magus Aleister of the Ether",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 202,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 928,
    "name": "Hadrien of the Desert",
    "background": 0,
    "body": 61,
    "familiar": 112,
    "head": 162,
    "prop": 256,
    "rune": 283
  },
  {
    "idx": 929,
    "name": "Bard Embrose of the Platonic Shadow",
    "background": 0,
    "body": 11,
    "familiar": 105,
    "head": 158,
    "prop": 247,
    "rune": 290
  },
  {
    "idx": 930,
    "name": "Voodoo Priest Armstrong of the Secret Fire",
    "background": 1,
    "body": 86,
    "familiar": 123,
    "head": 177,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 931,
    "name": "Shadow Mage Zevi of the Desert",
    "background": 3,
    "body": 60,
    "familiar": 106,
    "head": 167,
    "prop": 337,
    "rune": 298
  },
  {
    "idx": 932,
    "name": "Shaman Purple Boy of the Havens",
    "background": 0,
    "body": 8,
    "familiar": 88,
    "head": 154,
    "prop": 334,
    "rune": 290
  },
  {
    "idx": 933,
    "name": "Arcanist Bullock of the Road",
    "background": 1,
    "body": 15,
    "familiar": 97,
    "head": 193,
    "prop": 250,
    "rune": 288
  },
  {
    "idx": 934,
    "name": "Geomancer Apollo of the Hills",
    "background": 2,
    "body": 79,
    "familiar": 7777,
    "head": 230,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 935,
    "name": "Adept Nolan of Elysium",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 188,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 936,
    "name": "Alchemist Amir of the Keep",
    "background": 1,
    "body": 19,
    "familiar": 120,
    "head": 231,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 937,
    "name": "Enchanter Althea of the Capital",
    "background": 3,
    "body": 48,
    "familiar": 93,
    "head": 187,
    "prop": 252,
    "rune": 292
  },
  {
    "idx": 938,
    "name": "Conjurer Eliphas of Xanadu",
    "background": 0,
    "body": 9,
    "familiar": 112,
    "head": 149,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 939,
    "name": "Bard Faiz of the Mount",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 164,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 940,
    "name": "Bard Tengu of the Keep",
    "background": 0,
    "body": 55,
    "familiar": 90,
    "head": 243,
    "prop": 247,
    "rune": 284
  },
  {
    "idx": 941,
    "name": "Ofaris of the Steppe",
    "background": 0,
    "body": 43,
    "familiar": 114,
    "head": 230,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 942,
    "name": "Augurer Borak of the Crag",
    "background": 1,
    "body": 73,
    "familiar": 112,
    "head": 182,
    "prop": 252,
    "rune": 290
  },
  {
    "idx": 943,
    "name": "Hedge Wizard Angus of the Field",
    "background": 1,
    "body": 45,
    "familiar": 114,
    "head": 133,
    "prop": 312,
    "rune": 299
  },
  {
    "idx": 944,
    "name": "Archmagus  of Mu",
    "background": 0,
    "body": 75,
    "familiar": 110,
    "head": 186,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 945,
    "name": "Alchemist Lumos of the Citadel",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 185,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 946,
    "name": "Magus Jaffer of the Palms",
    "background": 0,
    "body": 60,
    "familiar": 103,
    "head": 142,
    "prop": 260,
    "rune": 283
  },
  {
    "idx": 947,
    "name": "Shaman Wolfram of Dreams",
    "background": 0,
    "body": 54,
    "familiar": 99,
    "head": 218,
    "prop": 319,
    "rune": 287
  },
  {
    "idx": 948,
    "name": "Runecaster Davos of the Veil",
    "background": 0,
    "body": 28,
    "familiar": 7777,
    "head": 211,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 949,
    "name": "Arch-Magician Aslan of the Obelisk",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 204,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 950,
    "name": "Runecaster Ixar of the Brambles",
    "background": 1,
    "body": 12,
    "familiar": 7777,
    "head": 211,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 951,
    "name": "Archmagus Eden of the Wild",
    "background": 2,
    "body": 15,
    "familiar": 115,
    "head": 153,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 952,
    "name": "Thaumaturge Woomba of the Mount",
    "background": 1,
    "body": 6,
    "familiar": 7777,
    "head": 200,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 953,
    "name": "Arch-Magician Artis of the Plains",
    "background": 1,
    "body": 22,
    "familiar": 101,
    "head": 132,
    "prop": 325,
    "rune": 290
  },
  {
    "idx": 954,
    "name": "Conjurer Ulysse of the Brambles",
    "background": 1,
    "body": 15,
    "familiar": 89,
    "head": 218,
    "prop": 246,
    "rune": 300
  },
  {
    "idx": 955,
    "name": "Chronomancer Zubin of Dreams",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 153,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 956,
    "name": "Conjurer Takao of the Fey",
    "background": 2,
    "body": 30,
    "familiar": 106,
    "head": 243,
    "prop": 246,
    "rune": 288
  },
  {
    "idx": 957,
    "name": "Hedge Wizard Impy of the Villa",
    "background": 0,
    "body": 48,
    "familiar": 103,
    "head": 200,
    "prop": 328,
    "rune": 302
  },
  {
    "idx": 958,
    "name": "Lumos of the Road",
    "background": 1,
    "body": 14,
    "familiar": 114,
    "head": 238,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 959,
    "name": "Holy Monk Drokore of the Fey",
    "background": 0,
    "body": 30,
    "familiar": 99,
    "head": 125,
    "prop": 266,
    "rune": 288
  },
  {
    "idx": 960,
    "name": "Sorcerer Davos of the Brambles",
    "background": 1,
    "body": 79,
    "familiar": 115,
    "head": 238,
    "prop": 277,
    "rune": 283
  },
  {
    "idx": 961,
    "name": "Summoner  of the Atheneum",
    "background": 3,
    "body": 54,
    "familiar": 88,
    "head": 195,
    "prop": 254,
    "rune": 296
  },
  {
    "idx": 962,
    "name": "Adept Cromwell",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 213,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 963,
    "name": "Druid Khudalf of the Toadstools",
    "background": 3,
    "body": 30,
    "familiar": 103,
    "head": 188,
    "prop": 326,
    "rune": 296
  },
  {
    "idx": 964,
    "name": "Archmagus Velorina of the Ether",
    "background": 0,
    "body": 75,
    "familiar": 90,
    "head": 176,
    "prop": 334,
    "rune": 303
  },
  {
    "idx": 965,
    "name": "Necromancer Voidoth of the Veil",
    "background": 1,
    "body": 8,
    "familiar": 95,
    "head": 194,
    "prop": 271,
    "rune": 300
  },
  {
    "idx": 966,
    "name": "Mystic Apollo of the Gnostics",
    "background": 1,
    "body": 75,
    "familiar": 7777,
    "head": 197,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 967,
    "name": "Arch-Magician Aleister of the Toadstools",
    "background": 2,
    "body": 28,
    "familiar": 93,
    "head": 215,
    "prop": 326,
    "rune": 304
  },
  {
    "idx": 968,
    "name": "Sage Axel of the Keep",
    "background": 3,
    "body": 46,
    "familiar": 109,
    "head": 217,
    "prop": 245,
    "rune": 287
  },
  {
    "idx": 969,
    "name": "Charmer Arabella of the Grotto",
    "background": 1,
    "body": 19,
    "familiar": 7777,
    "head": 187,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 970,
    "name": "Arcanist Casper of the Realm",
    "background": 2,
    "body": 24,
    "familiar": 120,
    "head": 189,
    "prop": 334,
    "rune": 284
  },
  {
    "idx": 971,
    "name": "Enchanter Jadis of the Wood",
    "background": 3,
    "body": 36,
    "familiar": 101,
    "head": 156,
    "prop": 246,
    "rune": 286
  },
  {
    "idx": 972,
    "name": "Enchanter Circe of the Wold",
    "background": 3,
    "body": 21,
    "familiar": 97,
    "head": 198,
    "prop": 309,
    "rune": 285
  },
  {
    "idx": 973,
    "name": "Ghost Eater Aamon of the Ether",
    "background": 0,
    "body": 24,
    "familiar": 96,
    "head": 242,
    "prop": 307,
    "rune": 298
  },
  {
    "idx": 974,
    "name": "Alchemist Daphne of the Plains",
    "background": 2,
    "body": 35,
    "familiar": 110,
    "head": 191,
    "prop": 267,
    "rune": 303
  },
  {
    "idx": 975,
    "name": "Sorcerer Casper of the Mist",
    "background": 3,
    "body": 49,
    "familiar": 114,
    "head": 147,
    "prop": 269,
    "rune": 287
  },
  {
    "idx": 976,
    "name": "Necromancer Nemo of the Glacier",
    "background": 2,
    "body": 65,
    "familiar": 107,
    "head": 201,
    "prop": 274,
    "rune": 293
  },
  {
    "idx": 977,
    "name": "Alchemist Ulthar of the Carnival",
    "background": 3,
    "body": 29,
    "familiar": 94,
    "head": 145,
    "prop": 269,
    "rune": 287
  },
  {
    "idx": 978,
    "name": "Illusionist Fumiko of the Plains",
    "background": 2,
    "body": 19,
    "familiar": 120,
    "head": 126,
    "prop": 273,
    "rune": 284
  },
  {
    "idx": 979,
    "name": "Hydromancer Merlon of the Field",
    "background": 1,
    "body": 13,
    "familiar": 89,
    "head": 185,
    "prop": 314,
    "rune": 304
  },
  {
    "idx": 980,
    "name": "Enchanter Finn of the Brambles",
    "background": 2,
    "body": 45,
    "familiar": 104,
    "head": 213,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 981,
    "name": "Enchanter Sondra of the Tower",
    "background": 0,
    "body": 54,
    "familiar": 120,
    "head": 208,
    "prop": 271,
    "rune": 299
  },
  {
    "idx": 982,
    "name": "Enchanter Konoha of the Wood",
    "background": 3,
    "body": 18,
    "familiar": 108,
    "head": 243,
    "prop": 316,
    "rune": 303
  },
  {
    "idx": 983,
    "name": "Artificer Atlas of the River",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 204,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 984,
    "name": "Ice Mage Drusilla",
    "background": 2,
    "body": 65,
    "familiar": 105,
    "head": 166,
    "prop": 314,
    "rune": 287
  },
  {
    "idx": 985,
    "name": "Electromancer Azahl of the Brambles",
    "background": 0,
    "body": 44,
    "familiar": 103,
    "head": 141,
    "prop": 305,
    "rune": 299
  },
  {
    "idx": 986,
    "name": "Witch Lamia of the Moors",
    "background": 3,
    "body": 45,
    "familiar": 101,
    "head": 209,
    "prop": 276,
    "rune": 285
  },
  {
    "idx": 987,
    "name": "Shaman Angus of the Sacred Pillars",
    "background": 2,
    "body": 50,
    "familiar": 97,
    "head": 217,
    "prop": 319,
    "rune": 285
  },
  {
    "idx": 988,
    "name": "Shadow Mage Maia of the Keep",
    "background": 3,
    "body": 78,
    "familiar": 103,
    "head": 135,
    "prop": 332,
    "rune": 297
  },
  {
    "idx": 989,
    "name": "Shaman Malcom of the Heath",
    "background": 1,
    "body": 84,
    "familiar": 107,
    "head": 194,
    "prop": 316,
    "rune": 282
  },
  {
    "idx": 990,
    "name": "Arcanist Titania of the Moors",
    "background": 2,
    "body": 31,
    "familiar": 109,
    "head": 131,
    "prop": 250,
    "rune": 299
  },
  {
    "idx": 991,
    "name": "Soran of the Psychic Leap",
    "background": 2,
    "body": 75,
    "familiar": 104,
    "head": 199,
    "prop": 261,
    "rune": 296
  },
  {
    "idx": 992,
    "name": "Crowley of the Tower",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 230,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 993,
    "name": "Magus Zelroth of the Havens",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 230,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 994,
    "name": "Druid Daria of the Brambles",
    "background": 1,
    "body": 31,
    "familiar": 93,
    "head": 132,
    "prop": 325,
    "rune": 303
  },
  {
    "idx": 995,
    "name": "Merlon of the Forest",
    "background": 1,
    "body": 15,
    "familiar": 104,
    "head": 238,
    "prop": 255,
    "rune": 284
  },
  {
    "idx": 996,
    "name": "Spellsinger Remus of the Light",
    "background": 0,
    "body": 24,
    "familiar": 113,
    "head": 189,
    "prop": 275,
    "rune": 301
  },
  {
    "idx": 997,
    "name": "Cleric Marceline of the Hall",
    "background": 2,
    "body": 76,
    "familiar": 114,
    "head": 209,
    "prop": 306,
    "rune": 297
  },
  {
    "idx": 998,
    "name": "Cleric Astrid of the Lake",
    "background": 3,
    "body": 39,
    "familiar": 114,
    "head": 139,
    "prop": 338,
    "rune": 295
  },
  {
    "idx": 999,
    "name": "Enchanter Lamia of the Grotto",
    "background": 0,
    "body": 79,
    "familiar": 89,
    "head": 208,
    "prop": 263,
    "rune": 290
  },
  {
    "idx": 1000,
    "name": "Sharkey",
    "background": 0,
    "body": 10,
    "familiar": 7777,
    "head": 211,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 1001,
    "name": "Hedge Wizard Armstrong of the Mountain",
    "background": 0,
    "body": 42,
    "familiar": 99,
    "head": 133,
    "prop": 319,
    "rune": 299
  },
  {
    "idx": 1002,
    "name": "Charmer Artis of the Hollow",
    "background": 1,
    "body": 31,
    "familiar": 88,
    "head": 191,
    "prop": 265,
    "rune": 303
  },
  {
    "idx": 1003,
    "name": "Adept Thor of the Atheneum",
    "background": 2,
    "body": 50,
    "familiar": 94,
    "head": 206,
    "prop": 324,
    "rune": 293
  },
  {
    "idx": 1004,
    "name": "Sorcerer Nikolas of the Atheneum",
    "background": 2,
    "body": 6,
    "familiar": 114,
    "head": 215,
    "prop": 315,
    "rune": 299
  },
  {
    "idx": 1005,
    "name": "Magus Gully of the Waste",
    "background": 1,
    "body": 87,
    "familiar": 123,
    "head": 200,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 1006,
    "name": "Archmagus Uvlius of Avalon",
    "background": 1,
    "body": 6,
    "familiar": 90,
    "head": 215,
    "prop": 246,
    "rune": 283
  },
  {
    "idx": 1007,
    "name": "Archmagus Alessar of the Cold",
    "background": 0,
    "body": 73,
    "familiar": 119,
    "head": 228,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 1008,
    "name": "Alchemist Remus of the Hall",
    "background": 2,
    "body": 76,
    "familiar": 110,
    "head": 147,
    "prop": 270,
    "rune": 296
  },
  {
    "idx": 1009,
    "name": "Hydromancer Nikolas of the Reach",
    "background": 2,
    "body": 13,
    "familiar": 99,
    "head": 227,
    "prop": 314,
    "rune": 285
  },
  {
    "idx": 1010,
    "name": "Archmagus Soya of the Morning Star",
    "background": 1,
    "body": 87,
    "familiar": 7777,
    "head": 127,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 1011,
    "name": "Enchanter Sarah of Avalon",
    "background": 1,
    "body": 62,
    "familiar": 116,
    "head": 132,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 1012,
    "name": "Adept Solomon of Elysium",
    "background": 0,
    "body": 7,
    "familiar": 117,
    "head": 189,
    "prop": 249,
    "rune": 295
  },
  {
    "idx": 1013,
    "name": "Archmagus Yookoo of the Woodlands",
    "background": 1,
    "body": 28,
    "familiar": 108,
    "head": 235,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 1014,
    "name": "Battle Mage Ratko of the Havens",
    "background": 2,
    "body": 8,
    "familiar": 94,
    "head": 177,
    "prop": 270,
    "rune": 288
  },
  {
    "idx": 1015,
    "name": "Arcanist Toka of the Keep",
    "background": 2,
    "body": 78,
    "familiar": 112,
    "head": 200,
    "prop": 332,
    "rune": 292
  },
  {
    "idx": 1016,
    "name": "Aeromancer Allistair",
    "background": 2,
    "body": 28,
    "familiar": 110,
    "head": 227,
    "prop": 315,
    "rune": 300
  },
  {
    "idx": 1017,
    "name": "Arch-Magician Ulysse of Alfheim",
    "background": 2,
    "body": 28,
    "familiar": 110,
    "head": 206,
    "prop": 253,
    "rune": 283
  },
  {
    "idx": 1018,
    "name": "Alchemist Hadrien of the Court",
    "background": 1,
    "body": 76,
    "familiar": 93,
    "head": 214,
    "prop": 270,
    "rune": 287
  },
  {
    "idx": 1019,
    "name": "Charmer Thana of the Cosmos",
    "background": 2,
    "body": 52,
    "familiar": 105,
    "head": 208,
    "prop": 246,
    "rune": 287
  },
  {
    "idx": 1020,
    "name": "Artificer Layla of the Hall",
    "background": 2,
    "body": 26,
    "familiar": 104,
    "head": 131,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 1021,
    "name": "Voodoo Priest Victor of Elysium",
    "background": 1,
    "body": 6,
    "familiar": 114,
    "head": 179,
    "prop": 267,
    "rune": 284
  },
  {
    "idx": 1022,
    "name": "Artificer Chipper of the Moors",
    "background": 1,
    "body": 45,
    "familiar": 7777,
    "head": 201,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1023,
    "name": "Runecaster Nicolas of the Atheneum",
    "background": 2,
    "body": 62,
    "familiar": 116,
    "head": 129,
    "prop": 340,
    "rune": 288
  },
  {
    "idx": 1024,
    "name": "Transmuter Magpie of the Mist",
    "background": 2,
    "body": 55,
    "familiar": 105,
    "head": 144,
    "prop": 256,
    "rune": 282
  },
  {
    "idx": 1025,
    "name": "Hydromancer Homer of the Grotto",
    "background": 1,
    "body": 19,
    "familiar": 114,
    "head": 133,
    "prop": 314,
    "rune": 291
  },
  {
    "idx": 1026,
    "name": "Cosmic Mage Spore Boy of the Lake",
    "background": 2,
    "body": 41,
    "familiar": 114,
    "head": 195,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 1027,
    "name": "Alchemist Eizo of the Hall",
    "background": 0,
    "body": 74,
    "familiar": 7777,
    "head": 233,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1028,
    "name": "Sorcerer Aleister of the Inferno",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 197,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 1029,
    "name": "Adept Uvlius of the Marsh",
    "background": 0,
    "body": 42,
    "familiar": 7777,
    "head": 197,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 1030,
    "name": "Cryptomancer Lumos of the Moors",
    "background": 1,
    "body": 12,
    "familiar": 114,
    "head": 147,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 1031,
    "name": "Hedge Wizard Goliath of the Loch",
    "background": 1,
    "body": 80,
    "familiar": 93,
    "head": 206,
    "prop": 258,
    "rune": 297
  },
  {
    "idx": 1032,
    "name": "Evoker Kalo of the Heath",
    "background": 0,
    "body": 12,
    "familiar": 119,
    "head": 178,
    "prop": 321,
    "rune": 302
  },
  {
    "idx": 1033,
    "name": "Druid Bullock of the Sands",
    "background": 2,
    "body": 58,
    "familiar": 89,
    "head": 193,
    "prop": 276,
    "rune": 288
  },
  {
    "idx": 1034,
    "name": "Sorcerer Eizo of the Citadel",
    "background": 2,
    "body": 77,
    "familiar": 109,
    "head": 189,
    "prop": 256,
    "rune": 286
  },
  {
    "idx": 1035,
    "name": "Adept Bullock of the Marsh",
    "background": 3,
    "body": 42,
    "familiar": 89,
    "head": 193,
    "prop": 266,
    "rune": 294
  },
  {
    "idx": 1036,
    "name": "Artificer Chiron of the Havens",
    "background": 0,
    "body": 10,
    "familiar": 117,
    "head": 224,
    "prop": 261,
    "rune": 295
  },
  {
    "idx": 1037,
    "name": "Spellsinger Lamia of the Grotto",
    "background": 0,
    "body": 21,
    "familiar": 114,
    "head": 198,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1038,
    "name": "Hydromancer Vorvadoss of the Bastion",
    "background": 0,
    "body": 40,
    "familiar": 97,
    "head": 145,
    "prop": 314,
    "rune": 285
  },
  {
    "idx": 1039,
    "name": "Enchanter Lamia of El Dorado",
    "background": 3,
    "body": 48,
    "familiar": 90,
    "head": 187,
    "prop": 264,
    "rune": 292
  },
  {
    "idx": 1040,
    "name": "Battlemage Twinkletoes of the Sacred Pillars",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 201,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 1041,
    "name": "Arch-Magician Remus of the Cosmos",
    "background": 3,
    "body": 52,
    "familiar": 113,
    "head": 174,
    "prop": 258,
    "rune": 299
  },
  {
    "idx": 1042,
    "name": "Druid Reza of the Lake",
    "background": 1,
    "body": 15,
    "familiar": 115,
    "head": 237,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 1043,
    "name": "Archmagus Pumlo of Mu",
    "background": 0,
    "body": 10,
    "familiar": 103,
    "head": 238,
    "prop": 259,
    "rune": 304
  },
  {
    "idx": 1044,
    "name": "Battle Mage Durm of the Oasis",
    "background": 2,
    "body": 58,
    "familiar": 94,
    "head": 177,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1045,
    "name": "Archmagus Soya of the Citadel",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 153,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 1046,
    "name": "Cosmic Mage Artis of the Keep",
    "background": 1,
    "body": 49,
    "familiar": 106,
    "head": 131,
    "prop": 310,
    "rune": 302
  },
  {
    "idx": 1047,
    "name": "Aleister of the Wild",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 153,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 1048,
    "name": "Alchemist Pezo of the Moors",
    "background": 3,
    "body": 84,
    "familiar": 104,
    "head": 200,
    "prop": 268,
    "rune": 300
  },
  {
    "idx": 1049,
    "name": "Cartomancer Aiko of the Bastion",
    "background": 0,
    "body": 74,
    "familiar": 117,
    "head": 126,
    "prop": 251,
    "rune": 287
  },
  {
    "idx": 1050,
    "name": "Archmagus Eden of the Morning Star",
    "background": 1,
    "body": 87,
    "familiar": 115,
    "head": 211,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 1051,
    "name": "Eden of the Veil",
    "background": 1,
    "body": 30,
    "familiar": 7777,
    "head": 221,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 1052,
    "name": "Battle Mage Cromwell of El Dorado",
    "background": 1,
    "body": 74,
    "familiar": 109,
    "head": 188,
    "prop": 326,
    "rune": 295
  },
  {
    "idx": 1053,
    "name": "Aeromancer Ixar of the Veil",
    "background": 1,
    "body": 75,
    "familiar": 114,
    "head": 199,
    "prop": 315,
    "rune": 296
  },
  {
    "idx": 1054,
    "name": "Evoker Soran of the Garden",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 230,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 1055,
    "name": "Wild Mage Jabir of the Sacred Pillars",
    "background": 2,
    "body": 50,
    "familiar": 116,
    "head": 164,
    "prop": 340,
    "rune": 283
  },
  {
    "idx": 1056,
    "name": "Mystic Merlon of the Heath",
    "background": 0,
    "body": 42,
    "familiar": 111,
    "head": 138,
    "prop": 338,
    "rune": 283
  },
  {
    "idx": 1057,
    "name": "Pyromancer Flamos of the Light",
    "background": 1,
    "body": 75,
    "familiar": 120,
    "head": 158,
    "prop": 255,
    "rune": 291
  },
  {
    "idx": 1058,
    "name": "Chaos Mage Jerret of the Reach",
    "background": 0,
    "body": 23,
    "familiar": 88,
    "head": 211,
    "prop": 309,
    "rune": 7777
  },
  {
    "idx": 1059,
    "name": "Hedge Wizard Wolfram of the Wood",
    "background": 2,
    "body": 13,
    "familiar": 111,
    "head": 204,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 1060,
    "name": "Archmagus Salvatore of the Mountain",
    "background": 1,
    "body": 12,
    "familiar": 119,
    "head": 141,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 1061,
    "name": "Ghost Eater Fire Eater of the Havens",
    "background": 2,
    "body": 11,
    "familiar": 95,
    "head": 158,
    "prop": 307,
    "rune": 283
  },
  {
    "idx": 1062,
    "name": "Archmagus Silas of the Steppe",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 202,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 1063,
    "name": "Electromancer Soran of the Mist",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 197,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 1064,
    "name": "Ice Mage Nicolas of the Ice",
    "background": 3,
    "body": 65,
    "familiar": 110,
    "head": 177,
    "prop": 305,
    "rune": 304
  },
  {
    "idx": 1065,
    "name": "Adept Marius of the Palms",
    "background": 2,
    "body": 60,
    "familiar": 120,
    "head": 149,
    "prop": 339,
    "rune": 303
  },
  {
    "idx": 1066,
    "name": "Sage Lux of the Capital",
    "background": 2,
    "body": 48,
    "familiar": 117,
    "head": 221,
    "prop": 252,
    "rune": 288
  },
  {
    "idx": 1067,
    "name": "Battle Mage Bartholomew of the Realm",
    "background": 1,
    "body": 67,
    "familiar": 104,
    "head": 182,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 1068,
    "name": "Enchanter Diana of the Cosmos",
    "background": 1,
    "body": 10,
    "familiar": 110,
    "head": 187,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 1069,
    "name": "Chronomancer Zixin of the Wold",
    "background": 1,
    "body": 43,
    "familiar": 94,
    "head": 236,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 1070,
    "name": "Magus Ambrosia of the Tower",
    "background": 3,
    "body": 26,
    "familiar": 106,
    "head": 159,
    "prop": 262,
    "rune": 288
  },
  {
    "idx": 1071,
    "name": "Alchemist Cairon of the Citadel",
    "background": 2,
    "body": 18,
    "familiar": 103,
    "head": 174,
    "prop": 270,
    "rune": 292
  },
  {
    "idx": 1072,
    "name": "Hedge Wizard Danny of the Desert",
    "background": 1,
    "body": 59,
    "familiar": 89,
    "head": 218,
    "prop": 319,
    "rune": 286
  },
  {
    "idx": 1073,
    "name": "Alatar of the Hills",
    "background": 3,
    "body": 14,
    "familiar": 89,
    "head": 228,
    "prop": 308,
    "rune": 285
  },
  {
    "idx": 1074,
    "name": "Victoria of the Mountain",
    "background": 3,
    "body": 12,
    "familiar": 110,
    "head": 198,
    "prop": 270,
    "rune": 290
  },
  {
    "idx": 1075,
    "name": "Sorcerer Chooki of the Plains",
    "background": 3,
    "body": 18,
    "familiar": 99,
    "head": 142,
    "prop": 279,
    "rune": 288
  },
  {
    "idx": 1076,
    "name": "Illusionist Victor of the Citadel",
    "background": 1,
    "body": 76,
    "familiar": 97,
    "head": 179,
    "prop": 246,
    "rune": 283
  },
  {
    "idx": 1077,
    "name": "Enchanter Silas of the Event Horizon",
    "background": 1,
    "body": 75,
    "familiar": 114,
    "head": 147,
    "prop": 313,
    "rune": 300
  },
  {
    "idx": 1078,
    "name": "Archmagus Axel of Cuckoo Land",
    "background": 0,
    "body": 30,
    "familiar": 7777,
    "head": 182,
    "prop": 316,
    "rune": 299
  },
  {
    "idx": 1079,
    "name": "Archmagus Ofaris of the Lake",
    "background": 2,
    "body": 44,
    "familiar": 107,
    "head": 227,
    "prop": 258,
    "rune": 304
  },
  {
    "idx": 1080,
    "name": "Druid Hagar of the Platonic Shadow",
    "background": 0,
    "body": 75,
    "familiar": 111,
    "head": 129,
    "prop": 337,
    "rune": 298
  },
  {
    "idx": 1081,
    "name": "David of the Fey",
    "background": 2,
    "body": 29,
    "familiar": 116,
    "head": 141,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 1082,
    "name": "Archmagus Argus of the Court",
    "background": 1,
    "body": 74,
    "familiar": 120,
    "head": 138,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 1083,
    "name": "Witch Zolona of the Steppe",
    "background": 1,
    "body": 21,
    "familiar": 112,
    "head": 176,
    "prop": 264,
    "rune": 293
  },
  {
    "idx": 1084,
    "name": "Archmagus Silas of the Hollow",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 231,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1085,
    "name": "Enchanter Shu of the River",
    "background": 3,
    "body": 31,
    "familiar": 88,
    "head": 180,
    "prop": 249,
    "rune": 282
  },
  {
    "idx": 1086,
    "name": "Witch Lilith of the Steppe",
    "background": 1,
    "body": 35,
    "familiar": 115,
    "head": 166,
    "prop": 265,
    "rune": 302
  },
  {
    "idx": 1087,
    "name": "Archmagus Eizo of the Plains",
    "background": 0,
    "body": 42,
    "familiar": 112,
    "head": 238,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 1088,
    "name": "Arch-Magician Bane of the Tower",
    "background": 1,
    "body": 74,
    "familiar": 103,
    "head": 239,
    "prop": 280,
    "rune": 286
  },
  {
    "idx": 1089,
    "name": "Geomancer Devin of the Palms",
    "background": 2,
    "body": 58,
    "familiar": 89,
    "head": 167,
    "prop": 308,
    "rune": 294
  },
  {
    "idx": 1090,
    "name": "Archmagus Allistair of the Realm",
    "background": 3,
    "body": 11,
    "familiar": 117,
    "head": 215,
    "prop": 315,
    "rune": 283
  },
  {
    "idx": 1091,
    "name": "Summoner Hothor of the Atheneum",
    "background": 3,
    "body": 54,
    "familiar": 101,
    "head": 218,
    "prop": 254,
    "rune": 301
  },
  {
    "idx": 1092,
    "name": "Archmagus Aleister of the Keep",
    "background": 2,
    "body": 63,
    "familiar": 114,
    "head": 227,
    "prop": 314,
    "rune": 304
  },
  {
    "idx": 1093,
    "name": "Voodoo Priest Marius of the Mount",
    "background": 1,
    "body": 49,
    "familiar": 111,
    "head": 179,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 1094,
    "name": "Adept Gil of the Temple",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 207,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 1095,
    "name": "Hadrien of the Wild",
    "background": 1,
    "body": 84,
    "familiar": 7777,
    "head": 137,
    "prop": 338,
    "rune": 292
  },
  {
    "idx": 1096,
    "name": "Enchanter Devon of the Moors",
    "background": 2,
    "body": 21,
    "familiar": 110,
    "head": 190,
    "prop": 279,
    "rune": 295
  },
  {
    "idx": 1097,
    "name": "Battle Mage Hagar of Dreams",
    "background": 3,
    "body": 55,
    "familiar": 103,
    "head": 206,
    "prop": 328,
    "rune": 302
  },
  {
    "idx": 1098,
    "name": "Battle Mage Cromwell of the Desert",
    "background": 1,
    "body": 60,
    "familiar": 93,
    "head": 203,
    "prop": 264,
    "rune": 293
  },
  {
    "idx": 1099,
    "name": "Udor of the Grotto",
    "background": 3,
    "body": 43,
    "familiar": 115,
    "head": 189,
    "prop": 322,
    "rune": 293
  },
  {
    "idx": 1100,
    "name": "Archmagus Soya of the Grotto",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 229,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 1101,
    "name": "Hex Mage Lucinda out of the Void",
    "background": 2,
    "body": 85,
    "familiar": 96,
    "head": 176,
    "prop": 309,
    "rune": 293
  },
  {
    "idx": 1102,
    "name": "Archmagus Poppy in the Shadows",
    "background": 2,
    "body": 85,
    "familiar": 105,
    "head": 200,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 1103,
    "name": "Electromancer Gunthor of the Moors",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 216,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 1104,
    "name": "Arcanist Casper of the Lake",
    "background": 0,
    "body": 17,
    "familiar": 95,
    "head": 232,
    "prop": 250,
    "rune": 291
  },
  {
    "idx": 1105,
    "name": "Celeste of the Mount",
    "background": 3,
    "body": 49,
    "familiar": 112,
    "head": 156,
    "prop": 314,
    "rune": 285
  },
  {
    "idx": 1106,
    "name": "Hydromancer Rita of the Dark",
    "background": 2,
    "body": 71,
    "familiar": 110,
    "head": 209,
    "prop": 314,
    "rune": 288
  },
  {
    "idx": 1107,
    "name": "Sage Circe of the Keep",
    "background": 0,
    "body": 46,
    "familiar": 88,
    "head": 187,
    "prop": 252,
    "rune": 290
  },
  {
    "idx": 1108,
    "name": "Hedge Wizard Celeste of the Rock",
    "background": 1,
    "body": 58,
    "familiar": 105,
    "head": 191,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 1109,
    "name": "Soya of the Havens",
    "background": 3,
    "body": 75,
    "familiar": 110,
    "head": 227,
    "prop": 258,
    "rune": 287
  },
  {
    "idx": 1110,
    "name": "Battlemage Eizo of the Gnostics",
    "background": 1,
    "body": 67,
    "familiar": 7777,
    "head": 162,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 1111,
    "name": "Archmagus Lumos in the Shadows",
    "background": 2,
    "body": 85,
    "familiar": 103,
    "head": 174,
    "prop": 247,
    "rune": 304
  },
  {
    "idx": 1112,
    "name": "Hedge Wizard Borak of the Mount",
    "background": 0,
    "body": 63,
    "familiar": 116,
    "head": 165,
    "prop": 324,
    "rune": 292
  },
  {
    "idx": 1113,
    "name": "Chaos Mage Gully of the Garden",
    "background": 0,
    "body": 28,
    "familiar": 103,
    "head": 178,
    "prop": 309,
    "rune": 293
  },
  {
    "idx": 1114,
    "name": "Scryer Huizhong of the Cosmos",
    "background": 2,
    "body": 11,
    "familiar": 111,
    "head": 236,
    "prop": 245,
    "rune": 282
  },
  {
    "idx": 1115,
    "name": "Sorcerer Ifran of the Ether",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 164,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1116,
    "name": "Thaumaturge Cassiopeia of the Keep",
    "background": 0,
    "body": 77,
    "familiar": 116,
    "head": 131,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 1117,
    "name": "Aleister of the Wood",
    "background": 2,
    "body": 14,
    "familiar": 94,
    "head": 147,
    "prop": 314,
    "rune": 302
  },
  {
    "idx": 1118,
    "name": "Spellsinger Soya of the Quantum Downs",
    "background": 0,
    "body": 9,
    "familiar": 108,
    "head": 160,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1119,
    "name": "Conjurer Nazim of the Garden",
    "background": 1,
    "body": 30,
    "familiar": 115,
    "head": 237,
    "prop": 306,
    "rune": 303
  },
  {
    "idx": 1120,
    "name": "Aeromancer Titania of the Ether",
    "background": 3,
    "body": 24,
    "familiar": 90,
    "head": 131,
    "prop": 315,
    "rune": 297
  },
  {
    "idx": 1121,
    "name": "Oracle Corvin",
    "background": 1,
    "body": 26,
    "familiar": 109,
    "head": 144,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 1122,
    "name": "Magus Robert of the Carnival",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 182,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 1123,
    "name": "Archmagus Milton of the Citadel",
    "background": 1,
    "body": 76,
    "familiar": 114,
    "head": 211,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 1124,
    "name": "Evoker Remus of the Light",
    "background": 1,
    "body": 75,
    "familiar": 101,
    "head": 212,
    "prop": 339,
    "rune": 283
  },
  {
    "idx": 1125,
    "name": "Archmagus David of the Valley",
    "background": 3,
    "body": 41,
    "familiar": 7777,
    "head": 238,
    "prop": 245,
    "rune": 296
  },
  {
    "idx": 1126,
    "name": "Archmagus Casper of the Realm",
    "background": 1,
    "body": 8,
    "familiar": 108,
    "head": 162,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1127,
    "name": "Alchemist Caligula of the Marsh",
    "background": 0,
    "body": 79,
    "familiar": 88,
    "head": 213,
    "prop": 270,
    "rune": 282
  },
  {
    "idx": 1128,
    "name": "Sorcerer Jabir of the Tundra",
    "background": 0,
    "body": 73,
    "familiar": 110,
    "head": 219,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 1129,
    "name": "Alchemist Leah of the Cosmos",
    "background": 0,
    "body": 24,
    "familiar": 93,
    "head": 139,
    "prop": 270,
    "rune": 291
  },
  {
    "idx": 1130,
    "name": "Illusionist Hobbs of the Obelisk",
    "background": 2,
    "body": 49,
    "familiar": 111,
    "head": 244,
    "prop": 311,
    "rune": 304
  },
  {
    "idx": 1131,
    "name": "Null Mage Hue of the Wood",
    "background": 0,
    "body": 44,
    "familiar": 94,
    "head": 169,
    "prop": 335,
    "rune": 288
  },
  {
    "idx": 1132,
    "name": "Hex Mage Aleister of the Marsh",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 186,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 1133,
    "name": "Witch Hagatha of the Keep",
    "background": 1,
    "body": 17,
    "familiar": 105,
    "head": 209,
    "prop": 7777,
    "rune": 293
  },
  {
    "idx": 1134,
    "name": "Enchanter Circe of the Mountain",
    "background": 1,
    "body": 35,
    "familiar": 88,
    "head": 187,
    "prop": 270,
    "rune": 286
  },
  {
    "idx": 1135,
    "name": "Wild Mage Kobold of the Swell",
    "background": 3,
    "body": 57,
    "familiar": 123,
    "head": 178,
    "prop": 319,
    "rune": 7777
  },
  {
    "idx": 1136,
    "name": "Alchemist Qaid of Mu",
    "background": 2,
    "body": 24,
    "familiar": 93,
    "head": 128,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 1137,
    "name": "Archmagus Hothor of the Wild",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 177,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 1138,
    "name": "Enchanter Larissa of the Brambles",
    "background": 0,
    "body": 39,
    "familiar": 93,
    "head": 190,
    "prop": 270,
    "rune": 294
  },
  {
    "idx": 1139,
    "name": "Summoner Purple Boy of the Circle",
    "background": 2,
    "body": 29,
    "familiar": 93,
    "head": 154,
    "prop": 254,
    "rune": 298
  },
  {
    "idx": 1140,
    "name": "Witch Rita of the Valley",
    "background": 1,
    "body": 33,
    "familiar": 105,
    "head": 223,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 1141,
    "name": "Arch-Magician Soya of the Mount",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 231,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 1142,
    "name": "Enchanter Daria of the Desert",
    "background": 1,
    "body": 5,
    "familiar": 116,
    "head": 131,
    "prop": 277,
    "rune": 304
  },
  {
    "idx": 1143,
    "name": "Cryptomancer Aleister of the Obelisk",
    "background": 0,
    "body": 62,
    "familiar": 104,
    "head": 199,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 1144,
    "name": "Adept Hadrien of the Rock",
    "background": 0,
    "body": 61,
    "familiar": 90,
    "head": 215,
    "prop": 249,
    "rune": 285
  },
  {
    "idx": 1145,
    "name": "Cryptomancer Rita of the Hills",
    "background": 2,
    "body": 19,
    "familiar": 119,
    "head": 166,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 1146,
    "name": "Davos of the Waste",
    "background": 3,
    "body": 86,
    "familiar": 123,
    "head": 233,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1147,
    "name": "Ice Mage Soya of the Tundra",
    "background": 1,
    "body": 73,
    "familiar": 119,
    "head": 228,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1148,
    "name": "Arch-Magician Solomon of the Toadstools",
    "background": 2,
    "body": 29,
    "familiar": 88,
    "head": 212,
    "prop": 325,
    "rune": 297
  },
  {
    "idx": 1149,
    "name": "Cosmic Mage Rafiq of the Ether",
    "background": 0,
    "body": 83,
    "familiar": 88,
    "head": 142,
    "prop": 309,
    "rune": 300
  },
  {
    "idx": 1150,
    "name": "Apollo of the Mount",
    "background": 1,
    "body": 49,
    "familiar": 97,
    "head": 221,
    "prop": 248,
    "rune": 302
  },
  {
    "idx": 1151,
    "name": "Alchemist Venga of the Desert",
    "background": 0,
    "body": 60,
    "familiar": 94,
    "head": 219,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1152,
    "name": "Archmagus Crobas of Arcadia",
    "background": 1,
    "body": 79,
    "familiar": 115,
    "head": 125,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 1153,
    "name": "Chaos Mage Bathsheba of the Capital",
    "background": 1,
    "body": 74,
    "familiar": 105,
    "head": 208,
    "prop": 335,
    "rune": 284
  },
  {
    "idx": 1154,
    "name": "Augurer Cairon of the Light",
    "background": 1,
    "body": 9,
    "familiar": 114,
    "head": 238,
    "prop": 245,
    "rune": 303
  },
  {
    "idx": 1155,
    "name": "Null Mage Chooki of the Steppe",
    "background": 3,
    "body": 82,
    "familiar": 119,
    "head": 237,
    "prop": 337,
    "rune": 283
  },
  {
    "idx": 1156,
    "name": "Shaman Celeste of the Moors",
    "background": 1,
    "body": 38,
    "familiar": 116,
    "head": 132,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 1157,
    "name": "Arch-Magician Allistair of the Villa",
    "background": 0,
    "body": 48,
    "familiar": 119,
    "head": 227,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 1158,
    "name": "Spellsinger Ravana of the Desert",
    "background": 2,
    "body": 27,
    "familiar": 109,
    "head": 125,
    "prop": 247,
    "rune": 283
  },
  {
    "idx": 1159,
    "name": "Witch Rita of the Bibliotheca",
    "background": 2,
    "body": 49,
    "familiar": 104,
    "head": 166,
    "prop": 267,
    "rune": 284
  },
  {
    "idx": 1160,
    "name": "Magus Bartholomew of the Forest",
    "background": 1,
    "body": 23,
    "familiar": 123,
    "head": 183,
    "prop": 262,
    "rune": 304
  },
  {
    "idx": 1161,
    "name": "Runecaster Sondra of the Mount",
    "background": 0,
    "body": 55,
    "familiar": 88,
    "head": 132,
    "prop": 325,
    "rune": 301
  },
  {
    "idx": 1162,
    "name": "Sorcerer Faiz of the Sun",
    "background": 2,
    "body": 58,
    "familiar": 95,
    "head": 219,
    "prop": 271,
    "rune": 285
  },
  {
    "idx": 1163,
    "name": "Enchanter Artis of the Pit",
    "background": 1,
    "body": 87,
    "familiar": 105,
    "head": 156,
    "prop": 246,
    "rune": 292
  },
  {
    "idx": 1164,
    "name": "Adept Artis",
    "background": 1,
    "body": 48,
    "familiar": 116,
    "head": 198,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 1165,
    "name": "Shadow Mage Chooki of the Hall",
    "background": 0,
    "body": 78,
    "familiar": 88,
    "head": 142,
    "prop": 332,
    "rune": 296
  },
  {
    "idx": 1166,
    "name": "Enchanter Ophelia of the River",
    "background": 0,
    "body": 33,
    "familiar": 101,
    "head": 223,
    "prop": 316,
    "rune": 303
  },
  {
    "idx": 1167,
    "name": "Solomon of the Realm",
    "background": 3,
    "body": 24,
    "familiar": 109,
    "head": 127,
    "prop": 308,
    "rune": 295
  },
  {
    "idx": 1168,
    "name": "Hex Mage Toadstool of the Hills",
    "background": 2,
    "body": 41,
    "familiar": 116,
    "head": 195,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 1169,
    "name": "Archmagus Brutus of the Riviera",
    "background": 0,
    "body": 41,
    "familiar": 110,
    "head": 173,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 1170,
    "name": "Alchemist Merlon of the Wold",
    "background": 1,
    "body": 41,
    "familiar": 7777,
    "head": 227,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1171,
    "name": "Hedge Wizard Faye of the Moors",
    "background": 2,
    "body": 37,
    "familiar": 119,
    "head": 198,
    "prop": 276,
    "rune": 288
  },
  {
    "idx": 1172,
    "name": "Archmagus Xiaosheng of the Hollow",
    "background": 0,
    "body": 34,
    "familiar": 120,
    "head": 180,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 1173,
    "name": "Hedge Wizard Godfrey of Arcadia",
    "background": 3,
    "body": 84,
    "familiar": 111,
    "head": 206,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 1174,
    "name": "Hex Mage Casper of the Keep",
    "background": 3,
    "body": 54,
    "familiar": 90,
    "head": 189,
    "prop": 309,
    "rune": 297
  },
  {
    "idx": 1175,
    "name": "Archmagus Gellert of the Garden",
    "background": 1,
    "body": 30,
    "familiar": 88,
    "head": 150,
    "prop": 306,
    "rune": 304
  },
  {
    "idx": 1176,
    "name": "Aeromancer Aleister of the Sands",
    "background": 0,
    "body": 5,
    "familiar": 112,
    "head": 238,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 1177,
    "name": "Adept Baptiste of the Gnostics",
    "background": 1,
    "body": 24,
    "familiar": 88,
    "head": 179,
    "prop": 338,
    "rune": 294
  },
  {
    "idx": 1178,
    "name": "Hydromancer George of the Sea",
    "background": 2,
    "body": 57,
    "familiar": 109,
    "head": 147,
    "prop": 314,
    "rune": 284
  },
  {
    "idx": 1179,
    "name": "Aleister of the Atheneum",
    "background": 1,
    "body": 6,
    "familiar": 120,
    "head": 212,
    "prop": 253,
    "rune": 283
  },
  {
    "idx": 1180,
    "name": "Druid Samuel of the Fey",
    "background": 0,
    "body": 28,
    "familiar": 116,
    "head": 129,
    "prop": 340,
    "rune": 297
  },
  {
    "idx": 1181,
    "name": "Hedge Wizard Mycho of the Heath",
    "background": 1,
    "body": 14,
    "familiar": 103,
    "head": 195,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 1182,
    "name": "Battle Mage Eric of the Grotto",
    "background": 2,
    "body": 23,
    "familiar": 99,
    "head": 206,
    "prop": 312,
    "rune": 285
  },
  {
    "idx": 1183,
    "name": "Sage Vatar of the Psychic Leap",
    "background": 0,
    "body": 11,
    "familiar": 117,
    "head": 170,
    "prop": 322,
    "rune": 294
  },
  {
    "idx": 1184,
    "name": "Battlemage Cassius of the Astral Plane",
    "background": 2,
    "body": 11,
    "familiar": 117,
    "head": 220,
    "prop": 278,
    "rune": 288
  },
  {
    "idx": 1185,
    "name": "Arcanist Eliphas of the Hall",
    "background": 0,
    "body": 76,
    "familiar": 93,
    "head": 149,
    "prop": 334,
    "rune": 303
  },
  {
    "idx": 1186,
    "name": "Battle Mage Angus of the Carnival",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 183,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 1187,
    "name": "Sorcerer Davos of Dreams",
    "background": 1,
    "body": 63,
    "familiar": 112,
    "head": 215,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 1188,
    "name": "Spellsinger Daria of the Forest",
    "background": 2,
    "body": 35,
    "familiar": 114,
    "head": 139,
    "prop": 247,
    "rune": 300
  },
  {
    "idx": 1189,
    "name": "Arch-Magician Atlas of the Realm",
    "background": 1,
    "body": 8,
    "familiar": 88,
    "head": 182,
    "prop": 258,
    "rune": 297
  },
  {
    "idx": 1190,
    "name": "Archmagus Lux of the Grotto",
    "background": 2,
    "body": 45,
    "familiar": 95,
    "head": 185,
    "prop": 255,
    "rune": 290
  },
  {
    "idx": 1191,
    "name": "Spellsinger Salvatore of the Mount",
    "background": 2,
    "body": 54,
    "familiar": 117,
    "head": 238,
    "prop": 247,
    "rune": 294
  },
  {
    "idx": 1192,
    "name": "Charmer Celeste of the Garden",
    "background": 0,
    "body": 30,
    "familiar": 90,
    "head": 139,
    "prop": 320,
    "rune": 303
  },
  {
    "idx": 1193,
    "name": "Magus Setsuko of the Wood",
    "background": 2,
    "body": 19,
    "familiar": 107,
    "head": 126,
    "prop": 263,
    "rune": 302
  },
  {
    "idx": 1194,
    "name": "Diviner Axel of the Oasis",
    "background": 2,
    "body": 58,
    "familiar": 94,
    "head": 177,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 1195,
    "name": "Adept Lamia of the Valley",
    "background": 0,
    "body": 35,
    "familiar": 111,
    "head": 132,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 1196,
    "name": "Archmagus Lux of the Event Horizon",
    "background": 0,
    "body": 67,
    "familiar": 115,
    "head": 226,
    "prop": 312,
    "rune": 302
  },
  {
    "idx": 1197,
    "name": "Battle Mage Borak of Arcadia",
    "background": 3,
    "body": 12,
    "familiar": 91,
    "head": 203,
    "prop": 317,
    "rune": 296
  },
  {
    "idx": 1198,
    "name": "Battle Mage Ulysse of the Havens",
    "background": 0,
    "body": 67,
    "familiar": 116,
    "head": 182,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 1199,
    "name": "Archmagus Basil of the Cosmos",
    "background": 2,
    "body": 10,
    "familiar": 90,
    "head": 232,
    "prop": 277,
    "rune": 303
  },
  {
    "idx": 1200,
    "name": "Arch-Magician Xiaobo of Dreams",
    "background": 1,
    "body": 6,
    "familiar": 123,
    "head": 236,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 1201,
    "name": "Druid Ozohr of Xanadu",
    "background": 1,
    "body": 9,
    "familiar": 121,
    "head": 238,
    "prop": 313,
    "rune": 286
  },
  {
    "idx": 1202,
    "name": "Sage Ifran of the Woodlands",
    "background": 2,
    "body": 30,
    "familiar": 103,
    "head": 142,
    "prop": 245,
    "rune": 301
  },
  {
    "idx": 1203,
    "name": "Witch Evangeline of the Wild",
    "background": 1,
    "body": 15,
    "familiar": 99,
    "head": 159,
    "prop": 312,
    "rune": 302
  },
  {
    "idx": 1204,
    "name": "Lunar Mage Eliphas of the Wood",
    "background": 0,
    "body": 84,
    "familiar": 111,
    "head": 179,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 1205,
    "name": "Illusionist Blaise of the Sacred Pillars",
    "background": 2,
    "body": 54,
    "familiar": 120,
    "head": 129,
    "prop": 273,
    "rune": 285
  },
  {
    "idx": 1206,
    "name": "Enchanter Daria of the Astral Plane",
    "background": 0,
    "body": 24,
    "familiar": 97,
    "head": 208,
    "prop": 249,
    "rune": 302
  },
  {
    "idx": 1207,
    "name": "Necromancer Billy of the Astral Plane",
    "background": 1,
    "body": 11,
    "familiar": 107,
    "head": 136,
    "prop": 326,
    "rune": 304
  },
  {
    "idx": 1208,
    "name": "Thaumaturge Hagatha of the Cosmos",
    "background": 0,
    "body": 24,
    "familiar": 96,
    "head": 176,
    "prop": 332,
    "rune": 300
  },
  {
    "idx": 1209,
    "name": "Archmagus Isaac of the Capital",
    "background": 1,
    "body": 48,
    "familiar": 119,
    "head": 186,
    "prop": 338,
    "rune": 299
  },
  {
    "idx": 1210,
    "name": "Spellsinger Jasper of Xanadu",
    "background": 3,
    "body": 11,
    "familiar": 107,
    "head": 150,
    "prop": 257,
    "rune": 289
  },
  {
    "idx": 1211,
    "name": "Illusionist Bolin of the Sea",
    "background": 0,
    "body": 57,
    "familiar": 7777,
    "head": 236,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 1212,
    "name": "Arch-Magician Solomon of the Steppe",
    "background": 1,
    "body": 44,
    "familiar": 103,
    "head": 137,
    "prop": 306,
    "rune": 293
  },
  {
    "idx": 1213,
    "name": "Wild Mage Basil of the Temple",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 214,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 1214,
    "name": "Witch Lilith of the Marsh",
    "background": 0,
    "body": 19,
    "familiar": 119,
    "head": 166,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 1215,
    "name": "Witch Evangeline of the Sacred Pillars",
    "background": 1,
    "body": 50,
    "familiar": 88,
    "head": 209,
    "prop": 261,
    "rune": 303
  },
  {
    "idx": 1216,
    "name": "Sorcerer  of the Marsh",
    "background": 0,
    "body": 45,
    "familiar": 119,
    "head": 238,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 1217,
    "name": "Pyromancer Zixin of the Cosmos",
    "background": 0,
    "body": 11,
    "familiar": 119,
    "head": 236,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 1218,
    "name": "Cosmic Mage Cromwell of the Platonic Shadow",
    "background": 1,
    "body": 75,
    "familiar": 121,
    "head": 183,
    "prop": 338,
    "rune": 298
  },
  {
    "idx": 1219,
    "name": "Chaos Mage Celeste of the Plains",
    "background": 1,
    "body": 35,
    "familiar": 103,
    "head": 139,
    "prop": 310,
    "rune": 287
  },
  {
    "idx": 1220,
    "name": "Jeldor of the Atheneum",
    "background": 1,
    "body": 6,
    "familiar": 103,
    "head": 233,
    "prop": 305,
    "rune": 288
  },
  {
    "idx": 1221,
    "name": "Void Disciple Samael of the Brambles",
    "background": 1,
    "body": 82,
    "familiar": 119,
    "head": 205,
    "prop": 310,
    "rune": 293
  },
  {
    "idx": 1222,
    "name": "Druid Zubin of the Marsh",
    "background": 1,
    "body": 12,
    "familiar": 112,
    "head": 127,
    "prop": 323,
    "rune": 301
  },
  {
    "idx": 1223,
    "name": "Magus Jahid of Mu",
    "background": 2,
    "body": 75,
    "familiar": 95,
    "head": 128,
    "prop": 252,
    "rune": 293
  },
  {
    "idx": 1224,
    "name": "Druid Maia of the Grotto",
    "background": 3,
    "body": 37,
    "familiar": 119,
    "head": 132,
    "prop": 276,
    "rune": 289
  },
  {
    "idx": 1225,
    "name": "Void Disciple Zane of Xanadu",
    "background": 1,
    "body": 52,
    "familiar": 88,
    "head": 211,
    "prop": 307,
    "rune": 302
  },
  {
    "idx": 1226,
    "name": "Sorcerer Atlanta of the Hall",
    "background": 1,
    "body": 77,
    "familiar": 108,
    "head": 135,
    "prop": 256,
    "rune": 300
  },
  {
    "idx": 1227,
    "name": "Runecaster Nicolas of Dreams",
    "background": 2,
    "body": 62,
    "familiar": 7777,
    "head": 177,
    "prop": 256,
    "rune": 282
  },
  {
    "idx": 1228,
    "name": "Aeromancer Astrid of the Valley",
    "background": 0,
    "body": 19,
    "familiar": 120,
    "head": 190,
    "prop": 315,
    "rune": 287
  },
  {
    "idx": 1229,
    "name": "Sage Bartholomew of the Rock",
    "background": 1,
    "body": 27,
    "familiar": 104,
    "head": 204,
    "prop": 266,
    "rune": 7777
  },
  {
    "idx": 1230,
    "name": "Solar Mage Iris of the Hollow",
    "background": 0,
    "body": 22,
    "familiar": 116,
    "head": 132,
    "prop": 309,
    "rune": 283
  },
  {
    "idx": 1231,
    "name": "Wild Mage Demos of the Keep",
    "background": 1,
    "body": 40,
    "familiar": 116,
    "head": 158,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 1232,
    "name": "Sorcerer Hadrien of the Hills",
    "background": 0,
    "body": 19,
    "familiar": 120,
    "head": 231,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 1233,
    "name": "Battlemage Burnside of the Havens",
    "background": 1,
    "body": 52,
    "familiar": 97,
    "head": 158,
    "prop": 309,
    "rune": 294
  },
  {
    "idx": 1234,
    "name": "The Color Master",
    "background": 0,
    "body": 64,
    "familiar": 122,
    "head": 169,
    "prop": 313,
    "rune": 7777
  },
  {
    "idx": 1235,
    "name": "Archmagus Shizu of the Canyon",
    "background": 1,
    "body": 22,
    "familiar": 106,
    "head": 126,
    "prop": 339,
    "rune": 294
  },
  {
    "idx": 1236,
    "name": "Mystic Carmilla of Arcadia",
    "background": 1,
    "body": 36,
    "familiar": 115,
    "head": 159,
    "prop": 326,
    "rune": 302
  },
  {
    "idx": 1237,
    "name": "Electromancer Fugh of the Keep",
    "background": 1,
    "body": 76,
    "familiar": 104,
    "head": 235,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 1238,
    "name": "Arcanist Cassius of the Wood",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 188,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 1239,
    "name": "Archmagus Zubin of the Desert",
    "background": 0,
    "body": 61,
    "familiar": 112,
    "head": 153,
    "prop": 246,
    "rune": 299
  },
  {
    "idx": 1240,
    "name": "Mystic Ambrosia of the Havens",
    "background": 2,
    "body": 68,
    "familiar": 96,
    "head": 176,
    "prop": 322,
    "rune": 302
  },
  {
    "idx": 1241,
    "name": "Hedge Wizard Cairon of the Grotto",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 197,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 1242,
    "name": "Archmagus Ronald of the Ether",
    "background": 2,
    "body": 9,
    "familiar": 109,
    "head": 150,
    "prop": 248,
    "rune": 303
  },
  {
    "idx": 1243,
    "name": "Battle Mage Dante of the Wood",
    "background": 0,
    "body": 18,
    "familiar": 115,
    "head": 133,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 1244,
    "name": "Enchanter Pandora of Alfheim",
    "background": 3,
    "body": 30,
    "familiar": 111,
    "head": 191,
    "prop": 319,
    "rune": 291
  },
  {
    "idx": 1245,
    "name": "Enchanter Lumos of the Waste",
    "background": 1,
    "body": 85,
    "familiar": 121,
    "head": 211,
    "prop": 249,
    "rune": 284
  },
  {
    "idx": 1246,
    "name": "Ghost Eater Trollin of the Fey",
    "background": 1,
    "body": 28,
    "familiar": 114,
    "head": 235,
    "prop": 254,
    "rune": 300
  },
  {
    "idx": 1247,
    "name": "Diabolist Ivy of the Carnival",
    "background": 3,
    "body": 29,
    "familiar": 119,
    "head": 155,
    "prop": 310,
    "rune": 294
  },
  {
    "idx": 1248,
    "name": "Summoner Apollo of the Morning Star",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 230,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 1249,
    "name": "Enchanter Artis of the Road",
    "background": 1,
    "body": 39,
    "familiar": 7777,
    "head": 132,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 1250,
    "name": "Enchanter Diana of the Road",
    "background": 0,
    "body": 45,
    "familiar": 89,
    "head": 132,
    "prop": 261,
    "rune": 290
  },
  {
    "idx": 1251,
    "name": "Mystic Milo of the Veil",
    "background": 0,
    "body": 28,
    "familiar": 104,
    "head": 214,
    "prop": 322,
    "rune": 287
  },
  {
    "idx": 1252,
    "name": "Electromancer Hanataka of the Inferno",
    "background": 1,
    "body": 85,
    "familiar": 90,
    "head": 243,
    "prop": 305,
    "rune": 288
  },
  {
    "idx": 1253,
    "name": "Arcanist Lumos of the Brambles",
    "background": 0,
    "body": 19,
    "familiar": 7777,
    "head": 214,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 1254,
    "name": "Salvatore of the Sun",
    "background": 1,
    "body": 27,
    "familiar": 109,
    "head": 192,
    "prop": 261,
    "rune": 294
  },
  {
    "idx": 1255,
    "name": "Pyromancer Rita of the Gnostics",
    "background": 1,
    "body": 8,
    "familiar": 120,
    "head": 223,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 1256,
    "name": "Mystic Qasim of the Plains",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 128,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 1257,
    "name": "Archmagus Uvlius of the Veil",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 138,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1258,
    "name": "Pyromancer Nixie of the Tower",
    "background": 1,
    "body": 76,
    "familiar": 103,
    "head": 200,
    "prop": 310,
    "rune": 294
  },
  {
    "idx": 1259,
    "name": "Spellsinger Tenguyama of the Cosmos",
    "background": 1,
    "body": 10,
    "familiar": 90,
    "head": 243,
    "prop": 257,
    "rune": 286
  },
  {
    "idx": 1260,
    "name": "Transmuter Dutorn of the Valley",
    "background": 1,
    "body": 19,
    "familiar": 111,
    "head": 220,
    "prop": 340,
    "rune": 287
  },
  {
    "idx": 1261,
    "name": "Artificer Merlon of the Moors",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 138,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 1262,
    "name": "Magus Pezo of the Tower",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 171,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 1263,
    "name": "Battlemage Qasim of the Riviera",
    "background": 1,
    "body": 23,
    "familiar": 116,
    "head": 142,
    "prop": 309,
    "rune": 298
  },
  {
    "idx": 1264,
    "name": "Scryer Dutorn of the Steppe",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 216,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 1265,
    "name": "Arch-Magician Rowena of the Tower",
    "background": 1,
    "body": 77,
    "familiar": 88,
    "head": 223,
    "prop": 258,
    "rune": 297
  },
  {
    "idx": 1266,
    "name": "Magus Victoria of the Hills",
    "background": 1,
    "body": 32,
    "familiar": 110,
    "head": 135,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 1267,
    "name": "Magus Ilyas of the Swell",
    "background": 2,
    "body": 57,
    "familiar": 117,
    "head": 128,
    "prop": 314,
    "rune": 290
  },
  {
    "idx": 1268,
    "name": "Alchemist David of the Riviera",
    "background": 1,
    "body": 15,
    "familiar": 7777,
    "head": 227,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1269,
    "name": "Adept Oiq of the Tower",
    "background": 1,
    "body": 6,
    "familiar": 103,
    "head": 200,
    "prop": 328,
    "rune": 299
  },
  {
    "idx": 1270,
    "name": "Sorcerer Casper of the Sun",
    "background": 1,
    "body": 27,
    "familiar": 105,
    "head": 231,
    "prop": 339,
    "rune": 294
  },
  {
    "idx": 1271,
    "name": "Necromancer Diabolos of the Tower",
    "background": 3,
    "body": 77,
    "familiar": 115,
    "head": 194,
    "prop": 268,
    "rune": 297
  },
  {
    "idx": 1272,
    "name": "Cleric Pandora of the Desert",
    "background": 1,
    "body": 61,
    "familiar": 101,
    "head": 132,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 1273,
    "name": "Archmagus Zaros of the Hall",
    "background": 1,
    "body": 40,
    "familiar": 7777,
    "head": 185,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 1274,
    "name": "Magus Jerret of the Mount",
    "background": 1,
    "body": 55,
    "familiar": 105,
    "head": 215,
    "prop": 266,
    "rune": 293
  },
  {
    "idx": 1275,
    "name": "Clairvoyant Basil of the Palms",
    "background": 0,
    "body": 5,
    "familiar": 95,
    "head": 232,
    "prop": 251,
    "rune": 302
  },
  {
    "idx": 1276,
    "name": "Archmagus Uvlius of the Oasis",
    "background": 0,
    "body": 27,
    "familiar": 7777,
    "head": 138,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 1277,
    "name": "Sage Cassius of the Garden",
    "background": 1,
    "body": 30,
    "familiar": 120,
    "head": 206,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 1278,
    "name": "Mystic Impy of the Astral Plane",
    "background": 2,
    "body": 52,
    "familiar": 110,
    "head": 235,
    "prop": 322,
    "rune": 294
  },
  {
    "idx": 1279,
    "name": "Enchanter Maia of the Hall",
    "background": 2,
    "body": 74,
    "familiar": 120,
    "head": 208,
    "prop": 273,
    "rune": 282
  },
  {
    "idx": 1280,
    "name": "Battle Mage Angus of the Wood",
    "background": 1,
    "body": 13,
    "familiar": 101,
    "head": 129,
    "prop": 7777,
    "rune": 288
  },
  {
    "idx": 1281,
    "name": "Conjurer Duzzle of the Palms",
    "background": 1,
    "body": 58,
    "familiar": 97,
    "head": 178,
    "prop": 246,
    "rune": 304
  },
  {
    "idx": 1282,
    "name": "Witch Rita of the Gnostics",
    "background": 1,
    "body": 67,
    "familiar": 88,
    "head": 166,
    "prop": 309,
    "rune": 299
  },
  {
    "idx": 1283,
    "name": "Diabolist Rita of the Riviera",
    "background": 0,
    "body": 35,
    "familiar": 107,
    "head": 209,
    "prop": 309,
    "rune": 287
  },
  {
    "idx": 1284,
    "name": "Sorcerer Azahl of the Cosmos",
    "background": 0,
    "body": 9,
    "familiar": 123,
    "head": 127,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1285,
    "name": "Clairvoyant Chanterelle of the Marsh",
    "background": 2,
    "body": 43,
    "familiar": 101,
    "head": 195,
    "prop": 329,
    "rune": 283
  },
  {
    "idx": 1286,
    "name": "Arcanist Soya of the Ether",
    "background": 0,
    "body": 10,
    "familiar": 90,
    "head": 127,
    "prop": 334,
    "rune": 290
  },
  {
    "idx": 1287,
    "name": "Necromancer Isaac of the Pit",
    "background": 1,
    "body": 85,
    "familiar": 7777,
    "head": 202,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 1288,
    "name": "Archmagus Bane of the Veil",
    "background": 0,
    "body": 66,
    "familiar": 96,
    "head": 241,
    "prop": 336,
    "rune": 299
  },
  {
    "idx": 1289,
    "name": "Adept Karasu from the Abyss",
    "background": 0,
    "body": 86,
    "familiar": 103,
    "head": 243,
    "prop": 325,
    "rune": 304
  },
  {
    "idx": 1290,
    "name": "Alchemist Soran of Xanadu",
    "background": 1,
    "body": 8,
    "familiar": 7777,
    "head": 212,
    "prop": 267,
    "rune": 292
  },
  {
    "idx": 1291,
    "name": "Alchemist Ursula of the Fey",
    "background": 0,
    "body": 30,
    "familiar": 114,
    "head": 166,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 1292,
    "name": "Artificer Fungi of the Field",
    "background": 0,
    "body": 41,
    "familiar": 120,
    "head": 195,
    "prop": 340,
    "rune": 290
  },
  {
    "idx": 1293,
    "name": "Shaman Uvlius of the Road",
    "background": 1,
    "body": 41,
    "familiar": 7777,
    "head": 229,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 1294,
    "name": "Sorcerer Uday of the Temple",
    "background": 2,
    "body": 62,
    "familiar": 94,
    "head": 219,
    "prop": 248,
    "rune": 287
  },
  {
    "idx": 1295,
    "name": "Witch Rowena of the Inferno",
    "background": 2,
    "body": 86,
    "familiar": 88,
    "head": 176,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 1296,
    "name": "Witch Rita of the Court",
    "background": 0,
    "body": 26,
    "familiar": 119,
    "head": 166,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 1297,
    "name": "Void Disciple Norix of the Realm",
    "background": 3,
    "body": 10,
    "familiar": 116,
    "head": 205,
    "prop": 246,
    "rune": 290
  },
  {
    "idx": 1298,
    "name": "Druid Hothor of the Sea",
    "background": 2,
    "body": 57,
    "familiar": 105,
    "head": 173,
    "prop": 276,
    "rune": 297
  },
  {
    "idx": 1299,
    "name": "Sorcerer Soya of the Valley",
    "background": 1,
    "body": 7,
    "familiar": 97,
    "head": 162,
    "prop": 249,
    "rune": 296
  },
  {
    "idx": 1300,
    "name": "Holy Monk Akron of the Hall",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 125,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 1301,
    "name": "Battle Mage Robert out of the Blizzard",
    "background": 2,
    "body": 65,
    "familiar": 105,
    "head": 129,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1302,
    "name": "Magus Sahir of the Canyon",
    "background": 2,
    "body": 79,
    "familiar": 89,
    "head": 237,
    "prop": 265,
    "rune": 282
  },
  {
    "idx": 1303,
    "name": "Archmagus Cromwell of the Palms",
    "background": 1,
    "body": 5,
    "familiar": 7777,
    "head": 216,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 1304,
    "name": "Charmer Sarah of the Toadstools",
    "background": 2,
    "body": 28,
    "familiar": 108,
    "head": 135,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 1305,
    "name": "Charmer Leah of the Hall",
    "background": 2,
    "body": 78,
    "familiar": 90,
    "head": 208,
    "prop": 314,
    "rune": 283
  },
  {
    "idx": 1306,
    "name": "Hex Mage Zafar of the Atheneum",
    "background": 2,
    "body": 62,
    "familiar": 94,
    "head": 237,
    "prop": 329,
    "rune": 300
  },
  {
    "idx": 1307,
    "name": "Conjurer Celah of the Keep",
    "background": 1,
    "body": 55,
    "familiar": 112,
    "head": 160,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 1308,
    "name": "Stellar Mage Shukri of the Tower",
    "background": 1,
    "body": 62,
    "familiar": 94,
    "head": 219,
    "prop": 338,
    "rune": 292
  },
  {
    "idx": 1309,
    "name": "Sorcerer Kazem of the Palms",
    "background": 0,
    "body": 27,
    "familiar": 94,
    "head": 237,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 1310,
    "name": "Artificer Toby of the Mist",
    "background": 1,
    "body": 54,
    "familiar": 7777,
    "head": 201,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 1311,
    "name": "Archmagus Milo of the Platonic Shadow",
    "background": 1,
    "body": 24,
    "familiar": 7777,
    "head": 127,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 1312,
    "name": "Druid Edge of the Tower",
    "background": 3,
    "body": 50,
    "familiar": 94,
    "head": 205,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 1313,
    "name": "Archmagus Celah of the Sands",
    "background": 1,
    "body": 60,
    "familiar": 111,
    "head": 147,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 1314,
    "name": "Necromancer Aldus of the Atheneum",
    "background": 0,
    "body": 63,
    "familiar": 123,
    "head": 214,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 1315,
    "name": "Aleister of the Waste",
    "background": 0,
    "body": 86,
    "familiar": 112,
    "head": 231,
    "prop": 320,
    "rune": 303
  },
  {
    "idx": 1316,
    "name": "Witch Rita of the Valley",
    "background": 2,
    "body": 39,
    "familiar": 88,
    "head": 166,
    "prop": 264,
    "rune": 302
  },
  {
    "idx": 1317,
    "name": "Hydromancer Alessar of the Light",
    "background": 0,
    "body": 9,
    "familiar": 110,
    "head": 227,
    "prop": 314,
    "rune": 299
  },
  {
    "idx": 1318,
    "name": "Chronomancer Fugh of the Citadel",
    "background": 1,
    "body": 76,
    "familiar": 115,
    "head": 200,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 1319,
    "name": "Alchemist Idris of the Plains",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 219,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1320,
    "name": "Arcanist Gully of the Sun",
    "background": 0,
    "body": 5,
    "familiar": 7777,
    "head": 200,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 1321,
    "name": "Archmagus Adium of the Realm",
    "background": 0,
    "body": 28,
    "familiar": 7777,
    "head": 150,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1322,
    "name": "Spellsinger Darick of the Wood",
    "background": 0,
    "body": 45,
    "familiar": 117,
    "head": 220,
    "prop": 275,
    "rune": 294
  },
  {
    "idx": 1323,
    "name": "Hedge Wizard Rowena of the River",
    "background": 2,
    "body": 38,
    "familiar": 104,
    "head": 155,
    "prop": 312,
    "rune": 291
  },
  {
    "idx": 1324,
    "name": "Alchemist Lumos of the Tower",
    "background": 2,
    "body": 77,
    "familiar": 109,
    "head": 160,
    "prop": 245,
    "rune": 294
  },
  {
    "idx": 1325,
    "name": "Hex Mage Asphodel of the Canyon",
    "background": 3,
    "body": 22,
    "familiar": 106,
    "head": 156,
    "prop": 330,
    "rune": 288
  },
  {
    "idx": 1326,
    "name": "Mystic Ofaris of the Platonic Shadow",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 192,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 1327,
    "name": "Sorcerer Ofaris of Elysium",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 185,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 1328,
    "name": "Medium Bathsheba of the Event Horizon",
    "background": 2,
    "body": 75,
    "familiar": 117,
    "head": 191,
    "prop": 251,
    "rune": 293
  },
  {
    "idx": 1329,
    "name": "Ice Mage Cullen of the Arctic",
    "background": 0,
    "body": 65,
    "familiar": 123,
    "head": 125,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 1330,
    "name": "Archmagus Ixar in the Shadows",
    "background": 0,
    "body": 87,
    "familiar": 97,
    "head": 211,
    "prop": 309,
    "rune": 283
  },
  {
    "idx": 1331,
    "name": "Sage Setsuko of the Sands",
    "background": 2,
    "body": 58,
    "familiar": 89,
    "head": 126,
    "prop": 325,
    "rune": 292
  },
  {
    "idx": 1332,
    "name": "Charmer Circe of the River",
    "background": 3,
    "body": 13,
    "familiar": 108,
    "head": 135,
    "prop": 279,
    "rune": 304
  },
  {
    "idx": 1333,
    "name": "Hedge Wizard Caligula of the Bastion",
    "background": 0,
    "body": 40,
    "familiar": 89,
    "head": 173,
    "prop": 312,
    "rune": 288
  },
  {
    "idx": 1334,
    "name": "Cryptomancer Luther of the Marsh",
    "background": 2,
    "body": 14,
    "familiar": 110,
    "head": 206,
    "prop": 338,
    "rune": 284
  },
  {
    "idx": 1335,
    "name": "Magus Brown Cow of the Hall",
    "background": 1,
    "body": 74,
    "familiar": 103,
    "head": 193,
    "prop": 339,
    "rune": 295
  },
  {
    "idx": 1336,
    "name": "Shaman Jasper of the Sacred Pillars",
    "background": 0,
    "body": 6,
    "familiar": 7777,
    "head": 150,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1337,
    "name": "Magus Diana of the Wood",
    "background": 2,
    "body": 37,
    "familiar": 97,
    "head": 131,
    "prop": 322,
    "rune": 294
  },
  {
    "idx": 1338,
    "name": "Oberon of the Gnostics",
    "background": 1,
    "body": 8,
    "familiar": 88,
    "head": 141,
    "prop": 270,
    "rune": 296
  },
  {
    "idx": 1339,
    "name": "Battle Mage Baird of the Steppe",
    "background": 1,
    "body": 42,
    "familiar": 124,
    "head": 129,
    "prop": 316,
    "rune": 291
  },
  {
    "idx": 1340,
    "name": "Witch Rowena of the Keep",
    "background": 0,
    "body": 46,
    "familiar": 115,
    "head": 223,
    "prop": 305,
    "rune": 284
  },
  {
    "idx": 1341,
    "name": "Battle Mage Goliath of the Sacred Pillars",
    "background": 0,
    "body": 62,
    "familiar": 110,
    "head": 177,
    "prop": 307,
    "rune": 291
  },
  {
    "idx": 1342,
    "name": "Witch Elena of the Heath",
    "background": 3,
    "body": 35,
    "familiar": 109,
    "head": 166,
    "prop": 271,
    "rune": 304
  },
  {
    "idx": 1343,
    "name": "Hedge Wizard Goliath of the Desert",
    "background": 2,
    "body": 27,
    "familiar": 94,
    "head": 177,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 1344,
    "name": "Zelroth of the Desert",
    "background": 3,
    "body": 27,
    "familiar": 107,
    "head": 231,
    "prop": 246,
    "rune": 297
  },
  {
    "idx": 1345,
    "name": "Transmuter Peppy of the Realm",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 235,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 1346,
    "name": "Battlemage Merlon of the Cosmos",
    "background": 0,
    "body": 75,
    "familiar": 112,
    "head": 238,
    "prop": 277,
    "rune": 293
  },
  {
    "idx": 1347,
    "name": "Battle Mage Homer of the Marsh",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 216,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1348,
    "name": "Artificer Twinkletoes of the Wild",
    "background": 0,
    "body": 44,
    "familiar": 108,
    "head": 201,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1349,
    "name": "Battle Mage Caligula of the Moors",
    "background": 0,
    "body": 44,
    "familiar": 103,
    "head": 206,
    "prop": 319,
    "rune": 299
  },
  {
    "idx": 1350,
    "name": "Bard Helix of El Dorado",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 171,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1351,
    "name": "Alchemist Flynn of the Grotto",
    "background": 3,
    "body": 82,
    "familiar": 7777,
    "head": 173,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 1352,
    "name": "Druid Poppy of the Bastion",
    "background": 2,
    "body": 76,
    "familiar": 110,
    "head": 235,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1353,
    "name": "Arch-Magician Drusilla of the Forest",
    "background": 2,
    "body": 12,
    "familiar": 114,
    "head": 209,
    "prop": 253,
    "rune": 282
  },
  {
    "idx": 1354,
    "name": "Sage Hothor of the Lake",
    "background": 0,
    "body": 23,
    "familiar": 109,
    "head": 133,
    "prop": 245,
    "rune": 282
  },
  {
    "idx": 1355,
    "name": "Magus Elena of the Forest",
    "background": 2,
    "body": 84,
    "familiar": 105,
    "head": 209,
    "prop": 263,
    "rune": 285
  },
  {
    "idx": 1356,
    "name": "Battle Mage Hagar of the Marsh",
    "background": 2,
    "body": 42,
    "familiar": 99,
    "head": 220,
    "prop": 308,
    "rune": 302
  },
  {
    "idx": 1357,
    "name": "Artificer Samuel of Dreams",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 213,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 1358,
    "name": "Conjurer Udor of the Keep",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 230,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 1359,
    "name": "Enchanter Nicolas of the Valley",
    "background": 1,
    "body": 50,
    "familiar": 94,
    "head": 206,
    "prop": 265,
    "rune": 299
  },
  {
    "idx": 1360,
    "name": "Sonja of the Moors",
    "background": 1,
    "body": 37,
    "familiar": 107,
    "head": 132,
    "prop": 339,
    "rune": 299
  },
  {
    "idx": 1361,
    "name": "Artificer Enzo of the Garden",
    "background": 1,
    "body": 29,
    "familiar": 108,
    "head": 201,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 1362,
    "name": "Sorcerer Aldus of the Marsh",
    "background": 1,
    "body": 41,
    "familiar": 105,
    "head": 231,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 1363,
    "name": "Sorcerer Alatar of Arcadia",
    "background": 0,
    "body": 84,
    "familiar": 111,
    "head": 228,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 1364,
    "name": "Alchemist Baird of the Wood",
    "background": 1,
    "body": 42,
    "familiar": 107,
    "head": 188,
    "prop": 269,
    "rune": 284
  },
  {
    "idx": 1365,
    "name": "Diabolist Adrienne of the Road",
    "background": 3,
    "body": 37,
    "familiar": 104,
    "head": 190,
    "prop": 310,
    "rune": 296
  },
  {
    "idx": 1366,
    "name": "Druid Aldus of the Quantum Downs",
    "background": 1,
    "body": 10,
    "familiar": 7777,
    "head": 147,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 1367,
    "name": "Hedge Wizard Umber of the Lake",
    "background": 3,
    "body": 18,
    "familiar": 89,
    "head": 167,
    "prop": 276,
    "rune": 302
  },
  {
    "idx": 1368,
    "name": "Alchemist Goomer of the Keep",
    "background": 0,
    "body": 77,
    "familiar": 115,
    "head": 195,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1369,
    "name": "Sorcerer Gunthor of the Circle",
    "background": 3,
    "body": 29,
    "familiar": 115,
    "head": 216,
    "prop": 335,
    "rune": 295
  },
  {
    "idx": 1370,
    "name": "Bard Gogol of the Veil",
    "background": 0,
    "body": 9,
    "familiar": 107,
    "head": 142,
    "prop": 247,
    "rune": 302
  },
  {
    "idx": 1371,
    "name": "Cleric Nazim of the Dunes",
    "background": 1,
    "body": 5,
    "familiar": 94,
    "head": 219,
    "prop": 323,
    "rune": 299
  },
  {
    "idx": 1372,
    "name": "Sorcerer Angus of the Hall",
    "background": 1,
    "body": 74,
    "familiar": 103,
    "head": 177,
    "prop": 256,
    "rune": 291
  },
  {
    "idx": 1373,
    "name": "Archmagus Milton of the Hall",
    "background": 1,
    "body": 74,
    "familiar": 114,
    "head": 227,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 1374,
    "name": "Artificer Jerret of the Sun",
    "background": 0,
    "body": 60,
    "familiar": 110,
    "head": 160,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 1375,
    "name": "Magus Celah of the Moors",
    "background": 2,
    "body": 18,
    "familiar": 103,
    "head": 141,
    "prop": 328,
    "rune": 282
  },
  {
    "idx": 1376,
    "name": "Adept Nikolas of the Desert",
    "background": 1,
    "body": 27,
    "familiar": 7777,
    "head": 231,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 1377,
    "name": "Sorcerer Silas out of the Void",
    "background": 0,
    "body": 86,
    "familiar": 119,
    "head": 211,
    "prop": 280,
    "rune": 282
  },
  {
    "idx": 1378,
    "name": "Magus Qasim of the Sacred Pillars",
    "background": 0,
    "body": 62,
    "familiar": 97,
    "head": 237,
    "prop": 261,
    "rune": 293
  },
  {
    "idx": 1379,
    "name": "Illusionist Uday of Mu",
    "background": 2,
    "body": 8,
    "familiar": 94,
    "head": 222,
    "prop": 273,
    "rune": 291
  },
  {
    "idx": 1380,
    "name": "Chronomancer Zane of the Obelisk",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 153,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 1381,
    "name": "Archmagus Milo of Elysium",
    "background": 0,
    "body": 6,
    "familiar": 7777,
    "head": 147,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 1382,
    "name": "Thaumaturge Alessar of the Event Horizon",
    "background": 0,
    "body": 68,
    "familiar": 93,
    "head": 192,
    "prop": 325,
    "rune": 299
  },
  {
    "idx": 1383,
    "name": "Arcanist Soran of the Obelisk",
    "background": 3,
    "body": 63,
    "familiar": 109,
    "head": 214,
    "prop": 334,
    "rune": 292
  },
  {
    "idx": 1384,
    "name": "Vampyre Vlad of the Mist",
    "background": 1,
    "body": 55,
    "familiar": 95,
    "head": 152,
    "prop": 274,
    "rune": 301
  },
  {
    "idx": 1385,
    "name": "Enchanter Maia of the Veil",
    "background": 2,
    "body": 75,
    "familiar": 120,
    "head": 208,
    "prop": 305,
    "rune": 288
  },
  {
    "idx": 1386,
    "name": "Arcanist Udor of Atlantis",
    "background": 0,
    "body": 57,
    "familiar": 119,
    "head": 186,
    "prop": 323,
    "rune": 303
  },
  {
    "idx": 1387,
    "name": "Witch Lilith of the Plains",
    "background": 1,
    "body": 36,
    "familiar": 107,
    "head": 209,
    "prop": 246,
    "rune": 286
  },
  {
    "idx": 1388,
    "name": "Sorcerer Ali of the Oasis",
    "background": 1,
    "body": 58,
    "familiar": 94,
    "head": 237,
    "prop": 312,
    "rune": 284
  },
  {
    "idx": 1389,
    "name": "Wild Mage Titania of the Road",
    "background": 3,
    "body": 21,
    "familiar": 105,
    "head": 187,
    "prop": 340,
    "rune": 287
  },
  {
    "idx": 1390,
    "name": "Aldus of the Keep",
    "background": 1,
    "body": 76,
    "familiar": 123,
    "head": 160,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 1391,
    "name": "Conjurer Alatar of the Canyon",
    "background": 1,
    "body": 44,
    "familiar": 120,
    "head": 189,
    "prop": 246,
    "rune": 292
  },
  {
    "idx": 1392,
    "name": "Archmagus Nikolas",
    "background": 3,
    "body": 75,
    "familiar": 110,
    "head": 186,
    "prop": 314,
    "rune": 286
  },
  {
    "idx": 1393,
    "name": "Conjurer Iprix of the Wold",
    "background": 2,
    "body": 84,
    "familiar": 117,
    "head": 231,
    "prop": 246,
    "rune": 300
  },
  {
    "idx": 1394,
    "name": "Archmagus Alessar of the Court",
    "background": 0,
    "body": 19,
    "familiar": 120,
    "head": 226,
    "prop": 314,
    "rune": 300
  },
  {
    "idx": 1395,
    "name": "Artificer Godfrey of the Valley",
    "background": 0,
    "body": 79,
    "familiar": 95,
    "head": 183,
    "prop": 340,
    "rune": 290
  },
  {
    "idx": 1396,
    "name": "Aeromancer Nikolas of Avalon",
    "background": 0,
    "body": 6,
    "familiar": 90,
    "head": 162,
    "prop": 315,
    "rune": 301
  },
  {
    "idx": 1397,
    "name": "Hedge Wizard Cromwell of the Havens",
    "background": 2,
    "body": 24,
    "familiar": 114,
    "head": 217,
    "prop": 324,
    "rune": 290
  },
  {
    "idx": 1398,
    "name": "Druid Chooki of the Realm",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 222,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1399,
    "name": "Aldus of the Road",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 227,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 1400,
    "name": "Hedge Wizard Eden of Mu",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 127,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 1401,
    "name": "Cosmic Mage Bolin of the Mount",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 236,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 1402,
    "name": "Enchanter Adrienne of the Marsh",
    "background": 1,
    "body": 21,
    "familiar": 110,
    "head": 135,
    "prop": 325,
    "rune": 290
  },
  {
    "idx": 1403,
    "name": "Witch Velorina of the Hills",
    "background": 1,
    "body": 14,
    "familiar": 114,
    "head": 159,
    "prop": 254,
    "rune": 290
  },
  {
    "idx": 1404,
    "name": "Archmagus Apollo of the Toadstools",
    "background": 2,
    "body": 30,
    "familiar": 108,
    "head": 202,
    "prop": 254,
    "rune": 282
  },
  {
    "idx": 1405,
    "name": "Archmagus Allistair of the Capital",
    "background": 2,
    "body": 74,
    "familiar": 108,
    "head": 189,
    "prop": 246,
    "rune": 285
  },
  {
    "idx": 1406,
    "name": "Geomancer Lenora of the Wood",
    "background": 0,
    "body": 38,
    "familiar": 123,
    "head": 159,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 1407,
    "name": "Hydromancer Goliath of the River",
    "background": 0,
    "body": 12,
    "familiar": 99,
    "head": 218,
    "prop": 314,
    "rune": 304
  },
  {
    "idx": 1408,
    "name": "Thaumaturge Godfrey of the Temple",
    "background": 0,
    "body": 49,
    "familiar": 93,
    "head": 204,
    "prop": 328,
    "rune": 286
  },
  {
    "idx": 1409,
    "name": "Shaman Cromwell of the Lake",
    "background": 0,
    "body": 41,
    "familiar": 89,
    "head": 220,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 1410,
    "name": "Hydromancer Jaffer of the Havens",
    "background": 0,
    "body": 63,
    "familiar": 103,
    "head": 164,
    "prop": 314,
    "rune": 300
  },
  {
    "idx": 1411,
    "name": "Magus Amir of the Hall",
    "background": 1,
    "body": 77,
    "familiar": 123,
    "head": 160,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 1412,
    "name": "Cleric Hadrien of the Psychic Leap",
    "background": 2,
    "body": 75,
    "familiar": 114,
    "head": 212,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 1413,
    "name": "Ice Mage Brutus of the North",
    "background": 1,
    "body": 65,
    "familiar": 97,
    "head": 133,
    "prop": 245,
    "rune": 297
  },
  {
    "idx": 1414,
    "name": "Enchanter Beyna of the Hollow",
    "background": 1,
    "body": 32,
    "familiar": 93,
    "head": 135,
    "prop": 332,
    "rune": 286
  },
  {
    "idx": 1415,
    "name": "Arch-Magician Zaros of the Villa",
    "background": 1,
    "body": 77,
    "familiar": 7777,
    "head": 160,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 1416,
    "name": "Druid Gully of the Villa",
    "background": 2,
    "body": 26,
    "familiar": 104,
    "head": 171,
    "prop": 340,
    "rune": 300
  },
  {
    "idx": 1417,
    "name": "Hydromancer Caligari of the Sea",
    "background": 0,
    "body": 57,
    "familiar": 7777,
    "head": 179,
    "prop": 314,
    "rune": 302
  },
  {
    "idx": 1418,
    "name": "Druid Jameel of the Realm",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 222,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1419,
    "name": "Shaman Alice of the Steppe",
    "background": 1,
    "body": 18,
    "familiar": 108,
    "head": 195,
    "prop": 276,
    "rune": 290
  },
  {
    "idx": 1420,
    "name": "Illusionist Huizhong of the Obelisk",
    "background": 2,
    "body": 7,
    "familiar": 90,
    "head": 236,
    "prop": 246,
    "rune": 286
  },
  {
    "idx": 1421,
    "name": "Arch-Magician Cromwell of the Plains",
    "background": 0,
    "body": 14,
    "familiar": 120,
    "head": 206,
    "prop": 253,
    "rune": 294
  },
  {
    "idx": 1422,
    "name": "Archmagus Aldus of the Desert",
    "background": 2,
    "body": 5,
    "familiar": 116,
    "head": 185,
    "prop": 310,
    "rune": 299
  },
  {
    "idx": 1423,
    "name": "Archmagus Aldus of Elysium",
    "background": 1,
    "body": 6,
    "familiar": 113,
    "head": 160,
    "prop": 315,
    "rune": 285
  },
  {
    "idx": 1424,
    "name": "Enchanter Marceline of the Villa",
    "background": 3,
    "body": 78,
    "familiar": 88,
    "head": 176,
    "prop": 334,
    "rune": 298
  },
  {
    "idx": 1425,
    "name": "Archmagus Apollo of the Wold",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 227,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 1426,
    "name": "Conjurer Crobas of the Forest",
    "background": 1,
    "body": 79,
    "familiar": 94,
    "head": 207,
    "prop": 246,
    "rune": 301
  },
  {
    "idx": 1427,
    "name": "Witch Rita of the Grotto",
    "background": 0,
    "body": 79,
    "familiar": 115,
    "head": 155,
    "prop": 260,
    "rune": 303
  },
  {
    "idx": 1428,
    "name": "Magus Xiaosheng of the Steppe",
    "background": 1,
    "body": 37,
    "familiar": 123,
    "head": 180,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 1429,
    "name": "Mystic Nicolas of the Event Horizon",
    "background": 1,
    "body": 11,
    "familiar": 88,
    "head": 220,
    "prop": 325,
    "rune": 294
  },
  {
    "idx": 1430,
    "name": "Druid Apollo of the Wild",
    "background": 1,
    "body": 13,
    "familiar": 120,
    "head": 192,
    "prop": 276,
    "rune": 290
  },
  {
    "idx": 1431,
    "name": "Electromancer David of the Cosmos",
    "background": 0,
    "body": 83,
    "familiar": 111,
    "head": 192,
    "prop": 305,
    "rune": 302
  },
  {
    "idx": 1432,
    "name": "Pyromancer Herne of the Quantum Shadow",
    "background": 1,
    "body": 86,
    "familiar": 119,
    "head": 167,
    "prop": 277,
    "rune": 284
  },
  {
    "idx": 1433,
    "name": "Magus Lamia of the Field",
    "background": 3,
    "body": 31,
    "familiar": 93,
    "head": 132,
    "prop": 255,
    "rune": 283
  },
  {
    "idx": 1434,
    "name": "Charmer Althea of the Canyon",
    "background": 0,
    "body": 31,
    "familiar": 88,
    "head": 139,
    "prop": 264,
    "rune": 299
  },
  {
    "idx": 1435,
    "name": "Sorcerer Taqi of the Tower",
    "background": 3,
    "body": 48,
    "familiar": 93,
    "head": 222,
    "prop": 257,
    "rune": 293
  },
  {
    "idx": 1436,
    "name": "Battle Mage Luther of Mu",
    "background": 3,
    "body": 24,
    "familiar": 90,
    "head": 133,
    "prop": 264,
    "rune": 294
  },
  {
    "idx": 1437,
    "name": "Runecaster Ivy of the Wold",
    "background": 1,
    "body": 12,
    "familiar": 105,
    "head": 155,
    "prop": 326,
    "rune": 291
  },
  {
    "idx": 1438,
    "name": "Thaumaturge Mace of the Wood",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 207,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1439,
    "name": "Summoner Eden of the Court",
    "background": 2,
    "body": 76,
    "familiar": 114,
    "head": 228,
    "prop": 253,
    "rune": 283
  },
  {
    "idx": 1440,
    "name": "Witch David of the Surf",
    "background": 0,
    "body": 57,
    "familiar": 123,
    "head": 127,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 1441,
    "name": "Druid Rodolfo of Mu",
    "background": 3,
    "body": 11,
    "familiar": 90,
    "head": 218,
    "prop": 265,
    "rune": 287
  },
  {
    "idx": 1442,
    "name": "Hex Mage Jean Leon of the Garden",
    "background": 1,
    "body": 29,
    "familiar": 95,
    "head": 149,
    "prop": 277,
    "rune": 287
  },
  {
    "idx": 1443,
    "name": "Magus Tengu of the Tower",
    "background": 1,
    "body": 40,
    "familiar": 105,
    "head": 243,
    "prop": 263,
    "rune": 294
  },
  {
    "idx": 1444,
    "name": "Solomon",
    "background": 0,
    "body": 29,
    "familiar": 95,
    "head": 199,
    "prop": 262,
    "rune": 300
  },
  {
    "idx": 1445,
    "name": "Diviner Robert of Arcadia",
    "background": 0,
    "body": 17,
    "familiar": 90,
    "head": 220,
    "prop": 251,
    "rune": 282
  },
  {
    "idx": 1446,
    "name": "Druid Rixxa of El Dorado",
    "background": 2,
    "body": 77,
    "familiar": 112,
    "head": 200,
    "prop": 264,
    "rune": 294
  },
  {
    "idx": 1447,
    "name": "Shaman Nassif of the Desert",
    "background": 0,
    "body": 60,
    "familiar": 94,
    "head": 237,
    "prop": 276,
    "rune": 300
  },
  {
    "idx": 1448,
    "name": "Geomancer Angus of the Road",
    "background": 1,
    "body": 15,
    "familiar": 7777,
    "head": 216,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 1449,
    "name": "Battle Mage Nicolas of the Valley",
    "background": 0,
    "body": 41,
    "familiar": 117,
    "head": 182,
    "prop": 252,
    "rune": 282
  },
  {
    "idx": 1450,
    "name": "Conjurer Atlas of the Wild",
    "background": 2,
    "body": 13,
    "familiar": 111,
    "head": 173,
    "prop": 273,
    "rune": 301
  },
  {
    "idx": 1451,
    "name": "Wild Mage Merlon of the Wold",
    "background": 0,
    "body": 12,
    "familiar": 95,
    "head": 199,
    "prop": 320,
    "rune": 290
  },
  {
    "idx": 1452,
    "name": "Archmagus David of the Mount",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 153,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 1453,
    "name": "Magus Qianfan of the Toadstools",
    "background": 0,
    "body": 30,
    "familiar": 111,
    "head": 236,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 1454,
    "name": "Sage Digby",
    "background": 0,
    "body": 28,
    "familiar": 89,
    "head": 207,
    "prop": 256,
    "rune": 288
  },
  {
    "idx": 1455,
    "name": "Runecaster Soya of the Bastion",
    "background": 3,
    "body": 78,
    "familiar": 97,
    "head": 215,
    "prop": 256,
    "rune": 297
  },
  {
    "idx": 1456,
    "name": "Arch-Magician Giacomo of the Forest",
    "background": 1,
    "body": 19,
    "familiar": 119,
    "head": 201,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1457,
    "name": "Archmagus Lux of the Plains",
    "background": 2,
    "body": 79,
    "familiar": 89,
    "head": 228,
    "prop": 315,
    "rune": 284
  },
  {
    "idx": 1458,
    "name": "Hedge Wizard Victoria of the Hall",
    "background": 3,
    "body": 46,
    "familiar": 93,
    "head": 139,
    "prop": 340,
    "rune": 291
  },
  {
    "idx": 1459,
    "name": "Alchemist Chyou of the Road",
    "background": 0,
    "body": 34,
    "familiar": 7777,
    "head": 180,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 1460,
    "name": "Cairon of the Hills",
    "background": 0,
    "body": 84,
    "familiar": 107,
    "head": 185,
    "prop": 275,
    "rune": 290
  },
  {
    "idx": 1461,
    "name": "Hedge Wizard Calliope of the Thorn",
    "background": 1,
    "body": 30,
    "familiar": 89,
    "head": 198,
    "prop": 319,
    "rune": 286
  },
  {
    "idx": 1462,
    "name": "Arch-Magician Talon from the Shadow",
    "background": 1,
    "body": 86,
    "familiar": 112,
    "head": 220,
    "prop": 253,
    "rune": 285
  },
  {
    "idx": 1463,
    "name": "Sorcerer Kamil of the Dunes",
    "background": 3,
    "body": 5,
    "familiar": 114,
    "head": 128,
    "prop": 269,
    "rune": 302
  },
  {
    "idx": 1464,
    "name": "Ice Mage Nikolas of the Ice",
    "background": 0,
    "body": 65,
    "familiar": 7777,
    "head": 231,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 1465,
    "name": "Shaman Cromwell of Dreams",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 183,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 1466,
    "name": "Voodoo Priest Auguste of the Dunes",
    "background": 2,
    "body": 60,
    "familiar": 95,
    "head": 149,
    "prop": 261,
    "rune": 282
  },
  {
    "idx": 1467,
    "name": "Pyromancer Udor of the Thorn",
    "background": 0,
    "body": 28,
    "familiar": 110,
    "head": 221,
    "prop": 277,
    "rune": 295
  },
  {
    "idx": 1468,
    "name": "Alchemist Argus of Mu",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 227,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1469,
    "name": "Alchemist Hagar of the Mount",
    "background": 1,
    "body": 50,
    "familiar": 116,
    "head": 129,
    "prop": 269,
    "rune": 297
  },
  {
    "idx": 1470,
    "name": "Arcanist Sondra of the Keep",
    "background": 2,
    "body": 48,
    "familiar": 88,
    "head": 132,
    "prop": 325,
    "rune": 288
  },
  {
    "idx": 1471,
    "name": "Evoker Bogey of the Citadel",
    "background": 0,
    "body": 74,
    "familiar": 111,
    "head": 178,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 1472,
    "name": "Archmagus Davos of the Keep",
    "background": 0,
    "body": 55,
    "familiar": 89,
    "head": 228,
    "prop": 312,
    "rune": 292
  },
  {
    "idx": 1473,
    "name": "Ghost Eater Artis of the Road",
    "background": 0,
    "body": 39,
    "familiar": 111,
    "head": 132,
    "prop": 332,
    "rune": 292
  },
  {
    "idx": 1474,
    "name": "Illusionist Cybele of Avalon",
    "background": 2,
    "body": 7,
    "familiar": 104,
    "head": 131,
    "prop": 273,
    "rune": 7777
  },
  {
    "idx": 1475,
    "name": "Hedge Wizard Aleister of the Wild",
    "background": 1,
    "body": 42,
    "familiar": 101,
    "head": 229,
    "prop": 312,
    "rune": 288
  },
  {
    "idx": 1476,
    "name": "Hedge Wizard Zelroth of the Hollow",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 197,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 1477,
    "name": "Enchanter Pandora of the Court",
    "background": 1,
    "body": 26,
    "familiar": 95,
    "head": 198,
    "prop": 315,
    "rune": 287
  },
  {
    "idx": 1478,
    "name": "Magus Celah of the Field",
    "background": 2,
    "body": 41,
    "familiar": 120,
    "head": 228,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 1479,
    "name": "Archmagus Aldus of the Sacred Pillars",
    "background": 2,
    "body": 49,
    "familiar": 109,
    "head": 162,
    "prop": 246,
    "rune": 296
  },
  {
    "idx": 1480,
    "name": "Sorcerer Lumos of the Hall",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 138,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1481,
    "name": "Artificer Fabio of the Sands",
    "background": 0,
    "body": 27,
    "familiar": 7777,
    "head": 201,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 1482,
    "name": "Ice Mage Porto of the North",
    "background": 1,
    "body": 73,
    "familiar": 112,
    "head": 195,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 1483,
    "name": "Necromancer Malcom of Arcadia",
    "background": 1,
    "body": 14,
    "familiar": 93,
    "head": 194,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 1484,
    "name": "Archmagus Burnside of the Keep",
    "background": 0,
    "body": 40,
    "familiar": 116,
    "head": 158,
    "prop": 335,
    "rune": 290
  },
  {
    "idx": 1485,
    "name": "Shaman Angus of the Palms",
    "background": 1,
    "body": 27,
    "familiar": 97,
    "head": 133,
    "prop": 324,
    "rune": 284
  },
  {
    "idx": 1486,
    "name": "Battle Mage Dutorn of the Marsh",
    "background": 1,
    "body": 23,
    "familiar": 89,
    "head": 165,
    "prop": 316,
    "rune": 282
  },
  {
    "idx": 1487,
    "name": "Druid Nicolas of the Cold",
    "background": 1,
    "body": 65,
    "familiar": 7777,
    "head": 213,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 1488,
    "name": "Artificer Jaffer of the Cosmos",
    "background": 1,
    "body": 10,
    "familiar": 104,
    "head": 164,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 1489,
    "name": "Archmagus Isaac of the Plains",
    "background": 0,
    "body": 14,
    "familiar": 123,
    "head": 138,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1490,
    "name": "Sorcerer Nadeem of the Hall",
    "background": 3,
    "body": 18,
    "familiar": 111,
    "head": 222,
    "prop": 308,
    "rune": 299
  },
  {
    "idx": 1491,
    "name": "Enchanter Pierre of the Moors",
    "background": 1,
    "body": 84,
    "familiar": 115,
    "head": 149,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 1492,
    "name": "Sorcerer Merlon of the Havens",
    "background": 0,
    "body": 54,
    "familiar": 112,
    "head": 215,
    "prop": 249,
    "rune": 287
  },
  {
    "idx": 1493,
    "name": "Witch Ambrosia of the Wood",
    "background": 0,
    "body": 38,
    "familiar": 104,
    "head": 166,
    "prop": 262,
    "rune": 296
  },
  {
    "idx": 1494,
    "name": "Artificer Shi of the Moors",
    "background": 1,
    "body": 22,
    "familiar": 123,
    "head": 180,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 1495,
    "name": "Sondra of the Marsh",
    "background": 0,
    "body": 37,
    "familiar": 107,
    "head": 187,
    "prop": 255,
    "rune": 283
  },
  {
    "idx": 1496,
    "name": "Alchemist Azahl of the Psychic Leap",
    "background": 1,
    "body": 75,
    "familiar": 7777,
    "head": 147,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1497,
    "name": "Necromancer Diabolos of the Veil",
    "background": 0,
    "body": 30,
    "familiar": 119,
    "head": 205,
    "prop": 312,
    "rune": 284
  },
  {
    "idx": 1498,
    "name": "Sorcerer Azahl of the Mount",
    "background": 0,
    "body": 49,
    "familiar": 119,
    "head": 192,
    "prop": 273,
    "rune": 294
  },
  {
    "idx": 1499,
    "name": "Enchanter Calista of the Marsh",
    "background": 2,
    "body": 37,
    "familiar": 104,
    "head": 190,
    "prop": 262,
    "rune": 282
  },
  {
    "idx": 1500,
    "name": "Oracle Asphodel of the Wood",
    "background": 0,
    "body": 32,
    "familiar": 88,
    "head": 190,
    "prop": 252,
    "rune": 286
  },
  {
    "idx": 1501,
    "name": "Witch Velorina of the Valley",
    "background": 0,
    "body": 37,
    "familiar": 115,
    "head": 166,
    "prop": 338,
    "rune": 282
  },
  {
    "idx": 1502,
    "name": "Sage Robert of the Wood",
    "background": 1,
    "body": 82,
    "familiar": 123,
    "head": 213,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 1503,
    "name": "Holy Monk Drokore of the Brambles",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 207,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1504,
    "name": "Void Disciple Abbadon of the Heath",
    "background": 1,
    "body": 45,
    "familiar": 94,
    "head": 205,
    "prop": 250,
    "rune": 295
  },
  {
    "idx": 1505,
    "name": "Chaos Mage Norix of the Light",
    "background": 3,
    "body": 67,
    "familiar": 88,
    "head": 194,
    "prop": 309,
    "rune": 298
  },
  {
    "idx": 1506,
    "name": "Charmer Artis of the Hall",
    "background": 0,
    "body": 40,
    "familiar": 107,
    "head": 191,
    "prop": 315,
    "rune": 292
  },
  {
    "idx": 1507,
    "name": "Alchemist Celah of the Quantum Downs",
    "background": 1,
    "body": 67,
    "familiar": 123,
    "head": 215,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1508,
    "name": "Geomancer Axel of the Sacred Pillars",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 204,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 1509,
    "name": "Battle Mage Bayard of the Surf",
    "background": 1,
    "body": 57,
    "familiar": 119,
    "head": 182,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 1510,
    "name": "Runecaster Ofaris of the Veil",
    "background": 1,
    "body": 75,
    "familiar": 110,
    "head": 147,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 1511,
    "name": "Lux of the Desert",
    "background": 1,
    "body": 61,
    "familiar": 94,
    "head": 215,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 1512,
    "name": "Alchemist Charlord",
    "background": 1,
    "body": 65,
    "familiar": 105,
    "head": 158,
    "prop": 271,
    "rune": 288
  },
  {
    "idx": 1513,
    "name": "Archmagus Aleister of the Hollow",
    "background": 1,
    "body": 12,
    "familiar": 107,
    "head": 127,
    "prop": 314,
    "rune": 293
  },
  {
    "idx": 1514,
    "name": "Aleister of the Sea",
    "background": 0,
    "body": 57,
    "familiar": 116,
    "head": 185,
    "prop": 267,
    "rune": 293
  },
  {
    "idx": 1515,
    "name": "Alchemist Pumlo of the Astral Plane",
    "background": 1,
    "body": 52,
    "familiar": 106,
    "head": 227,
    "prop": 267,
    "rune": 288
  },
  {
    "idx": 1516,
    "name": "Archmagus Ronald of the Valley",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 150,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 1517,
    "name": "Sorcerer Alessar of the Belfry",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 231,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 1518,
    "name": "Enchanter Devon of the River",
    "background": 2,
    "body": 22,
    "familiar": 119,
    "head": 156,
    "prop": 269,
    "rune": 283
  },
  {
    "idx": 1519,
    "name": "Mystic Lucien of the Oasis",
    "background": 2,
    "body": 60,
    "familiar": 95,
    "head": 149,
    "prop": 326,
    "rune": 299
  },
  {
    "idx": 1520,
    "name": "Illusionist Bucky of the Marsh",
    "background": 1,
    "body": 43,
    "familiar": 89,
    "head": 167,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 1521,
    "name": "Enchanter Adrienne of the Field",
    "background": 1,
    "body": 23,
    "familiar": 7777,
    "head": 198,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1522,
    "name": "Druid Nixie of the Tower",
    "background": 1,
    "body": 76,
    "familiar": 7777,
    "head": 200,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1523,
    "name": "Archmagus Soya of the Plains",
    "background": 1,
    "body": 42,
    "familiar": 7777,
    "head": 185,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 1524,
    "name": "Thaumaturge Lux of the Ether",
    "background": 0,
    "body": 75,
    "familiar": 103,
    "head": 233,
    "prop": 332,
    "rune": 302
  },
  {
    "idx": 1525,
    "name": "Battle Mage Goliath of the Desert",
    "background": 0,
    "body": 58,
    "familiar": 94,
    "head": 177,
    "prop": 306,
    "rune": 297
  },
  {
    "idx": 1526,
    "name": "Enchanter Rowena of the Wold",
    "background": 0,
    "body": 33,
    "familiar": 119,
    "head": 223,
    "prop": 249,
    "rune": 292
  },
  {
    "idx": 1527,
    "name": "Magus Chiyo of the Hills",
    "background": 0,
    "body": 84,
    "familiar": 101,
    "head": 126,
    "prop": 263,
    "rune": 302
  },
  {
    "idx": 1528,
    "name": "Archmagus Milton of the Bastion",
    "background": 2,
    "body": 26,
    "familiar": 119,
    "head": 229,
    "prop": 312,
    "rune": 296
  },
  {
    "idx": 1529,
    "name": "Artificer Numpty of the Mount",
    "background": 1,
    "body": 62,
    "familiar": 7777,
    "head": 201,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 1530,
    "name": "Alchemist Bartholomew of the Steppe",
    "background": 1,
    "body": 12,
    "familiar": 105,
    "head": 133,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 1531,
    "name": "Shaman Faiz of the Waste",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 164,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1532,
    "name": "Archmagus Aleister of the River",
    "background": 1,
    "body": 79,
    "familiar": 7777,
    "head": 233,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 1533,
    "name": "Aleister of the Havens",
    "background": 1,
    "body": 9,
    "familiar": 112,
    "head": 226,
    "prop": 257,
    "rune": 299
  },
  {
    "idx": 1534,
    "name": "Adept Cassius of the Rock",
    "background": 1,
    "body": 27,
    "familiar": 7777,
    "head": 216,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 1535,
    "name": "Sage JackDaw of the Astral Plane",
    "background": 0,
    "body": 8,
    "familiar": 120,
    "head": 144,
    "prop": 277,
    "rune": 285
  },
  {
    "idx": 1536,
    "name": "Archmagus Ofaris of the Havens",
    "background": 0,
    "body": 50,
    "familiar": 112,
    "head": 211,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 1537,
    "name": "Illusionist Artis of the Field",
    "background": 2,
    "body": 22,
    "familiar": 95,
    "head": 208,
    "prop": 273,
    "rune": 287
  },
  {
    "idx": 1538,
    "name": "Battle Mage Brutus of the Sacred Pillars",
    "background": 0,
    "body": 50,
    "familiar": 108,
    "head": 213,
    "prop": 305,
    "rune": 300
  },
  {
    "idx": 1539,
    "name": "Adept Gunthor of the Hall",
    "background": 0,
    "body": 48,
    "familiar": 7777,
    "head": 203,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 1540,
    "name": "Oracle Hind of the Ice",
    "background": 1,
    "body": 65,
    "familiar": 97,
    "head": 167,
    "prop": 329,
    "rune": 297
  },
  {
    "idx": 1541,
    "name": "Chronomancer Arabella of the Mount",
    "background": 0,
    "body": 7,
    "familiar": 90,
    "head": 135,
    "prop": 259,
    "rune": 292
  },
  {
    "idx": 1542,
    "name": "Aeromancer Duzzle of the Valley",
    "background": 1,
    "body": 6,
    "familiar": 112,
    "head": 200,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 1543,
    "name": "Adept Iprix of the Hall",
    "background": 1,
    "body": 78,
    "familiar": 112,
    "head": 160,
    "prop": 266,
    "rune": 283
  },
  {
    "idx": 1544,
    "name": "Archmagus Jerret of the Desert",
    "background": 2,
    "body": 27,
    "familiar": 99,
    "head": 228,
    "prop": 340,
    "rune": 295
  },
  {
    "idx": 1545,
    "name": "Shaman Voidoth of the Keep",
    "background": 0,
    "body": 78,
    "familiar": 88,
    "head": 242,
    "prop": 334,
    "rune": 290
  },
  {
    "idx": 1546,
    "name": "Conjurer Mei of the Psychic Leap",
    "background": 2,
    "body": 10,
    "familiar": 90,
    "head": 180,
    "prop": 246,
    "rune": 287
  },
  {
    "idx": 1547,
    "name": "Runecaster Hansel of the Grotto",
    "background": 3,
    "body": 19,
    "familiar": 107,
    "head": 216,
    "prop": 326,
    "rune": 288
  },
  {
    "idx": 1548,
    "name": "Alchemist Gully of the Wold",
    "background": 3,
    "body": 19,
    "familiar": 105,
    "head": 200,
    "prop": 270,
    "rune": 299
  },
  {
    "idx": 1549,
    "name": "Artificer Kingsley of the Surf",
    "background": 2,
    "body": 57,
    "familiar": 89,
    "head": 201,
    "prop": 312,
    "rune": 302
  },
  {
    "idx": 1550,
    "name": "Enchanter Carly of the Marsh",
    "background": 2,
    "body": 12,
    "familiar": 109,
    "head": 135,
    "prop": 270,
    "rune": 282
  },
  {
    "idx": 1551,
    "name": "Atlanta of the Field",
    "background": 3,
    "body": 34,
    "familiar": 101,
    "head": 191,
    "prop": 263,
    "rune": 293
  },
  {
    "idx": 1552,
    "name": "Sorcerer Alatar",
    "background": 1,
    "body": 9,
    "familiar": 114,
    "head": 147,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 1553,
    "name": "Magus Jameel of the Pit",
    "background": 2,
    "body": 87,
    "familiar": 104,
    "head": 237,
    "prop": 262,
    "rune": 287
  },
  {
    "idx": 1554,
    "name": "Arch-Magician Rafiq of the Court",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 164,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1555,
    "name": "Mystic Azahl of the Cosmos",
    "background": 2,
    "body": 8,
    "familiar": 109,
    "head": 141,
    "prop": 249,
    "rune": 294
  },
  {
    "idx": 1556,
    "name": "Adept Iris of the Forest",
    "background": 2,
    "body": 21,
    "familiar": 119,
    "head": 190,
    "prop": 324,
    "rune": 288
  },
  {
    "idx": 1557,
    "name": "Sage Soran of the Rock",
    "background": 1,
    "body": 5,
    "familiar": 111,
    "head": 238,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 1558,
    "name": "Adept Bayard of the River",
    "background": 1,
    "body": 14,
    "familiar": 114,
    "head": 206,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 1559,
    "name": "Mystic Otto of the Belfry",
    "background": 2,
    "body": 50,
    "familiar": 89,
    "head": 133,
    "prop": 325,
    "rune": 294
  },
  {
    "idx": 1560,
    "name": "Ghost Eater Ali of the Astral Plane",
    "background": 1,
    "body": 75,
    "familiar": 123,
    "head": 142,
    "prop": 332,
    "rune": 296
  },
  {
    "idx": 1561,
    "name": "Scryer Talbot of the Reach",
    "background": 0,
    "body": 23,
    "familiar": 109,
    "head": 220,
    "prop": 245,
    "rune": 302
  },
  {
    "idx": 1562,
    "name": "Null Mage Charlord of the Light",
    "background": 2,
    "body": 11,
    "familiar": 101,
    "head": 158,
    "prop": 275,
    "rune": 290
  },
  {
    "idx": 1563,
    "name": "Chaos Mage Kobold of the Hollow",
    "background": 0,
    "body": 41,
    "familiar": 105,
    "head": 200,
    "prop": 331,
    "rune": 294
  },
  {
    "idx": 1564,
    "name": "Druid Danny of the Astral Plane",
    "background": 2,
    "body": 67,
    "familiar": 116,
    "head": 165,
    "prop": 265,
    "rune": 287
  },
  {
    "idx": 1565,
    "name": "Ghost Eater Ethan of the Sun",
    "background": 0,
    "body": 61,
    "familiar": 104,
    "head": 177,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 1566,
    "name": "Null Mage Milton of the Villa",
    "background": 0,
    "body": 26,
    "familiar": 115,
    "head": 199,
    "prop": 337,
    "rune": 302
  },
  {
    "idx": 1567,
    "name": "Shaman Sturgis of the Platonic Shadow",
    "background": 0,
    "body": 67,
    "familiar": 107,
    "head": 165,
    "prop": 264,
    "rune": 284
  },
  {
    "idx": 1568,
    "name": "Sorcerer Eizo of the Havens",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 153,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 1569,
    "name": "Shaman Cairon of the Palms",
    "background": 0,
    "body": 61,
    "familiar": 116,
    "head": 160,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 1570,
    "name": "Artificer Reza of the Keep",
    "background": 0,
    "body": 46,
    "familiar": 109,
    "head": 219,
    "prop": 256,
    "rune": 285
  },
  {
    "idx": 1571,
    "name": "Sorcerer Azazel of the Lake",
    "background": 3,
    "body": 19,
    "familiar": 96,
    "head": 194,
    "prop": 249,
    "rune": 287
  },
  {
    "idx": 1572,
    "name": "Illusionist Aiko of the Reach",
    "background": 0,
    "body": 79,
    "familiar": 108,
    "head": 126,
    "prop": 246,
    "rune": 303
  },
  {
    "idx": 1573,
    "name": "Shaman Talbot of the Mist",
    "background": 3,
    "body": 54,
    "familiar": 99,
    "head": 204,
    "prop": 316,
    "rune": 282
  },
  {
    "idx": 1574,
    "name": "Magus Wolfram of the Atheneum",
    "background": 2,
    "body": 62,
    "familiar": 115,
    "head": 218,
    "prop": 262,
    "rune": 287
  },
  {
    "idx": 1575,
    "name": "Calliope of the Canyon",
    "background": 3,
    "body": 22,
    "familiar": 95,
    "head": 191,
    "prop": 311,
    "rune": 298
  },
  {
    "idx": 1576,
    "name": "Sage Misumi of the Oasis",
    "background": 1,
    "body": 59,
    "familiar": 95,
    "head": 126,
    "prop": 318,
    "rune": 293
  },
  {
    "idx": 1577,
    "name": "Adept Danny of the Ether",
    "background": 1,
    "body": 24,
    "familiar": 103,
    "head": 206,
    "prop": 328,
    "rune": 297
  },
  {
    "idx": 1578,
    "name": "Battle Mage Sturgis of the Havens",
    "background": 1,
    "body": 49,
    "familiar": 114,
    "head": 220,
    "prop": 321,
    "rune": 293
  },
  {
    "idx": 1579,
    "name": "Alchemist Solomon of the Citadel",
    "background": 1,
    "body": 77,
    "familiar": 93,
    "head": 226,
    "prop": 270,
    "rune": 288
  },
  {
    "idx": 1580,
    "name": "Necromancer Judas of the Cosmos",
    "background": 1,
    "body": 67,
    "familiar": 88,
    "head": 194,
    "prop": 322,
    "rune": 282
  },
  {
    "idx": 1581,
    "name": "Aeromancer Daria of the Mountain",
    "background": 2,
    "body": 22,
    "familiar": 89,
    "head": 132,
    "prop": 315,
    "rune": 282
  },
  {
    "idx": 1582,
    "name": "Sorcerer Kazem of the Palms",
    "background": 1,
    "body": 27,
    "familiar": 101,
    "head": 128,
    "prop": 326,
    "rune": 295
  },
  {
    "idx": 1583,
    "name": "Druid Circe of the Forest",
    "background": 0,
    "body": 84,
    "familiar": 103,
    "head": 131,
    "prop": 328,
    "rune": 302
  },
  {
    "idx": 1584,
    "name": "Bard Lux of the Hall",
    "background": 1,
    "body": 74,
    "familiar": 120,
    "head": 238,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1585,
    "name": "Arch-Magician Miyo of the Steppe",
    "background": 1,
    "body": 41,
    "familiar": 91,
    "head": 126,
    "prop": 326,
    "rune": 289
  },
  {
    "idx": 1586,
    "name": "Fortune Teller Ixar of the Brambles",
    "background": 0,
    "body": 45,
    "familiar": 89,
    "head": 221,
    "prop": 329,
    "rune": 284
  },
  {
    "idx": 1587,
    "name": "Mephistopheles",
    "background": 3,
    "body": 19,
    "familiar": 120,
    "head": 189,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 1588,
    "name": "Ice Mage Baptiste of the Cold",
    "background": 2,
    "body": 73,
    "familiar": 88,
    "head": 149,
    "prop": 276,
    "rune": 296
  },
  {
    "idx": 1589,
    "name": "Hex Mage Asmodeus from the Abyss",
    "background": 0,
    "body": 87,
    "familiar": 96,
    "head": 193,
    "prop": 335,
    "rune": 286
  },
  {
    "idx": 1590,
    "name": "Archmagus Aden of the Wood",
    "background": 0,
    "body": 84,
    "familiar": 109,
    "head": 125,
    "prop": 323,
    "rune": 283
  },
  {
    "idx": 1591,
    "name": "Archmagus Argus of Atlantis",
    "background": 1,
    "body": 57,
    "familiar": 99,
    "head": 137,
    "prop": 314,
    "rune": 291
  },
  {
    "idx": 1592,
    "name": "Katherine of the Oasis",
    "background": 1,
    "body": 5,
    "familiar": 120,
    "head": 139,
    "prop": 255,
    "rune": 300
  },
  {
    "idx": 1593,
    "name": "Archmagus Ratko of the Morning Star",
    "background": 3,
    "body": 86,
    "familiar": 90,
    "head": 220,
    "prop": 335,
    "rune": 286
  },
  {
    "idx": 1594,
    "name": "Archmagus Hadrien of the Heath",
    "background": 0,
    "body": 12,
    "familiar": 112,
    "head": 232,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 1595,
    "name": "Sorcerer Aldus of the Astral Plane",
    "background": 2,
    "body": 52,
    "familiar": 97,
    "head": 212,
    "prop": 322,
    "rune": 302
  },
  {
    "idx": 1596,
    "name": "Ghost Eater Hypnos of the Valley",
    "background": 2,
    "body": 50,
    "familiar": 105,
    "head": 145,
    "prop": 254,
    "rune": 299
  },
  {
    "idx": 1597,
    "name": "Uvlius of the Rock",
    "background": 2,
    "body": 5,
    "familiar": 95,
    "head": 232,
    "prop": 338,
    "rune": 304
  },
  {
    "idx": 1598,
    "name": "Witch Rita of Arcadia",
    "background": 0,
    "body": 36,
    "familiar": 119,
    "head": 159,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 1599,
    "name": "Alchemist Purple Boy of the Rock",
    "background": 3,
    "body": 61,
    "familiar": 119,
    "head": 154,
    "prop": 325,
    "rune": 294
  },
  {
    "idx": 1600,
    "name": "Evoker Soya of the Cosmos",
    "background": 1,
    "body": 11,
    "familiar": 119,
    "head": 189,
    "prop": 306,
    "rune": 290
  },
  {
    "idx": 1601,
    "name": "Alchemist Oberon of the Wood",
    "background": 2,
    "body": 45,
    "familiar": 90,
    "head": 232,
    "prop": 269,
    "rune": 284
  },
  {
    "idx": 1602,
    "name": "Arcanist Udor of Avalon",
    "background": 0,
    "body": 54,
    "familiar": 115,
    "head": 227,
    "prop": 323,
    "rune": 304
  },
  {
    "idx": 1603,
    "name": "Magus Asmodeus of the Moors",
    "background": 0,
    "body": 23,
    "familiar": 124,
    "head": 193,
    "prop": 262,
    "rune": 287
  },
  {
    "idx": 1604,
    "name": "Arch-Magician Amanita of the Hall",
    "background": 0,
    "body": 48,
    "familiar": 94,
    "head": 195,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 1605,
    "name": "Ice Mage Jerret of the Ice",
    "background": 1,
    "body": 73,
    "familiar": 95,
    "head": 232,
    "prop": 312,
    "rune": 284
  },
  {
    "idx": 1606,
    "name": "Augurer Blaise of the Mountain",
    "background": 1,
    "body": 18,
    "familiar": 97,
    "head": 133,
    "prop": 329,
    "rune": 283
  },
  {
    "idx": 1607,
    "name": "Alchemist Remus of the Wild",
    "background": 0,
    "body": 42,
    "familiar": 7777,
    "head": 199,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1608,
    "name": "Necromancer Lei of the Mount",
    "background": 1,
    "body": 7,
    "familiar": 112,
    "head": 180,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 1609,
    "name": "Clairvoyant Celeste of the Rock",
    "background": 0,
    "body": 58,
    "familiar": 88,
    "head": 187,
    "prop": 252,
    "rune": 284
  },
  {
    "idx": 1610,
    "name": "Sage Crobas of Avalon",
    "background": 2,
    "body": 6,
    "familiar": 114,
    "head": 207,
    "prop": 318,
    "rune": 283
  },
  {
    "idx": 1611,
    "name": "Sorcerer Qaid of the Astral Plane",
    "background": 1,
    "body": 52,
    "familiar": 7777,
    "head": 128,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 1612,
    "name": "Clairvoyant Mina of the Grotto",
    "background": 0,
    "body": 31,
    "familiar": 93,
    "head": 132,
    "prop": 251,
    "rune": 285
  },
  {
    "idx": 1613,
    "name": "Fortune Teller Jiang of the Astral Plane",
    "background": 2,
    "body": 8,
    "familiar": 7777,
    "head": 236,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 1614,
    "name": "Battle Mage Ulysse of the Marsh",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 217,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 1615,
    "name": "Archmagus George of Arcadia",
    "background": 2,
    "body": 12,
    "familiar": 112,
    "head": 226,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 1616,
    "name": "Magus Jabir of the Toadstools",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 128,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 1617,
    "name": "Sorcerer Cairon of the Lake",
    "background": 1,
    "body": 12,
    "familiar": 7777,
    "head": 215,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 1618,
    "name": "Void Disciple Seth of the Quantum Shadow",
    "background": 3,
    "body": 87,
    "familiar": 97,
    "head": 194,
    "prop": 254,
    "rune": 292
  },
  {
    "idx": 1619,
    "name": "Conjurer Artis of the Brambles",
    "background": 3,
    "body": 38,
    "familiar": 120,
    "head": 156,
    "prop": 339,
    "rune": 303
  },
  {
    "idx": 1620,
    "name": "Archmagus Hadrien of the Pit",
    "background": 1,
    "body": 87,
    "familiar": 101,
    "head": 231,
    "prop": 273,
    "rune": 290
  },
  {
    "idx": 1621,
    "name": "Archmagus Milton of Elysium",
    "background": 0,
    "body": 7,
    "familiar": 120,
    "head": 233,
    "prop": 250,
    "rune": 293
  },
  {
    "idx": 1622,
    "name": "Hydromancer Gourdon of the Ether",
    "background": 3,
    "body": 9,
    "familiar": 97,
    "head": 172,
    "prop": 314,
    "rune": 285
  },
  {
    "idx": 1623,
    "name": "Magus David from the Abyss",
    "background": 2,
    "body": 85,
    "familiar": 7777,
    "head": 186,
    "prop": 258,
    "rune": 304
  },
  {
    "idx": 1624,
    "name": "Archmagus Crowley of the Canyon",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 227,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 1625,
    "name": "Mystic Scorch of the Ether",
    "background": 3,
    "body": 67,
    "familiar": 106,
    "head": 158,
    "prop": 322,
    "rune": 296
  },
  {
    "idx": 1626,
    "name": "Hedge Wizard Jiggs of Mu",
    "background": 0,
    "body": 8,
    "familiar": 119,
    "head": 201,
    "prop": 312,
    "rune": 296
  },
  {
    "idx": 1627,
    "name": "Arcanist Daria of the Valley",
    "background": 2,
    "body": 43,
    "familiar": 90,
    "head": 135,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 1628,
    "name": "Battle Mage Blaise of the Loch",
    "background": 0,
    "body": 57,
    "familiar": 111,
    "head": 204,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1629,
    "name": "Witch Keziah of the Light",
    "background": 1,
    "body": 24,
    "familiar": 96,
    "head": 176,
    "prop": 322,
    "rune": 282
  },
  {
    "idx": 1630,
    "name": "Hydromancer Qasim of the Surf",
    "background": 2,
    "body": 57,
    "familiar": 93,
    "head": 222,
    "prop": 314,
    "rune": 302
  },
  {
    "idx": 1631,
    "name": "Witch Calypso of the Plains",
    "background": 1,
    "body": 37,
    "familiar": 119,
    "head": 155,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 1632,
    "name": "Archmagus Apollo of the Wood",
    "background": 2,
    "body": 14,
    "familiar": 101,
    "head": 214,
    "prop": 255,
    "rune": 303
  },
  {
    "idx": 1633,
    "name": "Magus Cybele of the River",
    "background": 0,
    "body": 39,
    "familiar": 89,
    "head": 132,
    "prop": 253,
    "rune": 302
  },
  {
    "idx": 1634,
    "name": "Druid Pepo of the Steppe",
    "background": 1,
    "body": 18,
    "familiar": 93,
    "head": 172,
    "prop": 276,
    "rune": 292
  },
  {
    "idx": 1635,
    "name": "Artificer Aslan of the Wold",
    "background": 3,
    "body": 42,
    "familiar": 111,
    "head": 188,
    "prop": 258,
    "rune": 282
  },
  {
    "idx": 1636,
    "name": "Hedge Wizard Baird of the Mount",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 204,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 1637,
    "name": "Cleric Caligula of the Sun",
    "background": 3,
    "body": 27,
    "familiar": 101,
    "head": 220,
    "prop": 275,
    "rune": 288
  },
  {
    "idx": 1638,
    "name": "Charmer Bathsheba of the Grotto",
    "background": 0,
    "body": 37,
    "familiar": 107,
    "head": 198,
    "prop": 261,
    "rune": 284
  },
  {
    "idx": 1639,
    "name": "Battle Mage Rodolfo of the Brambles",
    "background": 1,
    "body": 79,
    "familiar": 114,
    "head": 182,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 1640,
    "name": "Thaumaturge Enigma of the Forest",
    "background": 2,
    "body": 39,
    "familiar": 123,
    "head": 166,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 1641,
    "name": "Hedge Wizard Eizo of the Astral Plane",
    "background": 0,
    "body": 8,
    "familiar": 95,
    "head": 141,
    "prop": 273,
    "rune": 299
  },
  {
    "idx": 1642,
    "name": "Necromancer  of the Desert",
    "background": 1,
    "body": 5,
    "familiar": 117,
    "head": 200,
    "prop": 274,
    "rune": 303
  },
  {
    "idx": 1643,
    "name": "Alchemist Shigenjo of the Hills",
    "background": 3,
    "body": 41,
    "familiar": 109,
    "head": 243,
    "prop": 271,
    "rune": 282
  },
  {
    "idx": 1644,
    "name": "Enchanter Sarah of the Brambles",
    "background": 3,
    "body": 22,
    "familiar": 109,
    "head": 191,
    "prop": 261,
    "rune": 303
  },
  {
    "idx": 1645,
    "name": "Archmagus  of Elysium",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 153,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 1646,
    "name": "Enchanter Arabella of the Mountain",
    "background": 2,
    "body": 35,
    "familiar": 110,
    "head": 190,
    "prop": 322,
    "rune": 288
  },
  {
    "idx": 1647,
    "name": "Shaman Liliana of the Cosmos",
    "background": 0,
    "body": 75,
    "familiar": 110,
    "head": 209,
    "prop": 322,
    "rune": 292
  },
  {
    "idx": 1648,
    "name": "Battle Mage Magnus of the Bibliotheca",
    "background": 0,
    "body": 6,
    "familiar": 7777,
    "head": 182,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1649,
    "name": "Wild Mage Borak of the Desert",
    "background": 3,
    "body": 5,
    "familiar": 101,
    "head": 165,
    "prop": 340,
    "rune": 299
  },
  {
    "idx": 1650,
    "name": "Battle Mage Angus of the Keep",
    "background": 0,
    "body": 40,
    "familiar": 101,
    "head": 129,
    "prop": 250,
    "rune": 297
  },
  {
    "idx": 1651,
    "name": "Archmagus Ozohr of the Wood",
    "background": 1,
    "body": 44,
    "familiar": 7777,
    "head": 185,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1652,
    "name": "Magus Duzzle of the Mist",
    "background": 1,
    "body": 55,
    "familiar": 115,
    "head": 200,
    "prop": 328,
    "rune": 295
  },
  {
    "idx": 1653,
    "name": "Alchemist Talbot of the River",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 203,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 1654,
    "name": "Battle Mage Cassius of the Forest",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 204,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 1655,
    "name": "Zelroth of the Temple",
    "background": 1,
    "body": 50,
    "familiar": 7777,
    "head": 153,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 1656,
    "name": "Shaman Jameel of the Hollow",
    "background": 1,
    "body": 41,
    "familiar": 103,
    "head": 164,
    "prop": 265,
    "rune": 283
  },
  {
    "idx": 1657,
    "name": "Battle Mage Caligula of the Hills",
    "background": 1,
    "body": 15,
    "familiar": 111,
    "head": 204,
    "prop": 316,
    "rune": 288
  },
  {
    "idx": 1658,
    "name": "Enchanter Althea of the Plains",
    "background": 2,
    "body": 34,
    "familiar": 101,
    "head": 208,
    "prop": 273,
    "rune": 290
  },
  {
    "idx": 1659,
    "name": "Battlemage Homer of the Marsh",
    "background": 1,
    "body": 42,
    "familiar": 120,
    "head": 213,
    "prop": 329,
    "rune": 289
  },
  {
    "idx": 1660,
    "name": "Archmagus Jeldor of the Marsh",
    "background": 0,
    "body": 12,
    "familiar": 110,
    "head": 229,
    "prop": 314,
    "rune": 286
  },
  {
    "idx": 1661,
    "name": "Enchanter Layla of the Riviera",
    "background": 2,
    "body": 32,
    "familiar": 88,
    "head": 190,
    "prop": 340,
    "rune": 294
  },
  {
    "idx": 1662,
    "name": "Cryptomancer Celeste of the Brambles",
    "background": 2,
    "body": 37,
    "familiar": 115,
    "head": 156,
    "prop": 310,
    "rune": 288
  },
  {
    "idx": 1663,
    "name": "Witch Liliana of the Grotto",
    "background": 1,
    "body": 44,
    "familiar": 107,
    "head": 209,
    "prop": 255,
    "rune": 290
  },
  {
    "idx": 1664,
    "name": "Conjurer Sahir of the Mount",
    "background": 0,
    "body": 62,
    "familiar": 108,
    "head": 142,
    "prop": 306,
    "rune": 284
  },
  {
    "idx": 1665,
    "name": "Aeromancer Sondra of the Forest",
    "background": 1,
    "body": 35,
    "familiar": 111,
    "head": 198,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 1666,
    "name": "Chaos Mage Charlord of the Sands",
    "background": 0,
    "body": 5,
    "familiar": 114,
    "head": 158,
    "prop": 330,
    "rune": 299
  },
  {
    "idx": 1667,
    "name": "Magus  of the Cold",
    "background": 1,
    "body": 73,
    "familiar": 7777,
    "head": 235,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 1668,
    "name": "Sorcerer Kamil of the Keep",
    "background": 1,
    "body": 26,
    "familiar": 7777,
    "head": 164,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 1669,
    "name": "Adept Nazim of the Oasis",
    "background": 0,
    "body": 58,
    "familiar": 94,
    "head": 237,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 1670,
    "name": "Pyromancer Azar of the Hills",
    "background": 1,
    "body": 79,
    "familiar": 93,
    "head": 158,
    "prop": 309,
    "rune": 291
  },
  {
    "idx": 1671,
    "name": "Artificer Twitch of the Tundra",
    "background": 1,
    "body": 65,
    "familiar": 7777,
    "head": 201,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 1672,
    "name": "Alchemist David of the Great Blue",
    "background": 3,
    "body": 57,
    "familiar": 108,
    "head": 238,
    "prop": 268,
    "rune": 293
  },
  {
    "idx": 1673,
    "name": "Alchemist Axis of the Field",
    "background": 2,
    "body": 14,
    "familiar": 103,
    "head": 167,
    "prop": 271,
    "rune": 284
  },
  {
    "idx": 1674,
    "name": "Alchemist Delilah of the Valley",
    "background": 2,
    "body": 41,
    "familiar": 104,
    "head": 159,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1675,
    "name": "Archmagus Crowley of the Reach",
    "background": 1,
    "body": 79,
    "familiar": 115,
    "head": 231,
    "prop": 268,
    "rune": 282
  },
  {
    "idx": 1676,
    "name": "Witch Gwendolin of the Oasis",
    "background": 2,
    "body": 27,
    "familiar": 120,
    "head": 209,
    "prop": 273,
    "rune": 294
  },
  {
    "idx": 1677,
    "name": "Shaman Galatea of El Dorado",
    "background": 1,
    "body": 48,
    "familiar": 93,
    "head": 187,
    "prop": 316,
    "rune": 294
  },
  {
    "idx": 1678,
    "name": "Shadow Mage Hagar of the Psychic Leap",
    "background": 1,
    "body": 75,
    "familiar": 7777,
    "head": 204,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 1679,
    "name": "Shaman Corky of the Grotto",
    "background": 0,
    "body": 19,
    "familiar": 101,
    "head": 201,
    "prop": 322,
    "rune": 304
  },
  {
    "idx": 1680,
    "name": "Arch-Magician Aleister of the Bibliotheca",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 230,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 1681,
    "name": "Archmagus Zubin of the Havens",
    "background": 0,
    "body": 10,
    "familiar": 89,
    "head": 229,
    "prop": 329,
    "rune": 304
  },
  {
    "idx": 1682,
    "name": "Wizard Trollin of the Steppe",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 171,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 1683,
    "name": "Bard Celah of Atlantis",
    "background": 3,
    "body": 57,
    "familiar": 93,
    "head": 147,
    "prop": 257,
    "rune": 300
  },
  {
    "idx": 1684,
    "name": "Alchemist Yan of the Sea",
    "background": 2,
    "body": 57,
    "familiar": 119,
    "head": 180,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1685,
    "name": "Magus Galatea of the Heath",
    "background": 0,
    "body": 21,
    "familiar": 119,
    "head": 198,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 1686,
    "name": "Artificer Benito of the Thorn",
    "background": 1,
    "body": 28,
    "familiar": 104,
    "head": 201,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 1687,
    "name": "Arch-Magician Lumos of the Wood",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 186,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1688,
    "name": "Bard Duzzle of the River",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 200,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1689,
    "name": "Battle Mage Robert of the Moors",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 203,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1690,
    "name": "Illusionist Milo of the Keep",
    "background": 1,
    "body": 40,
    "familiar": 95,
    "head": 160,
    "prop": 246,
    "rune": 303
  },
  {
    "idx": 1691,
    "name": "Faye of the Heath",
    "background": 0,
    "body": 34,
    "familiar": 104,
    "head": 191,
    "prop": 271,
    "rune": 290
  },
  {
    "idx": 1692,
    "name": "Archmagus Uday of the Havens",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 128,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 1693,
    "name": "Sorcerer Nassif of the Hollow",
    "background": 2,
    "body": 82,
    "familiar": 89,
    "head": 142,
    "prop": 329,
    "rune": 282
  },
  {
    "idx": 1694,
    "name": "Battle Mage Dutorn from the Shadow",
    "background": 2,
    "body": 86,
    "familiar": 89,
    "head": 220,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 1695,
    "name": "Arcanist Shi of the Heath",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 180,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 1696,
    "name": "Battle Mage Danny of El Dorado",
    "background": 2,
    "body": 77,
    "familiar": 103,
    "head": 206,
    "prop": 339,
    "rune": 291
  },
  {
    "idx": 1697,
    "name": "Illusionist Peppy",
    "background": 1,
    "body": 26,
    "familiar": 108,
    "head": 235,
    "prop": 306,
    "rune": 287
  },
  {
    "idx": 1698,
    "name": "Enchanter Faye of the Cosmos",
    "background": 1,
    "body": 8,
    "familiar": 95,
    "head": 191,
    "prop": 317,
    "rune": 302
  },
  {
    "idx": 1699,
    "name": "Enchanter Sondra of the Field",
    "background": 2,
    "body": 22,
    "familiar": 93,
    "head": 139,
    "prop": 267,
    "rune": 297
  },
  {
    "idx": 1700,
    "name": "Hedge Wizard Asmodeus of the Tower",
    "background": 3,
    "body": 50,
    "familiar": 89,
    "head": 193,
    "prop": 276,
    "rune": 304
  },
  {
    "idx": 1701,
    "name": "Magus Ixar of the Gnostics",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 202,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 1702,
    "name": "Ghost Eater Ulysse of the Ether",
    "background": 0,
    "body": 11,
    "familiar": 90,
    "head": 220,
    "prop": 307,
    "rune": 283
  },
  {
    "idx": 1703,
    "name": "Electromancer Gully of the Obelisk",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 200,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 1704,
    "name": "Ghost Eater Diabolos of Tartarus",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 194,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 1705,
    "name": "Archmagus Oberon of the Hills",
    "background": 1,
    "body": 15,
    "familiar": 7777,
    "head": 192,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 1706,
    "name": "Archmagus Amir of the Circle",
    "background": 2,
    "body": 30,
    "familiar": 115,
    "head": 192,
    "prop": 273,
    "rune": 290
  },
  {
    "idx": 1707,
    "name": "Battle Mage Brutus of the Morning Star",
    "background": 1,
    "body": 86,
    "familiar": 95,
    "head": 182,
    "prop": 276,
    "rune": 296
  },
  {
    "idx": 1708,
    "name": "Chronomancer Atlas of the Bastion",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 182,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 1709,
    "name": "Summoner Circe of the Mountain",
    "background": 1,
    "body": 21,
    "familiar": 120,
    "head": 135,
    "prop": 254,
    "rune": 303
  },
  {
    "idx": 1710,
    "name": "Shaman Hellspawn of the Havens",
    "background": 0,
    "body": 55,
    "familiar": 120,
    "head": 158,
    "prop": 334,
    "rune": 299
  },
  {
    "idx": 1711,
    "name": "Magus Koop of El Dorado",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 200,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 1712,
    "name": "Arch-Magician Aleister of the Fey",
    "background": 1,
    "body": 28,
    "familiar": 115,
    "head": 160,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 1713,
    "name": "Sorcerer Crowley of Tartarus",
    "background": 0,
    "body": 86,
    "familiar": 112,
    "head": 212,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 1714,
    "name": "Arcanist Qaid of Tartarus",
    "background": 2,
    "body": 86,
    "familiar": 90,
    "head": 128,
    "prop": 332,
    "rune": 300
  },
  {
    "idx": 1715,
    "name": "Voodoo Priest Louis of the Keep",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 179,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 1716,
    "name": "Chaos Mage Tabitha of the Morning Star",
    "background": 1,
    "body": 87,
    "familiar": 105,
    "head": 223,
    "prop": 309,
    "rune": 291
  },
  {
    "idx": 1717,
    "name": "Arch-Magician Victoria of the Field",
    "background": 1,
    "body": 32,
    "familiar": 88,
    "head": 187,
    "prop": 334,
    "rune": 7777
  },
  {
    "idx": 1718,
    "name": "Battle Mage Gunthor of the Oasis",
    "background": 0,
    "body": 61,
    "familiar": 94,
    "head": 177,
    "prop": 261,
    "rune": 294
  },
  {
    "idx": 1719,
    "name": "Astrid of the Wold",
    "background": 3,
    "body": 21,
    "familiar": 107,
    "head": 198,
    "prop": 267,
    "rune": 286
  },
  {
    "idx": 1720,
    "name": "Necromancer Voidoth of the Psychic Leap",
    "background": 1,
    "body": 11,
    "familiar": 88,
    "head": 194,
    "prop": 335,
    "rune": 284
  },
  {
    "idx": 1721,
    "name": "Alchemist Sabina of the Ether",
    "background": 2,
    "body": 8,
    "familiar": 88,
    "head": 176,
    "prop": 270,
    "rune": 288
  },
  {
    "idx": 1722,
    "name": "Enchanter Cassiopeia of the Brambles",
    "background": 1,
    "body": 32,
    "familiar": 93,
    "head": 187,
    "prop": 250,
    "rune": 293
  },
  {
    "idx": 1723,
    "name": "Diabolist Jig of the Mount",
    "background": 0,
    "body": 62,
    "familiar": 104,
    "head": 171,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 1724,
    "name": "Archmagus Adium of the Moors",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 207,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1725,
    "name": "Spellsinger Koop of the Mount",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 200,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1726,
    "name": "Archmagus Alessar of the Desert",
    "background": 0,
    "body": 60,
    "familiar": 123,
    "head": 238,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 1727,
    "name": "Sage Ulysse of the Forest",
    "background": 1,
    "body": 44,
    "familiar": 115,
    "head": 203,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 1728,
    "name": "Clairvoyant Nadeem of the Palms",
    "background": 3,
    "body": 5,
    "familiar": 94,
    "head": 237,
    "prop": 329,
    "rune": 291
  },
  {
    "idx": 1729,
    "name": "Aleister of the Tower",
    "background": 0,
    "body": 6,
    "familiar": 7777,
    "head": 174,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 1730,
    "name": "Clairvoyant Aiko of the Plains",
    "background": 0,
    "body": 84,
    "familiar": 95,
    "head": 126,
    "prop": 251,
    "rune": 299
  },
  {
    "idx": 1731,
    "name": "Witch Sabina of the Event Horizon",
    "background": 0,
    "body": 9,
    "familiar": 116,
    "head": 155,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1732,
    "name": "Artificer Magpie of the Gnostics",
    "background": 0,
    "body": 24,
    "familiar": 120,
    "head": 144,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 1733,
    "name": "Magus Thor of the Hollow",
    "background": 0,
    "body": 12,
    "familiar": 97,
    "head": 177,
    "prop": 263,
    "rune": 303
  },
  {
    "idx": 1734,
    "name": "Alatar of Avalon",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 153,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 1735,
    "name": "Adept Toby of the Circle",
    "background": 1,
    "body": 28,
    "familiar": 114,
    "head": 201,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 1736,
    "name": "Shaman Otto of the Tundra",
    "background": 2,
    "body": 65,
    "familiar": 97,
    "head": 129,
    "prop": 276,
    "rune": 284
  },
  {
    "idx": 1737,
    "name": "Bard Azahl of the Tundra",
    "background": 1,
    "body": 65,
    "familiar": 97,
    "head": 153,
    "prop": 247,
    "rune": 288
  },
  {
    "idx": 1738,
    "name": "Diabolist Borak of the Woodlands",
    "background": 0,
    "body": 30,
    "familiar": 115,
    "head": 218,
    "prop": 310,
    "rune": 287
  },
  {
    "idx": 1739,
    "name": "Artificer Beyna of the Morning Star",
    "background": 3,
    "body": 87,
    "familiar": 99,
    "head": 135,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 1740,
    "name": "Sorcerer David of the Wood",
    "background": 1,
    "body": 23,
    "familiar": 90,
    "head": 215,
    "prop": 319,
    "rune": 286
  },
  {
    "idx": 1741,
    "name": "Fortune Teller Apollo of the Desert",
    "background": 3,
    "body": 59,
    "familiar": 95,
    "head": 197,
    "prop": 251,
    "rune": 301
  },
  {
    "idx": 1742,
    "name": "Druid Soya of the Grotto",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 199,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 1743,
    "name": "Hedge Wizard Calista of the Steppe",
    "background": 1,
    "body": 34,
    "familiar": 93,
    "head": 139,
    "prop": 258,
    "rune": 304
  },
  {
    "idx": 1744,
    "name": "Scryer Nikolas of the Astral Plane",
    "background": 2,
    "body": 52,
    "familiar": 105,
    "head": 238,
    "prop": 252,
    "rune": 304
  },
  {
    "idx": 1745,
    "name": "Arcanist Rainman of Elysium",
    "background": 3,
    "body": 54,
    "familiar": 105,
    "head": 169,
    "prop": 250,
    "rune": 303
  },
  {
    "idx": 1746,
    "name": "Battle Mage Hothor of Avalon",
    "background": 0,
    "body": 63,
    "familiar": 97,
    "head": 133,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 1747,
    "name": "Enchanter Sondra of the Riviera",
    "background": 0,
    "body": 35,
    "familiar": 114,
    "head": 139,
    "prop": 318,
    "rune": 303
  },
  {
    "idx": 1748,
    "name": "Archmagus Umber of the Hollow",
    "background": 0,
    "body": 23,
    "familiar": 97,
    "head": 167,
    "prop": 339,
    "rune": 295
  },
  {
    "idx": 1749,
    "name": "Electromancer Drusilla of the Hills",
    "background": 1,
    "body": 35,
    "familiar": 103,
    "head": 159,
    "prop": 305,
    "rune": 302
  },
  {
    "idx": 1750,
    "name": "Witch Drusilla of the Field",
    "background": 3,
    "body": 39,
    "familiar": 88,
    "head": 209,
    "prop": 334,
    "rune": 303
  },
  {
    "idx": 1751,
    "name": "Adept Jianyu of the Ether",
    "background": 1,
    "body": 24,
    "familiar": 97,
    "head": 236,
    "prop": 266,
    "rune": 303
  },
  {
    "idx": 1752,
    "name": "Hedge Wizard Circe of the Road",
    "background": 3,
    "body": 21,
    "familiar": 105,
    "head": 190,
    "prop": 275,
    "rune": 304
  },
  {
    "idx": 1753,
    "name": "Ghost Eater Imeena of the Plains",
    "background": 1,
    "body": 35,
    "familiar": 110,
    "head": 155,
    "prop": 254,
    "rune": 299
  },
  {
    "idx": 1754,
    "name": "Hex Mage Jasper of the Road",
    "background": 1,
    "body": 82,
    "familiar": 101,
    "head": 201,
    "prop": 277,
    "rune": 290
  },
  {
    "idx": 1755,
    "name": "Sorcerer Jahid of the Valley",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 164,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 1756,
    "name": "Sorcerer Cairon of the Astral Plane",
    "background": 2,
    "body": 9,
    "familiar": 119,
    "head": 160,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 1757,
    "name": "Battle Mage Ethan of the Hall",
    "background": 0,
    "body": 77,
    "familiar": 103,
    "head": 206,
    "prop": 305,
    "rune": 282
  },
  {
    "idx": 1758,
    "name": "Arcanist Amir of the Mist",
    "background": 0,
    "body": 55,
    "familiar": 90,
    "head": 238,
    "prop": 322,
    "rune": 283
  },
  {
    "idx": 1759,
    "name": "Charmer Beyna of Cuckoo Land",
    "background": 0,
    "body": 30,
    "familiar": 116,
    "head": 132,
    "prop": 269,
    "rune": 294
  },
  {
    "idx": 1760,
    "name": "Shadow Mage Soya of the Cosmos",
    "background": 1,
    "body": 24,
    "familiar": 97,
    "head": 215,
    "prop": 307,
    "rune": 292
  },
  {
    "idx": 1761,
    "name": "Evoker Nemo of the Grotto",
    "background": 1,
    "body": 82,
    "familiar": 7777,
    "head": 201,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 1762,
    "name": "Druid Udor of the Waste",
    "background": 1,
    "body": 87,
    "familiar": 123,
    "head": 233,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 1763,
    "name": "Archmagus Diana of the River",
    "background": 0,
    "body": 34,
    "familiar": 105,
    "head": 208,
    "prop": 326,
    "rune": 303
  },
  {
    "idx": 1764,
    "name": "Evoker Angus of the Temple",
    "background": 1,
    "body": 63,
    "familiar": 7777,
    "head": 204,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 1765,
    "name": "Sorcerer Cosmo of the Sacred Pillars",
    "background": 1,
    "body": 49,
    "familiar": 99,
    "head": 222,
    "prop": 316,
    "rune": 283
  },
  {
    "idx": 1766,
    "name": "Mystic Uday of the Heath",
    "background": 1,
    "body": 41,
    "familiar": 7777,
    "head": 222,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 1767,
    "name": "Void Disciple Jasper of the Sun",
    "background": 3,
    "body": 60,
    "familiar": 94,
    "head": 125,
    "prop": 307,
    "rune": 287
  },
  {
    "idx": 1768,
    "name": "Magus Rita of the Road",
    "background": 0,
    "body": 35,
    "familiar": 112,
    "head": 176,
    "prop": 327,
    "rune": 288
  },
  {
    "idx": 1769,
    "name": "Druid Axis of the Grotto",
    "background": 1,
    "body": 19,
    "familiar": 111,
    "head": 167,
    "prop": 276,
    "rune": 287
  },
  {
    "idx": 1770,
    "name": "Cosmic Mage Asmodeus of the Secret Fire",
    "background": 1,
    "body": 85,
    "familiar": 103,
    "head": 193,
    "prop": 335,
    "rune": 304
  },
  {
    "idx": 1771,
    "name": "Adept Merlon of the Realm",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 174,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1772,
    "name": "Sage Cairon of the Fey",
    "background": 0,
    "body": 30,
    "familiar": 123,
    "head": 147,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 1773,
    "name": "Druid Aleister of the Cosmos",
    "background": 1,
    "body": 75,
    "familiar": 7777,
    "head": 185,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 1774,
    "name": "Witch Eronin of the Forest",
    "background": 0,
    "body": 23,
    "familiar": 111,
    "head": 125,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 1775,
    "name": "Diabolist Bartholomew of Xanadu",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 203,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 1776,
    "name": "Conjurer Cromwell of the Wood",
    "background": 2,
    "body": 45,
    "familiar": 116,
    "head": 173,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 1777,
    "name": "Ghost Eater Voidoth of Cuckoo Land",
    "background": 0,
    "body": 30,
    "familiar": 123,
    "head": 205,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 1778,
    "name": "Archmagus Soya of the Morning Star",
    "background": 1,
    "body": 85,
    "familiar": 7777,
    "head": 174,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 1779,
    "name": "Pyromancer Alatar of the Heath",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 230,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 1780,
    "name": "Sorcerer Ifran of the Citadel",
    "background": 1,
    "body": 26,
    "familiar": 115,
    "head": 237,
    "prop": 308,
    "rune": 284
  },
  {
    "idx": 1781,
    "name": "Arch-Magician Ixar of the Steppe",
    "background": 1,
    "body": 82,
    "familiar": 7777,
    "head": 214,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 1782,
    "name": "Wild Mage Cromwell of the Desert",
    "background": 1,
    "body": 61,
    "familiar": 112,
    "head": 177,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 1783,
    "name": "Runecaster Jastor of the Valley",
    "background": 1,
    "body": 6,
    "familiar": 7777,
    "head": 235,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1784,
    "name": "Alchemist Izible of the Hall",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 200,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 1785,
    "name": "Archmagus Zorko of the Keep",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 128,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 1786,
    "name": "Druid Axel of the Villa",
    "background": 2,
    "body": 48,
    "familiar": 119,
    "head": 213,
    "prop": 322,
    "rune": 288
  },
  {
    "idx": 1787,
    "name": "Arch-Magician Chu Hua of the Wold",
    "background": 1,
    "body": 22,
    "familiar": 114,
    "head": 180,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 1788,
    "name": "Hedge Wizard Fungi of the Plains",
    "background": 1,
    "body": 42,
    "familiar": 97,
    "head": 195,
    "prop": 312,
    "rune": 284
  },
  {
    "idx": 1789,
    "name": "Battle Mage Cromwell of the Wood",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 213,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 1790,
    "name": "Archmagus Aleister of the Mount",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 211,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 1791,
    "name": "Witch Elena of Arcadia",
    "background": 1,
    "body": 37,
    "familiar": 119,
    "head": 159,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 1792,
    "name": "Battlemage Pumlo of the Marsh",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 197,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 1793,
    "name": "Battle Mage Thor from the Shadow",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 182,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 1794,
    "name": "Pyromancer Samuel of the Mist",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 204,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 1795,
    "name": "Shaman Cromwell of the Bibliotheca",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 182,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1796,
    "name": "Archmagus Lumos of the Marsh",
    "background": 0,
    "body": 41,
    "familiar": 114,
    "head": 221,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 1797,
    "name": "Arch-Magician Hansel of the Riviera",
    "background": 0,
    "body": 15,
    "familiar": 116,
    "head": 188,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 1798,
    "name": "Sage Cromwell of the Bastion",
    "background": 0,
    "body": 40,
    "familiar": 115,
    "head": 177,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 1799,
    "name": "Adept Alessar of the Sea",
    "background": 0,
    "body": 57,
    "familiar": 7777,
    "head": 226,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 1800,
    "name": "Pyromancer Alessar of the Morning Star",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 231,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 1801,
    "name": "Hedge Wizard Behemoth of the Rock",
    "background": 2,
    "body": 27,
    "familiar": 89,
    "head": 193,
    "prop": 276,
    "rune": 291
  },
  {
    "idx": 1802,
    "name": "Archmagus Cairon of the Bastion",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 221,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1803,
    "name": "Archmagus Alatar of the Plains",
    "background": 1,
    "body": 13,
    "familiar": 112,
    "head": 230,
    "prop": 249,
    "rune": 282
  },
  {
    "idx": 1804,
    "name": "Bard Titania of Arcadia",
    "background": 1,
    "body": 36,
    "familiar": 120,
    "head": 208,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1805,
    "name": "Aeromancer Ming of Arcadia",
    "background": 1,
    "body": 39,
    "familiar": 111,
    "head": 180,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 1806,
    "name": "Arcanist Onaxx of Atlantis",
    "background": 0,
    "body": 57,
    "familiar": 7777,
    "head": 150,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 1807,
    "name": "Sorcerer Bartholomew of the Havens",
    "background": 0,
    "body": 24,
    "familiar": 105,
    "head": 204,
    "prop": 248,
    "rune": 299
  },
  {
    "idx": 1808,
    "name": "Hedge Wizard Celah of the Hall",
    "background": 1,
    "body": 76,
    "familiar": 115,
    "head": 147,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1809,
    "name": "Magus Hagatha of the Moors",
    "background": 1,
    "body": 39,
    "familiar": 104,
    "head": 166,
    "prop": 262,
    "rune": 290
  },
  {
    "idx": 1810,
    "name": "Sorcerer Remus of the Bastion",
    "background": 1,
    "body": 46,
    "familiar": 103,
    "head": 141,
    "prop": 310,
    "rune": 293
  },
  {
    "idx": 1811,
    "name": "Battle Mage Homer of the Hills",
    "background": 2,
    "body": 84,
    "familiar": 89,
    "head": 217,
    "prop": 261,
    "rune": 296
  },
  {
    "idx": 1812,
    "name": "Arch-Magician Enigma of the Hall",
    "background": 1,
    "body": 26,
    "familiar": 108,
    "head": 176,
    "prop": 306,
    "rune": 287
  },
  {
    "idx": 1813,
    "name": "Druid Arabella of the Psychic Leap",
    "background": 1,
    "body": 8,
    "familiar": 111,
    "head": 132,
    "prop": 325,
    "rune": 302
  },
  {
    "idx": 1814,
    "name": "Pyromancer Tengu of the Villa",
    "background": 1,
    "body": 48,
    "familiar": 94,
    "head": 243,
    "prop": 277,
    "rune": 300
  },
  {
    "idx": 1815,
    "name": "Archmagus Orpheus of Xanadu",
    "background": 2,
    "body": 52,
    "familiar": 90,
    "head": 162,
    "prop": 265,
    "rune": 297
  },
  {
    "idx": 1816,
    "name": "Druid Sonja of the Wood",
    "background": 2,
    "body": 22,
    "familiar": 107,
    "head": 156,
    "prop": 265,
    "rune": 290
  },
  {
    "idx": 1817,
    "name": "Enchanter Jerret of the Desert",
    "background": 2,
    "body": 61,
    "familiar": 95,
    "head": 160,
    "prop": 249,
    "rune": 290
  },
  {
    "idx": 1818,
    "name": "Geomancer  of the Hills",
    "background": 3,
    "body": 13,
    "familiar": 115,
    "head": 212,
    "prop": 308,
    "rune": 296
  },
  {
    "idx": 1819,
    "name": "Archmagus Basil of the Havens",
    "background": 3,
    "body": 62,
    "familiar": 94,
    "head": 186,
    "prop": 316,
    "rune": 294
  },
  {
    "idx": 1820,
    "name": "Oracle Sondra of the Forest",
    "background": 2,
    "body": 22,
    "familiar": 123,
    "head": 131,
    "prop": 329,
    "rune": 297
  },
  {
    "idx": 1821,
    "name": "Pandora of the Brambles",
    "background": 0,
    "body": 22,
    "familiar": 95,
    "head": 191,
    "prop": 246,
    "rune": 300
  },
  {
    "idx": 1822,
    "name": "Artificer Zaros of the Bastion",
    "background": 0,
    "body": 48,
    "familiar": 103,
    "head": 232,
    "prop": 260,
    "rune": 288
  },
  {
    "idx": 1823,
    "name": "Alchemist Solomon of Arcadia",
    "background": 1,
    "body": 12,
    "familiar": 114,
    "head": 186,
    "prop": 267,
    "rune": 297
  },
  {
    "idx": 1824,
    "name": "Alchemist Fungi of the Mount",
    "background": 2,
    "body": 54,
    "familiar": 120,
    "head": 195,
    "prop": 271,
    "rune": 282
  },
  {
    "idx": 1825,
    "name": "Solar Mage Jean Leon of the Keep",
    "background": 2,
    "body": 40,
    "familiar": 88,
    "head": 149,
    "prop": 309,
    "rune": 290
  },
  {
    "idx": 1826,
    "name": "Arch-Magician Fumiko of the Canyon",
    "background": 2,
    "body": 31,
    "familiar": 120,
    "head": 126,
    "prop": 258,
    "rune": 298
  },
  {
    "idx": 1827,
    "name": "Hedge Wizard Circe of the Hall",
    "background": 2,
    "body": 78,
    "familiar": 93,
    "head": 187,
    "prop": 258,
    "rune": 294
  },
  {
    "idx": 1828,
    "name": "Enchanter Calliope of Elysium",
    "background": 2,
    "body": 6,
    "familiar": 114,
    "head": 139,
    "prop": 318,
    "rune": 302
  },
  {
    "idx": 1829,
    "name": "Conjurer Flynn",
    "background": 2,
    "body": 26,
    "familiar": 119,
    "head": 173,
    "prop": 273,
    "rune": 290
  },
  {
    "idx": 1830,
    "name": "Necromancer Judas of the River",
    "background": 1,
    "body": 45,
    "familiar": 95,
    "head": 205,
    "prop": 335,
    "rune": 294
  },
  {
    "idx": 1831,
    "name": "Alchemist Otto of the Desert",
    "background": 0,
    "body": 61,
    "familiar": 116,
    "head": 129,
    "prop": 324,
    "rune": 288
  },
  {
    "idx": 1832,
    "name": "Shadow Mage Idris of the Sun",
    "background": 2,
    "body": 61,
    "familiar": 94,
    "head": 237,
    "prop": 248,
    "rune": 302
  },
  {
    "idx": 1833,
    "name": "Alchemist Giuseppe of the Hills",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 179,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1834,
    "name": "Archmagus Oxnard of the Hills",
    "background": 0,
    "body": 82,
    "familiar": 89,
    "head": 193,
    "prop": 317,
    "rune": 291
  },
  {
    "idx": 1835,
    "name": "Archmagus Robert of the Grotto",
    "background": 2,
    "body": 13,
    "familiar": 89,
    "head": 165,
    "prop": 316,
    "rune": 283
  },
  {
    "idx": 1836,
    "name": "Witch Sylvia of the Riviera",
    "background": 2,
    "body": 36,
    "familiar": 119,
    "head": 176,
    "prop": 255,
    "rune": 298
  },
  {
    "idx": 1837,
    "name": "Illusionist Diana of the Wold",
    "background": 0,
    "body": 43,
    "familiar": 115,
    "head": 131,
    "prop": 273,
    "rune": 282
  },
  {
    "idx": 1838,
    "name": "Archmagus  of the Mount",
    "background": 1,
    "body": 7,
    "familiar": 93,
    "head": 229,
    "prop": 271,
    "rune": 287
  },
  {
    "idx": 1839,
    "name": "Archmagus Soran of the Wood",
    "background": 2,
    "body": 41,
    "familiar": 103,
    "head": 186,
    "prop": 315,
    "rune": 282
  },
  {
    "idx": 1840,
    "name": "Charmer Daria of the Cold",
    "background": 0,
    "body": 65,
    "familiar": 93,
    "head": 187,
    "prop": 252,
    "rune": 291
  },
  {
    "idx": 1841,
    "name": "Geomancer Muntjac of the Mist",
    "background": 1,
    "body": 49,
    "familiar": 111,
    "head": 167,
    "prop": 308,
    "rune": 288
  },
  {
    "idx": 1842,
    "name": "Oracle Lamia of the Valley",
    "background": 2,
    "body": 34,
    "familiar": 120,
    "head": 156,
    "prop": 252,
    "rune": 304
  },
  {
    "idx": 1843,
    "name": "Artificer Quddus of the Tower",
    "background": 3,
    "body": 62,
    "familiar": 94,
    "head": 219,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 1844,
    "name": "Artificer Xiaobo of the Sun",
    "background": 1,
    "body": 5,
    "familiar": 88,
    "head": 236,
    "prop": 261,
    "rune": 299
  },
  {
    "idx": 1845,
    "name": "Archmagus Jeldor of the Grotto",
    "background": 0,
    "body": 84,
    "familiar": 105,
    "head": 231,
    "prop": 273,
    "rune": 297
  },
  {
    "idx": 1846,
    "name": "Thaumaturge Milo",
    "background": 2,
    "body": 76,
    "familiar": 90,
    "head": 215,
    "prop": 256,
    "rune": 285
  },
  {
    "idx": 1847,
    "name": "Arch-Magician Lucinda of the Fey",
    "background": 0,
    "body": 29,
    "familiar": 88,
    "head": 209,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 1848,
    "name": "Geomancer Le Blanc of the Rock",
    "background": 1,
    "body": 60,
    "familiar": 95,
    "head": 149,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 1849,
    "name": "Shadow Mage Gaspard of the Desert",
    "background": 2,
    "body": 58,
    "familiar": 120,
    "head": 149,
    "prop": 309,
    "rune": 297
  },
  {
    "idx": 1850,
    "name": "Lux of the Sun",
    "background": 1,
    "body": 60,
    "familiar": 123,
    "head": 160,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 1851,
    "name": "Arcanist Aleister of the Capital",
    "background": 2,
    "body": 26,
    "familiar": 120,
    "head": 189,
    "prop": 250,
    "rune": 284
  },
  {
    "idx": 1852,
    "name": "Magus Kazud of the Villa",
    "background": 3,
    "body": 48,
    "familiar": 99,
    "head": 219,
    "prop": 262,
    "rune": 288
  },
  {
    "idx": 1853,
    "name": "Alchemist Crowley of the Villa",
    "background": 0,
    "body": 77,
    "familiar": 104,
    "head": 186,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1854,
    "name": "Arcanist Fungi of the Hills",
    "background": 0,
    "body": 43,
    "familiar": 120,
    "head": 195,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 1855,
    "name": "Cleric Iprix of El Dorado",
    "background": 1,
    "body": 48,
    "familiar": 116,
    "head": 141,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 1856,
    "name": "Cleric Cromwell of the Steppe",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 204,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1857,
    "name": "Ice Mage Bullock of the Ice",
    "background": 2,
    "body": 73,
    "familiar": 114,
    "head": 193,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 1858,
    "name": "Sage Cromwell of the Road",
    "background": 1,
    "body": 45,
    "familiar": 109,
    "head": 220,
    "prop": 256,
    "rune": 300
  },
  {
    "idx": 1859,
    "name": "Archmagus Aleister of the Valley",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 211,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1860,
    "name": "Battle Mage Nolan of the Cosmos",
    "background": 1,
    "body": 24,
    "familiar": 115,
    "head": 216,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 1861,
    "name": "Geomancer Axis of the Grotto",
    "background": 1,
    "body": 42,
    "familiar": 97,
    "head": 167,
    "prop": 308,
    "rune": 293
  },
  {
    "idx": 1862,
    "name": "Daria of the Grotto",
    "background": 1,
    "body": 36,
    "familiar": 105,
    "head": 187,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 1863,
    "name": "Artificer Moloch of the Brambles",
    "background": 3,
    "body": 18,
    "familiar": 111,
    "head": 193,
    "prop": 260,
    "rune": 303
  },
  {
    "idx": 1864,
    "name": "Runecaster Ekmira of the Event Horizon",
    "background": 0,
    "body": 9,
    "familiar": 105,
    "head": 223,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 1865,
    "name": "Archmagus Ozohr of the Hollow",
    "background": 0,
    "body": 19,
    "familiar": 7777,
    "head": 138,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1866,
    "name": "Hedge Wizard Junko of the Marsh",
    "background": 0,
    "body": 39,
    "familiar": 88,
    "head": 126,
    "prop": 319,
    "rune": 292
  },
  {
    "idx": 1867,
    "name": "Battle Mage Wolfram of the Plains",
    "background": 0,
    "body": 43,
    "familiar": 101,
    "head": 129,
    "prop": 317,
    "rune": 297
  },
  {
    "idx": 1868,
    "name": "Sorcerer Crowley of Mu",
    "background": 2,
    "body": 8,
    "familiar": 117,
    "head": 211,
    "prop": 249,
    "rune": 297
  },
  {
    "idx": 1869,
    "name": "Lamia of the Desert",
    "background": 2,
    "body": 60,
    "familiar": 93,
    "head": 187,
    "prop": 334,
    "rune": 292
  },
  {
    "idx": 1870,
    "name": "Orpheus of the Glacier",
    "background": 0,
    "body": 65,
    "familiar": 101,
    "head": 202,
    "prop": 263,
    "rune": 293
  },
  {
    "idx": 1871,
    "name": "Druid Talbot of the Mist",
    "background": 1,
    "body": 55,
    "familiar": 95,
    "head": 177,
    "prop": 264,
    "rune": 300
  },
  {
    "idx": 1872,
    "name": "Sorcerer Naoki of the Tundra",
    "background": 2,
    "body": 65,
    "familiar": 105,
    "head": 126,
    "prop": 256,
    "rune": 293
  },
  {
    "idx": 1873,
    "name": "Conjurer Merlon of the Bibliotheca",
    "background": 1,
    "body": 55,
    "familiar": 103,
    "head": 147,
    "prop": 306,
    "rune": 304
  },
  {
    "idx": 1874,
    "name": "Battle Mage Talbot of the Wood",
    "background": 0,
    "body": 45,
    "familiar": 89,
    "head": 220,
    "prop": 319,
    "rune": 282
  },
  {
    "idx": 1875,
    "name": "Aleister Crowley",
    "background": 0,
    "body": 85,
    "familiar": 7777,
    "head": 127,
    "prop": 266,
    "rune": 7777
  },
  {
    "idx": 1876,
    "name": "Runecaster Izible of the Bibliotheca",
    "background": 1,
    "body": 6,
    "familiar": 112,
    "head": 200,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 1877,
    "name": "Enchanter Jadis of the Lake",
    "background": 0,
    "body": 37,
    "familiar": 107,
    "head": 191,
    "prop": 263,
    "rune": 294
  },
  {
    "idx": 1878,
    "name": "Conjurer Peppy of the Field",
    "background": 0,
    "body": 82,
    "familiar": 116,
    "head": 171,
    "prop": 273,
    "rune": 304
  },
  {
    "idx": 1879,
    "name": "Hedge Wizard Diana of the Hollow",
    "background": 1,
    "body": 35,
    "familiar": 95,
    "head": 191,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1880,
    "name": "Shaman Leah of the Steppe",
    "background": 2,
    "body": 37,
    "familiar": 115,
    "head": 191,
    "prop": 264,
    "rune": 300
  },
  {
    "idx": 1881,
    "name": "Celeste of the Atheneum",
    "background": 0,
    "body": 6,
    "familiar": 112,
    "head": 156,
    "prop": 309,
    "rune": 303
  },
  {
    "idx": 1882,
    "name": "Alchemist Devin of the Ether",
    "background": 1,
    "body": 9,
    "familiar": 123,
    "head": 167,
    "prop": 270,
    "rune": 293
  },
  {
    "idx": 1883,
    "name": "Archmagus Cairon",
    "background": 1,
    "body": 29,
    "familiar": 116,
    "head": 238,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 1884,
    "name": "Battle Mage Khudalf of the Forest",
    "background": 2,
    "body": 45,
    "familiar": 104,
    "head": 217,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 1885,
    "name": "Aeromancer Bathsheba of the Moors",
    "background": 2,
    "body": 39,
    "familiar": 88,
    "head": 156,
    "prop": 315,
    "rune": 283
  },
  {
    "idx": 1886,
    "name": "Battle Mage Bartholomew of the Heath",
    "background": 1,
    "body": 15,
    "familiar": 89,
    "head": 218,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1887,
    "name": "Magus Layla of the Wood",
    "background": 0,
    "body": 35,
    "familiar": 110,
    "head": 190,
    "prop": 318,
    "rune": 282
  },
  {
    "idx": 1888,
    "name": "Sage Ekmira of the Wood",
    "background": 3,
    "body": 35,
    "familiar": 103,
    "head": 176,
    "prop": 339,
    "rune": 293
  },
  {
    "idx": 1889,
    "name": "Enchanter Zorko of the Marsh",
    "background": 0,
    "body": 19,
    "familiar": 110,
    "head": 164,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 1890,
    "name": "Sorcerer Ofaris of the Valley",
    "background": 0,
    "body": 43,
    "familiar": 112,
    "head": 238,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 1891,
    "name": "Enchanter Arabella of the Hills",
    "background": 0,
    "body": 22,
    "familiar": 114,
    "head": 208,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 1892,
    "name": "Hedge Wizard Danny of the Isle",
    "background": 2,
    "body": 57,
    "familiar": 123,
    "head": 220,
    "prop": 276,
    "rune": 303
  },
  {
    "idx": 1893,
    "name": "Shadow Mage Tenguyama in the Shadows",
    "background": 2,
    "body": 85,
    "familiar": 120,
    "head": 243,
    "prop": 309,
    "rune": 295
  },
  {
    "idx": 1894,
    "name": "Shaman Ofaris of Arcadia",
    "background": 2,
    "body": 84,
    "familiar": 105,
    "head": 231,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 1895,
    "name": "Archmagus Isaac of the Steppe",
    "background": 1,
    "body": 82,
    "familiar": 104,
    "head": 229,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 1896,
    "name": "Alchemist Hagar of the Veil",
    "background": 0,
    "body": 67,
    "familiar": 116,
    "head": 218,
    "prop": 269,
    "rune": 303
  },
  {
    "idx": 1897,
    "name": "Arcanist Larissa of the Wild",
    "background": 0,
    "body": 21,
    "familiar": 111,
    "head": 198,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 1898,
    "name": "Battle Mage Robert of the Valley",
    "background": 3,
    "body": 17,
    "familiar": 112,
    "head": 220,
    "prop": 265,
    "rune": 287
  },
  {
    "idx": 1899,
    "name": "Battle Mage Caligula of the Tower",
    "background": 2,
    "body": 7,
    "familiar": 112,
    "head": 216,
    "prop": 315,
    "rune": 300
  },
  {
    "idx": 1900,
    "name": "Wizard of Oz",
    "background": 0,
    "body": 77,
    "familiar": 108,
    "head": 199,
    "prop": 313,
    "rune": 7777
  },
  {
    "idx": 1901,
    "name": "Soran of the Great Blue",
    "background": 1,
    "body": 57,
    "familiar": 94,
    "head": 186,
    "prop": 7777,
    "rune": 299
  },
  {
    "idx": 1902,
    "name": "Witch Drusilla of the Plains",
    "background": 1,
    "body": 36,
    "familiar": 114,
    "head": 166,
    "prop": 7777,
    "rune": 284
  },
  {
    "idx": 1903,
    "name": "Arch-Magician Malcom of the Wood",
    "background": 0,
    "body": 15,
    "familiar": 123,
    "head": 194,
    "prop": 280,
    "rune": 296
  },
  {
    "idx": 1904,
    "name": "Aeromancer Lumos of the Field",
    "background": 1,
    "body": 45,
    "familiar": 95,
    "head": 153,
    "prop": 315,
    "rune": 295
  },
  {
    "idx": 1905,
    "name": "Battle Mage Malthus of the Veil",
    "background": 1,
    "body": 9,
    "familiar": 123,
    "head": 182,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 1906,
    "name": "Artificer Nemo of the Bastion",
    "background": 1,
    "body": 40,
    "familiar": 105,
    "head": 201,
    "prop": 265,
    "rune": 288
  },
  {
    "idx": 1907,
    "name": "Enchanter Calista of the Mountain",
    "background": 2,
    "body": 17,
    "familiar": 110,
    "head": 135,
    "prop": 250,
    "rune": 299
  },
  {
    "idx": 1908,
    "name": "Cybele of the Forest",
    "background": 2,
    "body": 39,
    "familiar": 93,
    "head": 132,
    "prop": 251,
    "rune": 291
  },
  {
    "idx": 1909,
    "name": "Battle Mage Danny of the Mount",
    "background": 1,
    "body": 62,
    "familiar": 7777,
    "head": 177,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 1910,
    "name": "Hedge Wizard Peter of Cuckoo Land",
    "background": 0,
    "body": 30,
    "familiar": 115,
    "head": 172,
    "prop": 276,
    "rune": 283
  },
  {
    "idx": 1911,
    "name": "Archmagus Cairon of the Mount",
    "background": 0,
    "body": 7,
    "familiar": 104,
    "head": 229,
    "prop": 262,
    "rune": 285
  },
  {
    "idx": 1912,
    "name": "Electromancer Hansel of the Mount",
    "background": 0,
    "body": 6,
    "familiar": 7777,
    "head": 182,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 1913,
    "name": "Magus Gogol of the Atheneum",
    "background": 2,
    "body": 62,
    "familiar": 94,
    "head": 219,
    "prop": 327,
    "rune": 283
  },
  {
    "idx": 1914,
    "name": "Druid Bartholomew of the Wild",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 182,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1915,
    "name": "Archmagus Ixar of El Dorado",
    "background": 0,
    "body": 76,
    "familiar": 97,
    "head": 189,
    "prop": 256,
    "rune": 300
  },
  {
    "idx": 1916,
    "name": "Adept Brown Cow from the Shadow",
    "background": 0,
    "body": 87,
    "familiar": 97,
    "head": 193,
    "prop": 318,
    "rune": 293
  },
  {
    "idx": 1917,
    "name": "Arcanist Gino of the Riviera",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 201,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 1918,
    "name": "Shaman Lenora of the Sacred Pillars",
    "background": 3,
    "body": 55,
    "familiar": 90,
    "head": 176,
    "prop": 334,
    "rune": 282
  },
  {
    "idx": 1919,
    "name": "Arcanist Thana of the Wood",
    "background": 0,
    "body": 37,
    "familiar": 120,
    "head": 191,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 1920,
    "name": "Ghost Eater Milo of the Platonic Shadow",
    "background": 0,
    "body": 11,
    "familiar": 115,
    "head": 211,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 1921,
    "name": "Artis of the Gnostics",
    "background": 0,
    "body": 10,
    "familiar": 103,
    "head": 131,
    "prop": 270,
    "rune": 290
  },
  {
    "idx": 1922,
    "name": "Shaman Louis of El Dorado",
    "background": 1,
    "body": 40,
    "familiar": 95,
    "head": 149,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1923,
    "name": "Argus of the Tower",
    "background": 2,
    "body": 6,
    "familiar": 103,
    "head": 233,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 1924,
    "name": "Magus Rodolfo of the Capital",
    "background": 3,
    "body": 19,
    "familiar": 111,
    "head": 203,
    "prop": 258,
    "rune": 288
  },
  {
    "idx": 1925,
    "name": "Shaman Shanyuan of the Fey",
    "background": 0,
    "body": 29,
    "familiar": 90,
    "head": 236,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 1926,
    "name": "Druid Horace of the Plains",
    "background": 0,
    "body": 79,
    "familiar": 123,
    "head": 216,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 1927,
    "name": "Alchemist Daria of the Atheneum",
    "background": 3,
    "body": 63,
    "familiar": 116,
    "head": 132,
    "prop": 269,
    "rune": 295
  },
  {
    "idx": 1928,
    "name": "Summoner Caligula of the Road",
    "background": 1,
    "body": 17,
    "familiar": 7777,
    "head": 220,
    "prop": 253,
    "rune": 303
  },
  {
    "idx": 1929,
    "name": "Archmagus Zane of the Heath",
    "background": 2,
    "body": 18,
    "familiar": 115,
    "head": 192,
    "prop": 312,
    "rune": 291
  },
  {
    "idx": 1930,
    "name": "Enchanter Althea of the Lake",
    "background": 3,
    "body": 41,
    "familiar": 105,
    "head": 208,
    "prop": 273,
    "rune": 296
  },
  {
    "idx": 1931,
    "name": "Hedge Wizard Asphodel of the Heath",
    "background": 2,
    "body": 36,
    "familiar": 101,
    "head": 198,
    "prop": 258,
    "rune": 287
  },
  {
    "idx": 1932,
    "name": "Archmagus George of the Plains",
    "background": 2,
    "body": 44,
    "familiar": 123,
    "head": 221,
    "prop": 260,
    "rune": 283
  },
  {
    "idx": 1933,
    "name": "Magus Merlon of the Wood",
    "background": 1,
    "body": 41,
    "familiar": 7777,
    "head": 230,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 1934,
    "name": "Druid Ravana of the Keep",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 125,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 1935,
    "name": "Enchanter Layla of the Hall",
    "background": 0,
    "body": 74,
    "familiar": 104,
    "head": 191,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 1936,
    "name": "Battle Mage Angus of Avalon",
    "background": 1,
    "body": 49,
    "familiar": 89,
    "head": 173,
    "prop": 263,
    "rune": 302
  },
  {
    "idx": 1937,
    "name": "Charmer Pandora of the Wood",
    "background": 1,
    "body": 21,
    "familiar": 116,
    "head": 135,
    "prop": 332,
    "rune": 288
  },
  {
    "idx": 1938,
    "name": "Cleric Jabir of the Cosmos",
    "background": 0,
    "body": 11,
    "familiar": 111,
    "head": 164,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 1939,
    "name": "The Witch of the West",
    "background": 3,
    "body": 85,
    "familiar": 108,
    "head": 155,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 1940,
    "name": "Enchanter Circe",
    "background": 3,
    "body": 46,
    "familiar": 104,
    "head": 131,
    "prop": 268,
    "rune": 291
  },
  {
    "idx": 1941,
    "name": "Witch Ivy of the Riviera",
    "background": 2,
    "body": 38,
    "familiar": 115,
    "head": 159,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 1942,
    "name": "Wizard Oiq of the Hall",
    "background": 1,
    "body": 26,
    "familiar": 108,
    "head": 235,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 1943,
    "name": "Druid Daria of the Wood",
    "background": 2,
    "body": 32,
    "familiar": 88,
    "head": 135,
    "prop": 316,
    "rune": 300
  },
  {
    "idx": 1944,
    "name": "Adept Udor of the Desert",
    "background": 1,
    "body": 5,
    "familiar": 114,
    "head": 147,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 1945,
    "name": "Mystic Silas of Xanadu",
    "background": 2,
    "body": 75,
    "familiar": 7777,
    "head": 226,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 1946,
    "name": "Hydromancer Diana of the Steppe",
    "background": 2,
    "body": 13,
    "familiar": 104,
    "head": 135,
    "prop": 314,
    "rune": 293
  },
  {
    "idx": 1947,
    "name": "Sage Bullock of the Ice",
    "background": 0,
    "body": 65,
    "familiar": 104,
    "head": 193,
    "prop": 316,
    "rune": 299
  },
  {
    "idx": 1948,
    "name": "Artificer Chandler of the Keep",
    "background": 1,
    "body": 74,
    "familiar": 114,
    "head": 150,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 1949,
    "name": "Alchemist Chiyo of the Valley",
    "background": 1,
    "body": 34,
    "familiar": 105,
    "head": 126,
    "prop": 271,
    "rune": 297
  },
  {
    "idx": 1950,
    "name": "Spellsinger Jastor of the Moors",
    "background": 1,
    "body": 44,
    "familiar": 109,
    "head": 200,
    "prop": 257,
    "rune": 299
  },
  {
    "idx": 1951,
    "name": "Alchemist Eric of the Waste",
    "background": 1,
    "body": 86,
    "familiar": 95,
    "head": 220,
    "prop": 269,
    "rune": 284
  },
  {
    "idx": 1952,
    "name": "Magus Goomer of the Wood",
    "background": 0,
    "body": 18,
    "familiar": 89,
    "head": 195,
    "prop": 318,
    "rune": 300
  },
  {
    "idx": 1953,
    "name": "Electromancer Aleister of the Villa",
    "background": 2,
    "body": 76,
    "familiar": 103,
    "head": 147,
    "prop": 305,
    "rune": 291
  },
  {
    "idx": 1954,
    "name": "Runecaster Keziah of the Plains",
    "background": 2,
    "body": 82,
    "familiar": 115,
    "head": 159,
    "prop": 340,
    "rune": 285
  },
  {
    "idx": 1955,
    "name": "Battle Mage Ratko of the Realm",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 216,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 1956,
    "name": "Solar Mage Carly of the Keep",
    "background": 0,
    "body": 74,
    "familiar": 89,
    "head": 187,
    "prop": 339,
    "rune": 283
  },
  {
    "idx": 1957,
    "name": "Enchanter Lamia of the Reach",
    "background": 3,
    "body": 22,
    "familiar": 101,
    "head": 191,
    "prop": 273,
    "rune": 290
  },
  {
    "idx": 1958,
    "name": "Enchanter Bathsheba of the Cosmos",
    "background": 0,
    "body": 24,
    "familiar": 114,
    "head": 156,
    "prop": 248,
    "rune": 285
  },
  {
    "idx": 1959,
    "name": "Aeromancer Pan of the Capital",
    "background": 1,
    "body": 19,
    "familiar": 104,
    "head": 167,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 1960,
    "name": "Shaman Durm of the Hollow",
    "background": 2,
    "body": 79,
    "familiar": 104,
    "head": 173,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 1961,
    "name": "Arch-Magician Gully of the Cosmos",
    "background": 0,
    "body": 75,
    "familiar": 104,
    "head": 235,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 1962,
    "name": "Geomancer Moloch of the Hollow",
    "background": 0,
    "body": 82,
    "familiar": 97,
    "head": 193,
    "prop": 308,
    "rune": 284
  },
  {
    "idx": 1963,
    "name": "Artificer Rita of the Wood",
    "background": 2,
    "body": 35,
    "familiar": 109,
    "head": 209,
    "prop": 261,
    "rune": 291
  },
  {
    "idx": 1964,
    "name": "Pyromancer Duzzle",
    "background": 1,
    "body": 77,
    "familiar": 103,
    "head": 235,
    "prop": 310,
    "rune": 304
  },
  {
    "idx": 1965,
    "name": "Enchanter Bathsheba of the Grotto",
    "background": 2,
    "body": 41,
    "familiar": 120,
    "head": 191,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 1966,
    "name": "Sorcerer Jahid of the Riviera",
    "background": 1,
    "body": 42,
    "familiar": 103,
    "head": 219,
    "prop": 312,
    "rune": 288
  },
  {
    "idx": 1967,
    "name": "Sorcerer Oberon of the Obelisk",
    "background": 0,
    "body": 54,
    "familiar": 93,
    "head": 202,
    "prop": 270,
    "rune": 292
  },
  {
    "idx": 1968,
    "name": "Witch Imeena of the Veil",
    "background": 0,
    "body": 29,
    "familiar": 120,
    "head": 159,
    "prop": 314,
    "rune": 304
  },
  {
    "idx": 1969,
    "name": "Adept Soya of the Temple",
    "background": 0,
    "body": 50,
    "familiar": 94,
    "head": 229,
    "prop": 318,
    "rune": 282
  },
  {
    "idx": 1970,
    "name": "Enchanter Hongo of the Forest",
    "background": 1,
    "body": 45,
    "familiar": 120,
    "head": 195,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 1971,
    "name": "Wild Mage Chooki of the Sun",
    "background": 2,
    "body": 60,
    "familiar": 94,
    "head": 237,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 1972,
    "name": "Runecaster Milton of the Sun",
    "background": 0,
    "body": 60,
    "familiar": 7777,
    "head": 215,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 1973,
    "name": "Wild Mage Rita of the Hills",
    "background": 0,
    "body": 82,
    "familiar": 111,
    "head": 223,
    "prop": 321,
    "rune": 294
  },
  {
    "idx": 1974,
    "name": "Enchanter Arabella of the Plains",
    "background": 0,
    "body": 21,
    "familiar": 90,
    "head": 198,
    "prop": 269,
    "rune": 293
  },
  {
    "idx": 1975,
    "name": "Archmagus Remus of the Psychic Leap",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 211,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 1976,
    "name": "Alchemist Tenguyama of the Rock",
    "background": 0,
    "body": 27,
    "familiar": 105,
    "head": 243,
    "prop": 271,
    "rune": 287
  },
  {
    "idx": 1977,
    "name": "Conjurer Crackerjack of the Canyon",
    "background": 2,
    "body": 13,
    "familiar": 120,
    "head": 144,
    "prop": 246,
    "rune": 284
  },
  {
    "idx": 1978,
    "name": "Arcanist Azahl of the Realm",
    "background": 1,
    "body": 75,
    "familiar": 7777,
    "head": 226,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 1979,
    "name": "Archmagus Hadrien of the Bastion",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 227,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 1980,
    "name": "Chaos Mage Lumos of the Ether",
    "background": 2,
    "body": 8,
    "familiar": 119,
    "head": 231,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 1981,
    "name": "Archmagus Crowley of the Inferno",
    "background": 3,
    "body": 87,
    "familiar": 94,
    "head": 160,
    "prop": 254,
    "rune": 297
  },
  {
    "idx": 1982,
    "name": "Archmagus Lumos of the Temple",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 153,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 1983,
    "name": "Aldus of the Thorn",
    "background": 1,
    "body": 29,
    "familiar": 108,
    "head": 189,
    "prop": 269,
    "rune": 296
  },
  {
    "idx": 1984,
    "name": "Archmagus Amir of the Quantum Downs",
    "background": 0,
    "body": 24,
    "familiar": 120,
    "head": 189,
    "prop": 316,
    "rune": 300
  },
  {
    "idx": 1985,
    "name": "Uvlius of the Keep",
    "background": 2,
    "body": 6,
    "familiar": 109,
    "head": 221,
    "prop": 316,
    "rune": 300
  },
  {
    "idx": 1986,
    "name": "The Goblin King",
    "background": 0,
    "body": 76,
    "familiar": 118,
    "head": 174,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 1987,
    "name": "Summoner Crowley of the Light",
    "background": 0,
    "body": 11,
    "familiar": 105,
    "head": 202,
    "prop": 253,
    "rune": 292
  },
  {
    "idx": 1988,
    "name": "Archmagus Milo of the Hills",
    "background": 0,
    "body": 14,
    "familiar": 112,
    "head": 141,
    "prop": 7777,
    "rune": 287
  },
  {
    "idx": 1989,
    "name": "Witch Gwendolin of the Villa",
    "background": 1,
    "body": 48,
    "familiar": 115,
    "head": 166,
    "prop": 268,
    "rune": 283
  },
  {
    "idx": 1990,
    "name": "Charmer Larissa of the Valley",
    "background": 0,
    "body": 39,
    "familiar": 93,
    "head": 131,
    "prop": 252,
    "rune": 282
  },
  {
    "idx": 1991,
    "name": "Sorcerer Jerret of the Sun",
    "background": 0,
    "body": 5,
    "familiar": 112,
    "head": 160,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 1992,
    "name": "Alessar of the Wold",
    "background": 1,
    "body": 44,
    "familiar": 119,
    "head": 141,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 1993,
    "name": "Battle Mage Dutorn of the Valley",
    "background": 2,
    "body": 79,
    "familiar": 119,
    "head": 129,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 1994,
    "name": "Summoner Sylvia of the Mount",
    "background": 0,
    "body": 49,
    "familiar": 115,
    "head": 166,
    "prop": 253,
    "rune": 297
  },
  {
    "idx": 1995,
    "name": "Wild Mage Umber of the Cosmos",
    "background": 3,
    "body": 10,
    "familiar": 89,
    "head": 167,
    "prop": 319,
    "rune": 284
  },
  {
    "idx": 1996,
    "name": "Sorcerer George of the Hills",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 197,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 1997,
    "name": "Arcanist Shigenjo of the Surf",
    "background": 1,
    "body": 57,
    "familiar": 101,
    "head": 243,
    "prop": 250,
    "rune": 301
  },
  {
    "idx": 1998,
    "name": "Magus Hagatha of the Tower",
    "background": 1,
    "body": 49,
    "familiar": 115,
    "head": 166,
    "prop": 262,
    "rune": 284
  },
  {
    "idx": 1999,
    "name": "Archmagus Argus of the Desert",
    "background": 1,
    "body": 60,
    "familiar": 123,
    "head": 238,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 2000,
    "name": "The Grey Pilgrim",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 232,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 2001,
    "name": "Cassiopeia of the Quantum Downs",
    "background": 0,
    "body": 9,
    "familiar": 110,
    "head": 139,
    "prop": 254,
    "rune": 282
  },
  {
    "idx": 2002,
    "name": "Archmagus Orpheus from the Shadow",
    "background": 1,
    "body": 87,
    "familiar": 104,
    "head": 185,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 2003,
    "name": "Diabolist Evangeline of the Psychic Leap",
    "background": 0,
    "body": 67,
    "familiar": 105,
    "head": 223,
    "prop": 309,
    "rune": 294
  },
  {
    "idx": 2004,
    "name": "Artificer Corky of the Havens",
    "background": 1,
    "body": 7,
    "familiar": 7777,
    "head": 201,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 2005,
    "name": "Adept Woomba of the Mountain",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 235,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 2006,
    "name": "Battle Mage Flynn of the Moors",
    "background": 2,
    "body": 13,
    "familiar": 97,
    "head": 165,
    "prop": 312,
    "rune": 296
  },
  {
    "idx": 2007,
    "name": "Geomancer Huan of the Plains",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 236,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2008,
    "name": "Sorcerer Apollo",
    "background": 0,
    "body": 28,
    "familiar": 7777,
    "head": 215,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 2009,
    "name": "Battle Mage Cromwell of the Thorn",
    "background": 0,
    "body": 28,
    "familiar": 110,
    "head": 203,
    "prop": 321,
    "rune": 287
  },
  {
    "idx": 2010,
    "name": "Sage Hothor of the Marsh",
    "background": 2,
    "body": 43,
    "familiar": 89,
    "head": 220,
    "prop": 245,
    "rune": 296
  },
  {
    "idx": 2011,
    "name": "Chaos Mage Beyna of the Wood",
    "background": 1,
    "body": 34,
    "familiar": 115,
    "head": 131,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 2012,
    "name": "Magus Aden of the Grotto",
    "background": 0,
    "body": 41,
    "familiar": 7777,
    "head": 207,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 2013,
    "name": "Archmagus Galatea of the Hollow",
    "background": 1,
    "body": 34,
    "familiar": 94,
    "head": 139,
    "prop": 255,
    "rune": 282
  },
  {
    "idx": 2014,
    "name": "Archmagus Milton of the Bastion",
    "background": 0,
    "body": 19,
    "familiar": 115,
    "head": 174,
    "prop": 250,
    "rune": 294
  },
  {
    "idx": 2015,
    "name": "Shadow Mage Titania of the Moors",
    "background": 0,
    "body": 34,
    "familiar": 120,
    "head": 191,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 2016,
    "name": "Battle Mage Malthus of the Mist",
    "background": 1,
    "body": 54,
    "familiar": 7777,
    "head": 182,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 2017,
    "name": "Hedge Wizard Rita of the Field",
    "background": 2,
    "body": 38,
    "familiar": 119,
    "head": 166,
    "prop": 312,
    "rune": 291
  },
  {
    "idx": 2018,
    "name": "Magus Willow of the Sea",
    "background": 2,
    "body": 80,
    "familiar": 89,
    "head": 135,
    "prop": 263,
    "rune": 282
  },
  {
    "idx": 2019,
    "name": "Sage Milton of the Brambles",
    "background": 1,
    "body": 44,
    "familiar": 7777,
    "head": 185,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 2020,
    "name": "Geomancer Poppy of the Canyon",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 178,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2021,
    "name": "Archmagus Sharx of Cuckoo Land",
    "background": 2,
    "body": 28,
    "familiar": 88,
    "head": 171,
    "prop": 316,
    "rune": 290
  },
  {
    "idx": 2022,
    "name": "Sage Nicolas of the Mist",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 188,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 2023,
    "name": "Diabolist Dante of the Steppe",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 177,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 2024,
    "name": "Archmagus Hothor of the Wood",
    "background": 3,
    "body": 82,
    "familiar": 90,
    "head": 133,
    "prop": 317,
    "rune": 303
  },
  {
    "idx": 2025,
    "name": "Ghost Eater Azazel of the Hall",
    "background": 0,
    "body": 40,
    "familiar": 120,
    "head": 205,
    "prop": 259,
    "rune": 284
  },
  {
    "idx": 2026,
    "name": "Alchemist Shroomer of the Ice",
    "background": 0,
    "body": 65,
    "familiar": 119,
    "head": 195,
    "prop": 268,
    "rune": 288
  },
  {
    "idx": 2027,
    "name": "Archmagus Zelroth of the Secret Fire",
    "background": 0,
    "body": 86,
    "familiar": 7777,
    "head": 211,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 2028,
    "name": "Battle Mage Ratko of the Court",
    "background": 1,
    "body": 40,
    "familiar": 7777,
    "head": 203,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 2029,
    "name": "Archmagus Apollo of Arcadia",
    "background": 0,
    "body": 15,
    "familiar": 95,
    "head": 214,
    "prop": 263,
    "rune": 290
  },
  {
    "idx": 2030,
    "name": "Shaman Brown Cow of the Wood",
    "background": 2,
    "body": 84,
    "familiar": 99,
    "head": 193,
    "prop": 316,
    "rune": 290
  },
  {
    "idx": 2031,
    "name": "Diana of the Astral Plane",
    "background": 1,
    "body": 11,
    "familiar": 93,
    "head": 132,
    "prop": 270,
    "rune": 303
  },
  {
    "idx": 2032,
    "name": "Adept Ramiz of the Wood",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 164,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 2033,
    "name": "Diabolist Alizam of Elysium",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 128,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 2034,
    "name": "Illusionist Meloogen of the Garden",
    "background": 2,
    "body": 29,
    "familiar": 113,
    "head": 154,
    "prop": 306,
    "rune": 292
  },
  {
    "idx": 2035,
    "name": "Runecaster Jaffer of the Sacred Pillars",
    "background": 1,
    "body": 50,
    "familiar": 116,
    "head": 142,
    "prop": 340,
    "rune": 285
  },
  {
    "idx": 2036,
    "name": "Silas of the Pit",
    "background": 1,
    "body": 85,
    "familiar": 7777,
    "head": 231,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 2037,
    "name": "Alchemist Katherine of the Hollow",
    "background": 2,
    "body": 31,
    "familiar": 88,
    "head": 191,
    "prop": 270,
    "rune": 303
  },
  {
    "idx": 2038,
    "name": "Alchemist Hongo",
    "background": 1,
    "body": 87,
    "familiar": 103,
    "head": 195,
    "prop": 271,
    "rune": 293
  },
  {
    "idx": 2039,
    "name": "Shaman Jean Leon of the Keep",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 179,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 2040,
    "name": "Alchemist Zubin of the Atheneum",
    "background": 1,
    "body": 55,
    "familiar": 7777,
    "head": 215,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 2041,
    "name": "Pyromancer George of the Villa",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 192,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 2042,
    "name": "Electromancer Hagar of Dreams",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 188,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 2043,
    "name": "Arch-Magician Axel of the Desert",
    "background": 0,
    "body": 27,
    "familiar": 89,
    "head": 213,
    "prop": 266,
    "rune": 293
  },
  {
    "idx": 2044,
    "name": "Battle Mage Axel of the Dunes",
    "background": 3,
    "body": 58,
    "familiar": 94,
    "head": 177,
    "prop": 270,
    "rune": 303
  },
  {
    "idx": 2045,
    "name": "Atlanta of the Belfry",
    "background": 2,
    "body": 6,
    "familiar": 103,
    "head": 131,
    "prop": 328,
    "rune": 299
  },
  {
    "idx": 2046,
    "name": "Hedge Wizard Aslan of the Veil",
    "background": 2,
    "body": 9,
    "familiar": 99,
    "head": 165,
    "prop": 276,
    "rune": 301
  },
  {
    "idx": 2047,
    "name": "Ghost Eater Edge",
    "background": 1,
    "body": 74,
    "familiar": 103,
    "head": 239,
    "prop": 260,
    "rune": 282
  },
  {
    "idx": 2048,
    "name": "Mystic Jeldor of the Inferno",
    "background": 1,
    "body": 87,
    "familiar": 118,
    "head": 138,
    "prop": 266,
    "rune": 301
  },
  {
    "idx": 2049,
    "name": "Enchanter Bathsheba of the Plains",
    "background": 2,
    "body": 32,
    "familiar": 104,
    "head": 198,
    "prop": 280,
    "rune": 291
  },
  {
    "idx": 2050,
    "name": "Alchemist  of the Mount",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 233,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 2051,
    "name": "Sage Carly",
    "background": 1,
    "body": 87,
    "familiar": 101,
    "head": 208,
    "prop": 316,
    "rune": 302
  },
  {
    "idx": 2052,
    "name": "Archmagus Aleister of the Citadel",
    "background": 1,
    "body": 76,
    "familiar": 88,
    "head": 147,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 2053,
    "name": "Arcanist Hagatha of the Hall",
    "background": 1,
    "body": 40,
    "familiar": 95,
    "head": 155,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 2054,
    "name": "Sage Argus of the Moors",
    "background": 1,
    "body": 42,
    "familiar": 7777,
    "head": 192,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 2055,
    "name": "Archmagus Aleister of the Mountain",
    "background": 1,
    "body": 82,
    "familiar": 7777,
    "head": 192,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 2056,
    "name": "Ghost Eater Black Goat",
    "background": 3,
    "body": 68,
    "familiar": 96,
    "head": 136,
    "prop": 254,
    "rune": 299
  },
  {
    "idx": 2057,
    "name": "Necromancer Chiron of the Villa",
    "background": 0,
    "body": 48,
    "familiar": 103,
    "head": 239,
    "prop": 339,
    "rune": 292
  },
  {
    "idx": 2058,
    "name": "Sorcerer Faiz of the Havens",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 128,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 2059,
    "name": "Shaman Jastor of the Sacred Pillars",
    "background": 1,
    "body": 7,
    "familiar": 115,
    "head": 171,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 2060,
    "name": "Chaos Mage Chooki of the Palms",
    "background": 0,
    "body": 60,
    "familiar": 94,
    "head": 219,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2061,
    "name": "Cleric  of the Villa",
    "background": 0,
    "body": 48,
    "familiar": 104,
    "head": 226,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 2062,
    "name": "Adept Daria of the Sea",
    "background": 1,
    "body": 80,
    "familiar": 107,
    "head": 187,
    "prop": 332,
    "rune": 291
  },
  {
    "idx": 2063,
    "name": "Magus Jezebel of the Hills",
    "background": 1,
    "body": 18,
    "familiar": 106,
    "head": 166,
    "prop": 262,
    "rune": 292
  },
  {
    "idx": 2064,
    "name": "Adept Requiem of the Cold",
    "background": 3,
    "body": 73,
    "familiar": 95,
    "head": 179,
    "prop": 249,
    "rune": 300
  },
  {
    "idx": 2065,
    "name": "Hedge Wizard Artis of the Hollow",
    "background": 0,
    "body": 21,
    "familiar": 107,
    "head": 190,
    "prop": 325,
    "rune": 303
  },
  {
    "idx": 2066,
    "name": "Hex Mage Bao of the Ether",
    "background": 3,
    "body": 68,
    "familiar": 97,
    "head": 236,
    "prop": 309,
    "rune": 282
  },
  {
    "idx": 2067,
    "name": "Adept Ratko of Dreams",
    "background": 0,
    "body": 6,
    "familiar": 7777,
    "head": 204,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 2068,
    "name": "Thaumaturge Eden of the Belfry",
    "background": 2,
    "body": 62,
    "familiar": 7777,
    "head": 162,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 2069,
    "name": "Thaumaturge Sharx of the Palms",
    "background": 2,
    "body": 5,
    "familiar": 108,
    "head": 200,
    "prop": 327,
    "rune": 300
  },
  {
    "idx": 2070,
    "name": "Artificer Crowley of the Veil",
    "background": 1,
    "body": 75,
    "familiar": 7777,
    "head": 211,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 2071,
    "name": "Alatar of the Bastion",
    "background": 1,
    "body": 78,
    "familiar": 90,
    "head": 162,
    "prop": 280,
    "rune": 294
  },
  {
    "idx": 2072,
    "name": "Hedge Wizard Beyna of the Plains",
    "background": 0,
    "body": 21,
    "familiar": 94,
    "head": 135,
    "prop": 328,
    "rune": 297
  },
  {
    "idx": 2073,
    "name": "Charmer Jadis of the Wood",
    "background": 0,
    "body": 20,
    "familiar": 101,
    "head": 132,
    "prop": 277,
    "rune": 294
  },
  {
    "idx": 2074,
    "name": "Archmagus Udor",
    "background": 1,
    "body": 9,
    "familiar": 123,
    "head": 186,
    "prop": 309,
    "rune": 295
  },
  {
    "idx": 2075,
    "name": "Electromancer Yumi of the Dunes",
    "background": 2,
    "body": 61,
    "familiar": 95,
    "head": 126,
    "prop": 305,
    "rune": 296
  },
  {
    "idx": 2076,
    "name": "Magus Diana of the Road",
    "background": 1,
    "body": 36,
    "familiar": 107,
    "head": 156,
    "prop": 262,
    "rune": 294
  },
  {
    "idx": 2077,
    "name": "Archmagus Aleister of the Sea",
    "background": 3,
    "body": 80,
    "familiar": 101,
    "head": 185,
    "prop": 269,
    "rune": 302
  },
  {
    "idx": 2078,
    "name": "Battle Mage Homer of the Quantum Shadow",
    "background": 0,
    "body": 86,
    "familiar": 7777,
    "head": 188,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 2079,
    "name": "Illusionist Xue of the Wood",
    "background": 2,
    "body": 38,
    "familiar": 119,
    "head": 180,
    "prop": 273,
    "rune": 294
  },
  {
    "idx": 2080,
    "name": "Sorcerer Soran of the Wold",
    "background": 2,
    "body": 13,
    "familiar": 116,
    "head": 153,
    "prop": 261,
    "rune": 290
  },
  {
    "idx": 2081,
    "name": "Arcanist Luther of the Wold",
    "background": 0,
    "body": 44,
    "familiar": 103,
    "head": 206,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 2082,
    "name": "Sorcerer Nassif of Elysium",
    "background": 2,
    "body": 62,
    "familiar": 94,
    "head": 219,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 2083,
    "name": "Sorcerer Aleister",
    "background": 0,
    "body": 29,
    "familiar": 104,
    "head": 153,
    "prop": 256,
    "rune": 294
  },
  {
    "idx": 2084,
    "name": "Null Mage Aleister of the Wood",
    "background": 1,
    "body": 15,
    "familiar": 7777,
    "head": 174,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 2085,
    "name": "Alchemist Eizo of the Keep",
    "background": 1,
    "body": 74,
    "familiar": 7777,
    "head": 215,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 2086,
    "name": "Sorcerer Azahl of the Sacred Pillars",
    "background": 1,
    "body": 49,
    "familiar": 105,
    "head": 127,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 2087,
    "name": "Druid Orpheus of the Reach",
    "background": 0,
    "body": 41,
    "familiar": 7777,
    "head": 215,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2088,
    "name": "Runecaster Ali of the Court",
    "background": 3,
    "body": 18,
    "familiar": 99,
    "head": 142,
    "prop": 340,
    "rune": 287
  },
  {
    "idx": 2089,
    "name": "Enchanter Devon of the Hall",
    "background": 0,
    "body": 77,
    "familiar": 97,
    "head": 131,
    "prop": 312,
    "rune": 285
  },
  {
    "idx": 2090,
    "name": "Holy Monk Chandler from the Abyss",
    "background": 0,
    "body": 85,
    "familiar": 123,
    "head": 150,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 2091,
    "name": "Battle Mage Bayard of the Court",
    "background": 2,
    "body": 18,
    "familiar": 99,
    "head": 218,
    "prop": 312,
    "rune": 285
  },
  {
    "idx": 2092,
    "name": "Arch-Magician Enzo of the Wood",
    "background": 1,
    "body": 44,
    "familiar": 111,
    "head": 201,
    "prop": 266,
    "rune": 290
  },
  {
    "idx": 2093,
    "name": "Chaos Mage Samuel of the Toadstools",
    "background": 0,
    "body": 30,
    "familiar": 94,
    "head": 165,
    "prop": 309,
    "rune": 304
  },
  {
    "idx": 2094,
    "name": "Alchemist Yuki of the Forest",
    "background": 1,
    "body": 36,
    "familiar": 119,
    "head": 126,
    "prop": 268,
    "rune": 291
  },
  {
    "idx": 2095,
    "name": "Arcanist Arcus of the Hills",
    "background": 0,
    "body": 81,
    "familiar": 88,
    "head": 241,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 2096,
    "name": "Alchemist Rita of the Wood",
    "background": 0,
    "body": 36,
    "familiar": 123,
    "head": 159,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 2097,
    "name": "Shadow Mage Hestia of the Hollow",
    "background": 2,
    "body": 33,
    "familiar": 93,
    "head": 223,
    "prop": 337,
    "rune": 291
  },
  {
    "idx": 2098,
    "name": "Clairvoyant Soran of Cuckoo Land",
    "background": 0,
    "body": 28,
    "familiar": 90,
    "head": 211,
    "prop": 252,
    "rune": 304
  },
  {
    "idx": 2099,
    "name": "Layla of the Grotto",
    "background": 2,
    "body": 23,
    "familiar": 108,
    "head": 135,
    "prop": 314,
    "rune": 302
  },
  {
    "idx": 2100,
    "name": "Evoker Cairon of the Road",
    "background": 2,
    "body": 13,
    "familiar": 93,
    "head": 174,
    "prop": 321,
    "rune": 304
  },
  {
    "idx": 2101,
    "name": "Hedge Wizard Marceau of the Brambles",
    "background": 0,
    "body": 19,
    "familiar": 114,
    "head": 149,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 2102,
    "name": "Witch Sabina of the Hollow",
    "background": 2,
    "body": 35,
    "familiar": 114,
    "head": 209,
    "prop": 253,
    "rune": 297
  },
  {
    "idx": 2103,
    "name": "Artificer Jiggs of the Hall",
    "background": 2,
    "body": 26,
    "familiar": 95,
    "head": 201,
    "prop": 254,
    "rune": 7777
  },
  {
    "idx": 2104,
    "name": "Summoner Zane of the Marsh",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 230,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 2105,
    "name": "Conjurer Zelroth of Mu",
    "background": 1,
    "body": 75,
    "familiar": 105,
    "head": 231,
    "prop": 339,
    "rune": 285
  },
  {
    "idx": 2106,
    "name": "Shadow Mage Rita of the Mount",
    "background": 2,
    "body": 49,
    "familiar": 115,
    "head": 155,
    "prop": 334,
    "rune": 282
  },
  {
    "idx": 2107,
    "name": "Hedge Wizard Cybele in the Shadows",
    "background": 2,
    "body": 85,
    "familiar": 97,
    "head": 198,
    "prop": 319,
    "rune": 304
  },
  {
    "idx": 2108,
    "name": "Cryptomancer Rixxa of the Quantum Downs",
    "background": 3,
    "body": 8,
    "familiar": 97,
    "head": 171,
    "prop": 309,
    "rune": 296
  },
  {
    "idx": 2109,
    "name": "Geomancer Gunthor of the Canyon",
    "background": 0,
    "body": 12,
    "familiar": 112,
    "head": 129,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2110,
    "name": "Alchemist Chiyo of the Wood",
    "background": 2,
    "body": 35,
    "familiar": 95,
    "head": 126,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 2111,
    "name": "Archmagus Salvatore of the Atheneum",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 221,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 2112,
    "name": "Archmagus Aleister of the Steppe",
    "background": 1,
    "body": 13,
    "familiar": 109,
    "head": 185,
    "prop": 324,
    "rune": 304
  },
  {
    "idx": 2113,
    "name": "Archmagus Raul of the Havens",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 207,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 2114,
    "name": "Voodoo Priest Jaffer of the Great Blue",
    "background": 2,
    "body": 80,
    "familiar": 93,
    "head": 128,
    "prop": 320,
    "rune": 290
  },
  {
    "idx": 2115,
    "name": "Runecaster Sondra of the Brambles",
    "background": 0,
    "body": 22,
    "familiar": 7777,
    "head": 131,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 2116,
    "name": "Pyromancer Buttons of the Circle",
    "background": 0,
    "body": 29,
    "familiar": 114,
    "head": 195,
    "prop": 277,
    "rune": 299
  },
  {
    "idx": 2117,
    "name": "Archmagus Eizo of the Inferno",
    "background": 2,
    "body": 85,
    "familiar": 110,
    "head": 162,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 2118,
    "name": "Sorcerer Crowley of the Lake",
    "background": 0,
    "body": 12,
    "familiar": 112,
    "head": 226,
    "prop": 328,
    "rune": 292
  },
  {
    "idx": 2119,
    "name": "Magus Zorko of Dreams",
    "background": 1,
    "body": 49,
    "familiar": 119,
    "head": 128,
    "prop": 310,
    "rune": 296
  },
  {
    "idx": 2120,
    "name": "Conjurer Mushy of the Plains",
    "background": 0,
    "body": 41,
    "familiar": 105,
    "head": 195,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 2121,
    "name": "Aleister of the Astral Plane",
    "background": 3,
    "body": 10,
    "familiar": 90,
    "head": 202,
    "prop": 260,
    "rune": 284
  },
  {
    "idx": 2122,
    "name": "Artificer Agapito of the Atheneum",
    "background": 2,
    "body": 55,
    "familiar": 103,
    "head": 201,
    "prop": 339,
    "rune": 283
  },
  {
    "idx": 2123,
    "name": "Arch-Magician Voidoth of the Crag",
    "background": 3,
    "body": 73,
    "familiar": 90,
    "head": 239,
    "prop": 334,
    "rune": 287
  },
  {
    "idx": 2124,
    "name": "Sorcerer Basil of the Desert",
    "background": 2,
    "body": 59,
    "familiar": 97,
    "head": 162,
    "prop": 327,
    "rune": 290
  },
  {
    "idx": 2125,
    "name": "Shaman Homer of the Belfry",
    "background": 2,
    "body": 7,
    "familiar": 109,
    "head": 173,
    "prop": 326,
    "rune": 288
  },
  {
    "idx": 2126,
    "name": "Shaman Zane of the Brambles",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 221,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2127,
    "name": "Druid Gully of the Wood",
    "background": 0,
    "body": 41,
    "familiar": 7777,
    "head": 171,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2128,
    "name": "Wild Mage Bayard of the Sacred Pillars",
    "background": 1,
    "body": 49,
    "familiar": 89,
    "head": 165,
    "prop": 319,
    "rune": 291
  },
  {
    "idx": 2129,
    "name": "Illusionist Aleister of the Ether",
    "background": 1,
    "body": 11,
    "familiar": 97,
    "head": 162,
    "prop": 246,
    "rune": 287
  },
  {
    "idx": 2130,
    "name": "Summoner Thoth of the Cosmos",
    "background": 0,
    "body": 24,
    "familiar": 119,
    "head": 194,
    "prop": 254,
    "rune": 302
  },
  {
    "idx": 2131,
    "name": "Adept Homer of the Expanse",
    "background": 0,
    "body": 73,
    "familiar": 94,
    "head": 177,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 2132,
    "name": "Archmagus Aden of the Morning Star",
    "background": 1,
    "body": 86,
    "familiar": 123,
    "head": 125,
    "prop": 315,
    "rune": 299
  },
  {
    "idx": 2133,
    "name": "Aleister of the Keep",
    "background": 3,
    "body": 26,
    "familiar": 88,
    "head": 197,
    "prop": 257,
    "rune": 282
  },
  {
    "idx": 2134,
    "name": "Magus Allistair of the Wild",
    "background": 1,
    "body": 15,
    "familiar": 7777,
    "head": 153,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 2135,
    "name": "Sage Khudalf of the Thorn",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 213,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 2136,
    "name": "Druid Basil of the Mountain",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 233,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 2137,
    "name": "Augurer Ravana",
    "background": 1,
    "body": 30,
    "familiar": 7777,
    "head": 125,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 2138,
    "name": "Sorcerer Ifran of the Hills",
    "background": 3,
    "body": 23,
    "familiar": 119,
    "head": 164,
    "prop": 312,
    "rune": 292
  },
  {
    "idx": 2139,
    "name": "Sorcerer Gary of the Reach",
    "background": 0,
    "body": 45,
    "familiar": 116,
    "head": 220,
    "prop": 335,
    "rune": 299
  },
  {
    "idx": 2140,
    "name": "Archmagus George of the Cosmos",
    "background": 1,
    "body": 75,
    "familiar": 7777,
    "head": 231,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 2141,
    "name": "Archmagus Apollo of the Hall",
    "background": 1,
    "body": 26,
    "familiar": 89,
    "head": 228,
    "prop": 255,
    "rune": 291
  },
  {
    "idx": 2142,
    "name": "Cleric Woomba of the Garden",
    "background": 0,
    "body": 30,
    "familiar": 108,
    "head": 235,
    "prop": 306,
    "rune": 296
  },
  {
    "idx": 2143,
    "name": "Augurer Carly of the Villa",
    "background": 0,
    "body": 46,
    "familiar": 88,
    "head": 132,
    "prop": 252,
    "rune": 288
  },
  {
    "idx": 2144,
    "name": "Stellar Mage Iris of Arcadia",
    "background": 1,
    "body": 44,
    "familiar": 103,
    "head": 208,
    "prop": 338,
    "rune": 288
  },
  {
    "idx": 2145,
    "name": "Wild Mage Ulysse of the Court",
    "background": 1,
    "body": 19,
    "familiar": 7777,
    "head": 204,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 2146,
    "name": "Fortune Teller Purple Boy",
    "background": 2,
    "body": 8,
    "familiar": 108,
    "head": 154,
    "prop": 251,
    "rune": 290
  },
  {
    "idx": 2147,
    "name": "Sage Demos of the Loch",
    "background": 0,
    "body": 57,
    "familiar": 105,
    "head": 158,
    "prop": 277,
    "rune": 294
  },
  {
    "idx": 2148,
    "name": "Artificer Nadeem of the Atheneum",
    "background": 2,
    "body": 49,
    "familiar": 94,
    "head": 222,
    "prop": 261,
    "rune": 293
  },
  {
    "idx": 2149,
    "name": "Voodoo Priest Le Blanc of the Bastion",
    "background": 0,
    "body": 76,
    "familiar": 95,
    "head": 149,
    "prop": 7777,
    "rune": 284
  },
  {
    "idx": 2150,
    "name": "Arch-Magician Bao of the Sun",
    "background": 1,
    "body": 5,
    "familiar": 112,
    "head": 236,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 2151,
    "name": "Adept Adium of the River",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 125,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 2152,
    "name": "Holy Magus Iluzor of the Havens",
    "background": 2,
    "body": 11,
    "familiar": 117,
    "head": 170,
    "prop": 253,
    "rune": 303
  },
  {
    "idx": 2153,
    "name": "Magus Huan of the Palms",
    "background": 3,
    "body": 61,
    "familiar": 93,
    "head": 236,
    "prop": 263,
    "rune": 292
  },
  {
    "idx": 2154,
    "name": "Alchemist Flamos of the Toadstools",
    "background": 0,
    "body": 30,
    "familiar": 7777,
    "head": 158,
    "prop": 268,
    "rune": 290
  },
  {
    "idx": 2155,
    "name": "Chaos Mage Wolfram of the Valley",
    "background": 2,
    "body": 7,
    "familiar": 112,
    "head": 218,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2156,
    "name": "Augurer Peppy of the Marsh",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 200,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 2157,
    "name": "Adept Eden of the Wood",
    "background": 0,
    "body": 45,
    "familiar": 114,
    "head": 221,
    "prop": 323,
    "rune": 303
  },
  {
    "idx": 2158,
    "name": "Arcanist Finn of the Light",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 216,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 2159,
    "name": "Battle Mage Angus of the Dunes",
    "background": 0,
    "body": 58,
    "familiar": 99,
    "head": 204,
    "prop": 7777,
    "rune": 286
  },
  {
    "idx": 2160,
    "name": "Voodoo Priest Crowley of the Toadstools",
    "background": 1,
    "body": 30,
    "familiar": 116,
    "head": 153,
    "prop": 320,
    "rune": 300
  },
  {
    "idx": 2161,
    "name": "Battle Mage Godfrey of Tartarus",
    "background": 1,
    "body": 87,
    "familiar": 116,
    "head": 182,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 2162,
    "name": "Diviner Cairon of the Desert",
    "background": 1,
    "body": 60,
    "familiar": 93,
    "head": 230,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 2163,
    "name": "Druid Diana of the Keep",
    "background": 1,
    "body": 74,
    "familiar": 103,
    "head": 208,
    "prop": 264,
    "rune": 299
  },
  {
    "idx": 2164,
    "name": "Aeromancer Jianyu of the Rock",
    "background": 2,
    "body": 60,
    "familiar": 97,
    "head": 236,
    "prop": 315,
    "rune": 304
  },
  {
    "idx": 2165,
    "name": "Thaumaturge Wolfram of the Plains",
    "background": 1,
    "body": 15,
    "familiar": 120,
    "head": 183,
    "prop": 326,
    "rune": 288
  },
  {
    "idx": 2166,
    "name": "Illusionist Woomba of the Wold",
    "background": 1,
    "body": 15,
    "familiar": 99,
    "head": 235,
    "prop": 246,
    "rune": 296
  },
  {
    "idx": 2167,
    "name": "Battle Mage Nicolas of the Belfry",
    "background": 2,
    "body": 55,
    "familiar": 111,
    "head": 133,
    "prop": 276,
    "rune": 294
  },
  {
    "idx": 2168,
    "name": "Enchanter Sondra from the Shadow",
    "background": 2,
    "body": 87,
    "familiar": 105,
    "head": 208,
    "prop": 273,
    "rune": 303
  },
  {
    "idx": 2169,
    "name": "Necromancer Morrow of the Cosmos",
    "background": 1,
    "body": 68,
    "familiar": 123,
    "head": 194,
    "prop": 254,
    "rune": 301
  },
  {
    "idx": 2170,
    "name": "Magus Carmilla of the Grotto",
    "background": 3,
    "body": 36,
    "familiar": 105,
    "head": 223,
    "prop": 255,
    "rune": 293
  },
  {
    "idx": 2171,
    "name": "Adept Dario of the Desert",
    "background": 1,
    "body": 60,
    "familiar": 7777,
    "head": 125,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 2172,
    "name": "Arch-Magician Nixie of the Moors",
    "background": 1,
    "body": 12,
    "familiar": 7777,
    "head": 171,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 2173,
    "name": "Hedge Wizard Ratko of the Circle",
    "background": 0,
    "body": 28,
    "familiar": 116,
    "head": 206,
    "prop": 265,
    "rune": 290
  },
  {
    "idx": 2174,
    "name": "Conjurer Cromwell of the Capital",
    "background": 2,
    "body": 48,
    "familiar": 123,
    "head": 203,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 2175,
    "name": "Medium Ali of the Citadel",
    "background": 0,
    "body": 40,
    "familiar": 94,
    "head": 164,
    "prop": 245,
    "rune": 285
  },
  {
    "idx": 2176,
    "name": "Archmagus Casper of the Hollow",
    "background": 1,
    "body": 12,
    "familiar": 119,
    "head": 185,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 2177,
    "name": "Archmagus Azahl of the Hills",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 233,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 2178,
    "name": "Sorcerer Ixar of El Dorado",
    "background": 0,
    "body": 26,
    "familiar": 7777,
    "head": 138,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 2179,
    "name": "Charmer Victoria of the Keep",
    "background": 0,
    "body": 77,
    "familiar": 119,
    "head": 131,
    "prop": 268,
    "rune": 284
  },
  {
    "idx": 2180,
    "name": "Shadow Mage Wolfram of the Riviera",
    "background": 0,
    "body": 18,
    "familiar": 94,
    "head": 218,
    "prop": 320,
    "rune": 304
  },
  {
    "idx": 2181,
    "name": "Artificer Damien of the Mist",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 207,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 2182,
    "name": "Mystic Lumos of the Ether",
    "background": 2,
    "body": 52,
    "familiar": 111,
    "head": 212,
    "prop": 326,
    "rune": 299
  },
  {
    "idx": 2183,
    "name": "Summoner Alvaro",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 125,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 2184,
    "name": "Cryptomancer Larissa of the Canyon",
    "background": 0,
    "body": 38,
    "familiar": 115,
    "head": 191,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2185,
    "name": "Artificer Pezo of the Oasis",
    "background": 0,
    "body": 60,
    "familiar": 123,
    "head": 171,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 2186,
    "name": "Battle Mage Thor of the Villa",
    "background": 1,
    "body": 74,
    "familiar": 104,
    "head": 165,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 2187,
    "name": "Witch Ivy of the Havens",
    "background": 0,
    "body": 7,
    "familiar": 94,
    "head": 159,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2188,
    "name": "Sorcerer Kazud",
    "background": 2,
    "body": 40,
    "familiar": 97,
    "head": 222,
    "prop": 266,
    "rune": 285
  },
  {
    "idx": 2189,
    "name": "Voodoo Priest Victor of the Capital",
    "background": 2,
    "body": 26,
    "familiar": 95,
    "head": 149,
    "prop": 258,
    "rune": 300
  },
  {
    "idx": 2190,
    "name": "Enchanter Moloch of the Desert",
    "background": 1,
    "body": 27,
    "familiar": 89,
    "head": 193,
    "prop": 316,
    "rune": 292
  },
  {
    "idx": 2191,
    "name": "Cartomancer Merlon of the Desert",
    "background": 2,
    "body": 61,
    "familiar": 95,
    "head": 147,
    "prop": 251,
    "rune": 7777
  },
  {
    "idx": 2192,
    "name": "Aeromancer Basil of the Palms",
    "background": 2,
    "body": 27,
    "familiar": 112,
    "head": 189,
    "prop": 315,
    "rune": 287
  },
  {
    "idx": 2193,
    "name": "Runecaster Gwendolin of the Desert",
    "background": 1,
    "body": 61,
    "familiar": 95,
    "head": 166,
    "prop": 323,
    "rune": 287
  },
  {
    "idx": 2194,
    "name": "Hydromancer Alizam of the Sea",
    "background": 3,
    "body": 57,
    "familiar": 95,
    "head": 237,
    "prop": 314,
    "rune": 283
  },
  {
    "idx": 2195,
    "name": "Arch-Magician Fabio of the Desert",
    "background": 2,
    "body": 5,
    "familiar": 113,
    "head": 201,
    "prop": 280,
    "rune": 304
  },
  {
    "idx": 2196,
    "name": "Enchanter  of the Gnostics",
    "background": 1,
    "body": 11,
    "familiar": 7777,
    "head": 153,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 2197,
    "name": "Adept Asphodel of the Forest",
    "background": 2,
    "body": 22,
    "familiar": 115,
    "head": 156,
    "prop": 322,
    "rune": 288
  },
  {
    "idx": 2198,
    "name": "Alchemist Aleister of the Mount",
    "background": 1,
    "body": 62,
    "familiar": 7777,
    "head": 227,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 2199,
    "name": "Pyromancer Uvlius of the Fey",
    "background": 1,
    "body": 30,
    "familiar": 7777,
    "head": 186,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2200,
    "name": "Geomancer Eden of the Moors",
    "background": 0,
    "body": 23,
    "familiar": 123,
    "head": 137,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2201,
    "name": "Magus Cosmo of the Villa",
    "background": 2,
    "body": 76,
    "familiar": 103,
    "head": 142,
    "prop": 254,
    "rune": 290
  },
  {
    "idx": 2202,
    "name": "Clairvoyant Nemo of the Psychic Leap",
    "background": 2,
    "body": 24,
    "familiar": 114,
    "head": 201,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 2203,
    "name": "Enchanter Aleister",
    "background": 1,
    "body": 65,
    "familiar": 90,
    "head": 212,
    "prop": 265,
    "rune": 282
  },
  {
    "idx": 2204,
    "name": "Ice Mage Milo of the Ice",
    "background": 2,
    "body": 73,
    "familiar": 108,
    "head": 127,
    "prop": 263,
    "rune": 283
  },
  {
    "idx": 2205,
    "name": "Arcanist Celah of the Realm",
    "background": 0,
    "body": 24,
    "familiar": 93,
    "head": 141,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 2206,
    "name": "Witch Juniper of the Capital",
    "background": 0,
    "body": 77,
    "familiar": 104,
    "head": 159,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 2207,
    "name": "Hedge Wizard Xiuying of the Marsh",
    "background": 0,
    "body": 22,
    "familiar": 7777,
    "head": 180,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 2208,
    "name": "Sorcerer Ifran of the Villa",
    "background": 0,
    "body": 26,
    "familiar": 93,
    "head": 219,
    "prop": 320,
    "rune": 297
  },
  {
    "idx": 2209,
    "name": "Electromancer Aden of the Wood",
    "background": 1,
    "body": 44,
    "familiar": 7777,
    "head": 207,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 2210,
    "name": "Sorcerer Hadrien of the Ether",
    "background": 3,
    "body": 10,
    "familiar": 117,
    "head": 212,
    "prop": 259,
    "rune": 293
  },
  {
    "idx": 2211,
    "name": "Charmer Daria of the Cosmos",
    "background": 1,
    "body": 11,
    "familiar": 7777,
    "head": 191,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 2212,
    "name": "Sage Devon of Avalon",
    "background": 1,
    "body": 54,
    "familiar": 105,
    "head": 208,
    "prop": 277,
    "rune": 282
  },
  {
    "idx": 2213,
    "name": "Battlemage Lux",
    "background": 0,
    "body": 11,
    "familiar": 114,
    "head": 232,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 2214,
    "name": "Druid Jadis of the Desert",
    "background": 2,
    "body": 27,
    "familiar": 101,
    "head": 208,
    "prop": 316,
    "rune": 299
  },
  {
    "idx": 2215,
    "name": "Chaos Mage Solomon of the Quantum Downs",
    "background": 2,
    "body": 67,
    "familiar": 97,
    "head": 226,
    "prop": 309,
    "rune": 284
  },
  {
    "idx": 2216,
    "name": "Cleric Samuel of the Sands",
    "background": 1,
    "body": 58,
    "familiar": 110,
    "head": 204,
    "prop": 328,
    "rune": 304
  },
  {
    "idx": 2217,
    "name": "Sorcerer Ozohr of the Court",
    "background": 3,
    "body": 26,
    "familiar": 104,
    "head": 229,
    "prop": 276,
    "rune": 304
  },
  {
    "idx": 2218,
    "name": "Cryptomancer Ozohr of the Plains",
    "background": 1,
    "body": 82,
    "familiar": 103,
    "head": 147,
    "prop": 339,
    "rune": 7777
  },
  {
    "idx": 2219,
    "name": "Artificer Ethan of the Field",
    "background": 2,
    "body": 41,
    "familiar": 116,
    "head": 165,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 2220,
    "name": "Magus Uday of Avalon",
    "background": 0,
    "body": 50,
    "familiar": 97,
    "head": 142,
    "prop": 261,
    "rune": 297
  },
  {
    "idx": 2221,
    "name": "Battle Mage Robert of the Woodlands",
    "background": 2,
    "body": 29,
    "familiar": 105,
    "head": 203,
    "prop": 306,
    "rune": 284
  },
  {
    "idx": 2222,
    "name": "Battle Mage Cromwell of the Gnostics",
    "background": 1,
    "body": 9,
    "familiar": 7777,
    "head": 203,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 2223,
    "name": "Artificer Jack of the Wood",
    "background": 1,
    "body": 41,
    "familiar": 115,
    "head": 172,
    "prop": 261,
    "rune": 282
  },
  {
    "idx": 2224,
    "name": "Archmagus Uvlius of the Veil",
    "background": 2,
    "body": 29,
    "familiar": 88,
    "head": 202,
    "prop": 248,
    "rune": 293
  },
  {
    "idx": 2225,
    "name": "Artificer Shivra of the Quantum Shadow",
    "background": 0,
    "body": 86,
    "familiar": 116,
    "head": 223,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 2226,
    "name": "Runecaster Solomon of the Gnostics",
    "background": 0,
    "body": 10,
    "familiar": 111,
    "head": 238,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 2227,
    "name": "Ghost Eater Sarah of the Marsh",
    "background": 0,
    "body": 45,
    "familiar": 112,
    "head": 198,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 2228,
    "name": "Magus Taqi of the Veil",
    "background": 0,
    "body": 10,
    "familiar": 93,
    "head": 164,
    "prop": 309,
    "rune": 287
  },
  {
    "idx": 2229,
    "name": "Hedge Wizard Astrid of the Valley",
    "background": 1,
    "body": 35,
    "familiar": 110,
    "head": 187,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 2230,
    "name": "Enchanter Pandora of the Road",
    "background": 0,
    "body": 39,
    "familiar": 117,
    "head": 135,
    "prop": 251,
    "rune": 297
  },
  {
    "idx": 2231,
    "name": "Mystic Cassius of the Forest",
    "background": 1,
    "body": 43,
    "familiar": 116,
    "head": 216,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 2232,
    "name": "Cleric Cassiopeia of the Toadstools",
    "background": 1,
    "body": 29,
    "familiar": 93,
    "head": 139,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 2233,
    "name": "Pyromancer Remus of the Woodlands",
    "background": 0,
    "body": 29,
    "familiar": 115,
    "head": 229,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2234,
    "name": "Arch-Magician Artis of the Platonic Shadow",
    "background": 1,
    "body": 24,
    "familiar": 103,
    "head": 187,
    "prop": 280,
    "rune": 304
  },
  {
    "idx": 2235,
    "name": "Battle Mage Goliath of the Light",
    "background": 0,
    "body": 10,
    "familiar": 7777,
    "head": 177,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 2236,
    "name": "Sorcerer Ramiz of the Astral Plane",
    "background": 0,
    "body": 52,
    "familiar": 110,
    "head": 142,
    "prop": 314,
    "rune": 303
  },
  {
    "idx": 2237,
    "name": "Chaos Mage Properpine of the Desert",
    "background": 3,
    "body": 5,
    "familiar": 114,
    "head": 209,
    "prop": 338,
    "rune": 283
  },
  {
    "idx": 2238,
    "name": "Sorcerer Soran of the Psychic Leap",
    "background": 0,
    "body": 9,
    "familiar": 7777,
    "head": 127,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2239,
    "name": "Hedge Wizard Eden of the Havens",
    "background": 0,
    "body": 11,
    "familiar": 119,
    "head": 232,
    "prop": 265,
    "rune": 297
  },
  {
    "idx": 2240,
    "name": "Hedge Wizard Rumpleskin",
    "background": 1,
    "body": 52,
    "familiar": 123,
    "head": 171,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 2241,
    "name": "Battle Mage Angus of Mu",
    "background": 1,
    "body": 75,
    "familiar": 114,
    "head": 203,
    "prop": 315,
    "rune": 284
  },
  {
    "idx": 2242,
    "name": "Archmagus Amir of the Oasis",
    "background": 0,
    "body": 60,
    "familiar": 109,
    "head": 141,
    "prop": 315,
    "rune": 298
  },
  {
    "idx": 2243,
    "name": "Shaman Sylvia of the Heath",
    "background": 1,
    "body": 37,
    "familiar": 103,
    "head": 155,
    "prop": 322,
    "rune": 296
  },
  {
    "idx": 2244,
    "name": "Charmer Sondra of the Plains",
    "background": 1,
    "body": 21,
    "familiar": 104,
    "head": 187,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 2245,
    "name": "Shaman Gaspard of the Hall",
    "background": 1,
    "body": 76,
    "familiar": 120,
    "head": 149,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 2246,
    "name": "Sorcerer Qasim of the Moors",
    "background": 1,
    "body": 13,
    "familiar": 119,
    "head": 222,
    "prop": 308,
    "rune": 292
  },
  {
    "idx": 2247,
    "name": "Sorcerer Isaac of the Oasis",
    "background": 0,
    "body": 61,
    "familiar": 103,
    "head": 189,
    "prop": 305,
    "rune": 296
  },
  {
    "idx": 2248,
    "name": "Electromancer Davos of the Desert",
    "background": 1,
    "body": 60,
    "familiar": 7777,
    "head": 147,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 2249,
    "name": "Alchemist Udor of Avalon",
    "background": 1,
    "body": 63,
    "familiar": 7777,
    "head": 230,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 2250,
    "name": "Cairon of the Tower",
    "background": 2,
    "body": 77,
    "familiar": 90,
    "head": 192,
    "prop": 310,
    "rune": 292
  },
  {
    "idx": 2251,
    "name": "Hedge Wizard Gourdon of the Bastion",
    "background": 2,
    "body": 18,
    "familiar": 89,
    "head": 172,
    "prop": 319,
    "rune": 298
  },
  {
    "idx": 2252,
    "name": "Archmagus Milton of the Plains",
    "background": 0,
    "body": 13,
    "familiar": 97,
    "head": 127,
    "prop": 307,
    "rune": 291
  },
  {
    "idx": 2253,
    "name": "Alchemist Lumos of the Road",
    "background": 2,
    "body": 13,
    "familiar": 95,
    "head": 230,
    "prop": 268,
    "rune": 287
  },
  {
    "idx": 2254,
    "name": "Druid Pan of the Lake",
    "background": 2,
    "body": 13,
    "familiar": 89,
    "head": 167,
    "prop": 276,
    "rune": 294
  },
  {
    "idx": 2255,
    "name": "Artificer Elvio of Dreams",
    "background": 0,
    "body": 7,
    "familiar": 101,
    "head": 201,
    "prop": 273,
    "rune": 296
  },
  {
    "idx": 2256,
    "name": "Augurer Duzzle of the Mist",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 200,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 2257,
    "name": "Sorcerer Oberon of the Steppe",
    "background": 1,
    "body": 45,
    "familiar": 111,
    "head": 186,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 2258,
    "name": "Oracle Fugh of the Citadel",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 171,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 2259,
    "name": "Runecaster Hagar of the Glacier",
    "background": 1,
    "body": 65,
    "familiar": 95,
    "head": 203,
    "prop": 256,
    "rune": 293
  },
  {
    "idx": 2260,
    "name": "Hedge Wizard Lucinda of the Mount",
    "background": 1,
    "body": 63,
    "familiar": 105,
    "head": 223,
    "prop": 326,
    "rune": 299
  },
  {
    "idx": 2261,
    "name": "Necromancer Crackerjack of the Platonic Shadow",
    "background": 0,
    "body": 8,
    "familiar": 96,
    "head": 144,
    "prop": 274,
    "rune": 294
  },
  {
    "idx": 2262,
    "name": "Runecaster Ozohr of Limbo",
    "background": 1,
    "body": 85,
    "familiar": 114,
    "head": 186,
    "prop": 323,
    "rune": 304
  },
  {
    "idx": 2263,
    "name": "Witch Juniper of the Oasis",
    "background": 0,
    "body": 27,
    "familiar": 7777,
    "head": 155,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2264,
    "name": "Enchanter Atlanta of the Hills",
    "background": 2,
    "body": 22,
    "familiar": 101,
    "head": 156,
    "prop": 252,
    "rune": 284
  },
  {
    "idx": 2265,
    "name": "Aeromancer Cassius of the Tower",
    "background": 0,
    "body": 54,
    "familiar": 112,
    "head": 133,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 2266,
    "name": "Enchanter Merlon of the Brambles",
    "background": 0,
    "body": 19,
    "familiar": 104,
    "head": 192,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 2267,
    "name": "Sky Master JackDaw of Mu",
    "background": 2,
    "body": 52,
    "familiar": 105,
    "head": 144,
    "prop": 245,
    "rune": 300
  },
  {
    "idx": 2268,
    "name": "Hedge Wizard Aleister of the Cosmos",
    "background": 1,
    "body": 9,
    "familiar": 104,
    "head": 138,
    "prop": 312,
    "rune": 294
  },
  {
    "idx": 2269,
    "name": "Thaumaturge Rita of the Canyon",
    "background": 2,
    "body": 39,
    "familiar": 88,
    "head": 166,
    "prop": 338,
    "rune": 284
  },
  {
    "idx": 2270,
    "name": "Enchanter Jadis of the Riviera",
    "background": 3,
    "body": 35,
    "familiar": 103,
    "head": 135,
    "prop": 329,
    "rune": 285
  },
  {
    "idx": 2271,
    "name": "Magus Requiem of the Keep",
    "background": 1,
    "body": 26,
    "familiar": 114,
    "head": 149,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 2272,
    "name": "Diabolist Zhan of the Wild",
    "background": 0,
    "body": 36,
    "familiar": 105,
    "head": 180,
    "prop": 310,
    "rune": 288
  },
  {
    "idx": 2273,
    "name": "Arch-Magician Borak of the Desert",
    "background": 3,
    "body": 59,
    "familiar": 106,
    "head": 173,
    "prop": 253,
    "rune": 301
  },
  {
    "idx": 2274,
    "name": "Artificer Flynn of the Wild",
    "background": 3,
    "body": 15,
    "familiar": 99,
    "head": 217,
    "prop": 261,
    "rune": 293
  },
  {
    "idx": 2275,
    "name": "Hedge Wizard Chiyo of the Moors",
    "background": 0,
    "body": 38,
    "familiar": 89,
    "head": 126,
    "prop": 273,
    "rune": 299
  },
  {
    "idx": 2276,
    "name": "Archmagus Davos of the Keep",
    "background": 0,
    "body": 62,
    "familiar": 103,
    "head": 127,
    "prop": 261,
    "rune": 293
  },
  {
    "idx": 2277,
    "name": "Druid Chooki of the Dunes",
    "background": 0,
    "body": 58,
    "familiar": 94,
    "head": 219,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 2278,
    "name": "Archmagus Uur'lok of the Woodlands",
    "background": 1,
    "body": 30,
    "familiar": 7777,
    "head": 235,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 2279,
    "name": "Archmagus Eden of the Moors",
    "background": 1,
    "body": 23,
    "familiar": 112,
    "head": 162,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 2280,
    "name": "Sorcerer Casper of Arcadia",
    "background": 0,
    "body": 43,
    "familiar": 95,
    "head": 141,
    "prop": 248,
    "rune": 290
  },
  {
    "idx": 2281,
    "name": "Casper of the Canyon",
    "background": 2,
    "body": 44,
    "familiar": 105,
    "head": 231,
    "prop": 273,
    "rune": 7777
  },
  {
    "idx": 2282,
    "name": "Hedge Wizard Homer of the Wood",
    "background": 2,
    "body": 82,
    "familiar": 119,
    "head": 173,
    "prop": 273,
    "rune": 299
  },
  {
    "idx": 2283,
    "name": "Artificer Danny of Avalon",
    "background": 3,
    "body": 49,
    "familiar": 111,
    "head": 165,
    "prop": 340,
    "rune": 283
  },
  {
    "idx": 2284,
    "name": "Shaman Iris of the Mountain",
    "background": 1,
    "body": 35,
    "familiar": 114,
    "head": 132,
    "prop": 323,
    "rune": 302
  },
  {
    "idx": 2285,
    "name": "Archmagus Aleister of the Event Horizon",
    "background": 1,
    "body": 10,
    "familiar": 111,
    "head": 228,
    "prop": 321,
    "rune": 282
  },
  {
    "idx": 2286,
    "name": "Shaman Ulysse of Arcadia",
    "background": 1,
    "body": 14,
    "familiar": 89,
    "head": 206,
    "prop": 317,
    "rune": 290
  },
  {
    "idx": 2287,
    "name": "Hedge Wizard Hind of the Veil",
    "background": 0,
    "body": 75,
    "familiar": 104,
    "head": 167,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 2288,
    "name": "Shaman Evangeline of the Moors",
    "background": 1,
    "body": 17,
    "familiar": 94,
    "head": 159,
    "prop": 264,
    "rune": 300
  },
  {
    "idx": 2289,
    "name": "Davos of the Cold",
    "background": 0,
    "body": 65,
    "familiar": 112,
    "head": 147,
    "prop": 277,
    "rune": 302
  },
  {
    "idx": 2290,
    "name": "Sorcerer Feng of the Desert",
    "background": 0,
    "body": 5,
    "familiar": 110,
    "head": 236,
    "prop": 248,
    "rune": 288
  },
  {
    "idx": 2291,
    "name": "Artificer Dante of the Dunes",
    "background": 0,
    "body": 60,
    "familiar": 116,
    "head": 129,
    "prop": 256,
    "rune": 290
  },
  {
    "idx": 2292,
    "name": "Arch-Magician Otto of the Great Blue",
    "background": 3,
    "body": 80,
    "familiar": 88,
    "head": 203,
    "prop": 258,
    "rune": 291
  },
  {
    "idx": 2293,
    "name": "Iprix of the Loch",
    "background": 2,
    "body": 57,
    "familiar": 114,
    "head": 232,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 2294,
    "name": "Charmer Arabella of the Sun",
    "background": 0,
    "body": 27,
    "familiar": 89,
    "head": 132,
    "prop": 319,
    "rune": 290
  },
  {
    "idx": 2295,
    "name": "Alchemist Zelda",
    "background": 0,
    "body": 67,
    "familiar": 119,
    "head": 159,
    "prop": 268,
    "rune": 304
  },
  {
    "idx": 2296,
    "name": "Adept Zelroth of the Gnostics",
    "background": 1,
    "body": 75,
    "familiar": 114,
    "head": 186,
    "prop": 338,
    "rune": 303
  },
  {
    "idx": 2297,
    "name": "Cryptomancer Cairon of the Quantum Shadow",
    "background": 3,
    "body": 85,
    "familiar": 104,
    "head": 211,
    "prop": 335,
    "rune": 283
  },
  {
    "idx": 2298,
    "name": "Enchanter Devon of the Wood",
    "background": 1,
    "body": 21,
    "familiar": 108,
    "head": 198,
    "prop": 323,
    "rune": 291
  },
  {
    "idx": 2299,
    "name": "Magus Atlanta of the Grotto",
    "background": 2,
    "body": 31,
    "familiar": 105,
    "head": 208,
    "prop": 263,
    "rune": 303
  },
  {
    "idx": 2300,
    "name": "Wild Mage Dante of the Dunes",
    "background": 0,
    "body": 58,
    "familiar": 89,
    "head": 165,
    "prop": 340,
    "rune": 296
  },
  {
    "idx": 2301,
    "name": "Archmagus Alatar of the Marsh",
    "background": 3,
    "body": 82,
    "familiar": 99,
    "head": 197,
    "prop": 316,
    "rune": 302
  },
  {
    "idx": 2302,
    "name": "Sage Cedric of the Moors",
    "background": 2,
    "body": 41,
    "familiar": 114,
    "head": 207,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 2303,
    "name": "Sage Drusilla of the Reach",
    "background": 0,
    "body": 32,
    "familiar": 93,
    "head": 176,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 2304,
    "name": "Alchemist Gary of Avalon",
    "background": 0,
    "body": 62,
    "familiar": 119,
    "head": 217,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 2305,
    "name": "Enchanter Larissa of the Quantum Downs",
    "background": 2,
    "body": 68,
    "familiar": 93,
    "head": 130,
    "prop": 260,
    "rune": 297
  },
  {
    "idx": 2306,
    "name": "Hedge Wizard Jig of the Sands",
    "background": 2,
    "body": 5,
    "familiar": 123,
    "head": 171,
    "prop": 253,
    "rune": 300
  },
  {
    "idx": 2307,
    "name": "Charmer Beyna of the Forest",
    "background": 2,
    "body": 84,
    "familiar": 105,
    "head": 191,
    "prop": 255,
    "rune": 285
  },
  {
    "idx": 2308,
    "name": "Hedge Wizard Moloch of Atlantis",
    "background": 3,
    "body": 57,
    "familiar": 115,
    "head": 193,
    "prop": 266,
    "rune": 299
  },
  {
    "idx": 2309,
    "name": "Sage Carly of the Lake",
    "background": 1,
    "body": 82,
    "familiar": 101,
    "head": 132,
    "prop": 326,
    "rune": 301
  },
  {
    "idx": 2310,
    "name": "Enchanter Sondra of the Field",
    "background": 1,
    "body": 21,
    "familiar": 97,
    "head": 135,
    "prop": 250,
    "rune": 287
  },
  {
    "idx": 2311,
    "name": "Geomancer Aslan of the Brine",
    "background": 3,
    "body": 57,
    "familiar": 111,
    "head": 165,
    "prop": 308,
    "rune": 300
  },
  {
    "idx": 2312,
    "name": "Null Mage Lucifer of the Hall",
    "background": 3,
    "body": 40,
    "familiar": 97,
    "head": 136,
    "prop": 334,
    "rune": 284
  },
  {
    "idx": 2313,
    "name": "Archmagus Ofaris of Arcadia",
    "background": 0,
    "body": 41,
    "familiar": 110,
    "head": 225,
    "prop": 323,
    "rune": 292
  },
  {
    "idx": 2314,
    "name": "Archmagus Chu Hua of the Hollow",
    "background": 1,
    "body": 35,
    "familiar": 109,
    "head": 180,
    "prop": 322,
    "rune": 289
  },
  {
    "idx": 2315,
    "name": "Sorcerer Basil of the Light",
    "background": 2,
    "body": 11,
    "familiar": 97,
    "head": 160,
    "prop": 249,
    "rune": 293
  },
  {
    "idx": 2316,
    "name": "Arcanist Dante of the Oasis",
    "background": 3,
    "body": 60,
    "familiar": 111,
    "head": 165,
    "prop": 306,
    "rune": 283
  },
  {
    "idx": 2317,
    "name": "Chaos Mage Aiko of the Marsh",
    "background": 3,
    "body": 35,
    "familiar": 88,
    "head": 126,
    "prop": 339,
    "rune": 288
  },
  {
    "idx": 2318,
    "name": "Cryptomancer Ambrosia of the Hills",
    "background": 3,
    "body": 33,
    "familiar": 101,
    "head": 223,
    "prop": 309,
    "rune": 7777
  },
  {
    "idx": 2319,
    "name": "Witch Marceline of the Capital",
    "background": 3,
    "body": 18,
    "familiar": 108,
    "head": 159,
    "prop": 281,
    "rune": 302
  },
  {
    "idx": 2320,
    "name": "Shaman Flynn of the Steppe",
    "background": 0,
    "body": 84,
    "familiar": 89,
    "head": 188,
    "prop": 340,
    "rune": 296
  },
  {
    "idx": 2321,
    "name": "Sorcerer Jahid of the Steppe",
    "background": 3,
    "body": 81,
    "familiar": 88,
    "head": 146,
    "prop": 258,
    "rune": 288
  },
  {
    "idx": 2322,
    "name": "Alchemist Oberon of the Rock",
    "background": 0,
    "body": 60,
    "familiar": 114,
    "head": 202,
    "prop": 325,
    "rune": 296
  },
  {
    "idx": 2323,
    "name": "Ghost Eater Cairon of the Palms",
    "background": 2,
    "body": 5,
    "familiar": 114,
    "head": 212,
    "prop": 254,
    "rune": 297
  },
  {
    "idx": 2324,
    "name": "Diviner Requiem of El Dorado",
    "background": 1,
    "body": 26,
    "familiar": 94,
    "head": 149,
    "prop": 251,
    "rune": 292
  },
  {
    "idx": 2325,
    "name": "Diviner Larissa of the Canyon",
    "background": 3,
    "body": 39,
    "familiar": 93,
    "head": 208,
    "prop": 251,
    "rune": 304
  },
  {
    "idx": 2326,
    "name": "Arch-Magician Nicolas of the Secret Fire",
    "background": 3,
    "body": 83,
    "familiar": 115,
    "head": 188,
    "prop": 335,
    "rune": 291
  },
  {
    "idx": 2327,
    "name": "Runecaster Rita of the Realm",
    "background": 1,
    "body": 75,
    "familiar": 110,
    "head": 209,
    "prop": 249,
    "rune": 294
  },
  {
    "idx": 2328,
    "name": "Witch Rowena of the Reach",
    "background": 3,
    "body": 41,
    "familiar": 114,
    "head": 209,
    "prop": 338,
    "rune": 299
  },
  {
    "idx": 2329,
    "name": "Shaman Angus of the Carnival",
    "background": 2,
    "body": 30,
    "familiar": 94,
    "head": 129,
    "prop": 265,
    "rune": 290
  },
  {
    "idx": 2330,
    "name": "Archmagus Milo of the Sun",
    "background": 0,
    "body": 27,
    "familiar": 89,
    "head": 228,
    "prop": 276,
    "rune": 285
  },
  {
    "idx": 2331,
    "name": "Diabolist Titania of the Valley",
    "background": 2,
    "body": 50,
    "familiar": 123,
    "head": 208,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 2332,
    "name": "Archmagus Ronald of the Sun",
    "background": 0,
    "body": 27,
    "familiar": 89,
    "head": 125,
    "prop": 329,
    "rune": 302
  },
  {
    "idx": 2333,
    "name": "Battle Mage Nolan of the Moors",
    "background": 0,
    "body": 43,
    "familiar": 99,
    "head": 165,
    "prop": 312,
    "rune": 285
  },
  {
    "idx": 2334,
    "name": "Sorcerer Jeldor of the Desert",
    "background": 2,
    "body": 61,
    "familiar": 95,
    "head": 189,
    "prop": 248,
    "rune": 299
  },
  {
    "idx": 2335,
    "name": "Enchanter Lumos of the Court",
    "background": 0,
    "body": 78,
    "familiar": 95,
    "head": 226,
    "prop": 311,
    "rune": 298
  },
  {
    "idx": 2336,
    "name": "Archmagus Oberon of the Surf",
    "background": 0,
    "body": 80,
    "familiar": 93,
    "head": 137,
    "prop": 278,
    "rune": 296
  },
  {
    "idx": 2337,
    "name": "Adept Sondra of the Villa",
    "background": 0,
    "body": 77,
    "familiar": 103,
    "head": 131,
    "prop": 328,
    "rune": 286
  },
  {
    "idx": 2338,
    "name": "Archmagus Isaac of the Wold",
    "background": 2,
    "body": 14,
    "familiar": 96,
    "head": 160,
    "prop": 274,
    "rune": 302
  },
  {
    "idx": 2339,
    "name": "Uvlius of the Mount",
    "background": 0,
    "body": 50,
    "familiar": 110,
    "head": 231,
    "prop": 262,
    "rune": 303
  },
  {
    "idx": 2340,
    "name": "Archmagus Amir of the Capital",
    "background": 2,
    "body": 40,
    "familiar": 112,
    "head": 153,
    "prop": 280,
    "rune": 290
  },
  {
    "idx": 2341,
    "name": "Void Disciple Arcus of the Veil",
    "background": 1,
    "body": 8,
    "familiar": 105,
    "head": 194,
    "prop": 245,
    "rune": 300
  },
  {
    "idx": 2342,
    "name": "Magus Nassif of the Thorn",
    "background": 0,
    "body": 28,
    "familiar": 111,
    "head": 142,
    "prop": 253,
    "rune": 284
  },
  {
    "idx": 2343,
    "name": "Hex Mage Zagan of the Quantum Downs",
    "background": 1,
    "body": 67,
    "familiar": 97,
    "head": 242,
    "prop": 309,
    "rune": 284
  },
  {
    "idx": 2344,
    "name": "Ghost Eater Gino of the Woodlands",
    "background": 2,
    "body": 28,
    "familiar": 108,
    "head": 201,
    "prop": 254,
    "rune": 284
  },
  {
    "idx": 2345,
    "name": "Ice Mage Soya of the Crag",
    "background": 2,
    "body": 73,
    "familiar": 122,
    "head": 141,
    "prop": 269,
    "rune": 294
  },
  {
    "idx": 2346,
    "name": "Chronomancer Lumos of the Woodlands",
    "background": 0,
    "body": 30,
    "familiar": 90,
    "head": 227,
    "prop": 259,
    "rune": 288
  },
  {
    "idx": 2347,
    "name": "Archmagus Solomon of Elysium",
    "background": 0,
    "body": 7,
    "familiar": 120,
    "head": 127,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 2348,
    "name": "Medium Stefan of the Hall",
    "background": 0,
    "body": 77,
    "familiar": 95,
    "head": 152,
    "prop": 251,
    "rune": 289
  },
  {
    "idx": 2349,
    "name": "Archmagus Davos of the Moors",
    "background": 3,
    "body": 43,
    "familiar": 109,
    "head": 147,
    "prop": 319,
    "rune": 294
  },
  {
    "idx": 2350,
    "name": "Cleric Silas of the Veil",
    "background": 1,
    "body": 28,
    "familiar": 120,
    "head": 229,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 2351,
    "name": "Magus Lux of the Keep",
    "background": 0,
    "body": 26,
    "familiar": 101,
    "head": 189,
    "prop": 263,
    "rune": 288
  },
  {
    "idx": 2352,
    "name": "Druid Ixar from the Abyss",
    "background": 1,
    "body": 85,
    "familiar": 114,
    "head": 127,
    "prop": 326,
    "rune": 282
  },
  {
    "idx": 2353,
    "name": "Battle Mage Talbot of the Tower",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 188,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 2354,
    "name": "Magus Hobbs of the Citadel",
    "background": 1,
    "body": 40,
    "familiar": 7777,
    "head": 178,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 2355,
    "name": "Druid Aslan of the Villa",
    "background": 0,
    "body": 46,
    "familiar": 109,
    "head": 217,
    "prop": 264,
    "rune": 284
  },
  {
    "idx": 2356,
    "name": "Hedge Wizard Daria of the Mist",
    "background": 2,
    "body": 62,
    "familiar": 115,
    "head": 190,
    "prop": 276,
    "rune": 292
  },
  {
    "idx": 2357,
    "name": "Magus Lilith of the Wild",
    "background": 2,
    "body": 36,
    "familiar": 105,
    "head": 155,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 2358,
    "name": "Shadow Mage Kalo of the Toadstools",
    "background": 2,
    "body": 29,
    "familiar": 108,
    "head": 235,
    "prop": 320,
    "rune": 288
  },
  {
    "idx": 2359,
    "name": "Alchemist Suki of Dreams",
    "background": 1,
    "body": 49,
    "familiar": 7777,
    "head": 171,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 2360,
    "name": "Illusionist Behemoth of the Oasis",
    "background": 2,
    "body": 27,
    "familiar": 89,
    "head": 193,
    "prop": 306,
    "rune": 300
  },
  {
    "idx": 2361,
    "name": "Geomancer Rowena of the Ether",
    "background": 2,
    "body": 68,
    "familiar": 116,
    "head": 155,
    "prop": 308,
    "rune": 287
  },
  {
    "idx": 2362,
    "name": "Arch-Magician Ilu of the Hollow",
    "background": 3,
    "body": 23,
    "familiar": 90,
    "head": 170,
    "prop": 335,
    "rune": 292
  },
  {
    "idx": 2363,
    "name": "Bard Aldo of the Rock",
    "background": 0,
    "body": 59,
    "familiar": 96,
    "head": 125,
    "prop": 257,
    "rune": 283
  },
  {
    "idx": 2364,
    "name": "Bard Iprix of the Bibliotheca",
    "background": 2,
    "body": 55,
    "familiar": 117,
    "head": 162,
    "prop": 247,
    "rune": 304
  },
  {
    "idx": 2365,
    "name": "Electromancer Darick of the Tower",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 182,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 2366,
    "name": "Archmagus Ozohr of the Forest",
    "background": 1,
    "body": 19,
    "familiar": 103,
    "head": 137,
    "prop": 338,
    "rune": 282
  },
  {
    "idx": 2367,
    "name": "Arch-Magician Hishoken of the Hall",
    "background": 0,
    "body": 77,
    "familiar": 103,
    "head": 243,
    "prop": 306,
    "rune": 292
  },
  {
    "idx": 2368,
    "name": "Sorcerer Wazir of the Wood",
    "background": 2,
    "body": 13,
    "familiar": 88,
    "head": 128,
    "prop": 258,
    "rune": 300
  },
  {
    "idx": 2369,
    "name": "Archmagus Soran of the Mist",
    "background": 2,
    "body": 54,
    "familiar": 90,
    "head": 162,
    "prop": 247,
    "rune": 293
  },
  {
    "idx": 2370,
    "name": "Geomancer Toadstool of Avalon",
    "background": 2,
    "body": 50,
    "familiar": 89,
    "head": 195,
    "prop": 308,
    "rune": 290
  },
  {
    "idx": 2371,
    "name": "Necromancer Scratch of the Gnostics",
    "background": 0,
    "body": 52,
    "familiar": 96,
    "head": 136,
    "prop": 307,
    "rune": 295
  },
  {
    "idx": 2372,
    "name": "Adept Voidoth of the Event Horizon",
    "background": 2,
    "body": 68,
    "familiar": 93,
    "head": 240,
    "prop": 332,
    "rune": 282
  },
  {
    "idx": 2373,
    "name": "Archmagus Zaros of the North",
    "background": 3,
    "body": 73,
    "familiar": 103,
    "head": 228,
    "prop": 331,
    "rune": 301
  },
  {
    "idx": 2374,
    "name": "Arcanist Galatea of the Field",
    "background": 2,
    "body": 35,
    "familiar": 104,
    "head": 191,
    "prop": 332,
    "rune": 283
  },
  {
    "idx": 2375,
    "name": "Archmagus Alatar of the Fey",
    "background": 0,
    "body": 29,
    "familiar": 114,
    "head": 231,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 2376,
    "name": "Enchanter Daphne of the Moors",
    "background": 0,
    "body": 35,
    "familiar": 110,
    "head": 187,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 2377,
    "name": "Archmagus Aldus of the Carnival",
    "background": 0,
    "body": 30,
    "familiar": 93,
    "head": 160,
    "prop": 280,
    "rune": 293
  },
  {
    "idx": 2378,
    "name": "Chaos Mage Azahl of the Hills",
    "background": 2,
    "body": 17,
    "familiar": 105,
    "head": 189,
    "prop": 339,
    "rune": 302
  },
  {
    "idx": 2379,
    "name": "Shaman Darick of the Dunes",
    "background": 2,
    "body": 58,
    "familiar": 111,
    "head": 204,
    "prop": 340,
    "rune": 304
  },
  {
    "idx": 2380,
    "name": "Larissa of the Mountain",
    "background": 2,
    "body": 34,
    "familiar": 120,
    "head": 131,
    "prop": 271,
    "rune": 287
  },
  {
    "idx": 2381,
    "name": "Cleric Tundror of the Keep",
    "background": 2,
    "body": 74,
    "familiar": 109,
    "head": 220,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 2382,
    "name": "Sage Lenora of the Hills",
    "background": 0,
    "body": 39,
    "familiar": 88,
    "head": 159,
    "prop": 252,
    "rune": 291
  },
  {
    "idx": 2383,
    "name": "Archmagus Lux of the Bibliotheca",
    "background": 3,
    "body": 6,
    "familiar": 110,
    "head": 227,
    "prop": 315,
    "rune": 302
  },
  {
    "idx": 2384,
    "name": "Alchemist Hadrien of the Brambles",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 230,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 2385,
    "name": "Archmagus Alessar of the Plains",
    "background": 3,
    "body": 79,
    "familiar": 97,
    "head": 230,
    "prop": 246,
    "rune": 304
  },
  {
    "idx": 2386,
    "name": "Magus Zevi of the Moors",
    "background": 0,
    "body": 42,
    "familiar": 97,
    "head": 167,
    "prop": 325,
    "rune": 296
  },
  {
    "idx": 2387,
    "name": "Alchemist Cassiopeia of the Veil",
    "background": 0,
    "body": 28,
    "familiar": 93,
    "head": 139,
    "prop": 267,
    "rune": 287
  },
  {
    "idx": 2388,
    "name": "Alessar of the Cosmos",
    "background": 2,
    "body": 68,
    "familiar": 117,
    "head": 212,
    "prop": 249,
    "rune": 303
  },
  {
    "idx": 2389,
    "name": "Druid Azahl of the Havens",
    "background": 3,
    "body": 68,
    "familiar": 96,
    "head": 230,
    "prop": 322,
    "rune": 290
  },
  {
    "idx": 2390,
    "name": "Charmer Beyna of the Forest",
    "background": 1,
    "body": 15,
    "familiar": 115,
    "head": 190,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 2391,
    "name": "Geomancer Huizhong of the Lake",
    "background": 0,
    "body": 41,
    "familiar": 112,
    "head": 236,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 2392,
    "name": "Sorcerer Zane of the Atheneum",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 199,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 2393,
    "name": "Arcanist Ariadne of the Desert",
    "background": 2,
    "body": 61,
    "familiar": 88,
    "head": 187,
    "prop": 332,
    "rune": 304
  },
  {
    "idx": 2394,
    "name": "Battle Mage Malthus of the Mount",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 204,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 2395,
    "name": "Artificer Aldo of the Valley",
    "background": 2,
    "body": 18,
    "familiar": 108,
    "head": 150,
    "prop": 261,
    "rune": 284
  },
  {
    "idx": 2396,
    "name": "Arch-Magician Ratko of the Keep",
    "background": 0,
    "body": 76,
    "familiar": 103,
    "head": 206,
    "prop": 323,
    "rune": 285
  },
  {
    "idx": 2397,
    "name": "Battle Mage Tundror of the Wood",
    "background": 2,
    "body": 43,
    "familiar": 107,
    "head": 213,
    "prop": 317,
    "rune": 299
  },
  {
    "idx": 2398,
    "name": "Lux of the Valley",
    "background": 0,
    "body": 7,
    "familiar": 97,
    "head": 215,
    "prop": 246,
    "rune": 288
  },
  {
    "idx": 2399,
    "name": "Archmagus Aleister from the Abyss",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 202,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 2400,
    "name": "Crowley of Avalon",
    "background": 1,
    "body": 49,
    "familiar": 120,
    "head": 215,
    "prop": 326,
    "rune": 291
  },
  {
    "idx": 2401,
    "name": "Hedge Wizard Blaise of the Plains",
    "background": 0,
    "body": 84,
    "familiar": 99,
    "head": 204,
    "prop": 276,
    "rune": 294
  },
  {
    "idx": 2402,
    "name": "Pyromancer Artis of the Rock",
    "background": 0,
    "body": 27,
    "familiar": 105,
    "head": 156,
    "prop": 277,
    "rune": 304
  },
  {
    "idx": 2403,
    "name": "Enchanter Hothor of the Steppe",
    "background": 3,
    "body": 43,
    "familiar": 99,
    "head": 129,
    "prop": 265,
    "rune": 292
  },
  {
    "idx": 2404,
    "name": "Archmagus Celeste of the Road",
    "background": 2,
    "body": 38,
    "familiar": 101,
    "head": 131,
    "prop": 326,
    "rune": 301
  },
  {
    "idx": 2405,
    "name": "Enchanter Arabella of the Wild",
    "background": 1,
    "body": 31,
    "familiar": 93,
    "head": 130,
    "prop": 274,
    "rune": 287
  },
  {
    "idx": 2406,
    "name": "Sage Shigenjo of the Heath",
    "background": 1,
    "body": 14,
    "familiar": 117,
    "head": 243,
    "prop": 245,
    "rune": 298
  },
  {
    "idx": 2407,
    "name": "Medium George of the Psychic Leap",
    "background": 2,
    "body": 8,
    "familiar": 112,
    "head": 212,
    "prop": 252,
    "rune": 297
  },
  {
    "idx": 2408,
    "name": "Sorcerer Jahid of the Brine",
    "background": 1,
    "body": 57,
    "familiar": 7777,
    "head": 128,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2409,
    "name": "Solar Mage Aiko of the Tower",
    "background": 0,
    "body": 55,
    "familiar": 105,
    "head": 126,
    "prop": 309,
    "rune": 291
  },
  {
    "idx": 2410,
    "name": "Archmagus Uvlius of the Hollow",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 238,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 2411,
    "name": "Witch Liliana of the Wild",
    "background": 2,
    "body": 39,
    "familiar": 94,
    "head": 166,
    "prop": 325,
    "rune": 290
  },
  {
    "idx": 2412,
    "name": "Alchemist Xue of the Lake",
    "background": 1,
    "body": 37,
    "familiar": 7777,
    "head": 180,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 2413,
    "name": "Enchanter Marceau of the Bastion",
    "background": 0,
    "body": 26,
    "familiar": 95,
    "head": 149,
    "prop": 249,
    "rune": 299
  },
  {
    "idx": 2414,
    "name": "Artificer Lumos",
    "background": 0,
    "body": 48,
    "familiar": 116,
    "head": 228,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 2415,
    "name": "Archmagus  of the Valley",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 150,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 2416,
    "name": "Null Mage Salah of the Rock",
    "background": 2,
    "body": 60,
    "familiar": 94,
    "head": 237,
    "prop": 334,
    "rune": 284
  },
  {
    "idx": 2417,
    "name": "Geomancer Auguste of the Sun",
    "background": 2,
    "body": 58,
    "familiar": 97,
    "head": 179,
    "prop": 308,
    "rune": 296
  },
  {
    "idx": 2418,
    "name": "Diana of the Steppe",
    "background": 2,
    "body": 36,
    "familiar": 119,
    "head": 131,
    "prop": 268,
    "rune": 287
  },
  {
    "idx": 2419,
    "name": "Battle Mage Ethan of the Keep",
    "background": 1,
    "body": 20,
    "familiar": 109,
    "head": 217,
    "prop": 245,
    "rune": 304
  },
  {
    "idx": 2420,
    "name": "Ghost Eater Sonja of the Field",
    "background": 2,
    "body": 34,
    "familiar": 93,
    "head": 139,
    "prop": 332,
    "rune": 282
  },
  {
    "idx": 2421,
    "name": "Cosmic Mage Gwendolin of the Tower",
    "background": 0,
    "body": 49,
    "familiar": 105,
    "head": 166,
    "prop": 310,
    "rune": 291
  },
  {
    "idx": 2422,
    "name": "Alchemist Aden of Avalon",
    "background": 2,
    "body": 50,
    "familiar": 116,
    "head": 125,
    "prop": 269,
    "rune": 302
  },
  {
    "idx": 2423,
    "name": "Void Disciple Malcom of the Atheneum",
    "background": 1,
    "body": 50,
    "familiar": 104,
    "head": 242,
    "prop": 275,
    "rune": 297
  },
  {
    "idx": 2424,
    "name": "Diviner Enigma of the Sea",
    "background": 2,
    "body": 57,
    "familiar": 103,
    "head": 166,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 2425,
    "name": "Sage Carly of the Capital",
    "background": 3,
    "body": 48,
    "familiar": 115,
    "head": 191,
    "prop": 332,
    "rune": 290
  },
  {
    "idx": 2426,
    "name": "Sage Florah of the Hills",
    "background": 2,
    "body": 38,
    "familiar": 120,
    "head": 209,
    "prop": 275,
    "rune": 282
  },
  {
    "idx": 2427,
    "name": "Clairvoyant  of the Brine",
    "background": 1,
    "body": 57,
    "familiar": 110,
    "head": 195,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 2428,
    "name": "Hedge Wizard Aslan of the Sands",
    "background": 1,
    "body": 58,
    "familiar": 111,
    "head": 173,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 2429,
    "name": "Shadow Mage Angus of the Marsh",
    "background": 1,
    "body": 20,
    "familiar": 111,
    "head": 173,
    "prop": 248,
    "rune": 289
  },
  {
    "idx": 2430,
    "name": "Geomancer Aslan of the Mist",
    "background": 3,
    "body": 49,
    "familiar": 89,
    "head": 133,
    "prop": 308,
    "rune": 288
  },
  {
    "idx": 2431,
    "name": "Archmagus Milton of the Light",
    "background": 2,
    "body": 52,
    "familiar": 95,
    "head": 211,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 2432,
    "name": "Battle Mage Cromwell of the Palms",
    "background": 0,
    "body": 58,
    "familiar": 94,
    "head": 177,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 2433,
    "name": "Alchemist Alizam of the Rock",
    "background": 1,
    "body": 61,
    "familiar": 119,
    "head": 164,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 2434,
    "name": "Sage Thor of the Sun",
    "background": 1,
    "body": 58,
    "familiar": 111,
    "head": 177,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 2435,
    "name": "Battle Mage Gunthor of the Mount",
    "background": 3,
    "body": 49,
    "familiar": 89,
    "head": 173,
    "prop": 308,
    "rune": 300
  },
  {
    "idx": 2436,
    "name": "Cryptomancer Artis of the Mount",
    "background": 0,
    "body": 6,
    "familiar": 107,
    "head": 139,
    "prop": 313,
    "rune": 299
  },
  {
    "idx": 2437,
    "name": "Alchemist Rita of the Road",
    "background": 0,
    "body": 39,
    "familiar": 93,
    "head": 155,
    "prop": 270,
    "rune": 304
  },
  {
    "idx": 2438,
    "name": "Conjurer Ambrosia of the Plains",
    "background": 3,
    "body": 38,
    "familiar": 101,
    "head": 209,
    "prop": 246,
    "rune": 297
  },
  {
    "idx": 2439,
    "name": "Archmagus Hadrien of the Forest",
    "background": 2,
    "body": 44,
    "familiar": 107,
    "head": 238,
    "prop": 309,
    "rune": 297
  },
  {
    "idx": 2440,
    "name": "Arcanist Hothor of Arcadia",
    "background": 0,
    "body": 15,
    "familiar": 105,
    "head": 203,
    "prop": 313,
    "rune": 300
  },
  {
    "idx": 2441,
    "name": "Ice Mage Orpheus of the Ice",
    "background": 1,
    "body": 73,
    "familiar": 123,
    "head": 141,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 2442,
    "name": "Shadow Mage Iprix of the Mist",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 233,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 2443,
    "name": "Diabolist Khudalf of El Dorado",
    "background": 2,
    "body": 40,
    "familiar": 104,
    "head": 177,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 2444,
    "name": "Shadow Mage Ratko of the Havens",
    "background": 1,
    "body": 10,
    "familiar": 112,
    "head": 177,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 2445,
    "name": "Aeromancer Giacomo of the Tower",
    "background": 0,
    "body": 48,
    "familiar": 108,
    "head": 201,
    "prop": 315,
    "rune": 287
  },
  {
    "idx": 2446,
    "name": "Archmagus Eden of the Field",
    "background": 0,
    "body": 13,
    "familiar": 115,
    "head": 226,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 2447,
    "name": "Alchemist Malthus of the Obelisk",
    "background": 3,
    "body": 50,
    "familiar": 95,
    "head": 165,
    "prop": 269,
    "rune": 300
  },
  {
    "idx": 2448,
    "name": "Amir of the Hollow",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 214,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2449,
    "name": "Runecaster Marius of the Circle",
    "background": 1,
    "body": 28,
    "familiar": 116,
    "head": 179,
    "prop": 256,
    "rune": 284
  },
  {
    "idx": 2450,
    "name": "Magus Pumlo of Arcadia",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 185,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 2451,
    "name": "Hedge Wizard Pezo of the Steppe",
    "background": 2,
    "body": 18,
    "familiar": 109,
    "head": 171,
    "prop": 312,
    "rune": 304
  },
  {
    "idx": 2452,
    "name": "Sorcerer Hadrien of Elysium",
    "background": 1,
    "body": 54,
    "familiar": 107,
    "head": 196,
    "prop": 256,
    "rune": 284
  },
  {
    "idx": 2453,
    "name": "Hedge Wizard Astrid of the Villa",
    "background": 1,
    "body": 74,
    "familiar": 101,
    "head": 191,
    "prop": 273,
    "rune": 282
  },
  {
    "idx": 2454,
    "name": "Sorcerer Zaim of the Atheneum",
    "background": 1,
    "body": 62,
    "familiar": 94,
    "head": 219,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 2455,
    "name": "Sage Eric of the Canyon",
    "background": 2,
    "body": 18,
    "familiar": 111,
    "head": 203,
    "prop": 245,
    "rune": 291
  },
  {
    "idx": 2456,
    "name": "Hedge Wizard Pozzik of the Toadstools",
    "background": 3,
    "body": 28,
    "familiar": 103,
    "head": 235,
    "prop": 328,
    "rune": 304
  },
  {
    "idx": 2457,
    "name": "Sage Demos of the Pit",
    "background": 2,
    "body": 87,
    "familiar": 93,
    "head": 158,
    "prop": 277,
    "rune": 303
  },
  {
    "idx": 2458,
    "name": "Archmagus Aleister of the Quantum Shadow",
    "background": 0,
    "body": 86,
    "familiar": 7777,
    "head": 127,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 2459,
    "name": "Druid  of the Forest",
    "background": 0,
    "body": 42,
    "familiar": 97,
    "head": 195,
    "prop": 319,
    "rune": 302
  },
  {
    "idx": 2460,
    "name": "Arch-Magician Ixar of the Wood",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 153,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 2461,
    "name": "Sorcerer Remus of the Sands",
    "background": 1,
    "body": 27,
    "familiar": 7777,
    "head": 228,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 2462,
    "name": "Mystic Poppy of the Heath",
    "background": 2,
    "body": 79,
    "familiar": 106,
    "head": 171,
    "prop": 326,
    "rune": 287
  },
  {
    "idx": 2463,
    "name": "Sage Jahid",
    "background": 1,
    "body": 10,
    "familiar": 115,
    "head": 128,
    "prop": 324,
    "rune": 283
  },
  {
    "idx": 2464,
    "name": "Arcanist Asphodel of the Grotto",
    "background": 3,
    "body": 22,
    "familiar": 109,
    "head": 132,
    "prop": 322,
    "rune": 290
  },
  {
    "idx": 2465,
    "name": "Chronomancer Lin of the Wood",
    "background": 0,
    "body": 35,
    "familiar": 114,
    "head": 180,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 2466,
    "name": "Druid Sarah of the Wood",
    "background": 1,
    "body": 32,
    "familiar": 88,
    "head": 198,
    "prop": 325,
    "rune": 302
  },
  {
    "idx": 2467,
    "name": "Battle Mage Nicolas of Dreams",
    "background": 1,
    "body": 62,
    "familiar": 119,
    "head": 177,
    "prop": 270,
    "rune": 290
  },
  {
    "idx": 2468,
    "name": "Charmer Circe of the Wood",
    "background": 0,
    "body": 32,
    "familiar": 93,
    "head": 135,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 2469,
    "name": "Ghost Eater Ixar",
    "background": 1,
    "body": 85,
    "familiar": 123,
    "head": 127,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 2470,
    "name": "Archmagus Victoria of the Moors",
    "background": 1,
    "body": 42,
    "familiar": 94,
    "head": 135,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 2471,
    "name": "Evoker Oiq of the River",
    "background": 0,
    "body": 44,
    "familiar": 112,
    "head": 235,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 2472,
    "name": "Evoker Nassif of the Mist",
    "background": 0,
    "body": 54,
    "familiar": 111,
    "head": 128,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 2473,
    "name": "Archmagus Oberon of the Ice",
    "background": 1,
    "body": 73,
    "familiar": 97,
    "head": 174,
    "prop": 305,
    "rune": 300
  },
  {
    "idx": 2474,
    "name": "Illusionist Colorman of the Ether",
    "background": 1,
    "body": 24,
    "familiar": 110,
    "head": 169,
    "prop": 246,
    "rune": 303
  },
  {
    "idx": 2475,
    "name": "Artificer Pix of the Veil",
    "background": 2,
    "body": 30,
    "familiar": 103,
    "head": 244,
    "prop": 318,
    "rune": 298
  },
  {
    "idx": 2476,
    "name": "Archmagus Ixar of Alfheim",
    "background": 1,
    "body": 30,
    "familiar": 96,
    "head": 147,
    "prop": 262,
    "rune": 302
  },
  {
    "idx": 2477,
    "name": "Shadow Mage Requiem of the Steppe",
    "background": 2,
    "body": 13,
    "familiar": 119,
    "head": 149,
    "prop": 309,
    "rune": 294
  },
  {
    "idx": 2478,
    "name": "Archmagus Properpine of the Marsh",
    "background": 2,
    "body": 33,
    "familiar": 120,
    "head": 223,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 2479,
    "name": "Oracle Celah of the Valley",
    "background": 1,
    "body": 13,
    "familiar": 110,
    "head": 196,
    "prop": 251,
    "rune": 284
  },
  {
    "idx": 2480,
    "name": "Wild Mage Homer of the Sacred Pillars",
    "background": 2,
    "body": 50,
    "familiar": 101,
    "head": 165,
    "prop": 340,
    "rune": 288
  },
  {
    "idx": 2481,
    "name": "Witch Enigma of the Valley",
    "background": 2,
    "body": 38,
    "familiar": 106,
    "head": 155,
    "prop": 268,
    "rune": 285
  },
  {
    "idx": 2482,
    "name": "Sage Solomon of the Keep",
    "background": 3,
    "body": 54,
    "familiar": 90,
    "head": 212,
    "prop": 256,
    "rune": 282
  },
  {
    "idx": 2483,
    "name": "Mystic Jerret of the Havens",
    "background": 0,
    "body": 68,
    "familiar": 97,
    "head": 232,
    "prop": 266,
    "rune": 303
  },
  {
    "idx": 2484,
    "name": "Archmagus Soran of Xanadu",
    "background": 0,
    "body": 52,
    "familiar": 114,
    "head": 186,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 2485,
    "name": "Chaos Mage Uvlius of the Temple",
    "background": 3,
    "body": 6,
    "familiar": 114,
    "head": 186,
    "prop": 330,
    "rune": 290
  },
  {
    "idx": 2486,
    "name": "Magus Amir of the Mount",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 214,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 2487,
    "name": "Druid Eyolf of Arcadia",
    "background": 2,
    "body": 23,
    "familiar": 89,
    "head": 234,
    "prop": 319,
    "rune": 299
  },
  {
    "idx": 2488,
    "name": "Hex Mage Kazud of the Mist",
    "background": 1,
    "body": 62,
    "familiar": 93,
    "head": 164,
    "prop": 309,
    "rune": 292
  },
  {
    "idx": 2489,
    "name": "Witch Drokore of the Desert",
    "background": 1,
    "body": 5,
    "familiar": 104,
    "head": 125,
    "prop": 321,
    "rune": 291
  },
  {
    "idx": 2490,
    "name": "Ghost Eater Carly of the Oasis",
    "background": 0,
    "body": 5,
    "familiar": 104,
    "head": 139,
    "prop": 254,
    "rune": 7777
  },
  {
    "idx": 2491,
    "name": "Sorcerer Basil of the Sacred Pillars",
    "background": 3,
    "body": 6,
    "familiar": 109,
    "head": 228,
    "prop": 275,
    "rune": 289
  },
  {
    "idx": 2492,
    "name": "Battle Mage Durm of the Mountain",
    "background": 0,
    "body": 45,
    "familiar": 89,
    "head": 213,
    "prop": 317,
    "rune": 302
  },
  {
    "idx": 2493,
    "name": "Battle Mage Hagar of the Mount",
    "background": 1,
    "body": 50,
    "familiar": 103,
    "head": 217,
    "prop": 264,
    "rune": 282
  },
  {
    "idx": 2494,
    "name": "Battle Mage Talon of the Thorn",
    "background": 0,
    "body": 30,
    "familiar": 119,
    "head": 173,
    "prop": 312,
    "rune": 304
  },
  {
    "idx": 2495,
    "name": "Battle Mage Ulysse of the Mount",
    "background": 2,
    "body": 55,
    "familiar": 109,
    "head": 206,
    "prop": 315,
    "rune": 287
  },
  {
    "idx": 2496,
    "name": "Holy Monk Ravana of the Riviera",
    "background": 1,
    "body": 42,
    "familiar": 99,
    "head": 150,
    "prop": 310,
    "rune": 302
  },
  {
    "idx": 2497,
    "name": "Arcanist Cromwell of the Lake",
    "background": 0,
    "body": 45,
    "familiar": 97,
    "head": 182,
    "prop": 266,
    "rune": 284
  },
  {
    "idx": 2498,
    "name": "Hedge Wizard Onaxx of the Veil",
    "background": 1,
    "body": 66,
    "familiar": 116,
    "head": 150,
    "prop": 340,
    "rune": 291
  },
  {
    "idx": 2499,
    "name": "Arch-Magician Pus Mother of Avalon",
    "background": 2,
    "body": 63,
    "familiar": 117,
    "head": 145,
    "prop": 335,
    "rune": 288
  },
  {
    "idx": 2500,
    "name": "Enchanter Fark of the Thorn",
    "background": 2,
    "body": 29,
    "familiar": 95,
    "head": 150,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 2501,
    "name": "Archmagus Merlon of Mu",
    "background": 2,
    "body": 75,
    "familiar": 117,
    "head": 215,
    "prop": 254,
    "rune": 295
  },
  {
    "idx": 2502,
    "name": "Cosmic Mage Faye of the Hills",
    "background": 3,
    "body": 37,
    "familiar": 103,
    "head": 139,
    "prop": 310,
    "rune": 283
  },
  {
    "idx": 2503,
    "name": "Hedge Wizard Devon of Xanadu",
    "background": 1,
    "body": 24,
    "familiar": 90,
    "head": 191,
    "prop": 312,
    "rune": 297
  },
  {
    "idx": 2504,
    "name": "Witch Rowena of the Ether",
    "background": 0,
    "body": 9,
    "familiar": 114,
    "head": 209,
    "prop": 254,
    "rune": 303
  },
  {
    "idx": 2505,
    "name": "Hex Mage Borak of the Havens",
    "background": 1,
    "body": 49,
    "familiar": 120,
    "head": 182,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 2506,
    "name": "Celeste of the Wold",
    "background": 1,
    "body": 18,
    "familiar": 101,
    "head": 131,
    "prop": 273,
    "rune": 304
  },
  {
    "idx": 2507,
    "name": "Archmagus Basil of the Hall",
    "background": 3,
    "body": 77,
    "familiar": 103,
    "head": 225,
    "prop": 332,
    "rune": 287
  },
  {
    "idx": 2508,
    "name": "Ghost Eater Carly of the Reach",
    "background": 2,
    "body": 22,
    "familiar": 88,
    "head": 139,
    "prop": 332,
    "rune": 303
  },
  {
    "idx": 2509,
    "name": "Magus Ifran of the Sands",
    "background": 0,
    "body": 61,
    "familiar": 94,
    "head": 219,
    "prop": 265,
    "rune": 287
  },
  {
    "idx": 2510,
    "name": "Enchanter Alessar of Dreams",
    "background": 1,
    "body": 54,
    "familiar": 90,
    "head": 212,
    "prop": 266,
    "rune": 287
  },
  {
    "idx": 2511,
    "name": "Arch-Magician Cromwell of the Grotto",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 204,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 2512,
    "name": "Enchanter Corky",
    "background": 2,
    "body": 67,
    "familiar": 109,
    "head": 201,
    "prop": 245,
    "rune": 303
  },
  {
    "idx": 2513,
    "name": "Necromancer Hagatha from the Shadow",
    "background": 0,
    "body": 87,
    "familiar": 101,
    "head": 176,
    "prop": 307,
    "rune": 284
  },
  {
    "idx": 2514,
    "name": "Jerret of the Sacred Pillars",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 162,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 2515,
    "name": "Battle Mage Cassius of the Sacred Pillars",
    "background": 2,
    "body": 49,
    "familiar": 97,
    "head": 173,
    "prop": 276,
    "rune": 296
  },
  {
    "idx": 2516,
    "name": "Adept Soya of the Event Horizon",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 185,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 2517,
    "name": "Archmagus Casper of El Dorado",
    "background": 1,
    "body": 74,
    "familiar": 93,
    "head": 221,
    "prop": 252,
    "rune": 291
  },
  {
    "idx": 2518,
    "name": "Hedge Wizard Sylvia of the Moors",
    "background": 0,
    "body": 38,
    "familiar": 105,
    "head": 223,
    "prop": 326,
    "rune": 300
  },
  {
    "idx": 2519,
    "name": "Archmagus Amir of the Keep",
    "background": 1,
    "body": 74,
    "familiar": 7777,
    "head": 226,
    "prop": 326,
    "rune": 290
  },
  {
    "idx": 2520,
    "name": "Adept Alessar of the Wold",
    "background": 1,
    "body": 79,
    "familiar": 111,
    "head": 221,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 2521,
    "name": "Battle Mage Rodolfo of the Loch",
    "background": 1,
    "body": 57,
    "familiar": 119,
    "head": 182,
    "prop": 7777,
    "rune": 297
  },
  {
    "idx": 2522,
    "name": "Alchemist Ratko of the Marsh",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 213,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 2523,
    "name": "Embrose of the Keep",
    "background": 2,
    "body": 76,
    "familiar": 88,
    "head": 158,
    "prop": 334,
    "rune": 288
  },
  {
    "idx": 2524,
    "name": "Witch Keziah of the Plains",
    "background": 0,
    "body": 37,
    "familiar": 104,
    "head": 209,
    "prop": 262,
    "rune": 301
  },
  {
    "idx": 2525,
    "name": "Sorcerer Zaros of the Marsh",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 138,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 2526,
    "name": "Illusionist  of the Wild",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 233,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 2527,
    "name": "Chronomancer Marius of the Garden",
    "background": 3,
    "body": 29,
    "familiar": 108,
    "head": 149,
    "prop": 259,
    "rune": 283
  },
  {
    "idx": 2528,
    "name": "Sage Konoha of the Toadstools",
    "background": 2,
    "body": 28,
    "familiar": 103,
    "head": 243,
    "prop": 322,
    "rune": 304
  },
  {
    "idx": 2529,
    "name": "Arcanist Hobbs in the Shadows",
    "background": 1,
    "body": 85,
    "familiar": 7777,
    "head": 171,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 2530,
    "name": "Thaumaturge Blaise of the Sun",
    "background": 0,
    "body": 27,
    "familiar": 123,
    "head": 182,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 2531,
    "name": "Battle Mage Homer of Cuckoo Land",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 182,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 2532,
    "name": "Adept Karasu of the Ether",
    "background": 2,
    "body": 75,
    "familiar": 107,
    "head": 243,
    "prop": 326,
    "rune": 297
  },
  {
    "idx": 2533,
    "name": "Voodoo Priest Jean Leon of the Hills",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 179,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 2534,
    "name": "Sorcerer Ixar of the Moors",
    "background": 1,
    "body": 44,
    "familiar": 105,
    "head": 185,
    "prop": 250,
    "rune": 291
  },
  {
    "idx": 2535,
    "name": "Shaman Marceau of the Temple",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 179,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2536,
    "name": "Artificer Robin of the Forest",
    "background": 0,
    "body": 44,
    "familiar": 105,
    "head": 201,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 2537,
    "name": "Archmagus Alessar of the Event Horizon",
    "background": 1,
    "body": 75,
    "familiar": 103,
    "head": 186,
    "prop": 315,
    "rune": 287
  },
  {
    "idx": 2538,
    "name": "Arcanist Ekmira of the Riviera",
    "background": 0,
    "body": 36,
    "familiar": 115,
    "head": 223,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 2539,
    "name": "Adept Aslan of the Marsh",
    "background": 1,
    "body": 15,
    "familiar": 95,
    "head": 182,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 2540,
    "name": "Shaman Axel of the Plains",
    "background": 2,
    "body": 18,
    "familiar": 97,
    "head": 220,
    "prop": 319,
    "rune": 285
  },
  {
    "idx": 2541,
    "name": "Sorcerer Idris of the Steppe",
    "background": 0,
    "body": 42,
    "familiar": 115,
    "head": 219,
    "prop": 261,
    "rune": 297
  },
  {
    "idx": 2542,
    "name": "Clairvoyant Eric of the Wold",
    "background": 2,
    "body": 44,
    "familiar": 97,
    "head": 165,
    "prop": 329,
    "rune": 299
  },
  {
    "idx": 2543,
    "name": "Archmagus Celah of the Quantum Downs",
    "background": 1,
    "body": 52,
    "familiar": 110,
    "head": 186,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 2544,
    "name": "Druid Jabir of the Palms",
    "background": 2,
    "body": 61,
    "familiar": 116,
    "head": 164,
    "prop": 324,
    "rune": 285
  },
  {
    "idx": 2545,
    "name": "Sorcerer Kazem of the Circle",
    "background": 3,
    "body": 28,
    "familiar": 108,
    "head": 142,
    "prop": 251,
    "rune": 302
  },
  {
    "idx": 2546,
    "name": "Sorcerer Lumos of the Tower",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 153,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 2547,
    "name": "Chronomancer Eden of the Riviera",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 212,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 2548,
    "name": "Enchanter Magnus of the Desert",
    "background": 0,
    "body": 27,
    "familiar": 123,
    "head": 177,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 2549,
    "name": "Archmagus Amir of the Psychic Leap",
    "background": 0,
    "body": 52,
    "familiar": 7777,
    "head": 212,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 2550,
    "name": "Geomancer Esme of the Sacred Pillars",
    "background": 2,
    "body": 49,
    "familiar": 89,
    "head": 209,
    "prop": 317,
    "rune": 288
  },
  {
    "idx": 2551,
    "name": "Voodoo Priest Gaspard of Avalon",
    "background": 2,
    "body": 6,
    "familiar": 114,
    "head": 149,
    "prop": 338,
    "rune": 283
  },
  {
    "idx": 2552,
    "name": "Archmagus Homer of the Villa",
    "background": 3,
    "body": 19,
    "familiar": 119,
    "head": 133,
    "prop": 326,
    "rune": 290
  },
  {
    "idx": 2553,
    "name": "Magus Wolfram of the Fey",
    "background": 1,
    "body": 28,
    "familiar": 123,
    "head": 213,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 2554,
    "name": "Cleric Nicolas of El Dorado",
    "background": 0,
    "body": 76,
    "familiar": 112,
    "head": 206,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 2555,
    "name": "Druid Circe of the Wood",
    "background": 1,
    "body": 34,
    "familiar": 105,
    "head": 132,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 2556,
    "name": "Archmagus Aleister of the Platonic Shadow",
    "background": 2,
    "body": 9,
    "familiar": 109,
    "head": 214,
    "prop": 246,
    "rune": 297
  },
  {
    "idx": 2557,
    "name": "Runecaster Homer of the Belfry",
    "background": 1,
    "body": 62,
    "familiar": 94,
    "head": 129,
    "prop": 324,
    "rune": 283
  },
  {
    "idx": 2558,
    "name": "Enchanter Allistair of the Capital",
    "background": 3,
    "body": 26,
    "familiar": 95,
    "head": 160,
    "prop": 265,
    "rune": 294
  },
  {
    "idx": 2559,
    "name": "Shaman Apollo of the Wild",
    "background": 0,
    "body": 79,
    "familiar": 111,
    "head": 228,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 2560,
    "name": "Druid Samuel of the Tundra",
    "background": 1,
    "body": 65,
    "familiar": 112,
    "head": 217,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2561,
    "name": "Alchemist Godfrey of the Veil",
    "background": 1,
    "body": 30,
    "familiar": 110,
    "head": 129,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 2562,
    "name": "Hedge Wizard Astrid of the Heath",
    "background": 0,
    "body": 34,
    "familiar": 116,
    "head": 191,
    "prop": 273,
    "rune": 290
  },
  {
    "idx": 2563,
    "name": "Druid Hishoken of the Mount",
    "background": 0,
    "body": 54,
    "familiar": 90,
    "head": 243,
    "prop": 264,
    "rune": 290
  },
  {
    "idx": 2564,
    "name": "Charmer Jadis of the Keep",
    "background": 1,
    "body": 48,
    "familiar": 89,
    "head": 131,
    "prop": 317,
    "rune": 294
  },
  {
    "idx": 2565,
    "name": "Hadrien of El Dorado",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 153,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 2566,
    "name": "Enchanter Diana of the Bastion",
    "background": 1,
    "body": 74,
    "familiar": 93,
    "head": 131,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 2567,
    "name": "Runecaster Artis of the River",
    "background": 0,
    "body": 31,
    "familiar": 93,
    "head": 208,
    "prop": 325,
    "rune": 287
  },
  {
    "idx": 2568,
    "name": "Charmer Daphne of the Veil",
    "background": 0,
    "body": 68,
    "familiar": 97,
    "head": 131,
    "prop": 273,
    "rune": 292
  },
  {
    "idx": 2569,
    "name": "Archmagus Mina of the Marsh",
    "background": 0,
    "body": 34,
    "familiar": 7777,
    "head": 191,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 2570,
    "name": "Geomancer Wolfram of the Steppe",
    "background": 0,
    "body": 19,
    "familiar": 111,
    "head": 204,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2571,
    "name": "Battlemage Nicolas of the Field",
    "background": 1,
    "body": 19,
    "familiar": 7777,
    "head": 182,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 2572,
    "name": "Artificer Quddus",
    "background": 2,
    "body": 48,
    "familiar": 95,
    "head": 142,
    "prop": 256,
    "rune": 290
  },
  {
    "idx": 2573,
    "name": "Aeromancer Hadrien of Dreams",
    "background": 0,
    "body": 62,
    "familiar": 90,
    "head": 160,
    "prop": 315,
    "rune": 288
  },
  {
    "idx": 2574,
    "name": "Carly of the Hollow",
    "background": 0,
    "body": 21,
    "familiar": 97,
    "head": 198,
    "prop": 320,
    "rune": 293
  },
  {
    "idx": 2575,
    "name": "Arch-Magician Yaggdytha of the Astral Plane",
    "background": 3,
    "body": 10,
    "familiar": 94,
    "head": 145,
    "prop": 280,
    "rune": 284
  },
  {
    "idx": 2576,
    "name": "Pumlo of the Realm",
    "background": 0,
    "body": 11,
    "familiar": 112,
    "head": 186,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 2577,
    "name": "Druid Diana of the Plains",
    "background": 0,
    "body": 37,
    "familiar": 94,
    "head": 156,
    "prop": 265,
    "rune": 294
  },
  {
    "idx": 2578,
    "name": "Aeromancer Rumpleskin of the Steppe",
    "background": 1,
    "body": 82,
    "familiar": 112,
    "head": 200,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 2579,
    "name": "Shaman Nazim of the Sun",
    "background": 1,
    "body": 61,
    "familiar": 94,
    "head": 164,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 2580,
    "name": "Shadow Mage Zelroth of the Sun",
    "background": 0,
    "body": 58,
    "familiar": 123,
    "head": 202,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 2581,
    "name": "Charmer Adrienne of the River",
    "background": 2,
    "body": 21,
    "familiar": 119,
    "head": 135,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 2582,
    "name": "Hedge Wizard Aldo of the Toadstools",
    "background": 2,
    "body": 28,
    "familiar": 119,
    "head": 207,
    "prop": 273,
    "rune": 291
  },
  {
    "idx": 2583,
    "name": "Geomancer Baird of the Road",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 188,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2584,
    "name": "Battle Mage Gunthor of the Capital",
    "background": 2,
    "body": 77,
    "familiar": 115,
    "head": 218,
    "prop": 262,
    "rune": 293
  },
  {
    "idx": 2585,
    "name": "Magus Oiq of Cuckoo Land",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 171,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 2586,
    "name": "Magus Samuel of El Dorado",
    "background": 2,
    "body": 48,
    "familiar": 111,
    "head": 203,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 2587,
    "name": "Artificer Armstrong of the Valley",
    "background": 2,
    "body": 45,
    "familiar": 116,
    "head": 204,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 2588,
    "name": "Battlemage Axel of the Canyon",
    "background": 2,
    "body": 43,
    "familiar": 101,
    "head": 206,
    "prop": 329,
    "rune": 303
  },
  {
    "idx": 2589,
    "name": "Archmagus Alessar of the Mount",
    "background": 2,
    "body": 62,
    "familiar": 112,
    "head": 238,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 2590,
    "name": "Diabolist Jastor of the Villa",
    "background": 2,
    "body": 77,
    "familiar": 103,
    "head": 200,
    "prop": 310,
    "rune": 294
  },
  {
    "idx": 2591,
    "name": "Holy Monk Damien of the Obelisk",
    "background": 0,
    "body": 6,
    "familiar": 110,
    "head": 125,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 2592,
    "name": "Althea of the Hollow",
    "background": 0,
    "body": 22,
    "familiar": 114,
    "head": 131,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 2593,
    "name": "Battle Mage Nolan of the Heath",
    "background": 1,
    "body": 19,
    "familiar": 120,
    "head": 173,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 2594,
    "name": "Druid Aiko of the Grotto",
    "background": 1,
    "body": 43,
    "familiar": 89,
    "head": 126,
    "prop": 276,
    "rune": 282
  },
  {
    "idx": 2595,
    "name": "Adept Voidoth of the Cosmos",
    "background": 3,
    "body": 68,
    "familiar": 97,
    "head": 239,
    "prop": 322,
    "rune": 291
  },
  {
    "idx": 2596,
    "name": "Sorcerer Goober of the Heath",
    "background": 1,
    "body": 12,
    "familiar": 7777,
    "head": 178,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 2597,
    "name": "Runecaster Kalo of the Moors",
    "background": 0,
    "body": 44,
    "familiar": 103,
    "head": 235,
    "prop": 328,
    "rune": 288
  },
  {
    "idx": 2598,
    "name": "Battle Mage Nicolas of the Sun",
    "background": 0,
    "body": 27,
    "familiar": 101,
    "head": 129,
    "prop": 308,
    "rune": 286
  },
  {
    "idx": 2599,
    "name": "Magus Iris of the Wood",
    "background": 1,
    "body": 39,
    "familiar": 93,
    "head": 135,
    "prop": 262,
    "rune": 304
  },
  {
    "idx": 2600,
    "name": "Arcanist Eliphas of the Keep",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 179,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 2601,
    "name": "Sorcerer Apollo of the Ether",
    "background": 2,
    "body": 52,
    "familiar": 7777,
    "head": 211,
    "prop": 280,
    "rune": 299
  },
  {
    "idx": 2602,
    "name": "Ice Mage Talon",
    "background": 0,
    "body": 73,
    "familiar": 116,
    "head": 177,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 2603,
    "name": "Hedge Wizard Rita of the Mountain",
    "background": 0,
    "body": 35,
    "familiar": 114,
    "head": 166,
    "prop": 319,
    "rune": 290
  },
  {
    "idx": 2604,
    "name": "Magus Charlord of the Capital",
    "background": 1,
    "body": 74,
    "familiar": 120,
    "head": 158,
    "prop": 263,
    "rune": 297
  },
  {
    "idx": 2605,
    "name": "Jadis of the Heath",
    "background": 1,
    "body": 22,
    "familiar": 88,
    "head": 130,
    "prop": 334,
    "rune": 287
  },
  {
    "idx": 2606,
    "name": "Archmagus Apollo of the Wild",
    "background": 1,
    "body": 82,
    "familiar": 7777,
    "head": 192,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 2607,
    "name": "Mystic Hadrien of the Psychic Leap",
    "background": 1,
    "body": 9,
    "familiar": 111,
    "head": 228,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 2608,
    "name": "Beyna of the Hollow",
    "background": 1,
    "body": 38,
    "familiar": 123,
    "head": 191,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 2609,
    "name": "Archmagus Hadrien of the Bastion",
    "background": 0,
    "body": 77,
    "familiar": 123,
    "head": 229,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 2610,
    "name": "Sorcerer Davos of the Wood",
    "background": 0,
    "body": 42,
    "familiar": 94,
    "head": 202,
    "prop": 306,
    "rune": 296
  },
  {
    "idx": 2611,
    "name": "Bard Bolin of El Dorado",
    "background": 1,
    "body": 74,
    "familiar": 95,
    "head": 236,
    "prop": 257,
    "rune": 293
  },
  {
    "idx": 2612,
    "name": "Archmagus Eden of the Plains",
    "background": 1,
    "body": 79,
    "familiar": 110,
    "head": 231,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2613,
    "name": "Void Disciple Juniper of the Veil",
    "background": 3,
    "body": 8,
    "familiar": 97,
    "head": 223,
    "prop": 307,
    "rune": 293
  },
  {
    "idx": 2614,
    "name": "Enchanter Oxnard of the Ether",
    "background": 2,
    "body": 9,
    "familiar": 89,
    "head": 193,
    "prop": 316,
    "rune": 298
  },
  {
    "idx": 2615,
    "name": "Hydromancer Aslan of the Grotto",
    "background": 3,
    "body": 13,
    "familiar": 109,
    "head": 204,
    "prop": 314,
    "rune": 283
  },
  {
    "idx": 2616,
    "name": "Archmagus Zaros of the Ice",
    "background": 0,
    "body": 73,
    "familiar": 94,
    "head": 186,
    "prop": 252,
    "rune": 284
  },
  {
    "idx": 2617,
    "name": "Cleric Carmilla of the River",
    "background": 0,
    "body": 12,
    "familiar": 116,
    "head": 209,
    "prop": 324,
    "rune": 285
  },
  {
    "idx": 2618,
    "name": "Cleric Crowley of the Mist",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 138,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 2619,
    "name": "Summoner Tabitha of the Wild",
    "background": 1,
    "body": 33,
    "familiar": 88,
    "head": 223,
    "prop": 253,
    "rune": 294
  },
  {
    "idx": 2620,
    "name": "Artificer Apollo of Xanadu",
    "background": 2,
    "body": 10,
    "familiar": 90,
    "head": 212,
    "prop": 261,
    "rune": 299
  },
  {
    "idx": 2621,
    "name": "Arcanist Rixxa of the Plains",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 178,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 2622,
    "name": "Battle Mage Caligula of the Bastion",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 213,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 2623,
    "name": "Sorcerer Celah of the Rock",
    "background": 0,
    "body": 60,
    "familiar": 108,
    "head": 192,
    "prop": 264,
    "rune": 292
  },
  {
    "idx": 2624,
    "name": "Summoner Oxnard",
    "background": 3,
    "body": 52,
    "familiar": 97,
    "head": 193,
    "prop": 254,
    "rune": 298
  },
  {
    "idx": 2625,
    "name": "Arcanist Huan of the Psychic Leap",
    "background": 1,
    "body": 10,
    "familiar": 111,
    "head": 236,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 2626,
    "name": "Thaumaturge Daria of the Hollow",
    "background": 3,
    "body": 38,
    "familiar": 93,
    "head": 130,
    "prop": 338,
    "rune": 302
  },
  {
    "idx": 2627,
    "name": "Sage Zeromus of the Capital",
    "background": 0,
    "body": 40,
    "familiar": 101,
    "head": 242,
    "prop": 322,
    "rune": 290
  },
  {
    "idx": 2628,
    "name": "Archmagus Jerret of the Field",
    "background": 1,
    "body": 12,
    "familiar": 7777,
    "head": 238,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 2629,
    "name": "Jerret of the Realm",
    "background": 1,
    "body": 8,
    "familiar": 97,
    "head": 189,
    "prop": 334,
    "rune": 298
  },
  {
    "idx": 2630,
    "name": "Chronomancer Impy of the Grotto",
    "background": 0,
    "body": 79,
    "familiar": 119,
    "head": 171,
    "prop": 259,
    "rune": 285
  },
  {
    "idx": 2631,
    "name": "Diabolist Rita of the Cosmos",
    "background": 2,
    "body": 10,
    "familiar": 93,
    "head": 176,
    "prop": 310,
    "rune": 290
  },
  {
    "idx": 2632,
    "name": "Clairvoyant Properpine of the Mountain",
    "background": 3,
    "body": 23,
    "familiar": 101,
    "head": 209,
    "prop": 329,
    "rune": 290
  },
  {
    "idx": 2633,
    "name": "Illusionist Aleister of the Hall",
    "background": 0,
    "body": 76,
    "familiar": 109,
    "head": 153,
    "prop": 246,
    "rune": 302
  },
  {
    "idx": 2634,
    "name": "Bard Zaros of Elysium",
    "background": 0,
    "body": 6,
    "familiar": 7777,
    "head": 153,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 2635,
    "name": "Chaos Mage Giuseppe of El Dorado",
    "background": 1,
    "body": 74,
    "familiar": 95,
    "head": 149,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 2636,
    "name": "Pyromancer Rita of the Circle",
    "background": 0,
    "body": 30,
    "familiar": 104,
    "head": 159,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2637,
    "name": "Archmagus Robert of the Glacier",
    "background": 0,
    "body": 65,
    "familiar": 89,
    "head": 133,
    "prop": 322,
    "rune": 292
  },
  {
    "idx": 2638,
    "name": "Electromancer Fallow of the Capital",
    "background": 1,
    "body": 76,
    "familiar": 103,
    "head": 167,
    "prop": 305,
    "rune": 293
  },
  {
    "idx": 2639,
    "name": "Sorcerer Taqi of the Tower",
    "background": 2,
    "body": 62,
    "familiar": 94,
    "head": 219,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2640,
    "name": "Charmer Carly of the Steppe",
    "background": 3,
    "body": 38,
    "familiar": 111,
    "head": 198,
    "prop": 310,
    "rune": 300
  },
  {
    "idx": 2641,
    "name": "Conjurer Bobbin of the Bibliotheca",
    "background": 1,
    "body": 54,
    "familiar": 104,
    "head": 201,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 2642,
    "name": "Archmagus Fungi of the Mount",
    "background": 1,
    "body": 7,
    "familiar": 97,
    "head": 195,
    "prop": 325,
    "rune": 302
  },
  {
    "idx": 2643,
    "name": "Archmagus Milton of the Plains",
    "background": 2,
    "body": 82,
    "familiar": 116,
    "head": 162,
    "prop": 306,
    "rune": 297
  },
  {
    "idx": 2644,
    "name": "Pyromancer Sisk of the Fey",
    "background": 2,
    "body": 28,
    "familiar": 114,
    "head": 207,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 2645,
    "name": "Enchanter Daria of the Canyon",
    "background": 3,
    "body": 22,
    "familiar": 104,
    "head": 191,
    "prop": 265,
    "rune": 290
  },
  {
    "idx": 2646,
    "name": "Witch Imeena of the Tower",
    "background": 1,
    "body": 62,
    "familiar": 115,
    "head": 166,
    "prop": 312,
    "rune": 293
  },
  {
    "idx": 2647,
    "name": "Arcanist Zaros of the Keep",
    "background": 2,
    "body": 50,
    "familiar": 101,
    "head": 189,
    "prop": 250,
    "rune": 301
  },
  {
    "idx": 2648,
    "name": "Voodoo Priest Baptiste of Limbo",
    "background": 0,
    "body": 85,
    "familiar": 112,
    "head": 179,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 2649,
    "name": "Aeromancer Squiddly of the Expanse",
    "background": 1,
    "body": 73,
    "familiar": 89,
    "head": 145,
    "prop": 315,
    "rune": 284
  },
  {
    "idx": 2650,
    "name": "Sage Draven of the Bastion",
    "background": 1,
    "body": 78,
    "familiar": 113,
    "head": 152,
    "prop": 256,
    "rune": 296
  },
  {
    "idx": 2651,
    "name": "Summoner Isaac of the Marsh",
    "background": 3,
    "body": 44,
    "familiar": 90,
    "head": 138,
    "prop": 254,
    "rune": 7777
  },
  {
    "idx": 2652,
    "name": "Magus Jabir of the Oasis",
    "background": 2,
    "body": 5,
    "familiar": 90,
    "head": 142,
    "prop": 318,
    "rune": 304
  },
  {
    "idx": 2653,
    "name": "Druid Uvlius of the Psychic Leap",
    "background": 2,
    "body": 10,
    "familiar": 105,
    "head": 211,
    "prop": 265,
    "rune": 304
  },
  {
    "idx": 2654,
    "name": "Fortune Teller Goliath of the Wild",
    "background": 1,
    "body": 42,
    "familiar": 97,
    "head": 173,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 2655,
    "name": "Chronomancer Ming of the Moors",
    "background": 3,
    "body": 31,
    "familiar": 88,
    "head": 180,
    "prop": 259,
    "rune": 301
  },
  {
    "idx": 2656,
    "name": "Alchemist Magpie of the Platonic Shadow",
    "background": 2,
    "body": 9,
    "familiar": 105,
    "head": 144,
    "prop": 269,
    "rune": 296
  },
  {
    "idx": 2657,
    "name": "Battle Mage Flynn of the Brambles",
    "background": 3,
    "body": 23,
    "familiar": 108,
    "head": 217,
    "prop": 265,
    "rune": 293
  },
  {
    "idx": 2658,
    "name": "Hedge Wizard Nicolas of the Steppe",
    "background": 2,
    "body": 82,
    "familiar": 104,
    "head": 173,
    "prop": 276,
    "rune": 295
  },
  {
    "idx": 2659,
    "name": "Pyromancer Scorch of the Astral Plane",
    "background": 2,
    "body": 52,
    "familiar": 104,
    "head": 158,
    "prop": 307,
    "rune": 299
  },
  {
    "idx": 2660,
    "name": "Aeromancer Merlon of the Mountain",
    "background": 3,
    "body": 12,
    "familiar": 110,
    "head": 227,
    "prop": 315,
    "rune": 282
  },
  {
    "idx": 2661,
    "name": "Udor",
    "background": 0,
    "body": 46,
    "familiar": 113,
    "head": 214,
    "prop": 253,
    "rune": 293
  },
  {
    "idx": 2662,
    "name": "Sorcerer Tumbaj of Atlantis",
    "background": 3,
    "body": 80,
    "familiar": 89,
    "head": 164,
    "prop": 314,
    "rune": 286
  },
  {
    "idx": 2663,
    "name": "Arcanist Juniper of the Veil",
    "background": 2,
    "body": 10,
    "familiar": 109,
    "head": 159,
    "prop": 250,
    "rune": 284
  },
  {
    "idx": 2664,
    "name": "Enchanter Artis of the River",
    "background": 2,
    "body": 31,
    "familiar": 120,
    "head": 139,
    "prop": 270,
    "rune": 282
  },
  {
    "idx": 2665,
    "name": "Magus Chooki of the Arctic",
    "background": 2,
    "body": 73,
    "familiar": 116,
    "head": 222,
    "prop": 263,
    "rune": 294
  },
  {
    "idx": 2666,
    "name": "Sorcerer Aleister of the Hall",
    "background": 3,
    "body": 40,
    "familiar": 105,
    "head": 189,
    "prop": 334,
    "rune": 301
  },
  {
    "idx": 2667,
    "name": "Pyromancer Galatea of the Valley",
    "background": 0,
    "body": 36,
    "familiar": 104,
    "head": 135,
    "prop": 310,
    "rune": 297
  },
  {
    "idx": 2668,
    "name": "Adept Daria of the Valley",
    "background": 2,
    "body": 31,
    "familiar": 93,
    "head": 139,
    "prop": 325,
    "rune": 286
  },
  {
    "idx": 2669,
    "name": "Artificer Hanko of the Steppe",
    "background": 1,
    "body": 34,
    "familiar": 120,
    "head": 126,
    "prop": 261,
    "rune": 288
  },
  {
    "idx": 2670,
    "name": "Sorcerer Isaac of the Mount",
    "background": 2,
    "body": 7,
    "familiar": 113,
    "head": 214,
    "prop": 249,
    "rune": 297
  },
  {
    "idx": 2671,
    "name": "Witch Lenora of the Hills",
    "background": 1,
    "body": 38,
    "familiar": 95,
    "head": 155,
    "prop": 262,
    "rune": 299
  },
  {
    "idx": 2672,
    "name": "Archmagus Cairon of the Brambles",
    "background": 3,
    "body": 44,
    "familiar": 120,
    "head": 189,
    "prop": 255,
    "rune": 302
  },
  {
    "idx": 2673,
    "name": "Hedge Wizard Apollo of the Wood",
    "background": 2,
    "body": 79,
    "familiar": 101,
    "head": 127,
    "prop": 276,
    "rune": 298
  },
  {
    "idx": 2674,
    "name": "Battle Mage Rodolfo of the Desert",
    "background": 2,
    "body": 5,
    "familiar": 90,
    "head": 220,
    "prop": 257,
    "rune": 285
  },
  {
    "idx": 2675,
    "name": "Alchemist Xue of the Moors",
    "background": 1,
    "body": 39,
    "familiar": 94,
    "head": 180,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 2676,
    "name": "Archmagus George of Mu",
    "background": 2,
    "body": 9,
    "familiar": 112,
    "head": 138,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 2677,
    "name": "Necromancer Arcus of the Platonic Shadow",
    "background": 0,
    "body": 8,
    "familiar": 120,
    "head": 194,
    "prop": 335,
    "rune": 290
  },
  {
    "idx": 2678,
    "name": "Battle Mage Homer",
    "background": 0,
    "body": 67,
    "familiar": 115,
    "head": 173,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 2679,
    "name": "Battle Mage Blaise of the Wold",
    "background": 0,
    "body": 42,
    "familiar": 99,
    "head": 204,
    "prop": 312,
    "rune": 296
  },
  {
    "idx": 2680,
    "name": "Mystic Blaise of the Brambles",
    "background": 3,
    "body": 17,
    "familiar": 105,
    "head": 183,
    "prop": 339,
    "rune": 282
  },
  {
    "idx": 2681,
    "name": "Mystic Wolfram of the Wold",
    "background": 0,
    "body": 15,
    "familiar": 89,
    "head": 220,
    "prop": 325,
    "rune": 283
  },
  {
    "idx": 2682,
    "name": "Ghost Eater Impy of the Havens",
    "background": 1,
    "body": 24,
    "familiar": 88,
    "head": 178,
    "prop": 254,
    "rune": 302
  },
  {
    "idx": 2683,
    "name": "Cryptomancer Artis of the Sacred Pillars",
    "background": 2,
    "body": 7,
    "familiar": 119,
    "head": 190,
    "prop": 310,
    "rune": 288
  },
  {
    "idx": 2684,
    "name": "Pyromancer Aslan of the Astral Plane",
    "background": 1,
    "body": 67,
    "familiar": 7777,
    "head": 188,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 2685,
    "name": "Sage Juniper of the Marsh",
    "background": 1,
    "body": 35,
    "familiar": 7777,
    "head": 155,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 2686,
    "name": "Cleric Alatar of the River",
    "background": 0,
    "body": 15,
    "familiar": 94,
    "head": 202,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 2687,
    "name": "Archmagus Milo of the Hollow",
    "background": 0,
    "body": 44,
    "familiar": 108,
    "head": 141,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2688,
    "name": "Electromancer Lux of the Garden",
    "background": 2,
    "body": 29,
    "familiar": 103,
    "head": 228,
    "prop": 305,
    "rune": 284
  },
  {
    "idx": 2689,
    "name": "Archmagus Solomon",
    "background": 1,
    "body": 76,
    "familiar": 103,
    "head": 147,
    "prop": 339,
    "rune": 290
  },
  {
    "idx": 2690,
    "name": "Enchanter Astrid of the Wood",
    "background": 1,
    "body": 22,
    "familiar": 99,
    "head": 131,
    "prop": 269,
    "rune": 285
  },
  {
    "idx": 2691,
    "name": "Geomancer Brutus of the Moors",
    "background": 1,
    "body": 15,
    "familiar": 116,
    "head": 213,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2692,
    "name": "Oracle Astrid of the Swell",
    "background": 2,
    "body": 57,
    "familiar": 99,
    "head": 190,
    "prop": 251,
    "rune": 300
  },
  {
    "idx": 2693,
    "name": "Uvlius of the Platonic Shadow",
    "background": 2,
    "body": 9,
    "familiar": 97,
    "head": 162,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 2694,
    "name": "Spellsinger Winter Squash of Mu",
    "background": 2,
    "body": 67,
    "familiar": 88,
    "head": 172,
    "prop": 247,
    "rune": 295
  },
  {
    "idx": 2695,
    "name": "Archmagus Lumos of the Ether",
    "background": 0,
    "body": 52,
    "familiar": 114,
    "head": 186,
    "prop": 315,
    "rune": 291
  },
  {
    "idx": 2696,
    "name": "Void Disciple Chiron of the Quantum Shadow",
    "background": 3,
    "body": 85,
    "familiar": 120,
    "head": 242,
    "prop": 259,
    "rune": 300
  },
  {
    "idx": 2697,
    "name": "Sorcerer Cairon of the Inferno",
    "background": 0,
    "body": 86,
    "familiar": 7777,
    "head": 227,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 2698,
    "name": "Cleric Argus of the Marsh",
    "background": 1,
    "body": 19,
    "familiar": 7777,
    "head": 147,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 2699,
    "name": "Merlon of the Forest",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 185,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 2700,
    "name": "Magus Nazim of the Ether",
    "background": 0,
    "body": 67,
    "familiar": 104,
    "head": 237,
    "prop": 247,
    "rune": 297
  },
  {
    "idx": 2701,
    "name": "Battlemage Nassif of the Palms",
    "background": 3,
    "body": 60,
    "familiar": 123,
    "head": 219,
    "prop": 277,
    "rune": 304
  },
  {
    "idx": 2702,
    "name": "Thaumaturge George of Mu",
    "background": 1,
    "body": 68,
    "familiar": 107,
    "head": 137,
    "prop": 332,
    "rune": 301
  },
  {
    "idx": 2703,
    "name": "Adept Fredo of the Keep",
    "background": 0,
    "body": 50,
    "familiar": 109,
    "head": 201,
    "prop": 325,
    "rune": 297
  },
  {
    "idx": 2704,
    "name": "Druid Ravana of the Canyon",
    "background": 1,
    "body": 15,
    "familiar": 7777,
    "head": 125,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 2705,
    "name": "Artificer Rumpleskin of the Palms",
    "background": 2,
    "body": 60,
    "familiar": 119,
    "head": 178,
    "prop": 260,
    "rune": 299
  },
  {
    "idx": 2706,
    "name": "Archmagus Aldus of the Mount",
    "background": 1,
    "body": 55,
    "familiar": 123,
    "head": 212,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 2707,
    "name": "Druid Umber of the Hills",
    "background": 2,
    "body": 82,
    "familiar": 99,
    "head": 167,
    "prop": 340,
    "rune": 294
  },
  {
    "idx": 2708,
    "name": "Archmagus Casper of the Gnostics",
    "background": 1,
    "body": 9,
    "familiar": 94,
    "head": 215,
    "prop": 261,
    "rune": 300
  },
  {
    "idx": 2709,
    "name": "Shaman Hashim of the Sea",
    "background": 2,
    "body": 57,
    "familiar": 119,
    "head": 164,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 2710,
    "name": "Alchemist Aleister of the Thorn",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 138,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 2711,
    "name": "Shaman Talon of the River",
    "background": 1,
    "body": 42,
    "familiar": 7777,
    "head": 213,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2712,
    "name": "Archmagus Ivy of the Valley",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 176,
    "prop": 327,
    "rune": 282
  },
  {
    "idx": 2713,
    "name": "Ice Mage Aiko of the Arctic",
    "background": 2,
    "body": 65,
    "familiar": 101,
    "head": 126,
    "prop": 312,
    "rune": 301
  },
  {
    "idx": 2714,
    "name": "Illusionist Shizu of the Wood",
    "background": 0,
    "body": 34,
    "familiar": 111,
    "head": 126,
    "prop": 246,
    "rune": 291
  },
  {
    "idx": 2715,
    "name": "Shaman Chooki of Dreams",
    "background": 2,
    "body": 63,
    "familiar": 101,
    "head": 164,
    "prop": 324,
    "rune": 294
  },
  {
    "idx": 2716,
    "name": "Voodoo Priest Auguste of the Dunes",
    "background": 0,
    "body": 60,
    "familiar": 7777,
    "head": 149,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 2717,
    "name": "Battle Mage Gunthor of the Forest",
    "background": 0,
    "body": 13,
    "familiar": 116,
    "head": 182,
    "prop": 247,
    "rune": 303
  },
  {
    "idx": 2718,
    "name": "Chaos Mage George of the Belfry",
    "background": 3,
    "body": 55,
    "familiar": 103,
    "head": 147,
    "prop": 338,
    "rune": 302
  },
  {
    "idx": 2719,
    "name": "Sorcerer Hashim of the Desert",
    "background": 0,
    "body": 58,
    "familiar": 95,
    "head": 219,
    "prop": 261,
    "rune": 302
  },
  {
    "idx": 2720,
    "name": "Cleric Shu of the Wold",
    "background": 0,
    "body": 35,
    "familiar": 7777,
    "head": 180,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 2721,
    "name": "Alchemist Alatar of Dreams",
    "background": 0,
    "body": 6,
    "familiar": 104,
    "head": 197,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 2722,
    "name": "Crowley of the Gnostics",
    "background": 0,
    "body": 8,
    "familiar": 120,
    "head": 231,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 2723,
    "name": "Enchanter Asphodel of the Wood",
    "background": 0,
    "body": 21,
    "familiar": 89,
    "head": 190,
    "prop": 308,
    "rune": 302
  },
  {
    "idx": 2724,
    "name": "Artificer Corvin of the Event Horizon",
    "background": 1,
    "body": 52,
    "familiar": 97,
    "head": 144,
    "prop": 258,
    "rune": 299
  },
  {
    "idx": 2725,
    "name": "Archmagus Bolin of the Field",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 236,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 2726,
    "name": "Azahl of the Wild",
    "background": 2,
    "body": 42,
    "familiar": 114,
    "head": 197,
    "prop": 248,
    "rune": 283
  },
  {
    "idx": 2727,
    "name": "Archmagus Zane of the Field",
    "background": 1,
    "body": 44,
    "familiar": 7777,
    "head": 186,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 2728,
    "name": "Druid Orpheus of the Quantum Shadow",
    "background": 1,
    "body": 86,
    "familiar": 95,
    "head": 232,
    "prop": 326,
    "rune": 299
  },
  {
    "idx": 2729,
    "name": "Clairvoyant Danny of the Field",
    "background": 2,
    "body": 43,
    "familiar": 89,
    "head": 133,
    "prop": 245,
    "rune": 284
  },
  {
    "idx": 2730,
    "name": "Arcanist Celah of the Veil",
    "background": 1,
    "body": 24,
    "familiar": 120,
    "head": 127,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 2731,
    "name": "Bard Borak of Elysium",
    "background": 2,
    "body": 54,
    "familiar": 90,
    "head": 204,
    "prop": 247,
    "rune": 303
  },
  {
    "idx": 2732,
    "name": "Sage Aldus of the Desert",
    "background": 0,
    "body": 60,
    "familiar": 7777,
    "head": 226,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 2733,
    "name": "Charmer Calista of the Marsh",
    "background": 0,
    "body": 22,
    "familiar": 93,
    "head": 139,
    "prop": 323,
    "rune": 300
  },
  {
    "idx": 2734,
    "name": "Arch-Magician Finn of the Thorn",
    "background": 0,
    "body": 30,
    "familiar": 7777,
    "head": 183,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 2735,
    "name": "Artificer Eizo of the Sacred Pillars",
    "background": 0,
    "body": 50,
    "familiar": 123,
    "head": 226,
    "prop": 260,
    "rune": 296
  },
  {
    "idx": 2736,
    "name": "Evoker Finn of the Villa",
    "background": 1,
    "body": 77,
    "familiar": 103,
    "head": 206,
    "prop": 338,
    "rune": 283
  },
  {
    "idx": 2737,
    "name": "Witch Elizabeth of the Moors",
    "background": 0,
    "body": 37,
    "familiar": 105,
    "head": 166,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 2738,
    "name": "Mystic Zaim of the River",
    "background": 1,
    "body": 79,
    "familiar": 99,
    "head": 142,
    "prop": 318,
    "rune": 293
  },
  {
    "idx": 2739,
    "name": "Bard Celah of the Hills",
    "background": 0,
    "body": 23,
    "familiar": 103,
    "head": 229,
    "prop": 247,
    "rune": 293
  },
  {
    "idx": 2740,
    "name": "Battle Mage Angus of the Hills",
    "background": 1,
    "body": 79,
    "familiar": 89,
    "head": 218,
    "prop": 246,
    "rune": 288
  },
  {
    "idx": 2741,
    "name": "Sage Shukri of the Ether",
    "background": 3,
    "body": 52,
    "familiar": 114,
    "head": 222,
    "prop": 318,
    "rune": 301
  },
  {
    "idx": 2742,
    "name": "Cosmic Mage Aleister of the Quantum Downs",
    "background": 0,
    "body": 9,
    "familiar": 93,
    "head": 127,
    "prop": 309,
    "rune": 286
  },
  {
    "idx": 2743,
    "name": "Magus Jameel",
    "background": 2,
    "body": 52,
    "familiar": 90,
    "head": 128,
    "prop": 249,
    "rune": 297
  },
  {
    "idx": 2744,
    "name": "Shaman Evangeline of the Marsh",
    "background": 0,
    "body": 37,
    "familiar": 7777,
    "head": 155,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 2745,
    "name": "Archmagus Zelda of the Wood",
    "background": 1,
    "body": 33,
    "familiar": 101,
    "head": 223,
    "prop": 317,
    "rune": 300
  },
  {
    "idx": 2746,
    "name": "Archmagus Lux of Mu",
    "background": 1,
    "body": 8,
    "familiar": 97,
    "head": 189,
    "prop": 311,
    "rune": 299
  },
  {
    "idx": 2747,
    "name": "Magus Sahir out of the Void",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 219,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2748,
    "name": "Medium Hugo of the Citadel",
    "background": 3,
    "body": 40,
    "familiar": 95,
    "head": 149,
    "prop": 251,
    "rune": 293
  },
  {
    "idx": 2749,
    "name": "Geomancer  of the Ice",
    "background": 1,
    "body": 65,
    "familiar": 123,
    "head": 195,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2750,
    "name": "Runecaster Lucien of Limbo",
    "background": 0,
    "body": 86,
    "familiar": 115,
    "head": 149,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 2751,
    "name": "Geomancer Jasper of the Wood",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 201,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2752,
    "name": "Zaros out of the Void",
    "background": 1,
    "body": 86,
    "familiar": 124,
    "head": 232,
    "prop": 320,
    "rune": 299
  },
  {
    "idx": 2753,
    "name": "Witch Ivy of the Sacred Pillars",
    "background": 1,
    "body": 7,
    "familiar": 112,
    "head": 176,
    "prop": 246,
    "rune": 298
  },
  {
    "idx": 2754,
    "name": "Sorcerer Salah of Atlantis",
    "background": 2,
    "body": 80,
    "familiar": 93,
    "head": 146,
    "prop": 334,
    "rune": 297
  },
  {
    "idx": 2755,
    "name": "Battle Mage Eric in the Shadows",
    "background": 1,
    "body": 83,
    "familiar": 97,
    "head": 183,
    "prop": 309,
    "rune": 285
  },
  {
    "idx": 2756,
    "name": "Ghost Eater Corky of the Technochrome",
    "background": 1,
    "body": 64,
    "familiar": 113,
    "head": 201,
    "prop": 254,
    "rune": 299
  },
  {
    "idx": 2757,
    "name": "Charmer Thana of the Marsh",
    "background": 2,
    "body": 35,
    "familiar": 93,
    "head": 135,
    "prop": 326,
    "rune": 296
  },
  {
    "idx": 2758,
    "name": "Medium Samuel of the Platonic Shadow",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 203,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 2759,
    "name": "Alchemist Uday of the Dunes",
    "background": 0,
    "body": 5,
    "familiar": 97,
    "head": 219,
    "prop": 270,
    "rune": 294
  },
  {
    "idx": 2760,
    "name": "Illusionist Uvlius",
    "background": 2,
    "body": 46,
    "familiar": 103,
    "head": 186,
    "prop": 306,
    "rune": 290
  },
  {
    "idx": 2761,
    "name": "Druid Molek of the Riviera",
    "background": 2,
    "body": 13,
    "familiar": 106,
    "head": 193,
    "prop": 276,
    "rune": 303
  },
  {
    "idx": 2762,
    "name": "Ice Mage Moloch of the Tundra",
    "background": 2,
    "body": 73,
    "familiar": 111,
    "head": 193,
    "prop": 276,
    "rune": 287
  },
  {
    "idx": 2763,
    "name": "Battle Mage Danny of El Dorado",
    "background": 0,
    "body": 19,
    "familiar": 123,
    "head": 213,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 2764,
    "name": "Enchanter Astrid of the Plains",
    "background": 1,
    "body": 35,
    "familiar": 119,
    "head": 131,
    "prop": 259,
    "rune": 284
  },
  {
    "idx": 2765,
    "name": "Artificer Ulysse of the Desert",
    "background": 3,
    "body": 58,
    "familiar": 114,
    "head": 183,
    "prop": 318,
    "rune": 293
  },
  {
    "idx": 2766,
    "name": "Null Mage Quddus of the Forest",
    "background": 0,
    "body": 44,
    "familiar": 97,
    "head": 222,
    "prop": 335,
    "rune": 291
  },
  {
    "idx": 2767,
    "name": "Shaman Aleister of Cuckoo Land",
    "background": 1,
    "body": 28,
    "familiar": 7777,
    "head": 227,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 2768,
    "name": "Hedge Wizard Circe of the Ether",
    "background": 1,
    "body": 67,
    "familiar": 104,
    "head": 131,
    "prop": 312,
    "rune": 296
  },
  {
    "idx": 2769,
    "name": "Ghost Eater Ethan of the Steppe",
    "background": 0,
    "body": 45,
    "familiar": 97,
    "head": 217,
    "prop": 254,
    "rune": 282
  },
  {
    "idx": 2770,
    "name": "Geomancer Ethan of the Tower",
    "background": 0,
    "body": 55,
    "familiar": 115,
    "head": 204,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2771,
    "name": "Battle Mage Tundror of the Dunes",
    "background": 1,
    "body": 60,
    "familiar": 101,
    "head": 133,
    "prop": 318,
    "rune": 283
  },
  {
    "idx": 2772,
    "name": "Clairvoyant Bao of El Dorado",
    "background": 2,
    "body": 77,
    "familiar": 95,
    "head": 236,
    "prop": 251,
    "rune": 304
  },
  {
    "idx": 2773,
    "name": "Archmagus Eizo of the Psychic Leap",
    "background": 1,
    "body": 11,
    "familiar": 7777,
    "head": 192,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 2774,
    "name": "Magus Kamil of the Moors",
    "background": 3,
    "body": 82,
    "familiar": 99,
    "head": 142,
    "prop": 308,
    "rune": 291
  },
  {
    "idx": 2775,
    "name": "Hedge Wizard Nolan of the Desert",
    "background": 3,
    "body": 5,
    "familiar": 99,
    "head": 220,
    "prop": 319,
    "rune": 7777
  },
  {
    "idx": 2776,
    "name": "Runecaster Azahl of Atlantis",
    "background": 1,
    "body": 57,
    "familiar": 7777,
    "head": 192,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 2777,
    "name": "Magus Apollo of the Valley",
    "background": 1,
    "body": 79,
    "familiar": 123,
    "head": 229,
    "prop": 263,
    "rune": 291
  },
  {
    "idx": 2778,
    "name": "Arch-Magician George of the Quantum Downs",
    "background": 3,
    "body": 8,
    "familiar": 90,
    "head": 226,
    "prop": 334,
    "rune": 282
  },
  {
    "idx": 2779,
    "name": "Sorcerer Oberon of the Veil",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 229,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 2780,
    "name": "Archmagus Lumos of the Bastion",
    "background": 0,
    "body": 48,
    "familiar": 90,
    "head": 160,
    "prop": 250,
    "rune": 297
  },
  {
    "idx": 2781,
    "name": "Holy Monk Finch of the Garden",
    "background": 1,
    "body": 30,
    "familiar": 7777,
    "head": 207,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 2782,
    "name": "Cleric Gunthor of the Grotto",
    "background": 0,
    "body": 15,
    "familiar": 108,
    "head": 183,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 2783,
    "name": "Charmer Lamia of the North",
    "background": 1,
    "body": 73,
    "familiar": 111,
    "head": 135,
    "prop": 263,
    "rune": 292
  },
  {
    "idx": 2784,
    "name": "Alchemist Asmodeus of the Heath",
    "background": 0,
    "body": 18,
    "familiar": 123,
    "head": 205,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 2785,
    "name": "Hex Mage Yog-Sothoth of the Quantum Shadow",
    "background": 3,
    "body": 85,
    "familiar": 120,
    "head": 145,
    "prop": 334,
    "rune": 288
  },
  {
    "idx": 2786,
    "name": "Battle Mage Cassius of the Keep",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 204,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 2787,
    "name": "Layla of the Desert",
    "background": 0,
    "body": 61,
    "familiar": 94,
    "head": 132,
    "prop": 265,
    "rune": 287
  },
  {
    "idx": 2788,
    "name": "Witch Velorina of the Woodlands",
    "background": 0,
    "body": 29,
    "familiar": 104,
    "head": 155,
    "prop": 312,
    "rune": 299
  },
  {
    "idx": 2789,
    "name": "Hedge Wizard Darick of the Mount",
    "background": 0,
    "body": 49,
    "familiar": 114,
    "head": 133,
    "prop": 312,
    "rune": 282
  },
  {
    "idx": 2790,
    "name": "Necromancer Bane of the Quantum Shadow",
    "background": 0,
    "body": 86,
    "familiar": 111,
    "head": 194,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 2791,
    "name": "Summoner Pandora of the Atheneum",
    "background": 1,
    "body": 54,
    "familiar": 107,
    "head": 191,
    "prop": 253,
    "rune": 300
  },
  {
    "idx": 2792,
    "name": "Geomancer Samuel of the Valley",
    "background": 1,
    "body": 42,
    "familiar": 89,
    "head": 165,
    "prop": 308,
    "rune": 302
  },
  {
    "idx": 2793,
    "name": "Katherine",
    "background": 1,
    "body": 19,
    "familiar": 94,
    "head": 132,
    "prop": 340,
    "rune": 302
  },
  {
    "idx": 2794,
    "name": "Battle Mage Ratko of Cuckoo Land",
    "background": 0,
    "body": 28,
    "familiar": 7777,
    "head": 177,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 2795,
    "name": "Artificer Angus of the Heath",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 203,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 2796,
    "name": "Thaumaturge Dante of the Citadel",
    "background": 0,
    "body": 26,
    "familiar": 7777,
    "head": 216,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 2797,
    "name": "Archmagus Aldo of the Keep",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 125,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 2798,
    "name": "Alchemist Samuel of the Keep",
    "background": 2,
    "body": 63,
    "familiar": 111,
    "head": 203,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 2799,
    "name": "Witch Rita of the Mist",
    "background": 0,
    "body": 49,
    "familiar": 115,
    "head": 155,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2800,
    "name": "Alessar of the Capital",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 215,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 2801,
    "name": "Magus Ramiz of the Dunes",
    "background": 2,
    "body": 27,
    "familiar": 94,
    "head": 237,
    "prop": 248,
    "rune": 298
  },
  {
    "idx": 2802,
    "name": "Sorcerer Ofaris of the Expanse",
    "background": 1,
    "body": 73,
    "familiar": 115,
    "head": 221,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 2803,
    "name": "Archmagus Uvlius of the Marsh",
    "background": 0,
    "body": 23,
    "familiar": 95,
    "head": 232,
    "prop": 320,
    "rune": 285
  },
  {
    "idx": 2804,
    "name": "Alchemist Baird",
    "background": 1,
    "body": 11,
    "familiar": 88,
    "head": 203,
    "prop": 270,
    "rune": 290
  },
  {
    "idx": 2805,
    "name": "Hedge Wizard Hedgie of Arcadia",
    "background": 0,
    "body": 41,
    "familiar": 123,
    "head": 195,
    "prop": 253,
    "rune": 282
  },
  {
    "idx": 2806,
    "name": "Chaos Mage Allistair of the Tower",
    "background": 2,
    "body": 6,
    "familiar": 114,
    "head": 147,
    "prop": 338,
    "rune": 287
  },
  {
    "idx": 2807,
    "name": "Ghost Eater Mina of Arcadia",
    "background": 1,
    "body": 35,
    "familiar": 103,
    "head": 131,
    "prop": 332,
    "rune": 302
  },
  {
    "idx": 2808,
    "name": "Oracle Yuki of the Citadel",
    "background": 0,
    "body": 76,
    "familiar": 95,
    "head": 126,
    "prop": 251,
    "rune": 282
  },
  {
    "idx": 2809,
    "name": "Battle Mage Hagar of the Swell",
    "background": 0,
    "body": 57,
    "familiar": 111,
    "head": 133,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 2810,
    "name": "Druid Jahid of the Steppe",
    "background": 1,
    "body": 43,
    "familiar": 112,
    "head": 222,
    "prop": 334,
    "rune": 290
  },
  {
    "idx": 2811,
    "name": "Thaumaturge Horace of the Sun",
    "background": 0,
    "body": 27,
    "familiar": 105,
    "head": 220,
    "prop": 326,
    "rune": 298
  },
  {
    "idx": 2812,
    "name": "Mina of the Marsh",
    "background": 2,
    "body": 35,
    "familiar": 112,
    "head": 139,
    "prop": 322,
    "rune": 288
  },
  {
    "idx": 2813,
    "name": "Artificer Bobbin of the Ice",
    "background": 0,
    "body": 73,
    "familiar": 112,
    "head": 201,
    "prop": 320,
    "rune": 300
  },
  {
    "idx": 2814,
    "name": "Hydromancer Ai of the Hills",
    "background": 1,
    "body": 12,
    "familiar": 116,
    "head": 180,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 2815,
    "name": "Alchemist Properpine of the Tower",
    "background": 1,
    "body": 7,
    "familiar": 115,
    "head": 155,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 2816,
    "name": "Adept Milo of the Grave",
    "background": 1,
    "body": 72,
    "familiar": 123,
    "head": 138,
    "prop": 322,
    "rune": 300
  },
  {
    "idx": 2817,
    "name": "Enchanter Adrienne of the Wold",
    "background": 0,
    "body": 21,
    "familiar": 97,
    "head": 198,
    "prop": 259,
    "rune": 287
  },
  {
    "idx": 2818,
    "name": "Enchanter Adrienne of the Hall",
    "background": 0,
    "body": 48,
    "familiar": 109,
    "head": 131,
    "prop": 325,
    "rune": 294
  },
  {
    "idx": 2819,
    "name": "Alchemist Argus of the Cosmos",
    "background": 1,
    "body": 52,
    "familiar": 105,
    "head": 127,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 2820,
    "name": "Sorcerer Jameel of the Court",
    "background": 2,
    "body": 74,
    "familiar": 94,
    "head": 237,
    "prop": 305,
    "rune": 304
  },
  {
    "idx": 2821,
    "name": "Enchanter Orpheus of the Dunes",
    "background": 3,
    "body": 61,
    "familiar": 88,
    "head": 230,
    "prop": 252,
    "rune": 297
  },
  {
    "idx": 2822,
    "name": "Wild Mage Gallo of the Hills",
    "background": 3,
    "body": 79,
    "familiar": 94,
    "head": 149,
    "prop": 320,
    "rune": 287
  },
  {
    "idx": 2823,
    "name": "Void Disciple Gogol of the Capital",
    "background": 0,
    "body": 48,
    "familiar": 93,
    "head": 222,
    "prop": 274,
    "rune": 290
  },
  {
    "idx": 2824,
    "name": "Cleric Yan of the Wood",
    "background": 1,
    "body": 31,
    "familiar": 93,
    "head": 180,
    "prop": 306,
    "rune": 286
  },
  {
    "idx": 2825,
    "name": "Necromancer Aiko of the Reach",
    "background": 0,
    "body": 22,
    "familiar": 115,
    "head": 126,
    "prop": 307,
    "rune": 287
  },
  {
    "idx": 2826,
    "name": "Arcanist Devo of the Villa",
    "background": 3,
    "body": 74,
    "familiar": 123,
    "head": 169,
    "prop": 250,
    "rune": 291
  },
  {
    "idx": 2827,
    "name": "Lumos of Mu",
    "background": 2,
    "body": 8,
    "familiar": 123,
    "head": 212,
    "prop": 322,
    "rune": 285
  },
  {
    "idx": 2828,
    "name": "Hadrien of the Grotto",
    "background": 1,
    "body": 17,
    "familiar": 112,
    "head": 232,
    "prop": 322,
    "rune": 283
  },
  {
    "idx": 2829,
    "name": "Sky Master Morfran of the Quantum Downs",
    "background": 1,
    "body": 52,
    "familiar": 116,
    "head": 144,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2830,
    "name": "Artificer Tengu of the Marsh",
    "background": 1,
    "body": 14,
    "familiar": 88,
    "head": 243,
    "prop": 340,
    "rune": 296
  },
  {
    "idx": 2831,
    "name": "Enchanter Daria of the Hollow",
    "background": 1,
    "body": 21,
    "familiar": 120,
    "head": 198,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 2832,
    "name": "Shadow Mage Calista of the Valley",
    "background": 3,
    "body": 22,
    "familiar": 99,
    "head": 191,
    "prop": 309,
    "rune": 288
  },
  {
    "idx": 2833,
    "name": "Battle Mage Khudalf of the Plains",
    "background": 0,
    "body": 12,
    "familiar": 97,
    "head": 177,
    "prop": 318,
    "rune": 285
  },
  {
    "idx": 2834,
    "name": "Artificer Alessar of the Realm",
    "background": 2,
    "body": 52,
    "familiar": 94,
    "head": 227,
    "prop": 318,
    "rune": 287
  },
  {
    "idx": 2835,
    "name": "Sorcerer Lumos of the Bastion",
    "background": 2,
    "body": 48,
    "familiar": 103,
    "head": 186,
    "prop": 305,
    "rune": 284
  },
  {
    "idx": 2836,
    "name": "Chaos Mage Uday of the Tower",
    "background": 1,
    "body": 62,
    "familiar": 94,
    "head": 219,
    "prop": 309,
    "rune": 286
  },
  {
    "idx": 2837,
    "name": "Archmagus Zubin of the Mount",
    "background": 0,
    "body": 49,
    "familiar": 101,
    "head": 227,
    "prop": 329,
    "rune": 301
  },
  {
    "idx": 2838,
    "name": "Artificer Misumi of the Plains",
    "background": 2,
    "body": 35,
    "familiar": 103,
    "head": 126,
    "prop": 260,
    "rune": 284
  },
  {
    "idx": 2839,
    "name": "Basil of the Oasis",
    "background": 2,
    "body": 27,
    "familiar": 90,
    "head": 221,
    "prop": 249,
    "rune": 287
  },
  {
    "idx": 2840,
    "name": "Pyromancer  of the Tundra",
    "background": 1,
    "body": 65,
    "familiar": 105,
    "head": 158,
    "prop": 309,
    "rune": 284
  },
  {
    "idx": 2841,
    "name": "Druid Ratko of the Cosmos",
    "background": 2,
    "body": 10,
    "familiar": 89,
    "head": 213,
    "prop": 276,
    "rune": 297
  },
  {
    "idx": 2842,
    "name": "Aleister of the Desert",
    "background": 0,
    "body": 27,
    "familiar": 7777,
    "head": 138,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 2843,
    "name": "Arch-Magician Ixar of the Ice",
    "background": 0,
    "body": 73,
    "familiar": 99,
    "head": 147,
    "prop": 335,
    "rune": 293
  },
  {
    "idx": 2844,
    "name": "Alchemist Milton of the Canyon",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 199,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 2845,
    "name": "Spellsinger Karasu of the Lake",
    "background": 0,
    "body": 84,
    "familiar": 105,
    "head": 243,
    "prop": 247,
    "rune": 282
  },
  {
    "idx": 2846,
    "name": "Hedge Wizard Aslan of the Tower",
    "background": 1,
    "body": 55,
    "familiar": 111,
    "head": 165,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 2847,
    "name": "Conjurer Zhan of the Oasis",
    "background": 1,
    "body": 27,
    "familiar": 116,
    "head": 180,
    "prop": 246,
    "rune": 294
  },
  {
    "idx": 2848,
    "name": "Artificer Actaeon of the Court",
    "background": 0,
    "body": 76,
    "familiar": 123,
    "head": 167,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 2849,
    "name": "Pyromancer Trollin of the Sacred Pillars",
    "background": 1,
    "body": 49,
    "familiar": 119,
    "head": 171,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2850,
    "name": "Alchemist Rowena of the Steppe",
    "background": 1,
    "body": 42,
    "familiar": 95,
    "head": 166,
    "prop": 268,
    "rune": 297
  },
  {
    "idx": 2851,
    "name": "Ghost Eater Aleister of Xanadu",
    "background": 1,
    "body": 52,
    "familiar": 123,
    "head": 192,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 2852,
    "name": "Adept Crowley of the Veil",
    "background": 0,
    "body": 52,
    "familiar": 110,
    "head": 147,
    "prop": 322,
    "rune": 292
  },
  {
    "idx": 2853,
    "name": "Shaman Rodolfo of the Desert",
    "background": 0,
    "body": 60,
    "familiar": 93,
    "head": 203,
    "prop": 340,
    "rune": 303
  },
  {
    "idx": 2854,
    "name": "Archmagus Milton of the Swell",
    "background": 1,
    "body": 57,
    "familiar": 94,
    "head": 189,
    "prop": 265,
    "rune": 286
  },
  {
    "idx": 2855,
    "name": "Geomancer Bartholomew of the Heath",
    "background": 0,
    "body": 45,
    "familiar": 111,
    "head": 129,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2856,
    "name": "Alchemist Tundror of the Palms",
    "background": 0,
    "body": 58,
    "familiar": 94,
    "head": 177,
    "prop": 324,
    "rune": 291
  },
  {
    "idx": 2857,
    "name": "Alchemist Finn of the Mist",
    "background": 2,
    "body": 63,
    "familiar": 90,
    "head": 206,
    "prop": 269,
    "rune": 293
  },
  {
    "idx": 2858,
    "name": "Runecaster Ixar of the Gnostics",
    "background": 3,
    "body": 67,
    "familiar": 117,
    "head": 212,
    "prop": 256,
    "rune": 285
  },
  {
    "idx": 2859,
    "name": "Alchemist Hadrien of the Bastion",
    "background": 1,
    "body": 18,
    "familiar": 107,
    "head": 214,
    "prop": 268,
    "rune": 300
  },
  {
    "idx": 2860,
    "name": "Augurer Corky of the Steppe",
    "background": 3,
    "body": 23,
    "familiar": 97,
    "head": 201,
    "prop": 245,
    "rune": 284
  },
  {
    "idx": 2861,
    "name": "Adept Azahl of the Tower",
    "background": 1,
    "body": 48,
    "familiar": 94,
    "head": 147,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 2862,
    "name": "Enchanter Layla of the Keep",
    "background": 1,
    "body": 48,
    "familiar": 88,
    "head": 135,
    "prop": 258,
    "rune": 304
  },
  {
    "idx": 2863,
    "name": "Archmagus Kalo of the Brambles",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 178,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 2864,
    "name": "Archmagus Ixar of the Atheneum",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 147,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 2865,
    "name": "David of Mu",
    "background": 0,
    "body": 8,
    "familiar": 112,
    "head": 141,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 2866,
    "name": "Archmagus Zelroth of the Cosmos",
    "background": 1,
    "body": 75,
    "familiar": 99,
    "head": 229,
    "prop": 271,
    "rune": 300
  },
  {
    "idx": 2867,
    "name": "Shaman Liliana of the Sun",
    "background": 3,
    "body": 61,
    "familiar": 107,
    "head": 176,
    "prop": 329,
    "rune": 287
  },
  {
    "idx": 2868,
    "name": "Electromancer Requiem of the Keep",
    "background": 1,
    "body": 76,
    "familiar": 7777,
    "head": 179,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 2869,
    "name": "Enchanter Devon of the Oasis",
    "background": 2,
    "body": 58,
    "familiar": 111,
    "head": 135,
    "prop": 318,
    "rune": 299
  },
  {
    "idx": 2870,
    "name": "Cryptomancer Amir of the Hall",
    "background": 0,
    "body": 74,
    "familiar": 103,
    "head": 215,
    "prop": 339,
    "rune": 286
  },
  {
    "idx": 2871,
    "name": "Conjurer Lavinia of the Mist",
    "background": 0,
    "body": 55,
    "familiar": 107,
    "head": 223,
    "prop": 246,
    "rune": 302
  },
  {
    "idx": 2872,
    "name": "Chaos Mage Thoth in the Shadows",
    "background": 1,
    "body": 85,
    "familiar": 93,
    "head": 194,
    "prop": 309,
    "rune": 7777
  },
  {
    "idx": 2873,
    "name": "Enchanter Le Blanc of the Carnival",
    "background": 1,
    "body": 30,
    "familiar": 112,
    "head": 179,
    "prop": 334,
    "rune": 290
  },
  {
    "idx": 2874,
    "name": "Spellsinger Norix of the Bastion",
    "background": 0,
    "body": 48,
    "familiar": 111,
    "head": 239,
    "prop": 257,
    "rune": 302
  },
  {
    "idx": 2875,
    "name": "Thaumaturge Akron of the Thorn",
    "background": 1,
    "body": 28,
    "familiar": 89,
    "head": 150,
    "prop": 328,
    "rune": 300
  },
  {
    "idx": 2876,
    "name": "Archmagus Soran of Dreams",
    "background": 1,
    "body": 55,
    "familiar": 111,
    "head": 153,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 2877,
    "name": "Shaman Milo",
    "background": 2,
    "body": 28,
    "familiar": 110,
    "head": 199,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 2878,
    "name": "Magus Aden of Elysium",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 207,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 2879,
    "name": "Battle Mage Robert of the Fey",
    "background": 0,
    "body": 30,
    "familiar": 117,
    "head": 182,
    "prop": 339,
    "rune": 288
  },
  {
    "idx": 2880,
    "name": "Voodoo Priest Ulysse of the Desert",
    "background": 1,
    "body": 5,
    "familiar": 7777,
    "head": 177,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 2881,
    "name": "Enchanter Larissa of the Wold",
    "background": 0,
    "body": 21,
    "familiar": 119,
    "head": 198,
    "prop": 306,
    "rune": 300
  },
  {
    "idx": 2882,
    "name": "Illusionist Layla of the Riviera",
    "background": 1,
    "body": 22,
    "familiar": 103,
    "head": 191,
    "prop": 306,
    "rune": 291
  },
  {
    "idx": 2883,
    "name": "Wild Mage Shanyuan of the Cosmos",
    "background": 1,
    "body": 67,
    "familiar": 112,
    "head": 236,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 2884,
    "name": "Alchemist Alice of the Bastion",
    "background": 2,
    "body": 48,
    "familiar": 107,
    "head": 195,
    "prop": 271,
    "rune": 300
  },
  {
    "idx": 2885,
    "name": "Sage Otto of the Moors",
    "background": 0,
    "body": 14,
    "familiar": 114,
    "head": 218,
    "prop": 316,
    "rune": 294
  },
  {
    "idx": 2886,
    "name": "Conjurer Bolin of the Platonic Shadow",
    "background": 1,
    "body": 52,
    "familiar": 109,
    "head": 236,
    "prop": 246,
    "rune": 297
  },
  {
    "idx": 2887,
    "name": "Diabolist Rowena of the Belfry",
    "background": 3,
    "body": 62,
    "familiar": 115,
    "head": 166,
    "prop": 337,
    "rune": 283
  },
  {
    "idx": 2888,
    "name": "Archmagus Jastor of the Astral Plane",
    "background": 1,
    "body": 52,
    "familiar": 103,
    "head": 200,
    "prop": 255,
    "rune": 303
  },
  {
    "idx": 2889,
    "name": "Magus Sahir of the Canyon",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 164,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2890,
    "name": "Battlemage Eizo in the Shadows",
    "background": 2,
    "body": 86,
    "familiar": 88,
    "head": 211,
    "prop": 309,
    "rune": 287
  },
  {
    "idx": 2891,
    "name": "Sage Lumos of the Villa",
    "background": 0,
    "body": 76,
    "familiar": 114,
    "head": 147,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 2892,
    "name": "Sorcerer Udor",
    "background": 2,
    "body": 73,
    "familiar": 104,
    "head": 174,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 2893,
    "name": "Hedge Wizard Florah",
    "background": 1,
    "body": 65,
    "familiar": 109,
    "head": 223,
    "prop": 266,
    "rune": 290
  },
  {
    "idx": 2894,
    "name": "Sorcerer David of the Bibliotheca",
    "background": 1,
    "body": 7,
    "familiar": 7777,
    "head": 233,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 2895,
    "name": "Sorcerer Chooki of the Marsh",
    "background": 1,
    "body": 45,
    "familiar": 101,
    "head": 142,
    "prop": 312,
    "rune": 296
  },
  {
    "idx": 2896,
    "name": "Necromancer Chiron from the Abyss",
    "background": 2,
    "body": 87,
    "familiar": 96,
    "head": 242,
    "prop": 254,
    "rune": 292
  },
  {
    "idx": 2897,
    "name": "Alchemist Devon of the Marsh",
    "background": 1,
    "body": 38,
    "familiar": 116,
    "head": 190,
    "prop": 268,
    "rune": 293
  },
  {
    "idx": 2898,
    "name": "Evoker Merlon of the Mist",
    "background": 0,
    "body": 6,
    "familiar": 103,
    "head": 233,
    "prop": 338,
    "rune": 296
  },
  {
    "idx": 2899,
    "name": "Witch Hestia of the Villa",
    "background": 1,
    "body": 76,
    "familiar": 114,
    "head": 209,
    "prop": 253,
    "rune": 291
  },
  {
    "idx": 2900,
    "name": "Merlon of the Event Horizon",
    "background": 0,
    "body": 9,
    "familiar": 105,
    "head": 127,
    "prop": 320,
    "rune": 300
  },
  {
    "idx": 2901,
    "name": "Spellsinger Liliana of the Court",
    "background": 1,
    "body": 20,
    "familiar": 119,
    "head": 155,
    "prop": 275,
    "rune": 300
  },
  {
    "idx": 2902,
    "name": "Archmagus Aleister of the Palms",
    "background": 0,
    "body": 60,
    "familiar": 7777,
    "head": 160,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 2903,
    "name": "Archmagus Soya of Arcadia",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 231,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 2904,
    "name": "Archmagus Orange Menace of the Moors",
    "background": 1,
    "body": 43,
    "familiar": 97,
    "head": 172,
    "prop": 317,
    "rune": 303
  },
  {
    "idx": 2905,
    "name": "Archmagus Jerret of the Realm",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 211,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 2906,
    "name": "Magus Basil of the Mist",
    "background": 0,
    "body": 6,
    "familiar": 115,
    "head": 229,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 2907,
    "name": "Shaman Jerret of the Morning Star",
    "background": 2,
    "body": 86,
    "familiar": 112,
    "head": 232,
    "prop": 327,
    "rune": 302
  },
  {
    "idx": 2908,
    "name": "Lumos of the Hall",
    "background": 3,
    "body": 77,
    "familiar": 105,
    "head": 197,
    "prop": 309,
    "rune": 296
  },
  {
    "idx": 2909,
    "name": "Battlemage Milton of the Valley",
    "background": 1,
    "body": 17,
    "familiar": 112,
    "head": 232,
    "prop": 335,
    "rune": 299
  },
  {
    "idx": 2910,
    "name": "Mystic Zelroth of the Mountain",
    "background": 3,
    "body": 18,
    "familiar": 104,
    "head": 226,
    "prop": 325,
    "rune": 290
  },
  {
    "idx": 2911,
    "name": "Archmagus Azahl of the Mount",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 197,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 2912,
    "name": "Voodoo Priest Hothor of the Gnostics",
    "background": 2,
    "body": 10,
    "familiar": 124,
    "head": 220,
    "prop": 320,
    "rune": 296
  },
  {
    "idx": 2913,
    "name": "Enchanter Daria of the Canyon",
    "background": 2,
    "body": 34,
    "familiar": 101,
    "head": 130,
    "prop": 277,
    "rune": 298
  },
  {
    "idx": 2914,
    "name": "Artificer Celeste of the Court",
    "background": 1,
    "body": 19,
    "familiar": 7777,
    "head": 190,
    "prop": 261,
    "rune": 282
  },
  {
    "idx": 2915,
    "name": "Alchemist Gunthor of the Valley",
    "background": 0,
    "body": 42,
    "familiar": 7777,
    "head": 188,
    "prop": 271,
    "rune": 292
  },
  {
    "idx": 2916,
    "name": "Magus Baird of the Palms",
    "background": 1,
    "body": 27,
    "familiar": 7777,
    "head": 177,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 2917,
    "name": "Archmagus Amir in the Shadows",
    "background": 2,
    "body": 86,
    "familiar": 112,
    "head": 162,
    "prop": 245,
    "rune": 293
  },
  {
    "idx": 2918,
    "name": "Adept Scorch of the Sacred Pillars",
    "background": 0,
    "body": 55,
    "familiar": 88,
    "head": 158,
    "prop": 322,
    "rune": 288
  },
  {
    "idx": 2919,
    "name": "Oracle Bayard of the Belfry",
    "background": 2,
    "body": 49,
    "familiar": 89,
    "head": 220,
    "prop": 329,
    "rune": 297
  },
  {
    "idx": 2920,
    "name": "Electromancer Hashim of the Sands",
    "background": 0,
    "body": 58,
    "familiar": 94,
    "head": 237,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 2921,
    "name": "Witch Imeena of the Bastion",
    "background": 0,
    "body": 46,
    "familiar": 95,
    "head": 159,
    "prop": 263,
    "rune": 300
  },
  {
    "idx": 2922,
    "name": "Shaman Jay of El Dorado",
    "background": 3,
    "body": 74,
    "familiar": 112,
    "head": 144,
    "prop": 264,
    "rune": 292
  },
  {
    "idx": 2923,
    "name": "Enchanter Ambrosia of the Marsh",
    "background": 1,
    "body": 23,
    "familiar": 89,
    "head": 159,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 2924,
    "name": "Archmagus David of the Keep",
    "background": 1,
    "body": 74,
    "familiar": 7777,
    "head": 231,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 2925,
    "name": "Bard Solomon of the Toadstools",
    "background": 1,
    "body": 28,
    "familiar": 7777,
    "head": 233,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 2926,
    "name": "Thaumaturge Bathsheba of Dreams",
    "background": 0,
    "body": 55,
    "familiar": 110,
    "head": 139,
    "prop": 338,
    "rune": 299
  },
  {
    "idx": 2927,
    "name": "Conjurer Willow of the Hall",
    "background": 3,
    "body": 40,
    "familiar": 120,
    "head": 191,
    "prop": 339,
    "rune": 285
  },
  {
    "idx": 2928,
    "name": "Evil Arcanist Faustus of the Great Blue",
    "background": 1,
    "body": 57,
    "familiar": 120,
    "head": 136,
    "prop": 314,
    "rune": 283
  },
  {
    "idx": 2929,
    "name": "Hedge Wizard Bartholomew of the Mist",
    "background": 1,
    "body": 49,
    "familiar": 89,
    "head": 165,
    "prop": 276,
    "rune": 299
  },
  {
    "idx": 2930,
    "name": "Soran of Xanadu",
    "background": 3,
    "body": 24,
    "familiar": 119,
    "head": 226,
    "prop": 273,
    "rune": 304
  },
  {
    "idx": 2931,
    "name": "Ghost Eater Optimus of the Waste",
    "background": 3,
    "body": 87,
    "familiar": 96,
    "head": 157,
    "prop": 335,
    "rune": 286
  },
  {
    "idx": 2932,
    "name": "Enchanter Daphne of the Waste",
    "background": 2,
    "body": 87,
    "familiar": 105,
    "head": 208,
    "prop": 246,
    "rune": 284
  },
  {
    "idx": 2933,
    "name": "Druid Ofaris of the Court",
    "background": 0,
    "body": 77,
    "familiar": 104,
    "head": 202,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 2934,
    "name": "Mystic Jeldor of the Event Horizon",
    "background": 3,
    "body": 9,
    "familiar": 109,
    "head": 215,
    "prop": 266,
    "rune": 7777
  },
  {
    "idx": 2935,
    "name": "Sorcerer Nassif of the Gnostics",
    "background": 2,
    "body": 75,
    "familiar": 114,
    "head": 128,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 2936,
    "name": "Hedge Wizard Poppy of the Ether",
    "background": 2,
    "body": 67,
    "familiar": 119,
    "head": 171,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 2937,
    "name": "Druid Cromwell of the Wood",
    "background": 2,
    "body": 18,
    "familiar": 89,
    "head": 173,
    "prop": 276,
    "rune": 292
  },
  {
    "idx": 2938,
    "name": "Geomancer Cedric of the Ether",
    "background": 1,
    "body": 9,
    "familiar": 7777,
    "head": 125,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2939,
    "name": "Daria of the Marsh",
    "background": 0,
    "body": 39,
    "familiar": 7777,
    "head": 187,
    "prop": 260,
    "rune": 302
  },
  {
    "idx": 2940,
    "name": "Magus Herne of Alfheim",
    "background": 3,
    "body": 29,
    "familiar": 101,
    "head": 167,
    "prop": 339,
    "rune": 301
  },
  {
    "idx": 2941,
    "name": "Shaman David of the Event Horizon",
    "background": 2,
    "body": 10,
    "familiar": 116,
    "head": 229,
    "prop": 265,
    "rune": 293
  },
  {
    "idx": 2942,
    "name": "Cosmic Mage Solomon of the Road",
    "background": 1,
    "body": 41,
    "familiar": 114,
    "head": 229,
    "prop": 338,
    "rune": 296
  },
  {
    "idx": 2943,
    "name": "Spellsinger Baird of the Realm",
    "background": 1,
    "body": 9,
    "familiar": 111,
    "head": 173,
    "prop": 257,
    "rune": 285
  },
  {
    "idx": 2944,
    "name": "Shaman Nicolas of the Grotto",
    "background": 3,
    "body": 12,
    "familiar": 99,
    "head": 218,
    "prop": 340,
    "rune": 294
  },
  {
    "idx": 2945,
    "name": "Oracle Durm of the Steppe",
    "background": 3,
    "body": 23,
    "familiar": 109,
    "head": 217,
    "prop": 245,
    "rune": 287
  },
  {
    "idx": 2946,
    "name": "Enchanter Sonja of the Wood",
    "background": 3,
    "body": 36,
    "familiar": 119,
    "head": 208,
    "prop": 274,
    "rune": 304
  },
  {
    "idx": 2947,
    "name": "Druid Celeste of the Forest",
    "background": 3,
    "body": 34,
    "familiar": 120,
    "head": 191,
    "prop": 319,
    "rune": 290
  },
  {
    "idx": 2948,
    "name": "Pyromancer Hagar of the Waste",
    "background": 3,
    "body": 87,
    "familiar": 97,
    "head": 182,
    "prop": 309,
    "rune": 283
  },
  {
    "idx": 2949,
    "name": "Battle Mage Angus of the Brambles",
    "background": 2,
    "body": 14,
    "familiar": 89,
    "head": 218,
    "prop": 280,
    "rune": 297
  },
  {
    "idx": 2950,
    "name": "Cleric Nori of the Mount",
    "background": 1,
    "body": 6,
    "familiar": 105,
    "head": 126,
    "prop": 326,
    "rune": 299
  },
  {
    "idx": 2951,
    "name": "Clairvoyant Faye of the Hollow",
    "background": 1,
    "body": 32,
    "familiar": 115,
    "head": 135,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 2952,
    "name": "Alchemist Dutorn of the Capital",
    "background": 0,
    "body": 19,
    "familiar": 7777,
    "head": 188,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 2953,
    "name": "Druid Hu of Xanadu",
    "background": 2,
    "body": 24,
    "familiar": 88,
    "head": 236,
    "prop": 325,
    "rune": 286
  },
  {
    "idx": 2954,
    "name": "Druid Tengu of the Cosmos",
    "background": 0,
    "body": 8,
    "familiar": 105,
    "head": 243,
    "prop": 316,
    "rune": 288
  },
  {
    "idx": 2955,
    "name": "Sage Iluzor of the Villa",
    "background": 0,
    "body": 78,
    "familiar": 97,
    "head": 170,
    "prop": 256,
    "rune": 297
  },
  {
    "idx": 2956,
    "name": "Druid Zeromus of the Desert",
    "background": 3,
    "body": 60,
    "familiar": 115,
    "head": 239,
    "prop": 276,
    "rune": 301
  },
  {
    "idx": 2957,
    "name": "Evoker Mushy of the Berg",
    "background": 0,
    "body": 65,
    "familiar": 108,
    "head": 195,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 2958,
    "name": "Archmagus Armstrong of the Mist",
    "background": 3,
    "body": 55,
    "familiar": 101,
    "head": 188,
    "prop": 245,
    "rune": 282
  },
  {
    "idx": 2959,
    "name": "Geomancer Poppy of the Field",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 200,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2960,
    "name": "Mystic Herne of the Mountain",
    "background": 2,
    "body": 12,
    "familiar": 103,
    "head": 167,
    "prop": 327,
    "rune": 300
  },
  {
    "idx": 2961,
    "name": "Archmagus Aleister of the Keep",
    "background": 2,
    "body": 76,
    "familiar": 103,
    "head": 186,
    "prop": 310,
    "rune": 303
  },
  {
    "idx": 2962,
    "name": "Daria of the Wild",
    "background": 2,
    "body": 12,
    "familiar": 104,
    "head": 198,
    "prop": 314,
    "rune": 294
  },
  {
    "idx": 2963,
    "name": "Archmagus Crowley of the Veil",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 153,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 2964,
    "name": "Arch-Magician Spore Boy of the Atheneum",
    "background": 2,
    "body": 49,
    "familiar": 105,
    "head": 195,
    "prop": 280,
    "rune": 292
  },
  {
    "idx": 2965,
    "name": "Sorcerer Ilyas of the Event Horizon",
    "background": 1,
    "body": 10,
    "familiar": 7777,
    "head": 219,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 2966,
    "name": "Battle Mage Magnus of the Hills",
    "background": 1,
    "body": 79,
    "familiar": 99,
    "head": 218,
    "prop": 319,
    "rune": 297
  },
  {
    "idx": 2967,
    "name": "Battle Mage Homer of the Wold",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 204,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 2968,
    "name": "Druid Salty of the Tower",
    "background": 3,
    "body": 49,
    "familiar": 104,
    "head": 171,
    "prop": 276,
    "rune": 303
  },
  {
    "idx": 2969,
    "name": "Enchanter Requiem of the Oasis",
    "background": 3,
    "body": 60,
    "familiar": 95,
    "head": 149,
    "prop": 251,
    "rune": 300
  },
  {
    "idx": 2970,
    "name": "Sage Eliphas of the Hall",
    "background": 1,
    "body": 26,
    "familiar": 7777,
    "head": 179,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 2971,
    "name": "Mystic Daria of the Field",
    "background": 1,
    "body": 34,
    "familiar": 120,
    "head": 139,
    "prop": 326,
    "rune": 290
  },
  {
    "idx": 2972,
    "name": "Charmer Artis of the Grotto",
    "background": 1,
    "body": 22,
    "familiar": 105,
    "head": 208,
    "prop": 255,
    "rune": 284
  },
  {
    "idx": 2973,
    "name": "Enchanter Circe of the Mountain",
    "background": 0,
    "body": 37,
    "familiar": 119,
    "head": 131,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2974,
    "name": "Cleric Lumos of the Marsh",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 127,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 2975,
    "name": "Archmagus Aleister of the Court",
    "background": 1,
    "body": 18,
    "familiar": 94,
    "head": 214,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 2976,
    "name": "Hex Mage Goober of the Wood",
    "background": 0,
    "body": 43,
    "familiar": 115,
    "head": 171,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 2977,
    "name": "Pyromancer Crowley in the Shadows",
    "background": 2,
    "body": 85,
    "familiar": 97,
    "head": 211,
    "prop": 309,
    "rune": 7777
  },
  {
    "idx": 2978,
    "name": "Archmagus Jerret",
    "background": 3,
    "body": 86,
    "familiar": 90,
    "head": 162,
    "prop": 267,
    "rune": 291
  },
  {
    "idx": 2979,
    "name": "Archmagus George of the Havens",
    "background": 0,
    "body": 10,
    "familiar": 93,
    "head": 211,
    "prop": 254,
    "rune": 285
  },
  {
    "idx": 2980,
    "name": "Bard Molek of the Gnostics",
    "background": 2,
    "body": 11,
    "familiar": 107,
    "head": 193,
    "prop": 257,
    "rune": 303
  },
  {
    "idx": 2981,
    "name": "Artificer Oberon of the Thorn",
    "background": 0,
    "body": 30,
    "familiar": 108,
    "head": 202,
    "prop": 260,
    "rune": 290
  },
  {
    "idx": 2982,
    "name": "Witch Rowena of Dreams",
    "background": 1,
    "body": 54,
    "familiar": 123,
    "head": 155,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 2983,
    "name": "Sorcerer Jeldor of the Berg",
    "background": 1,
    "body": 65,
    "familiar": 105,
    "head": 147,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 2984,
    "name": "Shaman Atlas of the Sacred Pillars",
    "background": 2,
    "body": 49,
    "familiar": 104,
    "head": 218,
    "prop": 276,
    "rune": 285
  },
  {
    "idx": 2985,
    "name": "Archmagus  of the Steppe",
    "background": 0,
    "body": 13,
    "familiar": 107,
    "head": 125,
    "prop": 314,
    "rune": 292
  },
  {
    "idx": 2986,
    "name": "Remus of the Wood",
    "background": 1,
    "body": 23,
    "familiar": 7777,
    "head": 238,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 2987,
    "name": "Shaman Azathoth of the Oasis",
    "background": 1,
    "body": 27,
    "familiar": 107,
    "head": 145,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 2988,
    "name": "Voodoo Priest Requiem of the Hall",
    "background": 2,
    "body": 76,
    "familiar": 95,
    "head": 149,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2989,
    "name": "Artificer Iris of the Lake",
    "background": 2,
    "body": 36,
    "familiar": 109,
    "head": 198,
    "prop": 261,
    "rune": 290
  },
  {
    "idx": 2990,
    "name": "Cosmic Mage Tundror of the Light",
    "background": 0,
    "body": 10,
    "familiar": 114,
    "head": 183,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 2991,
    "name": "Voodoo Priest Suki of the Field",
    "background": 0,
    "body": 23,
    "familiar": 123,
    "head": 171,
    "prop": 320,
    "rune": 282
  },
  {
    "idx": 2992,
    "name": "Sorcerer Jerret of the Keep",
    "background": 0,
    "body": 77,
    "familiar": 105,
    "head": 215,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 2993,
    "name": "Battle Mage Angus of the Sacred Pillars",
    "background": 1,
    "body": 63,
    "familiar": 7777,
    "head": 182,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 2994,
    "name": "Udor of the Cosmos",
    "background": 0,
    "body": 24,
    "familiar": 111,
    "head": 230,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 2995,
    "name": "Hedge Wizard Ming of the Valley",
    "background": 0,
    "body": 37,
    "familiar": 115,
    "head": 180,
    "prop": 273,
    "rune": 291
  },
  {
    "idx": 2996,
    "name": "Archmagus Apollo of the Sacred Pillars",
    "background": 1,
    "body": 6,
    "familiar": 7777,
    "head": 199,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 2997,
    "name": "Hedge Wizard Angus of the Wold",
    "background": 1,
    "body": 79,
    "familiar": 89,
    "head": 218,
    "prop": 253,
    "rune": 297
  },
  {
    "idx": 2998,
    "name": "Eden of the Wood",
    "background": 1,
    "body": 14,
    "familiar": 110,
    "head": 147,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 2999,
    "name": "Arcanist Jerret of the Garden",
    "background": 2,
    "body": 28,
    "familiar": 108,
    "head": 229,
    "prop": 250,
    "rune": 282
  },
  {
    "idx": 3000,
    "name": "The Bird Tamer",
    "background": 0,
    "body": 15,
    "familiar": 89,
    "head": 228,
    "prop": 316,
    "rune": 7777
  },
  {
    "idx": 3001,
    "name": "Aeromancer Argus of the Hall",
    "background": 1,
    "body": 74,
    "familiar": 109,
    "head": 214,
    "prop": 315,
    "rune": 293
  },
  {
    "idx": 3002,
    "name": "Charmer Devon of the Valley",
    "background": 1,
    "body": 62,
    "familiar": 119,
    "head": 131,
    "prop": 262,
    "rune": 300
  },
  {
    "idx": 3003,
    "name": "Artificer Merlon of the Wood",
    "background": 1,
    "body": 45,
    "familiar": 119,
    "head": 185,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 3004,
    "name": "Enchanter Calliope of the Realm",
    "background": 0,
    "body": 67,
    "familiar": 117,
    "head": 190,
    "prop": 265,
    "rune": 301
  },
  {
    "idx": 3005,
    "name": "Charmer Thana of the Brine",
    "background": 2,
    "body": 57,
    "familiar": 108,
    "head": 208,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 3006,
    "name": "Shaman Althea of the Moors",
    "background": 0,
    "body": 22,
    "familiar": 123,
    "head": 132,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 3007,
    "name": "Shaman Nicolas of Avalon",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 216,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3008,
    "name": "Illusionist Celah of the Veil",
    "background": 1,
    "body": 24,
    "familiar": 123,
    "head": 153,
    "prop": 246,
    "rune": 293
  },
  {
    "idx": 3009,
    "name": "Conjurer Drusilla of the Light",
    "background": 2,
    "body": 67,
    "familiar": 115,
    "head": 166,
    "prop": 273,
    "rune": 283
  },
  {
    "idx": 3010,
    "name": "Enchanter Sonja of the Psychic Leap",
    "background": 0,
    "body": 75,
    "familiar": 104,
    "head": 132,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3011,
    "name": "Sorcerer Allistair of the Bastion",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 238,
    "prop": 315,
    "rune": 283
  },
  {
    "idx": 3012,
    "name": "Sage Min of the Road",
    "background": 2,
    "body": 34,
    "familiar": 107,
    "head": 180,
    "prop": 277,
    "rune": 302
  },
  {
    "idx": 3013,
    "name": "Sorcerer Orpheus of the Realm",
    "background": 1,
    "body": 52,
    "familiar": 7777,
    "head": 202,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 3014,
    "name": "Alchemist Bartholomew of the Cosmos",
    "background": 2,
    "body": 67,
    "familiar": 105,
    "head": 216,
    "prop": 326,
    "rune": 284
  },
  {
    "idx": 3015,
    "name": "Arch-Magician Angus of the Havens",
    "background": 0,
    "body": 68,
    "familiar": 99,
    "head": 216,
    "prop": 253,
    "rune": 290
  },
  {
    "idx": 3016,
    "name": "Charmer Arabella of the Canyon",
    "background": 1,
    "body": 21,
    "familiar": 106,
    "head": 190,
    "prop": 253,
    "rune": 303
  },
  {
    "idx": 3017,
    "name": "Arch-Magician Ofaris of the Desert",
    "background": 1,
    "body": 61,
    "familiar": 94,
    "head": 238,
    "prop": 328,
    "rune": 294
  },
  {
    "idx": 3018,
    "name": "Solar Mage Velorina of the Plains",
    "background": 1,
    "body": 36,
    "familiar": 120,
    "head": 176,
    "prop": 339,
    "rune": 302
  },
  {
    "idx": 3019,
    "name": "Runecaster Robert of the Canyon",
    "background": 0,
    "body": 42,
    "familiar": 111,
    "head": 218,
    "prop": 340,
    "rune": 290
  },
  {
    "idx": 3020,
    "name": "Artificer Aldus of the Toadstools",
    "background": 3,
    "body": 28,
    "familiar": 120,
    "head": 212,
    "prop": 260,
    "rune": 297
  },
  {
    "idx": 3021,
    "name": "Sage Cybele of Elysium",
    "background": 2,
    "body": 62,
    "familiar": 110,
    "head": 139,
    "prop": 323,
    "rune": 302
  },
  {
    "idx": 3022,
    "name": "Cryptomancer Aleister of the Keep",
    "background": 3,
    "body": 76,
    "familiar": 110,
    "head": 197,
    "prop": 330,
    "rune": 291
  },
  {
    "idx": 3023,
    "name": "Transmuter Aleister of the Moors",
    "background": 1,
    "body": 79,
    "familiar": 105,
    "head": 160,
    "prop": 256,
    "rune": 300
  },
  {
    "idx": 3024,
    "name": "Voodoo Priest Eliphas of the Rock",
    "background": 1,
    "body": 60,
    "familiar": 7777,
    "head": 149,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 3025,
    "name": "Ofaris of the Hills",
    "background": 0,
    "body": 41,
    "familiar": 117,
    "head": 215,
    "prop": 249,
    "rune": 297
  },
  {
    "idx": 3026,
    "name": "Solar Mage Akron of the Desert",
    "background": 2,
    "body": 58,
    "familiar": 89,
    "head": 150,
    "prop": 309,
    "rune": 287
  },
  {
    "idx": 3027,
    "name": "Magus Ilyas from the Shadow",
    "background": 1,
    "body": 86,
    "familiar": 7777,
    "head": 219,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 3028,
    "name": "Druid Qasim of the Heath",
    "background": 3,
    "body": 41,
    "familiar": 110,
    "head": 142,
    "prop": 265,
    "rune": 293
  },
  {
    "idx": 3029,
    "name": "Archmagus Milo of the Wild",
    "background": 3,
    "body": 14,
    "familiar": 110,
    "head": 212,
    "prop": 318,
    "rune": 294
  },
  {
    "idx": 3030,
    "name": "Battle Mage Brutus of the Grotto",
    "background": 1,
    "body": 42,
    "familiar": 111,
    "head": 173,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 3031,
    "name": "Sorcerer Alizam of the Sands",
    "background": 2,
    "body": 58,
    "familiar": 94,
    "head": 237,
    "prop": 280,
    "rune": 292
  },
  {
    "idx": 3032,
    "name": "Apollo of the Event Horizon",
    "background": 2,
    "body": 83,
    "familiar": 120,
    "head": 127,
    "prop": 274,
    "rune": 283
  },
  {
    "idx": 3033,
    "name": "Geomancer Goomer of the Rock",
    "background": 3,
    "body": 27,
    "familiar": 7777,
    "head": 195,
    "prop": 308,
    "rune": 290
  },
  {
    "idx": 3034,
    "name": "Witch Velorina of Avalon",
    "background": 0,
    "body": 54,
    "familiar": 90,
    "head": 176,
    "prop": 334,
    "rune": 287
  },
  {
    "idx": 3035,
    "name": "Archmagus Ofaris of the Reach",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 230,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 3036,
    "name": "Witch Lilith of the Wold",
    "background": 0,
    "body": 21,
    "familiar": 101,
    "head": 176,
    "prop": 250,
    "rune": 296
  },
  {
    "idx": 3037,
    "name": "Enchanter Larissa of the Grotto",
    "background": 3,
    "body": 37,
    "familiar": 105,
    "head": 191,
    "prop": 332,
    "rune": 288
  },
  {
    "idx": 3038,
    "name": "Archmagus Celah of the Hollow",
    "background": 1,
    "body": 14,
    "familiar": 110,
    "head": 141,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 3039,
    "name": "Enchanter Artis of the Valley",
    "background": 3,
    "body": 22,
    "familiar": 107,
    "head": 191,
    "prop": 271,
    "rune": 300
  },
  {
    "idx": 3040,
    "name": "Medium Le Blanc of the Tower",
    "background": 2,
    "body": 76,
    "familiar": 95,
    "head": 149,
    "prop": 251,
    "rune": 282
  },
  {
    "idx": 3041,
    "name": "Archmagus Alizam of the Court",
    "background": 3,
    "body": 78,
    "familiar": 88,
    "head": 128,
    "prop": 334,
    "rune": 293
  },
  {
    "idx": 3042,
    "name": "Conjurer Aleister of the Desert",
    "background": 1,
    "body": 61,
    "familiar": 103,
    "head": 214,
    "prop": 246,
    "rune": 288
  },
  {
    "idx": 3043,
    "name": "Adept Devo of the Steppe",
    "background": 3,
    "body": 43,
    "familiar": 106,
    "head": 169,
    "prop": 327,
    "rune": 283
  },
  {
    "idx": 3044,
    "name": "Althea of the Veil",
    "background": 1,
    "body": 11,
    "familiar": 115,
    "head": 187,
    "prop": 270,
    "rune": 294
  },
  {
    "idx": 3045,
    "name": "Holy Arcanist Illuminus of the Salt",
    "background": 0,
    "body": 57,
    "familiar": 122,
    "head": 170,
    "prop": 266,
    "rune": 297
  },
  {
    "idx": 3046,
    "name": "Charmer Sonja of the Canyon",
    "background": 1,
    "body": 35,
    "familiar": 111,
    "head": 187,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 3047,
    "name": "Archmagus Alatar of the Hollow",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 199,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3048,
    "name": "Arch-Magician Bathsheba of the Valley",
    "background": 1,
    "body": 35,
    "familiar": 99,
    "head": 190,
    "prop": 324,
    "rune": 292
  },
  {
    "idx": 3049,
    "name": "Charmer Sondra of the Sands",
    "background": 1,
    "body": 27,
    "familiar": 105,
    "head": 208,
    "prop": 277,
    "rune": 282
  },
  {
    "idx": 3050,
    "name": "Hedge Wizard Aiko of Avalon",
    "background": 2,
    "body": 54,
    "familiar": 107,
    "head": 126,
    "prop": 265,
    "rune": 297
  },
  {
    "idx": 3051,
    "name": "Shaman Armstrong of the Sun",
    "background": 2,
    "body": 58,
    "familiar": 99,
    "head": 204,
    "prop": 316,
    "rune": 302
  },
  {
    "idx": 3052,
    "name": "Adept Corky of the Carnival",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 201,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 3053,
    "name": "Sorcerer Lumos of the Bibliotheca",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 226,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 3054,
    "name": "Alchemist Ifran of the Tower",
    "background": 1,
    "body": 62,
    "familiar": 7777,
    "head": 128,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 3055,
    "name": "Battle Mage Nolan of the Villa",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 213,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3056,
    "name": "Soya of the Tower",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 199,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 3057,
    "name": "Battle Mage Homer of the Wood",
    "background": 1,
    "body": 12,
    "familiar": 105,
    "head": 183,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 3058,
    "name": "Archmagus Gino of the Canyon",
    "background": 0,
    "body": 15,
    "familiar": 93,
    "head": 201,
    "prop": 316,
    "rune": 302
  },
  {
    "idx": 3059,
    "name": "Battle Mage Tundror of the Wild",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 217,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 3060,
    "name": "Archmagus Amir of the Citadel",
    "background": 1,
    "body": 77,
    "familiar": 7777,
    "head": 229,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 3061,
    "name": "Witch Elena of the Rock",
    "background": 0,
    "body": 60,
    "familiar": 97,
    "head": 159,
    "prop": 247,
    "rune": 298
  },
  {
    "idx": 3062,
    "name": "Wild Mage Alatar of the Mountain",
    "background": 1,
    "body": 79,
    "familiar": 107,
    "head": 228,
    "prop": 321,
    "rune": 291
  },
  {
    "idx": 3063,
    "name": "Runecaster Udor of the Bibliotheca",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 233,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 3064,
    "name": "Shadow Mage Lilith of the Grotto",
    "background": 0,
    "body": 38,
    "familiar": 123,
    "head": 155,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 3065,
    "name": "Sorcerer Alatar of the Ice",
    "background": 1,
    "body": 73,
    "familiar": 90,
    "head": 238,
    "prop": 249,
    "rune": 301
  },
  {
    "idx": 3066,
    "name": "Electromancer Flynn of the Event Horizon",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 183,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 3067,
    "name": "Battle Mage Tundror of the Rock",
    "background": 3,
    "body": 27,
    "familiar": 111,
    "head": 165,
    "prop": 266,
    "rune": 301
  },
  {
    "idx": 3068,
    "name": "Aeromancer Udor of the Bastion",
    "background": 2,
    "body": 78,
    "familiar": 97,
    "head": 153,
    "prop": 315,
    "rune": 298
  },
  {
    "idx": 3069,
    "name": "Archmagus",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 127,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 3070,
    "name": "Shadow Mage Galatea of the Forest",
    "background": 2,
    "body": 39,
    "familiar": 93,
    "head": 191,
    "prop": 332,
    "rune": 298
  },
  {
    "idx": 3071,
    "name": "Sage Soya of the Valley",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 174,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3072,
    "name": "Hedge Wizard Daphne of the River",
    "background": 0,
    "body": 35,
    "familiar": 107,
    "head": 135,
    "prop": 312,
    "rune": 300
  },
  {
    "idx": 3073,
    "name": "Sorcerer Milo of the Hall",
    "background": 0,
    "body": 46,
    "familiar": 111,
    "head": 141,
    "prop": 253,
    "rune": 288
  },
  {
    "idx": 3074,
    "name": "Hydromancer Zafar of the Mount",
    "background": 1,
    "body": 49,
    "familiar": 107,
    "head": 128,
    "prop": 314,
    "rune": 293
  },
  {
    "idx": 3075,
    "name": "Charmer Sondra of the Psychic Leap",
    "background": 2,
    "body": 75,
    "familiar": 114,
    "head": 139,
    "prop": 254,
    "rune": 287
  },
  {
    "idx": 3076,
    "name": "Illusionist Zaros of the Hall",
    "background": 1,
    "body": 76,
    "familiar": 97,
    "head": 160,
    "prop": 246,
    "rune": 303
  },
  {
    "idx": 3077,
    "name": "Mystic Huizhong of the Berg",
    "background": 3,
    "body": 73,
    "familiar": 110,
    "head": 236,
    "prop": 318,
    "rune": 288
  },
  {
    "idx": 3078,
    "name": "Enchanter Xiaobo of the Steppe",
    "background": 3,
    "body": 43,
    "familiar": 7777,
    "head": 236,
    "prop": 252,
    "rune": 287
  },
  {
    "idx": 3079,
    "name": "Archmagus Toka of the Hollow",
    "background": 2,
    "body": 18,
    "familiar": 120,
    "head": 171,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3080,
    "name": "Artificer Gunthor of the Hall",
    "background": 0,
    "body": 19,
    "familiar": 7777,
    "head": 177,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 3081,
    "name": "Druid Allistair of the Marsh",
    "background": 0,
    "body": 19,
    "familiar": 123,
    "head": 138,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 3082,
    "name": "Enchanter Salvatore of the Sun",
    "background": 1,
    "body": 27,
    "familiar": 109,
    "head": 138,
    "prop": 245,
    "rune": 300
  },
  {
    "idx": 3083,
    "name": "Archmagus Soya of the Veil",
    "background": 1,
    "body": 11,
    "familiar": 103,
    "head": 211,
    "prop": 277,
    "rune": 291
  },
  {
    "idx": 3084,
    "name": "Enchanter Casper of the Psychic Leap",
    "background": 0,
    "body": 75,
    "familiar": 123,
    "head": 127,
    "prop": 252,
    "rune": 293
  },
  {
    "idx": 3085,
    "name": "Arcanist Cybele of the Grotto",
    "background": 3,
    "body": 22,
    "familiar": 105,
    "head": 208,
    "prop": 332,
    "rune": 292
  },
  {
    "idx": 3086,
    "name": "Pyromancer Jay of the Psychic Leap",
    "background": 3,
    "body": 9,
    "familiar": 105,
    "head": 144,
    "prop": 309,
    "rune": 300
  },
  {
    "idx": 3087,
    "name": "Battle Mage Robert of the Desert",
    "background": 0,
    "body": 58,
    "familiar": 99,
    "head": 133,
    "prop": 267,
    "rune": 290
  },
  {
    "idx": 3088,
    "name": "Enchanter Lamia of the Oasis",
    "background": 0,
    "body": 60,
    "familiar": 104,
    "head": 131,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 3089,
    "name": "Geomancer Ariadne of the Citadel",
    "background": 1,
    "body": 77,
    "familiar": 103,
    "head": 131,
    "prop": 308,
    "rune": 285
  },
  {
    "idx": 3090,
    "name": "Azahl",
    "background": 2,
    "body": 52,
    "familiar": 95,
    "head": 127,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 3091,
    "name": "Pyromancer Milo of the Astral Plane",
    "background": 1,
    "body": 67,
    "familiar": 104,
    "head": 226,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3092,
    "name": "Archmagus Jasper of the Rock",
    "background": 0,
    "body": 60,
    "familiar": 115,
    "head": 125,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 3093,
    "name": "Geomancer Dante of the Brambles",
    "background": 0,
    "body": 13,
    "familiar": 111,
    "head": 133,
    "prop": 308,
    "rune": 299
  },
  {
    "idx": 3094,
    "name": "Cosmic Mage Magpie of the Marsh",
    "background": 0,
    "body": 14,
    "familiar": 93,
    "head": 144,
    "prop": 309,
    "rune": 284
  },
  {
    "idx": 3095,
    "name": "Battle Mage Ulysse of Xanadu",
    "background": 3,
    "body": 8,
    "familiar": 88,
    "head": 206,
    "prop": 253,
    "rune": 292
  },
  {
    "idx": 3096,
    "name": "Cryptomancer Elena of the Villa",
    "background": 0,
    "body": 76,
    "familiar": 114,
    "head": 209,
    "prop": 338,
    "rune": 297
  },
  {
    "idx": 3097,
    "name": "Battlemage Pierre of the Citadel",
    "background": 0,
    "body": 77,
    "familiar": 95,
    "head": 149,
    "prop": 329,
    "rune": 284
  },
  {
    "idx": 3098,
    "name": "Witch Sylvia of the Heath",
    "background": 2,
    "body": 38,
    "familiar": 107,
    "head": 223,
    "prop": 273,
    "rune": 283
  },
  {
    "idx": 3099,
    "name": "Shadow Mage Xiaobo of the Mist",
    "background": 1,
    "body": 62,
    "familiar": 110,
    "head": 236,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 3100,
    "name": "Adept Hank of the Sands",
    "background": 0,
    "body": 61,
    "familiar": 123,
    "head": 144,
    "prop": 249,
    "rune": 299
  },
  {
    "idx": 3101,
    "name": "Cleric Milton of the Realm",
    "background": 1,
    "body": 30,
    "familiar": 105,
    "head": 192,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 3102,
    "name": "Crowley of the Platonic Shadow",
    "background": 0,
    "body": 75,
    "familiar": 120,
    "head": 185,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 3103,
    "name": "Evoker Jerret of the River",
    "background": 1,
    "body": 41,
    "familiar": 114,
    "head": 174,
    "prop": 338,
    "rune": 285
  },
  {
    "idx": 3104,
    "name": "Cosmic Mage George of Xanadu",
    "background": 3,
    "body": 9,
    "familiar": 109,
    "head": 238,
    "prop": 309,
    "rune": 295
  },
  {
    "idx": 3105,
    "name": "Druid Magpie of the Quantum Shadow",
    "background": 2,
    "body": 87,
    "familiar": 93,
    "head": 144,
    "prop": 319,
    "rune": 297
  },
  {
    "idx": 3106,
    "name": "Shadow Mage Rook of the Isle",
    "background": 0,
    "body": 57,
    "familiar": 116,
    "head": 144,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 3107,
    "name": "Arch-Magician Rowena of the Canyon",
    "background": 2,
    "body": 19,
    "familiar": 116,
    "head": 166,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 3108,
    "name": "Geomancer JackDaw of the Platonic Shadow",
    "background": 2,
    "body": 11,
    "familiar": 112,
    "head": 144,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 3109,
    "name": "Magus Aden of the Quantum Downs",
    "background": 3,
    "body": 52,
    "familiar": 114,
    "head": 207,
    "prop": 322,
    "rune": 291
  },
  {
    "idx": 3110,
    "name": "Carly of the Brambles",
    "background": 2,
    "body": 21,
    "familiar": 119,
    "head": 135,
    "prop": 259,
    "rune": 295
  },
  {
    "idx": 3111,
    "name": "Thaumaturge Amir of the Wood",
    "background": 3,
    "body": 14,
    "familiar": 90,
    "head": 138,
    "prop": 256,
    "rune": 296
  },
  {
    "idx": 3112,
    "name": "Arcanist Aubergine of the Wood",
    "background": 3,
    "body": 81,
    "familiar": 112,
    "head": 154,
    "prop": 334,
    "rune": 298
  },
  {
    "idx": 3113,
    "name": "Mystic Toka of the Wood",
    "background": 2,
    "body": 19,
    "familiar": 95,
    "head": 235,
    "prop": 318,
    "rune": 296
  },
  {
    "idx": 3114,
    "name": "Artificer Goliath of the Sun",
    "background": 1,
    "body": 58,
    "familiar": 111,
    "head": 204,
    "prop": 260,
    "rune": 300
  },
  {
    "idx": 3115,
    "name": "Battlemage Jeldor of the Ice",
    "background": 1,
    "body": 73,
    "familiar": 112,
    "head": 199,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 3116,
    "name": "Druid Bullock of the Grotto",
    "background": 2,
    "body": 15,
    "familiar": 89,
    "head": 193,
    "prop": 319,
    "rune": 300
  },
  {
    "idx": 3117,
    "name": "Alchemist Gary of the Bibliotheca",
    "background": 2,
    "body": 62,
    "familiar": 94,
    "head": 165,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 3118,
    "name": "Sorcerer Oberon of the Veil",
    "background": 0,
    "body": 29,
    "familiar": 115,
    "head": 212,
    "prop": 267,
    "rune": 303
  },
  {
    "idx": 3119,
    "name": "Archmagus Eden of the Hall",
    "background": 1,
    "body": 46,
    "familiar": 88,
    "head": 226,
    "prop": 258,
    "rune": 285
  },
  {
    "idx": 3120,
    "name": "Electromancer Zelda of the Mist",
    "background": 3,
    "body": 55,
    "familiar": 117,
    "head": 176,
    "prop": 305,
    "rune": 295
  },
  {
    "idx": 3121,
    "name": "Augurer Corvin of Atlantis",
    "background": 1,
    "body": 57,
    "familiar": 105,
    "head": 144,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 3122,
    "name": "Magus Dr. Death of Xanadu",
    "background": 1,
    "body": 10,
    "familiar": 116,
    "head": 194,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 3123,
    "name": "Mina of the Canyon",
    "background": 1,
    "body": 38,
    "familiar": 101,
    "head": 191,
    "prop": 316,
    "rune": 292
  },
  {
    "idx": 3124,
    "name": "Cleric Ravana of the River",
    "background": 1,
    "body": 43,
    "familiar": 112,
    "head": 207,
    "prop": 327,
    "rune": 282
  },
  {
    "idx": 3125,
    "name": "Artificer Suki of the Moors",
    "background": 1,
    "body": 15,
    "familiar": 115,
    "head": 171,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 3126,
    "name": "Charmer Sondra of the Grotto",
    "background": 3,
    "body": 38,
    "familiar": 106,
    "head": 208,
    "prop": 334,
    "rune": 285
  },
  {
    "idx": 3127,
    "name": "Layla of the Valley",
    "background": 0,
    "body": 38,
    "familiar": 111,
    "head": 130,
    "prop": 273,
    "rune": 288
  },
  {
    "idx": 3128,
    "name": "Archmagus Celah of the Tower",
    "background": 0,
    "body": 54,
    "familiar": 112,
    "head": 189,
    "prop": 246,
    "rune": 287
  },
  {
    "idx": 3129,
    "name": "Diviner Eric of the Crag",
    "background": 0,
    "body": 65,
    "familiar": 120,
    "head": 165,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 3130,
    "name": "Aeromancer Lin of the Canyon",
    "background": 1,
    "body": 34,
    "familiar": 123,
    "head": 180,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 3131,
    "name": "Archmagus Jerret of the Road",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 192,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 3132,
    "name": "Shaman Sahir of the Bastion",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 128,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3133,
    "name": "Arch-Magician Fugh of the Marsh",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 200,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 3134,
    "name": "Ghost Eater Soya of Elysium",
    "background": 0,
    "body": 63,
    "familiar": 111,
    "head": 197,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 3135,
    "name": "Archmagus Zaros of the Brine",
    "background": 0,
    "body": 57,
    "familiar": 7777,
    "head": 185,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3136,
    "name": "Archmagus Jerret of the Brambles",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 229,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 3137,
    "name": "Adept Enigma of the Mist",
    "background": 0,
    "body": 62,
    "familiar": 123,
    "head": 159,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 3138,
    "name": "Conjurer Crackerjack of the Mount",
    "background": 0,
    "body": 54,
    "familiar": 112,
    "head": 144,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 3139,
    "name": "Sorcerer Salah of the Salt",
    "background": 0,
    "body": 57,
    "familiar": 95,
    "head": 128,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 3140,
    "name": "Sorcerer Crowley of the Plains",
    "background": 2,
    "body": 42,
    "familiar": 115,
    "head": 199,
    "prop": 332,
    "rune": 299
  },
  {
    "idx": 3141,
    "name": "Shaman Durm of the Palms",
    "background": 0,
    "body": 58,
    "familiar": 7777,
    "head": 177,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 3142,
    "name": "Archmagus David of the Riviera",
    "background": 1,
    "body": 82,
    "familiar": 111,
    "head": 202,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 3143,
    "name": "Archmagus Ming of the Plains",
    "background": 2,
    "body": 36,
    "familiar": 104,
    "head": 180,
    "prop": 249,
    "rune": 304
  },
  {
    "idx": 3144,
    "name": "Shaman Ozohr of the Marsh",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 138,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3145,
    "name": "Arch-Magician Aden of the Forest",
    "background": 1,
    "body": 12,
    "familiar": 7777,
    "head": 150,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 3146,
    "name": "Charmer Lamia of the Cosmos",
    "background": 2,
    "body": 24,
    "familiar": 88,
    "head": 132,
    "prop": 325,
    "rune": 304
  },
  {
    "idx": 3147,
    "name": "Magus Tumbaj of the Mount",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 164,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 3148,
    "name": "Archmagus Merlon of the Obelisk",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 214,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 3149,
    "name": "Sage Orpheus of the Hollow",
    "background": 3,
    "body": 15,
    "familiar": 116,
    "head": 226,
    "prop": 252,
    "rune": 303
  },
  {
    "idx": 3150,
    "name": "Enchanter Devon of the Wild",
    "background": 0,
    "body": 37,
    "familiar": 114,
    "head": 135,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 3151,
    "name": "Archmagus Ozohr of the Tower",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 197,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 3152,
    "name": "Sorcerer Nazim of the Desert",
    "background": 0,
    "body": 5,
    "familiar": 94,
    "head": 237,
    "prop": 315,
    "rune": 303
  },
  {
    "idx": 3153,
    "name": "Void Disciple Mina of the Steppe",
    "background": 1,
    "body": 21,
    "familiar": 7777,
    "head": 187,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 3154,
    "name": "Archmagus Ixar in the Shadows",
    "background": 2,
    "body": 85,
    "familiar": 93,
    "head": 127,
    "prop": 323,
    "rune": 296
  },
  {
    "idx": 3155,
    "name": "Enchanter Artis of the Moors",
    "background": 1,
    "body": 36,
    "familiar": 114,
    "head": 139,
    "prop": 265,
    "rune": 285
  },
  {
    "idx": 3156,
    "name": "Sage Milo",
    "background": 1,
    "body": 75,
    "familiar": 7777,
    "head": 147,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 3157,
    "name": "Witch Velorina of the Keep",
    "background": 3,
    "body": 54,
    "familiar": 103,
    "head": 155,
    "prop": 276,
    "rune": 291
  },
  {
    "idx": 3158,
    "name": "Ghost Eater Lucinda of the Belfry",
    "background": 2,
    "body": 6,
    "familiar": 114,
    "head": 209,
    "prop": 254,
    "rune": 304
  },
  {
    "idx": 3159,
    "name": "Enchanter Faye of the Hollow",
    "background": 2,
    "body": 13,
    "familiar": 124,
    "head": 131,
    "prop": 310,
    "rune": 295
  },
  {
    "idx": 3160,
    "name": "Sorcerer Solomon of the Quantum Downs",
    "background": 3,
    "body": 68,
    "familiar": 108,
    "head": 162,
    "prop": 258,
    "rune": 298
  },
  {
    "idx": 3161,
    "name": "Sorcerer Jabir of the Hills",
    "background": 0,
    "body": 12,
    "familiar": 123,
    "head": 237,
    "prop": 306,
    "rune": 283
  },
  {
    "idx": 3162,
    "name": "Archmagus Zaros of the Lake",
    "background": 0,
    "body": 41,
    "familiar": 110,
    "head": 186,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 3163,
    "name": "Archmagus Zelroth of the Keep",
    "background": 1,
    "body": 50,
    "familiar": 7777,
    "head": 162,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 3164,
    "name": "Archmagus Pumlo of the Event Horizon",
    "background": 1,
    "body": 24,
    "familiar": 7777,
    "head": 197,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 3165,
    "name": "Archmagus  of the Mountain",
    "background": 1,
    "body": 15,
    "familiar": 89,
    "head": 138,
    "prop": 316,
    "rune": 303
  },
  {
    "idx": 3166,
    "name": "Sorcerer Merlon of the Salt",
    "background": 1,
    "body": 57,
    "familiar": 7777,
    "head": 227,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 3167,
    "name": "Pyromancer Bobbin of the Marsh",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 201,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3168,
    "name": "Artificer Raul of the Gnostics",
    "background": 1,
    "body": 83,
    "familiar": 103,
    "head": 234,
    "prop": 258,
    "rune": 301
  },
  {
    "idx": 3169,
    "name": "Charmer Diana of the Wild",
    "background": 2,
    "body": 35,
    "familiar": 114,
    "head": 191,
    "prop": 265,
    "rune": 293
  },
  {
    "idx": 3170,
    "name": "Basil of the Gnostics",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 202,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 3171,
    "name": "Archmagus Celah of the Veil",
    "background": 1,
    "body": 16,
    "familiar": 105,
    "head": 225,
    "prop": 278,
    "rune": 7777
  },
  {
    "idx": 3172,
    "name": "Mystic Aleister of the Hollow",
    "background": 2,
    "body": 43,
    "familiar": 103,
    "head": 233,
    "prop": 338,
    "rune": 302
  },
  {
    "idx": 3173,
    "name": "Scryer Rocco of the Havens",
    "background": 1,
    "body": 11,
    "familiar": 88,
    "head": 207,
    "prop": 251,
    "rune": 283
  },
  {
    "idx": 3174,
    "name": "Battle Mage Malthus of the Valley",
    "background": 0,
    "body": 23,
    "familiar": 7777,
    "head": 204,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 3175,
    "name": "Zaros",
    "background": 1,
    "body": 24,
    "familiar": 7777,
    "head": 147,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 3176,
    "name": "Adept Nazim of the Villa",
    "background": 0,
    "body": 74,
    "familiar": 7777,
    "head": 219,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 3177,
    "name": "Arcanist Alvaro of Mu",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 207,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 3178,
    "name": "Diabolist Ariadne of the Keep",
    "background": 2,
    "body": 46,
    "familiar": 103,
    "head": 187,
    "prop": 248,
    "rune": 293
  },
  {
    "idx": 3179,
    "name": "Shaman Cullen of the Heath",
    "background": 2,
    "body": 79,
    "familiar": 119,
    "head": 207,
    "prop": 276,
    "rune": 291
  },
  {
    "idx": 3180,
    "name": "Battle Mage Brutus of the Sands",
    "background": 2,
    "body": 59,
    "familiar": 115,
    "head": 218,
    "prop": 276,
    "rune": 296
  },
  {
    "idx": 3181,
    "name": "Adept Elizabeth of Elysium",
    "background": 1,
    "body": 62,
    "familiar": 112,
    "head": 155,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 3182,
    "name": "Hedge Wizard Karasu of the Keep",
    "background": 3,
    "body": 54,
    "familiar": 105,
    "head": 243,
    "prop": 265,
    "rune": 297
  },
  {
    "idx": 3183,
    "name": "Evoker Kalo of the Citadel",
    "background": 1,
    "body": 48,
    "familiar": 103,
    "head": 235,
    "prop": 338,
    "rune": 297
  },
  {
    "idx": 3184,
    "name": "Void Disciple Orpheus of the Villa",
    "background": 0,
    "body": 74,
    "familiar": 7777,
    "head": 185,
    "prop": 274,
    "rune": 287
  },
  {
    "idx": 3185,
    "name": "Casper of the Wood",
    "background": 1,
    "body": 41,
    "familiar": 7777,
    "head": 185,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 3186,
    "name": "Geomancer Bayard of the Glacier",
    "background": 1,
    "body": 65,
    "familiar": 7777,
    "head": 217,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 3187,
    "name": "Archmagus Amir of Avalon",
    "background": 1,
    "body": 6,
    "familiar": 7777,
    "head": 233,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 3188,
    "name": "Battle Mage Nolan of the Mount",
    "background": 1,
    "body": 7,
    "familiar": 120,
    "head": 129,
    "prop": 250,
    "rune": 284
  },
  {
    "idx": 3189,
    "name": "Isaac of the Plains",
    "background": 1,
    "body": 19,
    "familiar": 115,
    "head": 227,
    "prop": 314,
    "rune": 292
  },
  {
    "idx": 3190,
    "name": "Medium Hansel of the Hollow",
    "background": 0,
    "body": 42,
    "familiar": 97,
    "head": 220,
    "prop": 245,
    "rune": 303
  },
  {
    "idx": 3191,
    "name": "Hedge Wizard Alessar of Mu",
    "background": 1,
    "body": 75,
    "familiar": 7777,
    "head": 174,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 3192,
    "name": "Cosmic Mage Sturgis of the Atheneum",
    "background": 1,
    "body": 50,
    "familiar": 111,
    "head": 182,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 3193,
    "name": "Pyromancer Tengu of the Wold",
    "background": 3,
    "body": 84,
    "familiar": 107,
    "head": 243,
    "prop": 277,
    "rune": 299
  },
  {
    "idx": 3194,
    "name": "Hydromancer Wolfram of the Plains",
    "background": 1,
    "body": 12,
    "familiar": 111,
    "head": 188,
    "prop": 314,
    "rune": 290
  },
  {
    "idx": 3195,
    "name": "Diabolist Gorgana of the Wold",
    "background": 0,
    "body": 82,
    "familiar": 115,
    "head": 166,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 3196,
    "name": "Sage Aslan of the Realm",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 188,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 3197,
    "name": "Pyromancer Ivy of the Obelisk",
    "background": 0,
    "body": 49,
    "familiar": 93,
    "head": 176,
    "prop": 309,
    "rune": 285
  },
  {
    "idx": 3198,
    "name": "Artificer George of the Mist",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 138,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 3199,
    "name": "Hex Mage Hagar of the Psychic Leap",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 188,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3200,
    "name": "Shadow Mage Izible of the Havens",
    "background": 1,
    "body": 75,
    "familiar": 110,
    "head": 235,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 3201,
    "name": "Mystic Onaxx of the Gnostics",
    "background": 2,
    "body": 52,
    "familiar": 110,
    "head": 207,
    "prop": 338,
    "rune": 290
  },
  {
    "idx": 3202,
    "name": "Cryptomancer Jastor of the Mist",
    "background": 2,
    "body": 6,
    "familiar": 103,
    "head": 235,
    "prop": 310,
    "rune": 285
  },
  {
    "idx": 3203,
    "name": "Sorcerer Alatar of the Keep",
    "background": 1,
    "body": 74,
    "familiar": 90,
    "head": 189,
    "prop": 249,
    "rune": 301
  },
  {
    "idx": 3204,
    "name": "Shadow Mage Marceline of the Grotto",
    "background": 3,
    "body": 36,
    "familiar": 120,
    "head": 209,
    "prop": 309,
    "rune": 283
  },
  {
    "idx": 3205,
    "name": "Artificer Trollin of Xanadu",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 200,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 3206,
    "name": "Summoner Milo of the Havens",
    "background": 0,
    "body": 10,
    "familiar": 7777,
    "head": 153,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 3207,
    "name": "Enchanter Rita of the Circle",
    "background": 0,
    "body": 28,
    "familiar": 114,
    "head": 223,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 3208,
    "name": "Necromancer Vossler of the Mist",
    "background": 2,
    "body": 55,
    "familiar": 103,
    "head": 205,
    "prop": 328,
    "rune": 293
  },
  {
    "idx": 3209,
    "name": "Alchemist Impy of the Toadstools",
    "background": 1,
    "body": 30,
    "familiar": 119,
    "head": 171,
    "prop": 268,
    "rune": 284
  },
  {
    "idx": 3210,
    "name": "Archmagus Ixar in the Shadows",
    "background": 0,
    "body": 87,
    "familiar": 112,
    "head": 153,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 3211,
    "name": "Sorcerer George of the Tower",
    "background": 3,
    "body": 63,
    "familiar": 97,
    "head": 214,
    "prop": 273,
    "rune": 293
  },
  {
    "idx": 3212,
    "name": "Archmagus Alessar of the Hall",
    "background": 2,
    "body": 77,
    "familiar": 90,
    "head": 214,
    "prop": 266,
    "rune": 292
  },
  {
    "idx": 3213,
    "name": "Sage Ursula of the Forest",
    "background": 3,
    "body": 36,
    "familiar": 119,
    "head": 209,
    "prop": 266,
    "rune": 297
  },
  {
    "idx": 3214,
    "name": "Arch-Magician Karasu of the Plains",
    "background": 1,
    "body": 15,
    "familiar": 89,
    "head": 243,
    "prop": 321,
    "rune": 287
  },
  {
    "idx": 3215,
    "name": "Archmagus Ixar of the Capital",
    "background": 2,
    "body": 78,
    "familiar": 88,
    "head": 137,
    "prop": 334,
    "rune": 294
  },
  {
    "idx": 3216,
    "name": "Sorcerer Cairon of Alfheim",
    "background": 3,
    "body": 30,
    "familiar": 107,
    "head": 212,
    "prop": 309,
    "rune": 292
  },
  {
    "idx": 3217,
    "name": "Sage Finn of the Havens",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 188,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 3218,
    "name": "Thaumaturge Magnus of the Steppe",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 213,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 3219,
    "name": "Battlemage Hagar of Cuckoo Land",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 203,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3220,
    "name": "Arcanist Dr. Death of the Ether",
    "background": 3,
    "body": 24,
    "familiar": 96,
    "head": 241,
    "prop": 336,
    "rune": 287
  },
  {
    "idx": 3221,
    "name": "Charmer Galatea of the Hills",
    "background": 1,
    "body": 34,
    "familiar": 110,
    "head": 191,
    "prop": 327,
    "rune": 304
  },
  {
    "idx": 3222,
    "name": "Clairvoyant Baptiste of the Tower",
    "background": 0,
    "body": 54,
    "familiar": 89,
    "head": 179,
    "prop": 245,
    "rune": 299
  },
  {
    "idx": 3223,
    "name": "Alchemist Suyin of the Keep",
    "background": 1,
    "body": 40,
    "familiar": 123,
    "head": 180,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 3224,
    "name": "Aldus of the Riviera",
    "background": 3,
    "body": 17,
    "familiar": 90,
    "head": 211,
    "prop": 249,
    "rune": 294
  },
  {
    "idx": 3225,
    "name": "Pyromancer Eden of the Mist",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 153,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3226,
    "name": "Hedge Wizard Sturgis of the Reach",
    "background": 1,
    "body": 15,
    "familiar": 106,
    "head": 218,
    "prop": 312,
    "rune": 303
  },
  {
    "idx": 3227,
    "name": "Archmagus Gellert of the Astral Plane",
    "background": 3,
    "body": 52,
    "familiar": 114,
    "head": 207,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 3228,
    "name": "Archmagus Solomon of the Bibliotheca",
    "background": 1,
    "body": 63,
    "familiar": 7777,
    "head": 153,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 3229,
    "name": "Conjurer Samael of the Capital",
    "background": 0,
    "body": 40,
    "familiar": 101,
    "head": 242,
    "prop": 311,
    "rune": 304
  },
  {
    "idx": 3230,
    "name": "Geomancer Hothor of the Moors",
    "background": 0,
    "body": 23,
    "familiar": 95,
    "head": 204,
    "prop": 308,
    "rune": 298
  },
  {
    "idx": 3231,
    "name": "Arcanist Victoria of the Hills",
    "background": 2,
    "body": 44,
    "familiar": 120,
    "head": 208,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3232,
    "name": "Void Disciple Azahl in the Shadows",
    "background": 2,
    "body": 86,
    "familiar": 97,
    "head": 186,
    "prop": 307,
    "rune": 285
  },
  {
    "idx": 3233,
    "name": "Spellsinger Ursula of Avalon",
    "background": 1,
    "body": 54,
    "familiar": 109,
    "head": 176,
    "prop": 247,
    "rune": 284
  },
  {
    "idx": 3234,
    "name": "Archmagus Milo of the Havens",
    "background": 1,
    "body": 8,
    "familiar": 94,
    "head": 202,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 3235,
    "name": "Archmagus Eizo of the Event Horizon",
    "background": 2,
    "body": 11,
    "familiar": 93,
    "head": 230,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 3236,
    "name": "Alchemist Kalo of the Bastion",
    "background": 3,
    "body": 74,
    "familiar": 119,
    "head": 235,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 3237,
    "name": "Aeromancer Zelroth of the Mount",
    "background": 0,
    "body": 62,
    "familiar": 111,
    "head": 215,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 3238,
    "name": "Battle Mage Baird of the Sea",
    "background": 0,
    "body": 80,
    "familiar": 99,
    "head": 165,
    "prop": 314,
    "rune": 290
  },
  {
    "idx": 3239,
    "name": "Sorcerer Lux of the Tower",
    "background": 1,
    "body": 62,
    "familiar": 94,
    "head": 186,
    "prop": 248,
    "rune": 293
  },
  {
    "idx": 3240,
    "name": "Geomancer Poppy of the Lake",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 200,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 3241,
    "name": "Magus Malthus of the Field",
    "background": 0,
    "body": 42,
    "familiar": 101,
    "head": 220,
    "prop": 266,
    "rune": 297
  },
  {
    "idx": 3242,
    "name": "Alchemist Carly of the Circle",
    "background": 0,
    "body": 28,
    "familiar": 103,
    "head": 208,
    "prop": 323,
    "rune": 291
  },
  {
    "idx": 3243,
    "name": "Mystic Reza of the Capital",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 219,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 3244,
    "name": "Udor of the Sands",
    "background": 2,
    "body": 60,
    "familiar": 123,
    "head": 186,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 3245,
    "name": "Archmagus Apollo of the Platonic Shadow",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 233,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3246,
    "name": "Archmagus Isaac of the Ether",
    "background": 1,
    "body": 11,
    "familiar": 7777,
    "head": 202,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3247,
    "name": "Magus Lamia of the Carnival",
    "background": 2,
    "body": 29,
    "familiar": 104,
    "head": 159,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 3248,
    "name": "Battle Mage Hagar of the Keep",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 203,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 3249,
    "name": "Charmer Maia of the Valley",
    "background": 1,
    "body": 44,
    "familiar": 123,
    "head": 191,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 3250,
    "name": "Alchemist Gellert of the Sea",
    "background": 0,
    "body": 57,
    "familiar": 108,
    "head": 207,
    "prop": 268,
    "rune": 302
  },
  {
    "idx": 3251,
    "name": "Sorcerer Cairon of the Atheneum",
    "background": 3,
    "body": 54,
    "familiar": 97,
    "head": 215,
    "prop": 320,
    "rune": 295
  },
  {
    "idx": 3252,
    "name": "Battle Mage Aslan of the Surf",
    "background": 0,
    "body": 80,
    "familiar": 103,
    "head": 217,
    "prop": 280,
    "rune": 294
  },
  {
    "idx": 3253,
    "name": "Allistair of the Capital",
    "background": 2,
    "body": 48,
    "familiar": 88,
    "head": 230,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 3254,
    "name": "Hydromancer Wazir of the Sea",
    "background": 3,
    "body": 57,
    "familiar": 93,
    "head": 142,
    "prop": 314,
    "rune": 291
  },
  {
    "idx": 3255,
    "name": "Cleric Axel of the Mount",
    "background": 1,
    "body": 50,
    "familiar": 97,
    "head": 218,
    "prop": 306,
    "rune": 293
  },
  {
    "idx": 3256,
    "name": "Illusionist  of the Keep",
    "background": 2,
    "body": 63,
    "familiar": 119,
    "head": 195,
    "prop": 273,
    "rune": 286
  },
  {
    "idx": 3257,
    "name": "Electromancer Allistair",
    "background": 1,
    "body": 52,
    "familiar": 90,
    "head": 212,
    "prop": 305,
    "rune": 304
  },
  {
    "idx": 3258,
    "name": "Clairvoyant Aiko of the Astral Plane",
    "background": 3,
    "body": 67,
    "familiar": 105,
    "head": 126,
    "prop": 251,
    "rune": 293
  },
  {
    "idx": 3259,
    "name": "Archmagus Sharx of the Capital",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 178,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3260,
    "name": "Archmagus Fark of the Realm",
    "background": 1,
    "body": 9,
    "familiar": 104,
    "head": 125,
    "prop": 248,
    "rune": 302
  },
  {
    "idx": 3261,
    "name": "Sage Numpty of the Surf",
    "background": 1,
    "body": 57,
    "familiar": 120,
    "head": 201,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 3262,
    "name": "Sky Master Rook of the Havens",
    "background": 3,
    "body": 24,
    "familiar": 112,
    "head": 144,
    "prop": 246,
    "rune": 286
  },
  {
    "idx": 3263,
    "name": "Arcanist Alizam of the Grotto",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 222,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3264,
    "name": "Diabolist Konoha out of the Void",
    "background": 0,
    "body": 87,
    "familiar": 96,
    "head": 243,
    "prop": 309,
    "rune": 301
  },
  {
    "idx": 3265,
    "name": "Arch-Magician Astrid of the River",
    "background": 1,
    "body": 21,
    "familiar": 108,
    "head": 135,
    "prop": 321,
    "rune": 282
  },
  {
    "idx": 3266,
    "name": "Druid Jerret of the Plains",
    "background": 2,
    "body": 79,
    "familiar": 7777,
    "head": 214,
    "prop": 340,
    "rune": 299
  },
  {
    "idx": 3267,
    "name": "Hedge Wizard Bolin of the Rock",
    "background": 0,
    "body": 5,
    "familiar": 88,
    "head": 236,
    "prop": 340,
    "rune": 304
  },
  {
    "idx": 3268,
    "name": "Bard Hishoken of Xanadu",
    "background": 3,
    "body": 8,
    "familiar": 117,
    "head": 243,
    "prop": 247,
    "rune": 285
  },
  {
    "idx": 3269,
    "name": "Artificer Pezo of the Steppe",
    "background": 1,
    "body": 41,
    "familiar": 117,
    "head": 171,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 3270,
    "name": "Alchemist Edge of the Toadstools",
    "background": 0,
    "body": 30,
    "familiar": 99,
    "head": 205,
    "prop": 324,
    "rune": 298
  },
  {
    "idx": 3271,
    "name": "Summoner Rita of the Fey",
    "background": 3,
    "body": 29,
    "familiar": 108,
    "head": 209,
    "prop": 254,
    "rune": 283
  },
  {
    "idx": 3272,
    "name": "Hedge Wizard Zelda of the Wood",
    "background": 1,
    "body": 18,
    "familiar": 115,
    "head": 166,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 3273,
    "name": "Archmagus Nikolas in the Shadows",
    "background": 1,
    "body": 87,
    "familiar": 112,
    "head": 186,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 3274,
    "name": "Ghost Eater Azazel of the Hall",
    "background": 0,
    "body": 26,
    "familiar": 7777,
    "head": 205,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 3275,
    "name": "Ice Mage Milo of the Tundra",
    "background": 1,
    "body": 73,
    "familiar": 7777,
    "head": 227,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 3276,
    "name": "Sorcerer Milton of the Keep",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 185,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 3277,
    "name": "Archmagus Davos of the Havens",
    "background": 1,
    "body": 75,
    "familiar": 104,
    "head": 199,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 3278,
    "name": "Allistair of the Garden",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 192,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 3279,
    "name": "Battle Mage Tundror of the Grotto",
    "background": 0,
    "body": 19,
    "familiar": 109,
    "head": 129,
    "prop": 267,
    "rune": 286
  },
  {
    "idx": 3280,
    "name": "Enchanter Daphne of the Sands",
    "background": 0,
    "body": 59,
    "familiar": 115,
    "head": 190,
    "prop": 337,
    "rune": 282
  },
  {
    "idx": 3281,
    "name": "Arcanist Beyna of the Wood",
    "background": 1,
    "body": 38,
    "familiar": 120,
    "head": 131,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3282,
    "name": "Shaman Pan of the Forest",
    "background": 1,
    "body": 84,
    "familiar": 111,
    "head": 167,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 3283,
    "name": "Sorcerer Oberon of the Hills",
    "background": 3,
    "body": 82,
    "familiar": 101,
    "head": 228,
    "prop": 317,
    "rune": 291
  },
  {
    "idx": 3284,
    "name": "Stellar Mage Bolin of the Havens",
    "background": 2,
    "body": 11,
    "familiar": 115,
    "head": 236,
    "prop": 338,
    "rune": 292
  },
  {
    "idx": 3285,
    "name": "Adept Aleister of the Carnival",
    "background": 0,
    "body": 29,
    "familiar": 109,
    "head": 153,
    "prop": 266,
    "rune": 291
  },
  {
    "idx": 3286,
    "name": "Diviner Faye of the River",
    "background": 2,
    "body": 37,
    "familiar": 115,
    "head": 156,
    "prop": 252,
    "rune": 285
  },
  {
    "idx": 3287,
    "name": "Scryer Numpty of the Veil",
    "background": 2,
    "body": 28,
    "familiar": 108,
    "head": 201,
    "prop": 251,
    "rune": 304
  },
  {
    "idx": 3288,
    "name": "Shadow Mage Nadeem of the Dunes",
    "background": 0,
    "body": 58,
    "familiar": 120,
    "head": 222,
    "prop": 309,
    "rune": 290
  },
  {
    "idx": 3289,
    "name": "Sorcerer Kazem of the Desert",
    "background": 1,
    "body": 27,
    "familiar": 88,
    "head": 128,
    "prop": 258,
    "rune": 304
  },
  {
    "idx": 3290,
    "name": "Druid Leah of the Circle",
    "background": 1,
    "body": 30,
    "familiar": 115,
    "head": 131,
    "prop": 326,
    "rune": 290
  },
  {
    "idx": 3291,
    "name": "Archmagus Ofaris of the Psychic Leap",
    "background": 1,
    "body": 9,
    "familiar": 110,
    "head": 141,
    "prop": 247,
    "rune": 287
  },
  {
    "idx": 3292,
    "name": "Devon of the River",
    "background": 0,
    "body": 34,
    "familiar": 120,
    "head": 191,
    "prop": 316,
    "rune": 7777
  },
  {
    "idx": 3293,
    "name": "Fortune Teller Ozohr of the Light",
    "background": 2,
    "body": 24,
    "familiar": 93,
    "head": 226,
    "prop": 252,
    "rune": 284
  },
  {
    "idx": 3294,
    "name": "Chronomancer Hagar of the Canyon",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 177,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 3295,
    "name": "Shaman George of the Sacred Pillars",
    "background": 1,
    "body": 50,
    "familiar": 7777,
    "head": 214,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 3296,
    "name": "Sage Alatar of Xanadu",
    "background": 2,
    "body": 24,
    "familiar": 112,
    "head": 214,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 3297,
    "name": "Battle Mage Angus of the Event Horizon",
    "background": 1,
    "body": 8,
    "familiar": 105,
    "head": 129,
    "prop": 254,
    "rune": 299
  },
  {
    "idx": 3298,
    "name": "Magus George of Limbo",
    "background": 1,
    "body": 86,
    "familiar": 7777,
    "head": 211,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 3299,
    "name": "Archmagus Soya of the Marsh",
    "background": 1,
    "body": 15,
    "familiar": 7777,
    "head": 227,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 3300,
    "name": "Alchemist Uday of the Steppe",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 222,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 3301,
    "name": "Sorcerer Jeldor of the Hills",
    "background": 1,
    "body": 41,
    "familiar": 105,
    "head": 231,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3302,
    "name": "Battle Mage Danny of the Brambles",
    "background": 1,
    "body": 14,
    "familiar": 111,
    "head": 133,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 3303,
    "name": "Battlemage Quddus of the Hollow",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 128,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3304,
    "name": "Druid Uvlius of the Valley",
    "background": 3,
    "body": 13,
    "familiar": 110,
    "head": 227,
    "prop": 322,
    "rune": 299
  },
  {
    "idx": 3305,
    "name": "Battle Mage Cromwell of the Rock",
    "background": 1,
    "body": 27,
    "familiar": 99,
    "head": 182,
    "prop": 312,
    "rune": 284
  },
  {
    "idx": 3306,
    "name": "Archmagus Jerret of the Valley",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 185,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3307,
    "name": "Magus Mushy out of the Blizzard",
    "background": 0,
    "body": 65,
    "familiar": 111,
    "head": 195,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 3308,
    "name": "Archmagus Solomon of Arcadia",
    "background": 0,
    "body": 79,
    "familiar": 114,
    "head": 141,
    "prop": 246,
    "rune": 294
  },
  {
    "idx": 3309,
    "name": "Sage Argus of the Mist",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 197,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3310,
    "name": "Cleric Xue of the Marsh",
    "background": 2,
    "body": 35,
    "familiar": 103,
    "head": 180,
    "prop": 306,
    "rune": 282
  },
  {
    "idx": 3311,
    "name": "Magus Alessar of the Havens",
    "background": 3,
    "body": 50,
    "familiar": 112,
    "head": 153,
    "prop": 255,
    "rune": 293
  },
  {
    "idx": 3312,
    "name": "Shaman Thor of the Obelisk",
    "background": 1,
    "body": 49,
    "familiar": 7777,
    "head": 213,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 3313,
    "name": "Necromancer Diabolos of the Wood",
    "background": 3,
    "body": 15,
    "familiar": 104,
    "head": 205,
    "prop": 310,
    "rune": 304
  },
  {
    "idx": 3314,
    "name": "Cosmic Mage Celeste of the Tower",
    "background": 3,
    "body": 76,
    "familiar": 95,
    "head": 198,
    "prop": 338,
    "rune": 299
  },
  {
    "idx": 3315,
    "name": "Cosmic Mage Amir of the Circle",
    "background": 3,
    "body": 29,
    "familiar": 105,
    "head": 231,
    "prop": 339,
    "rune": 290
  },
  {
    "idx": 3316,
    "name": "Holy Monk Crobas of the Dunes",
    "background": 2,
    "body": 5,
    "familiar": 110,
    "head": 207,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 3317,
    "name": "Necromancer Isaac of the Field",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 233,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 3318,
    "name": "Witch Caligula of the Riviera",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 204,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 3319,
    "name": "Enchanter Taqi of the Berg",
    "background": 1,
    "body": 65,
    "familiar": 7777,
    "head": 164,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 3320,
    "name": "Diabolist Carly of the Brambles",
    "background": 2,
    "body": 38,
    "familiar": 89,
    "head": 132,
    "prop": 309,
    "rune": 294
  },
  {
    "idx": 3321,
    "name": "Void Disciple Voidoth of the Moors",
    "background": 1,
    "body": 14,
    "familiar": 111,
    "head": 205,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 3322,
    "name": "Archmagus Solomon of the Carnival",
    "background": 2,
    "body": 29,
    "familiar": 88,
    "head": 232,
    "prop": 273,
    "rune": 291
  },
  {
    "idx": 3323,
    "name": "Archmagus Zelroth of the Inferno",
    "background": 1,
    "body": 86,
    "familiar": 105,
    "head": 212,
    "prop": 247,
    "rune": 303
  },
  {
    "idx": 3324,
    "name": "Alchemist Sturgis of the Sun",
    "background": 0,
    "body": 60,
    "familiar": 7777,
    "head": 188,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3325,
    "name": "Azahl of the Keep",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 174,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 3326,
    "name": "Cleric Nicolas of the Mount",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 213,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 3327,
    "name": "Archmagus Digby of the Keep",
    "background": 1,
    "body": 50,
    "familiar": 7777,
    "head": 125,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 3328,
    "name": "Ofaris of the Reach",
    "background": 1,
    "body": 79,
    "familiar": 112,
    "head": 230,
    "prop": 256,
    "rune": 304
  },
  {
    "idx": 3329,
    "name": "Atlanta of the Wood",
    "background": 2,
    "body": 39,
    "familiar": 97,
    "head": 135,
    "prop": 259,
    "rune": 304
  },
  {
    "idx": 3330,
    "name": "Magus Taqi of the Mount",
    "background": 1,
    "body": 62,
    "familiar": 115,
    "head": 219,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 3331,
    "name": "Hedge Wizard Lenora of the Brambles",
    "background": 1,
    "body": 36,
    "familiar": 104,
    "head": 166,
    "prop": 312,
    "rune": 293
  },
  {
    "idx": 3332,
    "name": "George of the Event Horizon",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 127,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 3333,
    "name": "Archmagus Aleister out of the Blizzard",
    "background": 2,
    "body": 65,
    "familiar": 110,
    "head": 226,
    "prop": 261,
    "rune": 292
  },
  {
    "idx": 3334,
    "name": "Enchanter Atlanta of the Fey",
    "background": 2,
    "body": 30,
    "familiar": 94,
    "head": 132,
    "prop": 340,
    "rune": 293
  },
  {
    "idx": 3335,
    "name": "Cleric Lumos of Avalon",
    "background": 0,
    "body": 55,
    "familiar": 88,
    "head": 185,
    "prop": 325,
    "rune": 290
  },
  {
    "idx": 3336,
    "name": "Shadow Mage Nazim of Arcadia",
    "background": 1,
    "body": 82,
    "familiar": 7777,
    "head": 222,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 3337,
    "name": "Necromancer JackDaw of the Mountain",
    "background": 0,
    "body": 41,
    "familiar": 116,
    "head": 144,
    "prop": 307,
    "rune": 304
  },
  {
    "idx": 3338,
    "name": "Archmagus Hadrien of the Secret Fire",
    "background": 0,
    "body": 87,
    "familiar": 88,
    "head": 189,
    "prop": 309,
    "rune": 291
  },
  {
    "idx": 3339,
    "name": "Zelroth of the Villa",
    "background": 3,
    "body": 40,
    "familiar": 101,
    "head": 185,
    "prop": 277,
    "rune": 303
  },
  {
    "idx": 3340,
    "name": "Arcanist Caligula of the Desert",
    "background": 3,
    "body": 60,
    "familiar": 123,
    "head": 177,
    "prop": 306,
    "rune": 287
  },
  {
    "idx": 3341,
    "name": "Enchanter Davos of the Steppe",
    "background": 0,
    "body": 44,
    "familiar": 105,
    "head": 231,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 3342,
    "name": "Enchanter Artis of the Mountain",
    "background": 0,
    "body": 19,
    "familiar": 112,
    "head": 191,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 3343,
    "name": "Hex Mage Jeldor of the River",
    "background": 1,
    "body": 42,
    "familiar": 7777,
    "head": 192,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3344,
    "name": "Pyromancer Calista of the Citadel",
    "background": 0,
    "body": 76,
    "familiar": 110,
    "head": 139,
    "prop": 255,
    "rune": 284
  },
  {
    "idx": 3345,
    "name": "Sorcerer Apollo of the Riviera",
    "background": 2,
    "body": 41,
    "familiar": 114,
    "head": 212,
    "prop": 253,
    "rune": 285
  },
  {
    "idx": 3346,
    "name": "Magus Kang of the Mist",
    "background": 0,
    "body": 6,
    "familiar": 109,
    "head": 236,
    "prop": 249,
    "rune": 287
  },
  {
    "idx": 3347,
    "name": "Magus Bojangles of the Capital",
    "background": 1,
    "body": 26,
    "familiar": 7777,
    "head": 201,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 3348,
    "name": "Magus Wazir of the Tower",
    "background": 2,
    "body": 7,
    "familiar": 103,
    "head": 237,
    "prop": 276,
    "rune": 297
  },
  {
    "idx": 3349,
    "name": "Hedge Wizard Allistair of the Tower",
    "background": 2,
    "body": 76,
    "familiar": 110,
    "head": 212,
    "prop": 253,
    "rune": 304
  },
  {
    "idx": 3350,
    "name": "Battle Mage Baird of the Brambles",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 203,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 3351,
    "name": "Sorcerer Alizam of Avalon",
    "background": 2,
    "body": 63,
    "familiar": 110,
    "head": 142,
    "prop": 312,
    "rune": 296
  },
  {
    "idx": 3352,
    "name": "Cosmic Mage Lavinia of the Platonic Shadow",
    "background": 2,
    "body": 52,
    "familiar": 97,
    "head": 223,
    "prop": 309,
    "rune": 287
  },
  {
    "idx": 3353,
    "name": "Archmagus Ixar of the Grotto",
    "background": 1,
    "body": 44,
    "familiar": 115,
    "head": 189,
    "prop": 277,
    "rune": 292
  },
  {
    "idx": 3354,
    "name": "Mystic Blaise of the Glacier",
    "background": 1,
    "body": 73,
    "familiar": 7777,
    "head": 182,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 3355,
    "name": "Sage Zane of Elysium",
    "background": 0,
    "body": 55,
    "familiar": 90,
    "head": 162,
    "prop": 252,
    "rune": 283
  },
  {
    "idx": 3356,
    "name": "Ozohr of the Astral Plane",
    "background": 1,
    "body": 10,
    "familiar": 95,
    "head": 232,
    "prop": 250,
    "rune": 282
  },
  {
    "idx": 3357,
    "name": "Sorcerer Ixar of the Quantum Downs",
    "background": 3,
    "body": 8,
    "familiar": 94,
    "head": 226,
    "prop": 258,
    "rune": 287
  },
  {
    "idx": 3358,
    "name": "Cleric Onaxx of the Atheneum",
    "background": 1,
    "body": 6,
    "familiar": 7777,
    "head": 207,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 3359,
    "name": "Charmer Sondra of the Wold",
    "background": 1,
    "body": 32,
    "familiar": 93,
    "head": 198,
    "prop": 257,
    "rune": 290
  },
  {
    "idx": 3360,
    "name": "Chaos Mage Celah of the Mount",
    "background": 2,
    "body": 49,
    "familiar": 94,
    "head": 185,
    "prop": 309,
    "rune": 291
  },
  {
    "idx": 3361,
    "name": "Magus Numpty of the Tower",
    "background": 1,
    "body": 54,
    "familiar": 7777,
    "head": 201,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 3362,
    "name": "Hedge Wizard Daria of the Hollow",
    "background": 0,
    "body": 37,
    "familiar": 123,
    "head": 156,
    "prop": 312,
    "rune": 292
  },
  {
    "idx": 3363,
    "name": "Witch Sylvia of the Wood",
    "background": 1,
    "body": 36,
    "familiar": 7777,
    "head": 155,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 3364,
    "name": "Arcanist Armstrong of the Sun",
    "background": 1,
    "body": 27,
    "familiar": 94,
    "head": 165,
    "prop": 324,
    "rune": 290
  },
  {
    "idx": 3365,
    "name": "Magus Gourdon of the Brambles",
    "background": 0,
    "body": 43,
    "familiar": 95,
    "head": 172,
    "prop": 263,
    "rune": 299
  },
  {
    "idx": 3366,
    "name": "Battlemage Eden of the Havens",
    "background": 3,
    "body": 55,
    "familiar": 90,
    "head": 153,
    "prop": 277,
    "rune": 302
  },
  {
    "idx": 3367,
    "name": "Enchanter Misumi of the Steppe",
    "background": 0,
    "body": 34,
    "familiar": 105,
    "head": 126,
    "prop": 265,
    "rune": 303
  },
  {
    "idx": 3368,
    "name": "Summoner Karasu of the Hills",
    "background": 2,
    "body": 84,
    "familiar": 105,
    "head": 243,
    "prop": 253,
    "rune": 297
  },
  {
    "idx": 3369,
    "name": "David of the Moors",
    "background": 1,
    "body": 79,
    "familiar": 97,
    "head": 232,
    "prop": 256,
    "rune": 303
  },
  {
    "idx": 3370,
    "name": "Alchemist Soran of the Desert",
    "background": 1,
    "body": 27,
    "familiar": 111,
    "head": 186,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 3371,
    "name": "Geomancer Angus of the Light",
    "background": 0,
    "body": 52,
    "familiar": 120,
    "head": 177,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 3372,
    "name": "Arcanist Lin of El Dorado",
    "background": 2,
    "body": 74,
    "familiar": 114,
    "head": 180,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3373,
    "name": "Wild Mage Ozohr of the Steppe",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 202,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 3374,
    "name": "Battle Mage Luther of Elysium",
    "background": 1,
    "body": 6,
    "familiar": 7777,
    "head": 206,
    "prop": 315,
    "rune": 291
  },
  {
    "idx": 3375,
    "name": "Archmagus Allistair of the Wood",
    "background": 0,
    "body": 45,
    "familiar": 90,
    "head": 211,
    "prop": 253,
    "rune": 293
  },
  {
    "idx": 3376,
    "name": "Sorcerer Nadeem of the Citadel",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 128,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 3377,
    "name": "Magus Setsuko of the Berg",
    "background": 0,
    "body": 65,
    "familiar": 107,
    "head": 126,
    "prop": 255,
    "rune": 297
  },
  {
    "idx": 3378,
    "name": "Adept Maia of the Plains",
    "background": 2,
    "body": 21,
    "familiar": 95,
    "head": 187,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 3379,
    "name": "Cleric Tumbaj of the Desert",
    "background": 3,
    "body": 59,
    "familiar": 94,
    "head": 237,
    "prop": 318,
    "rune": 296
  },
  {
    "idx": 3380,
    "name": "Archmagus Allistair of Avalon",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 230,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3381,
    "name": "Electromancer Uvlius of the Tundra",
    "background": 0,
    "body": 73,
    "familiar": 94,
    "head": 199,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 3382,
    "name": "Diabolist Zelda of the Mount",
    "background": 2,
    "body": 50,
    "familiar": 110,
    "head": 209,
    "prop": 309,
    "rune": 284
  },
  {
    "idx": 3383,
    "name": "Aeromancer Suyin of the Canyon",
    "background": 2,
    "body": 22,
    "familiar": 97,
    "head": 180,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 3384,
    "name": "Adept Soran of Xanadu",
    "background": 0,
    "body": 67,
    "familiar": 105,
    "head": 238,
    "prop": 322,
    "rune": 296
  },
  {
    "idx": 3385,
    "name": "Arcanist Bullock",
    "background": 3,
    "body": 65,
    "familiar": 99,
    "head": 193,
    "prop": 266,
    "rune": 293
  },
  {
    "idx": 3386,
    "name": "Hedge Wizard Elizabeth",
    "background": 0,
    "body": 67,
    "familiar": 115,
    "head": 159,
    "prop": 273,
    "rune": 302
  },
  {
    "idx": 3387,
    "name": "Sorcerer Hadrien of the Court",
    "background": 1,
    "body": 77,
    "familiar": 112,
    "head": 162,
    "prop": 246,
    "rune": 285
  },
  {
    "idx": 3388,
    "name": "Archmagus Apollo of the Event Horizon",
    "background": 1,
    "body": 75,
    "familiar": 110,
    "head": 212,
    "prop": 323,
    "rune": 303
  },
  {
    "idx": 3389,
    "name": "Artificer Angus of the Mount",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 203,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 3390,
    "name": "Conjurer Huan of Dreams",
    "background": 3,
    "body": 55,
    "familiar": 112,
    "head": 236,
    "prop": 246,
    "rune": 303
  },
  {
    "idx": 3391,
    "name": "Sorcerer Casper of the Tower",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 229,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 3392,
    "name": "Illusionist Aiko of the Wold",
    "background": 2,
    "body": 43,
    "familiar": 106,
    "head": 126,
    "prop": 273,
    "rune": 286
  },
  {
    "idx": 3393,
    "name": "Illusionist Herne of the Marsh",
    "background": 0,
    "body": 23,
    "familiar": 89,
    "head": 167,
    "prop": 246,
    "rune": 304
  },
  {
    "idx": 3394,
    "name": "Battle Mage Caligula of Dreams",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 182,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 3395,
    "name": "Battle Mage Finn of the Veil",
    "background": 0,
    "body": 29,
    "familiar": 95,
    "head": 206,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 3396,
    "name": "Hex Mage Tundror of the Heath",
    "background": 0,
    "body": 42,
    "familiar": 123,
    "head": 188,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3397,
    "name": "Diabolist Sylvia of the Marsh",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 155,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 3398,
    "name": "Conjurer Goober of the Mount",
    "background": 0,
    "body": 6,
    "familiar": 103,
    "head": 200,
    "prop": 306,
    "rune": 293
  },
  {
    "idx": 3399,
    "name": "Sorcerer Milo of the Hall",
    "background": 1,
    "body": 76,
    "familiar": 95,
    "head": 189,
    "prop": 258,
    "rune": 304
  },
  {
    "idx": 3400,
    "name": "Mystic Atlas of the Moors",
    "background": 3,
    "body": 44,
    "familiar": 120,
    "head": 173,
    "prop": 339,
    "rune": 303
  },
  {
    "idx": 3401,
    "name": "Battle Mage Durm of the Heath",
    "background": 1,
    "body": 14,
    "familiar": 89,
    "head": 218,
    "prop": 246,
    "rune": 290
  },
  {
    "idx": 3402,
    "name": "Illusionist Ofaris of the Wood",
    "background": 1,
    "body": 18,
    "familiar": 95,
    "head": 160,
    "prop": 246,
    "rune": 300
  },
  {
    "idx": 3403,
    "name": "Alchemist Durm of the Mount",
    "background": 2,
    "body": 49,
    "familiar": 115,
    "head": 173,
    "prop": 268,
    "rune": 302
  },
  {
    "idx": 3404,
    "name": "Druid Dario of the Hills",
    "background": 0,
    "body": 19,
    "familiar": 7777,
    "head": 207,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 3405,
    "name": "Necromancer Gully of the Riviera",
    "background": 1,
    "body": 19,
    "familiar": 7777,
    "head": 171,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 3406,
    "name": "Sage Ofaris of the Gnostics",
    "background": 0,
    "body": 83,
    "familiar": 123,
    "head": 192,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 3407,
    "name": "Diabolist Marceline of the Valley",
    "background": 3,
    "body": 35,
    "familiar": 111,
    "head": 223,
    "prop": 310,
    "rune": 302
  },
  {
    "idx": 3408,
    "name": "Alchemist Star Father",
    "background": 3,
    "body": 30,
    "familiar": 107,
    "head": 145,
    "prop": 267,
    "rune": 291
  },
  {
    "idx": 3409,
    "name": "Uvlius of the Steppe",
    "background": 1,
    "body": 12,
    "familiar": 119,
    "head": 202,
    "prop": 319,
    "rune": 288
  },
  {
    "idx": 3410,
    "name": "Magus Jig of the Thorn",
    "background": 1,
    "body": 28,
    "familiar": 110,
    "head": 178,
    "prop": 258,
    "rune": 296
  },
  {
    "idx": 3411,
    "name": "Ghost Eater Oiq of the Villa",
    "background": 2,
    "body": 48,
    "familiar": 97,
    "head": 178,
    "prop": 254,
    "rune": 299
  },
  {
    "idx": 3412,
    "name": "Bard Liu of the Event Horizon",
    "background": 0,
    "body": 11,
    "familiar": 7777,
    "head": 236,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 3413,
    "name": "Archmagus Alessar of the Mount",
    "background": 1,
    "body": 55,
    "familiar": 103,
    "head": 233,
    "prop": 306,
    "rune": 283
  },
  {
    "idx": 3414,
    "name": "Arch-Magician Alessar of the Capital",
    "background": 1,
    "body": 76,
    "familiar": 103,
    "head": 141,
    "prop": 328,
    "rune": 298
  },
  {
    "idx": 3415,
    "name": "Battle Mage Blaise of the Wild",
    "background": 1,
    "body": 15,
    "familiar": 7777,
    "head": 213,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 3416,
    "name": "Alchemist Hadrien of the Toadstools",
    "background": 1,
    "body": 28,
    "familiar": 7777,
    "head": 186,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 3417,
    "name": "Archmagus Merlon of the Villa",
    "background": 2,
    "body": 19,
    "familiar": 89,
    "head": 228,
    "prop": 253,
    "rune": 283
  },
  {
    "idx": 3418,
    "name": "Voodoo Priest Gallo of the Rock",
    "background": 3,
    "body": 59,
    "familiar": 95,
    "head": 149,
    "prop": 251,
    "rune": 7777
  },
  {
    "idx": 3419,
    "name": "Thana of the Forest",
    "background": 3,
    "body": 38,
    "familiar": 104,
    "head": 198,
    "prop": 268,
    "rune": 284
  },
  {
    "idx": 3420,
    "name": "Archmagus Amir of the Plains",
    "background": 0,
    "body": 19,
    "familiar": 107,
    "head": 211,
    "prop": 325,
    "rune": 299
  },
  {
    "idx": 3421,
    "name": "Mystic Aslan of the Cold",
    "background": 0,
    "body": 65,
    "familiar": 105,
    "head": 217,
    "prop": 266,
    "rune": 288
  },
  {
    "idx": 3422,
    "name": "Ghost Eater Aleister of the Tower",
    "background": 0,
    "body": 7,
    "familiar": 97,
    "head": 212,
    "prop": 330,
    "rune": 286
  },
  {
    "idx": 3423,
    "name": "Augurer Robert of the Forest",
    "background": 1,
    "body": 23,
    "familiar": 94,
    "head": 188,
    "prop": 245,
    "rune": 286
  },
  {
    "idx": 3424,
    "name": "Enchanter Aiko of the Marsh",
    "background": 1,
    "body": 22,
    "familiar": 95,
    "head": 126,
    "prop": 311,
    "rune": 285
  },
  {
    "idx": 3425,
    "name": "Sorcerer Merlon of the Fey",
    "background": 0,
    "body": 30,
    "familiar": 104,
    "head": 233,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 3426,
    "name": "Hydromancer Eggplant from the Abyss",
    "background": 1,
    "body": 87,
    "familiar": 101,
    "head": 154,
    "prop": 314,
    "rune": 300
  },
  {
    "idx": 3427,
    "name": "Void Disciple Samael of the Sun",
    "background": 2,
    "body": 60,
    "familiar": 93,
    "head": 240,
    "prop": 274,
    "rune": 296
  },
  {
    "idx": 3428,
    "name": "Aeromancer Jianyu of the Sun",
    "background": 2,
    "body": 27,
    "familiar": 114,
    "head": 236,
    "prop": 315,
    "rune": 294
  },
  {
    "idx": 3429,
    "name": "Alchemist Salvatore of the Mount",
    "background": 2,
    "body": 62,
    "familiar": 116,
    "head": 174,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 3430,
    "name": "Sorcerer Davos of the Psychic Leap",
    "background": 1,
    "body": 11,
    "familiar": 90,
    "head": 232,
    "prop": 262,
    "rune": 302
  },
  {
    "idx": 3431,
    "name": "Hedge Wizard Salah of the Tower",
    "background": 0,
    "body": 26,
    "familiar": 94,
    "head": 237,
    "prop": 273,
    "rune": 289
  },
  {
    "idx": 3432,
    "name": "Druid Atlanta of the Brambles",
    "background": 1,
    "body": 36,
    "familiar": 7777,
    "head": 191,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 3433,
    "name": "Magus Wolfram of the Heath",
    "background": 0,
    "body": 13,
    "familiar": 104,
    "head": 218,
    "prop": 324,
    "rune": 303
  },
  {
    "idx": 3434,
    "name": "Artificer Taqi of the Palms",
    "background": 2,
    "body": 61,
    "familiar": 119,
    "head": 128,
    "prop": 258,
    "rune": 284
  },
  {
    "idx": 3435,
    "name": "Evoker Finch of the Light",
    "background": 2,
    "body": 10,
    "familiar": 109,
    "head": 125,
    "prop": 321,
    "rune": 299
  },
  {
    "idx": 3436,
    "name": "Hedge Wizard Fredo of the Fey",
    "background": 2,
    "body": 28,
    "familiar": 90,
    "head": 201,
    "prop": 340,
    "rune": 290
  },
  {
    "idx": 3437,
    "name": "Willow of the Quantum Downs",
    "background": 0,
    "body": 8,
    "familiar": 93,
    "head": 132,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 3438,
    "name": "Arcanist Brutus of the Grotto",
    "background": 1,
    "body": 84,
    "familiar": 111,
    "head": 129,
    "prop": 250,
    "rune": 302
  },
  {
    "idx": 3439,
    "name": "Enchanter Sondra of the Brambles",
    "background": 2,
    "body": 39,
    "familiar": 110,
    "head": 139,
    "prop": 323,
    "rune": 287
  },
  {
    "idx": 3440,
    "name": "Magus Aleister of the Dunes",
    "background": 0,
    "body": 27,
    "familiar": 7777,
    "head": 192,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 3441,
    "name": "Adept Sylvia of the Marsh",
    "background": 2,
    "body": 38,
    "familiar": 104,
    "head": 155,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 3442,
    "name": "Hydromancer Gaspard of the Heath",
    "background": 0,
    "body": 12,
    "familiar": 95,
    "head": 149,
    "prop": 314,
    "rune": 290
  },
  {
    "idx": 3443,
    "name": "Medium Otto of the Mount",
    "background": 1,
    "body": 49,
    "familiar": 109,
    "head": 217,
    "prop": 245,
    "rune": 288
  },
  {
    "idx": 3444,
    "name": "Enchanter Beyna of the Mist",
    "background": 0,
    "body": 6,
    "familiar": 97,
    "head": 191,
    "prop": 246,
    "rune": 293
  },
  {
    "idx": 3445,
    "name": "Oracle Jasper of the Palms",
    "background": 2,
    "body": 27,
    "familiar": 115,
    "head": 201,
    "prop": 252,
    "rune": 300
  },
  {
    "idx": 3446,
    "name": "Stellar Mage Aamon of the Steppe",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 194,
    "prop": 338,
    "rune": 285
  },
  {
    "idx": 3447,
    "name": "Charmer Devon of the Mount",
    "background": 0,
    "body": 63,
    "familiar": 94,
    "head": 132,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 3448,
    "name": "Druid Fugh of the Grotto",
    "background": 0,
    "body": 84,
    "familiar": 108,
    "head": 171,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 3449,
    "name": "Hydromancer Purple Boy of the Hills",
    "background": 2,
    "body": 13,
    "familiar": 88,
    "head": 154,
    "prop": 314,
    "rune": 296
  },
  {
    "idx": 3450,
    "name": "Illusionist Marceline of the Grotto",
    "background": 0,
    "body": 37,
    "familiar": 119,
    "head": 166,
    "prop": 273,
    "rune": 304
  },
  {
    "idx": 3451,
    "name": "Artificer Moloch of the Veil",
    "background": 3,
    "body": 75,
    "familiar": 90,
    "head": 193,
    "prop": 261,
    "rune": 285
  },
  {
    "idx": 3452,
    "name": "Enchanter Diana of the Mist",
    "background": 0,
    "body": 50,
    "familiar": 101,
    "head": 132,
    "prop": 246,
    "rune": 296
  },
  {
    "idx": 3453,
    "name": "Battlemage Aden of the Marsh",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 125,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3454,
    "name": "Alchemist Trollin of the Field",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 178,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 3455,
    "name": "Sorcerer Nazim of the Sun",
    "background": 3,
    "body": 27,
    "familiar": 94,
    "head": 219,
    "prop": 324,
    "rune": 288
  },
  {
    "idx": 3456,
    "name": "Adept Udor of Limbo",
    "background": 1,
    "body": 85,
    "familiar": 111,
    "head": 211,
    "prop": 322,
    "rune": 293
  },
  {
    "idx": 3457,
    "name": "Ozohr of the Mount",
    "background": 2,
    "body": 54,
    "familiar": 112,
    "head": 214,
    "prop": 249,
    "rune": 296
  },
  {
    "idx": 3458,
    "name": "Witch Alessar of the Riviera",
    "background": 1,
    "body": 12,
    "familiar": 119,
    "head": 153,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 3459,
    "name": "Witch Rowena of the Field",
    "background": 1,
    "body": 37,
    "familiar": 115,
    "head": 159,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 3460,
    "name": "Sorcerer Apollo of the Mount",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 127,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 3461,
    "name": "Sorcerer Cairon of the Sacred Pillars",
    "background": 0,
    "body": 62,
    "familiar": 104,
    "head": 229,
    "prop": 253,
    "rune": 296
  },
  {
    "idx": 3462,
    "name": "Hedge Wizard Aldus of Arcadia",
    "background": 2,
    "body": 44,
    "familiar": 105,
    "head": 189,
    "prop": 273,
    "rune": 302
  },
  {
    "idx": 3463,
    "name": "Conjurer Marceline of the Light",
    "background": 1,
    "body": 83,
    "familiar": 107,
    "head": 209,
    "prop": 246,
    "rune": 301
  },
  {
    "idx": 3464,
    "name": "Hedge Wizard Tumbaj of the Hollow",
    "background": 2,
    "body": 79,
    "familiar": 108,
    "head": 219,
    "prop": 340,
    "rune": 292
  },
  {
    "idx": 3465,
    "name": "Arch-Magician Jerret",
    "background": 1,
    "body": 86,
    "familiar": 107,
    "head": 238,
    "prop": 258,
    "rune": 292
  },
  {
    "idx": 3466,
    "name": "Battle Mage Otto of the Veil",
    "background": 2,
    "body": 9,
    "familiar": 89,
    "head": 173,
    "prop": 340,
    "rune": 302
  },
  {
    "idx": 3467,
    "name": "Shadow Mage Nixie of the Riviera",
    "background": 0,
    "body": 15,
    "familiar": 95,
    "head": 235,
    "prop": 320,
    "rune": 297
  },
  {
    "idx": 3468,
    "name": "Cosmic Mage Zolona of the Desert",
    "background": 1,
    "body": 61,
    "familiar": 104,
    "head": 166,
    "prop": 310,
    "rune": 285
  },
  {
    "idx": 3469,
    "name": "Bard David of the Tower",
    "background": 1,
    "body": 76,
    "familiar": 95,
    "head": 189,
    "prop": 247,
    "rune": 284
  },
  {
    "idx": 3470,
    "name": "Cryptomancer Layla of the Mountain",
    "background": 2,
    "body": 38,
    "familiar": 94,
    "head": 156,
    "prop": 310,
    "rune": 293
  },
  {
    "idx": 3471,
    "name": "Necromancer Edge of the Hollow",
    "background": 0,
    "body": 23,
    "familiar": 95,
    "head": 205,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3472,
    "name": "Shaman Rodolfo of the Palms",
    "background": 3,
    "body": 58,
    "familiar": 89,
    "head": 165,
    "prop": 276,
    "rune": 303
  },
  {
    "idx": 3473,
    "name": "Alchemist Larissa of the Havens",
    "background": 1,
    "body": 63,
    "familiar": 116,
    "head": 132,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 3474,
    "name": "Witch Lilith of the Dunes",
    "background": 1,
    "body": 60,
    "familiar": 120,
    "head": 223,
    "prop": 280,
    "rune": 292
  },
  {
    "idx": 3475,
    "name": "Hedge Wizard Buttons of the Bastion",
    "background": 1,
    "body": 40,
    "familiar": 105,
    "head": 195,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 3476,
    "name": "Archmagus  of the Psychic Leap",
    "background": 0,
    "body": 67,
    "familiar": 104,
    "head": 127,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 3477,
    "name": "Alatar of the Cosmos",
    "background": 3,
    "body": 10,
    "familiar": 89,
    "head": 238,
    "prop": 277,
    "rune": 303
  },
  {
    "idx": 3478,
    "name": "Arcanist Xiaobo of the Dunes",
    "background": 0,
    "body": 5,
    "familiar": 103,
    "head": 236,
    "prop": 334,
    "rune": 303
  },
  {
    "idx": 3479,
    "name": "Magus Gorgana of the Keep",
    "background": 0,
    "body": 74,
    "familiar": 107,
    "head": 209,
    "prop": 263,
    "rune": 296
  },
  {
    "idx": 3480,
    "name": "Artificer Cairon of the Desert",
    "background": 1,
    "body": 61,
    "familiar": 117,
    "head": 238,
    "prop": 261,
    "rune": 288
  },
  {
    "idx": 3481,
    "name": "Sage Ursula of the Hills",
    "background": 2,
    "body": 38,
    "familiar": 120,
    "head": 159,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3482,
    "name": "Shadow Mage Kobold of the Tower",
    "background": 2,
    "body": 6,
    "familiar": 103,
    "head": 235,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 3483,
    "name": "Magus Xiaosheng of the Marsh",
    "background": 3,
    "body": 22,
    "familiar": 90,
    "head": 180,
    "prop": 266,
    "rune": 284
  },
  {
    "idx": 3484,
    "name": "Sage Allistair of the Cosmos",
    "background": 1,
    "body": 10,
    "familiar": 90,
    "head": 141,
    "prop": 256,
    "rune": 291
  },
  {
    "idx": 3485,
    "name": "Ghost Eater Artis of Mu",
    "background": 1,
    "body": 8,
    "familiar": 88,
    "head": 139,
    "prop": 332,
    "rune": 285
  },
  {
    "idx": 3486,
    "name": "Battle Mage Magnus of the Cosmos",
    "background": 2,
    "body": 8,
    "familiar": 88,
    "head": 203,
    "prop": 254,
    "rune": 296
  },
  {
    "idx": 3487,
    "name": "Magus Pino out of the Blizzard",
    "background": 0,
    "body": 65,
    "familiar": 112,
    "head": 201,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 3488,
    "name": "Artificer Cromwell of the Glacier",
    "background": 1,
    "body": 73,
    "familiar": 95,
    "head": 220,
    "prop": 261,
    "rune": 304
  },
  {
    "idx": 3489,
    "name": "Thaumaturge Dutorn of the Brine",
    "background": 0,
    "body": 57,
    "familiar": 111,
    "head": 129,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 3490,
    "name": "Druid Galatea of the Forest",
    "background": 2,
    "body": 34,
    "familiar": 105,
    "head": 156,
    "prop": 276,
    "rune": 292
  },
  {
    "idx": 3491,
    "name": "Druid Gourdon of the Temple",
    "background": 1,
    "body": 49,
    "familiar": 99,
    "head": 172,
    "prop": 329,
    "rune": 303
  },
  {
    "idx": 3492,
    "name": "Druid Alatar of the Marsh",
    "background": 2,
    "body": 13,
    "familiar": 111,
    "head": 231,
    "prop": 276,
    "rune": 294
  },
  {
    "idx": 3493,
    "name": "Mystic Danny of the Sands",
    "background": 0,
    "body": 60,
    "familiar": 93,
    "head": 133,
    "prop": 332,
    "rune": 296
  },
  {
    "idx": 3494,
    "name": "Witch Hagatha of the Sun",
    "background": 1,
    "body": 60,
    "familiar": 110,
    "head": 155,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 3495,
    "name": "Shadow Mage Seth of the Steppe",
    "background": 2,
    "body": 43,
    "familiar": 104,
    "head": 205,
    "prop": 320,
    "rune": 303
  },
  {
    "idx": 3496,
    "name": "Hex Mage Apollo of the Temple",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 174,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3497,
    "name": "Artificer Luther of Elysium",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 217,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 3498,
    "name": "Archmagus Cairon of the Road",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 127,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 3499,
    "name": "Hedge Wizard Eden of the Valley",
    "background": 0,
    "body": 62,
    "familiar": 94,
    "head": 153,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 3500,
    "name": "Witch Herne of the Oasis",
    "background": 2,
    "body": 27,
    "familiar": 111,
    "head": 167,
    "prop": 321,
    "rune": 304
  },
  {
    "idx": 3501,
    "name": "Witch Drusilla of the Field",
    "background": 0,
    "body": 18,
    "familiar": 119,
    "head": 159,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 3502,
    "name": "Colormancer Hue of the Brambles",
    "background": 2,
    "body": 12,
    "familiar": 111,
    "head": 169,
    "prop": 314,
    "rune": 283
  },
  {
    "idx": 3503,
    "name": "Evoker Pozzik of the Realm",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 200,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 3504,
    "name": "Magus Talbot of the Mist",
    "background": 1,
    "body": 7,
    "familiar": 104,
    "head": 177,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 3505,
    "name": "Artificer Tundror of the Hollow",
    "background": 1,
    "body": 18,
    "familiar": 111,
    "head": 204,
    "prop": 258,
    "rune": 291
  },
  {
    "idx": 3506,
    "name": "Thaumaturge Fark of the Canyon",
    "background": 1,
    "body": 41,
    "familiar": 110,
    "head": 207,
    "prop": 323,
    "rune": 304
  },
  {
    "idx": 3507,
    "name": "Artificer Thor of the Wold",
    "background": 1,
    "body": 23,
    "familiar": 111,
    "head": 204,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 3508,
    "name": "Magus Alizam of the Heath",
    "background": 2,
    "body": 12,
    "familiar": 123,
    "head": 142,
    "prop": 253,
    "rune": 288
  },
  {
    "idx": 3509,
    "name": "Augurer Darick of the Valley",
    "background": 1,
    "body": 23,
    "familiar": 111,
    "head": 133,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 3510,
    "name": "Runecaster Rowena of the Riviera",
    "background": 2,
    "body": 39,
    "familiar": 88,
    "head": 159,
    "prop": 249,
    "rune": 296
  },
  {
    "idx": 3511,
    "name": "Battle Mage Otto of the Wood",
    "background": 1,
    "body": 12,
    "familiar": 7777,
    "head": 177,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 3512,
    "name": "Shadow Mage Gunthor of the Ice",
    "background": 0,
    "body": 65,
    "familiar": 116,
    "head": 217,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 3513,
    "name": "Mystic Lin of the Grotto",
    "background": 0,
    "body": 34,
    "familiar": 120,
    "head": 180,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 3514,
    "name": "Witch Juniper of the Sacred Pillars",
    "background": 0,
    "body": 62,
    "familiar": 119,
    "head": 159,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 3515,
    "name": "Archmagus Crowley of the Desert",
    "background": 1,
    "body": 5,
    "familiar": 7777,
    "head": 221,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 3516,
    "name": "Pyromancer Crowley of the Steppe",
    "background": 1,
    "body": 14,
    "familiar": 114,
    "head": 185,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 3517,
    "name": "Electromancer Nixie of the Wood",
    "background": 2,
    "body": 44,
    "familiar": 104,
    "head": 200,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 3518,
    "name": "Archmagus Aldus of the Mountain",
    "background": 1,
    "body": 15,
    "familiar": 7777,
    "head": 153,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 3519,
    "name": "Archmagus Bolin of Avalon",
    "background": 0,
    "body": 55,
    "familiar": 112,
    "head": 236,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 3520,
    "name": "Illusionist Layla of the Hall",
    "background": 2,
    "body": 26,
    "familiar": 119,
    "head": 190,
    "prop": 273,
    "rune": 293
  },
  {
    "idx": 3521,
    "name": "Geomancer Sahir of the Mist",
    "background": 1,
    "body": 50,
    "familiar": 7777,
    "head": 222,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 3522,
    "name": "Illusionist Blaise of the Lake",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 203,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 3523,
    "name": "Enchanter Faye of the Havens",
    "background": 0,
    "body": 49,
    "familiar": 97,
    "head": 131,
    "prop": 266,
    "rune": 287
  },
  {
    "idx": 3524,
    "name": "Sorcerer Soran of the Temple",
    "background": 1,
    "body": 63,
    "familiar": 109,
    "head": 214,
    "prop": 307,
    "rune": 304
  },
  {
    "idx": 3525,
    "name": "Enchanter Bathsheba of the Brambles",
    "background": 0,
    "body": 34,
    "familiar": 105,
    "head": 132,
    "prop": 273,
    "rune": 285
  },
  {
    "idx": 3526,
    "name": "Arch-Magician Froggy of Alfheim",
    "background": 2,
    "body": 29,
    "familiar": 93,
    "head": 235,
    "prop": 306,
    "rune": 285
  },
  {
    "idx": 3527,
    "name": "Artificer Eden of the Marsh",
    "background": 0,
    "body": 23,
    "familiar": 94,
    "head": 214,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 3528,
    "name": "Sorcerer Salah of Limbo",
    "background": 1,
    "body": 85,
    "familiar": 119,
    "head": 237,
    "prop": 316,
    "rune": 7777
  },
  {
    "idx": 3529,
    "name": "Alchemist Demos of the Gnostics",
    "background": 3,
    "body": 24,
    "familiar": 88,
    "head": 158,
    "prop": 270,
    "rune": 299
  },
  {
    "idx": 3530,
    "name": "Shadow Mage Elvio of the Villa",
    "background": 0,
    "body": 26,
    "familiar": 7777,
    "head": 201,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 3531,
    "name": "Archmagus Nikolas of the Mount",
    "background": 1,
    "body": 54,
    "familiar": 7777,
    "head": 221,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3532,
    "name": "Illusionist Eden of the Hall",
    "background": 1,
    "body": 77,
    "familiar": 112,
    "head": 153,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 3533,
    "name": "Druid Crowley of the Toadstools",
    "background": 0,
    "body": 29,
    "familiar": 115,
    "head": 232,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 3534,
    "name": "Chaos Mage Soran of the Obelisk",
    "background": 2,
    "body": 63,
    "familiar": 110,
    "head": 227,
    "prop": 338,
    "rune": 284
  },
  {
    "idx": 3535,
    "name": "Necromancer Aamon of Xanadu",
    "background": 0,
    "body": 11,
    "familiar": 97,
    "head": 205,
    "prop": 315,
    "rune": 290
  },
  {
    "idx": 3536,
    "name": "Archmagus Chandler of the Villa",
    "background": 2,
    "body": 76,
    "familiar": 110,
    "head": 207,
    "prop": 267,
    "rune": 292
  },
  {
    "idx": 3537,
    "name": "Archmagus Milo of the Hall",
    "background": 0,
    "body": 40,
    "familiar": 123,
    "head": 153,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 3538,
    "name": "Arcanist Bartholomew of the Veil",
    "background": 0,
    "body": 8,
    "familiar": 95,
    "head": 206,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 3539,
    "name": "Enchanter Circe of the Wood",
    "background": 1,
    "body": 21,
    "familiar": 114,
    "head": 187,
    "prop": 338,
    "rune": 290
  },
  {
    "idx": 3540,
    "name": "Augurer Maia of the River",
    "background": 2,
    "body": 31,
    "familiar": 93,
    "head": 191,
    "prop": 252,
    "rune": 282
  },
  {
    "idx": 3541,
    "name": "Evoker Thana of the Road",
    "background": 1,
    "body": 38,
    "familiar": 115,
    "head": 208,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 3542,
    "name": "Druid Pezo of the Keep",
    "background": 3,
    "body": 40,
    "familiar": 110,
    "head": 178,
    "prop": 323,
    "rune": 284
  },
  {
    "idx": 3543,
    "name": "Charmer Mina of the Rock",
    "background": 2,
    "body": 61,
    "familiar": 107,
    "head": 156,
    "prop": 269,
    "rune": 282
  },
  {
    "idx": 3544,
    "name": "Alchemist Azahl of Mu",
    "background": 2,
    "body": 11,
    "familiar": 111,
    "head": 189,
    "prop": 271,
    "rune": 293
  },
  {
    "idx": 3545,
    "name": "Runecaster Atlanta of the Steppe",
    "background": 0,
    "body": 35,
    "familiar": 105,
    "head": 187,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3546,
    "name": "Druid Malthus of the Field",
    "background": 3,
    "body": 15,
    "familiar": 89,
    "head": 173,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 3547,
    "name": "Augurer Lumos of the Hall",
    "background": 0,
    "body": 19,
    "familiar": 123,
    "head": 147,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 3548,
    "name": "Archmagus Amir of the Mount",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 153,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3549,
    "name": "Shadow Mage Izible",
    "background": 1,
    "body": 11,
    "familiar": 112,
    "head": 171,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 3550,
    "name": "Magus Jahid of the Hall",
    "background": 0,
    "body": 77,
    "familiar": 115,
    "head": 237,
    "prop": 268,
    "rune": 300
  },
  {
    "idx": 3551,
    "name": "Ghost Eater Arcus of the Cosmos",
    "background": 2,
    "body": 67,
    "familiar": 104,
    "head": 205,
    "prop": 319,
    "rune": 291
  },
  {
    "idx": 3552,
    "name": "Archmagus Nikolas of the Hall",
    "background": 0,
    "body": 48,
    "familiar": 7777,
    "head": 226,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 3553,
    "name": "Witch Hagatha of the Mountain",
    "background": 0,
    "body": 38,
    "familiar": 119,
    "head": 166,
    "prop": 276,
    "rune": 288
  },
  {
    "idx": 3554,
    "name": "Arch-Magician Salvatore of the Gnostics",
    "background": 0,
    "body": 11,
    "familiar": 94,
    "head": 238,
    "prop": 280,
    "rune": 299
  },
  {
    "idx": 3555,
    "name": "Artificer Goliath of the Valley",
    "background": 0,
    "body": 84,
    "familiar": 89,
    "head": 220,
    "prop": 340,
    "rune": 292
  },
  {
    "idx": 3556,
    "name": "Udor of the Field",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 127,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 3557,
    "name": "Hedge Wizard Darby of the Grotto",
    "background": 1,
    "body": 15,
    "familiar": 97,
    "head": 167,
    "prop": 312,
    "rune": 292
  },
  {
    "idx": 3558,
    "name": "Battlemage Aleister of the Pit",
    "background": 2,
    "body": 86,
    "familiar": 95,
    "head": 232,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3559,
    "name": "Shaman Stag of the Steppe",
    "background": 0,
    "body": 13,
    "familiar": 104,
    "head": 167,
    "prop": 264,
    "rune": 292
  },
  {
    "idx": 3560,
    "name": "Witch Ophelia of the Quantum Downs",
    "background": 2,
    "body": 8,
    "familiar": 107,
    "head": 209,
    "prop": 339,
    "rune": 284
  },
  {
    "idx": 3561,
    "name": "Hedge Wizard Caligari of the Astral Plane",
    "background": 0,
    "body": 8,
    "familiar": 108,
    "head": 149,
    "prop": 328,
    "rune": 300
  },
  {
    "idx": 3562,
    "name": "Artificer Corky of Xanadu",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 201,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 3563,
    "name": "Battle Mage Tundror of the Surf",
    "background": 2,
    "body": 57,
    "familiar": 94,
    "head": 204,
    "prop": 314,
    "rune": 297
  },
  {
    "idx": 3564,
    "name": "Mystic Suyin of the Wold",
    "background": 2,
    "body": 45,
    "familiar": 95,
    "head": 180,
    "prop": 326,
    "rune": 299
  },
  {
    "idx": 3565,
    "name": "Sorcerer Hadrien of the Glacier",
    "background": 0,
    "body": 73,
    "familiar": 112,
    "head": 127,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 3566,
    "name": "Conjurer Rodolfo of the Brine",
    "background": 2,
    "body": 57,
    "familiar": 119,
    "head": 133,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 3567,
    "name": "Thana of the Wild",
    "background": 2,
    "body": 22,
    "familiar": 109,
    "head": 132,
    "prop": 307,
    "rune": 283
  },
  {
    "idx": 3568,
    "name": "Archmagus Alessar of the Pit",
    "background": 1,
    "body": 85,
    "familiar": 97,
    "head": 215,
    "prop": 307,
    "rune": 299
  },
  {
    "idx": 3569,
    "name": "Magus Isaac of the Obelisk",
    "background": 1,
    "body": 54,
    "familiar": 115,
    "head": 230,
    "prop": 249,
    "rune": 291
  },
  {
    "idx": 3570,
    "name": "Thaumaturge Hagar of the Valley",
    "background": 0,
    "body": 50,
    "familiar": 116,
    "head": 129,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 3571,
    "name": "Cleric Ofaris of the Cosmos",
    "background": 1,
    "body": 9,
    "familiar": 99,
    "head": 174,
    "prop": 325,
    "rune": 302
  },
  {
    "idx": 3572,
    "name": "Chronomancer Fugh of the Bastion",
    "background": 0,
    "body": 48,
    "familiar": 115,
    "head": 200,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 3573,
    "name": "Necromancer Gomorrah of the Wood",
    "background": 3,
    "body": 42,
    "familiar": 120,
    "head": 136,
    "prop": 309,
    "rune": 288
  },
  {
    "idx": 3574,
    "name": "Ghost Eater Udor of the Veil",
    "background": 0,
    "body": 28,
    "familiar": 7777,
    "head": 127,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 3575,
    "name": "Soya of the Rock",
    "background": 2,
    "body": 27,
    "familiar": 105,
    "head": 238,
    "prop": 305,
    "rune": 291
  },
  {
    "idx": 3576,
    "name": "Adept Peppy of the Court",
    "background": 2,
    "body": 48,
    "familiar": 116,
    "head": 200,
    "prop": 332,
    "rune": 290
  },
  {
    "idx": 3577,
    "name": "Milo of the Steppe",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 230,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 3578,
    "name": "Magus Tumbaj of the Ether",
    "background": 0,
    "body": 9,
    "familiar": 111,
    "head": 219,
    "prop": 271,
    "rune": 285
  },
  {
    "idx": 3579,
    "name": "Artificer Dante of the Marsh",
    "background": 2,
    "body": 42,
    "familiar": 89,
    "head": 218,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 3580,
    "name": "Spellsinger Galatea of the Hollow",
    "background": 1,
    "body": 34,
    "familiar": 108,
    "head": 191,
    "prop": 275,
    "rune": 300
  },
  {
    "idx": 3581,
    "name": "Hadrien of the Field",
    "background": 1,
    "body": 18,
    "familiar": 108,
    "head": 226,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3582,
    "name": "Witch Delilah of the Desert",
    "background": 0,
    "body": 60,
    "familiar": 95,
    "head": 223,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 3583,
    "name": "Sorcerer Chooki of the Tower",
    "background": 3,
    "body": 49,
    "familiar": 89,
    "head": 128,
    "prop": 308,
    "rune": 286
  },
  {
    "idx": 3584,
    "name": "Sorcerer Merlon of the Ice",
    "background": 0,
    "body": 73,
    "familiar": 95,
    "head": 232,
    "prop": 250,
    "rune": 287
  },
  {
    "idx": 3585,
    "name": "Artificer Benito out of the Void",
    "background": 0,
    "body": 87,
    "familiar": 105,
    "head": 201,
    "prop": 265,
    "rune": 300
  },
  {
    "idx": 3586,
    "name": "Enchanter Circe of the Wood",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 156,
    "prop": 255,
    "rune": 288
  },
  {
    "idx": 3587,
    "name": "Magus Faiz of the Wood",
    "background": 2,
    "body": 18,
    "familiar": 104,
    "head": 142,
    "prop": 315,
    "rune": 284
  },
  {
    "idx": 3588,
    "name": "Magus Ixar of the Hills",
    "background": 0,
    "body": 79,
    "familiar": 97,
    "head": 215,
    "prop": 266,
    "rune": 287
  },
  {
    "idx": 3589,
    "name": "Druid Calista of the Villa",
    "background": 0,
    "body": 77,
    "familiar": 93,
    "head": 132,
    "prop": 276,
    "rune": 290
  },
  {
    "idx": 3590,
    "name": "Shadow Mage Goliath of the Havens",
    "background": 2,
    "body": 24,
    "familiar": 93,
    "head": 203,
    "prop": 337,
    "rune": 302
  },
  {
    "idx": 3591,
    "name": "Diviner Calliope of Arcadia",
    "background": 0,
    "body": 32,
    "familiar": 104,
    "head": 198,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 3592,
    "name": "Pyromancer Iris of the Bibliotheca",
    "background": 0,
    "body": 6,
    "familiar": 103,
    "head": 131,
    "prop": 310,
    "rune": 292
  },
  {
    "idx": 3593,
    "name": "Chaos Mage Victoria of the Villa",
    "background": 0,
    "body": 77,
    "familiar": 119,
    "head": 190,
    "prop": 310,
    "rune": 300
  },
  {
    "idx": 3594,
    "name": "Pyromancer Alice of the Gnostics",
    "background": 1,
    "body": 75,
    "familiar": 105,
    "head": 195,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3595,
    "name": "Shadow Mage Woomba of the Plains",
    "background": 0,
    "body": 82,
    "familiar": 110,
    "head": 171,
    "prop": 337,
    "rune": 293
  },
  {
    "idx": 3596,
    "name": "Scryer Sondra of the Ether",
    "background": 1,
    "body": 75,
    "familiar": 114,
    "head": 187,
    "prop": 252,
    "rune": 286
  },
  {
    "idx": 3597,
    "name": "Artificer Numpty of El Dorado",
    "background": 2,
    "body": 26,
    "familiar": 105,
    "head": 201,
    "prop": 263,
    "rune": 292
  },
  {
    "idx": 3598,
    "name": "of the Wood",
    "background": 0,
    "body": 41,
    "familiar": 94,
    "head": 202,
    "prop": 315,
    "rune": 283
  },
  {
    "idx": 3599,
    "name": "Alchemist Xerxes of Alfheim",
    "background": 3,
    "body": 29,
    "familiar": 97,
    "head": 205,
    "prop": 271,
    "rune": 300
  },
  {
    "idx": 3600,
    "name": "Enchanter Ariadne of the Plains",
    "background": 2,
    "body": 38,
    "familiar": 116,
    "head": 191,
    "prop": 273,
    "rune": 297
  },
  {
    "idx": 3601,
    "name": "Adept Aleister of the Mist",
    "background": 0,
    "body": 55,
    "familiar": 111,
    "head": 211,
    "prop": 322,
    "rune": 282
  },
  {
    "idx": 3602,
    "name": "Arcanist Rixxa of the Desert",
    "background": 0,
    "body": 5,
    "familiar": 104,
    "head": 178,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3603,
    "name": "Medium Oiq of the Keep",
    "background": 2,
    "body": 54,
    "familiar": 111,
    "head": 235,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 3604,
    "name": "Battle Mage Samuel of the Mount",
    "background": 1,
    "body": 49,
    "familiar": 89,
    "head": 213,
    "prop": 259,
    "rune": 303
  },
  {
    "idx": 3605,
    "name": "Archmagus Casper of the Veil",
    "background": 0,
    "body": 10,
    "familiar": 7777,
    "head": 138,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 3606,
    "name": "Victoria of the Heath",
    "background": 1,
    "body": 44,
    "familiar": 105,
    "head": 208,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 3607,
    "name": "Clairvoyant Ariadne of the Wold",
    "background": 1,
    "body": 34,
    "familiar": 95,
    "head": 191,
    "prop": 251,
    "rune": 298
  },
  {
    "idx": 3608,
    "name": "Geomancer Nixie of the Woodlands",
    "background": 0,
    "body": 28,
    "familiar": 111,
    "head": 235,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 3609,
    "name": "Sorcerer Apollo of the Cosmos",
    "background": 1,
    "body": 67,
    "familiar": 114,
    "head": 162,
    "prop": 305,
    "rune": 294
  },
  {
    "idx": 3610,
    "name": "Amir of the Quantum Shadow",
    "background": 3,
    "body": 86,
    "familiar": 103,
    "head": 160,
    "prop": 256,
    "rune": 291
  },
  {
    "idx": 3611,
    "name": "Void Disciple Qaid of the River",
    "background": 1,
    "body": 44,
    "familiar": 108,
    "head": 219,
    "prop": 307,
    "rune": 300
  },
  {
    "idx": 3612,
    "name": "Mystic Willow of the Wood",
    "background": 1,
    "body": 22,
    "familiar": 114,
    "head": 139,
    "prop": 322,
    "rune": 293
  },
  {
    "idx": 3613,
    "name": "Magus Rita of the Keep",
    "background": 3,
    "body": 18,
    "familiar": 112,
    "head": 155,
    "prop": 262,
    "rune": 294
  },
  {
    "idx": 3614,
    "name": "Sorcerer Milo of the Rock",
    "background": 1,
    "body": 58,
    "familiar": 111,
    "head": 228,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 3615,
    "name": "Alatar of the Hills",
    "background": 2,
    "body": 43,
    "familiar": 101,
    "head": 214,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 3616,
    "name": "Ghost Eater Aleister of Xanadu",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 147,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 3617,
    "name": "Chaos Mage Devon of the Citadel",
    "background": 0,
    "body": 74,
    "familiar": 115,
    "head": 208,
    "prop": 310,
    "rune": 299
  },
  {
    "idx": 3618,
    "name": "Arcanist Koop of the Brine",
    "background": 2,
    "body": 57,
    "familiar": 7777,
    "head": 200,
    "prop": 334,
    "rune": 282
  },
  {
    "idx": 3619,
    "name": "Shadow Mage Lumos of the Citadel",
    "background": 1,
    "body": 76,
    "familiar": 88,
    "head": 212,
    "prop": 334,
    "rune": 291
  },
  {
    "idx": 3620,
    "name": "Magus Sahir of the Fey",
    "background": 0,
    "body": 30,
    "familiar": 106,
    "head": 164,
    "prop": 245,
    "rune": 295
  },
  {
    "idx": 3621,
    "name": "Enchanter Katherine of the Hills",
    "background": 1,
    "body": 36,
    "familiar": 115,
    "head": 139,
    "prop": 262,
    "rune": 297
  },
  {
    "idx": 3622,
    "name": "Magus Ivy of the North",
    "background": 2,
    "body": 73,
    "familiar": 95,
    "head": 159,
    "prop": 253,
    "rune": 294
  },
  {
    "idx": 3623,
    "name": "Sorcerer Jeldor of the Cosmos",
    "background": 3,
    "body": 83,
    "familiar": 119,
    "head": 226,
    "prop": 262,
    "rune": 300
  },
  {
    "idx": 3624,
    "name": "Battle Mage Hagar of the Sacred Pillars",
    "background": 1,
    "body": 54,
    "familiar": 111,
    "head": 188,
    "prop": 321,
    "rune": 283
  },
  {
    "idx": 3625,
    "name": "Artificer Oxnard of the Marsh",
    "background": 3,
    "body": 44,
    "familiar": 88,
    "head": 193,
    "prop": 260,
    "rune": 290
  },
  {
    "idx": 3626,
    "name": "Illusionist Pezo of Dreams",
    "background": 2,
    "body": 6,
    "familiar": 112,
    "head": 235,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 3627,
    "name": "Magus Fire Eater of the Cosmos",
    "background": 2,
    "body": 52,
    "familiar": 88,
    "head": 158,
    "prop": 262,
    "rune": 291
  },
  {
    "idx": 3628,
    "name": "Shaman Alizam of the Waste",
    "background": 3,
    "body": 85,
    "familiar": 90,
    "head": 219,
    "prop": 264,
    "rune": 290
  },
  {
    "idx": 3629,
    "name": "Magus Faiz of the Villa",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 164,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3630,
    "name": "Battle Mage Darick of the Temple",
    "background": 0,
    "body": 49,
    "familiar": 89,
    "head": 173,
    "prop": 245,
    "rune": 299
  },
  {
    "idx": 3631,
    "name": "Charmer Mina of the Hall",
    "background": 3,
    "body": 77,
    "familiar": 104,
    "head": 131,
    "prop": 262,
    "rune": 284
  },
  {
    "idx": 3632,
    "name": "Archmagus Oberon of Avalon",
    "background": 0,
    "body": 7,
    "familiar": 119,
    "head": 229,
    "prop": 273,
    "rune": 294
  },
  {
    "idx": 3633,
    "name": "Magus Pumlo of the Rock",
    "background": 3,
    "body": 59,
    "familiar": 89,
    "head": 186,
    "prop": 263,
    "rune": 292
  },
  {
    "idx": 3634,
    "name": "Archmagus Lumos of the Rock",
    "background": 0,
    "body": 60,
    "familiar": 7777,
    "head": 238,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3635,
    "name": "Augurer Pumlo of the Reach",
    "background": 2,
    "body": 84,
    "familiar": 123,
    "head": 230,
    "prop": 252,
    "rune": 290
  },
  {
    "idx": 3636,
    "name": "Witch Calypso of the Road",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 176,
    "prop": 309,
    "rune": 285
  },
  {
    "idx": 3637,
    "name": "Null Mage Jeldor from the Abyss",
    "background": 0,
    "body": 85,
    "familiar": 88,
    "head": 127,
    "prop": 334,
    "rune": 293
  },
  {
    "idx": 3638,
    "name": "Sorcerer Lumos of the Havens",
    "background": 3,
    "body": 75,
    "familiar": 90,
    "head": 238,
    "prop": 305,
    "rune": 303
  },
  {
    "idx": 3639,
    "name": "Archmagus Tengu of the Hills",
    "background": 1,
    "body": 17,
    "familiar": 101,
    "head": 243,
    "prop": 255,
    "rune": 302
  },
  {
    "idx": 3640,
    "name": "Battle Mage Durm of the Mount",
    "background": 0,
    "body": 6,
    "familiar": 93,
    "head": 206,
    "prop": 338,
    "rune": 282
  },
  {
    "idx": 3641,
    "name": "Battle Mage Eric of the Sands",
    "background": 3,
    "body": 59,
    "familiar": 115,
    "head": 218,
    "prop": 310,
    "rune": 291
  },
  {
    "idx": 3642,
    "name": "Spellsinger Nikolas of the Ether",
    "background": 2,
    "body": 11,
    "familiar": 116,
    "head": 214,
    "prop": 257,
    "rune": 300
  },
  {
    "idx": 3643,
    "name": "Arch-Magician Azahl of the Brambles",
    "background": 1,
    "body": 13,
    "familiar": 116,
    "head": 214,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 3644,
    "name": "Cleric Aleister from the Shadow",
    "background": 2,
    "body": 85,
    "familiar": 94,
    "head": 212,
    "prop": 252,
    "rune": 300
  },
  {
    "idx": 3645,
    "name": "Alchemist Xiuying of the Plains",
    "background": 1,
    "body": 38,
    "familiar": 106,
    "head": 180,
    "prop": 268,
    "rune": 296
  },
  {
    "idx": 3646,
    "name": "Archmagus Solomon of the Lake",
    "background": 2,
    "body": 19,
    "familiar": 97,
    "head": 214,
    "prop": 306,
    "rune": 285
  },
  {
    "idx": 3647,
    "name": "Enchanter Ratko of the Wood",
    "background": 1,
    "body": 13,
    "familiar": 99,
    "head": 203,
    "prop": 266,
    "rune": 300
  },
  {
    "idx": 3648,
    "name": "Ice Mage Horace of the Expanse",
    "background": 2,
    "body": 73,
    "familiar": 120,
    "head": 217,
    "prop": 338,
    "rune": 299
  },
  {
    "idx": 3649,
    "name": "Sage Hansel of Alfheim",
    "background": 2,
    "body": 28,
    "familiar": 103,
    "head": 129,
    "prop": 324,
    "rune": 284
  },
  {
    "idx": 3650,
    "name": "Artificer Moka of the Light",
    "background": 2,
    "body": 8,
    "familiar": 93,
    "head": 235,
    "prop": 258,
    "rune": 286
  },
  {
    "idx": 3651,
    "name": "Necromancer Burnside of the Gnostics",
    "background": 2,
    "body": 9,
    "familiar": 111,
    "head": 158,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 3652,
    "name": "Fortune Teller Marceline of the Tower",
    "background": 3,
    "body": 50,
    "familiar": 101,
    "head": 209,
    "prop": 329,
    "rune": 302
  },
  {
    "idx": 3653,
    "name": "Shaman Hothor of the Dunes",
    "background": 1,
    "body": 58,
    "familiar": 99,
    "head": 133,
    "prop": 340,
    "rune": 283
  },
  {
    "idx": 3654,
    "name": "Sage Aleister of the Havens",
    "background": 2,
    "body": 24,
    "familiar": 110,
    "head": 221,
    "prop": 322,
    "rune": 293
  },
  {
    "idx": 3655,
    "name": "Pyromancer Soya",
    "background": 1,
    "body": 10,
    "familiar": 123,
    "head": 162,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3656,
    "name": "Sage Milo of the Bibliotheca",
    "background": 0,
    "body": 55,
    "familiar": 119,
    "head": 233,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 3657,
    "name": "Beyna of the Atheneum",
    "background": 3,
    "body": 6,
    "familiar": 110,
    "head": 139,
    "prop": 322,
    "rune": 302
  },
  {
    "idx": 3658,
    "name": "Archmagus Zubin of the Keep",
    "background": 1,
    "body": 54,
    "familiar": 123,
    "head": 227,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 3659,
    "name": "Magus George of the Cosmos",
    "background": 1,
    "body": 9,
    "familiar": 114,
    "head": 238,
    "prop": 262,
    "rune": 287
  },
  {
    "idx": 3660,
    "name": "Archmagus Aleister of the Riviera",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 138,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3661,
    "name": "Runecaster  of the Mist",
    "background": 1,
    "body": 7,
    "familiar": 120,
    "head": 162,
    "prop": 256,
    "rune": 300
  },
  {
    "idx": 3662,
    "name": "Battle Mage Flynn of the Mist",
    "background": 2,
    "body": 7,
    "familiar": 112,
    "head": 204,
    "prop": 315,
    "rune": 299
  },
  {
    "idx": 3663,
    "name": "Uvlius",
    "background": 2,
    "body": 77,
    "familiar": 109,
    "head": 189,
    "prop": 249,
    "rune": 282
  },
  {
    "idx": 3664,
    "name": "Artificer Numpty of the Swell",
    "background": 0,
    "body": 57,
    "familiar": 105,
    "head": 201,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3665,
    "name": "Celah of the Grotto",
    "background": 1,
    "body": 12,
    "familiar": 114,
    "head": 228,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 3666,
    "name": "Archmagus Drokore of the Mist",
    "background": 2,
    "body": 50,
    "familiar": 101,
    "head": 150,
    "prop": 269,
    "rune": 301
  },
  {
    "idx": 3667,
    "name": "Summoner Soya of the Bastion",
    "background": 1,
    "body": 74,
    "familiar": 7777,
    "head": 229,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 3668,
    "name": "Geomancer Milo of the Berg",
    "background": 0,
    "body": 65,
    "familiar": 114,
    "head": 214,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 3669,
    "name": "Voodoo Priest Cromwell of the Brambles",
    "background": 1,
    "body": 23,
    "familiar": 7777,
    "head": 188,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 3670,
    "name": "Hedge Wizard Nicolas of the Oasis",
    "background": 1,
    "body": 58,
    "familiar": 94,
    "head": 177,
    "prop": 273,
    "rune": 288
  },
  {
    "idx": 3671,
    "name": "Arcanist Remus of the Havens",
    "background": 2,
    "body": 11,
    "familiar": 112,
    "head": 214,
    "prop": 250,
    "rune": 288
  },
  {
    "idx": 3672,
    "name": "Chronomancer Angus of the Mount",
    "background": 0,
    "body": 6,
    "familiar": 96,
    "head": 206,
    "prop": 259,
    "rune": 294
  },
  {
    "idx": 3673,
    "name": "Druid Hugo of the Valley",
    "background": 1,
    "body": 15,
    "familiar": 7777,
    "head": 179,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 3674,
    "name": "Arcanist Asphodel of the Realm",
    "background": 3,
    "body": 75,
    "familiar": 101,
    "head": 191,
    "prop": 250,
    "rune": 292
  },
  {
    "idx": 3675,
    "name": "Oracle Tundror of the Marsh",
    "background": 1,
    "body": 45,
    "familiar": 89,
    "head": 173,
    "prop": 329,
    "rune": 302
  },
  {
    "idx": 3676,
    "name": "Druid Enigma of the Valley",
    "background": 1,
    "body": 36,
    "familiar": 115,
    "head": 159,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 3677,
    "name": "Magus Uvlius of the Field",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 233,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3678,
    "name": "Druid Setsuko of the Palms",
    "background": 3,
    "body": 5,
    "familiar": 94,
    "head": 126,
    "prop": 276,
    "rune": 293
  },
  {
    "idx": 3679,
    "name": "Artificer Chanterelle of the Moors",
    "background": 0,
    "body": 41,
    "familiar": 111,
    "head": 195,
    "prop": 261,
    "rune": 282
  },
  {
    "idx": 3680,
    "name": "Magus Zafar of the Keep",
    "background": 2,
    "body": 48,
    "familiar": 115,
    "head": 222,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 3681,
    "name": "Spellsinger Cassius of the Mount",
    "background": 1,
    "body": 7,
    "familiar": 119,
    "head": 129,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 3682,
    "name": "Archmagus Soya of the Mist",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 127,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 3683,
    "name": "Hedge Wizard Rowena of the Arctic",
    "background": 2,
    "body": 65,
    "familiar": 101,
    "head": 209,
    "prop": 273,
    "rune": 292
  },
  {
    "idx": 3684,
    "name": "Shaman Magnus of the Valley",
    "background": 0,
    "body": 12,
    "familiar": 97,
    "head": 218,
    "prop": 265,
    "rune": 292
  },
  {
    "idx": 3685,
    "name": "Artificer Atlas of the Thorn",
    "background": 0,
    "body": 28,
    "familiar": 116,
    "head": 206,
    "prop": 340,
    "rune": 292
  },
  {
    "idx": 3686,
    "name": "Electromancer Lux of the Atheneum",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 233,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 3687,
    "name": "Hedge Wizard Izible of the River",
    "background": 0,
    "body": 42,
    "familiar": 89,
    "head": 171,
    "prop": 312,
    "rune": 300
  },
  {
    "idx": 3688,
    "name": "Sorcerer Amir of the Steppe",
    "background": 0,
    "body": 14,
    "familiar": 88,
    "head": 202,
    "prop": 247,
    "rune": 293
  },
  {
    "idx": 3689,
    "name": "Hex Mage Faye of the Road",
    "background": 1,
    "body": 38,
    "familiar": 93,
    "head": 191,
    "prop": 277,
    "rune": 291
  },
  {
    "idx": 3690,
    "name": "Mystic Hansel of the Moors",
    "background": 1,
    "body": 12,
    "familiar": 111,
    "head": 218,
    "prop": 326,
    "rune": 303
  },
  {
    "idx": 3691,
    "name": "Sorcerer Alessar of the Gnostics",
    "background": 0,
    "body": 52,
    "familiar": 104,
    "head": 211,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 3692,
    "name": "Diabolist Lenora of the Dunes",
    "background": 0,
    "body": 5,
    "familiar": 7777,
    "head": 223,
    "prop": 335,
    "rune": 294
  },
  {
    "idx": 3693,
    "name": "Arcanist Allistair of the Fey",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 197,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 3694,
    "name": "Arabella of the Wild",
    "background": 2,
    "body": 32,
    "familiar": 93,
    "head": 187,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 3695,
    "name": "Conjurer Yookoo of the Heath",
    "background": 0,
    "body": 14,
    "familiar": 103,
    "head": 200,
    "prop": 339,
    "rune": 7777
  },
  {
    "idx": 3696,
    "name": "Alchemist Angus of the Field",
    "background": 0,
    "body": 43,
    "familiar": 97,
    "head": 165,
    "prop": 326,
    "rune": 294
  },
  {
    "idx": 3697,
    "name": "Cryptomancer Argus of the Atheneum",
    "background": 2,
    "body": 62,
    "familiar": 115,
    "head": 229,
    "prop": 310,
    "rune": 292
  },
  {
    "idx": 3698,
    "name": "Hedge Wizard Danny of the Desert",
    "background": 0,
    "body": 27,
    "familiar": 107,
    "head": 165,
    "prop": 312,
    "rune": 304
  },
  {
    "idx": 3699,
    "name": "Arcanist Poppy of the Canyon",
    "background": 2,
    "body": 84,
    "familiar": 103,
    "head": 200,
    "prop": 332,
    "rune": 301
  },
  {
    "idx": 3700,
    "name": "Ice Mage Mushy of the Ice",
    "background": 1,
    "body": 65,
    "familiar": 112,
    "head": 195,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 3701,
    "name": "Arch-Magician Silas of the Lake",
    "background": 0,
    "body": 42,
    "familiar": 7777,
    "head": 230,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 3702,
    "name": "Magus Faiz of the Quantum Downs",
    "background": 0,
    "body": 10,
    "familiar": 123,
    "head": 219,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 3703,
    "name": "Ghost Eater Ghorhoth of the Steppe",
    "background": 1,
    "body": 12,
    "familiar": 88,
    "head": 145,
    "prop": 254,
    "rune": 298
  },
  {
    "idx": 3704,
    "name": "Void Disciple Nazim of the Light",
    "background": 0,
    "body": 16,
    "familiar": 88,
    "head": 222,
    "prop": 307,
    "rune": 290
  },
  {
    "idx": 3705,
    "name": "Archmagus Amir of the Court",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 233,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3706,
    "name": "Alchemist  of the Sacred Pillars",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 214,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 3707,
    "name": "Sorcerer Eden",
    "background": 2,
    "body": 10,
    "familiar": 112,
    "head": 127,
    "prop": 250,
    "rune": 282
  },
  {
    "idx": 3708,
    "name": "Alchemist Casper of the Belfry",
    "background": 2,
    "body": 63,
    "familiar": 114,
    "head": 212,
    "prop": 267,
    "rune": 294
  },
  {
    "idx": 3709,
    "name": "Pyromancer Scorch of the Hills",
    "background": 2,
    "body": 84,
    "familiar": 107,
    "head": 158,
    "prop": 246,
    "rune": 294
  },
  {
    "idx": 3710,
    "name": "Sorcerer Shukri of the Oasis",
    "background": 0,
    "body": 58,
    "familiar": 94,
    "head": 219,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 3711,
    "name": "Mystic Apollo in the Shadows",
    "background": 1,
    "body": 86,
    "familiar": 7777,
    "head": 174,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 3712,
    "name": "Archmagus Zaros of the Quantum Shadow",
    "background": 0,
    "body": 85,
    "familiar": 90,
    "head": 162,
    "prop": 265,
    "rune": 290
  },
  {
    "idx": 3713,
    "name": "Sorcerer Apollo of the Cosmos",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 141,
    "prop": 305,
    "rune": 299
  },
  {
    "idx": 3714,
    "name": "Magus Tundror of the Mount",
    "background": 3,
    "body": 7,
    "familiar": 104,
    "head": 173,
    "prop": 262,
    "rune": 299
  },
  {
    "idx": 3715,
    "name": "Geomancer Marceau from the Shadow",
    "background": 0,
    "body": 86,
    "familiar": 114,
    "head": 179,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 3716,
    "name": "Conjurer Zubin of the Palms",
    "background": 0,
    "body": 60,
    "familiar": 90,
    "head": 147,
    "prop": 246,
    "rune": 299
  },
  {
    "idx": 3717,
    "name": "Spellsinger Luther of the Ether",
    "background": 1,
    "body": 68,
    "familiar": 107,
    "head": 188,
    "prop": 275,
    "rune": 288
  },
  {
    "idx": 3718,
    "name": "Archmagus Ozohr of the Hills",
    "background": 0,
    "body": 42,
    "familiar": 7777,
    "head": 192,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 3719,
    "name": "Diviner Meloogen of Cuckoo Land",
    "background": 0,
    "body": 29,
    "familiar": 108,
    "head": 154,
    "prop": 251,
    "rune": 284
  },
  {
    "idx": 3720,
    "name": "Sage Morrow of the Bibliotheca",
    "background": 2,
    "body": 63,
    "familiar": 114,
    "head": 239,
    "prop": 318,
    "rune": 286
  },
  {
    "idx": 3721,
    "name": "Summoner Soran of the Ether",
    "background": 0,
    "body": 8,
    "familiar": 99,
    "head": 211,
    "prop": 322,
    "rune": 304
  },
  {
    "idx": 3722,
    "name": "Sorcerer Allistair of the Realm",
    "background": 2,
    "body": 75,
    "familiar": 90,
    "head": 162,
    "prop": 314,
    "rune": 294
  },
  {
    "idx": 3723,
    "name": "Sage Althea of the Road",
    "background": 1,
    "body": 36,
    "familiar": 101,
    "head": 135,
    "prop": 316,
    "rune": 300
  },
  {
    "idx": 3724,
    "name": "Sage Remus of the Platonic Shadow",
    "background": 1,
    "body": 8,
    "familiar": 114,
    "head": 138,
    "prop": 329,
    "rune": 294
  },
  {
    "idx": 3725,
    "name": "Magus Pino of the Cosmos",
    "background": 1,
    "body": 75,
    "familiar": 110,
    "head": 201,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 3726,
    "name": "Summoner Willow of the Wild",
    "background": 1,
    "body": 22,
    "familiar": 119,
    "head": 131,
    "prop": 253,
    "rune": 286
  },
  {
    "idx": 3727,
    "name": "Diabolist Astrid of the Brambles",
    "background": 0,
    "body": 32,
    "familiar": 94,
    "head": 135,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 3728,
    "name": "Enchanter Nassif of the Dunes",
    "background": 2,
    "body": 27,
    "familiar": 94,
    "head": 219,
    "prop": 334,
    "rune": 7777
  },
  {
    "idx": 3729,
    "name": "Charmer Circe of Arcadia",
    "background": 1,
    "body": 36,
    "familiar": 105,
    "head": 131,
    "prop": 327,
    "rune": 282
  },
  {
    "idx": 3730,
    "name": "Diviner Pezo of the Dunes",
    "background": 1,
    "body": 59,
    "familiar": 109,
    "head": 171,
    "prop": 245,
    "rune": 298
  },
  {
    "idx": 3731,
    "name": "Hex Mage Ivy of the Cosmos",
    "background": 1,
    "body": 9,
    "familiar": 105,
    "head": 223,
    "prop": 309,
    "rune": 288
  },
  {
    "idx": 3732,
    "name": "Void Disciple Jeldor of the Gnostics",
    "background": 0,
    "body": 52,
    "familiar": 123,
    "head": 215,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 3733,
    "name": "Bard Zelroth of the Hall",
    "background": 0,
    "body": 77,
    "familiar": 115,
    "head": 160,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 3734,
    "name": "Enchanter Daria of the Marsh",
    "background": 0,
    "body": 38,
    "familiar": 119,
    "head": 131,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 3735,
    "name": "Sorcerer Zubin of Dreams",
    "background": 1,
    "body": 7,
    "familiar": 112,
    "head": 214,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 3736,
    "name": "Sorcerer Kazem of the Mist",
    "background": 0,
    "body": 7,
    "familiar": 119,
    "head": 237,
    "prop": 268,
    "rune": 288
  },
  {
    "idx": 3737,
    "name": "Hedge Wizard Luther of the Veil",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 182,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 3738,
    "name": "Arch-Magician Alizam of the Mount",
    "background": 2,
    "body": 50,
    "familiar": 117,
    "head": 164,
    "prop": 324,
    "rune": 300
  },
  {
    "idx": 3739,
    "name": "Hex Mage Junko of the Brambles",
    "background": 2,
    "body": 39,
    "familiar": 88,
    "head": 126,
    "prop": 335,
    "rune": 282
  },
  {
    "idx": 3740,
    "name": "Pyromancer Giacomo of the Sun",
    "background": 1,
    "body": 27,
    "familiar": 7777,
    "head": 201,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3741,
    "name": "Necromancer Godfrey of the Capital",
    "background": 1,
    "body": 74,
    "familiar": 7777,
    "head": 188,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 3742,
    "name": "Archmagus Iprix of Elysium",
    "background": 0,
    "body": 62,
    "familiar": 109,
    "head": 215,
    "prop": 249,
    "rune": 294
  },
  {
    "idx": 3743,
    "name": "Artificer Ozohr of the Sea",
    "background": 2,
    "body": 57,
    "familiar": 119,
    "head": 197,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 3744,
    "name": "Archmagus Moka of the Villa",
    "background": 0,
    "body": 74,
    "familiar": 7777,
    "head": 235,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3745,
    "name": "Ice Mage Cromwell of the Expanse",
    "background": 1,
    "body": 73,
    "familiar": 111,
    "head": 173,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3746,
    "name": "Adept Ursula",
    "background": 1,
    "body": 48,
    "familiar": 90,
    "head": 176,
    "prop": 322,
    "rune": 285
  },
  {
    "idx": 3747,
    "name": "Adept Cassiopeia of the Marsh",
    "background": 3,
    "body": 35,
    "familiar": 114,
    "head": 131,
    "prop": 338,
    "rune": 295
  },
  {
    "idx": 3748,
    "name": "Chaos Mage Angus of the Canyon",
    "background": 1,
    "body": 82,
    "familiar": 104,
    "head": 173,
    "prop": 310,
    "rune": 284
  },
  {
    "idx": 3749,
    "name": "Pyromancer Milton of the Oasis",
    "background": 1,
    "body": 60,
    "familiar": 97,
    "head": 197,
    "prop": 309,
    "rune": 300
  },
  {
    "idx": 3750,
    "name": "Battle Mage Homer of the Road",
    "background": 1,
    "body": 43,
    "familiar": 120,
    "head": 133,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 3751,
    "name": "Archmagus Hadrien of the Desert",
    "background": 0,
    "body": 58,
    "familiar": 108,
    "head": 228,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 3752,
    "name": "Necromancer Vossler of the Cosmos",
    "background": 0,
    "body": 9,
    "familiar": 111,
    "head": 205,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 3753,
    "name": "Aeromancer Willow in the Shadows",
    "background": 1,
    "body": 85,
    "familiar": 119,
    "head": 198,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 3754,
    "name": "Ixar of the Obelisk",
    "background": 3,
    "body": 50,
    "familiar": 94,
    "head": 227,
    "prop": 257,
    "rune": 282
  },
  {
    "idx": 3755,
    "name": "Celeste of the Plains",
    "background": 3,
    "body": 22,
    "familiar": 95,
    "head": 208,
    "prop": 315,
    "rune": 300
  },
  {
    "idx": 3756,
    "name": "Archmagus Amir of the Pit",
    "background": 0,
    "body": 85,
    "familiar": 95,
    "head": 226,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3757,
    "name": "Cryptomancer Artis of the Wold",
    "background": 1,
    "body": 38,
    "familiar": 119,
    "head": 187,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 3758,
    "name": "Evoker Magnus of the Carnival",
    "background": 0,
    "body": 29,
    "familiar": 94,
    "head": 217,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 3759,
    "name": "Arcanist Eronin of the Sands",
    "background": 3,
    "body": 5,
    "familiar": 114,
    "head": 207,
    "prop": 323,
    "rune": 286
  },
  {
    "idx": 3760,
    "name": "Shadow Mage Magpie of the Realm",
    "background": 1,
    "body": 24,
    "familiar": 110,
    "head": 144,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 3761,
    "name": "Artificer Bojangles of the Atheneum",
    "background": 3,
    "body": 7,
    "familiar": 105,
    "head": 201,
    "prop": 275,
    "rune": 287
  },
  {
    "idx": 3762,
    "name": "Hedge Wizard Kalo of the Keep",
    "background": 0,
    "body": 77,
    "familiar": 96,
    "head": 171,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 3763,
    "name": "Lumos of the Field",
    "background": 0,
    "body": 82,
    "familiar": 115,
    "head": 199,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 3764,
    "name": "Enchanter Galatea of the Heath",
    "background": 3,
    "body": 34,
    "familiar": 104,
    "head": 131,
    "prop": 250,
    "rune": 282
  },
  {
    "idx": 3765,
    "name": "Cryptomancer Mina of the Brambles",
    "background": 0,
    "body": 36,
    "familiar": 109,
    "head": 135,
    "prop": 339,
    "rune": 282
  },
  {
    "idx": 3766,
    "name": "Magus Cthulu of Elysium",
    "background": 2,
    "body": 62,
    "familiar": 96,
    "head": 145,
    "prop": 262,
    "rune": 282
  },
  {
    "idx": 3767,
    "name": "Arcanist Caligari of the Fey",
    "background": 1,
    "body": 28,
    "familiar": 108,
    "head": 149,
    "prop": 306,
    "rune": 284
  },
  {
    "idx": 3768,
    "name": "Battle Mage Goliath of the Sands",
    "background": 1,
    "body": 61,
    "familiar": 95,
    "head": 133,
    "prop": 264,
    "rune": 291
  },
  {
    "idx": 3769,
    "name": "Pyromancer Thoth of the Cosmos",
    "background": 0,
    "body": 24,
    "familiar": 88,
    "head": 194,
    "prop": 309,
    "rune": 304
  },
  {
    "idx": 3770,
    "name": "Hedge Wizard Tabitha of the Obelisk",
    "background": 1,
    "body": 7,
    "familiar": 119,
    "head": 159,
    "prop": 312,
    "rune": 293
  },
  {
    "idx": 3771,
    "name": "Archmagus Fark of the Wood",
    "background": 3,
    "body": 12,
    "familiar": 97,
    "head": 125,
    "prop": 322,
    "rune": 290
  },
  {
    "idx": 3772,
    "name": "Artificer Rook of Elysium",
    "background": 1,
    "body": 7,
    "familiar": 109,
    "head": 144,
    "prop": 256,
    "rune": 293
  },
  {
    "idx": 3773,
    "name": "Enchanter Angus of the Wold",
    "background": 0,
    "body": 41,
    "familiar": 97,
    "head": 173,
    "prop": 316,
    "rune": 302
  },
  {
    "idx": 3774,
    "name": "Hydromancer Layla of the Mountain",
    "background": 2,
    "body": 21,
    "familiar": 123,
    "head": 135,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 3775,
    "name": "Pyromancer Pezo of the Boneyard",
    "background": 3,
    "body": 71,
    "familiar": 117,
    "head": 244,
    "prop": 255,
    "rune": 287
  },
  {
    "idx": 3776,
    "name": "Enchanter Devon of the Grotto",
    "background": 2,
    "body": 21,
    "familiar": 103,
    "head": 198,
    "prop": 280,
    "rune": 287
  },
  {
    "idx": 3777,
    "name": "Sorcerer Jerret of the Pit",
    "background": 1,
    "body": 86,
    "familiar": 110,
    "head": 212,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 3778,
    "name": "Magus Gogol of the North",
    "background": 1,
    "body": 65,
    "familiar": 115,
    "head": 237,
    "prop": 263,
    "rune": 288
  },
  {
    "idx": 3779,
    "name": "Enchanter Atlanta of the Cosmos",
    "background": 2,
    "body": 24,
    "familiar": 93,
    "head": 131,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 3780,
    "name": "Hedge Wizard Remus of the Mountain",
    "background": 0,
    "body": 14,
    "familiar": 115,
    "head": 214,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 3781,
    "name": "Hedge Wizard Victoria of El Dorado",
    "background": 0,
    "body": 40,
    "familiar": 105,
    "head": 191,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 3782,
    "name": "Archmagus Nikolas of the Desert",
    "background": 2,
    "body": 58,
    "familiar": 95,
    "head": 153,
    "prop": 314,
    "rune": 292
  },
  {
    "idx": 3783,
    "name": "Medium Allistair of Xanadu",
    "background": 0,
    "body": 8,
    "familiar": 93,
    "head": 226,
    "prop": 252,
    "rune": 285
  },
  {
    "idx": 3784,
    "name": "Druid Solomon of the Havens",
    "background": 1,
    "body": 54,
    "familiar": 105,
    "head": 231,
    "prop": 326,
    "rune": 282
  },
  {
    "idx": 3785,
    "name": "Arch-Magician Tengu of the Inferno",
    "background": 3,
    "body": 85,
    "familiar": 111,
    "head": 243,
    "prop": 334,
    "rune": 294
  },
  {
    "idx": 3786,
    "name": "Aleister of Limbo",
    "background": 2,
    "body": 87,
    "familiar": 88,
    "head": 189,
    "prop": 274,
    "rune": 284
  },
  {
    "idx": 3787,
    "name": "Magus Jerret of the Quantum Downs",
    "background": 2,
    "body": 8,
    "familiar": 89,
    "head": 153,
    "prop": 253,
    "rune": 297
  },
  {
    "idx": 3788,
    "name": "Archmagus Apollo of the Carnival",
    "background": 0,
    "body": 28,
    "familiar": 112,
    "head": 138,
    "prop": 258,
    "rune": 288
  },
  {
    "idx": 3789,
    "name": "Thaumaturge Sisk of the Road",
    "background": 1,
    "body": 23,
    "familiar": 95,
    "head": 125,
    "prop": 256,
    "rune": 284
  },
  {
    "idx": 3790,
    "name": "Solar Mage  of the Keep",
    "background": 0,
    "body": 26,
    "familiar": 97,
    "head": 158,
    "prop": 309,
    "rune": 283
  },
  {
    "idx": 3791,
    "name": "Cryptomancer Jay of the Secret Fire",
    "background": 0,
    "body": 85,
    "familiar": 93,
    "head": 144,
    "prop": 310,
    "rune": 294
  },
  {
    "idx": 3792,
    "name": "Enchanter Asphodel of the Forest",
    "background": 1,
    "body": 22,
    "familiar": 119,
    "head": 131,
    "prop": 276,
    "rune": 290
  },
  {
    "idx": 3793,
    "name": "Archmagus Apollo in the Shadows",
    "background": 0,
    "body": 86,
    "familiar": 96,
    "head": 162,
    "prop": 259,
    "rune": 292
  },
  {
    "idx": 3794,
    "name": "Enchanter Ramiz of the Bibliotheca",
    "background": 0,
    "body": 62,
    "familiar": 94,
    "head": 219,
    "prop": 329,
    "rune": 289
  },
  {
    "idx": 3795,
    "name": "Null Mage Malcom of Death",
    "background": 1,
    "body": 71,
    "familiar": 97,
    "head": 224,
    "prop": 275,
    "rune": 292
  },
  {
    "idx": 3796,
    "name": "Celah of the Steppe",
    "background": 2,
    "body": 84,
    "familiar": 112,
    "head": 228,
    "prop": 308,
    "rune": 291
  },
  {
    "idx": 3797,
    "name": "Archmagus  of Limbo",
    "background": 2,
    "body": 85,
    "familiar": 93,
    "head": 212,
    "prop": 280,
    "rune": 292
  },
  {
    "idx": 3798,
    "name": "Battle Mage Talon of the Grotto",
    "background": 2,
    "body": 12,
    "familiar": 111,
    "head": 133,
    "prop": 321,
    "rune": 284
  },
  {
    "idx": 3799,
    "name": "Archmagus Lumos of the Mist",
    "background": 0,
    "body": 7,
    "familiar": 112,
    "head": 160,
    "prop": 256,
    "rune": 302
  },
  {
    "idx": 3800,
    "name": "Charmer Thana of the Steppe",
    "background": 2,
    "body": 22,
    "familiar": 93,
    "head": 139,
    "prop": 258,
    "rune": 304
  },
  {
    "idx": 3801,
    "name": "Arcanist Vossler of the Light",
    "background": 3,
    "body": 68,
    "familiar": 96,
    "head": 242,
    "prop": 335,
    "rune": 300
  },
  {
    "idx": 3802,
    "name": "Archmagus Iris of the Veil",
    "background": 0,
    "body": 67,
    "familiar": 97,
    "head": 157,
    "prop": 335,
    "rune": 303
  },
  {
    "idx": 3803,
    "name": "Battle Mage Hagar of the Forest",
    "background": 1,
    "body": 42,
    "familiar": 7777,
    "head": 188,
    "prop": 335,
    "rune": 287
  },
  {
    "idx": 3804,
    "name": "Scryer Voidoth of El Dorado",
    "background": 3,
    "body": 77,
    "familiar": 122,
    "head": 240,
    "prop": 251,
    "rune": 291
  },
  {
    "idx": 3805,
    "name": "Oracle Horace of the Cold",
    "background": 1,
    "body": 65,
    "familiar": 99,
    "head": 129,
    "prop": 245,
    "rune": 300
  },
  {
    "idx": 3806,
    "name": "Magus Lumos of the Marsh",
    "background": 1,
    "body": 82,
    "familiar": 106,
    "head": 192,
    "prop": 262,
    "rune": 296
  },
  {
    "idx": 3807,
    "name": "Alchemist Axis of the Cosmos",
    "background": 2,
    "body": 24,
    "familiar": 109,
    "head": 167,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 3808,
    "name": "Hedge Wizard Cromwell of the Wold",
    "background": 3,
    "body": 82,
    "familiar": 99,
    "head": 217,
    "prop": 312,
    "rune": 292
  },
  {
    "idx": 3809,
    "name": "Shaman Wolfram of the Oasis",
    "background": 1,
    "body": 61,
    "familiar": 94,
    "head": 206,
    "prop": 324,
    "rune": 287
  },
  {
    "idx": 3810,
    "name": "Beyna of the Riviera",
    "background": 1,
    "body": 43,
    "familiar": 123,
    "head": 198,
    "prop": 321,
    "rune": 302
  },
  {
    "idx": 3811,
    "name": "Sky Master Hank of the Citadel",
    "background": 1,
    "body": 76,
    "familiar": 109,
    "head": 144,
    "prop": 315,
    "rune": 294
  },
  {
    "idx": 3812,
    "name": "Battle Mage Baird of the Marsh",
    "background": 1,
    "body": 14,
    "familiar": 123,
    "head": 216,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 3813,
    "name": "Pyromancer Daria of the Plains",
    "background": 0,
    "body": 22,
    "familiar": 96,
    "head": 156,
    "prop": 310,
    "rune": 291
  },
  {
    "idx": 3814,
    "name": "Battle Mage Cassius of the Grotto",
    "background": 1,
    "body": 12,
    "familiar": 119,
    "head": 183,
    "prop": 256,
    "rune": 284
  },
  {
    "idx": 3815,
    "name": "Druid Ozohr of the Morning Star",
    "background": 1,
    "body": 86,
    "familiar": 95,
    "head": 232,
    "prop": 265,
    "rune": 298
  },
  {
    "idx": 3816,
    "name": "Archmagus Iluzor of the Court",
    "background": 1,
    "body": 17,
    "familiar": 117,
    "head": 170,
    "prop": 334,
    "rune": 292
  },
  {
    "idx": 3817,
    "name": "Witch Ophelia of the Hills",
    "background": 2,
    "body": 37,
    "familiar": 120,
    "head": 223,
    "prop": 255,
    "rune": 292
  },
  {
    "idx": 3818,
    "name": "Voodoo Priest Edward of the Citadel",
    "background": 2,
    "body": 26,
    "familiar": 95,
    "head": 152,
    "prop": 320,
    "rune": 304
  },
  {
    "idx": 3819,
    "name": "Battle Mage Cromwell of the Lake",
    "background": 2,
    "body": 13,
    "familiar": 111,
    "head": 204,
    "prop": 280,
    "rune": 300
  },
  {
    "idx": 3820,
    "name": "Thaumaturge Amir of the Temple",
    "background": 3,
    "body": 55,
    "familiar": 109,
    "head": 160,
    "prop": 256,
    "rune": 283
  },
  {
    "idx": 3821,
    "name": "Sage Daria of the Brambles",
    "background": 2,
    "body": 34,
    "familiar": 101,
    "head": 156,
    "prop": 277,
    "rune": 294
  },
  {
    "idx": 3822,
    "name": "Magus Hongo of the Temple",
    "background": 0,
    "body": 54,
    "familiar": 105,
    "head": 195,
    "prop": 263,
    "rune": 290
  },
  {
    "idx": 3823,
    "name": "Hedge Wizard Leah of the Grotto",
    "background": 3,
    "body": 38,
    "familiar": 104,
    "head": 139,
    "prop": 312,
    "rune": 295
  },
  {
    "idx": 3824,
    "name": "Mystic Rafiq of the Tower",
    "background": 3,
    "body": 6,
    "familiar": 110,
    "head": 142,
    "prop": 318,
    "rune": 302
  },
  {
    "idx": 3825,
    "name": "Thaumaturge Aleister of the Light",
    "background": 0,
    "body": 10,
    "familiar": 93,
    "head": 211,
    "prop": 256,
    "rune": 300
  },
  {
    "idx": 3826,
    "name": "Shaman Salah of the Ether",
    "background": 0,
    "body": 67,
    "familiar": 115,
    "head": 237,
    "prop": 276,
    "rune": 292
  },
  {
    "idx": 3827,
    "name": "Witch Faiz of the Belfry",
    "background": 1,
    "body": 54,
    "familiar": 7777,
    "head": 164,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 3828,
    "name": "Alchemist Crackerjack in the Shadows",
    "background": 0,
    "body": 85,
    "familiar": 103,
    "head": 144,
    "prop": 269,
    "rune": 285
  },
  {
    "idx": 3829,
    "name": "Summoner Maia of the River",
    "background": 3,
    "body": 79,
    "familiar": 89,
    "head": 135,
    "prop": 253,
    "rune": 292
  },
  {
    "idx": 3830,
    "name": "Mystic Trollin of the Villa",
    "background": 1,
    "body": 48,
    "familiar": 7777,
    "head": 235,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 3831,
    "name": "Alchemist David of the Wold",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 147,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 3832,
    "name": "Sage Danny of the Reach",
    "background": 0,
    "body": 19,
    "familiar": 111,
    "head": 165,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 3833,
    "name": "Shadow Mage Angus of the Hall",
    "background": 0,
    "body": 40,
    "familiar": 123,
    "head": 188,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 3834,
    "name": "Sorcerer Iprix of the Palms",
    "background": 1,
    "body": 60,
    "familiar": 95,
    "head": 160,
    "prop": 246,
    "rune": 282
  },
  {
    "idx": 3835,
    "name": "Ghost Eater Azahl",
    "background": 3,
    "body": 73,
    "familiar": 112,
    "head": 232,
    "prop": 334,
    "rune": 283
  },
  {
    "idx": 3836,
    "name": "Witch Zolona of Elysium",
    "background": 0,
    "body": 62,
    "familiar": 115,
    "head": 166,
    "prop": 254,
    "rune": 300
  },
  {
    "idx": 3837,
    "name": "Wild Mage Agapito of the Desert",
    "background": 0,
    "body": 27,
    "familiar": 7777,
    "head": 201,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 3838,
    "name": "Illusionist Hadrien of the Plains",
    "background": 3,
    "body": 17,
    "familiar": 91,
    "head": 231,
    "prop": 339,
    "rune": 285
  },
  {
    "idx": 3839,
    "name": "Necromancer Thor of the Quantum Shadow",
    "background": 1,
    "body": 86,
    "familiar": 97,
    "head": 183,
    "prop": 336,
    "rune": 297
  },
  {
    "idx": 3840,
    "name": "Thaumaturge Tabitha of the Sacred Pillars",
    "background": 3,
    "body": 63,
    "familiar": 103,
    "head": 176,
    "prop": 338,
    "rune": 293
  },
  {
    "idx": 3841,
    "name": "Electromancer Uvlius of the Ether",
    "background": 2,
    "body": 75,
    "familiar": 103,
    "head": 186,
    "prop": 305,
    "rune": 285
  },
  {
    "idx": 3842,
    "name": "Arch-Magician Zubin of the Fey",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 197,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 3843,
    "name": "Alchemist George of the Wild",
    "background": 2,
    "body": 44,
    "familiar": 112,
    "head": 232,
    "prop": 267,
    "rune": 292
  },
  {
    "idx": 3844,
    "name": "Battle Mage Blaise of the Lake",
    "background": 1,
    "body": 12,
    "familiar": 7777,
    "head": 213,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 3845,
    "name": "Alchemist Baird of the Mount",
    "background": 0,
    "body": 62,
    "familiar": 116,
    "head": 129,
    "prop": 269,
    "rune": 287
  },
  {
    "idx": 3846,
    "name": "Shaman Cassiopeia of the Lake",
    "background": 3,
    "body": 34,
    "familiar": 101,
    "head": 131,
    "prop": 265,
    "rune": 291
  },
  {
    "idx": 3847,
    "name": "Evoker Armstrong out of the Blizzard",
    "background": 0,
    "body": 73,
    "familiar": 7777,
    "head": 204,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 3848,
    "name": "Calliope of the Grotto",
    "background": 1,
    "body": 35,
    "familiar": 95,
    "head": 139,
    "prop": 267,
    "rune": 302
  },
  {
    "idx": 3849,
    "name": "Sage Ixar of El Dorado",
    "background": 3,
    "body": 26,
    "familiar": 112,
    "head": 174,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3850,
    "name": "Diviner Meloogen of the Surf",
    "background": 0,
    "body": 80,
    "familiar": 88,
    "head": 154,
    "prop": 251,
    "rune": 7777
  },
  {
    "idx": 3851,
    "name": "Geomancer Hadrien of the Desert",
    "background": 0,
    "body": 58,
    "familiar": 123,
    "head": 228,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 3852,
    "name": "Chronomancer Cromwell of the Bastion",
    "background": 1,
    "body": 40,
    "familiar": 7777,
    "head": 213,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 3853,
    "name": "Sage Ali of the Sea",
    "background": 0,
    "body": 57,
    "familiar": 7777,
    "head": 128,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 3854,
    "name": "Thaumaturge Celah of the Citadel",
    "background": 3,
    "body": 17,
    "familiar": 95,
    "head": 232,
    "prop": 327,
    "rune": 302
  },
  {
    "idx": 3855,
    "name": "Geomancer Fungi of the Plains",
    "background": 0,
    "body": 41,
    "familiar": 119,
    "head": 195,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 3856,
    "name": "Hedge Wizard Suyin of the Villa",
    "background": 2,
    "body": 40,
    "familiar": 97,
    "head": 180,
    "prop": 326,
    "rune": 299
  },
  {
    "idx": 3857,
    "name": "Archmagus Zelroth of the Wild",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 229,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3858,
    "name": "Magus Qasim of the Hall",
    "background": 0,
    "body": 76,
    "familiar": 110,
    "head": 146,
    "prop": 323,
    "rune": 302
  },
  {
    "idx": 3859,
    "name": "Archmagus Iprix of the Astral Plane",
    "background": 2,
    "body": 83,
    "familiar": 93,
    "head": 141,
    "prop": 252,
    "rune": 297
  },
  {
    "idx": 3860,
    "name": "Archmagus Iprix of the Wild",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 162,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 3861,
    "name": "Charmer Sondra of the Tower",
    "background": 0,
    "body": 49,
    "familiar": 119,
    "head": 190,
    "prop": 324,
    "rune": 297
  },
  {
    "idx": 3862,
    "name": "Cryptomancer David of Xanadu",
    "background": 0,
    "body": 11,
    "familiar": 90,
    "head": 214,
    "prop": 339,
    "rune": 304
  },
  {
    "idx": 3863,
    "name": "Magus Chipper of the Woodlands",
    "background": 1,
    "body": 28,
    "familiar": 108,
    "head": 201,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 3864,
    "name": "Scryer Lenora of the Hollow",
    "background": 2,
    "body": 39,
    "familiar": 93,
    "head": 159,
    "prop": 251,
    "rune": 289
  },
  {
    "idx": 3865,
    "name": "Sorcerer Iprix of the Morning Star",
    "background": 1,
    "body": 87,
    "familiar": 7777,
    "head": 185,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 3866,
    "name": "Archmagus Lumos of the Citadel",
    "background": 1,
    "body": 77,
    "familiar": 115,
    "head": 226,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3867,
    "name": "Sorcerer Merlon of the Dunes",
    "background": 1,
    "body": 61,
    "familiar": 95,
    "head": 160,
    "prop": 315,
    "rune": 302
  },
  {
    "idx": 3868,
    "name": "Battle Mage Homer of the Capital",
    "background": 3,
    "body": 76,
    "familiar": 103,
    "head": 206,
    "prop": 305,
    "rune": 283
  },
  {
    "idx": 3869,
    "name": "Magus Gellert of the Astral Plane",
    "background": 2,
    "body": 9,
    "familiar": 105,
    "head": 125,
    "prop": 253,
    "rune": 283
  },
  {
    "idx": 3870,
    "name": "Sage Spore Boy of the Wood",
    "background": 0,
    "body": 42,
    "familiar": 99,
    "head": 195,
    "prop": 245,
    "rune": 299
  },
  {
    "idx": 3871,
    "name": "Cosmic Mage Velorina of the Brambles",
    "background": 1,
    "body": 37,
    "familiar": 7777,
    "head": 155,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 3872,
    "name": "Illusionist Asmodeus of the Mount",
    "background": 0,
    "body": 7,
    "familiar": 110,
    "head": 193,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 3873,
    "name": "Pyromancer Mycho of the Capital",
    "background": 2,
    "body": 40,
    "familiar": 101,
    "head": 195,
    "prop": 277,
    "rune": 283
  },
  {
    "idx": 3874,
    "name": "Sorcerer Ixar of the Tundra",
    "background": 1,
    "body": 73,
    "familiar": 112,
    "head": 232,
    "prop": 258,
    "rune": 296
  },
  {
    "idx": 3875,
    "name": "Evoker Angus of the Marsh",
    "background": 1,
    "body": 84,
    "familiar": 89,
    "head": 133,
    "prop": 321,
    "rune": 288
  },
  {
    "idx": 3876,
    "name": "Alchemist Godfrey of the Realm",
    "background": 0,
    "body": 68,
    "familiar": 93,
    "head": 203,
    "prop": 270,
    "rune": 304
  },
  {
    "idx": 3877,
    "name": "Alchemist Morfran from the Abyss",
    "background": 2,
    "body": 86,
    "familiar": 112,
    "head": 144,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 3878,
    "name": "Battle Mage Tundror of the Gnostics",
    "background": 0,
    "body": 67,
    "familiar": 123,
    "head": 183,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 3879,
    "name": "Battle Mage Baird of the Hills",
    "background": 2,
    "body": 45,
    "familiar": 94,
    "head": 220,
    "prop": 332,
    "rune": 303
  },
  {
    "idx": 3880,
    "name": "Shaman Otto of the Ice",
    "background": 0,
    "body": 65,
    "familiar": 119,
    "head": 133,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 3881,
    "name": "Hedge Wizard Magnus of the Plains",
    "background": 1,
    "body": 15,
    "familiar": 108,
    "head": 173,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 3882,
    "name": "Silas of the Wood",
    "background": 0,
    "body": 42,
    "familiar": 115,
    "head": 162,
    "prop": 245,
    "rune": 303
  },
  {
    "idx": 3883,
    "name": "Sonja of the Hollow",
    "background": 2,
    "body": 31,
    "familiar": 93,
    "head": 156,
    "prop": 315,
    "rune": 282
  },
  {
    "idx": 3884,
    "name": "Illusionist Buttons of the Steppe",
    "background": 2,
    "body": 44,
    "familiar": 105,
    "head": 195,
    "prop": 273,
    "rune": 302
  },
  {
    "idx": 3885,
    "name": "Magus Gunthor of the Morning Star",
    "background": 0,
    "body": 85,
    "familiar": 95,
    "head": 188,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 3886,
    "name": "Battle Mage Flynn of the Road",
    "background": 0,
    "body": 41,
    "familiar": 97,
    "head": 129,
    "prop": 261,
    "rune": 288
  },
  {
    "idx": 3887,
    "name": "Archmagus Hagar of the Obelisk",
    "background": 1,
    "body": 50,
    "familiar": 88,
    "head": 129,
    "prop": 316,
    "rune": 7777
  },
  {
    "idx": 3888,
    "name": "Arcanist Robert of the Road",
    "background": 0,
    "body": 79,
    "familiar": 7777,
    "head": 204,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3889,
    "name": "Archmagus Aleister of the Obelisk",
    "background": 1,
    "body": 54,
    "familiar": 7777,
    "head": 162,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 3890,
    "name": "Scryer Celah of the Villa",
    "background": 3,
    "body": 76,
    "familiar": 95,
    "head": 160,
    "prop": 251,
    "rune": 290
  },
  {
    "idx": 3891,
    "name": "Artificer Hishoken of the Hills",
    "background": 0,
    "body": 79,
    "familiar": 99,
    "head": 243,
    "prop": 340,
    "rune": 292
  },
  {
    "idx": 3892,
    "name": "Archmagus Samuel of the Isle",
    "background": 0,
    "body": 57,
    "familiar": 95,
    "head": 182,
    "prop": 317,
    "rune": 284
  },
  {
    "idx": 3893,
    "name": "Magus Isaac of the Cosmos",
    "background": 0,
    "body": 67,
    "familiar": 97,
    "head": 160,
    "prop": 322,
    "rune": 293
  },
  {
    "idx": 3894,
    "name": "Diviner Soya of the Psychic Leap",
    "background": 2,
    "body": 8,
    "familiar": 88,
    "head": 202,
    "prop": 252,
    "rune": 292
  },
  {
    "idx": 3895,
    "name": "Thaumaturge Anton of the Cosmos",
    "background": 0,
    "body": 24,
    "familiar": 88,
    "head": 241,
    "prop": 256,
    "rune": 286
  },
  {
    "idx": 3896,
    "name": "Evoker Aleister of the Keep",
    "background": 3,
    "body": 48,
    "familiar": 103,
    "head": 137,
    "prop": 339,
    "rune": 300
  },
  {
    "idx": 3897,
    "name": "Adept Impy of the Tower",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 178,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3898,
    "name": "Celah of the Obelisk",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 162,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 3899,
    "name": "Charmer Bathsheba of the River",
    "background": 0,
    "body": 36,
    "familiar": 104,
    "head": 191,
    "prop": 312,
    "rune": 294
  },
  {
    "idx": 3900,
    "name": "Archmagus  of the Hall",
    "background": 0,
    "body": 74,
    "familiar": 123,
    "head": 231,
    "prop": 258,
    "rune": 287
  },
  {
    "idx": 3901,
    "name": "Archmagus Oberon",
    "background": 2,
    "body": 30,
    "familiar": 89,
    "head": 162,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 3902,
    "name": "Wild Mage Sylvia of the Hills",
    "background": 1,
    "body": 36,
    "familiar": 123,
    "head": 155,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 3903,
    "name": "Voodoo Priest Victor of the Gnostics",
    "background": 3,
    "body": 11,
    "familiar": 99,
    "head": 179,
    "prop": 319,
    "rune": 294
  },
  {
    "idx": 3904,
    "name": "Archmagus Soya of the Havens",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 147,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 3905,
    "name": "Enchanter Devon of the Platonic Shadow",
    "background": 3,
    "body": 10,
    "familiar": 88,
    "head": 130,
    "prop": 248,
    "rune": 302
  },
  {
    "idx": 3906,
    "name": "Battle Mage Tundror of the Temple",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 183,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 3907,
    "name": "Void Disciple Charlord from the Shadow",
    "background": 2,
    "body": 86,
    "familiar": 97,
    "head": 158,
    "prop": 307,
    "rune": 291
  },
  {
    "idx": 3908,
    "name": "Alchemist Pix of the Astral Plane",
    "background": 1,
    "body": 67,
    "familiar": 115,
    "head": 171,
    "prop": 268,
    "rune": 304
  },
  {
    "idx": 3909,
    "name": "Archmagus Alessar of the Circle",
    "background": 1,
    "body": 29,
    "familiar": 110,
    "head": 221,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 3910,
    "name": "Sorcerer Reza of the Sun",
    "background": 0,
    "body": 58,
    "familiar": 94,
    "head": 237,
    "prop": 246,
    "rune": 290
  },
  {
    "idx": 3911,
    "name": "Hedge Wizard Goliath of the Havens",
    "background": 1,
    "body": 7,
    "familiar": 119,
    "head": 213,
    "prop": 273,
    "rune": 300
  },
  {
    "idx": 3912,
    "name": "Artificer Zane of Tartarus",
    "background": 1,
    "body": 85,
    "familiar": 7777,
    "head": 211,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 3913,
    "name": "Adept Umber of the Sands",
    "background": 0,
    "body": 58,
    "familiar": 99,
    "head": 167,
    "prop": 266,
    "rune": 303
  },
  {
    "idx": 3914,
    "name": "Hex Mage Bathsheba of the Villa",
    "background": 0,
    "body": 46,
    "familiar": 101,
    "head": 135,
    "prop": 277,
    "rune": 293
  },
  {
    "idx": 3915,
    "name": "Spellsinger Konoha of Mu",
    "background": 2,
    "body": 10,
    "familiar": 122,
    "head": 243,
    "prop": 247,
    "rune": 303
  },
  {
    "idx": 3916,
    "name": "Battle Mage Baird of the Belfry",
    "background": 2,
    "body": 49,
    "familiar": 123,
    "head": 213,
    "prop": 253,
    "rune": 292
  },
  {
    "idx": 3917,
    "name": "Scryer Apollo of the Villa",
    "background": 0,
    "body": 26,
    "familiar": 109,
    "head": 162,
    "prop": 245,
    "rune": 299
  },
  {
    "idx": 3918,
    "name": "Augurer Meloogen of Dreams",
    "background": 2,
    "body": 50,
    "familiar": 108,
    "head": 154,
    "prop": 245,
    "rune": 300
  },
  {
    "idx": 3919,
    "name": "Alchemist Baozhai of the Plains",
    "background": 0,
    "body": 35,
    "familiar": 123,
    "head": 180,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 3920,
    "name": "Hydromancer Louis of the Field",
    "background": 1,
    "body": 12,
    "familiar": 109,
    "head": 179,
    "prop": 314,
    "rune": 290
  },
  {
    "idx": 3921,
    "name": "Battle Mage Robert of the Heath",
    "background": 3,
    "body": 43,
    "familiar": 89,
    "head": 173,
    "prop": 267,
    "rune": 302
  },
  {
    "idx": 3922,
    "name": "Arch-Magician Isaac of the Mount",
    "background": 1,
    "body": 55,
    "familiar": 119,
    "head": 212,
    "prop": 280,
    "rune": 287
  },
  {
    "idx": 3923,
    "name": "Hedge Wizard Min of the Steppe",
    "background": 1,
    "body": 34,
    "familiar": 7777,
    "head": 180,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 3924,
    "name": "Geomancer Stag of the Salt",
    "background": 1,
    "body": 57,
    "familiar": 110,
    "head": 167,
    "prop": 317,
    "rune": 287
  },
  {
    "idx": 3925,
    "name": "Stellar Mage Kalo of the Field",
    "background": 1,
    "body": 43,
    "familiar": 101,
    "head": 244,
    "prop": 338,
    "rune": 295
  },
  {
    "idx": 3926,
    "name": "Conjurer Ratko of the Morning Star",
    "background": 0,
    "body": 85,
    "familiar": 119,
    "head": 183,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 3927,
    "name": "Arch-Magician Shanyuan of the Sands",
    "background": 2,
    "body": 5,
    "familiar": 94,
    "head": 236,
    "prop": 321,
    "rune": 292
  },
  {
    "idx": 3928,
    "name": "Arch-Magician Caligari of the Obelisk",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 179,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 3929,
    "name": "Arch-Magician Rowena of the Reach",
    "background": 0,
    "body": 32,
    "familiar": 88,
    "head": 176,
    "prop": 258,
    "rune": 285
  },
  {
    "idx": 3930,
    "name": "Battlemage Drako of the Obelisk",
    "background": 0,
    "body": 63,
    "familiar": 105,
    "head": 152,
    "prop": 309,
    "rune": 284
  },
  {
    "idx": 3931,
    "name": "Shadow Mage Chipper of the Rock",
    "background": 0,
    "body": 27,
    "familiar": 112,
    "head": 201,
    "prop": 248,
    "rune": 285
  },
  {
    "idx": 3932,
    "name": "Magus Thana of the Valley",
    "background": 0,
    "body": 54,
    "familiar": 105,
    "head": 208,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3933,
    "name": "Magus Hothor of the Ether",
    "background": 2,
    "body": 8,
    "familiar": 88,
    "head": 203,
    "prop": 258,
    "rune": 293
  },
  {
    "idx": 3934,
    "name": "Geomancer Zhan of the Desert",
    "background": 3,
    "body": 59,
    "familiar": 89,
    "head": 180,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 3935,
    "name": "Magus Herne of the Inferno",
    "background": 1,
    "body": 87,
    "familiar": 97,
    "head": 167,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 3936,
    "name": "Adept Eliphas of the Mountain",
    "background": 3,
    "body": 15,
    "familiar": 89,
    "head": 149,
    "prop": 324,
    "rune": 293
  },
  {
    "idx": 3937,
    "name": "Conjurer Rook of the Hills",
    "background": 1,
    "body": 18,
    "familiar": 119,
    "head": 144,
    "prop": 273,
    "rune": 291
  },
  {
    "idx": 3938,
    "name": "Sorcerer Davos of the Veil",
    "background": 0,
    "body": 75,
    "familiar": 110,
    "head": 230,
    "prop": 338,
    "rune": 296
  },
  {
    "idx": 3939,
    "name": "Sorcerer Nazim of the Gnostics",
    "background": 1,
    "body": 11,
    "familiar": 97,
    "head": 237,
    "prop": 265,
    "rune": 288
  },
  {
    "idx": 3940,
    "name": "Magus Lux of the Steppe",
    "background": 1,
    "body": 41,
    "familiar": 101,
    "head": 189,
    "prop": 262,
    "rune": 287
  },
  {
    "idx": 3941,
    "name": "Alessar of the Sun",
    "background": 0,
    "body": 58,
    "familiar": 109,
    "head": 147,
    "prop": 249,
    "rune": 302
  },
  {
    "idx": 3942,
    "name": "Holy Magus Providence of the Psychic Leap",
    "background": 3,
    "body": 10,
    "familiar": 112,
    "head": 170,
    "prop": 265,
    "rune": 291
  },
  {
    "idx": 3943,
    "name": "Sage Zelda of the Plains",
    "background": 3,
    "body": 35,
    "familiar": 114,
    "head": 166,
    "prop": 318,
    "rune": 291
  },
  {
    "idx": 3944,
    "name": "Sorcerer Soya of the Arctic",
    "background": 2,
    "body": 65,
    "familiar": 103,
    "head": 214,
    "prop": 315,
    "rune": 302
  },
  {
    "idx": 3945,
    "name": "Archmagus Lumos from the Shadow",
    "background": 0,
    "body": 86,
    "familiar": 7777,
    "head": 212,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 3946,
    "name": "Thaumaturge Sarah of the Steppe",
    "background": 1,
    "body": 32,
    "familiar": 110,
    "head": 135,
    "prop": 323,
    "rune": 292
  },
  {
    "idx": 3947,
    "name": "Magus Aleister of the Tower",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 229,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 3948,
    "name": "Sorcerer Ozohr of the Brine",
    "background": 0,
    "body": 57,
    "familiar": 101,
    "head": 221,
    "prop": 314,
    "rune": 293
  },
  {
    "idx": 3949,
    "name": "Artificer Udor of the Realm",
    "background": 1,
    "body": 24,
    "familiar": 93,
    "head": 137,
    "prop": 258,
    "rune": 303
  },
  {
    "idx": 3950,
    "name": "Shaman Luther of the Heath",
    "background": 2,
    "body": 14,
    "familiar": 89,
    "head": 218,
    "prop": 276,
    "rune": 292
  },
  {
    "idx": 3951,
    "name": "Battle Mage Khudalf of the Court",
    "background": 1,
    "body": 40,
    "familiar": 111,
    "head": 129,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 3952,
    "name": "Druid Jahid of the Grotto",
    "background": 2,
    "body": 15,
    "familiar": 89,
    "head": 142,
    "prop": 319,
    "rune": 290
  },
  {
    "idx": 3953,
    "name": "Sorcerer Ursula of the Road",
    "background": 0,
    "body": 37,
    "familiar": 7777,
    "head": 155,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 3954,
    "name": "Witch Calypso of the Palms",
    "background": 2,
    "body": 60,
    "familiar": 119,
    "head": 166,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 3955,
    "name": "Alchemist Nadeem",
    "background": 1,
    "body": 8,
    "familiar": 120,
    "head": 222,
    "prop": 267,
    "rune": 297
  },
  {
    "idx": 3956,
    "name": "Void Disciple Anton of the Steppe",
    "background": 3,
    "body": 45,
    "familiar": 90,
    "head": 239,
    "prop": 271,
    "rune": 282
  },
  {
    "idx": 3957,
    "name": "Lunar Mage Rixxa of the Bastion",
    "background": 2,
    "body": 77,
    "familiar": 103,
    "head": 200,
    "prop": 332,
    "rune": 304
  },
  {
    "idx": 3958,
    "name": "Magus Aleister of the Marsh",
    "background": 1,
    "body": 41,
    "familiar": 110,
    "head": 147,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 3959,
    "name": "Geomancer  of Cuckoo Land",
    "background": 0,
    "body": 30,
    "familiar": 123,
    "head": 202,
    "prop": 308,
    "rune": 291
  },
  {
    "idx": 3960,
    "name": "of the Wild",
    "background": 3,
    "body": 44,
    "familiar": 105,
    "head": 169,
    "prop": 270,
    "rune": 285
  },
  {
    "idx": 3961,
    "name": "Hedge Wizard Lilith of the Hall",
    "background": 2,
    "body": 48,
    "familiar": 109,
    "head": 159,
    "prop": 265,
    "rune": 296
  },
  {
    "idx": 3962,
    "name": "Archmagus Ofaris of the Canyon",
    "background": 1,
    "body": 14,
    "familiar": 107,
    "head": 229,
    "prop": 261,
    "rune": 285
  },
  {
    "idx": 3963,
    "name": "Pyromancer Amir of the Obelisk",
    "background": 0,
    "body": 6,
    "familiar": 7777,
    "head": 215,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 3964,
    "name": "Aeromancer Celah of the Reach",
    "background": 1,
    "body": 14,
    "familiar": 110,
    "head": 212,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 3965,
    "name": "Arcanist Jeldor of the Cosmos",
    "background": 2,
    "body": 10,
    "familiar": 89,
    "head": 197,
    "prop": 322,
    "rune": 296
  },
  {
    "idx": 3966,
    "name": "Artificer Enzo of the Hollow",
    "background": 0,
    "body": 84,
    "familiar": 7777,
    "head": 201,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 3967,
    "name": "Pyromancer Carly of the Realm",
    "background": 2,
    "body": 68,
    "familiar": 95,
    "head": 208,
    "prop": 255,
    "rune": 291
  },
  {
    "idx": 3968,
    "name": "Lumos of the Sun",
    "background": 0,
    "body": 60,
    "familiar": 94,
    "head": 238,
    "prop": 327,
    "rune": 284
  },
  {
    "idx": 3969,
    "name": "Runecaster Silas of Dreams",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 221,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 3970,
    "name": "Summoner Ofaris of the Cosmos",
    "background": 1,
    "body": 10,
    "familiar": 117,
    "head": 232,
    "prop": 254,
    "rune": 290
  },
  {
    "idx": 3971,
    "name": "Solomon of the Toadstools",
    "background": 1,
    "body": 28,
    "familiar": 108,
    "head": 186,
    "prop": 254,
    "rune": 284
  },
  {
    "idx": 3972,
    "name": "Magus Daphne of the Rock",
    "background": 2,
    "body": 58,
    "familiar": 104,
    "head": 190,
    "prop": 262,
    "rune": 294
  },
  {
    "idx": 3973,
    "name": "Archmagus Aden of the Canyon",
    "background": 2,
    "body": 15,
    "familiar": 93,
    "head": 207,
    "prop": 308,
    "rune": 282
  },
  {
    "idx": 3974,
    "name": "Ice Mage Enzo of the Arctic",
    "background": 3,
    "body": 65,
    "familiar": 105,
    "head": 201,
    "prop": 317,
    "rune": 283
  },
  {
    "idx": 3975,
    "name": "Sorcerer Harley of the Veil",
    "background": 2,
    "body": 10,
    "familiar": 117,
    "head": 140,
    "prop": 335,
    "rune": 302
  },
  {
    "idx": 3976,
    "name": "Arch-Magician Ali of the Road",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 222,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 3977,
    "name": "Augurer Mad Apple of the Tower",
    "background": 0,
    "body": 48,
    "familiar": 88,
    "head": 154,
    "prop": 252,
    "rune": 299
  },
  {
    "idx": 3978,
    "name": "Sage Jianyu of the Valley",
    "background": 0,
    "body": 7,
    "familiar": 112,
    "head": 236,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 3979,
    "name": "Conjurer Drusilla of the Plains",
    "background": 2,
    "body": 37,
    "familiar": 107,
    "head": 166,
    "prop": 246,
    "rune": 302
  },
  {
    "idx": 3980,
    "name": "Spellsinger Galatea of the Heath",
    "background": 1,
    "body": 32,
    "familiar": 94,
    "head": 135,
    "prop": 247,
    "rune": 285
  },
  {
    "idx": 3981,
    "name": "Battle Mage Cromwell of Dreams",
    "background": 2,
    "body": 50,
    "familiar": 112,
    "head": 177,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 3982,
    "name": "Thaumaturge Aiko of the Marsh",
    "background": 1,
    "body": 36,
    "familiar": 101,
    "head": 126,
    "prop": 339,
    "rune": 286
  },
  {
    "idx": 3983,
    "name": "Arch-Magician Silas of the Valley",
    "background": 3,
    "body": 42,
    "familiar": 112,
    "head": 141,
    "prop": 306,
    "rune": 302
  },
  {
    "idx": 3984,
    "name": "Adept Froggy of the Valley",
    "background": 1,
    "body": 82,
    "familiar": 7777,
    "head": 171,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 3985,
    "name": "Shaman Milton of the Gnostics",
    "background": 0,
    "body": 24,
    "familiar": 120,
    "head": 211,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 3986,
    "name": "Magus Adrienne of the Wood",
    "background": 3,
    "body": 32,
    "familiar": 101,
    "head": 198,
    "prop": 334,
    "rune": 294
  },
  {
    "idx": 3987,
    "name": "Cleric Moka of the Desert",
    "background": 0,
    "body": 27,
    "familiar": 101,
    "head": 178,
    "prop": 326,
    "rune": 294
  },
  {
    "idx": 3988,
    "name": "Magus Faye of the Wild",
    "background": 1,
    "body": 21,
    "familiar": 105,
    "head": 135,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 3989,
    "name": "Conjurer Galatea of the Sacred Pillars",
    "background": 1,
    "body": 7,
    "familiar": 107,
    "head": 156,
    "prop": 339,
    "rune": 303
  },
  {
    "idx": 3990,
    "name": "Mystic Ofaris of the Field",
    "background": 0,
    "body": 12,
    "familiar": 89,
    "head": 228,
    "prop": 266,
    "rune": 288
  },
  {
    "idx": 3991,
    "name": "Magus Danny of the Wild",
    "background": 1,
    "body": 79,
    "familiar": 112,
    "head": 177,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 3992,
    "name": "Arcanist Salty of the Grotto",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 200,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 3993,
    "name": "Geomancer Liliana of the Loch",
    "background": 0,
    "body": 57,
    "familiar": 95,
    "head": 166,
    "prop": 308,
    "rune": 294
  },
  {
    "idx": 3994,
    "name": "Battle Mage Cromwell of the Ether",
    "background": 0,
    "body": 75,
    "familiar": 119,
    "head": 216,
    "prop": 281,
    "rune": 291
  },
  {
    "idx": 3995,
    "name": "Alchemist Uday of the Road",
    "background": 1,
    "body": 19,
    "familiar": 7777,
    "head": 222,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 3996,
    "name": "Arch-Magician Cromwell of the Plains",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 182,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 3997,
    "name": "Charmer Jadis of the Capital",
    "background": 3,
    "body": 46,
    "familiar": 103,
    "head": 131,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 3998,
    "name": "Arch-Magician Homer of Avalon",
    "background": 1,
    "body": 63,
    "familiar": 7777,
    "head": 188,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 3999,
    "name": "Enchanter Galatea of the Mount",
    "background": 1,
    "body": 54,
    "familiar": 105,
    "head": 191,
    "prop": 246,
    "rune": 294
  },
  {
    "idx": 4000,
    "name": "The Darkness Slayer",
    "background": 1,
    "body": 41,
    "familiar": 7777,
    "head": 227,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 4001,
    "name": "Thaumaturge Kazem of the Villa",
    "background": 0,
    "body": 77,
    "familiar": 109,
    "head": 128,
    "prop": 256,
    "rune": 285
  },
  {
    "idx": 4002,
    "name": "Ice Mage Nolan of the North",
    "background": 0,
    "body": 65,
    "familiar": 7777,
    "head": 188,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 4003,
    "name": "Void Disciple Aiko of the Tower",
    "background": 0,
    "body": 77,
    "familiar": 95,
    "head": 126,
    "prop": 334,
    "rune": 300
  },
  {
    "idx": 4004,
    "name": "Enchanter Bathsheba of the Wold",
    "background": 3,
    "body": 43,
    "familiar": 114,
    "head": 139,
    "prop": 338,
    "rune": 304
  },
  {
    "idx": 4005,
    "name": "Hedge Wizard Merlon of the Bastion",
    "background": 2,
    "body": 48,
    "familiar": 112,
    "head": 230,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 4006,
    "name": "Hydromancer Wolfram of the Hollow",
    "background": 1,
    "body": 13,
    "familiar": 112,
    "head": 213,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 4007,
    "name": "Arch-Magician Hugo of the Plains",
    "background": 1,
    "body": 12,
    "familiar": 7777,
    "head": 179,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4008,
    "name": "Battle Mage Horace of the Ice",
    "background": 3,
    "body": 65,
    "familiar": 119,
    "head": 218,
    "prop": 262,
    "rune": 285
  },
  {
    "idx": 4009,
    "name": "Sorcerer Jiang of the Mist",
    "background": 0,
    "body": 54,
    "familiar": 107,
    "head": 236,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 4010,
    "name": "Archmagus Aleister of the Steppe",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 192,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 4011,
    "name": "Magus Woomba of the Toadstools",
    "background": 2,
    "body": 30,
    "familiar": 112,
    "head": 178,
    "prop": 249,
    "rune": 300
  },
  {
    "idx": 4012,
    "name": "Battlemage Zaros out of the Blizzard",
    "background": 0,
    "body": 73,
    "familiar": 95,
    "head": 232,
    "prop": 335,
    "rune": 299
  },
  {
    "idx": 4013,
    "name": "Sorcerer Celah of the Hall",
    "background": 1,
    "body": 77,
    "familiar": 103,
    "head": 233,
    "prop": 332,
    "rune": 288
  },
  {
    "idx": 4014,
    "name": "Battle Mage Bartholomew of the Rock",
    "background": 1,
    "body": 58,
    "familiar": 111,
    "head": 173,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4015,
    "name": "Archmagus Remus of the Brambles",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 229,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 4016,
    "name": "Archmagus Shanyuan of the Waste",
    "background": 1,
    "body": 86,
    "familiar": 104,
    "head": 236,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 4017,
    "name": "Alchemist Miyo of the Hall",
    "background": 1,
    "body": 48,
    "familiar": 88,
    "head": 126,
    "prop": 270,
    "rune": 294
  },
  {
    "idx": 4018,
    "name": "Alchemist Daria of the Moors",
    "background": 0,
    "body": 12,
    "familiar": 88,
    "head": 187,
    "prop": 270,
    "rune": 291
  },
  {
    "idx": 4019,
    "name": "Sorcerer Allistair of the Tower",
    "background": 0,
    "body": 19,
    "familiar": 7777,
    "head": 214,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4020,
    "name": "Cryptomancer Amir of the Wold",
    "background": 2,
    "body": 84,
    "familiar": 105,
    "head": 174,
    "prop": 338,
    "rune": 283
  },
  {
    "idx": 4021,
    "name": "Battle Mage Hothor of the Sun",
    "background": 0,
    "body": 61,
    "familiar": 97,
    "head": 173,
    "prop": 312,
    "rune": 297
  },
  {
    "idx": 4022,
    "name": "Sage Merlon of the River",
    "background": 2,
    "body": 12,
    "familiar": 109,
    "head": 153,
    "prop": 316,
    "rune": 299
  },
  {
    "idx": 4023,
    "name": "Magus Sahir of the Temple",
    "background": 1,
    "body": 7,
    "familiar": 109,
    "head": 237,
    "prop": 246,
    "rune": 285
  },
  {
    "idx": 4024,
    "name": "Arch-Magician Aleister of Limbo",
    "background": 3,
    "body": 83,
    "familiar": 93,
    "head": 226,
    "prop": 325,
    "rune": 296
  },
  {
    "idx": 4025,
    "name": "Sorcerer Soya of the Brambles",
    "background": 0,
    "body": 42,
    "familiar": 7777,
    "head": 192,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 4026,
    "name": "Battle Mage Malthus of Avalon",
    "background": 1,
    "body": 55,
    "familiar": 7777,
    "head": 204,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 4027,
    "name": "Enchanter Aslan",
    "background": 1,
    "body": 10,
    "familiar": 116,
    "head": 220,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 4028,
    "name": "Druid Aleister of the Keep",
    "background": 0,
    "body": 40,
    "familiar": 115,
    "head": 141,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 4029,
    "name": "Aleister of the Plains",
    "background": 1,
    "body": 42,
    "familiar": 7777,
    "head": 211,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 4030,
    "name": "Shaman Zubin of the Riviera",
    "background": 0,
    "body": 41,
    "familiar": 119,
    "head": 229,
    "prop": 276,
    "rune": 292
  },
  {
    "idx": 4031,
    "name": "Shaman Nicolas of the Belfry",
    "background": 0,
    "body": 54,
    "familiar": 93,
    "head": 165,
    "prop": 264,
    "rune": 292
  },
  {
    "idx": 4032,
    "name": "Witch Ursula of the Wold",
    "background": 3,
    "body": 36,
    "familiar": 119,
    "head": 155,
    "prop": 310,
    "rune": 304
  },
  {
    "idx": 4033,
    "name": "Cleric Blaise of the Lake",
    "background": 2,
    "body": 42,
    "familiar": 95,
    "head": 213,
    "prop": 328,
    "rune": 300
  },
  {
    "idx": 4034,
    "name": "Chronomancer Azahl of the Hills",
    "background": 1,
    "body": 84,
    "familiar": 112,
    "head": 141,
    "prop": 259,
    "rune": 285
  },
  {
    "idx": 4035,
    "name": "Adept Lumos of the Keep",
    "background": 1,
    "body": 78,
    "familiar": 90,
    "head": 186,
    "prop": 249,
    "rune": 283
  },
  {
    "idx": 4036,
    "name": "Mystic Florah of the River",
    "background": 3,
    "body": 35,
    "familiar": 114,
    "head": 159,
    "prop": 338,
    "rune": 302
  },
  {
    "idx": 4037,
    "name": "Hydromancer Poppy of the Reach",
    "background": 1,
    "body": 12,
    "familiar": 114,
    "head": 235,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 4038,
    "name": "Transmuter Aldus of the Valley",
    "background": 1,
    "body": 6,
    "familiar": 106,
    "head": 214,
    "prop": 256,
    "rune": 301
  },
  {
    "idx": 4039,
    "name": "Hedge Wizard Orpheus of the Tower",
    "background": 1,
    "body": 26,
    "familiar": 95,
    "head": 197,
    "prop": 273,
    "rune": 294
  },
  {
    "idx": 4040,
    "name": "Augurer Rita of the Mountain",
    "background": 3,
    "body": 21,
    "familiar": 90,
    "head": 176,
    "prop": 252,
    "rune": 283
  },
  {
    "idx": 4041,
    "name": "Archmagus Azahl of the Sun",
    "background": 0,
    "body": 5,
    "familiar": 114,
    "head": 186,
    "prop": 322,
    "rune": 293
  },
  {
    "idx": 4042,
    "name": "Hedge Wizard Moloch of Avalon",
    "background": 2,
    "body": 49,
    "familiar": 107,
    "head": 193,
    "prop": 276,
    "rune": 294
  },
  {
    "idx": 4043,
    "name": "Sky Master Corvin of the Veil",
    "background": 0,
    "body": 24,
    "familiar": 97,
    "head": 144,
    "prop": 256,
    "rune": 291
  },
  {
    "idx": 4044,
    "name": "Druid Froggy of the Gnostics",
    "background": 2,
    "body": 67,
    "familiar": 104,
    "head": 200,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 4045,
    "name": "Battle Mage Nicolas of Dreams",
    "background": 0,
    "body": 62,
    "familiar": 108,
    "head": 177,
    "prop": 255,
    "rune": 296
  },
  {
    "idx": 4046,
    "name": "Wild Mage Hagar of the Desert",
    "background": 2,
    "body": 61,
    "familiar": 93,
    "head": 206,
    "prop": 340,
    "rune": 292
  },
  {
    "idx": 4047,
    "name": "Medium Basil of the Capital",
    "background": 3,
    "body": 77,
    "familiar": 95,
    "head": 189,
    "prop": 251,
    "rune": 282
  },
  {
    "idx": 4048,
    "name": "Bard Silas of the Event Horizon",
    "background": 1,
    "body": 10,
    "familiar": 104,
    "head": 162,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 4049,
    "name": "Enchanter Giacomo of El Dorado",
    "background": 3,
    "body": 19,
    "familiar": 101,
    "head": 201,
    "prop": 265,
    "rune": 304
  },
  {
    "idx": 4050,
    "name": "Sky Master JackDaw of the Mount",
    "background": 1,
    "body": 7,
    "familiar": 112,
    "head": 144,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 4051,
    "name": "Artificer Jean Leon of the Rock",
    "background": 0,
    "body": 61,
    "familiar": 89,
    "head": 179,
    "prop": 261,
    "rune": 288
  },
  {
    "idx": 4052,
    "name": "Hedge Wizard Cassiopeia of the Tower",
    "background": 3,
    "body": 74,
    "familiar": 101,
    "head": 135,
    "prop": 326,
    "rune": 288
  },
  {
    "idx": 4053,
    "name": "Necromancer Asmodeus of the Wood",
    "background": 2,
    "body": 12,
    "familiar": 99,
    "head": 242,
    "prop": 314,
    "rune": 291
  },
  {
    "idx": 4054,
    "name": "Conjurer George of the Desert",
    "background": 2,
    "body": 60,
    "familiar": 112,
    "head": 162,
    "prop": 246,
    "rune": 304
  },
  {
    "idx": 4055,
    "name": "Battle Mage Darick of the Wood",
    "background": 0,
    "body": 15,
    "familiar": 89,
    "head": 165,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 4056,
    "name": "Druid Artis of the Marsh",
    "background": 1,
    "body": 36,
    "familiar": 104,
    "head": 191,
    "prop": 276,
    "rune": 298
  },
  {
    "idx": 4057,
    "name": "Sage Brutus of the Wild",
    "background": 0,
    "body": 20,
    "familiar": 121,
    "head": 217,
    "prop": 275,
    "rune": 282
  },
  {
    "idx": 4058,
    "name": "Atlanta of the Riviera",
    "background": 2,
    "body": 37,
    "familiar": 105,
    "head": 190,
    "prop": 273,
    "rune": 288
  },
  {
    "idx": 4059,
    "name": "Chronomancer George of the Havens",
    "background": 3,
    "body": 6,
    "familiar": 103,
    "head": 186,
    "prop": 338,
    "rune": 286
  },
  {
    "idx": 4060,
    "name": "Diabolist Aiko of the Hall",
    "background": 0,
    "body": 76,
    "familiar": 95,
    "head": 126,
    "prop": 335,
    "rune": 296
  },
  {
    "idx": 4061,
    "name": "Archmagus Azahl of the Isle",
    "background": 0,
    "body": 57,
    "familiar": 120,
    "head": 185,
    "prop": 314,
    "rune": 299
  },
  {
    "idx": 4062,
    "name": "Witch Rita of the Canyon",
    "background": 0,
    "body": 39,
    "familiar": 88,
    "head": 176,
    "prop": 332,
    "rune": 298
  },
  {
    "idx": 4063,
    "name": "Archmagus Aldo of the Isle",
    "background": 0,
    "body": 57,
    "familiar": 97,
    "head": 207,
    "prop": 315,
    "rune": 296
  },
  {
    "idx": 4064,
    "name": "Witch Lenora of the Valley",
    "background": 3,
    "body": 36,
    "familiar": 107,
    "head": 176,
    "prop": 273,
    "rune": 285
  },
  {
    "idx": 4065,
    "name": "Pyromancer Elvio of the Mount",
    "background": 1,
    "body": 63,
    "familiar": 111,
    "head": 201,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 4066,
    "name": "Hydromancer Pandora of the Brine",
    "background": 3,
    "body": 80,
    "familiar": 120,
    "head": 198,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 4067,
    "name": "Alchemist Zagan of Avalon",
    "background": 3,
    "body": 50,
    "familiar": 104,
    "head": 194,
    "prop": 271,
    "rune": 286
  },
  {
    "idx": 4068,
    "name": "Conjurer Elena of the Riviera",
    "background": 1,
    "body": 37,
    "familiar": 101,
    "head": 159,
    "prop": 311,
    "rune": 298
  },
  {
    "idx": 4069,
    "name": "Geomancer Goliath of the Belfry",
    "background": 2,
    "body": 50,
    "familiar": 101,
    "head": 165,
    "prop": 308,
    "rune": 285
  },
  {
    "idx": 4070,
    "name": "Artificer Uvlius of the Realm",
    "background": 3,
    "body": 9,
    "familiar": 111,
    "head": 228,
    "prop": 340,
    "rune": 294
  },
  {
    "idx": 4071,
    "name": "Artificer Otto of the Marsh",
    "background": 0,
    "body": 42,
    "familiar": 103,
    "head": 188,
    "prop": 260,
    "rune": 304
  },
  {
    "idx": 4072,
    "name": "Pandora of the Mountain",
    "background": 0,
    "body": 22,
    "familiar": 97,
    "head": 131,
    "prop": 248,
    "rune": 294
  },
  {
    "idx": 4073,
    "name": "Sage Lamia of the Marsh",
    "background": 3,
    "body": 39,
    "familiar": 105,
    "head": 155,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 4074,
    "name": "Sky Master Jay of Dreams",
    "background": 2,
    "body": 7,
    "familiar": 112,
    "head": 144,
    "prop": 246,
    "rune": 303
  },
  {
    "idx": 4075,
    "name": "Shaman Armstrong of the Riviera",
    "background": 1,
    "body": 12,
    "familiar": 99,
    "head": 173,
    "prop": 276,
    "rune": 295
  },
  {
    "idx": 4076,
    "name": "Magus Feng of the Sun",
    "background": 1,
    "body": 5,
    "familiar": 116,
    "head": 236,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 4077,
    "name": "Druid Pandora of the Forest",
    "background": 2,
    "body": 36,
    "familiar": 105,
    "head": 191,
    "prop": 316,
    "rune": 7777
  },
  {
    "idx": 4078,
    "name": "Aeromancer Zixin of the Cosmos",
    "background": 1,
    "body": 9,
    "familiar": 123,
    "head": 236,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 4079,
    "name": "Hedge Wizard Zubin of the Tower",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 153,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 4080,
    "name": "Archmagus Ozohr of the Salt",
    "background": 0,
    "body": 57,
    "familiar": 123,
    "head": 127,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 4081,
    "name": "Archmagus Ixar of the Desert",
    "background": 0,
    "body": 60,
    "familiar": 111,
    "head": 160,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 4082,
    "name": "Wild Mage Jahid of the Forest",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 128,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4083,
    "name": "Arcanist Crowley of the Hills",
    "background": 3,
    "body": 15,
    "familiar": 120,
    "head": 231,
    "prop": 332,
    "rune": 295
  },
  {
    "idx": 4084,
    "name": "Illusionist Huan from the Abyss",
    "background": 1,
    "body": 83,
    "familiar": 120,
    "head": 236,
    "prop": 273,
    "rune": 303
  },
  {
    "idx": 4085,
    "name": "Summoner  of the Gnostics",
    "background": 1,
    "body": 75,
    "familiar": 110,
    "head": 160,
    "prop": 254,
    "rune": 287
  },
  {
    "idx": 4086,
    "name": "Archmagus Apollo of the Hall",
    "background": 1,
    "body": 74,
    "familiar": 101,
    "head": 147,
    "prop": 256,
    "rune": 300
  },
  {
    "idx": 4087,
    "name": "Enchanter Sondra of the Hills",
    "background": 2,
    "body": 35,
    "familiar": 94,
    "head": 198,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 4088,
    "name": "Spellsinger Uvlius of the Desert",
    "background": 1,
    "body": 27,
    "familiar": 120,
    "head": 185,
    "prop": 275,
    "rune": 293
  },
  {
    "idx": 4089,
    "name": "Pyromancer Lumos of the Quantum Downs",
    "background": 2,
    "body": 8,
    "familiar": 99,
    "head": 189,
    "prop": 309,
    "rune": 292
  },
  {
    "idx": 4090,
    "name": "Sage Alice of the Ether",
    "background": 0,
    "body": 9,
    "familiar": 112,
    "head": 195,
    "prop": 316,
    "rune": 300
  },
  {
    "idx": 4091,
    "name": "Arcanist Jerret of the Steppe",
    "background": 1,
    "body": 41,
    "familiar": 88,
    "head": 202,
    "prop": 334,
    "rune": 294
  },
  {
    "idx": 4092,
    "name": "Spellsinger George of the Lake",
    "background": 0,
    "body": 84,
    "familiar": 110,
    "head": 227,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 4093,
    "name": "Archmagus  of El Dorado",
    "background": 2,
    "body": 40,
    "familiar": 123,
    "head": 233,
    "prop": 307,
    "rune": 290
  },
  {
    "idx": 4094,
    "name": "Cleric Tengu of the Valley",
    "background": 0,
    "body": 54,
    "familiar": 97,
    "head": 243,
    "prop": 318,
    "rune": 288
  },
  {
    "idx": 4095,
    "name": "Druid Impy of the Inferno",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 171,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 4096,
    "name": "Magus Uvlius of the Wild",
    "background": 1,
    "body": 19,
    "familiar": 7777,
    "head": 185,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 4097,
    "name": "Thaumaturge Ilyas of the Valley",
    "background": 0,
    "body": 62,
    "familiar": 94,
    "head": 219,
    "prop": 328,
    "rune": 300
  },
  {
    "idx": 4098,
    "name": "Hedge Wizard Peppy of the Cosmos",
    "background": 0,
    "body": 8,
    "familiar": 104,
    "head": 171,
    "prop": 279,
    "rune": 294
  },
  {
    "idx": 4099,
    "name": "Shadow Mage Flamos of the Morning Star",
    "background": 1,
    "body": 85,
    "familiar": 97,
    "head": 158,
    "prop": 307,
    "rune": 294
  },
  {
    "idx": 4100,
    "name": "Sorcerer Remus of the Inferno",
    "background": 2,
    "body": 87,
    "familiar": 97,
    "head": 185,
    "prop": 309,
    "rune": 302
  },
  {
    "idx": 4101,
    "name": "Battle Mage Homer of the Hall",
    "background": 2,
    "body": 19,
    "familiar": 109,
    "head": 129,
    "prop": 247,
    "rune": 300
  },
  {
    "idx": 4102,
    "name": "Archmagus George of the Havens",
    "background": 2,
    "body": 9,
    "familiar": 123,
    "head": 238,
    "prop": 305,
    "rune": 303
  },
  {
    "idx": 4103,
    "name": "Voodoo Priest Hugo of the Sacred Pillars",
    "background": 3,
    "body": 54,
    "familiar": 95,
    "head": 149,
    "prop": 251,
    "rune": 302
  },
  {
    "idx": 4104,
    "name": "Magus Kingsley of the Wood",
    "background": 1,
    "body": 84,
    "familiar": 120,
    "head": 201,
    "prop": 263,
    "rune": 283
  },
  {
    "idx": 4105,
    "name": "Battle Mage Samuel of the Heath",
    "background": 1,
    "body": 43,
    "familiar": 89,
    "head": 129,
    "prop": 308,
    "rune": 282
  },
  {
    "idx": 4106,
    "name": "Chaos Mage Eric of the Sands",
    "background": 0,
    "body": 5,
    "familiar": 112,
    "head": 177,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 4107,
    "name": "Charmer Artis of the Field",
    "background": 1,
    "body": 34,
    "familiar": 107,
    "head": 208,
    "prop": 258,
    "rune": 293
  },
  {
    "idx": 4108,
    "name": "Druid Lumos of the Tower",
    "background": 0,
    "body": 6,
    "familiar": 114,
    "head": 186,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 4109,
    "name": "Sorcerer Venga of the River",
    "background": 0,
    "body": 20,
    "familiar": 93,
    "head": 146,
    "prop": 278,
    "rune": 283
  },
  {
    "idx": 4110,
    "name": "Ghost Eater Rowena of the Court",
    "background": 2,
    "body": 76,
    "familiar": 110,
    "head": 209,
    "prop": 254,
    "rune": 304
  },
  {
    "idx": 4111,
    "name": "Cleric Jeldor of the Hall",
    "background": 0,
    "body": 76,
    "familiar": 103,
    "head": 186,
    "prop": 306,
    "rune": 296
  },
  {
    "idx": 4112,
    "name": "Arcanist Tengu of the Heath",
    "background": 1,
    "body": 17,
    "familiar": 101,
    "head": 243,
    "prop": 250,
    "rune": 292
  },
  {
    "idx": 4113,
    "name": "Enchanter Cybele of the Hills",
    "background": 2,
    "body": 34,
    "familiar": 104,
    "head": 131,
    "prop": 262,
    "rune": 294
  },
  {
    "idx": 4114,
    "name": "Battle Mage Hagar of Arcadia",
    "background": 1,
    "body": 82,
    "familiar": 7777,
    "head": 217,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 4115,
    "name": "Adept Rita of the Mount",
    "background": 1,
    "body": 63,
    "familiar": 109,
    "head": 223,
    "prop": 249,
    "rune": 287
  },
  {
    "idx": 4116,
    "name": "Illusionist Trollin of the Bastion",
    "background": 3,
    "body": 48,
    "familiar": 122,
    "head": 200,
    "prop": 306,
    "rune": 282
  },
  {
    "idx": 4117,
    "name": "Illusionist Adium of the Mount",
    "background": 3,
    "body": 55,
    "familiar": 112,
    "head": 125,
    "prop": 273,
    "rune": 290
  },
  {
    "idx": 4118,
    "name": "Archmagus Onaxx of the Gnostics",
    "background": 1,
    "body": 52,
    "familiar": 110,
    "head": 207,
    "prop": 329,
    "rune": 297
  },
  {
    "idx": 4119,
    "name": "Summoner Bartholomew of the Light",
    "background": 2,
    "body": 75,
    "familiar": 110,
    "head": 206,
    "prop": 254,
    "rune": 288
  },
  {
    "idx": 4120,
    "name": "Battle Mage Magnus of the Palms",
    "background": 1,
    "body": 59,
    "familiar": 99,
    "head": 204,
    "prop": 258,
    "rune": 295
  },
  {
    "idx": 4121,
    "name": "Sorcerer Udor of the Keep",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 233,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 4122,
    "name": "Sage Argus in the Shadows",
    "background": 1,
    "body": 87,
    "familiar": 7777,
    "head": 127,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 4123,
    "name": "Magus Cromwell of the Marsh",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 217,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 4124,
    "name": "Arch-Magician Lumos of the Wood",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 230,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 4125,
    "name": "Sorcerer Jabir of the Brambles",
    "background": 3,
    "body": 19,
    "familiar": 119,
    "head": 237,
    "prop": 312,
    "rune": 284
  },
  {
    "idx": 4126,
    "name": "Shaman Zevi of the Sun",
    "background": 2,
    "body": 58,
    "familiar": 111,
    "head": 167,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 4127,
    "name": "Archmagus Ofaris of the Temple",
    "background": 0,
    "body": 6,
    "familiar": 7777,
    "head": 174,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 4128,
    "name": "Hedge Wizard Florah of the Hollow",
    "background": 2,
    "body": 14,
    "familiar": 123,
    "head": 209,
    "prop": 312,
    "rune": 282
  },
  {
    "idx": 4129,
    "name": "Sorcerer George of the Sands",
    "background": 2,
    "body": 27,
    "familiar": 109,
    "head": 189,
    "prop": 259,
    "rune": 302
  },
  {
    "idx": 4130,
    "name": "Clairvoyant Angus",
    "background": 2,
    "body": 68,
    "familiar": 93,
    "head": 204,
    "prop": 252,
    "rune": 286
  },
  {
    "idx": 4131,
    "name": "Hedge Wizard Lin of the Canyon",
    "background": 3,
    "body": 17,
    "familiar": 107,
    "head": 180,
    "prop": 253,
    "rune": 295
  },
  {
    "idx": 4132,
    "name": "Battle Mage Eric of the Mountain",
    "background": 2,
    "body": 12,
    "familiar": 116,
    "head": 216,
    "prop": 314,
    "rune": 292
  },
  {
    "idx": 4133,
    "name": "Enchanter Iris of the Road",
    "background": 1,
    "body": 31,
    "familiar": 93,
    "head": 139,
    "prop": 258,
    "rune": 293
  },
  {
    "idx": 4134,
    "name": "Diabolist Imeena of Arcadia",
    "background": 0,
    "body": 82,
    "familiar": 88,
    "head": 223,
    "prop": 248,
    "rune": 301
  },
  {
    "idx": 4135,
    "name": "Pyromancer Auguste of the Hollow",
    "background": 1,
    "body": 19,
    "familiar": 7777,
    "head": 179,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 4136,
    "name": "Charmer Faye of the Wild",
    "background": 2,
    "body": 44,
    "familiar": 107,
    "head": 208,
    "prop": 273,
    "rune": 282
  },
  {
    "idx": 4137,
    "name": "Archmagus Cairon of the Grotto",
    "background": 1,
    "body": 13,
    "familiar": 119,
    "head": 229,
    "prop": 325,
    "rune": 304
  },
  {
    "idx": 4138,
    "name": "Archmagus Azahl of the Brambles",
    "background": 0,
    "body": 13,
    "familiar": 94,
    "head": 228,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4139,
    "name": "Archmagus Willow of El Dorado",
    "background": 0,
    "body": 40,
    "familiar": 120,
    "head": 191,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 4140,
    "name": "Summoner Celeste of the Hills",
    "background": 1,
    "body": 37,
    "familiar": 120,
    "head": 208,
    "prop": 254,
    "rune": 291
  },
  {
    "idx": 4141,
    "name": "Archmagus Hadrien of the Sacred Pillars",
    "background": 1,
    "body": 54,
    "familiar": 117,
    "head": 162,
    "prop": 322,
    "rune": 290
  },
  {
    "idx": 4142,
    "name": "Sorcerer Faiz of the Villa",
    "background": 2,
    "body": 78,
    "familiar": 89,
    "head": 164,
    "prop": 251,
    "rune": 7777
  },
  {
    "idx": 4143,
    "name": "Wild Mage Idris of the Palms",
    "background": 2,
    "body": 61,
    "familiar": 104,
    "head": 219,
    "prop": 321,
    "rune": 301
  },
  {
    "idx": 4144,
    "name": "Alchemist Aleister of the Heath",
    "background": 1,
    "body": 14,
    "familiar": 116,
    "head": 137,
    "prop": 326,
    "rune": 297
  },
  {
    "idx": 4145,
    "name": "Artificer Pino of the Tower",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 201,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 4146,
    "name": "Sorcerer Gogol of the Inferno",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 128,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 4147,
    "name": "Arcanist Apollo of the Mist",
    "background": 0,
    "body": 50,
    "familiar": 111,
    "head": 212,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 4148,
    "name": "Chronomancer Taqi of the Veil",
    "background": 0,
    "body": 75,
    "familiar": 119,
    "head": 164,
    "prop": 338,
    "rune": 299
  },
  {
    "idx": 4149,
    "name": "Cleric Ramiz of the Veil",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 219,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 4150,
    "name": "Ice Mage Uur'lok of the Tundra",
    "background": 1,
    "body": 65,
    "familiar": 112,
    "head": 200,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 4151,
    "name": "Enchanter Thana of the Moors",
    "background": 1,
    "body": 37,
    "familiar": 105,
    "head": 187,
    "prop": 311,
    "rune": 286
  },
  {
    "idx": 4152,
    "name": "Sorcerer Nazim of Arcadia",
    "background": 0,
    "body": 45,
    "familiar": 95,
    "head": 222,
    "prop": 320,
    "rune": 283
  },
  {
    "idx": 4153,
    "name": "Archmagus Ofaris of the Brambles",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 192,
    "prop": 247,
    "rune": 287
  },
  {
    "idx": 4154,
    "name": "Sorcerer Iprix of the Ether",
    "background": 0,
    "body": 75,
    "familiar": 112,
    "head": 238,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 4155,
    "name": "Enchanter  of the Keep",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 230,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 4156,
    "name": "Conjurer Devon of the Heath",
    "background": 0,
    "body": 22,
    "familiar": 89,
    "head": 132,
    "prop": 246,
    "rune": 304
  },
  {
    "idx": 4157,
    "name": "Magus Shizu of the Grotto",
    "background": 1,
    "body": 38,
    "familiar": 7777,
    "head": 126,
    "prop": 263,
    "rune": 282
  },
  {
    "idx": 4158,
    "name": "Artificer Jabir of the Steppe",
    "background": 2,
    "body": 45,
    "familiar": 97,
    "head": 237,
    "prop": 261,
    "rune": 293
  },
  {
    "idx": 4159,
    "name": "Artificer Horace of the Bastion",
    "background": 2,
    "body": 48,
    "familiar": 103,
    "head": 165,
    "prop": 256,
    "rune": 291
  },
  {
    "idx": 4160,
    "name": "Mystic Celeste of the Wold",
    "background": 0,
    "body": 22,
    "familiar": 107,
    "head": 191,
    "prop": 249,
    "rune": 283
  },
  {
    "idx": 4161,
    "name": "Fortune Teller Liliana of the Valley",
    "background": 3,
    "body": 32,
    "familiar": 88,
    "head": 176,
    "prop": 251,
    "rune": 293
  },
  {
    "idx": 4162,
    "name": "Alchemist Blaise of the Oasis",
    "background": 0,
    "body": 60,
    "familiar": 93,
    "head": 203,
    "prop": 325,
    "rune": 291
  },
  {
    "idx": 4163,
    "name": "Wild Mage Dante of the Marsh",
    "background": 0,
    "body": 82,
    "familiar": 111,
    "head": 218,
    "prop": 319,
    "rune": 285
  },
  {
    "idx": 4164,
    "name": "Oracle Amir of the Forest",
    "background": 0,
    "body": 19,
    "familiar": 110,
    "head": 162,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 4165,
    "name": "Sorcerer Allistair of the Ice",
    "background": 2,
    "body": 65,
    "familiar": 99,
    "head": 229,
    "prop": 321,
    "rune": 299
  },
  {
    "idx": 4166,
    "name": "Sage Lucien of the Brambles",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 179,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 4167,
    "name": "Cosmic Mage Alatar of the Temple",
    "background": 1,
    "body": 6,
    "familiar": 103,
    "head": 141,
    "prop": 310,
    "rune": 290
  },
  {
    "idx": 4168,
    "name": "Battle Mage Sturgis of the Wood",
    "background": 0,
    "body": 43,
    "familiar": 123,
    "head": 217,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 4169,
    "name": "Battle Mage Dante of the Wood",
    "background": 0,
    "body": 42,
    "familiar": 99,
    "head": 165,
    "prop": 329,
    "rune": 299
  },
  {
    "idx": 4170,
    "name": "Void Disciple Moloch of the Veil",
    "background": 3,
    "body": 52,
    "familiar": 88,
    "head": 193,
    "prop": 307,
    "rune": 288
  },
  {
    "idx": 4171,
    "name": "Shaman Soran of the Realm",
    "background": 1,
    "body": 30,
    "familiar": 107,
    "head": 212,
    "prop": 324,
    "rune": 304
  },
  {
    "idx": 4172,
    "name": "Sorcerer Kazem of the Desert",
    "background": 1,
    "body": 5,
    "familiar": 94,
    "head": 237,
    "prop": 267,
    "rune": 299
  },
  {
    "idx": 4173,
    "name": "Hedge Wizard Cromwell of the Valley",
    "background": 3,
    "body": 23,
    "familiar": 7777,
    "head": 204,
    "prop": 312,
    "rune": 296
  },
  {
    "idx": 4174,
    "name": "Aeromancer Qianfan of the Temple",
    "background": 1,
    "body": 63,
    "familiar": 112,
    "head": 236,
    "prop": 315,
    "rune": 294
  },
  {
    "idx": 4175,
    "name": "Artificer Twinkletoes of the Tower",
    "background": 1,
    "body": 26,
    "familiar": 115,
    "head": 201,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 4176,
    "name": "Cosmic Mage Rita of the River",
    "background": 1,
    "body": 14,
    "familiar": 105,
    "head": 223,
    "prop": 309,
    "rune": 287
  },
  {
    "idx": 4177,
    "name": "Bard Ronald of the Oasis",
    "background": 1,
    "body": 5,
    "familiar": 7777,
    "head": 125,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 4178,
    "name": "Voodoo Priest Pierre of the Sands",
    "background": 1,
    "body": 5,
    "familiar": 110,
    "head": 179,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 4179,
    "name": "Archmagus Casper of the Pit",
    "background": 1,
    "body": 87,
    "familiar": 110,
    "head": 229,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 4180,
    "name": "Pyromancer Peppy",
    "background": 0,
    "body": 29,
    "familiar": 108,
    "head": 235,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 4181,
    "name": "Voodoo Priest Le Blanc of the Villa",
    "background": 1,
    "body": 46,
    "familiar": 95,
    "head": 149,
    "prop": 271,
    "rune": 292
  },
  {
    "idx": 4182,
    "name": "Druid Ilyas of Avalon",
    "background": 3,
    "body": 63,
    "familiar": 114,
    "head": 142,
    "prop": 322,
    "rune": 283
  },
  {
    "idx": 4183,
    "name": "Arcanist Alatar of the Keep",
    "background": 1,
    "body": 76,
    "familiar": 110,
    "head": 212,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 4184,
    "name": "Sage Eden",
    "background": 1,
    "body": 87,
    "familiar": 7777,
    "head": 227,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 4185,
    "name": "Alchemist Sonja of the Quantum Downs",
    "background": 1,
    "body": 83,
    "familiar": 107,
    "head": 156,
    "prop": 271,
    "rune": 283
  },
  {
    "idx": 4186,
    "name": "Sorcerer Reza of the Palms",
    "background": 0,
    "body": 60,
    "familiar": 105,
    "head": 164,
    "prop": 271,
    "rune": 284
  },
  {
    "idx": 4187,
    "name": "Diabolist Ifran of the Desert",
    "background": 2,
    "body": 58,
    "familiar": 120,
    "head": 237,
    "prop": 310,
    "rune": 284
  },
  {
    "idx": 4188,
    "name": "Clairvoyant Pumlo of the Garden",
    "background": 2,
    "body": 30,
    "familiar": 108,
    "head": 231,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 4189,
    "name": "Enchanter Calista of the Fey",
    "background": 1,
    "body": 28,
    "familiar": 95,
    "head": 191,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 4190,
    "name": "Battle Mage Magnus of the Tower",
    "background": 2,
    "body": 55,
    "familiar": 109,
    "head": 220,
    "prop": 315,
    "rune": 300
  },
  {
    "idx": 4191,
    "name": "Chronomancer Soya of Elysium",
    "background": 3,
    "body": 54,
    "familiar": 117,
    "head": 211,
    "prop": 259,
    "rune": 295
  },
  {
    "idx": 4192,
    "name": "Shaman Darick of the Desert",
    "background": 1,
    "body": 27,
    "familiar": 99,
    "head": 218,
    "prop": 316,
    "rune": 287
  },
  {
    "idx": 4193,
    "name": "Druid Casper of the Oasis",
    "background": 3,
    "body": 59,
    "familiar": 94,
    "head": 229,
    "prop": 316,
    "rune": 303
  },
  {
    "idx": 4194,
    "name": "Spellsinger Eronin of the Light",
    "background": 0,
    "body": 10,
    "familiar": 123,
    "head": 125,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 4195,
    "name": "Summoner Aleister of Arcadia",
    "background": 0,
    "body": 43,
    "familiar": 104,
    "head": 174,
    "prop": 322,
    "rune": 300
  },
  {
    "idx": 4196,
    "name": "Battlemage Zelda of the Havens",
    "background": 3,
    "body": 24,
    "familiar": 104,
    "head": 176,
    "prop": 335,
    "rune": 297
  },
  {
    "idx": 4197,
    "name": "Cryptomancer Ixar of the Oasis",
    "background": 0,
    "body": 59,
    "familiar": 109,
    "head": 229,
    "prop": 310,
    "rune": 286
  },
  {
    "idx": 4198,
    "name": "Druid Brutus of the Bibliotheca",
    "background": 2,
    "body": 62,
    "familiar": 106,
    "head": 173,
    "prop": 276,
    "rune": 290
  },
  {
    "idx": 4199,
    "name": "Alchemist Apollo of the Road",
    "background": 0,
    "body": 13,
    "familiar": 106,
    "head": 186,
    "prop": 268,
    "rune": 287
  },
  {
    "idx": 4200,
    "name": "Ghost Eater Allistair of the Valley",
    "background": 1,
    "body": 15,
    "familiar": 94,
    "head": 197,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 4201,
    "name": "Arch-Magician Ramiz of Xanadu",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 164,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4202,
    "name": "Arcanist Artis of the Field",
    "background": 2,
    "body": 44,
    "familiar": 103,
    "head": 131,
    "prop": 328,
    "rune": 303
  },
  {
    "idx": 4203,
    "name": "Hedge Wizard Sylvia of the Lake",
    "background": 2,
    "body": 79,
    "familiar": 104,
    "head": 159,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 4204,
    "name": "Runecaster Kalo of the Psychic Leap",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 200,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 4205,
    "name": "Celah of Xanadu",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 215,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 4206,
    "name": "Hedge Wizard Aiko of the Tower",
    "background": 3,
    "body": 26,
    "familiar": 95,
    "head": 126,
    "prop": 279,
    "rune": 291
  },
  {
    "idx": 4207,
    "name": "Enchanter Devon of the Hills",
    "background": 1,
    "body": 34,
    "familiar": 120,
    "head": 208,
    "prop": 259,
    "rune": 284
  },
  {
    "idx": 4208,
    "name": "Sorcerer Soran of the Sun",
    "background": 2,
    "body": 60,
    "familiar": 97,
    "head": 192,
    "prop": 312,
    "rune": 304
  },
  {
    "idx": 4209,
    "name": "Runecaster Luther of the Palms",
    "background": 1,
    "body": 27,
    "familiar": 97,
    "head": 220,
    "prop": 324,
    "rune": 300
  },
  {
    "idx": 4210,
    "name": "Magus Edge of the Hall",
    "background": 1,
    "body": 26,
    "familiar": 7777,
    "head": 205,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 4211,
    "name": "Pyromancer Sisk of the Steppe",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 150,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 4212,
    "name": "Battle Mage Ethan of the Mist",
    "background": 1,
    "body": 54,
    "familiar": 7777,
    "head": 183,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 4213,
    "name": "Carly of El Dorado",
    "background": 1,
    "body": 77,
    "familiar": 110,
    "head": 131,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 4214,
    "name": "Archmagus Aleister of the Keep",
    "background": 0,
    "body": 40,
    "familiar": 95,
    "head": 160,
    "prop": 257,
    "rune": 302
  },
  {
    "idx": 4215,
    "name": "Artificer Crowley of Xanadu",
    "background": 0,
    "body": 8,
    "familiar": 120,
    "head": 127,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 4216,
    "name": "Battle Mage Homer of the Hollow",
    "background": 2,
    "body": 44,
    "familiar": 107,
    "head": 129,
    "prop": 273,
    "rune": 284
  },
  {
    "idx": 4217,
    "name": "Thaumaturge Miyo of El Dorado",
    "background": 1,
    "body": 74,
    "familiar": 116,
    "head": 126,
    "prop": 338,
    "rune": 293
  },
  {
    "idx": 4218,
    "name": "Clairvoyant Talbot of the Keep",
    "background": 3,
    "body": 49,
    "familiar": 89,
    "head": 129,
    "prop": 329,
    "rune": 302
  },
  {
    "idx": 4219,
    "name": "Archmagus Lumos of the Hall",
    "background": 0,
    "body": 48,
    "familiar": 95,
    "head": 199,
    "prop": 262,
    "rune": 304
  },
  {
    "idx": 4220,
    "name": "Archmagus David of the Hills",
    "background": 1,
    "body": 23,
    "familiar": 108,
    "head": 138,
    "prop": 249,
    "rune": 283
  },
  {
    "idx": 4221,
    "name": "Shaman Celah of the Tower",
    "background": 3,
    "body": 7,
    "familiar": 120,
    "head": 189,
    "prop": 317,
    "rune": 294
  },
  {
    "idx": 4222,
    "name": "Cleric Chiron of the Steppe",
    "background": 1,
    "body": 12,
    "familiar": 122,
    "head": 194,
    "prop": 306,
    "rune": 292
  },
  {
    "idx": 4223,
    "name": "Sorcerer Rodolfo of the Brambles",
    "background": 0,
    "body": 79,
    "familiar": 89,
    "head": 133,
    "prop": 256,
    "rune": 304
  },
  {
    "idx": 4224,
    "name": "Adept Idris of the Atheneum",
    "background": 2,
    "body": 49,
    "familiar": 114,
    "head": 237,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 4225,
    "name": "Arch-Magician Aleister of the Citadel",
    "background": 2,
    "body": 48,
    "familiar": 123,
    "head": 153,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 4226,
    "name": "Cleric Zane of the Brambles",
    "background": 1,
    "body": 14,
    "familiar": 114,
    "head": 238,
    "prop": 338,
    "rune": 292
  },
  {
    "idx": 4227,
    "name": "Sorcerer Aleister of the Wild",
    "background": 1,
    "body": 13,
    "familiar": 110,
    "head": 214,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 4228,
    "name": "Daria of the Hills",
    "background": 0,
    "body": 38,
    "familiar": 107,
    "head": 156,
    "prop": 273,
    "rune": 296
  },
  {
    "idx": 4229,
    "name": "Illusionist Poppy",
    "background": 1,
    "body": 29,
    "familiar": 96,
    "head": 171,
    "prop": 273,
    "rune": 300
  },
  {
    "idx": 4230,
    "name": "Archmagus Alatar of the Lake",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 138,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 4231,
    "name": "Archmagus David of the Bastion",
    "background": 0,
    "body": 77,
    "familiar": 112,
    "head": 233,
    "prop": 338,
    "rune": 288
  },
  {
    "idx": 4232,
    "name": "Fortune Teller Patch of the Marsh",
    "background": 3,
    "body": 14,
    "familiar": 103,
    "head": 235,
    "prop": 245,
    "rune": 302
  },
  {
    "idx": 4233,
    "name": "Sage Kang",
    "background": 2,
    "body": 76,
    "familiar": 112,
    "head": 236,
    "prop": 256,
    "rune": 292
  },
  {
    "idx": 4234,
    "name": "Sorcerer Rafiq of the Desert",
    "background": 1,
    "body": 5,
    "familiar": 94,
    "head": 237,
    "prop": 271,
    "rune": 294
  },
  {
    "idx": 4235,
    "name": "Archmagus Orpheus of the Hall",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 127,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 4236,
    "name": "Arch-Magician Baird",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 216,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 4237,
    "name": "Enchanter Bolin of the Veil",
    "background": 0,
    "body": 9,
    "familiar": 115,
    "head": 236,
    "prop": 265,
    "rune": 303
  },
  {
    "idx": 4238,
    "name": "Sage Pus Mother of the Reach",
    "background": 1,
    "body": 23,
    "familiar": 108,
    "head": 145,
    "prop": 318,
    "rune": 295
  },
  {
    "idx": 4239,
    "name": "Magus Rita of the Steppe",
    "background": 2,
    "body": 43,
    "familiar": 7777,
    "head": 166,
    "prop": 258,
    "rune": 303
  },
  {
    "idx": 4240,
    "name": "Arcanist Fire Eater of the Hills",
    "background": 2,
    "body": 44,
    "familiar": 107,
    "head": 158,
    "prop": 250,
    "rune": 287
  },
  {
    "idx": 4241,
    "name": "Arch-Magician Iprix of the Road",
    "background": 0,
    "body": 41,
    "familiar": 107,
    "head": 192,
    "prop": 328,
    "rune": 299
  },
  {
    "idx": 4242,
    "name": "Aeromancer Cosmo of the Tower",
    "background": 1,
    "body": 62,
    "familiar": 114,
    "head": 142,
    "prop": 315,
    "rune": 291
  },
  {
    "idx": 4243,
    "name": "Arch-Magician Ulysse of the Veil",
    "background": 2,
    "body": 10,
    "familiar": 107,
    "head": 217,
    "prop": 306,
    "rune": 282
  },
  {
    "idx": 4244,
    "name": "Alchemist Junko of the Road",
    "background": 2,
    "body": 39,
    "familiar": 123,
    "head": 126,
    "prop": 270,
    "rune": 297
  },
  {
    "idx": 4245,
    "name": "Archmagus Alessar of the Cosmos",
    "background": 0,
    "body": 24,
    "familiar": 90,
    "head": 215,
    "prop": 246,
    "rune": 294
  },
  {
    "idx": 4246,
    "name": "Electromancer Atlanta of the Grotto",
    "background": 2,
    "body": 35,
    "familiar": 103,
    "head": 132,
    "prop": 305,
    "rune": 301
  },
  {
    "idx": 4247,
    "name": "Allistair of Arcadia",
    "background": 3,
    "body": 17,
    "familiar": 112,
    "head": 232,
    "prop": 253,
    "rune": 293
  },
  {
    "idx": 4248,
    "name": "Battle Mage Cassius of the Oasis",
    "background": 0,
    "body": 60,
    "familiar": 101,
    "head": 206,
    "prop": 265,
    "rune": 283
  },
  {
    "idx": 4249,
    "name": "Mystic Ofaris of El Dorado",
    "background": 3,
    "body": 19,
    "familiar": 105,
    "head": 231,
    "prop": 326,
    "rune": 285
  },
  {
    "idx": 4250,
    "name": "Necromancer Impy of the Veil",
    "background": 0,
    "body": 10,
    "familiar": 7777,
    "head": 171,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 4251,
    "name": "Archmagus Udor of the Brine",
    "background": 1,
    "body": 57,
    "familiar": 105,
    "head": 202,
    "prop": 258,
    "rune": 285
  },
  {
    "idx": 4252,
    "name": "Void Disciple Zagan of the Catacombs",
    "background": 1,
    "body": 71,
    "familiar": 97,
    "head": 239,
    "prop": 307,
    "rune": 298
  },
  {
    "idx": 4253,
    "name": "Hedge Wizard Oxnard of the Field",
    "background": 1,
    "body": 13,
    "familiar": 107,
    "head": 193,
    "prop": 265,
    "rune": 290
  },
  {
    "idx": 4254,
    "name": "Artificer Udor of the Wild",
    "background": 1,
    "body": 41,
    "familiar": 111,
    "head": 174,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4255,
    "name": "Archmagus Orpheus of the Realm",
    "background": 0,
    "body": 11,
    "familiar": 112,
    "head": 232,
    "prop": 253,
    "rune": 292
  },
  {
    "idx": 4256,
    "name": "Battle Mage Homer of the Riviera",
    "background": 1,
    "body": 13,
    "familiar": 107,
    "head": 173,
    "prop": 325,
    "rune": 302
  },
  {
    "idx": 4257,
    "name": "Pyromancer Apollo of the Wood",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 185,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 4258,
    "name": "Arch-Magician Chooki of the Tower",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 219,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 4259,
    "name": "Magus Bayard of the Mountain",
    "background": 2,
    "body": 19,
    "familiar": 103,
    "head": 129,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 4260,
    "name": "Alchemist Jerret of the Sea",
    "background": 1,
    "body": 57,
    "familiar": 108,
    "head": 185,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 4261,
    "name": "Battle Mage Magnus of the Wold",
    "background": 0,
    "body": 15,
    "familiar": 101,
    "head": 218,
    "prop": 281,
    "rune": 286
  },
  {
    "idx": 4262,
    "name": "Sorcerer Alatar of the Wood",
    "background": 0,
    "body": 44,
    "familiar": 107,
    "head": 231,
    "prop": 271,
    "rune": 283
  },
  {
    "idx": 4263,
    "name": "Cryptomancer Shroomer of the Lake",
    "background": 0,
    "body": 41,
    "familiar": 99,
    "head": 195,
    "prop": 313,
    "rune": 293
  },
  {
    "idx": 4264,
    "name": "Cleric Caligula of the Ice",
    "background": 0,
    "body": 65,
    "familiar": 120,
    "head": 129,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 4265,
    "name": "Alchemist Lamia of the Riviera",
    "background": 2,
    "body": 38,
    "familiar": 88,
    "head": 187,
    "prop": 270,
    "rune": 283
  },
  {
    "idx": 4266,
    "name": "Diabolist Sondra of Arcadia",
    "background": 0,
    "body": 36,
    "familiar": 104,
    "head": 187,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 4267,
    "name": "Shaman Soya of the Road",
    "background": 0,
    "body": 44,
    "familiar": 101,
    "head": 185,
    "prop": 265,
    "rune": 283
  },
  {
    "idx": 4268,
    "name": "Shaman Seth of the Hollow",
    "background": 3,
    "body": 43,
    "familiar": 119,
    "head": 205,
    "prop": 276,
    "rune": 293
  },
  {
    "idx": 4269,
    "name": "Celeste of the Steppe",
    "background": 2,
    "body": 35,
    "familiar": 95,
    "head": 191,
    "prop": 315,
    "rune": 296
  },
  {
    "idx": 4270,
    "name": "Sorcerer Basil of the Morning Star",
    "background": 0,
    "body": 85,
    "familiar": 112,
    "head": 212,
    "prop": 324,
    "rune": 285
  },
  {
    "idx": 4271,
    "name": "Witch Ivy of the Road",
    "background": 3,
    "body": 33,
    "familiar": 91,
    "head": 223,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 4272,
    "name": "Lumos of the Gnostics",
    "background": 1,
    "body": 52,
    "familiar": 114,
    "head": 212,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 4273,
    "name": "Adept Jean Leon of the Tower",
    "background": 2,
    "body": 40,
    "familiar": 95,
    "head": 149,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 4274,
    "name": "Battle Mage Khudalf of the Wold",
    "background": 0,
    "body": 82,
    "familiar": 99,
    "head": 218,
    "prop": 312,
    "rune": 299
  },
  {
    "idx": 4275,
    "name": "Sage Astrid of the Grotto",
    "background": 2,
    "body": 14,
    "familiar": 112,
    "head": 187,
    "prop": 329,
    "rune": 285
  },
  {
    "idx": 4276,
    "name": "Cairon of Tartarus",
    "background": 1,
    "body": 86,
    "familiar": 7777,
    "head": 127,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 4277,
    "name": "Witch Properpine of Arcadia",
    "background": 1,
    "body": 39,
    "familiar": 110,
    "head": 166,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 4278,
    "name": "Sage Nikolas of the Temple",
    "background": 0,
    "body": 62,
    "familiar": 116,
    "head": 189,
    "prop": 275,
    "rune": 295
  },
  {
    "idx": 4279,
    "name": "Shaman Rita of the Sun",
    "background": 3,
    "body": 5,
    "familiar": 89,
    "head": 166,
    "prop": 323,
    "rune": 285
  },
  {
    "idx": 4280,
    "name": "Witch Gwendolin of the Tower",
    "background": 0,
    "body": 48,
    "familiar": 110,
    "head": 166,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 4281,
    "name": "Adept Basil of the Belfry",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 230,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 4282,
    "name": "Witch Velorina",
    "background": 1,
    "body": 67,
    "familiar": 104,
    "head": 166,
    "prop": 268,
    "rune": 302
  },
  {
    "idx": 4283,
    "name": "Transmuter Gogol of the Citadel",
    "background": 1,
    "body": 40,
    "familiar": 7777,
    "head": 164,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 4284,
    "name": "Hedge Wizard Aslan of the Heath",
    "background": 0,
    "body": 82,
    "familiar": 119,
    "head": 173,
    "prop": 312,
    "rune": 283
  },
  {
    "idx": 4285,
    "name": "Diabolist Rumpleskin of the Capital",
    "background": 2,
    "body": 48,
    "familiar": 95,
    "head": 235,
    "prop": 335,
    "rune": 299
  },
  {
    "idx": 4286,
    "name": "Alchemist Bobbin of the Surf",
    "background": 1,
    "body": 57,
    "familiar": 105,
    "head": 201,
    "prop": 271,
    "rune": 283
  },
  {
    "idx": 4287,
    "name": "Battle Mage Hansel of the Mist",
    "background": 2,
    "body": 49,
    "familiar": 105,
    "head": 217,
    "prop": 308,
    "rune": 293
  },
  {
    "idx": 4288,
    "name": "Geomancer Aleister of the Great Blue",
    "background": 1,
    "body": 57,
    "familiar": 119,
    "head": 226,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 4289,
    "name": "Mystic Dario of the Mountain",
    "background": 3,
    "body": 12,
    "familiar": 107,
    "head": 150,
    "prop": 339,
    "rune": 282
  },
  {
    "idx": 4290,
    "name": "Witch Gwendolin of the Heath",
    "background": 2,
    "body": 33,
    "familiar": 101,
    "head": 223,
    "prop": 248,
    "rune": 282
  },
  {
    "idx": 4291,
    "name": "Archmagus Orlando of the Mount",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 125,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 4292,
    "name": "Hex Mage Faiz of the Villa",
    "background": 0,
    "body": 26,
    "familiar": 7777,
    "head": 219,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 4293,
    "name": "Archmagus Amir of the Oasis",
    "background": 1,
    "body": 60,
    "familiar": 104,
    "head": 233,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 4294,
    "name": "Arcanist Leah of Arcadia",
    "background": 3,
    "body": 31,
    "familiar": 88,
    "head": 139,
    "prop": 332,
    "rune": 303
  },
  {
    "idx": 4295,
    "name": "Mystic Hadrien of the Villa",
    "background": 1,
    "body": 78,
    "familiar": 93,
    "head": 226,
    "prop": 325,
    "rune": 285
  },
  {
    "idx": 4296,
    "name": "Adept Milo of the Sacred Pillars",
    "background": 2,
    "body": 63,
    "familiar": 114,
    "head": 153,
    "prop": 338,
    "rune": 301
  },
  {
    "idx": 4297,
    "name": "Battle Mage Baird of the Villa",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 183,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 4298,
    "name": "Necromancer Voidoth of the Platonic Shadow",
    "background": 1,
    "body": 68,
    "familiar": 88,
    "head": 241,
    "prop": 278,
    "rune": 298
  },
  {
    "idx": 4299,
    "name": "Katherine of the Grotto",
    "background": 0,
    "body": 21,
    "familiar": 88,
    "head": 198,
    "prop": 262,
    "rune": 293
  },
  {
    "idx": 4300,
    "name": "Shaman Daria of the Hollow",
    "background": 1,
    "body": 19,
    "familiar": 110,
    "head": 156,
    "prop": 319,
    "rune": 304
  },
  {
    "idx": 4301,
    "name": "Thaumaturge Godfrey of the Valley",
    "background": 2,
    "body": 55,
    "familiar": 103,
    "head": 129,
    "prop": 332,
    "rune": 304
  },
  {
    "idx": 4302,
    "name": "Oberon of the Keep",
    "background": 1,
    "body": 48,
    "familiar": 112,
    "head": 192,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 4303,
    "name": "Magus Shanyuan of the Psychic Leap",
    "background": 0,
    "body": 9,
    "familiar": 108,
    "head": 236,
    "prop": 263,
    "rune": 300
  },
  {
    "idx": 4304,
    "name": "Enchanter Velorina of the Ether",
    "background": 2,
    "body": 68,
    "familiar": 117,
    "head": 176,
    "prop": 265,
    "rune": 296
  },
  {
    "idx": 4305,
    "name": "Witch Lenora",
    "background": 2,
    "body": 8,
    "familiar": 117,
    "head": 159,
    "prop": 278,
    "rune": 299
  },
  {
    "idx": 4306,
    "name": "Hedge Wizard Molek of the Mist",
    "background": 2,
    "body": 49,
    "familiar": 111,
    "head": 193,
    "prop": 312,
    "rune": 297
  },
  {
    "idx": 4307,
    "name": "Shaman Shigenjo of the Ether",
    "background": 0,
    "body": 8,
    "familiar": 97,
    "head": 243,
    "prop": 334,
    "rune": 300
  },
  {
    "idx": 4308,
    "name": "Conjurer Bartholomew of the Hollow",
    "background": 0,
    "body": 18,
    "familiar": 104,
    "head": 183,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 4309,
    "name": "Enchanter Hagar of the Desert",
    "background": 3,
    "body": 61,
    "familiar": 95,
    "head": 203,
    "prop": 251,
    "rune": 289
  },
  {
    "idx": 4310,
    "name": "Aeromancer Lenora of Arcadia",
    "background": 1,
    "body": 33,
    "familiar": 120,
    "head": 223,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 4311,
    "name": "Mystic Pandora of the Toadstools",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 132,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 4312,
    "name": "Arch-Magician Apollo of the Brambles",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 174,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 4313,
    "name": "Magus Goliath of the River",
    "background": 1,
    "body": 84,
    "familiar": 99,
    "head": 218,
    "prop": 253,
    "rune": 282
  },
  {
    "idx": 4314,
    "name": "Battle Mage Cassius of the Quantum Shadow",
    "background": 1,
    "body": 87,
    "familiar": 7777,
    "head": 183,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4315,
    "name": "Artificer Misumi of the Citadel",
    "background": 1,
    "body": 40,
    "familiar": 95,
    "head": 126,
    "prop": 318,
    "rune": 292
  },
  {
    "idx": 4316,
    "name": "Runecaster Jean Leon of the Keep",
    "background": 1,
    "body": 77,
    "familiar": 95,
    "head": 149,
    "prop": 327,
    "rune": 290
  },
  {
    "idx": 4317,
    "name": "Archmagus Zubin of the Hall",
    "background": 1,
    "body": 40,
    "familiar": 7777,
    "head": 211,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 4318,
    "name": "Alchemist Ariadne of Arcadia",
    "background": 1,
    "body": 84,
    "familiar": 114,
    "head": 198,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 4319,
    "name": "Sorcerer Uvlius of the Ether",
    "background": 0,
    "body": 9,
    "familiar": 114,
    "head": 227,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 4320,
    "name": "Sage Xiuying of El Dorado",
    "background": 2,
    "body": 77,
    "familiar": 103,
    "head": 180,
    "prop": 328,
    "rune": 283
  },
  {
    "idx": 4321,
    "name": "Ozohr of the Canyon",
    "background": 0,
    "body": 14,
    "familiar": 105,
    "head": 202,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 4322,
    "name": "Zelroth",
    "background": 1,
    "body": 86,
    "familiar": 95,
    "head": 160,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 4323,
    "name": "Adept Bogey of the Veil",
    "background": 1,
    "body": 75,
    "familiar": 119,
    "head": 178,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 4324,
    "name": "Hex Mage Gaspard of the Keep",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 179,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 4325,
    "name": "Necromancer Malcom of the Havens",
    "background": 2,
    "body": 67,
    "familiar": 88,
    "head": 194,
    "prop": 307,
    "rune": 285
  },
  {
    "idx": 4326,
    "name": "Artificer Jastor of the Keep",
    "background": 0,
    "body": 40,
    "familiar": 104,
    "head": 200,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 4327,
    "name": "Cryptomancer Demos of the Atheneum",
    "background": 3,
    "body": 50,
    "familiar": 106,
    "head": 158,
    "prop": 309,
    "rune": 293
  },
  {
    "idx": 4328,
    "name": "Hedge Wizard Shukri of the Ether",
    "background": 1,
    "body": 24,
    "familiar": 111,
    "head": 222,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 4329,
    "name": "Arch-Magician Idris of the Sacred Pillars",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 164,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4330,
    "name": "Arch-Magician Faiz of the Field",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 128,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 4331,
    "name": "Electromancer Aleister of the Atheneum",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 185,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 4332,
    "name": "Enchanter Celeste of the Circle",
    "background": 2,
    "body": 29,
    "familiar": 97,
    "head": 132,
    "prop": 270,
    "rune": 292
  },
  {
    "idx": 4333,
    "name": "Archmagus Udor of the Brambles",
    "background": 1,
    "body": 44,
    "familiar": 104,
    "head": 231,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 4334,
    "name": "Alchemist Crobas of the Toadstools",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 150,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 4335,
    "name": "Enchanter Sondra of the Court",
    "background": 2,
    "body": 19,
    "familiar": 93,
    "head": 191,
    "prop": 245,
    "rune": 293
  },
  {
    "idx": 4336,
    "name": "Zelroth of the Marsh",
    "background": 0,
    "body": 15,
    "familiar": 89,
    "head": 162,
    "prop": 264,
    "rune": 292
  },
  {
    "idx": 4337,
    "name": "Necromancer Aiko of the Bastion",
    "background": 2,
    "body": 40,
    "familiar": 95,
    "head": 126,
    "prop": 307,
    "rune": 282
  },
  {
    "idx": 4338,
    "name": "Aeromancer Esme of Arcadia",
    "background": 0,
    "body": 35,
    "familiar": 114,
    "head": 223,
    "prop": 315,
    "rune": 290
  },
  {
    "idx": 4339,
    "name": "Druid Circe of the Wood",
    "background": 1,
    "body": 37,
    "familiar": 104,
    "head": 187,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 4340,
    "name": "Cleric Baptiste of El Dorado",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 179,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 4341,
    "name": "Clairvoyant Durm of the Mist",
    "background": 1,
    "body": 49,
    "familiar": 7777,
    "head": 188,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 4342,
    "name": "Alchemist Aubergine of the Woodlands",
    "background": 3,
    "body": 29,
    "familiar": 93,
    "head": 154,
    "prop": 270,
    "rune": 289
  },
  {
    "idx": 4343,
    "name": "Alchemist Asphodel of the Wood",
    "background": 2,
    "body": 21,
    "familiar": 104,
    "head": 198,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 4344,
    "name": "Battle Mage Otto of Elysium",
    "background": 2,
    "body": 63,
    "familiar": 116,
    "head": 204,
    "prop": 260,
    "rune": 294
  },
  {
    "idx": 4345,
    "name": "Conjurer Thoth of the Tower",
    "background": 2,
    "body": 77,
    "familiar": 115,
    "head": 205,
    "prop": 273,
    "rune": 294
  },
  {
    "idx": 4346,
    "name": "Hedge Wizard Voidoth of the Belfry",
    "background": 2,
    "body": 50,
    "familiar": 95,
    "head": 194,
    "prop": 253,
    "rune": 297
  },
  {
    "idx": 4347,
    "name": "Thana of the Belfry",
    "background": 1,
    "body": 49,
    "familiar": 104,
    "head": 131,
    "prop": 340,
    "rune": 299
  },
  {
    "idx": 4348,
    "name": "Pyromancer Embrose from the Abyss",
    "background": 1,
    "body": 87,
    "familiar": 97,
    "head": 158,
    "prop": 310,
    "rune": 292
  },
  {
    "idx": 4349,
    "name": "Wild Mage Angus of the Sun",
    "background": 0,
    "body": 27,
    "familiar": 111,
    "head": 204,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4350,
    "name": "Sage Sabina of the Steppe",
    "background": 1,
    "body": 38,
    "familiar": 7777,
    "head": 155,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 4351,
    "name": "Sorcerer Kazem of the Oasis",
    "background": 2,
    "body": 27,
    "familiar": 104,
    "head": 237,
    "prop": 249,
    "rune": 290
  },
  {
    "idx": 4352,
    "name": "Enchanter Daria of the Heath",
    "background": 2,
    "body": 32,
    "familiar": 88,
    "head": 198,
    "prop": 258,
    "rune": 302
  },
  {
    "idx": 4353,
    "name": "Mystic Ravana of the Capital",
    "background": 1,
    "body": 74,
    "familiar": 119,
    "head": 207,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 4354,
    "name": "Conjurer Kobold of the River",
    "background": 0,
    "body": 82,
    "familiar": 114,
    "head": 178,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 4355,
    "name": "Voodoo Priest Lucien of the Psychic Leap",
    "background": 0,
    "body": 10,
    "familiar": 90,
    "head": 149,
    "prop": 261,
    "rune": 297
  },
  {
    "idx": 4356,
    "name": "Runecaster Cullen of the Mount",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 207,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 4357,
    "name": "Sorcerer Ifran of the Brambles",
    "background": 3,
    "body": 15,
    "familiar": 101,
    "head": 142,
    "prop": 317,
    "rune": 292
  },
  {
    "idx": 4358,
    "name": "Ghost Eater Ivy of the Hills",
    "background": 0,
    "body": 21,
    "familiar": 88,
    "head": 176,
    "prop": 254,
    "rune": 285
  },
  {
    "idx": 4359,
    "name": "Archmagus Pumlo of the Havens",
    "background": 2,
    "body": 52,
    "familiar": 90,
    "head": 211,
    "prop": 254,
    "rune": 293
  },
  {
    "idx": 4360,
    "name": "Merlon of Limbo",
    "background": 1,
    "body": 86,
    "familiar": 97,
    "head": 226,
    "prop": 265,
    "rune": 302
  },
  {
    "idx": 4361,
    "name": "Adept Sarah of the Moors",
    "background": 3,
    "body": 34,
    "familiar": 101,
    "head": 139,
    "prop": 249,
    "rune": 282
  },
  {
    "idx": 4362,
    "name": "Sorcerer Moloch of Limbo",
    "background": 1,
    "body": 86,
    "familiar": 90,
    "head": 193,
    "prop": 249,
    "rune": 301
  },
  {
    "idx": 4363,
    "name": "Clairvoyant Merlon of the Court",
    "background": 1,
    "body": 40,
    "familiar": 95,
    "head": 160,
    "prop": 329,
    "rune": 302
  },
  {
    "idx": 4364,
    "name": "Azahl of the Reach",
    "background": 0,
    "body": 82,
    "familiar": 109,
    "head": 228,
    "prop": 316,
    "rune": 290
  },
  {
    "idx": 4365,
    "name": "Summoner Jabir of the Mount",
    "background": 1,
    "body": 49,
    "familiar": 110,
    "head": 142,
    "prop": 254,
    "rune": 303
  },
  {
    "idx": 4366,
    "name": "Sage Hadrien of the Hall",
    "background": 2,
    "body": 26,
    "familiar": 109,
    "head": 231,
    "prop": 245,
    "rune": 294
  },
  {
    "idx": 4367,
    "name": "Enchanter Miyo of the Hollow",
    "background": 3,
    "body": 39,
    "familiar": 95,
    "head": 126,
    "prop": 265,
    "rune": 293
  },
  {
    "idx": 4368,
    "name": "Conjurer Faye of the Wood",
    "background": 2,
    "body": 82,
    "familiar": 115,
    "head": 190,
    "prop": 273,
    "rune": 296
  },
  {
    "idx": 4369,
    "name": "Enchanter Daria of the Circle",
    "background": 0,
    "body": 30,
    "familiar": 106,
    "head": 131,
    "prop": 268,
    "rune": 296
  },
  {
    "idx": 4370,
    "name": "Apollo of the Riviera",
    "background": 2,
    "body": 84,
    "familiar": 99,
    "head": 174,
    "prop": 315,
    "rune": 303
  },
  {
    "idx": 4371,
    "name": "Enchanter Layla of Arcadia",
    "background": 0,
    "body": 32,
    "familiar": 88,
    "head": 187,
    "prop": 270,
    "rune": 289
  },
  {
    "idx": 4372,
    "name": "Null Mage Drusilla of the Oasis",
    "background": 1,
    "body": 5,
    "familiar": 114,
    "head": 209,
    "prop": 330,
    "rune": 7777
  },
  {
    "idx": 4373,
    "name": "Magus Behemoth of the Gnostics",
    "background": 3,
    "body": 11,
    "familiar": 88,
    "head": 193,
    "prop": 263,
    "rune": 282
  },
  {
    "idx": 4374,
    "name": "Ghost Eater Demos of the Hall",
    "background": 2,
    "body": 40,
    "familiar": 97,
    "head": 158,
    "prop": 332,
    "rune": 283
  },
  {
    "idx": 4375,
    "name": "Druid Orpheus of the Forest",
    "background": 0,
    "body": 19,
    "familiar": 117,
    "head": 174,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 4376,
    "name": "Archmagus  of the Riviera",
    "background": 1,
    "body": 14,
    "familiar": 101,
    "head": 195,
    "prop": 316,
    "rune": 296
  },
  {
    "idx": 4377,
    "name": "Magus Jahid of the Realm",
    "background": 1,
    "body": 24,
    "familiar": 119,
    "head": 222,
    "prop": 258,
    "rune": 297
  },
  {
    "idx": 4378,
    "name": "Archmagus Crowley of the Plains",
    "background": 3,
    "body": 14,
    "familiar": 88,
    "head": 230,
    "prop": 316,
    "rune": 282
  },
  {
    "idx": 4379,
    "name": "Sorcerer Alizam of the Oasis",
    "background": 3,
    "body": 61,
    "familiar": 94,
    "head": 237,
    "prop": 262,
    "rune": 296
  },
  {
    "idx": 4380,
    "name": "Runecaster Tundror of the Berg",
    "background": 1,
    "body": 73,
    "familiar": 95,
    "head": 220,
    "prop": 327,
    "rune": 286
  },
  {
    "idx": 4381,
    "name": "Druid Faye of El Dorado",
    "background": 1,
    "body": 26,
    "familiar": 107,
    "head": 190,
    "prop": 265,
    "rune": 295
  },
  {
    "idx": 4382,
    "name": "Witch Stag of the Road",
    "background": 1,
    "body": 14,
    "familiar": 111,
    "head": 167,
    "prop": 321,
    "rune": 296
  },
  {
    "idx": 4383,
    "name": "Adept Izible of the Villa",
    "background": 0,
    "body": 46,
    "familiar": 103,
    "head": 200,
    "prop": 332,
    "rune": 288
  },
  {
    "idx": 4384,
    "name": "Pyromancer Yan of the Valley",
    "background": 1,
    "body": 34,
    "familiar": 107,
    "head": 180,
    "prop": 255,
    "rune": 288
  },
  {
    "idx": 4385,
    "name": "Sorcerer Eden of the Grotto",
    "background": 0,
    "body": 42,
    "familiar": 103,
    "head": 192,
    "prop": 271,
    "rune": 282
  },
  {
    "idx": 4386,
    "name": "Battle Mage Magnus of the Heath",
    "background": 3,
    "body": 15,
    "familiar": 91,
    "head": 213,
    "prop": 276,
    "rune": 282
  },
  {
    "idx": 4387,
    "name": "Archmagus Nikolas of the Bastion",
    "background": 0,
    "body": 48,
    "familiar": 93,
    "head": 202,
    "prop": 325,
    "rune": 284
  },
  {
    "idx": 4388,
    "name": "Enchanter Sonja of Arcadia",
    "background": 1,
    "body": 21,
    "familiar": 101,
    "head": 190,
    "prop": 306,
    "rune": 287
  },
  {
    "idx": 4389,
    "name": "Enchanter Lamia of the Plains",
    "background": 0,
    "body": 44,
    "familiar": 107,
    "head": 191,
    "prop": 271,
    "rune": 293
  },
  {
    "idx": 4390,
    "name": "Witch Ambrosia of the Plains",
    "background": 2,
    "body": 33,
    "familiar": 115,
    "head": 223,
    "prop": 271,
    "rune": 292
  },
  {
    "idx": 4391,
    "name": "Enchanter Jadis of the Hills",
    "background": 3,
    "body": 38,
    "familiar": 101,
    "head": 132,
    "prop": 265,
    "rune": 298
  },
  {
    "idx": 4392,
    "name": "Druid Rainman",
    "background": 3,
    "body": 26,
    "familiar": 108,
    "head": 169,
    "prop": 264,
    "rune": 287
  },
  {
    "idx": 4393,
    "name": "Voodoo Priest Hugo of the Bastion",
    "background": 1,
    "body": 17,
    "familiar": 104,
    "head": 149,
    "prop": 320,
    "rune": 292
  },
  {
    "idx": 4394,
    "name": "Thana of the Hills",
    "background": 2,
    "body": 39,
    "familiar": 88,
    "head": 139,
    "prop": 258,
    "rune": 300
  },
  {
    "idx": 4395,
    "name": "Hedge Wizard Iprix of Dreams",
    "background": 2,
    "body": 54,
    "familiar": 111,
    "head": 228,
    "prop": 340,
    "rune": 288
  },
  {
    "idx": 4396,
    "name": "Astrid of the Mount",
    "background": 1,
    "body": 63,
    "familiar": 89,
    "head": 208,
    "prop": 248,
    "rune": 296
  },
  {
    "idx": 4397,
    "name": "Illusionist Drusilla of the Hall",
    "background": 3,
    "body": 26,
    "familiar": 115,
    "head": 166,
    "prop": 273,
    "rune": 292
  },
  {
    "idx": 4398,
    "name": "Sorcerer Milo of the Rock",
    "background": 2,
    "body": 60,
    "familiar": 112,
    "head": 153,
    "prop": 315,
    "rune": 296
  },
  {
    "idx": 4399,
    "name": "Arch-Magician Naoki of the Wood",
    "background": 1,
    "body": 22,
    "familiar": 88,
    "head": 126,
    "prop": 334,
    "rune": 297
  },
  {
    "idx": 4400,
    "name": "Enchanter Celeste of the Field",
    "background": 2,
    "body": 22,
    "familiar": 97,
    "head": 130,
    "prop": 261,
    "rune": 296
  },
  {
    "idx": 4401,
    "name": "Arch-Magician Aleister of the Quantum Downs",
    "background": 2,
    "body": 75,
    "familiar": 90,
    "head": 212,
    "prop": 325,
    "rune": 283
  },
  {
    "idx": 4402,
    "name": "Aleister of Elysium",
    "background": 2,
    "body": 63,
    "familiar": 108,
    "head": 185,
    "prop": 309,
    "rune": 288
  },
  {
    "idx": 4403,
    "name": "Enchanter Gary of Avalon",
    "background": 0,
    "body": 54,
    "familiar": 115,
    "head": 216,
    "prop": 316,
    "rune": 7777
  },
  {
    "idx": 4404,
    "name": "Battle Mage Borak of the Ether",
    "background": 1,
    "body": 10,
    "familiar": 115,
    "head": 216,
    "prop": 305,
    "rune": 292
  },
  {
    "idx": 4405,
    "name": "Enchanter Artis of the Wold",
    "background": 2,
    "body": 35,
    "familiar": 101,
    "head": 156,
    "prop": 305,
    "rune": 283
  },
  {
    "idx": 4406,
    "name": "Sorcerer Iprix of the Bastion",
    "background": 3,
    "body": 77,
    "familiar": 103,
    "head": 141,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 4407,
    "name": "Hedge Wizard Arabella of the Brambles",
    "background": 1,
    "body": 38,
    "familiar": 104,
    "head": 191,
    "prop": 312,
    "rune": 293
  },
  {
    "idx": 4408,
    "name": "Sorcerer Hadrien of the Fey",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 233,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 4409,
    "name": "Hedge Wizard Lucinda of the Road",
    "background": 1,
    "body": 33,
    "familiar": 105,
    "head": 223,
    "prop": 273,
    "rune": 7777
  },
  {
    "idx": 4410,
    "name": "Druid Celeste of El Dorado",
    "background": 2,
    "body": 74,
    "familiar": 115,
    "head": 208,
    "prop": 316,
    "rune": 291
  },
  {
    "idx": 4411,
    "name": "Hedge Wizard Uvlius of the Rock",
    "background": 0,
    "body": 5,
    "familiar": 95,
    "head": 232,
    "prop": 312,
    "rune": 284
  },
  {
    "idx": 4412,
    "name": "Sorcerer Abbadon of the Cosmos",
    "background": 0,
    "body": 68,
    "familiar": 88,
    "head": 194,
    "prop": 335,
    "rune": 285
  },
  {
    "idx": 4413,
    "name": "Artificer Soran of the Morning Star",
    "background": 1,
    "body": 87,
    "familiar": 7777,
    "head": 229,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 4414,
    "name": "Archmagus Remus of the Riviera",
    "background": 0,
    "body": 18,
    "familiar": 116,
    "head": 162,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 4415,
    "name": "Spellsinger Lux of the Sea",
    "background": 2,
    "body": 57,
    "familiar": 108,
    "head": 233,
    "prop": 247,
    "rune": 296
  },
  {
    "idx": 4416,
    "name": "Artificer Artis of the Forest",
    "background": 0,
    "body": 39,
    "familiar": 88,
    "head": 135,
    "prop": 261,
    "rune": 303
  },
  {
    "idx": 4417,
    "name": "Magus Shizu of the Wood",
    "background": 0,
    "body": 44,
    "familiar": 120,
    "head": 126,
    "prop": 263,
    "rune": 293
  },
  {
    "idx": 4418,
    "name": "Basil of the Lake",
    "background": 3,
    "body": 13,
    "familiar": 95,
    "head": 214,
    "prop": 271,
    "rune": 292
  },
  {
    "idx": 4419,
    "name": "Eden of the Wood",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 228,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 4420,
    "name": "Arch-Magician Gil of the Court",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 207,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 4421,
    "name": "Magus Aleister of the Wold",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 230,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 4422,
    "name": "Enchanter Thana of Avalon",
    "background": 1,
    "body": 62,
    "familiar": 115,
    "head": 190,
    "prop": 281,
    "rune": 298
  },
  {
    "idx": 4423,
    "name": "Magus Solomon of the Valley",
    "background": 0,
    "body": 42,
    "familiar": 7777,
    "head": 192,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 4424,
    "name": "Battle Mage Borak of the Veil",
    "background": 0,
    "body": 67,
    "familiar": 104,
    "head": 173,
    "prop": 312,
    "rune": 298
  },
  {
    "idx": 4425,
    "name": "Summoner Jig of the Citadel",
    "background": 2,
    "body": 26,
    "familiar": 108,
    "head": 235,
    "prop": 254,
    "rune": 304
  },
  {
    "idx": 4426,
    "name": "Daria of the Field",
    "background": 1,
    "body": 36,
    "familiar": 107,
    "head": 132,
    "prop": 316,
    "rune": 286
  },
  {
    "idx": 4427,
    "name": "Mystic Nolan of the Villa",
    "background": 2,
    "body": 77,
    "familiar": 94,
    "head": 173,
    "prop": 249,
    "rune": 283
  },
  {
    "idx": 4428,
    "name": "Archmagus Eronin of El Dorado",
    "background": 3,
    "body": 77,
    "familiar": 95,
    "head": 150,
    "prop": 267,
    "rune": 302
  },
  {
    "idx": 4429,
    "name": "Chronomancer Lei of the Cosmos",
    "background": 2,
    "body": 11,
    "familiar": 111,
    "head": 180,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 4430,
    "name": "Light Mage Ilu of the Sun",
    "background": 0,
    "body": 5,
    "familiar": 117,
    "head": 170,
    "prop": 320,
    "rune": 301
  },
  {
    "idx": 4431,
    "name": "Battlemage Isaac of the Marsh",
    "background": 1,
    "body": 84,
    "familiar": 120,
    "head": 189,
    "prop": 309,
    "rune": 302
  },
  {
    "idx": 4432,
    "name": "Lux of the Citadel",
    "background": 1,
    "body": 74,
    "familiar": 7777,
    "head": 153,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 4433,
    "name": "Battle Mage Danny of the Sun",
    "background": 1,
    "body": 5,
    "familiar": 123,
    "head": 217,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 4434,
    "name": "Witch Drusilla of the Riviera",
    "background": 2,
    "body": 43,
    "familiar": 104,
    "head": 155,
    "prop": 312,
    "rune": 291
  },
  {
    "idx": 4435,
    "name": "Witch Calypso of the Wood",
    "background": 1,
    "body": 35,
    "familiar": 110,
    "head": 166,
    "prop": 314,
    "rune": 284
  },
  {
    "idx": 4436,
    "name": "Archmagus Basil of the Astral Plane",
    "background": 2,
    "body": 24,
    "familiar": 120,
    "head": 197,
    "prop": 334,
    "rune": 296
  },
  {
    "idx": 4437,
    "name": "Battle Mage Bayard of the Pit",
    "background": 2,
    "body": 86,
    "familiar": 94,
    "head": 203,
    "prop": 247,
    "rune": 286
  },
  {
    "idx": 4438,
    "name": "Arch-Magician Arabella of the Cosmos",
    "background": 3,
    "body": 67,
    "familiar": 105,
    "head": 132,
    "prop": 324,
    "rune": 303
  },
  {
    "idx": 4439,
    "name": "Hedge Wizard Baird of the Citadel",
    "background": 1,
    "body": 46,
    "familiar": 120,
    "head": 165,
    "prop": 319,
    "rune": 287
  },
  {
    "idx": 4440,
    "name": "Artis of the Wild",
    "background": 0,
    "body": 39,
    "familiar": 88,
    "head": 156,
    "prop": 325,
    "rune": 303
  },
  {
    "idx": 4441,
    "name": "Archmagus Argus of the Wold",
    "background": 3,
    "body": 41,
    "familiar": 114,
    "head": 186,
    "prop": 314,
    "rune": 300
  },
  {
    "idx": 4442,
    "name": "Illusionist Astrid of the Havens",
    "background": 3,
    "body": 54,
    "familiar": 104,
    "head": 187,
    "prop": 246,
    "rune": 304
  },
  {
    "idx": 4443,
    "name": "Battle Mage Homer of the Field",
    "background": 2,
    "body": 43,
    "familiar": 116,
    "head": 206,
    "prop": 340,
    "rune": 300
  },
  {
    "idx": 4444,
    "name": "Cleric Lumos of the Riviera",
    "background": 0,
    "body": 41,
    "familiar": 111,
    "head": 226,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 4445,
    "name": "Pyromancer Daria of the Heath",
    "background": 0,
    "body": 12,
    "familiar": 108,
    "head": 131,
    "prop": 309,
    "rune": 283
  },
  {
    "idx": 4446,
    "name": "Thaumaturge Basil of the Arctic",
    "background": 0,
    "body": 65,
    "familiar": 105,
    "head": 185,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 4447,
    "name": "Magus Hagatha of the River",
    "background": 1,
    "body": 21,
    "familiar": 88,
    "head": 176,
    "prop": 249,
    "rune": 287
  },
  {
    "idx": 4448,
    "name": "Necromancer Voidoth of Mu",
    "background": 2,
    "body": 68,
    "familiar": 96,
    "head": 242,
    "prop": 322,
    "rune": 300
  },
  {
    "idx": 4449,
    "name": "Witch Darick of the Plains",
    "background": 3,
    "body": 18,
    "familiar": 99,
    "head": 133,
    "prop": 321,
    "rune": 293
  },
  {
    "idx": 4450,
    "name": "Hedge Wizard Kobold of the Toadstools",
    "background": 0,
    "body": 30,
    "familiar": 119,
    "head": 171,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 4451,
    "name": "Shadow Mage Pandora of the Wood",
    "background": 0,
    "body": 84,
    "familiar": 105,
    "head": 208,
    "prop": 248,
    "rune": 297
  },
  {
    "idx": 4452,
    "name": "Artificer Sabina of the Mountain",
    "background": 1,
    "body": 39,
    "familiar": 116,
    "head": 166,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 4453,
    "name": "Illusionist Artis of the Road",
    "background": 2,
    "body": 34,
    "familiar": 120,
    "head": 131,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 4454,
    "name": "Archmagus Uvlius of the Woodlands",
    "background": 0,
    "body": 30,
    "familiar": 7777,
    "head": 141,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 4455,
    "name": "Arch-Magician Goliath of the Mountain",
    "background": 1,
    "body": 15,
    "familiar": 89,
    "head": 173,
    "prop": 321,
    "rune": 294
  },
  {
    "idx": 4456,
    "name": "Archmagus Argus of the Wood",
    "background": 2,
    "body": 15,
    "familiar": 97,
    "head": 215,
    "prop": 276,
    "rune": 291
  },
  {
    "idx": 4457,
    "name": "Enchanter Calista of the Capital",
    "background": 1,
    "body": 48,
    "familiar": 103,
    "head": 131,
    "prop": 338,
    "rune": 302
  },
  {
    "idx": 4458,
    "name": "Milton of the Wold",
    "background": 1,
    "body": 43,
    "familiar": 109,
    "head": 141,
    "prop": 266,
    "rune": 292
  },
  {
    "idx": 4459,
    "name": "Battle Mage Baird of the Plains",
    "background": 1,
    "body": 19,
    "familiar": 119,
    "head": 183,
    "prop": 320,
    "rune": 288
  },
  {
    "idx": 4460,
    "name": "Evoker Hadrien of the Ether",
    "background": 0,
    "body": 9,
    "familiar": 103,
    "head": 233,
    "prop": 339,
    "rune": 287
  },
  {
    "idx": 4461,
    "name": "Ixar of the Brambles",
    "background": 1,
    "body": 42,
    "familiar": 123,
    "head": 141,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 4462,
    "name": "Chaos Mage Zaros of the Platonic Shadow",
    "background": 0,
    "body": 83,
    "familiar": 93,
    "head": 189,
    "prop": 309,
    "rune": 290
  },
  {
    "idx": 4463,
    "name": "Cartomancer Sarah of the Marsh",
    "background": 0,
    "body": 22,
    "familiar": 93,
    "head": 130,
    "prop": 251,
    "rune": 296
  },
  {
    "idx": 4464,
    "name": "Archmagus  of the Hall",
    "background": 2,
    "body": 40,
    "familiar": 88,
    "head": 186,
    "prop": 308,
    "rune": 290
  },
  {
    "idx": 4465,
    "name": "Necromancer Abaddon of the Hall",
    "background": 2,
    "body": 77,
    "familiar": 104,
    "head": 194,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 4466,
    "name": "Alchemist Hothor of the Road",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 217,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 4467,
    "name": "Artificer Sonja of the Mountain",
    "background": 3,
    "body": 32,
    "familiar": 93,
    "head": 187,
    "prop": 258,
    "rune": 303
  },
  {
    "idx": 4468,
    "name": "Enchanter Victoria of the Hall",
    "background": 0,
    "body": 74,
    "familiar": 96,
    "head": 208,
    "prop": 263,
    "rune": 284
  },
  {
    "idx": 4469,
    "name": "Artificer Samael of the Cosmos",
    "background": 0,
    "body": 8,
    "familiar": 105,
    "head": 194,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4470,
    "name": "Sorcerer Jerret of the Moors",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 214,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 4471,
    "name": "Arch-Magician Molek of the Marsh",
    "background": 2,
    "body": 42,
    "familiar": 97,
    "head": 193,
    "prop": 280,
    "rune": 293
  },
  {
    "idx": 4472,
    "name": "Udor of the Morning Star",
    "background": 0,
    "body": 85,
    "familiar": 94,
    "head": 197,
    "prop": 251,
    "rune": 285
  },
  {
    "idx": 4473,
    "name": "Pyromancer Calypso of the Heath",
    "background": 0,
    "body": 37,
    "familiar": 120,
    "head": 155,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 4474,
    "name": "Alchemist Iprix of the Valley",
    "background": 2,
    "body": 79,
    "familiar": 90,
    "head": 192,
    "prop": 268,
    "rune": 297
  },
  {
    "idx": 4475,
    "name": "Sorcerer Merlon of Dreams",
    "background": 1,
    "body": 54,
    "familiar": 120,
    "head": 238,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 4476,
    "name": "Adept Merlon of the Gnostics",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 174,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 4477,
    "name": "Evil Arcanist Black Phillip of the Gnostics",
    "background": 1,
    "body": 9,
    "familiar": 93,
    "head": 136,
    "prop": 247,
    "rune": 297
  },
  {
    "idx": 4478,
    "name": "Sage Cromwell of the Plains",
    "background": 0,
    "body": 79,
    "familiar": 89,
    "head": 218,
    "prop": 316,
    "rune": 287
  },
  {
    "idx": 4479,
    "name": "Archmagus Soran of Elysium",
    "background": 1,
    "body": 50,
    "familiar": 7777,
    "head": 192,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 4480,
    "name": "Battle Mage Dante of the Hall",
    "background": 0,
    "body": 74,
    "familiar": 109,
    "head": 217,
    "prop": 280,
    "rune": 288
  },
  {
    "idx": 4481,
    "name": "Magus Ilyas of the Sun",
    "background": 2,
    "body": 5,
    "familiar": 94,
    "head": 237,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 4482,
    "name": "Illusionist Ixar of the Heath",
    "background": 0,
    "body": 15,
    "familiar": 119,
    "head": 214,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 4483,
    "name": "Witch Lamia of the Hills",
    "background": 1,
    "body": 82,
    "familiar": 108,
    "head": 159,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 4484,
    "name": "Sorcerer Alizam of the Wood",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 164,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 4485,
    "name": "Voodoo Priest Jeldor of the Dunes",
    "background": 1,
    "body": 5,
    "familiar": 7777,
    "head": 153,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 4486,
    "name": "Battle Mage Tundror of the Bastion",
    "background": 0,
    "body": 76,
    "familiar": 110,
    "head": 206,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 4487,
    "name": "Enchanter Carly of the Obelisk",
    "background": 0,
    "body": 50,
    "familiar": 112,
    "head": 208,
    "prop": 323,
    "rune": 300
  },
  {
    "idx": 4488,
    "name": "Conjurer Larissa of the Belfry",
    "background": 1,
    "body": 54,
    "familiar": 105,
    "head": 208,
    "prop": 273,
    "rune": 283
  },
  {
    "idx": 4489,
    "name": "Diviner Crobas of the Mount",
    "background": 2,
    "body": 54,
    "familiar": 109,
    "head": 125,
    "prop": 245,
    "rune": 303
  },
  {
    "idx": 4490,
    "name": "Artificer Mushy of the Mountain",
    "background": 0,
    "body": 43,
    "familiar": 93,
    "head": 195,
    "prop": 261,
    "rune": 303
  },
  {
    "idx": 4491,
    "name": "Battle Mage Malthus from the Abyss",
    "background": 0,
    "body": 87,
    "familiar": 119,
    "head": 204,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 4492,
    "name": "Shaman Ilyas of the Citadel",
    "background": 0,
    "body": 76,
    "familiar": 114,
    "head": 142,
    "prop": 323,
    "rune": 283
  },
  {
    "idx": 4493,
    "name": "Enchanter Iprix of the Astral Plane",
    "background": 0,
    "body": 11,
    "familiar": 7777,
    "head": 162,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 4494,
    "name": "Ice Mage Angus of the Cold",
    "background": 1,
    "body": 65,
    "familiar": 105,
    "head": 165,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 4495,
    "name": "Cassiopeia of the Carnival",
    "background": 1,
    "body": 30,
    "familiar": 115,
    "head": 190,
    "prop": 268,
    "rune": 291
  },
  {
    "idx": 4496,
    "name": "Hydromancer Meloogen of Arcadia",
    "background": 0,
    "body": 12,
    "familiar": 90,
    "head": 154,
    "prop": 314,
    "rune": 295
  },
  {
    "idx": 4497,
    "name": "Artificer Goliath of the Forest",
    "background": 1,
    "body": 15,
    "familiar": 89,
    "head": 218,
    "prop": 318,
    "rune": 288
  },
  {
    "idx": 4498,
    "name": "Sorcerer Zelroth of the Desert",
    "background": 0,
    "body": 5,
    "familiar": 7777,
    "head": 192,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 4499,
    "name": "Magus Althea of the Valley",
    "background": 2,
    "body": 39,
    "familiar": 120,
    "head": 135,
    "prop": 263,
    "rune": 291
  },
  {
    "idx": 4500,
    "name": "Wizard Nixie of the Valley",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 200,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 4501,
    "name": "Cleric Carly of the Field",
    "background": 1,
    "body": 35,
    "familiar": 7777,
    "head": 187,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 4502,
    "name": "Ice Mage Victor of the Expanse",
    "background": 1,
    "body": 73,
    "familiar": 104,
    "head": 179,
    "prop": 329,
    "rune": 284
  },
  {
    "idx": 4503,
    "name": "Shaman Tundror of the Hollow",
    "background": 0,
    "body": 23,
    "familiar": 111,
    "head": 133,
    "prop": 340,
    "rune": 284
  },
  {
    "idx": 4504,
    "name": "Witch Shivra of the Mist",
    "background": 3,
    "body": 49,
    "familiar": 104,
    "head": 166,
    "prop": 273,
    "rune": 291
  },
  {
    "idx": 4505,
    "name": "Archmagus Allistair of the Heath",
    "background": 0,
    "body": 12,
    "familiar": 115,
    "head": 202,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 4506,
    "name": "Druid Angus from the Abyss",
    "background": 0,
    "body": 86,
    "familiar": 111,
    "head": 165,
    "prop": 316,
    "rune": 302
  },
  {
    "idx": 4507,
    "name": "Voodoo Priest Louis of the Sun",
    "background": 2,
    "body": 61,
    "familiar": 108,
    "head": 149,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 4508,
    "name": "Shaman Jameel of the Sun",
    "background": 0,
    "body": 58,
    "familiar": 7777,
    "head": 219,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 4509,
    "name": "Alchemist Cairon of the River",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 215,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 4510,
    "name": "Runecaster Bullock of the Dunes",
    "background": 0,
    "body": 5,
    "familiar": 109,
    "head": 193,
    "prop": 249,
    "rune": 283
  },
  {
    "idx": 4511,
    "name": "Hadrien of the Valley",
    "background": 1,
    "body": 54,
    "familiar": 123,
    "head": 238,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 4512,
    "name": "Enchanter Merlon of the Cosmos",
    "background": 0,
    "body": 52,
    "familiar": 112,
    "head": 212,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 4513,
    "name": "Artificer Bobbin of the Atheneum",
    "background": 0,
    "body": 54,
    "familiar": 105,
    "head": 201,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 4514,
    "name": "Magus Angus of the Valley",
    "background": 2,
    "body": 15,
    "familiar": 104,
    "head": 188,
    "prop": 262,
    "rune": 294
  },
  {
    "idx": 4515,
    "name": "Battle Mage Homer of the Keep",
    "background": 1,
    "body": 50,
    "familiar": 89,
    "head": 213,
    "prop": 312,
    "rune": 293
  },
  {
    "idx": 4516,
    "name": "Battle Mage Danny of the Atheneum",
    "background": 1,
    "body": 50,
    "familiar": 97,
    "head": 217,
    "prop": 308,
    "rune": 304
  },
  {
    "idx": 4517,
    "name": "Adept Umber of the Wood",
    "background": 0,
    "body": 15,
    "familiar": 105,
    "head": 167,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 4518,
    "name": "Arcanist Galatea of the Court",
    "background": 2,
    "body": 48,
    "familiar": 119,
    "head": 187,
    "prop": 332,
    "rune": 293
  },
  {
    "idx": 4519,
    "name": "Hedge Wizard Luther of Limbo",
    "background": 0,
    "body": 85,
    "familiar": 123,
    "head": 177,
    "prop": 265,
    "rune": 296
  },
  {
    "idx": 4520,
    "name": "Chronomancer Oiq of the Morning Star",
    "background": 1,
    "body": 85,
    "familiar": 7777,
    "head": 235,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 4521,
    "name": "Solomon of the Field",
    "background": 1,
    "body": 12,
    "familiar": 123,
    "head": 147,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 4522,
    "name": "Soran of the Brambles",
    "background": 1,
    "body": 23,
    "familiar": 90,
    "head": 202,
    "prop": 254,
    "rune": 300
  },
  {
    "idx": 4523,
    "name": "Hydromancer Bogey of Xanadu",
    "background": 3,
    "body": 8,
    "familiar": 99,
    "head": 235,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 4524,
    "name": "Sky Master Rook of the Keep",
    "background": 0,
    "body": 40,
    "familiar": 105,
    "head": 144,
    "prop": 265,
    "rune": 290
  },
  {
    "idx": 4525,
    "name": "Hydromancer Jiang of the Ice",
    "background": 0,
    "body": 73,
    "familiar": 7777,
    "head": 236,
    "prop": 314,
    "rune": 283
  },
  {
    "idx": 4526,
    "name": "Archmagus Hadrien of the Cosmos",
    "background": 2,
    "body": 10,
    "familiar": 99,
    "head": 185,
    "prop": 318,
    "rune": 283
  },
  {
    "idx": 4527,
    "name": "Mystic Ramiz of the Dunes",
    "background": 2,
    "body": 58,
    "familiar": 94,
    "head": 237,
    "prop": 327,
    "rune": 284
  },
  {
    "idx": 4528,
    "name": "Diabolist Sarah of the Steppe",
    "background": 2,
    "body": 37,
    "familiar": 104,
    "head": 132,
    "prop": 310,
    "rune": 297
  },
  {
    "idx": 4529,
    "name": "Hedge Wizard Beyna of the Ether",
    "background": 2,
    "body": 68,
    "familiar": 93,
    "head": 187,
    "prop": 258,
    "rune": 303
  },
  {
    "idx": 4530,
    "name": "Jadis of the Steppe",
    "background": 3,
    "body": 37,
    "familiar": 104,
    "head": 139,
    "prop": 312,
    "rune": 299
  },
  {
    "idx": 4531,
    "name": "Ice Mage Dutorn of the Tundra",
    "background": 0,
    "body": 65,
    "familiar": 116,
    "head": 129,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 4532,
    "name": "Archmagus Jerret of the Wood",
    "background": 0,
    "body": 44,
    "familiar": 105,
    "head": 185,
    "prop": 273,
    "rune": 296
  },
  {
    "idx": 4533,
    "name": "Battle Mage Baird of the Field",
    "background": 1,
    "body": 15,
    "familiar": 95,
    "head": 133,
    "prop": 254,
    "rune": 288
  },
  {
    "idx": 4534,
    "name": "Enchanter Astrid of the Salt",
    "background": 1,
    "body": 57,
    "familiar": 119,
    "head": 135,
    "prop": 320,
    "rune": 296
  },
  {
    "idx": 4535,
    "name": "Magus Wazir of the Marsh",
    "background": 3,
    "body": 43,
    "familiar": 120,
    "head": 164,
    "prop": 305,
    "rune": 283
  },
  {
    "idx": 4536,
    "name": "Oberon of the Forest",
    "background": 0,
    "body": 23,
    "familiar": 112,
    "head": 231,
    "prop": 246,
    "rune": 294
  },
  {
    "idx": 4537,
    "name": "Sorcerer Jameel of the Desert",
    "background": 3,
    "body": 5,
    "familiar": 94,
    "head": 219,
    "prop": 247,
    "rune": 299
  },
  {
    "idx": 4538,
    "name": "Archmagus Chooki of the Forest",
    "background": 1,
    "body": 45,
    "familiar": 7777,
    "head": 164,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 4539,
    "name": "Holy Monk Chandler of the Bastion",
    "background": 1,
    "body": 48,
    "familiar": 97,
    "head": 125,
    "prop": 249,
    "rune": 297
  },
  {
    "idx": 4540,
    "name": "Magus Jabir of Xanadu",
    "background": 1,
    "body": 24,
    "familiar": 115,
    "head": 237,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 4541,
    "name": "Illusionist Corvin of the Morning Star",
    "background": 1,
    "body": 87,
    "familiar": 123,
    "head": 144,
    "prop": 273,
    "rune": 290
  },
  {
    "idx": 4542,
    "name": "Hedge Wizard Ursula of the Brambles",
    "background": 3,
    "body": 38,
    "familiar": 104,
    "head": 155,
    "prop": 276,
    "rune": 300
  },
  {
    "idx": 4543,
    "name": "Alchemist Mina of the Salt",
    "background": 3,
    "body": 80,
    "familiar": 93,
    "head": 187,
    "prop": 270,
    "rune": 299
  },
  {
    "idx": 4544,
    "name": "Sage Corvin of the Temple",
    "background": 0,
    "body": 50,
    "familiar": 107,
    "head": 144,
    "prop": 332,
    "rune": 285
  },
  {
    "idx": 4545,
    "name": "Adept Nolan of the Mist",
    "background": 2,
    "body": 50,
    "familiar": 94,
    "head": 216,
    "prop": 323,
    "rune": 304
  },
  {
    "idx": 4546,
    "name": "Solar Mage Ulysse of the Mount",
    "background": 1,
    "body": 50,
    "familiar": 120,
    "head": 183,
    "prop": 309,
    "rune": 294
  },
  {
    "idx": 4547,
    "name": "Sorcerer Lumos of the Sun",
    "background": 0,
    "body": 60,
    "familiar": 110,
    "head": 127,
    "prop": 261,
    "rune": 304
  },
  {
    "idx": 4548,
    "name": "Arcanist Alizam of the Veil",
    "background": 0,
    "body": 28,
    "familiar": 116,
    "head": 164,
    "prop": 250,
    "rune": 287
  },
  {
    "idx": 4549,
    "name": "Shaman Aiko of the Reach",
    "background": 2,
    "body": 34,
    "familiar": 101,
    "head": 126,
    "prop": 334,
    "rune": 287
  },
  {
    "idx": 4550,
    "name": "Enchanter Arabella of the Villa",
    "background": 2,
    "body": 76,
    "familiar": 115,
    "head": 139,
    "prop": 315,
    "rune": 302
  },
  {
    "idx": 4551,
    "name": "Alchemist Zubin of the Toadstools",
    "background": 3,
    "body": 28,
    "familiar": 114,
    "head": 227,
    "prop": 267,
    "rune": 285
  },
  {
    "idx": 4552,
    "name": "Illusionist Gunthor of the Hollow",
    "background": 2,
    "body": 79,
    "familiar": 103,
    "head": 177,
    "prop": 273,
    "rune": 302
  },
  {
    "idx": 4553,
    "name": "Pyromancer Eden",
    "background": 1,
    "body": 67,
    "familiar": 116,
    "head": 153,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 4554,
    "name": "Necromancer Diabolos of the Wild",
    "background": 0,
    "body": 23,
    "familiar": 111,
    "head": 194,
    "prop": 321,
    "rune": 295
  },
  {
    "idx": 4555,
    "name": "Wild Mage Cassandra of the Swell",
    "background": 3,
    "body": 57,
    "familiar": 97,
    "head": 223,
    "prop": 321,
    "rune": 287
  },
  {
    "idx": 4556,
    "name": "Arcanist Miyo of the Wood",
    "background": 1,
    "body": 17,
    "familiar": 120,
    "head": 126,
    "prop": 324,
    "rune": 301
  },
  {
    "idx": 4557,
    "name": "Battle Mage Goliath of the Hall",
    "background": 1,
    "body": 74,
    "familiar": 123,
    "head": 173,
    "prop": 263,
    "rune": 282
  },
  {
    "idx": 4558,
    "name": "Druid Lux of Elysium",
    "background": 3,
    "body": 50,
    "familiar": 97,
    "head": 160,
    "prop": 317,
    "rune": 301
  },
  {
    "idx": 4559,
    "name": "Cleric Ulysse of the Brambles",
    "background": 2,
    "body": 41,
    "familiar": 114,
    "head": 217,
    "prop": 338,
    "rune": 285
  },
  {
    "idx": 4560,
    "name": "Archmagus Oberon of the Gnostics",
    "background": 2,
    "body": 67,
    "familiar": 115,
    "head": 192,
    "prop": 262,
    "rune": 283
  },
  {
    "idx": 4561,
    "name": "Magus Qianfan of the Atheneum",
    "background": 3,
    "body": 6,
    "familiar": 112,
    "head": 236,
    "prop": 258,
    "rune": 299
  },
  {
    "idx": 4562,
    "name": "Archmagus Norix of the Wood",
    "background": 0,
    "body": 45,
    "familiar": 112,
    "head": 205,
    "prop": 339,
    "rune": 292
  },
  {
    "idx": 4563,
    "name": "Enchanter Zubin of the Sun",
    "background": 3,
    "body": 60,
    "familiar": 95,
    "head": 160,
    "prop": 251,
    "rune": 301
  },
  {
    "idx": 4564,
    "name": "Hedge Wizard Ursula of the Steppe",
    "background": 0,
    "body": 36,
    "familiar": 101,
    "head": 176,
    "prop": 265,
    "rune": 292
  },
  {
    "idx": 4565,
    "name": "Mystic Rita of the Wood",
    "background": 0,
    "body": 23,
    "familiar": 7777,
    "head": 155,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 4566,
    "name": "Magus Kazud of the Citadel",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 222,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 4567,
    "name": "of the Desert",
    "background": 3,
    "body": 61,
    "familiar": 90,
    "head": 215,
    "prop": 266,
    "rune": 287
  },
  {
    "idx": 4568,
    "name": "Arch-Magician Baptiste of Xanadu",
    "background": 0,
    "body": 67,
    "familiar": 103,
    "head": 179,
    "prop": 280,
    "rune": 291
  },
  {
    "idx": 4569,
    "name": "Chaos Mage Nala of the Keep",
    "background": 1,
    "body": 6,
    "familiar": 7777,
    "head": 140,
    "prop": 338,
    "rune": 286
  },
  {
    "idx": 4570,
    "name": "Archmagus Oberon of the Citadel",
    "background": 1,
    "body": 48,
    "familiar": 103,
    "head": 147,
    "prop": 254,
    "rune": 304
  },
  {
    "idx": 4571,
    "name": "Cleric Patch of the Keep",
    "background": 1,
    "body": 76,
    "familiar": 7777,
    "head": 171,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 4572,
    "name": "Fortune Teller Louis",
    "background": 1,
    "body": 74,
    "familiar": 123,
    "head": 149,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 4573,
    "name": "Sorcerer Davos of the Palms",
    "background": 2,
    "body": 27,
    "familiar": 116,
    "head": 127,
    "prop": 248,
    "rune": 294
  },
  {
    "idx": 4574,
    "name": "Alchemist Baozhai of the Wood",
    "background": 1,
    "body": 31,
    "familiar": 88,
    "head": 180,
    "prop": 270,
    "rune": 304
  },
  {
    "idx": 4575,
    "name": "Illusionist Ixar of the Gnostics",
    "background": 2,
    "body": 24,
    "familiar": 103,
    "head": 162,
    "prop": 246,
    "rune": 296
  },
  {
    "idx": 4576,
    "name": "Artificer Dutorn of the Road",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 188,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 4577,
    "name": "Hex Mage Ulysse of the Plains",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 204,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 4578,
    "name": "Void Disciple Magpie out of the Void",
    "background": 0,
    "body": 87,
    "familiar": 88,
    "head": 144,
    "prop": 307,
    "rune": 292
  },
  {
    "idx": 4579,
    "name": "Archmagus Basil of the Morning Star",
    "background": 1,
    "body": 85,
    "familiar": 7777,
    "head": 229,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 4580,
    "name": "Magus Louis of the Palms",
    "background": 2,
    "body": 59,
    "familiar": 95,
    "head": 149,
    "prop": 262,
    "rune": 282
  },
  {
    "idx": 4581,
    "name": "Electromancer Danny of the Brine",
    "background": 1,
    "body": 57,
    "familiar": 119,
    "head": 173,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 4582,
    "name": "Sorcerer Jahid of the Cosmos",
    "background": 0,
    "body": 10,
    "familiar": 90,
    "head": 128,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 4583,
    "name": "Archmagus Devo of the Sea",
    "background": 2,
    "body": 57,
    "familiar": 119,
    "head": 169,
    "prop": 316,
    "rune": 294
  },
  {
    "idx": 4584,
    "name": "Artificer Twitch of the Grotto",
    "background": 0,
    "body": 84,
    "familiar": 90,
    "head": 201,
    "prop": 316,
    "rune": 290
  },
  {
    "idx": 4585,
    "name": "Charlord of the Garden",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 158,
    "prop": 280,
    "rune": 290
  },
  {
    "idx": 4586,
    "name": "Sorcerer Solomon of the Ether",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 230,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 4587,
    "name": "Ghost Eater Basil of the Hall",
    "background": 2,
    "body": 26,
    "familiar": 97,
    "head": 202,
    "prop": 254,
    "rune": 296
  },
  {
    "idx": 4588,
    "name": "Magus Misumi of the Citadel",
    "background": 3,
    "body": 40,
    "familiar": 95,
    "head": 126,
    "prop": 262,
    "rune": 300
  },
  {
    "idx": 4589,
    "name": "Archmagus Eden of the Moors",
    "background": 2,
    "body": 13,
    "familiar": 115,
    "head": 229,
    "prop": 268,
    "rune": 297
  },
  {
    "idx": 4590,
    "name": "Evoker Ratko of the Garden",
    "background": 1,
    "body": 29,
    "familiar": 104,
    "head": 182,
    "prop": 321,
    "rune": 297
  },
  {
    "idx": 4591,
    "name": "Bard Homer of the Keep",
    "background": 0,
    "body": 74,
    "familiar": 123,
    "head": 216,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 4592,
    "name": "Enchanter Cybele of the Court",
    "background": 2,
    "body": 74,
    "familiar": 89,
    "head": 198,
    "prop": 250,
    "rune": 303
  },
  {
    "idx": 4593,
    "name": "Artificer Diana of the Hall",
    "background": 0,
    "body": 74,
    "familiar": 112,
    "head": 198,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4594,
    "name": "Cleric Kobold in the Shadows",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 178,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 4595,
    "name": "Azahl of the Secret Fire",
    "background": 1,
    "body": 86,
    "familiar": 114,
    "head": 211,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 4596,
    "name": "Archmagus Aleister of the Grotto",
    "background": 0,
    "body": 13,
    "familiar": 88,
    "head": 189,
    "prop": 255,
    "rune": 296
  },
  {
    "idx": 4597,
    "name": "Magus Jabir of the Tower",
    "background": 1,
    "body": 62,
    "familiar": 104,
    "head": 237,
    "prop": 262,
    "rune": 283
  },
  {
    "idx": 4598,
    "name": "Ice Mage Durm of the Berg",
    "background": 2,
    "body": 65,
    "familiar": 104,
    "head": 173,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 4599,
    "name": "Aleister of the Forest",
    "background": 0,
    "body": 43,
    "familiar": 95,
    "head": 153,
    "prop": 249,
    "rune": 293
  },
  {
    "idx": 4600,
    "name": "Geomancer Bullock of the Field",
    "background": 0,
    "body": 82,
    "familiar": 108,
    "head": 193,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 4601,
    "name": "Pyromancer Nixie of the Moors",
    "background": 2,
    "body": 79,
    "familiar": 104,
    "head": 235,
    "prop": 310,
    "rune": 282
  },
  {
    "idx": 4602,
    "name": "Shaman Godfrey of the Wood",
    "background": 1,
    "body": 42,
    "familiar": 111,
    "head": 133,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 4603,
    "name": "Hedge Wizard Jeldor of the Mount",
    "background": 0,
    "body": 63,
    "familiar": 88,
    "head": 214,
    "prop": 327,
    "rune": 297
  },
  {
    "idx": 4604,
    "name": "Archmagus Sturgis of El Dorado",
    "background": 0,
    "body": 74,
    "familiar": 108,
    "head": 188,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 4605,
    "name": "Summoner Giacomo",
    "background": 0,
    "body": 86,
    "familiar": 112,
    "head": 201,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 4606,
    "name": "Magus Jerret of the Obelisk",
    "background": 0,
    "body": 62,
    "familiar": 123,
    "head": 162,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 4607,
    "name": "Voodoo Priest Uvlius of the Astral Plane",
    "background": 0,
    "body": 10,
    "familiar": 95,
    "head": 232,
    "prop": 320,
    "rune": 297
  },
  {
    "idx": 4608,
    "name": "Clairvoyant Soya of the Villa",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 214,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 4609,
    "name": "Ice Mage Drusilla of the Ice",
    "background": 1,
    "body": 73,
    "familiar": 119,
    "head": 166,
    "prop": 280,
    "rune": 285
  },
  {
    "idx": 4610,
    "name": "Sorcerer Iprix of the Atheneum",
    "background": 2,
    "body": 7,
    "familiar": 119,
    "head": 226,
    "prop": 262,
    "rune": 303
  },
  {
    "idx": 4611,
    "name": "Alchemist Goober of the Event Horizon",
    "background": 2,
    "body": 24,
    "familiar": 115,
    "head": 171,
    "prop": 268,
    "rune": 298
  },
  {
    "idx": 4612,
    "name": "Magus Poppy of the Fey",
    "background": 1,
    "body": 29,
    "familiar": 94,
    "head": 171,
    "prop": 263,
    "rune": 300
  },
  {
    "idx": 4613,
    "name": "Magus Homer of the Keep",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 216,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 4614,
    "name": "Enchanter Arabella of Alfheim",
    "background": 2,
    "body": 29,
    "familiar": 88,
    "head": 187,
    "prop": 274,
    "rune": 294
  },
  {
    "idx": 4615,
    "name": "Shaman Impy of the Hall",
    "background": 2,
    "body": 26,
    "familiar": 115,
    "head": 171,
    "prop": 276,
    "rune": 292
  },
  {
    "idx": 4616,
    "name": "Arcanist Rowena of the Glacier",
    "background": 0,
    "body": 65,
    "familiar": 107,
    "head": 209,
    "prop": 250,
    "rune": 283
  },
  {
    "idx": 4617,
    "name": "Shaman Caligula of the Belfry",
    "background": 1,
    "body": 49,
    "familiar": 99,
    "head": 220,
    "prop": 276,
    "rune": 299
  },
  {
    "idx": 4618,
    "name": "Hedge Wizard Marceline of the Wood",
    "background": 1,
    "body": 15,
    "familiar": 104,
    "head": 159,
    "prop": 273,
    "rune": 303
  },
  {
    "idx": 4619,
    "name": "Archmagus Adium of the Citadel",
    "background": 1,
    "body": 48,
    "familiar": 103,
    "head": 207,
    "prop": 256,
    "rune": 292
  },
  {
    "idx": 4620,
    "name": "Witch Shivra of the Wood",
    "background": 0,
    "body": 37,
    "familiar": 119,
    "head": 159,
    "prop": 273,
    "rune": 299
  },
  {
    "idx": 4621,
    "name": "Artificer Daria of the Field",
    "background": 0,
    "body": 21,
    "familiar": 88,
    "head": 198,
    "prop": 258,
    "rune": 288
  },
  {
    "idx": 4622,
    "name": "Archmagus Basil of the Desert",
    "background": 3,
    "body": 27,
    "familiar": 112,
    "head": 147,
    "prop": 315,
    "rune": 296
  },
  {
    "idx": 4623,
    "name": "Null Mage Eden",
    "background": 1,
    "body": 26,
    "familiar": 7777,
    "head": 160,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 4624,
    "name": "Arch-Magician Ozohr of the Mount",
    "background": 1,
    "body": 55,
    "familiar": 7777,
    "head": 233,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4625,
    "name": "Evoker Armstrong of the Sacred Pillars",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 216,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4626,
    "name": "Electromancer Iprix of the Inferno",
    "background": 1,
    "body": 86,
    "familiar": 111,
    "head": 238,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 4627,
    "name": "Merlon of the Ether",
    "background": 0,
    "body": 9,
    "familiar": 94,
    "head": 238,
    "prop": 311,
    "rune": 292
  },
  {
    "idx": 4628,
    "name": "Shaman Milo of the Tower",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 197,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 4629,
    "name": "Hedge Wizard Danny of the Brambles",
    "background": 1,
    "body": 23,
    "familiar": 89,
    "head": 220,
    "prop": 319,
    "rune": 294
  },
  {
    "idx": 4630,
    "name": "Shaman Alizam of the Hall",
    "background": 0,
    "body": 78,
    "familiar": 93,
    "head": 222,
    "prop": 334,
    "rune": 283
  },
  {
    "idx": 4631,
    "name": "Sage Gorgana of the Plains",
    "background": 0,
    "body": 14,
    "familiar": 114,
    "head": 159,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 4632,
    "name": "Void Disciple Anton of the Mist",
    "background": 0,
    "body": 6,
    "familiar": 93,
    "head": 205,
    "prop": 329,
    "rune": 290
  },
  {
    "idx": 4633,
    "name": "Alchemist Jean Leon of the Oasis",
    "background": 1,
    "body": 60,
    "familiar": 120,
    "head": 149,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 4634,
    "name": "Battle Mage Wolfram of the Citadel",
    "background": 1,
    "body": 48,
    "familiar": 103,
    "head": 204,
    "prop": 261,
    "rune": 296
  },
  {
    "idx": 4635,
    "name": "Sorcerer Isaac of the Mount",
    "background": 1,
    "body": 63,
    "familiar": 109,
    "head": 215,
    "prop": 256,
    "rune": 285
  },
  {
    "idx": 4636,
    "name": "Arcanist Voidoth of the Wood",
    "background": 2,
    "body": 19,
    "familiar": 119,
    "head": 194,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 4637,
    "name": "Witch Marceline of the Mountain",
    "background": 2,
    "body": 37,
    "familiar": 115,
    "head": 159,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 4638,
    "name": "Sorcerer Tumbaj of the Obelisk",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 164,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 4639,
    "name": "Magus Baird of the Plains",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 204,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 4640,
    "name": "Spellsinger Calista of the Hills",
    "background": 3,
    "body": 35,
    "familiar": 95,
    "head": 208,
    "prop": 275,
    "rune": 293
  },
  {
    "idx": 4641,
    "name": "Illusionist Tabitha of the Realm",
    "background": 0,
    "body": 30,
    "familiar": 123,
    "head": 155,
    "prop": 306,
    "rune": 301
  },
  {
    "idx": 4642,
    "name": "Fortune Teller Shoi-Ming of the Sun",
    "background": 0,
    "body": 5,
    "familiar": 123,
    "head": 236,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 4643,
    "name": "Geomancer Oxnard of the River",
    "background": 0,
    "body": 13,
    "familiar": 108,
    "head": 193,
    "prop": 308,
    "rune": 302
  },
  {
    "idx": 4644,
    "name": "Pyromancer Dante of the Wood",
    "background": 3,
    "body": 19,
    "familiar": 105,
    "head": 216,
    "prop": 277,
    "rune": 288
  },
  {
    "idx": 4645,
    "name": "Sorcerer Iprix of the Lake",
    "background": 1,
    "body": 41,
    "familiar": 7777,
    "head": 185,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 4646,
    "name": "Battle Mage Ethan of the Plains",
    "background": 0,
    "body": 13,
    "familiar": 111,
    "head": 165,
    "prop": 308,
    "rune": 293
  },
  {
    "idx": 4647,
    "name": "Alchemist Behemoth of the Cosmos",
    "background": 3,
    "body": 52,
    "familiar": 88,
    "head": 193,
    "prop": 268,
    "rune": 283
  },
  {
    "idx": 4648,
    "name": "Archmagus Damien of Mu",
    "background": 1,
    "body": 11,
    "familiar": 7777,
    "head": 125,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 4649,
    "name": "Sage Ulysse of Xanadu",
    "background": 2,
    "body": 9,
    "familiar": 89,
    "head": 220,
    "prop": 316,
    "rune": 284
  },
  {
    "idx": 4650,
    "name": "Battle Mage Cromwell of the Reach",
    "background": 0,
    "body": 23,
    "familiar": 7777,
    "head": 182,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 4651,
    "name": "Necromancer Calista of the Grotto",
    "background": 0,
    "body": 32,
    "familiar": 105,
    "head": 135,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 4652,
    "name": "Conjurer Durm of the Bastion",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 216,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 4653,
    "name": "Ice Mage Aiko of the Ice",
    "background": 1,
    "body": 73,
    "familiar": 123,
    "head": 126,
    "prop": 306,
    "rune": 297
  },
  {
    "idx": 4654,
    "name": "Druid Udor of El Dorado",
    "background": 3,
    "body": 48,
    "familiar": 103,
    "head": 189,
    "prop": 329,
    "rune": 293
  },
  {
    "idx": 4655,
    "name": "Charmer Carly of the Ether",
    "background": 0,
    "body": 83,
    "familiar": 101,
    "head": 130,
    "prop": 312,
    "rune": 287
  },
  {
    "idx": 4656,
    "name": "Witch Elena of the Mountain",
    "background": 0,
    "body": 14,
    "familiar": 123,
    "head": 209,
    "prop": 316,
    "rune": 299
  },
  {
    "idx": 4657,
    "name": "Pyromancer Celeste of the Wood",
    "background": 1,
    "body": 35,
    "familiar": 105,
    "head": 191,
    "prop": 255,
    "rune": 287
  },
  {
    "idx": 4658,
    "name": "Battle Mage Gary of Arcadia",
    "background": 2,
    "body": 41,
    "familiar": 7777,
    "head": 206,
    "prop": 318,
    "rune": 296
  },
  {
    "idx": 4659,
    "name": "Archmagus Milton of Dreams",
    "background": 1,
    "body": 6,
    "familiar": 103,
    "head": 186,
    "prop": 339,
    "rune": 299
  },
  {
    "idx": 4660,
    "name": "Sorcerer Danny of the Dunes",
    "background": 1,
    "body": 58,
    "familiar": 115,
    "head": 204,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 4661,
    "name": "Hedge Wizard Blaise of the Sacred Pillars",
    "background": 2,
    "body": 63,
    "familiar": 114,
    "head": 177,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 4662,
    "name": "Adept Kryll of Dreams",
    "background": 2,
    "body": 6,
    "familiar": 103,
    "head": 200,
    "prop": 339,
    "rune": 284
  },
  {
    "idx": 4663,
    "name": "Alchemist Actaeon of the Thorn",
    "background": 2,
    "body": 30,
    "familiar": 105,
    "head": 167,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 4664,
    "name": "Hedge Wizard Merlon of the Hall",
    "background": 2,
    "body": 77,
    "familiar": 94,
    "head": 192,
    "prop": 265,
    "rune": 300
  },
  {
    "idx": 4665,
    "name": "David of the Capital",
    "background": 2,
    "body": 26,
    "familiar": 109,
    "head": 138,
    "prop": 245,
    "rune": 293
  },
  {
    "idx": 4666,
    "name": "Battle Mage Cromwell of the Oasis",
    "background": 0,
    "body": 61,
    "familiar": 114,
    "head": 220,
    "prop": 321,
    "rune": 284
  },
  {
    "idx": 4667,
    "name": "Enchanter Alatar of the Havens",
    "background": 2,
    "body": 9,
    "familiar": 105,
    "head": 214,
    "prop": 249,
    "rune": 291
  },
  {
    "idx": 4668,
    "name": "Runecaster Aden of the Wood",
    "background": 2,
    "body": 12,
    "familiar": 88,
    "head": 150,
    "prop": 340,
    "rune": 285
  },
  {
    "idx": 4669,
    "name": "Adept JackDaw",
    "background": 0,
    "body": 85,
    "familiar": 115,
    "head": 144,
    "prop": 327,
    "rune": 293
  },
  {
    "idx": 4670,
    "name": "Mina of the Temple",
    "background": 0,
    "body": 49,
    "familiar": 115,
    "head": 131,
    "prop": 262,
    "rune": 290
  },
  {
    "idx": 4671,
    "name": "Battle Mage Homer of El Dorado",
    "background": 3,
    "body": 76,
    "familiar": 103,
    "head": 206,
    "prop": 310,
    "rune": 294
  },
  {
    "idx": 4672,
    "name": "Druid Cromwell of the Palms",
    "background": 3,
    "body": 27,
    "familiar": 97,
    "head": 206,
    "prop": 329,
    "rune": 294
  },
  {
    "idx": 4673,
    "name": "Druid Soran of the Sacred Pillars",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 153,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 4674,
    "name": "Alchemist Naoki of the Mountain",
    "background": 2,
    "body": 84,
    "familiar": 7777,
    "head": 126,
    "prop": 271,
    "rune": 299
  },
  {
    "idx": 4675,
    "name": "of the Road",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 221,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 4676,
    "name": "Illusionist Thana of the Carnival",
    "background": 0,
    "body": 30,
    "familiar": 109,
    "head": 131,
    "prop": 273,
    "rune": 299
  },
  {
    "idx": 4677,
    "name": "Hydromancer Shu of the Sun",
    "background": 3,
    "body": 61,
    "familiar": 110,
    "head": 180,
    "prop": 314,
    "rune": 303
  },
  {
    "idx": 4678,
    "name": "Adept Merlon of the Obelisk",
    "background": 1,
    "body": 55,
    "familiar": 94,
    "head": 233,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 4679,
    "name": "Oracle Purple Boy of the Garden",
    "background": 2,
    "body": 28,
    "familiar": 108,
    "head": 154,
    "prop": 251,
    "rune": 290
  },
  {
    "idx": 4680,
    "name": "Magus Faiz of the Valley",
    "background": 1,
    "body": 19,
    "familiar": 114,
    "head": 128,
    "prop": 314,
    "rune": 299
  },
  {
    "idx": 4681,
    "name": "Ice Mage Crowley of the Tundra",
    "background": 0,
    "body": 73,
    "familiar": 114,
    "head": 232,
    "prop": 270,
    "rune": 285
  },
  {
    "idx": 4682,
    "name": "Arcanist Moloch of the Keep",
    "background": 3,
    "body": 48,
    "familiar": 119,
    "head": 193,
    "prop": 306,
    "rune": 286
  },
  {
    "idx": 4683,
    "name": "Shaman Lumos of the Sands",
    "background": 1,
    "body": 5,
    "familiar": 7777,
    "head": 192,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 4684,
    "name": "Shaman Flamos of Tartarus",
    "background": 0,
    "body": 87,
    "familiar": 120,
    "head": 158,
    "prop": 265,
    "rune": 290
  },
  {
    "idx": 4685,
    "name": "Hydromancer Enigma of the Plains",
    "background": 2,
    "body": 13,
    "familiar": 123,
    "head": 155,
    "prop": 314,
    "rune": 296
  },
  {
    "idx": 4686,
    "name": "Battle Mage Caligula of the Road",
    "background": 0,
    "body": 12,
    "familiar": 108,
    "head": 217,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 4687,
    "name": "Transmuter Feng of the Sands",
    "background": 2,
    "body": 61,
    "familiar": 90,
    "head": 236,
    "prop": 256,
    "rune": 301
  },
  {
    "idx": 4688,
    "name": "Druid Venga of Dreams",
    "background": 2,
    "body": 63,
    "familiar": 116,
    "head": 164,
    "prop": 340,
    "rune": 294
  },
  {
    "idx": 4689,
    "name": "David of Xanadu",
    "background": 1,
    "body": 9,
    "familiar": 123,
    "head": 186,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 4690,
    "name": "Enchanter Cassiopeia of the Steppe",
    "background": 0,
    "body": 36,
    "familiar": 101,
    "head": 190,
    "prop": 276,
    "rune": 291
  },
  {
    "idx": 4691,
    "name": "Archmagus Silas of the Marsh",
    "background": 1,
    "body": 15,
    "familiar": 115,
    "head": 211,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 4692,
    "name": "Summoner Aslan of Atlantis",
    "background": 0,
    "body": 57,
    "familiar": 114,
    "head": 183,
    "prop": 253,
    "rune": 292
  },
  {
    "idx": 4693,
    "name": "Thaumaturge Casper of the Ether",
    "background": 1,
    "body": 24,
    "familiar": 93,
    "head": 160,
    "prop": 256,
    "rune": 296
  },
  {
    "idx": 4694,
    "name": "Magus Lux of the Desert",
    "background": 1,
    "body": 5,
    "familiar": 112,
    "head": 232,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 4695,
    "name": "Witch Lenora of the Plains",
    "background": 1,
    "body": 12,
    "familiar": 119,
    "head": 155,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4696,
    "name": "Enchanter Victoria of the Reach",
    "background": 2,
    "body": 36,
    "familiar": 107,
    "head": 156,
    "prop": 339,
    "rune": 302
  },
  {
    "idx": 4697,
    "name": "Battle Mage Nolan of Arcadia",
    "background": 3,
    "body": 42,
    "familiar": 124,
    "head": 188,
    "prop": 312,
    "rune": 296
  },
  {
    "idx": 4698,
    "name": "Shaman Aslan of the Sands",
    "background": 2,
    "body": 27,
    "familiar": 104,
    "head": 173,
    "prop": 276,
    "rune": 303
  },
  {
    "idx": 4699,
    "name": "Sky Master Crowley of the Psychic Leap",
    "background": 3,
    "body": 8,
    "familiar": 118,
    "head": 144,
    "prop": 309,
    "rune": 303
  },
  {
    "idx": 4700,
    "name": "Magus Finn of the Hills",
    "background": 3,
    "body": 82,
    "familiar": 116,
    "head": 218,
    "prop": 262,
    "rune": 292
  },
  {
    "idx": 4701,
    "name": "Battle Mage Otto of the Wold",
    "background": 1,
    "body": 82,
    "familiar": 88,
    "head": 213,
    "prop": 261,
    "rune": 304
  },
  {
    "idx": 4702,
    "name": "Sorcerer Aleister of the Mist",
    "background": 0,
    "body": 6,
    "familiar": 114,
    "head": 212,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 4703,
    "name": "Diana of the Lake",
    "background": 1,
    "body": 37,
    "familiar": 115,
    "head": 132,
    "prop": 273,
    "rune": 290
  },
  {
    "idx": 4704,
    "name": "Sorcerer Wazir of the Loch",
    "background": 1,
    "body": 80,
    "familiar": 88,
    "head": 222,
    "prop": 252,
    "rune": 294
  },
  {
    "idx": 4705,
    "name": "Archmagus Jerret of Avalon",
    "background": 2,
    "body": 63,
    "familiar": 109,
    "head": 189,
    "prop": 266,
    "rune": 304
  },
  {
    "idx": 4706,
    "name": "Scryer Angus of the Oasis",
    "background": 2,
    "body": 5,
    "familiar": 117,
    "head": 220,
    "prop": 251,
    "rune": 289
  },
  {
    "idx": 4707,
    "name": "Druid Rumpleskin of Xanadu",
    "background": 0,
    "body": 66,
    "familiar": 119,
    "head": 171,
    "prop": 337,
    "rune": 7777
  },
  {
    "idx": 4708,
    "name": "Spellsinger Adium of Mu",
    "background": 2,
    "body": 75,
    "familiar": 89,
    "head": 125,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 4709,
    "name": "Hedge Wizard Lenora of the Realm",
    "background": 3,
    "body": 30,
    "familiar": 119,
    "head": 159,
    "prop": 279,
    "rune": 284
  },
  {
    "idx": 4710,
    "name": "Pyromancer Charlord",
    "background": 0,
    "body": 26,
    "familiar": 120,
    "head": 158,
    "prop": 268,
    "rune": 287
  },
  {
    "idx": 4711,
    "name": "Arcanist Purple Boy of the Woodlands",
    "background": 1,
    "body": 30,
    "familiar": 108,
    "head": 154,
    "prop": 306,
    "rune": 303
  },
  {
    "idx": 4712,
    "name": "Cryptomancer Woomba of the Carnival",
    "background": 0,
    "body": 30,
    "familiar": 119,
    "head": 171,
    "prop": 310,
    "rune": 283
  },
  {
    "idx": 4713,
    "name": "Witch Lamia of the Hollow",
    "background": 2,
    "body": 33,
    "familiar": 107,
    "head": 223,
    "prop": 277,
    "rune": 296
  },
  {
    "idx": 4714,
    "name": "Shaman Brown Cow of the Heath",
    "background": 0,
    "body": 42,
    "familiar": 99,
    "head": 193,
    "prop": 264,
    "rune": 288
  },
  {
    "idx": 4715,
    "name": "Sorcerer Jiang of the Belfry",
    "background": 0,
    "body": 63,
    "familiar": 104,
    "head": 236,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 4716,
    "name": "Enchanter Layla of the Riviera",
    "background": 0,
    "body": 31,
    "familiar": 93,
    "head": 132,
    "prop": 252,
    "rune": 286
  },
  {
    "idx": 4717,
    "name": "Alchemist Cassandra from the Shadow",
    "background": 1,
    "body": 87,
    "familiar": 105,
    "head": 223,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 4718,
    "name": "Sorcerer Merlon of the Wood",
    "background": 0,
    "body": 42,
    "familiar": 105,
    "head": 141,
    "prop": 340,
    "rune": 300
  },
  {
    "idx": 4719,
    "name": "Alchemist Katherine of the Hills",
    "background": 3,
    "body": 37,
    "familiar": 91,
    "head": 198,
    "prop": 270,
    "rune": 292
  },
  {
    "idx": 4720,
    "name": "Battle Mage Cassius of the Rock",
    "background": 2,
    "body": 5,
    "familiar": 94,
    "head": 177,
    "prop": 332,
    "rune": 293
  },
  {
    "idx": 4721,
    "name": "Solomon of the Tower",
    "background": 1,
    "body": 26,
    "familiar": 115,
    "head": 233,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 4722,
    "name": "Druid Zane of Atlantis",
    "background": 1,
    "body": 57,
    "familiar": 114,
    "head": 153,
    "prop": 327,
    "rune": 293
  },
  {
    "idx": 4723,
    "name": "Enchanter Asphodel of the Road",
    "background": 1,
    "body": 36,
    "familiar": 105,
    "head": 131,
    "prop": 332,
    "rune": 296
  },
  {
    "idx": 4724,
    "name": "Witch Calypso of the Villa",
    "background": 0,
    "body": 76,
    "familiar": 116,
    "head": 159,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 4725,
    "name": "Archmagus Ozohr of the Wild",
    "background": 2,
    "body": 18,
    "familiar": 104,
    "head": 229,
    "prop": 273,
    "rune": 288
  },
  {
    "idx": 4726,
    "name": "Alchemist Udor of Atlantis",
    "background": 2,
    "body": 80,
    "familiar": 123,
    "head": 147,
    "prop": 270,
    "rune": 287
  },
  {
    "idx": 4727,
    "name": "Magus Dutorn of the Atheneum",
    "background": 1,
    "body": 49,
    "familiar": 115,
    "head": 173,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 4728,
    "name": "Ice Mage Zubin of the Ice",
    "background": 0,
    "body": 65,
    "familiar": 111,
    "head": 231,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4729,
    "name": "Witch Lamia of the Astral Plane",
    "background": 1,
    "body": 11,
    "familiar": 105,
    "head": 209,
    "prop": 246,
    "rune": 300
  },
  {
    "idx": 4730,
    "name": "Charmer Daria of the Valley",
    "background": 2,
    "body": 34,
    "familiar": 120,
    "head": 191,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 4731,
    "name": "Sorcerer Tumbaj of the Valley",
    "background": 1,
    "body": 62,
    "familiar": 99,
    "head": 237,
    "prop": 271,
    "rune": 283
  },
  {
    "idx": 4732,
    "name": "Medium Junko of the Oasis",
    "background": 2,
    "body": 61,
    "familiar": 114,
    "head": 126,
    "prop": 245,
    "rune": 304
  },
  {
    "idx": 4733,
    "name": "Ice Mage Flynn of the Ice",
    "background": 1,
    "body": 73,
    "familiar": 97,
    "head": 203,
    "prop": 260,
    "rune": 292
  },
  {
    "idx": 4734,
    "name": "Magus Danny of the Havens",
    "background": 3,
    "body": 9,
    "familiar": 93,
    "head": 183,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 4735,
    "name": "Wild Mage Hagar of the Keep",
    "background": 0,
    "body": 63,
    "familiar": 116,
    "head": 182,
    "prop": 340,
    "rune": 288
  },
  {
    "idx": 4736,
    "name": "Witch Ivy of the Grotto",
    "background": 0,
    "body": 39,
    "familiar": 114,
    "head": 166,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4737,
    "name": "Artificer Chipper of the Grotto",
    "background": 1,
    "body": 19,
    "familiar": 111,
    "head": 201,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 4738,
    "name": "Electromancer Robert of the Brambles",
    "background": 2,
    "body": 84,
    "familiar": 103,
    "head": 182,
    "prop": 305,
    "rune": 288
  },
  {
    "idx": 4739,
    "name": "Sorcerer Azahl of the Havens",
    "background": 2,
    "body": 7,
    "familiar": 97,
    "head": 215,
    "prop": 256,
    "rune": 284
  },
  {
    "idx": 4740,
    "name": "Sorcerer Milton of the Ether",
    "background": 0,
    "body": 75,
    "familiar": 103,
    "head": 232,
    "prop": 339,
    "rune": 290
  },
  {
    "idx": 4741,
    "name": "Cosmic Mage Hugo of the Platonic Shadow",
    "background": 1,
    "body": 8,
    "familiar": 88,
    "head": 149,
    "prop": 338,
    "rune": 288
  },
  {
    "idx": 4742,
    "name": "Adept Crackerjack of the Cosmos",
    "background": 3,
    "body": 24,
    "familiar": 96,
    "head": 144,
    "prop": 249,
    "rune": 292
  },
  {
    "idx": 4743,
    "name": "Alchemist Thor of the Valley",
    "background": 2,
    "body": 6,
    "familiar": 99,
    "head": 133,
    "prop": 270,
    "rune": 301
  },
  {
    "idx": 4744,
    "name": "Magus Delilah of the Wood",
    "background": 3,
    "body": 38,
    "familiar": 109,
    "head": 159,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 4745,
    "name": "Alchemist Mycho of the Steppe",
    "background": 3,
    "body": 44,
    "familiar": 116,
    "head": 195,
    "prop": 271,
    "rune": 287
  },
  {
    "idx": 4746,
    "name": "Magus Daria of Arcadia",
    "background": 1,
    "body": 18,
    "familiar": 95,
    "head": 191,
    "prop": 249,
    "rune": 302
  },
  {
    "idx": 4747,
    "name": "Eden of the Desert",
    "background": 3,
    "body": 59,
    "familiar": 109,
    "head": 189,
    "prop": 251,
    "rune": 296
  },
  {
    "idx": 4748,
    "name": "Alchemist Miyo of the Marsh",
    "background": 1,
    "body": 38,
    "familiar": 120,
    "head": 126,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 4749,
    "name": "Shaman Rita of the Ice",
    "background": 2,
    "body": 65,
    "familiar": 91,
    "head": 209,
    "prop": 316,
    "rune": 286
  },
  {
    "idx": 4750,
    "name": "Voodoo Priest Hugo of the Ice",
    "background": 0,
    "body": 65,
    "familiar": 90,
    "head": 149,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 4751,
    "name": "Hedge Wizard Milton of the Heath",
    "background": 0,
    "body": 13,
    "familiar": 103,
    "head": 127,
    "prop": 312,
    "rune": 291
  },
  {
    "idx": 4752,
    "name": "Sage Yan of the Wood",
    "background": 2,
    "body": 22,
    "familiar": 110,
    "head": 180,
    "prop": 318,
    "rune": 291
  },
  {
    "idx": 4753,
    "name": "Illusionist Salvatore of the Mist",
    "background": 0,
    "body": 62,
    "familiar": 90,
    "head": 214,
    "prop": 246,
    "rune": 290
  },
  {
    "idx": 4754,
    "name": "Runecaster Casper of the Palms",
    "background": 0,
    "body": 60,
    "familiar": 112,
    "head": 162,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 4755,
    "name": "Ghost Eater Anton of the Secret Fire",
    "background": 0,
    "body": 87,
    "familiar": 97,
    "head": 194,
    "prop": 309,
    "rune": 282
  },
  {
    "idx": 4756,
    "name": "Mystic Eden of the Forest",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 233,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 4757,
    "name": "Fortune Teller Xiaobo of the Reach",
    "background": 1,
    "body": 23,
    "familiar": 101,
    "head": 236,
    "prop": 329,
    "rune": 284
  },
  {
    "idx": 4758,
    "name": "Enchanter Iris of the River",
    "background": 1,
    "body": 34,
    "familiar": 114,
    "head": 139,
    "prop": 323,
    "rune": 302
  },
  {
    "idx": 4759,
    "name": "Illusionist Celah in the Shadows",
    "background": 1,
    "body": 85,
    "familiar": 124,
    "head": 238,
    "prop": 272,
    "rune": 302
  },
  {
    "idx": 4760,
    "name": "Ice Mage Flamos out of the Blizzard",
    "background": 3,
    "body": 65,
    "familiar": 105,
    "head": 158,
    "prop": 334,
    "rune": 282
  },
  {
    "idx": 4761,
    "name": "Arcanist Rumpleskin of the Wood",
    "background": 0,
    "body": 19,
    "familiar": 7777,
    "head": 200,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 4762,
    "name": "Holy Monk Alex of the Tower",
    "background": 0,
    "body": 62,
    "familiar": 94,
    "head": 125,
    "prop": 7777,
    "rune": 291
  },
  {
    "idx": 4763,
    "name": "Conjurer Calliope of the Heath",
    "background": 0,
    "body": 21,
    "familiar": 88,
    "head": 187,
    "prop": 246,
    "rune": 296
  },
  {
    "idx": 4764,
    "name": "Sorcerer Pumlo of the Tower",
    "background": 3,
    "body": 49,
    "familiar": 104,
    "head": 229,
    "prop": 337,
    "rune": 294
  },
  {
    "idx": 4765,
    "name": "Sage Asmodeus of the Plains",
    "background": 0,
    "body": 15,
    "familiar": 101,
    "head": 193,
    "prop": 277,
    "rune": 294
  },
  {
    "idx": 4766,
    "name": "Archmagus George of the Sun",
    "background": 0,
    "body": 60,
    "familiar": 7777,
    "head": 192,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4767,
    "name": "Magus Trollin of the Obelisk",
    "background": 1,
    "body": 7,
    "familiar": 7777,
    "head": 171,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 4768,
    "name": "Pyromancer Brown Cow of the Ether",
    "background": 3,
    "body": 9,
    "familiar": 111,
    "head": 193,
    "prop": 277,
    "rune": 303
  },
  {
    "idx": 4769,
    "name": "Magus Impy of El Dorado",
    "background": 0,
    "body": 77,
    "familiar": 115,
    "head": 171,
    "prop": 262,
    "rune": 293
  },
  {
    "idx": 4770,
    "name": "Charmer Adrienne of the Carnival",
    "background": 0,
    "body": 30,
    "familiar": 115,
    "head": 156,
    "prop": 256,
    "rune": 303
  },
  {
    "idx": 4771,
    "name": "Arch-Magician Aleister of the Wood",
    "background": 1,
    "body": 43,
    "familiar": 93,
    "head": 141,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 4772,
    "name": "Arabella of the Road",
    "background": 2,
    "body": 31,
    "familiar": 94,
    "head": 132,
    "prop": 269,
    "rune": 297
  },
  {
    "idx": 4773,
    "name": "Archmagus Molek of the Havens",
    "background": 3,
    "body": 52,
    "familiar": 88,
    "head": 193,
    "prop": 322,
    "rune": 291
  },
  {
    "idx": 4774,
    "name": "Archmagus Crowley of the Wood",
    "background": 2,
    "body": 18,
    "familiar": 119,
    "head": 226,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 4775,
    "name": "Archmagus Aldus of the Heath",
    "background": 0,
    "body": 45,
    "familiar": 112,
    "head": 232,
    "prop": 265,
    "rune": 291
  },
  {
    "idx": 4776,
    "name": "Shaman Taqi of Xanadu",
    "background": 3,
    "body": 75,
    "familiar": 99,
    "head": 142,
    "prop": 276,
    "rune": 303
  },
  {
    "idx": 4777,
    "name": "Ice Mage Lin of the Ice",
    "background": 1,
    "body": 73,
    "familiar": 112,
    "head": 180,
    "prop": 315,
    "rune": 304
  },
  {
    "idx": 4778,
    "name": "Hedge Wizard Sondra of the Moors",
    "background": 2,
    "body": 34,
    "familiar": 99,
    "head": 132,
    "prop": 319,
    "rune": 291
  },
  {
    "idx": 4779,
    "name": "Chronomancer Herne of the Field",
    "background": 0,
    "body": 42,
    "familiar": 108,
    "head": 167,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 4780,
    "name": "Hedge Wizard Jianyu of the Keep",
    "background": 0,
    "body": 7,
    "familiar": 116,
    "head": 236,
    "prop": 312,
    "rune": 303
  },
  {
    "idx": 4781,
    "name": "Druid Morfran from the Abyss",
    "background": 2,
    "body": 85,
    "familiar": 105,
    "head": 144,
    "prop": 326,
    "rune": 286
  },
  {
    "idx": 4782,
    "name": "Witch Sylvia of the Hollow",
    "background": 1,
    "body": 12,
    "familiar": 88,
    "head": 176,
    "prop": 307,
    "rune": 282
  },
  {
    "idx": 4783,
    "name": "Archmagus Eronin of the Sun",
    "background": 0,
    "body": 60,
    "familiar": 89,
    "head": 125,
    "prop": 327,
    "rune": 287
  },
  {
    "idx": 4784,
    "name": "Sage Atlas of the Steppe",
    "background": 2,
    "body": 43,
    "familiar": 97,
    "head": 218,
    "prop": 316,
    "rune": 300
  },
  {
    "idx": 4785,
    "name": "Diabolist Oliver of the Event Horizon",
    "background": 3,
    "body": 24,
    "familiar": 88,
    "head": 140,
    "prop": 336,
    "rune": 299
  },
  {
    "idx": 4786,
    "name": "Arcanist Zelda of the Palms",
    "background": 2,
    "body": 60,
    "familiar": 95,
    "head": 159,
    "prop": 327,
    "rune": 293
  },
  {
    "idx": 4787,
    "name": "Archmagus Hadrien of the Valley",
    "background": 1,
    "body": 62,
    "familiar": 112,
    "head": 153,
    "prop": 246,
    "rune": 282
  },
  {
    "idx": 4788,
    "name": "Diabolist Azahl of the Hall",
    "background": 0,
    "body": 46,
    "familiar": 103,
    "head": 233,
    "prop": 310,
    "rune": 303
  },
  {
    "idx": 4789,
    "name": "Void Disciple Seth of the Psychic Leap",
    "background": 1,
    "body": 67,
    "familiar": 120,
    "head": 205,
    "prop": 246,
    "rune": 282
  },
  {
    "idx": 4790,
    "name": "Witch Rita of the Obelisk",
    "background": 1,
    "body": 54,
    "familiar": 90,
    "head": 176,
    "prop": 261,
    "rune": 285
  },
  {
    "idx": 4791,
    "name": "Druid Salvatore of the Dunes",
    "background": 0,
    "body": 58,
    "familiar": 116,
    "head": 238,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 4792,
    "name": "Necromancer Seth of the Cosmos",
    "background": 1,
    "body": 52,
    "familiar": 88,
    "head": 194,
    "prop": 280,
    "rune": 290
  },
  {
    "idx": 4793,
    "name": "Archmagus Apollo of the Hills",
    "background": 0,
    "body": 12,
    "familiar": 119,
    "head": 214,
    "prop": 273,
    "rune": 302
  },
  {
    "idx": 4794,
    "name": "Sage Sondra of the Sea",
    "background": 3,
    "body": 57,
    "familiar": 120,
    "head": 139,
    "prop": 318,
    "rune": 300
  },
  {
    "idx": 4795,
    "name": "Magus Giuseppe of the Hills",
    "background": 0,
    "body": 44,
    "familiar": 105,
    "head": 149,
    "prop": 262,
    "rune": 303
  },
  {
    "idx": 4796,
    "name": "Sage Oberon of the Lake",
    "background": 0,
    "body": 12,
    "familiar": 104,
    "head": 147,
    "prop": 316,
    "rune": 299
  },
  {
    "idx": 4797,
    "name": "Augurer Atlas of the Gnostics",
    "background": 1,
    "body": 75,
    "familiar": 101,
    "head": 129,
    "prop": 251,
    "rune": 297
  },
  {
    "idx": 4798,
    "name": "Artificer Sabina of the Hollow",
    "background": 3,
    "body": 45,
    "familiar": 118,
    "head": 209,
    "prop": 261,
    "rune": 304
  },
  {
    "idx": 4799,
    "name": "Sage Enigma of the Realm",
    "background": 0,
    "body": 52,
    "familiar": 97,
    "head": 223,
    "prop": 277,
    "rune": 287
  },
  {
    "idx": 4800,
    "name": "Void Disciple Norix of the Hall",
    "background": 3,
    "body": 48,
    "familiar": 118,
    "head": 239,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4801,
    "name": "Druid Abaddon of the Mount",
    "background": 0,
    "body": 63,
    "familiar": 116,
    "head": 242,
    "prop": 340,
    "rune": 290
  },
  {
    "idx": 4802,
    "name": "Spellsinger Apollo of the Waste",
    "background": 1,
    "body": 86,
    "familiar": 105,
    "head": 211,
    "prop": 247,
    "rune": 290
  },
  {
    "idx": 4803,
    "name": "Archmagus Calista of the Ether",
    "background": 2,
    "body": 24,
    "familiar": 105,
    "head": 135,
    "prop": 328,
    "rune": 300
  },
  {
    "idx": 4804,
    "name": "Battle Mage Angus of the Palms",
    "background": 3,
    "body": 58,
    "familiar": 99,
    "head": 133,
    "prop": 308,
    "rune": 295
  },
  {
    "idx": 4805,
    "name": "Sage Aiko of the Wood",
    "background": 0,
    "body": 31,
    "familiar": 88,
    "head": 126,
    "prop": 275,
    "rune": 288
  },
  {
    "idx": 4806,
    "name": "Spellsinger Arcus of the Ether",
    "background": 1,
    "body": 67,
    "familiar": 94,
    "head": 205,
    "prop": 247,
    "rune": 297
  },
  {
    "idx": 4807,
    "name": "Alchemist Talbot of the Keep",
    "background": 3,
    "body": 74,
    "familiar": 109,
    "head": 217,
    "prop": 245,
    "rune": 301
  },
  {
    "idx": 4808,
    "name": "Shadow Mage Shukri of the Wood",
    "background": 0,
    "body": 14,
    "familiar": 114,
    "head": 164,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 4809,
    "name": "Pyromancer Brutus of the Wood",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 203,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 4810,
    "name": "Illusionist Hansel of the Bastion",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 183,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 4811,
    "name": "Summoner Hansel of Avalon",
    "background": 2,
    "body": 6,
    "familiar": 110,
    "head": 217,
    "prop": 253,
    "rune": 284
  },
  {
    "idx": 4812,
    "name": "Sorcerer Merlon of the Tower",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 214,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 4813,
    "name": "Druid Duzzle of the Cosmos",
    "background": 1,
    "body": 10,
    "familiar": 94,
    "head": 178,
    "prop": 264,
    "rune": 283
  },
  {
    "idx": 4814,
    "name": "Artificer Zaros of the Hall",
    "background": 2,
    "body": 48,
    "familiar": 90,
    "head": 192,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 4815,
    "name": "Archmagus Aleister of the Mountain",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 127,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4816,
    "name": "Mystic Pumlo of the Sacred Pillars",
    "background": 1,
    "body": 55,
    "familiar": 7777,
    "head": 186,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 4817,
    "name": "Geomancer Apollo of the Brambles",
    "background": 1,
    "body": 43,
    "familiar": 7777,
    "head": 211,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 4818,
    "name": "Arch-Magician Aldus of Dreams",
    "background": 0,
    "body": 49,
    "familiar": 111,
    "head": 211,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4819,
    "name": "Pyromancer Borak of the Temple",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 177,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 4820,
    "name": "Arch-Magician Hashim of the River",
    "background": 0,
    "body": 19,
    "familiar": 7777,
    "head": 128,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 4821,
    "name": "Arcanist Udor of the Fey",
    "background": 2,
    "body": 29,
    "familiar": 88,
    "head": 230,
    "prop": 325,
    "rune": 303
  },
  {
    "idx": 4822,
    "name": "Sorcerer Jahid of the Obelisk",
    "background": 2,
    "body": 50,
    "familiar": 94,
    "head": 164,
    "prop": 339,
    "rune": 303
  },
  {
    "idx": 4823,
    "name": "Aleister of the Mist",
    "background": 0,
    "body": 63,
    "familiar": 90,
    "head": 160,
    "prop": 266,
    "rune": 296
  },
  {
    "idx": 4824,
    "name": "Artificer Mycho of the Wild",
    "background": 0,
    "body": 45,
    "familiar": 89,
    "head": 195,
    "prop": 261,
    "rune": 291
  },
  {
    "idx": 4825,
    "name": "Charmer Iris of the Riviera",
    "background": 3,
    "body": 22,
    "familiar": 89,
    "head": 132,
    "prop": 339,
    "rune": 7777
  },
  {
    "idx": 4826,
    "name": "Archmagus David of the Wold",
    "background": 1,
    "body": 41,
    "familiar": 7777,
    "head": 229,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 4827,
    "name": "Diana of the Capital",
    "background": 3,
    "body": 26,
    "familiar": 104,
    "head": 190,
    "prop": 268,
    "rune": 288
  },
  {
    "idx": 4828,
    "name": "Sorcerer Eizo of Avalon",
    "background": 2,
    "body": 7,
    "familiar": 109,
    "head": 160,
    "prop": 246,
    "rune": 299
  },
  {
    "idx": 4829,
    "name": "Solomon of the Grotto",
    "background": 2,
    "body": 14,
    "familiar": 116,
    "head": 138,
    "prop": 262,
    "rune": 283
  },
  {
    "idx": 4830,
    "name": "Enchanter Beyna of the Cosmos",
    "background": 2,
    "body": 11,
    "familiar": 112,
    "head": 191,
    "prop": 318,
    "rune": 290
  },
  {
    "idx": 4831,
    "name": "Archmagus Aleister of the Canyon",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 199,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 4832,
    "name": "Alchemist Aleister of the Mist",
    "background": 1,
    "body": 50,
    "familiar": 7777,
    "head": 227,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 4833,
    "name": "Sage Titania of the Canyon",
    "background": 0,
    "body": 36,
    "familiar": 120,
    "head": 191,
    "prop": 277,
    "rune": 283
  },
  {
    "idx": 4834,
    "name": "Cassiopeia of the Plains",
    "background": 1,
    "body": 18,
    "familiar": 95,
    "head": 132,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 4835,
    "name": "Magus Hecate of the Astral Plane",
    "background": 3,
    "body": 67,
    "familiar": 119,
    "head": 159,
    "prop": 263,
    "rune": 298
  },
  {
    "idx": 4836,
    "name": "Archmagus Jerret of the Grotto",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 202,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 4837,
    "name": "Ghost Eater Jerret of the Desert",
    "background": 1,
    "body": 60,
    "familiar": 123,
    "head": 153,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 4838,
    "name": "Ghost Eater Asphodel of the Grotto",
    "background": 2,
    "body": 32,
    "familiar": 93,
    "head": 198,
    "prop": 332,
    "rune": 297
  },
  {
    "idx": 4839,
    "name": "Galatea of Mu",
    "background": 1,
    "body": 24,
    "familiar": 88,
    "head": 139,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 4840,
    "name": "Illusionist Jig of the Riviera",
    "background": 0,
    "body": 13,
    "familiar": 89,
    "head": 235,
    "prop": 273,
    "rune": 284
  },
  {
    "idx": 4841,
    "name": "Charmer Circe from the Abyss",
    "background": 0,
    "body": 87,
    "familiar": 101,
    "head": 156,
    "prop": 273,
    "rune": 290
  },
  {
    "idx": 4842,
    "name": "Alchemist Arcus of the Hollow",
    "background": 0,
    "body": 41,
    "familiar": 7777,
    "head": 205,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 4843,
    "name": "Sorcerer Uday of Elysium",
    "background": 1,
    "body": 55,
    "familiar": 103,
    "head": 237,
    "prop": 277,
    "rune": 287
  },
  {
    "idx": 4844,
    "name": "Hedge Wizard Dante of the Palms",
    "background": 3,
    "body": 58,
    "familiar": 101,
    "head": 220,
    "prop": 276,
    "rune": 299
  },
  {
    "idx": 4845,
    "name": "Battle Mage Dante of the Riviera",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 177,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 4846,
    "name": "Sorcerer Ofaris of Xanadu",
    "background": 0,
    "body": 11,
    "familiar": 115,
    "head": 160,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 4847,
    "name": "Arch-Magician Hongo of the Havens",
    "background": 0,
    "body": 11,
    "familiar": 107,
    "head": 195,
    "prop": 280,
    "rune": 282
  },
  {
    "idx": 4848,
    "name": "Witch Drusilla of the Steppe",
    "background": 1,
    "body": 35,
    "familiar": 105,
    "head": 166,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 4849,
    "name": "Magus Ozohr of the Tower",
    "background": 1,
    "body": 77,
    "familiar": 7777,
    "head": 153,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 4850,
    "name": "Pyromancer Ofaris of the Wood",
    "background": 0,
    "body": 18,
    "familiar": 7777,
    "head": 233,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 4851,
    "name": "Archmagus Crobas of the Palms",
    "background": 0,
    "body": 5,
    "familiar": 7777,
    "head": 125,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 4852,
    "name": "Magus Tundror of the Wold",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 217,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 4853,
    "name": "Archmagus Lumos of the Hall",
    "background": 1,
    "body": 76,
    "familiar": 7777,
    "head": 160,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 4854,
    "name": "Ghost Eater Voidoth of Dreams",
    "background": 1,
    "body": 6,
    "familiar": 103,
    "head": 240,
    "prop": 338,
    "rune": 296
  },
  {
    "idx": 4855,
    "name": "Enchanter Mad Apple of the Grave",
    "background": 3,
    "body": 72,
    "familiar": 106,
    "head": 154,
    "prop": 265,
    "rune": 301
  },
  {
    "idx": 4856,
    "name": "Magus Jahid of the Marsh",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 128,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 4857,
    "name": "Holy Monk  of the Field",
    "background": 2,
    "body": 19,
    "familiar": 7777,
    "head": 150,
    "prop": 314,
    "rune": 296
  },
  {
    "idx": 4858,
    "name": "Battle Mage Nicolas of the Plains",
    "background": 1,
    "body": 45,
    "familiar": 89,
    "head": 165,
    "prop": 261,
    "rune": 287
  },
  {
    "idx": 4859,
    "name": "Shadow Mage Iprix of the Quantum Downs",
    "background": 2,
    "body": 24,
    "familiar": 109,
    "head": 214,
    "prop": 320,
    "rune": 302
  },
  {
    "idx": 4860,
    "name": "Arch-Magician  of the Toadstools",
    "background": 1,
    "body": 28,
    "familiar": 7777,
    "head": 171,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 4861,
    "name": "Battle Mage Nicolas of the Lake",
    "background": 3,
    "body": 79,
    "familiar": 99,
    "head": 165,
    "prop": 308,
    "rune": 300
  },
  {
    "idx": 4862,
    "name": "Crowley of the Astral Plane",
    "background": 0,
    "body": 9,
    "familiar": 95,
    "head": 162,
    "prop": 247,
    "rune": 292
  },
  {
    "idx": 4863,
    "name": "Sage Bartholomew of the Steppe",
    "background": 0,
    "body": 42,
    "familiar": 7777,
    "head": 213,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 4864,
    "name": "Hedge Wizard Jaffer of the River",
    "background": 1,
    "body": 43,
    "familiar": 89,
    "head": 142,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 4865,
    "name": "Battle Mage Aslan of Arcadia",
    "background": 0,
    "body": 42,
    "familiar": 123,
    "head": 188,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 4866,
    "name": "Sorcerer Aleister of the Havens",
    "background": 0,
    "body": 24,
    "familiar": 88,
    "head": 226,
    "prop": 317,
    "rune": 304
  },
  {
    "idx": 4867,
    "name": "Wild Mage Danny of the Palms",
    "background": 0,
    "body": 58,
    "familiar": 94,
    "head": 177,
    "prop": 320,
    "rune": 304
  },
  {
    "idx": 4868,
    "name": "George of the Villa",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 197,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 4869,
    "name": "Mina of Arcadia",
    "background": 0,
    "body": 36,
    "familiar": 109,
    "head": 208,
    "prop": 268,
    "rune": 288
  },
  {
    "idx": 4870,
    "name": "Sage Nikolas of the Havens",
    "background": 0,
    "body": 24,
    "familiar": 89,
    "head": 229,
    "prop": 316,
    "rune": 302
  },
  {
    "idx": 4871,
    "name": "Witch Juniper of the Plains",
    "background": 2,
    "body": 35,
    "familiar": 103,
    "head": 166,
    "prop": 306,
    "rune": 287
  },
  {
    "idx": 4872,
    "name": "Runecaster Faye of the Plains",
    "background": 2,
    "body": 43,
    "familiar": 120,
    "head": 135,
    "prop": 326,
    "rune": 292
  },
  {
    "idx": 4873,
    "name": "Archmagus Cedric of the Steppe",
    "background": 0,
    "body": 18,
    "familiar": 123,
    "head": 125,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 4874,
    "name": "Aeromancer Jabir of the Mount",
    "background": 0,
    "body": 62,
    "familiar": 94,
    "head": 237,
    "prop": 315,
    "rune": 295
  },
  {
    "idx": 4875,
    "name": "Witch Delilah of the Road",
    "background": 2,
    "body": 35,
    "familiar": 116,
    "head": 223,
    "prop": 256,
    "rune": 285
  },
  {
    "idx": 4876,
    "name": "Magus Faye of the Quantum Downs",
    "background": 2,
    "body": 68,
    "familiar": 88,
    "head": 187,
    "prop": 325,
    "rune": 304
  },
  {
    "idx": 4877,
    "name": "Sorcerer Jerret of the Sacred Pillars",
    "background": 1,
    "body": 54,
    "familiar": 112,
    "head": 232,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 4878,
    "name": "Oracle Taqi of the Berg",
    "background": 3,
    "body": 65,
    "familiar": 97,
    "head": 142,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 4879,
    "name": "Aeromancer Sylvia of the Plains",
    "background": 1,
    "body": 35,
    "familiar": 110,
    "head": 209,
    "prop": 315,
    "rune": 297
  },
  {
    "idx": 4880,
    "name": "Cryptomancer Remus of the Obelisk",
    "background": 3,
    "body": 6,
    "familiar": 103,
    "head": 137,
    "prop": 310,
    "rune": 282
  },
  {
    "idx": 4881,
    "name": "Geomancer Fungi of the Forest",
    "background": 0,
    "body": 43,
    "familiar": 97,
    "head": 195,
    "prop": 317,
    "rune": 298
  },
  {
    "idx": 4882,
    "name": "Witch Ophelia of the Heath",
    "background": 0,
    "body": 37,
    "familiar": 96,
    "head": 159,
    "prop": 262,
    "rune": 294
  },
  {
    "idx": 4883,
    "name": "Druid Epher of the Tundra",
    "background": 1,
    "body": 65,
    "familiar": 99,
    "head": 167,
    "prop": 276,
    "rune": 301
  },
  {
    "idx": 4884,
    "name": "Oracle Angus of the Arctic",
    "background": 2,
    "body": 73,
    "familiar": 96,
    "head": 220,
    "prop": 251,
    "rune": 304
  },
  {
    "idx": 4885,
    "name": "Shaman Bojangles of the Bastion",
    "background": 2,
    "body": 40,
    "familiar": 101,
    "head": 201,
    "prop": 316,
    "rune": 299
  },
  {
    "idx": 4886,
    "name": "Atlanta of the Gnostics",
    "background": 1,
    "body": 75,
    "familiar": 111,
    "head": 191,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 4887,
    "name": "Alchemist Ofaris of the Quantum Downs",
    "background": 0,
    "body": 67,
    "familiar": 94,
    "head": 141,
    "prop": 269,
    "rune": 296
  },
  {
    "idx": 4888,
    "name": "Arch-Magician Finn of Elysium",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 177,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 4889,
    "name": "Necromancer Brown Cow of El Dorado",
    "background": 2,
    "body": 40,
    "familiar": 116,
    "head": 193,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 4890,
    "name": "Electromancer Yookoo of the Gnostics",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 171,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 4891,
    "name": "Aleister of the Palms",
    "background": 1,
    "body": 60,
    "familiar": 95,
    "head": 189,
    "prop": 315,
    "rune": 303
  },
  {
    "idx": 4892,
    "name": "Battle Mage Darick of the Atheneum",
    "background": 1,
    "body": 50,
    "familiar": 99,
    "head": 165,
    "prop": 317,
    "rune": 292
  },
  {
    "idx": 4893,
    "name": "Shaman Apollo of the Hall",
    "background": 1,
    "body": 77,
    "familiar": 123,
    "head": 153,
    "prop": 322,
    "rune": 291
  },
  {
    "idx": 4894,
    "name": "Magus Carly of the Light",
    "background": 0,
    "body": 67,
    "familiar": 95,
    "head": 191,
    "prop": 258,
    "rune": 302
  },
  {
    "idx": 4895,
    "name": "Archmagus Nikolas in the Shadows",
    "background": 2,
    "body": 86,
    "familiar": 97,
    "head": 197,
    "prop": 254,
    "rune": 297
  },
  {
    "idx": 4896,
    "name": "Battle Mage Darick of the Grotto",
    "background": 2,
    "body": 82,
    "familiar": 89,
    "head": 129,
    "prop": 276,
    "rune": 283
  },
  {
    "idx": 4897,
    "name": "Witch Lilith of the Brambles",
    "background": 1,
    "body": 12,
    "familiar": 110,
    "head": 209,
    "prop": 267,
    "rune": 302
  },
  {
    "idx": 4898,
    "name": "Archmagus Winter Squash of the Valley",
    "background": 2,
    "body": 45,
    "familiar": 97,
    "head": 172,
    "prop": 317,
    "rune": 292
  },
  {
    "idx": 4899,
    "name": "Archmagus Ozohr of the Hills",
    "background": 2,
    "body": 84,
    "familiar": 101,
    "head": 185,
    "prop": 265,
    "rune": 292
  },
  {
    "idx": 4900,
    "name": "Druid Galatea of the Valley",
    "background": 0,
    "body": 39,
    "familiar": 93,
    "head": 139,
    "prop": 325,
    "rune": 282
  },
  {
    "idx": 4901,
    "name": "Vampyre Damien of the Havens",
    "background": 2,
    "body": 10,
    "familiar": 107,
    "head": 152,
    "prop": 253,
    "rune": 301
  },
  {
    "idx": 4902,
    "name": "Sage Zelda of the Cold",
    "background": 0,
    "body": 65,
    "familiar": 97,
    "head": 209,
    "prop": 245,
    "rune": 294
  },
  {
    "idx": 4903,
    "name": "Enchanter Carly of the Steppe",
    "background": 2,
    "body": 21,
    "familiar": 97,
    "head": 187,
    "prop": 253,
    "rune": 292
  },
  {
    "idx": 4904,
    "name": "Aeromancer Eizo of the Sun",
    "background": 3,
    "body": 27,
    "familiar": 108,
    "head": 215,
    "prop": 315,
    "rune": 295
  },
  {
    "idx": 4905,
    "name": "Arcanist Casper of the Wood",
    "background": 0,
    "body": 84,
    "familiar": 105,
    "head": 162,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 4906,
    "name": "Shaman Ixar of the Brine",
    "background": 0,
    "body": 57,
    "familiar": 108,
    "head": 215,
    "prop": 324,
    "rune": 300
  },
  {
    "idx": 4907,
    "name": "Artificer Flynn of the Marsh",
    "background": 0,
    "body": 12,
    "familiar": 89,
    "head": 173,
    "prop": 272,
    "rune": 303
  },
  {
    "idx": 4908,
    "name": "Summoner Milton of the Quantum Shadow",
    "background": 2,
    "body": 87,
    "familiar": 88,
    "head": 231,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 4909,
    "name": "Hedge Wizard Arabella of the Lake",
    "background": 3,
    "body": 12,
    "familiar": 108,
    "head": 187,
    "prop": 325,
    "rune": 292
  },
  {
    "idx": 4910,
    "name": "Ozohr of the Mount",
    "background": 2,
    "body": 49,
    "familiar": 111,
    "head": 227,
    "prop": 312,
    "rune": 292
  },
  {
    "idx": 4911,
    "name": "Sage Rocco of the Bibliotheca",
    "background": 1,
    "body": 6,
    "familiar": 116,
    "head": 150,
    "prop": 266,
    "rune": 294
  },
  {
    "idx": 4912,
    "name": "Voodoo Priest Auguste of the Citadel",
    "background": 2,
    "body": 26,
    "familiar": 95,
    "head": 149,
    "prop": 307,
    "rune": 302
  },
  {
    "idx": 4913,
    "name": "Charmer Daria of the Grotto",
    "background": 2,
    "body": 38,
    "familiar": 120,
    "head": 191,
    "prop": 339,
    "rune": 303
  },
  {
    "idx": 4914,
    "name": "Ghost Eater Apollo of the Ice",
    "background": 1,
    "body": 73,
    "familiar": 95,
    "head": 160,
    "prop": 335,
    "rune": 288
  },
  {
    "idx": 4915,
    "name": "Illusionist Aslan in the Shadows",
    "background": 3,
    "body": 86,
    "familiar": 95,
    "head": 220,
    "prop": 246,
    "rune": 285
  },
  {
    "idx": 4916,
    "name": "Sage Soya of the Quantum Shadow",
    "background": 0,
    "body": 85,
    "familiar": 109,
    "head": 238,
    "prop": 277,
    "rune": 291
  },
  {
    "idx": 4917,
    "name": "Magus Woomba of the Inferno",
    "background": 3,
    "body": 85,
    "familiar": 106,
    "head": 200,
    "prop": 263,
    "rune": 295
  },
  {
    "idx": 4918,
    "name": "Sky Master Magpie of the Light",
    "background": 0,
    "body": 52,
    "familiar": 88,
    "head": 144,
    "prop": 247,
    "rune": 287
  },
  {
    "idx": 4919,
    "name": "Sorcerer Azahl of the Capital",
    "background": 0,
    "body": 40,
    "familiar": 95,
    "head": 189,
    "prop": 276,
    "rune": 283
  },
  {
    "idx": 4920,
    "name": "Diabolist Rita of Mu",
    "background": 2,
    "body": 75,
    "familiar": 93,
    "head": 223,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 4921,
    "name": "Geomancer Hothor",
    "background": 1,
    "body": 9,
    "familiar": 99,
    "head": 165,
    "prop": 308,
    "rune": 287
  },
  {
    "idx": 4922,
    "name": "Cosmic Mage Hothor of the Brambles",
    "background": 0,
    "body": 44,
    "familiar": 103,
    "head": 206,
    "prop": 310,
    "rune": 300
  },
  {
    "idx": 4923,
    "name": "Illusionist Solomon of the Capital",
    "background": 3,
    "body": 74,
    "familiar": 110,
    "head": 186,
    "prop": 273,
    "rune": 285
  },
  {
    "idx": 4924,
    "name": "Conjurer Axis of Atlantis",
    "background": 0,
    "body": 57,
    "familiar": 111,
    "head": 167,
    "prop": 331,
    "rune": 302
  },
  {
    "idx": 4925,
    "name": "Druid Brown Cow of the Hills",
    "background": 1,
    "body": 82,
    "familiar": 97,
    "head": 193,
    "prop": 276,
    "rune": 291
  },
  {
    "idx": 4926,
    "name": "Sorcerer Milton of the Berg",
    "background": 2,
    "body": 73,
    "familiar": 95,
    "head": 185,
    "prop": 316,
    "rune": 285
  },
  {
    "idx": 4927,
    "name": "Aeromancer Apollo of the Crypt",
    "background": 3,
    "body": 71,
    "familiar": 114,
    "head": 227,
    "prop": 315,
    "rune": 285
  },
  {
    "idx": 4928,
    "name": "Fortune Teller Cosmo of the Light",
    "background": 0,
    "body": 67,
    "familiar": 97,
    "head": 142,
    "prop": 245,
    "rune": 284
  },
  {
    "idx": 4929,
    "name": "Alchemist Faiz of the Plains",
    "background": 0,
    "body": 12,
    "familiar": 114,
    "head": 142,
    "prop": 323,
    "rune": 296
  },
  {
    "idx": 4930,
    "name": "Alchemist Behemoth of Arcadia",
    "background": 2,
    "body": 41,
    "familiar": 114,
    "head": 193,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 4931,
    "name": "Alchemist Alizam of the Grotto",
    "background": 1,
    "body": 19,
    "familiar": 116,
    "head": 164,
    "prop": 269,
    "rune": 284
  },
  {
    "idx": 4932,
    "name": "Witch Sabina of the Plains",
    "background": 2,
    "body": 43,
    "familiar": 89,
    "head": 209,
    "prop": 276,
    "rune": 288
  },
  {
    "idx": 4933,
    "name": "Battle Mage Goliath of the Morning Star",
    "background": 2,
    "body": 85,
    "familiar": 120,
    "head": 217,
    "prop": 315,
    "rune": 293
  },
  {
    "idx": 4934,
    "name": "Carly of Atlantis",
    "background": 1,
    "body": 80,
    "familiar": 93,
    "head": 187,
    "prop": 250,
    "rune": 285
  },
  {
    "idx": 4935,
    "name": "Shaman Silas of the Berg",
    "background": 1,
    "body": 65,
    "familiar": 97,
    "head": 211,
    "prop": 319,
    "rune": 297
  },
  {
    "idx": 4936,
    "name": "Mystic Samuel of the Wood",
    "background": 1,
    "body": 23,
    "familiar": 111,
    "head": 165,
    "prop": 249,
    "rune": 299
  },
  {
    "idx": 4937,
    "name": "Necromancer Chiron of the Valley",
    "background": 1,
    "body": 54,
    "familiar": 117,
    "head": 224,
    "prop": 278,
    "rune": 303
  },
  {
    "idx": 4938,
    "name": "Mystic Jastor of the Astral Plane",
    "background": 1,
    "body": 8,
    "familiar": 110,
    "head": 178,
    "prop": 322,
    "rune": 284
  },
  {
    "idx": 4939,
    "name": "Enchanter Faiz of the Toadstools",
    "background": 1,
    "body": 29,
    "familiar": 112,
    "head": 219,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 4940,
    "name": "Conjurer Apollo of the Mount",
    "background": 2,
    "body": 55,
    "familiar": 90,
    "head": 147,
    "prop": 246,
    "rune": 292
  },
  {
    "idx": 4941,
    "name": "Sorcerer Remus of the Waste",
    "background": 2,
    "body": 85,
    "familiar": 114,
    "head": 192,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 4942,
    "name": "Ghost Eater Calliope of the Heath",
    "background": 1,
    "body": 31,
    "familiar": 88,
    "head": 191,
    "prop": 332,
    "rune": 300
  },
  {
    "idx": 4943,
    "name": "Mystic Faye of the Wild",
    "background": 0,
    "body": 34,
    "familiar": 108,
    "head": 131,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 4944,
    "name": "Archmagus Iprix of El Dorado",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 221,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 4945,
    "name": "Battle Mage Eric of the Mount",
    "background": 0,
    "body": 49,
    "familiar": 90,
    "head": 220,
    "prop": 247,
    "rune": 284
  },
  {
    "idx": 4946,
    "name": "Illusionist Ulysse of the Villa",
    "background": 3,
    "body": 46,
    "familiar": 103,
    "head": 206,
    "prop": 306,
    "rune": 297
  },
  {
    "idx": 4947,
    "name": "Artificer Alessar of the Cosmos",
    "background": 2,
    "body": 10,
    "familiar": 107,
    "head": 212,
    "prop": 318,
    "rune": 296
  },
  {
    "idx": 4948,
    "name": "Wild Mage Agapito of the Ether",
    "background": 0,
    "body": 10,
    "familiar": 7777,
    "head": 201,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4949,
    "name": "Sorcerer Silas of the Platonic Shadow",
    "background": 1,
    "body": 52,
    "familiar": 105,
    "head": 127,
    "prop": 262,
    "rune": 300
  },
  {
    "idx": 4950,
    "name": "Archmagus Mace in the Shadows",
    "background": 0,
    "body": 85,
    "familiar": 123,
    "head": 150,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 4951,
    "name": "Arcanist Qianfan of Avalon",
    "background": 2,
    "body": 63,
    "familiar": 97,
    "head": 236,
    "prop": 266,
    "rune": 297
  },
  {
    "idx": 4952,
    "name": "Arch-Magician Lux of the Garden",
    "background": 0,
    "body": 28,
    "familiar": 7777,
    "head": 202,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 4953,
    "name": "Magus Cassiopeia of the Brambles",
    "background": 1,
    "body": 37,
    "familiar": 115,
    "head": 135,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 4954,
    "name": "Cleric Arabella of the Riviera",
    "background": 0,
    "body": 21,
    "familiar": 115,
    "head": 198,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 4955,
    "name": "Shaman Goober of the Oasis",
    "background": 1,
    "body": 5,
    "familiar": 90,
    "head": 200,
    "prop": 276,
    "rune": 299
  },
  {
    "idx": 4956,
    "name": "Illusionist Ai of the Realm",
    "background": 2,
    "body": 67,
    "familiar": 90,
    "head": 180,
    "prop": 246,
    "rune": 293
  },
  {
    "idx": 4957,
    "name": "Witch Hanataka of the Morning Star",
    "background": 0,
    "body": 86,
    "familiar": 93,
    "head": 243,
    "prop": 321,
    "rune": 302
  },
  {
    "idx": 4958,
    "name": "Sorcerer Hadrien of the Ether",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 147,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 4959,
    "name": "Transmuter Hanataka of the Astral Plane",
    "background": 3,
    "body": 52,
    "familiar": 90,
    "head": 243,
    "prop": 256,
    "rune": 285
  },
  {
    "idx": 4960,
    "name": "Alchemist Alessar of the Mist",
    "background": 2,
    "body": 6,
    "familiar": 90,
    "head": 160,
    "prop": 267,
    "rune": 294
  },
  {
    "idx": 4961,
    "name": "Geomancer Mina of the Wood",
    "background": 0,
    "body": 22,
    "familiar": 123,
    "head": 132,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 4962,
    "name": "Battle Mage Borak of the Dunes",
    "background": 3,
    "body": 59,
    "familiar": 99,
    "head": 188,
    "prop": 316,
    "rune": 300
  },
  {
    "idx": 4963,
    "name": "Magus Brown Cow of the Hills",
    "background": 2,
    "body": 82,
    "familiar": 97,
    "head": 193,
    "prop": 266,
    "rune": 284
  },
  {
    "idx": 4964,
    "name": "Voodoo Priest Victor",
    "background": 1,
    "body": 26,
    "familiar": 112,
    "head": 149,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 4965,
    "name": "Archmagus Udor of the Secret Fire",
    "background": 0,
    "body": 87,
    "familiar": 111,
    "head": 228,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 4966,
    "name": "Artificer Aamon of the Hall",
    "background": 3,
    "body": 48,
    "familiar": 103,
    "head": 239,
    "prop": 260,
    "rune": 285
  },
  {
    "idx": 4967,
    "name": "Mystic Azar of the Waste",
    "background": 1,
    "body": 85,
    "familiar": 88,
    "head": 158,
    "prop": 249,
    "rune": 292
  },
  {
    "idx": 4968,
    "name": "Sage Marius of the Rock",
    "background": 2,
    "body": 61,
    "familiar": 95,
    "head": 149,
    "prop": 266,
    "rune": 285
  },
  {
    "idx": 4969,
    "name": "Hedge Wizard Rowena of Tartarus",
    "background": 0,
    "body": 86,
    "familiar": 97,
    "head": 209,
    "prop": 273,
    "rune": 7777
  },
  {
    "idx": 4970,
    "name": "Illusionist Calliope of the Heath",
    "background": 0,
    "body": 36,
    "familiar": 107,
    "head": 139,
    "prop": 273,
    "rune": 291
  },
  {
    "idx": 4971,
    "name": "Arch-Magician Mace of the Fey",
    "background": 1,
    "body": 29,
    "familiar": 114,
    "head": 125,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4972,
    "name": "Druid Cairon of the Wood",
    "background": 2,
    "body": 42,
    "familiar": 111,
    "head": 228,
    "prop": 276,
    "rune": 290
  },
  {
    "idx": 4973,
    "name": "Enchanter Leah of the Valley",
    "background": 3,
    "body": 38,
    "familiar": 88,
    "head": 131,
    "prop": 312,
    "rune": 293
  },
  {
    "idx": 4974,
    "name": "Hedge Wizard Basil of the Brine",
    "background": 0,
    "body": 57,
    "familiar": 108,
    "head": 199,
    "prop": 312,
    "rune": 303
  },
  {
    "idx": 4975,
    "name": "Archmagus Alex of the Desert",
    "background": 2,
    "body": 5,
    "familiar": 114,
    "head": 125,
    "prop": 248,
    "rune": 299
  },
  {
    "idx": 4976,
    "name": "Artificer Bobbin of the Brambles",
    "background": 0,
    "body": 41,
    "familiar": 7777,
    "head": 201,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 4977,
    "name": "Archmagus Eden of the Keep",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 127,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 4978,
    "name": "Alchemist Samael of the Toadstools",
    "background": 1,
    "body": 28,
    "familiar": 7777,
    "head": 205,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 4979,
    "name": "Diviner Arabella of the Temple",
    "background": 2,
    "body": 7,
    "familiar": 89,
    "head": 131,
    "prop": 251,
    "rune": 283
  },
  {
    "idx": 4980,
    "name": "Archmagus Alessar of the Light",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 127,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 4981,
    "name": "Necromancer Chiron of the Astral Plane",
    "background": 1,
    "body": 52,
    "familiar": 88,
    "head": 194,
    "prop": 307,
    "rune": 293
  },
  {
    "idx": 4982,
    "name": "Mystic Allistair of the Keep",
    "background": 3,
    "body": 7,
    "familiar": 103,
    "head": 233,
    "prop": 338,
    "rune": 285
  },
  {
    "idx": 4983,
    "name": "Arch-Magician Impy of the Belfry",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 200,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 4984,
    "name": "Battle Mage Homer of the Wood",
    "background": 1,
    "body": 42,
    "familiar": 89,
    "head": 165,
    "prop": 312,
    "rune": 7777
  },
  {
    "idx": 4985,
    "name": "Sorcerer Apollo of the Hills",
    "background": 1,
    "body": 82,
    "familiar": 88,
    "head": 137,
    "prop": 280,
    "rune": 290
  },
  {
    "idx": 4986,
    "name": "Artificer Soya of the Bastion",
    "background": 0,
    "body": 74,
    "familiar": 7777,
    "head": 233,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 4987,
    "name": "Shaman Cassandra of the Heath",
    "background": 1,
    "body": 36,
    "familiar": 7777,
    "head": 155,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 4988,
    "name": "Battle Mage Goliath of the Marsh",
    "background": 1,
    "body": 19,
    "familiar": 109,
    "head": 133,
    "prop": 7777,
    "rune": 303
  },
  {
    "idx": 4989,
    "name": "Druid Rowena of the Forest",
    "background": 1,
    "body": 84,
    "familiar": 107,
    "head": 166,
    "prop": 317,
    "rune": 287
  },
  {
    "idx": 4990,
    "name": "Sorcerer Milton of the Astral Plane",
    "background": 0,
    "body": 24,
    "familiar": 105,
    "head": 189,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 4991,
    "name": "Arch-Magician Iprix of the Cosmos",
    "background": 0,
    "body": 8,
    "familiar": 93,
    "head": 230,
    "prop": 258,
    "rune": 291
  },
  {
    "idx": 4992,
    "name": "Medium Soya of the Hall",
    "background": 2,
    "body": 48,
    "familiar": 90,
    "head": 162,
    "prop": 329,
    "rune": 304
  },
  {
    "idx": 4993,
    "name": "Sorcerer Faiz of the Sacred Pillars",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 164,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 4994,
    "name": "Shaman Tumbaj of the Sands",
    "background": 1,
    "body": 27,
    "familiar": 94,
    "head": 237,
    "prop": 264,
    "rune": 297
  },
  {
    "idx": 4995,
    "name": "Sorcerer Uday of the Great Blue",
    "background": 1,
    "body": 57,
    "familiar": 93,
    "head": 164,
    "prop": 314,
    "rune": 294
  },
  {
    "idx": 4996,
    "name": "Void Disciple Arcus of the Gnostics",
    "background": 1,
    "body": 11,
    "familiar": 88,
    "head": 194,
    "prop": 256,
    "rune": 282
  },
  {
    "idx": 4997,
    "name": "Hedge Wizard Pozzik of Mu",
    "background": 2,
    "body": 8,
    "familiar": 99,
    "head": 235,
    "prop": 326,
    "rune": 302
  },
  {
    "idx": 4998,
    "name": "Archmagus Orlando in the Shadows",
    "background": 1,
    "body": 85,
    "familiar": 7777,
    "head": 150,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 4999,
    "name": "Wild Mage Ofaris of the Hollow",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 138,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 5000,
    "name": "The East Helper",
    "background": 1,
    "body": 52,
    "familiar": 7777,
    "head": 221,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 5001,
    "name": "Celah of the Brambles",
    "background": 0,
    "body": 43,
    "familiar": 94,
    "head": 215,
    "prop": 280,
    "rune": 296
  },
  {
    "idx": 5002,
    "name": "Alchemist Remus of the Steppe",
    "background": 0,
    "body": 23,
    "familiar": 7777,
    "head": 215,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 5003,
    "name": "Conjurer Pumlo of the Desert",
    "background": 2,
    "body": 27,
    "familiar": 107,
    "head": 185,
    "prop": 246,
    "rune": 293
  },
  {
    "idx": 5004,
    "name": "Alchemist Jahid of the Marsh",
    "background": 1,
    "body": 14,
    "familiar": 7777,
    "head": 219,
    "prop": 327,
    "rune": 287
  },
  {
    "idx": 5005,
    "name": "Battle Mage Tundror of the Villa",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 204,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 5006,
    "name": "Artificer Zaros of El Dorado",
    "background": 0,
    "body": 48,
    "familiar": 120,
    "head": 197,
    "prop": 261,
    "rune": 287
  },
  {
    "idx": 5007,
    "name": "Hex Mage Lumos of the Palms",
    "background": 2,
    "body": 59,
    "familiar": 95,
    "head": 160,
    "prop": 277,
    "rune": 288
  },
  {
    "idx": 5008,
    "name": "Archmagus Isaac of the Cosmos",
    "background": 2,
    "body": 24,
    "familiar": 94,
    "head": 211,
    "prop": 335,
    "rune": 299
  },
  {
    "idx": 5009,
    "name": "Void Disciple Tengukensei of the Hollow",
    "background": 2,
    "body": 79,
    "familiar": 89,
    "head": 243,
    "prop": 307,
    "rune": 304
  },
  {
    "idx": 5010,
    "name": "Battle Mage Robert of the Mount",
    "background": 1,
    "body": 49,
    "familiar": 111,
    "head": 218,
    "prop": 321,
    "rune": 297
  },
  {
    "idx": 5011,
    "name": "Hydromancer Talon of the Brine",
    "background": 1,
    "body": 80,
    "familiar": 107,
    "head": 177,
    "prop": 314,
    "rune": 299
  },
  {
    "idx": 5012,
    "name": "Archmagus Jeldor of the Gnostics",
    "background": 0,
    "body": 10,
    "familiar": 110,
    "head": 238,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 5013,
    "name": "Archmagus Aleister of the Villa",
    "background": 1,
    "body": 40,
    "familiar": 7777,
    "head": 202,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 5014,
    "name": "Sorcerer Idris of the Capital",
    "background": 0,
    "body": 77,
    "familiar": 104,
    "head": 128,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 5015,
    "name": "Druid Udor of the Hills",
    "background": 2,
    "body": 14,
    "familiar": 104,
    "head": 233,
    "prop": 328,
    "rune": 299
  },
  {
    "idx": 5016,
    "name": "Battle Mage Hagar of the Tower",
    "background": 0,
    "body": 55,
    "familiar": 115,
    "head": 133,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 5017,
    "name": "Alchemist Woomba",
    "background": 0,
    "body": 65,
    "familiar": 111,
    "head": 171,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 5018,
    "name": "Magus Min of the Wood",
    "background": 0,
    "body": 34,
    "familiar": 123,
    "head": 180,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 5019,
    "name": "Sorcerer Solomon of Dreams",
    "background": 0,
    "body": 7,
    "familiar": 112,
    "head": 231,
    "prop": 315,
    "rune": 294
  },
  {
    "idx": 5020,
    "name": "Sage Charlord of the Rock",
    "background": 2,
    "body": 27,
    "familiar": 120,
    "head": 158,
    "prop": 325,
    "rune": 297
  },
  {
    "idx": 5021,
    "name": "Alchemist Woomba of the Wood",
    "background": 1,
    "body": 13,
    "familiar": 97,
    "head": 200,
    "prop": 268,
    "rune": 287
  },
  {
    "idx": 5022,
    "name": "Sorcerer Remus of the Canyon",
    "background": 0,
    "body": 43,
    "familiar": 119,
    "head": 174,
    "prop": 309,
    "rune": 303
  },
  {
    "idx": 5023,
    "name": "Sage Remus of El Dorado",
    "background": 0,
    "body": 74,
    "familiar": 123,
    "head": 228,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 5024,
    "name": "Shadow Mage Cassandra of the Field",
    "background": 0,
    "body": 44,
    "familiar": 120,
    "head": 209,
    "prop": 309,
    "rune": 287
  },
  {
    "idx": 5025,
    "name": "Shaman Fugh",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 235,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 5026,
    "name": "Arch-Magician Gary of the Wild",
    "background": 2,
    "body": 19,
    "familiar": 116,
    "head": 165,
    "prop": 324,
    "rune": 296
  },
  {
    "idx": 5027,
    "name": "Adept Daria of the Mist",
    "background": 1,
    "body": 49,
    "familiar": 89,
    "head": 131,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 5028,
    "name": "Arch-Magician Qasim of the Mist",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 128,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 5029,
    "name": "Battle Mage Finn of the Keep",
    "background": 0,
    "body": 48,
    "familiar": 123,
    "head": 173,
    "prop": 312,
    "rune": 294
  },
  {
    "idx": 5030,
    "name": "Artificer Angus of the Sacred Pillars",
    "background": 0,
    "body": 50,
    "familiar": 7777,
    "head": 216,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 5031,
    "name": "Magus Alatar of the Havens",
    "background": 0,
    "body": 24,
    "familiar": 110,
    "head": 232,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 5032,
    "name": "Hedge Wizard Ofaris of the Mist",
    "background": 2,
    "body": 62,
    "familiar": 97,
    "head": 160,
    "prop": 266,
    "rune": 303
  },
  {
    "idx": 5033,
    "name": "Shaman Silas of the Plains",
    "background": 1,
    "body": 82,
    "familiar": 7777,
    "head": 197,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 5034,
    "name": "Druid Luther of the Bastion",
    "background": 0,
    "body": 26,
    "familiar": 109,
    "head": 217,
    "prop": 317,
    "rune": 304
  },
  {
    "idx": 5035,
    "name": "Wizard Huizhong of the Veil",
    "background": 0,
    "body": 11,
    "familiar": 7777,
    "head": 236,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 5036,
    "name": "Alchemist Calista of the Plains",
    "background": 2,
    "body": 44,
    "familiar": 119,
    "head": 132,
    "prop": 267,
    "rune": 287
  },
  {
    "idx": 5037,
    "name": "Battle Mage Wolfram of the Platonic Shadow",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 182,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 5038,
    "name": "Archmagus Zaros of the Thorn",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 214,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 5039,
    "name": "Enchanter Cassiopeia of Elysium",
    "background": 1,
    "body": 55,
    "familiar": 120,
    "head": 135,
    "prop": 328,
    "rune": 303
  },
  {
    "idx": 5040,
    "name": "Wild Mage Jianyu of the Ether",
    "background": 2,
    "body": 11,
    "familiar": 123,
    "head": 236,
    "prop": 320,
    "rune": 304
  },
  {
    "idx": 5041,
    "name": "Arch-Magician Merlon of the Heath",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 185,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 5042,
    "name": "Druid Titania of the Valley",
    "background": 0,
    "body": 21,
    "familiar": 112,
    "head": 135,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 5043,
    "name": "Pyromancer Samuel of the Event Horizon",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 177,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 5044,
    "name": "Battle Mage Cromwell of the Sacred Pillars",
    "background": 0,
    "body": 63,
    "familiar": 104,
    "head": 173,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 5045,
    "name": "Bard Merlon of the Ether",
    "background": 2,
    "body": 9,
    "familiar": 89,
    "head": 174,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 5046,
    "name": "Diabolist Aden of the Capital",
    "background": 1,
    "body": 76,
    "familiar": 114,
    "head": 207,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 5047,
    "name": "Archmagus Larissa of the Grotto",
    "background": 0,
    "body": 79,
    "familiar": 119,
    "head": 131,
    "prop": 316,
    "rune": 296
  },
  {
    "idx": 5048,
    "name": "Thaumaturge Crowley",
    "background": 0,
    "body": 19,
    "familiar": 7777,
    "head": 230,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 5049,
    "name": "Battle Mage Hansel of the Hollow",
    "background": 0,
    "body": 41,
    "familiar": 116,
    "head": 165,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 5050,
    "name": "Cleric Udor out of the Blizzard",
    "background": 1,
    "body": 65,
    "familiar": 7777,
    "head": 185,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 5051,
    "name": "Archmagus Iprix of the Realm",
    "background": 2,
    "body": 10,
    "familiar": 105,
    "head": 212,
    "prop": 260,
    "rune": 294
  },
  {
    "idx": 5052,
    "name": "Artificer Jerret of the Keep",
    "background": 1,
    "body": 54,
    "familiar": 101,
    "head": 189,
    "prop": 261,
    "rune": 284
  },
  {
    "idx": 5053,
    "name": "Magus Aldus of the Havens",
    "background": 1,
    "body": 6,
    "familiar": 104,
    "head": 199,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 5054,
    "name": "Archmagus Zaros of the Dunes",
    "background": 0,
    "body": 27,
    "familiar": 112,
    "head": 185,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 5055,
    "name": "Archmagus Asmodeus of the Pit",
    "background": 1,
    "body": 86,
    "familiar": 97,
    "head": 194,
    "prop": 322,
    "rune": 290
  },
  {
    "idx": 5056,
    "name": "Sorcerer Taqi of the Mist",
    "background": 1,
    "body": 62,
    "familiar": 7777,
    "head": 219,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 5057,
    "name": "Magus Remus of the Cosmos",
    "background": 2,
    "body": 10,
    "familiar": 108,
    "head": 230,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 5058,
    "name": "Adept Apollo of the Quantum Downs",
    "background": 0,
    "body": 24,
    "familiar": 93,
    "head": 202,
    "prop": 332,
    "rune": 284
  },
  {
    "idx": 5059,
    "name": "Electromancer Baird of the Psychic Leap",
    "background": 1,
    "body": 9,
    "familiar": 111,
    "head": 220,
    "prop": 305,
    "rune": 293
  },
  {
    "idx": 5060,
    "name": "Enchanter Titania of the Hills",
    "background": 0,
    "body": 35,
    "familiar": 103,
    "head": 187,
    "prop": 276,
    "rune": 287
  },
  {
    "idx": 5061,
    "name": "Hadrien of the Sacred Pillars",
    "background": 1,
    "body": 54,
    "familiar": 7777,
    "head": 162,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 5062,
    "name": "Druid Anton of the Forest",
    "background": 0,
    "body": 42,
    "familiar": 99,
    "head": 194,
    "prop": 276,
    "rune": 287
  },
  {
    "idx": 5063,
    "name": "Hedge Wizard Shivra of the Havens",
    "background": 2,
    "body": 50,
    "familiar": 99,
    "head": 209,
    "prop": 312,
    "rune": 286
  },
  {
    "idx": 5064,
    "name": "Artificer Salvatore of the Wood",
    "background": 2,
    "body": 79,
    "familiar": 97,
    "head": 211,
    "prop": 256,
    "rune": 303
  },
  {
    "idx": 5065,
    "name": "Sage Astrid of the Mount",
    "background": 1,
    "body": 50,
    "familiar": 109,
    "head": 132,
    "prop": 322,
    "rune": 291
  },
  {
    "idx": 5066,
    "name": "Sage Keziah of the Grotto",
    "background": 0,
    "body": 38,
    "familiar": 110,
    "head": 159,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 5067,
    "name": "Electromancer Milo of the Havens",
    "background": 2,
    "body": 83,
    "familiar": 89,
    "head": 229,
    "prop": 305,
    "rune": 282
  },
  {
    "idx": 5068,
    "name": "Ghost Eater Zhan of the Heath",
    "background": 0,
    "body": 22,
    "familiar": 110,
    "head": 180,
    "prop": 254,
    "rune": 292
  },
  {
    "idx": 5069,
    "name": "Illusionist Durm of the Hall",
    "background": 1,
    "body": 40,
    "familiar": 115,
    "head": 173,
    "prop": 306,
    "rune": 284
  },
  {
    "idx": 5070,
    "name": "Maia of the Ether",
    "background": 1,
    "body": 10,
    "familiar": 123,
    "head": 132,
    "prop": 270,
    "rune": 283
  },
  {
    "idx": 5071,
    "name": "Hedge Wizard Armstrong of the Plains",
    "background": 1,
    "body": 41,
    "familiar": 97,
    "head": 213,
    "prop": 312,
    "rune": 287
  },
  {
    "idx": 5072,
    "name": "Artificer Poppy of the Wild",
    "background": 1,
    "body": 45,
    "familiar": 7777,
    "head": 171,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 5073,
    "name": "Alchemist Lei of the Marsh",
    "background": 2,
    "body": 34,
    "familiar": 105,
    "head": 180,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 5074,
    "name": "Arcanist Izible of the Court",
    "background": 0,
    "body": 76,
    "familiar": 112,
    "head": 235,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 5075,
    "name": "Magus Nolan of the Carnival",
    "background": 0,
    "body": 30,
    "familiar": 7777,
    "head": 217,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 5076,
    "name": "Druid Samael of the Desert",
    "background": 1,
    "body": 27,
    "familiar": 120,
    "head": 194,
    "prop": 265,
    "rune": 293
  },
  {
    "idx": 5077,
    "name": "Charmer Ariadne of the Hills",
    "background": 0,
    "body": 36,
    "familiar": 94,
    "head": 191,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 5078,
    "name": "Artificer Bayard of the Hall",
    "background": 2,
    "body": 74,
    "familiar": 94,
    "head": 206,
    "prop": 340,
    "rune": 284
  },
  {
    "idx": 5079,
    "name": "Hedge Wizard Ratko of the Steppe",
    "background": 1,
    "body": 15,
    "familiar": 93,
    "head": 182,
    "prop": 319,
    "rune": 292
  },
  {
    "idx": 5080,
    "name": "Shaman Flamos of the Quantum Shadow",
    "background": 1,
    "body": 83,
    "familiar": 88,
    "head": 158,
    "prop": 322,
    "rune": 302
  },
  {
    "idx": 5081,
    "name": "Sage Soran of Limbo",
    "background": 0,
    "body": 85,
    "familiar": 99,
    "head": 229,
    "prop": 318,
    "rune": 283
  },
  {
    "idx": 5082,
    "name": "Sage Jeldor of the Toadstools",
    "background": 0,
    "body": 29,
    "familiar": 111,
    "head": 228,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 5083,
    "name": "Archmagus Azahl of the Bibliotheca",
    "background": 1,
    "body": 54,
    "familiar": 7777,
    "head": 162,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 5084,
    "name": "Sorcerer Allistair of Avalon",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 185,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 5085,
    "name": "Battle Mage Samuel of the Grotto",
    "background": 0,
    "body": 23,
    "familiar": 97,
    "head": 203,
    "prop": 319,
    "rune": 293
  },
  {
    "idx": 5086,
    "name": "Alchemist Quddus of Elysium",
    "background": 2,
    "body": 49,
    "familiar": 7777,
    "head": 219,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 5087,
    "name": "Battle Mage Armstrong of the Sun",
    "background": 1,
    "body": 27,
    "familiar": 89,
    "head": 218,
    "prop": 276,
    "rune": 293
  },
  {
    "idx": 5088,
    "name": "Arch-Magician Ratko of the Court",
    "background": 1,
    "body": 18,
    "familiar": 119,
    "head": 129,
    "prop": 258,
    "rune": 300
  },
  {
    "idx": 5089,
    "name": "Battle Mage Durm",
    "background": 3,
    "body": 10,
    "familiar": 90,
    "head": 220,
    "prop": 309,
    "rune": 296
  },
  {
    "idx": 5090,
    "name": "Hex Mage Hellspawn of the Veil",
    "background": 0,
    "body": 8,
    "familiar": 97,
    "head": 158,
    "prop": 309,
    "rune": 283
  },
  {
    "idx": 5091,
    "name": "Clairvoyant Nori from the Abyss",
    "background": 0,
    "body": 86,
    "familiar": 88,
    "head": 126,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 5092,
    "name": "Sky Master Corvin of the Sacred Pillars",
    "background": 2,
    "body": 62,
    "familiar": 112,
    "head": 144,
    "prop": 340,
    "rune": 292
  },
  {
    "idx": 5093,
    "name": "Chronomancer Ixar of the Marsh",
    "background": 1,
    "body": 84,
    "familiar": 110,
    "head": 227,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 5094,
    "name": "Mystic Hagatha of the Heath",
    "background": 1,
    "body": 35,
    "familiar": 104,
    "head": 159,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 5095,
    "name": "Illusionist Hecate of the Keep",
    "background": 0,
    "body": 77,
    "familiar": 104,
    "head": 166,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 5096,
    "name": "Charmer Larissa of the Grotto",
    "background": 0,
    "body": 35,
    "familiar": 120,
    "head": 208,
    "prop": 338,
    "rune": 285
  },
  {
    "idx": 5097,
    "name": "Runecaster Qianfan of the Event Horizon",
    "background": 0,
    "body": 11,
    "familiar": 119,
    "head": 236,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 5098,
    "name": "Ghost Eater Ali of the Garden",
    "background": 3,
    "body": 30,
    "familiar": 89,
    "head": 219,
    "prop": 337,
    "rune": 297
  },
  {
    "idx": 5099,
    "name": "Artificer Eden of the Riviera",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 174,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 5100,
    "name": "Druid Hishoken of the Hills",
    "background": 2,
    "body": 17,
    "familiar": 120,
    "head": 243,
    "prop": 326,
    "rune": 297
  },
  {
    "idx": 5101,
    "name": "Arabella of the Marsh",
    "background": 1,
    "body": 22,
    "familiar": 97,
    "head": 130,
    "prop": 258,
    "rune": 300
  },
  {
    "idx": 5102,
    "name": "Magus Caligula of Arcadia",
    "background": 2,
    "body": 15,
    "familiar": 89,
    "head": 218,
    "prop": 255,
    "rune": 299
  },
  {
    "idx": 5103,
    "name": "Artis of the Palms",
    "background": 1,
    "body": 27,
    "familiar": 107,
    "head": 156,
    "prop": 326,
    "rune": 303
  },
  {
    "idx": 5104,
    "name": "Silas of the Brambles",
    "background": 0,
    "body": 43,
    "familiar": 89,
    "head": 230,
    "prop": 270,
    "rune": 299
  },
  {
    "idx": 5105,
    "name": "Arch-Magician Sonja of the Heath",
    "background": 1,
    "body": 21,
    "familiar": 105,
    "head": 187,
    "prop": 321,
    "rune": 304
  },
  {
    "idx": 5106,
    "name": "Cryptomancer Toka of the Palms",
    "background": 2,
    "body": 61,
    "familiar": 104,
    "head": 200,
    "prop": 310,
    "rune": 303
  },
  {
    "idx": 5107,
    "name": "Alchemist Shanyuan of the Quantum Downs",
    "background": 0,
    "body": 11,
    "familiar": 114,
    "head": 236,
    "prop": 271,
    "rune": 302
  },
  {
    "idx": 5108,
    "name": "Battle Mage Robert of the Sacred Pillars",
    "background": 3,
    "body": 63,
    "familiar": 97,
    "head": 216,
    "prop": 319,
    "rune": 294
  },
  {
    "idx": 5109,
    "name": "Sorcerer Aleister of the Reach",
    "background": 1,
    "body": 43,
    "familiar": 97,
    "head": 199,
    "prop": 248,
    "rune": 291
  },
  {
    "idx": 5110,
    "name": "Archmagus Shivra from the Shadow",
    "background": 1,
    "body": 87,
    "familiar": 107,
    "head": 223,
    "prop": 334,
    "rune": 296
  },
  {
    "idx": 5111,
    "name": "Willow of the Moors",
    "background": 1,
    "body": 31,
    "familiar": 88,
    "head": 131,
    "prop": 334,
    "rune": 288
  },
  {
    "idx": 5112,
    "name": "Fortune Teller Nolan of the Ice",
    "background": 2,
    "body": 65,
    "familiar": 89,
    "head": 217,
    "prop": 245,
    "rune": 302
  },
  {
    "idx": 5113,
    "name": "Archmagus Basil of the Steppe",
    "background": 1,
    "body": 14,
    "familiar": 105,
    "head": 192,
    "prop": 335,
    "rune": 299
  },
  {
    "idx": 5114,
    "name": "Archmagus Lumos of the Palms",
    "background": 0,
    "body": 5,
    "familiar": 93,
    "head": 238,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 5115,
    "name": "Artificer Qianfan of the Wold",
    "background": 2,
    "body": 19,
    "familiar": 115,
    "head": 236,
    "prop": 261,
    "rune": 296
  },
  {
    "idx": 5116,
    "name": "Hedge Wizard Keziah",
    "background": 1,
    "body": 11,
    "familiar": 119,
    "head": 159,
    "prop": 312,
    "rune": 288
  },
  {
    "idx": 5117,
    "name": "Cleric Jabir of the Realm",
    "background": 0,
    "body": 8,
    "familiar": 88,
    "head": 222,
    "prop": 252,
    "rune": 283
  },
  {
    "idx": 5118,
    "name": "Cosmic Mage Amir of the Mist",
    "background": 3,
    "body": 63,
    "familiar": 114,
    "head": 212,
    "prop": 338,
    "rune": 298
  },
  {
    "idx": 5119,
    "name": "Enchanter Titania of the Steppe",
    "background": 1,
    "body": 79,
    "familiar": 94,
    "head": 187,
    "prop": 246,
    "rune": 297
  },
  {
    "idx": 5120,
    "name": "Alchemist Toadstool of the Keep",
    "background": 1,
    "body": 26,
    "familiar": 105,
    "head": 195,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 5121,
    "name": "Sorcerer Zane of the Bastion",
    "background": 1,
    "body": 26,
    "familiar": 95,
    "head": 160,
    "prop": 271,
    "rune": 299
  },
  {
    "idx": 5122,
    "name": "Battle Mage Bayard of the Temple",
    "background": 1,
    "body": 50,
    "familiar": 119,
    "head": 173,
    "prop": 319,
    "rune": 283
  },
  {
    "idx": 5123,
    "name": "Artificer Fallow of the Grotto",
    "background": 2,
    "body": 41,
    "familiar": 104,
    "head": 167,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 5124,
    "name": "Necromancer Anton of the Sacred Pillars",
    "background": 0,
    "body": 55,
    "familiar": 93,
    "head": 194,
    "prop": 307,
    "rune": 304
  },
  {
    "idx": 5125,
    "name": "Archmagus George of the Hills",
    "background": 2,
    "body": 18,
    "familiar": 89,
    "head": 228,
    "prop": 340,
    "rune": 300
  },
  {
    "idx": 5126,
    "name": "Witch Wolfram of the Road",
    "background": 1,
    "body": 15,
    "familiar": 99,
    "head": 133,
    "prop": 321,
    "rune": 288
  },
  {
    "idx": 5127,
    "name": "Cleric George of the Gnostics",
    "background": 2,
    "body": 9,
    "familiar": 110,
    "head": 186,
    "prop": 338,
    "rune": 296
  },
  {
    "idx": 5128,
    "name": "Fortune Teller Mina of the Reach",
    "background": 3,
    "body": 32,
    "familiar": 97,
    "head": 198,
    "prop": 329,
    "rune": 302
  },
  {
    "idx": 5129,
    "name": "Adept Rook of the Platonic Shadow",
    "background": 1,
    "body": 11,
    "familiar": 112,
    "head": 144,
    "prop": 249,
    "rune": 294
  },
  {
    "idx": 5130,
    "name": "Diabolist Shivra of Xanadu",
    "background": 1,
    "body": 8,
    "familiar": 93,
    "head": 223,
    "prop": 309,
    "rune": 290
  },
  {
    "idx": 5131,
    "name": "Artificer Fredo of the Circle",
    "background": 2,
    "body": 30,
    "familiar": 108,
    "head": 201,
    "prop": 306,
    "rune": 291
  },
  {
    "idx": 5132,
    "name": "Cleric Moloch of the Wild",
    "background": 1,
    "body": 43,
    "familiar": 89,
    "head": 193,
    "prop": 338,
    "rune": 293
  },
  {
    "idx": 5133,
    "name": "Artificer Benito",
    "background": 2,
    "body": 26,
    "familiar": 108,
    "head": 201,
    "prop": 306,
    "rune": 303
  },
  {
    "idx": 5134,
    "name": "Druid Lamia of the Brambles",
    "background": 0,
    "body": 37,
    "familiar": 105,
    "head": 187,
    "prop": 316,
    "rune": 7777
  },
  {
    "idx": 5135,
    "name": "Artificer Dante of the Oasis",
    "background": 1,
    "body": 59,
    "familiar": 94,
    "head": 177,
    "prop": 256,
    "rune": 286
  },
  {
    "idx": 5136,
    "name": "Sorcerer Remus of Cuckoo Land",
    "background": 3,
    "body": 28,
    "familiar": 116,
    "head": 202,
    "prop": 320,
    "rune": 301
  },
  {
    "idx": 5137,
    "name": "Sorcerer Amir of the Mount",
    "background": 1,
    "body": 54,
    "familiar": 90,
    "head": 212,
    "prop": 280,
    "rune": 296
  },
  {
    "idx": 5138,
    "name": "Sorcerer Casper of the Event Horizon",
    "background": 1,
    "body": 24,
    "familiar": 88,
    "head": 214,
    "prop": 308,
    "rune": 290
  },
  {
    "idx": 5139,
    "name": "Runecaster Axel of the Valley",
    "background": 0,
    "body": 49,
    "familiar": 119,
    "head": 133,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 5140,
    "name": "Sorcerer Basil of the Berg",
    "background": 0,
    "body": 65,
    "familiar": 110,
    "head": 147,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 5141,
    "name": "Archmagus George of the Sacred Pillars",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 229,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 5142,
    "name": "Ice Mage Twinkletoes",
    "background": 0,
    "body": 65,
    "familiar": 115,
    "head": 201,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 5143,
    "name": "Geomancer Herne of the Marsh",
    "background": 1,
    "body": 43,
    "familiar": 101,
    "head": 167,
    "prop": 308,
    "rune": 298
  },
  {
    "idx": 5144,
    "name": "Chronomancer Aleister of the Capital",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 147,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 5145,
    "name": "Evoker Homer of the Bastion",
    "background": 1,
    "body": 77,
    "familiar": 115,
    "head": 203,
    "prop": 339,
    "rune": 292
  },
  {
    "idx": 5146,
    "name": "Thaumaturge Drokore of the Psychic Leap",
    "background": 1,
    "body": 9,
    "familiar": 110,
    "head": 207,
    "prop": 323,
    "rune": 287
  },
  {
    "idx": 5147,
    "name": "Enchanter Atlanta of the Morning Star",
    "background": 2,
    "body": 87,
    "familiar": 107,
    "head": 208,
    "prop": 260,
    "rune": 287
  },
  {
    "idx": 5148,
    "name": "Battle Mage Baird of El Dorado",
    "background": 3,
    "body": 40,
    "familiar": 120,
    "head": 129,
    "prop": 271,
    "rune": 294
  },
  {
    "idx": 5149,
    "name": "Diabolist Daria of Arcadia",
    "background": 2,
    "body": 38,
    "familiar": 120,
    "head": 135,
    "prop": 309,
    "rune": 302
  },
  {
    "idx": 5150,
    "name": "Battle Mage Tundror of the Forest",
    "background": 2,
    "body": 23,
    "familiar": 112,
    "head": 213,
    "prop": 320,
    "rune": 291
  },
  {
    "idx": 5151,
    "name": "Alessar of the Veil",
    "background": 0,
    "body": 10,
    "familiar": 94,
    "head": 160,
    "prop": 260,
    "rune": 297
  },
  {
    "idx": 5152,
    "name": "Pyromancer Ilu of the Toadstools",
    "background": 1,
    "body": 30,
    "familiar": 96,
    "head": 170,
    "prop": 309,
    "rune": 293
  },
  {
    "idx": 5153,
    "name": "Archmagus Casper of El Dorado",
    "background": 1,
    "body": 48,
    "familiar": 95,
    "head": 233,
    "prop": 248,
    "rune": 291
  },
  {
    "idx": 5154,
    "name": "Cosmic Mage Ifran of the Atheneum",
    "background": 3,
    "body": 50,
    "familiar": 108,
    "head": 164,
    "prop": 309,
    "rune": 283
  },
  {
    "idx": 5155,
    "name": "Evoker Rook of the Temple",
    "background": 0,
    "body": 50,
    "familiar": 103,
    "head": 144,
    "prop": 306,
    "rune": 297
  },
  {
    "idx": 5156,
    "name": "Void Disciple Malcom of the Havens",
    "background": 1,
    "body": 67,
    "familiar": 119,
    "head": 205,
    "prop": 268,
    "rune": 292
  },
  {
    "idx": 5157,
    "name": "Archmagus Alessar of the Veil",
    "background": 0,
    "body": 8,
    "familiar": 97,
    "head": 226,
    "prop": 276,
    "rune": 302
  },
  {
    "idx": 5158,
    "name": "Alessar of the Marsh",
    "background": 0,
    "body": 43,
    "familiar": 120,
    "head": 147,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 5159,
    "name": "Sorcerer Basil of the Hills",
    "background": 1,
    "body": 13,
    "familiar": 111,
    "head": 186,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 5160,
    "name": "Diabolist Sonja of the Mountain",
    "background": 3,
    "body": 35,
    "familiar": 103,
    "head": 132,
    "prop": 310,
    "rune": 290
  },
  {
    "idx": 5161,
    "name": "Archmagus Finch of the Atheneum",
    "background": 0,
    "body": 54,
    "familiar": 7777,
    "head": 150,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 5162,
    "name": "Ghost Eater Lenora of the Fey",
    "background": 0,
    "body": 28,
    "familiar": 88,
    "head": 176,
    "prop": 332,
    "rune": 293
  },
  {
    "idx": 5163,
    "name": "Archmagus Calliope of the Morning Star",
    "background": 1,
    "body": 86,
    "familiar": 111,
    "head": 135,
    "prop": 322,
    "rune": 304
  },
  {
    "idx": 5164,
    "name": "Celah of the Desert",
    "background": 0,
    "body": 5,
    "familiar": 7777,
    "head": 202,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 5165,
    "name": "Runecaster Cassiopeia of Arcadia",
    "background": 3,
    "body": 32,
    "familiar": 89,
    "head": 135,
    "prop": 325,
    "rune": 295
  },
  {
    "idx": 5166,
    "name": "Hedge Wizard Circe of the Sacred Pillars",
    "background": 3,
    "body": 55,
    "familiar": 94,
    "head": 208,
    "prop": 312,
    "rune": 282
  },
  {
    "idx": 5167,
    "name": "Orpheus of the Veil",
    "background": 0,
    "body": 67,
    "familiar": 103,
    "head": 212,
    "prop": 261,
    "rune": 299
  },
  {
    "idx": 5168,
    "name": "Sorcerer Ali of the Keep",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 219,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 5169,
    "name": "Archmagus Allistair of the Cosmos",
    "background": 1,
    "body": 9,
    "familiar": 123,
    "head": 228,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 5170,
    "name": "Magus Merlon of the River",
    "background": 1,
    "body": 12,
    "familiar": 7777,
    "head": 192,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 5171,
    "name": "Enchanter Thor of the Palms",
    "background": 2,
    "body": 58,
    "familiar": 99,
    "head": 188,
    "prop": 266,
    "rune": 296
  },
  {
    "idx": 5172,
    "name": "Magus Taqi of the Thorn",
    "background": 1,
    "body": 28,
    "familiar": 7777,
    "head": 219,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 5173,
    "name": "Arcanist Woomba of the Temple",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 171,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 5174,
    "name": "Artificer Agapito of the Mist",
    "background": 2,
    "body": 7,
    "familiar": 105,
    "head": 201,
    "prop": 271,
    "rune": 283
  },
  {
    "idx": 5175,
    "name": "Shaman Bathsheba of the Marsh",
    "background": 0,
    "body": 34,
    "familiar": 103,
    "head": 191,
    "prop": 265,
    "rune": 288
  },
  {
    "idx": 5176,
    "name": "Cosmic Mage Alessar of the Court",
    "background": 0,
    "body": 78,
    "familiar": 109,
    "head": 141,
    "prop": 310,
    "rune": 282
  },
  {
    "idx": 5177,
    "name": "Battle Mage Nolan of the Reach",
    "background": 2,
    "body": 44,
    "familiar": 120,
    "head": 129,
    "prop": 309,
    "rune": 302
  },
  {
    "idx": 5178,
    "name": "Witch Carmilla of the Event Horizon",
    "background": 2,
    "body": 24,
    "familiar": 97,
    "head": 176,
    "prop": 254,
    "rune": 283
  },
  {
    "idx": 5179,
    "name": "Pyromancer Fire Eater of the Riviera",
    "background": 2,
    "body": 19,
    "familiar": 93,
    "head": 158,
    "prop": 310,
    "rune": 294
  },
  {
    "idx": 5180,
    "name": "Ice Mage Gaspard of the Berg",
    "background": 3,
    "body": 73,
    "familiar": 93,
    "head": 149,
    "prop": 255,
    "rune": 303
  },
  {
    "idx": 5181,
    "name": "Sorcerer Chiyo of the Ether",
    "background": 3,
    "body": 11,
    "familiar": 120,
    "head": 126,
    "prop": 256,
    "rune": 293
  },
  {
    "idx": 5182,
    "name": "Hex Mage Milo",
    "background": 0,
    "body": 75,
    "familiar": 7777,
    "head": 127,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 5183,
    "name": "Archmagus Apollo of Alfheim",
    "background": 2,
    "body": 29,
    "familiar": 119,
    "head": 186,
    "prop": 266,
    "rune": 296
  },
  {
    "idx": 5184,
    "name": "Enchanter Victoria of the Field",
    "background": 1,
    "body": 82,
    "familiar": 119,
    "head": 131,
    "prop": 262,
    "rune": 299
  },
  {
    "idx": 5185,
    "name": "Arch-Magician Shigenjo from the Shadow",
    "background": 0,
    "body": 86,
    "familiar": 90,
    "head": 243,
    "prop": 280,
    "rune": 293
  },
  {
    "idx": 5186,
    "name": "Alchemist Ozohr of the Cosmos",
    "background": 1,
    "body": 24,
    "familiar": 7777,
    "head": 211,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 5187,
    "name": "Conjurer Jadis of the Wild",
    "background": 0,
    "body": 21,
    "familiar": 111,
    "head": 190,
    "prop": 273,
    "rune": 302
  },
  {
    "idx": 5188,
    "name": "Battle Mage Godfrey of the Sea",
    "background": 0,
    "body": 57,
    "familiar": 7777,
    "head": 183,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 5189,
    "name": "Casper of the Hall",
    "background": 1,
    "body": 40,
    "familiar": 112,
    "head": 141,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 5190,
    "name": "Voodoo Priest Nolan of the Expanse",
    "background": 2,
    "body": 73,
    "familiar": 97,
    "head": 206,
    "prop": 320,
    "rune": 287
  },
  {
    "idx": 5191,
    "name": "Shaman Hobbs of the Wood",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 171,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 5192,
    "name": "Hex Mage Epher of the Plains",
    "background": 2,
    "body": 45,
    "familiar": 119,
    "head": 167,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 5193,
    "name": "Archmagus Salah of Atlantis",
    "background": 1,
    "body": 57,
    "familiar": 108,
    "head": 222,
    "prop": 249,
    "rune": 301
  },
  {
    "idx": 5194,
    "name": "Archmagus Rita of Elysium",
    "background": 1,
    "body": 7,
    "familiar": 101,
    "head": 209,
    "prop": 245,
    "rune": 294
  },
  {
    "idx": 5195,
    "name": "Battlemage Milton of the Marsh",
    "background": 0,
    "body": 43,
    "familiar": 112,
    "head": 232,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 5196,
    "name": "Runecaster Twitch of the Secret Fire",
    "background": 2,
    "body": 86,
    "familiar": 95,
    "head": 201,
    "prop": 327,
    "rune": 284
  },
  {
    "idx": 5197,
    "name": "Diabolist Reza of the Canyon",
    "background": 2,
    "body": 79,
    "familiar": 110,
    "head": 222,
    "prop": 248,
    "rune": 287
  },
  {
    "idx": 5198,
    "name": "Archmagus David of the Citadel",
    "background": 3,
    "body": 40,
    "familiar": 111,
    "head": 189,
    "prop": 322,
    "rune": 288
  },
  {
    "idx": 5199,
    "name": "Arcanist Kang of the Cosmos",
    "background": 2,
    "body": 11,
    "familiar": 111,
    "head": 236,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 5200,
    "name": "Clairvoyant Chu Hua of the Steppe",
    "background": 1,
    "body": 12,
    "familiar": 7777,
    "head": 180,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 5201,
    "name": "Cleric David of the Sea",
    "background": 0,
    "body": 57,
    "familiar": 7777,
    "head": 153,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 5202,
    "name": "Magus Atlanta of the Wood",
    "background": 1,
    "body": 37,
    "familiar": 108,
    "head": 131,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 5203,
    "name": "Evoker Bucky of the Sun",
    "background": 1,
    "body": 59,
    "familiar": 107,
    "head": 167,
    "prop": 339,
    "rune": 296
  },
  {
    "idx": 5204,
    "name": "Ghost Eater Zorko of the Desert",
    "background": 1,
    "body": 5,
    "familiar": 116,
    "head": 128,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 5205,
    "name": "Hedge Wizard Apollo of the Forest",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 197,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 5206,
    "name": "Sorcerer Udor of the Marsh",
    "background": 2,
    "body": 42,
    "familiar": 95,
    "head": 192,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 5207,
    "name": "Druid Crackerjack of Mu",
    "background": 0,
    "body": 8,
    "familiar": 89,
    "head": 144,
    "prop": 334,
    "rune": 302
  },
  {
    "idx": 5208,
    "name": "Runecaster Zagan of Avalon",
    "background": 0,
    "body": 50,
    "familiar": 120,
    "head": 194,
    "prop": 326,
    "rune": 7777
  },
  {
    "idx": 5209,
    "name": "Enchanter Iris of the Wold",
    "background": 1,
    "body": 34,
    "familiar": 120,
    "head": 139,
    "prop": 246,
    "rune": 282
  },
  {
    "idx": 5210,
    "name": "Arch-Magician Rowena of the Steppe",
    "background": 0,
    "body": 39,
    "familiar": 103,
    "head": 155,
    "prop": 321,
    "rune": 299
  },
  {
    "idx": 5211,
    "name": "Battle Mage Ethan of the Tower",
    "background": 0,
    "body": 50,
    "familiar": 101,
    "head": 129,
    "prop": 317,
    "rune": 303
  },
  {
    "idx": 5212,
    "name": "Battle Mage Nolan of the Gnostics",
    "background": 0,
    "body": 75,
    "familiar": 108,
    "head": 129,
    "prop": 326,
    "rune": 283
  },
  {
    "idx": 5213,
    "name": "Lumos of the Valley",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 211,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 5214,
    "name": "Hedge Wizard Huan of the Hollow",
    "background": 0,
    "body": 15,
    "familiar": 7777,
    "head": 236,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 5215,
    "name": "Augurer Rita of the Hollow",
    "background": 2,
    "body": 39,
    "familiar": 93,
    "head": 209,
    "prop": 252,
    "rune": 287
  },
  {
    "idx": 5216,
    "name": "Runecaster Bathsheba of the Havens",
    "background": 0,
    "body": 50,
    "familiar": 120,
    "head": 198,
    "prop": 340,
    "rune": 7777
  },
  {
    "idx": 5217,
    "name": "Artificer Cromwell of the Marsh",
    "background": 1,
    "body": 23,
    "familiar": 120,
    "head": 133,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 5218,
    "name": "Archmagus Ixar of the Wild",
    "background": 2,
    "body": 42,
    "familiar": 107,
    "head": 192,
    "prop": 337,
    "rune": 290
  },
  {
    "idx": 5219,
    "name": "Archmagus Eronin of the Cosmos",
    "background": 1,
    "body": 75,
    "familiar": 110,
    "head": 207,
    "prop": 322,
    "rune": 284
  },
  {
    "idx": 5220,
    "name": "Pyromancer Hagar of the Court",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 183,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 5221,
    "name": "Chronomancer Faiz of the Psychic Leap",
    "background": 0,
    "body": 11,
    "familiar": 7777,
    "head": 128,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 5222,
    "name": "Archmagus Aldus of the Keep",
    "background": 0,
    "body": 77,
    "familiar": 7777,
    "head": 215,
    "prop": 325,
    "rune": 7777
  },
  {
    "idx": 5223,
    "name": "Magus Calliope of the Hills",
    "background": 1,
    "body": 37,
    "familiar": 115,
    "head": 191,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 5224,
    "name": "Artificer Adium of the Mount",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 207,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 5225,
    "name": "Artificer Uvlius of the Wild",
    "background": 1,
    "body": 82,
    "familiar": 123,
    "head": 192,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 5226,
    "name": "Nikolas of El Dorado",
    "background": 0,
    "body": 76,
    "familiar": 110,
    "head": 186,
    "prop": 322,
    "rune": 294
  },
  {
    "idx": 5227,
    "name": "Battle Mage Eric of the Court",
    "background": 0,
    "body": 74,
    "familiar": 103,
    "head": 218,
    "prop": 270,
    "rune": 291
  },
  {
    "idx": 5228,
    "name": "Medium Blaise of the Sun",
    "background": 0,
    "body": 27,
    "familiar": 7777,
    "head": 217,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 5229,
    "name": "Druid Hashim of the Temple",
    "background": 0,
    "body": 6,
    "familiar": 114,
    "head": 142,
    "prop": 322,
    "rune": 285
  },
  {
    "idx": 5230,
    "name": "Ghost Eater Godfrey of the Canyon",
    "background": 1,
    "body": 23,
    "familiar": 120,
    "head": 213,
    "prop": 254,
    "rune": 7777
  },
  {
    "idx": 5231,
    "name": "Archmagus Nikolas of the Mount",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 153,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 5232,
    "name": "Sage Aleister of the Gnostics",
    "background": 3,
    "body": 24,
    "familiar": 112,
    "head": 189,
    "prop": 256,
    "rune": 288
  },
  {
    "idx": 5233,
    "name": "Battle Mage Caligula of Mu",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 203,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 5234,
    "name": "Arcanist George of the Plains",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 214,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 5235,
    "name": "Diabolist Merlon of the Road",
    "background": 2,
    "body": 44,
    "familiar": 111,
    "head": 186,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 5236,
    "name": "Druid Amir of the Field",
    "background": 0,
    "body": 23,
    "familiar": 94,
    "head": 186,
    "prop": 276,
    "rune": 303
  },
  {
    "idx": 5237,
    "name": "Hydromancer Fugh of the Loch",
    "background": 1,
    "body": 57,
    "familiar": 109,
    "head": 200,
    "prop": 314,
    "rune": 293
  },
  {
    "idx": 5238,
    "name": "Battlemage Iprix of the Ether",
    "background": 1,
    "body": 24,
    "familiar": 110,
    "head": 238,
    "prop": 277,
    "rune": 297
  },
  {
    "idx": 5239,
    "name": "Sorcerer Soya of Arcadia",
    "background": 1,
    "body": 79,
    "familiar": 105,
    "head": 174,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 5240,
    "name": "Archmagus Soran of the Oasis",
    "background": 2,
    "body": 58,
    "familiar": 119,
    "head": 162,
    "prop": 305,
    "rune": 294
  },
  {
    "idx": 5241,
    "name": "Enchanter Celeste of the Steppe",
    "background": 0,
    "body": 21,
    "familiar": 110,
    "head": 198,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 5242,
    "name": "Ice Mage Zubin of the Expanse",
    "background": 0,
    "body": 73,
    "familiar": 95,
    "head": 231,
    "prop": 253,
    "rune": 302
  },
  {
    "idx": 5243,
    "name": "Cosmic Mage Digby of the Platonic Shadow",
    "background": 1,
    "body": 9,
    "familiar": 114,
    "head": 125,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 5244,
    "name": "Cosmic Mage Aldus of the Desert",
    "background": 2,
    "body": 60,
    "familiar": 88,
    "head": 226,
    "prop": 309,
    "rune": 292
  },
  {
    "idx": 5245,
    "name": "Magus Jaffer of the Waste",
    "background": 0,
    "body": 87,
    "familiar": 112,
    "head": 237,
    "prop": 307,
    "rune": 7777
  },
  {
    "idx": 5246,
    "name": "Transmuter Konoha of the Plains",
    "background": 1,
    "body": 18,
    "familiar": 99,
    "head": 243,
    "prop": 340,
    "rune": 295
  },
  {
    "idx": 5247,
    "name": "Hedge Wizard Cromwell",
    "background": 1,
    "body": 10,
    "familiar": 97,
    "head": 188,
    "prop": 266,
    "rune": 304
  },
  {
    "idx": 5248,
    "name": "Shadow Mage Ratko of the Keep",
    "background": 0,
    "body": 49,
    "familiar": 123,
    "head": 204,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 5249,
    "name": "Archmagus Amir of the Palms",
    "background": 2,
    "body": 27,
    "familiar": 112,
    "head": 226,
    "prop": 256,
    "rune": 303
  },
  {
    "idx": 5250,
    "name": "Archmagus George",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 185,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 5251,
    "name": "Conjurer Atlanta of the Brambles",
    "background": 3,
    "body": 34,
    "familiar": 106,
    "head": 156,
    "prop": 246,
    "rune": 287
  },
  {
    "idx": 5252,
    "name": "Charmer Victoria of the Hall",
    "background": 0,
    "body": 74,
    "familiar": 90,
    "head": 130,
    "prop": 325,
    "rune": 286
  },
  {
    "idx": 5253,
    "name": "Cryptomancer Asphodel of the Plains",
    "background": 0,
    "body": 32,
    "familiar": 88,
    "head": 190,
    "prop": 310,
    "rune": 282
  },
  {
    "idx": 5254,
    "name": "Witch Sabina of the Brambles",
    "background": 2,
    "body": 39,
    "familiar": 93,
    "head": 176,
    "prop": 263,
    "rune": 302
  },
  {
    "idx": 5255,
    "name": "Thaumaturge Vadim of the Lake",
    "background": 0,
    "body": 45,
    "familiar": 7777,
    "head": 179,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 5256,
    "name": "Cleric Aldus of the Obelisk",
    "background": 3,
    "body": 55,
    "familiar": 106,
    "head": 233,
    "prop": 338,
    "rune": 298
  },
  {
    "idx": 5257,
    "name": "Shaman Hothor of the Glacier",
    "background": 2,
    "body": 65,
    "familiar": 97,
    "head": 218,
    "prop": 319,
    "rune": 302
  },
  {
    "idx": 5258,
    "name": "Archmagus Orpheus of the Morning Star",
    "background": 2,
    "body": 87,
    "familiar": 120,
    "head": 189,
    "prop": 326,
    "rune": 292
  },
  {
    "idx": 5259,
    "name": "Battle Mage Homer of the Plains",
    "background": 1,
    "body": 45,
    "familiar": 97,
    "head": 220,
    "prop": 308,
    "rune": 303
  },
  {
    "idx": 5260,
    "name": "Battle Mage Magnus of the Mountain",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 188,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 5261,
    "name": "Witch Velorina of Arcadia",
    "background": 3,
    "body": 33,
    "familiar": 88,
    "head": 223,
    "prop": 267,
    "rune": 293
  },
  {
    "idx": 5262,
    "name": "Witch Shivra of the Lake",
    "background": 0,
    "body": 37,
    "familiar": 120,
    "head": 223,
    "prop": 268,
    "rune": 282
  },
  {
    "idx": 5263,
    "name": "Isaac of the Veil",
    "background": 0,
    "body": 9,
    "familiar": 99,
    "head": 228,
    "prop": 280,
    "rune": 300
  },
  {
    "idx": 5264,
    "name": "Enchanter Artis of Dreams",
    "background": 2,
    "body": 50,
    "familiar": 94,
    "head": 131,
    "prop": 269,
    "rune": 291
  },
  {
    "idx": 5265,
    "name": "Sage Hu of the Sacred Pillars",
    "background": 0,
    "body": 50,
    "familiar": 120,
    "head": 236,
    "prop": 245,
    "rune": 283
  },
  {
    "idx": 5266,
    "name": "Sorcerer Alizam of the Capital",
    "background": 3,
    "body": 40,
    "familiar": 94,
    "head": 164,
    "prop": 273,
    "rune": 296
  },
  {
    "idx": 5267,
    "name": "Charmer Beyna of Elysium",
    "background": 1,
    "body": 49,
    "familiar": 115,
    "head": 131,
    "prop": 312,
    "rune": 285
  },
  {
    "idx": 5268,
    "name": "Arch-Magician Nikolas of the Sands",
    "background": 2,
    "body": 5,
    "familiar": 95,
    "head": 232,
    "prop": 253,
    "rune": 298
  },
  {
    "idx": 5269,
    "name": "Witch Ekmira of the Villa",
    "background": 1,
    "body": 18,
    "familiar": 123,
    "head": 155,
    "prop": 252,
    "rune": 7777
  },
  {
    "idx": 5270,
    "name": "Sorcerer Allistair of the Ether",
    "background": 1,
    "body": 24,
    "familiar": 88,
    "head": 141,
    "prop": 252,
    "rune": 284
  },
  {
    "idx": 5271,
    "name": "Charmer Victoria of the Wood",
    "background": 0,
    "body": 22,
    "familiar": 110,
    "head": 131,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 5272,
    "name": "Chronomancer Milo of the Tower",
    "background": 1,
    "body": 55,
    "familiar": 7777,
    "head": 214,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 5273,
    "name": "Arch-Magician Judas of the Brambles",
    "background": 2,
    "body": 23,
    "familiar": 105,
    "head": 194,
    "prop": 324,
    "rune": 292
  },
  {
    "idx": 5274,
    "name": "Enchanter Bathsheba of the Veil",
    "background": 0,
    "body": 24,
    "familiar": 97,
    "head": 191,
    "prop": 334,
    "rune": 294
  },
  {
    "idx": 5275,
    "name": "Druid Bathsheba of the Wood",
    "background": 2,
    "body": 39,
    "familiar": 88,
    "head": 187,
    "prop": 325,
    "rune": 287
  },
  {
    "idx": 5276,
    "name": "Adept Aleister of Atlantis",
    "background": 0,
    "body": 57,
    "familiar": 123,
    "head": 232,
    "prop": 325,
    "rune": 284
  },
  {
    "idx": 5277,
    "name": "Artificer Axel of the Desert",
    "background": 1,
    "body": 27,
    "familiar": 110,
    "head": 129,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 5278,
    "name": "Illusionist Lamia of the Hills",
    "background": 3,
    "body": 44,
    "familiar": 120,
    "head": 191,
    "prop": 339,
    "rune": 294
  },
  {
    "idx": 5279,
    "name": "Holy Monk Mace of the Palms",
    "background": 2,
    "body": 60,
    "familiar": 107,
    "head": 125,
    "prop": 259,
    "rune": 296
  },
  {
    "idx": 5280,
    "name": "Shaman Galatea of the Wood",
    "background": 0,
    "body": 21,
    "familiar": 110,
    "head": 198,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 5281,
    "name": "Sage Dante of the Havens",
    "background": 2,
    "body": 54,
    "familiar": 106,
    "head": 173,
    "prop": 266,
    "rune": 284
  },
  {
    "idx": 5282,
    "name": "Chronomancer Goliath of the Citadel",
    "background": 0,
    "body": 76,
    "familiar": 7777,
    "head": 183,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 5283,
    "name": "Archmagus Lux of the Mount",
    "background": 1,
    "body": 62,
    "familiar": 119,
    "head": 160,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 5284,
    "name": "Sorcerer  of the River",
    "background": 0,
    "body": 41,
    "familiar": 7777,
    "head": 229,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 5285,
    "name": "Battle Mage Magnus of the Keep",
    "background": 1,
    "body": 50,
    "familiar": 97,
    "head": 220,
    "prop": 276,
    "rune": 284
  },
  {
    "idx": 5286,
    "name": "Mystic Lux of the Desert",
    "background": 0,
    "body": 61,
    "familiar": 109,
    "head": 153,
    "prop": 266,
    "rune": 7777
  },
  {
    "idx": 5287,
    "name": "Null Mage Ixar of the Light",
    "background": 1,
    "body": 52,
    "familiar": 123,
    "head": 162,
    "prop": 334,
    "rune": 291
  },
  {
    "idx": 5288,
    "name": "Sage Hanataka of the Gnostics",
    "background": 0,
    "body": 67,
    "familiar": 90,
    "head": 243,
    "prop": 252,
    "rune": 292
  },
  {
    "idx": 5289,
    "name": "Remus of the Surf",
    "background": 3,
    "body": 80,
    "familiar": 90,
    "head": 230,
    "prop": 261,
    "rune": 297
  },
  {
    "idx": 5290,
    "name": "Runecaster Kalo of the Villa",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 178,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 5291,
    "name": "Voodoo Priest Louis of the Mist",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 179,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 5292,
    "name": "Magus Basil",
    "background": 2,
    "body": 85,
    "familiar": 95,
    "head": 189,
    "prop": 258,
    "rune": 302
  },
  {
    "idx": 5293,
    "name": "Summoner Rixxa of the Road",
    "background": 1,
    "body": 23,
    "familiar": 101,
    "head": 244,
    "prop": 254,
    "rune": 283
  },
  {
    "idx": 5294,
    "name": "Witch Sylvia of the Field",
    "background": 2,
    "body": 35,
    "familiar": 110,
    "head": 209,
    "prop": 318,
    "rune": 287
  },
  {
    "idx": 5295,
    "name": "Archmagus Uvlius of the Hollow",
    "background": 0,
    "body": 42,
    "familiar": 123,
    "head": 197,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 5296,
    "name": "Sorcerer Lumos of the Wood",
    "background": 1,
    "body": 44,
    "familiar": 7777,
    "head": 147,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 5297,
    "name": "Diviner Borak of the Circle",
    "background": 1,
    "body": 29,
    "familiar": 93,
    "head": 213,
    "prop": 252,
    "rune": 293
  },
  {
    "idx": 5298,
    "name": "Magus Nazim of the Veil",
    "background": 1,
    "body": 52,
    "familiar": 123,
    "head": 142,
    "prop": 338,
    "rune": 292
  },
  {
    "idx": 5299,
    "name": "Aeromancer Velorina of the Mountain",
    "background": 1,
    "body": 21,
    "familiar": 103,
    "head": 176,
    "prop": 315,
    "rune": 287
  },
  {
    "idx": 5300,
    "name": "Crowley of the Grotto",
    "background": 0,
    "body": 45,
    "familiar": 95,
    "head": 232,
    "prop": 250,
    "rune": 291
  },
  {
    "idx": 5301,
    "name": "Electromancer Bullock of the Ice",
    "background": 0,
    "body": 65,
    "familiar": 88,
    "head": 193,
    "prop": 305,
    "rune": 287
  },
  {
    "idx": 5302,
    "name": "Artificer Milton of the Veil",
    "background": 1,
    "body": 29,
    "familiar": 123,
    "head": 199,
    "prop": 260,
    "rune": 286
  },
  {
    "idx": 5303,
    "name": "Battle Mage Magnus of the Woodlands",
    "background": 0,
    "body": 29,
    "familiar": 7777,
    "head": 188,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 5304,
    "name": "Conjurer Tengu of the Tower",
    "background": 1,
    "body": 7,
    "familiar": 108,
    "head": 243,
    "prop": 273,
    "rune": 291
  },
  {
    "idx": 5305,
    "name": "Sorcerer Alizam of the Bibliotheca",
    "background": 2,
    "body": 62,
    "familiar": 95,
    "head": 237,
    "prop": 273,
    "rune": 294
  },
  {
    "idx": 5306,
    "name": "Witch Shivra of the Mist",
    "background": 1,
    "body": 7,
    "familiar": 115,
    "head": 155,
    "prop": 7777,
    "rune": 288
  },
  {
    "idx": 5307,
    "name": "Voodoo Priest Eliphas of the Temple",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 179,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 5308,
    "name": "Witch Jahid in the Shadows",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 219,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 5309,
    "name": "Void Disciple Ursula of the Hills",
    "background": 2,
    "body": 33,
    "familiar": 88,
    "head": 223,
    "prop": 307,
    "rune": 291
  },
  {
    "idx": 5310,
    "name": "Geomancer Cromwell of Tartarus",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 182,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 5311,
    "name": "Magus Merlon of the Hall",
    "background": 1,
    "body": 77,
    "familiar": 7777,
    "head": 127,
    "prop": 318,
    "rune": 7777
  },
  {
    "idx": 5312,
    "name": "Bathsheba of the Marsh",
    "background": 3,
    "body": 22,
    "familiar": 104,
    "head": 131,
    "prop": 268,
    "rune": 284
  },
  {
    "idx": 5313,
    "name": "Charmer Daria of the Ether",
    "background": 2,
    "body": 10,
    "familiar": 114,
    "head": 135,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 5314,
    "name": "Arcanist Hobbs of the Citadel",
    "background": 2,
    "body": 26,
    "familiar": 120,
    "head": 235,
    "prop": 323,
    "rune": 287
  },
  {
    "idx": 5315,
    "name": "Enchanter Victoria of the Marsh",
    "background": 0,
    "body": 21,
    "familiar": 94,
    "head": 198,
    "prop": 315,
    "rune": 294
  },
  {
    "idx": 5316,
    "name": "Runecaster Merlon of the Hollow",
    "background": 2,
    "body": 41,
    "familiar": 110,
    "head": 202,
    "prop": 329,
    "rune": 299
  },
  {
    "idx": 5317,
    "name": "Thaumaturge Udor of the Platonic Shadow",
    "background": 1,
    "body": 11,
    "familiar": 94,
    "head": 162,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 5318,
    "name": "Magus Milton of the Heath",
    "background": 0,
    "body": 15,
    "familiar": 89,
    "head": 229,
    "prop": 266,
    "rune": 297
  },
  {
    "idx": 5319,
    "name": "Sage Azahl of the Hollow",
    "background": 1,
    "body": 15,
    "familiar": 89,
    "head": 211,
    "prop": 318,
    "rune": 284
  },
  {
    "idx": 5320,
    "name": "Alchemist Kalo of the River",
    "background": 0,
    "body": 43,
    "familiar": 115,
    "head": 171,
    "prop": 268,
    "rune": 290
  },
  {
    "idx": 5321,
    "name": "Battle Mage Finn of the Hills",
    "background": 2,
    "body": 15,
    "familiar": 101,
    "head": 217,
    "prop": 317,
    "rune": 287
  },
  {
    "idx": 5322,
    "name": "Sage Eric of the Riviera",
    "background": 2,
    "body": 43,
    "familiar": 97,
    "head": 165,
    "prop": 316,
    "rune": 283
  },
  {
    "idx": 5323,
    "name": "Magus Robert of the Brambles",
    "background": 1,
    "body": 41,
    "familiar": 7777,
    "head": 188,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 5324,
    "name": "Hydromancer Oxnard of the Brambles",
    "background": 2,
    "body": 13,
    "familiar": 108,
    "head": 193,
    "prop": 314,
    "rune": 304
  },
  {
    "idx": 5325,
    "name": "Archmagus Milton",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 174,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 5326,
    "name": "Arch-Magician Remus of the Realm",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 138,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 5327,
    "name": "Arcanist Fumiko of the Road",
    "background": 3,
    "body": 36,
    "familiar": 105,
    "head": 126,
    "prop": 326,
    "rune": 288
  },
  {
    "idx": 5328,
    "name": "Alchemist Angus of the Wold",
    "background": 1,
    "body": 14,
    "familiar": 116,
    "head": 216,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 5329,
    "name": "Alchemist Poppy of the Morning Star",
    "background": 1,
    "body": 87,
    "familiar": 7777,
    "head": 235,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 5330,
    "name": "Alchemist Hanko of the Keep",
    "background": 1,
    "body": 26,
    "familiar": 95,
    "head": 126,
    "prop": 269,
    "rune": 282
  },
  {
    "idx": 5331,
    "name": "Amir of the Brambles",
    "background": 0,
    "body": 18,
    "familiar": 115,
    "head": 192,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 5332,
    "name": "Hydromancer Homer of the Steppe",
    "background": 0,
    "body": 45,
    "familiar": 111,
    "head": 165,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 5333,
    "name": "Thaumaturge Zaros of the Wold",
    "background": 0,
    "body": 79,
    "familiar": 111,
    "head": 147,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 5334,
    "name": "Battle Mage Hagar of the Desert",
    "background": 1,
    "body": 61,
    "familiar": 115,
    "head": 173,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 5335,
    "name": "Adept Hellspawn of the Sacred Pillars",
    "background": 1,
    "body": 7,
    "familiar": 95,
    "head": 158,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 5336,
    "name": "Battle Mage Robert of the Marsh",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 216,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 5337,
    "name": "Aeromancer Silas of the Swell",
    "background": 1,
    "body": 80,
    "familiar": 95,
    "head": 189,
    "prop": 315,
    "rune": 292
  },
  {
    "idx": 5338,
    "name": "Archmagus Anton of the Wood",
    "background": 1,
    "body": 45,
    "familiar": 95,
    "head": 205,
    "prop": 317,
    "rune": 302
  },
  {
    "idx": 5339,
    "name": "Battle Mage Ethan of the Wild",
    "background": 0,
    "body": 43,
    "familiar": 95,
    "head": 177,
    "prop": 250,
    "rune": 287
  },
  {
    "idx": 5340,
    "name": "Runecaster George of the Temple",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 199,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 5341,
    "name": "Alchemist David of the Event Horizon",
    "background": 0,
    "body": 8,
    "familiar": 114,
    "head": 186,
    "prop": 267,
    "rune": 287
  },
  {
    "idx": 5342,
    "name": "Battlemage Galatea of the Steppe",
    "background": 2,
    "body": 22,
    "familiar": 108,
    "head": 131,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 5343,
    "name": "Mystic Borak of Avalon",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 203,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 5344,
    "name": "Archmagus Ali of the Mist",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 219,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 5345,
    "name": "Alessar of Avalon",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 230,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 5346,
    "name": "Enchanter Sisk of the Dunes",
    "background": 1,
    "body": 59,
    "familiar": 90,
    "head": 125,
    "prop": 251,
    "rune": 302
  },
  {
    "idx": 5347,
    "name": "Archmagus Azahl of the Ether",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 127,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 5348,
    "name": "Artificer Bayard of the Psychic Leap",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 216,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 5349,
    "name": "Magus Buttons of the Marsh",
    "background": 1,
    "body": 23,
    "familiar": 89,
    "head": 195,
    "prop": 258,
    "rune": 287
  },
  {
    "idx": 5350,
    "name": "Magus  of the Tower",
    "background": 1,
    "body": 26,
    "familiar": 7777,
    "head": 171,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 5351,
    "name": "Pumlo of the Hills",
    "background": 2,
    "body": 42,
    "familiar": 7777,
    "head": 141,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 5352,
    "name": "Artificer Arabella of the Steppe",
    "background": 1,
    "body": 39,
    "familiar": 94,
    "head": 131,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 5353,
    "name": "Battle Mage Talbot of the Steppe",
    "background": 1,
    "body": 82,
    "familiar": 115,
    "head": 183,
    "prop": 340,
    "rune": 297
  },
  {
    "idx": 5354,
    "name": "Magus Toka of the Reach",
    "background": 0,
    "body": 43,
    "familiar": 7777,
    "head": 171,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 5355,
    "name": "Aeromancer Prisma of the Woodlands",
    "background": 0,
    "body": 28,
    "familiar": 110,
    "head": 169,
    "prop": 315,
    "rune": 290
  },
  {
    "idx": 5356,
    "name": "Sorcerer Nazim of the Havens",
    "background": 0,
    "body": 67,
    "familiar": 7777,
    "head": 164,
    "prop": 7777,
    "rune": 7777
  },
  {
    "idx": 5357,
    "name": "Sky Master Rook of Dreams",
    "background": 2,
    "body": 62,
    "familiar": 109,
    "head": 144,
    "prop": 315,
    "rune": 292
  },
  {
    "idx": 5358,
    "name": "Magus Solomon of the Wood",
    "background": 1,
    "body": 44,
    "familiar": 112,
    "head": 231,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 5359,
    "name": "Druid Eric of the Ether",
    "background": 2,
    "body": 67,
    "familiar": 94,
    "head": 129,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 5360,
    "name": "Aleister of the Keep",
    "background": 1,
    "body": 26,
    "familiar": 88,
    "head": 227,
    "prop": 306,
    "rune": 296
  },
  {
    "idx": 5361,
    "name": "Enchanter Pandora of the Wold",
    "background": 1,
    "body": 38,
    "familiar": 104,
    "head": 139,
    "prop": 268,
    "rune": 294
  },
  {
    "idx": 5362,
    "name": "Sorcerer Jaffer of the Platonic Shadow",
    "background": 1,
    "body": 8,
    "familiar": 88,
    "head": 128,
    "prop": 332,
    "rune": 282
  },
  {
    "idx": 5363,
    "name": "Battle Mage Hothor of the Bastion",
    "background": 0,
    "body": 46,
    "familiar": 111,
    "head": 173,
    "prop": 334,
    "rune": 287
  },
  {
    "idx": 5364,
    "name": "Pyromancer Huizhong of the Desert",
    "background": 1,
    "body": 60,
    "familiar": 123,
    "head": 236,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 5365,
    "name": "Evoker Eden of the Temple",
    "background": 1,
    "body": 49,
    "familiar": 115,
    "head": 229,
    "prop": 321,
    "rune": 302
  },
  {
    "idx": 5366,
    "name": "Jerret of Dreams",
    "background": 0,
    "body": 49,
    "familiar": 7777,
    "head": 138,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 5367,
    "name": "Bard Milton of the Mount",
    "background": 0,
    "body": 62,
    "familiar": 7777,
    "head": 202,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 5368,
    "name": "Ghost Eater Aamon in the Shadows",
    "background": 3,
    "body": 85,
    "familiar": 88,
    "head": 239,
    "prop": 254,
    "rune": 299
  },
  {
    "idx": 5369,
    "name": "Alchemist Asphodel of the Keep",
    "background": 2,
    "body": 46,
    "familiar": 88,
    "head": 139,
    "prop": 270,
    "rune": 304
  },
  {
    "idx": 5370,
    "name": "Evoker Borak of the Valley",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 204,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 5371,
    "name": "Pyromancer Aleister of the Light",
    "background": 1,
    "body": 8,
    "familiar": 93,
    "head": 212,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 5372,
    "name": "Cosmic Mage Thana of the Marsh",
    "background": 0,
    "body": 34,
    "familiar": 107,
    "head": 156,
    "prop": 309,
    "rune": 297
  },
  {
    "idx": 5373,
    "name": "Bard Pezo of the Canyon",
    "background": 0,
    "body": 12,
    "familiar": 7777,
    "head": 171,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 5374,
    "name": "Cryptomancer Atlanta of Mu",
    "background": 1,
    "body": 10,
    "familiar": 114,
    "head": 135,
    "prop": 309,
    "rune": 7777
  },
  {
    "idx": 5375,
    "name": "Archmagus Milton of Xanadu",
    "background": 1,
    "body": 11,
    "familiar": 88,
    "head": 211,
    "prop": 252,
    "rune": 290
  },
  {
    "idx": 5376,
    "name": "Nikolas of the Lake",
    "background": 1,
    "body": 18,
    "familiar": 7777,
    "head": 215,
    "prop": 308,
    "rune": 7777
  },
  {
    "idx": 5377,
    "name": "Druid Davos of the Mist",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 199,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 5378,
    "name": "Arch-Magician Malthus of the Sea",
    "background": 0,
    "body": 57,
    "familiar": 123,
    "head": 129,
    "prop": 321,
    "rune": 7777
  },
  {
    "idx": 5379,
    "name": "Archmagus Onaxx of the Hollow",
    "background": 1,
    "body": 14,
    "familiar": 107,
    "head": 207,
    "prop": 315,
    "rune": 291
  },
  {
    "idx": 5380,
    "name": "Conjurer Allistair of the Veil",
    "background": 0,
    "body": 24,
    "familiar": 7777,
    "head": 214,
    "prop": 246,
    "rune": 284
  },
  {
    "idx": 5381,
    "name": "Sorcerer Nassif of the Morning Star",
    "background": 0,
    "body": 87,
    "familiar": 7777,
    "head": 164,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 5382,
    "name": "Sorcerer Ali of the Obelisk",
    "background": 0,
    "body": 55,
    "familiar": 112,
    "head": 164,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 5383,
    "name": "Archmagus Leah out of the Blizzard",
    "background": 0,
    "body": 65,
    "familiar": 108,
    "head": 208,
    "prop": 316,
    "rune": 284
  },
  {
    "idx": 5384,
    "name": "Alchemist Gary of the Mountain",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 204,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 5385,
    "name": "Pyromancer Bao of the Valley",
    "background": 1,
    "body": 13,
    "familiar": 104,
    "head": 236,
    "prop": 310,
    "rune": 290
  },
  {
    "idx": 5386,
    "name": "Hedge Wizard Karasu of the Moors",
    "background": 2,
    "body": 84,
    "familiar": 99,
    "head": 243,
    "prop": 276,
    "rune": 294
  },
  {
    "idx": 5387,
    "name": "Witch Lamia of the Desert",
    "background": 2,
    "body": 58,
    "familiar": 108,
    "head": 166,
    "prop": 312,
    "rune": 299
  },
  {
    "idx": 5388,
    "name": "Witch Zolona of the Steppe",
    "background": 2,
    "body": 37,
    "familiar": 105,
    "head": 159,
    "prop": 305,
    "rune": 286
  },
  {
    "idx": 5389,
    "name": "Charmer Layla of the Valley",
    "background": 3,
    "body": 21,
    "familiar": 123,
    "head": 187,
    "prop": 248,
    "rune": 297
  },
  {
    "idx": 5390,
    "name": "Adept Daria of the Wood",
    "background": 2,
    "body": 44,
    "familiar": 105,
    "head": 191,
    "prop": 326,
    "rune": 282
  },
  {
    "idx": 5391,
    "name": "Battle Mage Goliath",
    "background": 2,
    "body": 67,
    "familiar": 103,
    "head": 217,
    "prop": 310,
    "rune": 290
  },
  {
    "idx": 5392,
    "name": "Artificer Setsuko of the Gnostics",
    "background": 3,
    "body": 75,
    "familiar": 93,
    "head": 126,
    "prop": 256,
    "rune": 294
  },
  {
    "idx": 5393,
    "name": "Diviner Huan of Elysium",
    "background": 0,
    "body": 49,
    "familiar": 104,
    "head": 236,
    "prop": 245,
    "rune": 7777
  },
  {
    "idx": 5394,
    "name": "Cleric Jeldor of the Gnostics",
    "background": 0,
    "body": 10,
    "familiar": 114,
    "head": 231,
    "prop": 318,
    "rune": 297
  },
  {
    "idx": 5395,
    "name": "Witch Properpine of the Astral Plane",
    "background": 3,
    "body": 67,
    "familiar": 106,
    "head": 155,
    "prop": 268,
    "rune": 295
  },
  {
    "idx": 5396,
    "name": "Iprix of the Reach",
    "background": 1,
    "body": 44,
    "familiar": 103,
    "head": 233,
    "prop": 305,
    "rune": 282
  },
  {
    "idx": 5397,
    "name": "Arcanist  of the Havens",
    "background": 1,
    "body": 55,
    "familiar": 103,
    "head": 147,
    "prop": 328,
    "rune": 285
  },
  {
    "idx": 5398,
    "name": "Druid Astrid of the Hills",
    "background": 1,
    "body": 84,
    "familiar": 107,
    "head": 156,
    "prop": 316,
    "rune": 7777
  },
  {
    "idx": 5399,
    "name": "Chaos Mage Hothor of the Desert",
    "background": 0,
    "body": 60,
    "familiar": 114,
    "head": 165,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 5400,
    "name": "Archmagus Dario of the Astral Plane",
    "background": 0,
    "body": 52,
    "familiar": 89,
    "head": 207,
    "prop": 266,
    "rune": 303
  },
  {
    "idx": 5401,
    "name": "Witch Keziah of the Keep",
    "background": 3,
    "body": 7,
    "familiar": 94,
    "head": 159,
    "prop": 332,
    "rune": 297
  },
  {
    "idx": 5402,
    "name": "Arch-Magician Aslan of the Keep",
    "background": 2,
    "body": 49,
    "familiar": 101,
    "head": 188,
    "prop": 253,
    "rune": 296
  },
  {
    "idx": 5403,
    "name": "Witch Rowena of the Wild",
    "background": 1,
    "body": 12,
    "familiar": 120,
    "head": 223,
    "prop": 309,
    "rune": 302
  },
  {
    "idx": 5404,
    "name": "Magus Dario of El Dorado",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 125,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 5405,
    "name": "Aeromancer Nazim of the Desert",
    "background": 0,
    "body": 59,
    "familiar": 112,
    "head": 164,
    "prop": 315,
    "rune": 284
  },
  {
    "idx": 5406,
    "name": "Archmagus Gellert of the Valley",
    "background": 1,
    "body": 6,
    "familiar": 110,
    "head": 207,
    "prop": 323,
    "rune": 285
  },
  {
    "idx": 5407,
    "name": "Hedge Wizard Diabolos of the North",
    "background": 2,
    "body": 65,
    "familiar": 101,
    "head": 239,
    "prop": 276,
    "rune": 294
  },
  {
    "idx": 5408,
    "name": "Geomancer Zeromus of the Wood",
    "background": 1,
    "body": 14,
    "familiar": 105,
    "head": 194,
    "prop": 308,
    "rune": 284
  },
  {
    "idx": 5409,
    "name": "Sorcerer Zafar of the Temple",
    "background": 0,
    "body": 7,
    "familiar": 7777,
    "head": 164,
    "prop": 248,
    "rune": 7777
  },
  {
    "idx": 5410,
    "name": "Ozohr of Dreams",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 230,
    "prop": 280,
    "rune": 7777
  },
  {
    "idx": 5411,
    "name": "Ghost Eater Devo of the Thorn",
    "background": 3,
    "body": 29,
    "familiar": 108,
    "head": 169,
    "prop": 254,
    "rune": 291
  },
  {
    "idx": 5412,
    "name": "Archmagus Lumos of the Cosmos",
    "background": 3,
    "body": 10,
    "familiar": 116,
    "head": 212,
    "prop": 265,
    "rune": 288
  },
  {
    "idx": 5413,
    "name": "Summoner Hydra of the Brambles",
    "background": 0,
    "body": 15,
    "familiar": 106,
    "head": 145,
    "prop": 281,
    "rune": 302
  },
  {
    "idx": 5414,
    "name": "Thaumaturge Hagar of the Bastion",
    "background": 0,
    "body": 48,
    "familiar": 119,
    "head": 177,
    "prop": 338,
    "rune": 7777
  },
  {
    "idx": 5415,
    "name": "Archmagus Devon of the Mountain",
    "background": 0,
    "body": 38,
    "familiar": 7777,
    "head": 191,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 5416,
    "name": "Alchemist Duzzle of the Capital",
    "background": 2,
    "body": 26,
    "familiar": 119,
    "head": 171,
    "prop": 268,
    "rune": 7777
  },
  {
    "idx": 5417,
    "name": "Alchemist Impy of the Hall",
    "background": 1,
    "body": 74,
    "familiar": 7777,
    "head": 178,
    "prop": 271,
    "rune": 7777
  },
  {
    "idx": 5418,
    "name": "Witch Properpine of the Mountain",
    "background": 0,
    "body": 39,
    "familiar": 7777,
    "head": 159,
    "prop": 256,
    "rune": 7777
  },
  {
    "idx": 5419,
    "name": "Diabolist Nori of the Citadel",
    "background": 1,
    "body": 46,
    "familiar": 101,
    "head": 126,
    "prop": 309,
    "rune": 300
  },
  {
    "idx": 5420,
    "name": "Druid Blaise of the Veil",
    "background": 3,
    "body": 28,
    "familiar": 103,
    "head": 129,
    "prop": 265,
    "rune": 303
  },
  {
    "idx": 5421,
    "name": "Battlemage Homer of the Cosmos",
    "background": 2,
    "body": 67,
    "familiar": 95,
    "head": 206,
    "prop": 335,
    "rune": 7777
  },
  {
    "idx": 5422,
    "name": "Sage Jerret of the Gnostics",
    "background": 1,
    "body": 8,
    "familiar": 120,
    "head": 127,
    "prop": 316,
    "rune": 283
  },
  {
    "idx": 5423,
    "name": "Spellsinger Arabella of Limbo",
    "background": 0,
    "body": 87,
    "familiar": 99,
    "head": 132,
    "prop": 257,
    "rune": 291
  },
  {
    "idx": 5424,
    "name": "Archmagus Lumos out of the Void",
    "background": 2,
    "body": 87,
    "familiar": 123,
    "head": 214,
    "prop": 307,
    "rune": 296
  },
  {
    "idx": 5425,
    "name": "Necromancer Diana of the Reach",
    "background": 0,
    "body": 14,
    "familiar": 7777,
    "head": 135,
    "prop": 335,
    "rune": 290
  },
  {
    "idx": 5426,
    "name": "Magus Soya of the Hills",
    "background": 0,
    "body": 44,
    "familiar": 7777,
    "head": 185,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 5427,
    "name": "Battle Mage Eric of the Moors",
    "background": 2,
    "body": 42,
    "familiar": 115,
    "head": 217,
    "prop": 276,
    "rune": 301
  },
  {
    "idx": 5428,
    "name": "Illusionist Beyna of the Palms",
    "background": 0,
    "body": 27,
    "familiar": 120,
    "head": 208,
    "prop": 273,
    "rune": 296
  },
  {
    "idx": 5429,
    "name": "Sorcerer Ozohr of the Sacred Pillars",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 221,
    "prop": 305,
    "rune": 7777
  },
  {
    "idx": 5430,
    "name": "Arcanist Talbot of the Steppe",
    "background": 1,
    "body": 79,
    "familiar": 111,
    "head": 206,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 5431,
    "name": "Magus Celeste of the Road",
    "background": 0,
    "body": 21,
    "familiar": 108,
    "head": 187,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 5432,
    "name": "Arcanist Zhan of the Brambles",
    "background": 1,
    "body": 45,
    "familiar": 123,
    "head": 180,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 5433,
    "name": "Battle Mage Homer of the Arctic",
    "background": 0,
    "body": 73,
    "familiar": 89,
    "head": 220,
    "prop": 316,
    "rune": 294
  },
  {
    "idx": 5434,
    "name": "Artificer Herne of the Belfry",
    "background": 1,
    "body": 54,
    "familiar": 111,
    "head": 167,
    "prop": 261,
    "rune": 7777
  },
  {
    "idx": 5435,
    "name": "Archmagus Astrid of the Mountain",
    "background": 2,
    "body": 34,
    "familiar": 109,
    "head": 208,
    "prop": 249,
    "rune": 290
  },
  {
    "idx": 5436,
    "name": "Arcanist Chandler of the Temple",
    "background": 0,
    "body": 63,
    "familiar": 7777,
    "head": 150,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 5437,
    "name": "Wizard Aiko of the Canyon",
    "background": 3,
    "body": 14,
    "familiar": 95,
    "head": 126,
    "prop": 7777,
    "rune": 299
  },
  {
    "idx": 5438,
    "name": "Archmagus Alatar of the Riviera",
    "background": 0,
    "body": 19,
    "familiar": 105,
    "head": 231,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 5439,
    "name": "Geomancer Pix of the Mountain",
    "background": 0,
    "body": 15,
    "familiar": 110,
    "head": 235,
    "prop": 308,
    "rune": 288
  },
  {
    "idx": 5440,
    "name": "Adept Rita of the Cosmos",
    "background": 3,
    "body": 10,
    "familiar": 90,
    "head": 176,
    "prop": 322,
    "rune": 285
  },
  {
    "idx": 5441,
    "name": "Mystic Digby of Mu",
    "background": 2,
    "body": 24,
    "familiar": 93,
    "head": 150,
    "prop": 338,
    "rune": 300
  },
  {
    "idx": 5442,
    "name": "Alchemist Velorina of the Forest",
    "background": 1,
    "body": 21,
    "familiar": 114,
    "head": 176,
    "prop": 328,
    "rune": 283
  },
  {
    "idx": 5443,
    "name": "Aeromancer Xue of the Quantum Downs",
    "background": 2,
    "body": 11,
    "familiar": 110,
    "head": 180,
    "prop": 315,
    "rune": 283
  },
  {
    "idx": 5444,
    "name": "Arcanist Axel",
    "background": 0,
    "body": 78,
    "familiar": 103,
    "head": 206,
    "prop": 332,
    "rune": 286
  },
  {
    "idx": 5445,
    "name": "Enchanter Pandora of the Hollow",
    "background": 0,
    "body": 37,
    "familiar": 107,
    "head": 139,
    "prop": 248,
    "rune": 290
  },
  {
    "idx": 5446,
    "name": "Artificer Davos of the Mount",
    "background": 0,
    "body": 55,
    "familiar": 7777,
    "head": 127,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 5447,
    "name": "Enchanter Victoria of the Grotto",
    "background": 0,
    "body": 32,
    "familiar": 88,
    "head": 198,
    "prop": 252,
    "rune": 297
  },
  {
    "idx": 5448,
    "name": "Shaman Goober of the Carnival",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 178,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 5449,
    "name": "Conjurer Davos of the Villa",
    "background": 1,
    "body": 77,
    "familiar": 117,
    "head": 189,
    "prop": 246,
    "rune": 283
  },
  {
    "idx": 5450,
    "name": "Zelroth of the Crag",
    "background": 2,
    "body": 73,
    "familiar": 119,
    "head": 138,
    "prop": 253,
    "rune": 7777
  },
  {
    "idx": 5451,
    "name": "Witch Drusilla of the Mountain",
    "background": 3,
    "body": 45,
    "familiar": 101,
    "head": 209,
    "prop": 329,
    "rune": 7777
  },
  {
    "idx": 5452,
    "name": "Shaman Jeldor of the Marsh",
    "background": 2,
    "body": 79,
    "familiar": 94,
    "head": 197,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 5453,
    "name": "Druid Ravana of the Keep",
    "background": 2,
    "body": 76,
    "familiar": 123,
    "head": 207,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 5454,
    "name": "Cryptomancer Goliath of the Marsh",
    "background": 1,
    "body": 44,
    "familiar": 103,
    "head": 206,
    "prop": 338,
    "rune": 301
  },
  {
    "idx": 5455,
    "name": "Mystic Ozohr of the Capital",
    "background": 0,
    "body": 40,
    "familiar": 7777,
    "head": 127,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 5456,
    "name": "Enchanter Amir of Xanadu",
    "background": 1,
    "body": 10,
    "familiar": 94,
    "head": 138,
    "prop": 249,
    "rune": 7777
  },
  {
    "idx": 5457,
    "name": "Hedge Wizard Eizo of the Desert",
    "background": 2,
    "body": 61,
    "familiar": 88,
    "head": 196,
    "prop": 258,
    "rune": 290
  },
  {
    "idx": 5458,
    "name": "Shaman Ethan of the Capital",
    "background": 1,
    "body": 46,
    "familiar": 99,
    "head": 206,
    "prop": 319,
    "rune": 295
  },
  {
    "idx": 5459,
    "name": "Diabolist Jay of the Inferno",
    "background": 3,
    "body": 87,
    "familiar": 93,
    "head": 144,
    "prop": 331,
    "rune": 295
  },
  {
    "idx": 5460,
    "name": "Mystic Danny of the River",
    "background": 2,
    "body": 43,
    "familiar": 120,
    "head": 183,
    "prop": 328,
    "rune": 285
  },
  {
    "idx": 5461,
    "name": "Magus Sylvia of the Forest",
    "background": 0,
    "body": 37,
    "familiar": 120,
    "head": 209,
    "prop": 255,
    "rune": 288
  },
  {
    "idx": 5462,
    "name": "Sorcerer Zaim of the Capital",
    "background": 0,
    "body": 19,
    "familiar": 7777,
    "head": 164,
    "prop": 247,
    "rune": 7777
  },
  {
    "idx": 5463,
    "name": "Magus Jadis of the Steppe",
    "background": 1,
    "body": 35,
    "familiar": 103,
    "head": 131,
    "prop": 339,
    "rune": 299
  },
  {
    "idx": 5464,
    "name": "Archmagus Casper of the Oasis",
    "background": 0,
    "body": 61,
    "familiar": 109,
    "head": 214,
    "prop": 250,
    "rune": 299
  },
  {
    "idx": 5465,
    "name": "Archmagus Apollo",
    "background": 0,
    "body": 67,
    "familiar": 119,
    "head": 226,
    "prop": 276,
    "rune": 282
  },
  {
    "idx": 5466,
    "name": "Magus Duzzle of the Cosmos",
    "background": 1,
    "body": 67,
    "familiar": 104,
    "head": 171,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 5467,
    "name": "Adept Taqi of the Marsh",
    "background": 0,
    "body": 41,
    "familiar": 114,
    "head": 222,
    "prop": 323,
    "rune": 7777
  },
  {
    "idx": 5468,
    "name": "Aeromancer Tengu of the Cosmos",
    "background": 1,
    "body": 10,
    "familiar": 112,
    "head": 243,
    "prop": 315,
    "rune": 287
  },
  {
    "idx": 5469,
    "name": "Ice Mage Angus of the Ice",
    "background": 2,
    "body": 73,
    "familiar": 89,
    "head": 206,
    "prop": 276,
    "rune": 284
  },
  {
    "idx": 5470,
    "name": "Void Disciple Orbus of Elysium",
    "background": 2,
    "body": 55,
    "familiar": 121,
    "head": 157,
    "prop": 264,
    "rune": 288
  },
  {
    "idx": 5471,
    "name": "Magus Merlon of the Thorn",
    "background": 1,
    "body": 29,
    "familiar": 7777,
    "head": 229,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 5472,
    "name": "Holy Monk Rocco of the Sands",
    "background": 0,
    "body": 5,
    "familiar": 7777,
    "head": 125,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 5473,
    "name": "Charmer Layla of the Wood",
    "background": 1,
    "body": 14,
    "familiar": 114,
    "head": 139,
    "prop": 315,
    "rune": 296
  },
  {
    "idx": 5474,
    "name": "Alchemist Nicolas of Elysium",
    "background": 1,
    "body": 54,
    "familiar": 7777,
    "head": 203,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 5475,
    "name": "Bard Zagan of the Citadel",
    "background": 2,
    "body": 74,
    "familiar": 103,
    "head": 239,
    "prop": 257,
    "rune": 283
  },
  {
    "idx": 5476,
    "name": "Sorcerer Davos of the Wild",
    "background": 3,
    "body": 81,
    "familiar": 88,
    "head": 202,
    "prop": 274,
    "rune": 282
  },
  {
    "idx": 5477,
    "name": "Arcanist Qasim of the Sands",
    "background": 0,
    "body": 5,
    "familiar": 7777,
    "head": 219,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 5478,
    "name": "Arcanist Mina of the Forest",
    "background": 1,
    "body": 35,
    "familiar": 110,
    "head": 139,
    "prop": 323,
    "rune": 296
  },
  {
    "idx": 5479,
    "name": "Mystic Elmo of the Oasis",
    "background": 0,
    "body": 27,
    "familiar": 7777,
    "head": 201,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 5480,
    "name": "Cryptomancer Rodolfo of Xanadu",
    "background": 3,
    "body": 16,
    "familiar": 95,
    "head": 220,
    "prop": 310,
    "rune": 290
  },
  {
    "idx": 5481,
    "name": "Battle Mage Khudalf of the Tower",
    "background": 0,
    "body": 74,
    "familiar": 99,
    "head": 213,
    "prop": 276,
    "rune": 300
  },
  {
    "idx": 5482,
    "name": "Illusionist Hugo of the Hall",
    "background": 0,
    "body": 26,
    "familiar": 108,
    "head": 179,
    "prop": 306,
    "rune": 7777
  },
  {
    "idx": 5483,
    "name": "Enchanter Daria of Arcadia",
    "background": 0,
    "body": 34,
    "familiar": 115,
    "head": 132,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 5484,
    "name": "Lunar Mage Ofaris of the Plains",
    "background": 0,
    "body": 14,
    "familiar": 104,
    "head": 138,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 5485,
    "name": "Cosmic Mage Min of the Wood",
    "background": 1,
    "body": 37,
    "familiar": 115,
    "head": 180,
    "prop": 310,
    "rune": 7777
  },
  {
    "idx": 5486,
    "name": "Druid Moka of the Wold",
    "background": 3,
    "body": 42,
    "familiar": 99,
    "head": 178,
    "prop": 319,
    "rune": 283
  },
  {
    "idx": 5487,
    "name": "Witch Shivra of the Heath",
    "background": 1,
    "body": 41,
    "familiar": 114,
    "head": 209,
    "prop": 253,
    "rune": 297
  },
  {
    "idx": 5488,
    "name": "Alchemist Axel of the Toadstools",
    "background": 1,
    "body": 30,
    "familiar": 94,
    "head": 206,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 5489,
    "name": "Chronomancer Eden in the Shadows",
    "background": 1,
    "body": 85,
    "familiar": 121,
    "head": 233,
    "prop": 259,
    "rune": 7777
  },
  {
    "idx": 5490,
    "name": "Necromancer Norix of the Moors",
    "background": 3,
    "body": 14,
    "familiar": 88,
    "head": 194,
    "prop": 274,
    "rune": 302
  },
  {
    "idx": 5491,
    "name": "Cryptomancer Sondra of the Road",
    "background": 0,
    "body": 18,
    "familiar": 103,
    "head": 131,
    "prop": 310,
    "rune": 292
  },
  {
    "idx": 5492,
    "name": "Battle Mage Nicolas of the Canyon",
    "background": 1,
    "body": 15,
    "familiar": 89,
    "head": 129,
    "prop": 261,
    "rune": 303
  },
  {
    "idx": 5493,
    "name": "Sorcerer Qasim of the Wold",
    "background": 0,
    "body": 14,
    "familiar": 123,
    "head": 164,
    "prop": 263,
    "rune": 7777
  },
  {
    "idx": 5494,
    "name": "Enchanter Circe of the Marsh",
    "background": 2,
    "body": 34,
    "familiar": 105,
    "head": 208,
    "prop": 268,
    "rune": 300
  },
  {
    "idx": 5495,
    "name": "Battle Mage Sturgis of the Villa",
    "background": 0,
    "body": 77,
    "familiar": 89,
    "head": 203,
    "prop": 312,
    "rune": 304
  },
  {
    "idx": 5496,
    "name": "Sky Master Corvin of the Desert",
    "background": 2,
    "body": 60,
    "familiar": 118,
    "head": 144,
    "prop": 266,
    "rune": 286
  },
  {
    "idx": 5497,
    "name": "Witch Ophelia of the Arctic",
    "background": 0,
    "body": 65,
    "familiar": 105,
    "head": 223,
    "prop": 317,
    "rune": 304
  },
  {
    "idx": 5498,
    "name": "Druid Soya",
    "background": 2,
    "body": 16,
    "familiar": 117,
    "head": 212,
    "prop": 265,
    "rune": 303
  },
  {
    "idx": 5499,
    "name": "Archmagus Azahl of the Palms",
    "background": 0,
    "body": 60,
    "familiar": 111,
    "head": 214,
    "prop": 260,
    "rune": 7777
  },
  {
    "idx": 5500,
    "name": "Void Disciple Zeromus of Mu",
    "background": 2,
    "body": 8,
    "familiar": 105,
    "head": 194,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 5501,
    "name": "Magus Zafar of the Desert",
    "background": 0,
    "body": 27,
    "familiar": 94,
    "head": 219,
    "prop": 264,
    "rune": 7777
  },
  {
    "idx": 5502,
    "name": "Adept Shigenjo",
    "background": 3,
    "body": 75,
    "familiar": 111,
    "head": 243,
    "prop": 332,
    "rune": 284
  },
  {
    "idx": 5503,
    "name": "Hedge Wizard Atlanta of the Villa",
    "background": 0,
    "body": 18,
    "familiar": 99,
    "head": 187,
    "prop": 319,
    "rune": 290
  },
  {
    "idx": 5504,
    "name": "Charmer Bathsheba of the Bastion",
    "background": 1,
    "body": 40,
    "familiar": 114,
    "head": 191,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 5505,
    "name": "Hydromancer Qasim of the Wood",
    "background": 1,
    "body": 13,
    "familiar": 109,
    "head": 142,
    "prop": 314,
    "rune": 7777
  },
  {
    "idx": 5506,
    "name": "Pyromancer Cedric of the Road",
    "background": 0,
    "body": 13,
    "familiar": 89,
    "head": 150,
    "prop": 310,
    "rune": 285
  },
  {
    "idx": 5507,
    "name": "Conjurer Lucien of the Citadel",
    "background": 3,
    "body": 77,
    "familiar": 95,
    "head": 149,
    "prop": 311,
    "rune": 288
  },
  {
    "idx": 5508,
    "name": "Sage Beyna of the Bastion",
    "background": 2,
    "body": 48,
    "familiar": 104,
    "head": 131,
    "prop": 339,
    "rune": 293
  },
  {
    "idx": 5509,
    "name": "Conjurer Cybele of the Grotto",
    "background": 1,
    "body": 37,
    "familiar": 120,
    "head": 198,
    "prop": 246,
    "rune": 7777
  },
  {
    "idx": 5510,
    "name": "Enchanter Daria of the Road",
    "background": 3,
    "body": 19,
    "familiar": 104,
    "head": 139,
    "prop": 314,
    "rune": 304
  },
  {
    "idx": 5511,
    "name": "Enchanter Maia of the Wood",
    "background": 1,
    "body": 35,
    "familiar": 108,
    "head": 135,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 5512,
    "name": "Enchanter Hadrien of the Sands",
    "background": 1,
    "body": 59,
    "familiar": 112,
    "head": 189,
    "prop": 252,
    "rune": 300
  },
  {
    "idx": 5513,
    "name": "Artificer Oiq of the Lake",
    "background": 1,
    "body": 15,
    "familiar": 119,
    "head": 171,
    "prop": 261,
    "rune": 283
  },
  {
    "idx": 5514,
    "name": "Mystic Oberon of the Valley",
    "background": 1,
    "body": 13,
    "familiar": 7777,
    "head": 230,
    "prop": 322,
    "rune": 7777
  },
  {
    "idx": 5515,
    "name": "Enchanter Astrid of the Brine",
    "background": 0,
    "body": 57,
    "familiar": 111,
    "head": 132,
    "prop": 314,
    "rune": 296
  },
  {
    "idx": 5516,
    "name": "Arcanist Providence of the North",
    "background": 0,
    "body": 73,
    "familiar": 124,
    "head": 170,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 5517,
    "name": "Archmagus Jeldor of the Thorn",
    "background": 0,
    "body": 28,
    "familiar": 7777,
    "head": 214,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 5518,
    "name": "Enchanter Celah of the Obelisk",
    "background": 1,
    "body": 7,
    "familiar": 118,
    "head": 141,
    "prop": 249,
    "rune": 283
  },
  {
    "idx": 5519,
    "name": "Archmagus Ixar of Mu",
    "background": 1,
    "body": 24,
    "familiar": 112,
    "head": 214,
    "prop": 315,
    "rune": 7777
  },
  {
    "idx": 5520,
    "name": "Conjurer Davos of the Dunes",
    "background": 0,
    "body": 60,
    "familiar": 110,
    "head": 215,
    "prop": 246,
    "rune": 293
  },
  {
    "idx": 5521,
    "name": "Spellsinger Nikolas of the Sacred Pillars",
    "background": 2,
    "body": 63,
    "familiar": 104,
    "head": 212,
    "prop": 247,
    "rune": 291
  },
  {
    "idx": 5522,
    "name": "Archmagus Soya of El Dorado",
    "background": 2,
    "body": 76,
    "familiar": 114,
    "head": 147,
    "prop": 306,
    "rune": 291
  },
  {
    "idx": 5523,
    "name": "Enchanter Galatea of the Reach",
    "background": 3,
    "body": 39,
    "familiar": 101,
    "head": 208,
    "prop": 277,
    "rune": 295
  },
  {
    "idx": 5524,
    "name": "Illusionist Jahid of the Brambles",
    "background": 2,
    "body": 14,
    "familiar": 116,
    "head": 237,
    "prop": 273,
    "rune": 288
  },
  {
    "idx": 5525,
    "name": "Alchemist Melanzana of the Canyon",
    "background": 1,
    "body": 43,
    "familiar": 120,
    "head": 154,
    "prop": 267,
    "rune": 291
  },
  {
    "idx": 5526,
    "name": "Arcanist Patch of Elysium",
    "background": 1,
    "body": 6,
    "familiar": 124,
    "head": 235,
    "prop": 335,
    "rune": 285
  },
  {
    "idx": 5527,
    "name": "Shadow Mage Iluzor of the River",
    "background": 2,
    "body": 17,
    "familiar": 112,
    "head": 170,
    "prop": 320,
    "rune": 304
  },
  {
    "idx": 5528,
    "name": "Druid Duzzle of the Keep",
    "background": 1,
    "body": 50,
    "familiar": 123,
    "head": 171,
    "prop": 324,
    "rune": 7777
  },
  {
    "idx": 5529,
    "name": "Adept Dante of the Grotto",
    "background": 1,
    "body": 42,
    "familiar": 7777,
    "head": 188,
    "prop": 328,
    "rune": 7777
  },
  {
    "idx": 5530,
    "name": "Necromancer  of the Keep",
    "background": 0,
    "body": 48,
    "familiar": 93,
    "head": 226,
    "prop": 274,
    "rune": 290
  },
  {
    "idx": 5531,
    "name": "Illusionist Larissa of the Canyon",
    "background": 0,
    "body": 38,
    "familiar": 107,
    "head": 191,
    "prop": 246,
    "rune": 282
  },
  {
    "idx": 5532,
    "name": "Magus Alizam of the Veil",
    "background": 0,
    "body": 28,
    "familiar": 7777,
    "head": 164,
    "prop": 269,
    "rune": 7777
  },
  {
    "idx": 5533,
    "name": "Archmagus Basil of Xanadu",
    "background": 2,
    "body": 75,
    "familiar": 110,
    "head": 192,
    "prop": 267,
    "rune": 297
  },
  {
    "idx": 5534,
    "name": "Illusionist Lumos of the Gnostics",
    "background": 0,
    "body": 75,
    "familiar": 114,
    "head": 225,
    "prop": 306,
    "rune": 289
  },
  {
    "idx": 5535,
    "name": "Artificer Fumiko of the Wild",
    "background": 0,
    "body": 39,
    "familiar": 88,
    "head": 126,
    "prop": 258,
    "rune": 7777
  },
  {
    "idx": 5536,
    "name": "Magus Carly of the Steppe",
    "background": 2,
    "body": 31,
    "familiar": 93,
    "head": 191,
    "prop": 258,
    "rune": 303
  },
  {
    "idx": 5537,
    "name": "Witch Rita of the Moors",
    "background": 3,
    "body": 82,
    "familiar": 91,
    "head": 209,
    "prop": 246,
    "rune": 304
  },
  {
    "idx": 5538,
    "name": "Adept Aldus",
    "background": 1,
    "body": 30,
    "familiar": 123,
    "head": 233,
    "prop": 332,
    "rune": 7777
  },
  {
    "idx": 5539,
    "name": "Chaos Mage Azahl of the Loch",
    "background": 3,
    "body": 57,
    "familiar": 97,
    "head": 189,
    "prop": 309,
    "rune": 294
  },
  {
    "idx": 5540,
    "name": "Shaman Sahir of the River",
    "background": 0,
    "body": 79,
    "familiar": 89,
    "head": 142,
    "prop": 319,
    "rune": 300
  },
  {
    "idx": 5541,
    "name": "Shaman Celeste of the North",
    "background": 1,
    "body": 73,
    "familiar": 7777,
    "head": 132,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 5542,
    "name": "Illusionist Alatar of the Garden",
    "background": 3,
    "body": 30,
    "familiar": 103,
    "head": 225,
    "prop": 339,
    "rune": 285
  },
  {
    "idx": 5543,
    "name": "Battle Mage Eric of the Valley",
    "background": 1,
    "body": 19,
    "familiar": 89,
    "head": 218,
    "prop": 319,
    "rune": 288
  },
  {
    "idx": 5544,
    "name": "Fortune Teller Zeromus out of the Blizzard",
    "background": 2,
    "body": 73,
    "familiar": 111,
    "head": 194,
    "prop": 329,
    "rune": 303
  },
  {
    "idx": 5545,
    "name": "Scryer Sahir of the Lake",
    "background": 1,
    "body": 19,
    "familiar": 104,
    "head": 146,
    "prop": 245,
    "rune": 287
  },
  {
    "idx": 5546,
    "name": "Shaman Aiko of the Riviera",
    "background": 3,
    "body": 37,
    "familiar": 109,
    "head": 126,
    "prop": 323,
    "rune": 296
  },
  {
    "idx": 5547,
    "name": "Archmagus Basil of the Sun",
    "background": 1,
    "body": 60,
    "familiar": 118,
    "head": 215,
    "prop": 315,
    "rune": 293
  },
  {
    "idx": 5548,
    "name": "Magus Daria of the Light",
    "background": 0,
    "body": 75,
    "familiar": 120,
    "head": 198,
    "prop": 262,
    "rune": 7777
  },
  {
    "idx": 5549,
    "name": "Archmagus Crowley of the Sands",
    "background": 2,
    "body": 5,
    "familiar": 112,
    "head": 186,
    "prop": 253,
    "rune": 293
  },
  {
    "idx": 5550,
    "name": "Enchanter Artis of the Road",
    "background": 2,
    "body": 23,
    "familiar": 111,
    "head": 131,
    "prop": 321,
    "rune": 302
  },
  {
    "idx": 5551,
    "name": "Druid Angus of the Oasis",
    "background": 0,
    "body": 27,
    "familiar": 111,
    "head": 129,
    "prop": 317,
    "rune": 7777
  },
  {
    "idx": 5552,
    "name": "Isaac of the Grotto",
    "background": 0,
    "body": 82,
    "familiar": 7777,
    "head": 199,
    "prop": 267,
    "rune": 7777
  },
  {
    "idx": 5553,
    "name": "Archmagus Aldus out of the Void",
    "background": 3,
    "body": 87,
    "familiar": 120,
    "head": 230,
    "prop": 254,
    "rune": 282
  },
  {
    "idx": 5554,
    "name": "Pumlo of the Tower",
    "background": 1,
    "body": 6,
    "familiar": 7777,
    "head": 127,
    "prop": 255,
    "rune": 7777
  },
  {
    "idx": 5555,
    "name": "Arcanist Shoi-Ming",
    "background": 0,
    "body": 9,
    "familiar": 7777,
    "head": 236,
    "prop": 250,
    "rune": 7777
  },
  {
    "idx": 5556,
    "name": "Shaman Umber of the Ether",
    "background": 2,
    "body": 9,
    "familiar": 115,
    "head": 167,
    "prop": 276,
    "rune": 7777
  },
  {
    "idx": 5557,
    "name": "Charmer Carly of the Wood",
    "background": 1,
    "body": 31,
    "familiar": 93,
    "head": 131,
    "prop": 246,
    "rune": 290
  },
  {
    "idx": 5558,
    "name": "Sage Atlanta of the Marsh",
    "background": 3,
    "body": 21,
    "familiar": 99,
    "head": 190,
    "prop": 339,
    "rune": 287
  },
  {
    "idx": 5559,
    "name": "Summoner Baird of the Expanse",
    "background": 0,
    "body": 73,
    "familiar": 112,
    "head": 220,
    "prop": 253,
    "rune": 296
  },
  {
    "idx": 5560,
    "name": "Sage Faye of the Hollow",
    "background": 0,
    "body": 22,
    "familiar": 95,
    "head": 191,
    "prop": 277,
    "rune": 7777
  },
  {
    "idx": 5561,
    "name": "Hedge Wizard Argus of the Belfry",
    "background": 2,
    "body": 6,
    "familiar": 115,
    "head": 186,
    "prop": 323,
    "rune": 297
  },
  {
    "idx": 5562,
    "name": "Shaman Rafiq of the Palms",
    "background": 0,
    "body": 5,
    "familiar": 7777,
    "head": 128,
    "prop": 265,
    "rune": 7777
  },
  {
    "idx": 5563,
    "name": "Witch Imeena of the Wood",
    "background": 2,
    "body": 79,
    "familiar": 108,
    "head": 155,
    "prop": 314,
    "rune": 285
  },
  {
    "idx": 5564,
    "name": "Hydromancer Soran of the Psychic Leap",
    "background": 2,
    "body": 10,
    "familiar": 104,
    "head": 227,
    "prop": 314,
    "rune": 291
  },
  {
    "idx": 5565,
    "name": "Magus Milton of Elysium",
    "background": 3,
    "body": 49,
    "familiar": 119,
    "head": 226,
    "prop": 262,
    "rune": 299
  },
  {
    "idx": 5566,
    "name": "Ice Mage Purple Boy of the Tundra",
    "background": 1,
    "body": 73,
    "familiar": 110,
    "head": 154,
    "prop": 309,
    "rune": 300
  },
  {
    "idx": 5567,
    "name": "Augurer Zelroth of the Dunes",
    "background": 1,
    "body": 59,
    "familiar": 115,
    "head": 160,
    "prop": 251,
    "rune": 282
  },
  {
    "idx": 5568,
    "name": "Archmagus Merlon of the Palms",
    "background": 1,
    "body": 5,
    "familiar": 7777,
    "head": 174,
    "prop": 320,
    "rune": 7777
  },
  {
    "idx": 5569,
    "name": "Alchemist Cassius of the Moors",
    "background": 0,
    "body": 42,
    "familiar": 119,
    "head": 133,
    "prop": 270,
    "rune": 7777
  },
  {
    "idx": 5570,
    "name": "Sorcerer David of the Wood",
    "background": 0,
    "body": 13,
    "familiar": 7777,
    "head": 197,
    "prop": 327,
    "rune": 7777
  },
  {
    "idx": 5571,
    "name": "Artificer Faye of the Crag",
    "background": 0,
    "body": 65,