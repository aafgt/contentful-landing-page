module.exports = function (migration) {
  const heroBanner = migration
    .createContentType("heroBanner")
    .name("Hero Banner")
    .displayField("title");

  heroBanner.createField("title").type("Symbol").required(true).name("Title");

  heroBanner
    .createField("image")
    .type("link")
    .linkType("Asset")
    .required(true)
    .name("Image");

  const logo = migration
    .createContentType("logo")
    .name("Logo")
    .displayField("url");

  logo
    .createField("image")
    .type("Link")
    .linkType("Asset")
    .required(true)
    .name("Image");

  logo.createField("url").type("Symbol").required(true).name("URL");

  const link = migration
    .createContentType("link")
    .name("Link")
    .displayField("title");

  link.createField("title").type("Symbol").required(true).name("Title");

  link.createField("url").type("Symbol").required(true).name("URL");

  const cta = migration
    .createContentType("cta")
    .name("CTA")
    .displayField("title");

  cta.createField("title").type("Symbol").required(true).name("Title");

  cta.createField("url").type("Symbol").required(true).name("URL");

  const videoSection = migration
    .createContentType("videoSection")
    .name("Video Section")
    .displayField("name");

  videoSection.createField("name").type("Symbol").required(true).name("Name");
  videoSection
    .createField("video")
    .type("Link")
    .linkType("Asset")
    .required(true)
    .name("video");
};
