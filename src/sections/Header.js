import React from "react";
import '../css/Header.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
// import Headerpicture from '../assets/headerpicture.png';
import Lottie from 'lottie-react'
import animationData from '../assets/Animation - 1698547430932.json'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import CountUp from "react-countup";

const Header = () => {

  // const target1=useRef()
  // const [visible,isVisible]=useState(false)

  // const callBackFun=(entries)=>{
  //   const [entry]=entries
  //   isVisible(entry.isIntersecting)
  // }
  
  // const options=useMemo(()=>{
  //     return{
  //         root:null,
  //         rootMargin:"0px",
  //         threshold:1
  //     }
  // },[])
  
  // useEffect(() => {
  //   const observer =new IntersectionObserver(callBackFun,options);
  //   const currentTarget= target1.current;
  //   if(currentTarget){
  //     observer.observe(currentTarget)
  //   }
  
  //   return () => {
  //     if(currentTarget){
  //         observer.unobserve(currentTarget)
          
  //       }
  //   }
  // }, [target1,options])
 
 
  return (
    <div className='header'>
      <Fade big>

        <Row className='both'>
         
        <Col xs={6} >
                <div className='leftcontent'>
                <Zoom>
            <p className='title'>Find Clothes <br/> That Matches <br/> Your Style</p>
            <p className='subtitle'>Browse through our diverse range of meticulously crafted garments, designed <br/>
            to bring out your individual and cater to your sense of style</p>
            <button className='shopnow'>Shop Now</button>
            </Zoom>

            <div className='underbutton'>
            <Fade bottom>
            <Stack direction="horizontal" gap={3}>
      <div className="p-2"><p><span><CountUp  end={15} duration={2} suffix="+" className="countup"/>  </span><br/> Internation Brands</p></div>
      <div className="p-2"><p><span><CountUp  end={2000} duration={3} suffix="+" className="countup"/> </span><br/> High-Quality Products</p></div>
      <div className="p-2"><p><span><CountUp  end={30000} duration={3} suffix="+" className="countup"/> </span><br/> Happy Customers</p></div>
    
    </Stack>
     </Fade>
            </div>
           
            </div>
            
        </Col>
      
        <Col xs={6}>
            {/* <img src={Headerpicture} alt='headerimage' className='Header'/> */}
            <Lottie animationData={animationData}/>
        </Col>
      </Row>

        <div className='ads'>

        <marquee  direction="left" scrollamount="20">Find Clothes That Matches Your Style</marquee>
          <br/>
        <marquee  direction="Right" scrollamount="20"> Sign up and get 20% off to your first order</marquee>

        </div>
        </Fade>
    </div>
  )
}

export default Header