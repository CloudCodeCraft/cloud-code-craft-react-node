import Typography from "@mui/material/Typography";
import SectionDivider from '~/components/job-experience/section-divider/section-divider'
import ProfileSummary from "~/components/job-experience/profile-summary/profile-summary";
import Jobs from "~/components/job-experience/work-history/work-history";


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
        <SectionDivider width="lg"/>
        <ProfileSummary />
        <SectionDivider width="lg"/>
        <Jobs />
      </div>
    </>
  );
}
