module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        alias: {
          '@config': '',
          '@domain': './src/domain',
          '@infra': './src/infra',
          '@presentation': './src/presentation',
          '@util': './src/util',
          '@data': './src/data',
          '@damin': './src/main',
          '@main': './src/main',
          '@validation': './src/validation',
          '@app': './src/app',
          '@config': './src/config'
        }
      }]
    ],
    ignore: [
      '**/*.spec.ts',
      '**/*.test.ts'
    ]
  }