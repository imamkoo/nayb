import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Main from "../components/Main";
import MobileMenu from "../components/Navigations/MobileMenu";
import Navigation from "../components/Navigations/Navigation";
import Page from "../components/Page";
import MenuContextProvider from "../contexts/MobileMenuContext";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: Root,
});

export function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <MenuContextProvider>
        <Page>
          <Navigation />
          <Main>
            <Outlet />
          </Main>
          <Footer />
          <MobileMenu />
        </Page>
      </MenuContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
