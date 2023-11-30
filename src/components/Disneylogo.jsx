import React from 'react';
import { Link } from 'react-router-dom';

function Disneylogo() {
  return (

<div className='mainlinksClass'>
        <div className='NavBarClass'>
        
          <a href="https://www.disney.com/">
             <img src='https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png'
             alt='Disneylogo'
             width='100'/>
          </a >

               

                <Link to='/DisneyPlus'> Disney+ </Link>


                
                <a href="https://disneyparks.disney.go.com/?DISCID=DI_mtt_chrome">
                    PARKS & TRAVEL
                </a >
                
               
                <a href="https://movies.disney.com/">
                    MOVIES
                </a >
                <a href="https://www.shopdisney.com/?cmp=OTL-Dcom_ChromShpIconB_Shop_EFC28055&efc=280559&att=DcomM_HP_Feed_DSIMobileRedirect_t">
                    SHOP
                </a >
                  {/*href="https://www.wholefoodsmarket.com/app/lunch-dinner-to-go?_branch_match_id=1154850883733696460&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8%2FIz0lNy89PKdZLLCjQy8nMy9aP9DRMz89KM%2FN1TAIAAYnv3ycAAAA%3D" */}
                    
                    <a>MORE
                </a >

              
          
            </div>

    </div>
  )
}

export default Disneylogo