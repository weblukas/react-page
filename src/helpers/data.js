const storeItems = [
  {
    ItemId: 1,
    title: "jbl speaker",
    price: 456,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      defaultImage: "images/black.png",
      greenImage: "images/green.png",
      images: ["images/black.png", "images/green.png", "images/blue.png"],
    // w przypadku większej ilości elementów nie działa ,"images/green.png", "images/blue.png"
  },
  {
    ItemId: 2,
    title: "sony speaker",
    price: 748,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      defaultImage: "images/sony-blue.png",
      images: ["images/sony-blue.png", "images/black-sony.png"],
  },
  {
    ItemId: 3,
    title: "sony blue",
    price: 426,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      defaultImage: "images/sony-white.png",
      images: ["images/sony-white.png"],
  },
];

export default storeItems;
