function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('OK');
    }, 1000)
  });
}

function withoutAsync() {
  console.log('Starting without async');
  const data = getData();
  console.log(data);
  console.log('Ending without async');
}

async function withAsync() {
  console.log('Starting with async');
  const data = await getData();
  console.log(data);
  console.log('Ending with async');
}

withoutAsync();
withAsync();