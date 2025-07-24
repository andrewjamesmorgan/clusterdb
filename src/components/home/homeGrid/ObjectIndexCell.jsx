import InfoBox from '../../InfoBox';

export default function ObjectIndexCell ({action}) {
  const body = (<>
    <h3>Searching MongoDB by Arbitrary Combinations of Fields</h3>
    <p>
      In a recent design review, the customer's application was in production, but performance had taken a nosedive as data volumes grew. It turned out that the issue was down to how they were indexing the embedded objects in their documents. This article explains why their indexes were causing problems, and how they could be fixed.
    </p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/object-index.jpg"
        alt="Tree with branches weighed down by lots of large pine cones"
        action={action}
        route="https://www.mongodb.com/company/blog/technical/embedded-objects-other-index-gotchas"
        body={body}
        centerX={50}
        centerY={50}
    />
  );
} 