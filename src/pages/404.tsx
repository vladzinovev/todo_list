import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import error from "../assets/gif/error.gif";
import {
  BoxButton,
  BoxError,
  BoxTypography1,
  BoxTypography2,
  BoxTypography3,
} from "../styles/404Style";

const Page404 = () => (
  <Box sx={BoxError}>
    <Typography sx={BoxTypography1}>404</Typography>
    <Typography sx={BoxTypography2}>страница не найдена</Typography>
    <Image alt="error" src={error} />
    <Typography sx={BoxTypography3}>
      страница, на которую вы пытаетесь попасть, не существует или была удалена.
    </Typography>
    <Button sx={BoxButton}>
      <Link href={"/"}>
        <Typography sx={{ color: "#ffffff" }}>
          Вернуться на главную страницу
        </Typography>
      </Link>
    </Button>
  </Box>
);
export default Page404;
