import Head from "next/head";
import { Footer } from "./Footer";
import { LayoutProps } from "./interfaces";
import styles from "./Layout.module.scss";

export const Layout = ({
  title = "GHost",
  description = "GHost - Administración de clientes de hosting",
  children,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};
