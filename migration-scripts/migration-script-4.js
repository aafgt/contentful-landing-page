/**
 * Migration script to create Contentful content types: header, footer.
 * @param {import('contentful-migration').MigrationFunction} migration - The migration object.
 */
module.exports = function (migration) {
  /**
   * Header content type
   */
  const header = migration
    .createContentType("header")
    .name("Header")
    .displayField("heading");

  header
    .createField("heading")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["heading/footerSection"] }])
    .required(true)
    .name("Heading");
  header
    .createField("navigation")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["navigation"] }])
    .required(true)
    .name("Navigation");
  header
    .createField("heroBanner")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["heroBanner"] }])
    .required(true)
    .name("HeroBanner");

  /**
   * Footer content type
   */
  const footer = migration
    .createContentType("footer")
    .name("Footer")
    .displayField("footer");

  footer
    .createField("footer")
    .type("Array")
    .items({
      type: "Link",
      validations: [{ linkContentType: ["heading/footerSection"] }],
      linkType: "Entry",
    })
    .required(true)
    .name("Footer");
};
