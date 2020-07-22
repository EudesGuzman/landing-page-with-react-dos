import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Jumbotron } from "./jumbotron.js";
import { Navbar } from "./navbar.js";
import { Cards } from "./cards.js";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<Cards
					image="https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					title="Titulo 1"
					texto="texto 1"
					buttonUrl="#"
					buttonLable="boton"
				/>

				<Cards
					image="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					title="Titulo 2"
					texto="texto 2"
					buttonUrl="boton"
					buttonLable="boton"
				/>

				<Cards
					image="https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					title="Titulo 3"
					texto="texto 3"
					buttonUrl="#"
					buttonLable="boton"
				/>

				<Cards
					image="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					title="Titulo 4"
					texto="texto 4"
					buttonUrl="#"
					buttonLable="boton"
				/>
			</div>
		</div>
	);
}
