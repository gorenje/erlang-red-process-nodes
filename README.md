# Erlang-Red - Erlang Processes Node Package

**WARNING**: These nodes have no usage with Node-RED, they will only work with Erlang-Red.


Node packages represents existing Erlang processes as nodes that can be sent messages.

See the [Erlang-Red](https://github.com/gorenje/erlang-red) project for more details.

## Why?

Because Erlang has first-class lightweight processes that can receive messages, representing these existing Erlang processes as nodes makes *total* sense. 

The process node represents these existing Erlang process and thus existing Erlang processes can be embedded into Erlang-Red flows. When a process node receives a message, it forwards that message to the existing process.

Thus a two way communication between existing Erlang code and Erlang-Red can be established and messages replies are fed back into the Erlang-Red flow as output messages of the corresponding process node.

## Artefacts for these nodes

- [NPMjs Package](https://www.npmjs.com/package/@gregoriusrippenstein/erlang-red-process-nodes)
- [Node-RED node package](https://flows.nodered.org/node/@gregoriusrippenstein/erlang-red-process-nodes)
- [GitHub Repo](https://github.com/gorenje/erlang-red-process-nodes)
- Node-RED flow that maintains this [codebase](https://flowhub.org/f/49a002376dbaf35f).
