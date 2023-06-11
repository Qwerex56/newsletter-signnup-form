import React from "react";

export interface IButton {
  handleClick: () => void;
  children: React.ReactNode
}