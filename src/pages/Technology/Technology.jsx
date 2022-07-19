import { Link, Outlet, useLocation } from "react-router-dom";
import DetailPage from "../../components/DetailPage/DetailPage";

export default function Technology() {
	const {state}=useLocation();
	return (
		<DetailPage id={state.id} dataCategory={state.dataCategory}/>
	);
}
