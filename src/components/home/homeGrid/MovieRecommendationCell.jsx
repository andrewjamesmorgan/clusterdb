import InfoBox from '../../InfoBox';

export default function MovieRecommendationCell ({action}) {
  const body = (<>
    <h3>Building a Recommendation Engine with MongoDB’s Vector Search</h3>
    <p>Almost every company relies on repeat business to make money. Bringing in new customers is expensive, so the real win is getting them to come back after they sign up or make a purchase. The best way to do that is to offer them products or services that actually match what they care about.</p>
    <p>How do you figure out what that is? A strong signal is what they've already used or bought from you, especially if they left good feedback. You can also learn a lot from quick surveys or by looking at what products "similar" users are consuming. Whatever the source, you're basically trying to solve the same problem: "Find me something that's semantically similar to this."</p>
    <p>That's exactly what recommendation engines are built to do. In this article, we'll break down how they work and walk through how you can build one yourself using machine learning (ML) and MongoDB Vector Search.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/movie-recommendation.jpg"
        alt="Movie recommendations web app. Shows that 'Battle of The Planet of the Apes' is being recommended because 'Dawn of the Planet of the Apes' is the customer's favourite movie"
        action={action}
        route="https://www.geeksforgeeks.org/mongodb/building-a-recommendation-engine-with-mongodbs-vector-search/"
        body={body}
        centerX={50}
        centerY={0}
    />
  );
} 