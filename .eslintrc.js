module.exports = {
    root: true,
    env: {
        node: true,
        "vue/setup-compiler-macros": true
    },
    extends: [
        "plugin:vue/base",
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-strongly-recommended",
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/typescript/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        indent: ["error", 4],
        "comma-dangle": ["error", "never"],
        "max-len": ["error", { code: 300 }],
        "space-before-function-paren": ["error", "never"],
        "no-useless-constructor": "off",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "@typescript-eslint/no-explicit-any": "off",
        "vue/max-attributes-per-line": ["error", {"singleline": 10, "multiline": 10}],
        "vue/singleline-html-element-content-newline": ["error", {
            "ignoreWhenNoAttributes": true,
            "ignoreWhenEmpty": true,
            "ignores": ["th", "a"]    
        }]
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            env: {
                jest: true
            }
        }
    ]
};
