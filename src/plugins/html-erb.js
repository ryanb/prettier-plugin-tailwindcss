// This is a placeholder parser that does nothing
// so we can override it with Tailwind CSS transformer
export const languages = [
  {
    name: 'html-erb',
    parsers: ['html-erb'],
    extensions: ['.html.erb'],
    vscodeLanguageIds: ['erb'],
  },
]

export const parsers = {
  'html-erb': {
    preprocess: (text) => text,
    parse: (text) => {
      return { text }
    },
    astFormat: 'html-erb-text',
    locStart: (node) => node.start,
    locEnd: (node) => node.end,
  },
}

export const printers = {
  'html-erb-text': {
    print: (path, _options, _print) => path.getValue().text,
  },
}
