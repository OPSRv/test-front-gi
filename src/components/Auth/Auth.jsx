import {
  CardBody,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { ReactComponent as StravaIcon } from "../../assets/svg/github.svg";
import { ReactComponent as DexComIcon } from "../../assets/svg/google.svg";
import { ButtoneSocial } from "../ButtonFullWidth/ButtoneSocial";
import {
  handleLoginStrava,
  handleLoginDexCom,
} from "../../services/environmentVariables";

export const Auth = ({ children, question, converseTitle }) => {
  return (
    <>
      <DialogBody className="flex flex-col gap-4">
        <CardBody className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div onClick={handleLoginStrava} className="w-[135px]">
              <ButtoneSocial title="Conect to Strava">
                <StravaIcon />
              </ButtoneSocial>
            </div>
            <div onClick={handleLoginDexCom} className="w-[135px]">
              <ButtoneSocial title="Conect to DexCom">
                <DexComIcon />
              </ButtoneSocial>
            </div>
          </div>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          {children}
        </CardBody>
      </DialogBody>
      <DialogFooter className="pt-0 flex justify-center ">
        <Typography variant="small" className="flex justify-center ">
          {question}
          <Typography
            as="a"
            href="#signup"
            variant="small"
            className="ml-1 font-bold "
          >
            {converseTitle}
          </Typography>
        </Typography>
      </DialogFooter>
    </>
  );
};
