import React from 'react' 
 import './ContactUS.css'
const Contact=()=>{
return(
    <body>
	<div class="container">
		<h1>Connect With Us</h1>

		<p>We would love to respond to your queries and help you suceed. <br></br>Feel free to get in touch with us.</p>

		<div class="contact-box">
			<div class="contact-left">
				<h3>Send your request</h3>	
				<form>
					<div class="input-row">
						<div class="input-group">
							<label>Name</label>
							<input type="text" name="" placeholder="Your Name" />
						</div>
						
						<div class="input-group">
							<label>Phone Number</label>
							<input type="text" name="" placeholder="Your Phone Number"/>
						</div>

						<div class="input-group">
							<label>Email ID</label>
							<input type="email" name="" placeholder="Your Email ID"/>
						</div>

						<div class="input-group">
							<label>Subject</label>
							<input type="text" name="" placeholder="Your Subject" />
						</div>
					</div>
					<label>Message</label>
					<textarea rows="5" placeholder="Your Message"></textarea>

					<button type="submit">Send</button>
				</form>
			</div>
			<div class="contact-right">
				<h3>Reach Us</h3>
				<table>
					<tr>
						<td>Email ID</td>
						<td>contactsample@gmail.com</td>
					</tr>
					<tr>
						<td>Phone</td>
						<td>+91 123456789</td>
					</tr>
					<tr>
						<td>Address</td>
						<td>#2324, Ground Floor, Some road, 
							Some area, Hyderabad, 534893.</td>
                    </tr>
				</table>

			</div>
		</div>
	</div>

</body>
)
}

export default Contact