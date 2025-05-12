
import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const client = new S3Client(
    { 
        region: "us-east-1",
        credentials:{
            accessKeyId:"AKIAZ3OSZ3RDL3NMD36S",
            secretAccessKey:"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"
        }
    }
);

// we created a client of that nodejs user cred now link include that data 
// we craeted command including bucketname and filename
// we call func and pass the args

async function geturl1(key){
    const command=new GetObjectCommand({
        Bucket:"murtazaprivbucket",
        Key:key
    })   
    const url=await getSignedUrl(client,command)
    return url
}


async function geturl2(filename,type){
    const command =new PutObjectCommand({
        Bucket:"murtazaprivbucket",
        Key:`uploads/${filename}`,
        ContentType:type
    })
   
    const url=await getSignedUrl(client,command)
    return url
}

console.log(await geturl1("uploads/1746613505456.jpeg"))
// console.log(await geturl2(`${Date.now()}.jpeg`,"jpeg"))

