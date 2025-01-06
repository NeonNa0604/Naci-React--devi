import './App.css';
import profileImage from './assets/WhatsApp Görsel 2025-01-06 saat 21.14.35_fc191af7.jpg';
import linkedinIcon from './assets/LinkedIn_icon.svg.png';
import twitterIcon from './assets/1073897068_140_0_516_376_1920x0_80_0_0_e2cb63a4c6bc513119a800c895ab51ba.png';
import instagramIcon from './assets/images.jpeg';

function App() {
  return (
    <div className="App">
      <header style={styles.header}>
        <h1>Kişisel CV</h1>
      </header>

      <main style={styles.main}>
        {/* Profil Fotoğrafı ve Kişisel Bilgiler */}
        <section style={styles.profileSection}>
          <img
            src={profileImage}
            alt="Profil Fotoğrafı"
            style={styles.profileImage}
          />
          <div style={styles.personalInfo}>
            <h2>Kişisel Bilgiler</h2>
            <p><strong>Ad:</strong> Naci</p>
            <p><strong>Soyad:</strong> Görkem</p>
            <p><strong>E-posta:</strong> nacigorkem0604@gmail.com</p>
          </div>
        </section>

        {/* Eğitim Bilgileri */}
        <section style={styles.section}>
          <h2>Eğitim Bilgileri</h2>
          <ul>
            <li><strong>Üniversite:</strong> Kapadokya Üniversitesi</li>
            <li><strong>Bölüm:</strong> Bilgisayar Programcılığı</li>
            <li><strong>Mezuniyet Yılı:</strong> 2025</li>
          </ul>
        </section>

        {/* İş Deneyimi */}
        <section style={styles.section}>
          <h2>İş Deneyimi</h2>
          <div>
            <h3>Tesla Otombil Şirketi</h3>
            <p><strong>Pozisyon:</strong> Yazılım Geliştirici</p>
            <p><strong>Çalışma Süresi:</strong> 2023-2025</p>
            <p><strong>Açıklama:</strong> Frontend ve backend geliştirme.</p>
          </div>
        </section>

        {/* Yetenekler */}
        <section style={styles.section}>
          <h2>Yetenekler</h2>
          <ul>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
          </ul>
        </section>

        {/* Hobiler */}
        <section style={styles.section}>
          <h2>Hobiler ve İlgi Alanları</h2>
          <ul>
            <li>Otomobil</li>
            <li>Teknoloji</li>
            <li>Seyehatk</li>
          </ul>
        </section>

        {/* Sosyal Medya */}
        <section style={styles.section}>
          <h2>Sosyal Medya</h2>
          <div style={styles.socialMedia}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" style={styles.socialIcon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="Twitter" style={styles.socialIcon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" style={styles.socialIcon} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
  },
  main: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '1rem',
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
    gap: '1rem',
  },
  profileImage: {
    maxWidth: '150px',
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  personalInfo: {
    flex: 1,
  },
  section: {
    marginBottom: '2rem',
  },
  socialMedia: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  socialIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
};

export default App;
