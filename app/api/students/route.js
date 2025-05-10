// app/api/students/route.js
export async function GET() {
  // Simulate database delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const students = [
    {
      "abcId": "786294109974",
      "debId": "052501984049",
      "studentName": "Shrihari Rameshwar Fuke",
      "dateOfBirth": "12\/08\/2002",
      "mobileNumber": "9356349833"
    },
    {
      "abcId": "184615892510",
      "debId": "052501984166",
      "studentName": "Sachin Nagorao Bhagat",
      "dateOfBirth": "29\/09\/2001",
      "mobileNumber": "9021052608"
    },
    {
      "abcId": "531938940779",
      "debId": "052501980451",
      "studentName": "Nishant Bhimrao Rathod",
      "dateOfBirth": "30\/06\/2005",
      "mobileNumber": "9325193264"
    },
    {
      "abcId": "971633689896",
      "debId": "052501983867",
      "studentName": "Mukta Sandip Upadhye",
      "dateOfBirth": "29\/10\/2004",
      "mobileNumber": "7822804307"
    },
    {
      "abcId": "539037446619",
      "debId": "052501980260",
      "studentName": "Mangesh Suresh Khandare",
      "dateOfBirth": "12\/03\/1991",
      "mobileNumber": "9011473024"
    },
    {
      "abcId": "551636378706",
      "debId": "052501983811",
      "studentName": "Chetan Shantaram Rumane",
      "dateOfBirth": "08\/09\/1990",
      "mobileNumber": "9960808775"
    },
    {
      "abcId": "844237950460",
      "debId": "052501983821",
      "studentName": "Jaya Prabhakar Hiwrale",
      "dateOfBirth": "14\/10\/1987",
      "mobileNumber": "9657862024"
    },
     {
      "abcId": "739245595551",
      "debId": "052501983825",
      "studentName": "Snehal Gajanan Mate",
      "dateOfBirth": "02\/08\/1996",
      "mobileNumber": "7038611982"
    },
    {
      "abcId": "236657020594",
      "debId": "052501983804",
      "studentName": "Sagar Nagesh Pandit",
      "dateOfBirth": "11\/05\/2004",
      "mobileNumber": "7499451710"
    },
     {
      "abcId": "265940176168",
      "debId": "052501983387",
      "studentName": "Ram Mahadev Kavhar",
      "dateOfBirth": "27\/04\/1999",
      "mobileNumber": "9112471025"
    },
    {
      "abcId": "442079988853",
      "debId": "052501980418",
      "studentName": "Mubashshir Khan Quamer Khan",
      "dateOfBirth": "08\/08\/1988"
    },
    {
      "abcId": "496767227252",
      "debId": "052501980419",
      "studentName": "PRITI YUVRAJ RATHOD",
      "dateOfBirth": "05\/01\/2002"
    },
    {
      "abcId": "501152711855",
      "debId": "052501980421",
      "studentName": "Sham Prakash Walale",
      "dateOfBirth": "22\/02\/1992"
    },
    {
      "abcId": "933061631745",
      "debId": "052501980422",
      "studentName": "Anil Haribhau Pawar",
      "dateOfBirth": "16\/03\/1975"
    },
    {
      "abcId": "693161438587",
      "debId": "052501980423",
      "studentName": "SHITAL VILAS BELKHEDE",
      "dateOfBirth": "13\/06\/1998"
    },
    {
      "abcId": "228048551444",
      "debId": "052501980425",
      "studentName": "Jamuna Ramrao Rathod",
      "dateOfBirth": "01\/05\/1998"
    },
    {
      "abcId": "612710850053",
      "debId": "052501980426",
      "studentName": "Ranjita Mukeshsingh Raghuwanshi",
      "dateOfBirth": "10\/07\/1983"
    },
    {
      "abcId": "164675732382",
      "debId": "052501980427",
      "studentName": "Hrishikesh Keshavrao Jadhao",
      "dateOfBirth": "16\/08\/1997"
    },
    {
      "abcId": "336799363754",
      "debId": "052501980428",
      "studentName": "Rutuja Kailas Dhotre",
      "dateOfBirth": "15\/08\/2004"
    },
    {
      "abcId": "405629877504",
      "debId": "052501980429",
      "studentName": "Jyoti Shishupal Chavhan",
      "dateOfBirth": "20\/01\/1994"
    },
    {
      "abcId": "354721820478",
      "debId": "052501980430",
      "studentName": "Harshal Nandkumar Shahakar",
      "dateOfBirth": "26\/11\/2004"
    },
    {
      "abcId": "554976913907",
      "debId": "052501980431",
      "studentName": "Aditya Ashok Manwar",
      "dateOfBirth": "24\/07\/2005"
    },
    {
      "abcId": "384794089365",
      "debId": "052501980432",
      "studentName": "Hemant Santosh Kantale",
      "dateOfBirth": "06\/09\/1999"
    },
    {
      "abcId": "146178028435",
      "debId": "052501980434",
      "studentName": "Jay Anil Nikam",
      "dateOfBirth": "26\/06\/2002"
    },
    {
      "abcId": "992382169798",
      "debId": "052501980435",
      "studentName": "Shyam Dhanraj Alate",
      "dateOfBirth": "22\/11\/2000",
      "mobileNumber": "9370530900"
    },
    {
      "abcId": "822330465596",
      "debId": "052501980436",
      "studentName": "Rukhmina Ramrao Lokhande",
      "dateOfBirth": "24\/12\/1997"
    },
    {
      "abcId": "304902634432",
      "debId": "052501980437",
      "studentName": "Dhanraj Arvind Bhatulkar",
      "dateOfBirth": "09\/05\/2004"
    },
    {
      "abcId": "305386477356",
      "debId": "052501980438",
      "studentName": "Harshada Nilesh Manwar",
      "dateOfBirth": "23\/04\/1999"
    },
    {
      "abcId": "946724237381",
      "debId": "052501980439",
      "studentName": "Rupesh Dhansing Jadhao",
      "dateOfBirth": "30\/03\/2003"
    },
    {
      "abcId": "531722505791",
      "debId": "052501980440",
      "studentName": "Prathamesh Dhole",
      "dateOfBirth": "23\/03\/2006"
    },
    {
      "abcId": "916661162366",
      "debId": "052501980441",
      "studentName": "Dipak Dattatray Wagh",
      "dateOfBirth": "10\/03\/2005"
    },
    {
      "abcId": "886673280918",
      "debId": "052501980442",
      "studentName": "Samiksha Nandkishor Kakad",
      "dateOfBirth": "26\/05\/2004"
    },
    {
      "abcId": "295367828225",
      "debId": "052501980443",
      "studentName": "Sumedh Sanjay Ingole",
      "dateOfBirth": "21\/04\/2005"
    },
    {
      "abcId": "773777831408",
      "debId": "052501980444",
      "studentName": "Shruti Anil Lunge",
      "dateOfBirth": "06\/07\/2004"
    },
    {
      "abcId": "808896680033",
      "debId": "052501980445",
      "studentName": "Sneha Ganeshprasad Awasthi",
      "dateOfBirth": "07\/05\/1991"
    },
    {
      "abcId": "658601879357",
      "debId": "052501980446",
      "studentName": "Mayuri Parshuram Devale",
      "dateOfBirth": "20\/09\/1998"
    },
    {
      "abcId": "243036292601",
      "debId": "052501980447",
      "studentName": "Jayshri Pandurang Geed",
      "dateOfBirth": "09\/11\/1998"
    },
    {
      "abcId": "996819958268",
      "debId": "052501980448",
      "studentName": "Rohan Pradip Thakare",
      "dateOfBirth": "15\/06\/2003"
    },
    {
      "abcId": "454601302329",
      "debId": "052501980449",
      "studentName": "PAYAL SHANKAR MANTODE",
      "dateOfBirth": "30\/06\/2003"
    },
    {
      "abcId": "390256098740",
      "debId": "052501980450",
      "studentName": "Rohit Dipak Ingole",
      "dateOfBirth": "09\/06\/1999"
    },
    {
      "abcId": "531938940779",
      "debId": "052501980451",
      "studentName": "Nishant Bhimrao Rathod",
      "dateOfBirth": "30\/06\/2005"
    },
    {
      "abcId": "493254275431",
      "debId": "052501980452",
      "studentName": "Ankit Dildar Chavhan",
      "dateOfBirth": "14\/03\/2003"
    },
    {
      "abcId": "150141769203",
      "debId": "052501980453",
      "studentName": "Shubham Khandu Thoke",
      "dateOfBirth": "18\/02\/2000"
    },
    {
      "abcId": "692825271797",
      "debId": "052501980454",
      "studentName": "Vaishnavi Keshavrao Ingale",
      "dateOfBirth": "29\/01\/2003"
    },
    {
      "abcId": "684168818259",
      "debId": "052501980455",
      "studentName": "vaishnavi avadhut Thakare",
      "dateOfBirth": "13\/11\/2004"
    },
    {
      "abcId": "529758264251",
      "debId": "052501980456",
      "studentName": "Pawan Rajesh Pawar",
      "dateOfBirth": "26\/09\/2004"
    },
    {
      "abcId": "896618713118",
      "debId": "052501980417",
      "studentName": "Tejraj Manohar Satpute",
      "dateOfBirth": "13\/08\/2002"
    },
    {
      "abcId": "442079988853",
      "debId": "052501980418",
      "studentName": "Mubashshir Khan Quamer Khan",
      "dateOfBirth": "08\/08\/1988"
    },
    {
      "abcId": "496767227252",
      "debId": "052501980419",
      "studentName": "PRITI YUVRAJ RATHOD",
      "dateOfBirth": "05\/01\/2002"
    },
    {
      "abcId": "501152711855",
      "debId": "052501980421",
      "studentName": "Sham Prakash Walale",
      "dateOfBirth": "22\/02\/1992"
    },
    {
      "abcId": "933061631745",
      "debId": "052501980422",
      "studentName": "Anil Haribhau Pawar",
      "dateOfBirth": "16\/03\/1975"
    },
    {
      "abcId": "693161438587",
      "debId": "052501980423",
      "studentName": "SHITAL VILAS BELKHEDE",
      "dateOfBirth": "13\/06\/1998"
    },
    {
      "abcId": "228048551444",
      "debId": "052501980425",
      "studentName": "Jamuna Ramrao Rathod",
      "dateOfBirth": "01\/05\/1998"
    },
    {
      "abcId": "612710850053",
      "debId": "052501980426",
      "studentName": "Ranjita Mukeshsingh Raghuwanshi",
      "dateOfBirth": "10\/07\/1983"
    },
    {
      "abcId": "997319429928",
      "debId": "052501980409",
      "studentName": "Sakshi Vilas Budhe",
      "dateOfBirth": "02\/10\/2003",
      "mobileNumber": "8888939009"
    },
    {
      "abcId": "101624690860",
      "debId": "052501980410",
      "studentName": "Sneha Vinod Jadhav",
      "dateOfBirth": "21\/07\/2003"
    },
    {
      "abcId": "313727386405",
      "debId": "052501980411",
      "studentName": "Gauri Raju Dhole",
      "dateOfBirth": "05\/08\/2003"
    },
    {
      "abcId": "227376306270",
      "debId": "052501980412",
      "studentName": "Tejaswini Siddheshwar Ghate",
      "dateOfBirth": "27\/10\/2003"
    },
    {
      "abcId": "666979683730",
      "debId": "052501980413",
      "studentName": "DERE ASHWINI ASHOK",
      "dateOfBirth": "03\/04\/1997"
    },
    {
      "abcId": "304994522710",
      "debId": "052501980414",
      "studentName": "Sakshi Digambar Bole",
      "dateOfBirth": "06\/08\/2001"
    },
    {
      "abcId": "803783569205",
      "debId": "052501980415",
      "studentName": "Anil Narayan Thakare",
      "dateOfBirth": "13\/09\/1995"
    },
    {
      "abcId": "540731790011",
      "debId": "052501980416",
      "studentName": "SONTAKKE ARATI GAJANAN",
      "dateOfBirth": "11\/11\/2001"
    },
    {
      "abcId": "132541929839",
      "debId": "052501980360",
      "studentName": "Adity Gunavant Ingale",
      "dateOfBirth": "25\/07\/1999"
    },
    {
      "abcId": "459277043321",
      "debId": "082400185200",
      "studentName": "Kapil Abhijit Shinde",
      "dateOfBirth": "30\/11\/2004"
    },
    {
      "abcId": "301427525161",
      "debId": "052501980361",
      "studentName": "KAMBALE AMIT SANJAY",
      "dateOfBirth": "25\/10\/2004"
    },
    {
      "abcId": "826170819767",
      "debId": "052501980364",
      "studentName": "Sharad Vishnu Sonone",
      "dateOfBirth": "01\/06\/2005"
    },
    {
      "abcId": "214319359758",
      "debId": "052501980365",
      "studentName": "RATHOD KHUSHAL DHANRAJ",
      "dateOfBirth": "09\/09\/2006"
    },
    {
      "abcId": "114448945363",
      "debId": "052501978321",
      "studentName": "Parmeshwar Vishnu Bhimat",
      "dateOfBirth": "07\/07\/2003"
    },
    {
      "abcId": "662224796927",
      "debId": "052501980366",
      "studentName": "Aditya Rajendra Sonone",
      "dateOfBirth": "17\/07\/2001",
      "mobileNumber": "9359895820"
    },
    {
      "abcId": "354639005771",
      "debId": "052501980367",
      "studentName": "Anup Kishor Gavande",
      "dateOfBirth": "14\/02\/2005"
    },
    {
      "abcId": "824601264957",
      "debId": "052501980368",
      "studentName": "Rajanikant Gopal Gayakwad",
      "dateOfBirth": "16\/04\/2006"
    },
    {
      "abcId": "677070220293",
      "debId": "052501980369",
      "studentName": "Saloni Vijay Ingole",
      "dateOfBirth": "23\/01\/2006"
    },
    {
      "abcId": "711650851966",
      "debId": "052501980370",
      "studentName": "Sahil Kishor Misal",
      "dateOfBirth": "19\/08\/2004"
    },
    {
      "abcId": "171025440322",
      "debId": "052501980371",
      "studentName": "Rushikesh Panjab Khodke",
      "dateOfBirth": "10\/09\/2000"
    },
    {
      "abcId": "760771265510",
      "debId": "102400607082",
      "studentName": "Akshay Goutam Bhagat",
      "dateOfBirth": "30\/05\/2004"
    },
    {
      "abcId": "200116976245",
      "debId": "052501980372",
      "studentName": "Jay Sukhdev Kamble",
      "dateOfBirth": "26\/06\/2006"
    },
    {
      "abcId": "199239082231",
      "debId": "052501980373",
      "studentName": "Roshani Sukhadev Chaudhari",
      "dateOfBirth": "05\/04\/2003"
    },
    {
      "abcId": "845860307031",
      "debId": "052501980374",
      "studentName": "Kshitij Dinkar Manwar",
      "dateOfBirth": "12\/04\/1995"
    },
    {
      "abcId": "683326294395",
      "debId": "052501980376",
      "studentName": "Gaurav Arunrao Doke",
      "dateOfBirth": "17\/06\/2001"
    },
    {
      "abcId": "162307144052",
      "debId": "052501980377",
      "studentName": "Shital Satish Katekar",
      "dateOfBirth": "09\/08\/1996",
      "mobileNumber": "9373236535"
    },
    {
      "abcId": "733207869168",
      "debId": "052501980378",
      "studentName": "Gaurav Dnyaneshwar Khade",
      "dateOfBirth": "06\/03\/2006"
    },
    {
      "abcId": "644577698525",
      "debId": "052501980379",
      "studentName": "Saurabh Motiram Gaikwad",
      "dateOfBirth": "29\/09\/2002"
    },
    {
      "abcId": "356134631150",
      "debId": "052501980380",
      "studentName": "Vinod Ashok Dhavse",
      "dateOfBirth": "04\/11\/2006"
    },
    {
      "abcId": "286781061175",
      "debId": "052501980381",
      "studentName": "KHIRADE KALYANI DATTATRAY",
      "dateOfBirth": "14\/09\/1998"
    },
    {
      "abcId": "409891711048",
      "debId": "052501980382",
      "studentName": "Yogita Sunil Madhnkar",
      "dateOfBirth": "18\/04\/2006"
    },
    {
      "abcId": "479463162178",
      "debId": "052501980383",
      "studentName": "Tejas Devidas Rathod",
      "dateOfBirth": "10\/07\/2006"
    },
    {
      "abcId": "149073255486",
      "debId": "052501980384",
      "studentName": "BHAGAT APARNA SHIRISH",
      "dateOfBirth": "12\/06\/1995",
      "mobileNumber": "9689743323"
    },
    {
      "abcId": "213751611234",
      "debId": "052501980385",
      "studentName": "CHAVHAN VIVEK RAMESH",
      "dateOfBirth": "15\/09\/2006"
    },
    {
      "abcId": "288788192658",
      "debId": "052501980387",
      "studentName": "Rutuja Arun Sudake",
      "dateOfBirth": "01\/08\/2006"
    },
    {
      "abcId": "960745136038",
      "debId": "052501980388",
      "studentName": "Danish Kha Ayub Kha Pathan",
      "dateOfBirth": "14\/12\/2003"
    },
    {
      "abcId": "236302264380",
      "debId": "052501980390",
      "studentName": "MOHD FAIZAN MOHD WAJID",
      "dateOfBirth": "10\/02\/2004"
    },
    {
      "abcId": "874492424841",
      "debId": "052501980391",
      "studentName": "Kajal Bandu Raut",
      "dateOfBirth": "09\/10\/2003"
    },
    {
      "abcId": "157704964477",
      "debId": "052501980392",
      "studentName": "Pooja Gautam Awachar",
      "dateOfBirth": "24\/10\/2003"
    },
    {
      "abcId": "783297811370",
      "debId": "052501980393",
      "studentName": "Onkar Santosh Mahalle",
      "dateOfBirth": "07\/01\/2003"
    },
    {
      "abcId": "638035655997",
      "debId": "052501980394",
      "studentName": "MANWAR HARSHAD NANDU",
      "dateOfBirth": "21\/11\/2005"
    },
    {
      "abcId": "628312404505",
      "debId": "052501980395",
      "studentName": "Tanavi Narayan Sudke",
      "dateOfBirth": "02\/02\/2005"
    },
    {
      "abcId": "570999340217",
      "debId": "052501980396",
      "studentName": "Vaishnavi Lobha Ingle",
      "dateOfBirth": "18\/10\/1999",
      "mobileNumber": "9130794073"
    },
    {
      "abcId": "616375992158",
      "debId": "052501980397",
      "studentName": "Vivek Surendra Belkhede",
      "dateOfBirth": "13\/08\/2006"
    },
    {
      "abcId": "777203511032",
      "debId": "052501980398",
      "studentName": "Jaya Yogesh Devale",
      "dateOfBirth": "26\/06\/1995"
    },
    {
      "abcId": "666299885248",
      "debId": "052501980399",
      "studentName": "KURHADE RAM SUNIL",
      "dateOfBirth": "27\/09\/2006"
    },
    {
      "abcId": "898699306850",
      "debId": "052501980400",
      "studentName": "Ajay Ramesh Bhosale",
      "dateOfBirth": "04\/06\/2001"
    },
    {
      "abcId": "191247692501",
      "debId": "052501980401",
      "studentName": "Jyosna Gulab Kale",
      "dateOfBirth": "28\/06\/2006"
    },
    {
      "abcId": "997270121481",
      "debId": "102400510659",
      "studentName": "Atharva Pramod Daware",
      "dateOfBirth": "14\/10\/2000",
      "mobileNumber": "9112374100"
    },
    {
      "abcId": "303562254926",
      "debId": "052501980402",
      "studentName": "Aditya Maroti Khare",
      "dateOfBirth": "19\/08\/2001"
    },
    {
      "abcId": "891711419785",
      "debId": "052501980403",
      "studentName": "Shrikant Dyaneshwar Shinde",
      "dateOfBirth": "01\/01\/2005"
    },
    {
      "abcId": "482123364195",
      "debId": "052501980404",
      "studentName": "Anuradha Ajay Shrungare",
      "dateOfBirth": "08\/02\/2005"
    },
    {
      "abcId": "604238822288",
      "debId": "052501980406",
      "studentName": "TIWARI YASH RAMPRASAD",
      "dateOfBirth": "22\/03\/2004"
    },
    {
      "abcId": "135041778664",
      "debId": "052501980407",
      "studentName": "Mohini Kishor Jadhav",
      "dateOfBirth": "01\/01\/2007"
    },
    {
      "abcId": "719719128621",
      "debId": "052501980339",
      "studentName": "poonam vilas belkhede",
      "dateOfBirth": "01\/10\/2001"
    },
    {
      "abcId": "379515954242",
      "debId": "052501980340",
      "studentName": "SAGAR MANOJ INGALE",
      "dateOfBirth": "27\/07\/2002"
    },
    {
      "abcId": "776365865898",
      "debId": "052501980341",
      "studentName": "Rajdip Ganpat Ingale",
      "dateOfBirth": "18\/01\/1990"
    },
    {
      "abcId": "542845417316",
      "debId": "052501980342",
      "studentName": "Saurabh Arun Chambhare",
      "dateOfBirth": "22\/11\/2001",
      "mobileNumber": "7028651475"
    },
    {
      "abcId": "750866436812",
      "debId": "052501980343",
      "studentName": "Vaidehi Chetan Rathod",
      "dateOfBirth": "08\/06\/1994"
    },
    {
      "abcId": "250656483943",
      "debId": "052501980344",
      "studentName": "Chetan Rajesh Mahalley",
      "dateOfBirth": "03\/03\/1993"
    },
    {
      "abcId": "141577132308",
      "debId": "052501980345",
      "studentName": "Vrushali Rajendra Barad",
      "dateOfBirth": "22\/04\/1999"
    },
    {
      "abcId": "223932593147",
      "debId": "052501980346",
      "studentName": "Pooja Dipak Shrungare",
      "dateOfBirth": "19\/06\/2001"
    },
    {
      "abcId": "446315518624",
      "debId": "052501980259",
      "studentName": "MOHOKAR PRASHANT PUNJAJI",
      "dateOfBirth": "02\/01\/1990"
    },
    {
      "abcId": "539037446619",
      "debId": "052501980260",
      "studentName": "Mangesh Suresh Khandare",
      "dateOfBirth": "12\/03\/1991"
    },
    {
      "abcId": "954445872145",
      "debId": "052501980261",
      "studentName": "SONTAKKE VAIBHAV SURESH",
      "dateOfBirth": "16\/09\/2001"
    },
    {
      "abcId": "379421823310",
      "debId": "052501980262",
      "studentName": "Akshay Tulshiram Avhale",
      "dateOfBirth": "13\/06\/1995"
    },
    {
      "abcId": "649415040677",
      "debId": "052501980263",
      "studentName": "Om Gajanan Dhote",
      "dateOfBirth": "14\/08\/2001"
    },
    {
      "abcId": "658788655242",
      "debId": "052501980264",
      "studentName": "Priyanka Pramod Bharaskar",
      "dateOfBirth": "11\/07\/2001"
    },
    {
      "abcId": "820237598295",
      "debId": "052501980228",
      "studentName": "Punam Kanta Manvar",
      "dateOfBirth": "21\/07\/2005"
    },
    {
      "abcId": "765243091931",
      "debId": "052501980229",
      "studentName": "Megha Kashiram Bhagat",
      "dateOfBirth": "31\/12\/2005"
    },
    {
      "abcId": "122630939967",
      "debId": "052501980231",
      "studentName": "Satyam Prakash Rathod",
      "dateOfBirth": "09\/04\/2005"
    },
    {
      "abcId": "116162020249",
      "debId": "052501980232",
      "studentName": "Sumit Rajendra Jadhao",
      "dateOfBirth": "05\/07\/2003"
    },
    {
      "abcId": "713056704774",
      "debId": "052501980233",
      "studentName": "Kshitij Amar Bhagat",
      "dateOfBirth": "30\/03\/2004"
    },
    {
      "abcId": "775970358286",
      "debId": "052501980234",
      "studentName": "Sakshi Jagadish Tayade",
      "dateOfBirth": "16\/07\/2005"
    },
    {
      "abcId": "173209058894",
      "debId": "052501980235",
      "studentName": "Sheela Ashok Wankhade",
      "dateOfBirth": "10\/06\/2005"
    },
    {
      "abcId": "591560995996",
      "debId": "052501980236",
      "studentName": "Ajay Pramod Hanawante",
      "dateOfBirth": "03\/11\/2004"
    },
    {
      "abcId": "809766173678",
      "debId": "052501980238",
      "studentName": "Sham Santosh Thakre",
      "dateOfBirth": "07\/11\/2005"
    },
    {
      "abcId": "106826514824",
      "debId": "052501980239",
      "studentName": "Punam Devidas Jadhav",
      "dateOfBirth": "23\/01\/2004"
    },
    {
      "abcId": "660824903054",
      "debId": "052501980240",
      "studentName": "Arati Ramesh Radhod",
      "dateOfBirth": "01\/01\/2004"
    },
    {
      "abcId": "222538493116",
      "debId": "052501980241",
      "studentName": "Rushikesh Daulat Ambhore",
      "dateOfBirth": "27\/09\/2003"
    },
    {
      "abcId": "537375011618",
      "debId": "052501980243",
      "studentName": "Prashant Kashiram Chavhan",
      "dateOfBirth": "20\/01\/2005"
    },
    {
      "abcId": "362262455968",
      "debId": "052501980244",
      "studentName": "Payal Sachin Ingole",
      "dateOfBirth": "15\/03\/2006"
    },
    {
      "abcId": "176090034785",
      "debId": "052501980245",
      "studentName": "Sanket Ramesh Chaudhari",
      "dateOfBirth": "13\/02\/2002"
    },
    {
      "abcId": "977686100632",
      "debId": "052501980246",
      "studentName": "Dnyaneshwari Sheshrao Kale",
      "dateOfBirth": "05\/10\/2005"
    },
    {
      "abcId": "739892023011",
      "debId": "052501980247",
      "studentName": "Rohan Kailas Chavhan",
      "dateOfBirth": "24\/01\/2006"
    },
    {
      "abcId": "707088507028",
      "debId": "052501980248",
      "studentName": "Satyam Ramesh Rathod",
      "dateOfBirth": "21\/10\/2005"
    },
    {
      "abcId": "836421438397",
      "debId": "052501980249",
      "studentName": "Shubham Chandan Rathod",
      "dateOfBirth": "02\/12\/2004"
    },
    {
      "abcId": "547469459233",
      "debId": "052501980250",
      "studentName": "Aniket Vishnu Pawar",
      "dateOfBirth": "07\/06\/2004"
    },
    {
      "abcId": "223479243017",
      "debId": "052501980251",
      "studentName": "Pratik Ganesh Pawar",
      "dateOfBirth": "01\/02\/2006"
    },
    {
      "abcId": "666545531870",
      "debId": "052501980252",
      "studentName": "Ashvini Ramkrushna Gadekar",
      "dateOfBirth": "25\/08\/2004"
    },
    {
      "abcId": "807501213600",
      "debId": "052501980254",
      "studentName": "Sonali Samadhan More",
      "dateOfBirth": "15\/10\/2005"
    },
    {
      "abcId": "458942121850",
      "debId": "052501980255",
      "studentName": "Ashvini Ambadas Nitnavare",
      "dateOfBirth": "12\/06\/2005"
    },
    {
      "abcId": "590181639007",
      "debId": "052501980256",
      "studentName": "Neha Madhukar Savale",
      "dateOfBirth": "22\/04\/2005"
    },
    {
      "abcId": "667586060160",
      "debId": "052501980183",
      "studentName": "vaishnavi Bhashkar Avhale",
      "dateOfBirth": "18\/08\/2004"
    },
    {
      "abcId": "675141353726",
      "debId": "052501980184",
      "studentName": "vaibhav nitesh raut",
      "dateOfBirth": "31\/05\/2004"
    },
    {
      "abcId": "896513907552",
      "debId": "052501980185",
      "studentName": "Chetan Rajesh Chavhan",
      "dateOfBirth": "13\/03\/2005"
    },
    {
      "abcId": "557270913016",
      "debId": "052501980188",
      "studentName": "Prashant Gopal Thakare",
      "dateOfBirth": "22\/05\/2005"
    },
    {
      "abcId": "814275040439",
      "debId": "052501980189",
      "studentName": "Saurav Pramod Gade",
      "dateOfBirth": "20\/03\/2004"
    },
    {
      "abcId": "125277324500",
      "debId": "052501980190",
      "studentName": "Pankaj Shamrao Ingole",
      "dateOfBirth": "26\/06\/1988",
      "mobileNumber": "9970242220"
    },
    {
      "abcId": "834805712287",
      "debId": "052501980191",
      "studentName": "Achal Gajanan Gaykawad",
      "dateOfBirth": "18\/06\/2003"
    },
    {
      "abcId": "985437912020",
      "debId": "052501980192",
      "studentName": "Pratiksha Kiran Gahule",
      "dateOfBirth": "01\/12\/2003"
    },
    {
      "abcId": "413904251555",
      "debId": "052501980193",
      "studentName": "Ajay Motiram Sardar",
      "dateOfBirth": "05\/12\/2003"
    },
    {
      "abcId": "396278286872",
      "debId": "052501980194",
      "studentName": "Yogesh Vijay Chavhan",
      "dateOfBirth": "03\/07\/2003",
      "mobileNumber": "9022889349"
    },
    {
      "abcId": "289262406550",
      "debId": "052501980195",
      "studentName": "Bhushan Manoj Bhagat",
      "dateOfBirth": "15\/07\/2003"
    },
    {
      "abcId": "987911717225",
      "debId": "052501980197",
      "studentName": "Ravina Pradip Khade",
      "dateOfBirth": "28\/05\/2004"
    },
    {
      "abcId": "286378476375",
      "debId": "052501980198",
      "studentName": "om ashokappa kodare",
      "dateOfBirth": "30\/07\/2004"
    },
    {
      "abcId": "943032326569",
      "debId": "052501980200",
      "studentName": "Akshay Bhaurao Pawar",
      "dateOfBirth": "10\/09\/2003"
    },
    {
      "abcId": "572940158409",
      "debId": "052501980201",
      "studentName": "Shrihari Vasudeo Pakdhane",
      "dateOfBirth": "12\/07\/2004"
    },
    {
      "abcId": "662251013940",
      "debId": "052501980203",
      "studentName": "Priti Gopal Rathod",
      "dateOfBirth": "03\/03\/2003"
    },
    {
      "abcId": "169987819667",
      "debId": "052501980204",
      "studentName": "Om Pratap Gajare",
      "dateOfBirth": "12\/01\/1999"
    },
    {
      "abcId": "659960113789",
      "debId": "052501980205",
      "studentName": "Sayyed Niyaz Sayyed Manzoor",
      "dateOfBirth": "04\/04\/2004"
    },
    {
      "abcId": "186040543568",
      "debId": "052501980206",
      "studentName": "Aminoddin Alimoddin Sheikh",
      "dateOfBirth": "18\/10\/1996"
    },
    {
      "abcId": "842767250487",
      "debId": "052501980207",
      "studentName": "Kunal Dnyandeo Jadhao",
      "dateOfBirth": "24\/08\/2003"
    },
    {
      "abcId": "104743025108",
      "debId": "N\/A",
      "studentName": "Error: DEB ID not found in response",
      "dateOfBirth": "N\/A"
    },
    {
      "abcId": "262844249237",
      "debId": "052501980211",
      "studentName": "Ashish Ganesh Thakare",
      "dateOfBirth": "25\/12\/2001"
    },
    {
      "abcId": "665262212194",
      "debId": "052501980212",
      "studentName": "Dipali Jaykumar Belkhede",
      "dateOfBirth": "12\/01\/2002"
    },
    {
      "abcId": "791647238641",
      "debId": "052501980213",
      "studentName": "Ankush Laxman Wankhade",
      "dateOfBirth": "01\/11\/2004"
    },
    {
      "abcId": "196552008580",
      "debId": "052501980214",
      "studentName": "Pranali Vitthal Bramhakar",
      "dateOfBirth": "22\/02\/2005"
    },
    {
      "abcId": "557752377566",
      "debId": "052501980215",
      "studentName": "Mohit Vijay Dahatonde",
      "dateOfBirth": "19\/04\/2005",
      "mobileNumber": "9699658322"
    },
    {
      "abcId": "389782298859",
      "debId": "052501980216",
      "studentName": "Rohini Nandkishor Fuke",
      "dateOfBirth": "20\/03\/2003"
    },
    {
      "abcId": "766464244361",
      "debId": "052501980217",
      "studentName": "Mayur Naresh Wagh",
      "dateOfBirth": "22\/12\/2005"
    },
    {
      "abcId": "469894283459",
      "debId": "052501980218",
      "studentName": "Sanket Sahdeo Pakdhane",
      "dateOfBirth": "29\/03\/2005"
    },
    {
      "abcId": "283438996508",
      "debId": "052501980219",
      "studentName": "Utkarsh Govrdhan Aghame",
      "dateOfBirth": "10\/08\/2003"
    },
    {
      "abcId": "295675642390",
      "debId": "052501980221",
      "studentName": "Mahesh Maroti Pakdhane",
      "dateOfBirth": "29\/10\/2005"
    },
    {
      "abcId": "513396694036",
      "debId": "052501980222",
      "studentName": "Suraj Chandrakant Rayake",
      "dateOfBirth": "30\/08\/2004"
    },
    {
      "abcId": "388610388316",
      "debId": "052501980223",
      "studentName": "Sanket Gajanan Kokate",
      "dateOfBirth": "18\/07\/2003"
    },
    {
      "abcId": "117379030283",
      "debId": "052501980224",
      "studentName": "Aachal Manoj Ambilkar",
      "dateOfBirth": "25\/11\/2004",
      "mobileNumber": "8010340066"
    },
    {
      "abcId": "412717894470",
      "debId": "052501980225",
      "studentName": "Karan  Gajanan Pakdhane",
      "dateOfBirth": "30\/06\/2005"
    },
    {
      "abcId": "685014577354",
      "debId": "052501980079",
      "studentName": "Yashpal Devanand Jadhav",
      "dateOfBirth": "22\/05\/2006"
    },
    {
      "abcId": "294107115182",
      "debId": "052501978378",
      "studentName": "Tanmay Gowardhan Chavhan",
      "dateOfBirth": "27\/06\/2006"
    },
    {
      "abcId": "601944766472",
      "debId": "052501978380",
      "studentName": "SONONE SAMIR DEVIDAS",
      "dateOfBirth": "16\/06\/2005"
    },
    {
      "abcId": "115848442098",
      "debId": "052501978386",
      "studentName": "GAWANDE AMRUTA SANTOSH",
      "dateOfBirth": "24\/11\/2005"
    },
    {
      "abcId": "112118200284",
      "debId": "052501978391",
      "studentName": "Khushi Ajay Waghmare",
      "dateOfBirth": "16\/09\/2004"
    },
    {
      "abcId": "699832732391",
      "debId": "052501978399",
      "studentName": "Shrikant Ashok Rathod",
      "dateOfBirth": "11\/03\/2006"
    },
    {
      "abcId": "722500587078",
      "debId": "052501978403",
      "studentName": "BHENDEKAR TUSHAR DILIP",
      "dateOfBirth": "07\/05\/2003"
    },
    {
      "abcId": "442846883478",
      "debId": "052501978407",
      "studentName": "Poonam Jagannath Bure",
      "dateOfBirth": "08\/04\/2006"
    },
    {
      "abcId": "243293223142",
      "debId": "052501978409",
      "studentName": "Prerna Ranjit Rathod",
      "dateOfBirth": "17\/01\/2007"
    },
    {
      "abcId": "370636168601",
      "debId": "052501978410",
      "studentName": "Piyush Santosh Ingole",
      "dateOfBirth": "12\/10\/2006"
    },
    {
      "abcId": "763937117717",
      "debId": "052501980089",
      "studentName": "Yash Ramdas Paradhi",
      "dateOfBirth": "27\/09\/2006"
    },
    {
      "abcId": "410292711074",
      "debId": "052501980014",
      "studentName": "Kalyani Nitesh Bharduk",
      "dateOfBirth": "28\/09\/2003"
    },
    {
      "abcId": "523072511690",
      "debId": "052501980090",
      "studentName": "Hruday Premdas Chavhan",
      "dateOfBirth": "22\/02\/2006"
    },
    {
      "abcId": "991004428092",
      "debId": "052501980091",
      "studentName": "KHADE SNEHA VINOD",
      "dateOfBirth": "09\/12\/2003"
    },
    {
      "abcId": "388011661386",
      "debId": "052501980092",
      "studentName": "SONONE ACHAL SUNIL",
      "dateOfBirth": "24\/10\/2006"
    },
    {
      "abcId": "379182173912",
      "debId": "052501980093",
      "studentName": "Vikki Vinod Thakare",
      "dateOfBirth": "13\/04\/2006"
    },
    {
      "abcId": "981061636285",
      "debId": "052501980094",
      "studentName": "Nilesh Onkar Giri",
      "dateOfBirth": "04\/07\/2006"
    },
    {
      "abcId": "807910546470",
      "debId": "052501980024",
      "studentName": "CHARKHOD SHUBHAM MAHADEV",
      "dateOfBirth": "16\/02\/2007"
    },
    {
      "abcId": "724567746974",
      "debId": "082400115665",
      "studentName": "Prasad Sanjay Sonar",
      "dateOfBirth": "12\/07\/2005",
      "mobileNumber": "7350778243"
    },
    {
      "abcId": "481911180409",
      "debId": "052501980095",
      "studentName": "WAGHMARE NIDHI AJAY",
      "dateOfBirth": "22\/09\/2006"
    },
    {
      "abcId": "780731438140",
      "debId": "052501980097",
      "studentName": "RATHOD PRITAM PUNDLIK",
      "dateOfBirth": "02\/05\/2006"
    },
    {
      "abcId": "861487812881",
      "debId": "052501980098",
      "studentName": "Vishvanath Ganesh Patil",
      "dateOfBirth": "08\/06\/2003"
    },
    {
      "abcId": "437631067242",
      "debId": "052501980100",
      "studentName": "Rohit Ankush Ujwane",
      "dateOfBirth": "29\/05\/2007"
    },
    {
      "abcId": "975222826349",
      "debId": "052501980101",
      "studentName": "ENGAD ARATI SUNIL",
      "dateOfBirth": "19\/05\/2006"
    },
    {
      "abcId": "112747482137",
      "debId": "052501980104",
      "studentName": "PARANDE CHANDRASHEKHAR GOPAL",
      "dateOfBirth": "21\/05\/2004"
    },
    {
      "abcId": "536137207722",
      "debId": "052501980105",
      "studentName": "Aniket Rajesh Wankhede",
      "dateOfBirth": "22\/11\/2005"
    },
    {
      "abcId": "136506604752",
      "debId": "052501980107",
      "studentName": "DONGARE SNEHAL SAMADHAN",
      "dateOfBirth": "15\/08\/2005"
    },
    {
      "abcId": "977263393080",
      "debId": "052501980108",
      "studentName": "CHAVHAN ROHIT VITTHAL",
      "dateOfBirth": "16\/04\/2006"
    },
    {
      "abcId": "967582841934",
      "debId": "052501980109",
      "studentName": "Avirat Sangesh Khade",
      "dateOfBirth": "11\/08\/2003"
    },
    {
      "abcId": "662543021167",
      "debId": "052501980110",
      "studentName": "Chanda Anil Rathod",
      "dateOfBirth": "30\/06\/2006"
    },
    {
      "abcId": "359309196509",
      "debId": "052501980111",
      "studentName": "Mitesh Sanjay Shrungare",
      "dateOfBirth": "13\/02\/2006"
    },
    {
      "abcId": "237605285573",
      "debId": "052501980112",
      "studentName": "JAY SANJAY PAWAR",
      "dateOfBirth": "20\/06\/2000"
    },
    {
      "abcId": "842540545924",
      "debId": "052501980113",
      "studentName": "Dipali Santosh Ingole",
      "dateOfBirth": "12\/11\/2004"
    },
    {
      "abcId": "610262065544",
      "debId": "052501980115",
      "studentName": "Bhushan Vilas Jadhav",
      "dateOfBirth": "29\/07\/2004"
    },
    {
      "abcId": "864652494828",
      "debId": "052501980004",
      "studentName": "LULE VISHAL GAJANAN",
      "dateOfBirth": "06\/01\/2007"
    },
    {
      "abcId": "405051757450",
      "debId": "052501980116",
      "studentName": "Hassan Areeb Khan Ashfaque Khan",
      "dateOfBirth": "16\/09\/2004"
    },
    {
      "abcId": "875431997746",
      "debId": "052501980117",
      "studentName": "SURVE KRUSHNA GAJANAN",
      "dateOfBirth": "08\/08\/1996"
    },
    {
      "abcId": "106341830143",
      "debId": "052501980119",
      "studentName": "Gopal Namdeo Puri",
      "dateOfBirth": "19\/08\/2005"
    },
    {
      "abcId": "679790539393",
      "debId": "052501980120",
      "studentName": "Rajesh Ramesh Vishvkarma",
      "dateOfBirth": "20\/06\/1997"
    },
    {
      "abcId": "832692799678",
      "debId": "052501980121",
      "studentName": "Pornima Narendra Sarkate",
      "dateOfBirth": "10\/01\/2005"
    },
    {
      "abcId": "496330189279",
      "debId": "052501980126",
      "studentName": "Shubham Gajanan Bhendekar",
      "dateOfBirth": "28\/01\/2007"
    },
    {
      "abcId": "256420964570",
      "debId": "052501980127",
      "studentName": "BHENDEKAR NIKITA GAJANAN",
      "dateOfBirth": "24\/05\/2005"
    },
    {
      "abcId": "297323976298",
      "debId": "052501980128",
      "studentName": "Mohan Subhash Bansod",
      "dateOfBirth": "12\/05\/2005"
    },
    {
      "abcId": "958569804685",
      "debId": "052501980130",
      "studentName": "CHARKHOD DIPAK PRAKASH",
      "dateOfBirth": "11\/06\/2006"
    },
    {
      "abcId": "569108311644",
      "debId": "052501980133",
      "studentName": "GANJARE SWAPNALI DEVENDRA",
      "dateOfBirth": "21\/09\/2006"
    },
    {
      "abcId": "405320969659",
      "debId": "052501980136",
      "studentName": "Anklesh Ganesh Barde",
      "dateOfBirth": "16\/10\/2003"
    },
    {
      "abcId": "959642662200",
      "debId": "052501980138",
      "studentName": "Sanjana Niurutti Kamble",
      "dateOfBirth": "22\/07\/2002"
    },
    {
      "abcId": "161945944480",
      "debId": "052501980140",
      "studentName": "Rajendra Bhimrao Pawar",
      "dateOfBirth": "10\/09\/2005"
    },
    {
      "abcId": "272387116237",
      "debId": "052501980141",
      "studentName": "KHADASE ANUSAYA SAHEBRAO",
      "dateOfBirth": "20\/06\/2006"
    },
    {
      "abcId": "576654467196",
      "debId": "052501980142",
      "studentName": "Disha Sanjay Chavhan",
      "dateOfBirth": "06\/07\/2006"
    },
    {
      "abcId": "716577801832",
      "debId": "052501980143",
      "studentName": "KAKADE ASHTABHUJA UMESH",
      "dateOfBirth": "13\/04\/2006"
    },
    {
      "abcId": "972745133995",
      "debId": "052501980144",
      "studentName": "Yogesh Haridas Kirade",
      "dateOfBirth": "04\/09\/1992"
    },
    {
      "abcId": "245494140525",
      "debId": "052501980145",
      "studentName": "Mahesh Narayan Vidole",
      "dateOfBirth": "14\/03\/2006"
    },
    {
      "abcId": "479579663523",
      "debId": "052501980146",
      "studentName": "Gaurao Devanand Ingole",
      "dateOfBirth": "16\/06\/2002"
    },
    {
      "abcId": "213016638193",
      "debId": "052501980147",
      "studentName": "Tulsi Avinash Jadhav",
      "dateOfBirth": "24\/05\/1990"
    },
    {
      "abcId": "689069932712",
      "debId": "052501980148",
      "studentName": "Shrikant Balasaheb Pavar",
      "dateOfBirth": "24\/08\/2006"
    },
    {
      "abcId": "215524087048",
      "debId": "052501980149",
      "studentName": "Astitwa Satish Jamodkar",
      "dateOfBirth": "19\/10\/2006"
    },
    {
      "abcId": "591879486448",
      "debId": "052501979995",
      "studentName": "Yash Gajanan Khirade",
      "dateOfBirth": "03\/08\/2006",
      "mobileNumber": "7020034978"
    },
    {
      "abcId": "156366978796",
      "debId": "052501980150",
      "studentName": "Atul Shriram Manvar",
      "dateOfBirth": "23\/02\/2006"
    },
    {
      "abcId": "387749295027",
      "debId": "052501980151",
      "studentName": "Nitin Balu Sonone",
      "dateOfBirth": "31\/08\/2001"
    },
    {
      "abcId": "614639776515",
      "debId": "052501980153",
      "studentName": "KAJALE BUDDHARAJ LAXMAN",
      "dateOfBirth": "05\/04\/2006"
    },
    {
      "abcId": "587561873994",
      "debId": "052501980155",
      "studentName": "Khushal Shrikrushna Dhadwe",
      "dateOfBirth": "12\/10\/2005"
    },
    {
      "abcId": "605472746002",
      "debId": "052501980156",
      "studentName": "Manju Sahebrao Bhoyar",
      "dateOfBirth": "07\/06\/2005"
    },
    {
      "abcId": "335630035726",
      "debId": "052501980157",
      "studentName": "Sanjay Rameshwar Bhagat",
      "dateOfBirth": "17\/01\/2000"
    },
    {
      "abcId": "311982580857",
      "debId": "052501980158",
      "studentName": "abhijeet santosh wankhade",
      "dateOfBirth": "30\/10\/2003"
    },
    {
      "abcId": "480238825898",
      "debId": "052501980160",
      "studentName": "BELKHEDE NEHA RAJU",
      "dateOfBirth": "22\/08\/2005"
    },
    {
      "abcId": "727184080541",
      "debId": "052501980161",
      "studentName": "ROKADE RITIKA DIGAMBAR",
      "dateOfBirth": "27\/05\/2006"
    },
    {
      "abcId": "953340685607",
      "debId": "052501980163",
      "studentName": "MATRE GAYATRI GAJANAN",
      "dateOfBirth": "12\/07\/2005"
    },
    {
      "abcId": "711688201740",
      "debId": "052501980164",
      "studentName": "CHAVHAN SNEHA UMESH",
      "dateOfBirth": "10\/06\/2006"
    },
    {
      "abcId": "241794490741",
      "debId": "052501980178",
      "studentName": "Balraj Yuwraj Shrungare",
      "dateOfBirth": "03\/05\/1984"
    },
    {
      "abcId": "465411025536",
      "debId": "052501980166",
      "studentName": "Bhavesh Pundalik Ambekar",
      "dateOfBirth": "12\/06\/2005"
    },
    {
      "abcId": "861763394400",
      "debId": "052501980040",
      "studentName": "Om Nandakishor Lule",
      "dateOfBirth": "07\/12\/2005"
    },
    {
      "abcId": "205880045889",
      "debId": "052501979999",
      "studentName": "Sangdip Devanand Bhagat",
      "dateOfBirth": "15\/03\/2006"
    },
    {
      "abcId": "846190434144",
      "debId": "052501980167",
      "studentName": "DHURVE PRATIK NARESH",
      "dateOfBirth": "30\/11\/1999"
    },
    {
      "abcId": "142856089011",
      "debId": "052501980025",
      "studentName": "BHAGAT ANJALI VINOD",
      "dateOfBirth": "01\/05\/2006"
    },
    {
      "abcId": "803570319719",
      "debId": "052501980168",
      "studentName": "Gitali Ravindra Sedake",
      "dateOfBirth": "20\/04\/1990"
    },
    {
      "abcId": "476733003260",
      "debId": "052501980169",
      "studentName": "Bhagvan Manik Vavge",
      "dateOfBirth": "09\/10\/2004",
      "mobileNumber": "9356483501"
    },
    {
      "abcId": "152736108242",
      "debId": "052501980170",
      "studentName": "Rajeshvari Nitesh Manwar",
      "dateOfBirth": "09\/06\/1998"
    },
    {
      "abcId": "954680849661",
      "debId": "052501980172",
      "studentName": "HIREKAR MANISHA RAJENDRA",
      "dateOfBirth": "06\/05\/2003"
    },
    {
      "abcId": "283377830676",
      "debId": "052501980173",
      "studentName": "Bhagyashri Shamrao Harne",
      "dateOfBirth": "16\/12\/2006"
    },
    {
      "abcId": "660227397359",
      "debId": "052501980174",
      "studentName": "Payal Santosh Gahule",
      "dateOfBirth": "30\/06\/2005"
    },
    {
      "abcId": "850800665923",
      "debId": "052501980175",
      "studentName": "LAHORE SANJIVANI YOGIRAJ",
      "dateOfBirth": "05\/10\/2006"
    },
    {
      "abcId": "386130967067",
      "debId": "052501978308",
      "studentName": "BHAGAT KUNAL SANTOSH",
      "dateOfBirth": "12\/02\/2006"
    },
    {
      "abcId": "495316884619",
      "debId": "052501980176",
      "studentName": "Ashwina Vilash Manwar",
      "dateOfBirth": "20\/05\/1993"
    },
    {
      "abcId": "227315873431",
      "debId": "052501980177",
      "studentName": "Sahil Sharad Chumbale",
      "dateOfBirth": "26\/10\/2006"
    },
    {
      "abcId": "219741454111",
      "debId": "052501979894",
      "studentName": "Abhishek Shobhasing Chavhan",
      "dateOfBirth": "01\/12\/2002"
    },
    {
      "abcId": "441593688921",
      "debId": "052501979903",
      "studentName": "Ashvini Shobhasing Chavhan",
      "dateOfBirth": "26\/04\/2005"
    },
    {
      "abcId": "294393788705",
      "debId": "052501979925",
      "studentName": "Om Madhukar Ambhore",
      "dateOfBirth": "22\/07\/2006"
    },
    {
      "abcId": "250499005860",
      "debId": "052501979892",
      "studentName": "Shivam Gulab Tayade",
      "dateOfBirth": "26\/02\/2006"
    },
    {
      "abcId": "861599929486",
      "debId": "052501979928",
      "studentName": "Faijalkha Ayyubakha",
      "dateOfBirth": "08\/08\/2003"
    },
    {
      "abcId": "416716593982",
      "debId": "052501979992",
      "studentName": "Ashwini Gajanan Tayade",
      "dateOfBirth": "06\/04\/2006",
      "mobileNumber": "7218773324"
    },
    {
      "abcId": "591879486448",
      "debId": "052501979995",
      "studentName": "Yash Gajanan Khirade",
      "dateOfBirth": "03\/08\/2006"
    },
    {
      "abcId": "205880045889",
      "debId": "052501979999",
      "studentName": "Sangdip Devanand Bhagat",
      "dateOfBirth": "15\/03\/2006"
    },
    {
      "abcId": "664853833245",
      "debId": "052501980000",
      "studentName": "Sanika Santosh Harane",
      "dateOfBirth": "17\/11\/2006"
    },
    {
      "abcId": "165113381397",
      "debId": "052501980001",
      "studentName": "Mahesh Vijay Rathod",
      "dateOfBirth": "08\/08\/2005"
    },
    {
      "abcId": "520962125442",
      "debId": "052501980002",
      "studentName": "Vishal Vijay Patil",
      "dateOfBirth": "11\/12\/2006"
    },
    {
      "abcId": "962748540557",
      "debId": "052501980003",
      "studentName": "Sujata Sanjay Bhagat",
      "dateOfBirth": "01\/01\/2006",
      "mobileNumber": "7498289479"
    },
    {
      "abcId": "864652494828",
      "debId": "052501980004",
      "studentName": "LULE VISHAL GAJANAN",
      "dateOfBirth": "06\/01\/2007"
    },
    {
      "abcId": "149837484183",
      "debId": "052501980005",
      "studentName": "Nikhil Vijay Kadukar",
      "dateOfBirth": "28\/09\/2006"
    },
    {
      "abcId": "300893639982",
      "debId": "052501980006",
      "studentName": "Swati Rambhau Chipade",
      "dateOfBirth": "07\/07\/2007"
    },
    {
      "abcId": "716793827073",
      "debId": "052501980008",
      "studentName": "Priti Rambhau Chipade",
      "dateOfBirth": "07\/07\/2007"
    },
    {
      "abcId": "245818542722",
      "debId": "052501980009",
      "studentName": "Ashish Santosh Wankhade",
      "dateOfBirth": "20\/11\/2000"
    },
    {
      "abcId": "861093680647",
      "debId": "052501980011",
      "studentName": "Vaishnavi Govinda Karale",
      "dateOfBirth": "04\/06\/2006"
    },
    {
      "abcId": "491513909169",
      "debId": "052501980012",
      "studentName": "Divya Santosh Rathod",
      "dateOfBirth": "26\/05\/2006"
    },
    {
      "abcId": "736378545751",
      "debId": "052501980013",
      "studentName": "Bhuran Kasam Garve",
      "dateOfBirth": "15\/06\/2004"
    },
    {
      "abcId": "410292711074",
      "debId": "052501980014",
      "studentName": "Kalyani Nitesh Bharduk",
      "dateOfBirth": "28\/09\/2003"
    },
    {
      "abcId": "734119231961",
      "debId": "052501980015",
      "studentName": "AFARIN MAHAMMAD GARWE",
      "dateOfBirth": "14\/06\/2009"
    },
    {
      "abcId": "798610727702",
      "debId": "052501980017",
      "studentName": "Laxmi Dnyaneshwar Chavhan",
      "dateOfBirth": "31\/01\/2006"
    },
    {
      "abcId": "140436546485",
      "debId": "052501980018",
      "studentName": "Karan Dinganbar Lahane",
      "dateOfBirth": "20\/01\/2006"
    },
    {
      "abcId": "510560805225",
      "debId": "052501980020",
      "studentName": "Ashitosh Shrikrushna Thombe",
      "dateOfBirth": "03\/05\/2005"
    },
    {
      "abcId": "305144512014",
      "debId": "052501980022",
      "studentName": "PARMESHWAR DNYANESHWAR TUPONE",
      "dateOfBirth": "03\/10\/2005"
    },
    {
      "abcId": "807910546470",
      "debId": "052501980024",
      "studentName": "CHARKHOD SHUBHAM MAHADEV",
      "dateOfBirth": "16\/02\/2007"
    },
    {
      "abcId": "142856089011",
      "debId": "052501980025",
      "studentName": "BHAGAT ANJALI VINOD",
      "dateOfBirth": "01\/05\/2006"
    },
    {
      "abcId": "530738555711",
      "debId": "052501980026",
      "studentName": "Bhakti Raju Solanke",
      "dateOfBirth": "21\/01\/2007"
    },
    {
      "abcId": "928365938168",
      "debId": "052501980027",
      "studentName": "Anjali Premsing Rathod",
      "dateOfBirth": "04\/12\/2006"
    },
    {
      "abcId": "431535031337",
      "debId": "052501980029",
      "studentName": "Rushikesh Pandurang Ambhore",
      "dateOfBirth": "01\/05\/2002"
    },
    {
      "abcId": "658320438724",
      "debId": "052501980031",
      "studentName": "Akash Vilas Ambhore",
      "dateOfBirth": "01\/02\/2001"
    },
    {
      "abcId": "286883686920",
      "debId": "052501980033",
      "studentName": "Siddhant Ashok Rathod",
      "dateOfBirth": "06\/06\/2006"
    },
    {
      "abcId": "648383258147",
      "debId": "052501980034",
      "studentName": "Shekhar Sandip Rodekar",
      "dateOfBirth": "07\/05\/2006"
    },
    {
      "abcId": "808459530895",
      "debId": "052501980035",
      "studentName": "Kunal Santosh Raut",
      "dateOfBirth": "24\/10\/2006"
    },
    {
      "abcId": "637901540956",
      "debId": "052501980036",
      "studentName": "Vaishnavi Santosh Dike",
      "dateOfBirth": "20\/01\/2007"
    },
    {
      "abcId": "674827742195",
      "debId": "052501980038",
      "studentName": "POOJA SHRIKRUSHNA RAJURKAR",
      "dateOfBirth": "21\/11\/2000"
    },
    {
      "abcId": "795716715907",
      "debId": "052501980039",
      "studentName": "Kartik Dilip Pawar",
      "dateOfBirth": "05\/04\/2006"
    },
    {
      "abcId": "861763394400",
      "debId": "052501980040",
      "studentName": "Om Nandakishor Lule",
      "dateOfBirth": "07\/12\/2005"
    },
    {
      "abcId": "490371470172",
      "debId": "052501980042",
      "studentName": "Sumeet Kishor Chavhan",
      "dateOfBirth": "01\/04\/2005"
    },
    {
      "abcId": "327767343554",
      "debId": "052501980043",
      "studentName": "Kartik Shankar Ambhore",
      "dateOfBirth": "31\/10\/2004"
    },
    {
      "abcId": "544491963975",
      "debId": "052501980045",
      "studentName": "Rahul Shekhar Bavne",
      "dateOfBirth": "25\/12\/2005",
      "mobileNumber": ""
    },
    {
      "abcId": "293048361043",
      "debId": "052501980046",
      "studentName": "Adarsh Satish Jadhav",
      "dateOfBirth": "01\/01\/2005"
    }

  ];

  return new Response(JSON.stringify(students), {
    headers: {
      'Content-Type': 'application/json',
      // Cache for 5 minutes
      'Cache-Control': 'public, s-maxage=300'
    },
  });
}
