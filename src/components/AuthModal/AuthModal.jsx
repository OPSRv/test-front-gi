import {
  Button,
  Dialog,
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
  Tab,
} from "@material-tailwind/react";
import { useState } from "react";
import { SignIn } from "../SignIn/SignIn";
import { SignUp } from "../SignUp/SignUp";

export const AuthModal = () => {
  const data = [
    {
      label: "Sing In",
      value: "sing-in",
      desc: <SignIn />,
    },
    {
      label: "Sing Up",
      value: "sing-up",
      desc: <SignUp />,
    },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size="sm"
        className="static overflow-visible m-0  max-w-[400px] min-w-[400px] w-5/12 grid place-items-center"
      >
        <Tabs value="sing-in">
          <TabsHeader className="w-full h-15">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              mount: { opacity: 1 },
              unmount: { opacity: 0 },
            }}
          >
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </Dialog>

      <Button
        onClick={handleOpen}
        size="lg"
        variant="outlined"
        color="white"
        className="w-40"
      >
        Get started
      </Button>
    </>
  );
};
