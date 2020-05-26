const slugify = (str) => str
  .replace(/\s/g, "-")
  .replace(/'/g, "")
  .toLowerCase();

module.exports = {
  slugify,
};
