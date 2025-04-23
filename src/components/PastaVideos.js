// import React from 'react';

// export default function PastaVideos() {
//   return (
//     <section className="pasta-videos">
//       <h2>Pasta Videos</h2>
//       <div className="video-list">
//         <div className="video-card">Indian Style Macaroni</div>
//         <div className="video-card">Signature Spaghetti</div>
//       </div>
//     </section>
//   );
// }



import React from 'react';

export default function PastaVideos() {
  return (
    <section className="pasta-videos">
      <h2 className="pasta-videos__title">🍝 Pasta Videos</h2>
      <div className="pasta-videos__grid">
        <div className="pasta-videos__card">
          <h3>Indian Style Macaroni</h3>
          <video
            controls
            width="100%"
            poster="macaroni-thumbnail.jpg"
            className="video-player"
          >
            <source src="indian-macaroni.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="pasta-videos__card">
          <h3>Signature Spaghetti</h3>
          <iframe
            width="100%"
            height="240"
            src="https://www.youtube.com/embed/your-video-id"
            title="Signature Spaghetti"
            className="video-player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
