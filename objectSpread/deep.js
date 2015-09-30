let previousVersion = {
  name: "Old Name",
  address:{
    street:"1234 Foo St",
    town:"Bar",
    state:"VA",
    zip:"88888"
  }
}

let newVersion = {
  ...previousVersion,
  name: 'New Name',
  address: { ...previousVersion.address, zip: '99999' }
};

console.log(newVersion)