import './Home.scss'
const Home = () => {
  return (
    
<div className="w-100">
<div className='homemain'>
            <h2 className='homemain__title pt-2'>Home</h2>
            <div className='homemain__buttons d-flex align-items-center w-100 justify-content-between pb-2'>
                <button className='homemain__buttons--button'style={{width:"50%"}}>
                    <span>For you</span>
                </button>
                <button className='homemain__buttons--button'style={{width:"50%"}}>
                    <span>Following</span>
                </button>
            </div>
        </div>
</div>
    
  )
}

export default Home