"use client";

import { FC, HTMLAttributes, useState } from "react";
import styles from "./Range.module.scss";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import cn from "classnames";

function valuetext(value: number) {
  return `${value}`;
}

const minDistance = 10;

export const Range: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const [value, setValue] = useState<number[]>([0, 600]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <Box className={cn(styles.range, className)}>
      <Slider
        max={1000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        disableSwap
        classes={{
          valueLabel: styles.label,
          rail: styles.rail,
          track: styles.track,
          thumb: styles.thumb,
        }}
      />
    </Box>
  );
};
