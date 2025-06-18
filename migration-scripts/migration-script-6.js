import fs from "fs";
import contentful from "contentful-management";

const client = contentful.createClient({
  accessToken: process.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN,
});

const assets = [
  {
    title: "Gathering",
    fileName: "my-image-3.jpg",
    path: "./src/assets/gathering.jpg",
    contentType: "image/jpg",
  },
  {
    title: "Google Pixel",
    fileName: "my-image-4.jpg",
    path: "./src/assets/Google-Pixel-9.jpg",
    contentType: "image/jpg",
  },
  {
    title: "Help Icon",
    fileName: "my-image-5.png",
    path: "./src/assets/help.png",
    contentType: "image/png",
  },
  {
    title: "Internet Icon",
    fileName: "my-image-6.jpg",
    path: "./src/assets/internet.jpg",
    contentType: "image/jpg",
  },
  {
    title: "Ipad",
    fileName: "my-image-6.jpg",
    path: "./src/assets/ipad.jpg",
    contentType: "image/jpg",
  },
  {
    title: "Iphone 16 Pro Max",
    fileName: "my-image-7.png",
    path: "./src/assets/iphone16-pro-max.png",
    contentType: "image/png",
  },
  {
    title: "Iphone 16",
    fileName: "my-image-8.jpg",
    path: "./src/assets/iphone16.jpg",
    contentType: "image/jpg",
  },
  {
    title: "Phone Icon",
    fileName: "my-image-9.jpg",
    path: "./src/assets/phone-icon.jpg",
    contentType: "image/jpg",
  },
  {
    title: "Tablet",
    fileName: "my-image-9.jpg",
    path: "./src/assets/tablet.jpg",
    contentType: "image/jpg",
  },
  {
    title: "Watch Icon",
    fileName: "my-image-10.png",
    path: "./src/assets/watch.png",
    contentType: "image/png",
  },
];

client
  .getSpace("1k8p5asrmtjd")
  .then((space) => space.getEnvironment("master"))
  .then(async (environment) => {
    for (const asset of assets) {
      const createdAsset = await environment.createAssetFromFiles({
        fields: {
          title: { "en-US": asset.title },
          file: {
            "en-US": {
              contentType: asset.contentType,
              fileName: asset.fileName,
              file: fs.readFileSync(asset.path),
            },
          },
        },
      });

      await createdAsset.processForAllLocales();

      // Wait for processing to complete before publishing
      let processedAsset;
      while (true) {
        processedAsset = await environment.getAsset(createdAsset.sys.id);
        const file = processedAsset.fields.file["en-US"];
        if (file.url) break;
        await new Promise((resolve) => setTimeout(resolve, 1000)); // wait 1s
      }

      await processedAsset.publish();
      console.log(`Asset uploaded and published: ${asset.title}`);
    }
  })
  .catch(console.error);