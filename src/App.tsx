import { Box, Stack } from "@mui/material";
import { Link, Route, Routes } from "react-router";
import Home from "./pages/Home";

import FormProvider from "./components/FormProvider";


const App = () => {
  return (
    <Box sx={{display:"flex", justifyContent:"center", p:2}}>
      <Stack sx={{  width:"100%", maxWidth:"xl", boxShadow:3, p:2 , borderRadius:2 }} >
        <Box sx={{mb:4, display:"flex"}} gap={2}>
          {' '}
        <span> <Link  to={`/`}>Home</Link> </span>
        <span> <Link to={`/users`}>users</Link></span>
        </Box >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<FormProvider />} />
        </Routes>
      </Stack>
    </Box>
  );
};

export default App;
