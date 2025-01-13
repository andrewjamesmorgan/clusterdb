import AwesomeButton from '../buttons/AwesomeButton';

export default function FooterSponsors() {
  return (
    <div className="footer-column" id="footer-sponsor">
      <div className="stacked-buttons">
        <AwesomeButton 
          label="Oléron Villa - French seaside holiday home" 
          icon="fa fa-sun-o" 
          url="https://oleronvilla.com/"/>
        <AwesomeButton 
          label="Thieves Garden - Maidenhead serviced apartment" 
          icon="fa fa-home" 
          url="https://thievesgarden.co.uk/"/>
      </div>
    </div>
  );
}