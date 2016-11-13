const AWS = require("aws-sdk")
const route53 = new AWS.Route53()

function findHostedZone(domain) {

  return new Promise((resolve, reject) => {
    route53.listHostedZones({}, function(err, data) {
      if (err) return reject(err);
      var zone = _.select(data.HostedZones, zone => {
        return zone.Name === `${domain}.`
      })[0]

      if (zone) {
        resolve(zone.Id)
      } else {
        reject(new Error('hosted zone not found'))
      }
    })
  })
}
module.exports._findHostedZone = findHostedZone

module.exports.pointDNSToInstance = (domain, ipAddress) => {
  return new Promise((resolve, reject) => {

    findHostedZone(domain).then(hostedZoneId => {
      var params = {
        ChangeBatch: { /* required */
          Changes: [ /* required */
            {
              Action: 'UPSERT', /* required */
              ResourceRecordSet: { /* required */
                Name: `${domain}`, /* required */
                Type: 'A', /* required */
                TTL: 86400,
                ResourceRecords: [
                  {
                    Value: ipAddress /* required */
                  }
                ]
              }
            }
          ]
        },
        HostedZoneId: hostedZoneId /* required */
      };
      console.log('params', params)
      console.log('params', params.ChangeBatch.Changes)
      route53.changeResourceRecordSets(params, function(err, data) {
        if (err) reject(err)
        else     resolve(data)
      });
    })
  });
}
