import Serializable from './serializable.model'

export class Character extends Serializable {
  constructor(input) {
    this.deserialize(input)
  }

  serialize() {}

  deserialize(input) {
    Object.assign(this, input)
    return this
  }
}