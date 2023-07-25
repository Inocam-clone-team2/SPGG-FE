import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Community from "../pages/community/Community";
import Edit from "../pages/community/PostEdit";
import Ranking from "../pages/Ranking";
import History from "../pages/History";
import CommunityDetail from "../pages/community/PostDetail";
import PostWrite from "../pages/community/PostWrite";
function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Main />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="community" element={<Community />} />
				<Route path="communitydetail" element={<CommunityDetail />} />
				<Route path="PostWrite" element={<PostWrite />} />
				<Route path="edit" element={<Edit />} />
				<Route path="ranking" element={<Ranking />} />
				<Route path="history" element={<History />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
