import { Footer } from '../components/Footer';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps): JSX.Element {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
