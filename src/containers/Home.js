import React, { useEffect, useState } from "react";
import LoadedHome from "./LoadedHome";
import InitialHome from "./InitialHome"

export default function Home(props) {

  useEffect(() => {
    document.cookie = "loaded=1"
  })

  return (
    document.cookie.includes("loaded") ? <LoadedHome/> : <InitialHome/>
  );
}
