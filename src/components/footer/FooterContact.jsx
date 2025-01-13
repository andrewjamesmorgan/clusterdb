import AwesomeButton from '../buttons/AwesomeButton';

export default function FooterContact() {
  return (
    <div className="footer-column" id="footer-contact">
      <div className="stacked-buttons">
        <AwesomeButton 
          label="email" 
          icon="fa fa-envelope" 
          url="mailto:andrewjamesmorgan@gmail.com"/>
        <AwesomeButton 
          label="linkedin.com/in/amorg/" 
          icon="fa fa-linkedin" 
          url="https://www.linkedin.com/in/amorg/"/>
        <AwesomeButton 
          label="@andrewmorgan" 
          icon="fa fa-twitter" 
          url="https://twitter.com/andrewmorgan"/>
      </div>
    </div>
  );
}