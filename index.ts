interface HelloPromise extends Promise<string> {}

function hello() : HelloPromise {
  return Promise.resolve('hello');
}

async function run() {
  await hello();
};

run();
