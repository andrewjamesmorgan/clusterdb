import InfoBox from '../../InfoBox';

export default function SampleDRCell({action}) {
  const body = (<>
    <h3>Understand What Happens in a MongoDB Design Review</h3>
    <p>Recording of a design review where my colleague (Luce) and I step through what actually happens in a review.</p>
    <p>Luce plays the role of a developer responsible for migrating a property booking services from a relational database to MongoDB.</p>
    <p>By the end of the review we have a high-level schema design that will power the application.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/property-dr.jpg"
        alt="2 developers in a meeting room. One is pointing to a whiteboard with a complex diagram. The other is watching intently"
        action={action}
        route="https://vimeo.com/1035984271#t=3m25s"
        body={body}
        centerX={60}
        centerY={50}
    />
  );
}
