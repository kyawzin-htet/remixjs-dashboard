
const Config = {
  stripe: {
    public:
      typeof window !== "undefined"
        ? window.ENV.REMIX_PUBLIC_STRIPE_PUBLISHABLE_KEY
        : process.env.REMIX_PUBLIC_STRIPE_PUBLISHABLE_KEY,

    secret:
      typeof window !== "undefined"
        ? window.ENV.REMIX_PUBLIC_STRIPE_SECRET_KEY
        : process.env.REMIX_PUBLIC_STRIPE_SECRET_KEY,
  },
};

export default Config;