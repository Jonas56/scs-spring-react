const BASE_URL = "/api/v1";

async function httpGetUser() {
  const response = await fetch(`${BASE_URL}/users/me`);
  return await response.json();
}

async function httpRegisterUser(user) {
  try {
    return await fetch(`${BASE_URL}/register`, {
      headers: {
        "Content-type": "application/json",
      },
      method: "post",
      body: JSON.stringify(user),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpDeleteUser(id) {
  try {
    return await fetch(`${BASE_URL}/users/${id}`, {
      method: "delete",
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpUpdateUser(user, id) {
  try {
    return await fetch(`${BASE_URL}/users/${id}`, {
      method: "put",
      body: user,
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

export { httpGetUser, httpRegisterUser, httpDeleteUser, httpUpdateUser };
