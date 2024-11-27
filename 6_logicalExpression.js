const shouldIGetALicense = (age, bribe, isWhitelisted) => {
  if (!isWhitelisted) {
    console.log("You are blacklisted!");
    return;
  }
  if ((age < 18 && !bribe) || bribe > 500) {
    console.log("You passed");
  } else if (age > 18) {
    console.log("You passed");
  } else {
    console.log("You failed");
  }
};

shouldIGetALicense(18, 30, false);
