/**
 * @info okta configuration and logics can be maintained here
 */

export default {
    oidc: {
        clientId: '0oab12h7kpIS52ZN05d7',
        redirectUri: 'com.okta.dev-10476708:/callback',
        endSessionRedirectUri: 'com.okta.dev-10476708:/',
        discoveryUri: 'https://dev-10476708.okta.com/oauth2/default',
        scopes: [
            'openid',
            'profile',
            'offline_access',
            'email',
            'phone',
            'address',
            'hhn',
        ],
        requireHardwareBackedKeyStore: false,
    },
};