import { Box } from "@mui/material";

import Main from "@/components/Main/Main";
import Header from "@/components/Head/Head";
import { BoxHeader } from "@/styles/indexStyle";

const Home=()=> {
  
  return (
    <Box sx={BoxHeader}>
      <Header />
      <main>
        <Main />
      </main>
    </Box>
  );
}
export default Home;
