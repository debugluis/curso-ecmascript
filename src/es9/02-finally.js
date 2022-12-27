const anotherFuntion = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!!');
        }
        else {
            reject('Whooooops!')
        }
    })
}

anotherFuntion()
  .then(response => console.log(response))
  .catch(err => console.log(err))
  .finally(() => console.log('Finally'));