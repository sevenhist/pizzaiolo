import { Logo } from "components/Logo"
import s from "./Footer.module.scss"

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__content}>

  <div>
    <p><strong>Pizzaiolo GmbH</strong></p>
    <p>123 Business Street<br />10115 Berlin, Germany</p>
    <p>Phone: +49 (0)123 456 789<br />Email: <a href="mailto:info@pizzaiolo.com">info@pizzaiolo.com</a></p>
  </div>
  <div>
    <p>Commercial Register: Amtsgericht Berlin, HRB 123456</p>
    <p>VAT ID: DE123456789</p>
    <p>Managing Directors: John Doe, Jane Smith</p>
  </div>
  <div>
    <p>
      <a href="/privacy-policy">Privacy Policy</a> | 
      <a href="/terms">Terms of Service</a> | 
      <a href="/impressum">Impressum</a>
    </p>
    <p>© 2025 Pizzaiolo GmbH. All rights reserved.</p>
  </div>



            </div>
        </footer>
    )
}