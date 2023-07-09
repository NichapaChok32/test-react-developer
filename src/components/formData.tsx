import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import type {
  DatePickerProps,
  InputProps,
  RadioGroupProps,
  SelectProps,
} from "antd";
import {
  Card,
  Button,
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
  Row,
  Col,
} from "antd";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import nationality from "./nationality.json";
import countryCode from "./countryCode.json";
import "./formData.scss";

import type { RootState } from "../store";
import { useDispatch } from "react-redux";
import { addData } from "./formDataSlice";
import type { FormInstance } from "antd/es/form";

const dateFormat = "DD/MM/YYYY";

export default function FormData() {
  let { lang } = useParams();
  const { i18n, t } = useTranslation();
  i18n.changeLanguage(lang);

  const [countryCodeStr, setCountryCodeStr] = useState("");
  const formData = {
    title: "",
    firstName: "",
    lastName: "",
    birthDate: "01/01/2023",
    nationality: "",
    idCard: "",
    gender: "",
    phoneNumber: "",
    passportId: "",
    salary: 0,
  };
  const dispatch = useDispatch();

  let idCard1 = "";
  let idCard2 = "";
  let idCard3 = "";
  let idCard4 = "";
  let idCard5 = "";

  let mobile = "";

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    formData.birthDate = dateString;
  };

  const onChangeTitle: SelectProps["onChange"] = (title) => {
    formData.title = title;
  };

  const onKeyDownName: InputProps["onChange"] = (e) => {
    formData.firstName = e.target.value;
  };

  const onKeyDownLast: InputProps["onChange"] = (e) => {
    formData.lastName = e.target.value;
  };

  const onChangeRegion: SelectProps["onChange"] = (region) => {
    formData.nationality = region;
  };

  const onChangeGender: RadioGroupProps["onChange"] = (e) => {
    formData.gender = e.target.value;
  };

  const onKeyDownPassport: InputProps["onChange"] = (e) => {
    formData.passportId = e.target.value;
  };

  const onKeyDownSalary: InputProps["onChange"] = (e) => {
    formData.salary = parseInt(e.target.value);
  };

  const setIdcard1: InputProps["onChange"] = (e) => {
    idCard1 = e.target.value;
  };
  const setIdcard2: InputProps["onChange"] = (e) => {
    idCard2 = e.target.value;
  };
  const setIdcard3: InputProps["onChange"] = (e) => {
    idCard3 = e.target.value;
  };
  const setIdcard4: InputProps["onChange"] = (e) => {
    idCard4 = e.target.value;
  };
  const setIdcard5: InputProps["onChange"] = (e) => {
    idCard5 = e.target.value;
  };

  const setMobile: InputProps["onChange"] = (e) => {
    mobile = e.target.value;
  };

  const handleSumbit = (e: Event) => {
    console.log(formData);
    if (idCard1 || idCard2 || idCard3 || idCard4 || idCard5) {
      formData.idCard = idCard1 + idCard2 + idCard3 + idCard4 + idCard5;
    }
    formData.phoneNumber = countryCodeStr + mobile;
    dispatch(addData(formData));
  };

  return (
    <Card className="formData">
      <Form
        name="FormData"
        layout="inline"
        style={{ maxWidth: "none" }}
        onFinish={handleSumbit}
      >
        <Form.Item
          label={t("title")}
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
          className="formItem"
        >
          <Select
            placeholder={t("title")}
            allowClear
            options={[
              { value: "Mr", label: t("mister") },
              { value: "Ms", label: t("miss") },
              { value: "Mrs", label: t("mistress") },
            ]}
            onChange={onChangeTitle}
          ></Select>
        </Form.Item>
        <Form.Item
          label={t("firstname")}
          name="firstname"
          rules={[{ required: true, message: "Please input your firstname!" }]}
          className="formItem"
        >
          <Input className="inputName" onChange={onKeyDownName}></Input>
        </Form.Item>
        <Form.Item
          label={t("lastname")}
          name="lastname"
          rules={[{ required: true, message: "Please input your lastname!" }]}
          className="formItem"
        >
          <Input className="inputName" onChange={onKeyDownLast}></Input>
        </Form.Item>
        <Form.Item
          label={t("birthday")}
          name="birthday"
          rules={[{ required: true, message: "Please input your birthday!" }]}
          className="formItem"
        >
          <DatePicker
            defaultValue={dayjs(formData.birthDate, dateFormat)}
            format={dateFormat}
            onChange={onChangeDate}
          />
        </Form.Item>
        <Form.Item
          label={t("nationality")}
          name="nationality"
          rules={[
            { required: true, message: "Please input your nationality!" },
          ]}
          className="formItem"
        >
          <Select
            placeholder={t("nationality")}
            allowClear
            options={nationality}
            className="selectNationality"
            onChange={onChangeRegion}
          ></Select>
        </Form.Item>
        <Form.Item label={t("idcard")} name="idcard" className="formItem">
          <Row gutter={8}>
            <Col>
              <Input onChange={setIdcard1}></Input>
            </Col>
            <Col>
              <span> - </span>
            </Col>
            <Col>
              <Input onChange={setIdcard2}></Input>
            </Col>
            <Col>
              <span> - </span>
            </Col>
            <Col>
              <Input onChange={setIdcard3}></Input>
            </Col>
            <Col>
              <span> - </span>
            </Col>
            <Col>
              <Input onChange={setIdcard4}></Input>
            </Col>
            <Col>
              <span> - </span>
            </Col>
            <Col>
              <Input onChange={setIdcard5}></Input>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          label={t("gender")}
          name="gender"
          rules={[{ required: true, message: "Please input your gender!" }]}
          className="formItem"
        >
          <Radio.Group onChange={onChangeGender}>
            <Radio value={"male"}>{t("male")}</Radio>
            <Radio value={"female"}>{t("female")}</Radio>
            <Radio value={"not specified"}>{t("genderless")}</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label={t("phonenumber")}
          name="phonenumber"
          rules={[{ required: true, message: "Please input your mobile!" }]}
          className="formItem formItemLast"
        >
          <Row gutter={8}>
            <Col>
              <Select
                placeholder={t("countryCode")}
                allowClear
                options={countryCode}
                className="selectCode"
                onChange={setCountryCodeStr}
              ></Select>
            </Col>
            <Col>
              <span> - </span>
            </Col>
            <Col>
              <Input onChange={setMobile}></Input>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label={t("passport")} name="passport" className="formItem">
          <Input className="inputName" onChange={onKeyDownPassport}></Input>
        </Form.Item>
        <Form.Item
          label={t("salary")}
          name="salary"
          rules={[
            { required: true, message: "Please input your expect salary!" },
          ]}
          className="formItem formItemLast"
        >
          <Input className="salaryInput" onChange={onKeyDownSalary}></Input>
        </Form.Item>
        <Form.Item className="formItem formItemAction">
          <Button type="primary" htmlType="submit" className="btnSubmit">
            {t("sendData")}
          </Button>
          <Button htmlType="button">{t("clearData")}</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
