// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      "vue/html-self-closing": [
        "warn",
        {
          html: { normal: "always", void: "always" },
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
    },
  }
);
