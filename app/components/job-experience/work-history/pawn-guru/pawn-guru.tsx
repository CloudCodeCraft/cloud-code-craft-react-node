import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function PawnGuru() {
  return (
    <>
      <Typography variant="h4" noWrap component={"h4"}>
        Front End Consultant
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
        at Pawn Guru
      </Typography>

      <Box>
        <List>
          <ListItem>
            <Typography>
              Implemented Google Sign-In to streamline user onboarding and
              improve lead conversion rates. The project involved integrating
              OAuth on the React front end, verifying tokens securely in the
              Django backend, and linking existing Gmail-based accounts to the
              new auth system. This reduced friction in the signup process and
              increased first-time user engagement.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Modernized a legacy in-house React component library that was
              built with outdated wrapper patterns on top of Material UI and
              Formik. Removed unnecessary abstractions, improving
              maintainability, readability, and modularity across the codebase.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Leveraged React hooks and direct usage of Material UI components
              to reduce unnecessary re-renders, improve first-paint performance,
              and eliminate flaky behaviors in headless testing environments.
              The refactor also sped up development cycles and reduced bundle
              size.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Led a redesign and A/B testing initiative for the platform’s lead
              generation form. Collaborated with product and UX teams to test
              multiple variations, resulting in a 30% increase in user
              conversions.
            </Typography>
          </ListItem>{" "}
        </List>
      </Box>
    </>
  );
}
