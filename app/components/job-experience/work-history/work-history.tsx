import DishNetwork from "./dish-network/dish-network";
import PawnGuru from "./pawn-guru/pawn-guru";
import Typography from "@mui/material/Typography";
import SectionDivider from "../section-divider/section-divider";
import EthicalIdentity from "./ethical-identity/ethical-identity";
import TailoredIndustry from "./tailored-industry/tailored-industry";

export default function WorkHistory() {
  return (
    <>
      <Typography
        variant="h3"
        noWrap
        component={"h3"}
        sx={{ textAlign: "center", marginBottom: 2 }}
      >
        Work History
      </Typography>
      <DishNetwork />
      <SectionDivider width="md" />

      <PawnGuru />
      <SectionDivider width="md" />
      <EthicalIdentity />
      <SectionDivider width="md" />
      <TailoredIndustry />
    </>
  );
}
