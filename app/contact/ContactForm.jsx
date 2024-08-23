"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import emailjs from 'emailjs-com';
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../../components/ui/select";

const ContactForm = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormContent />
    </Suspense>
  );
};

const FormContent = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get('service');

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: service || '',
    message: ''
  });

  useEffect(() => {
    if (service) {
      setFormData(prevState => ({
        ...prevState,
        service: service
      }));
    }
  }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_USER_ID,
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      alert('Email sent successfully!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send email.');
    });
  };

  return (
    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
      <h3 className="text-4xl text-accent">{`Let's work together`}</h3>
      <p className="text-white/60">
        Whether you have a project in mind, need some expert advice, or just want to chat about the latest in tech and UI/UX design, I'm here to help. Feel free to reach out, and I'll get back to you as soon as possible!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} />
        <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} />
        <Input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
        <Input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
      </div>
      <Select value={formData.service} onValueChange={handleSelectChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a service</SelectLabel>
            <SelectItem value="Web Development">Web Development</SelectItem>
            <SelectItem value="UI/UX">UI/UX</SelectItem>
            <SelectItem value="Technical Consulting">Technical Consulting</SelectItem>
            <SelectItem value="Product Management">Product Management</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Textarea
        className="h-[200px]"
        placeholder="Type your message here"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <Button size="md" className="max-w-40" type="submit" aria-label="send-message">Send message</Button>
    </form>
  );
};

export default ContactForm;
