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

const ResoWallPhotos = {
  black: require("../assets/assortment/ResoWall/main_black.webp"),
};
const ResoDeskPhotos = {
  black: require("../assets/assortment/ResoDesk/main_black.webp"),
};
const ResoDeskDuoPhotos = {
  black: require("../assets/assortment/ResoDeskDuo/main_black.webp"),
};

const PegHoldPhotos = {
  black: require("../assets/assortment/PegHold/main_black.webp"),
  white: require("../assets/assortment/PegHold/main_white.webp"),
};

const AquaTrayPhotos = {
  white: require("../assets/assortment/AquaTray/main_white.webp"),
};

const PegGlowFPhotos = {
  black: require("../assets/assortment/PegGlowF/main_black.webp"),
  white: require("../assets/assortment/PegGlowF/main_white.webp"),
};

const PegGlowTPhotos = {
  black: require("../assets/assortment/PegGlowT/main_black.webp"),
  white: require("../assets/assortment/PegGlowT/main_white.webp"),
};

const PegWavePhotos = {
  black: require("../assets/assortment/PegWave/main_black.webp"),
  white: require("../assets/assortment/PegWave/main_white.webp"),
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
  {
    name: "Stojak Ekspozytor naścienny na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv24S",
    maxWords: 3,
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: ResoWallPhotos.black,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1863827561/wall-mounting-display-stand-support?ref=shop_home_feat_3&sts=1&logging_key=8a154a9ba996d195b59a5f730e66461c6d45854f%3A1863827561",
          },
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/stojak-statyw-ekspozytor-organizer-karty-resoraki-hot-wheels-itp-nascienny-17161511948",
          },
        ],
      },
    ],
    price: 139.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    name: "Stojak Ekspozytor nabiurkowy pojedynczy na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv24",
    maxWords: 4,
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: ResoDeskPhotos.black,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1741719137/display-stand-support-shelf-storage-for?ref=shop_home_feat_2&sts=1&logging_key=91925d2e7d8dc391b180d0f908f5036afc81217d%3A1741719137&variation0=4537491028",
          },
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/stojak-statyw-ekspozytor-polka-na-karty-resoraki-hot-wheels-itp-pojedynczy-15702815032",
          },
        ],
      },
    ],
    price: 89.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    name: "Stojak Ekspozytor nabiurkowy podwójny na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv48",
    maxWords: 4,
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: ResoDeskDuoPhotos.black,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1741719137/display-stand-support-shelf-storage-for?ref=shop_home_feat_2&sts=1&logging_key=91925d2e7d8dc391b180d0f908f5036afc81217d%3A1741719137&variation0=4537491032",
          },
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/stojak-statyw-ekspozytor-polka-na-karty-resoraki-hot-wheels-itp-podwojny-15727339316",
          },
        ],
      },
    ],
    price: 119.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    name: "Ociekacz na zlew IKEA Havsen – Ikea Havsen Drainer",
    maxWords: 5,
    colors: [
      {
        name: "biały",
        nameEn: "white",
        photo: AquaTrayPhotos.white,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1560620914/ikea-havsen-ociekacz-drainer?ref=shop_home_active_3&crt=1&sts=1&logging_key=4b2e31b9019b1e1fb3cd0889fa85529dd6e0e7fa%3A1560620914",
          },
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/ociekacz-tacka-pod-zlew-ikea-havsen-oslona-przed-zamakaniem-blatu-bialy-15610899313",
          },
        ],
      },
    ],
    price: 49.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    name: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS ",
    maxWords: 9,
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: PegHoldPhotos.black,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1671729171/ikea-skadis-pegboard-lego-icons-10329?ref=shop_home_active_6&sts=1&logging_key=cbcc4d534732f0fea6c52b5b8b77450c936997ed%3A1671729171&variation0=4254877844",
          },
        ],
      },
      {
        name: "biały",
        nameEn: "white",
        photo: PegHoldPhotos.white,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1671729171/ikea-skadis-pegboard-lego-icons-10329?ref=shop_home_active_6&sts=1&logging_key=cbcc4d534732f0fea6c52b5b8b77450c936997ed%3A1671729171&variation0=4275188231",
          },
        ],
      },
    ],
    price: 66.73,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    name: "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA",
    maxWords: 9,
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: PegGlowFPhotos.black,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1560634338/ikea-skadis-pegboard-forsa-lamp-mount?ref=shop_home_active_1&crt=1&sts=1&logging_key=06b8e8c06d8e7d43c50d2449bd670dd04093606e%3A1560634338&variation0=4284167339",
          },
        ],
      },
      {
        name: "biały",
        nameEn: "white",
        photo: PegGlowFPhotos.white,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1560634338/ikea-skadis-pegboard-forsa-lamp-mount?ref=shop_home_active_1&crt=1&sts=1&logging_key=06b8e8c06d8e7d43c50d2449bd670dd04093606e%3A1560634338&variation0=4284167341",
          },
        ],
      },
    ],
    price: 26.69,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    name: "Uchwyt na lampę IKEA TERTAIL pod tablicę IEKA SKADIS – IKEA SKADIS TERTAIL ",
    maxWords: 9,
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: PegGlowTPhotos.black,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1560644314/ikea-skadis-pegboard-tertail-lamp-mount?ref=shop_home_active_4&sts=1&logging_key=5cd22173e64a6e383d07c2448abe1321ba42dc08%3A1560644314&variation0=3883325660",
          },
        ],
      },
      {
        name: "biały",
        nameEn: "white",
        photo: PegGlowTPhotos.white,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1560644314/ikea-skadis-pegboard-tertail-lamp-mount?ref=shop_home_active_4&sts=1&logging_key=5cd22173e64a6e383d07c2448abe1321ba42dc08%3A1560644314&variation0=3883325658",
          },
        ],
      },
    ],
    price: 37.98,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    name: "Uchwyt na słuchawki pod tablicę IEKA SKADIS – IKEA SKADIS HEADPHONE",
    maxWords: 7,
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: PegWavePhotos.black,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1642764508/ikea-skadis-pegboard-headphone-gaming?ref=shop_home_active_10&sts=1&logging_key=7909892dc0ce11ead0403111f0394cdf3cc65592%3A1642764508&variation0=4199194574",
          },
        ],
      },
      {
        name: "biały",
        nameEn: "white",
        photo: PegWavePhotos.white,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/1642764508/ikea-skadis-pegboard-headphone-gaming?ref=shop_home_active_10&sts=1&logging_key=7909892dc0ce11ead0403111f0394cdf3cc65592%3A1642764508&variation0=4199194576",
          },
        ],
      },
    ],
    price: 34.41,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
];
