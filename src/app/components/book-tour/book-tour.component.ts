import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Subject } from 'rxjs';
import { provideClientHydration } from '@angular/platform-browser';

declare var Email: any; // Declare Email as any to avoid TypeScript errors

@Component({
  selector: 'app-book-tour',
  templateUrl: './book-tour.component.html',
  styleUrls: ['./book-tour.component.css'],
  providers: [HttpClient],
})
export class BookTourComponent {
  @Input({ required: true }) selectedPlan!: string;
  form: FormGroup = this.fb.group({
    from_name: '',
    from_email: '',
    from_phone: '',
    from_date: '',
    from_tickets: '',
    from_message: '',
  });

  constructor(private fb: FormBuilder) {}

  async send() {
    emailjs.init('QO2N7RWcJHfu1qW0p');

    let response = await emailjs.send('service_3in6yko', 'template_74tpwhm', {
      from_name: this.form.value.from_name,
      //  to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      from_phone: this.form.value.from_phone,
      from_date: this.form.value.from_date,
      from_tickets: this.form.value.from_tickets,
      from_message: this.form.value.from_message,
      from_selectedPlan: this.selectedPlan
    });

    alert('Your email has been successfully sent.');
    this.form.reset();
  }

  // constructor(private http: HttpClient){}

  // @Input({ required: true }) selectedPlan!: string;

  // onSubmitSendMail(event: Event): void {
  // event.preventDefault(); // Prevent the default form submission behavior

  // const formData = {
  //   name: $('#name').val(),
  //   email: $('#email').val(),
  //   phone: $('#phone').val(),
  //   date: $('#date').val(),
  //   tickets: $('#tickets').val(),
  //   message: $('#message').val(),
  // };

  // this.http.post(`https://api.elasticemail.com/v2/email/send`,"hi this is testing mail",{
  //   params: {
  //     "apikey":"89AF95AF29F329C00B923894DB7F00E235825ECE3B4B916053901614074ED6332CD6E1198E12F72F78EFB1D8E1E7C636",
  //     "subject":"Test Subject",
  //     "from":"shreyash.rks@gmail.com",
  //     "to":"nabaratanpatra@gmail.com",
  //     "isTransactional":"true"
  //   }
  // }).subscribe(response => {
  //   console.log(response)
  // })

  // console.log(formData);

  // Email.send({
  //   Host: 'smtp.elasticemail.com',
  //   Username: 'nabaratanpatra@gmail.com',
  //   Password: 'mnqdmsyxggcwmouf',
  //   To: formData.email,
  //   From: 'nabaratanpatra@gmail.com',
  //   Subject: 'New Tour Booking',
  //   Body: `
  //     Name: ${formData.name}<br>
  //     Email: ${formData.email}<br>
  //     Phone: ${formData.phone}<br>
  //     Date: ${formData.date}<br>
  //     Number of Tickets: ${formData.tickets}<br>
  //     Message: ${formData.message}
  //   `,
  // })
  //   .then((message: string) => {
  //     alert('Email sent successfully!');
  //     console.log('Email sent successfully:', message);
  //   })
  //   .catch((error: string) => {
  //     alert('Failed to send email.');
  //     console.error('Error sending email:', error);
  //   });
}
