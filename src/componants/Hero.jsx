

function Hero() {
  return (
    <div class="container mt-5 mt-md-0 d-flex flex-column flex-md-row  align-items-center justify-content-between  c-h-70 position-relative">
        <div class="px-4 c-w-50 ">
            <h1 class="title">Your daily journey is coming in degital paper now.</h1>
            <h3 class="subtitle mb-5">Write whatever you lived and what you thought.</h3>
            <button class="c-btn">Try journey, its free</button>
        </div>
        <div>
        <img className="d-none d-md-block" style={{
            height: 590,
            width: 500,
           position: 'absolute',
           top: -60,
              right: -40,
           
        }} src="/heroimg.svg" />
        </div>
    </div>
  )
}

export default Hero