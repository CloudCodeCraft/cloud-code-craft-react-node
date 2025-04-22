import type { Route } from "./+types/home";
import { Button, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cloud Code Craft" },
    { name: "description", content: "Website for all things coding in the cloud by Daniel Lee" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Typography variant="h1" component="h2">
        h1. Heading <AcUnitIcon />
      </Typography>
      <Button variant="contained">Button</Button>
    </>
  );
}
