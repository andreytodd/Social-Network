import styles from './Header.module.css'


const Header = () => {
  return (
    <header className={styles.header}>
      <img
        id="logo"
        src="https://static8.depositphotos.com/1378583/1010/i/600/depositphotos_10108949-stock-photo-blue-flame-logo.jpg"
        alt="logo"
      />
    </header>
  );
};

export default Header;
