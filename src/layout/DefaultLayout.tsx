import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps): JSX.Element {
  return <>
      <Header/>
      { children }
      <Footer />
  </>
}
