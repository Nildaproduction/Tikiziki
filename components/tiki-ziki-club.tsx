"use client"

import { useState } from "react"

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "DR Congo",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
]

export function TikiZikiClub() {
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("Kenya")
  const [postalCode, setPostalCode] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          country,
          postalCode,
        }),
      })

      setEmail("")
      setPostalCode("")

      alert("Welcome to Tiki Ziki Club.")
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  return (
    <section className="relative py-28 overflow-hidden bg-black">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px]" />
      </div>

      <div className="container relative mx-auto px-6 max-w-3xl">

        {/* heading */}
        <div className="text-center mb-12">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4">
            Official Community
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-5">
            Join Tiki Ziki Club
          </h2>

          <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
            Become part of the official Tiki Ziki community. Get early access
            to new music, visuals, exclusive drops, announcements, and private
            updates directly from the camp.
          </p>
        </div>

        {/* glass form */}
        <form
          onSubmit={handleSubmit}
          className="
            relative
            rounded-[32px]
            border border-white/10
            bg-white/[0.06]
            backdrop-blur-3xl
            shadow-[0_30px_120px_rgba(0,0,0,0.7)]
            p-6 md:p-10
            overflow-hidden
          "
        >
          {/* glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 right-0 w-[250px] h-[250px] bg-primary/10 blur-[90px]" />
          </div>

          <div className="relative space-y-5">

            {/* email */}
            <div>
              <label className="block text-sm text-white/70 mb-2">
                Email Address
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="
                  w-full
                  rounded-2xl
                  border border-white/10
                  bg-black/30
                  px-5 py-4
                  text-white
                  outline-none
                  transition
                  focus:border-primary/40
                  focus:bg-black/50
                "
              />
            </div>

            {/* country */}
            <div>
              <label className="block text-sm text-white/70 mb-2">
                Country
              </label>

              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="
                  w-full
                  rounded-2xl
                  border border-white/10
                  bg-black/30
                  px-5 py-4
                  text-white
                  outline-none
                  transition
                  focus:border-primary/40
                  focus:bg-black/50
                "
              >
                {countries.map((countryName) => (
                  <option
                    key={countryName}
                    value={countryName}
                    className="bg-black text-white"
                  >
                    {countryName}
                  </option>
                ))}
              </select>
            </div>

            {/* postal */}
            <div>
              <label className="block text-sm text-white/70 mb-2">
                ZIP / Postal Code
              </label>

              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Postal code"
                className="
                  w-full
                  rounded-2xl
                  border border-white/10
                  bg-black/30
                  px-5 py-4
                  text-white
                  outline-none
                  transition
                  focus:border-primary/40
                  focus:bg-black/50
                "
              />
            </div>

            {/* button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-2xl
                bg-primary
                py-4
                font-bold
                text-black
                tracking-wide
                transition-all
                duration-300
                hover:scale-[1.015]
                hover:shadow-[0_0_45px_rgba(255,215,0,0.25)]
                disabled:opacity-50
              "
            >
              {loading ? "Joining..." : "Join Club"}
            </button>

            <p className="text-center text-xs text-white/35 pt-2">
              Exclusive releases · Early access · Private updates
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
