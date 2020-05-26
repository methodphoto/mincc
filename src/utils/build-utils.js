const slugify = (str) => str
  .replace(/\s/g, "-")
  .replace(/'/g, "")
  .replace(/&/g, " and ")
  .toLowerCase();

module.exports = {
  slugify,
};
