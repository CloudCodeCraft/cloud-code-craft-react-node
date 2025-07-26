import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import SectionDivider from "~/components/job-experience/section-divider/section-divider";

export default function Technologies() {
  return (
    <div>
      <Typography variant="h1" sx={{textAlign: 'center'}}>Technologies</Typography>
      <SectionDivider width="sm"></SectionDivider>
      <List>
        <ListItem>
          <Typography variant="h2">Ruby On Rails</Typography>
        </ListItem>
              <SectionDivider width="md"></SectionDivider>

      </List>
    </div>
  );
}
