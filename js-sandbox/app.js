let re;

// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; // Must start with
re = / world$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character

// Brackets [] - Character sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/i; // Anything excepf for G or F
re = /[A-Z]ray/; // Any uppercase letter
re = /[a-z]ray/; // Any lowercase letter
re = /[A-Za-z]ray/; // Any letter case
re = /[0-9][0-9]rey/; // Any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} times
re = /Hel{2,4}o/i; // Must occur in the {m} range of times
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

// String to match
const string = '3x3x3x';
// Log results
const result = re.exec(string);
console.log(result);

function reTest(re, string) {
  if (re.test(string)) {
    console.log(`The string matches ${re.source} `);
  } else {
    console.log(`The string does not match ${re.source} `);
  }
}

reTest(re, string);
