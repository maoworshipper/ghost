import Head from "next/head";
import styles from "@styles/Home.module.scss";
import Link from "next/link";

const Home = () => {
  const logout = () => {
    console.log("logout");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>GHost</title>
        <meta name="description" content="GHost" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenid@ a <span>GHost</span></h1>

        <p className={styles.description}>
          Administración de clientes de hosting
        </p>

        <div className={styles.grid}>
          <Link href="/clientes" className={styles.card}>
            <h2>Clientes &rarr;</h2>
            <p>Crea y actualiza clientes de hosting.</p>
          </Link>

          <Link href="/planes" className={styles.card}>
            <h2>Planes &rarr;</h2>
            <p>Crea y actualiza planes de hosting.</p>
          </Link>

          <Link href="/suscripciones" className={styles.card}>
            <h2>Suscripciones &rarr;</h2>
            <p>Crea y actualiza suscripciones.</p>
          </Link>

          <Link href="/perfil" className={styles.card}>
            <h2>Perfil &rarr;</h2>
            <p>Administra la información del perfil.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Desarrollado por Mauricio Martínez
        <p className={styles.logout} onClick={logout}>
          Salir
        </p>
      </footer>
    </div>
  );
};

export default Home;
