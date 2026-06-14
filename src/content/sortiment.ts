export interface SortimentItem {
  name: string;
  description?: string;
  price?: string;
}

export interface SortimentCategory {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverAlt: string;
  items: SortimentItem[];
  galleryAlts: string[];
}

export const sortimentCategories: SortimentCategory[] = [
  {
    slug: "brod",
    title: "Bröd",
    subtitle: "Stenat i vår stenugn",
    description:
      "Vi bakar allt bröd med ekologiska råvaror och lång jäsning för en djup, komplex smak. Vår stenugn ger brödet en krispig skorpa och ett saftigt inkräm som håller sig fräscht under hela dagen.",
    coverAlt: "Nybakat surdegsbröd ur stenugnen",
    items: [
      {
        name: "Surdegsbröd på råg",
        description: "Mörkt rågbröd med lång fermentering och djup smak.",
        price: "79 kr",
      },
      {
        name: "Surdegsbröd på vete",
        description: "Ljust vetesurdegsbröd med öppen smula och knaprig skorpa.",
        price: "75 kr",
      },
      {
        name: "Levain",
        description: "Klassisk fransk levain med mild syra och elastisk deg.",
        price: "79 kr",
      },
      {
        name: "Focaccia",
        description: "Generöst drizzlad med olivolja och flingsalt. Dagligen färsk.",
        price: "55 kr",
      },
    ],
    galleryAlts: [
      "TODO: foto av surdegsbröd på skärbräda",
      "TODO: foto av råg­bröd i närbild",
      "TODO: foto av brödkorgen i butiken",
      "TODO: foto av stenugnen med bröd inne",
    ],
  },
  {
    slug: "bakverk",
    title: "Bakverk",
    subtitle: "Hantverk i varje lager",
    description:
      "Från flagnande croissanter till saftiga semlor — alla bakverk görs för hand med smör och ekologisk vetemjöl. Vi följer årstiderna: semlor på vintern, jordgubbstårta på sommaren.",
    coverAlt: "Croissanter och bakverk på disken",
    items: [
      {
        name: "Croissant",
        description: "Butterig, flagnande, gjord på ekologiskt smör.",
        price: "42 kr",
      },
      {
        name: "Kardemummabulle",
        description: "Vår signature-bulle. Generöst med kardemumma och farinsocker.",
        price: "35 kr",
      },
      {
        name: "Kanelbulle",
        description: "Klassisk kanelbulle med kanel, smör och pärlsocker.",
        price: "32 kr",
      },
      {
        name: "Semla",
        description: "Traditionell semla med mandelmassa och vispgrädde. Säsongsvara.",
        price: "55 kr",
      },
      {
        name: "Mazarin",
        description: "Friterad mandelkaka med florsocker och citronskal.",
        price: "38 kr",
      },
      {
        name: "Chokladboll",
        description: "Klassisk havreboll med kokos och riktig kakao.",
        price: "22 kr",
      },
    ],
    galleryAlts: [
      "TODO: foto av croissant i närbild, flagnande lager",
      "TODO: foto av kardemummabullarna i korg",
      "TODO: foto av semlor på bricka",
      "TODO: foto av bakverk sortiment ovanifrån",
    ],
  },
  {
    slug: "smorgasar",
    title: "Smörgåsar",
    subtitle: "Frukost & lunch",
    description:
      "Varje smörgås byggs på eget surdegsbröd och råvaror från lokala leverantörer. Vi strävar efter enkla kombinationer som smakar precis som de låter. Frukost serveras från öppning till 10:30, lunch hela dagen.",
    coverAlt: "Smörgåsar på marmordisken",
    items: [
      {
        name: "Frukostsmörgås",
        description: "Surdegsbröd, smör, ost och gurka. Enkel och rätt.",
        price: "65 kr",
      },
      {
        name: "Laxsmörgås",
        description: "Kallrökt lax, crème fraîche, kapris och rödlök.",
        price: "95 kr",
      },
      {
        name: "Avokadosmörgås",
        description: "Avokado, citron, flingsalt och chiliflakes.",
        price: "85 kr",
      },
      {
        name: "Ostsmörgås",
        description: "Prästost, senap och inlagd gurka på rostat levain.",
        price: "72 kr",
      },
      {
        name: "Soppa",
        description: "Dagens soppa — varierar med säsong. Serveras med bröd.",
        price: "95 kr",
      },
    ],
    galleryAlts: [
      "TODO: foto av laxsmörgås ovanifrån på marmor",
      "TODO: foto av frukostbord med smörgåsar och kaffe",
      "TODO: foto av soppa i keramikskål",
      "TODO: foto av smörgåsarna i monterdisken",
    ],
  },
  {
    slug: "kaffe",
    title: "Kaffe & dryck",
    subtitle: "Kaffet som hör till",
    description:
      "Vi serverar kaffe från noggrant utvalda rosterier. Espresso, filtrekaffe, cappuccino och latte — allt med ekologisk mjölk. På kalla dagar rekommenderar vi varm choklad gjord på mörk kakao.",
    coverAlt: "Kaffekopp på marmorskiva",
    items: [
      { name: "Espresso", price: "32 kr" },
      { name: "Cappuccino", price: "48 kr" },
      { name: "Latte", price: "52 kr" },
      { name: "Filtrekaffe", price: "38 kr" },
      { name: "Varm choklad", price: "52 kr" },
      { name: "Te", description: "Ekologiska téblandningar.", price: "38 kr" },
    ],
    galleryAlts: [
      "TODO: foto av cappuccino i keramikmugg uppifrån",
      "TODO: foto av kaffekoppar på disk",
    ],
  },
  {
    slug: "pizzakvall",
    title: "Pizzakväll",
    subtitle: "Varje fredag",
    description:
      "På fredagskvällar förvandlas bageriet. Vi eldar upp stenugnen och bakar pizza på vår surdegsdeg — en naturlig förlängning av brödbaket. Varje vecka en ny pizza, alltid med säsongens råvaror. Följ oss på Instagram för veckans pizza.",
    coverAlt: "Pizza ur stenugnen på fredagskvällen",
    items: [
      {
        name: "Veckans pizza",
        description:
          "Komponeras varje vecka med säsongens råvaror och vår surdegsdeg som bas. Se @nockeby_bageri för veckans val.",
        price: "från 145 kr",
      },
    ],
    galleryAlts: [
      "TODO: foto av pizza ur stenugnen",
      "TODO: foto av pizzan ovanifrån på träskärbräda",
      "TODO: foto av interiören på fredagskvällen med gäster",
    ],
  },
];

export function getCategoryBySlug(slug: string): SortimentCategory | undefined {
  return sortimentCategories.find((c) => c.slug === slug);
}
