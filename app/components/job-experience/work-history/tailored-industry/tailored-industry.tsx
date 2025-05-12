import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function TailoredIndustry() {
  return (
    <>
      <Typography variant="h4" noWrap component={"h4"}>
        Junior Full Stack Engineer
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
        at Tailored Industry
      </Typography>
      <Typography sx={{ display: "inline", paddingLeft: 2, color: "gray" }}>
        Aug 2020 to Oct 2021
      </Typography>

      <Box>
        <List>
          <ListItem>
            <Typography>
              Designed and implemented a production automation system that
              triggered manufacturing jobs immediately after a Shopify order was
              placed. Built a custom Shopify app, integrated with industrial 3D
              knitting machines via a private cloud, and connected the flow to a
              Rails-based backend.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Enabled real-time manufacturing by bringing industrial knitting
              hardware online, eliminating manual steps between order placement
              and production initiation, and significantly reducing processing
              time.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Built an internal analytics dashboard to monitor factory output
              and worker performance. Automated data pipelines replaced manual
              tracking, providing near real-time visibility into production
              metrics and identifying operational inefficiencies.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Transformed raw output data into actionable insights through
              backend aggregation and frontend visualization, improving
              manufacturing planning and resource allocation.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Redesigned the MySQL schema and refactored the backend
              architecture to accommodate a restructured domain model. This
              redesign allowed the system to support rapidly evolving business
              requirements and future product expansions.
            </Typography>
          </ListItem>{" "}
        </List>
      </Box>
    </>
  );
}
