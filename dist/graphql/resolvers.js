"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const turbine = {
    id: '193093',
    name: 'Turbine A',
    windFarmName: 'Wind Farm A',
    model: 'T256',
    ratedPower: 2000,
    lat: 48.775845,
    long: 9.182932,
};
const windFarm = {
    id: '897897983',
    name: 'Wind Farm A',
    timeZone: 'Europe/Berlin',
    turbines: [turbine],
};
const messages = [
    {
        id: '83898',
        type: 'Warning',
        content: 'Yaw adjusted +0.05',
        dateTime: new Date(),
    },
    {
        id: '23664',
        type: 'Error',
        content: 'Error in generator controller',
        dateTime: new Date(),
    },
    {
        id: '5g54',
        type: 'Information',
        content: 'Wind speed 10m/s',
        dateTime: new Date(),
    },
    {
        id: 'gtgt',
        type: 'Warning',
        content: 'Yaw adjusted +0.02',
        dateTime: new Date(),
    },
];
function getTurbineTelemetry() {
    return {
        nacelleDirectionDeg: 67 + Math.floor(Math.random() * 5),
        rotorSpeed: 3.5 + Math.random() * 3,
        bladePitchAngle: 0 + Math.random() * 2,
        powerOutput: Math.round(1000 + Math.random() * 100),
        windSpeed: Math.round(11 + Math.random() * 5),
        windDirectionDeg: 38 + Math.random() * 5,
    };
}
exports.resolvers = {
    Query: {
        windFarm: () => windFarm,
        turbine: () => turbine,
        messages: () => messages,
        turbineTelemetry: () => getTurbineTelemetry(),
    },
};
