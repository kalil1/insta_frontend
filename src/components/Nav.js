import { NavLink } from "react-router-dom";
import { BrowserRouter} from 'react-router-dom';

const Nav = () => {
    return (
    <BrowserRouter>
        <nav class="navbar">
            <section class="logo-section"><img class="logo" src="https://seeklogo.com/images/I/instagram-new-2016-glyph-logo-84CB825424-seeklogo.com.png"/>
                <div></div><img class="logoname" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png"/>
            </section>
            <form class="search-section">
                <input class="input-search" type="search" name="search" placeholder="Buscar"/>
            </form>
            <section class="icons-section">
                <NavLink to="explore" element={<Nav />}><i class="fa fa-compass"></i></NavLink>
                <NavLink to="notifications" element={<Nav />}><i class="fa fa-heart"></i></NavLink>
                <a href="/profile" class='fa fa-user'></a>
            </section>
       </nav>
    </BrowserRouter>
    )
}

export default Nav
