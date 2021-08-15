module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "interview-image":
          "url('https://images.unsplash.com/photo-1554446422-d05db23719d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
