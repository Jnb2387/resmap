var config = {
  style: "mapbox://styles/bradley2387/cjgr7hc2v00032smw3weskvek",
  accessToken:
    "pk.eyJ1IjoiYnJhZGxleTIzODciLCJhIjoiY2pnMTk0ZTk2NmJzOTJxbnZpMjl1ZGsxbiJ9.L-BSY_VjUrkHL3ov0OciKQ",
  showMarkers: false,
  alignment: "left",
  theme: "dark",
  title: "Jeffrey Bradley",
  subtitle: "Resume Map",
  byline: "Scroll down to learn about my background",
  footer: 'Made by Jeffrey',
  chapters: [
    {
      id: "world",
      title: "ResMap of Jeff Bradley",
      image: "https://lh3.googleusercontent.com/pw/ACtC-3exJnD3MyiBaLeu47NJF7GZgCp-6-yalIL7xA0FGCuGg13WhqtlgwfaDhxk_aCfy-vx4Ccg-IrsXp0T0LOzGWSBLiSOuYULSX_k3HJJxGhAp8Bek8CBZqxUwJcLkX7TZStzuAZ9WA6qEliXD1pU_kpbAQ=w1464-h976-no?authuser=0",
    //   "https://lh3.googleusercontent.com/ph8fWMEXmlziwkOFRoSMaRfH_3_iIQEHJQb9OlWdV_iV7WJkDcccNMCWpiSdOdZR6YeXKnote3KRUCNfmsnZexa3y_314DXhza2ZLGs9StH2bt94ZjkEEW7xJ-DPEw-_hYqkRdG3Dxl1CWs7U3zfCYNVgPm0wHjAfvIus52PzeLr7mAaX7LgCIrjxtuxetdJYLu-4czYzA2Lq0exVeVQ5FhmSFyIxFVQo336VANENAHlphkGsUuiv7W9AElBaUOfv0XWkp02QPi52Y-yDzmnybkDi4x18UQvZCjyeWEuYTVgHaKvbbsoq0hBY5fUeaIl-HRSvenx1kvKBwD5U5S82Bo1_iDZq9uQRlOH7GUBdAbtfFu4126RTRfduVB8VItCxSQFUBAtYtFOnuZJy63EtSpcUeRR8XtkGtR9QV91XK6eOwltQjzYfJgOvOue4hYLwToM3hFXCGCPQDBz-8AsT4Uu-bwHteSobDauQu2uBDySunnLdKZwOyD8yubHUihxS2VGoAVGsMofqclnuIQxvurKlzvN5fyscFawFACqzPaiuehPn4n0hvJ-rGdEk1bP1RUwsw8TXlnvQHxBHwOe6o7VxRBczU56IObA3-PwN_pmmNwVFoh6EhhupId7bK-9FxOb8Upy6b23yJb0fABRGF_ZSrOXKuYH5UjrFhdDtJUqR8HhndzDA5ko6zrH=w1726-h976-no?authuser=0",
      description:
        "I created this map to supplement my resume and cover letter. I believe with my experience and travel it can be a great way to showcase my skills and knowledge. My life has been mapped out to gain the most experience I can. I love exploring and learning new skills, getting out of my comfort zone is a way to learn about myself and to explore alternate ways of achieving goals.",
      location: {
        center: [-105.066174, 39.272291],
        zoom: 2,
        pitch: 0.0,
        bearing: 0.0,
      },
      onChapterEnter: [
        {
          layer: "Work_locations",
          ids: [0],
        },
      ],
      onChapterExit: [],
    },
    {
      id: "connecticut",
      title: "Connecticut",
      image: "https://lh3.googleusercontent.com/F0BEAoQg5jnJFPTCVena111wss8LrYjhE0vfmuIa2ffA-7CiN2wvOA3UO0CmMjIq4hhSx_lLh5s7nW5sxF39GAad0i_HyO8Sp5Motmj_2Ve1mlm0Gr76FiXq-gbgVGO7nVP5VAy928EEsVRcEWPCTaYTtHy2lxA4qkWHqQnmbe6npaJtv7XUr3E3TjgXF_ZfnDwf358yedrOgOyohKu8MpDFPjsjHITHwLQhasWwjUmGfLvlG9WFLvVzES42Lg4ONEEzdLrppzfpJhzWqlWAQP4HzzGXBEN83RvfDTxBQm6XfXzRZiTOfeYX34DtGznPEf-Y9quYY3ejgqpYToikJYOB4cvsv_-Ewm-AsdPXPVkwXenBdljt5A0M5XK0c_cRakl06cBMaH5tioiaUPCVENHEAkbzFHw-gb8c1rE7Vvx5FrBgHgYlCTeEun7Fa96fzfwgIDGps356xvnaSq_0eNuhEBhK5vzp62SUgfuweBeZo13yUoZ5B5ltAFOJMxGdoa8VzJWOmwSvnyojgxhJmTeArl02o-IWy6XZjHaVdvmFOPGDKHYQBgw9_VHk_l_w5AhjRpmm7xB6W7OBbp32Z_3HTwLyLf5irhlWw1-3QVlhlRC8ArVlSb8mQMtg8YplocdPmuQ5I5kWoedWFmjfyOrHAn1HxJqYBy3A7SNtZ4PVss7mn6gYDZCE5LQjlA=w1013-h976-no?authuser=0",
      description:
        "I was born and raised in Connecticut. I graduated from the University of New Haven (UNH) with a Bachelor's of Fire Science. During my coursework, I was fascinated by all the different realms of the fire industry: I volunteered for a number of local fire departments, I completed an internship with the Fire Marshall's office, installed and designed fire suppression systems, and earned my EMT.",
      location: {
        center: [-73.5, 41.53127],
        zoom: 8,
        pitch: 0,
        bearing: 0,
      },
      onChapterEnter: [
        {
          layer: "Work_locations",
          ids: [1, 9],
        },
      ],
      onChapterExit: [],
    },
    {
      id: "florida",
      title: "Florida",
      image: "",
      description:
        "I joined the United States Navy out of high school. Throughout my service I was stationed along the East Coast predominently in Florida. I completed two tours in the Middle East working alongside Third County Nationals providing base support and operations. After the deployments and my enlistment I became a seasonal wildland firefighter based out of Florida.",
      location: {
        center: [-85.79, 28.761],
        zoom: 6,
        pitch: 0,
        bearing: 0,
      },
      onChapterEnter: [
        {
          layer: "Work_locations",
          ids: [6, 5, 7],
        },
      ],
      onChapterExit: [],
    },
    {
      id: "iraq",
      title: "Operation Iraqi Freedom",
      image: "",
      description:
        "During military deployments, I worked with the contracted fire crews and gained a strong interest in the profession. I was inspired to pursue a career in the fire service, so following my enlistment I returned to Connecticut to study Fire Science at the University of New Haven.",
      location: {
        center: [40.0, 33.3128],
        zoom: 5,
        pitch: 0,
        bearing: 0,
      },
      onChapterEnter: [
        {
          layer: "Work_locations",
          ids: [6, 5, 7],
        },
      ],
      onChapterExit: [],
    },
    {
      id: "bigisland",
      title: "Hawaii",
      image: "https://lh3.googleusercontent.com/UPXLeyvFnPusi-R9T9dsWuLZ1DI4D4EnPWia0Vzw8mU1_VTk5FiD5UdZ3C7d-BLdtqk_WOmDNSf_AZtT_IOld_kYm9Lsd0P9FDd-Cw1WY8_z8wGsaylfWmO3vu52im5muD5DKvj4BeveYBz-lXvzLM5h2mnwdKhMrnvoMwksONKql98aa3Qq8ZC8uDe-qNkIBoexmZdEOqMZRFJOG9oVGhwoJHzxw7_8RmruKZyiWYxxXpSE90QtxqvGkgm2Wis9RONrQPjKtuTubCcFqjUUxBwIQS3rVcg1IixWQf95i6AKJxGLGJe0-qd0yzjZXvjtVvGz9CzxfgcuBTOC78mCr3lmOkCtqWJLv13n8umN_N7UOPPv6TUkbeBxsFL3F1Py9vII4rdbPoPsRfBPcw_LTCp1GZyXTPKQWtH8q4yeCEHxsPjn9hMncajCzOHC5Wd9aV3rul_fPUTbGhnH5MP91bxzFmuG9UclKCERvqq9G7qal3G9jz8TO02juPHG47pUA7Uowa_jWOXURtrBBgkw7C8OjC4sEvNqAm52aTnFcLzGFmK6kGQDv1Av-jTrksuhK4FcDQPetyY5CVfNsQ3Dlod-6zmFxDcGpTENGt4mtOdEwaohOLuI14o27K1PBUWrFXPqPyXO3ezgSJKFcN2GHFQxum0yjRICrBAwbvgpguR8hnrCLHVN9Z1nJDS3Xg=w1736-h976-no?authuser=0",
      description:
        "After earning my bachelor's degree, I moved to The Big Island of Hawaiʻi. I worked for SolarCity, designing and installing residential solar systems. I have always been drawn to things spatially, but working at SolarCity made me think about it in an alternate way. I could relate my interests for location, geography, and maps all in a work environment. During my free time, I would traverse the whole island to soak in its geographical beauty, I became so interested in the different features of the island I started mapping the remote locations to help the community. There is no other place like Hawaii!",
      location: {
        center: [-156.521, 19.531],
        zoom: 8,
        pitch: 55,
        bearing: -18,
      },
      onChapterEnter: [
        {
          layer: "Work_locations",
          ids: [8],
        },
      ],
      onChapterExit: [],
    },
    {
      id: "colorado",
      title: "Colorado",
      image: "https://lh3.googleusercontent.com/kayfgwg0AZ0TU5e3fYntVnllm_pqQCm6IQeCfdMwrMROdTJnWFHYpHrh-PVSaD9nri4HBQ0fehLyRe9rLehVhEM9D1cltlw1ch9UJ_nhDgh1d-921h-Fd4w8QtnfuyJQYRJBA_Bth7spWHYuh-zNwJDMK5Y71lF_3TDUiUUu47fdasrxkJltIj6InntlegSPpCZ1rfcGrYj1VFNDNqc_q_KCMXsswqA0sYyNOr4T12VUY9zHeUAkezECxGpYerpelSxHLIq2IQ2Ck3DnbtwYhz5B_nmXRDNbMSuLqGRgqGkVc5zHdISzAmISQyQsmjGyjgLJ9x0A7z-9RhEEybY17w-ARaJbU0zMt9k8oRnS1xuWVMvgJ3vmOMPBLKIMTfR1knwHemPJz2XwnoiPCW0-zXxr9IWKi6awCHZrxTNJRJv0eRbfh-39H7-IDYlUr8qxHcnCsjHVD2uolqDFH2N5PgimCfr1otIYNIikNa3F2OVxRSjZ5bEEdaSXz5HNljTgq6oZtIEqBJYZygfmUGarXcXoJoGC5u4Robk3mL9jJTji8jbIPUaJDZS4jAb6mCKFvCZOSS7IaU57t4T3C0-aP4PkVWh0EmmBIALDuKtqNobhE_5zfiK_b7izIlFvZbKeGAPSFr8wGyPA8VufGpY4YtFQiz5q_Ii5m4dVGc5F5E2N6ynO8pjWljemxjBI0Q=w1248-h936-no?authuser=0",
      description:
        "Once I made the move to Colorado I dedicated my time to learning new skills. I enrolled in a development bootcamp in Boulder to learn web development. This decision has set my skills to a greater level, and has made me eager to keep learning. Once I graduated from the development courses I continued to further my skills and grasp the spatial side of things. I contracted through CBI Engineering for the City of Denver, where I was part of a small team to map out and collect street light data for the entire county. </br><b>Technologies Used:</b> ArcGIS Collector, ArcMap, QGIS, ArcGIS SDE, FME.</br></br>After CBI, I was hired on at Frontier where I now work as Database Administrator, and GIS Analyst. I design and create Postgres Databases, create workflows for fellow analyst to use, help develop a (desktop) analysis web tool for clients to have control of live data while viewing it on webmap.</br><b>Technologies Used:</b> PostgreSQL\PostGIS, FME, QGIS, ArcGIS, GDAL(OGR), GeoServer, Alteryx, NodeJS, Oracle,MapBox, MyWorld by UbiSense, Leaflet, TurfJS, Google Cloud SQL and Compute, Heroku, AWS.",
      location: {
        center: [-104.964, 39.7548],
        zoom: 8,
        pitch: 0,
        bearing: 0,
      },
      onChapterEnter: [
        {
          layer: "Work_locations",
          ids: [2,4,10],
        },
      ],
      onChapterExit: [],
    },
  ],
};
