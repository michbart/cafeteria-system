# cafeteria-i18n

Due to incompatibility of ngx-i18nsupport with Angular 13, this is a temporary workaround to merge translation files.

1. Modify `node_modules/@ngx-i18nsupport/ngx-i18nsupport/src/xliffmerge/xliff-merge.js:35` and replace `i = 1` with `i = 2`
2. From cafeteria-enduser call `npm run extract-i18n`
