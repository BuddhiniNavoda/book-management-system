function Landing({ onLogin, onSignup, authReady }) {
  return (
    <main className="gate">
      <section className="gate-brand">
        <p className="eyebrow">Library desk</p>
        <h1>Book Management</h1>
      </section>

      <section className="gate-panel">
        <button
          className="signup-btn"
          type="button"
          onClick={onSignup}
          disabled={!authReady}
        >
          Sign up
        </button>
        <button
          className="login-btn"
          type="button"
          onClick={onLogin}
          disabled={!authReady}
        >
          Log in
        </button>
        {!authReady && (
          <p className="hint">
            Add your Auth0 domain and client id in book-ui/.env, then restart the app. Sign up creates the account in Auth0. A new account is staff. An admin is assigned in Auth0.
          </p>
        )}
      </section>
    </main>
  );
}

export default Landing;
