export const REGIONS = [
    "Auvergne-Rhône-Alpes",
    "Bourgogne-Franche-Comté",
    "Bretagne",
    "Centre-Val de Loire",
    "Collectivité d’outre-mer",
    "Corse",
    "Grand Est",
    "Guadeloupe",
    "Guyane",
    "Hauts-de-France",
    "Ile-de-France",
    "La Réunion",
    "Martinique",
    "Mayotte",
    "Nouvelle Aquitaine",
    "Normandie",
    "Occitanie",
    "Pays de la Loire",
    "Provence-Alpes-Côte d’Azur"
  ]
  
  export const ACADEMIES = [
    "Aix-Marseille",
    "Amiens",
    "Besançon",
    "Bordeaux",
    "Caen",
    "Clermont-Ferrand",
    "Corse",
    "Créteil",
    "Dijon",
    "Grenoble",
    "Guadeloupe",
    "Guyane",
    "La Réunion",
    "Lille",
    "Limoges",
    "Lyon",
    "Martinique",
    "Mayotte",
    "Montpellier",
    "Nancy-Metz",
    "Nantes",
    "Nice",
    "Orléans-Tour",
    "Paris",
    "Poitiers",
    "Reims",
    "Rennes",
    "Rouen",
    "Strasbourg",
    "Saint-Pierre-et-Miquelon",
    "Toulouse",
    "Versailles",
  ]
  
  export const DEPARTEMENTS = [
    "01 - Ain",
    "02 - Aisne",
    "03 - Allier",
    "04 - Alpes-de-Haute-Provence",
    "06 - Alpes-Maritimes",
    "07 - Ardèche",
    "08 - Ardennes",
    "09 - Ariège",
    "10 - Aube",
    "11 - Aude",
    "12 - Aveyron",
    "67 - Bas-Rhin",
    "13 - Bouches-du-Rhône",
    "14 - Calvados",
    "15 - Cantal",
    "16 - Charente",
    "17 - Charente-Maritime",
    "18 - Cher",
    "19 - Corrèze",
    "2A - Corse-du-Sud",
    "21 - Côte-d'Or",
    "22 - Côtes-d'Armor",
    "23 - Creuse",
    "79 - Deux-Sèvres",
    "24 - Dordogne",
    "25 - Doubs",
    "26 - Drôme",
    "91 - Essonne",
    "27 - Eure",
    "28 - Eure-et-Loir",
    "29 - Finistère",
    "30 - Gard",
    "32 - Gers",
    "33 - Gironde",
    "971 - Guadeloupe",
    "973 - Guyane",
    "05 - Hautes-Alpes",
    "65 - Hautes-Pyrénées",
    "2B - Haute-Corse",
    "31 - Haute-Garonne",
    "43 - Haute-Loire",
    "52 - Haute-Marne",
    "70 - Haute-Saône",
    "74 - Haute-Savoie",
    "87 - Haute-Vienne",
    "92 - Hauts-de-Seine",
    "68 - Haut-Rhin",
    "34 - Hérault",
    "35 - Ille-et-Vilaine",
    "36 - Indre",
    "37 - Indre-et-Loire",
    "38 - Isère",
    "39 - Jura",
    "40 - Landes",
    "974 - La Réunion",
    "42 - Loire",
    "45 - Loiret",
    "44 - Loire-Atlantique",
    "41 - Loir-et-Cher",
    "46 - Lot",
    "47 - Lot-et-Garonne",
    "48 - Lozère",
    "49 - Maine-et-Loire",
    "50 - Manche",
    "51 - Marne",
    "972 - Martinique",
    "53 - Mayenne",
    "976 - Mayotte",
    "54 - Meurthe-et-Moselle",
    "55 - Meuse",
    "56 - Morbihan",
    "57 - Moselle",
    "58 - Nièvre",
    "59 - Nord",
    "60 - Oise",
    "61 - Orne",
    "75 - Paris",
    "62 - Pas-de-Calais",
    "63 - Puy-de-Dôme",
    "64 - Pyrénées-Atlantiques",
    "66 - Pyrénées-Orientales",
    "69 - Rhône",
    "71 - Saône-et-Loire",
    "72 - Sarthe",
    "73 - Savoie",
    "93 - Seine-Saint-Denis",
    "76 - Seine-Maritime",
    "77 - Seine-et-Marne",
    "80 - Somme",
    "81 - Tarn",
    "82 - Tarn-et-Garonne",
    "90 - Territoire de Belfort",
    "94 - Val-de-Marne",
    "95 - Val-d'Oise",
    "83 - Var",
    "84 - Vaucluse",
    "85 - Vendée",
    "86 - Vienne",
    "88 - Vosges",
    "89 - Yonne",
    "78 - Yvelines",
  ]

  export const NOMBRE_ADHERENTS = [
    "1 - 10",
    "11 - 50",
    "51 - 100",
    "+ de 100"
  ]

  export function renderTypeAdherent(eple, autres_admins_publiques) {
    if (eple && autres_admins_publiques) {
        return "EPLE et autres administrations publiques"
    } else if (eple) return "EPLE"
    else if (autres_admins_publiques) return "Autre administrations publiques"
}

export function renderTypeMarche(fournitures, services) {
    if (fournitures && services) {
        return "Fournitures et services"
    } else if (fournitures) return "Fournitures"
    else if (services) return "Services"
}