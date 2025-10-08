module.exports = {
  siteMetadata: {
    title: "Global Nexus Institute — Foresight for a Connected World",
    description:
      "GNI connects energy, geopolitics, and health into one field of actionable intelligence.",
    siteUrl: "https://globalnexusinstitute.com",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-fonts",  
      options: {
        fonts: [
          "Playfair Display SC:400,700", // Titles
          "Alan Sans:400", // Paragraphs
          "Anton SC:400" // Bold titles
        ],
        display: "swap", // Font loading optimization
        preconnect: true // Preconnect for better performance
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Global Nexus Institute",
        short_name: "GNI",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "standalone",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
        icons: [
          {
            src: "favicon/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "favicon/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "favicon/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
        ],
      },
    }
  ],
};
