 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  //write a basic test to familiarize with Jest syntax
test('Check to see if Jest works', () => {
  expect(2).toBe(2);
})

test('check to see if the fake data firstName is patten', () => {
expect(testData.firstName).toBe('Patten')
})
  
//describe block to test the functions we imported

describe('Testing out the formatTitle function', () => {
  //Let's check to see if format title actually returns a string
  test('formatTitle should return a string', () => {
    //Store the return of formatTitle into a new variable
    let formattedTitle = formatTitle(testData.title);

    expect(typeof formattedTitle).toBe('string');
  })

  //check to see if the title is getting capitalized
  test('formatTitle should capitalize the title', () => {
    let formattedTitle = formatTitle(testData.title)

    expect(formattedTitle).toBe('Nulla Ac');
  })
})

//What is difference between toBe and toEqual? the difference is data types. Reference types are equated differently than primitive types
//toEqual works on both primitive and reference types objects and arrays

test('toBe vs toEqual', () => {
  const obj1 = {num: 1};
  const obj2 = {num: 1};

  expect(obj1).toEqual(obj2)
})