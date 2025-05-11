import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

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

      <Typography variant="h4" noWrap component={"h4"}>
        Staff Software Engineer
      </Typography>
      <Typography
        variant="h5"
        noWrap
        component={"h5"}
        sx={{
          ml: 10,
          textDecoration: "underline",
          color: "rgb(13, 202, 240)",
        }}
      >
        At DISH Network
      </Typography>

      <Box>
        <List>
          <ListItem>
            <Typography>
              Conceived, pitched, and implemented a real-time sports prediction
              game for DISH Network subscribers. Built scalable Ruby on Rails
              API endpoints with Sidekiq for background processing and
              integrated the frontend with React and Redux. The feature allowed
              users to engage interactively during live events, aligning with
              DISH’s innovation-driven culture.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Led the migration of two core external dependencies within a
              14-year-old Ruby on Rails monolith, enabling support for modern
              video playback functionality and richer metadata. This initiative
              ensured continued platform stability and compatibility in a
              microservices architecture using the API Gateway pattern.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Improved ingestion workflows for live TV metadata by redesigning
              job scheduling mechanisms to reduce data replication errors during
              rapid scheduling changes. Enhanced data reliability and
              performance across the platform’s content ingestion pipeline.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Dockerized the legacy Ruby on Rails application to streamline
              local development and deployment processes. Rewrote GitLab CI/CD
              pipeline jobs using Docker-in-Docker, enabling stable, efficient
              builds during a company-wide migration from Jenkins to GitLab.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Led internal documentation efforts for a legacy Rails monolith
              with limited existing knowledge. Organized and conducted
              cross-team training sessions and pair programming seminars to
              improve onboarding, collaboration, and long-term maintainability
              across engineering and stakeholder teams.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Contributed to the architectural redesign of a legacy 14-year-old
              Ruby on Rails monolith by identifying logical service boundaries
              and extracting functionality into independently deployable
              microservices.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Led internal documentation efforts for a legacy Rails monolith
              with limited existing knowledge. Organized and conducted
              cross-team training sessions and pair programming seminars to
              improve onboarding, collaboration, and long-term maintainability
              across engineering and stakeholder teams.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Collaborated closely with DevOps to containerize services and set
              up service discovery, health checks, and automated deployments
              using Docker and GitLab CI/CD.{" "}
            </Typography>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
