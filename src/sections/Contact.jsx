import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY,
    TO_NAME,
    TO_EMAIL,
    TERMINAL_IMAGE_SRC,
    ARROW_UP_IMAGE_SRC,
    FORM_INITIAL_STATE,
    PLACEHOLDERS,
    MESSAGES,
    SECTION_ID
} from "../constants/contact.js";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(FORM_INITIAL_STATE);

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: TO_NAME,
                    from_email: form.email,
                    to_email: TO_EMAIL,
                    message: form.message,
                },
                EMAILJS_PUBLIC_KEY
            );

            setLoading(false);
            alert(MESSAGES.success);
            setForm(FORM_INITIAL_STATE);
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert(MESSAGES.error);
        }
    };

    return (
        <section className={"c-space my-20"} id={SECTION_ID}>
            <div className={"relative min-h-screen flex items-center justify-center flex-col"}>
                <img
                    src={TERMINAL_IMAGE_SRC}
                    alt={"terminal"}
                    className={"absolute inset-0 min-h-screen hidden sm:block 2xl:h-full 2xl:w-full"}
                />
                <div className={"contact-container"}>
                    <h3 className={"sm:text-3xl text-2xl font-semibold text-gray_gradient"}>Let's Talk</h3>
                    <p className={"text-lg text-white-600 mt-3"}>
                        I'm always excited to connect and explore new opportunities. Whether you're an HR professional interested in discussing a job opportunity or a fellow enthusiast eager to collaborate on innovative projects, I'd love to hear from you. Looking forward to our conversation!
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className={"mt-6 flex flex-col space-y-7"}>
                        <label className={"space-y-2"}>
                            <span className={"field-label"}>Full Name</span>
                            <input
                                type={"text"}
                                name={"name"}
                                value={form.name}
                                onChange={handleChange}
                                required
                                className={"field-input"}
                                placeholder={PLACEHOLDERS.name}
                            />
                        </label>
                        <label className={"space-y-2"}>
                            <span className={"field-label"}>Email Address</span>
                            <input
                                type={"email"}
                                name={"email"}
                                value={form.email}
                                onChange={handleChange}
                                required
                                className={"field-input"}
                                placeholder={PLACEHOLDERS.email}
                            />
                        </label>
                        <label className={"space-y-2"}>
                            <span className={"field-label"}>Message</span>
                            <textarea
                                name={"message"}
                                value={form.message}
                                onChange={handleChange}
                                rows={6}
                                required
                                className={"field-input"}
                                placeholder={PLACEHOLDERS.message}
                            />
                        </label>
                        <button className={"field-btn"} type={"submit"} disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src={ARROW_UP_IMAGE_SRC} alt={"arrow-up"} className={"field-btn_arrow"} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;