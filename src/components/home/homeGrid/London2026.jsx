import InfoBox from '../../InfoBox';


export default function London2026 ({action}) {
  const body = (<>
    <h3>My Data Modeling Session From MongoDB .local London 2026</h3>
    <p>Recording of my session on data modeling at MongoDB .local London 2026. The reference to the storage available on my first computer (a ZX81) earned a few laughs from the audience.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/posts/zx81.jpg"
        alt="Recording of my session on data modeling at MongoDB .local London 2026. The reference to the storage available on my first computer (a ZX81) earned a few laughs from the audience."
        action={action}
        route="https://www.youtube.com/watch?v=gsGKB4apP6w
      "
        body={body}
        centerX={100}
        centerY={100}
    />
  );
} 