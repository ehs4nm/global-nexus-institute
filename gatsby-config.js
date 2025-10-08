module.exports = {
  siteMetadata: {
    title: "Global Nexus Institute — Foresight for a Connected World",
    description:
      "GNI connects energy, geopolitics, and health into one field of actionable intelligence.",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Playfair Display SC:400,700", // Titles
          "Nixie One:400", // Paragraphs
          "Anton SC:400" // Bold titles
        ],
        display: "swap", // Font loading optimization
        preconnect: true // Preconnect for better performance
      }
    }
  ],
};
