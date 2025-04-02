export default function AboutIntro() {
  return (
    <>
      <div id='about-intro' className='banner-image-text'>
        <h1>About me</h1>
        <img
          src="../../images/about/andrew-morgan-MongoDB-speaker.jpg"
          alt="Andrew Morgan speaking at MongoDB event"
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        <h2>Senior Staff Developer Advcocate at MongoDB</h2>
      </div>
      <div className="left-content">
        <p>My day job is as a Senior Staff Developer Advocate at MongoDB. I work with development teams at MongoDB's most strategic customers to make them successful using MongoDB for their applications.</p>
        <p>This means that I spend a lot of my time on the road at customer sites. I typically spend the first day teaching large groups of developers how to use MongoDB (especially if they have an RDBMS background). The second day is spent running design reviews, where I sit down with a design team to show them how best to use MongoDB for their specific application.</p>
        <p>When not travelling, I run virtual design reviews over Zoom or Teams. I spend whatever time's left working writing content. My most recent content can be found <a href="https://clusterdb.com">here</a>, while older content (inlcuding from my MySQL/Oracle days) can be viewed <a href="https://clusterdb.com/legacy/" target="_blank" rel="noreferrer">here</a>.</p>
        <p>I previously spent seven years at Oracle as the product manager for all MySQL high availability solutions. Before that I developed database software for core GSM telco networks (HLR and HSS).</p>
      </div>
    </>
  );
}