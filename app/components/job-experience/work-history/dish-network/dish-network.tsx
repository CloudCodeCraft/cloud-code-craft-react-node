import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function DishNetwork() {
  return (
    <>
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
          display: "inline",
        }}
      >
        At DISH Network
      </Typography>
      <Typography sx={{ display: "inline", paddingLeft: 2, color: "gray" }}>
        April 2022 to Current
      </Typography>

      <Box>
        <List>
          <ListItem>
            <Typography>
              Conceived, pitched, and implemented a real-time sports prediction
              game for DISH subscribers, handling everything from backend API
              development to frontend integration using React and Redux.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Built scalable Rails endpoints and background job processing with
              Sidekiq to support live user interactions during events.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Migrated core external services in a 14-year-old monolith to
              modern upstream dependencies, improving video playback and
              metadata quality while preserving API stability.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Contributed to the architectural shift from a monolithic codebase
              to a microservices structure by identifying service boundaries and
              extracting independent components.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Re-engineered ingestion workflows for live TV scheduling data to
              reduce replication errors and improve consistency in high-change
              environments.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Dockerized the legacy Rails application to streamline local
              development and standardize deployment environments across teams.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Led the migration from Jenkins to GitLab CI/CD by designing
              Docker-in-Docker pipelines for stable, reliable builds and
              automated deployments.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Collaborated with DevOps to containerize services, implement
              service discovery, and configure health checks and deployment
              automation.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Led documentation efforts for a legacy Rails codebase with minimal
              existing resources, reducing onboarding friction and increasing
              maintainability.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Facilitated knowledge transfer through pair programming,
              onboarding workshops, and technical walkthroughs for
              cross-functional stakeholders.
            </Typography>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
