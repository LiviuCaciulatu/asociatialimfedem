/** @type {import('next-intl').NextIntlConfig} */
module.exports = {
  locales: ['ro'],
  defaultLocale: 'ro',
  loadLocaleFrom: (locale, namespace) =>
    import(`./locales/${locale}/${namespace}.json`).then((m) => m.default)
};
