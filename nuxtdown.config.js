module.exports = {
    api: function(isStatic) {
      const baseURL = "https://stupefied-blackwell-6aa74a.netlify.com"; //"http://localhost:3000";
      const browserBaseURL = !isStatic ? "" : process.env.BASE_URL;
  
      return {
        baseURL,
        browserBaseURL
      };
    },
    content: [
      [
        "pages",
        {
          page: "/pages/_page",
          // permalink: "/:slug",
          isPost: false
        }
      ],
      [
        "settings",
        {
          page: "/settings/_setting",
          // permalink: "/settings/:slug",
          isPost: false
        }
      ]
    ]
  };
  