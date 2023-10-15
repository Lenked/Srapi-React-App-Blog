import Posts from "./pages/PostsPage";
import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom'
import Post from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import AdminPostsPage from "./pages/AdminPostsPage";
import AuthContext from "./context/authContext";
import { useState } from "react";
import { isAuthenticate } from "./services/authAPI";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(isAuthenticate)
  return (
    <AuthContext.Provider
        value={{
          isAuthenticated,
          setIsAuthenticated
        }}
    >
      <Container>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Posts />} />
            <Route path="/post/:id" element={<Post />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/admin" element={<AdminPostsPage />}/>
          </Routes>
        </div>
      </Container>
    </AuthContext.Provider>
  );
}

export default App;
