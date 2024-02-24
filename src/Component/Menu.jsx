import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="menu">
        <li onClick={() => navigate(-1)}> Geri </li>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/users">Kullanıcılar</Link>
        </li>
        <li>
          <Link to="/contact">İletişim</Link>
        </li>
        {/* <li onClick={() => navigate("contact")}> İLETİŞİM </li> */}
      </ul>
    </div>
  );
}

export default Menu;
