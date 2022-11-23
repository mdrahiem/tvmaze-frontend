module.exports = {
  extends: [
    "prettier",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  plugins: ["prettier"],
  ignorePatterns: ["src/auto-imports.d.ts", "src/components.d.ts"],
  rules: {
    "prettier/prettier": 2,
    "no-console": "off",
    "vue/component-tags-order": [
      "error",
      {
        order: ["template", "script", "style"],
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        svg: "never",
      },
    ],
    "vue/attributes-order": [
      "error",
      {
        alphabetical: true,
      },
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 1,
      },
    ],
    "vue/prefer-import-from-vue": "error",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
      },
    ],
    "vue/no-template-shadow": "off",
  },
};
