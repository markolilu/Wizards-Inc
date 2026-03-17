import { Link } from 'react-router-dom';

const pages = [
    {name: 'Home', key: 'home'},
    {name: 'Login', key: 'login'},
    {name: 'Register', key: 'register'},
    {name: 'Account', key: 'account'}
]

const Navbar = ({ selectedPage, onSetPage }) => {

    const renderPageLinks = () => {


        return pages.map(page => (
            <li
                key={page.key}
                style={{
                    ...styles.sidebarLink,
                    ...Navbar(page.key === selectedPage ? styles.selected : {}),
                }}
                onClick={() => onSetPage(page.key)}
            >
            <Link
                to={`/${page.key === 'home' ? '' : page.key}`}
                onClick={() => onSetPage(page.key)}
            >
                {page.name}
            </Link>
                
            </li>
        ));
    }

    return (
        <div>
            <aside>

                <ul>
                    {renderPageLinks()}
                </ul>
            </aside>
        </div>
    );
};

const styles = {
    selected: {
        backgroundColor: '#999'
    },
};

export default Navbar;