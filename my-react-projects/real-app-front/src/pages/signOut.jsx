import { useEffect } from "react";
import { useAuth } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { toast} from "react-toastify"

function SignOut() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
    await logout();
    navigate("/");
    toast.success("logged out")
    

  };

  handleLogout();
  }, [logout,navigate]);
}

export default SignOut;
