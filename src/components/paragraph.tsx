import { Typography } from "./ui/typography";

const Paragraph = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <>
      <Typography
        $size="md"
        $color="gray"
        style={{ marginVertical: 10 }}
      >
        {children}
      </Typography>
    </>
  );
};

export default Paragraph;
