module.exports = `
type FlightInfo {
  _id: String!
  airline: String,
  acftType: String,
  flightNum: String!
  flightNumeric: String!
  departureCity: String!
  departureState: String!
  destinationCity: String!
  destinationState: String!
  region: String!
  division: String!
  taxRule: String!
  txRouting: String!
  tailNumber: String!
  connectivtyType: String!
}
type Query {
  allFlights: [FlightInfo!]!
  flightInfo(_id: String!, flightNum: String!): FlightInfo
}
type Mutation {
  addFlight(
    airline: String,
    acftType: String,
    flightNum: String!,
    flightNumeric: String,
    departureCity: String,
    departureState: String,
    destinationCity: String,
    destinationState: String,
    region: String,
    division: String,
    taxRule: String,
    txRouting: String,
    tailNumber: String,
    connectivtyType: String
    ): FlightInfo!
}
`;