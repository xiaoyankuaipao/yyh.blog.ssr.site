import oidc  from 'oidc-client'
var config = {
  userStore: new oidc.WebStorageStateStore(),
  authority: "http://118.24.205.200:5100",
  client_id: "vue-blog",
  redirect_uri: "http://118.24.205.200/signin-oidc",
  response_type: "id_token token",
  scope: "article openid profile address phone email",
  post_logout_redirect_uri: "http://118.24.205.200",
  silent_redirect_uri: "http://118.24.205.200/redirect-silentrenew",
  accessTokenExpiringNotificationTime: 10,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
};

var mgr = new oidc.UserManager(config);

mgr.events.addUserLoaded(function (user) {
    console.log('New User Loaded：', arguments);
    console.log('Acess_token: ', user.access_token)
})

mgr.events.addAccessTokenExpiring(function () {
    console.log("token expiring...");
});

export default class oidcService {
    //登录
    signIn() {
        mgr.signinRedirect().catch(err => {
            console.log(err);
        });
    }

    //登录回调
    sigInCallback(url) {
        mgr.signinRedirectCallback().then(function () {
            window.location.href = url;
        }).catch(err => {
            console.log(err);
        })
    }

    //获取登录用户
    getLoginUser() {
        return new Promise((resolve, reject) => {
            mgr.getUser().then(function (user) {
                if (user != null) {
                    console.log(user);
                    return resolve(user)
                } else {
                    return resolve(null);
                }
            }).catch(function (error) {
                console.log(error);
                reject(error);
            })
        })
    }

    //登出
    signOut() {
        mgr.signoutRedirect();
    }

    //刷新token
    signinSilent() {
        mgr.signinSilentCallback();
    }

}