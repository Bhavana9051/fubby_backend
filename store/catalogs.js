const catalogs = [
  {
    id: 1,
    title: "Pillow dog crochet - handmade",
    description: "Handmade crochet pillow in the shape of a dog. Great condition.",
    images: [{ fileName: "pillow-dog-crochet" }],
    price: 450,
    categoryId: 9,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Haikyu keychain set",
    images: [{ fileName: "haikyu-keychain" }],
    price: 199,
    categoryId: 7,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Ceramic mug - handcrafted",
    description: "Beautiful handcrafted ceramic mug. Dishwasher safe.",
    images: [{ fileName: "ceramic-mug" }],
    price: 350,
    categoryId: 9,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Kenma poster / collectible",
    images: [{ fileName: "kenma" }],
    price: 250,
    categoryId: 7,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 5,
    title: "Red jacket",
    images: [{ fileName: "jacket1" }],
    price: 100,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "Gray couch in a great condition",
    images: [{ fileName: "couch2" }],
    price: 1200,
    categoryId: 1,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 7,
    title: "Room & Board couch - delivery included",
    description: "Selling my furniture at a discount. Pick up at Venice. DM me asap.",
    images: [
      { fileName: "couch1" },
      { fileName: "couch2" },
      { fileName: "couch3" },
    ],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 8,
    title: "Designer wear shoes",
    images: [{ fileName: "shoes1" }],
    price: 100,
    categoryId: 5,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 9,
    title: "Canon 400D (Great Condition)",
    images: [{ fileName: "camera1" }],
    price: 300,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 10,
    title: "Nikon D850 for sale",
    images: [{ fileName: "camera2" }],
    price: 350,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 11,
    title: "Sectional couch - Delivery available",
    description: "No rips no stains no odors",
    images: [{ fileName: "couch3" }],
    price: 950,
    categoryId: 1,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 12,
    title: "Brown leather shoes",
    images: [{ fileName: "shoes2" }],
    price: 50,
    categoryId: 5,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addCatalog = (catalog) => {
  catalog.id = catalogs.length + 1;
  catalogs.push(catalog);
};

const getCatalogs = () => catalogs;

const getCatalog = (id) => catalogs.find((catalog) => catalog.id === id);

const filterCatalogs = (predicate) => catalogs.filter(predicate);

module.exports = {
  addCatalog,
  getCatalogs,
  getCatalog,
  filterCatalogs,
};
