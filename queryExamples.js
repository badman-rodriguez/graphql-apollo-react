// GraphQL

/*
mutation {
  addFlight(
   airline: "Alaska Airlines" ,
   acftType: "B742" ,
   flightNum:  "ASA37",
   departureCity: "City",
   departureState: "State",
   destinationCity: "City",
   destinationState: "State",
   region: "DOM",
   division: "NA",
   taxRule: "123",
   txRouting: "L1",
   connectivtyType: "ATG1" 
  ) {
    _id
    airline
    acftType
  }
}
*/

/**
 * 
 * 
{
  allFlights {
    airline
    acftType
    flightNum
  	departureCity
    departureState
  }
}

returns

{
  "data": {
    "allFlights": [
      {
        "airline": "Alaska Airlines",
        "acftType": "B739",
        "flightNum": "ASA34",
        "departureCity": "City",
        "departureState": "State"
      },
      {
        "airline": "Alaska Airlines",
        "acftType": "B739",
        "flightNum": "ASA34",
        "departureCity": "City",
        "departureState": "State"
      },
      {
        "airline": "Alaska Airlines",
        "acftType": "B740",
        "flightNum": "ASA35",
        "departureCity": "City",
        "departureState": "State"
      },
      {
        "airline": "Alaska Airlines",
        "acftType": "B741",
        "flightNum": "ASA36",
        "departureCity": "City",
        "departureState": "State"
      },
      {
        "airline": "Alaska Airlines",
        "acftType": "B742",
        "flightNum": "ASA37",
        "departureCity": "City",
        "departureState": "State"
      }
    ]
  }
}

 */