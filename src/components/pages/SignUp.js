import React from 'react' 
import './RegistrationForm.css'
  
const MultipleInputs = () => {
  
    return(
        <body>
			<video src='/videos/video-5.mp4' autoPlay loop muted />
	<form>
		<div class="loginbox">
		
		

		<h1>Sign Up Here</h1>
		
		<p> Name</p>
		<input type="text" name=""   required/>
		<br></br> 
		<p>Regisration ID</p>
		<input type="text" name="" required/>
		<br></br>
		<p>Date Of Birth</p>
		<input type="date" name="" placeholder='' required/>
		<br></br>
		<p>Mobile Number</p>
		<input type="tel" name=""  required/>
		<br></br>
		<p>Email ID</p>
		<input type="email" name="" />
		<br></br>
		<p>Country</p>
		<input type="text" name=""  required/>
		<br></br>
		<button type="submit">Sign UP</button>
		</div> 
	    </form>
    </body>
    )
  }
  export default MultipleInputs