import Image from "next/image";
import styles from "./page.module.css";
import Pokemon from "./components/pokemon";
import About from "./components/about";

export default function Home() {
  return (
    <div className={styles.main}>
      <Pokemon/>
      <About/>
    </div>
  );
}
