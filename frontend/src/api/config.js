let token = null;

const setToken = (newToken) => {
  return `bearer ${newToken}`;
};

const config = {
  headers: { Authorization: token },
};

export { setToken, config };
