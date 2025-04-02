import InfoBox from '../../InfoBox';

export default function London24RelationalCell({action}) {
  const body = (<>
    <h3>From RDBMS to NoSQL 
    at Enterprise Scale</h3>
    <p>Presentation at MongoDB .local London 2024.</p>
    <p>I explain why denormalization and the RDBMS was created in the 1970s and dominated for the following decades.</p>
    <p>Then I explain why that model didn't age well and why in today's world it can't deliver the performance and efficiency that modern applications need.</p>
    <p>I show how MongoDB's document model gives you the flexibility to implement a schema that's optimized for your most critical operations.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/London24-relational.jpg"
        alt="Oracle train falling apart as it races along the tracks. MongoDB superhero is flying in to save the day"
        action={action}
        route="https://www.youtube.com/watch?v=cfg9G8PwoWM&list=PL4RCxklHWZ9t_3OlFNg15K5bPJ1CMAZJO&index=49"
        body={body}
    />
  );
}
