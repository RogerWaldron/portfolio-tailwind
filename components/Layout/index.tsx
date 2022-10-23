import Nav from "../Nav";
type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="mx-6 md:mx-auto lg:max-w-2xl font-poppins">
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
