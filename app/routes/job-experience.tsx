import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ProfileSummary from "~/profile-summary/profile-summary";

export default function JobExperience() {
  return (
    <>
      <div>
        <Typography variant="h1" noWrap component={"h1"}>
          Daniel Lee
        </Typography>
        <Typography
          variant="h2"
          noWrap
          component={"h2"}
          sx={{
            ml: 10,
            textDecoration: "underline",
            color: "rgb(13, 202, 240)",
          }}
        >
          Software Engineer
        </Typography>
        <Divider sx={{ width: "80rem", marginX: "auto", marginY: 2 }} />

        <ProfileSummary />
      </div>
    </>
  );
}
