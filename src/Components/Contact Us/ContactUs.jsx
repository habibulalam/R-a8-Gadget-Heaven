import { useEffect } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
    useEffect(() => {
        document.title = "Contact Us | Gadget Heaven";
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Message sent successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div>
            <div className="grid max-w-screen-xl w-[90%] grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">📞 Get in Touch with Us!</h2>
                        <div className="dark:text-gray-600">Have questions, need assistance, or just want to say hello? We would love to hear from you! Fill out the form below, and our team will get back to you as soon as possible. Whether it is about our latest gadgets, your order, or any inquiries, we are here to help. Happy shopping!
                        </div>
                    </div>
                    <img src="https://media.istockphoto.com/id/1450058572/photo/businessman-using-a-laptop-and-touching-on-virtual-screen-contact-icons-consists-of-telephone.jpg?s=612x612&w=0&k=20&c=R5wzCGHu6ZS-8EQpJ2Z1tkSbKGGdJH4apVhFM18EXSM=" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form onSubmit={handleSubmit} noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="Enter your name" className="w-full p-3 rounded dark:bg-gray-100" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" required/>
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100" required></textarea>
                    </div>
                    <button type="submit" className="btn w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-purple-600 text-white">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;