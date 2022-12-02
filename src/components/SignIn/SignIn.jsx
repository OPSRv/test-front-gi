import { Button, Checkbox, Input } from "@material-tailwind/react";
import { useState } from "react";
import { ReactComponent as EyeIcon } from "../../assets/svg/eye.svg";
import useInput from "../../hooks/useInput";
import { Auth } from "../Auth/Auth";
import { getToken } from "../../services/axios";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const email = useInput("");
  const password = useInput("");

  const onClick = () => {
    console.log(email.value, password.value);

    getToken(email.value, password.value);
  };

  return (
    <>
      <Auth
        title="Sign In"
        converseTitle="Sign Up"
        question="Don't have an account?"
      >
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
          type={showPassword ? "text" : "password"}
        />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
        <Button variant="gradient" fullWidth color="blue" onClick={onClick}>
          Sign In
        </Button>
      </Auth>
    </>
  );
};
