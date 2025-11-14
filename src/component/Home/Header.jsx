import { useLocation } from "react-router-dom";


const Header = ({ userData }) => {
  const data = useLocation()
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-medium font-serif">Hello {userData}!</h1>
      <p className="text-sm sm:text-lg">I help you manage your activities :)</p>
    </div>
  );
};

export default Header;
