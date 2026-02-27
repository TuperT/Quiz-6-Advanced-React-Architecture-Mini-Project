import { useContext } from "react";
import { AuthContext } from "../contexts/AuthenticationContext";

export const useAuth = () => useContext(AuthContext);