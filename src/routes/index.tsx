import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createFileRoute } from "@tanstack/react-router";
import ExploreMore from "../components/ExploreMore/ExploreMore";
import FrequentTravelers from "../components/FrequentTravelers";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main";
import News from "../components/News/News";
import Page from "../components/Page";
import Services from "../components/Services/Services";
import Steps from "../components/Steps/Steps";
import Testimonials from "../components/Testimonials/Testimonials";
import MenuContextProvider from "../contexts/MobileMenuContext";

const queryClient = new QueryClient();

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <MenuContextProvider>
        <Page>
          <Header>
            <Hero />
          </Header>
          <Main>
            <Steps />
            <Services />
            <News />
            <ExploreMore />
            <FrequentTravelers />
            <Testimonials />
          </Main>
        </Page>
      </MenuContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
