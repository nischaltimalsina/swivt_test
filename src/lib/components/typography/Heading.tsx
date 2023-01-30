import React from "react";
import { IHeadingProps } from "./ITypeInterface";

const Heading = ({
  children,
  type = "1",
  className,
  color,
  display,
  fontWeight="regular",
}: IHeadingProps) => {
  switch (type) {
    case "1":
      return (
        <h1
          className={`  text-6xl font-${fontWeight} ${color} ${className} ${display}`}>
          {children}
        </h1>
      );

    case "2":
      return (
        <h2
          className={` text-5xl font-${fontWeight} ${color} ${className} ${display}`}>
          {children}
        </h2>
      );
    case "3":
      return (
        <h3
          className={` text-4xl font-${fontWeight} ${color} ${className} ${display}`}>
          {children}
        </h3>
      );
    case "4":
      return (
        <h4
          className={` text-3xl font-${fontWeight} ${color} ${className} ${display}`}>
          {children}
        </h4>
      );
    case "5":
      return (
        <h5
          className={` text-2xl font-${fontWeight} ${color} ${className} ${display}`}>
          {children}
        </h5>
      );
    case "6":
      return (
        <h6
          className={` text-xl font-${fontWeight} ${color} ${className} ${display}`}>
          {children}
        </h6>
      );
    case "custom":
      return(
        <h6
          className={` font-${fontWeight} ${color} ${className} ${display}`}>
          {children}
        </h6>
      )
  }
};

export default Heading;
