import React, {useEffect} from 'react'
import '../css/Fotter.css'
import AOS from'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() => {
        AOS.init({duration:1500})
         
       }, [])
  return (

    <div>

    <div className='cta'>
        <div className='cta-1'> 
    <p>STAY UPTO DATE  ABOUT<br/>OUR LATEST OFFERS</p>

    <form className='cta-2'>
  <label>
    <input className='email' type="text" name="name" placeholder='Enter your email'/>
  </label><br/>
  <button className='news' type="submit">Subcribe to Newsletter</button>
    </form>


</div>
    </div>




    <div className='footer' data-aos="fade-up">
<div className='footer-col' style={{textAlign:'left'}}>
        <div className='foot-1'>
         <h1>SHOPE.CO</h1>
         <p>We have clothes that suits your style and<br/>
         Which you're proud to wear. From <br/>
         women to men</p>
        </div>

        <div>
            <h3>Company</h3><br/>
            <a href='#'>About</a><br/>
            <a href='#'>Features</a><br/>
            <a href='#'>Works</a><br/>
            <a href='#'>Career</a><br/>
          
        </div>

        <div>
            <h3>Help</h3><br/>
            <a href='#'>Customer Support</a><br/>
            <a href='#'>Delivery Details</a><br/>
            <a href='#'>Terms & Conditions</a><br/>
            <a href='#'>Privacy Policy</a><br/>
            
        </div>

        <div>
            <h3>FAQ</h3><br/>
            <a href='#'>Account</a><br/>
            <a href='#'>Manage Deliveries</a><br/>
            <a href='#'>Orders</a><br/>
            <a href='#'>Payments</a><br/>

          
        </div>

        <div>
            <h3>Resources</h3><br/>
            <a href='#'>Free eBooks</a><br/>
            <a href='#'>Development Tutorials</a><br/>
            <a href='#'>How to - Blog</a><br/>
            <a href='#'>Youtube Playlist</a><br/>

            
        </div>


        </div>       
        





    </div>

    </div>

  )
}

export default Footer