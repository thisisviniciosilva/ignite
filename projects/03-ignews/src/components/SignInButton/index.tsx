import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d361" />
      Vinicio Silva
      <FiX className={styles.closeIcon} color="#737380" />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  );
}
