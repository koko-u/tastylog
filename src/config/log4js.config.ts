export const config = {
  appenders: {
    consoleLogAppender: {
      type: 'console',
      layout: {
        type: 'coloured',
      },
    },
  },
  categories: {
    default: {
      appenders: ['consoleLogAppender'],
      level: 'DEBUG',
    },
  },
}
