const serverUrlImages = "http://localhost:3001/images/";
function createUrlName(obj) {
  const value = obj.title + " " + obj.memory + " " + obj.color;
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function createPath(obj) {
  return serverUrlImages + createUrlName(obj) + ".jpeg";
}

let id = 0;
function createNewId() {
  return ++id;
}

class CreateItem {
  constructor(brand, title, memory, color, price, category, ...images) {
    this.id = createNewId();
    this.brand = brand;
    this.title = title;
    this.memory = memory;
    this.color = color;
    this.price = price;
    this.category = category;
    this.imageFirst = images[0];
    this.imageSecond = images[1];
    this.imageThird = images[2];
    this.imageFourth = images[3];
    this.path = createPath(this);
    this.url = createUrlName(this);
    this.fullTitle = `${this.brand[0].toUpperCase() + this.brand.slice(1)} ${
      this.title
    } ${this.memory} ${this.color}`;
  }
}

const apple = {
  iphones: [
    {
      ...new CreateItem(
        "apple",
        "iPhone 11",
        "64 gb",
        "black",
        999,
        "iphones",
        "https://cdn.svyaznoy.ru/upload/iblock/82d/iphone_11_b_4.jpg/resize/870x725/hq/",
        "https://cdn.svyaznoy.ru/upload/iblock/2a4/iphone_11_b_3.jpg/resize/870x725/hq/",
        "https://cdn.svyaznoy.ru/upload/iblock/c8b/iphone_11_b_1.jpg/resize/870x725/hq/",
        "https://cdn.svyaznoy.ru/upload/iblock/989/iphone_11_b_2.jpg/resize/870x725/hq/"
      ),
    },
    // id: id,
    // brand: "apple",
    // title: "iPhone 11",
    // memory: "64 gb",
    // color: "black",
    // get path() {
    //   return createPath(this);
    // },
    // get url() {
    //   return createUrlName(this);
    // },
    // price: 999,
    // category: "iphones",
    // imageFirst:
    //   "https://cdn.svyaznoy.ru/upload/iblock/82d/iphone_11_b_4.jpg/resize/870x725/hq/",
    // imageSecond:
    //   "https://cdn.svyaznoy.ru/upload/iblock/2a4/iphone_11_b_3.jpg/resize/870x725/hq/",
    // imageThird:
    //   "https://cdn.svyaznoy.ru/upload/iblock/c8b/iphone_11_b_1.jpg/resize/870x725/hq/",
    // imageFourth:
    //   "https://cdn.svyaznoy.ru/upload/iblock/989/iphone_11_b_2.jpg/resize/870x725/hq/",

    {
      id: 5678,
      brand: "apple",
      title: "iPhone 11",
      memory: "128 gb",
      color: "green",
      get path() {
        return createPath(this);
      },
      get url() {
        return createUrlName(this);
      },
      price: 1200,
      category: "iphones",
      imageFirst:
        "https://cdn.svyaznoy.ru/upload/iblock/3ec/iphone_11_g_4.jpg/resize/870x725/hq/",
      imageSecond:
        "https://cdn.svyaznoy.ru/upload/iblock/37d/iphone_11_g_3.jpg/resize/870x725/hq/",
      imageThird:
        "https://cdn.svyaznoy.ru/upload/iblock/909/iphone_11_g_1.jpg/resize/870x725/hq/",
      imageFourth:
        "https://cdn.svyaznoy.ru/upload/iblock/09c/iphone_11_g_2.jpg/resize/870x725/hq/",
    },

    {
      id: createNewId(),
      brand: "apple",
      title: "iPhone 11",
      memory: "128 gb",
      color: "black",
      get path() {
        return createPath(this);
      },
      get url() {
        return createUrlName(this);
      },
      price: 1200,
      category: "iphones",
      imageFirst:
        "https://cdn.svyaznoy.ru/upload/iblock/82d/iphone_11_b_4.jpg/resize/870x725/hq/",
      imageSecond:
        "https://cdn.svyaznoy.ru/upload/iblock/2a4/iphone_11_b_3.jpg/resize/870x725/hq/",
      imageThird:
        "https://cdn.svyaznoy.ru/upload/iblock/c8b/iphone_11_b_1.jpg/resize/870x725/hq/",
      imageFourth:
        "https://cdn.svyaznoy.ru/upload/iblock/989/iphone_11_b_2.jpg/resize/870x725/hq/",
    },
    {
      id: createNewId(),
      brand: "apple",
      title: "iPhone 11",
      memory: "64 gb",
      color: "green",
      get path() {
        return createPath(this);
      },
      get url() {
        return createUrlName(this);
      },
      price: 999,
      category: "iphones",
      imageFirst:
        "https://cdn.svyaznoy.ru/upload/iblock/3ec/iphone_11_g_4.jpg/resize/870x725/hq/",
      imageSecond:
        "https://cdn.svyaznoy.ru/upload/iblock/37d/iphone_11_g_3.jpg/resize/870x725/hq/",
      imageThird:
        "https://cdn.svyaznoy.ru/upload/iblock/909/iphone_11_g_1.jpg/resize/870x725/hq/",
      imageFourth:
        "https://cdn.svyaznoy.ru/upload/iblock/09c/iphone_11_g_2.jpg/resize/870x725/hq/",
    },
    {
      id: createNewId(),
      brand: "apple",
      title: "iPhone XS 64 Gb",
      path: "https://cdn2.biggeek.ru/1/212/0ce7/xs-gold_1.jpg",
      url: "iphone-xs-64-gb",
      price: 899,
      category: "iphones",
    },
  ],
  ipads: [
    {
      id: createNewId(),
      brand: "apple",
      title: "iPad Air (2019) 64Gb Wi-Fi Space Gray",
      path:
        "https://cdn2.biggeek.ru/1/212/0d1b/11140-550ipad-pro-11-select-cell-spacegray-202003.png",
      url: "ipad-air-2019-64gb-wi-fi-space-gray",
      price: 669,
      category: "ipads",
    },
    {
      id: createNewId(),
      brand: "apple",
      title: "iPad Pro 12.9''(2018) 64Gb Wi-Fi Space Gray",
      path:
        "https://cdn2.biggeek.ru/1/212/7126/7675-760iPad%20Pro%2012%20space%20gray.png",
      url: "ipad-pro-12-9-2018-64gb-wi-fi-space-gray",
      price: 1119,
      category: "ipads",
    },
    {
      id: createNewId(),
      brand: "apple",
      title: "Apple iPad 2018 32Gb Wi-Fi Space Gray",
      path:
        "https://cdn2.biggeek.ru/1/212/2d4d/ipad-wifi-select-spacegray-201803.png",
      url: "apple-ipad-2018-32gb-wi-fi-space-gray",
      price: 430,
      category: "ipads",
    },
    {
      id: createNewId(),
      brand: "apple",
      title: "Apple iPad mini (2019) 64Gb Wi-Fi Silver",
      path: "https://cdn2.biggeek.ru/1/212/cb1a/8470-917wifi_silver.png",
      url: "apple-ipad-mini-2019-64gb-wi-fi-silver",
      price: 499,
      category: "ipads",
    },
  ],
  macbooks: [
    {
      id: createNewId(),
      brand: "apple",
      title: "Apple MacBook Pro 13 Retina Touch Bar Z0Y7000TM Space Gray",
      path:
        "https://cdn2.biggeek.ru/1/212/7b8c/11806-18411399-84mbp13touch-space-select-202005.jpeg",
      url: "apple-macbook-pro-13-retina-touch-bar-z0y7000tm-space-gray",
      price: 5290,
      category: "macbooks",
    },
    {
      id: createNewId(),
      brand: "apple",
      title: "Apple MacBook Air 13 (2017) MQD32 (1,8Ghz, 8Gb, 128Gb)",
      path:
        "https://cdn2.biggeek.ru/1/212/e8f9/8294-64913_3.435x435_1.435x435.jpg",
      url: "apple-macbook-air-13-2017-mqd32-1-8ghz-8gb-128gb",
      price: 1090,
      category: "macbooks",
    },
    {
      id: createNewId(),
      brand: "apple",
      title:
        "Apple MacBook Pro 16 Retina Touch Bar MVVJ2 Space Gray (2,6 GHz Core i7, 16GB, 512GB, Radeon Pro 5300M)",
      path:
        "https://cdn2.biggeek.ru/1/212/ea9a/10488-781mbp16touch-space-gallery1-201911.jpeg",
      url:
        "apple-macbook-pro-16-retina-touch-bar-mvvj2-space-gray-2-6-ghz-core-i7-16gb-512gb-radeon-pro-5300m",
      price: 2699,
      category: "macbooks",
    },
    {
      id: createNewId(),
      brand: "apple",
      title: "Apple Macbook 12 Retina MNYF2 (1.2GHz, 8GB, 256GB) Space Gray",
      path: "https://cdn2.biggeek.ru/1/212/3e4c/space_6.435x435.jpg",
      url: "apple-macbook-12-retina-mnyf2-1-2ghz-8gb-256gb-space-gray",
      price: 1299,
      category: "macbooks",
    },
  ],
};

const samsung = {
  galaxyS: [
    {
      id: createNewId(),
      brand: "samsung",
      title: "Galaxy S20 Ultra 128 Gb (Cosmic Black)",
      path:
        "https://cdn2.biggeek.ru/1/212/08f0/11048-876SM-G988BZKDSER-comp.jpg",
      price: 999,
      category: "galaxyS",
    },
    {
      id: createNewId(),
      brand: "samsung",
      title: "Galaxy S10 Lite 128Gb 6Gb Black",
      path: "https://cdn2.biggeek.ru/1/212/9ab2/11037-934s10bk.jpg",
      price: 549,
      category: "galaxyS",
    },
  ],
  galaxyA: [],
};

module.exports = {
  apple,
  samsung,
};
