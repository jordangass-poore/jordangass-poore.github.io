import MapService from "../models/map-service"
import { mapServices } from "../data/map-services"

const useMapServices = ({ names = [], userServices = [] } = {}) => {
	const services = names.map(name => {
		const setMapServices = mapServices || []
		let services = []
		if (userServices.length) {
			services = [...setMapServices, ...userServices]
		} else {
			services = setMapServices
		}

		return services.find(service => service.name === name)
	})
	console.log("services", services)
	return services.map(service => new MapService(service))
}

export default useMapServices
