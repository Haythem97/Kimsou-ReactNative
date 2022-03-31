#mettre en place un linter/Prettier

installé le prettier en cherchant esbenp.prettier-vscode sur vscode

installé le linter en cherchant dbaeumer.vscode-eslint sur vscode

installer les dependances suivantes:

npm install eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint @babel/eslint-parser --dev

ou

yarn add eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint @babel/eslint-parser --dev

supprimer le .prettierrc.js et creer un .prettierrc et copier ceci dedans :

```
{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "endOfLine": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": true,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false,
  "parser": "babel"
}
```

supprimer le contenu de  .eslintrc.js et copier ceci dedans :
```
module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 8,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'react/no-unescaped-entities': 'off',
    'no-use-before-define': 'off',
    'default-param-last': 'off',
    'no-plusplus': 'off',
    'no-return-await': 'off'
  }
}

```

dans votre dossier .vscode ajouter un fichier settings.json 

```

{
  // does not render single space between words
  "editor.renderWhitespace": "boundary",
  // vertical rule after 80 charachter
  "editor.rulers": [80],
  // turns off validations that VSCode
  "javascript.validate.enable": false,
  // tab = 2 spaces 
  "editor.tabSize": 2,
  // java support on vscode
  // "java.configuration.updateBuildConfiguration": "automatic",
  // Use prettier-eslint instead of prettier. Other settings will only be fallbacks in case they could not be inferred from ESLint rules.
  // "prettier.eslintIntegration": true,
  // format javascript file on save
  // "[javascript]": {
  //   "editor.formatOnSave": true
  // },
  //   "[javascript]": {
  //     // "editor.defaultFormatter": "esbenp.prettier-vscode",
  //     "editor.formatOnSave": true
  // },
  // "eslint.autoFixOnSave": true,
  "git.ignoreLimitWarning": true,
  // "editor.codeActionsOnSave": {
  //   "source.fixAll.eslint": true
  // }
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },

}
```