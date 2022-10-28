import { dashboardOptions } from "./api/mocks/dashboard.mock";
import { CardsMenu } from "../components/CardsMenu";
import styles from "@styles/Home.module.scss";
import { Layout } from "../components/Layout";

const Home = () => {
  return (
    <Layout
      title="GHost"
      description="GHost - Administración de clientes de hosting"
    >
      <h1 className={styles.title}>
        Bienvenid@ a <span>GHost</span>
      </h1>

      <p className={styles.description}>
        Administración de clientes de hosting
      </p>

      <div className={styles.grid}>
        <CardsMenu cards={dashboardOptions} />
      </div>
    </Layout>
  );
};

export default Home;
