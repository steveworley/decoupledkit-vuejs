
export default class Serializable {
  serialize() {
    throw new Error('Incorrect inherited [Serializable]: Missing serialize method definition')
  }
  deserialize(input) {
    throw new Error('Incorrect inherited [Serializable]: Missing deserialize method definition')
  }
}