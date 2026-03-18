import {
    FaUserSecret,
    FaLock,
    FaRocket,
    FaShieldAlt,
    FaKey,
    FaGithub,
    FaUser,
    FaServer
} from "react-icons/fa";
import {BsArrowRight} from "react-icons/bs";
import {Link} from "react-router";
import {HashLink} from "react-router-hash-link";
import Button_Black from "../Shared/Components/Buttons/Button_Black.tsx";
import Button_White from "../Shared/Components/Buttons/Button_White.tsx";
import lock_01 from '/src/assets/lock_01.svg';


const Welcome = () => {

    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-screen p-10 bg-linear-to-br from-cyan-400 to-pink-100">

            {/* HERO */}
            <section
                className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl p-12 bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl gap-10">

                <div className="flex flex-col justify-between max-w-xl h-96">

                    <div className="flex flex-col gap-6">
                        <p className="text-6xl font-bold leading-tight">
                            Exercise your right to
                            <span className="text-cyan-700"> privacy</span>
                        </p>

                        <p className="text-lg text-gray-700">
                            Chat anonymously with <b>Chatonymous</b>.
                            Only a username and password are required —
                            no phone numbers, emails, or personal data.
                        </p>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <Link to="/conversations">
                            <Button_Black>
                                Try it now
                            </Button_Black>
                        </Link>

                        <HashLink to="/#features">
                            <Button_White>
                                Learn More
                            </Button_White>
                        </HashLink>
                    </div>

                </div>

                <img
                    src={lock_01}
                    alt="Lock"
                    width={340}
                    className="drop-shadow-xl"
                />
            </section>


            {/* FEATURES */}
            <section
                id="features"
                className="grid md:grid-cols-3 gap-8 max-w-6xl mt-24"
            >

                <div className="p-8 bg-white/40 backdrop-blur-xl rounded-xl shadow-xl hover:scale-105 transition">
                    <FaUserSecret className="text-3xl text-cyan-700 mb-4"/>
                    <h3 className="text-xl font-bold mb-2">
                        Anonymous Identity
                    </h3>
                    <p className="text-gray-700">
                        Chat using only a username. No phone numbers,
                        emails, or personal identifiers are required.
                    </p>
                </div>

                <div className="p-8 bg-white/40 backdrop-blur-xl rounded-xl shadow-xl hover:scale-105 transition">
                    <FaShieldAlt className="text-3xl text-cyan-700 mb-4"/>
                    <h3 className="text-xl font-bold mb-2">
                        Privacy First
                    </h3>
                    <p className="text-gray-700">
                        The platform is designed with minimal data
                        collection and privacy-focused architecture.
                    </p>
                </div>

                <div className="p-8 bg-white/40 backdrop-blur-xl rounded-xl shadow-xl hover:scale-105 transition">
                    <FaRocket className="text-3xl text-cyan-700 mb-4"/>
                    <h3 className="text-xl font-bold mb-2">
                        Fast & Lightweight
                    </h3>
                    <p className="text-gray-700">
                        Built with modern technologies for smooth
                        and efficient messaging.
                    </p>
                </div>

            </section>


            {/* SCROLLING PRIVACY TILES */}
            <section className="w-full overflow-hidden mt-24">

                <div className="flex gap-6 whitespace-nowrap animate-[scroll_25s_linear_infinite]">

                    {[
                        "Username + Password Only",
                        "No Email Required",
                        "No Phone Number",
                        "Client-side Message Encoding",
                        "Privacy Focused Design",
                        "Minimal Data Storage",
                        "Anonymous Chat",
                        "Modern Security"
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="px-6 py-3 bg-white/40 backdrop-blur-xl rounded-xl shadow-md text-sm font-medium"
                        >
                            {item}
                        </div>
                    ))}

                </div>

            </section>


            {/* PRIVACY & SECURITY */}
            <section className="max-w-6xl mt-24 flex flex-col gap-12">

                <div className="text-center flex flex-col gap-4">
                    <h2 className="text-3xl font-bold">
                        Privacy & Security
                    </h2>

                    <p className="text-gray-700 max-w-3xl mx-auto">
                        Chatonymous is built with privacy as a core principle.
                        Unlike many chat platforms that require personal
                        identifiers, we only use a username and password
                        for authentication.
                    </p>
                </div>


                <div className="grid md:grid-cols-3 gap-8">

                    <div className="p-8 bg-white/40 backdrop-blur-xl rounded-xl shadow-xl hover:scale-105 transition">
                        <FaUser className="text-3xl text-cyan-700 mb-4"/>

                        <h3 className="text-xl font-bold mb-3">
                            Username Based Identity
                        </h3>

                        <p className="text-gray-700">
                            Users are identified only by username.
                            This prevents linking accounts to
                            real-world personal data.
                        </p>
                    </div>


                    <div className="p-8 bg-white/40 backdrop-blur-xl rounded-xl shadow-xl hover:scale-105 transition">
                        <FaKey className="text-3xl text-cyan-700 mb-4"/>

                        <h3 className="text-xl font-bold mb-3">
                            SHA-256 Message Encoding
                        </h3>

                        <p className="text-gray-700">
                            Messages are encoded using modern
                            SHA-256 cryptographic hashing techniques
                            on the client side before transmission.
                        </p>
                    </div>


                    <div className="p-8 bg-white/40 backdrop-blur-xl rounded-xl shadow-xl hover:scale-105 transition">
                        <FaLock className="text-3xl text-cyan-700 mb-4"/>

                        <h3 className="text-xl font-bold mb-3">
                            Modern Security Approach
                        </h3>

                        <p className="text-gray-700">
                            Many legacy systems rely on outdated
                            security methods. Chatonymous focuses
                            on modern cryptographic practices.
                        </p>
                    </div>

                </div>


                <div className="p-8 bg-white/30 backdrop-blur-xl rounded-xl shadow-xl text-center">
                    <p className="text-gray-800">
                        By combining anonymous usernames,
                        modern cryptographic methods,
                        and minimal data storage,
                        Chatonymous ensures conversations remain
                        private and secure.
                    </p>
                </div>

            </section>


            {/* TECH STACK */}
            <section className="flex flex-col items-center gap-6 mt-24 text-center">

                <h2 className="text-3xl font-bold">
                    Built With Modern Technologies
                </h2>

                <div className="flex flex-wrap justify-center gap-4 text-sm">

                    <span className="px-4 py-2 bg-black text-white rounded-full">
                        React
                    </span>

                    <span className="px-4 py-2 bg-black text-white rounded-full">
                        Spring Boot
                    </span>

                    <span className="px-4 py-2 bg-black text-white rounded-full">
                        MongoDB
                    </span>

                    <span className="px-4 py-2 bg-black text-white rounded-full">
                        TailwindCSS
                    </span>

                </div>

            </section>

            {/* HOW IT WORKS */}
            <section className="max-w-6xl mt-24 flex flex-col items-center gap-12">

                <h2 className="text-3xl font-bold text-center">
                    How Chatonymous Protects Your Messages
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-10">

                    {/* USER A */}
                    <div className="flex flex-col items-center gap-4">
                        <FaUser className="text-4xl text-cyan-700"/>

                        <div
                            className="bg-white/40 backdrop-blur-xl px-5 py-3 rounded-xl shadow-lg hover:-translate-y-1 transition">
                            Hello 👋
                        </div>
                    </div>


                    {/* ARROW */}
                    <BsArrowRight className="text-3xl animate-pulse"/>


                    {/* ENCRYPTION */}
                    <div className="flex flex-col items-center gap-4">

                        <FaLock className="text-4xl text-cyan-700"/>

                        <div
                            className="bg-white/40 backdrop-blur-xl px-5 py-3 rounded-xl shadow-lg hover:-translate-y-1 transition">
                            SHA-256 Encoding
                        </div>

                    </div>


                    <BsArrowRight className="text-3xl animate-pulse"/>


                    {/* SERVER */}
                    <div className="flex flex-col items-center gap-4">

                        <FaServer className="text-4xl text-cyan-700"/>

                        <div
                            className="bg-white/40 backdrop-blur-xl px-5 py-3 rounded-xl shadow-lg hover:-translate-y-1 transition">
                            Message Relay
                        </div>

                    </div>


                    <BsArrowRight className="text-3xl animate-pulse"/>


                    {/* USER B */}
                    <div className="flex flex-col items-center gap-4">

                        <FaUser className="text-4xl text-cyan-700"/>

                        <div
                            className="bg-white/40 backdrop-blur-xl px-5 py-3 rounded-xl shadow-lg hover:-translate-y-1 transition">
                            Hi there!
                        </div>

                    </div>

                </div>


                <p className="text-center max-w-3xl text-gray-700">
                    Messages are processed using modern cryptographic techniques
                    before being transmitted through the server. This ensures that
                    sensitive information is never stored in plain text and remains
                    protected during communication.
                </p>

            </section>


            {/* CTA */}
            <section className="flex flex-col items-center gap-6 mt-24 text-center">

                <p className="text-lg">
                    Open source and transparent.
                </p>

                <Button_Black>
                    <Link
                        to="https://github.com/samrat079"
                        target="_blank"
                        className="flex items-center gap-2"
                    >
                        <FaGithub/>
                        View on GitHub
                    </Link>
                </Button_Black>

            </section>


            {/* FOOTER */}
            <footer className="mt-24 text-sm text-gray-700">
                © {new Date().getFullYear()} Chatonymous — Privacy Matters
            </footer>

        </div>
    );
};

export default Welcome;