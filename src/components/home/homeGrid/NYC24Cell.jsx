import InfoBox from '../../InfoBox';

export default function NYC24Cell({action}) {
  const body = (<>
    <h3>Real Benefits of Teaming up with MongoDB to Review a Data Model</h3>
    <p>Presentation at MongoDB .local NYC 2024.</p>
    <p>Together with Antoine Speller, I explain the benefits of booking a 1-hout design review with the MongoDB Developer Advocacy. They're free of charge and can make a huge difference to the performance and maintainabilty of your application.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/nyc-24.jpg"
        alt="Slide displaying the title and head shots of Andrew Morgan (MongoDB) and Antoine Speller (Wells Fargo)"
        action={action}
        route="https://youtu.be/nFwgfvTuHfk?list=PL4RCxklHWZ9tkmf5ewhA10nKz8u6d4c6r&t=0"
        body={body}
        centerX={30}
        centerY={20}
    />
  );
}