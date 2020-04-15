export class Reservation {
    _id: string
    name: string
    telephone: string
    checkInDate: Date
    checkOutDate: Date
    rooms: RoomSelected[]
    reserve: number
    active: boolean
    note: string
    creationDateTime: Date
    lastUpdate: Date
}

export class RoomSelected {
    RoomNo: string
    Setting: SettingRoom
}

export class SettingRoom {
    HaveBreakfast: boolean
    HaveAddBreakfast: boolean
    AddBreakfastCount: number
    HaveExtraBed: boolean
    ExtraBedCount: number
    Discount: number
}

export class RoomActivated {
    _id: string
    GroupId: string
    RoomNo: string
    RoomType: string
    BedType: string
    Rate: number                     //(ราคาไม่รวมอาหารเช้า)
    ArrivalDate: Date
    Departure: Date
    Setting: SettingRoom
    Status: string                // จอง, เข้าพัก, คืนห้อง, ออก, ยกเลิก
    Active: boolean
    CreationDateTime: Date
    LastUpdate: Date
}

// export class Room {
//     _id: string
//     RoomType: RoomType
//     BedType: BedType
//     Rate: number
//     Status: string                // ว่าง, แจ้งซ่อม, ห้องพักผู้บริหา
// }