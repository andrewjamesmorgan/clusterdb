import InfoBox from '../../InfoBox';

export default function TinyDocs({action}) {
  const body = (<>
    <h3>Avoid Querying Thousands of Tiny Documents or Updating Huge Documents</h3>
    <p>For this application, a large document model performs well for most of our queries, but badly for our frequent writes. The tiny document model is great for those writes, but will perform badly for the three key read queries.</p>
    <p>Using the bucket pattern and medium-sized documents delivers the sweet spot, where all of our critical operations perform well.</p>

  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/tiny-documents-into-basket.jpg"
        alt="A software developer in a hoodie and glasses running around a supermarket grabbing tiny objects and putting them into a basket. He looks like he is in a hurry and very flustered."
        action={action}
        route="https://medium.com/mongodb/avoid-querying-thousands-of-tiny-documents-or-updating-huge-documents-f959d4341b80"
        body={body}
        centerX={50}
        centerY={50}
    />
  );
}