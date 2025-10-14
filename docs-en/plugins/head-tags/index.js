export default function headTagsPlugin() {
  return {
    name: 'head-tags-plugin',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://fonts.googleapis.com',
            },
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://fonts.gstatic.com',
              crossorigin: '',
            },
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
            },
          },
        ],
      };
    },
  };
}
