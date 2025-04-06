import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/default.tsx", [
    index("routes/home.tsx"),
    route("jobExperience", "routes/job-experience.tsx"),
    route("blog", "routes/blog.tsx")
  ]),
] satisfies RouteConfig;
