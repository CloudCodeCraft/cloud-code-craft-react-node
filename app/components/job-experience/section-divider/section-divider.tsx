import Divider from "@mui/material/Divider";

export type Width = "sm" | "md" | "lg";

export type SectionDividerProps = {
  width: Width;
};

export default function SectionDivider(props: SectionDividerProps) {
  return (
    <Divider
      sx={{ width: translateWidth(props.width), marginX: "auto", marginY: 4 }}
    />
  );
}

function translateWidth(width: Width) {
  if (width == "lg") return "80rem";
  if (width == "md") return "70rem";
  return "60rem";  
}
