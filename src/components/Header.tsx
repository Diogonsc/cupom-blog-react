import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!isAuthenticated) return null;

  return (
    <header className="bg-blue-600 shadow-lg mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <img
              src="https://cdn.meucupom.com/app-assets/5.07.46/novomc/assets/images/logo.png"
              alt="Meu Cupom"
              className="h-10"
            />
            <h1 className="text-white text-xl font-semibold">Blog</h1>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="text-white border-white hover:bg-white hover:text-blue-600"
          >
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
