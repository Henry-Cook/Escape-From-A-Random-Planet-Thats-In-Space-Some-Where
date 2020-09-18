const OsmiumPulseThrusters = () => {
  let dilithiumVacuum = "stable";
  let warpNode = "maximum";
  let quantumImpulser = "Blow Up Ship";

  if (dilithiumVacuum === "stable" && warpNode === "maximum") {
    return "stabilized";
  } else {
    return quantumImpulser;
  }
};

console.log(OsmiumPulseThrusters());

// Answer = "stableized"

// “I'm detecting a destabilization in the osmium pulse thrusters. It seems like the function below isn't returning what it should!”
