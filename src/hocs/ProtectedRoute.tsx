import { Navigate } from "react-router-dom";
import { IProtectedRouteProps } from "../Interfaces/IProps";

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/admin/login" replace />
};

export default ProtectedRoute;