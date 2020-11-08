const configConventional = require('@commitlint/config-conventional')

module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'setup',
        ...configConventional.rules['type-enum'][2]
      ]
    ]
  }

}
