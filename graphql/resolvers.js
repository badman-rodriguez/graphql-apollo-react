module.exports = {
  Query: {
    allFlights: async (parent, args, { FlightInfo }) => {
      const flightInfo = await FlightInfo.find();
      return flightInfo.map((flight) => {
        flight._id = flight._id.toString();
        return flight;
      });
    },
    flightInfo: (parent, args, { FlightInfo }) => {
      console.log(args);
      return FlightInfo.findOne({args});
    }
  },
  Mutation: {
    addFlight: async (parent, args, { FlightInfo }) => {
      const flight = await new FlightInfo(args).save();
      flight._id = flight._id.toString();
      return flight;
    }
  }
};