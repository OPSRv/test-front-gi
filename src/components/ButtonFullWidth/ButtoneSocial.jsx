import { Button } from "@material-tailwind/react";

export const ButtoneSocial = ({ children, title }) => {
  return (
    <Button
      ripple={true}
      variant="outlined"
      fullWidth
      className="grid place-items-center gap-4"
      size="sm"
    >
      {children}
      {title}
    </Button>
  );
};
