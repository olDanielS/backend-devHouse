import House from "../Model/House";

class HouseController {
	async store(req, res) {
		console.log(req.file)
		const { filename } = req.file;
		const { description, price, location, status } = req.body;
		const {user_id} = req.headers;


		const house = await House.create({
			thumbnail: filename,
			user: user_id,
			description,
			price,
			location,
			status
		})

		return res.json(house)

	}
}

export default new HouseController();