import InfoBox from '../../InfoBox';

export default function VersionValidationCell({action}) {
  const body = (<>
    <h3>Using MongoDB Schema Validation With the Schema Versioning Pattern</h3>
    <p>One of MongoDB’s most appreciated features is that it’s very easy to change your schema as your application evolves. For example, unlike with an RDBMS, you don’t need to make every record conform to the modified schema by adding null values when you add a new field. Note that it’s best practice to just leave out fields in MongoDB documents rather than storing null values — it saves storage, and makes documents easier to understand.</p>
    <p>However, when your application reads a document from the database, it simplifies things if it can tell what it’s seeing. Including an application-defined field denoting a schema version number in each document lets the application know what to expect. Including a schema version can also be useful when you’ve had to restore a backup that contains older schema versions.</p>
    <p>This article explains how to enjoy the freedom of MongoDB's flexible data model, while ensuring that your documents contain what you expect.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/version-validation.jpg"
        alt="Software developer sat at a terminal, a man in a suit is approaching him with mew requirements on a sheet of paper"
        action={action}
        route="https://medium.com/mongodb/using-mongodb-schema-validation-with-the-schema-versioning-pattern-f51ce63ff376"
        body={body}
    />
  );
} 