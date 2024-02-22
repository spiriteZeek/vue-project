import mitt from "mitt";
const eventBus = mitt();

const eventType = {
  ping: "ping",
  pong: "pong",
};

export { eventBus, eventType };
