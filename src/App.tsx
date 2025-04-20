import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ExploreMore from "./components/ExploreMore/ExploreMore";
import Footer from "./components/Footer";
import FrequentTravelers from "./components/FrequentTravelers";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main";
import MobileMenu from "./components/Navigations/MobileMenu";
import Navigation from "./components/Navigations/Navigation";
import News from "./components/News/News";
import Page from "./components/Page";
import Services from "./components/Services/Services";
import Steps from "./components/Steps/Steps";
import Testimonials from "./components/Testimonials/Testimonials";
import MenuContextProvider from "./contexts/MobileMenuContext";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MenuContextProvider>
        <Page>
          <Header>
            <Navigation />
            <Hero />
            <MobileMenu />
          </Header>
          <Main>
            <Steps />
            <Services />
            <News />
            <ExploreMore />
            <FrequentTravelers />
            <Testimonials />
          </Main>
          <Footer />
        </Page>
      </MenuContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
