import type { Route } from "./+types/home";
import { Button, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daniel Lee Tech" },
    { name: "description", content: "Personal Website for Daniel Lee Tech" },
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
