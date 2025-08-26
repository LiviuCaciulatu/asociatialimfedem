import type { IntlConfig } from 'next-intl';

interface LoadLocaleFrom {
    (locale: string, namespace: string): Promise<Record<string, unknown>>;
}

interface CustomNextIntlConfig {
    locales: string[];
    defaultLocale: string;
    loadLocaleFrom: LoadLocaleFrom;
}

const nextIntlConfig: CustomNextIntlConfig = {
    locales: ['ro'],
    defaultLocale: 'ro',
    loadLocaleFrom: (locale, namespace) =>
        import(`./locales/${locale}/${namespace}.json`).then((m) => m.default)
};

export default nextIntlConfig;
