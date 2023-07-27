// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
const check1 = [4, 4, 8, 5, 1, 6, 0, 9, 5, 6, 5, 7, 5, 0, 2, 9];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
const validateCred = (array) => {
  let num;
  let sum = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    if ((array.length - 1) % 2 !== 0) {
      if (i % 2 === 0) {
        num = array[i] * 2;
        if (num > 9) {
          num = num - 9;
        } else {
          num = num;
        }
      } else {
        num = array[i];
      }
    } else {
      if (i % 2 !== 0) {
        num = array[i] * 2;
        if (num > 9) {
          num = num - 9;
        } else {
          num = num;
        }
      } else {
        num = array[i];
      }
    }
    sum = sum + num;
  }
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}; // this is closing bracket for whole function

let invalidCards;
const findInvalidCards = (nestedCards) => {
  invalidCards = nestedCards.filter((card) => {
    return validateCred(card) != true;
  });
  return invalidCards;
}; //end of whole function

const idInvalidCardCompanies = (nestedInvalidCards) => {
  let companies = [];
  if (
    nestedInvalidCards.some((card) => {
      return card[0] === 3;
    })
  ) {
    companies.push("Amex");
  }
  if (
    nestedInvalidCards.some((card) => {
      return card[0] === 4;
    })
  ) {
    companies.push("Visa");
  }
  if (
    nestedInvalidCards.some((card) => {
      return card[0] === 5;
    })
  ) {
    companies.push("Mastercard");
  }
  if (
    nestedInvalidCards.some((card) => {
      return card[0] === 6;
    })
  ) {
    companies.push("Discover");
  }
  if (
    nestedInvalidCards.some((card) => {
      return (
        card[0] === 1 ||
        card[0] === 2 ||
        card[0] === 7 ||
        card[0] === 8 ||
        card[0] === 9 ||
        card[0] === 0
      );
    })
  ) {
    console.log("Company not found");
  }
  console.log(companies);
}; //end of whole function

//first 3 lines to check first function works correctly:
console.log("valid5 is valid: " + validateCred(valid5));
console.log("valid3 is valid: " + validateCred(valid3));
console.log("invalid5 is valid: " + validateCred(invalid5));
//now printing an array of invalid cards:
console.log("List of invalid cards: ");
console.log(findInvalidCards(batch));
//now printing an array of companies issuing the invalid cards:
console.log("List of companies issuing invalid cards: ");
idInvalidCardCompanies(invalidCards);

console.log(validateCred(check1));

const toArray = (string) => {
  return Array.from(string);
};
