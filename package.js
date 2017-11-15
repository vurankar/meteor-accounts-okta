Package.describe({
  name: 'vurankar:accounts-okta',
  version: '0.1.0',
  summary: 'Meteor login service for Okta accounts.',
  git: 'https://github.com/vurankar/meteor-accounts-okta',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use('underscore');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('vurankar:okta@0.1.0', ['client', 'server']);

  api.addFiles('okta.js');

});
