const S3 = require('aws-sdk/clients/s3')
const crypto = require('crypto');
const { promisify } = require('util');
const randomBytes = promisify(crypto.randomBytes)

const bucketName = "amuse-bucket"
const region = "us-east-1"
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
})


const generateUploadURL = async () => {
  const rawBytes = await randomBytes(16);
  const filename = rawBytes.toString('hex');

  const params = {
    Bucket: bucketName,
    Key: filename,
    // ContentType: 'audio/mpeg',
    Expires: 60,
  };

  const uploadURL = await (await s3.getSignedUrlPromise('putObject', params)).split("?")[0];
  return uploadURL;
}

module.exports = { generateUploadURL };
