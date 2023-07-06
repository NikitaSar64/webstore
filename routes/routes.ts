const ROUTES = {
  main: {
    createRoute: (): string => "/",
    mask: "/",
  },

  about: {
    createRoute: (): string => "/about",
    mask: "about",
  },

  contact: {
    createRoute: (): string => "/contact",
    mask: "contact",
  },

  detail: {
    createRoute: (id: number): string => `/productDetails/${id}`,
    mask: "detail",
  },

  products: {
    createRoute: (): string => "/products",
    mask: "products",
  },

  profile: {
    createRoute: (userId: number): string => `/profile/${userId}`,
    mask: "profile",
  },

  settings: {
    createRoute: (): string => "/settings",
    mask: "settings",
  },

  upload: {
    createRoute: (): string => "/upload",
    mask: "upload",
  },

  withdrawals: {
    createRoute: (): string => "/withdrawals",
    mask: "withdrawals",
  },
};

export default ROUTES;
