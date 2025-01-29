"use client";

import toast from "react-hot-toast";
import { Button } from "./button";
import { Copy } from "lucide-react";

export const DemoTxt = () => {
  const onCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };
  return (
    <h2 className="w-auto px-6 text-center">
      For a demo please use:
      <br />
      <br />
      Email: demodemo12357@gmail.com
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => onCopy("demodemo12357@gmail.com")}
        className=" aspect-square"
      >
        <Copy className="h-4 w-4" />
      </Button>
      <br />
      Password: demo
      <Button
        variant="outline"
        size="icon"
        onClick={(e) => onCopy("demo")}
        className=" aspect-square"
      >
        <Copy className="h-4 w-4" />
      </Button>
    </h2>
  );
};
