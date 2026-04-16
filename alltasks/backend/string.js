function uppercase(str){
  return str.toUpperCase();
}

function lowercase(str){
  return str.toLowerCase();
}

function camelcase(str){
  let words = str.toLowerCase().split(" ");
  let result = words[0];

  for(let i = 1; i < words.length; i++){
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return result;
}

function capitalize(str){
  let words = str.toLowerCase().split(" ");
  let result = "";

  for(let i = 0; i < words.length; i++){
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
  }

  return result.trim();
}

module.exports = {
  uppercase,
  lowercase,
  camelcase,
  capitalize
}
