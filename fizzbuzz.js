console.log("It's working!");

for (x = 0; x <= 30; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log('fizzbuzz')
  } else if (x % 3 == 0) {
    console.log('fizz')
  } else if (x % 5 == 0) {
    console.log('fizzbuzz')
  } else {
    console.log(x);
  }
};
