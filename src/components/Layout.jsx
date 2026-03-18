import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Header from './components/Header';

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Contact', key: 'contact' },
  { name: 'Account', key: 'account' },
  { name: 'Login', key: 'login' }
]

const Layout = ({ children, selectedPage, onSetPage }) => {

  const renderPageLinks = () => {
        
    return pages.map(page => (
       <li
          key={page.key}
          style={{
            ...styles.sidebarLink,
            ...(page.key === selectedPage ? styles.selected : {}),
          }}
          onClick={() => onSetPage(page.key)}
        >
          {page.name}
        </li>
    ));
  }


  return (
    
    <div style={styles.container}>
      {/* Navigation */}
      
      <NavBar />

      <div style={styles.main}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <ul>
           {renderPageLinks()}
          </ul>
        </aside>

        {/* Content Area */}
        <section style={styles.content}>
          {children}
        </section>
      </div>

      {/* Footer */}
      <Footer />
     
    </div>
  );
};

export default Layout;

