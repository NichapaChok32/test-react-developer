import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Title",
      firstname: "Firstname",
      lastname: "Lastname",
      birthday: "Birthday",
      nationality: "nationality",
      idcard: "ID Card",
      gender: "Gender",
      phonenumber: "Mobile Number",
      passport: "Passport",
      salary: "Expected Salary",
      male: "male",
      female: "female",
      genderless: "not specified",
      clearData: "Clear",
      sendData: "Send",
      mainpage: "Main Page",
      selectAll: "Select All",
      deleteData: "Delete",
      manage: "Actions",
      mister: "Mr.",
      miss: "Ms.",
      mistress: "Mrs.",
      test1: "Test 1",
      test2: "Test 2",
      layout: "Layout & Style",
      form: "Form & Table",
      shapeBtn: "Move shape",
      positionBtn: "Move position",
    },
  },
  th: {
    translation: {
      title: "คำนำหน้า",
      firstname: "ชื่อจริง",
      lastname: "นามสกุล",
      birthday: "วันเกิด",
      nationality: "สัญชาติ",
      idcard: "เลขบัตรประชาชน",
      gender: "เพศ",
      phonenumber: "หมายเลขโทรศัพท์มือถือ",
      passport: "หนังสือเดินทาง",
      salary: "เงินเดือนที่คาดหวัง",
      male: "ผู้ชาย",
      female: "ผู้หญิง",
      genderless: "ไม่ระบุ",
      clearData: "ล้างข้อมูล",
      sendData: "ส่งข้อมูล",
      mainpage: "หน้าหลัก",
      selectAll: "เลือกทั้งหมด",
      deleteData: "ลบข้อมูล",
      manage: "จัดการ",
      mister: "นาย",
      miss: "นางสาว",
      mistress: "นาง",
      test1: "แบบทดสอบที่ 1",
      test2: "แบบทดสอบที่ 2",
      layout: "การจัดการหน้าเว็บ",
      form: "การจัดการหน้าฟอร์ม",
      shapeBtn: "เลือกรูปแบบ",
      positionBtn: "เปลี่ยนตำแหน่ง",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "th",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
