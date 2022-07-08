export const sortOptions = [
  { name: "Most Popular", href: "/products", current: true },
  { name: "Best Rating", href: "/products", current: false },
  { name: "Newest", href: "/products", current: false },
  { name: "Price: Low to High", href: "/products", current: false },
  { name: "Price: High to Low", href: "/products", current: false },
];
export const subCategories = [
  { name: "Suitcases", href: "/products" },
  { name: "Bags", href: "/products" },
  { name: "Backpacks", href: "/products" },
  // { name: "Hip Bags", href: "/products" },
  // { name: "Laptop Sleeves", href: "/products" },
];
export const filters = [
  /* {
      id: "color",
      name: "Color",
      options: [
        { value: "white", label: "White", checked: false },
        { value: "beige", label: "Beige", checked: false },
        { value: "blue", label: "Blue", checked: true },
        { value: "brown", label: "Brown", checked: false },
        { value: "green", label: "Green", checked: false },
        { value: "purple", label: "Purple", checked: false },
      ],
    },*/
  {
    id: "categories",
    name: "Categories",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: true },
      { value: "sales", label: "Sales", checked: false },
      { value: "suitcases", label: "Suitcases", checked: false },
      { value: "bags", label: "Bags", checked: false },
      { value: "backbags", label: "Backbags", checked: false },
    ],
  },
  {
    id: "features",
    name: "Features",
    options: [
      {
        value: "Smart_Lock&unLock",
        label: "Smart Lock & unLock",
        checked: false,
      },
      { value: "digital_scale", label: "Digital Scale", checked: false },
      {
        value: "location_tracking",
        label: "Location Tracking",
        checked: false,
      },
      { value: "distance_alerts", label: "Distance Alerts", checked: false },
      { value: "battery_charger", label: "Battery Charger", checked: false },
    ],
  },
];

export const navigation = {
  categories: [
    {
      id: "Men_bags",
      name: "Men",
      featured: [
        {
          name: "Suitcase",
          href: "/products",
          imageSrc: "https://www.linkpicture.com/q/men1.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Bag",
          href: "/products",
          imageSrc: "https://i.ibb.co/0CXMDT2/men2.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "luggage-categories",
          name: "Luggage Categories",
          items: [
            { name: "New Arrivals", href: "/products" },
            { name: "Sales", href: "/products" },
            { name: "Suitcases", href: "/products" },
            { name: "Bags", href: "/products" },
            { name: "Backpacks", href: "/products" },

            //  { name: "T-Shirts", href: "/products" },
            //  { name: "Jackets", href: "/products" },
            //  { name: "Browse All", href: "/products" },
          ],
        },
        {
          id: "feautres",
          name: "Feautures",
          items: [
            { name: "Smart Lock & unLock", href: "/products" },
            { name: "Digital Scale", href: "/products" },
            { name: "Location Tracking", href: "/products" },
            { name: "Distance Alerts", href: "/products" },
            { name: "Battery Charger", href: "/products" },
          ],
        },
        {
          id: "styles",
          name: "Styles",
          items: [
            { name: "For Men", href: "/products" },
            { name: "For Women", href: "/products" },
            { name: "For Kids", href: "/products" },
          ],
        },
      ],
    },
    {
      id: "Women_bags",
      name: "Women",
      featured: [
        {
          name: "Suitcase",
          href: "/products",
          imageSrc: " https://i.ibb.co/tD4Qk3C/women1.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Backpack",
          href: "/products",
          imageSrc:
            "https://i.ibb.co/T2Ndf4d/charlesdeluvio-Ghrv69-I9m-Pw-unsplash.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "luggage-categories",
          name: "Luggage Categories",
          items: [
            { name: "New Arrivals", href: "/products" },
            { name: "Sales", href: "/products" },
            { name: "Suitcases", href: "/products" },
            { name: "Bags", href: "/products" },
            { name: "Backpacks", href: "/products" },

            //  { name: "T-Shirts", href: "/products" },
            //  { name: "Jackets", href: "/products" },
            //  { name: "Browse All", href: "/products" },
          ],
        },
        {
          id: "feautres",
          name: "Feautures",
          items: [
            { name: "Smart Lock & unLock", href: "/products" },
            { name: "Digital Scale", href: "/products" },
            { name: "Location Tracking", href: "/products" },
            { name: "Distance Alerts", href: "/products" },
            { name: "Battery Charger", href: "/products" },
          ],
        },
        {
          id: "styles",
          name: "Styles",
          items: [
            { name: "For Men", href: "/products" },
            { name: "For Women", href: "/products" },
            { name: "For Kids", href: "/products" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "/products" },
    { name: "Stores", href: "/products" },
  ],
};

export const callouts = [
  {
    name: "Style and technology",
    description: "Smart Suitcases",
    imageSrc: "https://www.linkpicture.com/q/suitcase1.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "/products",
  },
  {
    name: "Adventures",
    description: "Smart Bags",
    imageSrc: "https://www.linkpicture.com/q/bag1_1.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "/products",
  },
  {
    name: "Travel",
    description: "Smart Backpacks",
    imageSrc: "https://www.linkpicture.com/q/backpack_1.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "/products",
  },
];

export const features = [
  {
    name: "Lock & unlock from your phone",
    description:
      "Put your mind at ease knowing that you can lock your suitcase via your smartphone, if you get separated from your SCS, it will lock automatically. ",
  },
  {
    name: "Built-in digital scale",
    description:
      "Forget about checking your bag! SCS has a built-in digital scale so you can find out its weight and whether it’s approved by the airline. Just pull the handle and the app will tell you if you are ok to go.",
  },
  {
    name: "Built-in battery to recharge your devices",
    description:
      "That’s why we’ve included a super powerful battery charger that can charge two devices. The suitcase battery will enable you to recharge your smartphone six times over.",
  },
  {
    name: "Location Tracking ",
    description:
      "If you ever lose your SCS  or if it gets “re-routed”, the SCS network will help you track the location of your suitcase. As the network grows, we will cover the whole planet.",
  },
  {
    name: "Distance Alerts",
    description:
      "Thanks to the proximity sensors, you will receive alerts when you are separated from your SCS. You can also locate your SCS with a proximity heat map and receive a reminder of the last recorded location.",
  },
  {
    name: "Handly Access to your Electronic Devices",
    description:
      "Easy to access your electronics with a compartment at the front of the suitcase, specially designed to hold and protect your laptop and tablet. ",
  },
];
