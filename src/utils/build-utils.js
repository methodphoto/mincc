const slugify = (str) => str
  .replace(/&/g, " and ")
  .replace(/\s/g, "-")
  .replace(/'/g, "")
  .toLowerCase();

module.exports = {
  slugify,
};