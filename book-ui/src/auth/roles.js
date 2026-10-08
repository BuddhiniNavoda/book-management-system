const ROLE_CLAIM = "https://book-api/roles";

export function isAdminToken(token) {
  const roles = readRoles(token);
  return roles.includes("admin");
}

function readRoles(token) {
  if (!token) {
    return [];
  }

  try {
    const payload = token.split(".")[1];
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const json = JSON.parse(atob(normalized));
    const raw = json[ROLE_CLAIM] || [];
    const roles = Array.isArray(raw) ? raw : [raw];
    return roles.map((role) => String(role).toLowerCase());
  } catch {
    return [];
  }
}
