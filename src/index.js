const createField = (key, value) => {
  return {
    kind: "field",
    key,
    placement: "own",
    descriptor: { configurable: true, writable: true, enumerable: true },
    initializer: () => {
      return value
    }
  }
}

const useAPIClient = (target) => {
  target.elements.push(createField("apiClient", new APIClient()))
}

class APIClient {
  getUsers() {
    return ["user1", "user2", "user3"]
  }
}

@useAPIClient
class MyClass {
  printUsers() {
    console.log(this.apiClient.getUsers());
  }
}

new MyClass().printUsers();
