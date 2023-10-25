const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3')
const Logger = require('../logger/loggerService')

class AwsService extends Logger {
    constructor() {
        super('AwsService')
        this.log('aws service init', { data: 'test' })
        this.s3 = new S3Client({ region: 'eu-west' })
    }

    async listBuckets() {
        const command = new ListBucketsCommand({})
        const result = await this.s3.send(command)
        this.log('list buckets result', { result })
        return result
    }
}

module.exports = new AwsService()
