import FooterContact from './footer/FooterContact';
import FooterSponsors from './footer/FooterSponsors';

export default function Footer() {

  return (
    <div className='responsive-grid footer-grid' id="footer">
        <FooterContact/>
        <FooterSponsors/>
    </div>
  );
}