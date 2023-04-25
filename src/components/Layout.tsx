import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Layout;
