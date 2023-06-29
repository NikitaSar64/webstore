"use client";

import { FC } from "react";
import { YMaps, Map as YMap, Placemark } from "@pbe/react-yandex-maps";
import { MapProps } from "./MapProps";

export const Map: FC<MapProps> = ({ coordinate, zoom = 15 }) => {
  return (
    <YMaps>
      <YMap
        defaultState={{ center: coordinate, zoom }}
        style={{ width: "100%", height: "415px" }}
      >
        <Placemark geometry={coordinate} />
      </YMap>
    </YMaps>
  );
};
