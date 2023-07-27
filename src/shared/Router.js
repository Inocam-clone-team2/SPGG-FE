import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Community from "../pages/community/Community";
import CommunityPopular from "../pages/community/CommunityPopular";
import CommunityTop from "../pages/community/CommunityTop";
import PostEdit from "../pages/community/PostEdit";
import Ranking from "../pages/Ranking";
import History from "../pages/History";
import PostDetail from "../pages/community/PostDetail";
import PostWrite from "../pages/community/PostWrite";
import BestPost from "../pages/BestPost";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Main />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="community" element={<Community />} />
				<Route path="CommunityPopular" element={<CommunityPopular />} />
				<Route path="CommunityTop" element={<CommunityTop />} />
				<Route path="PostDetail/:id" element={<PostDetail />} />
				<Route path="PostWrite" element={<PostWrite />} />
				<Route path="PostEdit" element={<PostEdit />} />
				<Route path="ranking" element={<Ranking />} />
				<Route path="best" element={<BestPost />} />
				<Route path="history/:summonerName" element={<History />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
