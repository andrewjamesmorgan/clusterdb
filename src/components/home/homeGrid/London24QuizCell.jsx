import InfoBox from '../../InfoBox';

export default function London24QuizCell({action}) {
  const body = (<>
    <h3>Pop Quiz: Optimizing Data Designs for High Performance</h3>
    <p>Presentation at MongoDB .local London 2024.</p>
    <p>This ia a chance to test your knowledge on the performance impacts from the decisions you make while designing your MongoDB schema and indexes.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/London24-pop-quiz.jpg"
        alt="An instructror pointing to a whiteboard with a complex diagram. Stedents have their hands up, keen to answer"
        action={action}
        route="https://www.youtube.com/watch?v=TqBoVw-L1Zk&list=PL4RCxklHWZ9t_3OlFNg15K5bPJ1CMAZJO&index=38"
        body={body}
        centerX={55}
        centerY={10}
    />
  );
}