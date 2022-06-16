import { Box } from "@mui/material";
import NotFound from "features/NotFound";
import { Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";

ProductFeature.propTypes = {};
function ProductFeature(props) {
  return (
    <Box pt={4}>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default ProductFeature;
