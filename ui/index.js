function displayAuthResults(accessToken) {
  var el = document.getElementById('mutation');
  el.style.visibility = 'visible';
  var mutation = `
  mutation {
    authenticateUser(
      accessToken: "${accessToken}"
    ) {
      id
      token
    }
  }
  `;
  el.innerHTML = mutation;
}

document.addEventListener('DOMContentLoaded', function(event) {
  var webAuth = new auth0.WebAuth({
    audience: 'http://localhost:8080',
    clientID: 'za9gFnUVzet1N0sOL8Y4Q7s5OKS0rQJ9',
    domain: 'suneikii.auth0.com',
    redirectUri: 'http://localhost:8080',
    responseType: 'token',
    scope: 'openid email'
  });

  var elButton = document.getElementById('authenticate');
  elButton.addEventListener('click', function() {
    webAuth.authorize();
  });

  webAuth.parseHash(function(err, authResult) {
    if (err) return console.error(err);
    if (authResult && authResult.accessToken) {
      window.location.hash = '';
      displayAuthResults(authResult.accessToken);
    }
    console.log(authResult);
  });
});