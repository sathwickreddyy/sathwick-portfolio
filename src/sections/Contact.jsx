import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Sathwick Reddy, Yalla",
                    from_email: form.email,
                    to_email: "sathwick@outlook.in",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            setLoading(false);
            alert("Your message has been sent!");
            setForm({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong!");
        }
    };

    return (
        <section className={"c-space my-20"} id={"contact"}>
            <div
                className={
                    "relative min-h-screen flex items-center justify-center flex-col"
                }
            >
                <img
                    src={"/assets/terminal.png"}
                    alt={"terminal"}
                    className={
                        "absolute inset-0 min-h-screen hidden sm:block 2xl:h-full 2xl:w-full"
                    }
                />
                <div className={"contact-container"}>
                    <h3 className={"sm:text-3xl text-2xl font-semibold text-gray_gradient"}>Let's Talk</h3>
                    <p className={"text-lg text-white-600 mt-3"}>
                        I'm always excited to connect and explore new opportunities. Whether
                        you're an HR professional interested in discussing a job opportunity
                        or a fellow enthusiast eager to collaborate on innovative projects,
                        I'd love to hear from you. Looking forward to our conversation!
                    </p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className={"mt-6 flex flex-col space-y-7"}
                    >
                        <label className={"space-y-2"}>
                            <span className={"field-label"}>Full Name</span>
                            <input
                                type={"text"}
                                name={"name"}
                                value={form.name}
                                onChange={handleChange}
                                required
                                className={"field-input"}
                                placeholder={"Enter Your Full Name"}
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
                                placeholder={"Enter Your Email Address"}
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
                                placeholder={"Hi, I wanna provide you a job opportunity..."}
                            />
                        </label>
                        <button className={"field-btn"} type={"submit"} disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}

                            <img
                                src={"/assets/arrow-up.png"}
                                alt={"arrow-up"}
                                className={"field-btn_arrow"}
                            />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default Contact;
