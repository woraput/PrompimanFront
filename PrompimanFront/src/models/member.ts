export interface Member {
    _id: string;
    IdCard: string;
    PassportNo: string;
    Th_Prefix: string;
    Th_Firstname: string;
    Th_Lastname: string;
    En_Prefix: string;
    En_Firstname: string;
    En_Lastname: string;
    Sex: string;
    Birthday: Date;
    Address: string;
    IssueDate: Date;
    ExpiryDate: Date;
    Telephone: string;
    Job: string;
    Nationality: string;
    Photo: string;
    CreationDateTime: Date;
    LastUpdate: Date;
}
export class Paging {
    page: number;
    count: number;
    members : Member[]
}

export interface Nationality {
    Code: string;
    Name: string;
    Tag: boolean;
}

export const nationalityData: Nationality[] = [
    {
        Code: "764",
        Name: "ไทย",
        Tag: true,
    },
    {
        Code: "104",
        Name: "พม่า",
        Tag: true,
    },
    {
        Code: "116",
        Name: "กัมพูชา",
        Tag: true,
    },
    {
        Code: "418",
        Name: "สาธารณรัฐประชาธิปไตยประชาชนลาว",
        Tag: true,
    },
    {
        Code: "156",
        Name: "จีน",
        Tag: true,
    },
    {
        Code: "356",
        Name: "อินเดีย",
        Tag: true,
    },
    {
        Code: "826",
        Name: "สหราชอาณาจักร (อังกฤษ)",
        Tag: true,
    },
    {
        Code: "276",
        Name: "เยอรมนี",
        Tag: true,
    },
    {
        Code: "608",
        Name: "ฟิลิปปินส์",
        Tag: true,
    },
    {
        Code: "704",
        Name: "เวียดนาม",
        Tag: true,
    },
    {
        Code: "392",
        Name: "ญี่ปุ่น",
        Tag: true,
    },
    {
        Code: "840",
        Name: "สหรัฐอเมริกา",
        Tag: true,
    },
    {
        Code: "634",
        Name: "กาตาร์",
        Tag: false,
    },
    {
        Code: "398",
        Name: "คาซัคสถาน",
        Tag: false,
    },
    {
        Code: "417",
        Name: "คีร์กีซสถาน",
        Tag: false,
    },
    {
        Code: "414",
        Name: "คูเวต",
        Tag: false,
    },
    {
        Code: "268",
        Name: "จอร์เจีย",
        Tag: false,
    },
    {
        Code: "400",
        Name: "จอร์แดน",
        Tag: false,
    },
    {
        Code: "682",
        Name: "ซาอุดิอาระเบีย",
        Tag: false,
    },
    {
        Code: "196",
        Name: "ไซปรัส",
        Tag: false,
    },
    {
        Code: "275",
        Name: "ดินแดนภายใต้การปกครองของปาเลสไตน์",
        Tag: false,
    },
    {
        Code: "626",
        Name: "ติมอร์-เลสเต",
        Tag: false,
    },
    {
        Code: "792",
        Name: "ตุรกี",
        Tag: false,
    },
    {
        Code: "795",
        Name: "เติร์กเมนิสถาน",
        Tag: false,
    },
    {
        Code: "888",
        Name: "ไต้หวัน",
        Tag: false,
    },
    {
        Code: "762",
        Name: "ทาจิกิสถาน",
        Tag: false,
    },
    {
        Code: "524",
        Name: "เนปาล",
        Tag: false,
    },
    {
        Code: "096",
        Name: "บรูไนดารุสซาลาม",
        Tag: false,
    },
    {
        Code: "050",
        Name: "บังกลาเทศ",
        Tag: false,
    },
    {
        Code: "048",
        Name: "บาห์เรน",
        Tag: false,
    },
    {
        Code: "586",
        Name: "ปากีสถาน",
        Tag: false,
    },
    {
        Code: "064",
        Name: "ภูฏาน",
        Tag: false,
    },
    {
        Code: "496",
        Name: "มองโกเลีย",
        Tag: false,
    },
    {
        Code: "462",
        Name: "มัลดีฟส์",
        Tag: false,
    },
    {
        Code: "446",
        Name: "มาเก๊า  เขตบริหารพิเศษของจีน",
        Tag: false,
    },
    {
        Code: "458",
        Name: "มาเลเซีย",
        Tag: false,
    },
    {
        Code: "887",
        Name: "เยเมน",
        Tag: false,
    },
    {
        Code: "422",
        Name: "เลบานอน",
        Tag: false,
    },
    {
        Code: "144",
        Name: "ศรีลังกา",
        Tag: false,
    },
    {
        Code: "784",
        Name: "สหรัฐอาหรับเอมิเรตส์",
        Tag: false,
    },
    {
        Code: "410",
        Name: "สาธารณรัฐเกาหลี (เกาหลีใต้)",
        Tag: false,
    },
    {
        Code: "408",
        Name: "สาธารณรัฐประชาธิปไตยประชาชนเกาหลี (เกาหลีเหนือ)",
        Tag: false,
    },
    {
        Code: "760",
        Name: "สาธารณรัฐอาหรับซีเรีย",
        Tag: false,
    },
    {
        Code: "702",
        Name: "สิงคโปร์",
        Tag: false,
    },
    {
        Code: "004",
        Name: "อัฟกานิสถาน",
        Tag: false,
    },
    {
        Code: "031",
        Name: "อาเซอร์ไบจาน",
        Tag: false,
    },
    {
        Code: "051",
        Name: "อาร์เมเนีย",
        Tag: false,
    },
    {
        Code: "360",
        Name: "อินโดนีเซีย",
        Tag: false,
    },
    {
        Code: "368",
        Name: "อิรัก",
        Tag: false,
    },
    {
        Code: "376",
        Name: "อิสราเอล",
        Tag: false,
    },
    {
        Code: "364",
        Name: "อิหร่าน (สาธารณรัฐอิสลาม)",
        Tag: false,
    },
    {
        Code: "860",
        Name: "อุซเบกิสถาน",
        Tag: false,
    },
    {
        Code: "512",
        Name: "โอมาน",
        Tag: false,
    },
    {
        Code: "344",
        Name: "ฮ่องกง เขตบริหารพิเศษของจีน",
        Tag: false,
    },
    {
        Code: "831",
        Name: "เกิร์นซีย์",
        Tag: false,
    },
    {
        Code: "300",
        Name: "กรีซ",
        Tag: false,
    },
    {
        Code: "304",
        Name: "กรีนแลนด์",
        Tag: false,
    },
    {
        Code: "312",
        Name: "กวาเดอลูป",
        Tag: false,
    },
    {
        Code: "833",
        Name: "เกาะแมน",
        Tag: false,
    },
    {
        Code: "191",
        Name: "โครเอเชีย",
        Tag: false,
    },
    {
        Code: "832",
        Name: "เจอร์ซีย์",
        Tag: false,
    },
    {
        Code: "674",
        Name: "ซานมารีโน",
        Tag: false,
    },
    {
        Code: "654",
        Name: "เซนต์เฮเลนา",
        Tag: false,
    },
    {
        Code: "891",
        Name: "เซอร์เบียและมอนเตเนโกร",
        Tag: false,
    },
    {
        Code: "666",
        Name: "แซงปีแยร์และมีเกอลง",
        Tag: false,
    },
    {
        Code: "208",
        Name: "เดนมาร์ก",
        Tag: false,
    },
    {
        Code: "578",
        Name: "นอร์เวย์",
        Tag: false,
    },
    {
        Code: "540",
        Name: "นิวแคลิโดเนีย",
        Tag: false,
    },
    {
        Code: "528",
        Name: "เนเธอร์แลนด์",
        Tag: false,
    },
    {
        Code: "530",
        Name: "เนเธอร์แลนด์แอนทิลลิส",
        Tag: false,
    },
    {
        Code: "070",
        Name: "บอสเนียและเฮอร์เซโกวีนา",
        Tag: false,
    },
    {
        Code: "100",
        Name: "บัลแกเรีย",
        Tag: false,
    },
    {
        Code: "056",
        Name: "เบลเยียม",
        Tag: false,
    },
    {
        Code: "112",
        Name: "เบลารุส",
        Tag: false,
    },
    {
        Code: "060",
        Name: "เบอร์มิวดา",
        Tag: false,
    },
    {
        Code: "620",
        Name: "โปรตุเกส",
        Tag: false,
    },
    {
        Code: "616",
        Name: "โปแลนด์",
        Tag: false,
    },
    {
        Code: "250",
        Name: "ฝรั่งเศส",
        Tag: false,
    },
    {
        Code: "612",
        Name: "พิตแคร์น",
        Tag: false,
    },
    {
        Code: "246",
        Name: "ฟินแลนด์",
        Tag: false,
    },
    {
        Code: "254",
        Name: "เฟรนช์เกียนา",
        Tag: false,
    },
    {
        Code: "258",
        Name: "เฟรนช์โปลินีเซีย",
        Tag: false,
    },
    {
        Code: "500",
        Name: "มอนต์เซอร์รัต",
        Tag: false,
    },
    {
        Code: "470",
        Name: "มอลตา",
        Tag: false,
    },
    {
        Code: "175",
        Name: "มายอต",
        Tag: false,
    },
    {
        Code: "474",
        Name: "มาร์ตินีก",
        Tag: false,
    },
    {
        Code: "492",
        Name: "โมนาโก",
        Tag: false,
    },
    {
        Code: "292",
        Name: "ยิบรอลตาร์",
        Tag: false,
    },
    {
        Code: "804",
        Name: "ยูเครน",
        Tag: false,
    },
    {
        Code: "638",
        Name: "เรอูนียง",
        Tag: false,
    },
    {
        Code: "642",
        Name: "โรมาเนีย",
        Tag: false,
    },
    {
        Code: "442",
        Name: "ลักเซมเบิร์ก",
        Tag: false,
    },
    {
        Code: "428",
        Name: "ลัตเวีย",
        Tag: false,
    },
    {
        Code: "438",
        Name: "ลิกเตนสไตน์",
        Tag: false,
    },
    {
        Code: "440",
        Name: "ลิทัวเนีย",
        Tag: false,
    },
    {
        Code: "724",
        Name: "สเปน",
        Tag: false,
    },
    {
        Code: "703",
        Name: "สโลวะเกีย",
        Tag: false,
    },
    {
        Code: "705",
        Name: "สโลวีเนีย",
        Tag: false,
    },
    {
        Code: "756",
        Name: "สวิตเซอร์แลนด์",
        Tag: false,
    },
    {
        Code: "752",
        Name: "สวีเดน",
        Tag: false,
    },
    {
        Code: "643",
        Name: "สหพันธรัฐรัสเซีย",
        Tag: false,
    },
    {
        Code: "203",
        Name: "สาธารณรัฐเช็ก",
        Tag: false,
    },
    {
        Code: "498",
        Name: "สาธารณรัฐมอลโดวา",
        Tag: false,
    },
    {
        Code: "807",
        Name: "สาธารณรัฐยูโกสลาฟแห่งมาซิโดเนีย",
        Tag: false,
    },
    {
        Code: "830",
        Name: "หมู่เกาะแชนเนล",
        Tag: false,
    },
    {
        Code: "796",
        Name: "หมู่เกาะเติกส์และหมู่เกาะเคคอส",
        Tag: false,
    },
    {
        Code: "092",
        Name: "หมู่เกาะบริติชเวอร์จิน",
        Tag: false,
    },
    {
        Code: "238",
        Name: "หมู่เกาะฟอล์กแลนด์ (มาลบีนาส)",
        Tag: false,
    },
    {
        Code: "234",
        Name: "หมู่เกาะแฟโร",
        Tag: false,
    },
    {
        Code: "876",
        Name: "หมู่เกาะวาลลิสและหมู่เกาะฟุตูนา",
        Tag: false,
    },
    {
        Code: "744",
        Name: "หมู่เกาะสฟาลบาร์และยานไมเอน",
        Tag: false,
    },
    {
        Code: "248",
        Name: "หมู่เกาะโอลันด์",
        Tag: false,
    },
    {
        Code: "040",
        Name: "ออสเตรีย",
        Tag: false,
    },
    {
        Code: "020",
        Name: "อันดอร์รา",
        Tag: false,
    },
    {
        Code: "533",
        Name: "อารูบา",
        Tag: false,
    },
    {
        Code: "380",
        Name: "อิตาลี",
        Tag: false,
    },
    {
        Code: "233",
        Name: "เอสโตเนีย",
        Tag: false,
    },
    {
        Code: "660",
        Name: "แองกวิลลา",
        Tag: false,
    },
    {
        Code: "008",
        Name: "แอลเบเนีย",
        Tag: false,
    },
    {
        Code: "352",
        Name: "ไอซ์แลนด์",
        Tag: false,
    },
    {
        Code: "372",
        Name: "ไอร์แลนด์",
        Tag: false,
    },
    {
        Code: "336",
        Name: "ฮอลีซี",
        Tag: false,
    },
    {
        Code: "348",
        Name: "ฮังการี",
        Tag: false,
    },
    {
        Code: "320",
        Name: "กัวเตมาลา",
        Tag: false,
    },
    {
        Code: "328",
        Name: "กายอานา",
        Tag: false,
    },
    {
        Code: "308",
        Name: "เกรเนดา",
        Tag: false,
    },
    {
        Code: "188",
        Name: "คอสตาริกา",
        Tag: false,
    },
    {
        Code: "192",
        Name: "คิวบา",
        Tag: false,
    },
    {
        Code: "170",
        Name: "โคลอมเบีย",
        Tag: false,
    },
    {
        Code: "388",
        Name: "จาเมกา",
        Tag: false,
    },
    {
        Code: "152",
        Name: "ชิลี",
        Tag: false,
    },
    {
        Code: "740",
        Name: "ซูรินาเม",
        Tag: false,
    },
    {
        Code: "659",
        Name: "เซนต์คิตส์และเนวิส",
        Tag: false,
    },
    {
        Code: "662",
        Name: "เซนต์ลูเซีย",
        Tag: false,
    },
    {
        Code: "670",
        Name: "เซนต์วินเซนต์และเกรนาดีนส์",
        Tag: false,
    },
    {
        Code: "212",
        Name: "โดมินิกา",
        Tag: false,
    },
    {
        Code: "780",
        Name: "ตรินิแดดและโตเบโก",
        Tag: false,
    },
    {
        Code: "558",
        Name: "นิการากัว",
        Tag: false,
    },
    {
        Code: "076",
        Name: "บราซิล",
        Tag: false,
    },
    {
        Code: "052",
        Name: "บาร์เบโดส",
        Tag: false,
    },
    {
        Code: "044",
        Name: "บาฮามาส",
        Tag: false,
    },
    {
        Code: "084",
        Name: "เบลีซ",
        Tag: false,
    },
    {
        Code: "068",
        Name: "โบลิเวีย",
        Tag: false,
    },
    {
        Code: "591",
        Name: "ปานามา",
        Tag: false,
    },
    {
        Code: "600",
        Name: "ปารากวัย",
        Tag: false,
    },
    {
        Code: "604",
        Name: "เปรู",
        Tag: false,
    },
    {
        Code: "630",
        Name: "เปอร์โตริโก",
        Tag: false,
    },
    {
        Code: "484",
        Name: "เม็กซิโก",
        Tag: false,
    },
    {
        Code: "862",
        Name: "เวเนซุเอลา",
        Tag: false,
    },
    {
        Code: "214",
        Name: "สาธารณรัฐโดมินิกัน",
        Tag: false,
    },
    {
        Code: "032",
        Name: "อาร์เจนตินา",
        Tag: false,
    },
    {
        Code: "858",
        Name: "อุรุกวัย",
        Tag: false,
    },
    {
        Code: "218",
        Name: "เอกวาดอร์",
        Tag: false,
    },
    {
        Code: "222",
        Name: "เอลซัลวาดอร์",
        Tag: false,
    },
    {
        Code: "028",
        Name: "แอนติกาและบาร์บูดา",
        Tag: false,
    },
    {
        Code: "340",
        Name: "ฮอนดูรัส",
        Tag: false,
    },
    {
        Code: "332",
        Name: "เฮติ",
        Tag: false,
    },
    {
        Code: "316",
        Name: "กวม",
        Tag: false,
    },
    {
        Code: "124",
        Name: "แคนาดา",
        Tag: false,
    },
    {
        Code: "580",
        Name: "หมู่เกาะนอร์เทิร์นมาเรียนา",
        Tag: false,
    },
    {
        Code: '850',
        Name: "หมู่เกาะเวอร์จินของสหรัฐอเมริกา",
        Tag: false,
    },
    {
        Code: "016",
        Name: "อเมริกันซามัว",
        Tag: false,
    },
    {
        Code: "288",
        Name: "กานา",
        Tag: false,
    },
    {
        Code: "266",
        Name: "กาบอง",
        Tag: false,
    },
    {
        Code: "324",
        Name: "กินี",
        Tag: false,
    },
    {
        Code: "624",
        Name: "กินีบิสเซา",
        Tag: false,
    },
    {
        Code: "270",
        Name: "แกมเบีย",
        Tag: false,
    },
    {
        Code: "384",
        Name: "โกตดิวัวร์",
        Tag: false,
    },
    {
        Code: "178",
        Name: "คองโก",
        Tag: false,
    },
    {
        Code: "174",
        Name: "คอโมโรส",
        Tag: false,
    },
    {
        Code: "404",
        Name: "เคนยา",
        Tag: false,
    },
    {
        Code: "132",
        Name: "เคปเวิร์ด",
        Tag: false,
    },
    {
        Code: "120",
        Name: "แคเมอรูน",
        Tag: false,
    },
    {
        Code: "262",
        Name: "จิบูตี",
        Tag: false,
    },
    {
        Code: "148",
        Name: "ชาด",
        Tag: false,
    },
    {
        Code: "732",
        Name: "ซาฮาราตะวันตก",
        Tag: false,
    },
    {
        Code: "716",
        Name: "ซิมบับเว",
        Tag: false,
    },
    {
        Code: "736",
        Name: "ซูดาน",
        Tag: false,
    },
    {
        Code: "690",
        Name: "เซเชลส์",
        Tag: false,
    },
    {
        Code: "686",
        Name: "เซเนกัล",
        Tag: false,
    },
    {
        Code: "678",
        Name: "เซาตูเมและปรินซิปี",
        Tag: false,
    },
    {
        Code: "694",
        Name: "เซียร์ราลีโอน",
        Tag: false,
    },
    {
        Code: "894",
        Name: "แซมเบีย",
        Tag: false,
    },
    {
        Code: "706",
        Name: "โซมาเลีย",
        Tag: false,
    },
    {
        Code: "788",
        Name: "ตูนิเซีย",
        Tag: false,
    },
    {
        Code: "768",
        Name: "โตโก",
        Tag: false,
    },
    {
        Code: "516",
        Name: "นามิเบีย",
        Tag: false,
    },
    {
        Code: "566",
        Name: "ไนจีเรีย",
        Tag: false,
    },
    {
        Code: "562",
        Name: "ไนเจอร์",
        Tag: false,
    },
    {
        Code: "072",
        Name: "บอตสวานา",
        Tag: false,
    },
    {
        Code: "108",
        Name: "บุรุนดี",
        Tag: false,
    },
    {
        Code: "854",
        Name: "บูร์กินาฟาโซ",
        Tag: false,
    },
    {
        Code: "204",
        Name: "เบนิน",
        Tag: false,
    },
    {
        Code: "480",
        Name: "มอริเชียส",
        Tag: false,
    },
    {
        Code: "478",
        Name: "มอริเตเนีย",
        Tag: false,
    },
    {
        Code: "450",
        Name: "มาดากัสการ์",
        Tag: false,
    },
    {
        Code: "454",
        Name: "มาลาวี",
        Tag: false,
    },
    {
        Code: "466",
        Name: "มาลี",
        Tag: false,
    },
    {
        Code: "508",
        Name: "โมซัมบิก",
        Tag: false,
    },
    {
        Code: "504",
        Name: "โมร็อกโก",
        Tag: false,
    },
    {
        Code: "800",
        Name: "ยูกันดา",
        Tag: false,
    },
    {
        Code: "646",
        Name: "รวันดา",
        Tag: false,
    },
    {
        Code: "426",
        Name: "เลโซโท",
        Tag: false,
    },
    {
        Code: "430",
        Name: "ไลบีเรีย",
        Tag: false,
    },
    {
        Code: "748",
        Name: "สวาซิแลนด์",
        Tag: false,
    },
    {
        Code: "834",
        Name: "สหสาธารณรัฐแทนซาเนีย",
        Tag: false,
    },
    {
        Code: "180",
        Name: "สาธารณรัฐประชาธิปไตยคองโก",
        Tag: false,
    },
    {
        Code: "140",
        Name: "สาธารณรัฐแอฟริกากลาง",
        Tag: false,
    },
    {
        Code: "434",
        Name: "อาหรับลิเบีย",
        Tag: false,
    },
    {
        Code: "226",
        Name: "อิเควทอเรียลกินี",
        Tag: false,
    },
    {
        Code: "818",
        Name: "อียิปต์",
        Tag: false,
    },
    {
        Code: "231",
        Name: "เอธิโอเปีย",
        Tag: false,
    },
    {
        Code: "232",
        Name: "เอริเทรีย",
        Tag: false,
    },
    {
        Code: "024",
        Name: "แองโกลา",
        Tag: false,
    },
    {
        Code: "710",
        Name: "แอฟริกาใต้",
        Tag: false,
    },
    {
        Code: "012",
        Name: "แอลจีเรีย",
        Tag: false,
    },
    {
        Code: "574",
        Name: "เกาะนอร์ฟอล์ก",
        Tag: false,
    },
    {
        Code: "296",
        Name: "คิริบาตี",
        Tag: false,
    },
    {
        Code: "882",
        Name: "ซามัว",
        Tag: false,
    },
    {
        Code: "776",
        Name: "ตองกา",
        Tag: false,
    },
    {
        Code: "798",
        Name: "ตูวาลู",
        Tag: false,
    },
    {
        Code: "772",
        Name: "โตเกเลา",
        Tag: false,
    },
    {
        Code: "520",
        Name: "นาอูรู",
        Tag: false,
    },
    {
        Code: "554",
        Name: "นิวซีแลนด์",
        Tag: false,
    },
    {
        Code: "570",
        Name: "นีอูเอ",
        Tag: false,
    },
    {
        Code: "598",
        Name: "ปาปัวนิวกินี",
        Tag: false,
    },
    {
        Code: "585",
        Name: "ปาเลา",
        Tag: false,
    },
    {
        Code: "242",
        Name: "ฟิจิ",
        Tag: false,
    },
    {
        Code: "583",
        Name: "ไมโครนีเซีย (สหพันธรัฐ)",
        Tag: false,
    },
    {
        Code: "548",
        Name: "วานูอาตู",
        Tag: false,
    },
    {
        Code: "184",
        Name: "หมู่เกาะคุก",
        Tag: false,
    },
    {
        Code: "090",
        Name: "หมู่เกาะโซโลมอน",
        Tag: false,
    },
    {
        Code: "584",
        Name: "หมู่เกาะมาร์แชลล์",
        Tag: false,
    },
    {
        Code: "036",
        Name: "ออสเตรเลีย",
        Tag: false,
    },
    {
        Code: "901",
        Name: "กะเหรี่ยง",
        Tag: false,
    },
    {
        Code: "909",
        Name: "ขมุ",
        Tag: false,
    },
    {
        Code: "905",
        Name: "ไทยใหญ่/ส่วย/ลื้อ",
        Tag: false,
    },
    {
        Code: "902",
        Name: "ม้ง",
        Tag: false,
    },
    {
        Code: "908",
        Name: "เย้า",
        Tag: false,
    },
    {
        Code: "903",
        Name: "ละหู้",
        Tag: false,
    },
    {
        Code: "906",
        Name: "ลัว",
        Tag: false,
    },
    {
        Code: "907",
        Name: "ลูซู",
        Tag: false,
    },
    {
        Code: "904",
        Name: "อาข่า",
        Tag: false,
    },
    {
        Code: "998",
        Name: "ไม่มีสัญชาติ",
        Tag: true,
    },
    {
        Code: "999",
        Name: "ไม่ทราบ",
        Tag: true,
    },
]