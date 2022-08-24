import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => {
  return (
    <Layout title=" Home - Open Jira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "calc(100vh - 100px)",
            }}
          >
            <CardHeader title="Pendings" />
            <CardContent>
              {/*TODO:
               * Add a new Entrie
               *Entries list
               */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "calc(100vh - 100px)",
            }}
          >
            <CardHeader title="In Progress" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              height: "calc(100vh - 100px)",
            }}
          >
            <CardHeader title="Done" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
