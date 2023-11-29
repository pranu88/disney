import React from 'react'
import { Link } from 'react-router-dom';

// import Nav from './Nav'
function DisneyPlus() {
  return (
    <div>
    <div class='nav'>
        <b>Hulu's Black Friday Deal</b> <span>- Get Hulu (With Ads) for</span> <b>99¢/month </b> <span>for a year!</span><b> <a href='https://signup.hulu.com/account'>Get This Deal Now.</a></b>
        <p>Hulu (With Ads) plan only. Deal ends 11/28. Terms apply.</p>
        
    </div>
    <div class='main'>
    <a href='https://www.disneyplus.com/identity/login/enter-email'><button class='logIn'>LOG IN</button></a>
        <div class='mainbuttons'>
        <div class='hAndD'>
        <img src='https://cnbl-cdn.bamgrid.com/assets/e7a9b8372dff8e8386940e7e9dbc13d07c6312c4abc77cab5364adc0763f8cb7/original' alt='' class='huluAndDisneyImg'/>
        <a href='https://www.disneyplus.com/identity/sign-up/enter-email?pref=disney_bundle_duo_basic'><button class='huluAndDisney'>GET THEM BOTH</button></a>
        <p>Starting at $9.99/month</p>
        </div>
        <div class='dBundle'>
        {/* <img src="https://lumiere-a.akamaihd.net/v1/images/fullcolor-02_4c36e074.png?region=0,312,3840,1536" alt="" class='bundleImg'/> */}
        <img src='https://cnbl-cdn.bamgrid.com/assets/c9ea8a8e6fec8014955b5e2af850e88531f8b4dc82fb7c6384177444b3163cb0/original' alt='' class='bundleImg'/>
        <a href='https://www.disneyplus.com/identity/sign-up/enter-email?pref=disney_bundle_trio_basic'><button class='disneyBundle'> GET ALL THREE</button></a>
        <p>Starting at $14.99/month</p>
        </div>
        
        </div>
        <a href=''>Terms Apply.</a>
        <p>All of these and more now streaming on Disney+, Hulu, and ESPN+ with the Disney Bundle. Indiana Jones and the Dial of Destiny streaming December 1 on Disney+.</p>
        <a href=''>View All Plan Options</a>
    </div>
   <div class='section'>
      {/* <a href=''>NEW ON DISNEY+ </a>
          <a href=''>TRENDING</a>
          <a href=''>COMING SOON</a> */}
      
       <Link to='/NewOnDisney'><div>NEW ON DISNEY</div> </Link>
       <Link to='/ComingSoon'><div>COMING SOON</div></Link>
       <Link to='/Trending'><div>TRENDING</div></Link>
    </div>
<footer>
     <img src="//cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"  alt="Disney+ Logo"/>
     <br/>
     <select class='language'><option>English</option><option>Español</option>  </select>
     <span>Subscriber Agreement</span>
     <span>Privacy Policy</span>
     <span>Your US State Privacy Rights</span>
     <span>Do Not Sell or Share My Personal Information</span>
     <span>Children's Online Privacy Policy</span>
     <span>Closed Captioning</span>
     <span>Interest-Based Ads</span>
     <span>Supported Devices</span>
     <span>Help</span>
     <span>Gift Disney+</span>
     <span>About Us</span>
     <span>Disney+ Partner Program</span>
     <span>Disney Bundle</span>
     <span>Press</span>
     <p>Content and platform availability may vary by region.<br/><br/>© Disney. All Rights Reserved.</p>

    </footer>
    </div>
  )
}

export default DisneyPlus