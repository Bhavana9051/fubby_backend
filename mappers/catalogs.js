const config = require("config");

const mapper = (catalog) => {
  const baseUrl = config.get("assetsBaseUrl");
  const mapImage = (image) => ({
    url: `${baseUrl}${image.fileName}_full.jpg`,
    thumbnailUrl: `${baseUrl}${image.fileName}_thumb.jpg`,
  });

  return {
    ...catalog,
    images: catalog.images.map(mapImage),
  };
};

module.exports = mapper;
