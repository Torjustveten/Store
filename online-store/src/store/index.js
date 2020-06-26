import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [
      {
        name: "Huawei Matebook X Pro",
        id: 1,
        price: 20990,
        color: "Space Grey/Emerald Green/Mystic Silver",
        display: "13.9 inches",
        touch: "Yes",
        resolution: "3000 x 2000",
        fingerprint: "Yes",
        brightness: "450 cd/m²",
        quantity: 10,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Laptop",
        details: {
          material: "Aliminum",
          CPU: "4 core 8 thread Intel Core i7 10510U/4.9 GHz",
          GPU: "Nvidia GeForce MC250 / Intel UHD 620",
          Memory: "2GB Video memory/Dual Channel 16GB RAM 2133Mhz",
          Storage: "512GB SDD PCIe",
          Battery: "56 Wh, up to 13 hours",
          Speakers: "Quad speakers",
          Camera: "1MP/720p",
          Wireless: "802.11a/b/g/n/ac, NFC, Bluetooth 5.0",
          Weight: "1.33kg",
          Additional: "100% sRGB, 10 point multitouch, 260 ppi"
        },
        images: [
          "matebookXPro-emeraldgreen.png",
          "matebookXPro-SpaceGray.png",
          "matebookXPro-mystic-silver.png"
        ]
      },
      {
        name: "Huawei Matebook 14",
        id: 2,
        price: 7990,
        color: "Mystic Silver",
        display: "14 inches",
        touch: "No",
        resolution: "1920 x 1080",
        fingerprint: "Yes",
        brightness: "250 cd/m²",
        quantity: 10,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Laptop",
        details: {
          material: "Aliminum",
          CPU: "4 core 8 thread AMD Ryzen 5 3500U/2.1GHz",
          GPU: "AMD Radeon Vega 8",
          Memory: "Dual Channel 16GB RAM 2400Mhz",
          Storage: "512GB SDD PCIe",
          Battery: "56 Wh, up to 9.5 hours",
          Speakers: "Stereo speakers",
          Camera: "1MP/720p",
          Wireless: "802.11a/b/g/n/ac, NFC, Bluetooth 5.0",
          Weight: "1.38kg",
          Additional: "157 ppi"
        },
        images: ["matebook14-mystic-silver.jpg"]
      },
      {
        name: "Huawei Matebook 13",
        id: 3,
        price: 13990,
        color: "Mystic Silver/Space Gray",
        display: "13.9 inches",
        touch: "Yes",
        resolution: "3000 x 2000",
        fingerprint: "Yes",
        brightness: "450 cd/m²",
        quantity: 10,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Laptop",
        details: {
          material: "Aliminum",
          CPU: "4 core 8 thread Intel Core i7 8565U/1.8GHz",
          GPU: "Nviadia GeForce MX250/Intel UHD 620",
          Memory: "2GB Video Memory/Dual Channel 8GB RAM 2133MHz",
          Storage: "512GB SDD PCIe",
          Battery: "56 Wh, up to 13 hours",
          Speakers: "Quad speakers",
          Camera: "1MP/720p",
          Wireless: "802.11a/b/g/n/ac, Bluetooth 5.0",
          Weight: "1.33kg",
          Additional: "100% sRGB 260 ppi"
        },
        images: ["matebook13-mystic-silver.png", "matebook13-space-gray.png"]
      },
      {
        name: "Huawei Matebook D14",
        id: 4,
        price: 7990,
        color: "Mystic Silver/Space Gray",
        display: "14 inches",
        touch: "No",
        resolution: "1920 x 1080",
        fingerprint: "Yes",
        brightness: "250 cd/m²",
        quantity: 10,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Laptop",
        details: {
          material: "Aliminum",
          CPU: "4 core 8 thread AMD Ryzen 5 3500U/2.1GHz",
          GPU: "AMD Radeon Vega 8",
          Memory: "Dual Channel 8GB RAM 2400MHz",
          Storage: "512GB SDD PCIe",
          Battery: "56 Wh, up to 9.5 hours",
          Speakers: "Stereo speakers",
          Camera: "1MP/720p",
          Wireless: "802.11a/b/g/n/ac, Bluetooth 5.0",
          Weight: "1.38kg",
          Additional: "157 ppi"
        },
        images: ["matebookD14-mystic-silver.png", "matebookD14-space-gray.png"]
      }
    ]
  },
  mutations: {},
  actions: {}
});
