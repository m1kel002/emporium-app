import './HeaderNav.scss';
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import SearchBar from '../SearchBar/SearchBar';


export default function HeaderNav() {
	const showSearchBar = true;
	return (
		<header>
			<div className="logo-container">
				<a href="/" className="logo">Emporium</a>
				</div>
			<div className="nav-container">
				<ul>
					<li onClick={() => (!showSearchBar)}>
						{showSearchBar && <SearchBar></SearchBar>}
						{!showSearchBar && <SearchOutlined></SearchOutlined>}
					</li>
					<li>
						<ShoppingCartOutlined></ShoppingCartOutlined>
					</li>
					<li>
						<AccountCircleOutlined></AccountCircleOutlined>
					</li>
				</ul>
			</div>
		</header>
	);
}