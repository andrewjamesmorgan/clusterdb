import InfoBox from '../../InfoBox';

export default function FieldNamesCell ({action}) {
  const body = (<>
    <h3>The Difference a (Field) Name Makes: Reduce Document Size and Increase Performance</h3>
    <p>I was recently at a customer event in Greece. During one of the breaks, I joined a group of developers who were having an animated debate on the terrace.</p>
    <p>The big question was whether it's better to use camelCase or snake_case for field names in MongoDB documents. The first part of my response was that it's mainly a style decision, likely influenced by the conventions of the programming language you're using for your application. The second part was that this decision does have a right answer, and your decision will impact performance.</p>
    <p>This article will answer that question and demonstrate how other design decisions regarding data representation within a document impact the performance of your application.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/field-names.jpg"
        alt="Software developer confused as he looks at 2 different displays, one showing documents in camelCase, the other in snake_case"
        action={action}
        route="https://www.mongodb.com/company/blog/technical/difference-field-name-makes-reduce-document-size-increase-performance"
        body={body}
        centerX={50}
        centerY={40}
    />
  );
} 