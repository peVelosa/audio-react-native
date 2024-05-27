import { Typography } from "@/styles/typography";

const H2 = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <>
      <Typography
        $size="size22"
        $color="primary"
        style={{ marginVertical: 15 }}
      >
        {children}
      </Typography>
    </>
  );
};

export default H2;
