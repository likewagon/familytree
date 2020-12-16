const getToken = () => {
  let savedToken = '';
  let authUser = localStorage.getItem("familytreeuser");
  if (authUser) {
    let authUserObj = JSON.parse(authUser);
    savedToken = authUserObj.token
  };
  let token = savedToken ? savedToken : '';

  return token;
}

export { getToken };
