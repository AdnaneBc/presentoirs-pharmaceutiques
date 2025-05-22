export interface Product {
  id: number;
  name: string;
  imgUrl: string;
}

export interface Category {
  id: number;
  categorie: string;
  color: string;
  products: Product[];
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    categorie: "Lancement",
    color: "#0066b3",
    products: [],
  },
  {
    id: 2,
    categorie: "Métabolisme energie",
    color: "#ff5400", // matte yellow
    products: [
      {
        id: 1,
        name: "Nurax®",
        imgUrl: require("../products/metabolisme-energie/nurax-Cpr-SB.jpg"),
      },
      {
        id: 2,
        name: "Apenat®",
        imgUrl: require("../products/metabolisme-energie/apenat.jpg"),
      },
      {
        id: 3,
        name: "Nurax® Tonus",
        imgUrl: require("../products/metabolisme-energie/nurax-tonus.jpg"),
      },
      {
        id: 4,
        name: "maxitone ampoules buvables",
        imgUrl: require("../products/metabolisme-energie/maxitone-ampoules.jpg"),
      },
      {
        id: 5,
        name: "maxitone comprimés effervescants",
        imgUrl: require("../products/metabolisme-energie/maxitone-effervescent.jpg"),
      },

      {
        id: 6,
        name: "neovimag plus",
        imgUrl: require("../products/metabolisme-energie/neovimag-plus.jpg"),
      },
      {
        id: 7,
        name: "theramag 375",
        imgUrl: require("../products/metabolisme-energie/theramag375.jpg"),
      },
    ],
  },
  {
    id: 3,
    categorie: "Gastro entérologie",
    color: "#009944", // matte red
    products: [
      {
        id: 1,
        name: "Kalmagas®",
        imgUrl: require("../products/gastro-enterologie/kalmagas-cpr.jpg"),
      },
      {
        id: 2,
        name: "Carboxane®",
        imgUrl: require("../products/gastro-enterologie/carboxane.jpg"),
      },
      {
        id: 3,
        name: "Carbosorb®",
        imgUrl: require("../products/gastro-enterologie/carbosorb-cpr.jpg"),
      },
      {
        id: 2,
        name: "Carbosorb® digest",
        imgUrl: require("../products/gastro-enterologie/carbosorb-digest.jpg"),
      },
      {
        id: 5,
        name: "rectolax",
        imgUrl: require("../products/gastro-enterologie/rectolax.jpg"),
      },
      {
        id: 6,
        name: "ircolax",
        imgUrl: require("../products/gastro-enterologie/ircolax.jpg"),
      },
      {
        id: 7,
        name: "Gingerax® comprimés",
        imgUrl: require("../products/gastro-enterologie/gingerax-cpr.jpg"),
      },
      {
        id: 8,
        name: "Gingerax® Solution buvable",
        imgUrl: require("../products/gastro-enterologie/gingerax-sb.jpg"),
      },
      {
        id: 9,
        name: "Vagadys®",
        imgUrl: require("../products/gastro-enterologie/vagadys.jpg"),
      },
      {
        id: 7,
        name: "Neobiline® Digest",
        imgUrl: require("../products/gastro-enterologie/neobiline-digest.jpg"),
      },
    ],
  },
  {
    id: 4,
    categorie: "Gynécologie",
    color: "#ff99c8", // matte orange
    products: [
      {
        id: 1,
        name: "candidax ovules",
        imgUrl: require("../products/gynecologie/candidax-ovules.jpg"),
      },
    ],
  },

  {
    id: 5,
    categorie: "Système respiratoire",
    color: "#F7931E", // pastel green
    products: [
      {
        id: 1,
        name: "apixol sirop",
        imgUrl: require("../products/systeme-respiratoire/apixol-sirop.jpg"),
      },
      {
        id: 2,
        name: "apixol comprimés à sucer",
        imgUrl: require("../products/systeme-respiratoire/apixol-cpr.jpg"),
      },
      {
        id: 3,
        name: "apixol spray",
        imgUrl: require("../products/systeme-respiratoire/apixol-spray.jpg"),
      },
      {
        id: 4,
        name: "fitopolis sirop",
        imgUrl: require("../products/systeme-respiratoire/fitopolis-sirop.jpg"),
      },
      {
        id: 5,

        name: "fitopolis comprimés à sucer",
        imgUrl: require("../products/systeme-respiratoire/fitopolis-cs.jpg"),
      },
      {
        id: 6,
        name: "fitopolis spray",
        imgUrl: require("../products/systeme-respiratoire/fitopolis-spray.jpg"),
      },
      {
        id: 7,
        name: "fitorax sirop",
        imgUrl: require("../products/systeme-respiratoire/fitorax-sirop.jpg"),
      },
      {
        id: 8,
        name: "fitorax comprimés à sucer",
        imgUrl: require("../products/systeme-respiratoire/fitorax-cs.jpg"),
      },
      {
        id: 9,
        name: "fitorax spray",
        imgUrl: require("../products/systeme-respiratoire/fitorax-spray.jpg"),
      },
      {
        id: 10,
        name: "tossedyl",
        imgUrl: require("../products/systeme-respiratoire/tossedyl.jpg"),
      },
      {
        id: 11,
        name: "rhinolaya",
        imgUrl: require("../products/systeme-respiratoire/rhinolaya-gamme.jpg"),
      },
      {
        id: 12,
        name: "nobios",
        imgUrl: require("../products/systeme-respiratoire/nobios.jpg"),
      },
      {
        id: 13,
        name: "neovizinc",
        imgUrl: require("../products/systeme-respiratoire/neovizinc.jpg"),
      },
    ],
  },
];
