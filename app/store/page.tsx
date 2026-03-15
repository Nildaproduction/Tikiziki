<form
  action="https://formspree.io/f/mnjgbevy"
  method="POST"
  className="flex flex-col gap-4"
>
  <input
    type="email"
    name="email"
    placeholder="Your email address"
    className="px-4 py-3 rounded-lg bg-[#222] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#57f2cc] transition"
    required
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone number (optional)"
    className="px-4 py-3 rounded-lg bg-[#222] text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#57f2cc] transition"
  />

  <button
    type="submit"
    className="mt-2 py-3 bg-[#57f2cc] text-black font-bold rounded-lg hover:bg-[#45d9b8] transition"
  >
    Notify Me
  </button>
</form>
