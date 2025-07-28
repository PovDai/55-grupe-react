import { useNavigate } from "react-router";
import { LoginForm } from "../ui/LoginForm";

export function Login() {
    let navigate = useNavigate();
    return (
        <>
           <LoginForm
        onSuccess={() => {
          navigate("/dashboard"); // Po sėkmingo prisijungimo nukreipia į dashboard'ą
        }}
      />
        </>
    );
}

