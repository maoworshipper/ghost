export const useLogout = () => {
  const logout = () => {
    console.log("logout");
    /* localStorage.removeItem('token')
        window.location.href = '/login' */
  };
  return { logout };
};
