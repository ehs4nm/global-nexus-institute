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
          "Notable:400,700", // Title font
          "Bellefair:400,700", // Title font alternative
          "Alumni Sans Pinstripe:400,700", // Paragraph font
          "Mulish:400,500,600,700" // Paragraph font alternative
        ],
        display: "swap", // Font loading optimization
        preconnect: true // Preconnect for better performance
      }
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["avif", "webp", "auto"],
          placeholder: "dominantColor",
          quality: 80,
          breakpoints: [640, 768, 1024, 1280, 1536],
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-fonts",  
      options: {
        fonts: [
          "Notable:400,700", // Title font
          "Bellefair:400,700", // Title font alternative
          "Alumni Sans Pinstripe:400,700", // Paragraph font
          "Mulish:400,500,600,700" // Paragraph font alternative
        ],
        display: "swap", // Font loading optimization
        preconnect: true // Preconnect for better performance
      }
    }
  ],
};
