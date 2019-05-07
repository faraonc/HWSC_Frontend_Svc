// globally available css, import styles in property data
// example:
// `
//   @import "@/styles/_media-queries.styles";
//   @import "@/styles/_fonts.styles";
//   @import "@/styles/_variables.styles";
//   @import "@/styles/_functions.styles";
//   @import "@/styles/_mixins.styles";
//   ... etc
// `,
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '',
      },
    },
  },
};
