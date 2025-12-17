import { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    
    if (!captchaToken) {
      setResult("Please complete the captcha verification");
      return;
    }
    
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "d56d3221-b485-4d5a-9827-de7f8bd4d58c");
    formData.append("h-captcha-response", captchaToken);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message sent successfully! 🎉" : "Failed to send. Please try again.");
    setIsSubmitting(false);
    
    if (data.success) {
      event.target.reset();
      setCaptchaToken(null);
      setTimeout(() => setResult(""), 5000);
    }
  };

  const onHCaptchaChange = (token) => {
    setCaptchaToken(token);
    setResult(""); // Clear any previous error messages
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input 
          type="text" 
          id="name"
          name="name" 
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent outline-none transition-all"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input 
          type="email" 
          id="email"
          name="email" 
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent outline-none transition-all"
          placeholder="your@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea 
          id="message"
          name="message" 
          required
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-800 focus:border-transparent outline-none transition-all resize-none"
          placeholder="Write your message here..."
        ></textarea>
      </div>
      
      {/* hCaptcha */}
      <HCaptcha
        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
        onVerify={onHCaptchaChange}
        reCaptchaCompat={false}
      />
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition-all font-semibold shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      
      {result && (
        <p className={`text-center font-medium ${result.includes("success") ? "text-green-600" : "text-red-600"}`}>
          {result}
        </p>
      )}

    </form>
  );
}
