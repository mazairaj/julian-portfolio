"use client"

import React, { useState, useEffect } from 'react';
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
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: 'Phone', description: '+1 (305) 733 - 2688' },
  { icon: <FaEnvelope />, title: 'Email', description: 'julian.mazaira@gmail.com' },
  { icon: <FaMapMarkerAlt />, title: 'Location', description: 'Miami, FL (Silicon Shores ;) )' },
];

const Contact = () => {
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
      console.log(service)
      setFormData(prevState => ({
        ...prevState,
        service: service
      }));
      console.log(formData)
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
    console.log(process)
    console.log(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, process.env.NEXT_PUBLIC_USER_ID)
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
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
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div>{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
