# Accounts Okta meteor package
__A login service for Okta accounts__

## Getting started

Add the package to meteor
```javascript
meteor add vurankar:accounts-okta
```

## Basic usage

The usage is pretty much the same as all other account packages for meteor. This is a stripped dowm version customized for Okta and derived from Q42:meteor-accounts-microsoft which inturn is inspired by Google meteor accounts.
It goes a little bit something like this:
```javascript
Meteor.loginWithOkta({
    requestOfflineToken: true,
    requestPermissions: ['wl.emails'] // Permission scopes are found here: https://msdn.okta.com/en-us/library/hh243648.aspx
}, function(error) {
    if (error) {
        console.error('Login failed:', error.reason || error);
    }
    else {
        console.log('Logged in!');
    }
});
```

You can also use the Meteor [accounts-ui](https://atmospherejs.com/meteor/accounts-ui) package so you only have to add;
```
{{> loginButtons}}
```
to your HTML.

## Options object
```javascript
var options = {
    // Whether or not to fetch a refresh token
    requestOfflineToken: true,
    // Permission scopes. 
    requestPermissions: [], 
    // Whatever paramteres you want to give to the authentication url. 
    loginUrlParameters: [], 
    loginStyle: "popup" or "redirect",
    redirectUrl: ""
}
```

## References

[Official meteor documentation](http://docs.meteor.com/#/full/meteor_loginwithexternalservice)

### OAuth package

* [vurankar:okta](https://github.com/vurankar/meteor-okta)

