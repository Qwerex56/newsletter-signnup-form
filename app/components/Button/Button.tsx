import { IButton } from "./IButton";
import ButtonStyle from "./ButtonStyle.module.scss";

export default function Button(props: IButton) {
  return (
    <button className={ButtonStyle.button} onClick={props.handleClick}>
      <p className={ButtonStyle.button__label}>{props.children}</p>
    </button>
  );
}