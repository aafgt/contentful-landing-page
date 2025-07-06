/**
 * Migration script to create Contentful content types: category, imageSection, navigation.
 * @param {import('contentful-migration').MigrationFunction} migration - The migration object.
 */
module.exports = function (migration) {
  /**
   * Category content type
   */
  const category = migration
    .createContentType("category")
    .name("Category")
    .displayField("title");

  category.createField("title").name("Title").type("Symbol").required(true);

  category
    .createField("logo")
    .name("Logo")
    .type("Link")
    .linkType("Asset")
    .required(true)

  /**
   * Image Section content type
   */
  const imageSection = migration
    .createContentType("imageSection")
    .name("Image Section")
    .displayField("name");

  imageSection.createField("name").name("name").type("Symbol").required(true);
  imageSection
    .createField("categories")
    .name("Categories")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["category"] }],
    });

  /**
   * Navigation content type
   */
  const navigation = migration
    .createContentType("navigation")
    .name("Navigation");

  navigation
    .createField("logo")
    .name("Logo")
    .type("Link")
    .linkType("Asset")
    .required(true)

  navigation
    .createField("link")
    .name("Links")
    .type("Array")
    .required(true)
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["link"] }],
    });
};
