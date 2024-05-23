import { Typography } from "@/components/ui/typography";

const H1 = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <>
      <Typography
        $size="size26"
        $color="primary"
        style={{
          marginVertical: 10,
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        {children}
      </Typography>
    </>
  );
};

export default H1;
