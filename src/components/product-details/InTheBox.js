import styles from "./InTheBox.module.css";

export default function InTheBox(props) {
  return (
    <>
      <li className={styles.item}>
        <span>{props.item.quantity}x</span>
        {props.item.item}
      </li>
    </>
  );
}
