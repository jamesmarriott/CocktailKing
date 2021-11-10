import Home from '.././pages/home'

type Props = {
    title: string,
    children?:
    | React.ReactChild
    | React.ReactChild[];
  };

const Layout: React.FC<Props> = ({
    children, ...props
  }) => (
    <div>
      <Home/>
      {children}
    </div>
  );

export default Layout;