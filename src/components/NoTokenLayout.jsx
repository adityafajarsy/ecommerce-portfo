const NoTokenLayout = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (!token) return location.replace("/login");

  return (
    <div>
      {children}
    </div>
  );
};

export default NoTokenLayout;
