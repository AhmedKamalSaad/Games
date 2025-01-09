import { Badge } from "@/components/ui/badge";
import React from "react";

const CriticScore = ({ score }: { score: number }) => {
  const variant = score > 75 ? "high" : score > 60 ? "medium" : "low";
  return <Badge variant={variant}> {score}</Badge>;
};

export default CriticScore;
