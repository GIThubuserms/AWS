
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const client = new S3Client(
    { 
        region: "us-east-1",
        credentials:{
            accessKeyId:process.env.AMZ,
            secretAccessKey:process.env.SCZ
        }
    }
);

// we created a client of that nodejs user cred now link include that data 
// we craeted command including bucketname and filename
// we call func and pass the args

async function geturl(key){
    const command=new GetObjectCommand({
        Bucket:"murtazaprivbucket",
        Key:key
    })
   
    const url=await getSignedUrl(client,command)
    return url
}

console.log(await geturl("download.png"))

