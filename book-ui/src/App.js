import { useAuth0 } from "@auth0/auth0-react";
import Landing from "./components/Landing";
import Workspace from "./components/Workspace";
import "./App.css";

function App({ authConfigured = true }) {
  if (!authConfigured) {
    return <Landing authReady={false} />;
  }

  return <AuthenticatedApp />;
}

function AuthenticatedApp() {
  const {
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    getAccessTokenSilently,
  } = useAuth0();

  if (isLoading) {
    return (
      <main className="gate">
        <section className="gate-panel">
          <p className="eyebrow">Book Management</p>
          <h1>Opening your session</h1>
        </section>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <Landing
        authReady
        onLogin={() => loginWithRedirect()}
        onSignup={() =>
          loginWithRedirect({
            authorizationParams: { screen_hint: "signup" },
          })
        }
      />
    );
  }

  return (
    <Workspace
      user={user}
      getAccessTokenSilently={getAccessTokenSilently}
      onLogout={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    />
  );
}

export default App;
