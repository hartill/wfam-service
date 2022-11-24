"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
  type Turbine {
    id: ID,
    name: String,
    windFarm: WindFarm,
    model: String,
    ratedPower: Int,
    lat: Float,
    long: Float,
  }

  type WindFarm {
    id: ID,
    name: String
    timeZone: String
    turbines: [Turbine]!
  }

  type Message {
    id: ID
    type: String
    content: String
    dateTime: String
  }

  type TurbineTelemetry {
    nacelleDirectionDeg: Float
    rotorSpeed: Float
    bladePitchAngle: Float
    powerOutput: Float
    windSpeed: Float
    windDirectionDeg: Float
  }

  type Query {
    windFarm: WindFarm!
    turbine(id: ID): Turbine
    messages(id: ID): [Message]!
    turbineTelemetry(id: ID): TurbineTelemetry
  }
`;
