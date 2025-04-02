import InfoBox from '../../InfoBox';

export default function OutlierPatternCell({action}) {
  const body = (<>
    <h3>The Exceptions That Break the Rule: Using the Outlier Pattern in MongoDB</h3>
    <p>Some times there's a schema design that's perfect for 99% of your entities, but there's that odd instance that just doesn't fit. This article explains how to use the outlier pattern to handle those exceptions while optimising for the majority.
</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/outlier-pattern.jpg"
        alt="A large, suited man in the background standing in front of tower blocks and thousands of houses. In the foreground are smaller men, each close to a small number of houses."
        action={action}
        route="https://medium.com/mongodb/the-exceptions-that-break-the-rule-using-the-outlier-pattern-in-mongodb-9674fc7cc097"
        body={body}
    />
  );
}
