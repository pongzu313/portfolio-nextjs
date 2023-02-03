import React from "react";
import ProjectItem from "./ProjectItem";
import foodImg from "../public/assets/projects/food-app.jpg";
import cryptoImg from "../public/assets/projects/crypto.png";
import refugeeImg from "../public/assets/projects/refugees.png";
import sketchBookImg from "../public/assets/projects/sketchbook.png";
import movieImg from "../public/assets/projects/moviepedia.png";
import shootingImg from "../public/assets/projects/shootinggame.png";
import camelotImg from "../public/assets/projects/money.png";
import houseSellerImg from "../public/assets/projects/house.png";
import cakeShopImg from "../public/assets/projects/cake.png";
import bagShopImg from "../public/assets/projects/bag.png";
import wineShopImg from "../public/assets/projects/wine.png";
import watchShopImg from "../public/assets/projects/watch.png";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl uppercase tracking-widest text-[#1E90FF]">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-3 gap-8">
					<ProjectItem
						title="Simple Game"
						backgroundImg={sketchBookImg}
						projectUrl="/simplegame"
						tech="Three JS"
					/>
					<ProjectItem
						title="Refugees Stats"
						backgroundImg={refugeeImg}
						projectUrl="/refugee"
						tech="D3 JS"
					/>
					<ProjectItem
						title="Shooting Game"
						backgroundImg={shootingImg}
						projectUrl="/shootinggame"
						tech="Babylon JS"
					/>
					<ProjectItem
						title="Watch Expert"
						backgroundImg={watchShopImg}
						projectUrl="/watchshop"
						tech="React JS"
					/>
					<ProjectItem
						title="Grands Crus"
						backgroundImg={wineShopImg}
						projectUrl="/wineshop"
						tech="Next JS"
					/>
					<ProjectItem
						title="Bag Creator"
						backgroundImg={bagShopImg}
						projectUrl="/baginiter"
						tech="Three JS"
					/>
					<ProjectItem
						title="Lake of Cakes"
						backgroundImg={cakeShopImg}
						projectUrl="/cakeshop"
						tech="Bootstrap/JQuery"
					/>
					<ProjectItem
						title="Comfy Sloth"
						backgroundImg={houseSellerImg}
						projectUrl="/houseseller"
						tech="Next JS"
					/>
					<ProjectItem
						title="Camelot"
						backgroundImg={camelotImg}
						projectUrl="/camelot"
						tech="Vue JS"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
