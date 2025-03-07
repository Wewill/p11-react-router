import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("single/:singleId", "routes/single.tsx"),
  //   route("*", "routes/Error.tsx"), // Catch-all route for 404 page
] satisfies RouteConfig;
