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
  black: require("../assets/assortment/TSv4PRO/main_black.webp"),
  white: require("../assets/assortment/TSv4PRO/main_white.webp"),
  grey: require("../assets/assortment/TSv4PRO/main_grey.webp"),
};

const HWSv24SPhotos = {
  black: require("../assets/assortment/HWSv24S/main_black.webp"),
};
const HWSv24Photos = {
  black: require("../assets/assortment/HWSv24/main_black.webp"),
};
const HWSv48Photos = {
  black: require("../assets/assortment/HWSv48/main_black.webp"),
};

const HWSv12NSPhotos = {
  black: require("../assets/assortment/HWSv12NS/main_black.webp"),
};

const IkeaSkadisLegoTinyPlantsPhotos = {
  black: require("../assets/assortment/IkeaSkadisLegoTinyPlants/main_black.webp"),
  white: require("../assets/assortment/IkeaSkadisLegoTinyPlants/main_white.webp"),
};

const IkeaHavsenDrainerPhotos = {
  white: require("../assets/assortment/IkeaHavsenDrainer/main_white.webp"),
};

const IkeaSkadisForsaPhotos = {
  black: require("../assets/assortment/IkeaSkadisForsa/main_black.webp"),
  white: require("../assets/assortment/IkeaSkadisForsa/main_white.webp"),
};

const IkeaSkadisTertailPhotos = {
  black: require("../assets/assortment/IkeaSkadisTertail/main_black.webp"),
  white: require("../assets/assortment/IkeaSkadisTertail/main_white.webp"),
};

const IkeaSkadisHeadphonePhotos = {
  black: require("../assets/assortment/IkeaSkadisHeadphone/main_black.webp"),
  white: require("../assets/assortment/IkeaSkadisHeadphone/main_white.webp"),
};

const AdapterAntilopPhotos = {
  white: require("../assets/assortment/AdapterAntilop/main_white.webp"),
};

const F1Photos = {
  black: require("../assets/assortment/F1/main_black.webp"),
};

export const products = [
  {
    id: 14,
    name: "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
    fullname:
      "Stojak ekspozytor organizer Hot Wheels, RLC itp. samoprzylepny nabiurkowy",
    slug: "stojak-ekspozytor-organizer-hot-wheels-rlc-itp-samoprzylepny-nabiurkowy",
    component: "HWSv12NS",
    maxWords: 6,
    badge: "new",
    thumbnailObjectPosition: "center center",
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: HWSv12NSPhotos.black,
        shoppingPlatform: [
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/stojak-ekspozytor-organizer-hot-wheels-rlc-itp-samoprzylepny-nabiurkowy-17719766335",
          },
        ],
      },
    ],
    price: 79.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    id: 13,
    name: "Stojak Mocowanie Podst. obrotowa na LEGO ICONS 71049 Samochody Wyścigowe F1",
    fullname:
      "Stojak Mocowanie Podst. obrotowa na LEGO ICONS 71049 Samochody Wyścigowe F1",
    slug: "stojak-mocowanie-podstawka-obrotowana-lego-icons-71049-samochody-wyścigowe-f1",
    component: "F1",
    maxWords: 6,
    badge: "new",
    thumbnailObjectPosition: "center center",
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: F1Photos.black,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/4330369366/stand-base-stick-on-lego-minifigures?ref=shop_home_active_1&sts=1&logging_key=5499573baf382eb7156281ca1cfeef9696b1337e%3A4330369366",
          },
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/stojak-mocowanie-podst-obrotowa-na-lego-icons-71049-samochody-wyscigowe-f1-17689454402",
          },
        ],
      },
    ],
    price: 14.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    id: 12,
    name: "Adapter z kółkami pod fotelik krzesełko IKEA Antilop - moduł rozbudowujący",
    fullname:
      "Adapter z kółkami pod fotelik krzesełko IKEA Antilop - moduł rozbudowujący",
    slug: "adapter-z-kolkami-pod-fotelik-krzeselko-ikea-antilop-modul-rozbudowujacy",
    component: "AdapterAntilop",
    maxWords: 5,
    badge: "new",
    colors: [
      {
        name: "biały",
        nameEn: "white",
        photo: AdapterAntilopPhotos.white,
        shoppingPlatform: [
          {
            name: "Etsy",
            link: "https://www.etsy.com/pl/listing/4315151343/adapters-with-wheels-for-ikea-antilop?ref=shop_home_active_1&sts=1&logging_key=5eb0465c91d902ae487909ff705dfcab9cef7e6c%3A4315151343",
          },
          {
            name: "Allegro",
            link: "https://allegro.pl/oferta/adapter-z-kolkami-pod-fotelik-krzeselko-ikea-antilop-modul-rozbudowujacy-17612155556",
          },
        ],
      },
    ],
    price: 159.0,
    get priceStringPl() {
      return this.price.toLocaleString("pl-PL", {
        style: "currency",
        currency: "PLN",
      });
    },
  },
  {
    id: 1,
    name: "Podstawka pod Thermomix TM5 TM6 TSv3",
    fullname:
      "Podstawka deska tacka z kółkami pod Thermomix Termomiks TM5 TM6 TSv3",
    slug: "podstawka-deska-tacka-z-kółkami-pod-thermomix-termomiks-tm5-tm6-tsv3",
    component: "TSv3",
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
    id: 2,
    name: "Podstawka pod Thermomix TM5 TM6 TSv4",
    fullname:
      "Podstawka deska tacka z kółkami pod Thermomix Termomiks TM5 TM6 TSv4",
    slug: "podstawka-deska-tacka-z-kółkami-pod-thermomix-termomiks-tm5-tm6-tsv4",
    component: "TSv4",
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
    id: 3,
    name: "Podstawka pod Thermomix TM5 TM6 TSv4PRO",
    fullname:
      "Podstawka deska tacka z kółkami pod Thermomix Termomiks TM5 TM6 TSv4PRO",
    slug: "podstawka-deska-tacka-z-kółkami-pod-thermomix-termomiks-tm5-tm6-tsv4pro",
    component: "TSv4PRO",
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
    id: 4,
    name: "Stojak Ekspozytor naścienny na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv24S",
    fullname:
      "Stojak Ekspozytor naścienny na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv24S",
    slug: "stojak-ekspozytor-naścienny-na-karty-resoraki-hot-wheels-matchbox-majorette-hwsv24s",
    component: "HWSv24S",
    maxWords: 3,
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: HWSv24SPhotos.black,
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
    id: 5,
    name: "Stojak Ekspozytor nabiurkowy pojedynczy na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv24",
    fullname:
      "Stojak Ekspozytor nabiurkowy pojedynczy na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv24",
    slug: "stojak-ekspozytor-nabiurkowy-pojedynczy-na-karty-resoraki-hot-wheels-matchbox-majorette-hwsv24",
    component: "HWSv24",
    maxWords: 4,
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: HWSv24Photos.black,
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
    id: 6,
    name: "Stojak Ekspozytor nabiurkowy podwójny na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv48",
    fullname:
      "Stojak Ekspozytor nabiurkowy podwójny na karty / resoraki HOT WHEELS, Matchbox, Majorette itp. HWSv48",
    slug: "stojak-ekspozytor-nabiurkowy-podwójny-na-karty-resoraki-hot-wheels-matchbox-majorette-hwsv48",
    component: "HWSv48",
    maxWords: 4,
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: HWSv48Photos.black,
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
    id: 7,
    name: "Ociekacz na zlew IKEA Havsen – Ikea Havsen Drainer",
    fullname: "Ociekacz na zlew IKEA Havsen – Ikea Havsen Drainer",
    slug: "ociekacz-na-zlew-ikea-havsen-ikea-havsen-drainer",
    component: "IkeaHavsenDrainer",
    thumbnailObjectPosition: "center center",
    maxWords: 5,
    colors: [
      {
        name: "biały",
        nameEn: "white",
        photo: IkeaHavsenDrainerPhotos.white,
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
    id: 8,
    name: "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS ",
    fullname:
      "Uchwyt na małe roślinki LEGO pod tablicę IEKA SKADIS – IKEA SKADIS LEGO TINY PLANTS",
    slug: "uchwyt-na-male-roslinki-lego-pod-tablice-ikea-skadis-ikea-skadis-lego-tiny-plants",
    component: "IkeaSkadisLegoTinyPlants",
    maxWords: 7,
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: IkeaSkadisLegoTinyPlantsPhotos.black,
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
        photo: IkeaSkadisLegoTinyPlantsPhotos.white,
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
    id: 9,
    name: "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA",
    fullname:
      "Uchwyt na lampę IKEA FORSA pod tablicę IEKA SKADIS – IKEA SKADIS FORSA",
    slug: "uchwyt-na-lampe-ikea-forsa-pod-tablice-ikea-skadis-ikea-skadis-forsa",
    component: "IkeaSkadisForsa",
    maxWords: 7,
    thumbnailObjectPosition: "center center",
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: IkeaSkadisForsaPhotos.black,
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
        photo: IkeaSkadisForsaPhotos.white,
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
    id: 10,
    name: "Uchwyt na lampę IKEA TERTAIL pod tablicę IEKA SKADIS – IKEA SKADIS TERTAIL ",
    fullname:
      "Uchwyt na lampę IKEA TERTAIL pod tablicę IEKA SKADIS – IKEA SKADIS TERTAIL",
    slug: "uchwyt-na-lampe-ikea-tertail-pod-tablice-ikea-skadis-ikea-skadis-tertail",
    component: "IkeaSkadisTertail",
    maxWords: 7,
    thumbnailObjectPosition: "center center",
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: IkeaSkadisTertailPhotos.black,
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
        photo: IkeaSkadisTertailPhotos.white,
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
    id: 11,
    name: "Uchwyt na słuchawki pod tablicę IEKA SKADIS – IKEA SKADIS HEADPHONE",
    fullname:
      "Uchwyt na słuchawki pod tablicę IEKA SKADIS – IKEA SKADIS HEADPHONE",
    slug: "uchwyt-na-sluchawki-pod-tablice-ikea-skadis-ikea-skadis-headphone",
    component: "IkeaSkadisHeadphone",
    thumbnailObjectPosition: "center center",
    maxWords: 5,
    colors: [
      {
        name: "czarny",
        nameEn: "black",
        photo: IkeaSkadisHeadphonePhotos.black,
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
        photo: IkeaSkadisHeadphonePhotos.white,
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
