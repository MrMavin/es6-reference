function highlight(strings, ...values) {
  let str = '';

  strings.forEach((string, i) => {
    str += `${string} <span style="font-weight: bold">${values[i] || ''}</span>`;
  });

  return str;
}

const name = 'Vincent';
const surname = 'Mavin';

const markup = highlight`His name is ${name}, also known as ${surname}.`;

document.body.innerHTML = markup;
