
function (user, context, callback) {
    const namespace = 'http://localhost';

    let idTokenClaims = context.idToken || {};
    let accessTokenClaims = context.accessToken || {};



    accessTokenClaims[`${namespace}/userData`] = user;
    accessTokenClaims[`${namespace}/roles`] = context.authorization.roles;

    context.idToken = idTokenClaims;
    context.accessToken = accessTokenClaims;
    callback(null, user, context);
}