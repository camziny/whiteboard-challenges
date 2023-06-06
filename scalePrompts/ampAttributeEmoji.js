const regex = /amp|⚡/;

const test = (tag) => {
  return regex.test(tag);
};

const tag = "my-amp-element";

if (test(tag)) {
  console.log("The tag contains the amp attribute or the ⚡ emoji.");
} else {
  console.log("The tag does not contain the amp attribute or the ⚡ emoji.");
}
