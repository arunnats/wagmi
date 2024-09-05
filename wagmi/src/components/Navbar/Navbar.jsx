import heroImage from "../.././assets/images/heroImage.jpeg";
import wagmiLogo from "../.././assets/images/wagmiLogo.svg";

function Navbar() {
	return (
		<>
			<div className="w-full h-screen">
				<img
					src={heroImage}
					alt="Hero Image"
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="w-full h-[100px] flex items-center justify-between padding z-[999] px-[4em] py-0 bg-wagmi-blue">
				<div class="items-left">
					<a className="px-[1em] py-0" href="#">
						placeholder
					</a>
					<a className="px-[1em] py-0" href="#">
						placeholder
					</a>
				</div>
				<div className="flex justify-center items-center">
					<img className="h-20" src={wagmiLogo} alt="Wagmi Logo" />
				</div>
				<div class="items-right">
					<a className="px-[1em] py-0" href="#">
						placeholder
					</a>
					<a className="px-[1em] py-0" href="#">
						placeholder
					</a>
				</div>
			</div>
		</>
	);
}

export default Navbar;
