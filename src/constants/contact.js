export const EMAILJS_SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

export const TO_NAME = "Sathwick Reddy, Yalla";
export const TO_EMAIL = "sathwick@outlook.in";

export const TERMINAL_IMAGE_SRC = "/assets/terminal.png";
export const ARROW_UP_IMAGE_SRC = "/assets/arrow-up.png";

export const FORM_INITIAL_STATE = {
    name: "",
    email: "",
    message: "",
};

export const PLACEHOLDERS = {
    name: "Enter Your Full Name",
    email: "Enter Your Email Address",
    message: "Hi, I wanna provide you a job opportunity...",
};

export const MESSAGES = {
    success: "Your message has been sent!",
    error: "Something went wrong!",
};

export const SECTION_ID = "contact";