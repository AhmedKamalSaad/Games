"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const ExpandableText = ({ children }: { children: string }) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if(!children) return null
  if (children.length <= limit) return <p>{children}</p>;
  const summary = expanded ? children : children.substring(0, limit);
  return (
    <div>
      {summary}...{" "}
      <Button size={"sm"} className="bg-yellow-200 hover:bg-yellow-400 font-bold" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show less" : "Read more"}
      </Button>
    </div>
  );
};

export default ExpandableText;
