import { FC } from "react";

import styles from "./PopUp.module.scss";
import { PopUpProps } from "./PopUp.props";

import cn from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const PopUp: FC<PopUpProps> = ({
  active,
  setActive,
  className,
  children,
}): JSX.Element => {
  return (
    <>
      {active && (
        <div className={styles.popUpInner}>
          <div className={cn(styles.popUp, className)}>
            <div
              className={styles.closeBtn}
              onClick={() => {
                setActive(false);
              }}
            >
              <FontAwesomeIcon icon={faClose} fontSize={26} color="white" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
