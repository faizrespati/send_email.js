import {useRef} from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_d7r5lpg', 'template_j0h7cmu', form.current, 'P7zQeuHLeir_tGHDJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
      
  return (
    <section>
      <div className="form">
        <div class="title">Contact Us</div>
        <form ref={form} onSubmit={sendEmail}>
        <div class="input-container ic1">
          <input class="input" type="text" name="user_name" required/>
          <div class="cut"></div>
          <label for="firstname" class="placeholder">Full Name</label>
        </div>
        <div class="input-container ic1">
          <input class="input" type="text" name="user_email" required/>
          <div class="cut"></div>
          <label for="firstname" class="placeholder">Email</label>
        </div>
        <div class="input-container ic1">
          <input class="input" type="text" name="subject" required/>
          <div class="cut"></div>
          <label for="firstname" class="placeholder">subject</label>
        </div>
        <div class="input-container ic1">
          <input class="input" type="textarea" name="message" required/>
          <div class="cut"></div>
          <label for="firstname" class="placeholder">Message</label>
        </div>
        <button type="text" class="submit">submit</button>
        </form>
      </div>
    </section>
    
  )
}

export default Contact;