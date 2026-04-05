function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-16">
      <div className="container-custom py-14 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold">
            Digi<span className="text-purple-400">Tools</span>
          </h2>
          <p className="text-sm text-gray-400 mt-4 leading-6">
            DigiTools helps users discover premium digital products for design,
            writing, workflow and business growth.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Features</li>
            <li>Pricing</li>
            <li>Updates</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        © 2026 DigiTools. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;