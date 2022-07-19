import { Link, Outlet, useLocation } from "react-router-dom";
import DetailPage from "../../components/DetailPage/DetailPage";

export default function Medical() {
	const {state}=useLocation();
	console.log(state);
	return (
		<DetailPage id={state.id} dataCategory={state.dataCategory}/>
	);
}
