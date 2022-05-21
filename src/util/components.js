// frwc64 = typeof frwc64 != 'undefined' ? frwc64 : {}

let components = [
  {
    "idx": 0,
    "displayName": "Black",
    "tags": [],
    "affinity": [],
    "type": "background"
  },
  {
    "idx": 1,
    "displayName": "Blue",
    "tags": [],
    "affinity": [],
    "type": "background"
  },
  {
    "idx": 2,
    "displayName": "Green",
    "tags": [],
    "affinity": [],
    "type": "background"
  },
  {
    "idx": 3,
    "displayName": "Red",
    "tags": [],
    "affinity": [],
    "type": "background"
  },
  {
    "idx": 5,
    "displayName": "Desert Wear",
    "tags": [
      {
        "idx": "6",
        "name": "Desert"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "affinity": [
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "137",
        "name": "Light"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "159",
        "name": "Monk"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "type": "body"
  },
  {
    "idx": 6,
    "displayName": "Shoulder Cape Green",
    "tags": [
      {
        "idx": "10",
        "name": "Arm Sash"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "body"
  },
  {
    "idx": 7,
    "displayName": "Shoulder Cape Red",
    "tags": [
      {
        "idx": "10",
        "name": "Arm Sash"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "body"
  },
  {
    "idx": 8,
    "displayName": "Banded Overall",
    "tags": [
      {
        "idx": "15",
        "name": "Banded Overall"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "type": "body"
  },
  {
    "idx": 9,
    "displayName": "Brown Tunic",
    "tags": [
      {
        "idx": "255",
        "name": "Tunic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "affinity": [
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "159",
        "name": "Monk"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "165",
        "name": "Music"
      }
    ],
    "type": "body"
  },
  {
    "idx": 10,
    "displayName": "Grey Tunic",
    "tags": [
      {
        "idx": "255",
        "name": "Tunic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "108",
        "name": "Grey"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "108",
        "name": "Grey"
      }
    ],
    "type": "body"
  },
  {
    "idx": 11,
    "displayName": "White Tunic",
    "tags": [
      {
        "idx": "255",
        "name": "Tunic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "159",
        "name": "Monk"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "165",
        "name": "Music"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "body"
  },
  {
    "idx": 14,
    "displayName": "Blue Lined Coveralls ",
    "tags": [
      {
        "idx": "29",
        "name": "Boots"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "54",
        "name": "Cold"
      },
      {
        "idx": "223",
        "name": "Tone Light"
      }
    ],
    "affinity": [
      {
        "idx": "54",
        "name": "Cold"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "type": "body"
  },
  {
    "idx": 15,
    "displayName": "Green Lined Coveralls",
    "tags": [
      {
        "idx": "29",
        "name": "Boots"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "54",
        "name": "Cold"
      },
      {
        "idx": "223",
        "name": "Tone Light"
      }
    ],
    "affinity": [
      {
        "idx": "54",
        "name": "Cold"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "body"
  },
  {
    "idx": 12,
    "displayName": "Blue Big Buckle",
    "tags": [
      {
        "idx": "36",
        "name": "Buckle"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "170",
        "name": "Ocean"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "170",
        "name": "Ocean"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "215",
        "name": "Sea"
      },
      {
        "idx": "186",
        "name": "Pirate"
      },
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "body"
  },
  {
    "idx": 13,
    "displayName": "Green Big Buckle",
    "tags": [
      {
        "idx": "36",
        "name": "Buckle"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "170",
        "name": "Ocean"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "170",
        "name": "Ocean"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "215",
        "name": "Sea"
      },
      {
        "idx": "186",
        "name": "Pirate"
      },
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "body"
  },
  {
    "idx": 16,
    "displayName": "Space Chroma",
    "tags": [
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "body"
  },
  {
    "idx": 18,
    "displayName": "Green Caped Traveller",
    "tags": [
      {
        "idx": "41",
        "name": "Cape"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "body"
  },
  {
    "idx": 19,
    "displayName": "Orange Caped Traveller",
    "tags": [
      {
        "idx": "41",
        "name": "Cape"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "215",
        "name": "Sea"
      },
      {
        "idx": "170",
        "name": "Ocean"
      },
      {
        "idx": "186",
        "name": "Pirate"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "body"
  },
  {
    "idx": 20,
    "displayName": "Purple Caped Traveller",
    "tags": [
      {
        "idx": "41",
        "name": "Cape"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "body"
  },
  {
    "idx": 17,
    "displayName": "Cape in the Wind",
    "tags": [
      {
        "idx": "41",
        "name": "Cape"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "type": "body"
  },
  {
    "idx": 21,
    "displayName": "Spandex  Green",
    "tags": [
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "223",
        "name": "Tone Light"
      },
      {
        "idx": "60",
        "name": "Cyan"
      }
    ],
    "affinity": [
      {
        "idx": "60",
        "name": "Cyan"
      }
    ],
    "type": "body"
  },
  {
    "idx": 22,
    "displayName": "Spandex  Dark",
    "tags": [
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "221",
        "name": "Tone Dark"
      }
    ],
    "affinity": [],
    "type": "body"
  },
  {
    "idx": 23,
    "displayName": "Overcoat",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "52",
        "name": "Coat"
      },
      {
        "idx": "54",
        "name": "Cold"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "54",
        "name": "Cold"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "body"
  },
  {
    "idx": 24,
    "displayName": "Tech Coat",
    "tags": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "body"
  },
  {
    "idx": 25,
    "displayName": "Deeze Body",
    "tags": [
      {
        "idx": "257",
        "name": "Unique"
      },
      {
        "idx": "66",
        "name": "Deeze"
      }
    ],
    "affinity": [],
    "type": "body"
  },
  {
    "idx": 27,
    "displayName": "Double Sash",
    "tags": [
      {
        "idx": "74",
        "name": "Drape"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "type": "body"
  },
  {
    "idx": 26,
    "displayName": "Jester Diamonds",
    "tags": [
      {
        "idx": "126",
        "name": "Jester"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "60",
        "name": "Cyan"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "type": "body"
  },
  {
    "idx": 28,
    "displayName": "Blue Elven Cloak",
    "tags": [
      {
        "idx": "82",
        "name": "Elven"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "affinity": [
      {
        "idx": "82",
        "name": "Elven"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "type": "body"
  },
  {
    "idx": 29,
    "displayName": "Green Elven Cloak",
    "tags": [
      {
        "idx": "82",
        "name": "Elven"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "affinity": [
      {
        "idx": "82",
        "name": "Elven"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "type": "body"
  },
  {
    "idx": 30,
    "displayName": "Yellow Elven Cloak",
    "tags": [
      {
        "idx": "82",
        "name": "Elven"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "affinity": [
      {
        "idx": "82",
        "name": "Elven"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "type": "body"
  },
  {
    "idx": 32,
    "displayName": "Purple Yoga ",
    "tags": [
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "221",
        "name": "Tone Dark"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "body"
  },
  {
    "idx": 31,
    "displayName": "Purple Yoga",
    "tags": [
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "223",
        "name": "Tone Light"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "body"
  },
  {
    "idx": 33,
    "displayName": "Red Yoga",
    "tags": [
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "222",
        "name": "Tone Green"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "body"
  },
  {
    "idx": 34,
    "displayName": "Rose Yoga",
    "tags": [
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "223",
        "name": "Tone Light"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "body"
  },
  {
    "idx": 35,
    "displayName": "Blue Hip Pouch",
    "tags": [
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "body"
  },
  {
    "idx": 36,
    "displayName": "Green Hip Pouch",
    "tags": [
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "body"
  },
  {
    "idx": 37,
    "displayName": "Red Hip Pouch",
    "tags": [
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "body"
  },
  {
    "idx": 38,
    "displayName": "Green Cloak",
    "tags": [
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "body"
  },
  {
    "idx": 39,
    "displayName": "Purple Cloak",
    "tags": [
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "body"
  },
  {
    "idx": 40,
    "displayName": "Formal Suit",
    "tags": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "body"
  },
  {
    "idx": 41,
    "displayName": "Blue Coveralls",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "body"
  },
  {
    "idx": 42,
    "displayName": "Brown Coveralls",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "60",
        "name": "Cyan"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "60",
        "name": "Cyan"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "body"
  },
  {
    "idx": 43,
    "displayName": "Green Coveralls",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "171",
        "name": "Olive"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "171",
        "name": "Olive"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "body"
  },
  {
    "idx": 44,
    "displayName": "Red Coveralls",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "body"
  },
  {
    "idx": 45,
    "displayName": "White Coveralls",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "type": "body"
  },
  {
    "idx": 46,
    "displayName": "SupaFly",
    "tags": [
      {
        "idx": "99",
        "name": "Urban"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "260",
        "name": "Urban"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "260",
        "name": "Urban"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "body"
  },
  {
    "idx": 47,
    "displayName": "Gfunk",
    "tags": [
      {
        "idx": "102",
        "name": "GFunk"
      }
    ],
    "affinity": [],
    "type": "body"
  },
  {
    "idx": 48,
    "displayName": "Gold Chain",
    "tags": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "body"
  },
  {
    "idx": 49,
    "displayName": "Green Hip Scarf",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "body"
  },
  {
    "idx": 50,
    "displayName": "Orange Hip Scarf ",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "171",
        "name": "Olive"
      }
    ],
    "affinity": [
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "171",
        "name": "Olive"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "body"
  },
  {
    "idx": 4,
    "displayName": "Card Magician",
    "tags": [
      {
        "idx": "113",
        "name": "Cardistry"
      },
      {
        "idx": "257",
        "name": "Unique"
      }
    ],
    "affinity": [],
    "type": "body"
  },
  {
    "idx": 51,
    "displayName": "Cheetah Print",
    "tags": [
      {
        "idx": "118",
        "name": "Hunter"
      },
      {
        "idx": "257",
        "name": "Unique"
      }
    ],
    "affinity": [],
    "type": "body"
  },
  {
    "idx": 52,
    "displayName": "Ice Robe",
    "tags": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "body"
  },
  {
    "idx": 53,
    "displayName": "Loopify",
    "tags": [
      {
        "idx": "257",
        "name": "Unique"
      }
    ],
    "affinity": [],
    "type": "body"
  },
  {
    "idx": 54,
    "displayName": "Red Cleric",
    "tags": [
      {
        "idx": "157",
        "name": "Middle Sash"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "body"
  },
  {
    "idx": 55,
    "displayName": "Yellow Cleric",
    "tags": [
      {
        "idx": "157",
        "name": "Middle Sash"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "body"
  },
  {
    "idx": 56,
    "displayName": "Pink Cosmic",
    "tags": [
      {
        "idx": "183",
        "name": "Alien"
      },
      {
        "idx": "146",
        "name": "Alien"
      }
    ],
    "affinity": [],
    "type": "body"
  },
  {
    "idx": 57,
    "displayName": "Swashbuckling Gear",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "186",
        "name": "Pirate"
      },
      {
        "idx": "41",
        "name": "Cape"
      },
      {
        "idx": "215",
        "name": "Sea"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "186",
        "name": "Pirate"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "215",
        "name": "Sea"
      },
      {
        "idx": "170",
        "name": "Ocean"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "body"
  },
  {
    "idx": 58,
    "displayName": "Poncho",
    "tags": [
      {
        "idx": "190",
        "name": "Poncho"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "type": "body"
  },
  {
    "idx": 59,
    "displayName": "Brown Harem Pants",
    "tags": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "affinity": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "159",
        "name": "Monk"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "body"
  },
  {
    "idx": 60,
    "displayName": "Orange Harem Pants",
    "tags": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "affinity": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "159",
        "name": "Monk"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "type": "body"
  },
  {
    "idx": 61,
    "displayName": "Purple Harem Pants",
    "tags": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "type": "body"
  },
  {
    "idx": 62,
    "displayName": "Green Scholar",
    "tags": [
      {
        "idx": "0",
        "name": "Academic"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "type": "body"
  },
  {
    "idx": 63,
    "displayName": "Orange Scholar",
    "tags": [
      {
        "idx": "0",
        "name": "Academic"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "body"
  },
  {
    "idx": 64,
    "displayName": "Rainbow Suit",
    "tags": [
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "affinity": [
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "type": "body"
  },
  {
    "idx": 65,
    "displayName": "Red Suit",
    "tags": [
      {
        "idx": "202",
        "name": "Red Suit"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "body"
  },
  {
    "idx": 66,
    "displayName": "All Seeing Robe",
    "tags": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "159",
        "name": "Monk"
      },
      {
        "idx": "85",
        "name": "Eyeball"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "159",
        "name": "Monk"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "85",
        "name": "Eyeball"
      }
    ],
    "type": "body"
  },
  {
    "idx": 67,
    "displayName": "Green Mantle Robe",
    "tags": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "203",
        "name": "Robe"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "body"
  },
  {
    "idx": 68,
    "displayName": "Purple Mantle Robe",
    "tags": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "203",
        "name": "Robe"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "body"
  },
  {
    "idx": 69,
    "displayName": "Punker",
    "tags": [
      {
        "idx": "127",
        "name": "JB"
      },
      {
        "idx": "257",
        "name": "Unique"
      }
    ],
    "affinity": [],
    "type": "body"
  },
  {
    "idx": 70,
    "displayName": "Skeleton Flame",
    "tags": [
      {
        "idx": "257",
        "name": "Unique"
      }
    ],
    "affinity": [],
    "type": "body"
  },
  {
    "idx": 71,
    "displayName": "Gold Skeleton",
    "tags": [
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "41",
        "name": "Cape"
      },
      {
        "idx": "220",
        "name": "Skeleton"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "body"
  },
  {
    "idx": 72,
    "displayName": "Silver Skeleton",
    "tags": [
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "41",
        "name": "Cape"
      },
      {
        "idx": "220",
        "name": "Skeleton"
      },
      {
        "idx": "219",
        "name": "Quick Silver"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "219",
        "name": "Quick Silver"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "body"
  },
  {
    "idx": 73,
    "displayName": "Tundra Wear",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "253",
        "name": "Tundra"
      },
      {
        "idx": "54",
        "name": "Cold"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "54",
        "name": "Cold"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "type": "body"
  },
  {
    "idx": 74,
    "displayName": "Dapper Formal",
    "tags": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "270",
        "name": "Warm"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "affinity": [
      {
        "idx": "270",
        "name": "Warm"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "type": "body"
  },
  {
    "idx": 75,
    "displayName": "Cosmic Cardigan",
    "tags": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "13",
        "name": "Astral"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "affinity": [
      {
        "idx": "13",
        "name": "Astral"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "type": "body"
  },
  {
    "idx": 76,
    "displayName": "Aristocrat Blue",
    "tags": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "239",
        "name": "Suit"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "body"
  },
  {
    "idx": 77,
    "displayName": "Aristocrat Green",
    "tags": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "239",
        "name": "Suit"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "body"
  },
  {
    "idx": 78,
    "displayName": "Aristocrat Purple",
    "tags": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "240",
        "name": "Suit"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "body"
  },
  {
    "idx": 79,
    "displayName": "Two Tone Fringe",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "171",
        "name": "Olive"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "affinity": [
      {
        "idx": "171",
        "name": "Olive"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "type": "body"
  },
  {
    "idx": 80,
    "displayName": "Skipper",
    "tags": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "215",
        "name": "Sea"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "body"
  },
  {
    "idx": 81,
    "displayName": "Vest Blue",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "body"
  },
  {
    "idx": 82,
    "displayName": "Vest Green",
    "tags": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "body"
  },
  {
    "idx": 83,
    "displayName": "Celestial Sash",
    "tags": [
      {
        "idx": "266",
        "name": "Void"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "60",
        "name": "Cyan"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "60",
        "name": "Cyan"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "body"
  },
  {
    "idx": 84,
    "displayName": "Wicker Wear",
    "tags": [
      {
        "idx": "273",
        "name": "Wicker"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "body"
  },
  {
    "idx": 85,
    "displayName": "Black Wraith",
    "tags": [
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "affinity": [
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "body"
  },
  {
    "idx": 86,
    "displayName": "White Wraith",
    "tags": [
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "body"
  },
  {
    "idx": 87,
    "displayName": "Robe of Shadow",
    "tags": [
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "body"
  },
  {
    "idx": 88,
    "displayName": "Forever Bat",
    "tags": [
      {
        "idx": "16",
        "name": "Bat"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "24",
        "name": "Blood"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "24",
        "name": "Blood"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 89,
    "displayName": "Dirt Rabbit",
    "tags": [
      {
        "idx": "197",
        "name": "Lagomorph"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "affinity": [
      {
        "idx": "77",
        "name": "Earth"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 90,
    "displayName": "Psychic Rabbit",
    "tags": [
      {
        "idx": "197",
        "name": "Lagomorph"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "affinity": [
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "54",
        "name": "Cold"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 91,
    "displayName": "Pink Butterfly",
    "tags": [
      {
        "idx": "37",
        "name": "Butterfly"
      },
      {
        "idx": "182",
        "name": "Pink"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "182",
        "name": "Pink"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 93,
    "displayName": "Lucky Black Cat",
    "tags": [
      {
        "idx": "44",
        "name": "Cat"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 94,
    "displayName": "Sun Cat",
    "tags": [
      {
        "idx": "44",
        "name": "Cat"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "241",
        "name": "Sun"
      }
    ],
    "affinity": [
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "241",
        "name": "Sun"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 95,
    "displayName": "Bliss Cat",
    "tags": [
      {
        "idx": "44",
        "name": "Cat"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "141",
        "name": "Love"
      }
    ],
    "affinity": [
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "141",
        "name": "Love"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 92,
    "displayName": "Bengal Cat",
    "tags": [
      {
        "idx": "257",
        "name": "Unique"
      }
    ],
    "affinity": [],
    "type": "familiar"
  },
  {
    "idx": 96,
    "displayName": "Mesozoic Cockatrice",
    "tags": [
      {
        "idx": "53",
        "name": "Cockatrice"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 97,
    "displayName": "Crackerjack Crow",
    "tags": [
      {
        "idx": "58",
        "name": "Crow"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "22",
        "name": "Blackness"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 98,
    "displayName": "Pink Footed Crow",
    "tags": [
      {
        "idx": "51",
        "name": "Claire"
      }
    ],
    "affinity": [],
    "type": "familiar"
  },
  {
    "idx": 99,
    "displayName": "Field Dog",
    "tags": [
      {
        "idx": "68",
        "name": "Dog"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "50",
        "name": "Urban"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 100,
    "displayName": "White Dog",
    "tags": [
      {
        "idx": "68",
        "name": "Dog"
      }
    ],
    "affinity": [
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 102,
    "displayName": "3D Frog",
    "tags": [
      {
        "idx": "97",
        "name": "Frog"
      }
    ],
    "affinity": [
      {
        "idx": "97",
        "name": "Frog"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 117,
    "displayName": "Astral Snail",
    "tags": [
      {
        "idx": "227",
        "name": "Snail"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "227",
        "name": "Snail"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 101,
    "displayName": "Fox Trickster",
    "tags": [
      {
        "idx": "96",
        "name": "Fox"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 103,
    "displayName": "Golden Toad",
    "tags": [
      {
        "idx": "97",
        "name": "Frog"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 104,
    "displayName": "Swamp Bullfrog",
    "tags": [
      {
        "idx": "97",
        "name": "Frog"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 105,
    "displayName": "Ember Frog",
    "tags": [
      {
        "idx": "97",
        "name": "Frog"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "affinity": [
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 106,
    "displayName": "Jewled Hummingbird",
    "tags": [
      {
        "idx": "117",
        "name": "Hummingbird"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 107,
    "displayName": "Giant Ladybug",
    "tags": [
      {
        "idx": "134",
        "name": "Ladybug"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 108,
    "displayName": "Merlin's Monkey",
    "tags": [
      {
        "idx": "160",
        "name": "Monkey"
      },
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "affinity": [
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "94",
        "name": "Forest"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 109,
    "displayName": "Great Owl",
    "tags": [
      {
        "idx": "176",
        "name": "Owl"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 111,
    "displayName": "Plague Rat",
    "tags": [
      {
        "idx": "199",
        "name": "Rodent"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "186",
        "name": "Pirate"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 110,
    "displayName": "Blue Rat",
    "tags": [
      {
        "idx": "199",
        "name": "Rodent"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "affinity": [
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "215",
        "name": "Sea"
      },
      {
        "idx": "170",
        "name": "Ocean"
      },
      {
        "idx": "243",
        "name": "Swamp"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 112,
    "displayName": "Albino Rat",
    "tags": [
      {
        "idx": "199",
        "name": "Rodent"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "95",
        "name": "Formal"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 113,
    "displayName": "Skramps",
    "tags": [
      {
        "idx": "224",
        "name": "Skramps"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "95",
        "name": "Formal"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 114,
    "displayName": "Sapphire Slime",
    "tags": [
      {
        "idx": "226",
        "name": "Slime"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "215",
        "name": "Sea"
      },
      {
        "idx": "170",
        "name": "Ocean"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 115,
    "displayName": "Emerald Slime",
    "tags": [
      {
        "idx": "226",
        "name": "Slime"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "166",
        "name": "Nature"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 116,
    "displayName": "Topaz Slime",
    "tags": [
      {
        "idx": "226",
        "name": "Slime"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 118,
    "displayName": "Golden Viper",
    "tags": [
      {
        "idx": "228",
        "name": "Snake"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "228",
        "name": "Snake"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 119,
    "displayName": "Green Asp",
    "tags": [
      {
        "idx": "228",
        "name": "Snake"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "94",
        "name": "Forest"
      }
    ],
    "affinity": [
      {
        "idx": "228",
        "name": "Snake"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 120,
    "displayName": "Red Mamba",
    "tags": [
      {
        "idx": "228",
        "name": "Snake"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "affinity": [
      {
        "idx": "228",
        "name": "Snake"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 121,
    "displayName": "Ancient Sphinx",
    "tags": [
      {
        "idx": "233",
        "name": "Sphinx"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "affinity": [
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "193",
        "name": "Prophecy"
      },
      {
        "idx": "173",
        "name": "Oracle"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 122,
    "displayName": "Rain Toucan",
    "tags": [
      {
        "idx": "251",
        "name": "Toucan"
      },
      {
        "idx": "128",
        "name": "Jungle"
      }
    ],
    "affinity": [
      {
        "idx": "270",
        "name": "Warm"
      },
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 123,
    "displayName": "Onyx Wolf",
    "tags": [
      {
        "idx": "277",
        "name": "Lupus"
      },
      {
        "idx": "22",
        "name": "Blackness"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 124,
    "displayName": "Aura Wolf",
    "tags": [
      {
        "idx": "277",
        "name": "Lupus"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "familiar"
  },
  {
    "idx": 125,
    "displayName": "Ascetic",
    "tags": [
      {
        "idx": "1",
        "name": "Ascetic"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "159",
        "name": "Monk"
      }
    ],
    "affinity": [
      {
        "idx": "159",
        "name": "Monk"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 126,
    "displayName": "Kabuki ",
    "tags": [
      {
        "idx": "2",
        "name": "Kumadori"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "type": "head"
  },
  {
    "idx": 127,
    "displayName": "Thelemist",
    "tags": [
      {
        "idx": "5",
        "name": "Thelema"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "24",
        "name": "Blood"
      }
    ],
    "type": "head"
  },
  {
    "idx": 128,
    "displayName": "Djinn",
    "tags": [
      {
        "idx": "7",
        "name": "Djinn"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "6",
        "name": "Desert"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "head"
  },
  {
    "idx": 129,
    "displayName": "Kelt",
    "tags": [
      {
        "idx": "8",
        "name": "Khelt"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "35",
        "name": "Brownish Red"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "type": "head"
  },
  {
    "idx": 130,
    "displayName": "ArtChick",
    "tags": [
      {
        "idx": "11",
        "name": "Artgirl"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "type": "head"
  },
  {
    "idx": 131,
    "displayName": "Huntress",
    "tags": [
      {
        "idx": "12",
        "name": "Huntress"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "type": "head"
  },
  {
    "idx": 132,
    "displayName": "Floral Master",
    "tags": [
      {
        "idx": "18",
        "name": "Floral Master"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "type": "head"
  },
  {
    "idx": 133,
    "displayName": "Woodland Shapeshifter",
    "tags": [
      {
        "idx": "19",
        "name": "Woodland Shapeshifter"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "162",
        "name": "Mountains"
      }
    ],
    "type": "head"
  },
  {
    "idx": 134,
    "displayName": "Bernardo",
    "tags": [
      {
        "idx": "20",
        "name": "Bernardo"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [],
    "type": "head"
  },
  {
    "idx": 135,
    "displayName": "Enchantress",
    "tags": [
      {
        "idx": "21",
        "name": "Enchantress"
      },
      {
        "idx": "88",
        "name": "Feminine"
      }
    ],
    "affinity": [],
    "type": "head"
  },
  {
    "idx": 137,
    "displayName": "BrainDrain",
    "tags": [
      {
        "idx": "30",
        "name": "BrainDrain"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "head"
  },
  {
    "idx": 136,
    "displayName": "Evil One",
    "tags": [
      {
        "idx": "23",
        "name": "Evil One"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "type": "head"
  },
  {
    "idx": 138,
    "displayName": "Skylord",
    "tags": [
      {
        "idx": "39",
        "name": "Skylord"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 140,
    "displayName": "Felis",
    "tags": [
      {
        "idx": "45",
        "name": "Cat"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "head"
  },
  {
    "idx": 139,
    "displayName": "Dark Sister",
    "tags": [
      {
        "idx": "43",
        "name": "Dark Sister"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "head"
  },
  {
    "idx": 141,
    "displayName": "Cloud Prophet",
    "tags": [
      {
        "idx": "46",
        "name": "Cloud Prophet"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "60",
        "name": "Cyan"
      }
    ],
    "affinity": [
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "60",
        "name": "Cyan"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 142,
    "displayName": "Stranger",
    "tags": [
      {
        "idx": "48",
        "name": "Stranger"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "head"
  },
  {
    "idx": 143,
    "displayName": "Claire Silver",
    "tags": [
      {
        "idx": "51",
        "name": "Claire"
      },
      {
        "idx": "88",
        "name": "Feminine"
      }
    ],
    "affinity": [],
    "type": "head"
  },
  {
    "idx": 148,
    "displayName": "Deeze",
    "tags": [
      {
        "idx": "66",
        "name": "Deeze"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [],
    "type": "head"
  },
  {
    "idx": 144,
    "displayName": "Corvid",
    "tags": [
      {
        "idx": "55",
        "name": "Corvid"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "85",
        "name": "Eyeball"
      }
    ],
    "type": "head"
  },
  {
    "idx": 145,
    "displayName": "Great Old One",
    "tags": [
      {
        "idx": "59",
        "name": "Ctulu"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "170",
        "name": "Ocean"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "85",
        "name": "Eyeball"
      }
    ],
    "type": "head"
  },
  {
    "idx": 146,
    "displayName": "Black Mage",
    "tags": [
      {
        "idx": "62",
        "name": "Black Mage"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 147,
    "displayName": "Arcadian Master",
    "tags": [
      {
        "idx": "63",
        "name": "Arcadian Master"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "head"
  },
  {
    "idx": 149,
    "displayName": "Houngan",
    "tags": [
      {
        "idx": "69",
        "name": "DooVoo"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "268",
        "name": "Voodoo"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "225",
        "name": "Skull"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "268",
        "name": "Voodoo"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "27",
        "name": "Bone"
      }
    ],
    "type": "head"
  },
  {
    "idx": 150,
    "displayName": "Dapper Arcanist",
    "tags": [
      {
        "idx": "70",
        "name": "Dapper Arcanist"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "186",
        "name": "Pirate"
      }
    ],
    "type": "head"
  },
  {
    "idx": 151,
    "displayName": "Bippadotta",
    "tags": [
      {
        "idx": "71",
        "name": "Dotta"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "type": "head"
  },
  {
    "idx": 152,
    "displayName": "Vampyre",
    "tags": [
      {
        "idx": "73",
        "name": "Vampyre"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "24",
        "name": "Blood"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "24",
        "name": "Blood"
      },
      {
        "idx": "89",
        "name": "Fire"
      },
      {
        "idx": "65",
        "name": "Death"
      }
    ],
    "type": "head"
  },
  {
    "idx": 153,
    "displayName": "Professor",
    "tags": [
      {
        "idx": "75",
        "name": "Professor"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 154,
    "displayName": "Vegetable",
    "tags": [
      {
        "idx": "79",
        "name": "Vegetable"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 155,
    "displayName": "Witch",
    "tags": [
      {
        "idx": "80",
        "name": "Witch"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "44",
        "name": "Cat"
      },
      {
        "idx": "33",
        "name": "Broom"
      },
      {
        "idx": "199",
        "name": "Rodent"
      }
    ],
    "type": "head"
  },
  {
    "idx": 156,
    "displayName": "Empress",
    "tags": [
      {
        "idx": "83",
        "name": "Empress"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "89",
        "name": "Fire"
      }
    ],
    "type": "head"
  },
  {
    "idx": 157,
    "displayName": "Big Gross Eyeball",
    "tags": [
      {
        "idx": "86",
        "name": "Eyeball"
      },
      {
        "idx": "85",
        "name": "Eyeball"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "194",
        "name": "Prophecy"
      },
      {
        "idx": "173",
        "name": "Oracle"
      }
    ],
    "type": "head"
  },
  {
    "idx": 158,
    "displayName": "Flaming Skull",
    "tags": [
      {
        "idx": "91",
        "name": "Flame"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "89",
        "name": "Fire"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "head"
  },
  {
    "idx": 159,
    "displayName": "Swamp Witch",
    "tags": [
      {
        "idx": "92",
        "name": "Swamp Witch"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "243",
        "name": "Swamp"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "271",
        "name": "Water Magic"
      },
      {
        "idx": "187",
        "name": "Flora"
      }
    ],
    "type": "head"
  },
  {
    "idx": 160,
    "displayName": "Eastern Arcanist",
    "tags": [
      {
        "idx": "98",
        "name": "Eastern Arcanist"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 162,
    "displayName": "Cosmic Arcanist",
    "tags": [
      {
        "idx": "101",
        "name": "Cosmic Arcanist"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 163,
    "displayName": "GFunk Head",
    "tags": [
      {
        "idx": "102",
        "name": "GFunk"
      },
      {
        "idx": "257",
        "name": "Unique"
      }
    ],
    "affinity": [],
    "type": "head"
  },
  {
    "idx": 164,
    "displayName": "Dream Master",
    "tags": [
      {
        "idx": "104",
        "name": "Dream Master"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "type": "head"
  },
  {
    "idx": 165,
    "displayName": "Gruffling",
    "tags": [
      {
        "idx": "109",
        "name": "Gruffling"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "head"
  },
  {
    "idx": 161,
    "displayName": "9272ETH",
    "tags": [
      {
        "idx": "99",
        "name": "Urban"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "head"
  },
  {
    "idx": 166,
    "displayName": "Hag",
    "tags": [
      {
        "idx": "110",
        "name": "Hag"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "226",
        "name": "Slime"
      },
      {
        "idx": "97",
        "name": "Frog"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "head"
  },
  {
    "idx": 167,
    "displayName": "Hunter",
    "tags": [
      {
        "idx": "112",
        "name": "Stag"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "head"
  },
  {
    "idx": 168,
    "displayName": "Fiskantes",
    "tags": [
      {
        "idx": "113",
        "name": "Cardistry"
      }
    ],
    "affinity": [],
    "type": "head"
  },
  {
    "idx": 169,
    "displayName": "Hue Master",
    "tags": [
      {
        "idx": "116",
        "name": "Hue"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "affinity": [
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "type": "head"
  },
  {
    "idx": 170,
    "displayName": "Illuminatus",
    "tags": [
      {
        "idx": "120",
        "name": "Illuminatus"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "219",
        "name": "Quick Silver"
      }
    ],
    "type": "head"
  },
  {
    "idx": 171,
    "displayName": "Imp",
    "tags": [
      {
        "idx": "121",
        "name": "Imp"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "head"
  },
  {
    "idx": 172,
    "displayName": "Pumpkin Head",
    "tags": [
      {
        "idx": "123",
        "name": "Pumpkin"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "affinity": [
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "type": "head"
  },
  {
    "idx": 173,
    "displayName": "Wildman",
    "tags": [
      {
        "idx": "124",
        "name": "Wildman"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "head"
  },
  {
    "idx": 174,
    "displayName": "Labyrinthian",
    "tags": [
      {
        "idx": "125",
        "name": "Labyrinthian"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "type": "head"
  },
  {
    "idx": 175,
    "displayName": "Joey Billboard",
    "tags": [
      {
        "idx": "127",
        "name": "JB"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [],
    "type": "head"
  },
  {
    "idx": 176,
    "displayName": "Crone",
    "tags": [
      {
        "idx": "129",
        "name": "Crone"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "head"
  },
  {
    "idx": 177,
    "displayName": "Strongman",
    "tags": [
      {
        "idx": "131",
        "name": "Strongman"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "6",
        "name": "Desert"
      }
    ],
    "affinity": [
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "6",
        "name": "Desert"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 178,
    "displayName": "Koopling",
    "tags": [
      {
        "idx": "133",
        "name": "Koopling"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 179,
    "displayName": "Creol",
    "tags": [
      {
        "idx": "135",
        "name": "Creol"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "head"
  },
  {
    "idx": 180,
    "displayName": "Kempo",
    "tags": [
      {
        "idx": "139",
        "name": "Kempo"
      },
      {
        "idx": "88",
        "name": "Feminine"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 181,
    "displayName": "Loopify",
    "tags": [
      {
        "idx": "257",
        "name": "Unique"
      },
      {
        "idx": "140",
        "name": "Loopify"
      }
    ],
    "affinity": [],
    "type": "head"
  },
  {
    "idx": 182,
    "displayName": "Lycanthrope",
    "tags": [
      {
        "idx": "143",
        "name": "Lycanthrope"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "186",
        "name": "Pirate"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "95",
        "name": "Formal"
      }
    ],
    "type": "head"
  },
  {
    "idx": 183,
    "displayName": "MachoMan",
    "tags": [
      {
        "idx": "144",
        "name": "MachoMan"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "head"
  },
  {
    "idx": 184,
    "displayName": "Marlo",
    "tags": [
      {
        "idx": "257",
        "name": "Unique"
      },
      {
        "idx": "146",
        "name": "Alien"
      }
    ],
    "affinity": [],
    "type": "head"
  },
  {
    "idx": 185,
    "displayName": "Warlock",
    "tags": [
      {
        "idx": "147",
        "name": "Warlock"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "head"
  },
  {
    "idx": 186,
    "displayName": "Seer",
    "tags": [
      {
        "idx": "149",
        "name": "Seer"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "194",
        "name": "Prophecy"
      },
      {
        "idx": "85",
        "name": "Eyeball"
      },
      {
        "idx": "173",
        "name": "Oracle"
      },
      {
        "idx": "247",
        "name": "Time"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "head"
  },
  {
    "idx": 187,
    "displayName": "Mambo",
    "tags": [
      {
        "idx": "150",
        "name": "Mambo"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "head"
  },
  {
    "idx": 188,
    "displayName": "Olympian",
    "tags": [
      {
        "idx": "151",
        "name": "Olympian"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "60",
        "name": "Cyan"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "60",
        "name": "Cyan"
      }
    ],
    "type": "head"
  },
  {
    "idx": 189,
    "displayName": "Faustian",
    "tags": [
      {
        "idx": "152",
        "name": "Faustian"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "50",
        "name": "Urban"
      }
    ],
    "type": "head"
  },
  {
    "idx": 190,
    "displayName": "Coven Sister",
    "tags": [
      {
        "idx": "153",
        "name": "Coven Sister"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "type": "head"
  },
  {
    "idx": 191,
    "displayName": "Red Priestess",
    "tags": [
      {
        "idx": "154",
        "name": "Red Preistess"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "95",
        "name": "Formal"
      }
    ],
    "type": "head"
  },
  {
    "idx": 192,
    "displayName": "Myrddin",
    "tags": [
      {
        "idx": "156",
        "name": "Myrddin"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "60",
        "name": "Cyan"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "60",
        "name": "Cyan"
      }
    ],
    "type": "head"
  },
  {
    "idx": 193,
    "displayName": "Canaanite",
    "tags": [
      {
        "idx": "158",
        "name": "Canaanite"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "head"
  },
  {
    "idx": 194,
    "displayName": "Death Eater",
    "tags": [
      {
        "idx": "163",
        "name": "Death Man"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "head"
  },
  {
    "idx": 195,
    "displayName": "Fungus",
    "tags": [
      {
        "idx": "164",
        "name": "Mushroom"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "head"
  },
  {
    "idx": 196,
    "displayName": "Philosopher",
    "tags": [
      {
        "idx": "169",
        "name": "Philosopher"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "head"
  },
  {
    "idx": 197,
    "displayName": "Fortune Seeker",
    "tags": [
      {
        "idx": "177",
        "name": "Fortune Seeker"
      }
    ],
    "affinity": [
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "type": "head"
  },
  {
    "idx": 198,
    "displayName": "Botanic Master",
    "tags": [
      {
        "idx": "178",
        "name": "Botanic Master"
      },
      {
        "idx": "88",
        "name": "Feminine"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "head"
  },
  {
    "idx": 199,
    "displayName": "Man Behind the Curtain",
    "tags": [
      {
        "idx": "179",
        "name": "Man Behind the Curtain"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 200,
    "displayName": "Anuran",
    "tags": [
      {
        "idx": "181",
        "name": "Anuran"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "97",
        "name": "Frog"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "97",
        "name": "Frog"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "head"
  },
  {
    "idx": 201,
    "displayName": "Wooden Boy",
    "tags": [
      {
        "idx": "184",
        "name": "Wooden Boy"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "type": "head"
  },
  {
    "idx": 202,
    "displayName": "Sandman",
    "tags": [
      {
        "idx": "195",
        "name": "Sandman"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "type": "head"
  },
  {
    "idx": 203,
    "displayName": "Durm and Strang",
    "tags": [
      {
        "idx": "200",
        "name": "Durm and Strang"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "type": "head"
  },
  {
    "idx": 204,
    "displayName": "Swashbuckler",
    "tags": [
      {
        "idx": "204",
        "name": "Swashbuckler"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "186",
        "name": "Pirate"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "type": "head"
  },
  {
    "idx": 207,
    "displayName": "Bard",
    "tags": [
      {
        "idx": "207",
        "name": "Bard"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "159",
        "name": "Monk"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "type": "head"
  },
  {
    "idx": 205,
    "displayName": "Rogue Arcanist",
    "tags": [
      {
        "idx": "205",
        "name": "Rogue Arcanist"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "type": "head"
  },
  {
    "idx": 206,
    "displayName": "Animist",
    "tags": [
      {
        "idx": "206",
        "name": "Animist"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "head"
  },
  {
    "idx": 208,
    "displayName": "Charmer",
    "tags": [
      {
        "idx": "212",
        "name": "Charmer"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "24",
        "name": "Blood"
      }
    ],
    "type": "head"
  },
  {
    "idx": 209,
    "displayName": "Wild Woman",
    "tags": [
      {
        "idx": "217",
        "name": "Wild Woman"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 239,
    "displayName": "Gold Skeleton",
    "tags": [
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "affinity": [
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 210,
    "displayName": "LeggoGreggo",
    "tags": [
      {
        "idx": "257",
        "name": "Unique"
      },
      {
        "idx": "136",
        "name": "Greggo"
      }
    ],
    "affinity": [],
    "type": "head"
  },
  {
    "idx": 242,
    "displayName": "Silver Skeleton",
    "tags": [
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "219",
        "name": "Quick Silver"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 240,
    "displayName": "Cyborg Skeleton Arcanist",
    "tags": [
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "219",
        "name": "Quick Silver"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "head"
  },
  {
    "idx": 241,
    "displayName": "Cyborg Skeleton Rogue",
    "tags": [
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "219",
        "name": "Quick Silver"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "head"
  },
  {
    "idx": 211,
    "displayName": "Hermit",
    "tags": [
      {
        "idx": "229",
        "name": "Hermit"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "affinity": [
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "47",
        "name": "Chemistry"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "type": "head"
  },
  {
    "idx": 212,
    "displayName": "Astrologer",
    "tags": [
      {
        "idx": "230",
        "name": "Astrologer"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "head"
  },
  {
    "idx": 213,
    "displayName": "Medicine Man",
    "tags": [
      {
        "idx": "238",
        "name": "Medicine Man"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "type": "head"
  },
  {
    "idx": 214,
    "displayName": "Prophet",
    "tags": [
      {
        "idx": "242",
        "name": "Prophet"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "159",
        "name": "Monk"
      },
      {
        "idx": "47",
        "name": "Chemistry"
      }
    ],
    "type": "head"
  },
  {
    "idx": 215,
    "displayName": "Scholar",
    "tags": [
      {
        "idx": "244",
        "name": "Scholar"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "47",
        "name": "Chemistry"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 243,
    "displayName": "Tengu Preist",
    "tags": [
      {
        "idx": "245",
        "name": "Tengu Preist"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "type": "head"
  },
  {
    "idx": 216,
    "displayName": "WereBeast",
    "tags": [
      {
        "idx": "246",
        "name": "Were Beast"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "type": "head"
  },
  {
    "idx": 217,
    "displayName": "Mandinka",
    "tags": [
      {
        "idx": "248",
        "name": "Mandinka"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "head"
  },
  {
    "idx": 218,
    "displayName": "Master of Wood, Water, and Hill",
    "tags": [
      {
        "idx": "249",
        "name": "Master of Wood, Water, and Hill"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "head"
  },
  {
    "idx": 219,
    "displayName": "Punjabi",
    "tags": [
      {
        "idx": "252",
        "name": "Punjabi"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "6",
        "name": "Desert"
      }
    ],
    "affinity": [
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "6",
        "name": "Desert"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 220,
    "displayName": "Polar Shapeshifter",
    "tags": [
      {
        "idx": "254",
        "name": "Polar Shapeshifter"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "54",
        "name": "Cold"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "head"
  },
  {
    "idx": 221,
    "displayName": "Diviner",
    "tags": [
      {
        "idx": "261",
        "name": "Diviner"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "type": "head"
  },
  {
    "idx": 244,
    "displayName": "Fur Gnome",
    "tags": [
      {
        "idx": "262",
        "name": "Fur Gnome"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "215",
        "name": "Sea"
      },
      {
        "idx": "170",
        "name": "Ocean"
      }
    ],
    "type": "head"
  },
  {
    "idx": 222,
    "displayName": "Dark Arcanist",
    "tags": [
      {
        "idx": "263",
        "name": "Dark Arcanist"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "22",
        "name": "Blackness"
      }
    ],
    "type": "head"
  },
  {
    "idx": 223,
    "displayName": "Vamp",
    "tags": [
      {
        "idx": "265",
        "name": "Vamp"
      },
      {
        "idx": "88",
        "name": "Feminine"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "24",
        "name": "Blood"
      }
    ],
    "type": "head"
  },
  {
    "idx": 224,
    "displayName": "Darkling",
    "tags": [
      {
        "idx": "267",
        "name": "Darkling"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "affinity": [
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "head"
  },
  {
    "idx": 225,
    "displayName": "Weird Wizz",
    "tags": [
      {
        "idx": "275",
        "name": "Wizzle"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "24",
        "name": "Blood"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "type": "head"
  },
  {
    "idx": 226,
    "displayName": "Wicked Wizard",
    "tags": [
      {
        "idx": "275",
        "name": "Wizzle"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "head"
  },
  {
    "idx": 227,
    "displayName": "Blue Wizard",
    "tags": [
      {
        "idx": "276",
        "name": "Wizzy"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 228,
    "displayName": "Brown Wizard",
    "tags": [
      {
        "idx": "276",
        "name": "Wizzy"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "type": "head"
  },
  {
    "idx": 229,
    "displayName": "Green Wizard",
    "tags": [
      {
        "idx": "276",
        "name": "Wizzy"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "type": "head"
  },
  {
    "idx": 230,
    "displayName": "Purple Wizard",
    "tags": [
      {
        "idx": "276",
        "name": "Wizzy"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "81",
        "name": "Electrification"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "head"
  },
  {
    "idx": 231,
    "displayName": "Red Wizard",
    "tags": [
      {
        "idx": "276",
        "name": "Wizzy"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "24",
        "name": "Blood"
      },
      {
        "idx": "89",
        "name": "Fire"
      },
      {
        "idx": "47",
        "name": "Chemistry"
      },
      {
        "idx": "141",
        "name": "Love"
      }
    ],
    "type": "head"
  },
  {
    "idx": 232,
    "displayName": "White Wizard",
    "tags": [
      {
        "idx": "276",
        "name": "Wizzy"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 233,
    "displayName": "Yellow Wizard",
    "tags": [
      {
        "idx": "276",
        "name": "Wizzy"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "affinity": [
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "47",
        "name": "Chemistry"
      }
    ],
    "type": "head"
  },
  {
    "idx": 234,
    "displayName": "Wolfkin",
    "tags": [
      {
        "idx": "278",
        "name": "Lupus"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "24",
        "name": "Blood"
      }
    ],
    "type": "head"
  },
  {
    "idx": 235,
    "displayName": "Kobold",
    "tags": [
      {
        "idx": "279",
        "name": "Kobold"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 236,
    "displayName": "Shaolin",
    "tags": [
      {
        "idx": "283",
        "name": "Shaolin"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "159",
        "name": "Monk"
      }
    ],
    "affinity": [
      {
        "idx": "159",
        "name": "Monk"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "head"
  },
  {
    "idx": 237,
    "displayName": "Trickster",
    "tags": [
      {
        "idx": "284",
        "name": "Trickster"
      },
      {
        "idx": "100",
        "name": "Gender Neutral"
      },
      {
        "idx": "67",
        "name": "Desert"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "type": "head"
  },
  {
    "idx": 238,
    "displayName": "Astral Arcanist",
    "tags": [
      {
        "idx": "285",
        "name": "Astral Arcanist"
      },
      {
        "idx": "145",
        "name": "Masculine"
      },
      {
        "idx": "159",
        "name": "Monk"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "159",
        "name": "Monk"
      }
    ],
    "type": "head"
  },
  {
    "idx": 245,
    "displayName": "Mug of Ale",
    "tags": [
      {
        "idx": "4",
        "name": "Drunk"
      },
      {
        "idx": "93",
        "name": "Food"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "affinity": [
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 246,
    "displayName": "Isaac's Apple",
    "tags": [
      {
        "idx": "9",
        "name": "Apple"
      },
      {
        "idx": "93",
        "name": "Food"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 247,
    "displayName": "Siren's Bell",
    "tags": [
      {
        "idx": "17",
        "name": "Bell"
      },
      {
        "idx": "165",
        "name": "Music"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 248,
    "displayName": "Vile of Virgin's Blood",
    "tags": [
      {
        "idx": "24",
        "name": "Blood"
      },
      {
        "idx": "47",
        "name": "Chemistry"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 249,
    "displayName": "Book of Magic",
    "tags": [
      {
        "idx": "28",
        "name": "Book"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 250,
    "displayName": "Candle of Intuition",
    "tags": [
      {
        "idx": "40",
        "name": "Candle"
      },
      {
        "idx": "89",
        "name": "Fire"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "95",
        "name": "Formal"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 251,
    "displayName": "Ace in the Hole",
    "tags": [
      {
        "idx": "42",
        "name": "Cardistry"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "268",
        "name": "Voodoo"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 252,
    "displayName": "Crystal Ball",
    "tags": [
      {
        "idx": "194",
        "name": "Prophecy"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "13",
        "name": "Astral"
      }
    ],
    "affinity": [
      {
        "idx": "194",
        "name": "Prophecy"
      },
      {
        "idx": "173",
        "name": "Oracle"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "13",
        "name": "Astral"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 253,
    "displayName": "Egg of Unknown Beast",
    "tags": [
      {
        "idx": "78",
        "name": "Egg"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 254,
    "displayName": "Gorgon's Eye",
    "tags": [
      {
        "idx": "85",
        "name": "Eyeball"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "194",
        "name": "Prophecy"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 255,
    "displayName": "Dragon Fireworks",
    "tags": [
      {
        "idx": "89",
        "name": "Fire"
      },
      {
        "idx": "90",
        "name": "Firework"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "95",
        "name": "Formal"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 256,
    "displayName": "Goblet of Immortality",
    "tags": [
      {
        "idx": "103",
        "name": "Goblet"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "24",
        "name": "Blood"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 257,
    "displayName": "Siren's Harp",
    "tags": [
      {
        "idx": "111",
        "name": "Harp"
      },
      {
        "idx": "165",
        "name": "Music"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "affinity": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "24",
        "name": "Blood"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 258,
    "displayName": "Lucky Horseshoe",
    "tags": [
      {
        "idx": "114",
        "name": "Horseshoe"
      },
      {
        "idx": "142",
        "name": "Lucky"
      },
      {
        "idx": "194",
        "name": "Prophecy"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "194",
        "name": "Prophecy"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 259,
    "displayName": "Sphinx's Hourglass",
    "tags": [
      {
        "idx": "115",
        "name": "Hourglass"
      },
      {
        "idx": "247",
        "name": "Time"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 260,
    "displayName": "Key of the 7th Realm",
    "tags": [
      {
        "idx": "132",
        "name": "Key"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "affinity": [
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 261,
    "displayName": "Bag of Tricks",
    "tags": [
      {
        "idx": "14",
        "name": "Magic Bag"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "affinity": [
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 262,
    "displayName": "Green Mushroom",
    "tags": [
      {
        "idx": "164",
        "name": "Mushroom"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "93",
        "name": "Food"
      },
      {
        "idx": "187",
        "name": "Flora"
      }
    ],
    "affinity": [
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 263,
    "displayName": "Red Mushroom",
    "tags": [
      {
        "idx": "164",
        "name": "Mushroom"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "93",
        "name": "Food"
      },
      {
        "idx": "187",
        "name": "Flora"
      }
    ],
    "affinity": [
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 264,
    "displayName": "Shaman's Peyote",
    "tags": [
      {
        "idx": "180",
        "name": "Peyote"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "93",
        "name": "Food"
      },
      {
        "idx": "187",
        "name": "Flora"
      },
      {
        "idx": "216",
        "name": "Shaman"
      }
    ],
    "affinity": [
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "67",
        "name": "Desert"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 265,
    "displayName": "Phoenix Feather",
    "tags": [
      {
        "idx": "87",
        "name": "Feather"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 266,
    "displayName": "Wizard's Pipe",
    "tags": [
      {
        "idx": "185",
        "name": "Pipe"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 267,
    "displayName": "Astral Potion",
    "tags": [
      {
        "idx": "191",
        "name": "Potion"
      },
      {
        "idx": "47",
        "name": "Chemistry"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 268,
    "displayName": "Cannabis Potion",
    "tags": [
      {
        "idx": "191",
        "name": "Potion"
      },
      {
        "idx": "47",
        "name": "Chemistry"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 269,
    "displayName": "Mandrake Potion",
    "tags": [
      {
        "idx": "191",
        "name": "Potion"
      },
      {
        "idx": "47",
        "name": "Chemistry"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 270,
    "displayName": "Nightshade Potion",
    "tags": [
      {
        "idx": "191",
        "name": "Potion"
      },
      {
        "idx": "47",
        "name": "Chemistry"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 271,
    "displayName": "Passion Potion",
    "tags": [
      {
        "idx": "191",
        "name": "Potion"
      },
      {
        "idx": "47",
        "name": "Chemistry"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 272,
    "displayName": "Chroma Crystal",
    "tags": [
      {
        "idx": "192",
        "name": "Prism"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 273,
    "displayName": "Eternal Rose",
    "tags": [
      {
        "idx": "208",
        "name": "Rose"
      },
      {
        "idx": "187",
        "name": "Flora"
      },
      {
        "idx": "141",
        "name": "Love"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "141",
        "name": "Love"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 274,
    "displayName": "Crystal Skull",
    "tags": [
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 275,
    "displayName": "Mystic Ice Cream",
    "tags": [
      {
        "idx": "119",
        "name": "Icecream"
      },
      {
        "idx": "93",
        "name": "Food"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 276,
    "displayName": "A dumb stick...",
    "tags": [
      {
        "idx": "237",
        "name": "Stick"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 277,
    "displayName": "Prometheus's Torch",
    "tags": [
      {
        "idx": "89",
        "name": "Fire"
      },
      {
        "idx": "250",
        "name": "Torch"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "affinity": [
      {
        "idx": "89",
        "name": "Fire"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 278,
    "displayName": "Venus Fly Trap",
    "tags": [
      {
        "idx": "256",
        "name": "Unihorn"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 279,
    "displayName": "Flesh Eating Plant",
    "tags": [
      {
        "idx": "264",
        "name": "Venus Flytrap"
      },
      {
        "idx": "187",
        "name": "Flora"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "243",
        "name": "Swamp"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 280,
    "displayName": "The Midas Rod",
    "tags": [
      {
        "idx": "269",
        "name": "Wand"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 281,
    "displayName": "The World Egg",
    "tags": [
      {
        "idx": "280",
        "name": "World Egg"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 305,
    "displayName": "Thor's Wrath: the Lightning Spell",
    "tags": [
      {
        "idx": "232",
        "name": "Spell"
      },
      {
        "idx": "26",
        "name": "Electrification"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "81",
        "name": "Electrification"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 306,
    "displayName": "Fairy Glamour: the Dazzle Spell",
    "tags": [
      {
        "idx": "232",
        "name": "Spell"
      },
      {
        "idx": "64",
        "name": "Dazzling"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "231",
        "name": "Sparkles"
      },
      {
        "idx": "106",
        "name": "Goofy"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 307,
    "displayName": "Grim Reaper's Breath: the Death Spell",
    "tags": [
      {
        "idx": "232",
        "name": "Spell"
      },
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "22",
        "name": "Blackness"
      }
    ],
    "affinity": [
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 308,
    "displayName": "The Gnome's Tooth: the Earth Spell",
    "tags": [
      {
        "idx": "232",
        "name": "Spell"
      },
      {
        "idx": "76",
        "name": "Earth"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "76",
        "name": "Earth"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 309,
    "displayName": "Salamander's Tongue: the Fire Spell",
    "tags": [
      {
        "idx": "232",
        "name": "Spell"
      },
      {
        "idx": "89",
        "name": "Fire"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "89",
        "name": "Fire"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 310,
    "displayName": "Hobgoblin's Flame: the Wayward Spell",
    "tags": [
      {
        "idx": "232",
        "name": "Spell"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "89",
        "name": "Fire"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "189",
        "name": "Poison"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 311,
    "displayName": "Aphrodite's Heart: the Love Spell",
    "tags": [
      {
        "idx": "232",
        "name": "Spell"
      },
      {
        "idx": "141",
        "name": "Love"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "95",
        "name": "Formal"
      }
    ],
    "affinity": [
      {
        "idx": "141",
        "name": "Love"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "95",
        "name": "Formal"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 312,
    "displayName": "Dryad's Ear: the Plant Spell",
    "tags": [
      {
        "idx": "232",
        "name": "Spell"
      },
      {
        "idx": "187",
        "name": "Flora"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 313,
    "displayName": "Loki's Bridge: the Rainbow Spell",
    "tags": [
      {
        "idx": "232",
        "name": "Spell"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 314,
    "displayName": "Kelpie's Fury: the Water Spell",
    "tags": [
      {
        "idx": "232",
        "name": "Spell"
      },
      {
        "idx": "271",
        "name": "Water Magic"
      },
      {
        "idx": "215",
        "name": "Sea"
      },
      {
        "idx": "170",
        "name": "Ocean"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "affinity": [
      {
        "idx": "271",
        "name": "Water Magic"
      },
      {
        "idx": "215",
        "name": "Sea"
      },
      {
        "idx": "170",
        "name": "Ocean"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "128",
        "name": "Jungle"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 315,
    "displayName": "Zephyr's Laugh: the Wind Spell",
    "tags": [
      {
        "idx": "232",
        "name": "Spell"
      },
      {
        "idx": "274",
        "name": "Wind"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "affinity": [
      {
        "idx": "274",
        "name": "Wind"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 318,
    "displayName": "The Orb Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "175",
        "name": "Orb"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "94",
        "name": "Forest"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 319,
    "displayName": "A Big Magic Stick",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "128",
        "name": "Jungle"
      },
      {
        "idx": "162",
        "name": "Mountains"
      },
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 320,
    "displayName": "The Bone Stave",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "27",
        "name": "Bone"
      },
      {
        "idx": "268",
        "name": "Voodoo"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "268",
        "name": "Voodoo"
      },
      {
        "idx": "225",
        "name": "Skull"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 321,
    "displayName": "Guillaume's Broom",
    "tags": [
      {
        "idx": "33",
        "name": "Broom"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "50",
        "name": "Urban"
      },
      {
        "idx": "243",
        "name": "Swamp"
      },
      {
        "idx": "94",
        "name": "Forest"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 322,
    "displayName": "Caduceus",
    "tags": [
      {
        "idx": "38",
        "name": "Caduceus"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "213",
        "name": "Academic"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 316,
    "displayName": "Ruby Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 323,
    "displayName": "Harmony Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "57",
        "name": "Crook"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 324,
    "displayName": "Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "57",
        "name": "Crook"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "affinity": [
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 325,
    "displayName": "Jinx Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "57",
        "name": "Crook"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 326,
    "displayName": "Courage Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "57",
        "name": "Crook"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "24",
        "name": "Blood"
      },
      {
        "idx": "61",
        "name": "Darkness"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 327,
    "displayName": "Peace Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "57",
        "name": "Crook"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "213",
        "name": "Academic"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 328,
    "displayName": "Joy Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "57",
        "name": "Crook"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "106",
        "name": "Goofy"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 317,
    "displayName": "Emerald Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "209",
        "name": "Rugged"
      },
      {
        "idx": "167",
        "name": "Nature"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 329,
    "displayName": "Ether Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "84",
        "name": "Ether"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 330,
    "displayName": "Phosphorus Spear",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "89",
        "name": "Fire"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "89",
        "name": "Fire"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 331,
    "displayName": "Golden Bull Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "affinity": [
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "281",
        "name": "Wraith"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 332,
    "displayName": "Lunar Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "161",
        "name": "Moon"
      },
      {
        "idx": "13",
        "name": "Astral"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "affinity": [
      {
        "idx": "13",
        "name": "Astral"
      },
      {
        "idx": "161",
        "name": "Moon"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 333,
    "displayName": "Indigo Moon Staff",
    "tags": [],
    "affinity": [],
    "type": "prop"
  },
  {
    "idx": 334,
    "displayName": "Chaos Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      },
      {
        "idx": "225",
        "name": "Skull"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 335,
    "displayName": "Soul Harvester",
    "tags": [
      {
        "idx": "214",
        "name": "Scythe"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "95",
        "name": "Formal"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 336,
    "displayName": "Golden Soul Reaper",
    "tags": [
      {
        "idx": "214",
        "name": "Scythe"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "affinity": [
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "65",
        "name": "Death"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "95",
        "name": "Formal"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 337,
    "displayName": "The Mamba Stick",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "228",
        "name": "Snake"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "affinity": [
      {
        "idx": "228",
        "name": "Snake"
      },
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "95",
        "name": "Formal"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 338,
    "displayName": "Stellar Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "235",
        "name": "Star"
      },
      {
        "idx": "13",
        "name": "Astral"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "25",
        "name": "Blue Shift"
      }
    ],
    "affinity": [
      {
        "idx": "13",
        "name": "Astral"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 339,
    "displayName": "Solar Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "241",
        "name": "Sun"
      },
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "affinity": [
      {
        "idx": "105",
        "name": "Gold"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "105",
        "name": "Gold"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 340,
    "displayName": "Garnet Staff",
    "tags": [
      {
        "idx": "234",
        "name": "Staff"
      },
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "34",
        "name": "Brownish"
      }
    ],
    "affinity": [
      {
        "idx": "167",
        "name": "Nature"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "209",
        "name": "Rugged"
      }
    ],
    "type": "prop"
  },
  {
    "idx": 282,
    "displayName": "Rune of Air",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "3",
        "name": "Air "
      }
    ],
    "affinity": [
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 283,
    "displayName": "Rune of Brass",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "31",
        "name": "Brass"
      }
    ],
    "affinity": [
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 284,
    "displayName": "Rune of Brimstone",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "32",
        "name": "Brimstone"
      }
    ],
    "affinity": [
      {
        "idx": "61",
        "name": "Darkness"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "22",
        "name": "Blackness"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 285,
    "displayName": "Rune of Cinnabar",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "49",
        "name": "Cinnabar"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 286,
    "displayName": "Rune of Down",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "72",
        "name": "Down"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 287,
    "displayName": "Rune of Earth",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "76",
        "name": "Earth"
      }
    ],
    "affinity": [
      {
        "idx": "34",
        "name": "Brownish"
      },
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 288,
    "displayName": "Rune of Fire",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "89",
        "name": "Fire"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 289,
    "displayName": "Rune of Infinity",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "122",
        "name": "Infinity"
      }
    ],
    "affinity": [
      {
        "idx": "56",
        "name": "Cosmic"
      },
      {
        "idx": "281",
        "name": "Wraith"
      },
      {
        "idx": "198",
        "name": "Rainbow"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 290,
    "displayName": "Rune of Jupiter",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "130",
        "name": "Jupiter"
      }
    ],
    "affinity": [
      {
        "idx": "174",
        "name": "Orange"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 291,
    "displayName": "Rune of Lime",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "138",
        "name": "Lime"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      },
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 292,
    "displayName": "Rune of Mars",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "148",
        "name": "Mars"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "22",
        "name": "Blackness"
      },
      {
        "idx": "145",
        "name": "Masculine"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 293,
    "displayName": "Rune of Mercury",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "155",
        "name": "Mercury"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "201",
        "name": "Crimson"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 294,
    "displayName": "Rune of Neptune",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "168",
        "name": "Neptune"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 295,
    "displayName": "Rune of Omega",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "172",
        "name": "Omega"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "272",
        "name": "White Magic"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 296,
    "displayName": "Rune of Pluto",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "188",
        "name": "Pluto"
      }
    ],
    "affinity": [
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 301,
    "displayName": "Rune of Up Only",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "258",
        "name": "Up"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 297,
    "displayName": "Rune of Saturn",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "211",
        "name": "Saturn"
      }
    ],
    "affinity": [
      {
        "idx": "282",
        "name": "Amber"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 298,
    "displayName": "Rune of Sigma",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "218",
        "name": "Sigma"
      }
    ],
    "affinity": [
      {
        "idx": "107",
        "name": "Verdant"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 299,
    "displayName": "Rune of Steel",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "236",
        "name": "Steel"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "272",
        "name": "White Magic"
      },
      {
        "idx": "22",
        "name": "Blackness"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 300,
    "displayName": "Rune of Sun",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "241",
        "name": "Sun"
      }
    ],
    "affinity": [
      {
        "idx": "282",
        "name": "Amber"
      },
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "270",
        "name": "Warm"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 302,
    "displayName": "Rune of Uranus",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "259",
        "name": "Uranus"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 303,
    "displayName": "Rune of Venus",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "264",
        "name": "Venus Flytrap"
      }
    ],
    "affinity": [
      {
        "idx": "201",
        "name": "Crimson"
      },
      {
        "idx": "174",
        "name": "Orange"
      },
      {
        "idx": "88",
        "name": "Feminine"
      }
    ],
    "type": "rune"
  },
  {
    "idx": 304,
    "displayName": "Rune of Water",
    "tags": [
      {
        "idx": "210",
        "name": "Rune"
      },
      {
        "idx": "271",
        "name": "Water Magic"
      }
    ],
    "affinity": [
      {
        "idx": "25",
        "name": "Blue Shift"
      },
      {
        "idx": "196",
        "name": "Purple Haze"
      }
    ],
    "type": "rune"
  }
]

module.exports = components;