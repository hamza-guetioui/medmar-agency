"use client";
import React, { useEffect, useState } from "react";
import LargeScreenContent from "./LargeScreenContent";
import MediumScreenContent from "./MediumScreenContent";
import useMediaQuery from "@/hooks/useMediaQuery";

function Index() {
  // Initialize directly based on current window width
  const isMatch = useMediaQuery("(max-width: 768px)");


  return isMatch ? <MediumScreenContent /> : <LargeScreenContent />;
}

export default Index;
