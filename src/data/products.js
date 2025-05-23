// Grupy zdjęć dla serii/modeli
const TSv3Photos = {
  black: require("../assets/assortment/TSv3/main_black.webp"),
  white: require("../assets/assortment/TSv3/main_white.webp"),
  grey: require("../assets/assortment/TSv3/main_grey.webp"),
};

const TSv4Photos = {
  black: require("../assets/assortment/TSv4/main_black.webp"),
  white: require("../assets/assortment/TSv4/main_white.webp"),
  grey: require("../assets/assortment/TSv4/main_grey.webp"),
};

const TSv4ProPhotos = {
  black: require("../assets/assortment/TSv4Pro/main_black.webp"),
  white: require("../assets/assortment/TSv4Pro/main_white.webp"),
  grey: require("../assets/assortment/TSv4Pro/main_grey.webp"),
};

export const products = [
  {
    name: "Podstawka pod Thermomix TM5 TM6 TSv3",
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: TSv3Photos.black,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1569555547/rolling-thermomix-holder-wheel-stand?ref=shop_home_feat_1&sts=1&logging_key=6e83f44eeb68343418187b885fdf414dfa16db3c%3A1569555547&variation0=3875127521",
          },
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/podstawka-deska-tacka-z-kolkami-pod-thermomix-termomiks-tm5-tm6-czarna-tsv3-14871615902",
          },
        ],
      },
      {
        name: "biały",
        nameEn: "white",
        photo: TSv3Photos.white,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1569555547/rolling-thermomix-holder-wheel-stand?ref=shop_home_feat_1&sts=1&logging_key=6e83f44eeb68343418187b885fdf414dfa16db3c%3A1569555547&variation0=3920039391",
          },
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/podstawka-deska-tacka-z-kolkami-pod-thermomix-termomiks-tm5-tm6-biala-tsv3-14871690760",
          },
        ],
      },
      {
        name: "szary",
        nameEn: "grey",
        photo: TSv3Photos.grey,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1569555547/rolling-thermomix-holder-wheel-stand?ref=shop_home_feat_1&sts=1&logging_key=6e83f44eeb68343418187b885fdf414dfa16db3c%3A1569555547&variation0=4062231410",
          },
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/podstawka-deska-tacka-z-kolkami-pod-thermomix-termomiks-tm5-tm6-szara-tsv3-15314429429",
          },
        ],
      },
    ],
    price: 109.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    name: "Podstawka pod Thermomix TM5 TM6 TSv4",
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: TSv4Photos.black,
        shoppingPlatform: [
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/podstawka-deska-tacka-z-kolkami-pod-thermomix-termomiks-tm5-tm6-czarna-tsv4-16483396827",
          },
        ],
      },
      {
        name: "biały",
        nameEn: "white",
        photo: TSv4Photos.white,
        shoppingPlatform: [
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/podstawka-deska-tacka-z-kolkami-pod-thermomix-termomiks-tm5-tm6-biala-tsv4-16483422090",
          },
        ],
      },
      {
        name: "szary",
        nameEn: "grey",
        photo: TSv4Photos.grey,
        shoppingPlatform: [
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/podstawka-deska-tacka-z-kolkami-pod-thermomix-termomiks-tm5-tm6-szara-tsv4-16483365867",
          },
        ],
      },
    ],
    price: 109.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    name: "Podstawka pod Thermomix TM5 TM6 TSv4PRO",
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: TSv4ProPhotos.black,
        shoppingPlatform: [
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/podstawka-deska-z-kolkami-pod-thermomix-termomiks-tm5-tm6-czarna-tsv4pro-16483479087",
          },
        ],
      },
      {
        name: "biały",
        nameEn: "white",
        photo: TSv4ProPhotos.white,
        shoppingPlatform: [
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/podstawka-deska-z-kolkami-pod-thermomix-termomiks-tm5-tm6-biala-tsv4pro-16483439788",
          },
        ],
      },
      {
        name: "szary",
        nameEn: "grey",
        photo: TSv4ProPhotos.grey,
        shoppingPlatform: [
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/podstawka-deska-z-kolkami-pod-thermomix-termomiks-tm5-tm6-szara-tsv4pro-16483500243",
          },
        ],
      },
    ],
    price: 189.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
];
