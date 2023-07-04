"use client";

import { FC } from "react";
import styles from "./Range.module.scss";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import cn from "classnames";
import { RangeProps } from "./Range.props";

function valuetext(value: number) {
  return `${value}`;
}

const minDistance = 10;

export const Range: FC<RangeProps> = ({ range, setRange, className }) => {
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setRange([Math.min(newValue[0], range[1] - minDistance), range[1]]);
    } else {
      setRange([range[0], Math.max(newValue[1], range[0] + minDistance)]);
    }
  };

  return (
    <Box className={cn(styles.range, className)}>
      <Slider
        max={1000}
        value={range}
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
