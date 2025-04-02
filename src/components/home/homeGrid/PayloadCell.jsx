import InfoBox from '../../InfoBox';

export default function PayloadCell({action}) {
  const body = (<>
    <h3>Process vs Payload Fields — Efficiently Querying Semi-structured MongoDB Documents</h3>
    <p>In a recent MongoDB design review, I was presented with a use case where the customer wanted to store a large amount of semi-structured message data in MongoDB. They also needed to efficiently fetch past messages based on specific query criteria.</p>
    <p>One of the key concepts I applied when making my recommendations was to distinguish between “process” and “payload” fields. Process fields are those that your queries filter on. Payload fields contain the data that needs to be stored and retrieved but aren’t part of any query filter.</p>
    <p>In this post, I describe their use case, my schema and index recommendations, and the process of getting from the requirements to the solution. I’ve changed some use case details to protect the customer’s proprietary information, but the recommendations are real.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/payload.jpg"
        alt="4 sets of drawers. Each set has a label such as socks or green shirts. Some of the drawers are partially open, with the relevent types of clothes overflowing"
        action={action}
        route="https://medium.com/mongodb/process-vs-payload-fields-efficiently-querying-semi-structured-mongodb-documents-a4e736c7b866"
        body={body}
    />
  );
}