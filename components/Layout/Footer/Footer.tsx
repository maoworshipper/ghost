import styles from "./Footer.module.scss";
import { useLogout } from "@hooks/useLogout";

export const Footer = () => {
  const { logout } = useLogout();
  return (
    <footer className={styles.footer}>
      Desarrollado por Mauricio Martínez
      <p className={styles.logout} onClick={logout}>
        Salir
      </p>
    </footer>
  );
};
