import PhoneIcon from '@mui/icons-material/Phone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import img1 from '../images/contact.png'

export default function ContactMe() {
  return (
    <>
     <div className="contactme">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
           <img src={img1} style={{width:"400px",marginTop:"20px"}}alt="" />
      </div>


      <div className="col-lg-6">
       <div className="contact-title">
          <b style={{display:"block",marginBottom:"10px",fontSize:"31px"}}>Contact Me</b>
            
          </div>
          <hr /> 
            
            <div className="social-profile">
            <b style={{display:"block",marginBottom:"10px",fontSize:"21px"}}>Social Profile</b>

           <a href="https://www.facebook.com/profile.php?id=100034242671249">
          <FacebookRoundedIcon 
          style={{color:"rgb(154,5,156)",fontSize:"30px"}}/>
          </a>

           <a href="https://github.com/MdbabulHossen">
          <GitHubIcon 
          style={{color:"rgb(154,5,156)",fontSize:"30px"}}/>
          </a>

           <a href="https://github.com/MdbabulHossen">
          <LinkedInIcon 
          style={{color:"rgb(154,5,156)",fontSize:"30px"}}/>
          </a>



       </div>
       <hr />
        <div className="number mt-3">
         <b style={{display:"block",marginBottom:"6px",fontSize:"18px"}}>Phone Number</b>
         
          <PhoneIcon  style={{color:"rgb(154,5,156)",fontSize:"20px"}}/>
         <p style={{display:"inline",color:"gray",marginLeft:"10px"}}>+01947886920</p>
        </div>
       


       <hr />
        <div className="number mt-3">
         <b style={{display:"block",marginBottom:"6px",fontSize:"18px"}}>Email Address</b>
         
          <EmailIcon  style={{color:"rgb(154,5,156)",fontSize:"20px"}}/>
         <p style={{display:"inline",color:"gray",marginLeft:"10px"}}>mdb01947888@gmail.com</p>
        </div>
       


       <hr />
        <div className="number mt-3">
         <b style={{display:"block",marginBottom:"6px",fontSize:"18px"}}>Corporate Address</b>
         
          <LocationOnIcon  style={{color:"rgb(154,5,156)",fontSize:"20px"}}/>
         <p style={{display:"inline",color:"gray",marginLeft:"10px"}}>Dhaka,Gazipur,chowrasta</p>
        </div>
       


      </div>
    </div>
   


 </div>
</div>
    
    
    </>
  )
}
