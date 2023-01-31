import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Koby | Javascript Expert</title>
				<meta name="description" content="Created by Koby Hernibrook" />
				<link rel="icon" href="/favi.png" />
			</Head>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
