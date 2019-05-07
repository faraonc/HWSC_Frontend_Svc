// globally available css, import scss in property data
// example:
// `
//   @import "@/scss/_media-queries.scss";
//   @import "@/scss/_fonts.scss";
//   @import "@/scss/_variables.scss";
//   @import "@/scss/_functions.scss";
//   @import "@/scss/_mixins.scss";
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
