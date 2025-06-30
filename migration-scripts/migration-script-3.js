/**
 * Migration script to create Contentful content types: category, imageSection, navigation.
 * @param {import('contentful-migration').MigrationFunction} migration - The migration object.
 */
module.exports = function (migration) {
  /**
   * Category content type
   */
  const category = migration
    .createCotentType("category")
    .name("Category")
    .displayField("title");

  category.createField("title").name("Title").type("Symbol").required(true);

  category
    .createField("logo")
    .name("Logo")
    .type("Link")
    .required(true)
    .validations([{ linkContentType: ["logo"] }]);

  /**
   * Image Section content type
   */
  const imageSection = migration
    .createCotentType("category")
    .name("Image Section")
    .displayField("name");

  imageSection.createField("name").name("name").type("Symbol").required(true);
  imageSection
    .createField("categories")
    .name("Categories")
    .type("Array")
    .items({ type: "Link", validations: [{ linkContentType: ["category"] }] });

  /**
   * Navigation content type
   */
  const navigation = migration
    .createCotentType("navigation")
    .name("Navigation");

  navigation
    .createField("logo")
    .name("Logo")
    .type("Link")
    .required(true)
    .validations([{ linkContentType: ["logo"] }]);

  navigation
    .createField("link")
    .name("Links")
    .type("Array")
    .required(true)
    .items({ type: "Link", validations: [{ linkContentType: ["link"] }] });
};
