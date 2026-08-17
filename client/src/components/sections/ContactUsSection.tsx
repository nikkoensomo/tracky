import { Contact } from "lucide-react";
import ContactUsForm from "../forms/ContactUsForm";

const ContactUsSection = () => {
    return (
        <>
            <section id="contact" className="scroll-mt-24 px-6 py-24">
                <div className="flex items-center justify-center space-x-6">
                    <div className="flex flex-col gap-4 max-w-xl">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-bold">Get In Touch</h1>
                            <span className="text-lg font-medium text-slate-700">Let's build something together</span>
                            <p className="text-sm leading-relaxed text-gray-600 mt-4">
                                Whether you are looking to scale your engineering team, discuss full-stack code
                                architecture, or simply talk about modern development workflows,
                                I would love to connect. I am available for full-time software engineering roles
                                and ready for immediate deployment.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 bg-white border border-slate-200 rounded-xl shadow-xl p-6">
                        <span className="text-2xl text-slate-800">Contact Us</span>
                        <p className="text-sm text-slate-600">You can reach us anytime</p>
                        <ContactUsForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUsSection;