///////////////////////////////////////
//                                   //
//    Author: Max Schwaibold         //
//    Date:   09.05.2020             //
//                                   //
///////////////////////////////////////

import React from "react";
import { useParams } from "react-router-dom";

export function MovieDetails(props) {
  let { id } = useParams();
  return (
    <div>ID = {id}</div>
  );
}
