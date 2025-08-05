import QuestionComponent from "../combonents/Question";
import { useState ,useEffect} from "react";
function Home(){
  //const [seconds, setSeconds] = useState(0);
const saaQuestions = [
  {
    question: "A company has developed public APIs hosted in Amazon EC2 instances behind an Elastic Load Balancer. The APIs will be used by clients from on-premises networks that require whitelisting IP addresses. What should the Solutions Architect do to meet this requirement?",
    answers: [
      { selection: "A", answer: "Associate an Elastic IP address to an Application Load Balancer." },
      { selection: "B", answer: "Create a CloudFront distribution whose origin points to the private IP addresses of your web servers." },
      { selection: "C", answer: "Associate an Elastic IP address to a Network Load Balancer." },
      { selection: "D", answer: "Create an Alias Record in Route 53 that maps to the DNS name of the load balancer." }
    ],
    correctanswer: "C",
    explantion: "Network Load Balancers support static IPs via Elastic IPs, which can be whitelisted by clients' firewalls. ALBs and CloudFront do not offer this capability."
  },
  {
    question: "A company runs a financial application that requires low-latency block storage and high availability across multiple Availability Zones. Which storage solution should be used?",
    answers: [
      { selection: "A", answer: "Amazon EFS" },
      { selection: "B", answer: "Amazon S3" },
      { selection: "C", answer: "Amazon FSx for Windows File Server" },
      { selection: "D", answer: "Amazon FSx for NetApp ONTAP" }
    ],
    correctanswer: "D",
    explantion: "FSx for NetApp ONTAP offers multi-AZ support and low-latency block storage ideal for financial workloads."
  },
  {
    question: "Which AWS database service is best suited for unpredictable workloads and automatically adjusts capacity based on demand while being cost-effective?",
    answers: [
      { selection: "A", answer: "Amazon Aurora Serverless" },
      { selection: "B", answer: "Amazon RDS for MySQL (Provisioned)" },
      { selection: "C", answer: "Amazon Redshift" },
      { selection: "D", answer: "Amazon ElastiCache" }
    ],
    correctanswer: "A",
    explantion: "Aurora Serverless scales compute automatically based on load and is ideal for applications with variable or unpredictable workloads."
  },
  {
    question: "You want to ensure all in-flight data between your Auto Scaling EC2 web servers and Microsoft SQL Server on Amazon RDS is encrypted. What should you do? (Choose TWO)",
    answers: [
      { selection: "A", answer: "Enable IAM DB authentication." },
      { selection: "B", answer: "Enable Transparent Data Encryption (TDE)." },
      { selection: "C", answer: "Download the Amazon RDS root certificate and use SSL for the connection." },
      { selection: "D", answer: "Configure RDS to use port 443 for SSL." }
    ],
    correctanswer: "C",
    explantion: "Using SSL and downloading the RDS root CA certificate allows you to secure the connection in-flight. TDE only encrypts data at rest, not in transit."
  },
  {
    question: "A Lambda function must only be triggered by certain trusted AWS services, and also needs permissions to access DynamoDB. Which two AWS features should be used?",
    answers: [
      { selection: "A", answer: "Execution role and resource policy" },
      { selection: "B", answer: "Lambda Layer and KMS Key Policy" },
      { selection: "C", answer: "Security group and VPC endpoint policy" },
      { selection: "D", answer: "API Gateway and IAM user credentials" }
    ],
    correctanswer: "A",
    explantion: "Resource policies control who can invoke the Lambda. Execution roles allow the Lambda to access other AWS services like DynamoDB."
  }
];

const [tracker,setTracker]= useState(0)
 
const navigateHandler={
  nextQuestion:()=>{
    if(tracker < saaQuestions.length-1){
      setTracker((prev)=>{
        return prev+1
      })
    }
  },
  saveAnswer:()=>{

  }
}

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes = 1800 seconds

  useEffect(() => {
    if (timeLeft === 0) return; // Stop when timer hits 0

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, [timeLeft]);

   const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  if (timeLeft === 0) {
    return <p>Time's up!</p>;
  }

  
};
return (<>
    {saaQuestions.map((question,i)=>{
      if(i===tracker){
        return <QuestionComponent question={question} navigateHandler={navigateHandler} questionnumber={tracker} key={tracker}/>
      }
      else{
        return null
      }
    })}

    </>)
}
export default Home ;