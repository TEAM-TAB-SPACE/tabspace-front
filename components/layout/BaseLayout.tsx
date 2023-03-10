import Header from './Header';

type BaseLayoutProps = {
  children: React.ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
