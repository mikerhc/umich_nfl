const playerData = [
    {
      "id": 1,
      "name": "David Ojabo",
      "team": "Baltimore Ravens",
      "position": "OLB",
      "rosterUrl": "https://www.baltimoreravens.com/team/players-roster/david-ojabo/",
      "teamUrl": "ravens",
      "imageUrl": "ojabo",
      "insta": "https://www.instagram.com/davidojabo/?hl=en",
      "twitter": "https://x.com/davidojabo"
    },
    {
      "id": 2,
      "name": "Josh Ross",
      "team": "Baltimore Ravens",
      "position": "ILB",
      "rosterUrl": "https://www.baltimoreravens.com/team/players-roster/josh-ross/",
      "teamUrl": "ravens",
      "imageUrl": "ross",
      "insta": "https://www.instagram.com/joshuaross_12/?hl=en",
      "twitter": "https://x.com/Ravens"
    },
    {
      "id": 3,
      "name": "Michael Barrett",
      "team": "Carolina Panthers",
      "position": "ILB",
      "rosterUrl": "https://www.panthers.com/team/players-roster/michael-barrett/",
      "teamUrl": "panthers",
      "imageUrl": "barrett",
      "insta": "https://www.instagram.com/mike.mb1/?hl=en",
      "twitter": "https://x.com/mikebarrett_mb1?lang=en"
    },
    {
      "id": 4,
      "name": "Chris Evans",
      "team": "Cincinnati Bengals",
      "position": "RB",
      "rosterUrl": "https://www.bengals.com/team/players-roster/chris-evans/",
      "teamUrl": "bengals",
      "imageUrl": "evans",
      "insta": "https://www.instagram.com/kidnplay_abc123/",
      "twitter": "https://x.com/kidnplay_abc123?lang=en"
    },
    {
      "id": 5,
      "name": "Daxton Hill",
      "team": "Cincinnati Bengals",
      "position": "S",
      "rosterUrl": "https://www.bengals.com/team/players-roster/dax-hill/",
      "teamUrl": "bengals",
      "imageUrl": "hill",
      "insta": "https://www.instagram.com/iamdaxhill/",
      "twitter": "https://x.com/daxhill5?lang=en"
    },
    {
      "id": 6,
      "name": "Kris Jenkins",
      "team": "Cincinnati Bengals",
      "position": "DT",
      "rosterUrl": "https://www.bengals.com/team/players-roster/kris-jenkins/",
      "teamUrl": "bengals",
      "imageUrl": "kris",
      "insta": "https://www.instagram.com/kjj_18/?hl=en",
      "twitter": "https://x.com/krisjenkinsjr1?lang=en"
    },
    {
      "id": 7,
      "name": "Brad Robbins",
      "team": "Cincinnati Bengals",
      "position": "PT",
      "rosterUrl": "https://www.bengals.com/team/players-roster/brad-robbins/",
      "teamUrl": "bengals",
      "imageUrl": "robbins",
      "insta": "https://www.instagram.com/__bradrobbins/?hl=en",
      "twitter": "https://x.com/__br91?lang=en"
    },
    {
      "id": 8,
      "name": "DJ Turner II",
      "team": "Cincinnati Bengals",
      "position": "CB",
      "rosterUrl": "https://www.bengals.com/team/players-roster/dj-turner-ii/",
      "teamUrl": "bengals",
      "imageUrl": "turner",
      "insta": "https://www.instagram.com/djturner_5/?hl=en",
      "twitter": "https://x.com/djturner_5?lang=en"
    },
    {
      "id": 9,
      "name": "Devin Bush",
      "team": "Cleveland Browns",
      "position": "LB",
      "rosterUrl": "https://www.clevelandbrowns.com/team/players-roster/devin-bush/",
      "teamUrl": "browns",
      "imageUrl": "bush",
      "insta": "",
      "twitter": ""
    },
    {
      "id": 10,
      "name": "Vincent Gray",
      "team": "Cleveland Browns",
      "position": "CB",
      "rosterUrl": "https://www.clevelandbrowns.com/team/players-roster/vincent-gray/",
      "teamUrl": "browns",
      "imageUrl": "gray",
      "insta": "https://www.instagram.com/vincegray/",
      "twitter": "https://x.com/vincegray_?lang=en"
    },
    {
      "id": 11,
      "name": "Maurice Hurst II",
      "team": "Cleveland Browns",
      "position": "DT",
      "rosterUrl": "https://www.clevelandbrowns.com/team/players-roster/maurice-hurst/",
      "teamUrl": "browns",
      "imageUrl": "hurst",
      "insta": "https://www.instagram.com/mohurstjr/?hl=en",
      "twitter": "https://x.com/mohurstjr"
    },
    {
      "id": 12,
      "name": "Zak Zinter",
      "team": "Cleveland Browns",
      "position": "OG",
      "rosterUrl": "https://www.clevelandbrowns.com/team/players-roster/zak-zinter/",
      "teamUrl": "browns",
      "imageUrl": "zinter",
      "insta": "https://www.instagram.com/zakzinter/?hl=en",
      "twitter": "https://x.com/zak_zinter?lang=en"
    },
    {
      "id": 13,
      "name": "Jourdan Lewis",
      "team": "Dallas Cowboys",
      "position": "CB",
      "rosterUrl": "https://www.dallascowboys.com/team/players-roster/jourdan-lewis/",
      "teamUrl": "cowboys",
      "imageUrl": "lewis",
      "insta": "https://www.instagram.com/jourdanjd_/?hl=en",
      "twitter": "https://x.com/JourdanJD?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
    },
    {
      "id": 14,
      "name": "Luke Schoonmaker",
      "team": "Dallas Cowboys",
      "position": "TE",
      "rosterUrl": "https://www.dallascowboys.com/team/players-roster/luke-schoonmaker/",
      "teamUrl": "cowboys",
      "imageUrl": "schoon",
      "insta": "https://www.instagram.com/schoonboyq/?hl=en",
      "twitter": "https://x.com/lukeschoonmaker?lang=en"
    },
    {
      "id": 15,
      "name": "Mazi Smith",
      "team": "Dallas Cowboys",
      "position": "DT",
      "rosterUrl": "https://www.dallascowboys.com/team/players-roster/mazi-smith/",
      "teamUrl": "cowboys",
      "imageUrl": "mazi",
      "insta": "",
      "twitter": "https://x.com/mazismith?lang=en"
    },
    {
      "id": 16,
      "name": "Graham Glasgow",
      "team": "Detroit Lions",
      "position": "OG",
      "rosterUrl": "https://www.detroitlions.com/team/players-roster/graham-glasgow/",
      "teamUrl": "lions",
      "imageUrl": "glasgow",
      "insta": "https://www.instagram.com/gglasgow61/",
      "twitter": "https://x.com/gglasgow61?lang=en"
    },
    {
      "id": 17,
      "name": "Aidan Hutchinson",
      "team": "Detroit Lions",
      "position": "DE",
      "rosterUrl": "https://www.detroitlions.com/team/players-roster/aidan-hutchinson/",
      "teamUrl": "lions",
      "imageUrl": "hutch",
      "insta": "https://www.instagram.com/aidanhutch97/?hl=en",
      "twitter": "https://x.com/aidanhutch97?lang=en"
    },
    {
      "id": 18,
      "name": "Sean McKeon",
      "team": "Detroit Lions",
      "position": "TE",
      "rosterUrl": "https://www.detroitlions.com/team/players-roster/sean-mckeon/",
      "teamUrl": "lions",
      "imageUrl": "mckeon",
      "insta": "https://www.instagram.com/mckeon_sean/?hl=en",
      "twitter": "https://x.com/mckeon_sean?lang=en"
    },
    {
      "id": 19,
      "name": "Donovan Peoples-Jones",
      "team": "Detroit Lions",
      "position": "WR",
      "rosterUrl": "https://www.detroitlions.com/team/players-roster/donovan-peoples-jones/",
      "teamUrl": "lions",
      "imageUrl": "dpj",
      "insta": "https://www.instagram.com/dpeoplesjones/?hl=en",
      "twitter": "https://x.com/dpeoplesjones"
    },
    {
      "id": 20,
      "name": "James Turner",
      "team": "Detroit Lions",
      "position": "PK",
      "rosterUrl": "https://www.detroitlions.com/team/players-roster/james-turner/",
      "teamUrl": "lions",
      "imageUrl": "turner",
      "insta": "https://www.instagram.com/jamesturner4/",
      "twitter": "https://x.com/jamesturner004?lang=en"
    },
    {
      "id": 21,
      "name": "Rashan Gary",
      "team": "Green Bay Packers",
      "position": "DE",
      "rosterUrl": "https://www.packers.com/team/players-roster/rashan-gary/",
      "teamUrl": "packers",
      "imageUrl": "rashan",
      "insta": "https://www.instagram.com/rashanagary/?hl=en",
      "twitter": "https://x.com/RashanAGary"
    },
    {
      "id": 22,
      "name": "Gemon Green",
      "team": "Green Bay Packers",
      "position": "CB",
      "rosterUrl": "https://www.packers.com/team/players-roster/gemon-green/",
      "teamUrl": "packers",
      "imageUrl": "green",
      "insta": "https://www.instagram.com/1germ2x/",
      "twitter": "https://x.com/greengemon"
    },
    {
      "id": 23,
      "name": "Nico Collins",
      "team": "Houston Texans",
      "position": "WR",
      "rosterUrl": "https://www.houstontexans.com/team/players-roster/nico-collins/",
      "teamUrl": "texans",
      "imageUrl": "nico",
      "insta": "https://www.instagram.com/ncollins_4/?hl=en",
      "twitter": "https://x.com/lbg_nico7?lang=en"
    },
    {
      "id": 24,
      "name": "LaDarius Henderson",
      "team": "Houston Texans",
      "position": "OG",
      "rosterUrl": "https://www.houstontexans.com/team/players-roster/ladarius-henderson/",
      "teamUrl": "texans",
      "imageUrl": "henderson",
      "insta": "https://www.instagram.com/ladarius.77/?hl=en",
      "twitter": ""
    },
    {
      "id": 25,
      "name": "Cameron McGrone",
      "team": "Indianapolis Colts",
      "position": "LB",
      "rosterUrl": "https://www.colts.com/team/players-roster/cameron-mcgrone/",
      "teamUrl": "colts",
      "imageUrl": "mcgrone",
      "insta": "https://www.instagram.com/mcgrone.strong/?hl=en",
      "twitter": "https://x.com/mcgrone_strong?lang=en"
    },
    {
      "id": 26,
      "name": "Michael Danna",
      "team": "Kansas City Chiefs",
      "position": "DE",
      "rosterUrl": "https://www.chiefs.com/team/players-roster/michael-danna/",
      "teamUrl": "chiefs",
      "imageUrl": "danna",
      "insta": "https://www.instagram.com/mikedanna4/?hl=en",
      "twitter": "https://x.com/m_danna4?lang=en"
    },
    {
      "id": 27,
      "name": "Kwity Paye",
      "team": "Indianapolis Colts",
      "position": "DE",
      "rosterUrl": "https://www.colts.com/team/players-roster/kwity-paye/",
      "teamUrl": "colts",
      "imageUrl": "paye",
      "insta": "https://www.instagram.com/kwitypaye/?hl=en",
      "twitter": "https://x.com/officialkwity"
    },
    {
      "id": 28,
      "name": "Karsen Barnhart",
      "team": "Los Angeles Chargers",
      "position": "OG",
      "rosterUrl": "https://www.chargers.com/team/players-roster/karsen-barnhart/",
      "teamUrl": "chargers",
      "imageUrl": "barnhart",
      "insta": "https://www.instagram.com/k_ballin__/?hl=en",
      "twitter": "https://x.com/k_ballin__?lang=en"
    },
    {
      "id": 29,
      "name": "Junior Colson",
      "team": "Los Angeles Chargers",
      "position": "ILB",
      "rosterUrl": "https://www.chargers.com/team/players-roster/junior-colson/",
      "teamUrl": "chargers",
      "imageUrl": "junior",
      "insta": "https://www.instagram.com/junior_colson/?hl=en",
      "twitter": "https://x.com/juniorcolson?lang=en"
    },
    {
      "id": 30,
      "name": "Christopher Hinton",
      "team": "Los Angeles Chargers",
      "position": "DT",
      "rosterUrl": "https://www.chargers.com/team/players-roster/christopher-hinton/",
      "teamUrl": "chargers",
      "imageUrl": "hinton",
      "insta": "",
      "twitter": ""
    },
    {
      "id": 31,
      "name": "Cornelius Johnson",
      "team": "Los Angeles Chargers",
      "position": "WR",
      "rosterUrl": "https://www.chargers.com/team/players-roster/cornelius-johnson/",
      "teamUrl": "chargers",
      "imageUrl": "cojo",
      "insta": "https://www.instagram.com/corneliusnation/?hl=en",
      "twitter": "https://x.com/corneliusnation?lang=en"
    },
    {
      "id": 32,
      "name": "Ben Mason",
      "team": "Los Angeles Chargers",
      "position": "FB",
      "rosterUrl": "https://www.chargers.com/team/players-roster/ben-mason/",
      "teamUrl": "chargers",
      "imageUrl": "mason",
      "insta": "https://www.instagram.com/benchmason42/",
      "twitter": "https://x.com/benchmason42?lang=en"
    },
    {
      "id": 33,
      "name": "Blake Corum",
      "team": "Los Angeles Rams",
      "position": "RB",
      "rosterUrl": "https://www.therams.com/team/players-roster/blake-corum/",
      "teamUrl": "rams",
      "imageUrl": "blake",
      "insta": "https://www.instagram.com/blake_corum24/?hl=en",
      "twitter": "https://x.com/blake_corum"
    },
    {
      "id": 34,
      "name": "Josh Wallace",
      "team": "Los Angeles Rams",
      "position": "CB",
      "rosterUrl": "https://www.therams.com/team/players-roster/josh-wallace/",
      "teamUrl": "rams",
      "imageUrl": "wallace",
      "insta": "https://www.instagram.com/joshwallace/",
      "twitter": "https://x.com/joshwallace_12?lang=en"
    },
    {
      "id": 35,
      "name": "Zach Gentry",
      "team": "Las Vegas Raiders",
      "position": "TE",
      "rosterUrl": "https://www.raiders.com/team/players-roster/zach-gentry/",
      "teamUrl": "raiders",
      "imageUrl": "gentry",
      "insta": "https://www.instagram.com/zgentry83/",
      "twitter": ""
    },
    {
      "id": 36,
      "name": "Ryan Hayes",
      "team": "Miami Dolphins",
      "position": "OT",
      "rosterUrl": "https://www.miamidolphins.com/team/players-roster/ryan-hayes/",
      "teamUrl": "dolphins",
      "imageUrl": "hayes",
      "insta": "https://www.instagram.com/ryanhayes.76/?hl=en",
      "twitter": "https://x.com/ryanhayes_7122?lang=en"
    },
    {
      "id": 37,
      "name": "JJ McCarthy",
      "team": "Minnesota Vikings",
      "position": "QB",
      "rosterUrl": "https://www.vikings.com/team/players-roster/j-j-mccarthy/",
      "teamUrl": "vikings",
      "imageUrl": "jj",
      "insta": "https://www.instagram.com/jjmccarthy/?hl=en",
      "twitter": "https://x.com/jjmccarthy09?lang=en"
    },
    {
      "id": 38,
      "name": "Josh Metellus",
      "team": "Minnesota Vikings",
      "position": "S",
      "rosterUrl": "https://www.vikings.com/team/players-roster/josh-metellus/",
      "teamUrl": "vikings",
      "imageUrl": "metellus",
      "insta": "https://www.instagram.com/noexcuses_23/?hl=en",
      "twitter": "https://x.com/NoExcuses_23?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
    },
    {
      "id": 39,
      "name": "Michael Owenu",
      "team": "New England Patriots",
      "position": "OT",
      "rosterUrl": "https://www.patriots.com/team/players-roster/mike-onwenu/",
      "teamUrl": "patriots",
      "imageUrl": "owenu",
      "insta": "https://www.instagram.com/michaelonwenu1/",
      "twitter": "https://x.com/_mxkey?lang=en"
    },
    {
      "id": 40,
      "name": "Jabrill Peppers",
      "team": "New England Patriots",
      "position": "S",
      "rosterUrl": "https://www.patriots.com/team/players-roster/jabrill-peppers/",
      "teamUrl": "patriots",
      "imageUrl": "jabrill",
      "insta": "https://www.instagram.com/teamjreall/?hl=en",
      "twitter": "https://x.com/JabrillPeppers?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
    },
    {
      "id": 41,
      "name": "Andrew Stueber",
      "team": "New England Patriots",
      "position": "OT",
      "rosterUrl": "https://www.patriots.com/team/players-roster/andrew-stueber/",
      "teamUrl": "patriots",
      "imageUrl": "stueber",
      "insta": "https://www.instagram.com/andrew.stueber/",
      "twitter": "https://x.com/andrewstueber99"
    },
    {
      "id": 42,
      "name": "Josh Uche",
      "team": "New England Patriots",
      "position": "DE",
      "rosterUrl": "https://www.patriots.com/team/players-roster/josh-uche/",
      "teamUrl": "patriots",
      "imageUrl": "uche",
      "insta": "https://www.instagram.com/josh_uche/?hl=en",
      "twitter": "https://x.com/_uche35?lang=en"
    },
    {
      "id": 43,
      "name": "Khaleke Hudson",
      "team": "New Orleans Saints",
      "position": "LB",
      "rosterUrl": "https://www.neworleanssaints.com/team/players-roster/khaleke-hudson/",
      "teamUrl": "saints",
      "imageUrl": "hudson",
      "insta": "https://www.instagram.com/bigleke7/?hl=en",
      "twitter": "https://x.com/KhalekeHudson?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
    },
    {
      "id": 44,
      "name": "Cesar Ruiz",
      "team": "New Orleans Saints",
      "position": "OC",
      "rosterUrl": "https://www.neworleanssaints.com/team/players-roster/cesar-ruiz/",
      "teamUrl": "saints",
      "imageUrl": "ruiz",
      "insta": "https://www.instagram.com/ceesruiz/",
      "twitter": "https://x.com/_overcees?lang=en"
    },
    {
      "id": 45,
      "name": "David Long Jr.",
      "team": "New York Giants",
      "position": "CB",
      "rosterUrl": "https://www.giants.com/team/players-roster/david-long/",
      "teamUrl": "giants",
      "imageUrl": "long",
      "insta": "",
      "twitter": ""
    },
    {
      "id": 46,
      "name": "Jalen Mayfield",
      "team": "New York Giants",
      "position": "OG",
      "rosterUrl": "https://www.giants.com/team/players-roster/jalen-mayfield/",
      "teamUrl": "giants",
      "imageUrl": "mayfield",
      "insta": "https://www.instagram.com/gucci_jay_/",
      "twitter": "https://x.com/jay_may_11?lang=en"
    },
    {
      "id": 47,
      "name": "Jon Runyan",
      "team": "New York Giants",
      "position": "OG",
      "rosterUrl": "https://www.giants.com/team/players-roster/jon-runyan/",
      "teamUrl": "giants",
      "imageUrl": "runyan",
      "insta": "https://www.instagram.com/jon_run1/?hl=en",
      "twitter": ""
    },
    {
      "id": 48,
      "name": "Braiden McGregor",
      "team": "New York Jets",
      "position": "DE",
      "rosterUrl": "https://www.newyorkjets.com/team/players-roster/braiden-mcgregor/",
      "teamUrl": "jets",
      "imageUrl": "mcgregor",
      "insta": "https://www.instagram.com/braiden_mcgregor/?hl=en",
      "twitter": "https://x.com/braidenmcgregor?lang=en"
    },
    {
      "id": 49,
      "name": "Brandon Graham",
      "team": "Philadelphia Eagles",
      "position": "OLB",
      "rosterUrl": "https://www.philadelphiaeagles.com/team/players-roster/brandon-graham/",
      "teamUrl": "eagles",
      "imageUrl": "brandon",
      "insta": "https://www.instagram.com/sack_55/?hl=en",
      "twitter": ""
    },
    {
      "id": 50,
      "name": "Trevor Keegan",
      "team": "Philadelphia Eagles",
      "position": "OG",
      "rosterUrl": "https://www.philadelphiaeagles.com/team/players-roster/trevor-keegan/",
      "teamUrl": "eagles",
      "imageUrl": "keegan",
      "insta": "https://www.instagram.com/trevor.keegan77/",
      "twitter": "https://x.com/bigtrevk?lang=en"
    },
    {
      "id": 51,
      "name": "Roman Wilson",
      "team": "Pittsburgh Steelers",
      "position": "WR",
      "rosterUrl": "https://www.steelers.com/team/players-roster/roman-wilson/",
      "teamUrl": "steelers",
      "imageUrl": "wilson",
      "insta": "https://www.instagram.com/trilllroman/?hl=en",
      "twitter": "https://x.com/trilllroman?lang=en"
    },
    {
      "id": 52,
      "name": "AJ Barner",
      "team": "Seattle Seahawks",
      "position": "TE",
      "rosterUrl": "https://www.seahawks.com/team/players-roster/aj-barner/",
      "teamUrl": "seahawks",
      "imageUrl": "barner",
      "insta": "https://www.instagram.com/ajbarner88/?hl=en",
      "twitter": "https://x.com/_ajbarner_?lang=en"
    },
    {
      "id": 53,
      "name": "Mike Morris",
      "team": "Seattle Seahawks",
      "position": "DE",
      "rosterUrl": "https://www.seahawks.com/team/players-roster/mike-morris/",
      "teamUrl": "seahawks",
      "imageUrl": "morris",
      "insta": "https://www.instagram.com/the_moneymikee/?hl=en",
      "twitter": "https://x.com/mikemoris87"
    },
    {
      "id": 54,
      "name": "Olu Oluwatimi",
      "team": "Seattle Seahawks",
      "position": "OC",
      "rosterUrl": "https://www.seahawks.com/team/players-roster/olu-oluwatimi/",
      "teamUrl": "seahawks",
      "imageUrl": "olu",
      "insta": "https://www.instagram.com/big_olu55/?hl=en",
      "twitter": "https://x.com/bigolu55?lang=en"
    },
    {
      "id": 55,
      "name": "Ronnie Bell",
      "team": "San Francisco 49ers",
      "position": "WR",
      "rosterUrl": "https://www.49ers.com/team/players-roster/ronnie-bell/",
      "teamUrl": "niners",
      "imageUrl": "bell",
      "insta": "https://www.instagram.com/ronniebell_8/?hl=en",
      "twitter": "https://x.com/ronnieb_8?lang=en"
    },
    {
      "id": 56,
      "name": "Jake Moody",
      "team": "San Francisco 49ers",
      "position": "PK",
      "rosterUrl": "https://www.49ers.com/team/players-roster/jake-moody/",
      "teamUrl": "niners",
      "imageUrl": "moody",
      "insta": "https://www.instagram.com/jmoods_/?hl=en",
      "twitter": "https://x.com/jmoods13?lang=en"
    },
    {
      "id": 57,
      "name": "Drake Nugent",
      "team": "San Francisco 49ers",
      "position": "OC",
      "rosterUrl": "https://www.49ers.com/team/players-roster/drake-nugent/",
      "teamUrl": "niners",
      "imageUrl": "nugent",
      "insta": "https://www.instagram.com/drakenugent9/?hl=en",
      "twitter": "https://x.com/drakenugent9?lang=en"
    },
    {
      "id": 58,
      "name": "Ambry Thomas",
      "team": "San Francisco 49ers",
      "position": "CB",
      "rosterUrl": "https://www.49ers.com/team/players-roster/ambry-thomas/",
      "teamUrl": "niners",
      "imageUrl": "thomas",
      "insta": "https://www.instagram.com/fastlife_von/?hl=en",
      "twitter": ""
    },
    {
      "id": 59,
      "name": "Ben Bredeson",
      "team": "Tampa Bay Buccaneers",
      "position": "OG",
      "rosterUrl": "https://www.buccaneers.com/team/players-roster/ben-bredeson/",
      "teamUrl": "buccaneers",
      "imageUrl": "bredeson",
      "insta": "https://www.instagram.com/bredesonben/?hl=en",
      "twitter": "https://x.com/ben_bredeson?lang=en"
    },
    {
      "id": 60,
      "name": "Jaylen Harrell",
      "team": "Tennessee Titans",
      "position": "DE",
      "rosterUrl": "https://www.tennesseetitans.com/team/players-roster/jaylen-harrell/",
      "teamUrl": "titans",
      "imageUrl": "harrell",
      "insta": "https://www.instagram.com/_jayharrell32/?hl=en",
      "twitter": "https://x.com/jayharrell32?lang=en"
    },
    {
      "id": 61,
      "name": "Hassan Haskins",
      "team": "Tennessee Titans",
      "position": "RB",
      "rosterUrl": "https://www.tennesseetitans.com/team/players-roster/hassan-haskins/",
      "teamUrl": "titans",
      "imageUrl": "haskins",
      "insta": "https://www.instagram.com/h2_2535/?hl=en",
      "twitter": "https://x.com/h2_3125?lang=en"
    },
    {
      "id": 62,
      "name": "Mike Sainristil",
      "team": "Washington Commanders",
      "position": "CB",
      "rosterUrl": "https://www.commanders.com/team/players-roster/mike-sainristil/",
      "teamUrl": "commies",
      "imageUrl": "frozone",
      "insta": "https://www.instagram.com/mikesainristil/?hl=en",
      "twitter": "https://x.com/MikeSainristil"
    }
  ]

  export default playerData;