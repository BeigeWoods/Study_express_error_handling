export default class Errorhandling {
  constructor() {}
  #origin = (value) =>
    new Promise((resolve, reject) =>
      value ? resolve("ok") : reject(new Error("origin"))
    );

  throw = async () => {
    return await this.#origin(false).catch((error) => {
      throw `throw < ${error}`;
    });
  };

  new = async () => {
    return await this.#origin(false).catch((error) => {
      throw new Error(`throwNew < ${error}`);
    });
  };
}
