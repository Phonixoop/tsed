module.exports = {
  rootDir: process.cwd(),
  packagesDir: "packages/",
  scanPatterns: [
    "<rootDir>/packages/**/lib/**/*.d.ts",
    "!<rootDir>/packages/**/lib/**/data/*.ts",
    "!**/ProxyMap.ts",
    "!**/ProxyRegistry.ts",
    "!**/Storable.ts",
    "!**/mvc/utils/**",
    "!**/mvc/constants/**",
    "!**/converters/constants/**",
    "!**/converters/decorators/**",
    "!**/converters/components/**",
    "!**/converters/errors/**",
    "!**/converters/registries/**",
    "!**/jsonschema/**",
    "!<rootDir>/packages/packages/seq",
    "!<rootDir>/packages/packages/test-artillery",
    "!<rootDir>/packages/packages/servestatic",
    "!<rootDir>/packages/packages/testing",
    "!<rootDir>/packages/integration",
    "!<rootDir>/packages/integration-express",
    "!<rootDir>/packages/platform-test-utils",
    "!<rootDir>/packages/swagger/lib/class",
    "!<rootDir>/packages/swagger/lib/utils",
    "!<rootDir>/packages/swagger/lib/decorators/{baseParameter,consumes,deprecated,description,example,name,produces,responses,returns,returnsArray,security,summary,operation,title}.ts",
    "!**/node_modules"
  ],
  outputDir: "<rootDir>/docs/api",
  baseUrl: "/api",
  jsonOutputDir: "<rootDir>/docs/.vuepress/public",
  scope: "@tsed",
  modules: {
    "core": "core",
    "di": "di",
    "common": "common",
    "exceptions": "exceptions",
    "ajv": "ajv",
    "mongoose": "mongoose",
    "multipartfiles": "multipartfiles",
    "passport": "passport",
    "servestatic": "servestatic",
    "socketio": "socketio",
    "swagger": "swagger",
    "typeorm": "typeorm",
    "testing": "testing"
  }
};
