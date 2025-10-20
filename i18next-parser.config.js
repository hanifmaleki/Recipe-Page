module.exports = {
    input: ['dist/**/*.html'],
    output: 'translations/$LOCALE.json',
    locales: ['en', 'de'],
    defaultNamespace: 'translation',
    keySeparator: '.',
    namespaceSeparator: ':',
    lexers: {
        pug: ['HTMLLexer'], // ✅ treat Pug like HTML
    },
    defaultValue: (locale, namespace, key) => {
        // auto-generate readable placeholders
        return key.split('.').pop().replace(/[-_]/g, ' ');
    },
}
