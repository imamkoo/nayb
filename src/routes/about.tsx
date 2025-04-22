import { createFileRoute } from "@tanstack/react-router";
import News from "../components/News/News";

export const Route = createFileRoute("/about")({
  component: News,
});
