/**
 * Migration script to create Contentful content type: landingPage.
 * @param {import('contentful-migration').MigrationFunction} migration - The migration object.
 */
module.exports = function (migration) {
  /**
   * Landing Page content type
   */
  const landingPage = migration
    .createContentType("landingPage")
    .name("Landing Page")
    .displayField("header");

  landingPage
    .createField("header")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["header"] }])
    .required(true)
    .name("Header");
  landingPage
    .createField("contentSection")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["contentSection"] }])
    .required(true)
    .name("Content Section");
  landingPage
    .createField("imageSection")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["imageSection"] }])
    .required(true)
    .name("Image Section");
  landingPage
    .createField("cardSection")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["cardSection"] }])
    .required(true)
    .name("Card Section");
  landingPage
    .createField("videoSection")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["videoSection"] }])
    .required(true)
    .name("Video Section");
  landingPage
    .createField("footer")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["footer"] }])
    .required(true)
    .name("Footer");
};
