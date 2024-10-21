import './Loader.css'
function Loader() {
  return (
    <>
        <div className="loaderContainer">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <span className='loading'>Loading...</span>
        </div>
    </>
  )
}

export default Loader