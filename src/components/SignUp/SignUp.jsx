import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

import { ReactComponent as EyeIcon } from "../../assets/svg/eye.svg";
import useInput from "../../hooks/useInput";
import { Auth } from "../Auth/Auth";
import { createUser } from "../../services/axios";

export const SignUp = () => {
  const userName = useInput("");
  const email = useInput("");
  const password = useInput("");
  const [showPassword, setShowPassword] = useState(false);

  const onClick = () => {
    console.log(userName.value, email.value, password.value);

    createUser(userName.value, email.value, password.value);
  };

  return (
    <>
      <Auth
        title="Sign Up"
        converseTitle="Sign In"
        question="Do you have an account?"
      >
        <Input {...userName} label="User name" size="lg" />
        <Input {...email} label="Email" size="lg" autoFocus />
        <Input
          {...password}
          label="Password"
          size="lg"
          icon={
            <EyeIcon
              className="cursor-pointer"
              onClick={() => {
                setShowPassword((showPassword) => !showPassword);
              }}
            />
          }
          type={showPassword ? "" : "password"}
        />
        <Button variant="gradient" fullWidth color="blue" onClick={onClick}>
          Create my account
        </Button>
      </Auth>
    </>
  );
};
