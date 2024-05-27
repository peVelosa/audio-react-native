import { Typography } from "@/styles/typography";

const Paragraph = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <>
      <Typography
        $size="size14"
        $color="gray"
        style={{ marginVertical: 10 }}
      >
        {children}
      </Typography>
    </>
  );
};

export default Paragraph;
