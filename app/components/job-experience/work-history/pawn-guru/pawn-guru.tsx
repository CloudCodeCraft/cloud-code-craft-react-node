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
          display: "inline",
        }}
      >
        at Pawn Guru
      </Typography>
      <Typography sx={{ display: "inline", paddingLeft: 2, color: "gray" }}>
        Aug 2020 to Oct 2021
      </Typography>

      <Box>
        <List>
          <ListItem>
            <Typography>
              Implemented Google Sign-In to streamline user onboarding and
              reduce friction in the signup flow. Integrated OAuth
              authentication into the React frontend and Django backend, and
              securely mapped existing Gmail-based accounts to enable seamless
              login and account creation.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Refactored a legacy React component library originally built with
              outdated wrapper patterns over Material UI and Formik. Removed
              unnecessary abstractions, improving maintainability, readability,
              and modular structure of the codebase.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Rebuilt core UI components using native Material UI elements and
              React hooks to improve first-paint performance, reduce unnecessary
              re-renders, and eliminate flaky behavior in headless test
              environments. The refactor also reduced bundle size and
              accelerated development cycles.
            </Typography>
          </ListItem>{" "}
          <ListItem>
            <Typography>
              Led a redesign and A/B testing initiative for the company’s lead
              generation forms. Collaborated with product and UX teams to launch
              multiple variants and analyze performance, resulting in a 30%
              increase in lead conversions driven by data-informed UI
              improvements.
            </Typography>
          </ListItem>{" "}
        </List>
      </Box>
    </>
  );
}
