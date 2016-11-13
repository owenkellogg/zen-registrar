require('sails-test-helper')

describe("Route53Service", () => {

  it("#_findtHostedZone should return the zone id given a domain name", done => {

    Route53Service._findHostedZone('stevenzeiler.com').then(zoneId => {
      expect(zoneId).to.be.a('string')
      done()
    })
  })

  it('#pointDNSToInstance should point DNS to the instance', done => {
    Route53Service.pointDNSToInstance('stevenzeiler.com', '54.167.48.4').then(response => {
      console.log(response)
      done()
    })
    .catch(console.error)
  })

  it('#createHostedZone should create a hosted zone', done => {
    Route53Service.createHostedZone('stevenzeiler.com').then(response => {
      console.log(response)
      done()
    })
    .catch(console.error)
  })
})
