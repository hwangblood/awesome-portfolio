import React from "react";

type Props = {
  className?: string;
  children: JSX.Element;
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
