import Typography from "@mui/material/Typography";

export default function JobExperience() {
  return (
    <>
      <div>
        <Typography variant="h1" noWrap component={"h1"}>
          Daniel Lee
        </Typography>
        <Typography variant="h2" noWrap component={"h2"} sx={{ml: 10, textDecoration: 'underline', color: 'rgb(13, 202, 240)'}}>
          Software Engineer
        </Typography>
      </div>
    </>
  );
}
