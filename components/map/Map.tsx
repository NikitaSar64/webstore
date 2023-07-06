"use client";

import { FC } from "react";
import { YMaps, Map as YMap, Placemark } from "@pbe/react-yandex-maps";
import { MapProps } from "./MapProps";
import style from "./Map.module.scss";

export const Map: FC<MapProps> = ({ coordinate, zoom = 15 }) => {
  return (
    <YMaps>
      <YMap defaultState={{ center: coordinate, zoom }} className={style.map}>
        <Placemark geometry={coordinate} />
      </YMap>
    </YMaps>
  );
};
