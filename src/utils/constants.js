export const LOGO = require("../Assets/netflix-removebg-preview.png")
export const UserIcon = require("../Assets/userIcon.png")

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmI3NGMxZjQ5MmYyZmQ0YTAwZTRiNGViMDFiNmQzYSIsInN1YiI6IjY0MDZmNjM5N2E0ZWU3MDBmNjdiNjJhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.76bmSR1bt6RiNc9mm28g_37PSyJIXM2cSHTnxGoEstw'
    }
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"
export const BG_URL =
    "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
]