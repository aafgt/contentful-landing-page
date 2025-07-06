/**
 * Migration script to create Contentful content types: heroBanner, logo, link, cta, videoSection.
 * @param {import('contentful-migration').MigrationFunction} migration - The migration object.
 */
module.exports = function (migration) {
  /**
   * Hero Banner content type
   */
  const heroBanner = migration
    .createContentType("heroBanner")
    .name("Hero Banner")
    .displayField("title");

  heroBanner.createField("title").type("Symbol").required(true).name("Title");

  heroBanner
    .createField("image")
    .type("Link")
    .linkType("Asset")
    .required(true)
    .name("Image");

  /**
   * Logo content type
   */
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

  /**
   * Link content type
   */
  const link = migration
    .createContentType("link")
    .name("Link")
    .displayField("title");

  link.createField("title").type("Symbol").required(true).name("Title");

  link.createField("url").type("Symbol").required(true).name("URL");

  /**
   * CTA content type
   */
  const cta = migration
    .createContentType("cta")
    .name("CTA")
    .displayField("title");

  cta.createField("title").type("Symbol").required(true).name("Title");

  cta.createField("url").type("Symbol").required(true).name("URL");

  /**
   * Video Section content type
   */
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
