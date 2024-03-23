import { useNavigate } from "react-router-dom";
import { Form } from "../components/form";

export const Homepage = () => {
  const navigate = useNavigate();

    return (
      <Form onSubmitButtonAction={()=> {
        setTimeout(() => {
          navigate("/listPage");
        }, [200])  
      }}/>
    );
  };