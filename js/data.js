export const BACKGROUNDS = ["bg","bronze","silver","gold","rainbow","arena","canyon","cave","city","coast","forest","glacier","volcano", "christmas", "halloween"];

export const ROLES = ["physical strike","special strike","tech","support","sprint","field","multi"];

export const GENDER = ["male","female"];

export const CATEGORIES = ["physical","special","status"];

export const GRID_TEMPLATES = ["grid","Base","Striker","Striker+ 1/2/3","Striker+ 2/4/5","Striker Complete","Tech","Tech+ 1/2/3","Tech+ 2/4/5","Tech Complete","Support","Support+ 1/2/3","Support+ 2/4/5","Support Complete","Sprint","Sprint+ 2/4/5","Field","Field+ 2/4/5","Mew/Deoxys","Mew/Deoxys 2/4/5","All cells"];

export const TYPES = ["bug","dark","dragon","electric","fairy","fighting","fire","flying","ghost","grass","ground","ice","normal","poison","psychic","rock","steel","water"];

export const THEMES_SKILLS= {
	"pasio": "region", "kanto": "region", "johto": "region", "hoenn": "region", "sinnoh": "region", "unova": "region", "kalos": "region", "alola": "region", "galar": "region", "hisui": "region", "paldea": "region", "planeptune": "region", "lastation": "region", "leanbox": "region", "lowee": "region", "mondstadt": "region", "liyue": "region", "inazuma": "region", "sumeru": "region", "fontaine": "region", "natlan": "region", "snezhnaya": "region", "ægir": "region", "babel": "region", "blacksteel": "region", "bolívar": "region", "columbia": "region", "higashi": "region", "iberia": "region", "kazdel": "region", "kazimierz": "region", "kjerag": "region", "laterano": "region", "leithanien": "region", "lungmen": "region", "minos": "region", "rhodes island": "region", "rim billiton": "region", "rhine lab": "region", "sami": "region", "sargon": "region", "seista": "region", "siracusa": "region", "ursus": "region", "victoria": "region", "yan": "region", "elysion": "region", "tetra": "region", "missilis": "region", "pilgrim": "region", "astral express": "region", "belebog": "region", "herta space station": "region", "xianzhou alliance": "region", "penacony": "region", "interasteral peace corporation": "region", "trinity general school": "region", "genhenna academy": "region", "millennium science school": "region", "abydos high school": "region", "allied hyakkiyako academy": "region", "shanhaijing senior high school": "region", "red winter federal academy": "region", "srt special academy": "region", "valkyrie police school": "region",

	"gym leader": "trainergroup", "elite four": "trainergroup", "champion": "trainergroup", "main character": "trainergroup", "rival": "trainergroup", "villain": "trainergroup", "trial giver": "trainergroup", "battle facility foe": "trainergroup", "valkyrie": "trainergroup", "herrscher": "trainergroup", "cpu": "trainergroup", "maker": "trainergroup", "archon": "trainergroup", "knight of favonius": "trainergroup", "abyssal hunter": "trainergroup", "blacksteel worldwide": "trainergroup", "glasgow": "trainergroup", "karlan trade": "trainergroup", "pinus sylvestris": "trainergroup", "penguin logistics": "trainergroup", "rhine lab": "trainergroup", "aegir": "trainergroup", "aegir-seaborn": "trainergroup", "anaty": "trainergroup", "anura": "trainergroup", "archosauria": "trainergroup", "aslan": "trainergroup", "caprinae": "trainergroup", "cautus": "trainergroup", "cerato": "trainergroup", "draco": "trainergroup", "durin": "trainergroup", "elafia": "trainergroup", "elf": "trainergroup", "feline": "trainergroup", "feranmut": "trainergroup", "forte": "trainergroup", "kylin": "trainergroup", "kuranta": "trainergroup", "liberi": "trainergroup", "lung": "trainergroup", "lupo": "trainergroup", "manticore": "trainergroup", "oni": "trainergroup", "perro": "trainergroup", "petram": "trainergroup", "pilosa": "trainergroup", "pythia": "trainergroup", "rebbah": "trainergroup", "reproba": "trainergroup", "sankta": "trainergroup", "sarkaz": "trainergroup", "sarva": "trainergroup", "sui": "trainergroup", "ursi": "trainergroup", "vouivre": "trainergroup", "vulpo": "trainergroup", "zalak": "trainergroup", "absolute": "trainergroup", "academia": "trainergroup", "a.c.p.u": "trainergroup", "aegis": "trainergroup", "best seller": "trainergroup", "extrinsic": "trainergroup", "infinity rail": "trainergroup", "perilous siege": "trainergroup", "the scouts": "trainergroup", "botanic garden": "trainergroup", "dazzling pearl": "trainergroup", "electric shock": "trainergroup", "heavy gram": "trainergroup", "m.m.r": "trainergroup", "master hand": "trainergroup", "matis": "trainergroup", "mighty tools": "trainergroup", "real kindness": "trainergroup", "recall & release": "trainergroup", "wardress": "trainergroup", "777": "trainergroup", "cafe sweety": "trainergroup", "happy zoo": "trainergroup", "maid for you": "trainergroup", "prima donna": "trainergroup", "protocol": "trainergroup", "rewind": "trainergroup", "school circle": "trainergroup", "talentum": "trainergroup", "the carronades": "trainergroup", "underworld queen": "trainergroup", "goddess": "trainergroup", "heretic": "trainergroup", "inherit": "trainergroup", "old tales": "trainergroup", "pioneer": "trainergroup", "white knight": "trainergroup", "counters": "trainergroup", "exotic": "trainergroup", "nepenthe": "trainergroup", "seraphim": "trainergroup", "triangle": "trainergroup", "unlimited": "trainergroup", "stellaron hunters": "trainergroup", "silvermane guard": "trainergroup", "ten stonehearts": "trainergroup", "galaxy ranger": "trainergroup", "masked fool": "trainergroup", "tea party": "trainergroup", "supplemental lessons club": "trainergroup", "justice task force": "trainergroup", "sisterhood": "trainergroup", "after-school sweets club": "trainergroup", "remedial knights": "trainergroup", "vigilante crew": "trainergroup", "library committee": "trainergroup", "pandemonium society": "trainergroup", "perfect team": "trainergroup", "problem solver 68": "trainergroup", "groumet research society": "trainergroup", "school lunch club": "trainergroup", "hot springs development department": "trainergroup", "sparkle club": "trainergroup", "medical emergancy club": "trainergroup", "seminar": "trainergroup", "cleaning & clearing": "trainergroup", "game development department": "trainergroup", "veritas": "trainergroup", "engineering club": "trainergroup", "supernatural phenomenon task force": "trainergroup", "training club": "trainergroup", "abydos student council": "trainergroup", "foreclosure task force": "trainergroup", "hyakkaryouran": "trainergroup", "yin-yang club": "trainergroup", "inner discipline club": "trainergroup", "ninjutsu research club": "trainergroup", "festival operations department": "trainergroup", "genryumon": "trainergroup", "black tourtise promenade": "trainergroup", "plum blossom garden": "trainergroup", "eastern alchemy society": "trainergroup", "red winter office": "trainergroup", "spec ops no. 227": "trainergroup", "knowledge liberation front": "trainergroup", "labor party": "trainergroup", "rabbit squad": "trainergroup", "fox squad": "trainergroup", "public peace bureau": "trainergroup", "public saftey bureau": "trainergroup", "arius branch school": "trainergroup", "seven prisoners": "trainergroup",

	"cape": "fashion", "glasses": "fashion", "masked": "fashion", "pigtails": "fashion", "ponytail": "fashion", "scarf": "fashion", "seasonal outfit": "fashion", "special costume": "fashion", "sunglasses": "fashion", "sygna suit": "fashion",

	"alola adventurer": "other", "artistic": "other", "battle partner": "other", "battleground foe": "other", "body builder": "other", "complicated family": "other", "contest lover": "other", "cook": "other", "dragon cousin": "other", "fancy lady": "other", "free spirit": "other", "gadgeteer": "other", "galar adventurer": "other", "grown woman": "other", "hoenn family": "other", "kalos neighbors": "other", "knowledgeable": "other", "melemele family": "other", "nature lover": "other", "ninja family": "other", "observatory cousin": "other", "old colleagues": "other", "old-timer": "other", "pallet town": "other", "passionate spirit": "other", "pokeathlete": "other", "researcher": "other", "rock lover": "other", "sinnoh bros": "other", "space cadet": "other", "supernatural": "other", "sweet tooth": "other", "team rocket forever": "other", "undella town": "other", "unova adventurer": "other", "unova gym besties": "other", "veteran trainer": "other"
}

export const POKEMON = ["Egg","Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch’d","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew","Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking","Misdreavus","Unown","Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma","Magcargo","Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom","Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop","Smoochum","Elekid","Magby","Miltank","Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-Oh","Celebi","Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud","Makuhita","Hariyama","Azurill","Nosepass","Skitty","Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric","Plusle","Minun","Volbeat","Illumise","Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord","Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish","Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo","Feebas","Milotic","Castform","Kecleon","Shuppet","Banette","Duskull","Dusclops","Tropius","Chimecho","Absol","Wynaut","Snorunt","Glalie","Spheal","Sealeo","Walrein","Clamperl","Huntail","Gorebyss","Relicanth","Luvdisc","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys","Turtwig","Grotle","Torterra","Chimchar","Monferno","Infernape","Piplup","Prinplup","Empoleon","Starly","Staravia","Staraptor","Bidoof","Bibarel","Kricketot","Kricketune","Shinx","Luxio","Luxray","Budew","Roserade","Cranidos","Rampardos","Shieldon","Bastiodon","Burmy","Wormadam","Mothim","Combee","Vespiquen","Pachirisu","Buizel","Floatzel","Cherubi","Cherrim","Shellos","Gastrodon","Ambipom","Drifloon","Drifblim","Buneary","Lopunny","Mismagius","Honchkrow","Glameow","Purugly","Chingling","Stunky","Skuntank","Bronzor","Bronzong","Bonsly","Mime Jr.","Happiny","Chatot","Spiritomb","Gible","Gabite","Garchomp","Munchlax","Riolu","Lucario","Hippopotas","Hippowdon","Skorupi","Drapion","Croagunk","Toxicroak","Carnivine","Finneon","Lumineon","Mantyke","Snover","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade","Probopass","Dusknoir","Froslass","Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus","Victini","Snivy","Servine","Serperior","Tepig","Pignite","Emboar","Oshawott","Dewott","Samurott","Patrat","Watchog","Lillipup","Herdier","Stoutland","Purrloin","Liepard","Pansage","Simisage","Pansear","Simisear","Panpour","Simipour","Munna","Musharna","Pidove","Tranquill","Unfezant","Blitzle","Zebstrika","Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill","Audino","Timburr","Gurdurr","Conkeldurr","Tympole","Palpitoad","Seismitoad","Throh","Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede","Scolipede","Cottonee","Whimsicott","Petilil","Lilligant","Basculin","Sandile","Krokorok","Krookodile","Darumaka","Darmanitan","Maractus","Dwebble","Crustle","Scraggy","Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna","Vanillite","Vanillish","Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed","Ferrothorn","Klink","Klang","Klinklang","Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic","Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard","Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino","Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem","Keldeo","Meloetta","Genesect","Chespin","Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder","Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","Flabébé","Floette","Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou","Espurr","Meowstic","Honedge","Doublade","Aegislash","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle","Skrelp","Dragalge","Clauncher","Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura","Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant","Pumpkaboo","Gourgeist","Bergmite","Avalugg","Noibat","Noivern","Xerneas","Yveltal","Zygarde","Diancie","Hoopa","Volcanion","Rowlet","Dartrix","Decidueye","Litten","Torracat","Incineroar","Popplio","Brionne","Primarina","Pikipek","Trumbeak","Toucannon","Yungoos","Gumshoos","Grubbin","Charjabug","Vikavolt","Crabrawler","Crabominable","Oricorio","Cutiefly","Ribombee","Rockruff","Lycanroc","Wishiwashi","Mareanie","Toxapex","Mudbray","Mudsdale","Dewpider","Araquanid","Fomantis","Lurantis","Morelull","Shiinotic","Salandit","Salazzle","Stufful","Bewear","Bounsweet","Steenee","Tsareena","Comfey","Oranguru","Passimian","Wimpod","Golisopod","Sandygast","Palossand","Pyukumuku","Type: Null","Silvally","Minior","Komala","Turtonator","Togedemaru","Mimikyu","Bruxish","Drampa","Dhelmise","Jangmo-o","Hakamo-o","Kommo-o","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Cosmog","Cosmoem","Solgaleo","Lunala","Nihilego","Buzzwole","Pheromosa","Xurkitree","Celesteela","Kartana","Guzzlord","Necrozma","Magearna","Marshadow","Poipole","Naganadel","Stakataka","Blacephalon","Zeraora","Meltan","Melmetal","Grookey","Thwackey","Rillaboom","Scorbunny","Raboot","Cinderace","Sobble","Drizzile","Inteleon","Skwovet","Greedent","Rookidee","Corvisquire","Corviknight","Blipbug","Dottler","Orbeetle","Nickit","Thievul","Gossifleur","Eldegoss","Wooloo","Dubwool","Chewtle","Drednaw","Yamper","Boltund","Rolycoly","Carkol","Coalossal","Applin","Flapple","Appletun","Silicobra","Sandaconda","Cramorant","Arrokuda","Barraskewda","Toxel","Toxtricity","Sizzlipede","Centiskorch","Clobbopus","Grapploct","Sinistea","Polteageist","Hatenna","Hattrem","Hatterene","Impidimp","Morgrem","Grimmsnarl","Obstagoon","Perrserker","Cursola","Sirfetch’d","Mr. Rime","Runerigus","Milcery","Alcremie","Falinks","Pincurchin","Snom","Frosmoth","Stonjourner","Eiscue","Indeedee","Morpeko","Cufant","Copperajah","Dracozolt","Arctozolt","Dracovish","Arctovish","Duraludon","Dreepy","Drakloak","Dragapult","Zacian","Zamazenta","Eternatus" ,"Kubfu","Urshifu","Zarude","Regieleki","Regidrago","Glastrier","Spectrier","Calyrex","Wyrdeer","Kleavor","Ursaluna","Basculegion","Sneasler","Overqwil","Enamorus","Sprigatito","Floragato","Meowscarada","Fuecoco","Crocalor","Skeledirge","Quaxly","Quaxwell","Quaquaval","Lechonk","Oinkologne","Tarountula","Spidops","Nymble","Lokix","Pawmi","Pawmo","Pawmot","Tandemaus","Maushold","Fidough","Dachsbun","Smoliv","Dolliv","Arboliva","Squawkabilly","Nacli","Naclstack","Garganacl","Charcadet","Armarouge","Ceruledge","Tadbulb","Bellibolt","Wattrel","Kilowattrel","Maschiff","Mabosstiff","Shroodle","Grafaiai","Bramblin","Brambleghast","Toedscool","Toedscruel","Klawf","Capsakid","Scovillain","Rellor","Rabsca","Flittle","Espathra","Tinkatink","Tinkatuff","Tinkaton","Wiglett","Wugtrio","Bombirdier","Finizen","Palafin","Varoom","Revavroom","Cyclizar","Orthworm","Glimmet","Glimmora","Greavard","Houndstone","Flamigo","Cetoddle","Cetitan","Veluza","Dondozo","Tatsugiri","Annihilape","Clodsire","Farigiraf","Dudunsparce","Kingambit","Great Tusk","Scream Tail","Brute Bonnet","Flutter Mane","Slither Wing","Sandy Shocks","Iron Treads","Iron Bundle","Iron Hands","Iron Jugulis","Iron Moth","Iron Thorns","Frigibax","Arctibax","Baxcalibur","Gimmighoul","Gholdengo","Wo-Chien","Chien-Pao","Ting-Lu","Chi-Yu","Roaring Moon","Iron Valiant","Koraidon","Miraidon","Walking Wake","Iron Leaves","Dipplin","Poltchageist","Sinistcha","Okidogi","Munkidori","Fezandipiti","Ogerpon","Archaludon","Hydrapple","Gouging Fire","Raging Bolt","Iron Boulder","Iron Crown","Terapagos","Pecharunt"];
