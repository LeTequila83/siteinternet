/* =========================================================
   Le Tequila — données (carte complète, multilingue)
   Langues : fr · en · es · it · de
   item.d peut être une chaîne (identique dans toutes les
   langues, pour les noms propres) ou un objet {fr,en,es,it,de}.
   ========================================================= */

const LANGS = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
  { code: "de", label: "Deutsch" },
];

const I18N = {
  "nav.menu":    { fr: "La carte",  en: "Menu",     es: "La carta", it: "Il menù",  de: "Karte" },
  "nav.about":   { fr: "Le restaurant", en: "About", es: "El local", it: "Il locale", de: "Lokal" },
  "nav.contact": { fr: "Accès",     en: "Find us",  es: "Cómo llegar", it: "Dove siamo", de: "Anfahrt" },
  "nav.book":    { fr: "Réserver",  en: "Book",     es: "Reservar", it: "Prenota",  de: "Reservieren" },

  "about.kicker":{ fr: "Le restaurant", en: "The restaurant", es: "El restaurante", it: "Il ristorante", de: "Das Restaurant" },
  "about.title": { fr: "Le Tequila, restaurant à Fréjus", en: "Le Tequila, a restaurant in Fréjus", es: "Le Tequila, restaurante en Fréjus", it: "Le Tequila, ristorante a Fréjus", de: "Le Tequila, Restaurant in Fréjus" },
  "about.text":  { fr: "Situé au 2470 RD4, Route de Bagnol, face au Domaine du Pin de la Lègue, Le Tequila est un restaurant à Fréjus qui propose une cuisine généreuse dans un cadre convivial, sous les pins. Découvrez nos pizzas au feu de bois, nos viandes, poissons, salades et cocktails maison, sur place ou à emporter.",
                   en: "Located at 2470 RD4, Route de Bagnol, opposite the Domaine du Pin de la Lègue, Le Tequila is a restaurant in Fréjus serving generous cooking in a friendly setting, under the pines. Discover our wood-fired pizzas, meats, fish, salads and homemade cocktails, to eat in or take away.",
                   es: "Situado en 2470 RD4, Route de Bagnol, frente al Domaine du Pin de la Lègue, Le Tequila es un restaurante en Fréjus que ofrece una cocina generosa en un ambiente acogedor, bajo los pinos. Descubre nuestras pizzas a la leña, carnes, pescados, ensaladas y cócteles caseros, para comer aquí o llevar.",
                   it: "Situato al 2470 RD4, Route de Bagnol, di fronte al Domaine du Pin de la Lègue, Le Tequila è un ristorante a Fréjus che propone una cucina generosa in un ambiente conviviale, sotto i pini. Scopri le nostre pizze al forno a legna, carni, pesce, insalate e cocktail della casa, sul posto o da asporto.",
                   de: "Le Tequila liegt an der 2470 RD4, Route de Bagnol, gegenüber der Domaine du Pin de la Lègue, und ist ein Restaurant in Fréjus mit großzügiger Küche in geselligem Rahmen, unter den Pinien. Entdecken Sie unsere Holzofen-Pizzen, Fleisch, Fisch, Salate und hausgemachte Cocktails, vor Ort oder zum Mitnehmen." },
  "about.f1":    { fr: "Pizzas au feu de bois", en: "Wood-fired pizzas", es: "Pizzas a la leña", it: "Pizze al forno a legna", de: "Holzofen-Pizza" },
  "about.f2":    { fr: "Terrasse sous les pins", en: "Terrace under the pines", es: "Terraza bajo los pinos", it: "Terrazza sotto i pini", de: "Terrasse unter Pinien" },
  "about.f3":    { fr: "Cocktails maison", en: "Homemade cocktails", es: "Cócteles caseros", it: "Cocktail della casa", de: "Hausgemachte Cocktails" },
  "about.hours": { fr: "Ouvert tous les jours de mai à septembre, de 8h00 à 23h00.", en: "Open every day from May to September, 8:00 am to 11:00 pm.", es: "Abierto todos los días de mayo a septiembre, de 8:00 a 23:00.", it: "Aperto tutti i giorni da maggio a settembre, dalle 8:00 alle 23:00.", de: "Täglich geöffnet von Mai bis September, von 8:00 bis 23:00 Uhr." },

  "hero.badge":  { fr: "Ouvert tous les jours · mai → septembre", en: "Open every day · May → September", es: "Abierto todos los días · mayo → septiembre", it: "Aperto tutti i giorni · maggio → settembre", de: "Täglich geöffnet · Mai → September" },
  "hero.kicker": { fr: "Bar · Restaurant", en: "Bar · Restaurant", es: "Bar · Restaurante", it: "Bar · Ristorante", de: "Bar · Restaurant" },
  "hero.h1sub":  { fr: "Restaurant & pizzeria à Fréjus", en: "Restaurant & pizzeria in Fréjus", es: "Restaurante y pizzería en Fréjus", it: "Ristorante e pizzeria a Fréjus", de: "Restaurant & Pizzeria in Fréjus" },
  "hero.tagline":{ fr: "Le Tequila vous accueille sous les pins du Pin de la Lègue : pizzas au feu de bois, viandes, poissons, salades et cocktails maison — sur place ou à emporter.", en: "Le Tequila welcomes you under the pines of the Pin de la Lègue: wood-fired pizzas, meats, fish, salads and homemade cocktails — eat in or take away.", es: "Le Tequila te recibe bajo los pinos del Pin de la Lègue: pizzas a la leña, carnes, pescados, ensaladas y cócteles caseros — en el local o para llevar.", it: "Le Tequila vi accoglie sotto i pini del Pin de la Lègue: pizze al forno a legna, carni, pesce, insalate e cocktail della casa — sul posto o da asporto.", de: "Le Tequila empfängt Sie unter den Pinien des Pin de la Lègue: Holzofen-Pizzen, Fleisch, Fisch, Salate und hausgemachte Cocktails — vor Ort oder zum Mitnehmen." },
  "hero.cta_book":{ fr: "Réserver une table", en: "Book a table", es: "Reservar mesa", it: "Prenota un tavolo", de: "Tisch reservieren" },
  "hero.cta_menu":{ fr: "Voir la carte", en: "See the menu", es: "Ver la carta", it: "Vedi il menù", de: "Zur Karte" },
  "status.open":   { fr: "Ouvert maintenant", en: "Open now", es: "Abierto ahora", it: "Aperto ora", de: "Jetzt geöffnet" },
  "status.season": { fr: "Saison de mai à septembre", en: "Season from May to September", es: "Temporada de mayo a septiembre", it: "Stagione da maggio a settembre", de: "Saison Mai bis September" },

  "info.hours":   { fr: "Horaires", en: "Hours", es: "Horario", it: "Orari", de: "Öffnungszeiten" },
  "info.hours_val":{ fr: "8h00 – 23h00", en: "8:00 am – 11:00 pm", es: "8:00 – 23:00", it: "8:00 – 23:00", de: "8:00 – 23:00 Uhr" },
  "info.hours_sub":{ fr: "Tous les jours, mai → septembre", en: "Every day, May → September", es: "Todos los días, mayo → septiembre", it: "Tutti i giorni, maggio → settembre", de: "Täglich, Mai → September" },
  "info.phone":   { fr: "Réserver / Commander", en: "Book / Order", es: "Reservar / Pedir", it: "Prenota / Ordina", de: "Reservieren / Bestellen" },
  "info.phone_sub":{ fr: "Pizzas à emporter", en: "Pizzas to take away", es: "Pizzas para llevar", it: "Pizze da asporto", de: "Pizza zum Mitnehmen" },
  "info.address": { fr: "Adresse", en: "Address", es: "Dirección", it: "Indirizzo", de: "Adresse" },
  "info.address_sub":{ fr: "Face au Domaine du Pin de la Lègue", en: "Opposite Domaine du Pin de la Lègue", es: "Frente al Domaine du Pin de la Lègue", it: "Di fronte al Domaine du Pin de la Lègue", de: "Gegenüber Domaine du Pin de la Lègue" },
  "info.services":{ fr: "Services", en: "Facilities", es: "Servicios", it: "Servizi", de: "Ausstattung" },
  "svc.pmr":     { fr: "Accès PMR", en: "Wheelchair access", es: "Acceso PMR", it: "Accesso disabili", de: "Barrierefrei" },
  "svc.terrace": { fr: "Terrasse",  en: "Terrace", es: "Terraza", it: "Terrazza", de: "Terrasse" },
  "svc.wifi":    { fr: "Wi-Fi", en: "Wi-Fi", es: "Wi-Fi", it: "Wi-Fi", de: "WLAN" },

  "take.kicker": { fr: "À emporter", en: "Take away", es: "Para llevar", it: "Da asporto", de: "Zum Mitnehmen" },
  "take.title":  { fr: "Nos pizzas au feu de bois, à emporter", en: "Our wood-fired pizzas, to take away", es: "Nuestras pizzas a la leña, para llevar", it: "Le nostre pizze al forno a legna, da asporto", de: "Unsere Holzofen-Pizzen, zum Mitnehmen" },
  "take.text":   { fr: "Pâte fine, feu de bois et produits de saison. Un appel suffit, on prépare tout.", en: "Thin crust, wood fire and seasonal produce. One call and we get it ready.", es: "Masa fina, horno de leña y productos de temporada. Una llamada y lo preparamos.", it: "Impasto sottile, forno a legna e prodotti di stagione. Una chiamata e prepariamo tutto.", de: "Dünner Teig, Holzfeuer und saisonale Produkte. Ein Anruf genügt." },
  "take.cta":    { fr: "Commander — 06 59 89 05 70", en: "Order — 06 59 89 05 70", es: "Pedir — 06 59 89 05 70", it: "Ordina — 06 59 89 05 70", de: "Bestellen — 06 59 89 05 70" },
  "take.loyalty":{ fr: "Carte de fidélité : 10 pizzas achetées, la 11ᵉ offerte.", en: "Loyalty card: buy 10 pizzas, the 11th is free.", es: "Tarjeta de fidelidad: 10 pizzas compradas, la 11ª gratis.", it: "Carta fedeltà: 10 pizze acquistate, l'11ª in omaggio.", de: "Treuekarte: 10 Pizzen kaufen, die 11. gratis." },
  "take.see":    { fr: "Voir les pizzas", en: "See the pizzas", es: "Ver las pizzas", it: "Vedi le pizze", de: "Pizzen ansehen" },
  "take.call":   { fr: "Appeler", en: "Call", es: "Llamar", it: "Chiama", de: "Anrufen" },

  "phone.short": { fr: "Réserver & commander", en: "Book & order", es: "Reservar y pedir", it: "Prenota & ordina", de: "Reservieren & bestellen" },
  "phone.sub":   { fr: "Réserver une table ou commander vos pizzas à emporter", en: "Book a table or order your pizzas to take away", es: "Reservar mesa o pedir tus pizzas para llevar", it: "Prenota un tavolo o ordina le tue pizze da asporto", de: "Tisch reservieren oder Pizzen zum Mitnehmen bestellen" },

  "menu.kicker":  { fr: "La carte", en: "The menu", es: "La carta", it: "Il menù", de: "Die Karte" },
  "menu.title":   { fr: "Explorez la carte", en: "Explore the menu", es: "Explora la carta", it: "Esplora il menù", de: "Entdecken Sie die Karte" },
  "menu.subtitle":{ fr: "Choisissez une catégorie ou recherchez un plat. Toute la carte est disponible à emporter.", en: "Pick a category or search a dish. The whole menu is available to take away.", es: "Elige una categoría o busca un plato. Toda la carta para llevar.", it: "Scegli una categoria o cerca un piatto. Tutto il menù è da asporto.", de: "Wählen Sie eine Kategorie oder suchen Sie ein Gericht. Alles auch zum Mitnehmen." },
  "menu.search":  { fr: "Rechercher un plat, un ingrédient…", en: "Search a dish, an ingredient…", es: "Buscar un plato, un ingrediente…", it: "Cerca un piatto, un ingrediente…", de: "Gericht oder Zutat suchen…" },
  "menu.back":    { fr: "Toutes les catégories", en: "All categories", es: "Todas las categorías", it: "Tutte le categorie", de: "Alle Kategorien" },
  "menu.empty":   { fr: "Aucun plat ne correspond.", en: "No dish matches.", es: "Ningún plato coincide.", it: "Nessun piatto trovato.", de: "Kein Gericht gefunden." },
  "menu.results": { fr: "Résultats", en: "Results", es: "Resultados", it: "Risultati", de: "Ergebnisse" },
  "menu.season":  { fr: "✷ Disponible du 1ᵉʳ juillet au 31 août.", en: "✷ Available 1 July – 31 August.", es: "✷ Disponible del 1 de julio al 31 de agosto.", it: "✷ Disponibile dal 1° luglio al 31 agosto.", de: "✷ Verfügbar 1. Juli – 31. August." },

  "contact.kicker": { fr: "Accès & contact", en: "Find us & contact", es: "Cómo llegar", it: "Dove siamo", de: "Anfahrt & Kontakt" },
  "contact.title":  { fr: "On vous attend", en: "See you soon", es: "Te esperamos", it: "Vi aspettiamo", de: "Wir freuen uns auf Sie" },
  "contact.addr":   { fr: "Adresse", en: "Address", es: "Dirección", it: "Indirizzo", de: "Adresse" },
  "contact.addr_hint":{ fr: "En face du Domaine du Pin de la Lègue, à Fréjus.", en: "Opposite Domaine du Pin de la Lègue, Fréjus.", es: "Frente al Domaine du Pin de la Lègue, Fréjus.", it: "Di fronte al Domaine du Pin de la Lègue, Fréjus.", de: "Gegenüber Domaine du Pin de la Lègue, Fréjus." },
  "contact.phone":  { fr: "Téléphone", en: "Phone", es: "Teléfono", it: "Telefono", de: "Telefon" },
  "contact.hours":  { fr: "Horaires", en: "Hours", es: "Horario", it: "Orari", de: "Öffnungszeiten" },
  "contact.hours_val":{ fr: "Tous les jours (mai → sept.)\n8h00 – 23h00", en: "Every day (May → Sept.)\n8:00 am – 11:00 pm", es: "Todos los días (mayo → sept.)\n8:00 – 23:00", it: "Tutti i giorni (mag → set)\n8:00 – 23:00", de: "Täglich (Mai → Sept.)\n8:00 – 23:00 Uhr" },
  "contact.services":{ fr: "Services", en: "Facilities", es: "Servicios", it: "Servizi", de: "Ausstattung" },
  "contact.directions":{ fr: "Itinéraire", en: "Directions", es: "Cómo llegar", it: "Indicazioni", de: "Route" },
  "contact.call":   { fr: "Appeler le restaurant", en: "Call the restaurant", es: "Llamar al restaurante", it: "Chiama il ristorante", de: "Restaurant anrufen" },

  "footer.tagline": { fr: "Bar · Restaurant — Pizzas au feu de bois", en: "Bar · Restaurant — Wood-fired pizzas", es: "Bar · Restaurante — Pizzas a la leña", it: "Bar · Ristorante — Pizze al forno a legna", de: "Bar · Restaurant — Holzofen-Pizza" },
  "footer.rights":  { fr: "Tous droits réservés.", en: "All rights reserved.", es: "Todos los derechos reservados.", it: "Tutti i diritti riservati.", de: "Alle Rechte vorbehalten." },
  "footer.legal":   { fr: "L'abus d'alcool est dangereux pour la santé, à consommer avec modération.", en: "Excessive drinking is harmful to health, please drink responsibly.", es: "El abuso del alcohol es peligroso para la salud, consúmelo con moderación.", it: "L'abuso di alcol è pericoloso per la salute, bere con moderazione.", de: "Übermäßiger Alkoholkonsum ist gesundheitsschädlich, bitte in Maßen." },
  "bar.call":       { fr: "Appeler", en: "Call", es: "Llamar", it: "Chiama", de: "Anrufen" },
  "bar.directions": { fr: "Itinéraire", en: "Directions", es: "Ruta", it: "Indicazioni", de: "Route" },
  "bar.menu":       { fr: "La carte", en: "Menu", es: "Carta", it: "Menù", de: "Karte" },
};

/* raccourci pour les titres de groupe multilingues */
function G(fr,en,es,it,de){ return {fr:fr,en:en,es:es,it:it,de:de}; }
const NOTE_SUPP = G("Suppléments : légumes & œuf 1,50€ · viande & poisson 2,50€ · burrata 4€.","Extras: veg & egg €1.50 · meat & fish €2.50 · burrata €4.","Extras: verduras y huevo 1,50€ · carne y pescado 2,50€ · burrata 4€.","Aggiunte: verdure e uovo 1,50€ · carne e pesce 2,50€ · burrata 4€.","Extras: Gemüse & Ei 1,50€ · Fleisch & Fisch 2,50€ · Burrata 4€.");

const MENU = [
  /* ---------------- À PARTAGER ---------------- */
  { id:"apartager", img:"images/cat/apartager.jpg",
    label:G("À partager","To share","Para compartir","Da condividere","Zum Teilen"),
    groups:[{ items:[
      { n:"Saint-Marcellin rôti", d:{fr:"Miel et thym.",en:"Honey and thyme.",es:"Miel y tomillo.",it:"Miele e timo.",de:"Honig und Thymian."}, p:"9,00" },
      { n:"Carpaccio de melon & jambon cru", d:{fr:"",en:"Melon carpaccio & cured ham.",es:"Carpaccio de melón y jamón serrano.",it:"Carpaccio di melone e prosciutto crudo.",de:"Melonen-Carpaccio & Rohschinken."}, p:"12,00" },
      { n:"Caprese", d:{fr:"Tomates, burrata, anchois et câpres.",en:"Tomatoes, burrata, anchovies and capers.",es:"Tomate, burrata, anchoas y alcaparras.",it:"Pomodori, burrata, acciughe e capperi.",de:"Tomaten, Burrata, Sardellen und Kapern."}, p:"14,00" },
      { n:"Foie gras mi-cuit maison", d:{fr:"Chutney de pommes, confiture de figues, brioche.",en:"Apple chutney, fig jam, brioche.",es:"Chutney de manzana, mermelada de higos, brioche.",it:"Chutney di mele, confettura di fichi, brioche.",de:"Apfel-Chutney, Feigenkonfitüre, Brioche."}, p:"16,00" },
      { n:"Planche mixte", d:{fr:"Calamars, onion rings, tenders de poulet, charcuterie et fromage.",en:"Calamari, onion rings, chicken tenders, charcuterie and cheese.",es:"Calamares, aros de cebolla, pollo crujiente, embutidos y queso.",it:"Calamari, onion rings, straccetti di pollo, salumi e formaggio.",de:"Calamari, Onion Rings, Chicken Tenders, Wurst und Käse."}, p:"22,00" },
      { n:"Planche charcuterie", d:{fr:"Jambon cru, rillettes, caillette, mortadelle, saucisson, jambon blanc, chorizo.",en:"Cured ham, rillettes, caillette, mortadella, saucisson, cooked ham, chorizo.",es:"Jamón serrano, rillettes, caillette, mortadela, salchichón, jamón cocido, chorizo.",it:"Prosciutto crudo, rillettes, caillette, mortadella, salame, prosciutto cotto, chorizo.",de:"Rohschinken, Rillettes, Caillette, Mortadella, Salami, Kochschinken, Chorizo."}, p:"22,00" },
      { n:"Menu enfant", d:{fr:"−12 ans. Sirop ou jus + steak-frites, tenders-frites, pizza enfant ou linguine guanciale + 1 boule de glace.",en:"Under 12. Cordial or juice + beef & fries, tenders & fries, kids' pizza or guanciale linguine + 1 scoop of ice cream.",es:"Menores de 12. Refresco o zumo + carne y patatas, tenders y patatas, pizza infantil o linguine guanciale + 1 bola de helado.",it:"Under 12. Sciroppo o succo + manzo e patatine, tenders e patatine, pizza per bambini o linguine guanciale + 1 pallina di gelato.",de:"Unter 12. Sirup oder Saft + Steak & Pommes, Tenders & Pommes, Kinderpizza oder Guanciale-Linguine + 1 Kugel Eis."}, p:"12,00" },
    ]}] },

  /* ---------------- SALADES ---------------- */
  { id:"salades", img:"images/cat/salades.jpg",
    label:G("Salades","Salads","Ensaladas","Insalate","Salate"),
    groups:[{ items:[
      { n:"Grecque", d:{fr:"Salade, tomates cerises, oignons, pickles, concombre, poivron, feta, pastèque, menthe.",en:"Salad, cherry tomatoes, onions, pickles, cucumber, pepper, feta, watermelon, mint.",es:"Ensalada, tomate cherry, cebolla, pickles, pepino, pimiento, feta, sandía, menta.",it:"Insalata, pomodorini, cipolla, pickles, cetriolo, peperone, feta, anguria, menta.",de:"Salat, Kirschtomaten, Zwiebeln, Pickles, Gurke, Paprika, Feta, Wassermelone, Minze."}, p:"15,00" },
      { n:"César", d:{fr:"Salade, tomates cerises, poulet croustillant, parmesan, poitrine, oignons frits, œuf mollet, sauce césar.",en:"Salad, cherry tomatoes, crispy chicken, parmesan, bacon, fried onions, soft egg, Caesar dressing.",es:"Ensalada, tomate cherry, pollo crujiente, parmesano, panceta, cebolla frita, huevo mollet, salsa césar.",it:"Insalata, pomodorini, pollo croccante, parmigiano, pancetta, cipolla fritta, uovo morbido, salsa cesar.",de:"Salat, Kirschtomaten, knuspriges Hähnchen, Parmesan, Speck, Röstzwiebeln, weiches Ei, Caesar-Dressing."}, p:"18,00" },
      { n:"Chèvre chaud", d:{fr:"Salade, tomates cerises, poitrine, brick au chèvre, miel, thym, noix, figues, pommes.",en:"Salad, cherry tomatoes, bacon, goat-cheese pastry, honey, thyme, walnuts, figs, apples.",es:"Ensalada, tomate cherry, panceta, hojaldre de cabra, miel, tomillo, nueces, higos, manzana.",it:"Insalata, pomodorini, pancetta, fagottino di caprino, miele, timo, noci, fichi, mele.",de:"Salat, Kirschtomaten, Speck, Ziegenkäse im Teig, Honig, Thymian, Walnüsse, Feigen, Äpfel."}, p:"19,00" },
      { n:"Poke bowl au thon", d:{fr:"Concombre, carotte, chou rouge, édamame, mangue, avocat, thon mi-cuit sésame, quinoa. Version falafels possible.",en:"Cucumber, carrot, red cabbage, edamame, mango, avocado, sesame-seared tuna, quinoa. Falafel option.",es:"Pepino, zanahoria, col lombarda, edamame, mango, aguacate, atún, quinoa. Opción falafel.",it:"Cetriolo, carota, cavolo rosso, edamame, mango, avocado, tonno scottato, quinoa. Opzione falafel.",de:"Gurke, Karotte, Rotkohl, Edamame, Mango, Avocado, Thunfisch, Quinoa. Auch mit Falafel."}, p:"21,00" },
      { n:"Bobun bœuf ou crevettes", d:{fr:"Vermicelles, crudités, herbes, cacahuètes, nems.",en:"Rice noodles, raw veg, herbs, peanuts, spring rolls.",es:"Fideos de arroz, verduras, hierbas, cacahuetes, rollitos.",it:"Vermicelli di riso, verdure, erbe, arachidi, involtini.",de:"Reisnudeln, Gemüse, Kräuter, Erdnüsse, Frühlingsrollen."}, p:"24,00" },
    ]}] },

  /* ---------------- VIANDES ---------------- */
  { id:"viandes", img:"images/cat/viandes.jpg",
    label:G("Viandes","Meats","Carnes","Carni","Fleisch"),
    groups:[{ note:G("Servies avec frites et salade.","Served with fries and salad.","Servidas con patatas y ensalada.","Servite con patatine e insalata.","Mit Pommes und Salat."), items:[
      { n:"Carpaccio de bœuf", d:{fr:"Servi avec frites.",en:"Served with fries.",es:"Con patatas.",it:"Con patatine.",de:"Mit Pommes."}, p:"16,00" },
      { n:"Tartare de bœuf", d:{fr:"Charolais au couteau.",en:"Knife-cut Charolais beef.",es:"Charolais cortado a cuchillo.",it:"Charolais al coltello.",de:"Charolais, handgeschnitten."}, p:"19,00" },
      { n:"Magret de canard, miel & thym", d:{fr:"Écrasé de pommes de terre et légumes du moment.",en:"Crushed potatoes and seasonal vegetables.",es:"Puré rústico de patata y verduras de temporada.",it:"Purè rustico di patate e verdure di stagione.",de:"Stampfkartoffeln und Gemüse der Saison."}, p:"23,00" },
      { n:"Tataki de bœuf", d:{fr:"Sauce soja et sésame.",en:"Soy and sesame sauce.",es:"Salsa de soja y sésamo.",it:"Salsa di soia e sesamo.",de:"Soja-Sesam-Sauce."}, p:"25,00" },
      { n:"Entrecôte grillée (≈250g)", d:{fr:"Poivre vert ou chimichurri.",en:"Green pepper or chimichurri.",es:"Pimienta verde o chimichurri.",it:"Pepe verde o chimichurri.",de:"Grüner Pfeffer oder Chimichurri."}, p:"26,00" },
      { n:"Côte de bœuf", d:{fr:"Beurre maître d'hôtel.",en:"Maître d'hôtel butter.",es:"Mantequilla maître d'hôtel.",it:"Burro maître d'hôtel.",de:"Kräuterbutter."}, p:"45,00" },
    ]}] },

  /* ---------------- POISSONS ---------------- */
  { id:"poissons", img:"images/cat/poissons.jpg",
    label:G("Poissons","Fish","Pescados","Pesce","Fisch"),
    groups:[{ items:[
      { n:"Loup grillé, sauce vierge", d:{fr:"Purée de patates douces et légumes du moment.",en:"Sweet-potato purée and seasonal vegetables.",es:"Puré de boniato y verduras de temporada.",it:"Purè di patate dolci e verdure di stagione.",de:"Süßkartoffelpüree und Gemüse der Saison."}, p:"24,00" },
      { n:"Seiche persillée à la plancha", d:{fr:"Purée de patates douces et légumes du moment.",en:"Sweet-potato purée and seasonal vegetables.",es:"Puré de boniato y verduras de temporada.",it:"Purè di patate dolci e verdure di stagione.",de:"Süßkartoffelpüree und Gemüse der Saison."}, p:"21,00" },
      { n:"Ceviche de saumon ou thon", d:{fr:"Servi avec frites et salade.",en:"Served with fries and salad.",es:"Con patatas y ensalada.",it:"Con patatine e insalata.",de:"Mit Pommes und Salat."}, p:"19,00" },
      { n:"Marmite du pêcheur", d:{fr:"Saumon, gambas, moules, coques, pommes de terre, soupe de poisson, rouille, croûtons.",en:"Salmon, king prawns, mussels, cockles, potatoes, fish soup, rouille, croutons.",es:"Salmón, gambas, mejillones, berberechos, patata, sopa de pescado, rouille, picatostes.",it:"Salmone, gamberoni, cozze, vongole, patate, zuppa di pesce, rouille, crostini.",de:"Lachs, Riesengarnelen, Muscheln, Herzmuscheln, Kartoffeln, Fischsuppe, Rouille, Croutons."}, p:"27,00" },
      { n:"Moules marinières & frites", d:{fr:"",en:"Mussels marinière & fries.",es:"Mejillones marinera y patatas.",it:"Cozze alla marinara e patatine.",de:"Miesmuscheln marinière & Pommes."}, p:"17,00" },
      { n:"Moules à la crème & frites", d:{fr:"",en:"Creamed mussels & fries.",es:"Mejillones a la crema y patatas.",it:"Cozze alla panna e patatine.",de:"Miesmuscheln in Sahne & Pommes."}, p:"18,00" },
      { n:"Moules au chorizo & frites", d:{fr:"",en:"Chorizo mussels & fries.",es:"Mejillones al chorizo y patatas.",it:"Cozze al chorizo e patatine.",de:"Miesmuscheln mit Chorizo & Pommes."}, p:"19,00" },
    ]}] },

  /* ---------------- BURGERS ---------------- */
  { id:"burgers", img:"images/cat/burgers.jpg",
    label:G("Burgers","Burgers","Hamburguesas","Burger","Burger"),
    groups:[{ note:G("Frites et salade · Steak végé +2€ · Double steak +4€.","Fries and salad · Veggie patty +€2 · Double patty +€4.","Patatas y ensalada · Vegetal +2€ · Doble +4€.","Patatine e insalata · Veg +2€ · Doppio +4€.","Pommes und Salat · Veggie +2€ · Doppelt +4€."), items:[
      { n:"Cheese maturé", d:{fr:"Steak 150g, poitrine, cheddar maturé, oignons confits, sauce burger.",en:"150g patty, bacon, aged cheddar, candied onions, burger sauce.",es:"Carne 150g, panceta, cheddar curado, cebolla confitada, salsa burger.",it:"Manzo 150g, pancetta, cheddar stagionato, cipolle caramellate, salsa burger.",de:"150g Patty, Speck, gereifter Cheddar, Schmorzwiebeln, Burgersauce."}, p:"18,00" },
      { n:"Croustillant", d:{fr:"Poulet croustillant, cheddar maturé, oignons confits, sauce burger.",en:"Crispy chicken, aged cheddar, candied onions, burger sauce.",es:"Pollo crujiente, cheddar curado, cebolla confitada, salsa burger.",it:"Pollo croccante, cheddar stagionato, cipolle caramellate, salsa burger.",de:"Knuspriges Hähnchen, gereifter Cheddar, Schmorzwiebeln, Burgersauce."}, p:"18,00" },
      { n:"Façon Rossini", d:{fr:"Steak 150g, poitrine, emmental, foie gras maison, oignons confits.",en:"150g patty, bacon, emmental, house foie gras, candied onions.",es:"Carne 150g, panceta, emmental, foie gras casero, cebolla confitada.",it:"Manzo 150g, pancetta, emmental, foie gras della casa, cipolle caramellate.",de:"150g Patty, Speck, Emmentaler, hausgemachte Foie gras, Schmorzwiebeln."}, p:"21,00" },
    ]}] },

  /* ---------------- PÂTES ---------------- */
  { id:"pates", img:"images/cat/pates.jpg",
    label:G("Pâtes","Pasta","Pasta","Pasta","Pasta"),
    groups:[{ items:[
      { n:"Linguine cacio e pepe", d:{fr:"Poivre mignonette, tomates cerises, crème et parmesan.",en:"Cracked pepper, cherry tomatoes, cream and parmesan.",es:"Pimienta, tomate cherry, nata y parmesano.",it:"Pepe, pomodorini, panna e parmigiano.",de:"Pfeffer, Kirschtomaten, Sahne und Parmesan."}, p:"19,00" },
      { n:"Linguine pesto & burrata", d:{fr:"Avec jambon cru +3€.",en:"With cured ham +€3.",es:"Con jamón serrano +3€.",it:"Con prosciutto crudo +3€.",de:"Mit Rohschinken +3€."}, p:"19,00" },
      { n:"Gnocchi crème de parmesan & sauge", d:{fr:"",en:"Gnocchi, parmesan cream and sage.",es:"Ñoquis, crema de parmesano y salvia.",it:"Gnocchi, crema di parmigiano e salvia.",de:"Gnocchi, Parmesancreme und Salbei."}, p:"19,00" },
      { n:"Linguine guanciale", d:{fr:"Crème de parmesan et guanciale.",en:"Parmesan cream and guanciale.",es:"Crema de parmesano y guanciale.",it:"Crema di parmigiano e guanciale.",de:"Parmesancreme und Guanciale."}, p:"21,00" },
      { n:"Linguine effiloché de bœuf", d:{fr:"Bœuf basse température, sauce tomate.",en:"Slow-cooked pulled beef, tomato sauce.",es:"Ternera deshilachada, salsa de tomate.",it:"Manzo sfilacciato, salsa di pomodoro.",de:"Zart geschmortes Rind, Tomatensauce."}, p:"24,00" },
    ]}] },

  /* ---------------- PIZZAS ---------------- */
  { id:"pizzas", img:"images/cat/pizzas.jpg",
    label:G("Pizzas","Pizzas","Pizzas","Pizze","Pizza"),
    intro:G("Pizzas au feu de bois. Toutes disponibles à emporter.","Wood-fired pizzas. All available to take away.","Pizzas a la leña. Todas para llevar.","Pizze al forno a legna. Tutte da asporto.","Holzofen-Pizzen. Alle zum Mitnehmen."),
    endNote:NOTE_SUPP,
    groups:[
      { title:G("Base tomate","Tomato base","Base de tomate","Base pomodoro","Tomatenbasis"), items:[
        { n:"Marguerite", d:{fr:"Mozzarella, olives.",en:"Mozzarella, olives.",es:"Mozzarella, aceitunas.",it:"Mozzarella, olive.",de:"Mozzarella, Oliven."}, p:"12,00" },
        { n:"Napolitaine", d:{fr:"Mozzarella, anchois, câpres, olives.",en:"Mozzarella, anchovies, capers, olives.",es:"Mozzarella, anchoas, alcaparras, aceitunas.",it:"Mozzarella, acciughe, capperi, olive.",de:"Mozzarella, Sardellen, Kapern, Oliven."}, p:"13,50" },
        { n:"Reine", d:{fr:"Mozzarella, jambon blanc, champignons, olives.",en:"Mozzarella, cooked ham, mushrooms, olives.",es:"Mozzarella, jamón cocido, champiñones, aceitunas.",it:"Mozzarella, prosciutto cotto, funghi, olive.",de:"Mozzarella, Kochschinken, Champignons, Oliven."}, p:"14,00" },
        { n:"Catalane", star:true, d:{fr:"Mozzarella, chorizo, poivron, roquette, ricotta.",en:"Mozzarella, chorizo, pepper, rocket, ricotta.",es:"Mozzarella, chorizo, pimiento, rúcula, ricotta.",it:"Mozzarella, chorizo, peperone, rucola, ricotta.",de:"Mozzarella, Chorizo, Paprika, Rucola, Ricotta."}, p:"14,50" },
        { n:"Quatre saisons", d:{fr:"Mozzarella, champignons, poivrons, oignons, artichauts, tomates cerises, olives, pesto.",en:"Mozzarella, mushrooms, peppers, onions, artichokes, cherry tomatoes, olives, pesto.",es:"Mozzarella, champiñones, pimientos, cebolla, alcachofas, tomate cherry, aceitunas, pesto.",it:"Mozzarella, funghi, peperoni, cipolla, carciofi, pomodorini, olive, pesto.",de:"Mozzarella, Champignons, Paprika, Zwiebeln, Artischocken, Kirschtomaten, Oliven, Pesto."}, p:"15,00" },
        { n:"Quatre fromages", d:{fr:"Mozzarella, roquefort, chèvre, camembert.",en:"Mozzarella, roquefort, goat cheese, camembert.",es:"Mozzarella, roquefort, queso de cabra, camembert.",it:"Mozzarella, roquefort, caprino, camembert.",de:"Mozzarella, Roquefort, Ziegenkäse, Camembert."}, p:"15,00" },
        { n:"Burger", star:true, d:{fr:"Mozzarella, viande hachée, poitrine, cheddar, oignons, sauce burger.",en:"Mozzarella, minced beef, bacon, cheddar, onions, burger sauce.",es:"Mozzarella, carne picada, panceta, cheddar, cebolla, salsa burger.",it:"Mozzarella, carne macinata, pancetta, cheddar, cipolla, salsa burger.",de:"Mozzarella, Hackfleisch, Speck, Cheddar, Zwiebeln, Burgersauce."}, p:"15,50" },
        { n:"Parme", d:{fr:"Mozzarella, jambon cru, roquette, parmesan, tomates cerises, crème balsamique.",en:"Mozzarella, cured ham, rocket, parmesan, cherry tomatoes, balsamic glaze.",es:"Mozzarella, jamón serrano, rúcula, parmesano, tomate cherry, crema balsámica.",it:"Mozzarella, prosciutto crudo, rucola, parmigiano, pomodorini, glassa balsamica.",de:"Mozzarella, Rohschinken, Rucola, Parmesan, Kirschtomaten, Balsamico-Creme."}, p:"16,50" },
        { n:"Picante", star:true, d:{fr:"Mozzarella, chorizo, aubergine, stracciatella, tomates cerises, pesto.",en:"Mozzarella, chorizo, aubergine, stracciatella, cherry tomatoes, pesto.",es:"Mozzarella, chorizo, berenjena, stracciatella, tomate cherry, pesto.",it:"Mozzarella, chorizo, melanzana, stracciatella, pomodorini, pesto.",de:"Mozzarella, Chorizo, Aubergine, Stracciatella, Kirschtomaten, Pesto."}, p:"17,00" },
        { n:"Burrata", d:{fr:"Mozzarella, burrata, jambon cru, roquette, tomates cerises, parmesan, olives, pesto.",en:"Mozzarella, burrata, cured ham, rocket, cherry tomatoes, parmesan, olives, pesto.",es:"Mozzarella, burrata, jamón serrano, rúcula, tomate cherry, parmesano, aceitunas, pesto.",it:"Mozzarella, burrata, prosciutto crudo, rucola, pomodorini, parmigiano, olive, pesto.",de:"Mozzarella, Burrata, Rohschinken, Rucola, Kirschtomaten, Parmesan, Oliven, Pesto."}, p:"18,50" },
      ]},
      { title:G("Base crème fraîche","Crème fraîche base","Base de nata","Base panna","Crème-fraîche-Basis"), items:[
        { n:"Chef", star:true, d:{fr:"Mozzarella, chorizo, merguez, œuf.",en:"Mozzarella, chorizo, merguez, egg.",es:"Mozzarella, chorizo, merguez, huevo.",it:"Mozzarella, chorizo, merguez, uovo.",de:"Mozzarella, Chorizo, Merguez, Ei."}, p:"14,50" },
        { n:"Seguin", d:{fr:"Mozzarella, chèvre, roquette, tomates cerises, miel, noix.",en:"Mozzarella, goat cheese, rocket, cherry tomatoes, honey, walnuts.",es:"Mozzarella, queso de cabra, rúcula, tomate cherry, miel, nueces.",it:"Mozzarella, caprino, rucola, pomodorini, miele, noci.",de:"Mozzarella, Ziegenkäse, Rucola, Kirschtomaten, Honig, Walnüsse."}, p:"15,50" },
        { n:"Carbonara", d:{fr:"Mozzarella, lardons, oignons, œuf, parmesan.",en:"Mozzarella, bacon, onions, egg, parmesan.",es:"Mozzarella, panceta, cebolla, huevo, parmesano.",it:"Mozzarella, pancetta, cipolla, uovo, parmigiano.",de:"Mozzarella, Speck, Zwiebeln, Ei, Parmesan."}, p:"16,00" },
        { n:"Savoyarde", star:true, d:{fr:"Mozzarella, pommes de terre, reblochon, oignons.",en:"Mozzarella, potatoes, reblochon, onions.",es:"Mozzarella, patata, reblochon, cebolla.",it:"Mozzarella, patate, reblochon, cipolla.",de:"Mozzarella, Kartoffeln, Reblochon, Zwiebeln."}, p:"16,00" },
        { n:"Nordique", star:true, d:{fr:"Mozzarella, champignons, saumon fumé.",en:"Mozzarella, mushrooms, smoked salmon.",es:"Mozzarella, champiñones, salmón ahumado.",it:"Mozzarella, funghi, salmone affumicato.",de:"Mozzarella, Champignons, Räucherlachs."}, p:"16,00" },
        { n:"Camembert", d:{fr:"Mozzarella, camembert rôti, coppa, roquette, noisettes, miel, piment d'Espelette.",en:"Mozzarella, roasted camembert, coppa, rocket, hazelnuts, honey, Espelette pepper.",es:"Mozzarella, camembert asado, coppa, rúcula, avellanas, miel, pimiento de Espelette.",it:"Mozzarella, camembert al forno, coppa, rucola, nocciole, miele, peperoncino di Espelette.",de:"Mozzarella, gebackener Camembert, Coppa, Rucola, Haselnüsse, Honig, Espelette-Pfeffer."}, p:"17,50" },
        { n:"Mortadella", star:true, d:{fr:"Mozzarella, figues, mortadelle, roquette, stracciatella, pistache, miel.",en:"Mozzarella, figs, mortadella, rocket, stracciatella, pistachio, honey.",es:"Mozzarella, higos, mortadela, rúcula, stracciatella, pistacho, miel.",it:"Mozzarella, fichi, mortadella, rucola, stracciatella, pistacchio, miele.",de:"Mozzarella, Feigen, Mortadella, Rucola, Stracciatella, Pistazie, Honig."}, p:"18,00" },
      ]}
    ]},

  /* ---------------- DESSERTS ---------------- */
  { id:"desserts", img:"images/cat/desserts.jpg",
    label:G("Desserts","Desserts","Postres","Dolci","Desserts"),
    groups:[
      { title:G("Desserts","Desserts","Postres","Dolci","Desserts"), items:[
        { n:"Mousse au chocolat", d:{fr:"",en:"Chocolate mousse.",es:"Mousse de chocolate.",it:"Mousse al cioccolato.",de:"Schokoladenmousse."}, p:"7,00" },
        { n:"Crème brûlée", p:"7,50" },
        { n:"Gaspacho de fraises", d:{fr:"Menthe et boule de glace vanille.",en:"Strawberry gazpacho, mint and a vanilla scoop.",es:"Gazpacho de fresas, menta y bola de vainilla.",it:"Gazpacho di fragole, menta e pallina di vaniglia.",de:"Erdbeer-Gazpacho, Minze und eine Kugel Vanille."}, p:"8,50" },
        { n:"Saint-Marcellin rôti", d:{fr:"Miel et thym.",en:"Roasted Saint-Marcellin, honey and thyme.",es:"Saint-Marcellin asado, miel y tomillo.",it:"Saint-Marcellin al forno, miele e timo.",de:"Gebackener Saint-Marcellin, Honig und Thymian."}, p:"9,00" },
        { n:"Tarte tatin", d:{fr:"Et boule de glace vanille.",en:"With a vanilla ice-cream scoop.",es:"Con bola de helado de vainilla.",it:"Con pallina di gelato alla vaniglia.",de:"Mit einer Kugel Vanilleeis."}, p:"9,00" },
        { n:"Dessert du moment", d:{fr:"Selon l'inspiration.",en:"Chef's choice of the day.",es:"Según inspiración.",it:"Secondo ispirazione.",de:"Tagesempfehlung."}, p:"8,50" },
        { n:"Gaufre façon profiteroles", d:{fr:"3 boules vanille prises entre morceaux de gaufre, sauce au chocolat, chantilly et amandes effilées.",en:"3 vanilla scoops between waffle pieces, chocolate sauce, whipped cream and flaked almonds.",es:"3 bolas de vainilla entre trozos de gofre, salsa de chocolate, nata y almendras laminadas.",it:"3 palline di vaniglia tra pezzi di waffle, salsa al cioccolato, panna e mandorle a scaglie.",de:"3 Kugeln Vanille zwischen Waffelstücken, Schokosauce, Sahne und Mandelblättchen."}, p:"10,50" },
        { n:"Café gourmand", d:{fr:"",en:"Coffee with mini desserts.",es:"Café con mini postres.",it:"Caffè con mini dolci.",de:"Kaffee mit Mini-Desserts."}, p:"10,50" },
      ]},
      { title:G("Coupes glacées","Ice-cream sundaes","Copas de helado","Coppe gelato","Eisbecher"), note:G("Glaces artisanales & locales.","Artisan, local ice cream.","Helados artesanos y locales.","Gelati artigianali e locali.","Handwerkliches, lokales Eis."), items:[
        { n:"American dream", d:"1 boule vanille, 1 boule peanuts, 1 boule tartinella, coulis de chocolat, chantilly, brownie.", p:"10,00" },
        { n:"Banana split", d:"1 boule vanille, 1 boule fraise, 1 boule chocolat, banane, nappage chocolat, chantilly.", p:"10,00" },
        { n:"Big bang", d:"1 boule framboise, 1 boule litchi, 1 boule pêche, coulis de fruits rouges, chantilly.", p:"9,50" },
        { n:"Café liégeois", d:"2 boules café, 1 boule vanille, café, chantilly.", p:"9,50" },
        { n:"Choco choc", d:"1 boule chocolat noir, 1 boule tartinella, 1 boule K-buena, nappage chocolat, chantilly.", p:"9,50" },
        { n:"Chocolat liégeois", d:"2 boules chocolat, 1 boule vanille, nappage chocolat, chantilly.", p:"9,50" },
        { n:"Dame blanche", d:"3 boules vanille, nappage chocolat, chantilly.", p:"9,50" },
        { n:"Esquirou", d:"1 boule caramel beurre salé, 1 boule vanille, 1 boule spéculoos, nappage caramel beurre salé, chantilly.", p:"9,50" },
        { n:"Exotique", d:"1 boule litchi, 1 boule fruit de la passion, 1 boule noix de coco, purée de passion, chantilly.", p:"9,50" },
      ]},
      { title:G("Coupes avec alcool","Sundaes with alcohol","Copas con alcohol","Coppe con alcol","Eisbecher mit Alkohol"), note:G("À consommer avec modération.","Please drink responsibly.","Consumir con moderación.","Bere con moderazione.","In Maßen genießen."), items:[
        { n:"Antillaise", d:"1 boule rhum-raisins, 1 boule noix de coco, 1 boule fruit de la passion, rhum arrangé mangue-ananas (2cL).", p:"10,50" },
        { n:"Colonel", d:"3 boules citron, vodka (2cL).", p:"10,50" },
        { n:"Mini-coupe", d:"1 boule rhum-raisins + rhum · 1 boule menthe-chocolat + Get 27 · 1 boule citron + limoncello (2cL d'alcool).", p:"6,00" },
      ]},
      { title:G("Parfums au choix","Flavours","Sabores","Gusti","Sorten"), note:G("1 boule 3€ · 2 boules 5,50€ · 3 boules 8€ · Chantilly 1€.","1 scoop €3 · 2 scoops €5.50 · 3 scoops €8 · Whipped cream €1.","1 bola 3€ · 2 bolas 5,50€ · 3 bolas 8€ · Nata 1€.","1 pallina 3€ · 2 palline 5,50€ · 3 palline 8€ · Panna 1€.","1 Kugel 3€ · 2 Kugeln 5,50€ · 3 Kugeln 8€ · Sahne 1€."), items:[
        { n:"Crèmes glacées", d:"Café, caramel beurre salé, chocolat noir, cookie, K-Buenna, licorne, marron glacé, menthe-chocolat, noix de coco, peanuts, pistache, rhum-raisins, spéculoos, stracciatella, tartinella, vanille." },
        { n:"Sorbets", d:"Cassis, citron jaune, fraise, framboise, litchi, fruit de la passion, pêche, poire." },
      ]},
    ]},

  /* ---------------- COCKTAILS ---------------- */
  { id:"cocktails", img:"images/cat/cocktails.jpg",
    label:G("Cocktails","Cocktails","Cócteles","Cocktail","Cocktails"),
    groups:[
      { title:G("Cocktails","Cocktails","Cócteles","Cocktail","Cocktails"), note:G("À consommer avec modération.","Please drink responsibly.","Consumir con moderación.","Bere con moderazione.","In Maßen genießen."), items:[
        { n:"Mojito", d:"Rhum blanc, menthe, citron vert, sirop de sucre, eau gazeuse.", p:"9,50" },
        { n:"Aperol spritz", d:"Aperol, prosecco, eau gazeuse.", p:"9,50" },
        { n:"Hugo spritz", d:"Liqueur de sureau, prosecco, eau gazeuse, citron.", p:"9,50" },
        { n:"Piña colada", d:"Rhum blanc, jus d'ananas, crème de coco, sirop de sucre.", p:"9,50" },
        { n:"Margarita", d:"Téquila, cointreau, citron vert, sel, sirop d'agave.", p:"9,50" },
        { n:"Tequila sunrise", d:"Téquila, crème de cassis, cointreau, orange, citron vert, grenadine.", p:"9,50" },
        { n:"Caïpirinha", d:"Cachaça, citron vert, sirop de sucre.", p:"9,50" },
        { n:"Moscow mule", d:"Vodka, citron, sirop de sucre, ginger beer.", p:"9,50" },
        { n:"Basil smash", d:"Gin, citron jaune, sirop de sucre, basilic.", p:"9,50" },
        { n:"Ti'punch", d:"Rhum blanc, sirop de sucre, citron vert.", p:"9,50" },
        { n:"Violetta", d:"Vodka, sirop de violette, citron vert, limonade.", p:"9,50" },
        { n:"Irish coffee", d:"Whisky Jameson, café, sirop de sucre, chantilly.", p:"9,50" },
        { n:"Espresso martini", d:"Café, vodka, sirop de sucre, kahlua.", p:"11,50" },
        { n:"Negroni", d:"Campari, martini rouge, gin Bombay Sapphire.", p:"11,50" },
        { n:"Old fashioned", d:"Whisky Jack Daniel's, sirop de sucre, bitter.", p:"11,50" },
        { n:"Long island", d:"Vodka, rhum blanc, téquila, gin, cointreau, citron, coca.", p:"11,50" },
        { n:"Pornstar martini", d:"Vodka, purée de passion, ananas, sirop de vanille, prosecco.", p:"11,50" },
        { n:"Naked and famous", d:"Mezcal, aperol, chartreuse jaune, citron jaune.", p:"11,50" },
        { n:"Cocktail du moment", d:{fr:"Voir notre ardoise.",en:"See our blackboard.",es:"Ver nuestra pizarra.",it:"Vedi la lavagna.",de:"Siehe unsere Tafel."} },
      ]},
      { title:G("Mocktails · sans alcool","Mocktails · alcohol-free","Mocktails · sin alcohol","Mocktail · analcolici","Mocktails · alkoholfrei"), note:G("Tous à 7,50€.","All €7.50.","Todos 7,50€.","Tutti 7,50€.","Alle 7,50€."), items:[
        { n:"Virgin mojito", d:"Citron vert, menthe, limonade.", p:"7,50" },
        { n:"Virgin colada", d:"Jus d'ananas, citron vert, coco.", p:"7,50" },
        { n:"Virgin Hugo spritz", d:"Sirop de sureau, tonic, eau pétillante.", p:"7,50" },
        { n:"Apple rose", d:"Jus de pomme et citron, grenadine, limonade.", p:"7,50" },
        { n:"Watermelon color", d:"Jus de pastèque, menthe, citron, eau gazeuse.", p:"7,50" },
        { n:"Limonade aux trois agrumes", d:"Perrier, orange, citrons jaune et vert, sirop de sucre.", p:"7,50" },
      ]},
    ]},

  /* ---------------- BIÈRES & VINS ---------------- */
  { id:"biere_vin", img:"images/cat/biere_vin.jpg",
    label:G("Bières & Vins","Beers & Wines","Cervezas y Vinos","Birre & Vini","Bier & Wein"),
    groups:[
      { title:G("Bières pression","Draught beer","Cerveza de barril","Birra alla spina","Bier vom Fass"), note:G("Verre 25cL / 50cL.","Glass 25cl / 50cl.","Caña 25cl / 50cl.","Bicchiere 25cl / 50cl.","Glas 25cl / 50cl."), items:[
        { n:"Jupiler (blonde) 5,2° · panaché", p:"3,50 / 6,50" },
        { n:"Monaco", p:"3,80 / 7,50" },
        { n:"Picon", p:"4,50 / 8,00" },
        { n:"Kwak (ambrée) 8,4°", p:"5,00 / 9,00" },
        { n:"Chouffe (blonde) 8°", p:"5,00 / 9,00" },
      ]},
      { title:G("Bières bouteille","Bottled beer","Cerveza en botella","Birra in bottiglia","Flaschenbier"), items:[
        { n:"Leffe (blonde) 6,6°", p:"4,50 / 8,00" },
        { n:"Hoegaarden (blanche) 4,2°", p:"4,50 / 8,00" },
        { n:"Desperados (33cL)", p:"5,00" },
        { n:"Chouffe cherry 8° (33cL)", p:"5,00" },
        { n:"Liefmans Fruitesse 3,8° (25cL)", p:"5,00" },
        { n:"Heineken 0% · sans alcool (25cL)", p:"5,00" },
        { n:"Chouffe 0% · sans alcool (33cL)", p:"6,00" },
        { n:"Liefmans Fruitesse 0% (25cL)", p:"6,00" },
      ]},
      { title:G("Vins — au verre & pichet","Wine — glass & pitcher","Vino — copa y jarra","Vino — calice e caraffa","Wein — Glas & Karaffe"), note:G("Rosé Domaine la Clamensane · Blanc & rouge Teres, Le Rouët.","Rosé Domaine la Clamensane · white & red Teres, Le Rouët.","Rosado Domaine la Clamensane · blanco y tinto Teres, Le Rouët.","Rosato Domaine la Clamensane · bianco e rosso Teres, Le Rouët.","Rosé Domaine la Clamensane · Weiß & Rot Teres, Le Rouët."), items:[
        { n:"Verre (12cL)", p:"3,50" },
        { n:"Rosé piscine (16cL + glaçons)", p:"4,50" },
        { n:"Pichet 50cL", p:"12,00" },
        { n:"Pichet 1L", p:"20,00" },
      ]},
      { title:G("Vins — bouteilles (Côtes de Provence)","Wine — bottles (Côtes de Provence)","Vino — botellas (Côtes de Provence)","Vino — bottiglie (Côtes de Provence)","Wein — Flaschen (Côtes de Provence)"), items:[
        { n:"Château du Rouët — Belle Poule", d:"Verre 12cL 5€ · Bouteille 75cL 27€.", p:"" },
        { n:"Château de Berne — BIO", d:"Verre 12cL 7-8€ · Bouteille 75cL 25 à 45€.", p:"" },
        { n:"Domaine Tarriquet — Premières Grives (blanc)", d:"Verre 12cL 5,50€ · Bouteille 75cL 28€.", p:"" },
      ]},
      { title:G("Champagne & prosecco","Champagne & prosecco","Champán y prosecco","Champagne & prosecco","Champagner & Prosecco"), items:[
        { n:"Coupe de prosecco (10cL)", p:"5,00" },
        { n:"Coupe de champagne (12cL)", p:"9,50" },
        { n:"Champagne Daniel Lapie (75cL)", p:"60,00" },
        { n:"Champagne Ruinart (75cL)", p:"120,00" },
      ]},
      { title:G("Apéritifs","Aperitifs","Aperitivos","Aperitivi","Aperitifs"), items:[
        { n:"Pastis ou Ricard (2cL)", p:"3,50" },
        { n:"Martini blanc ou rouge (5cL)", p:"5,00" },
        { n:"Porto, Pineau des Charentes (8cL)", p:"5,00" },
        { n:"Kir vin blanc (14cL)", p:"5,50" },
        { n:"Suze, Campari (4cL)", p:"6,00" },
        { n:"Sangria ou Punch maison", p:"6,00" },
        { n:"Kir royal (14cL)", p:"11,50" },
      ]},
      { title:G("Digestifs & spiritueux","Digestifs & spirits","Digestivos y licores","Digestivi & distillati","Digestifs & Spirituosen"), note:G("4cL · Supplément soda 2€.","4cl · Soda extra €2.","4cl · Refresco +2€.","4cl · Soda +2€.","4cl · Soda +2€."), items:[
        { n:"Get 27, Limoncello, Rhum arrangé", p:"6,00" },
        { n:"Armagnac, Calvados, Cognac", p:"7,00" },
        { n:"Whisky Jack Daniel's, Gin Bombay Sapphire", p:"8,00" },
        { n:"Gin Tanqueray, Rhum Kraken, Glenmorangie, Vodka Belvedere", p:"10,00" },
      ]},
    ]},

  /* ---------------- SANS ALCOOL / CAFÉS ---------------- */
  { id:"softs", img:"images/cat/softs.jpg",
    label:G("Softs & Cafés","Softs & Coffee","Refrescos y Cafés","Analcolici & Caffè","Softs & Kaffee"),
    groups:[
      { title:G("Sodas","Soft drinks","Refrescos","Bibite","Softdrinks"), items:[
        { n:"Sodas au choix (33cL)", d:"Coca-cola, zéro, cherry, Fanta, Fuze Tea, Limonade, Oasis, Orangina, Perrier, Pulco, Schweppes.", p:"3,40" },
        { n:"Red-Bull (25cL)", p:"4,00" },
        { n:"Ginger beer (25cL)", p:"4,50" },
      ]},
      { title:G("Eaux","Water","Aguas","Acque","Wasser"), items:[
        { n:"Evian 50cL", p:"4,00" },
        { n:"San Pellegrino 50cL", p:"4,50" },
        { n:"Evian 1L", p:"6,00" },
        { n:"San Pellegrino 1L", p:"7,50" },
      ]},
      { title:G("Jus & smoothies","Juices & smoothies","Zumos y smoothies","Succhi & smoothie","Säfte & Smoothies"), items:[
        { n:"Jus (20cL)", d:"Abricot, ACE, ananas, orange, pomme, tomate.", p:"3,50" },
        { n:"Jus d'orange pressée (20cL)", p:"6,00" },
        { n:"Smoothie (25cL)", d:{fr:"Deux fruits au choix : mangue, ananas, kiwi, fraise ou banane.",en:"Two fruits of choice: mango, pineapple, kiwi, strawberry or banana.",es:"Dos frutas a elegir: mango, piña, kiwi, fresa o plátano.",it:"Due frutti a scelta: mango, ananas, kiwi, fragola o banana.",de:"Zwei Früchte zur Wahl: Mango, Ananas, Kiwi, Erdbeere oder Banane."}, p:"6,00" },
      ]},
      { title:G("Cafétérie","Coffee & tea","Cafetería","Caffetteria","Kaffee & Tee"), items:[
        { n:"Espresso", p:"2,00" },
        { n:"Allongé, noisette, décaféiné", p:"2,20" },
        { n:"Café glacé", p:"2,50" },
        { n:"Grand crème", p:"3,20" },
        { n:"Cappuccino, double espresso, grand crème déca.", p:"3,50" },
        { n:"Chocolat chaud", p:"3,50" },
        { n:"Flat white", p:"4,00" },
        { n:"Chocolat ou café viennois", p:"4,00" },
        { n:"Thé ou infusion Dammann", p:"4,20" },
        { n:"Café frappé", p:"4,50" },
        { n:"Latte macchiato", p:"4,50" },
        { n:"Chaï latte", d:"Lait infusé au thé noir et épices.", p:"5,00" },
      ]},
      { title:G("Sirops","Cordials","Siropes","Sciroppi","Sirupe"), note:G("Cassis, citron, fraise, grenadine, menthe, orgeat, pamplemousse, pêche, rose, violette…","Blackcurrant, lemon, strawberry, grenadine, mint, orgeat, grapefruit, peach, rose, violet…","Grosella, limón, fresa, granadina, menta, horchata, pomelo, melocotón, rosa, violeta…","Ribes, limone, fragola, granatina, menta, orzata, pompelmo, pesca, rosa, viola…","Cassis, Zitrone, Erdbeere, Grenadine, Minze, Mandel, Grapefruit, Pfirsich, Rose, Veilchen…"), items:[
        { n:"Sirop à l'eau (25cL / 50cL)", p:"2,50 / 4,50" },
        { n:"Diabolo — sirop + limonade (25cL / 50cL)", p:"3,20 / 6,00" },
      ]},
    ]},
];
