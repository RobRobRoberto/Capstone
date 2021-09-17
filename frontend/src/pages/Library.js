import '../components/Library.css'

export default function Library() {
  return (
    // <h2>
    //   Hier teste ich meinen Kachel-Look aus, damit ich eine schnieke Homepage
    //   bekomme.
    // </h2>
    <main>
      <div className="container">
        <div className="gallery">
          <div className="gallery-item" tabIndex="0">
            <img
              src={'images/9783257070484.jpg'}
              className="gallery-image"
              alt=""
            />
          </div>

          <div className="gallery-item" tabIndex="0">
            <img
              src={'images/9783423282598.jpg'}
              className="gallery-image"
              alt=""
            />
          </div>

          <div className="gallery-item" tabIndex="0">
            <img
              src={'images/9783423763356.jpg'}
              className="gallery-image"
              alt=""
            />
          </div>

          <div className="gallery-item" tabIndex="0">
            <img
              src={'images/9783442314485.jpg'}
              className="gallery-image"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  )
}
