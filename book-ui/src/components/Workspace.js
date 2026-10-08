import { useEffect, useState } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import { setTokenGetter } from "../api";
import { isAdminToken } from "../auth/roles";

function Workspace({ user, getAccessTokenSilently, onLogout }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setTokenGetter(async () => getAccessTokenSilently());

    let active = true;
    getAccessTokenSilently()
      .then((token) => {
        if (active) {
          setIsAdmin(isAdminToken(token));
        }
      })
      .catch(() => {
        if (active) {
          setIsAdmin(false);
        }
      });

    return () => {
      active = false;
    };
  }, [getAccessTokenSilently]);

  const handleSuccess = () => {
    setSelectedBook(null);
    setRefresh((current) => !current);
  };

  return (
    <div className="workspace">
      <header className="topbar">
        <div>
          <p className="eyebrow">Book Management</p>
          <strong>{user?.email || user?.name}</strong>
        </div>
        <div className="topbar-actions">
          <span className={isAdmin ? "role-badge admin" : "role-badge staff"}>
            {isAdmin ? "Admin" : "Staff"}
          </span>
          <button className="logout-btn" type="button" onClick={onLogout}>
            Log out
          </button>
        </div>
      </header>

      <main className="workspace-main">
        <BookForm selectedBook={selectedBook} onSuccess={handleSuccess} />
        <BookList
          refreshTrigger={refresh}
          onEdit={setSelectedBook}
          canDelete={isAdmin}
        />
      </main>
    </div>
  );
}

export default Workspace;
