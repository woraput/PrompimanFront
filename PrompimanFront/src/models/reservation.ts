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
    roomNo: string
    setting: SettingRoom
}

export class SettingRoom {
    haveBreakfast: boolean
    haveAddBreakfast: boolean
    addBreakfastCount: number
    haveExtraBed: boolean
    extraBedCount: number
    discount: number
}

export class RoomActivated {
    _id: string
    groupId: string
    roomNo: string
    roomType: string
    bedType: string
    rate: number                     //(ราคาไม่รวมอาหารเช้า)
    arrivalDate: Date
    departure: Date
    setting: SettingRoom
    status: string                // จอง, เข้าพัก, คืนห้อง, ออก, ยกเลิก
    active: boolean
    creationDateTime: Date
    lastUpdate: Date
}

export class Room {
    _id: string
    RoomType: number
    BedType: number
    Rate: number
    Status: string                // ว่าง, แจ้งซ่อม, ห้องพักผู้บริหา
}

export class DateRequest {
    CheckInDate: Date
    CheckOutDate: Date

}