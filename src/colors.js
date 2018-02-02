import namer from "color-namer";

export default function getSimilarColors(data, limit=20) {
  let names;

  try {
    names = namer(data);
    // console.log(names);
    // TODO pick the closest, not just ntc
    // ntc looks the one which gives better approximates anyway

    // see: https://github.com/zeke/color-namer
    // names.roygbiv
    // names.basic
    // names.html
    // names.x11
    // names.pantone
    // names.ntc
    names = names.ntc.slice(0, limit);
  } catch (e) {
    names = [];
  }

  return names;
}
