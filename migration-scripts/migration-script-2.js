/**
 * Migration script to create Contentful content types: card, cardSection, contentSection.
 * @param {import('contentful-migration').MigrationFunction} migration - The migration object.
 */
module.exports = function (migration) {
  /**
   * Card content type
   */
  const card = migration
    .createContentType("card")
    .name("Card")
    .displayField("title");

  card.createField("title").type("Symbol").required(true).name("Title");
  card.createField("category").type("Symbol").required(true).name("Category");
  card
    .createField("image")
    .type("Link")
    .linkType("Asset")
    .required(true)
    .name("Image");
  card
    .createField("cta")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["cta"] }])
    .required(true)
    .name("CTA");
  card
    .createField("price")
    .type("Number")
    .validations([{ range: { min: 0 } }])
    .required(true)
    .name("Price");

  /**
   * Card Section content type
   */
  const cardSection = migration
    .createContentType("cardSection")
    .name("Card Section")
    .displayField("name");

  cardSection.createField("name").type("Symbol").required(true).name("Name");
  cardSection
    .createField("cards")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["card"] }],
    })
    .required(true)
    .name("Cards");

  /**
   * Content Section content type
   */
  const contentSection = migration
    .createContentType("contentSection")
    .name("Content Section")
    .displayField("title");

  contentSection
    .createField("image")
    .type("Link")
    .linkType("Asset")
    .required(true)
    .name("Image");
  contentSection
    .createField("title")
    .type("Symbol")
    .required(true)
    .name("Title");
  contentSection
    .createField("description")
    .type("RichText")
    .required(true)
    .name("Description");
  contentSection
    .createField("price")
    .type("Number")
    .required(true)
    .name("Price");
  contentSection
    .createField("cta")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["cta"] }])
    .required(true)
    .name("CTA");
};
