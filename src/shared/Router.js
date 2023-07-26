import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Community from "../pages/community/Community";
import PostEdit from "../pages/community/PostEdit";
import Ranking from "../pages/Ranking";
import History from "../pages/History";
import PostDetail from "../pages/community/PostDetail";
import PostWrite from "../pages/community/PostWrite";
import BestPost from "../pages/BestPost";
import Header from "../components/common/header/Header";
import Header2 from "../components/common/header2/Header2";
import Comment from "../components/comment/Comment";
function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Main />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="community" element={<Community />} />
				<Route path="PostDetail/:id" element={<PostDetail />} />
				<Route path="PostWrite" element={<PostWrite />} />
				<Route path="PostEdit" element={<PostEdit />} />
				<Route path="ranking" element={<Ranking />} />
				<Route path="history/:summonerName" element={<History />} />
				<Route path="header" element={<Header />} />
				<Route path="header2" element={<Header2 />} />
				<Route path="comment" element={<Comment />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
