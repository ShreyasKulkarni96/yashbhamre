import styles from "../app/page.module.scss";

const Footer = () => {
return (
<footer id="contact" className={styles.footer}>
  {/* Top Row */}
  <div className={styles.footerTop}>
    <div className={styles.footerName}>
      Yash Bhamre
    </div>

    <div className={styles.footerRights}>
      © 2026 Yash Bhamre. All rights reserved.
      <br />
      <span>BIM Professional | Architectural & Construction Technology Specialist</span>
    </div>
  </div>

  {/* Divider */}
  <div className={styles.divider}></div>

  {/* Bottom Row */}
  <div className={styles.footerBottom}>
    <p className={styles.thankYou}>
      Thank you for visiting my website.
    </p>

    <div className={styles.contact}>
      <a href="mailto:yashbhamre27@gmail.com">
        yashbhamre27@gmail.com
      </a>
      <span>•</span>
      <a
        href="http://linkedin.com/in/yash-bhamre-398773295"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </div>
</footer>

)
}

export default Footer;