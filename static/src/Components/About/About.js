import React,{Component} from 'react';
import Acomp from './a-member/member_comp';
import Bcomp from './b-member/member_comp';
import Ccomp from './c-member/member_comp';
import './About.css';
import Pagefooter from '../PageFooter/PageFooter.js';
import Navigation from '../Navigation/Navigation.js';//main navigation bar
import NavigationTwo from '../Navigation/Navigation2.js';//navigation bar on scroll

//import pictures of logo
import DSIR from './DSIR.png';
import DST from './DST.png';
import ICMR from './ICMR.jpg';
import VIT from './VIT.png';

import WOW from 'wow.js';//for animations



const a_members=[
  {name:"Sayan",designation:"Manager"},
  {name:"Elton",designation:"Post"}];

const b_members=[
{name:"Sayan",designation:"Manager"},
{name:"Sayan",designation:"Manager"},
{name:"Sayan",designation:"Manager"},
{name:"Sayan",designation:"Manager"}, 
{name:"Sayan",designation:"Manager"}, 
{name:"Sayan",designation:"Manager"},
{name:"Sayan",designation:"Manager"} 
]



const a_display = a_members.map((element,index)=>
{
  return(
    <Acomp name={element.name} designation={element.designation} index={index+1} />
  )
})


const b_display = b_members.map((element,index)=>
{
  return(
    <Bcomp name={element.name} designation={element.designation} index={index+1} />
  )
})


class About extends Component
{

  render()
  {

  return(
    <div>
    <div>
      
       <NavigationTwo/>
       <Navigation/>
        
        <div className="About_paral1">
        <div className="About-box  shadow-5">
             <h1 className="Primary-head wow fadeInUp">ABOUT US</h1> 
             <div className="Paragraph">
             <p>The Bio-Inspired Engineering Team is primarily focused on providing solutions and technologies that are geared towards solving the multiple problems that plague society. All the innovations and developments are inspired from the natural structures and designs. Allowing these products to be efficient, compliant, cheap, and an Indian Innovation. All projects are created with the inspiration of nature's design. The team comprises of skilled and motivated individuals who constantly strive to create products which can change human lives. Created by students, for the masses.</p>
             </div>
             </div>
        </div>
    
        <div className="About_paral2">
        <div className="Section-1">
             <h1 className="primary-head">MEET OUR TEAM </h1>
              <div className="a-display"> 
             <div className="wow bounce" data-wow-offset="10" data-wow-interation="2">{a_display}
             </div>
             </div>
              <div className="b-display">  
             {b_display}
             </div>

        </div>
        </div>

        <div className="paral3">
    
         <div className="Section-2">
     <h1 className="primary-head">OUR SUPPORTERS</h1>
     <div className="section-detail">
     <div className="info-box">
     <img src={DSIR} alt="Logo" className="org_logo"/>
     </div>

     <div className="info-box">
     <img src={DST} alt="Logo" className="org_logo"/>
     </div>

     <div className="info-box">
     <img src={ICMR} alt="Logo" className="org_logo"/>
     </div>

     <div className="info-box">
     <img src={VIT} alt="Logo" className="org_logo"/>
     </div>

     </div>

     </div>
     </div>



     <Pagefooter/>


     
     </div>
  


     </div>
  )
}
}
  
  export default About;


