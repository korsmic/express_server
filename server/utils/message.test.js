var expect = require("expect");

var { generateMessage } = require("./message");

describe("generateMessage", () => {
  it("should genetate correct message object", () => {
    var from = "Jen";
    var text = "Some Message";
    var message = generateMessage(from, text);

    expect(message.createAt).toBeA("number");
    expect(message).toInclude({ from, text });
  });
});
