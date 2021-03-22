import hello from "@/lib/hello"

describe("hello", () => {
  test("yantene を渡すと yantene にあいさつすること", () => {
    const greeting = hello("yantene")

    expect(greeting).toBe("Hello, yantene!!")
  })
})
