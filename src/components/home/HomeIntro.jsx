export default function HomeIntro() {
  return (
    <>
      <div id='home-intro' className='banner-image-text'>
        <img
          src="../../images/clusterdb-wide.png"
          alt=""
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        <h2>ClusterDB — Andrew Morgan on databases (especially MongoDB)</h2>
        <div>
          <p>This is where I make my latest content available.</p>
          <p>For my older content, click on "Legacy content" at the top of this page.</p>
        </div>
      </div>
    </>
  );
}