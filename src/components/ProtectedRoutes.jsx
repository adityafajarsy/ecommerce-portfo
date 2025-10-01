export const TokenLayout = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (token) return location.replace("/");

  return <div>{children}</div>;
};

export const NoTokenLayout = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (!token) return location.replace("/login");

  return <div>{children}</div>;
};

