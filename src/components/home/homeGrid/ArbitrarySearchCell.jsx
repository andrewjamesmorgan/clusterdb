import InfoBox from '../../InfoBox';

export default function ArbitrarySearchCell ({action}) {
  const body = (<>
    <h3>Searching MongoDB by Arbitrary Combinations of Fields</h3>
    <p>
      We’ve all used web apps where the UI presents us with a number of different fields to filter and/or sort on. Each time we use the app, we can pick which combination of those fields we want to use.
    </p>
    <p>
      MongoDB’s rich query language makes it simple to write queries based on the chosen fields. But how do you index those fields so that queries are efficient (fast and use minimal resources) regardless of which keys the user picks?
    </p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/mongodb-arbitrary-search-railway-signal-box.jpg"
        alt="A railway signal box with hundreds of levers. Through the windows you can many intertwined railway tracks. There's a railworker in the signal box looking at the levers and the tracks, trying to figure out which levers to pull to get the trains to their destinations."
        action={action}
        route="https://medium.com/mongodb/searching-mongodb-by-arbitrary-combinations-of-fields-0c9e64bd1e00"
        body={body}
        centerX={70}
        centerY={20}
    />
  );
} 