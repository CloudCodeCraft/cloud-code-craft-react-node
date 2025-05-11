import { styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link as RRLink } from "react-router";
import { Link as MuiLink } from "@mui/material";

function calculateYoe(startYear: number, startMonth: number): string {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  if (startMonth > currentMonth) {
    return `${currentYear - startYear} years and ${
      startMonth - currentMonth
    } months`;
  }

  if (startMonth === currentMonth) {
    return `${currentYear - startYear} years`;
  }

  return `${currentYear - startYear - 1} years and ${
    currentMonth - startMonth
  } months`;
}

const BulletPoint = styled(Box)(({ theme }) => ({
  margin: 10,
}));

export default function ProfileSummary() {
  return (
    <>
      <Typography
        variant="h3"
        noWrap
        component={"h3"}
        sx={{ textAlign: "center", marginBottom: 2 }}
      >
        Profile
      </Typography>
      <Stack sx={{ marginX: { xs: 0, sm: 0, md: 2 } }}>
        {/* profile / summary */}
        <BulletPoint>
          <Typography>
            Over {calculateYoe(2018, 5)} of professional full-stack software
            engineering experience, with hands-on contributions across the
            entire stack—including backend services, frontend interfaces,
            infrastructure, and UI/UX design.
          </Typography>{" "}
        </BulletPoint>
        <BulletPoint>
          <Typography>
            Proven experience working on applications at every stage of
            growth—from early-stage startups with no users to mature platforms
            serving millions, including large corporate systems with distributed
            engineering teams.
          </Typography>
        </BulletPoint>
        <BulletPoint>
          <Typography>
            Worked with a wide range of technologies—including React,
            JavaScript, Ruby on Rails, Python, Django, Docker, AWS, Linux,
            Blockchain, SQL, GitLab CI/CD, HTML, and CSS—gaining hands-on
            experience across the stack and infrastructure.{" "}
            <MuiLink to={"/jobExperience/technologies"} component={RRLink}>
              Click here to learn more about how I used each technology.
            </MuiLink>
          </Typography>
        </BulletPoint>
        <BulletPoint>
          <Typography>
            I believe software engineering is a team sport that also demands
            comfort with long periods of focused, independent work. I also
            believe being a positive, compassionate presence isn't just
            valuable—it's foundational to building effective, high-performing
            teams.{" "}
            <MuiLink to={"/jobExperience/workPhilosophy"} component={RRLink}>
              Click here to learn more about my work philosophy.
            </MuiLink>
          </Typography>
        </BulletPoint>
      </Stack>
    </>
  );
}
