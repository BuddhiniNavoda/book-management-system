import { isAdminToken } from "./roles";

function tokenWith(roles) {
  const payload = btoa(JSON.stringify({ "https://book-api/roles": roles }));
  return `header.${payload}.signature`;
}

test("admin can delete", () => {
  expect(isAdminToken(tokenWith(["admin"]))).toBe(true);
});

test("staff cannot delete", () => {
  expect(isAdminToken(tokenWith(["staff"]))).toBe(false);
});

test("a new account without a role is staff", () => {
  expect(isAdminToken(tokenWith([]))).toBe(false);
});
