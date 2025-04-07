import InfoBox from '../../InfoBox';

export default function WhenCacheCell({action}) {
  const body = (<>
    <h3>When Should You Use a Cache With MongoDB?</h3>
    <p>To answer the question in the title of this article — when should you use a cache with MongoDB? — the answer is probably never. This article attempts to explain why, but if you get to the end and still think your application needs it, then I’d love to discuss your app with you.

</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/when-to-cache.jpg"
        alt="Software architect staring at a whiteboard that shows a software architecture that includes an application server accessing a Redis cache, which in turn is connected to a MongoDB database"
        action={action}
        route="https://medium.com/mongodb/when-should-you-use-a-cache-with-mongodb-db0040d9c12c"
        body={body}
        centerX={30}
        centerY={40}
    />
  );
} 
