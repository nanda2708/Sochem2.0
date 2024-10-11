import Navbar from "@/components/navbar";
import FundsCarousel from "@/components/fundsCarousel";
import Footer from "@/components/footer.js";

export default function Funds() {
	return (
		<div>
			<Navbar />
			<div className="bg-[#040D21] w-full ">
				<p className="font-medium flex text-[#F7FAFF] justify-center text-2xl sm:text-3xl lg:text-5xl">
					<p className="mt-20">
						The<span className="text-[#2A6BFF]"> Grand</span>{" "}
						Alumni!
					</p>
				</p>
				<FundsCarousel />
			</div>
			<div class="bg-slate-100 py-10">
				<form class="mx-20 my-10 bg-white rounded-2xl flex flex-col md:flex-row">
					<div class=" p-20 flex flex-col w-3/5">
						<h1 class="text-3xl font-bold mb-6">
							Alumni Fund Form
						</h1>
						<div class="pb-5 justify-between flex">
							<label class="text-lg">Email*</label>
							<input
								class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
								placeholder="abc@company.com"
								type="email"
								required
							></input>
						</div>
						<div class="pb-5 justify-between flex">
							<label class="text-lg">Name* </label>
							<input
								class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
								placeholder="Ethan Hunt"
								required
							/>
						</div>
						<div class="pb-5 justify-between flex">
							<label class="text-lg">Batch*</label>
							<input
								class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
								placeholder="2000"
								type="number"
								required
							/>
						</div>
						<div class="pb-5 justify-between flex">
							<label class="text-lg">LinkedIn Profile* </label>
							<input
								class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
								placeholder="http://linkedin.com/in/accountaname"
								type="url"
								required
							/>
						</div>
						<div class="pb-5 justify-between flex">
							<label class="text-lg">Contact No*</label>
							<input
								class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
								placeholder="9999999999"
								type="number"
								required
							/>
						</div>
						<div class="pb-5 justify-between flex">
							<label class="text-lg">Current Company*</label>
							<input
								class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
								placeholder="Apple Inc."
								required
							/>
						</div>
						<div class="pb-10 justify-between flex">
							<label class="text-lg">Amount* </label>
							<input
								class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64"
								placeholder="50000"
								type="number"
                                required
							/>
						</div>
						Please fill all the fields before submitting that are
						marked with*
						<button
							class="bg-black text-white text-xl rounded-full mt-5 py-1"
							type="submit"
						>
							SUBMIT
						</button>
					</div>
					<div class="flex flex-col w-2/5 py-20 mr-20 justify-between">
						<h1 class="text-3xl font-bold mb-6">Why</h1>
						<p class="mb-5">
							SoChem organizes year long workshops and events for
							the overall development of its members. Alumni Funds
							helps us arrange events and competitions!{" "}
						</p>
						<h1 class="text-3xl font-bold mb-3">
							Account Details{" "}
						</h1>
						<img class="h-40 w-40 rounded pb-3" />
						<p class="mb-10">UPI Id: 9026663689@paytm</p>
						<h1 class="text-3xl font-bold mb-2">Contact Us:</h1>
						abc@iitbhu.ac.in
					</div>
				</form>
			</div>

			<Footer />
		</div>
	);
}
