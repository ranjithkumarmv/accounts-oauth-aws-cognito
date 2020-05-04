Package.describe({
  name: 'ranjithkumarmv:accounts-oauth-aws-cognito',
  version: '0.0.1',
  summary: 'OAuth2 for Aws Cognito',
  git: 'https://github.com/ranjithkumarmv/accounts-oauth-aws-cognito',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('ranjithkumarmv:oauth-aws-cognito', ['client', 'server']);

  api.addFiles('accounts-cognito_login_button.css', 'client');

  api.addFiles('accounts-cognito.js');
});
