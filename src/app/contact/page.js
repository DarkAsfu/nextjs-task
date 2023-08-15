import React from 'react';

const ContactPage = () => {
    return (
        <div className="bg-black w-11/12 mx-auto text-gray-100 mt-24 mb-32">
            <div
                className=" grid gap-8 grid-cols-1 md:grid-cols-2 px-10 md:px-24 py-16 mx-auto  text-gray-900 items-center">
                <div className="flex flex-col justify-between ">

                    <div className="mt-8 text-center ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58420.41605547438!2d90.4003584!3d23.773183999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1691309230992!5m2!1sen!2sbd"
                            width="500"
                            height="500"
                            style={{
                                border: '0',
                                borderRadius: '10px',
                                backgroundColor: 'gray',
                                filter: 'grayscale(100%)', // Add this line to make the map black and white
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className='w-full  md:w-[500px]'
                        ></iframe>
                    </div>
                </div>
                <form className="">
                    <div className="mb-4">
                        <label htmlFor="name" className="text-white block mb-2 font-bold">Name</label>
                        <input
                            name='from_name'
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-[#fff] shadow-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="text-white block mb-2 font-bold">Email</label>
                        <input
                            name='from_email'
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-[#fff] shadow-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="text-white block mb-2 font-bold">Message</label>
                        <textarea
                            id="message"
                            name='message'
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-[#fff] shadow-md"
                            rows={4}
                            required
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-4 py-2 font-semibold btn btn-outline text-white w-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;