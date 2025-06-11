module.exports = function (migration) {
  const header = migration
    .createContentType("header")
    .name("Header")
    .displayField("");

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

  const footer = migration
    .createContentType("footer")
    .name("Footer")
    .displayField("");

  footer
    .createField("footer")
    .type("Array")
    .items({ type: "Link", linkType: "Entry" })
    .validations([{ linkContentType: ["heading/footerSection"] }])
    .required(true)
    .name("Footer");
};
