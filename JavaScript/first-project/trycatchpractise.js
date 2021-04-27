// try....catch

try {
    throw 'Throwing an exception'
} catch (ex) {
    console.log('Got an error')
    console.log(ex)
}

// try....catch....finally

try {
    throw 'Throwing an exception everytime'
} catch (ex) {
    console.log('Got an error')
    console.log(ex)
} finally {
    console.log('Code that runs everytime')
}