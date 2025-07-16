export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
      <p className="font-space-grotesk text-secondary text-center">
        Open to ideas, conversations, and new opportunities.
      </p>
      <h3 className="text-2xl  mt-6 text-center mb-6">Let&apos;s connect!</h3>

      <div className="mb-6">
        <h4 className="text-xl font-bold">Email</h4>
        <p className="text-base font-space-grotesk text-secondary">mbock996@gmail.com</p>
      </div>
      <div className="mb-6">
        <h4 className="text-xl font-bold">LinkedIn</h4>
        <a
          href="https://linkedin.com/in/martinbock96"
          target="_blank"
          className="text-base font-space-grotesk text-secondary"
        >
          Link
        </a>
      </div>
      <div className="mb-6">
        <h4 className="text-xl font-bold">GitHub</h4>
        <a href="https://github.com/MrtnBck" target="_blank" className="text-base font-space-grotesk text-secondary ">
          Link
        </a>
      </div>

      <hr className="my-8 border-t border-secondary" />

      <div>
        <h3 className="text-2xl  mt-6 text-center mb-6">Send me an email here?</h3>
        <form className="flex flex-col max-w-md mx-auto">
          <input type="email" placeholder="Your Email" className="mb-4 p-2 border border-secondary rounded" />
          <input type="text" placeholder="Your Name" className="mb-4 p-2 border border-secondary rounded" />
          <textarea placeholder="Your Message" rows={4} className="mb-4 p-2 border border-secondary rounded" />
          <button
            type="submit"
            className="cursor-pointer mt-4 bg-emerald text-background  px-4 py-2 self-end border-secondary rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
