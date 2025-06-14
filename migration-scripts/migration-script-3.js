module.exports = function (migration) {
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
