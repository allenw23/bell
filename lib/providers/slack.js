'use strict';

exports = module.exports = function () {

    return {
        protocol: 'oauth2',
        auth: 'https://slack.com/oauth/authorize',
        token: 'https://slack.com/api/oauth.access',
        scope: ['identify'],
        scopeSeparator: ',',
        profile: function (credentials, params, get, callback) {

            get('https://slack.com/api/auth.test', { token: credentials.token }, (profile) =>
            {
                credentials.profile = {};
                credentials.profile.id = profile.user_id;
                credentials.profile.username = profile.user;
                credentials.profile.displayName = profile.user;
                credentials.profile.team = profile.team;
                credentials.profile.team_id = profile.team_id;
                credentials.profile.url = profile.url;
                credentials.profile.raw = profile;
                return callback();
            });
        }
    };
};

